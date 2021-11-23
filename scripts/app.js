/** @format */

//typed.js used for animation in Home

var typed = new Typed(".typing-text", {
  strings: ["FrontEnd Developement.", "UI/UX Designing.", "Web Developement."],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

//title Change

// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === "visible")
//     document.title = "Portfolio | Aditya Benkar";
//   else document.title = "Come Back To Aditya's Portfolio";
// });

//scroll effect

AOS.init({
  offset: 50,
  duration: 500,
  disable: "phone ,tablet, mobile",
});

//hover on work

const modal = document.querySelectorAll(".modal");
modal.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.firstElementChild.style.opacity = 0.7;
    element.lastElementChild.style.display = "block";
    element.lastElementChild.style.animation = "all .7s";
  });
  element.addEventListener("mouseout", () => {
    element.firstElementChild.style.opacity = 1;
    element.lastElementChild.style.display = "none";
  });
});

//form submission
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzafpqKf1KYeuQMh1aU58NP3VgPtOkPkzoMX28K33NZpYVtvctjgqG8Z7oPpiFlrsgR-Q/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("You have successfully submitted.");
      form.reset(); // Reset all form data
    })
    .catch((error) => console.error("Error!", error.message));
});

//navbar manupulation

const navbarItems = document.querySelectorAll(".navbar-items li a");
const section = document.querySelectorAll(".scroll-nav");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 50;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    // console.log(top, offset, height, id);

    if (top >= offset && top < offset + height) {
      navbarItems.forEach((items) => {
        items.classList.remove("active");
        document
          .querySelector(".navbar-items li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

//toggle mobile navbar

const navBtn = document.querySelector(".navbar-option");
const navMobileItems = document.querySelector(".navbar-items-mobile");
const backdrop = document.querySelector(".backdrop");
const body = document.querySelector("body");

navBtn.addEventListener("click", () => {
  navMobileItems.classList.add("display-flex");
  toggle();
  document.querySelector("body").style.position = "fixed";
});

navMobileItems.addEventListener("click", () => {
  exitNavandBackdrop();
});

backdrop.addEventListener("click", () => {
  exitNavandBackdrop();
});

const exitNavandBackdrop = () => {
  navMobileItems.classList.remove("display-flex");
  toggle();
  document.querySelector("body").style.position = "absolute";
};

const toggle = () => {
  backdrop.classList.toggle("display-block");
};

//
