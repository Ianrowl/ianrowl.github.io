const currentPage = window.location.pathname;

const navLinks = document.querySelector('.navBar').querySelectorAll('a').

forEach(link => {
  if(link.href.includes(`${currentPage}`)){
    link.classList.add('current');
  }
})
