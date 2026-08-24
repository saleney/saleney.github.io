import { birds } from "./birds.js";

const appearanceChance = 0.34;
const visitDuration = 45000;
const birdPerches = [...document.querySelectorAll("[data-bird-perch]")];
const fieldGuide = document.querySelector("#bird-field-guide");
let activeBirdButton = null;

function openFieldGuide(bird, trigger) {
  fieldGuide.querySelector("[data-bird-name]").textContent = bird.commonName;
  fieldGuide.querySelector("[data-bird-scientific-name]").textContent =
    bird.scientificName;
  fieldGuide.querySelector("[data-bird-note]").textContent = bird.personalNote;

  const songButton = fieldGuide.querySelector("[data-bird-song]");
  const songStatus = fieldGuide.querySelector("[data-bird-song-status]");
  songButton.textContent = "▶ Hear its song";
  songButton.disabled = !bird.audioSrc;
  songStatus.hidden = Boolean(bird.audioSrc);
  songButton.onclick = bird.audioSrc
    ? () => new Audio(bird.audioSrc).play()
    : null;

  activeBirdButton = trigger;
  fieldGuide.showModal();
}

function addBirdVisitor(bird, birdPerch) {
  const birdButton = document.createElement("button");
  birdButton.className = `bird-visitor bird-visitor--${bird.illustration}`;
  birdButton.type = "button";
  birdButton.setAttribute(
    "aria-label",
    `A bird visitor: ${bird.commonName}. Open its field guide.`,
  );
  birdButton.innerHTML =
    '<span class="bird-illustration" aria-hidden="true"><span class="bird-eye"></span><span class="bird-wing"></span><span class="bird-foot bird-foot--left"></span><span class="bird-foot bird-foot--right"></span></span>';
  birdButton.addEventListener("click", () => openFieldGuide(bird, birdButton));
  birdPerch.append(birdButton);

  window.setTimeout(() => {
    if (!fieldGuide.open) birdButton.remove();
  }, visitDuration);
}

fieldGuide.addEventListener("click", (event) => {
  if (event.target === fieldGuide) fieldGuide.close();
});

fieldGuide
  .querySelector("[data-bird-close]")
  .addEventListener("click", () => fieldGuide.close());

fieldGuide.addEventListener("close", () => {
  activeBirdButton?.remove();
  activeBirdButton = null;
});

if (birdPerches.length && birds.length && Math.random() < appearanceChance) {
  const bird = birds[Math.floor(Math.random() * birds.length)];
  const eligiblePerches = birdPerches.filter((perch) => {
    const perchName = perch.dataset.birdPerch;
    return !bird.perches || bird.perches.includes(perchName);
  });
  const birdPerch =
    eligiblePerches[Math.floor(Math.random() * eligiblePerches.length)];

  if (birdPerch) addBirdVisitor(bird, birdPerch);
}
