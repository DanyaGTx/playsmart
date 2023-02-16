let acc = document.querySelectorAll(".accordion-item-btn");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    for (let j = 0; j < acc.length; j++) {
      if (j !== i) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.maxHeight = null;
      }
    }
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}