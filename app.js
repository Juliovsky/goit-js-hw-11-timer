class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.targetDate = targetDate;
    this.selector = document.querySelector(`${selector}`);
    this.days = document.querySelector('span[data-value="days"]');
    this.hours = document.querySelector('span[data-value="hours"]');
    this.mins = document.querySelector('span[data-value="mins"]');
    this.secs = document.querySelector('span[data-value="secs"]');
    this.eventTime();
    this.timerId;
    this.deltaTime;
  }
  eventTime() {
    this.deltaTime = this.targetDate.getTime() - Date.now();
    const days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  
    if ((this.deltaTime <= 0)) {
      clearInterval(this.timerId);
      this.days.textContent = 0;
      this.hours.textContent = 0;
      this.mins.textContent = 0;
      this.secs.textContent = 0; 
    }
  }
  timer() {
    this.timerId = setInterval(() => this.eventTime(), 1000);
  }
}

let myTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020' ),
});

myTimer.timer();





//   /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);