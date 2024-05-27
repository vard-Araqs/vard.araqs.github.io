const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./img/svg/nav-clos.svg";
  } else {
    navBtnImg.src = "./img/svg/NAV.svg";
  }
};

AOS.init();
