import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiExternalLink, FiGithub, FiLinkedin, FiMonitor } from 'react-icons/fi'
import mltLogo from '../mlt.png'
import romanBridgeWebsiteImage from "../roman's summer bridge website .png"
import romanBridgeLoginImage from '../romans summer bridge login page.png'
import romanBridgeSignupImage from '../romans summer bridge signup page.png'
import romanBridgeVolunteerDashboardImage from '../romans summer bridge volunteer dashboard.png'
import romanBridgeAdminDashboardImage from '../romans summer bridge admin dashboard.png'
import romanBridgeLogoDesign from "../Roman's Summer Bridge logo design.png"

const reveal = {
  hidden: { opacity: 0, y: 28 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
}

const education = {
  school: 'Georgia Institute of Technology',
  location: 'Atlanta, GA',
  degree: 'Bachelor of Science in Computer Science',
  graduation: 'Expected May 2028',
  honors: [
  ],
  coursework: ['Object-Oriented Programming (Current)', 'Data Structures and Algorithms (via CodePath)'],
}

const technicalSkills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'C#', 'Python', 'C++', 'JavaScript', 'HTML/CSS', 'SQL'],
  },
  {
    category: 'Frameworks and Libraries',
    items: ['React', 'Node.js', 'Flask'],
  },
  {
    category: 'Tools and Platforms',
    items: ['Neon', 'Render', 'AWS', 'Git', 'VS Code', 'Unity'],
  },
]

const experiences = [
  {
    title: 'Software Engineering Intern',
    organization: 'Clean Community Inc. (Remote)',
    date: 'May 2025 - Aug 2025',
    logo: '/images/clean community inc logo.png',
    points: [
      'Developed Unity-based applications with server-side logic in C# using Mirror, building core multiplayer functionality in a collaborative team environment.',
      'Implemented real-time client-server communication and local simulated-client testing, reducing synchronization issues by 20 percent.',
      'Contributed in sprint planning, issue tracking, and debugging sessions to resolve 50+ bugs and gameplay inconsistencies.',
      'Researched AWS hosting approaches and helped outline scalable backend plans for future cloud deployment.',
    ],
    images: [],
  },
]

