let footerAcc = document.querySelectorAll(".footer-mobile-accordion-item-btn");

for (let i = 0; i < footerAcc.length; i++) {
    footerAcc[i].addEventListener("click", function() {
    for (let j = 0; j < footerAcc.length; j++) {
      if (j !== i) {
        footerAcc[j].classList.remove("footer-mobile-active");
        footerAcc[j].nextElementSibling.style.maxHeight = null;
      }
    }
    this.classList.toggle("footer-mobile-active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}