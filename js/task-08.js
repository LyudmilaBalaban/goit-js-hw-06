const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All forms must be fill in!");
  }

  console.log({ email: email.value, password: password.value });
  e.currentTarget.reset();
}
