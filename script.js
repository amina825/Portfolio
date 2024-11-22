$(".responsive-slides").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});




function showModal(link,img) {
  const modal = document.getElementById("modal");
  const modalLink = document.getElementById("modal-link");
  const modalImg = document.getElementById("modal-img");
  modalLink.href = link;
  modalImg.src = img;
  modal.style.display = "block";
}

const modal = document.getElementById("modal");
const modalBackdrop = document.querySelector(".modal-backdrop");
modalBackdrop.addEventListener("click", () => {
  modal.style.display = "none";
});

const modalContent = document.querySelector(".modal-content");
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

const toggleMobileNav = () => {
  const mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
};