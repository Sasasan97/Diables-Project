// Elementos  
const inputContainer = document.getElementById('input-container');  
const countdownForm = document.getElementById('countdownForm');  
const dateEl = document.getElementById('date-picker');  
const titleEl = document.getElementById('title');  
const countdownEl = document.getElementById('countdown');  
const countdownElTitle = document.getElementById('countdown-title');  
const resetBtn = document.getElementById('countdown-button');  
const timeElements = document.querySelectorAll('span');  
const completeEl = document.getElementById('complete');  
const completeElInfo = document.getElementById('complete-info');  
const completeBtn = document.getElementById('complete-button');  


// Variables globales  
let countdownTitle = '';  
let countdownDate = '';  
let countdownValue = new Date();  
let countdownActive;  
let savedCountdown;  
// Variables tiempo  
const second = 1000;  
const minute = second * 60;  
const hour = minute * 60;  
const day = hour * 24;  
// Establece el mínimo de entrada de fecha con la fecha de hoy 
const today = new Date().toISOString().split('T')[0];  
dateEl.setAttribute('min', today);  
// Configura cuenta atrás  
function updateDOM() {  
 countdownActive = setInterval(() => {  
  // Obtiene la hora entre el 1 de Enero de 1970 y la fecha introducida, devuelta en milisegundos 
  const now = new Date().getTime();  
  const distance = countdownValue - now;  
  // Se divide el tiempo retenido en dias, horas, minutos y segundos
  const days = Math.floor(distance / day);  
  const hours = Math.floor((distance % day) / hour);  
  const minutes = Math.floor((distance % hour) / minute);  
  const seconds = Math.floor((distance % minute) / second);  
  // Hide Input  
  inputContainer.hidden = true;  
  // Si la cuenta atrás acaba, muestra mensaje  
  if (distance < 0) {  
   countdownEl.hidden = true;  
   clearInterval(countdownActive);  
   completeElInfo.textContent = `${countdownTitle} countdown finished on ${countdownDate}`;  
   completeEl.hidden = false;  
  } else {  
   // Sino, muestra el progeso 
   // Rellena la cuenta atrás  
   countdownElTitle.textContent = `${countdownTitle}`;  
   timeElements[0].textContent = `${days}`;  
   timeElements[1].textContent = `${hours}`;  
   timeElements[2].textContent = `${minutes}`;  
   timeElements[3].textContent = `${seconds}`;  
   completeEl.hidden = true;  
   countdownEl.hidden = false;  
  }  
 }, second);  
}  
// Se recogen los datos del input  
function updateCountdown(event) {  
 event.preventDefault();  
 countdownTitle = event.srcElement[0].value;  
 countdownDate = event.srcElement[1].value;  
 savedCountdown = {  
  title: countdownTitle,  
  date: countdownDate,  
 };  
 localStorage.setItem('countdown', JSON.stringify(savedCountdown));  
 // Check fecha válida 
 if (countdownDate === '') {  
  alert('Selecciona una fecha para la cuenta atrás.');  
 } else {  
  // Obtenga el número de versión de la fecha actual y actualiza DOM  
  countdownValue = new Date(countdownDate).getTime();  
  updateDOM();  
 }  
}  
// Reset valores 
function reset() {  
 // Muestra input  
 countdownEl.hidden = true;  
 completeEl.hidden = true;  
 inputContainer.hidden = false;  
 // Stop 
 clearInterval(countdownActive);  
 // Reset valores
 countdownTitle = '';  
 countdownDate = '';  
 titleEl.value = '';  
 dateEl.value = '';  
 localStorage.removeItem('countdown');  
}  
// Obtener la cuenta atrás del localStorage si está disponible  
function restorePreviousCountdown() {  
 if (localStorage.getItem('countdown')) {  
  inputContainer.hidden = true;  
  savedCountdown = JSON.parse(localStorage.getItem('countdown'));  
  countdownTitle = savedCountdown.title;  
  countdownDate = savedCountdown.date;  
  countdownValue = new Date(countdownDate).getTime();  
  updateDOM();  
 }  
};  
// Event Listener  
countdownForm.addEventListener('submit', updateCountdown);  
resetBtn.addEventListener('click', reset);  
completeBtn.addEventListener('click', reset);  
// On Load  
restorePreviousCountdown(); 