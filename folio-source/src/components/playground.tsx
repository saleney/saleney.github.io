import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  List,
  Map,
  RotateCcw,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FieldArt, FieldTrace } from "./field-art";

type Project = {
  id: string;
  title: string;
  label: string;
  note: string;
  href: string;
  zone: number;
};

const projects: Project[] = [
  {
    id: "world",
    title: "Salene’s World",
    label: "THE ATLAS",
    note: "A world for practicing love, wonder, and presence.",
    href: "https://saleney.github.io/salenes-world/",
    zone: 0,
  },
  {
    id: "clay",
    title: "Virtual Clay Studio",
    label: "THE STUDIO",
    note: "A quiet, hands-on place to throw a small piece of virtual clay.",
    href: "https://saleney.github.io/virtual-clay-studio/",
    zone: 1,
  },
  {
    id: "aviary",
    title: "The Aviary",
    label: "THE FIELD",
    note: "A personal field journal of birds met along the way.",
    href: "https://saleney.github.io/my-aviary/",
    zone: 2,
  },
  {
    id: "autobiography",
    title: "An Autobiography Told Through Love",
    label: "THE ARCHIVE · A",
    note: "Things that delighted me, changed me, broke me, and brought me home.",
    href: "https://saleney.github.io/autobiography-through-love/",
    zone: 3,
  },
  {
    id: "ting",
    title: "听不懂",
    label: "THE ARCHIVE · B",
    note: "You booked the ticket. Now figure it out.",
    href: "https://saleney.github.io/ting-bu-dong/",
    zone: 3,
  },
  {
    id: "eightball",
    title: "Unhinged 8 Ball",
    label: "ORACLE · 01",
    note: "For questions that deserve an equally unhinged answer.",
    href: "https://saleney.github.io/unhinged-8-ball/",
    zone: 4,
  },
  {
    id: "badidea",
    title: "Bad Idea Generator",
    label: "ORACLE · 02",
    note: "Sometimes the worst idea is the beginning of something.",
    href: "https://saleney.github.io/bad-idea-generator/",
    zone: 4,
  },
  {
    id: "whatnow",
    title: "What Should We Do?",
    label: "THE PLAYROOM · IDEAS",
    note: "Screen-free ideas for bored kids and tired grown-ups.",
    href: "https://saleney.github.io/what-now/",
    zone: 5,
  },
  {
    id: "adventure",
    title: "A Little Adventure",
    label: "THE PLAYROOM · STORIES",
    note: "A choose-your-own-way story for kids and their grown-ups.",
    href: "https://saleney.github.io/a-little-adventure/",
    zone: 5,
  },
  {
    id: "ex",
    title: "Should I Text My Ex?",
    label: "ORACLE · 03",
    note: "Ask the coin. It has opinions.",
    href: "https://saleney.github.io/should-i-text-my-ex/",
    zone: 4,
  },
  {
    id: "redflag",
    title: "Am I the Red Flag?",
    label: "ORACLE · 04",
    note: "Tell the story. Receive a completely objective-ish verdict.",
    href: "https://saleney.github.io/am-i-the-red-flag/",
    zone: 4,
  },
  {
    id: "preschool",
    title: "Preschool Emergency Brain",
    label: "THE PLAYROOM · HELP",
    note: "For the moment your teacher brain goes blank.",
    href: "https://saleney.github.io/preschool-emergency-brain/",
    zone: 5,
  },
];

const folios = [
  { name: "The Atlas", className: "zone-atlas", heading: "Begin anywhere.", objects: [["world", "atlas"]] },
  { name: "The Studio", className: "zone-workshop", heading: "Things shaped by hand.", objects: [["clay", "clay"]] },
  { name: "The Field", className: "zone-field", heading: "Things noticed outside.", objects: [["aviary", "aviary"]] },
  { name: "The Archive", className: "zone-archive", heading: "Things kept close.", objects: [["autobiography", "archive"], ["ting", "language"]] },
  { name: "Games & Oracles", className: "zone-oracles", heading: "Ask. Pull. Flip.", objects: [["eightball", "orb"], ["badidea", "slip"], ["ex", "coin"], ["redflag", "flag"]] },
  { name: "The Playroom", className: "zone-playroom", heading: "Little people, big possibilities.", objects: [["adventure", "storybook"], ["whatnow", "tin"], ["preschool", "drawer"]] },
] as const;
const zoneNames = folios.map((folio) => folio.name);

