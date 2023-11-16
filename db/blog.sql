-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2023 a las 13:56:26
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `find_blog_by_id` (IN `blog_id_in` INTEGER)   BEGIN
	SELECT * FROM blogs WHERE blog_id = blog_id_in;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `save_blog` (IN `title_in` VARCHAR(225), IN `author_in` VARCHAR(225), IN `content_in` TEXT, IN `image_in` TINYTEXT)   BEGIN
	INSERT INTO 
      `blogs`
    (
      `title`,
      `author`,
      `content`,
      `image`
    ) 
    VALUE (
      title_in,
      author_in,
      content_in,
      image_in
    );
  
	SELECT LAST_INSERT_ID() AS ID_BLOG;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `search_blogs` (IN `search_term` VARCHAR(225))   BEGIN
  	SELECT b.*
    FROM blogs AS b
    WHERE 
      b.`author` LIKE CONCAT('%', search_term, '%') OR 
      b.`title` LIKE CONCAT('%', search_term, '%') OR 
      b.`content` LIKE CONCAT('%', search_term, '%');
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blogs`
--

CREATE TABLE `blogs` (
  `blog_id` int(11) NOT NULL COMMENT 'Primary key to each item',
  `title` varchar(225) NOT NULL COMMENT 'Title of blog',
  `author` varchar(225) NOT NULL COMMENT 'Author of blog',
  `content` text NOT NULL COMMENT 'Content of blog',
  `image` tinytext NOT NULL COMMENT 'Image of blog',
  `start_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `blogs`
--

