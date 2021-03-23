/* start section top-nav */
const hamburgerMenu = document.querySelector(".top-nav__hamburger-menu");
const mobileMenu = document.querySelector(".top-nav__mobile-menu");
const topNav = document.querySelector("#top-nav");


window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
        topNav.style.backgroundColor = 'dodgerblue';
    } else {
        topNav.style.backgroundColor = 'transparent';
    }
});

hamburgerMenu.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("top-nav__hamburger-menu--active");
    mobileMenu.classList.toggle("top-nav__mobile-menu--active");
});

/* end section top-nav */



/* start section hero-image */

const slider = document.querySelector("#hero-image .slides");
const slides = document.querySelectorAll("#hero-image .slide");

let imgIndex = 0;
const slideWidth = slides[0].clientWidth;

setInterval(nextSlide, 7000);
slider.addEventListener("transitionend", resetSlides);

function nextSlide() {
    if (imgIndex <= 2) {
        imgIndex++;
    
        slider.style.transition = 'transform 1.5s ease';
        slider.style.transform = `translate(-${imgIndex * slideWidth + 'px'}, 0)`;
    }
}

function resetSlides() {
    if (imgIndex >= 3) {
        imgIndex = 0;
        slider.style.transition = 'none';
        slider.style.transform = `translate(-${imgIndex * slideWidth + 'px'}, 0)`;
    }
}

/* end section hero-image */



/* start section work */

const workElement = document.getElementById("work");


window.addEventListener("scroll", function() {
    const checkTop = workElement.getBoundingClientRect();
    
    if (checkTop.top <= 350) {
        workElement.style.transition = 'transform 0.5s ease';
        workElement.style.transform = 'translate(0, 0)';
    } else {
        workElement.style.transform = 'translate(-100%, 0)';
    }
});

/* end section work */


/* start section features */

const featuresHeader = document.querySelector(".features__header");
const featuresList = document.querySelector("#features .features-list");
const featuresImage = document.querySelector("#features .features-image");


window.addEventListener("scroll", function() {
    if (featuresHeader.getBoundingClientRect().top <= 800) {
        featuresHeader.classList.add("features__header--active");
    } else {
        featuresHeader.classList.remove("features__header--active");
    }

    if (featuresList.getBoundingClientRect().top <= 500) {
        featuresList.classList.add("features-list--active");
    } else {
        featuresList.classList.remove("features-list--active");
    }

    if (featuresImage.getBoundingClientRect().top <= 500) {
        featuresImage.classList.add("features-image--active");
    } else {
        featuresImage.classList.remove("features-image--active");
    }
});

/* end section features */


/* start section mobile features */

const mobileFeaturesHeader = document.querySelector(".mobile-features__header");
const mobileFeaturesImage = document.querySelector("#mobile-features .features-image");
const mobileFeaturesList = document.querySelector("#mobile-features .features-list");

window.addEventListener("scroll", function() {

    if (mobileFeaturesHeader.getBoundingClientRect().top <= 800) {
        mobileFeaturesHeader.classList.add("mobile-features__header--active");
    } else {
        mobileFeaturesHeader.classList.remove("mobile-features__header--active");
    }

    if (mobileFeaturesImage.getBoundingClientRect().top <= 500) {
        mobileFeaturesImage.classList.add("features-image--active");
    } else {
        mobileFeaturesImage.classList.remove("features-image--active");
    }

    if (mobileFeaturesList.getBoundingClientRect().top <= 500) {
        mobileFeaturesList.classList.add("features-list--active");
    } else {
        mobileFeaturesList.classList.remove("features-list--active");
    }
});

/* end section mobile features */


/* start section clients */

const clients = document.querySelector(".clients");
const clientsInfo = document.querySelector(".clients__info");
const dotsList = document.querySelectorAll(".clients__dots-list li");
const widthClients = clients.clientWidth;

let dotIndex = 0;

dotsList[dotIndex].classList.add("active");


dotsList.forEach((item, index) => {
    item.addEventListener("click", activeDots);
});

let stopClientInfo = setInterval(nextClientInfo, 5000);

function activeDots() {
    clearInterval(stopClientInfo);
    dotIndex = this.getAttribute("dot-index");
    updateDots();
    stopClientInfo = setInterval(nextClientInfo, 5000);
}

function updateDots() {
    clearDots();
    dotsList[dotIndex].classList.add("active");
    clientsInfo.style.transition = 'transform 1s ease';
    clientsInfo.style.transform = `translate(-${dotIndex * widthClients}px, 0)`;
}

function clearDots() {
    dotsList.forEach(item => item.classList.remove("active"));
}

function nextClientInfo() {
    if (dotIndex <= 2) {
        dotIndex++;
        if (dotIndex == 3) {
            dotIndex = 0;
        }
        updateDots();
    }
}

/* end section clients */


/* start section our team */

const ourTeamSection = document.getElementById("our-team");
const ourTeam = document.querySelector(".our-team");

window.addEventListener('scroll', function() {
    if (ourTeamSection.getBoundingClientRect().top <= 400) {
        ourTeam.classList.add("our-team--active");
    } else {
        ourTeam.classList.remove("our-team--active");
    }
});

/* end section our team */



/* start section download */

const downloadSection = document.getElementById("download");

window.addEventListener("scroll", function() {
    if (downloadSection.getBoundingClientRect().top <= 400) {
        downloadSection.classList.add("download-responsive--active");
    } else {
        downloadSection.classList.remove("download-responsive--active");
    }
});

/* end section download */


/* start section form */

const formSectionID = document.getElementById("form-section");
const formSectionClass = document.querySelector(".form-section");


window.addEventListener("scroll", function() {
    if (formSectionID.getBoundingClientRect().top <= 400) {
        formSectionClass.classList.add("form-section--active");
    } else {
        formSectionClass.classList.remove("form-section--active");
    }
});

/* end section form */


/* start footer section */

const footerSectionID = document.getElementById("footer-section");
const footerSectionClass = document.querySelector(".footer-section");

window.addEventListener("scroll", function() {
    if (footerSectionID.getBoundingClientRect().top < 500) {
        footerSectionClass.classList.add("footer-section--active");
    } else {
        footerSectionClass.classList.remove("footer-section--active");
    }
});

/* end footer section */