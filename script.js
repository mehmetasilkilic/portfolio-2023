/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "after";

  nextSlide.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "before";

  nextSlide.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {
  nav.dataset.transitionable = "true";

  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
};

window.matchMedia("(max-width: 800px)").onchange = (e) => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};

const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;

  while (prev === next) next = rand(min, max);

  return next;
};

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
    combination = combinations[index];

  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;

  prev = index;
}, 3000);
