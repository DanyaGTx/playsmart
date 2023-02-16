const closeMenuBtns = document.querySelectorAll(".header-navigation-item-dropdown-content-list__close");
const popUpMenus = document.querySelectorAll(".header-navigation-item-dropdown");
const links = document.querySelectorAll(".header-navigation-item__link");
if (window.matchMedia("(max-width: 840px)").matches) {
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (event) {
            event.preventDefault();
    
            for (let j = 0; j < popUpMenus.length; j++) {
                if (j !== i) {
                    popUpMenus[j].style.display = "none";
                }
            }
    
            if (popUpMenus[i].style.display === "block") {
                popUpMenus[i].style.display = "none";
            } else {
                popUpMenus[i].style.display = "block";
            }
    
            closeMenuBtns[i].addEventListener("click", () => {
                closeMenu(i);
            });
        });
    }
    
    
    const closeMenu = (id) => {
        popUpMenus[id].style.display = "none";
    };
    


    
}

