const counter = {
  counterValue: 0,

  increment() {
    this.counterValue += 1;
  },

  decrement() {
    this.counterValue -= 1;
  },
};

const decrementBTN = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

decrementBTN.addEventListener("click", function () {
  counter.decrement();
  value.textContent = counter.counterValue;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  value.textContent = counter.counterValue;
});
