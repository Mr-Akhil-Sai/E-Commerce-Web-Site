let largeImg = document.querySelector(".largeImg");
let smallPic1 = document.querySelector(".smallImg1");
let smallPic2 = document.querySelector(".smallImg2");
let smallPic3 = document.querySelector(".smallImg3");
let smallPic4 = document.querySelector(".smallImg4");

smallPic1.addEventListener("click", () => changeImg(smallPic1));
smallPic2.addEventListener("click", () => changeImg(smallPic2));
smallPic3.addEventListener("click", () => changeImg(smallPic3));
smallPic4.addEventListener("click", () => changeImg(smallPic4));

function changeImg(smallImg) {
  largeImg.src = smallImg.src;
}
