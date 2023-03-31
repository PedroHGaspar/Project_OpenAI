import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;


function loader(element){
  element.textContext = '';

  loadInterval = setInterval(() => {
    element.textContext += '.';

    if(element.textContext === '....'){//whit if makes the '...' of the AI before he gives an answer
      element.textContext = '';
    }
  }, 300)// 300miliseconds per .
}

function typeText(element, text){
  let index = 0;

  let interval = setInterval(() => {
    if(index < text.length){
      element.innerHTML += text.chartAt(index);
    }else{
      clearInterval(interval);
    }
  }, 20)//20 miliseconds per letter
}

function generateUniqueId(){
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`//this generates an unique random ID with the current time and random number.
}

