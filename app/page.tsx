"use client";

import { useEffect, useRef, useState } from "react";

type Portal = { name: string; kind?: string; memory?: string };

const rooms: { title: string; number: string; items: Portal[] }[] = [
  { title: "Food & Drink", number: "01", items: [
    { name: "Gewürztraminer", kind: "Wine", memory: "The three drinks, Gewürztraminer, a Hugo Spritz, and Dunkel, became my favorites during my first trip to Europe, and they’ve stayed with me ever since." },
    { name: "Hugo Spritz", kind: "Cocktail", memory: "The three drinks, Gewürztraminer, a Hugo Spritz, and Dunkel, became my favorites during my first trip to Europe, and they’ve stayed with me ever since." },
    { name: "Dunkel", kind: "Beer", memory: "The three drinks, Gewürztraminer, a Hugo Spritz, and Dunkel, became my favorites during my first trip to Europe, and they’ve stayed with me ever since." },
    { name: "Earl Grey", kind: "Tea", memory: "I remember drinking Earl Grey on a camping trip with my high school science club. Later, it became the tea I always kept in our home in Sausalito." },
    { name: "Iced Vanilla Latte", kind: "Coffee", memory: "An iced vanilla latte is so simple, yet somehow complex." },
    { name: "Benu", kind: "Restaurant", memory: "Benu was simply the best meal I’ve ever had. I still think about the way they cut the tofu. Wow." },
  ]},
  { title: "Desserts", number: "02", items: [
    { name: "Tiramisu", kind: "Cake" }, { name: "Red Velvet", kind: "Cupcake" }, { name: "Mango Pudding", kind: "Dessert" },
    { name: "Stracciatella", kind: "Ice Cream", memory: "Richard’s favorite ice cream was stracciatella." },
  ]},
  { title: "Art & Culture", number: "03", items: [
    { name: "Ruth Asawa · Jackson Pollock · Robert Rauschenberg", kind: "Artists", memory: "Those three artists completely redefined what art meant to me." },
    { name: "Adam Barnes", kind: "Musician", memory: "I have a soft spot for Adam Barnes. He doesn’t make music anymore, but I remember he was opening for another artist, and I convinced my friends to drive all the way to Santa Cruz to see him. We were practically the only people in that bar for his set." },
    { name: "Frank Ocean", kind: "Musician", memory: "And I just love Frank Ocean. He really needs to make more music." },
    { name: "M+ · Louisiana Museum · Prado", kind: "Museums", memory: "M+ and the Louisiana Museum are simply gorgeous. M+ is endlessly thought-provoking, and the Louisiana Museum is worth every minute of the train ride. The Prado, on the other hand, asks you to simply stand still and consume the art in front of you." },
  ]},
  { title: "Film & Games", number: "04", items: [
    { name: "Inception · Snowpiercer", kind: "Films", memory: "I used to watch Inception over and over again. Snowpiercer was incredibly thought-provoking, although I don’t know if I could stomach watching it again. Even so, I know the plots of both films by heart." },
    { name: "God of War", kind: "Video Game", memory: "God of War is the only video game I’ve ever finished from beginning to end. I played it during COVID, and the storyline was incredible." },
  ]},
  { title: "Nature", number: "05", items: [
    { name: "Leafy Sea Dragon", kind: "Animal", memory: "I fell in love with the leafy sea dragon the first time I saw one at the Monterey Bay Aquarium. I’ve since seen them at two other aquariums, although Monterey Bay and Cal Academy no longer have them." },
    { name: "Eurasian Tree Sparrow", kind: "Birdsong", memory: "The song of the Eurasian tree sparrow became the soundtrack of my China summer." },
    { name: "Tulips", kind: "Flowers", memory: "My friends and I once drove all the way to Oregon and slept in the car just to visit a tulip farm." },
    { name: "Aspen leaves", kind: "The way they shimmer in the wind", memory: "Aspen trees remind me of all the times I’ve been to Colorado." },
  ]},
  { title: "California", number: "06", items: [
    { name: "Lassen Volcanic National Park", kind: "National Park", memory: "Lassen is peaceful, beautiful, and home to an incredible variety of geological features." },
    { name: "Tennessee Valley Trail", kind: "California Trail", memory: "The Tennessee Valley Trail was one of our favorite places to hike when I lived in Sausalito." },
  ]},
  { title: "Travel", number: "07", items: [
    { name: "Over Vidden", kind: "Fløyen → Ulriken · Bergen, Norway", memory: "Over Vidden was breathtaking from every single angle." },
    { name: "Bhutan", kind: "Bucket List", memory: "I met a man from Bhutan while studying abroad, and I told myself I would visit one day. It’s been over ten years, and I still swear I’m going to make it there." },
    { name: "Children’s books and picture books", kind: "Souvenir", memory: "I love seeing how a region’s artists and writers portray what they believe is important for children. Over time, I’ve expanded this to include picture books as well, since not every country has a geographically specific children’s book." },
  ]},
  { title: "Little Joys", number: "08", items: [
    { name: "A Muji pen that glides effortlessly" }, { name: "A window seat on a domestic flight" },
    { name: "A tasting menu in another country", memory: "I love tasting menus, especially when I’m traveling somewhere that doesn’t share my language. It’s a wonderful way to let a chef tell the story of a place through food." },
    { name: "Entering a clearing in the middle of a long hike" }, { name: "Finding the moon all over the world" },
  ]},
];

