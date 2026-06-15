/**
 * Site configuration and content data.
 * All copy and structured content lives here so components stay presentational.
 * (Ported 1:1 from the original config.php.)
 */

export const site = {
  name: 'Devo Edutech Pvt Ltd',
  brand: 'Devo Edutech',
  tagline: 'Pvt Ltd',
  title: 'Devo Edutech | Bharat Hospitality Skilling Infrastructure',
  description:
    "Devo Edutech powers Hotelwaley, India's first vernacular hospitality skilling platform training 40 million frontline workers. Explore our mission for Bharat.",
  url: 'https://www.devoedutech.com',
  location: 'Hubli, Karnataka',
  email: 'ajay@devoedutech.com',
  platform: 'https://www.hotelwaley.com',
  platformLabel: 'www.hotelwaley.com',
  cin: 'U80301KA2022PTC160866',
  address: 'Amrit Building, 2nd Cross, Hosur, Dharwad, Karnataka 580021',
  year: 2026,
  focusKeyword: 'hospitality skilling',
  keywords: [
    'hospitality skilling',
    'hospitality training India',
    'vernacular microlearning',
    'frontline hospitality workers',
    'hotel staff training',
    'restaurant staff training',
    'multilingual hospitality training',
    'FoSTaC training',
    'NSDC hospitality skilling',
    'Bharat hospitality skilling',
    'Hotelwaley',
    'Devo Edutech',
  ],
} as const;

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#videos', label: 'Watch' },
  { href: '#founder', label: 'Founder' },
  { href: '#news', label: 'News' },
  { href: '#contact', label: 'Contact' },
] as const;

export const stats = [
  { number: '40M+', label: 'Workers We Serve' },
  { number: '4.2M', label: 'Establishments' },
  { number: '7', label: 'Indian Languages' },
  { number: '₹18L', label: 'Karnataka Elevate Grant' },
  { number: '2026', label: 'Full Launch' },
] as const;

export const whatWeDo = [
  {
    icon: 'bi-translate',
    title: 'Vernacular Microlearning',
    text: 'Short-form, job-ready modules in English, Hindi, Kannada and six other Indian languages. Built for the mobile-first worker. Immediately applicable on the floor.',
  },
  {
    icon: 'bi-patch-check',
    title: 'Compliance-Anchored Content',
    text: 'Curriculum aligned with FoSTaC, NSDC, THSC, and PMKVY standards. Training that counts toward certification and regulatory requirements.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Bharat-First Distribution',
    text: "Platform partnerships with Petpooja, Shiftz, and India's leading hospitality associations, reaching workers through the tools they already use.",
  },
  {
    icon: 'bi-megaphone',
    title: 'Standards Movement',
    text: 'Hotelwaley is not just a course platform. It is a category-defining movement to establish what world-class hospitality training looks like for real India.',
  },
] as const;

export const credentials = [
  {
    icon: 'bi-trophy-fill',
    title: 'Startup Karnataka Elevate 2023: Grant Winner',
    desc: 'Selected from hundreds of applicants across Karnataka as a high-potential, category-defining startup. Received Rs. 18 Lakhs in grant funding from the Government of Karnataka.',
  },
  {
    icon: 'bi-patch-check-fill',
    title: 'DPIIT Recognised Startup',
    desc: 'Recognised by the Department for Promotion of Industry and Internal Trade under the Startup India initiative. CIN: U80301KA2022PTC160866.',
  },
  {
    icon: 'bi-search',
    title: 'Structurally Unserved Market: Validated',
    desc: 'Competitive scan of global hospitality training platforms including Cornell University, AHLEI, and Typsy confirms that Bharat-first, vernacular, mobile, frontline hospitality training is a structurally unoccupied category.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Institutional Network',
    desc: "Active engagement with FHRAI, SIHRA, KSHA, NSDC, THSC, and PMKVY. FoSTaC empanelment process initiated. Advisory network includes senior leaders from Club Mahindra, The Park Hotels, Intellistay, and India's leading hospitality institutions.",
  },
] as const;

