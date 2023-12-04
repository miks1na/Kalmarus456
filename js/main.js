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
let fightArrow = document.querySelector('.fight__after')
let fightPar = document.querySelector('.fight__par')
fightArrow.addEventListener('click', () => {
  fightArrow.classList.toggle('fight__after-active')
  fightPar.classList.toggle('fight__par-active')
})
let aboutArrow = document.querySelector('.about__after')
let aboutPar = document.querySelector('.about__text')
let aboutImg = document.querySelector('.about__right-inner img')
aboutArrow.addEventListener('click', () => {
  aboutArrow.classList.toggle('about__after-active')
  aboutPar.classList.toggle('about__text-active')
  aboutImg.classList.toggle('about__img-active')
})
let onlineArrow = document.querySelector('.online__after')
let onlinePar = document.querySelector('.online__par')
onlineArrow.addEventListener('click', () => {
  onlineArrow.classList.toggle('online__after-active')
  onlinePar.classList.toggle('online__par-active')
})
let friendsArrow = document.querySelector('.friends__after')
let friendsPar = document.querySelector('.friends__par')
friendsArrow.addEventListener('click', () => {
  friendsArrow.classList.toggle('friends__after-active')
  friendsPar.classList.toggle('friends__par-active')
})
let locArrow = document.querySelector('.loc__after')
let locPar = document.querySelector('.loc__par')
locArrow.addEventListener('click', () => {
  locArrow.classList.toggle('loc__after-active')
  locPar.classList.toggle('loc__par-active')
})
let clanArrow = document.querySelector('.clan__after')
let clanPar = document.querySelector('.clan__par')
clanArrow.addEventListener('click', () => {
  clanArrow.classList.toggle('clan__after-active')
  clanPar.classList.toggle('clan__par-active')
})
let modaArrow = document.querySelector('.moda__after')
let modaPar = document.querySelector('.moda__par')
modaArrow.addEventListener('click', () => {
  modaArrow.classList.toggle('moda__after-active')
  modaPar.classList.toggle('moda__par-active')
})
let vipArrow = document.querySelector('.vip__after')
let vipPar = document.querySelector('.vip__par')
vipArrow.addEventListener('click', () => {
  vipArrow.classList.toggle('vip__after-active')
  vipPar.classList.toggle('vip__par-active')
})
let customArrow = document.querySelector('.custom__after')
let customPar = document.querySelector('.custom__par')
customArrow.addEventListener('click', () => {
  customArrow.classList.toggle('custom__after-active')
  customPar.classList.toggle('custom__par-active')
})
let runArrows = document.querySelectorAll('.run__after')
runArrows.forEach(runArrow => {
  runArrow.addEventListener('click', () => {
    runArrow.classList.toggle('run__after-active')
    let runPar = runArrow.closest('.run__text').querySelector('.run__text p')
    runPar.classList.toggle('run__par-active')
  })
})
let play = document.querySelectorAll('.header__play');
let logo = document.querySelector('.header__logo img')
document.addEventListener('scroll', () => {
  if(window.scrollY > 500) {
    play.forEach(pl => {
      pl.classList.add('header__play-active')
    })
    logo.setAttribute('src', 'images/lunapark.png')
  } else if (window.scrollY < 500){
    play.forEach(pl => {
      pl.classList.remove('header__play-active')
    })
    logo.setAttribute('src', 'images/kalmarus456.png')
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
  if(countr.classList.contains('header__flag-active') && e.target !== countr && !e.target.closest('.header__countries')) {
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