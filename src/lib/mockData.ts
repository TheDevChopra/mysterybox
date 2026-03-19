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
    title: 'WindowSwap',
    description: 'Open a new window somewhere in the world.',
    category: 'Weird Internet',
    url: 'https://www.window-swap.com/',
    reason: 'It gives you a serene, voyeuristic view into someone else\'s life across the globe.',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Astronomy Picture of the Day',
    description: 'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured.',
    category: 'Educational',
    url: 'https://apod.nasa.gov/apod/astropix.html',
    reason: 'A classic internet staple since 1995 that never fails to show the beauty of the universe.',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Radiooooo',
    description: 'The Musical Time Machine.',
    category: 'Music',
    url: 'https://radiooooo.com/',
    reason: 'You can select any country and any decade from 1900 to today and listen to what was popular there at the time.',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'The Useless Web',
    description: 'Take me to a useless website.',
    category: 'Weird Internet',
    url: 'https://theuselessweb.com/',
    reason: 'A portal to the weirdest, most pointless, and strangely entertaining sites on the web.',
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    title: 'FutureMe',
    description: 'Write a letter to the future.',
    category: 'Productivity',
    url: 'https://www.futureme.org/',
    reason: 'A simple concept with profound emotional impact: emailing your future self.',
    created_at: new Date().toISOString()
  }
];
