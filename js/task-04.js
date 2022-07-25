const counter = {
  counterValue: 0,

  increment() {
    this.counterValue += 1;
  },

  decrement() {
    this.counterValue -= 1;
  },
};
const ref = {
  decrementBTN: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

ref.decrementBTN.addEventListener("click", () => {
  counter.decrement();
  value.textContent = counter.counterValue;
});

ref.incrementBtn.addEventListener("click", () => {
  counter.increment();
  value.textContent = counter.counterValue;
});
