import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0], 
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach((item) => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
 
      items.forEach((el) => {
        if (el !== item) {
          el.classList.remove('open');
        }
      });

      item.classList.toggle('open');
    });
  });

  const firstItem = document.querySelector('.accordion-item');
  if (firstItem) {
    firstItem.classList.add('open');
  }
});