const projects = [
  {
    title: 'Quest - 1st Place Winner, Hacklanta Hackathon',
    organization: 'React, Node.js, Gemini API, Google Maps API, Vercel',
    date: '2026',
    description:
      'Built and shipped an AI-powered web app in a team of 4 developers that generates personalized real-world adventures with 3-5 stops based on user mood, time, and location.',
    points: [
      'Engineered full-stack features using Gemini to orchestrate 3+ external APIs per request and process real-time data sources.',
      'Integrated Google Maps Platform and OpenWeatherMap with fallback handling for better recommendation reliability.',
      'Deployed React (Vite) frontend and Node.js serverless backend on Vercel with a complete end-to-end flow in 12 hours.',
    ],
    links: [
      { label: 'Website', href: 'https://hacklanta-eight.vercel.app/' },
      { label: 'DevSpot', href: 'https://devspot.app/projects/1730' },
      { label: 'GitHub Repo', href: 'https://github.com/DawYem/Quest/tree/main' },
    ],
    images: [
      '/images/QuestWinner.jpg',
      '/images/QuestPic1.jpg',
      '/images/QuestPic2.jpg',
      '/images/QuestPic3.jpg',
      '/images/Quest1.jpg',
      '/images/Quest2.jpg',
      '/images/Quest3.jpg',
      '/images/Quest4.jpg',
      '/images/Quest5.jpg',
      '/images/Quest6.jpg',
    ],
  },
  {
    title: "Roman's Summer Bridge Website",
    organization: 'React, Flask, PostgreSQL, Neon, Render',
    date: '2025',
    description:
      'Built and shipped a volunteer tracking web app used by 50+ students to log 500+ service hours, upload proof content, and earn dashboard-based recognition.',
    points: [
      'Engineered a Flask backend with bcrypt-secured sessions, role-based admin controls, and a database abstraction layer supporting SQLite and PostgreSQL.',
      'Implemented 5+ major features including image upload with zoom lightbox, automated Excel report generation, and responsive design for 3 breakpoints.',
      'Deployed to Render with Neon PostgreSQL using a migration-ready architecture.',
    ],
    links: [
      { label: 'Website', href: 'https://roman-s-summer-bridge-program-official.onrender.com/' },
      { label: 'GitHub Repo', href: 'https://github.com/DawYem/Roman-s-Summer-Bridge-Program-Official-Website' },
    ],
    images: [
      romanBridgeWebsiteImage,
      romanBridgeLoginImage,
      romanBridgeSignupImage,
      romanBridgeVolunteerDashboardImage,
      romanBridgeAdminDashboardImage,
    ],
  },
  {
    title: 'MindScope',
    organization: 'HackGT12 at Georgia Institute of Technology',
    date: 'September 2025',
    description:
      'Built in 36 hours, MindScope is a health-focused web app that combines Flask, Gemini API, and computer vision to support healthcare triage decisions.',
    points: [
      'Implemented visual symptom detection workflows with Pillow-based computer vision processing.',
      'Built Flask backend data flow and AI analysis integration for healthcare context generation.',
      'Integrated Gemini for summarization and connected outputs to relevant medical literature links.',
    ],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/BrianTMM/RedRevolvingDoorHackGT' },
      { label: 'Live Demo', href: 'https://www.loom.com/share/91fc8d5a0d254f1f8338c632b7eb0b85?sid=40a8b370-2679-412c-83b5-e5efc726dd95' },
    ],
    images: ['/images/hackgt photo friend.jpg', '/images/medscope-1.png', '/images/medscope-2.png', '/images/medscope-3.png'],
  },
  {
    title: 'PureQuery',
    organization: 'Open Source AI Hackathon #18 at Microsoft Reactor Redmond',
    date: 'June 2025',
    description:
      'Built a browser tool that helps users make smarter shopping decisions by surfacing clearer product insights.',
    points: [
      'Implemented Amazon product search and Reddit discussion scraping pipelines.',
      'Developed filtering to remove biased and misleading content from aggregated results.',
      'Delivered a faster way to evaluate trustworthy product feedback across sources.',
    ],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/annanay25/web-ui' },
      { label: 'Slide Deck', href: 'https://docs.google.com/presentation/d/15XSftR2eqa9QnKQVOVLVxcVLbxT2Wl0LiJhRfSsUigA/edit?usp=sharing' },
    ],
    images: ['/images/aihackathon.png', '/images/purequery demo.png', '/images/purequery demo2.png', '/images/purequery demo3.png', '/images/purequery demo4.png'],
  },
  {
    title: 'CramJam',
    organization: "Georgia Institute of Technology's Startup Exchange",
    date: 'April 2025',
    description:
      'Built in under 3 hours, CramJam blends music, motivation, and focus tools into one study experience.',
    points: [
      'Designed an interface centered on deep-focus workflows for students and builders.',
      'Shipped and hosted the official site on AWS S3 for rapid public access.',
      'Optimized the prototype for laptop and desktop usage during the hack sprint.',
    ],
    links: [
      { label: 'GitHub Repo', href: 'https://github.com/DawYem/CramJam' },
      { label: 'Website', href: 'https://cramjam.s3.us-east-2.amazonaws.com/CramJam/index.html' },
    ],
    images: ['/images/gatech hackathon-2.png', '/images/gatech hackathon-1.png', '/images/cramjam-1.png', '/images/cramjam-2.png', '/images/cramjam-3.png', '/images/cramjam-4.png'],
  },
]

const leadership = [
  {
    title: "Roman's Summer Bridge Program - Founder",
    organization: 'Tucker, GA',
    date: 'June 2025 - Present',
    logo: romanBridgeLogoDesign,
    points: [
      'Founded and scaled a summer enrichment program serving 30+ students and leading 10+ volunteers.',
      'Developed and delivered 20+ hours of curriculum in math, reading, and writing.',
      'Managed operations, scheduling, and mentorship in one-on-one and group instruction formats.',
    ],
    images: ['/images/Bridge 2.png', '/images/Bridge 1.png', '/images/Bridge 3.png', '/images/bridge 4.png'],
  },
  {
    title: 'Management Leadership for Tomorrow - Career Preparation Fellow',
    organization: 'Atlanta, GA',
    date: 'Nov 2025 - Present',
    points: [
      'Accepted into a selective 18-month professional development program for high-achieving diverse talent.',
      'Complete business case studies and assignments to strengthen leadership and technical skills.',
      'Attend conferences hosted by organizations including Deloitte, LinkedIn, and Target.',
    ],
    images: [],
  },
]

function Section({ id, eyebrow, title, children, animate = true }) {
  const SectionTag = animate ? motion.section : 'section'
  const motionProps = animate
    ? {
        variants: reveal,
        initial: 'hidden',
        whileInView: 'shown',
        viewport: { once: true, amount: 0.2 },
      }
    : {}

  return (
    <SectionTag
      id={id}
      className="panel"
      {...motionProps}
    >
      <p className="eyebrow">{eyebrow}</p>
      {title ? <h2>{title}</h2> : null}
      {children}
    </SectionTag>
  )
}

