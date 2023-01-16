const refs = {
  nameInput: document.getElementById("name-input"),
  nameOutput: document.getElementById("name-output"),
};

refs.nameInput.addEventListener("input", onInputChange);

function onInputChange(e) {
  refs.nameOutput.textContent = e.currentTarget.value;
  console.log(e.currentTarget.value);
}

// const nameInput = document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");

// let textInput = "Anonymous";
// const nameInputChange = (e) => {
//   if (e.currentTarget.value === "") {
//     nameOutput.textContent = "Anonymous";
//   } else {
//     nameOutput.textContent = e.currentTarget.value;
//   }
//   console.log(e.currentTarget.value);
// };

// nameInput.addEventListener("input", nameInputChange);
