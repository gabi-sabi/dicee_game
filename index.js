let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);

let imgArray = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

let diceeLeft = imgArray[randomNumber1];
let diceeRight = imgArray[randomNumber2];

document.querySelector(".dice .img1").setAttribute("src", diceeLeft);
document.querySelector(".dice .img2").setAttribute("src", diceeRight);

let heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Vyhrala Gabka!";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Vyhral Bohuš!";
} else {
  heading.innerHTML = "Remíza :-)";
}
