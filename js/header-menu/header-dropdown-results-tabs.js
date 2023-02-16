const dropdownContentLinks = document.querySelectorAll('.header-dropdown-content-list-wrapper-columns-info-item') 
const headerDropdownContentInfoWrapper = document.querySelectorAll('.header-dropdown-content-list-wrapper-columns-info-wrapper')

// Hide all info wrappers except for the first one
for (let i = 1; i < headerDropdownContentInfoWrapper.length; i++) {
  headerDropdownContentInfoWrapper[i].style.display = 'none'
}

dropdownContentLinks.forEach((link, id) => {
  link.addEventListener('mouseover', (e) => {
    // Hide all info wrappers
    for (let i = 0; i < headerDropdownContentInfoWrapper.length; i++) {
      headerDropdownContentInfoWrapper[i].style.display = 'none'
    }
    // Show the corresponding info wrapper
    headerDropdownContentInfoWrapper[id].style.display = 'block'
  })
})

