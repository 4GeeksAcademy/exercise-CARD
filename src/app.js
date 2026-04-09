import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let icons = ["♦", "♥", "♠", "♣"];
  let values = [`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`J`,`Q`,`K`,`A`,];

  let randomIcon = icons[Math.floor(Math.random() * icons.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)]; 

  document.getElementById('top-icon').innerHTML = randomIcon;
  document.getElementById('mid-text').innerHTML = randomValue;
  document.getElementById(`adc-icon`).innerHTML = randomIcon;

  let topElement = document.getElementById('top-icon');
  let midElement = document.getElementById('mid-text');
  let adcElement = document.getElementById(`adc-icon`);

  if (randomIcon == '♥' || randomIcon == '♦') {
    topElement.style.color = 'red';
    midElement.style.color = `red`;
    adcElement.style.color = 'red';
  }
  else{
    topElement.style.color = 'black';
    midElement.style.color = 'black';
    adcElement.style.color = 'black';
  }
};
