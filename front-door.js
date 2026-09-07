const motionButtons = [...document.querySelectorAll('#motion-toggle,[data-motion-toggle]')];
function toggleMotion() {
 const paused = document.body.classList.toggle('motion-paused');
 motionButtons.forEach(button => {
  button.setAttribute('aria-pressed', String(paused));
  button.setAttribute('aria-label', paused ? 'Resume motion' : 'Pause motion');
  if (button.id === 'motion-toggle') button.textContent = paused ? 'Resume motion' : 'Pause motion';
  else button.querySelector('path').setAttribute('d', paused ? 'M5 3l8 5-8 5Z' : 'M5 3v10M11 3v10');
 });
}
motionButtons.forEach(button => button.addEventListener('click', toggleMotion));

const roomLinks = [...document.querySelectorAll('.room-spine a')];
const roomSelect = document.querySelector('#room-select');
const rooms = roomLinks.map(link => document.querySelector(link.getAttribute('href')));
let framePending = false;
function updateRoom() {
  let current = rooms[0];
  for (const room of rooms) if (room.getBoundingClientRect().top <= innerHeight * .35) current = room;
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) current = rooms[rooms.length - 1];
  roomLinks.forEach(link => { if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  roomSelect.value = current.id;
  framePending = false;
}
function scheduleRoom() { if (!framePending) { framePending = true; requestAnimationFrame(updateRoom); } }
addEventListener('scroll', scheduleRoom, {passive:true});
addEventListener('resize', scheduleRoom);
addEventListener('load', updateRoom);
function goToRoom(id) {
  const room = document.getElementById(id);
  if (!room) return;
  history.pushState(null, '', '#' + id);
  room.scrollIntoView({behavior:'instant', block:'start'});
  updateRoom();
}
roomLinks.forEach(link => link.addEventListener('click', event => {event.preventDefault(); goToRoom(link.hash.slice(1));}));
roomSelect.addEventListener('change', () => goToRoom(roomSelect.value));
updateRoom();

// Artwork changes its caption; project titles retain their destination links.
document.querySelectorAll('.inspectable').forEach(artifact => {
 const front = artifact.querySelector('.artifact-front');
 const graphic = front.querySelector('img, svg, .folio-drawing');
 const blurb = artifact.querySelector('.project-blurb') || artifact.closest('#clay').querySelector('.project-blurb');
 const process = artifact.querySelector('.artifact-back p').textContent;
 const original = blurb.textContent;
 const name = front.querySelector('h3,h2')?.textContent || front.getAttribute('aria-label') || 'Project';
 const button = document.createElement('button');
 button.className = 'artifact-inspect';
 button.type = 'button';
 button.setAttribute('aria-label', name.replace('Enter ', '') + ' process note');
 button.setAttribute('aria-pressed', 'false');
 if (!blurb.id) blurb.id = artifact.querySelector('.artifact-back').id + '-caption';
 button.setAttribute('aria-describedby', blurb.id);
 graphic.before(button);
 button.append(graphic);
 // Keep interactive artwork and project links as siblings, never nested controls.
 front.before(button);
 if (!front.textContent.trim() && !front.children.length) {
  const heading = artifact.closest('#clay')?.querySelector('h2');
  if (heading) {const link = document.createElement('a');link.href = front.href;link.className = 'clay-title-link';while(heading.firstChild) link.append(heading.firstChild);heading.append(link);}
  front.remove();
 }
 artifact.querySelector('.turn-artifact').remove();
 artifact.querySelector('.artifact-back').remove();
 let toggled = false;
 const hover = matchMedia('(hover:hover) and (pointer:fine)');
 function show(active) {blurb.textContent = active ? process : original;button.setAttribute('aria-pressed', String(active));}
 button.addEventListener('pointerenter', event => {if(hover.matches && event.pointerType !== 'touch') show(true);});
 button.addEventListener('pointerleave', () => {if(hover.matches) {toggled=false;show(false);}});
 button.addEventListener('click', event => {if(!hover.matches || event.detail === 0) {toggled=!toggled;show(toggled);}});
 button.addEventListener('blur', () => {toggled=false;show(false);});
 button.addEventListener('keydown', event => {if(event.key === 'Escape') {toggled=false;show(false);}});
});
