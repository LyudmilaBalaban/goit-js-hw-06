// const validation = document.getElementById("validation-input");
// const addRemovePassword = (remove, add) => {
//   validation.classList.remove(`${remove}`);
//   validation.classList.add(`${add}`);
// };

// const validPassword = (e) => {
//   if (Number(validation.dataset.length) === e.currentTarget.value.length) {
//     addRemovePassword("invalid", "valid");
//   } else {
//     addRemovePassword("valid", "invalid");
//   }
// };

// validation.addEventListener("blur", validPassword);

const input = document.getElementById("validation-input");
const inputLength = Number(input.dataset.length);

input.addEventListener("blur", (e) => {
  if (inputLength === e.currentTarget.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid", "valid");
  }
});
