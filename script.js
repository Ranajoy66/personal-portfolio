function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


/* TYPING ANIMATION */

document.addEventListener("DOMContentLoaded", function () {

    var typed = new Typed("#typed", {
        strings: [
            "Fresher",
            "Web Developer"
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });

});


/* PARTICLES BACKGROUND */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof particlesJS !== "undefined") {

        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },

                color: {
                    value: "#ffffff"
                },

                shape: {
                    type: "circle"
                },

                opacity: {
                    value: 0.5
                },

                size: {
                    value: 3,
                    random: true
                },

                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#888",
                    opacity: 0.4,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 2
                }
            },

            interactivity: {
                detect_on: "canvas",

                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },

                    onclick: {
                        enable: true,
                        mode: "push"
                    }
                },

                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },

                    push: {
                        particles_nb: 4
                    }
                }
            },

            retina_detect: true
        });

    }

});

/* SMOOTH SCROLL NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });

        }

    });

});


/* SECTION SCROLL REVEAL */

const sections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {

    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.add("show-section");

    observer.unobserve(entry.target);

};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

sections.forEach(function (section) {

    sectionObserver.observe(section);

});

document.querySelector("#profile").classList.add("show-section");

/* SCROLL PROGRESS BAR */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("scroll-progress").style.width = progress + "%";

});

/* DARK / LIGHT THEME */

// const themeBtn = document.getElementById("theme-toggle");

// themeBtn.addEventListener("click",()=>{

//     document.body.classList.toggle("light-theme");

//     if(document.body.classList.contains("light-theme")){

//         themeBtn.textContent="☀️";

//     }else{

//         themeBtn.textContent="🌙";

//     }

// });