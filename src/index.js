(() => {
  const refs = {
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    burger: document.querySelector('[data-burger]'),
    btnClose: document.querySelector('[data-btn-close]'),
    backdrop: document.querySelector('[data-backdrop]'),
    modalClose: document.querySelector('[data-modal-by-close]'),
    modalOpen: document.querySelector('[data-open-modal]'),
    modalOpenMobile: document.querySelector('[data-open-modal-mobile]'),
    products: document.querySelector('[data-products]'),
    about: document.querySelector('[data-about]'),
    gallery: document.querySelector('[data-gallery]'),
    contacts: document.querySelector('[data-contacts]'),

  };


  refs.burger.addEventListener('click', toggleMobile);
  refs.btnClose.addEventListener('click', toggleMobile);
  refs.products.addEventListener('click', toggleMobile);
  refs.about.addEventListener('click', toggleMobile);
  refs.gallery.addEventListener('click', toggleMobile);
  refs.contacts.addEventListener('click', toggleMobile);
  
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

(() => {
  const location = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  location.openModalBtn.addEventListener('click', toggleModal);
  location.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    location.modal.classList.toggle('is-hidden');
  }
})();
