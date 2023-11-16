export const crearURL = slug => {
  slug = slug.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();

  slug = slug.replace(/^\s+|\s+$/gm, '');

  slug = slug.replace(/\s+/g, '-');

  return slug;

}

export const formatDate = dateIn => {
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateLanguage = 'en-US';
  const dateNew = new Date(dateIn);

  return dateNew.toLocaleDateString(dateLanguage, optionsDate);
}