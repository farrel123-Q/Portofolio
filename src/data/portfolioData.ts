export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ContentIndexItem {
  number: string;
  label: string;
  href: string;
}

export interface ToolkitItem {
  code: string;
  name: string;
  colorClass: string;
}

export interface HardSkillItem {
  number: string;
  name: string;
}

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  meta: string;
  title: string;
  tagline: string;
  domain: string;
  previewBadge: string;
  previewTitle: string;
  previewSubtitle: string;
  buildTag: string;
  statusTag: string;
  highlights: ProjectHighlight[];
  liveHref: string;
  architectureNotes: string[];
}

export const PORTFOLIO_DATA = {
  brand: {
    name: 'FARREL',
    fullName: 'Farrel Ahmad Faruq',
    roleLeft: 'INFORMATICS ENGINEERING',
    roleRight: 'TECH & CREATIVE ENTHUSIAST',
  },
  images: {
    heroCharacter:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgt7o1gD0vwvgx2DH3R-qQBxclH8JPMd7mHpCTxTDuy36_UImmLjIpoIk9-UMbinY2LX8NNfv6fiBRdUWslDlKZgUD91YP_UhxIdVzBFWlcZfTPErhXDpP9RqTVpR9UjKV17Bhgdqd9UEGy4St62dB5jpzML0ZF2CIzl-813gG1nM61vhiyLTdIDRVWEpx6jIY2RuOG7s78L1IFTgsruSxKoL20ekZygVqVqPQsDGfG-32yyZI1U3xwQ',
    profileAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKFe-jZXI8htXqZr_i34GdcVgSy8zbsEuw-UYfiWo4uBTLoPJHsX7rLN602dI93pbEMBMY_-sUR-k8QUHeA5u7BnVXrApaaAxDQE2y1qsGqUV349oQeVKYtE_Vj0DGQq0Ny_MGgF3tGTuXU3YhYJbvA7tY5LLrtYaWFLVrX7uKDUrCIdq4S3cj6KtETFc44mNaB5zxSQZj6p8pgVvCKB2s_5u0FuOHLFj3heMMdv0M',
  },
  navLinks: [
    { id: 'intro', label: 'Intro', href: '#intro' },
    { id: 'contents', label: 'Contents', href: '#contents' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
  ] as NavItem[],
  intro: {
    kicker: '01 / PROFILE',
    title: 'INTRODUCTION',
    greetingLabel: 'HELLO.',
    greeting:
      "Hi everyone! I'm Farrel Ahmad Faruq, but you can call me Farrel. Nice to meet you.",
    location: 'Batam, Indonesia',
    paragraphs: [
      "I'm an Informatics Engineering student at Institut Teknologi PLN (ITPLN), Faculty of Energy Informatics and Telecommunications. I'm interested in learning more about technology, especially information technology and programming.",
      "I'm passionate about technology, computers, and learning new things. I enjoy playing games, exploring technology, and developing my skills. My goal is to gain new knowledge, experience, and become a better version of myself.",
    ],
    education: {
      label: 'EDUCATION',
      degree: 'Bachelor of Informatics Engineering',
      school: 'Institut Teknologi PLN',
      period: '2026 - Now',
      faculty: 'Faculty of Energy Informatics and Telecommunications',
    },
    inquiry: {
      label: 'DIRECT INQUIRY',
      email: 'farrel3780@gmail.com',
      domicile: 'Batam, Indonesia',
      instagramUrl: 'https://www.instagram.com/parell_sky?gwpx=N3hvZzN1NmF1bGNy',
    },
  },
  contentOverview: {
    kicker: 'INDEX',
    title: 'CONTENT OVERVIEW',
    items: [
      { number: '01', label: 'INTRODUCTION', href: '#intro' },
      { number: '02', label: 'SKILLS & TOOLS', href: '#skills' },
      { number: '03', label: 'PROJECTS', href: '#projects' },
      { number: '04', label: 'CONNECT', href: '#contact' },
    ] as ContentIndexItem[],
  },
  skills: {
    kicker: '02 / EXPERTISE',
    title: 'SKILLS & TOOLKIT',
    rightLabel: 'CAPABILITIES & STACK',
    cardTitle: 'INFORMATICS ENGINEERING',
    cardSubtitle:
      'Foundational software engineering, design presentation & media editing',
    focusBadge: 'CORE FOCUS',
    toolkit: [
      { code: 'W', name: 'Microsoft Word', colorClass: 'bg-[#005a9e]' },
      { code: 'VS', name: 'Code Editor', colorClass: 'bg-[#258169]' },
    ] as ToolkitItem[],
    hardSkills: [
      { number: '01', name: 'Basic Programming' },
      { number: '02', name: 'Presentation Design' },
      { number: '03', name: 'Video Editing' },
    ] as HardSkillItem[],
    softSkills: [
      'Teamwork',
      'Communication',
      'Problem Solving',
      'Continuous Learning',
      'Attention to Detail',
    ],
  },
  projects: {
    kicker: '03 / PORTFOLIO',
    title: 'PROJECTS',
    rightLabel: 'SELECTED WORKS',
    items: [
      {
        id: 'personal-portfolio-website',
        meta: '01 — WEB DEVELOPMENT · UI DESIGN',
        title: 'PERSONAL PORTFOLIO WEBSITE',
        tagline:
          'A dark-teal editorial personal portfolio website built with clean semantic HTML, modular CSS tokens, and vanilla JavaScript for dynamic interactions.',
        domain: 'farrel-portfolio.dev',
        previewBadge: '3D DEPTH · DARK TEAL',
        previewTitle: 'PORTFOLIO ARCHITECTURE',
        previewSubtitle: 'Clean JSON Data Driven • HTML5 & CSS Custom Tokens',
        buildTag: 'BUILD 2026.01',
        statusTag: 'STATUS: LIVE',
        highlights: [
          {
            label: 'Tech Stack:',
            value:
              'HTML5, Modern CSS, Vanilla JavaScript, JSON Data Architecture',
          },
          {
            label: 'Design Focus:',
            value:
              '3D character depth layering, responsive grid, and high-contrast typography',
          },
        ],
        liveHref: '#hero',
        architectureNotes: [
          'Z-indexed 3D character parallax staging layered between split condensed display typography and ambient radial spotlight.',
          'Nocturne Kinetic Editorial design tokens combining deep oceanic teal (#0B1D26), frosted glass surfaces, and electric cyan (#4DB8FF) focal highlights.',
          'Responsive editorial section rhythm with IntersectionObserver scroll reveals and full keyboard accessibility.',
        ],
      },
    ] as ProjectItem[],
  },
  contact: {
    kicker: "WHAT'S NEXT?",
    title: "LET'S CONNECT",
    subtitle:
      'Open for tech discussions, collaborative projects, internship opportunities, and innovative ideas.',
    email: 'farrel3780@gmail.com',
    instagramUrl: 'https://www.instagram.com/parell_sky?gwpx=N3hvZzN1NmF1bGNy',
    copyright: '© 2026 Farrel Ahmad Faruq. All rights reserved.',
    footerMeta: 'Batam, Indonesia · Informatics Engineering ITPLN',
  },
};