function Gallery({ images, onOpen, className = '' }) {
  return (
    <div className={`gallery ${className}`.trim()}>
      {images.map((src, index) => {
        const isCleanLogo = src.includes('clean community inc logo')
        const isRomanBridgeImage = src.toLowerCase().includes('roman') && src.toLowerCase().includes('summer') && src.toLowerCase().includes('bridge')

        return (
        <button
          key={src}
          className={`gallery-item ${isCleanLogo ? 'logo-frame no-zoom' : ''} ${isRomanBridgeImage ? 'contain-frame no-zoom' : ''}`}
          onClick={() => onOpen(images, index)}
          aria-label="Open image"
        >
          <img
            src={src}
            alt="Portfolio visual"
            loading="lazy"
            className={`${isCleanLogo ? 'logo-image' : ''} ${isRomanBridgeImage ? 'contain-image' : ''}`.trim()}
          />
        </button>
        )
      })}
    </div>
  )
}

function App() {
  const [isCompactScreen, setIsCompactScreen] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 700px)').matches
  })
  const [lightboxState, setLightboxState] = useState(null)
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    message: '',
  })
  const [contactStatus, setContactStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)')

    const updateScreenSize = () => {
      setIsCompactScreen(mediaQuery.matches)
    }

    updateScreenSize()

    mediaQuery.addEventListener('change', updateScreenSize)

    return () => {
      mediaQuery.removeEventListener('change', updateScreenSize)
    }
  }, [])

  const animateSections = !isCompactScreen

  function openLightbox(images, index) {
    setLightboxState({ images, index })
  }

  function closeLightbox() {
    setLightboxState(null)
  }

  function showPreviousImage() {
    setLightboxState((current) => {
      if (!current) return current
      const prevIndex = (current.index - 1 + current.images.length) % current.images.length
      return { ...current, index: prevIndex }
    })
  }

  function showNextImage() {
    setLightboxState((current) => {
      if (!current) return current
      const nextIndex = (current.index + 1) % current.images.length
      return { ...current, index: nextIndex }
    })
  }

  async function handleContactSubmit(event) {
    event.preventDefault()

    setIsSubmitting(true)
    setContactStatus({ type: '', message: '' })

    try {
      const formData = new FormData(event.currentTarget)

      const response = await fetch('https://formsubmit.co/f670d12094df3fdb2bfcf9ba214e02e8', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
        mode: 'no-cors',
      })

      if (response === undefined) {
        throw new Error('Submission failed')
      }

      setContactForm({
        fullName: '',
        email: '',
        message: '',
      })
      setContactStatus({
        type: 'success',
        message: 'Thanks. Your message was sent successfully.',
      })
    } catch {
      setContactStatus({
        type: 'error',
        message: 'Something went wrong. Please try again in a moment.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="site-shell">
      <div className="bg-orb bg-orb-one" />
      <div className="bg-orb bg-orb-two" />

      <header className="hero">
        <motion.img
          src="/images/ProfilePhoto1.png"
          alt="Dawit Yemane"
          className="avatar"
          initial={{ opacity: 0, scale: 0.9, y: -12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        />

        <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          Student Engineer + Builder
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}>
          Dawit Yemane
        </motion.h1>

        <motion.p className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
          Computer Science student at Georgia Tech focused on full-stack systems, AI-powered experiences, and community-first product building.
        </motion.p>

        <motion.p className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.29, duration: 0.7 }}>
          dawitkidaneyemane@gmail.com
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <a href="https://docs.google.com/document/d/13_JFlAzxLc1NrnWA6h9DNjvJKwS5MJFH/edit?usp=sharing&ouid=109411447248338109403&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="btn btn-primary">
            Resume <FiArrowRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Me
          </a>
          <a href="#projects" className="btn btn-ghost">
            See Work
          </a>
        </motion.div>

        <motion.div className="mobile-jump-row" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}>
          <a href="#experience" className="btn btn-primary mobile-jump-link">
            Jump to Experience <FiArrowRight />
          </a>
          <a href="#projects" className="btn btn-ghost mobile-jump-link">
            Projects
          </a>
        </motion.div>

        <motion.div className="social-strip" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
          <a href="https://www.linkedin.com/in/dawityemane/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://github.com/dawyem" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
        </motion.div>

      </header>

      <main>
        <Section id="about" eyebrow="About" title="Career profile" animate={animateSections}>
          <p className="profile-intro">
            I build practical software that solves real-world problems and supports people at scale.
          </p>
          <p className="profile-detail">
            Recent work includes AI-powered recommendation systems, multiplayer application logic, and education-focused platforms for local communities.
          </p>
        </Section>

        <Section id="education" eyebrow="Education" title="Academic foundation" animate={animateSections}>
          <article className="entry-card">
            <h3>{education.school}</h3>
            <p className="entry-meta">{education.location} • {education.graduation}</p>
            <p>{education.degree}</p>
            <ul>
              {education.honors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="entry-meta">Relevant Coursework</p>
            <ul>
              {education.coursework.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Technical stack" animate={animateSections}>
          <div className="stack-list">
            {technicalSkills.map((skill) => (
              <article key={skill.category} className="entry-card">
                <h3>{skill.category}</h3>
                <p>{skill.items.join(' • ')}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Work experience" animate={animateSections}>
          <div className="stack-list">
            {experiences.map((item) => (
              <article key={item.title} className="entry-card">
                {item.logo ? <img className="company-logo" src={item.logo} alt="Clean Community Inc. logo" loading="lazy" /> : null}
                <h3>{item.title}</h3>
                <p className="entry-meta">{item.organization} • {item.date}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.images.length > 0 && <Gallery images={item.images} onOpen={openLightbox} />}
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected projects" animate={animateSections}>
          <div className="stack-list">
            {projects.map((project) => (
              <article key={project.title} className="entry-card">
                <h3>{project.title}</h3>
                <p className="entry-meta">{project.organization} • {project.date}</p>
                <p>{project.description}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="link-row">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label} <FiExternalLink />
                    </a>
                  ))}
                </div>
                {project.images.length > 0 && <Gallery images={project.images} onOpen={openLightbox} />}
              </article>
            ))}
          </div>
        </Section>

        <Section id="leadership" eyebrow="Leadership" title="Leadership and professional development" animate={animateSections}>
          <div className="stack-list">
            {leadership.map((item) => (
              <article key={item.title} className="entry-card">
                {item.logo ? <img className="company-logo" src={item.logo} alt="Roman's Summer Bridge logo" loading="lazy" /> : null}
                {item.title.includes('Management Leadership for Tomorrow') ? (
                  <img className="mlt-logo" src={mltLogo} alt="MLT logo" loading="lazy" />
                ) : null}
                <h3>{item.title}</h3>
                <p className="entry-meta">{item.organization} • {item.date}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.images.length > 0 && <Gallery images={item.images} onOpen={openLightbox} />}
              </article>
            ))}
          </div>
        </Section>

        <Section id="beyond" eyebrow="Beyond Tech" title="Travel Photos" animate={animateSections}>
          <p>
            I love exploring different countries and places!
          </p>
          <Gallery
            className="travel-gallery"
            images={[
              '/images/IMG_5843.jpg',
              '/images/IMG_6052.jpg',
            ]}
            onOpen={openLightbox}
          />
        </Section>

        <Section id="contact" eyebrow="Contact" title="Contact me" animate={animateSections}>
          <div className="contact-grid">
            <div className="contact-copy">
              <p>
                Send a message if you want to connect about internships, projects, or collaboration.
              </p>
              <p className="entry-meta">I typically respond through email.</p>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <input type="hidden" name="_subject" value="New portfolio contact message" />
              <input type="hidden" name="_captcha" value="false" />
              <label>
                Full name
                <input
                  type="text"
                  name="fullName"
                  value={contactForm.fullName}
                  onChange={(event) => setContactForm((current) => ({ ...current, fullName: event.target.value }))}
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={(event) => setContactForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={(event) => setContactForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Write your message here"
                  rows="6"
                  required
                />
              </label>

              {contactStatus.message && (
                <p className={`contact-status ${contactStatus.type}`} aria-live="polite">
                  {contactStatus.message}
                </p>
              )}

              <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <FiArrowRight />
              </button>
            </form>
          </div>
        </Section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Dawit Yemane. Built with React + Vite + Framer Motion.</p>
      </footer>

      {lightboxState && (
        <div className="lightbox" onClick={closeLightbox} role="button" tabIndex={0} aria-label="Close image preview">
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(event) => {
            event.stopPropagation()
            showPreviousImage()
          }}
            aria-label="Previous image"
          >
            Prev
          </button>
          <img
            src={lightboxState.images[lightboxState.index]}
            alt="Expanded portfolio visual"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(event) => {
            event.stopPropagation()
            showNextImage()
          }}
            aria-label="Next image"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default App
