"use client";

import { useEffect, useRef, useState } from "react";

type Edition = "public" | "private";
type Portal = { name: string; kind?: string; memory?: string; publicMemory?: string };
type Room = { title: string; number: string; items: Portal[] };

function makeCurrentMemoriesPublic(rooms: Room[]): Room[] {
  return rooms.map((room) => ({
    ...room,
    items: room.items.map((item) =>
      item.memory && !item.publicMemory
        ? { ...item, publicMemory: item.memory }
        : item,
    ),
  }));
}

function memoryForEdition(item: Portal, edition: Edition) {
  return edition === "public" ? item.publicMemory : item.memory;
}

const rooms: Room[] = makeCurrentMemoriesPublic([
  { title: "Food & Drink", number: "01", items: [
    { name: "Gewürztraminer", kind: "Wine", memory: "I discovered Gewürztraminer, a Hugo Spritz, and Dunkel on my first trip to Europe. They became my favorites then, and they’ve stayed with me ever since." },
    { name: "Hugo Spritz", kind: "Cocktail", memory: "I discovered Gewürztraminer, a Hugo Spritz, and Dunkel on my first trip to Europe. They became my favorites then, and they’ve stayed with me ever since." },
    { name: "Dunkel", kind: "Beer", memory: "I discovered Gewürztraminer, a Hugo Spritz, and Dunkel on my first trip to Europe. They became my favorites then, and they’ve stayed with me ever since." },
    { name: "Earl Grey", kind: "Tea", memory: "I remember drinking Earl Grey on a camping trip with my high school science club. Later, it became the tea I always kept in our home in Sausalito." },
    { name: "Iced Vanilla Latte", kind: "Coffee", memory: "I love that an iced vanilla latte is so simple, yet somehow complex." },
    { name: "Benu", kind: "Restaurant", memory: "I had the best meal of my life at Benu. I still think about the way they cut the tofu. Wow." },
  ]},
  { title: "Desserts", number: "02", items: [
    { name: "Tiramisu & Red Velvet", kind: "Cake & Cupcake", memory: "I think of birthday celebrations whenever I have tiramisu or red velvet." },
    { name: "Mango Pudding", kind: "Dessert", memory: "Mango pudding reminds me of my childhood, when my parents made it for me." },
    { name: "Stracciatella", kind: "Ice Cream", memory: "I think of Richard whenever I see stracciatella. It was his favorite ice cream.", publicMemory: "I think of someone I loved whenever I see stracciatella. It was his favorite ice cream." },
  ]},
  { title: "Art & Culture", number: "03", items: [
    { name: "Ruth Asawa · Jackson Pollock · Robert Rauschenberg", kind: "Artists", memory: "I understood art differently after encountering these three artists. They completely redefined what it meant to me." },
    { name: "Adam Barnes & Frank Ocean", kind: "Musicians", memory: "I have a soft spot for Adam Barnes. I once convinced my friends to drive all the way to Santa Cruz to see him open for another artist, and we were practically the only people in the bar for his set. I just love Frank Ocean, too. Neither of them makes music anymore. They really need to make more." },
    { name: "M+ · Louisiana Museum · Prado", kind: "Museums", memory: "I find M+ endlessly thought-provoking, and I would take every minute of the train ride to the Louisiana Museum again. At the Prado, I only wanted to stand still and take in the art in front of me." },
  ]},
  { title: "Film & Games", number: "04", items: [
    { name: "Inception · Snowpiercer", kind: "Films", memory: "I used to watch Inception over and over again. I found Snowpiercer incredibly thought-provoking, although I don’t know if I could stomach watching it again. Even so, I know the plots of both films by heart." },
    { name: "God of War", kind: "Video Game", memory: "God of War is the only video game I’ve ever finished from beginning to end. I played it during COVID, and the storyline was incredible." },
  ]},
  { title: "Nature", number: "05", items: [
    { name: "Leafy Sea Dragon", kind: "Animal", memory: "I fell in love with the leafy sea dragon the first time I saw one at the Monterey Bay Aquarium. I’ve since seen them at two other aquariums, although Monterey Bay and Cal Academy no longer have them." },
    { name: "Eurasian Tree Sparrow", kind: "Birdsong", memory: "I heard the Eurasian tree sparrow everywhere during my summer in China. Its song became the soundtrack of that time." },
    { name: "Tulips", kind: "Flowers", memory: "My friends and I once drove all the way to Oregon and slept in the car just to visit a tulip farm." },
    { name: "Aspen leaves", kind: "The way they shimmer in the wind", memory: "Aspen trees remind me of all the times I’ve been to Colorado." },
  ]},
  { title: "California", number: "06", items: [
    { name: "Lassen Volcanic National Park", kind: "National Park", memory: "I love Lassen for its peace, its beauty, and its incredible variety of geological features." },
    { name: "Tennessee Valley Trail", kind: "California Trail", memory: "I remember Tennessee Valley as one of our favorite places to hike when I lived in Sausalito.", publicMemory: "I remember Tennessee Valley as a favorite place to hike during the years I lived in Sausalito." },
  ]},
  { title: "Travel", number: "07", items: [
    { name: "Over Vidden", kind: "Fløyen → Ulriken · Bergen, Norway", memory: "I found Over Vidden breathtaking from every single angle." },
    { name: "Bhutan", kind: "Bucket List", memory: "I met a man from Bhutan while studying abroad, and I told myself I would visit one day. It’s been over ten years, and I still swear I’m going to make it there." },
    { name: "Children’s books and picture books", kind: "Souvenir", memory: "I love seeing how a region’s artists and writers portray what they believe is important for children. Over time, I’ve expanded this to include picture books as well, since not every country has a geographically specific children’s book." },
  ]},
  { title: "Little Joys", number: "08", items: [
    { name: "A Muji pen that glides effortlessly" }, { name: "A window seat on a domestic flight" },
    { name: "A tasting menu in another country", memory: "I love tasting menus, especially when I’m traveling somewhere that doesn’t share my language. It’s a wonderful way to let a chef tell the story of a place through food." },
    { name: "Entering a clearing in the middle of a long hike" }, { name: "Finding the moon all over the world" },
  ]},
]);

