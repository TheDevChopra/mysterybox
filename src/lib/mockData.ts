export type Discovery = {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  reason: string;
  created_at: string;
};

export const MOCK_DISCOVERIES: Discovery[] = [
  {
    id: '1',
    title: 'Pointer Pointer',
    description: 'Move your cursor anywhere and it finds a photo of someone pointing exactly there.',
    category: 'Weird Internet',
    url: 'https://pointerpointer.com',
    reason: 'It feels impossible but works perfectly every time.',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'The Useless Web',
    description: 'Click a button and get redirected to completely random useless websites.',
    category: 'Chaos',
    url: 'https://theuselessweb.com',
    reason: 'Pure chaos, no logic, just internet randomness.',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Zoomquilt',
    description: 'Infinite zoom artwork that keeps going deeper forever.',
    category: 'Art',
    url: 'https://zoomquilt.org',
    reason: 'Hypnotic and endless visual rabbit hole.',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Radio Garden',
    description: 'Explore live radio stations from around the world by spinning a globe.',
    category: 'Exploration',
    url: 'https://radio.garden',
    reason: 'Makes the internet feel global and alive.',
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Window Swap',
    description: 'Look through random windows around the world.',
    category: 'Exploration',
    url: 'https://window-swap.com',
    reason: 'Feels like traveling without moving.',
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    title: 'This Person Does Not Exist',
    description: 'AI generates completely fake human faces.',
    category: 'AI',
    url: 'https://thispersondoesnotexist.com',
    reason: 'Creepy and fascinating at the same time.',
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    title: 'A Soft Murmur',
    description: 'Mix ambient sounds like rain, thunder, and wind.',
    category: 'Productivity',
    url: 'https://asoftmurmur.com',
    reason: 'Simple but extremely calming.',
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    title: 'Hacker Typer',
    description: 'Type anything and it looks like you\'re hacking.',
    category: 'Fun',
    url: 'https://hackertyper.net',
    reason: 'Makes you feel like a movie hacker instantly.',
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    title: 'MapCrunch',
    description: 'Random Google Street View locations anywhere in the world.',
    category: 'Exploration',
    url: 'https://mapcrunch.com',
    reason: 'Endless travel randomness.',
    created_at: new Date().toISOString()
  },
  {
    id: '10',
    title: 'Quick Draw',
    description: 'Google AI guesses your doodles in real time.',
    category: 'AI',
    url: 'https://quickdraw.withgoogle.com',
    reason: 'Surprisingly accurate and addictive.',
    created_at: new Date().toISOString()
  },
  {
    id: '11',
    title: 'Neal.fun',
    description: 'A collection of interactive internet experiments.',
    category: 'Experiments',
    url: 'https://neal.fun',
    reason: 'Every page is a different creative rabbit hole.',
    created_at: new Date().toISOString()
  },
  {
    id: '12',
    title: 'Future Me',
    description: 'Send emails to your future self.',
    category: 'Fun',
    url: 'https://futureme.org',
    reason: 'Emotional and surprisingly deep.',
    created_at: new Date().toISOString()
  },
  {
    id: '13',
    title: 'Patatap',
    description: 'Create music and visuals by pressing keys.',
    category: 'Creative',
    url: 'https://patatap.com',
    reason: 'Instant creativity with zero effort.',
    created_at: new Date().toISOString()
  },
  {
    id: '14',
    title: 'Bored Button',
    description: 'One click gives you something random to do.',
    category: 'Chaos',
    url: 'https://boredbutton.com',
    reason: 'Infinite boredom killer.',
    created_at: new Date().toISOString()
  },
  {
    id: '15',
    title: 'Pixel Thoughts',
    description: 'A calming 60-second meditation for your thoughts.',
    category: 'Mind',
    url: 'https://pixelthoughts.co',
    reason: 'Beautiful and peaceful.',
    created_at: new Date().toISOString()
  },
  {
    id: '16',
    title: 'Rainy Mood',
    description: 'High-quality rain sound experience.',
    category: 'Productivity',
    url: 'https://rainymood.com',
    reason: 'Classic focus tool.',
    created_at: new Date().toISOString()
  },
  {
    id: '17',
    title: 'Silk',
    description: 'Create flowing digital art with your cursor.',
    category: 'Creative',
    url: 'http://weavesilk.com',
    reason: 'Feels magical and satisfying.',
    created_at: new Date().toISOString()
  },
  {
    id: '18',
    title: 'Staggering Beauty',
    description: 'Shake the worm and chaos happens.',
    category: 'Weird',
    url: 'http://www.staggeringbeauty.com',
    reason: 'Completely absurd and unexpected.',
    created_at: new Date().toISOString()
  },
  {
    id: '19',
    title: 'Falling Falling',
    description: 'Endless falling animation loop.',
    category: 'Weird',
    url: 'https://fallingfalling.com',
    reason: 'Trippy and oddly relaxing.',
    created_at: new Date().toISOString()
  },
  {
    id: '20',
    title: 'Cat Bounce',
    description: 'Drag cats and watch them bounce endlessly.',
    category: 'Fun',
    url: 'https://cat-bounce.com',
    reason: 'Pure joy and randomness.',
    created_at: new Date().toISOString()
  },
  {
    id: '21',
    title: 'Zoom Earth',
    description: 'Live satellite view of Earth.',
    category: 'Exploration',
    url: 'https://zoom.earth',
    reason: 'Real-time global view.',
    created_at: new Date().toISOString()
  },
  {
    id: '22',
    title: 'Internet Archive',
    description: 'Explore old versions of websites.',
    category: 'Archive',
    url: 'https://archive.org',
    reason: 'Time travel for the internet.',
    created_at: new Date().toISOString()
  },
  {
    id: '23',
    title: 'Little Alchemy 2',
    description: 'Combine elements to create new things.',
    category: 'Game',
    url: 'https://littlealchemy2.com',
    reason: 'Simple but addictive.',
    created_at: new Date().toISOString()
  },
  {
    id: '24',
    title: 'Random.org',
    description: 'True randomness generator.',
    category: 'Utility',
    url: 'https://random.org',
    reason: 'Real randomness, not pseudo.',
    created_at: new Date().toISOString()
  },
  {
    id: '25',
    title: 'Museum of Endangered Sounds',
    description: 'Sounds from old tech like dial-up.',
    category: 'Nostalgia',
    url: 'https://savethesounds.info',
    reason: 'Nostalgic internet history.',
    created_at: new Date().toISOString()
  },
  {
    id: '26',
    title: 'Scale of the Universe',
    description: 'Explore size from atoms to galaxies.',
    category: 'Science',
    url: 'https://htwins.net/scale2',
    reason: 'Mind-blowing perspective.',
    created_at: new Date().toISOString()
  },
  {
    id: '27',
    title: 'Pointer Pointer Clone Chaos',
    description: 'Variations of weird pointer experiments.',
    category: 'Weird',
    url: 'https://pointerpointer.com',
    reason: 'Strange but addictive.',
    created_at: new Date().toISOString()
  },
  {
    id: '28',
    title: 'The Deep Sea',
    description: 'Scroll through ocean depth levels.',
    category: 'Exploration',
    url: 'https://neal.fun/deep-sea',
    reason: 'Fascinating and slightly terrifying.',
    created_at: new Date().toISOString()
  },
  {
    id: '29',
    title: 'Checkbox Olympics',
    description: 'Compete in checkbox clicking challenges.',
    category: 'Fun',
    url: 'https://checkboxolympics.com',
    reason: 'Ridiculous but engaging.',
    created_at: new Date().toISOString()
  },
  {
    id: '30',
    title: 'Long Doge Challenge',
    description: 'Extend the doge infinitely.',
    category: 'Meme',
    url: 'https://longdogechallenge.com',
    reason: 'Pure meme chaos.',
    created_at: new Date().toISOString()
  }
];
