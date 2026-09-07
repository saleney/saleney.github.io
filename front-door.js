const motion = document.querySelector('#motion-toggle');
motion.addEventListener('click',()=>{const paused=document.body.classList.toggle('motion-paused');document.querySelectorAll('.studio-orbit,.studio-line path').forEach(element=>element.style.setProperty('animation-play-state',paused?'paused':'running','important'));motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Resume motion':'Pause motion';});

const roomLinks = [...document.querySelectorAll('.room-spine a')];
const roomSelect = document.querySelector('#room-select');
roomSelect.style.appearance = 'none';
roomSelect.style.webkitAppearance = 'none';
roomSelect.style.paddingRight = '22px';
roomSelect.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' fill='none' stroke='%23252622' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")";
roomSelect.style.backgroundRepeat = 'no-repeat';
roomSelect.style.backgroundPosition = 'right 2px center';
roomSelect.style.backgroundSize = '10px 7px';
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