const awe = ["Seeing Paradise Meadow", "Eating uni at the Tsukiji Fish Market", "The first time watching Inception and Black Swan in theater", "First time being high", "Horseshoe Bend in the morning", "Walking along the upper ridge of the Austrian Alps (Schmittenhohe)", "Seeing Lady Gaga at Coachella", "Seeing the Matterhorn when the cloud cleared over Zermatt"];
const adult = ["Standing in my grandparents’ apartment’s elevator on Grant Street. I told them a friend was driving them. Grandma asked, “Friend or boyfriend?” I smiled and said, “Boyfriend.” She took Grandpa’s hand and said, “Salene has a boyfriend.”", "The day the shelter-in-place order was announced. I was sitting in the upstairs living room at my old workplace. I called my mom and told her I had a boyfriend and that I was going to live with him.", "Being asked to be my friends’ child emergency contact", "When I was babysitting and working through a worksheet about consent with a child, and he named me as one of his trusted adult"];
const loss = ["An endocrinologist I met for the first time that day told me I had cancer.", "When I woke up from my surgery and I had to take my calcium pill. The realization that that was going to be the rest of my life, I wouldn’t be able to survive without pills anymore.", "When I was in bed and my phone was silent, but I woke up and I received the call that Grandpa had passed away. I took a shower. I never saw his body.", "When I was on the way to my parents house and I received the call that Grandpa had moved on. There was a rainbow.", "When I was at work and I received the call that Richard had passed. I broke down in my classroom.", "When my ex asked for a break. For a moment, the world stopped spinning.", "Packing Mr. Bear and Mr. Sheep in a box.", "Walking to work, looking up, staring at the leaves fluttering on a tree, and realizing I couldn’t feel joy."];
const thresholds = [
  ["SAUSALITO", "The first time I saw the empty Sausalito townhouse before we moved in."],
  ["INFINITY", "The last night in Infinity. We cleaned the apartment and closed the door for the last time."],
  ["THE BEDROOM", "The night my partner and I officially broke up. The door shut behind him, and I lay alone in what had been our bed."],
  ["BUENA VISTA", "The first night alone in my Buena Vista apartment after my mom and brother left."],
  ["WHOLE FOODS", "The first time I went to Whole Foods to grocery shop after moving into my new apartment. I stood in the frozen aisle, cried and left. I could not imagine cooking just for one."],
  ["THE OLD VIEW", "The first time I went back to the Sausalito apartment when it was no longer our apartment. I saw the way Brian had decorated the place. I looked out the living room window and it hit me, it was no longer my living room view anymore. It was his."],
  ["THE FIRST DATE", "I went on my first date after my long term relationship ended. I did not throw up."],
  ["SEND", "The moment I pressed “Send” on my resignation email after loving a place for seven years, with nothing lined up."],
];