function ProjectLink({ project }: { project: Project }) {
  return (
    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
      Enter this world <ExternalLink aria-hidden="true" />
    </a>
  );
}

// Pen-stroke annotations: custom paths, no text element or handwriting font.
const inkLetters: Record<string,string> = {
 c:"M11 7Q3 3 2 11T11 14", d:"M10 1L9 16M9 8Q1 3 2 12T9 13", m:"M1 7v9M1 10Q5 4 6 9v7M6 10Q11 3 12 9l1 7", s:"M11 7Q1 3 3 9l6 3Q12 17 1 15", w:"M1 6l2 10 5-8 2 8 4-10", y:"M1 6q0 13 9 3M11 6l-5 17-5 1", v:"M1 6l5 10 7-10", ',':"M4 16l-2 4", '+':"M6 5v10M1 10h10",
 a:"M9 8C2 3 0 13 4 15Q8 16 9 8L9 15l3-1", b:"M2 1l1 15M3 9Q11 3 11 11T3 15", e:"M2 10l9-1Q9 3 4 7T3 14q4 3 8-1", f:"M3 18L5 5Q6-1 11 2M1 8l9-1", g:"M10 7Q2 2 2 11T10 12M10 6l-1 14q-2 5-7 1", h:"M2 1L1 16M2 11Q8 3 9 9l1 7", i:"M4 7l-1 8 3-1M4 2l.2.3", k:"M2 1L1 16M10 6l-8 6 8 4", l:"M4 1Q0 12 3 16l4-2", n:"M2 7L1 16M2 11Q8 3 10 8l1 8", o:"M7 6C0 5-1 17 6 16S13 5 7 6", p:"M2 7L1 22M2 10Q10 3 11 10T2 15", r:"M2 7l-1 9M2 11Q7 4 11 7", t:"M5 2L3 13q0 5 6 1M0 7l10-1", u:"M2 6Q-1 19 7 15l3-9M10 7l-1 9 3-1"
};
function BlueprintInk({text}: {text:string}) {
 return <g transform="scale(.75)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">{Array.from(text).map((letter,index)=>inkLetters[letter]&&<path key={index} d={inkLetters[letter]} transform={`translate(${index*13} ${index%3}) rotate(${index%2?2:-3})`} strokeWidth="1.1"/>)}</g>;
}
function PenNote({lines,className=""}: {lines:string[];className?:string}) {
 const width=Math.max(...lines.map(line=>line.length))*13+12;
 return <svg className={`pen-note ${className}`} viewBox={`0 0 ${width} ${lines.length*28+20}`} role="img" aria-label={lines.join(". ")}>
 {lines.map((line,row)=>Array.from(line).map((letter,index)=>inkLetters[letter]&&<path key={`${row}-${index}`} d={inkLetters[letter]} transform={`translate(${index*13+4} ${row*28+5+(index%3-1)*.7}) rotate(${index%2?2:-3})`} strokeWidth={index%3===0?1.3:1.1}/>))}
 <path d={`M${width-37} ${lines.length*28+2}q-14 12-30 9m6-6-7 6 9 2`} strokeWidth="1.1"/>
 </svg>;
}

function SketchFrame({ variant = 0 }: { variant?: number }) {
  const outlines = [
    "M4 8 Q85 2 155 5 Q235 2 295 7 L297 96 Q300 165 294 194 Q215 201 148 196 Q70 202 7 195 Q1 127 4 8 Z",
    "M7 4 Q100 8 176 3 L292 6 Q299 82 295 135 L297 192 Q201 198 122 195 L5 198 Q2 106 7 4 Z",
    "M3 7 Q78 1 141 5 L294 3 Q301 77 296 124 L293 197 Q212 193 150 198 L8 195 Q1 147 3 7 Z",
  ];
  return <svg className="sketch-frame" viewBox="0 0 300 200" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d={outlines[variant % 3]} /><path className="sketch-retrace" d="M9 12 Q90 6 144 9 M289 143 l-1 44 M14 190 l69 2" /></svg>;
}

