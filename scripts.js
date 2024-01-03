const primaryNav = document.querySelector(".navlinks");
const navToggle = document.querySelector(".burger");
const navClose = document.querySelector(".x");
const navlinks = document.querySelectorAll(".navlinks li");


//modal

// dialog
// const emDialog = document.getElementById("emDialog");
// const bookingBtn = document.getElementById("bookingBtn")

// setTimeout(() => {
//     emDialog.showModal()
// },500);

// bookingBtn.addEventListener("click", function(e){
//     e.preventDefault();
//     emDialog.close();
//     console.log("close");
// });

// confirmBtn.addEventListener("click", (event) => {
//   event.preventDefault(); 
//   emDialog.close(emInput.value); 
// }); 
  

//countdown

// var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
// var x = setInterval(function(){
//     var now = new Date().getTime();
//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;
// },1000);

//sidebar

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        navClose.setAttribute("aria-expanded", "true");
    }

    navlinks.forEach((link, index) => {
        link.style.animation = `navLinkFadein 0.5s ease forwards ${index / 5 + 0.3}s`;
    });
});

navClose.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        navClose.setAttribute("aria-expanded", "false");
    }

    navlinks.forEach((link, index) => {
        link.style.animation = `navLinkFadeOut 0.5s ease forwards ${index / 5 + 0.1}s`;
    });
});

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

        if (window.scrollY > 0) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
);



//  Scroll Effects //

/* FUTURE USE 

const faders = document.querySelectorAll('.fade');
const appearOptions = {
    threshold: 0
};

const appearOnScroll = new IntersectionObserver(function (entries,appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add("appear");
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    }) 
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
}); 

*/