const publicAdult = [adult[2], adult[3]];
const publicLoss = [
  "An endocrinologist I met for the first time that day told me I had cancer.",
  "I woke up from surgery and took the first pill I would need for the rest of my life. I understood, all at once, that my body had changed.",
  "I woke to the call that Grandpa had passed away. I took a shower. I never saw his body.",
  "I was on the way to my parents’ house when I received the call that Grandpa had moved on. There was a rainbow.",
  "I was at work when I received the call that Richard had passed. I broke down in my classroom.",
  "I packed Mr. Bear and Mr. Sheep in a box.",
  "I looked up at leaves fluttering on a tree and realized I couldn’t feel joy.",
];
const publicThresholds = [
  thresholds[0],
  thresholds[1],
  thresholds[3],
  ["WHOLE FOODS", "I stood in the frozen aisle, cried, and left. I could not imagine cooking just for one."],
  ["THE OLD VIEW", "I returned to the home we had shared and realized the view was no longer mine."],
  ["THE FIRST DATE", "I went on my first date after my long term relationship ended. I did not throw up."],
  thresholds[7],
];

function SparrowSound() {
  const [on, setOn] = useState(false);
  const play = () => {
    setOn(true);
    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    [0, .12, .21].forEach((t, i) => {
      const osc = ctx.createOscillator(); const gain = ctx.createGain();
      osc.type = "sine"; osc.frequency.value = [2400, 3100, 2700][i];
      gain.gain.setValueAtTime(0, ctx.currentTime + t); gain.gain.linearRampToValueAtTime(.035, ctx.currentTime + t + .015); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + t + .09);
      osc.connect(gain).connect(ctx.destination); osc.start(ctx.currentTime + t); osc.stop(ctx.currentTime + t + .1);
    });
    setTimeout(() => setOn(false), 650);
  };
  return <button className={`sound ${on ? "playing" : ""}`} onClick={play} aria-label="Play a small musical impression of birdsong"><span>♪</span> a small impression of birdsong</button>;
}