function ClayStudy() {
  return <span className="clay-working-study" aria-hidden="true">
    <svg viewBox="0 0 240 170" fill="none"><g className="construction-lines"><path d="M120 13 v137 M57 47 h126 M55 133 h134" strokeDasharray="2 5" /><ellipse cx="120" cy="137" rx="71" ry="18" /><path d="M43 55 v72 m-4 -67 4 -5 4 5 m-8 62 4 5 4 -5 M187 50 l20 -14" /></g><g className="clay-profile"><path d="M90 49 Q119 39 151 49 Q157 69 148 102 Q146 122 121 125 Q93 126 90 103 Q82 76 90 49 Z" /><ellipse cx="120" cy="49" rx="30" ry="7" /><path d="M91 84 q28 9 59 -1 M94 103 q25 8 52 0" /></g><path d="M187 34 q10 -9 25 -4 M181 135 q18 -5 25 3" /></svg>
    <span className="clay-swatches"><i /><i /><i /><small>glaze trials</small></span>
    <span className="clay-process"><i>01 · shape</i><span>→</span><i>02 · turn</i><span>→</span><i>03 · try again</i></span>
  </span>;
}

function MainArtifact({
  project,
  kind,
  open,
  onToggle,
  onExplore,
  onLeave,
  revealed,
  active,
  mobile,
}: {
  project: Project;
  kind: "atlas" | "clay" | "aviary" | "archive" | "language";
  open: boolean;
  onToggle: () => void;
  onExplore: () => void;
  onLeave: () => void;
  revealed: boolean;
  active: boolean;
  mobile: boolean;
}) {
  const icons = {
    atlas: <Map aria-hidden="true" />,
    clay: <svg viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M26 34 Q50 19 74 34 L68 72 Q50 82 32 72 Z" /><ellipse cx="50" cy="34" rx="24" ry="9" /><path d="M32 52 Q50 60 68 52 M34 64 Q50 71 66 64" /></svg>,
    aviary: <img className="aviary-original-art" src="/assets/project-icons/aviary-original.png" alt="" aria-hidden="true" />,
    archive: <BookOpen aria-hidden="true" />,
    language: null,
  };
  const prompts = {
    atlas: "Unfold the map",
    clay: "Lift the tracing paper",
    aviary: "Open the field guide",
    archive: "Turn the cover",
    language: "Lift the pages",
  };

  if (kind === "atlas") {
    return (
      <article className={cn("major-artifact", "major-artifact--atlas", "atlas-folio", open && "is-open")} id={`artifact-${project.id}`} onPointerEnter={(event) => { if (!mobile && event.pointerType === "mouse") onExplore(); }} onFocus={(event) => { if (event.target.matches(":focus-visible")) onExplore(); }} onPointerLeave={(event) => { if (!mobile && event.pointerType === "mouse") onLeave(); }} onBlur={(event) => { if (!mobile && !event.currentTarget.contains(event.relatedTarget)) onLeave(); }}>
        <span className="atlas-tape atlas-tape--one" aria-hidden="true" />
        <span className="atlas-tape atlas-tape--two" aria-hidden="true" />
        <button className="atlas-cover" onClick={mobile ? onToggle : onExplore} aria-expanded={open} aria-controls={`reveal-${project.id}`} aria-label={`${open ? (mobile ? "Fold" : "Explore") : "Unfold"} Salene’s World`}>
          <svg className="atlas-map" viewBox="0 0 500 240" fill="none" aria-hidden="true">
            <path className="atlas-land" d="M35 46 L168 32 L331 48 L466 33 L464 192 L329 207 L166 192 L36 207 Z" />
            <path d="M167 40 L163 192 M332 48 L328 201" strokeDasharray="3 6" opacity=".3" />
            <path d="M60 151 Q92 84 145 120 T248 109 T365 127 T442 76" strokeDasharray="4 7" />
            <path d="M77 85 l16 -26 19 27 M87 74 l7 6 7 -7 M371 170 q23 -40 45 -6 q-23 31 -45 6 Z M214 66 q16 -19 27 1 q-9 20 -27 -1 Z" />
            <circle cx="251" cy="113" r="8" /><path d="M246 113 l4 4 8 -10 M431 70 l12 6 -1 13" />
          </svg>
          <SketchFrame variant={0} /><PenNote lines={["unfurl here"]} className="atlas-pen-note" />
        </button>
        <div className="atlas-margin-note"><PenNote lines={["the map is not the territory", "but it is a good place to start"]} /></div>
        <div className="artifact-reveal atlas-inside" id={`reveal-${project.id}`} aria-hidden={!open || !active} inert={!open || !active}>
          <p className="specimen-label">THE ATLAS</p>
          <h2>{project.title}</h2>
          <p>{project.note}</p>
          <ProjectLink project={project} />
        </div>
        <div className="atlas-caption" aria-hidden={open}><h2>{project.title}</h2></div>
      </article>
    );
  }

  return (
    <article className={cn("major-artifact", `major-artifact--${kind}`, open && "is-open")} id={`artifact-${project.id}`} onPointerEnter={(event) => { if (!mobile && event.pointerType === "mouse") onExplore(); }} onFocus={(event) => { if (event.target.matches(":focus-visible")) onExplore(); }} onPointerLeave={(event) => { if (!mobile && event.pointerType === "mouse") onLeave(); }} onBlur={(event) => { if (!mobile && !event.currentTarget.contains(event.relatedTarget)) onLeave(); }}>
      <Button
        className="artifact-face"
        variant="ghost"
        onClick={mobile ? onToggle : onExplore}
        aria-expanded={open}
        aria-controls={mobile && project.zone !== 0 ? "field-mobile-reveal" : `reveal-${project.id}`}
      >
        <SketchFrame variant={project.zone} />{kind === "aviary" && <span className="guide-spine" aria-hidden="true" />}
        <span className="artifact-number">{String(project.zone + 1).padStart(2, "0")}</span>
        {kind === "clay" ? <ClayStudy /> : kind !== "language" && <span className="artifact-icon">{icons[kind]}</span>}
        {kind !== "clay" && <span className="working-annotation"><PenNote lines={kind === "aviary" ? ["look a little closer"] : kind === "archive" ? ["collected", "still collecting"] : ["notes in the margins"]} /></span>}
        {kind === "aviary" && <span className="aviary-coordinates" aria-label="Imagined field coordinates">37° 48′ N · 122° 16′ W</span>}
        <span className="artifact-title"><span className={kind === "archive" ? "sr-only" : undefined}>{project.title}</span>{kind === "archive" && <span className="book-cover-title" aria-hidden="true">An Autobiography<br />Told Through Love</span>}</span>
        <span className="sr-only">{prompts[kind]}</span>
        {kind === "clay" && <PenNote lines={["lift the page", "look beneath"]} className="clay-pen-note" />}
        {kind === "archive" && <PenNote lines={["flip here"]} className="archive-pen-note" />}
      </Button>
      <div className="artifact-reveal" id={`reveal-${project.id}`} aria-hidden={!open || !active} inert={!open || !active} hidden={mobile && project.zone !== 0}>
        <p className="specimen-label">{project.label}</p>
        <h3>{project.title}</h3>
        <p>{project.note}</p>
        <ProjectLink project={project} />
      </div>
    </article>
  );
}