const awe = ["Seeing Paradise Meadow", "Eating uni at the Tsukiji Fish Market", "Watching Inception in theatre. And seeing Black Swan and Gone Girl", "First time being high", "Horseshoe Bend in the morning", "Walking along the upper ridge of the Austrian Alps (Schmittenhohe)", "Seeing Lady Gaga at Coachella", "Seeing the Matterhorn when the cloud cleared over Zermatt"];
const adult = ["Standing in my grandparents’ apartment’s elevator on Grant Street. I told them a friend was driving them. Grandma asked, “Friend or boyfriend?” I smiled and said, “Boyfriend.” She took Grandpa’s hand and said, “Salene has a boyfriend.”", "The day the shelter-in-place order was announced. I was sitting in the upstairs living room at my old workplace. I called my mom and told her I had a boyfriend and that I was going to live with him.", "Being asked to be my friends’ child emergency contact", "When I was babysitting and working through a worksheet about consent with a child, and he named me as one of his trusted adult"];
const loss = ["When my endocrinologist whom I have never met before, told me I have cancer.", "When I woke up from my surgery and I had to take my calcium pill. The realization that that was going to be the rest of my life, I wouldn’t be able to survive without pills anymore.", "When I was in bed and my phone was silent, but I woke up and I received the call that Grandpa had passed away. I took a shower. I never saw his body.", "When I was on the way to my parents house and I received the call that Grandpa had moved on. There was a rainbow.", "When I was at work and I received the call that Richard had passed. I broke down in my classroom.", "When my ex asked for a break. For a moment, the world stopped spinning.", "Packing Mr. Bear and Mr. Sheep in a box.", "Walking to work, looking up, staring at the leaves fluttering on a tree, and realizing I couldn’t feel joy."];
const thresholds = [
  ["SAUSALITO", "The first time I saw the empty Sausalito townhouse before we moved in."],
  ["INFINITY", "The last night in Infinity. We cleaned the apartment and closed the door for the last time."],
  ["THE BEDROOM", "The night my partner and I officially broke up. The door shut behind him, and I lay alone in what had been our bed."],
  ["BUENA VISTA", "The first night alone in my Buena Vista apartment after my mom and brother left."],
  ["WHOLE FOODS", "The first time I went to Whole Foods to grocery shop after moving into my new apartment. I stood in the frozen aisle, cried and left. I could not imagine cooking just for one."],
  ["THE OLD VIEW", "The first time I went back to the Sausalito apartment when it was no longer our apartment. I saw the way Brian had decorated the place. I looked out the living room window and it hit me, it was no longer my living room view anymore. It was his."],
  ["THE FIRST DATE", "The first date I went on after my long-term relationship. I did not throw up."],
  ["SEND", "The moment I pressed “Send” on my resignation email after loving a place for seven years, with nothing lined up."],
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
  const [entered, setEntered] = useState(false);
  const [portal, setPortal] = useState<Portal | null>(null);
  const [door, setDoor] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (portal) dialogRef.current?.focus(); }, [portal]);

  return <main>
    <section className={`opening ${entered ? "departed" : ""}`} aria-label="Museum entrance">
      <p className="eyebrow">A PERSONAL MUSEUM</p>
      <h1>AN AUTOBIOGRAPHY<br/>TOLD THROUGH LOVE</h1>
      <p className="subtitle">A collection of things that delighted me, changed me, broke me, and brought me home.</p>
      <button className="enter" onClick={() => { setEntered(true); setTimeout(() => document.querySelector("#collection")?.scrollIntoView({behavior:"smooth"}), 450); }}>Enter the collection <span>↓</span></button>
      <div className="moon" aria-hidden="true" />
      <p className="entrance-note">An autobiography measured in<br/>affections, not years.</p>
    </section>

    <nav className="museum-nav" aria-label="Museum rooms"><a href="#collection">The collection</a><a href="#moments">Altered chemistry</a><a href="#thresholds">Thresholds</a><a href="#home">Coming home</a></nav>

    <section id="collection" className="collection">
      <header className="section-intro reveal"><p className="eyebrow">ROOMS 01–08</p><h2>The Things<br/><em>I Love</em></h2><p>Begin anywhere. The objects know the way.</p></header>
      <div className="rooms">
        {rooms.map((room) => <article className={`room room-${room.number}`} key={room.title}>
          <header><span>{room.number}</span><h3>{room.title}</h3><small>{String(room.items.length).padStart(2,"0")} OBJECTS</small></header>
          <div className="object-grid">
            {room.items.map((item) => <button key={item.name} className={`object ${item.name.includes("Aspen") ? "aspen" : ""} ${item.name === "Stracciatella" ? "quiet" : ""}`} onClick={() => item.memory && setPortal(item)} disabled={!item.memory}>
              <span className="kind">{item.kind || ""}</span><strong>{item.name}</strong>{item.memory && <span className="inspect">open memory ↗</span>}
              {item.name.includes("Aspen") && <i className="leaves" aria-hidden="true">● ● ● ● ● ●</i>}
            </button>)}
          </div>
          {room.title === "Nature" && <SparrowSound />}
        </article>)}
      </div>
      <p className="ordinary">Not everything we love needs to be profound<br/>to belong in the story of our lives.</p>
    </section>

    <section id="moments" className="moments">
      <header className="moments-title"><p className="eyebrow">ROOMS 09–12 · PLEASE MOVE GENTLY</p><h2>Moments That Altered<br/>My Brain Chemistry</h2></header>
      <article className="deep-room awe"><div className="sticky"><p>09</p><h3>Awe</h3><span>The world, briefly<br/>larger than language.</span></div><ol>{awe.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p>{x.includes("Matterhorn") && <div className="matterhorn" aria-hidden="true"><i/><b>clouds clear on hover</b></div>}</li>)}</ol></article>
      <article className="deep-room adult"><div className="sticky"><p>10</p><h3>Becoming<br/>an Adult</h3><span>No ceremony.<br/>Just a before and after.</span></div><ol>{adult.map((x,i)=><li key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p></li>)}</ol></article>
      <article className="loss"><header><p>ROOM 11</p><h3>Loss</h3></header><div className="loss-list">{loss.map((x,i)=><p key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</p>)}</div></article>
    </section>

    <section id="thresholds" className="thresholds">
      <header><p className="eyebrow">ROOM 12 · A HALLWAY</p><h2>Thresholds</h2><p>Every door is both an entrance and an exit.</p></header>
      <div className="hallway">
        {thresholds.map(([label,text],i)=><button className={`door ${door===i ? "open" : ""}`} key={label} onClick={()=>setDoor(door===i?null:i)} aria-expanded={door===i}>
          <span className="door-number">{String(i+1).padStart(2,"0")}</span><span className="door-face"><i/><b>{label}</b><em>enter</em></span><span className="door-memory">{text}</span>
        </button>)}
      </div>
      <p className="blank-space">And then, for a while, nothing lined up.</p>
    </section>

    <section id="home" className="coming-home">
      <div className="home-mark">⌂</div><p className="eyebrow">THE FINAL ROOM</p><h2>Coming Home</h2>
      <div className="essay">
        <p>There was a time when I didn’t know who I was anymore.</p>
        <p>I felt like I had lost my spark. I remember telling a friend, “I don’t know who I am anymore,” and they replied, “What do you mean? You’re Salene.” But that wasn’t the question I was asking.</p>
        <p>I went to therapy and said, “I want to know who I am. I want to know who I am outside of a long-term relationship. I want to know who I am outside of all the external identities I’ve placed on myself. Who is Salene if she’s not a preschool teacher? Who is Salene if she’s not in a long-term relationship.”</p>
        <p>For a long time, I didn’t have an answer.</p>
        <p>I spent a year at rock bottom. And then I spent another year on a pilgrimage to find my way back to myself.</p>
        <p>Maybe this collection is part of that pilgrimage. It began as a list of favorite things, but somewhere along the way it became a map. Every entry became a reminder: this still delights me. This still moves me. This still feels like home.</p>
        <p>I don’t know if anyone can ever say they’ve completely arrived. Maybe coming home to yourself isn’t a destination so much as a practice of remembering. But if I ever lose my way again, I hope this collection reminds me of who I am.</p>
        <p className="last">Let it stand as a testament to all the things I have loved, and all the ways I have been changed.</p>
      </div>
      <footer><span>Last updated: whenever I discover something else I love.</span><a href="#collection">Begin again ↑</a></footer>
    </section>

    {portal && <div className="portal-backdrop" onClick={()=>setPortal(null)} role="presentation"><div className={`portal ${portal.name === "Stracciatella" ? "stracciatella" : ""}`} role="dialog" aria-modal="true" aria-label={`Memory: ${portal.name}`} tabIndex={-1} ref={dialogRef} onClick={e=>e.stopPropagation()}>
      <button className="close" onClick={()=>setPortal(null)} aria-label="Close memory">×</button><p>{portal.kind || "OBJECT"}</p><h3>{portal.name}</h3><blockquote>{portal.memory}</blockquote>
    </div></div>}
  </main>;
}
