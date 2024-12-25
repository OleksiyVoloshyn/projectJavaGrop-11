import "./js/helper";

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-p', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next-p',
      prevEl: '.swiper-button-prev-p',
    },
    pagination: {
      el: '.swiper-pagination-p',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: true,
    on: {
      init: function () {
        updateButtonsState(this);
      },
      slideChange: function () {
        updateButtonsState(this);
      },
    },
  });

  function updateButtonsState(swiperInstance) {
    const prevButton = document.querySelector('.swiper-button-prev-p');
    const nextButton = document.querySelector('.swiper-button-next-p');

    if (swiperInstance.isBeginning) {
      prevButton.setAttribute('disabled', 'true');
      prevButton.classList.add('disabled');
    } else {
      prevButton.removeAttribute('disabled');
      prevButton.classList.remove('disabled');
    }

    if (swiperInstance.isEnd) {
      nextButton.setAttribute('disabled', 'true');
      nextButton.classList.add('disabled');
    } else {
      nextButton.removeAttribute('disabled');
      nextButton.classList.remove('disabled');
    }
  }
});
