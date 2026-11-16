/**
 * RayFin games shown on /rayfin-games/ and played in an on-site iframe at
 * /rayfin-games/<slug>/. Screenshots live in public/images/rayfin-games/<slug>.webp.
 * To add a game: add an entry here and drop a 960x540 webp screenshot in that folder.
 */
export interface RayFinGame {
  slug: string;
  title: string;
  url: string;
  description: string;
  /** Short genre label shown on the tile. */
  genre: string;
  /** Extra iframe permissions beyond the defaults (autoplay; fullscreen; gamepad). */
  extraAllow?: string[];
}

export const rayfinGames: RayFinGame[] = [
  {
    slug: 'angry-data',
    title: 'Angry Data',
    url: 'https://curly-dawn-9b6ab4a11c-northcentralus.webapp.fabricapps.net/',
    genre: 'Physics slingshot',
    description:
      'Your data platform vs. the software bugs. Launch data heroes from a slingshot to topple towers and squash Mem Leaks, Race Conditions, NullRefs and the dreaded Heisenbug.',
  },
  {
    slug: 'bit-drop',
    title: 'Bit Drop',
    url: 'https://perky-gulf-c40efbf992-northcentralus.webapp.fabricapps.net/',
    genre: 'Falling-block puzzle',
    description:
      'A falling-block puzzler with a twist: match four same-colored squares to clear the target blocks. Tune the board width, target count and speed, then chase a high score.',
  },
  {
    slug: 'data-shuffle',
    title: 'Data Shuffle',
    url: 'https://good-drift-cdbed37a76-northcentralus.webapp.fabricapps.net/',
    genre: 'Rhythm',
    description:
      'A three-lane rhythm game set to original Carlo Solutions tracks. Hit the arrows as they cross the line, hold the long notes and keep your energy up from Warm Up to Boss Level.',
  },
  {
    slug: 'paginated-report-bear',
    title: 'Paginated Report Bear',
    url: 'https://hot-yarn-75df6d521a-northcentralus.webapp.fabricapps.net/',
    genre: 'Pixel platformer',
    description:
      'A pixel perfect platformer starring a tie-wearing teddy bear. Run and jump through report-themed levels like Mind the Page Break, Tablix Town and Subscription Skyline.',
  },
  {
    slug: 'squishy-bob',
    title: 'Squishy Bob',
    url: 'https://daily-gale-699c34a2e7-northcentralus.webapp.fabricapps.net/',
    genre: 'Neon platformer',
    description:
      'Guide Squishy Bob through The Warden Protocol, 18 neon synthwave sectors plus a bounce boss. Play the story campaign, speedrun mode or the endless cyber run, and spend bits on skins.',
  },
  {
    slug: 'hunt-ring',
    title: 'Hunt Ring',
    url: 'https://hunt-ring-01-caa6a65d.app.eastus2.builderapps.dev/',
    genre: 'GPS tag battle royale',
    extraAllow: ['geolocation'],
    description:
      'Real-world tag for your phone. The ring shrinks, Seekers hunt Runners and the last Runners standing win. Host a match and have friends scan a QR to join, or try it with bots.',
  },
];

export const IFRAME_ALLOW = ['autoplay', 'fullscreen', 'gamepad'];
