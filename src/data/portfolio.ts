export const profile = {
  name: 'Rucha Bhatt',
  initials: 'RJ',
  role: 'Mobile Engineer',
  location: 'London, UK',
  email: 'joshirucha0807@gmail.com',
  resumeUrl: '/resume.pdf',
  links: {
    github: 'https://github.com/RuchaBhattJoshi',
    linkedin: 'https://www.linkedin.com/in/ruchabhattjoshi',
  },
} as const

export const kicker = 'MOBILE ENGINEER - ANDROID & KMP - LONDON'

export const headline = {
  prefix: 'I build secure, scalable mobile apps ',
  gradient: 'millions of people trust.',
}

export const intro =
  'Mobile engineer specialising in Android, with hands-on Kotlin Multiplatform in production. I have shipped consumer apps to 18M+ users in fintech and built early-stage products across multiple industries - owning features end-to-end, from architecture and security to production monitoring, now with an AI-accelerated workflow.'

export const experienceBreakdown = [
  { value: '5+ yrs', label: 'Android - native' },
  { value: '3+ yrs', label: 'Kotlin - since 2019' },
  { value: '1 yr 3 mo', label: 'KMP - alpha-era adopter' },
] as const

export const highlights = [
  { value: '18M+', label: 'users reached' },
  { value: '6+', label: 'industries shipped' },
  { value: 'Startups → Scale-up', label: 'across the journey' },
  { value: 'End-to-end', label: 'build → production' },
] as const

export type ProjectBadge = 'ANDROID' | 'KMP' | 'AI' | 'RANGE'

export interface Project {
  id: string
  title: string
  badge: ProjectBadge
  meta: string
  role: string
  problem: string
  impactOrGoal: string
  impactLabel: 'Impact' | 'Goal'
  tags: string[]
  inProgress?: boolean
}

export const projects: Project[] = [
  {
    id: 'clearscore',
    title: 'ClearScore - Consumer Fintech Android',
    badge: 'ANDROID',
    meta: '18M+ users - multiple markets',
    role: 'Android Engineer - owned features end-to-end across a multi-module codebase.',
    problem:
      'An ageing XML + RxJava codebase slowed experimentation and made the app harder to scale and secure for millions of fintech users.',
    impactOrGoal:
      'Drove XML→Compose and RxJava→Coroutines migrations, applied Clean Architecture, and hardened security (encrypted storage, biometrics, certificate pinning) - faster A/B testing and a maintainable, secure UI for 18M+ users.',
    impactLabel: 'Impact',
    tags: ['Compose', 'Coroutines', 'Security', 'Accessibility'],
  },
  {
    id: 'drivescore',
    title: 'DriveScore - Kotlin Multiplatform',
    badge: 'KMP',
    meta: 'Cross-platform consumer product',
    role: 'Mobile Engineer - KMP contributor on a production app (1 yr 3 mo, hands-on).',
    problem:
      'A new consumer product needed shared business logic across platforms, using Kotlin Multiplatform while it was still in alpha/beta.',
    impactOrGoal:
      'Shipped shared business logic in production as an early adopter - real KMP experience before it went stable, keeping feature parity across platforms.',
    impactLabel: 'Impact',
    tags: ['KMP', 'Shared logic', 'Cross-platform', 'Early adopter'],
  },
  {
    id: 'ship-in-7',
    title: 'Ship in 7 - A Production App, Built in One Week with AI',
    badge: 'AI',
    meta: 'Personal project - IN PROGRESS - building in public',
    role: 'Solo Mobile Engineer - designing and shipping end-to-end with my own AI-assisted workflow.',
    problem:
      'Can one engineer use AI to build a genuinely complex, scalable mobile app to production standard - fast? Most "AI-built" apps cut corners; I set out to prove the opposite: speed and quality together.',
    impactOrGoal:
      'Build a production-quality, scalable Android app in one week using a disciplined AI workflow (AI for planning, architecture, implementation, and review) held to fintech-grade standards - clean architecture, tests, security, accessibility - and document the workflow so it is repeatable.',
    impactLabel: 'Goal',
    tags: ['AI workflow', 'Compose', 'Ship in 7 days', 'Quality-first', 'Building in public'],
    inProgress: true,
  },
  {
    id: 'multi-sector',
    title: 'Early-stage & Multi-sector Engineering',
    badge: 'RANGE',
    meta: 'Education - agriculture - lifestyle - edtech - social',
    role: 'Android Engineer across startups and client work.',
    problem:
      'Early products across very different domains needed solid architecture and the right tech choices from day one.',
    impactOrGoal:
      'Modernised a legacy MVC app to MVVM/MVI (early ML product); set the mobile tech direction for an EdTech startup; built and maintained consumer apps across multiple sectors - full lifecycle, build to production.',
    impactLabel: 'Impact',
    tags: ['Architecture', 'MVVM/MVI', 'Multi-sector'],
  },
]

