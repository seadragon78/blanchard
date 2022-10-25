// ОСНОВНОЕ МЕНЮ

let headerBtn = document.querySelector('.mobile-search');
let closeBtn = document.querySelector('.form-mobile__btn');
let headerForm = document.querySelector('.header-form');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuBtn = document.querySelector('.burger__line');

headerBtn.addEventListener('click', function (e) {
  headerForm.classList.add('form-active');
});

closeBtn.addEventListener('click', function (e) {
  headerForm.classList.remove('form-active');
})

burger.addEventListener('click', function () {
  burger.classList.toggle('burger-active');
  menu.classList.toggle('header-nav-active');
});

menuBtn.addEventListener('click', function () {
  menuBtn.classList.remove('burg-btn-active');
  burger.classList.remove('burger-active');
  menu.classList.remove('header-nav-active');
})



// ВЫПАДАЮЩЕЕ ВЕРХНЕЕ МЕНЮ
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
})


const btns = document.querySelectorAll(".promo-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

// ПРОМО-СЛАЙДЕР
let swiper = new Swiper(".promo-slider__container", {
  loop: true,
});

// ФИЛЬТР ГАЛЕРЕИ
const element = document.querySelector('.gallery-select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
});

// СЛАЙДЕР ГАЛЕРЕИ
let gallerySlider = new Swiper(".gallery-slider__container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction"
  },
  navigation: {
    prevEl: ".gallery-prev",
    nextEl: ".gallery-next",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
});

// СЛАЙДЕР СОБЫТИЙ
let eventsSlider = new Swiper(".events-slider__container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  navigation: {
    nextEl: ".events-next",
    prevEl: ".events-prev"
  },

  pagination: {
    el: ".events__pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
});


// МОДАЛЬНОЕ ОКНО

let galBtns = document.querySelectorAll('.gallery-slide');
let modals = document.querySelector('.modal-wrapper');
let modalBtn = document.querySelector('.modal-close-btn');

galBtns.forEach((el) => {

  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    modals.classList.add('modal-active');
  });
});

modalBtn.addEventListener('click', (e) => {
  modals.classList.remove('modal-active');
});

// АККОРДИОНЫ
document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
    openOnInit: [0],
    collapse: false
  });
})

// ВЫБОР ХУДОЖНИКА
let tabsSteps = document.querySelectorAll('.drawer-choise__name');
let steps = document.querySelectorAll('.drawer__wrap');

tabsSteps.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsSteps.forEach(function (btn) { btn.classList.remove('drawer-active') });
    e.currentTarget.classList.add('drawer-active');

    steps.forEach(function (element) { element.classList.remove('drawer-visible') });
    document.querySelector(`[data-target="${path}"]`).classList.add('drawer-visible');
  });
});


// СЛАЙДЕР ПАРТНЕРОВ
let projectsSlider = new Swiper(".partners-slider__container", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    prevEl: ".partners-prev",
    nextEl: ".partners-next",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
});

// ВАЛИДАЦИЯ ФОРМЫ

let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7 (999)999-99-99");

im.mask(selector);

const validation = new JustValidate('.order-form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
  ])

  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
  ])

tippy('#typeOne', {
  content: 'Пример современных тенденций — современная методология разработки',
  theme: 'semi-violet',
  maxWidth: 264,
});

tippy('#typeTwo', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'semi-violet',
  maxWidth: 264,
});

tippy('#typeThree', {
  content: 'В стремлении повысить качество',
  theme: 'semi-violet',
  maxWidth: 232,
});

tippy('#typeFour', {
  content: 'Пример современных тенденций — современная методология разработки',
  theme: 'semi-violet',
  maxWidth: 264,
});

tippy('#typeFive', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'semi-violet',
  maxWidth: 264,
});

tippy('#typeSix', {
  content: 'В стремлении повысить качество',
  theme: 'semi-violet',
  maxWidth: 232,
});


