document.addEventListener('DOMContentLoaded', () => {
    const accordion = new Accordion('.accordion-container', {
        duration: 300, // Тривалість анімації в мілісекундах
        showMultiple: false, // Тільки одна активна панель
        elementClass: 'ac',
        triggerClass: 'ac-trigger',
        panelClass: 'ac-panel',
        activeClass: 'is-active',
        onOpen: (element) => {
            const panel = element.querySelector('.ac-panel');
            if (panel) {
                // Установить высоту, равную высоте контента
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.overflow = "visible";
            }
        },
        onClose: (element) => {
            const panel = element.querySelector('.ac-panel');
            if (panel) {
                // Скрыть панель, сбросив высоту
                panel.style.maxHeight = null;
                panel.style.overflow = "hidden";
            }
        }
    });

    // Сховати псевдоелемент ::after
    const style = document.createElement('style');
    style.textContent = `.ac .ac-trigger::after { display: none !important; }`;
    document.head.appendChild(style);
});
