let counterValue = 0;

const value = document.querySelector("#value");
const decr = document.querySelector(`[data-action = "decrement"]`);
const incr = document.querySelector(`[data-action = "increment"]`);

const onDecrBtnClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
decr.addEventListener("click", onDecrBtnClick);

const onIncrBtnClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
incr.addEventListener("click", onIncrBtnClick);

// const counter = {
//   value: 0,
//   decrement() {
//     this.value -= 1;
//   },
//   increment() {
//     this.value += 1;
//   },
// };

// const valueEl = document.querySelector("#value");
// const decrBtn = document.querySelector(`[data-action = "decrement"]`);
// const incrBtn = document.querySelector(`[data-action = "increment"]`);

// decrBtn.addEventListener("click", () => {
//   counter.decrement();
//   valueEl.textContent = counter.value;
// });

// incrBtn.addEventListener("click", () => {
//   counter.increment();
//   valueEl.textContent = counter.value;
// });
