import { EventItem } from './types';

export const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'The Cyber-Gothic Reading',
    date: 'Oct 14, 2024',
    description: 'Exploring digital anxieties through the lens of Victorian horror.',
    image: 'https://picsum.photos/400/600?random=1',
    category: 'Poetry'
  },
  {
    id: '2',
    title: 'Synthesizers & Sonnets',
    date: 'Oct 21, 2024',
    description: 'A live performance mixing analog modular synthesis with Shakespearean verses.',
    image: 'https://picsum.photos/400/600?random=2',
    category: 'Fiction'
  },
  {
    id: '3',
    title: 'Dostoevsky in the Machine',
    date: 'Nov 04, 2024',
    description: 'Philosophy workshop discussing existentialism in the age of AI.',
    image: 'https://picsum.photos/400/600?random=3',
    category: 'Debate'
  },
  {
    id: '4',
    title: 'Neon Noir Narratives',
    date: 'Nov 11, 2024',
    description: 'Writing workshop focused on lighting descriptions in cyberpunk cityscapes.',
    image: 'https://picsum.photos/400/600?random=4',
    category: 'Workshop'
  },
  {
    id: '5',
    title: 'The Algorithmic Muse',
    date: 'Nov 18, 2024',
    description: 'Can machines weep? A panel discussion on generated emotion.',
    image: 'https://picsum.photos/400/600?random=5',
    category: 'Debate'
  },
  {
    id: '6',
    title: 'Retro-Future Book Fair',
    date: 'Dec 01, 2024',
    description: 'Rare sci-fi first editions meet holographic art installations.',
    image: 'https://picsum.photos/400/600?random=6',
    category: 'Workshop'
  }
];

export const NAV_LINKS = [
  { name: 'Manifesto', href: '#hero' },
  { name: 'The Circle', href: '#about' },
  { name: 'Gatherings', href: '#events' },
  { name: 'Join Us', href: '#contact' },
];
