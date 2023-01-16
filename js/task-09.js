function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const bodyColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

const onChangeColorClick = (e) => {
  const colorChange = getRandomHexColor();
  body.style.backgroundColor = colorChange;
  button.innerHTML = colorChange;
};

button.addEventListener("click", onChangeColorClick);
