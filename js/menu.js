    function menuShow() {
      const menuMobile = document.querySelector(".menu__list--mobile");

      if(menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");
      }else{
        menuMobile.classList.add("open");
      }
    }
