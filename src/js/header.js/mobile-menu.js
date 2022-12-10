const refs = {
  openBtn: document.querySelector('.menu-btn__open-js'),
  closeBtn: document.querySelector('.menu-btn__close-js'),
  mobMenu: document.querySelector('.mobile-menu-js'),
};

refs.openBtn.addEventListener('click', () => {
  refs.mobMenu.classList.add('is-open');
});

refs.closeBtn.addEventListener('click', () => {
  refs.mobMenu.classList.remove('is-open');
});
