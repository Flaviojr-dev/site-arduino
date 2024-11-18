// class MobileNavBar {
//     constructor(mobileMenu, navList, navLinks) {
//         this.mobileMenu = document.querySelector(mobileMenu)
//         this.navList = document.querySelector(navList)
//         this.navLinks = document.querySelectorAll(navLinks)
//         this.activeClass = "active"

//         this.handleClick = this.handleClick.bind(this);
//     }

//     animateLinks() {
//         this.navLinks.forEach((link, index) => {
//           link.style.animation
//             ? (link.style.animation = "")
//             : (link.style.animation = `navLinkFade 0.5s ease forwards ${
//                 index / 7 + 0.3
//               }s`);
//         });
//       }

//     handleClick() {
//         this.navList.classList.toggle(this.activeClass);
//         this.mobileMenu.classList.toggle(this.activeClass);
//         this.animateLinks();
//     }

//     addClickEvent () {
//         console.log(this);
//         this.mobileMenu.addEventListener("click", this.handleClick);
//     }

//     init() {
//         if (this.mobileMenu) {
//             this.addClickEvent();
//         }
//         return this;
//     }
// }

// const mobileNavBar = new MobileNavBar(
//     ".mobile-menu",
//     ".nav-list",
//     ".nav-list li",
// );
// mobileNavBar.init()

const carousel = document.querySelector('.tools-carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const itemsToShow = 3;
const itemWidth = 80; // Largura da imagem mais o espaçamento entre as imagens
const itemsTotal = document.querySelectorAll('.tools-carousel a').length;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth * itemsToShow}px)`;
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < (itemsTotal / itemsToShow) - 1) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth * itemsToShow}px)`;
    }
});


