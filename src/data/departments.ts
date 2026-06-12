// ============================================================
//  ADST-BiZ-VISUAL ARTS EXHIBITION — Department Data
//  localSrc = base path WITHOUT extension.
//  The useSmartImage hook will try .jpg → .jpeg → .png in order,
//  then fall back to fallbackSrc (Unsplash) if none are found.
// ============================================================

export interface GalleryImage {
  id: number;
  /** Base path inside /public, NO extension.
   *  e.g. "/images/Computer_Science_Photos/01"
   *  The hook tries .jpg, .jpeg, .png automatically. */
  localSrc: string;
  /** Unsplash (or any CDN) URL shown when all local formats fail. */
  fallbackSrc: string;
  caption: string;
  subCaption?: string;
}

export interface Teacher {
  id: number;
  name: string;
  role: string;
  department: string;
  courses: string[];
  /** Base path inside /public, NO extension. */
  localSrc: string;
  /** Unsplash fallback when all local formats fail. */
  fallbackSrc: string;
}

// ── helpers ─────────────────────────────────────────────────
/** Returns base path (no extension) for a Computer Science photo. */
const cs  = (n: string) => `/images/Computer_Science_Photos/${n}`;
/** Returns base path (no extension) for a Visual Arts photo. */
const va  = (n: string) => `/images/Visual_Arts_Photos/${n}`;
/** Returns base path (no extension) for a Business photo. */
const biz = (n: string) => `/images/Business_Photos/${n}`;
/** Returns base path (no extension) for a Teacher photo. */
const tch = (n: string) => `/images/Teachers_Photos/${n}`;

