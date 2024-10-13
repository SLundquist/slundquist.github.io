const arrow = document.getElementsByClassName('arrow')[0];
const nav = document.getElementsByClassName('nav')[0];

// Scroll function when user clicks an arrow
arrow.addEventListener('click', function () {
  window.scrollTo({
    top: 800,
    behavior: 'smooth',
  });
});

// nav bar changer when user scrolls
window.addEventListener('scroll', function () {
  var scrollPositionY = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollPositionY);
  if (scrollPositionY == 0) {
    nav.classList.remove('navAnimation');
  }

  if (scrollPositionY != 0) {
    nav.classList.add('navAnimation');
  }
});
