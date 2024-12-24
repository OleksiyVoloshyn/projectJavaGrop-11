// Функція для роботи з акордеоном
function toggleAboutMe(clickedElement) {
  // Отримуємо всі елементи списку
  const allItems = document.querySelectorAll('.about-me-content');
  const allToggles = document.querySelectorAll('.about-me-click');

  // Закриваємо всі елементи
  allItems.forEach((item) => {
    item.classList.remove('open');
    item.style.maxHeight = null;
  });

  allToggles.forEach((toggle) => {
    toggle.classList.remove('open');
  });

  // Перевіряємо, чи вже відкритий поточний елемент
  const content = clickedElement.nextElementSibling;
  if (!content.classList.contains('open')) {
    // Відкриваємо поточний елемент
    content.classList.add('open');
    clickedElement.classList.add('open');
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// Автоматично відкриваємо перший елемент при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const firstToggle = document.querySelector('.about-me .about-me-click');
  const firstContent = document.querySelector('.about-me .about-me-content');
  
  if (firstToggle && firstContent) {
    firstToggle.classList.add('open');
    firstContent.classList.add('open');
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
  }
});
