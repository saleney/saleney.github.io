// Add future meaningful bird sightings here. The homepage reads this list to
// create occasional Bird Visitors without changing the page layout.
export const birds = [
  {
    id: 'eurasian-tree-sparrow',
    commonName: 'Eurasian Tree Sparrow',
    scientificName: 'Passer montanus',
    personalNote: 'Spotted in my grandfather’s village in Taishan, China.',
    illustration: 'tree-sparrow',
    // A bird may turn up at any of these quiet, non-blocking perches.
    perches: ['entrance', 'field-note'],
    // Add a locally owned recording at this path when one is available.
    audioSrc: null,
    audioAssetPath: '/assets/audio/eurasian-tree-sparrow.mp3',
  },
]
