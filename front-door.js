const toggle = document.querySelector('.index-toggle');
const panel = document.querySelector('.studio-index');
function closeIndex() { panel.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); }
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));panel.classList.toggle('is-open',open);});
panel.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeIndex));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&panel.classList.contains('is-open')){closeIndex();toggle.focus();}});
const motion = document.querySelector('#motion-toggle');
motion.addEventListener('click',()=>{const paused=document.body.classList.toggle('motion-paused');motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Resume motion':'Pause motion';});
