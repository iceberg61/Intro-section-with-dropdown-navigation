const primaryNav = document.getElementById('primary-navigation');
const openNav = document.querySelector('.open-menu');
const closeNav = document.querySelector('.close-menu');

// toggle nav
openNav.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);

function toggleNav() {
   primaryNav.classList.toggle('active')
}

const dropdown_togglers = document.querySelectorAll("[data-dropdown]")

dropdown_togglers.forEach(dropdown_btn => {
  dropdown_btn.addEventListener("click", function () {
    this.classList.toggle("active")
    const dropdown = this.nextElementSibling
    const isActive = this.classList.contains("active")
    
    if (isActive) {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px"
    } else {
      dropdown.style.maxHeight = "0px"
    }
  })
})