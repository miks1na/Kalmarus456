const swiper = new Swiper('.swiper__run', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // // If we need pagination
  pagination: {
    el: '.run-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-run',
    prevEl: '.swiper-button-prev-run',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
const swiper2 = new Swiper('.swiper__pers', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // // If we need pagination
  pagination: {
    el: '.pers-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-pers',
    prevEl: '.swiper-button-prev-pers',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
let play = document.querySelectorAll('.header__play');
let logo = document.querySelector('.header__logo img')
document.addEventListener('scroll', () => {
  if(window.scrollY > 500) {
    play.forEach(pl => {
      pl.classList.add('header__play-active')
    })
    logo.setAttribute('src', '/images/lunapark.png')
  } else if (window.scrollY < 500){
    play.forEach(pl => {
      pl.classList.remove('header__play-active')
    })
    logo.setAttribute('src', '/images/kalmarus456.png')
  }
})
let count = document.querySelector('.header__flag')
let countr = document.querySelector('.header__countries')
let close = document.querySelector('.close--two')

count.addEventListener('click', (e) => {
  e.stopPropagation()
  e.preventDefault()
  countr.classList.toggle('header__flag-active')
})
close.addEventListener('click', (e) => {
  e.preventDefault()
  countr.classList.remove('header__flag-active')
})
document.addEventListener('click', (e) => {
  if(countr.classList.contains('header__flag-active') && e.target !== countr && e.target.closest(countr)) {
    countr.classList.remove('header__flag-active')
  }
})

const animItems = document.querySelectorAll('.anim__item')
if (animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    console.log(window.scrollY)
    for (let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if(( window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      }else{
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
let popup = document.querySelector('.popup')
let over = document.querySelector('.over')
let footerPopup = document.querySelector('.footer__popup')

footerPopup.addEventListener('click', (e) => {
  e.preventDefault()
  over.classList.add('over__active')
  popup.classList.add('popup__active')
})
over.addEventListener('click', () => {
  over.classList.remove('over__active')
  popup.classList.remove('popup__active')
})