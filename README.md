
# Blog Protec

It is a small website that lists blogs, you can see the detail, it manages to perform a search and allows you to add a new post.


## Authors

- [@fcodvlpr](https://github.com/fcodvlpr)


## 🚀 About Me
Hi, my name is Francisco de la Cruz, Computer Systems Engineer, I am currently in the IT area where I work as a Full Stack Developer. 

DB Administrator, Cloud Services, Microservices, API, Mobile APP Development, among others. 

In the same way I lead a group of colleagues in improving the functionality of various projects. I also take control, monitoring and maintenance of some microservices, API's and App's both mobile and web.


## Features

- Live previews
- Fullscreen mode
- Cross platform


## Roadmap

- Additional browser support


## API Reference

#### Get all items

```http
  GET /api/blogs
```

#### Get item

```http
  GET /api/blogs/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Search items

```http
  GET /api/search/${term}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `term`    | `string` | **Required**. Term to search      |


#### Add new item

```http
  POST /api/blogs
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required**. Title of item       |
| `author`  | `string` | **Required**. Author of item      |
| `content` | `string` | **Required**. Content of item     |
| `image`   | `string` | **Required**. image of item       |

## Run Locally
Install XAMPP

- [How install XAMPP](https://www.ionos.mx/digitalguide/servidores/herramientas/instala-tu-servidor-local-xampp-en-unos-pocos-pasos/)

Clone the project

```bash
  git clone https://github.com/fcodvlpr/blog_protec.git
```

Go to the project directory

```bash
  cd blog_protec
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start

  php -S http://127.1.2.3:4567 -t public
```

## Import DB

*The database is scripted under the following path:* **blog_protec/db/**

*Name database:* **blog.sql**

- [How import Database](https://help.one.com/hc/es/articles/115005588189--C%C3%B3mo-importar-una-base-de-datos-a-phpMyAdmin-)

## Tech Stack

**Client:** 
- [React](https://es.react.dev/)
- [Redux](https://redux.js.org/)
- [Bootstrap](https://getbootstrap.com/)
- [CKeditor](https://ckeditor.com/)
- [Vite](https://vitejs.dev/)
- [Fortawesome](https://fortawesome.com/)
- [SASS](https://sass-lang.com/)
- [Axios](https://axios-http.com/es/docs/intro)
- [React Router Dom](https://reactrouter.com/en/main)


**Server:**
- [Node](https://nodejs.org/en)
- [Laravel](https://laravel.com/)
- [MySql](https://www.mysql.com/)
- [Phph](https://www.php.net/manual/es/intro-whatis.php)


## Screenshots

### Home
![Home](https://raw.githubusercontent.com/fcodvlpr/blog_protec/main/preview/home.jpeg)

### Details
![Details](https://raw.githubusercontent.com/fcodvlpr/blog_protec/main/preview/details.jpeg)

### Find
![Find](https://raw.githubusercontent.com/fcodvlpr/blog_protec/main/preview/find.jpeg)

### New Post
![New Post](https://raw.githubusercontent.com/fcodvlpr/blog_protec/main/preview/new_post.jpeg)

### Button new post
![Button New Post](https://raw.githubusercontent.com/fcodvlpr/blog_protec/main/preview/button_add_new_post.jpeg)
