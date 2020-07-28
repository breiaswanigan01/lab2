let name = "Breia Swanigan";
let age = 18;
let birthday = "August 15";
let detroitGC = true;
let lifeEvents = [
  "Highschool Graduate",
  "Scholarship Winner",
  "I was born in Detroit, Michigan",
  "I have 5 siblings",
];
if ((detroitGC = true)) {
  console.log(
    ` My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  ` My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`;
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
let counter = 0;
let randomNumber = null;

while (randomNumber !== 5) {
  randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(`${randomNumber}  === 5. It took ${counter}
  iterations to randomly generate the number 5.`);
    break;
  }
}

// EXTENDED CHALLENGE

let hours = 40;
let wage = 10;

if (hours <= 40) {
  let paycheck = hours * wage;
  let weeks = Math.ceil(1000000 / paycheck);
  console.log(
    `With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`
  );
} else {
  let overtime = (hours - 40) * (wage * 1.5);
  let paycheck = 40 * wage + overtime;
  let weeks = Math.ceil(1000000 / paycheck);
  console.log(
    `With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`
  );
}
