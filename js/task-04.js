const counter = {
  counterValue: 0,

  increment() {
    this.counterValue += 1;
  },

  decrement() {
    this.counterValue -= 1;
  },
};
const refs = {
  decrementBTN: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

refs.decrementBTN.addEventListener("click", () => {
  counter.decrement();
  value.textContent = counter.counterValue;
});

refs.incrementBtn.addEventListener("click", () => {
  counter.increment();
  value.textContent = counter.counterValue;
});
