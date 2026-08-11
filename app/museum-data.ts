export type Edition = "public" | "private";
export type Portal = { name: string; kind?: string; memory?: string; publicMemory?: string };
export type Room = { title: string; number: string; items: Portal[] };

function makeCurrentMemoriesPublic(rooms: Room[]): Room[] {
  return rooms.map((room) => ({ ...room, items: room.items.map((item) => item.memory && !item.publicMemory ? { ...item, publicMemory: item.memory } : item) }));
}

export function memoryForEdition(item: Portal, edition: Edition) {
  return edition === "public" ? item.publicMemory : item.memory;
}

export const rooms: Room[] = makeCurrentMemoriesPublic([
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

export const awe = ["Seeing Paradise Meadow", "Eating uni at the Tsukiji Fish Market", "The first time watching Inception and Black Swan in theater", "First time being high", "Horseshoe Bend in the morning", "Walking along the upper ridge of the Austrian Alps (Schmittenhohe)", "Seeing Lady Gaga at Coachella", "Seeing the Matterhorn when the cloud cleared over Zermatt"];
const adult = ["Standing in my grandparents’ apartment’s elevator on Grant Street. I told them a friend was driving them. Grandma asked, “Friend or boyfriend?” I smiled and said, “Boyfriend.” She took Grandpa’s hand and said, “Salene has a boyfriend.”", "The day the shelter-in-place order was announced. I was sitting in the upstairs living room at my old workplace. I called my mom and told her I had a boyfriend and that I was going to live with him.", "Being asked to be my friends’ child emergency contact", "When I was babysitting and working through a worksheet about consent with a child, and he named me as one of his trusted adult"];
const loss = ["An endocrinologist I met for the first time that day told me I had cancer.", "When I woke up from my surgery and I had to take my calcium pill. The realization that that was going to be the rest of my life, I wouldn’t be able to survive without pills anymore.", "When I was in bed and my phone was silent, but I woke up and I received the call that Grandpa had passed away. I took a shower. I never saw his body.", "When I was on the way to my parents house and I received the call that Grandpa had moved on. There was a rainbow.", "When I was at work and I received the call that Richard had passed. I broke down in my classroom.", "When my ex asked for a break. For a moment, the world stopped spinning.", "Packing Mr. Bear and Mr. Sheep in a box.", "Walking to work, looking up, staring at the leaves fluttering on a tree, and realizing I couldn’t feel joy."];
const thresholds: [string, string][] = [["SAUSALITO", "The first time I saw the empty Sausalito townhouse before we moved in."], ["INFINITY", "The last night in Infinity. We cleaned the apartment and closed the door for the last time."], ["THE BEDROOM", "The night my partner and I officially broke up. The door shut behind him, and I lay alone in what had been our bed."], ["BUENA VISTA", "The first night alone in my Buena Vista apartment after my mom and brother left."], ["WHOLE FOODS", "The first time I went to Whole Foods to grocery shop after moving into my new apartment. I stood in the frozen aisle, cried and left. I could not imagine cooking just for one."], ["THE OLD VIEW", "The first time I went back to the Sausalito apartment when it was no longer our apartment. I saw the way Brian had decorated the place. I looked out the living room window and it hit me, it was no longer my living room view anymore. It was his."], ["THE FIRST DATE", "I went on my first date after my long term relationship ended. I did not throw up."], ["SEND", "The moment I pressed “Send” on my resignation email after loving a place for seven years, with nothing lined up."]];
export const memoriesByEdition = { private: { adult, loss, thresholds }, public: { adult: [adult[2], adult[3]], loss: ["An endocrinologist I met for the first time that day told me I had cancer.", "I woke up from surgery and took the first pill I would need for the rest of my life. I understood, all at once, that my body had changed.", "I woke to the call that Grandpa had passed away. I took a shower. I never saw his body.", "I was on the way to my parents’ house when I received the call that Grandpa had moved on. There was a rainbow.", "I was at work when I received the call that Richard had passed. I broke down in my classroom.", "I packed Mr. Bear and Mr. Sheep in a box.", "I looked up at leaves fluttering on a tree and realized I couldn’t feel joy."], thresholds: [thresholds[0], thresholds[1], thresholds[3], ["WHOLE FOODS", "I stood in the frozen aisle, cried, and left. I could not imagine cooking just for one."], ["THE OLD VIEW", "I returned to the home we had shared and realized the view was no longer mine."], ["THE FIRST DATE", "I went on my first date after my long term relationship ended. I did not throw up."], thresholds[7]] },
} as const;
