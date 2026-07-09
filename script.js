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
                    value: 115,
                    density: {
                        enable: true,
                        value_area: 950
                    }
                },

                color: {
                    value: ["#1f5d50", "#c4663b", "#d7a84d"]
                },

                shape: {
                    type: ["circle", "triangle", "polygon"],
                    polygon: {
                        nb_sides: 5
                    }
                },

                opacity: {
                    value: 0.35,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.8,
                        opacity_min: 0.08,
                        sync: false
                    }
                },

                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.6,
                        sync: false
                    }
                },

                line_linked: {
                    enable: true,
                    distance: 170,
                    color: "#1f5d50",
                    opacity: 0.2,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 1.25,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
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
                        distance: 170,
                        line_linked: {
                            opacity: 0.45
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
