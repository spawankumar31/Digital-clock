const clock2 = document.querySelector('.clock2');

const tick = () => {
const now = new Date();
  
let digitalClock = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  
clock2.innerHTML = digitalClock;
  
};

setInterval(tick, 1000); 