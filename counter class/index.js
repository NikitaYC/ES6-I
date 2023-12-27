class Counter {
    constructor() {
      this.value = 0;
      this.intervalId = null;
      this.isAuto = false;

      document.getElementById('toggle').addEventListener('click', this.toggle.bind(this));
      document.getElementById('increment').addEventListener('click', this.increment.bind(this));
      document.getElementById('decrement').addEventListener('click', this.decrement.bind(this));
    }

    start() {
      this.isAuto = true;
      this.intervalId = setInterval(() => {
        this.increment();
      }, 1000);
    }

    stop() {
      this.isAuto = false;
      clearInterval(this.intervalId);
    }

    toggle() {
      if (this.isAuto) {
        this.stop();
        document.getElementById('toggle').innerText = 'Start';
      } else {
        this.start();
        document.getElementById('toggle').innerText = 'Stop';
      }
    }

    increment() {
      this.value++;
      this.updateDisplay();
    }

    decrement() {
      this.value--;
      this.updateDisplay();
    }

    updateDisplay() {
      document.getElementById('counter').innerText = this.value;
    }
  }
const counter = new Counter();