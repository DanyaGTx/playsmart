const headerItemsColumnsDeal = document.querySelectorAll('.header-navigation-item-dropdown-items-content-columns-deal')
const headerItemsColumnsDealLinks = document.querySelectorAll('.header-navigation-item-dropdown-items-content-columns-deal-item a')

for (let i = 1; i < headerItemsColumnsDeal.length; i++) {
    headerItemsColumnsDeal[i].style.display = 'none'
}

headerItemsColumnsDealLinks.forEach((link, id) => {
    link.addEventListener('mouseover', (e) => {
        for (let i = 0; i < headerItemsColumnsDeal.length; i++) {
            headerItemsColumnsDeal[i].style.display = 'none'
        }
        headerItemsColumnsDeal[id].style.display = 'flex'

        if (window.matchMedia("(max-width: 840px)").matches) {
            headerItemsColumnsDeal[id].style.display = 'block'
        }

        // Remove active class from all links
        headerItemsColumnsDealLinks.forEach(link => link.classList.remove('header-navigation-item-dropdown-deal-item-active'))

        // Add active class to the current link
        link.classList.add('header-navigation-item-dropdown-deal-item-active')
    })
})

// Add the active class to the first link by default
headerItemsColumnsDealLinks[0].classList.add('header-navigation-item-dropdown-deal-item-active');
