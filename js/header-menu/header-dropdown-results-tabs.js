const mobileDropdownContentResultLinks = document.querySelectorAll('.header-dropdown-content-list-wrapper-links .header-dropdown-content-list-wrapper-info-item-result') 
const mobileDropdownContentInfoWrapper = document.querySelectorAll('.header-dropdown-content-list-wrapper-columns-info-wrapper-mobile')
const dropdownContentInfoItems = document.querySelectorAll('.header-dropdown-content-list-wrapper-columns-info-item-result')
const dropdownContentInfoLinks = document.querySelectorAll('.header-dropdown-content-list-wrapper-info-columns-item__link')
const headerDropdownContentInfoWrapper = document.querySelectorAll('.header-dropdown-content-list-wrapper-columns-info-wrapper')
const mobileDropdownContentLinks = document.querySelectorAll('.header-dropdown-content-list-wrapper-info-item')

// Hide all info wrappers except for the first one
if (window.matchMedia("(max-width: 840px)").matches) {
  // Show the already active link
  mobileDropdownContentResultLinks[0].classList.add('header-navigation-item-active')

  // Hide all info wrappers except for the first one
  for (let i = 1; i < mobileDropdownContentInfoWrapper.length; i++) {
    mobileDropdownContentInfoWrapper[i].style.display = 'none';
  }

  mobileDropdownContentResultLinks.forEach((link, id) => {
    link.addEventListener('click', (e) => {

      // Remove the active class from all links
      mobileDropdownContentResultLinks.forEach((link) => {
        link.classList.remove('header-navigation-item-active')
      })

      // Add the active class to the clicked link
      link.classList.add('header-navigation-item-active')

      // Hide all info wrappers
      for (let i = 0; i < mobileDropdownContentInfoWrapper.length; i++) {
        mobileDropdownContentInfoWrapper[i].style.display = 'none';
      }

      // Show the corresponding info wrapper
      mobileDropdownContentInfoWrapper[id].style.display = 'block';
    })
  })


  mobileDropdownContentLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileDropdownContentLinks.forEach((link) => {
        link.classList.remove('header-navigation-item-active')
      })

      link.classList.add('header-navigation-item-active')
    })
  })

}


else {
  for (let i = 1; i < headerDropdownContentInfoWrapper.length; i++) {
    headerDropdownContentInfoWrapper[i].style.display = 'none'
  }


  dropdownContentInfoItems.forEach((link, id) => {
    link.addEventListener('mouseover', (e) => {
      // Hide all info wrappers
      for (let i = 0; i < headerDropdownContentInfoWrapper.length; i++) {
        headerDropdownContentInfoWrapper[i].style.display = 'none'
        dropdownContentInfoLinks[i].classList.remove('dropdown__link-active')
      }
      // Show the corresponding info wrapper
      headerDropdownContentInfoWrapper[id].style.display = 'block'
      dropdownContentInfoLinks[id].classList.add('dropdown__link-active')

    })
  })
}