function Curiosity({
  project,
  kind,
  open,
  onToggle,
  onExplore,
  onLeave,
  revealed,
  active,
  mobile,
}: {
  project: Project;
  kind: "orb" | "slip" | "tin" | "storybook" | "coin" | "flag" | "drawer";
  open: boolean;
  onToggle: () => void;
  onExplore: () => void;
  onLeave: () => void;
  revealed: boolean;
  active: boolean;
  mobile: boolean;
}) {
  const prompt = {
    orb: "Ask",
    slip: "Pull",
    tin: "Open",
    storybook: "Turn",
    coin: "Flip",
    flag: open ? "Furl" : "Unfurl",
    drawer: "Open",
  }[kind];
  const reveal = {
    orb: "OUTLOOK HAZY. TRY IT ANYWAY.",
    slip: "PERMISSION GRANTED: make the suspicious thing.",
    tin: "Try: build a blanket cave with one impossible rule.",
    storybook: "A path forks just beyond the brambles…",
    coin: "NO. Put the phone down gently.",
    flag: "Possibly. But self-awareness is promising.",
    drawer: "Stories, songs, transitions, rescue.",
  }[kind];

  return (
    <article className={cn("curiosity", `curiosity--${kind}`, open && "is-open", revealed && "is-revealed")} id={`artifact-${project.id}`} onPointerEnter={(event) => { if (!mobile && event.pointerType === "mouse") onExplore(); }} onFocus={(event) => { if (event.target.matches(":focus-visible")) onExplore(); }} onPointerLeave={(event) => { if (!mobile && event.pointerType === "mouse") onLeave(); }} onBlur={(event) => { if (!mobile && !event.currentTarget.contains(event.relatedTarget)) onLeave(); }}>
      <Button className="curiosity-object" variant="ghost" onClick={mobile ? onToggle : onExplore} aria-expanded={project.zone === 4 ? revealed : open} aria-controls={mobile ? "field-mobile-reveal" : `reveal-${project.id}`}>
        {["slip", "tin", "storybook", "drawer"].includes(kind) && <SketchFrame variant={project.title.length} />}
        <span className="sr-only">{prompt} {project.title}</span>
        {kind === "tin" && <svg className="playroom-plan" viewBox="0 0 150 100" fill="none" aria-hidden="true"><path d="M12 13 l126 -2 1 77 -126 1 Z M62 13 v30 m0 20 v26 M62 52 h76 M13 55 h28" /><path d="M23 24 h26 v20 H23 Z M84 22 h36 v18 H84 Z M80 65 h17 v14 H80 Z M111 64 h16 v15 h-16 Z M42 56 q20 0 20 20" strokeDasharray="2 3" /></svg>}
        {kind === "storybook" && <FieldArt kind="mountains" />}
        <span className="object-mark" aria-hidden="true">
          {kind === "orb" && "8"}
          {kind === "slip" && <span className="slot-machine" aria-hidden="true"><span className="slot-reels"><i><svg viewBox="0 0 30 36"><path d="M12 25 Q4 13 11 7 Q19 1 23 11 Q25 17 19 25 Z M12 29 h7 M13 33 h5 M14 17 l4 8" /></svg></i><i><svg viewBox="0 0 30 36"><path d="M6 19 L23 8 L19 29 L14 21 Z M14 21 l9 -13" /></svg></i><i><svg viewBox="0 0 30 36"><path d="M16 3 l-5 12 10 -1 -14 19 5 -13 -8 1 Z" /></svg></i></span><span className="slot-caption">bad ideas</span><span className="slot-lever" /></span>}
          {kind === "tin" && "What Should We Do?"}
          {kind === "storybook" && "A Little Adventure"}
          {kind === "coin" && (revealed ? "NO" : "?")}
          {kind === "flag" && <svg className="oracle-flag" viewBox="0 0 130 150" fill="none"><path className="flag-pole" d="M22 12 Q20 70 23 138 M12 139 h25" /><path className="flag-cloth" d="M23 18 Q48 6 70 20 Q93 32 117 17 L113 78 Q91 93 69 79 Q47 66 23 78 Z" /><path d="M27 25 Q47 16 64 27" /></svg>}
          {kind === "drawer" && <><span className="desk-project-name">Preschool<br />Emergency Brain</span><svg className="rescue-book-art" viewBox="0 0 120 100" fill="none" aria-hidden="true"><path d="M17 12 Q40 6 60 15 Q82 7 104 13 L103 83 Q80 78 60 89 Q40 79 17 83 Z" /><path d="M60 15 L60 89 M27 64 L49 64 M72 64 L94 64 M27 72 L44 72 M73 72 L94 72" /><path d="M31 37 l7 -13 7 13 14 3 -11 9 2 14 -12 -7 -12 7 2 -14 -11 -9 Z" /><path d="M83 30 v24 M71 42 h24" /></svg></>}
        </span>

      </Button>
      <div className="curiosity-note" id={`reveal-${project.id}`} aria-hidden={!revealed || !active} inert={!revealed || !active} hidden={mobile && project.zone !== 0}>
        <p className="specimen-label">{project.label}</p>
        <h3>{project.title}</h3>
        <p className="curiosity-result">{reveal}</p>
        <p>{project.note}</p>
        <ProjectLink project={project} />
      </div>
    </article>
  );
}

