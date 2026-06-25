import { useRef, useState, useEffect, type CSSProperties } from 'react'
import {
  profile,
  kicker,
  headline,
  intro,
  experienceBreakdown,
  // highlights, // HIGHLIGHTS — hidden for now
  projects,
  skillGroups,
  experience,
  journey,
  writing,
  writingEmptyState,
  contact,
  type Project,
  type ProjectBadge,
} from './data/portfolio'

function TopBar() {
  return <div className="top-bar" aria-hidden="true" />
}

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#journey', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <span className="logo" aria-label={profile.name}>{profile.initials}</span>
        <nav className="site-nav" aria-label="Primary navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-nav-menu" className="mobile-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

function CodeBio() {
  return (
    <div className="code-card" aria-label="Code bio">
      <pre>
        <span className="syn-keyword">class </span>
        <span className="syn-type">RuchaJoshi</span>
        <span className="syn-plain"> : </span>
        <span className="syn-type">MobileEngineer</span>
        <span className="syn-plain"> {'{'}</span>
        {'\n'}
        <span className="syn-plain">  </span>
        <span className="syn-keyword">val </span>
        <span className="syn-plain">android = </span>
        <span className="syn-string">"5+ years"</span>
        {'\n'}
        <span className="syn-plain">  </span>
        <span className="syn-keyword">val </span>
        <span className="syn-plain">kotlin = </span>
        <span className="syn-string">"since 2019"</span>
        {'\n'}
        <span className="syn-plain">  </span>
        <span className="syn-keyword">val </span>
        <span className="syn-plain">kmp = </span>
        <span className="syn-string">"in production"</span>
        {'\n'}
        <span className="syn-plain">  </span>
        <span className="syn-keyword">val </span>
        <span className="syn-plain">building = </span>
        <span className="syn-string">"an AI app"</span>
        {'\n'}
        <span className="syn-plain">  </span>
        <span className="syn-keyword">override fun </span>
        <span className="syn-fn">ship</span>
        <span className="syn-plain">() = quality.</span>
        <span className="syn-fn">first</span>
        <span className="syn-plain">()</span>
        {'\n'}
        <span className="syn-plain">{'}'}</span>
      </pre>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">{kicker}</p>
          <h1 id="hero-heading" className="hero-headline">
            {headline.prefix}
            <span className="gradient-text">{headline.gradient}</span>
          </h1>
          <p className="hero-intro">{intro}</p>
          <div className="hero-actions">
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary"
              aria-label="Send email to Rucha Bhatt"
            >
              Email me
            </a>
            <a
              href={profile.resumeUrl}
              className="btn btn-ghost"
              download
              aria-label="Download CV"
            >
              Download CV
            </a>
            <a
              href={profile.links.github}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <CodeBio />
      </div>
    </section>
  )
}

