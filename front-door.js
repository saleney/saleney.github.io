const motion = document.querySelector('#motion-toggle');
motion.addEventListener('click',()=>{const paused=document.body.classList.toggle('motion-paused');document.querySelectorAll('.studio-orbit,.studio-line path').forEach(element=>element.style.setProperty('animation-play-state',paused?'paused':'running','important'));motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Resume motion':'Pause motion';});

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
