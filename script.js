'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 21;
// console.log(document.querySelector('.guess').innerHTML);

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  }
});