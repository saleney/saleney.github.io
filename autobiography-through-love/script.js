const rooms = [
  {
    title: "Food & Drink",
    number: "01",
    items: [
      {
        name: "Gewürztraminer",
        kind: "Wine",
        memory:
          "I discovered Gewürztraminer, a Hugo Spritz, and Dunkel on my first trip to Europe. They became my favorites then, and they’ve stayed with me ever since.",
      },
      {
        name: "Hugo Spritz",
        kind: "Cocktail",
        memory:
          "I discovered Gewürztraminer, a Hugo Spritz, and Dunkel on my first trip to Europe. They became my favorites then, and they’ve stayed with me ever since.",
      },
      {
        name: "Dunkel",
        kind: "Beer",
        memory:
          "I discovered Gewürztraminer, a Hugo Spritz, and Dunkel on my first trip to Europe. They became my favorites then, and they’ve stayed with me ever since.",
      },
      {
        name: "Earl Grey",
        kind: "Tea",
        memory:
          "I remember drinking Earl Grey on a camping trip with my high school science club. Later, it became the tea I always kept in our home in Sausalito.",
      },
      {
        name: "Iced Vanilla Latte",
        kind: "Coffee",
        memory:
          "I love that an iced vanilla latte is so simple, yet somehow complex.",
      },
      {
        name: "Benu",
        kind: "Restaurant",
        memory:
          "I had the best meal of my life at Benu. I still think about the way they cut the tofu. Wow.",
      },
    ],
  },
  {
    title: "Desserts",
    number: "02",
    items: [
      {
        name: "Tiramisu & Red Velvet",
        kind: "Cake & Cupcake",
        memory:
          "I think of birthday celebrations whenever I have tiramisu or red velvet.",
      },
      {
        name: "Mango Pudding",
        kind: "Dessert",
        memory:
          "Mango pudding reminds me of my childhood, when my parents made it for me.",
      },
      {
        name: "Stracciatella",
        kind: "Ice Cream",
        memory:
          "I think of someone I loved whenever I see stracciatella. It was his favorite ice cream.",
      },
    ],
  },
  {
    title: "Art & Culture",
    number: "03",
    items: [
      {
        name: "Ruth Asawa · Jackson Pollock · Robert Rauschenberg",
        kind: "Artists",
        memory:
          "I understood art differently after encountering these three artists. They completely redefined what it meant to me.",
      },
      {
        name: "Adam Barnes & Frank Ocean",
        kind: "Musicians",
        memory:
          "I have a soft spot for Adam Barnes. I once convinced my friends to drive all the way to Santa Cruz to see him open for another artist, and we were practically the only people in the bar for his set. I just love Frank Ocean, too. Neither of them makes music anymore. They really need to make more.",
      },
      {
        name: "M+ · Louisiana Museum · Prado",
        kind: "Museums",
        memory:
          "I find M+ endlessly thought-provoking, and I would take every minute of the train ride to the Louisiana Museum again. At the Prado, I only wanted to stand still and take in the art in front of me.",
      },
    ],
  },
  {
    title: "Film & Games",
    number: "04",
    items: [
      {
        name: "Inception · Snowpiercer",
        kind: "Films",
        memory:
          "I used to watch Inception over and over again. I found Snowpiercer incredibly thought-provoking, although I don’t know if I could stomach watching it again. Even so, I know the plots of both films by heart.",
      },
      {
        name: "God of War",
        kind: "Video Game",
        memory:
          "God of War is the only video game I’ve ever finished from beginning to end. I played it during COVID, and the storyline was incredible.",
      },
    ],
  },
  {
    title: "Nature",
    number: "05",
    items: [
      {
        name: "Leafy Sea Dragon",
        kind: "Animal",
        memory:
          "I fell in love with the leafy sea dragon the first time I saw one at the Monterey Bay Aquarium. I’ve since seen them at two other aquariums, although Monterey Bay and Cal Academy no longer have them.",
      },
      {
        name: "Eurasian Tree Sparrow",
        kind: "Birdsong",
        memory:
          "I heard the Eurasian tree sparrow everywhere during my summer in China. Its song became the soundtrack of that time.",
      },
      {
        name: "Tulips",
        kind: "Flowers",
        memory:
          "My friends and I once drove all the way to Oregon and slept in the car just to visit a tulip farm.",
      },
      {
        name: "Aspen leaves",
        kind: "The way they shimmer in the wind",
        memory: "Aspen trees remind me of all the times I’ve been to Colorado.",
      },
    ],
  },
  {
    title: "California",
    number: "06",
    items: [
      {
        name: "Lassen Volcanic National Park",
        kind: "National Park",
        memory:
          "I love Lassen for its peace, its beauty, and its incredible variety of geological features.",
      },
      {
        name: "Tennessee Valley Trail",
        kind: "California Trail",
        memory:
          "I remember Tennessee Valley as a favorite place to hike during the years I lived in Sausalito.",
      },
    ],
  },
  {
    title: "Travel",
    number: "07",
    items: [
      {
        name: "Over Vidden",
        kind: "Fløyen → Ulriken · Bergen, Norway",
        memory: "I found Over Vidden breathtaking from every single angle.",
      },
      {
        name: "Bhutan",
        kind: "Bucket List",
        memory:
          "I met a man from Bhutan while studying abroad, and I told myself I would visit one day. It’s been over ten years, and I still swear I’m going to make it there.",
      },
      {
        name: "Children’s books and picture books",
        kind: "Souvenir",
        memory:
          "I love seeing how a region’s artists and writers portray what they believe is important for children. Over time, I’ve expanded this to include picture books as well, since not every country has a geographically specific children’s book.",
      },
    ],
  },
  {
    title: "Little Joys",
    number: "08",
    items: [
      { name: "A Muji pen that glides effortlessly" },
      { name: "A window seat on a domestic flight" },
      {
        name: "A tasting menu in another country",
        memory:
          "I love tasting menus, especially when I’m traveling somewhere that doesn’t share my language. It’s a wonderful way to let a chef tell the story of a place through food.",
      },
      { name: "Entering a clearing in the middle of a long hike" },
      { name: "Finding the moon all over the world" },
    ],
  },
];
const awe = [
  "Seeing Paradise Meadow",
  "Eating uni at the Tsukiji Fish Market",
  "The first time watching Inception and Black Swan in theater",
  "First time being high",
  "Horseshoe Bend in the morning",
  "Walking along the upper ridge of the Austrian Alps (Schmittenhohe)",
  "Seeing Lady Gaga at Coachella",
  "Seeing the Matterhorn when the cloud cleared over Zermatt",
];
const adult = [
  "Being asked to be my friends’ child emergency contact",
  "Working through a worksheet about consent with a child, and hearing him name me as one of his trusted adults",
  "At the dentist, someone asked if I was the mom. For a second, I thought: Oh my God. I’ve reached the age where I could actually be someone’s mother. Somewhere along the way, I stopped being automatically mistaken for the big sister.",
];
const loss = [
  "Meeting my endocrinologist for the first time that day, and her telling me I had cancer.",
  "Waking up from surgery and taking the first pill I would need for the rest of my life. I understood, all at once, that my body had changed.",
  "Waking up to the call that Grandpa had passed away. I took a shower. I never saw his body.",
  "Receiving a phone call on the way to my parents’ house that Grandpa had moved on. There was a rainbow.",
  "Receiving the call while I was at work that Richard, a dear friend of mine, had passed. I broke down in my classroom.",
  "Packing Mr. Bear and Mr. Sheep in a box.",
  "Looking up at leaves fluttering on a tree and realized I couldn’t feel joy.",
];
const thresholds = [
  ["KOREA", "My last minute decision to study abroad became the best decision of my life. That summer changed the way I interacted with the world."],
  ["SAUSALITO", "The first time I saw the empty Sausalito townhouse before we moved in."],
  ["INFINITY", "The last night in Infinity. We cleaned the apartment and closed the door for the last time."],
  ["BUENA VISTA", "The first night alone in my Buena Vista apartment after my mom and brother left."],
  ["WHOLE FOODS", "I stood in the frozen aisle, cried, and left. I could not imagine cooking just for one."],
  ["THE OLD VIEW", "I returned to the home we had shared and realized the view was no longer mine."],
  ["THE FIRST DATE", "I went on my first date after my long term relationship ended. I did not throw up."],
  ["SEND", "I pressed “Send” on my resignation email after loving a place for six years. I had nothing lined up."],
];

