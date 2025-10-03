// Matrix rain (lightweight) - keeps perf good
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
function fit(){ canvas.width = innerWidth; canvas.height = innerHeight; }
fit(); window.addEventListener('resize', fit);
const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@!*%";
const fontSize = 14;
let columns = Math.max(2, Math.floor(canvas.width / fontSize));
let drops = Array.from({length: columns}, ()=>1);
function draw(){
  columns = Math.max(2, Math.floor(canvas.width / fontSize));
  if(drops.length !== columns) drops = Array.from({length: columns}, ()=>1);
  ctx.fillStyle = 'rgba(0,0,0,0.06)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#0ff';
  ctx.font = fontSize + 'px monospace';
  for(let i=0;i<drops.length;i++){
    const ch = letters.charAt(Math.floor(Math.random()*letters.length));
    ctx.fillText(ch, i*fontSize, drops[i]*fontSize);
    if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 35);

// simple typewriter animation
const tw = document.getElementById('typewriter');
function playTypewriter(){
  tw.dataset.step = "1";
  setTimeout(()=> tw.dataset.step = "2", 2500);
}
setTimeout(playTypewriter, 700);

// Button actions: replace with your IDE pages or anchors
document.getElementById('enterBtn').addEventListener('click', ()=> {
  location.href = 'MacroThiccHyperCode.html';
});
document.getElementById('examplesBtn').addEventListener('click', ()=> {
  alert('Examples: mem.alloc, op.register, thread.spawn, templates.register — open your IDE and paste examples.');
});
document.getElementById('docsBtn').addEventListener('click', ()=> {
  alert('Docs coming soon. Pro tip: "print.server" prints to the neon console.');
});
document.getElementById('tutorialBtn').addEventListener('click', ()=> {
  alert('Quick tutorial: 1) make.var x = 5  2) print.server("hey")  3) run()');
});

// keyboard ENTER opens IDE (same placeholder action)
window.addEventListener('keydown', (e) => { if(e.key === 'Enter') document.getElementById('enterBtn').click(); });

// small easter: click logo to flash colors
document.querySelector('.logo').addEventListener('click', (ev)=>{
  const el = ev.currentTarget;
  el.style.transition = 'transform 200ms ease, box-shadow 300ms';
  el.style.transform = 'scale(1.12)';
  setTimeout(()=> el.style.transform = '', 220);
});
