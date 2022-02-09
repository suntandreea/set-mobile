const menuElement = document.querySelector('.menu');
const htmlElement = document.querySelector('html');

window.addEventListener('scroll', (event) => {
  const scroll = htmlElement.scrollTop;
  const height = window.innerHeight;
  console.log(scroll, height);
  if (scroll > height) {
    menuElement.classList.add('accent');
  } else {
    menuElement.classList.remove('accent');
  }
});

const navElem = document.querySelector('nav');
const menuBtn = document.querySelector('.burger');

menuBtn.addEventListener('click',() => {
  if(navElem.classList.contains('visible')) {
    navElem.classList.remove('visible');
    menuBtn.classList.remove('rotate');
  } else {
    navElem.classList.add('visible');
    menuBtn.classList.add('rotate');
  }
});
