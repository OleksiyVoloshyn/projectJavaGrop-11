document.addEventListener('DOMContentLoaded', () => {
    const accordion = new Accordion('.accordion-container', {
        duration: 300,
        showMultiple: false,
        elementClass: 'ac',
        triggerClass: 'ac-trigger',
        panelClass: 'ac-panel',
        activeClass: 'is-active',
        onOpen: (currentElement) => {
            updateIcon(currentElement.querySelector('.icon'), true); // Змінюємо іконку при відкритті
        },
        onClose: (currentElement) => {
            updateIcon(currentElement.querySelector('.icon'), false); // Змінюємо іконку при закритті
        },
    });

    // Функція для зміни іконок SVG
    function updateIcon(icon, isOpen) {
        if (icon) {
            const useElement = icon.querySelector('use');
            if (useElement) {
                useElement.setAttribute(
                    'href',
                    isOpen
                        ? '/src/img/icon.svg#icon-arrowDOWN' // Іконка при відкритті
                        : '/src/img/icon.svg#icon-arrowUP'  // Іконка при закритті
                );
            }
        }
    }

    // Сховати псевдоелемент ::after
    const style = document.createElement('style');
    style.textContent = `.ac .ac-trigger::after { display: none !important; }`;
    document.head.appendChild(style);
});