const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const scrollBehavior = () => (prefersReducedMotion.matches ? "auto" : "smooth");
const roomsEl = document.querySelector("#rooms");
rooms.forEach((room) => {
  const article = document.createElement("article");
  article.className = `room room-${room.number}`;
  article.innerHTML = `<header><span>${room.number}</span><h3>${esc(room.title)}</h3><small>${String(room.items.length).padStart(2, "0")} OBJECTS</small></header><div class="object-grid">${room.items.map((item, i) => {
    const tag = item.memory ? "button" : "div";
    const attrs = item.memory ? `type="button" data-room="${room.number}" data-item="${i}"` : "";
    return `<${tag} class="object ${item.name.includes("Aspen") ? "aspen" : ""} ${item.name === "Stracciatella" ? "quiet" : ""}" ${attrs}><span class="kind">${esc(item.kind || "")}</span><strong>${esc(item.name)}</strong>${item.memory ? '<span class="inspect">open memory ↗</span>' : ""}${item.name.includes("Aspen") ? '<i class="leaves" aria-hidden="true">● ● ● ● ● ●</i>' : ""}</${tag}>`;
  }).join("")}</div>${room.title === "Nature" ? '<button class="sound" type="button"><span>♪</span> a small impression of birdsong</button>' : ""}`;
  roomsEl.append(article);
});
const renderList = (id, data) => {
  document.querySelector(id).innerHTML = data.map((x, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span><p>${esc(x)}</p>${x.includes("Matterhorn") ? '<div class="matterhorn" aria-hidden="true"><i></i><b>clouds clear on hover</b></div>' : ""}</li>`).join("");
};
renderList("#awe-list", awe);
renderList("#adult-list", adult);
document.querySelector("#loss-list").innerHTML = loss.map((x, i) => `<p><span>${String(i + 1).padStart(2, "0")}</span>${esc(x)}</p>`).join("");
document.querySelector("#hallway").innerHTML = thresholds.map(([label, text], i) => `<button class="door" type="button" aria-expanded="false"><span class="door-number">${String(i + 1).padStart(2, "0")}</span><span class="door-face"><i></i><b>${esc(label)}</b><em>enter</em></span><span class="door-memory">${esc(text)}</span></button>`).join("");

const portal = document.querySelector("#portal"), box = portal.querySelector(".portal"), closeButton = portal.querySelector(".close"), main = document.querySelector("main");
let lockedScrollY = 0, lastTrigger = null;
const lockPage = () => {
  lockedScrollY = window.scrollY;
  main.setAttribute("inert", "");
  document.body.classList.add("modal-open");
  document.body.style.top = `-${lockedScrollY}px`;
};
const unlockPage = () => {
  main.removeAttribute("inert");
  document.body.classList.remove("modal-open");
  document.body.style.top = "";
  window.scrollTo(0, lockedScrollY);
  lastTrigger?.focus();
};
document.addEventListener("click", (e) => {
  const object = e.target.closest(".object[data-room]");
  if (object) {
    const room = rooms.find((r) => r.number === object.dataset.room), item = room.items[Number(object.dataset.item)];
    lastTrigger = object;
    document.querySelector("#portal-kind").textContent = item.kind || "OBJECT";
    document.querySelector("#portal-title").textContent = item.name;
    document.querySelector("#portal-memory").textContent = item.memory;
    box.classList.toggle("stracciatella", item.name === "Stracciatella");
    lockPage();
    portal.hidden = false;
    box.scrollTop = 0;
    closeButton.focus();
  }
  const door = e.target.closest(".door");
  if (door) {
    door.classList.toggle("open");
    door.setAttribute("aria-expanded", door.classList.contains("open"));
  }
});
const closePortal = () => {
  if (portal.hidden) return;
  portal.hidden = true;
  unlockPage();
};
closeButton.addEventListener("click", closePortal);
portal.addEventListener("click", (e) => { if (e.target === portal) closePortal(); });
document.addEventListener("keydown", (e) => {
  if (portal.hidden) return;
  if (e.key === "Escape") closePortal();
  if (e.key === "Tab") { e.preventDefault(); closeButton.focus(); }
});
document.querySelector(".enter").addEventListener("click", () => document.querySelector("#collection").scrollIntoView({ behavior: scrollBehavior() }));
document.addEventListener("click", (e) => {
  const sound = e.target.closest(".sound");
  if (!sound) return;
  if (sound.dataset.playing === "true") {
    sound.dataset.playing = "false";
    sound.innerHTML = "<span>♪</span> a small impression of birdsong";
    return;
  }
  sound.dataset.playing = "true";
  sound.innerHTML = "<span>♫</span> birdsong playing · tap to stop";
});
