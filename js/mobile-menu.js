const closeMenuBtns = document.querySelectorAll(
    ".header-navigation-item-dropdown-content-list__close"
);
const popUpMenus = document.querySelectorAll(
    ".header-navigation-item-dropdown-mobile"
);
const linksItem =  document.querySelectorAll(".header-navigation-item")
const links = document.querySelectorAll(".header-navigation-item__link");
const closeMobileMenuBurger = document.querySelector(".burger__toggler");

const menuButtons = document.querySelector(".header-navigation-buttons");


if (window.matchMedia("(max-width: 840px)").matches) {
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (event) {
            event.preventDefault();
     
            for (let j = 0; j < popUpMenus.length; j++) {
                if (j !== i) {
                    closeMenu(j);
                    linksItem[j].classList.remove("header-navigation-item-active");
                }
            }

            if (popUpMenus[i].style.visibility === "visible") {
                closeMenu(i);
                linksItem[i].classList.remove("header-navigation-item-active");
            } else {                
                popUpMenus[i].style.visibility = "visible";
                popUpMenus[i].style.opacity = 1;
                linksItem[i].classList.add("header-navigation-item-active");
            }
        });
    }

    for (let i = 0; i < closeMenuBtns.length; i++) {
        closeMenuBtns[i].addEventListener("click", function (event) {
            event.preventDefault();
            closeMenu(i + 1);
            linksItem[i].classList.remove("header-navigation-item-active");
        });
    }

    const closeMenu = (id) => {
        popUpMenus[id].style.visibility = "hidden";
        popUpMenus[id].style.opacity = 0;
        linksItem[id].classList.remove("header-navigation-item-active");
    };
}