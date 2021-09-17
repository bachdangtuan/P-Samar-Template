var sticky = document.querySelector('.header__sticky');

if (sticky.style.position !== 'header__sticky') {
  var stickyTop = sticky.offsetTop;

  document.addEventListener('scroll', function () {
    window.scrollY >= stickyTop ?
      sticky.classList.add('samafixed') :
      sticky.classList.remove('samafixed');
  });
}