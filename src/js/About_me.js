function toggleAboutMe(header) {
  const content = header.nextElementSibling;
  content.classList.toggle('open');
  header.classList.toggle('open');
}