export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Android',
    skills: ['Kotlin', 'Java', 'Jetpack Compose', 'XML→Compose', 'Coroutines', 'Flow', 'RxJava', 'Performance'],
  },
  {
    category: 'Cross-platform',
    skills: ['Kotlin Multiplatform (KMP)', 'Shared business logic'],
  },
  {
    category: 'Architecture',
    skills: ['Clean Architecture', 'MVVM', 'MVI', 'SOLID', 'DI', 'Unidirectional Data Flow'],
  },
  {
    category: 'Quality & Testing',
    skills: ['JUnit', 'Mockito', 'Espresso', 'Code Reviews', 'Profiling'],
  },
  {
    category: 'Security',
    skills: ['Encrypted Storage', 'Biometric Auth', 'Certificate Pinning', 'Root Detection', 'R8'],
  },
  {
    category: 'Tools & AI',
    skills: ['Git', 'Play Console', 'Firebase', 'Sentry', 'GitHub Actions', 'GitHub Copilot', 'Claude Code'],
  },
]

export interface ExperienceEntry {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string
}

export const experience: ExperienceEntry[] = [
  {
    id: 'clearscore-exp',
    title: 'Mobile Engineer',
    company: 'ClearScore / DriveScore',
    location: 'London',
    period: 'Oct 2021 – Jun 2023',
    description:
      'Consumer fintech (18M+ users). ClearScore: Android migrations (XML→Compose, RxJava→Coroutines), Clean Architecture, security & accessibility. DriveScore: Kotlin Multiplatform (alpha-era adopter, ~1 yr 3 mo) shipping shared logic in production.',
  },
  {
    id: 'freelance-exp',
    title: 'Android Developer',
    company: 'Freelance',
    location: 'London',
    period: 'Feb – Sep 2021',
    description:
      'Architected Android apps from scratch; set code-quality and testing standards; delivered independently with stakeholders.',
  },
  {
    id: 'mylearnmate-exp',
    title: 'Android Developer',
    company: 'MyLearnMate (EdTech)',
    location: 'Remote / USA',
    period: 'May – Oct 2020',
    description:
      'Early-stage EdTech maths startup; researched and set the mobile tech direction; built a consumer Android app on a short contract.',
  },
  {
    id: 'textvibes-exp',
    title: 'Android Developer',
    company: 'TextVibes',
    location: 'London (Google Campus)',
    period: 'Feb – Jul 2019',
    description:
      'Early ML-powered app surfacing meaningful messages from loved ones into a diary; migrated legacy MVC → MVVM/MVI.',
  },
  {
    id: 'lts-exp',
    title: 'Application Support Engineer',
    company: 'Long Tall Sally',
    location: 'London',
    period: 'Jul – Sep 2019',
    description:
      'Support ticket triage (JIRA/Confluence), performance monitoring, automated test cases in an Agile team.',
  },
  {
    id: 'zaptech-exp',
    title: 'Android Developer',
    company: 'Zaptech Solutions',
    location: 'India',
    period: 'Mar 2015 – Nov 2017',
    description:
      'Software services company; built and maintained consumer Android apps across education, agriculture and lifestyle sectors - full lifecycle; modernised legacy code to MVVM.',
  },
]

export interface JourneyMilestone {
  id: string
  year: string
  title: string
  caption: string
}

export const journey: JourneyMilestone[] = [
  {
    id: 'relocation',
    year: '2018',
    title: 'Relocated to the UK',
    caption: 'Moved countries and re-established my engineering career in London.',
  },
  {
    id: 'career-break',
    year: '2023–2025',
    title: 'Career break',
    caption: 'Following a company restructure, planned time out for maternity and early childcare.',
  },
  {
    id: 'building-again',
    year: '2026',
    title: 'Building again',
    caption: 'Back and building — an AI-powered Android app and writing about modern mobile engineering.',
  },
]

export interface WritingEntry {
  title: string
  date: string
  href: string
}

export const writing: WritingEntry[] = []

export const writingEmptyState =
  'First posts coming soon - on AI-assisted Android workflows, Compose migrations at scale, and fintech security.'

export const contact = {
  statusLine: 'Open to Android & Mobile Engineer roles — London & remote',
  heading: 'Need a mobile engineer who ships?',
  body: 'I am best suited for Android Engineer, Mobile Engineer, and Kotlin Multiplatform roles - hands-on and end-to-end, with real depth in scalable architecture, platform migrations, app security, and quality. I bring consumer-scale experience (18M+ users) and an AI-accelerated workflow. Open to mid-level roles across product, fintech, and startups - in London and remote-first teams.',
}