export const founder = {
  name: 'Ajay Handa',
  initials: 'AH',
  title: 'Founder and Managing Director, Devo Edutech Pvt Ltd',
  caption: 'Ajay Handa, Hubli, Karnataka',
  quote: 'Sometimes all it takes is vision, leftover tiles, and a lot of guts.',
  highlights: [
    { icon: 'bi-trophy', label: 'Elevate 2023 Grant Winner' },
    { icon: 'bi-mic', label: 'Toastmasters Alumnus' },
    { icon: 'bi-geo-alt', label: 'Hubli, Karnataka' },
  ],
  story: [
    "In the 1990s, Ajay Handa was building a bar inside his family's hotel in Hubli and ran out of money before he could hire a bartender. He drove 400 kilometres to Bangalore, spent days shadowing bartenders at the city's top venues, came back, trained two local boys in everything he had learned, and opened The Zebra Crossing, North Karnataka's first youth nightlife venue.",
    'Three decades later, the same instinct drives Devo Edutech. Ajay identified that 40 million frontline hospitality workers across Tier 2 and Tier 3 India had never had access to practical, vernacular, job-ready training. No one was building for Bharat. So he did.',
    "Ajay brings deep roots in Karnataka's hospitality, logistics, and startup ecosystem. He is a Toastmasters Presentation Mastery alumnus, a Startup Karnataka Elevate grant winner, and a practitioner whose understanding of India's real hospitality industry shapes every decision at Hotelwaley.",
  ],
} as const;

/** Press coverage and news about the founder. Newest first — the first item is featured. */
export type NewsItem = {
  title: string;
  source: string;
  date: string;
  image: string;
  excerpt: string;
  url: string;
};

export const news: NewsItem[] = [
  {
    title:
      "The Man Who Taught Himself Bartending In Bangalore Is Now On A Mission To Train India's 40 Million Hospitality Workers",
    source: 'The Blunt Times',
    date: 'June 6, 2026',
    image: '/assets/images/news-blunttimes.jpg',
    excerpt:
      "Ajay Handa's entrepreneurial journey began when budget constraints forced him to teach himself bartending by observing techniques at a Bangalore pub. Now he's building Hotelwaley, India's first vernacular microlearning platform designed to train frontline hospitality workers across the country's 40 million-person workforce in their preferred languages.",
    url: 'https://theblunttimes.in/the-man-who-taught-himself-bartending-in-bangalore-is-now-on-a-mission-to-train-indias-40-million-hospitality-workers/65349/',
  },
];

export const contacts = [
  {
    icon: 'bi-buildings',
    label: 'Partnerships',
    title: 'Hotel Owners and Operators',
    text: "Looking to train your frontline team? Reduce attrition? Meet compliance requirements? Let's talk about what Hotelwaley can do for your property.",
    link: site.platform,
    linkText: 'Visit Hotelwaley',
  },
  {
    icon: 'bi-mortarboard',
    label: 'Institutions',
    title: 'Associations and Skilling Bodies',
    text: "FHRAI, SIHRA, NSDC, and industry bodies looking to deploy scalable vernacular training for India's hospitality workforce are welcome to reach out.",
    link: `mailto:${site.email}`,
    linkText: 'Contact Ajay',
  },
  {
    icon: 'bi-graph-up-arrow',
    label: 'Investors',
    title: 'Investor Enquiries',
    text: 'Building category-defining infrastructure for a 40 million plus workforce market with 14% CAGR. If this interests you, we would love to share more.',
    link: `mailto:${site.email}`,
    linkText: 'Get in Touch',
  },
] as const;

/** Videos shown in the "Watch" section. Hosted on YouTube (free CDN). */
export const featuredVideo = {
  youtubeId: 'wJcPqiJgPws',
} as const;

export const heroVideo = {
  youtubeId: '--6HVZXkzpk',
} as const;

export const languageVideos = [
  {
    native: 'English',
    roman: 'EN',
    youtubeId: 'SEfWdWlK31A',
    desc: 'Built for the frontline worker, in clear and simple English.',
  },
  {
    native: 'हिन्दी',
    roman: 'Hindi',
    youtubeId: 'sMLjABRf2Og',
    desc: 'Same lesson, Hindi voiceover. For workers across North and Central India.',
  },
  {
    native: 'ಕನ್ನಡ',
    roman: 'Kannada',
    youtubeId: '1FKtrzBsegE',
    desc: 'Same lesson, Kannada voiceover. For the hotels and resorts of Karnataka.',
  },
] as const;
