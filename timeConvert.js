const prompt = require('prompt-sync')();

class Time {
  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  add(other) {
    const totalMinutes = this.minutes + other.minutes;
    const totalHours = this.hours + other.hours + Math.floor(totalMinutes / 60);
    return new Time(totalHours, totalMinutes % 60);
  }

  display() {
    console.log(`Total Time: ${this.hours}h ${this.minutes}m`);
  }
}

// Input time 1
const h1 = +prompt("Enter hours for Time 1: ");
const m1 = +prompt("Enter minutes for Time 1: ");
const t1 = new Time(h1, m1);

// Input time 2
const h2 = +prompt("Enter hours for Time 2: ");
const m2 = +prompt("Enter minutes for Time 2: ");
const t2 = new Time(h2, m2);

// Add and display
t1.add(t2).display();
