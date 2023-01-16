const range = document.getElementById("font-size-control");
const text = document.getElementById("text");

const changeTextSize = (e) => {
  text.style.fontSize = `${e.currentTarget.value}px`;
};

range.addEventListener("input", changeTextSize);