function ExperienceBreakdown() {
  return (
    <div className="breakdown-bar">
      <div className="container">
        <dl className="breakdown-grid">
          {experienceBreakdown.map((item) => (
            <div key={item.label} className="breakdown-cell">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="breakdown-value">{item.value}</span>
                <span className="breakdown-label">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

/* HIGHLIGHTS — hidden for now; uncomment function + <HighlightsStrip /> in App() to re-enable
function HighlightsStrip() {
  return (
    <div className="highlights-strip">
      <div className="container">
        <dl className="highlights-grid">
          {highlights.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="highlight-value">{item.value}</span>
                <span className="highlight-label">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
*/

function BadgeEl({ badge }: { badge: ProjectBadge }) {
  return <span className={`badge badge-${badge}`}>{badge}</span>
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card${project.inProgress ? ' in-progress' : ''}`}>
      <div className="project-card-top">
        <h3 className="project-title">{project.title}</h3>
        <div className="badge-row">
          <BadgeEl badge={project.badge} />
          {project.inProgress && (
            <span className="badge-in-progress" aria-label="Work in progress">In progress</span>
          )}
        </div>
      </div>

      <p className="project-meta">{project.meta}</p>

      <div className="project-row">
        <span className="project-row-label">Role</span>
        <p className="project-row-text">{project.role}</p>
      </div>

      <div className="project-row">
        <span className="project-row-label">Problem</span>
        <p className="project-row-text">{project.problem}</p>
      </div>

      <div className="project-row">
        <span className="project-row-label">{project.impactLabel}</span>
        <p className="project-row-text">{project.impactOrGoal}</p>
      </div>

      <ul className="tag-list" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">{tag}</li>
        ))}
      </ul>
    </article>
  )
}

function WorkSection() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="container">
        <span className="section-label">Selected work</span>
        <h2 id="work-heading" className="section-heading">Case studies</h2>
        <div className="projects-grid">
          {projects
            // RANGE card — hidden for now, remove the .filter() line to re-enable
            .filter((p) => p.id !== 'multi-sector')
            .map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <span className="section-label">Capabilities</span>
        <h2 id="skills-heading" className="section-heading">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-card">
              <p className="skill-category">{group.category}</p>
              <ul className="skill-pills" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-pill">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <span className="section-label">Career</span>
        <h2 id="experience-heading" className="section-heading">Experience</h2>
        <ol className="timeline" aria-label="Work history">
          {experience.map((entry) => (
            <li key={entry.id} className="timeline-entry">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="exp-header">
                <span className="exp-title">{entry.title}</span>
                <span className="exp-company">{entry.company}</span>
              </div>
              <p className="exp-meta">
                {entry.location} &nbsp;·&nbsp; {entry.period}
              </p>
              <p className="exp-description">{entry.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const JOURNEY_DOT_COLORS = ['#3C7FFF', '#7F52FF', '#E0529C'] as const

const MOBILE_DOT_CX = [75, 225, 75] as const
const MOBILE_DOT_CY = [76, 190, 304] as const
const MOBILE_LABEL_TOP = ['20%', '50%', '80%'] as const
const MOBILE_LABEL_SIDE = ['right', 'left', 'right'] as const

function JourneySection() {
  const pathRef = useRef<SVGPathElement>(null)
  const mobilePathRef = useRef<SVGPathElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAnimated(true)
      return
    }

    const initDash = (p: SVGPathElement | null) => {
      if (!p) return
      const len = p.getTotalLength()
      if (len > 0) {
        p.style.strokeDasharray = String(len)
        p.style.strokeDashoffset = String(len)
      }
    }
    initDash(pathRef.current)
    initDash(mobilePathRef.current)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (pathRef.current) pathRef.current.style.strokeDashoffset = '0'
          if (mobilePathRef.current) mobilePathRef.current.style.strokeDashoffset = '0'
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    requestAnimationFrame(() => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="journey" ref={sectionRef} className="section journey-section" aria-labelledby="journey-heading">
      <div className="container">
        <span className="section-label">Career path</span>
        <h2 id="journey-heading" className="section-heading">The journey</h2>
        <p className="journey-intro">A non-linear path — and I own every part of it.</p>

        <div className={`journey-viz${animated ? ' journey-animated' : ''}`}>
          <div className="journey-milestones" aria-label="Career milestones">
            {journey.map((m, i) => (
              <div
                key={m.id}
                className="journey-milestone"
                style={{ '--i': i, '--dot-color': JOURNEY_DOT_COLORS[i] } as CSSProperties}
              >
                <p className="journey-year">{m.year}</p>
                <p className="journey-title">{m.title}</p>
                <p className="journey-caption">{m.caption}</p>
              </div>
            ))}
          </div>

          <svg
            className="journey-road-svg"
            viewBox="0 0 900 140"
            aria-hidden="true"
            role="presentation"
          >
            <defs>
              <linearGradient id="journey-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3C7FFF" />
                <stop offset="50%" stopColor="#7F52FF" />
                <stop offset="100%" stopColor="#E0529C" />
              </linearGradient>
              <filter id="journey-dot-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              ref={pathRef}
              className="journey-road-path"
              d="M0,115 C40,115 90,25 150,25 C210,25 260,115 300,115 C340,115 390,25 450,25 C510,25 560,115 600,115 C640,115 690,25 750,25 C810,25 860,115 900,115"
              stroke="url(#journey-gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {JOURNEY_DOT_COLORS.map((color, i) => (
              <circle
                key={i}
                className="journey-dot-svg"
                cx={[150, 450, 750][i]}
                cy={25}
                r={7}
                fill={color}
                filter="url(#journey-dot-glow)"
                style={{ '--i': i } as CSSProperties}
              />
            ))}
          </svg>

          {/* Mobile: S-curve vertical road */}
          <div className="journey-mobile-wrap" aria-label="Career milestones">
            <svg
              className="journey-mobile-svg"
              viewBox="0 0 300 380"
              aria-hidden="true"
              role="presentation"
            >
              <defs>
                <linearGradient id="journey-gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3C7FFF" />
                  <stop offset="50%" stopColor="#7F52FF" />
                  <stop offset="100%" stopColor="#E0529C" />
                </linearGradient>
                <filter id="journey-dot-glow-v" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                ref={mobilePathRef}
                className="journey-mobile-path"
                d="M150,0 C150,34 75,48 75,76 C75,104 150,118 150,144 C150,165 225,175 225,190 C225,205 150,216 150,238 C150,268 75,280 75,304 C75,332 150,346 150,380"
                stroke="url(#journey-gradient-v)"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
              />
              {JOURNEY_DOT_COLORS.map((color, i) => (
                <circle
                  key={i}
                  cx={MOBILE_DOT_CX[i]}
                  cy={MOBILE_DOT_CY[i]}
                  r={8}
                  fill={color}
                  filter="url(#journey-dot-glow-v)"
                />
              ))}
            </svg>
            {journey.map((m, i) => (
              <div
                key={m.id}
                className={`journey-mobile-item journey-mobile-item--${MOBILE_LABEL_SIDE[i]}`}
                style={{
                  top: MOBILE_LABEL_TOP[i],
                  '--i': i,
                  '--dot-color': JOURNEY_DOT_COLORS[i],
                } as CSSProperties}
              >
                <p className="journey-year">{m.year}</p>
                <p className="journey-title">{m.title}</p>
                <p className="journey-caption">{m.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WritingSection() {
  return (
    <section id="writing" className="section" aria-labelledby="writing-heading">
      <div className="container">
        <span className="section-label">Writing</span>
        <h2 id="writing-heading" className="section-heading">Articles</h2>
        {writing.length === 0 ? (
          <p className="writing-empty">{writingEmptyState}</p>
        ) : (
          <ul className="writing-list">
            {writing.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  className="writing-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${post.title} (opens in new tab)`}
                >
                  <span className="writing-title">{post.title}</span>
                  <span className="writing-date">{post.date}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-box">
          <p className="contact-status">{contact.statusLine}</p>
          <h2 id="contact-heading" className="contact-heading">{contact.heading}</h2>
          <div className="contact-actions">
            <button
              type="button"
              className="btn btn-primary"
              data-cal-link="rucha-bhatt-joshi/chat-with-rucha"
              data-cal-namespace="chat-with-rucha"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
              aria-label="Book a chat (opens calendar popup)"
            >
              📅 Book a chat
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-ghost"
              aria-label="Send an email"
            >
              Email me
            </a>
            <a
              href={profile.resumeUrl}
              className="btn btn-ghost"
              download
              aria-label="Download CV"
            >
              Download CV
            </a>
            <a
              href={profile.links.linkedin}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>
            {/* GITHUB BUTTON — hidden for now; uncomment to re-enable
            <a
              href={profile.links.github}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{profile.name} &nbsp;·&nbsp; {profile.location}</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <ExperienceBreakdown />
        {/* HIGHLIGHTS — hidden for now */}
        {/* <HighlightsStrip /> */}
        <WorkSection />
        <ExperienceSection />
        <JourneySection />
        <SkillsSection />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