export function Playground() {
  const scroller = useRef<HTMLDivElement>(null);
  const [activeZone, setActiveZone] = useState(0);
  const [opened, setOpened] = useState<string[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);
  const [folioIndexOpen, setFolioIndexOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [projectSearch, setProjectSearch] = useState("");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 700px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const fieldSelection = [...opened].reverse()
    .map((id) => projects.find((project) => project.id === id))
    .find((project) => project?.zone === activeZone && project.zone !== 0);
  const mobileResults: Record<string, string> = {
    eightball: "OUTLOOK HAZY. TRY IT ANYWAY.", badidea: "PERMISSION GRANTED: make the suspicious thing.",
    whatnow: "Try: build a blanket cave with one impossible rule.", adventure: "A path forks just beyond the brambles…",
    ex: "NO. Put the phone down gently.", redflag: "Possibly. But self-awareness is promising.",
    preschool: "Stories, songs, transitions, rescue.",
  };
  const fieldResult = fieldSelection ? mobileResults[fieldSelection.id] : undefined;

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const width = el.clientWidth || 1;
      setActiveZone(Math.max(0, Math.min(folios.length - 1, Math.round(el.scrollLeft / width))));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const dismiss = (event: KeyboardEvent) => { if (event.key === "Escape") { setIndexOpen(false); setFolioIndexOpen(false); setHovered(null); setOpened([]); } };
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, []);

  const goToZone = (zone: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ left: zone * el.clientWidth, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    setIndexOpen(false);
    setFolioIndexOpen(false);
  };

  const findProject = (project: Project) => {
    goToZone(project.zone);
    setOpened((current) => (current.includes(project.id) ? current : [...current, project.id]));
    window.setTimeout(() => document.querySelector<HTMLButtonElement>(`#artifact-${project.id} > button`)?.focus({ preventScroll: true }), 450);
  };

  const explore = (id: string) => {
    setHovered(id);
  };
  const leave = (id: string) => {
    setHovered((current) => current === id ? null : current);
    setOpened((current) => current.filter((item) => item !== id));
  };

  const toggle = (id: string) => {
    setOpened((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  return (
    <main className="playground-shell field-study">
      <header className="playground-header">
        <div className="wordmark">
          <span>Salene’s</span>
          <strong>Playground</strong>
        </div>
        <p className="header-note">A place for curious things · folio {activeZone + 1} of {folios.length}</p>
        <div className="header-actions">
          <Button variant="outline" onClick={() => setIndexOpen(true)}>
            <List aria-hidden="true" /> Projects
          </Button>
        </div>
      </header>

      <div className="table-viewport" ref={scroller} tabIndex={0} aria-label="Scrollable folios">
        <div className="tabletop">
          {folios.map((folio, zone) => (
            <section key={folio.name} className={cn("table-zone", folio.className, activeZone === zone && "is-active", mobile && activeZone === zone && fieldSelection && "has-field-reveal")} aria-labelledby={`zone-${zone}-title`} inert={activeZone !== zone}>
              <div className="zone-heading"><span>{String(zone + 1).padStart(2, "0")} · {folio.name}</span>{zone === 0 ? <><h1 className="sr-only" id={`zone-${zone}-title`}>The Atlas</h1></> : <h2 id={`zone-${zone}-title`}>{folio.heading}</h2>}</div>
              {zone === 5 && <div className="playroom-blueprint" aria-hidden="true"><svg viewBox="0 0 800 480" preserveAspectRatio="none" fill="none"><path className="room-wall" d="M42 39 Q240 34 406 40 L752 36 L755 433 L435 438 M351 438 L46 432 Z" /><path d="M351 437 v-80 Q430 357 435 438 M42 230 h130 m125 0 h456 M295 40 v110 m0 80 v203" /><path d="M62 62 h205 v18 H62 Z M62 86 h205 v18 H62 Z M63 110 h204 v18 H63 Z M478 63 h237 v17 H478 Z" /><path strokeDasharray="3 7" d="M80 183 q40 -24 75 0 M328 275 q125 70 205 22 M580 94 q60 7 74 57" /><path d="M19 40 v392 m-7 -387 7 -7 7 7 m-14 380 7 7 7 -7 M43 15 h710 m-702 -6 -8 6 8 6 m694 -12 8 6 -8 6" /><circle cx="559" cy="159" r="9" /><circle cx="657" cy="156" r="9" /><circle cx="611" cy="235" r="9" /><g transform="translate(83 278)"><BlueprintInk text="story corner" /></g><g transform="translate(350 68)"><BlueprintInk text="make + play" /></g><g transform="translate(330 298)"><BlueprintInk text="a little help here" /></g><path d="M462 317 Q476 311 482 298 M472 299 L483 297 L482 308" /><g transform="translate(366 448)"><BlueprintInk text="come on in" /></g></svg><span className="plan-caption">THE PLAYROOM · working plan / not to scale</span></div>}
              {folio.objects.map(([id, kind]) => {
                const project = projects.find((item) => item.id === id)!;
                const common = { project, open: hovered === id || opened.includes(id), revealed: hovered === id || opened.includes(id), onToggle: () => toggle(id), onExplore: () => explore(id), onLeave: () => leave(id), active: activeZone === zone, mobile };
                return kind === "atlas" || kind === "clay" || kind === "aviary" || kind === "archive" || kind === "language"
                  ? <MainArtifact key={id} {...common} kind={kind} />
                  : <Curiosity key={id} {...common} kind={kind} />;
              })}
              {zone === 1 && <div className="pencil-note pencil-note--two"><PenNote lines={["making is one way of thinking"]} /></div>}
              {zone === 2 && <FieldTrace />}
              {zone === 3 && <p className="pencil-note pencil-note--three">some archives are made of feeling</p>}
              {zone === 5 && <button className="return-stamp" onClick={() => goToZone(0)} type="button"><RotateCcw aria-hidden="true" /> return to the beginning</button>}
            </section>
          ))}
        </div>
      </div>

      {mobile && fieldSelection && (
        <section id="field-mobile-reveal" className="field-mobile-reveal" aria-label={`${fieldSelection.title} details`}>
          <button className="field-reveal-close" onClick={() => { toggle(fieldSelection.id); document.querySelector<HTMLButtonElement>(`#artifact-${fieldSelection.id} > button`)?.focus({ preventScroll: true }); }} aria-label={`Close ${fieldSelection.title}`}><X aria-hidden="true" /></button>
          <p className="specimen-label">{fieldSelection.label}</p>
          <h3>{fieldSelection.title}</h3>
          {fieldResult && <p className="curiosity-result">{fieldResult}</p>}
          <p>{fieldSelection.note}</p>
          <ProjectLink project={fieldSelection} />
        </section>
      )}

      <nav className={cn("table-controls", "toggle-folio-index", folioIndexOpen && "is-expanded")} aria-label="Folio index">
        <button className="folio-index-toggle" onClick={() => setFolioIndexOpen(!folioIndexOpen)} aria-expanded={folioIndexOpen} aria-controls="folio-spine">Index</button>
        <Button variant="outline" size="icon" onClick={() => goToZone(Math.max(0, activeZone - 1))} disabled={activeZone === 0 || !folioIndexOpen} aria-label="Previous folio">
          <ArrowLeft aria-hidden="true" />
        </Button>
        <div className="map-dots folio-spine" id="folio-spine" inert={!folioIndexOpen}>
          {zoneNames.map((name, index) => (
            <button key={name} className={cn(index === activeZone && "is-active")} onClick={() => goToZone(index)} aria-label={`Go to ${name}`} aria-current={index === activeZone ? "step" : undefined}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{name}</strong>
              <small>{index < 3 ? projects[index]?.title : `${folios[index]?.objects.length} objects`}</small>
            </button>
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={() => goToZone(Math.min(folios.length - 1, activeZone + 1))} disabled={activeZone === folios.length - 1 || !folioIndexOpen} aria-label="Next folio">
          <ArrowRight aria-hidden="true" />
        </Button>
      </nav>

      <aside className={cn("index-drawer", indexOpen && "is-open")} aria-hidden={!indexOpen} inert={!indexOpen}>
        <div className="index-heading">
          <div><h2>Everything is searchable.</h2></div>
          <Button variant="ghost" size="icon" onClick={() => setIndexOpen(false)} aria-label="Close index"><X aria-hidden="true" /></Button>
        </div>
        <label className="sr-only" htmlFor="project-search">Search projects</label>
        <input id="project-search" className="project-search" type="search" placeholder="Search projects…" value={projectSearch} onChange={(event) => setProjectSearch(event.target.value)} />
        <ol>
          {projects.filter((project) => project.title.toLocaleLowerCase().includes(projectSearch.trim().toLocaleLowerCase())).map((project) => <li key={project.id}>
            <button onClick={() => findProject(project)}><strong>{project.title}</strong><span aria-hidden="true">↗</span></button>
          </li>)}
        </ol>
        {!projects.some((project) => project.title.toLocaleLowerCase().includes(projectSearch.trim().toLocaleLowerCase())) && <p role="status">No projects found.</p>}
      </aside>
      {indexOpen && <button className="drawer-scrim" onClick={() => setIndexOpen(false)} aria-label="Close index" />}
    </main>
  );
}