export default function Home() {
  const [edition, setEdition] = useState<Edition>("public");
  const [entered, setEntered] = useState(false);
  const [portal, setPortal] = useState<Portal | null>(null);
  const [door, setDoor] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!portal) return;
    const scrollY = window.scrollY;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.classList.add("modal-open");
    document.body.style.top = `-${scrollY}px`;
    dialogRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPortal(null);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.classList.remove("modal-open");
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
      previousFocus?.focus();
    };
  }, [portal]);

  const displayedAdult = edition === "private" ? adult : publicAdult;
  const displayedLoss = edition === "private" ? loss : publicLoss;
  const displayedThresholds = edition === "private" ? thresholds : publicThresholds;

  return <main data-edition={edition}>
    <section className={`opening ${entered ? "departed" : ""}`} aria-label="Museum entrance">
      <p className="eyebrow">A PERSONAL MUSEUM</p>
      <h1>AN AUTOBIOGRAPHY<br/>TOLD THROUGH LOVE</h1>
      <p className="subtitle">A collection of things that delighted me, changed me, broke me, and brought me home.</p>
      <div className="edition-switch" role="group" aria-label="Choose an edition">
        <button className={edition === "public" ? "active" : ""} onClick={() => setEdition("public")} aria-pressed={edition === "public"}>Public edition</button>
        <button className={edition === "private" ? "active" : ""} onClick={() => setEdition("private")} aria-pressed={edition === "private"}>Private edition</button>
      </div>
      <p className="edition-note">{edition === "public" ? "The story, with a little held close." : "The complete archive. More names, more detail, less distance."}</p>
      <button className="enter" onClick={() => { setEntered(true); setTimeout(() => document.querySelector("#collection")?.scrollIntoView({behavior:"smooth"}), 450); }}>Enter the collection <span>↓</span></button>
      <div className="moon" aria-hidden="true" />
      <p className="entrance-note">An autobiography measured in<br/>affections, not years.</p>
    </section>

    <nav className="museum-nav" aria-label="Museum rooms"><span className="nav-edition">{edition} edition</span><a href="#collection">The collection</a><a href="#moments">Altered chemistry</a><a href="#thresholds">Thresholds</a><a href="#home">Coming home</a><button onClick={() => setEdition(edition === "public" ? "private" : "public")}>View {edition === "public" ? "private" : "public"}</button></nav>

    <section id="collection" className="collection">
      <header className="section-intro reveal"><p className="eyebrow">ROOMS 01–08</p><h2>The Things<br/><em>I Love</em></h2><p>Begin anywhere. The objects know the way.</p></header>
      <div className="rooms">
        {rooms.map((room) => <article className={`room room-${room.number}`} key={room.title}>
          <header><span>{room.number}</span><h3>{room.title}</h3><small>{String(room.items.length).padStart(2,"0")} OBJECTS</small></header>
          <div className="object-grid">
            {room.items.map((item) => {
              const memory = memoryForEdition(item, edition);
              return <button key={item.name} className={`object ${item.name.includes("Aspen") ? "aspen" : ""} ${item.name === "Stracciatella" ? "quiet" : ""}`} onClick={() => memory && setPortal(item)} disabled={!memory}>
                <span className="kind">{item.kind || ""}</span><strong>{item.name}</strong>{memory && <span className="inspect">open memory ↗</span>}
                {item.name.includes("Aspen") && <i className="leaves" aria-hidden="true">● ● ● ● ● ●</i>}
              </button>;
            })}
          </div>
          {room.title === "Nature" && <SparrowSound />}
        </article>)}
      </div>
      <p className="ordinary">Not everything we love needs to be profound<br/>to belong in the story of our lives.</p>
    </section>

    <section id="moments" className="moments">
      <header className="moments-title"><p className="eyebrow">ROOMS 09–12 · PLEASE MOVE GENTLY</p><h2>Moments That Altered<br/>My Brain Chemistry</h2></header>
      <article className="deep-room awe"><div className="sticky"><p>09</p><h3>Awe</h3><span>The world, briefly<br/>larger than language.</span></div><ol>{awe.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p>{x.includes("Matterhorn") && <div className="matterhorn" aria-hidden="true"><i/><b>clouds clear on hover</b></div>}</li>)}</ol></article>
      <article className="deep-room adult"><div className="sticky"><p>10</p><h3>Becoming<br/>an Adult</h3><span>No ceremony.<br/>Just a before and after.</span></div><ol>{displayedAdult.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p></li>)}</ol></article>
      <article className="loss"><header><p>ROOM 11</p><h3>Loss</h3>{edition === "public" && <span className="curatorial-note">Some things are allowed to remain unnamed.</span>}</header><div className="loss-list">{displayedLoss.map((x,i)=><p key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</p>)}</div></article>
    </section>

    <section id="thresholds" className="thresholds">
      <header><p className="eyebrow">ROOM 12 · A HALLWAY</p><h2>Thresholds</h2><p>Every door is both an entrance and an exit.</p></header>
      <div className="hallway">
        {displayedThresholds.map(([label,text],i)=><button className={`door ${door===i ? "open" : ""}`} key={label} onClick={()=>setDoor(door===i?null:i)} aria-expanded={door===i}>
          <span className="door-number">{String(i+1).padStart(2,"0")}</span><span className="door-face"><i/><b>{label}</b><em>enter</em></span><span className="door-memory">{text}</span>
        </button>)}
      </div>
      <p className="blank-space">And then, for a while, nothing lined up.</p>
    </section>

    <section id="home" className="coming-home">
      <div className="home-mark">⌂</div><p className="eyebrow">THE FINAL ROOM</p><h2>Coming Home</h2>
      <div className="essay">
        <p>There was a time when I didn’t know who I was anymore.</p>
        <p>I felt like I had lost my spark. I remember telling a friend, “I don’t know who I am anymore,” and they replied, “What do you mean? You’re Salene.”</p>
        <p>But, who was she? I wanted to know who I was outside of all the external identities I had built around myself. For a long time, I didn’t have an answer.</p>
        <p>Maybe this collection is part of my pilgrimage back to myself. It began as a list of favorite things, but somewhere along the way it became a map. Every entry became a reminder: this still delights me. This still moves me. This still feels like home.</p>
        <p>I don’t know if anyone can ever say they’ve completely arrived. Maybe coming home to yourself isn’t a destination so much as a practice of remembering. But if I ever lose my way again, I hope this collection reminds me of who I am.</p>
      </div>
      <footer><span>Last updated: whenever I discover something else I love.</span><a href="#collection">Begin again ↑</a></footer>
    </section>

    {portal && <div className="portal-backdrop"><button className="portal-dismiss" onClick={()=>setPortal(null)} aria-hidden="true" tabIndex={-1} /><div className={`portal ${portal.name === "Stracciatella" ? "stracciatella" : ""}`} role="dialog" aria-modal="true" aria-labelledby="memory-title" tabIndex={-1} ref={dialogRef}>
      <button className="close" onClick={()=>setPortal(null)} aria-label="Close memory">×</button><p>{portal.kind || "OBJECT"}</p><h3 id="memory-title">{portal.name}</h3><blockquote>{memoryForEdition(portal, edition)}</blockquote>
    </div></div>}
  </main>;
}
