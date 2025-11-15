// jednoduchá animace loga: jemné floatování
document.addEventListener('DOMContentLoaded', ()=> {
  const logo = document.querySelector('.hero-logo img') || document.querySelector('.logo img');
  if(!logo) return;
  let t = 0;
  function tick(){
    t += 0.02;
    const y = Math.sin(t) * 6;
    const r = Math.sin(t/2) * 2;
    logo.style.transform = `translateY(${y}px) rotate(${r}deg)`;
    requestAnimationFrame(tick);
  }
  tick();
});
