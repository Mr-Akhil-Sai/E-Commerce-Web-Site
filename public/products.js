let largeImg = document.querySelector(".largeImg");
let smallImg1 = document.querySelector(".smallImg1");
let smallImg2 = document.querySelector(".smallImg2");
let smallImg3 = document.querySelector(".smallImg3");
let smallImg4 = document.querySelector(".smallImg4");

smallImg1.addEventListener("click", () => changeImg(smallImg1));
smallImg2.addEventListener("click", () => changeImg(smallImg2));
smallImg3.addEventListener("click", () => changeImg(smallImg3));
smallImg4.addEventListener("click", () => changeImg(smallImg4));

function changeImg(smallImg) {
  largeImg.src = smallImg.src;
}

let productsDiv = document.querySelector(".productsDiv");
console.log(productsDiv.innerHTML);
