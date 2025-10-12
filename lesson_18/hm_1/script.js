class Countdown {
  static WORK_STATE = "working";
  static NOTWORK_STATE = "pause";

  static parseSeconds = (totalSeconds) => {
    // формулы брал из гугла
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return {
      minutes,
      seconds,
    };
  };

  static parseZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  #state = Countdown.NOTWORK_STATE;
  #interval = null;
  #initialSeconds = null;

  constructor(rootSelector, seconds = 0) {
    this.root = document.querySelector(rootSelector);
    if (!this.root) throw new Error("Ошибка! Нет такого элемент");
    this.seconds = seconds;
    this.#initialSeconds = seconds;

    this.renderTimer(Countdown.parseSeconds(this.seconds));
  }

  startTick() {
    if (this.#state === Countdown.WORK_STATE) {
      return;
    }

    this.#state = Countdown.WORK_STATE;

    this.#interval = setInterval(() => {
      this.seconds -= 1;

      this.renderTimer(Countdown.parseSeconds(this.seconds));

      if (this.seconds <= 0) {
        clearInterval(this.#interval);
        this.#interval = null;
        this.#state = Countdown.NOTWORK_STATE;
        this.root.textContent = "Время вышло!";
      }
    }, 1000);

    return this;
  }

  pause() {
    if (this.#state === Countdown.NOTWORK_STATE) {
      return;
    }

    clearInterval(this.#interval);
    this.#interval = null;
    this.#state = Countdown.NOTWORK_STATE;

    return this;
  }

  reset() {
    clearInterval(this.#interval);
    this.#interval = null;
    this.#state = Countdown.NOTWORK_STATE;
    this.seconds = this.#initialSeconds;
    this.renderTimer(Countdown.parseSeconds(this.seconds));

    return this;
  }

  renderTimer({ minutes, seconds }) {
    this.root.textContent = `${Countdown.parseZero(
      minutes
    )}:${Countdown.parseZero(seconds)}`;
  }

  get state() {
    return this.#state;
  }
}

const timer1 = new Countdown(".timer", 10);

timer1.startTick();

// setInterval(() => {
//   timer1.reset();
// }, 4000);
