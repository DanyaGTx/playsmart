const modal = document.getElementById("modal");
const modalContent = document.getElementById(".modal-content");
const modalButtons = [...document.querySelectorAll(".modal-content__btn")];
const signUp = document.querySelector(".modal-content-tab-signUp");
const signIn = document.querySelector(".modal-content-tab-signIn");

const codeTab = document.querySelector(".modal-content-tab-inner-tabs__btn-code");
const passTab = document.querySelector(".modal-content-tab-inner-tabs__btn-pass");

const codeTabContent = document.querySelector(".modal-content-tab-inner-tab-content-code")
const passTabContent = document.querySelector(".modal-content-tab-inner-tab-content-pass")
function openModal(tab) {
  console.log(tab);
  modal.classList.add("show");
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      closeModal();
    }
  });
}

function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = 'visible';
  document.body.style.paddingRight = '0';
}


//tabs in modal window

function changeTabs(tab) {
  modalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      modalButtons.forEach(function(button1) {
        button1.classList.toggle('modal-content__btn--active', button1 === button);
      });
      signUp.style.display = button === modalButtons[0] ? 'block' : 'none';
      signIn.style.display = button === modalButtons[1] ? 'block' : 'none';
    });
    if (button === modalButtons[0] && tab === "signup") {
      button.classList.add('modal-content__btn--active');
      signUp.style.display = 'block';
      modalButtons[1].classList.remove('modal-content__btn--active');
    } else if (button === modalButtons[1] && tab === "signin") {
      button.classList.add('modal-content__btn--active');
      signIn.style.display = 'block';
      modalButtons[0].classList.remove('modal-content__btn--active');
    }
  });

}
function openModalForm(tab) {
  openModal(tab)

  if (tab === "signup") {
    signUp.style.display = "block";
    signIn.style.display = "none";
  } else if (tab === "signin") {
    signUp.style.display = "none";
    signIn.style.display = "block";
  }

  changeTabs(tab)
}



codeTab.addEventListener('click', () => {
  codeTabContent.style.display = 'block';
  passTabContent.style.display = 'none';

  codeTab.classList.add('modal-content-tab-inner-tabs__btn--active')
  passTab.classList.remove('modal-content-tab-inner-tabs__btn--active')
})
passTab.addEventListener('click', () => {
  codeTabContent.style.display = 'none';
  passTabContent.style.display = 'block';
  codeTab.classList.remove('modal-content-tab-inner-tabs__btn--active')
  passTab.classList.add('modal-content-tab-inner-tabs__btn--active')
})