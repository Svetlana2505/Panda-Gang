(() => {
    const refs = {
      mobileMenu: document.querySelector("[data-mobile-menu]"),
      burger: document.querySelector("[data-burger]"),
      btnClose: document.querySelector("[data-btn-close]"),
    };
  
    refs.burger.addEventListener("click", toggleModal);
    refs.btnClose.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.mobileMenu.classList.toggle("is-open");
    }
  })();