(() => {
  const refs = {
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    burger: document.querySelector('[data-burger]'),
    btnClose: document.querySelector('[data-btn-close]'),
    backdrop: document.querySelector('[data-backdrop]'),
    modalClose: document.querySelector('[data-modal-close]'),
    modalOpen: document.querySelector('[data-open-modal]'),
    modalOpenMobile: document.querySelector('[data-open-modal-mobile]'),

  };

  refs.burger.addEventListener('click', toggleMobile);
  refs.btnClose.addEventListener('click', toggleMobile);
  

  function toggleMobile() {
    refs.mobileMenu.classList.toggle('is-open');
  }

  refs.modalOpenMobile.addEventListener('click', toggleModal);
  refs.modalOpen.addEventListener('click', toggleModal);
  refs.modalClose.addEventListener('click', toggleModal);
  

  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
  }
})();


(() => {
  const about = {
    openModalBtn: document.querySelector("[data-hero-about-open]"),
    modal: document.querySelector("[data-hero-about]"),
  };

  about.openModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    about.modal.classList.toggle("is-hidden");
  }
})();