INSERT INTO `blogs` (`blog_id`, `title`, `author`, `content`, `image`, `start_date`, `update_date`) VALUES
(6, 'Primer Blog', 'Francisco de la Cruz', '<p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero\'s <i>De Finibus</i> in order to provide placeholder text to mockup various fonts for a type specimen book.</p><p>It\'s difficult to find examples of <i>lorem ipsum</i> in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the <i>lorem ipsum</i> passage in a book of old metal type samples. So far he hasn\'t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p><p>And anyways, as <a href=\"https://www.straightdope.com/columns/read/2290/what-does-the-filler-text-lorem-ipsum-mean/\">Cecil Adams reasoned</a>, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.</p><p>McClintock <a href=\"http://www.loremipsum.de/about_lorem_ipsum.html\">wrote</a> to <i>Before &amp; After</i> to explain his discovery;</p><blockquote><p><i>“What I find remarkable is that this text has been the industry\'s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional \'ing\' or \'y\' thrown in. It\'s ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase \'it\'s Greek to me\' and \'</i><a href=\"https://en.wikipedia.org/wiki/Greeking\"><i>greeking</i></a><i>\' have common semantic roots!” (The editors published his letter in a correction headlined “Lorem Oopsum”).</i></p></blockquote><p>As an <a href=\"https://www.deepadvantage.com/blog/lorem-ipsum/\">alternative theory</a>, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of <i>De Finibus</i> which challenges McClintock\'s 15th century claims and suggests that the dawn of <i>lorem ipsum</i> was as recent as the 20th century. The 1914 Loeb Classical Library Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling with “do-”, while another begins with the now ubiquitous “lorem ipsum”.</p><p>Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it\'s admittedly an odd way for Cicero to sail into the 21st century.</p>', 'https://images.pexels.com/photos/19092965/pexels-photo-19092965/free-photo-of-turista-pescador-estanbul-camii.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-11-14 21:51:05', '2023-11-14 21:51:05'),
(7, 'Segundo Blog', 'Francisco de la Cruz', '<p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero\'s <i>De Finibus</i> in order to provide placeholder text to mockup various fonts for a type specimen book.</p><p>It\'s difficult to find examples of <i>lorem ipsum</i> in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the <i>lorem ipsum</i> passage in a book of old metal type samples. So far he hasn\'t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p><p>And anyways, as <a href=\"https://www.straightdope.com/columns/read/2290/what-does-the-filler-text-lorem-ipsum-mean/\">Cecil Adams reasoned</a>, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.</p><p>McClintock <a href=\"http://www.loremipsum.de/about_lorem_ipsum.html\">wrote</a> to <i>Before &amp; After</i> to explain his discovery;</p><blockquote><p><i>“What I find remarkable is that this text has been the industry\'s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional \'ing\' or \'y\' thrown in. It\'s ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase \'it\'s Greek to me\' and \'</i><a href=\"https://en.wikipedia.org/wiki/Greeking\"><i>greeking</i></a><i>\' have common semantic roots!” (The editors published his letter in a correction headlined “Lorem Oopsum”).</i></p></blockquote><p>As an <a href=\"https://www.deepadvantage.com/blog/lorem-ipsum/\">alternative theory</a>, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of <i>De Finibus</i> which challenges McClintock\'s 15th century claims and suggests that the dawn of <i>lorem ipsum</i> was as recent as the 20th century. The 1914 Loeb Classical Library Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling with “do-”, while another begins with the now ubiquitous “lorem ipsum”.</p><p>Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it\'s admittedly an odd way for Cicero to sail into the 21st century.</p>', 'https://images.pexels.com/photos/18931085/pexels-photo-18931085/free-photo-of-mar-playa-vacaciones-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-11-14 21:51:57', '2023-11-14 21:51:57'),
(8, 'Tercer blog', 'Amado Nervo', '<p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero\'s <i>De Finibus</i> in order to provide placeholder text to mockup various fonts for a type specimen book.</p><p>It\'s difficult to find examples of <i>lorem ipsum</i> in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the <i>lorem ipsum</i> passage in a book of old metal type samples. So far he hasn\'t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p><p>And anyways, as <a href=\"https://www.straightdope.com/columns/read/2290/what-does-the-filler-text-lorem-ipsum-mean/\">Cecil Adams reasoned</a>, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.</p><p>McClintock <a href=\"http://www.loremipsum.de/about_lorem_ipsum.html\">wrote</a> to <i>Before &amp; After</i> to explain his discovery;</p><blockquote><p><i>“What I find remarkable is that this text has been the industry\'s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional \'ing\' or \'y\' thrown in. It\'s ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase \'it\'s Greek to me\' and \'</i><a href=\"https://en.wikipedia.org/wiki/Greeking\"><i>greeking</i></a><i>\' have common semantic roots!” (The editors published his letter in a correction headlined “Lorem Oopsum”).</i></p></blockquote><p>As an <a href=\"https://www.deepadvantage.com/blog/lorem-ipsum/\">alternative theory</a>, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of <i>De Finibus</i> which challenges McClintock\'s 15th century claims and suggests that the dawn of <i>lorem ipsum</i> was as recent as the 20th century. The 1914 Loeb Classical Library Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling with “do-”, while another begins with the now ubiquitous “lorem ipsum”.</p><p>Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it\'s admittedly an odd way for Cicero to sail into the 21st century.</p>', 'https://images.pexels.com/photos/18869171/pexels-photo-18869171/free-photo-of-contemplando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2023-11-15 19:41:52', '2023-11-15 19:41:52'),
(9, 'Origins and Discovery', 'Ange de la Cruz', '<p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero\'s <i>De Finibus</i> in order to provide placeholder text to mockup various fonts for a type specimen book.</p><p>It\'s difficult to find examples of <i>lorem ipsum</i> in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the <i>lorem ipsum</i> passage in a book of old metal type samples. So far he hasn\'t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p><p>And anyways, as <a href=\"https://www.straightdope.com/columns/read/2290/what-does-the-filler-text-lorem-ipsum-mean/\">Cecil Adams reasoned</a>, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.</p><p>McClintock <a href=\"http://www.loremipsum.de/about_lorem_ipsum.html\">wrote</a> to <i>Before &amp; After</i> to explain his discovery;</p><blockquote><p><i>“What I find remarkable is that this text has been the industry\'s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional \'ing\' or \'y\' thrown in. It\'s ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase \'it\'s Greek to me\' and \'</i><a href=\"https://en.wikipedia.org/wiki/Greeking\"><i>greeking</i></a><i>\' have common semantic roots!” (The editors published his letter in a correction headlined “Lorem Oopsum”).</i></p></blockquote><p>As an <a href=\"https://www.deepadvantage.com/blog/lorem-ipsum/\">alternative theory</a>, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of <i>De Finibus</i> which challenges McClintock\'s 15th century claims and suggests that the dawn of <i>lorem ipsum</i> was as recent as the 20th century. The 1914 Loeb Classical Library Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling with “do-”, while another begins with the now ubiquitous “lorem ipsum”.</p><p>Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it\'s admittedly an odd way for Cicero to sail into the 21st century.</p>', 'https://images.unsplash.com/photo-1699019950419-ffe12ae956c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-11-16 05:53:04', '2023-11-16 05:53:04'),
(10, 'Fuzzy Beginnings', 'Fuzzy Beginnings', '<p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero\'s <i>De Finibus</i> in order to provide placeholder text to mockup various fonts for a type specimen book.</p><p>It\'s difficult to find examples of <i>lorem ipsum</i> in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the <i>lorem ipsum</i> passage in a book of old metal type samples. So far he hasn\'t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p><p>And anyways, as <a href=\"https://www.straightdope.com/columns/read/2290/what-does-the-filler-text-lorem-ipsum-mean/\">Cecil Adams reasoned</a>, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.</p><p>McClintock <a href=\"http://www.loremipsum.de/about_lorem_ipsum.html\">wrote</a> to <i>Before &amp; After</i> to explain his discovery;</p><blockquote><p><i>“What I find remarkable is that this text has been the industry\'s standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional \'ing\' or \'y\' thrown in. It\'s ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase \'it\'s Greek to me\' and \'</i><a href=\"https://en.wikipedia.org/wiki/Greeking\"><i>greeking</i></a><i>\' have common semantic roots!” (The editors published his letter in a correction headlined “Lorem Oopsum”).</i></p></blockquote><p>As an <a href=\"https://www.deepadvantage.com/blog/lorem-ipsum/\">alternative theory</a>, (and because Latin scholars do this sort of thing) someone tracked down a 1914 Latin edition of <i>De Finibus</i> which challenges McClintock\'s 15th century claims and suggests that the dawn of <i>lorem ipsum</i> was as recent as the 20th century. The 1914 Loeb Classical Library Edition ran out of room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself). Thus, the truncated phrase leaves one page dangling with “do-”, while another begins with the now ubiquitous “lorem ipsum”.</p><p>Whether a medieval typesetter chose to garble a well-known (but non-Biblical—that would have been sacrilegious) text, or whether a quirk in the 1914 Loeb Edition inspired a graphic designer, it\'s admittedly an odd way for Cicero to sail into the 21st century.</p>', 'https://images.unsplash.com/photo-1699453223942-dfead4b64e24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2023-11-16 05:57:56', '2023-11-16 05:57:56');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`blog_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary key to each item', AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