// ── Computer Science (12 slots) ──────────────────────────────
export const computerScienceImages: GalleryImage[] = [
  {
    id: 1,
    localSrc:    cs('01'),
    fallbackSrc: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&q=80',
    caption:     '3D Printing lab',
    subCaption:  'CS Student 3D Projects',
  },
  {
    id: 2,
    localSrc:    cs('02'),
    fallbackSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    caption:     '3D Printing Spaceship Rockets',
    subCaption:  'CS Student Project — Aerospace Engineering',
  },
  {
    id: 3,
    localSrc:    cs('03'),
    fallbackSrc: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80',
    caption:     '3D Print MLIA Student Desk & Chair',
    subCaption:  'CS Student Project — Architectural Modelling',
  },
  {
    id: 4,
    localSrc:    cs('04'),
    fallbackSrc: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    caption:     '3D Print Basketball Court',
    subCaption:  'CS Student Project — Sports Architecture',
  },
  {
    id: 5,
    localSrc:    cs('05'),
    fallbackSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    caption:     '3D Modeling & BBC Microbit Traffic Light',
    subCaption:  'CS Student Project — Embedded Systems & IoT',
  },
  {
    id: 6,
    localSrc:    cs('06'),
    fallbackSrc: 'https://images.unsplash.com/photo-1535083783855-ded51a9a1d35?w=800&q=80',
    caption:     '3D Modeling Elephant Zoo',
    subCaption:  'CS Student Project — Environmental Simulation',
  },
  {
    id: 7,
    localSrc:    cs('07'),
    fallbackSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption:     'Visitor-1 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
  {
    id: 8,
    localSrc:    cs('08'),
    fallbackSrc: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    caption:     'Visitor-2 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
  {
    id: 9,
    localSrc:    cs('09'),
    fallbackSrc: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    caption:     'Visitor-3 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
  {
    id: 10,
    localSrc:    cs('10'),
    fallbackSrc: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80',
    caption:     '3D Printing and Modeling',
    subCaption:  '3D Printing Dolphins in Aquarium. Designed by Grade 10 Students @ MLIA-SZ',
  },
  {
    id: 11,
    localSrc:    cs('11'),
    fallbackSrc: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    caption:     '3D Printing and Modeling', '3D Print Dolphins in Aquarium. Designed by Grade 10 Students @ MLIA-SZ',
    subCaption:  '3D Printing and Modeling',
  },
  {
    id: 12,
    localSrc:    cs('12'),
    fallbackSrc: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80',
    caption:     '3D Printing and Modeling',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },

 {
    id: 13,
    localSrc:    cs('13'),
    fallbackSrc: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80',
    caption:     '3D Printing and Modeling',
    subCaption:  '3D Printing Dolphins in Aquarium. Designed by Grade 10 Students @ MLIA-SZ',
  },
  {
    id: 14,
    localSrc:    cs('14'),
    fallbackSrc: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    caption:     '3D Printing and Modeling', '3D Print Dolphins in Aquarium. Designed by Grade 10 Students @ MLIA-SZ',
    subCaption:  '3D Printing and Modeling',
  },
  {
    id: 15,
    localSrc:    cs('15'),
    fallbackSrc: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80',
    caption:     '3D Printing and Modeling',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
];
// ── Visual Arts (8 slots) ────────────────────────────────────
export const visualArtsImages: GalleryImage[] = [
  {
    id: 1,
    localSrc:    va('01'),
    fallbackSrc: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    caption:     'Visual Arts 1',
    subCaption:  'Visual Arts Department — Student Masterpiece',
  },
  {
    id: 2,
    localSrc:    va('02'),
    fallbackSrc: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    caption:     'Visual Arts 2',
    subCaption:  'Visual Arts Department — Creative Expression',
  },
  {
    id: 3,
    localSrc:    va('03'),
    fallbackSrc: 'https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?w=800&q=80',
    caption:     'Visual Arts 3',
    subCaption:  'Visual Arts Department — Mixed Media',
  },
  {
    id: 4,
    localSrc:    va('04'),
    fallbackSrc: 'https://images.unsplash.com/photo-1579541671172-43429ce17aca?w=800&q=80',
    caption:     'Visual Arts 4',
    subCaption:  'Visual Arts Department — Contemporary Art',
  },
  {
    id: 5,
    localSrc:    va('05'),
    fallbackSrc: 'https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=800&q=80',
    caption:     'Visitor-1 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
  {
    id: 6,
    localSrc:    va('06'),
    fallbackSrc: 'https://images.unsplash.com/photo-1605429523419-d828acb941d9?w=800&q=80',
    caption:     'Visitor-2 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
  {
    id: 7,
    localSrc:    va('07'),
    fallbackSrc: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=800&q=80',
    caption:     'Visitor-3 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
  {
    id: 8,
    localSrc:    va('08'),
    fallbackSrc: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&q=80',
    caption:     'Visitor-4 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
];

// ── Business (8 slots) ───────────────────────────────────────
export const businessImages: GalleryImage[] = [
  {
    id: 1,
    localSrc:    biz('01'),
    fallbackSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    caption:     'Business 1',
    subCaption:  'Business Department — Entrepreneurship Showcase',
  },
  {
    id: 2,
    localSrc:    biz('02'),
    fallbackSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    caption:     'Business 2',
    subCaption:  'Business Department — Market Analysis',
  },
  {
    id: 3,
    localSrc:    biz('03'),
    fallbackSrc: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    caption:     'Business 3',
    subCaption:  'Business Department — Financial Strategy',
  },
  {
    id: 4,
    localSrc:    biz('04'),
    fallbackSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    caption:     'Business 4',
    subCaption:  'Business Department — Marketing Campaign',
  },
  {
    id: 5,
    localSrc:    biz('05'),
    fallbackSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    caption:     'Visitor-1 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
  {
    id: 6,
    localSrc:    biz('06'),
    fallbackSrc: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    caption:     'Visitor-2 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
  {
    id: 7,
    localSrc:    biz('07'),
    fallbackSrc: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    caption:     'Visitor-3 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
  {
    id: 8,
    localSrc:    biz('08'),
    fallbackSrc: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80',
    caption:     'Visitor-4 Watching',
    subCaption:  'Exhibition Gallery — Audience Engagement',
  },
];

// ── VIDEO DATA ───────────────────────────────────────────────
//
//  localBase  = path WITHOUT extension inside /public/videos/
//               The useSmartVideo hook tries .mp4 → .webm → .mov
//
//  youtubeId  = YouTube video ID (the part after ?v=)
//               Used as the fallback when NO local file is found.
//               Replace these placeholder IDs with your real ones.
//
//  thumbnailSrc = poster image shown before play.
//               Base path (no ext) → tries .jpg/.jpeg/.png via useSmartImage.
//               Falls back to a YouTube thumbnail automatically.

export interface DeptVideo {
  id: number;
  title: string;
  description: string;
  /** Base path inside /public/videos/, NO extension */
  localBase: string;
  /** YouTube video ID — fallback when local file not found */
  youtubeId: string;
  /** Base path for poster image inside /public, NO extension (optional) */
  thumbnailBase?: string;
}

// helpers
const csvid  = (n: string) => `/videos/Computer_Science_Videos/${n}`;
const vavid  = (n: string) => `/videos/Visual_Arts_Videos/${n}`;
const bizvid = (n: string) => `/videos/Business_Videos/${n}`;

// ── Computer Science Videos ──────────────────────────────────
export const computerScienceVideos: DeptVideo[] = [
  {
    id: 1,
    title:       'CS Department Showcase',
    description: 'A full walkthrough of student 3D printing, robotics, and coding projects on display at the ADST exhibition.',
    localBase:   csvid('cs_video_01'),
    youtubeId:   'dQw4w9WgXcQ',   // ← replace with your real YouTube video ID
  },
  {
    id: 2,
    title:       '3D Printing in Action',
    description: 'Watch students design and print dolphins, spaceships, and architectural models using industry-grade 3D printers.',
    localBase:   csvid('cs_video_02'),
    youtubeId:   'dQw4w9WgXcQ',   // ← replace with your real YouTube video ID
  },
  {
    id: 3,
    title:       'BBC Microbit & Robotics Demo',
    description: 'Live demonstration of BBC Microbit traffic light systems and introductory robotics projects built by CS10 students.',
    localBase:   csvid('cs_video_03'),
    youtubeId:   'dQw4w9WgXcQ',   // ← replace with your real YouTube video ID
  },
];

// ── Visual Arts Videos ───────────────────────────────────────
export const visualArtsVideos: DeptVideo[] = [
  {
    id: 1,
    title:       'Visual Arts Showcase',
    description: 'An immersive tour of the Visual Arts exhibition featuring paintings, mixed media, and contemporary student installations.',
    localBase:   vavid('va_video_01'),
    youtubeId:   'dQw4w9WgXcQ',   // ← replace with your real YouTube video ID
  },
  {
    id: 2,
    title:       'Student Art Process',
    description: 'Behind the scenes — students share their creative process, inspirations, and artistic journeys throughout the year.',
    localBase:   vavid('va_video_02'),
    youtubeId:   'dQw4w9WgXcQ',   // ← replace with your real YouTube video ID
  },
  {
    id: 3,
    title:       'Exhibition Highlights',
    description: 'Audience reactions, artist talks, and highlights from the opening night of the Visual Arts MLIA exhibition.',
    localBase:   vavid('va_video_03'),
    youtubeId:   'dQw4w9WgXcQ',   // ← replace with your real YouTube video ID
  },
];

// ── Business Videos ──────────────────────────────────────────
export const businessVideos: DeptVideo[] = [
  {
    id: 1,
    title:       'Business Department Showcase',
    description: 'Students present entrepreneurship plans, market analyses, and financial strategies developed throughout the semester.',
    localBase:   bizvid('biz_video_01'),
    youtubeId:   'dQw4w9WgXcQ',   // ← replace with your real YouTube video ID
  },
  {
    id: 2,
    title:       'Entrepreneurship Pitch',
    description: 'Live business pitch competition — students defend their startup ideas to a panel of judges at MLIA Shenzhen.',
    localBase:   bizvid('biz_video_02'),
    youtubeId:   'dQw4w9WgXcQ',   // ← replace with your real YouTube video ID
  },
  {
    id: 3,
    title:       'Marketing Campaign Reveal',
    description: 'Marketing class unveils their full advertising campaigns, brand identities, and social-media strategies.',
    localBase:   bizvid('biz_video_03'),
    youtubeId:   'dQw4w9WgXcQ',   // ← replace with your real YouTube video ID
  },
];

// ── Teachers (3 slots) ───────────────────────────────────────
export const teachers: Teacher[] = [
  {
    id: 1,
    name:       'Mr. T',
    role:       'Department Head of ADST-BiZ-ARTS',
    department: 'Computer Science',
    courses: [
      'AP Computer Science A',
      'AP Computer Science Principles',
      'CS10 — 3D & Introduction to Robotics',
      'CS11 — Java',
      'CS12 — Python',
      'Digital Media',
    ],
    localSrc:    tch('1'),
    fallbackSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    id: 2,
    name:       'Ms. Dorothy Yan',
    role:       'Department Head of Science',
    department: 'Visual Arts',
    courses: [
      'AP Biology',
      'Biology 11/12',
      'Psychology 11/12',
      'Visual Arts',
    ],
    localSrc:    tch('2'),
    fallbackSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    id: 3,
    name:       'Ms. Nicole De Jager',
    role:       'Teacher',
    department: 'Business',
    courses: [
      'AP Macro/Micro Economics',
      'Accounting 11/12',
      'Economics 11/12',
      'Marketing',
    ],
    localSrc:    tch('3'),
    fallbackSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
];
