import {
  profile,
  kicker,
  headline,
  intro,
  experienceBreakdown,
  highlights,
  projects,
  skillGroups,
  experience,
  writing,
  writingEmptyState,
  contact,
  type Project,
  type ProjectBadge,
} from './data/portfolio'

function TopBar() {
  return <div className="top-bar" aria-hidden="true" />
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <span className="logo" aria-label={profile.name}>{profile.initials}</span>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
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
          {projects.map((p) => (
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
          <p className="contact-body">{contact.body}</p>
          <div className="contact-actions">
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary"
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
            <a
              href={profile.links.github}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>
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
        <HighlightsStrip />
        <WorkSection />
        <SkillsSection />
        <ExperienceSection />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
