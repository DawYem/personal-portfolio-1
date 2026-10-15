import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiCopy,
  FiGithub,
  FiImage,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiSun,
  FiUsers,
  FiX,
} from 'react-icons/fi'
import mltLogo from '../mlt.png'
import romanBridgeWebsiteImage from "../roman's summer bridge website .png"
import romanBridgeLoginImage from '../romans summer bridge login page.png'
import romanBridgeSignupImage from '../romans summer bridge signup page.png'
import romanBridgeVolunteerDashboardImage from '../romans summer bridge volunteer dashboard.png'
import romanBridgeAdminDashboardImage from '../romans summer bridge admin dashboard.png'
import romanBridgeLogoDesign from "../Roman's Summer Bridge logo design.png"

const EMAIL = 'dawitkidaneyemane@gmail.com'
const RESUME_URL = '/Resume_DawitYemane.pdf'
const LINKEDIN_URL = 'https://www.linkedin.com/in/dawityemane/'
const GITHUB_URL = 'https://github.com/dawyem'

const navLinks = [
  { id: 'impact', label: 'Impact' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
}

const highlights = [
  { value: '2', label: 'Engineering internships' },
  { value: '1st', label: 'Place at Hacklanta 2026' },
  { value: '500+', label: 'Service hours logged on my app' },
  { value: '30+', label: 'Students served by my program' },
]

const education = {
  school: 'Georgia Institute of Technology',
  location: 'Atlanta, GA',
  degree: 'B.S. in Computer Science',
  graduation: 'Expected May 2028',
  honors: ['Lillian P. and Victor Rattner Computer Science Scholarship', '1st Place, Hacklanta Hackathon (Spring 2026)'],
  coursework: ['Data Structures & Algorithms', 'Object-Oriented Programming'],
}

const technicalSkills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C++', 'C#', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Flask', 'Pandas'],
  },
  {
    category: 'Systems & Concepts',
    items: ['Data Structures & Algorithms', 'Client-Server Architecture', 'Distributed Systems', 'REST APIs'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'VS Code', 'AWS', 'Neon', 'Render', 'Unity', 'Claude', 'Cursor'],
  },
]

const experiences = [
  {
    title: 'Data Integration Intern',
    organization: 'Savannah River Nuclear Solutions · Aiken, SC',
    date: 'May 2026 - Aug 2026',
    logo: '/images/srns-logo.png',
    points: [
      'Designed and built Python automation scripts (Pandas, JSON) to process and transform data across 3+ enterprise systems, cutting manual processing time by 40% (~6 hours/week) and improving data quality.',
      'Engineered and implemented a data integration solution joining 4 separate workflows into unified reporting pipelines, saving stakeholders 10+ hours per reporting cycle.',
      'Led deployment of the solution and partnered with key stakeholders to drive company-wide adoption across 3 departments.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    organization: 'Clean Community Inc. (Remote)',
    date: 'May 2025 - Aug 2025',
    logo: '/images/clean community inc logo.png',
    points: [
      'Developed Unity applications with server-side C# logic, building real-time multiplayer functionality with the Mirror networking library that reduced network latency by 25%.',
      'Implemented client-server communication protocols and conducted local testing with simulated clients, improving responsiveness and reducing synchronization issues by 20%.',
      'Led weekly sprint planning, issue tracking, and debugging sessions, driving resolution of 50+ bugs and gameplay inconsistencies.',
    ],
  },
]

const projects = [
  {
    title: 'Quest',
    badge: '1st Place · Hacklanta Hackathon',
    context: 'Hacklanta Hackathon',
    date: 'Spring 2026',
    stack: ['React', 'Node.js', 'Gemini API', 'Google Maps API', 'Vercel'],
    description:
      'Built and shipped an AI-powered web app in a team of 4 developers that generates personalized real-world adventures with 3-5 stops based on user mood, time, and location.',
    points: [
      'Led backend development and deployment on a 4-person team, generating personalized real-world adventures from user mood, time, and location.',
      'Engineered a Gemini-orchestrated backend aggregating real-time data from 3+ external APIs per request, cutting response time by 35% through parallel API calls and improving route efficiency by 20%.',
      'Led deployment under a 12-hour time constraint using React (Vite) and Node.js serverless functions on Vercel, shipping a working end-to-end prototype.',
    ],
    links: [
      { label: 'Website', href: 'https://hacklanta-eight.vercel.app/' },
      { label: 'DevSpot', href: 'https://devspot.app/projects/1730' },
      { label: 'GitHub', href: 'https://github.com/DawYem/Quest/tree/main' },
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
    context: 'Community platform',
    date: '2025',
    coverPosition: 'top center',
    stack: ['React', 'Flask', 'PostgreSQL', 'Neon', 'Render'],
    description:
      'Led end-to-end development and deployment of a full-stack web app enabling 50+ students to log 500+ service hours, reducing manual hour tracking by 80%.',
    points: [
      'Led backend development with Flask, bcrypt-secured authentication, and role-based access control, on a scalable database layer supporting SQLite and PostgreSQL.',
      'Implemented 5+ major features including image upload with zoom lightbox, automated Excel report generation, and responsive design for 3 breakpoints.',
      'Deployed to Render with Neon PostgreSQL using a migration-ready architecture.',
    ],
    links: [
      { label: 'Website', href: 'https://roman-s-summer-bridge-program-official.onrender.com/' },
      { label: 'GitHub', href: 'https://github.com/DawYem/Roman-s-Summer-Bridge-Program-Official-Website' },
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
    context: 'HackGT 12 · Georgia Tech',
    date: 'Sep 2025',
    coverPosition: 'center 62%',
    stack: ['Flask', 'Gemini API', 'Pillow'],
    description:
      'Built in 36 hours, MindScope is a health-focused web app that combines Flask, Gemini API, and computer vision to support healthcare triage decisions.',
    points: [
      'Implemented visual symptom detection workflows with Pillow-based computer vision processing.',
      'Built Flask backend data flow and AI analysis integration for healthcare context generation.',
      'Integrated Gemini for summarization and connected outputs to relevant medical literature links.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/BrianTMM/RedRevolvingDoorHackGT' },
      { label: 'Live Demo', href: 'https://www.loom.com/share/91fc8d5a0d254f1f8338c632b7eb0b85?sid=40a8b370-2679-412c-83b5-e5efc726dd95' },
    ],
    images: ['/images/hackgt photo friend.jpg', '/images/medscope-1.png', '/images/medscope-2.png', '/images/medscope-3.png'],
  },
  {
    title: 'PureQuery',
    context: 'Open Source AI Hackathon #18 · Microsoft Reactor',
    date: 'Jun 2025',
    stack: [],
    description:
      'Built a browser tool that helps users make smarter shopping decisions by surfacing clearer product insights.',
    points: [
      'Implemented Amazon product search and Reddit discussion scraping pipelines.',
      'Developed filtering to remove biased and misleading content from aggregated results.',
      'Delivered a faster way to evaluate trustworthy product feedback across sources.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/annanay25/web-ui' },
      { label: 'Slide Deck', href: 'https://docs.google.com/presentation/d/15XSftR2eqa9QnKQVOVLVxcVLbxT2Wl0LiJhRfSsUigA/edit?usp=sharing' },
    ],
    images: ['/images/aihackathon.png', '/images/purequery demo.png', '/images/purequery demo2.png', '/images/purequery demo3.png', '/images/purequery demo4.png'],
  },
  {
    title: 'CramJam',
    context: 'Georgia Tech Startup Exchange',
    date: 'Apr 2025',
    stack: ['AWS S3'],
    description:
      'Built in under 3 hours, CramJam blends music, motivation, and focus tools into one study experience.',
    points: [
      'Designed an interface centered on deep-focus workflows for students and builders.',
      'Shipped and hosted the official site on AWS S3 for rapid public access.',
      'Optimized the prototype for laptop and desktop usage during the hack sprint.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/DawYem/CramJam' },
      { label: 'Website', href: 'https://cramjam.s3.us-east-2.amazonaws.com/CramJam/index.html' },
    ],
    images: ['/images/gatech hackathon-2.png', '/images/gatech hackathon-1.png', '/images/cramjam-1.png', '/images/cramjam-2.png', '/images/cramjam-3.png', '/images/cramjam-4.png'],
  },
]

const servantLeaderScholars = {
  organization: 'Servant Leader Scholars',
  badge: "Servant Leader Scholar '26",
  date: 'Mar 2026 - Present',
  summary:
    'Selected as one of 19 scholars in the Class of 2026, a leadership program built around service, career development, and community impact.',
  roles: [
    {
      title: 'Servant Leader Scholar',
      date: 'Mar 2026 - Present',
      points: [
        'Selected for the Summer 2026 cohort, focusing on leadership development.',
        'Participated in corporate programming aimed at enhancing professional growth and community impact.',
        'Engaged in networking and workshops with industry leaders from Google, Microsoft, and Delta Air Lines.',
      ],
    },
    {
      title: 'Automation Engineer, Marketing Task Force',
      date: 'May 2026 - Jul 2026',
      points: [
        'Built 3 digital solutions and 2 automations to cut repetitive marketing work, including an Instagram scraping tool and a Google Chat reminder bot.',
        'Created a centralized Marketing Resource Hub connecting 6+ resources across Google Drive, Monday.com, Givebutter, Google Meet, Zoom, and Canva.',
        'Integrated Zapier, Google Chat, Monday.com, and Instagram to streamline team workflows and resource access.',
      ],
      stack: ['Python', 'Zapier', 'Webhooks', 'Monday.com', 'Google Chat'],
    },
  ],
  impact: [
    { value: '100+', label: 'Volunteers mobilized' },
    { value: '$5,000+', label: 'Raised' },
    { value: '~800', label: 'Care packages for Atlanta’s unhoused community' },
    { value: '100K+', label: 'Social views in 1.5 months' },
  ],
  // Photos from the SLS LinkedIn post go in public/images/sls/.
  images: [],
}

const leadership = [
  {
    title: 'Career Preparation Fellow',
    organization: 'Management Leadership for Tomorrow',
    location: 'Atlanta, GA',
    date: 'Nov 2025 - Present',
    logo: mltLogo,
    points: [
      'Selected for a competitive 20-month career development program in which 95% of Fellows secure summer internships.',
      'Complete business case studies and coaching to grow leadership and technical skills.',
      'Attend conferences hosted by organizations including Deloitte, LinkedIn, and Target.',
    ],
    images: [],
  },
]

const summerBridge = {
  name: "Roman's Summer Bridge Program",
  role: 'Founder',
  location: 'Tucker, GA',
  date: 'June 2025 - Present',
  logo: romanBridgeLogoDesign,
  summary:
    'I founded a summer enrichment program for students in my community, recruited and led a volunteer tutoring team, then built the web platform volunteers use to log their service hours.',
  impact: [
    { value: '30+', label: 'Students served' },
    { value: '10+', label: 'Volunteers recruited and led' },
    { value: '20+', label: 'Hours of math, reading, and writing curriculum' },
    { value: '500+', label: 'Service hours logged on the platform I built' },
  ],
  points: [
    'Designed 20+ hours of math, reading, and writing curriculum aligned to Georgia Standards of Excellence, improving student assessment scores by 15%.',
    'Managed operations, scheduling, and mentorship through one-on-one and group instruction.',
  ],
  website: 'https://roman-s-summer-bridge-program-official.onrender.com/',
  photos: [
    { src: '/images/Bridge 1.png', caption: 'Explaining how our Friday sessions work', position: '30% 45%' },
    { src: '/images/Bridge 3.png', caption: 'Reading comprehension practice with students', position: '35% 50%' },
    { src: '/images/Bridge 2.png', caption: 'Volunteer tutor roles orientation', position: '35% 50%' },
    { src: '/images/bridge 4.png', caption: 'Leading a session', position: '25% 18%' },
  ],
}

// `position` keeps the subject in frame when the tile crops the photo.
const travelPhotos = [
  { src: '/images/IMG_5843.jpg', alt: 'Selfie on a boat with a beach resort behind', position: '35% 100%', shape: 'tall' },
  { src: '/images/IMG_6052.jpg', alt: 'Kayaking on open water', position: '28% 42%', shape: 'wide' },
]

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Storage can be unavailable (private mode); fall back to the system preference.
  }
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function Section({ id, eyebrow, title, intro, children, animate = true }) {
  const SectionTag = animate ? motion.section : 'section'
  const motionProps = animate
    ? {
        variants: reveal,
        initial: 'hidden',
        whileInView: 'shown',
        viewport: { once: true, amount: 0.12 },
      }
    : {}

  return (
    <SectionTag id={id} className="section" {...motionProps}>
      <div className="section-head">
        <p className="eyebrow">{eyebrow}</p>
        {title ? <h2>{title}</h2> : null}
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {children}
    </SectionTag>
  )
}

function Tags({ items }) {
  if (!items.length) return null
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Thumbs({ images, onOpen, className = '' }) {
  return (
    <div className={`thumbs ${className}`.trim()}>
      {images.map((src, index) => (
        <button key={src} type="button" className="thumb" onClick={() => onOpen(images, index)} aria-label={`Open image ${index + 1} of ${images.length}`}>
          <img src={src} alt="" loading="lazy" />
        </button>
      ))}
    </div>
  )
}

function CoverCarousel({ title, images, coverPosition, onOpen }) {
  const [index, setIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const count = images.length
  const hasMany = count > 1

  function step(delta, event) {
    event?.stopPropagation()
    setIndex((current) => (current + delta + count) % count)
  }

  function onTouchEnd(event) {
    if (touchStartX === null) return
    const deltaX = event.changedTouches[0].clientX - touchStartX
    if (Math.abs(deltaX) > 40) step(deltaX < 0 ? 1 : -1)
    setTouchStartX(null)
  }

  return (
    <div
      className="project-cover"
      onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      <button type="button" className="cover-open" onClick={() => onOpen(images, index)} aria-label={`Open ${title} photo ${index + 1} of ${count}`}>
        <img
          key={images[index]}
          src={images[index]}
          alt={`${title} photo ${index + 1}`}
          loading="lazy"
          style={index === 0 && coverPosition ? { objectPosition: coverPosition } : undefined}
        />
      </button>
      {/* Preload the next photo so arrowing feels instant. */}
      {hasMany ? <link rel="prefetch" href={images[(index + 1) % count]} as="image" /> : null}

      {hasMany ? (
        <>
          <button type="button" className="cover-arrow cover-arrow-prev" onClick={(event) => step(-1, event)} aria-label="Previous photo">
            <FiChevronLeft />
          </button>
          <button type="button" className="cover-arrow cover-arrow-next" onClick={(event) => step(1, event)} aria-label="Next photo">
            <FiChevronRight />
          </button>
          <div className="cover-dots" aria-hidden="true">
            {images.map((src, dotIndex) => (
              <span key={src} className={dotIndex === index ? 'is-active' : undefined} />
            ))}
          </div>
        </>
      ) : null}

      <span className="cover-count">
        <FiImage /> {index + 1} / {count}
      </span>
    </div>
  )
}

function ProjectCard({ project, onOpen, featured = false }) {
  return (
    <article className={`project-card ${featured ? 'is-featured' : ''}`.trim()}>
      <CoverCarousel title={project.title} images={project.images} coverPosition={project.coverPosition} onOpen={onOpen} />

      <div className="project-body">
        {project.badge ? (
          <p className="award">
            <FiAward /> {project.badge}
          </p>
        ) : null}
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span className="meta">{project.date}</span>
        </div>
        <p className="meta">{project.context}</p>
        <p className="project-desc">{project.description}</p>
        {featured ? (
          <ul className="bullets">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : (
          <details className="more">
            <summary>Details</summary>
            <ul className="bullets">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </details>
        )}
        <Tags items={project.stack} />
        <div className="link-row">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <FiArrowUpRight />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

function App() {
  const [isCompactScreen, setIsCompactScreen] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(max-width: 700px)').matches
  })
  const [theme, setTheme] = useState(getInitialTheme)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
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

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Ignore storage failures; the theme still applies for this visit.
    }
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].id)
        return
      }

      // The active section is the last one whose top has passed 40% of the viewport.
      const marker = window.innerHeight * 0.4
      let current = ''
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id)
        if (section && section.getBoundingClientRect().top <= marker) current = link.id
      })
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const animateSections = !isCompactScreen

  function openLightbox(images, index) {
    setLightboxState({ images, index })
  }

  const closeLightbox = useCallback(() => {
    setLightboxState(null)
  }, [])

  const stepLightbox = useCallback((delta) => {
    setLightboxState((current) => {
      if (!current) return current
      const nextIndex = (current.index + delta + current.images.length) % current.images.length
      return { ...current, index: nextIndex }
    })
  }, [])

  useEffect(() => {
    if (!lightboxState) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') stepLightbox(-1)
      if (event.key === 'ArrowRight') stepLightbox(1)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxState, closeLightbox, stepLightbox])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
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

  const [featuredProject, ...otherProjects] = projects

  return (
    <div className="site">
      <div className="backdrop" aria-hidden="true" />

      <header className={`topbar ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`.trim()}>
        <div className="topbar-inner">
          <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">DY</span>
            <span className="brand-name">Dawit Yemane</span>
          </a>

          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? 'is-active' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="topbar-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm topbar-resume">
              Resume
            </a>
            <button
              type="button"
              className="icon-btn menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      <div className="container" id="top">
        <section className="hero">
          <div className="hero-text">
            <motion.p className="status-pill" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <span className="status-dot" /> CS @ Georgia Tech · Open to internships
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.7 }}>
              Hi, I&apos;m Dawit.
              <span className="h1-sub">I build software that helps people.</span>
            </motion.h1>

            <motion.p className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.7 }}>
              Computer Science student at Georgia Tech focused on full-stack systems, AI-powered experiences, and community-first product building.
            </motion.p>

            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <a href="#projects" className="btn btn-primary">
                See my work <FiArrowRight />
              </a>
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Resume <FiArrowUpRight />
              </a>
            </motion.div>

            <motion.div className="hero-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
                <FiGithub />
              </a>
              <button type="button" className="email-chip" onClick={copyEmail}>
                <FiMail /> {EMAIL} {emailCopied ? <FiCheck className="chip-icon is-ok" /> : <FiCopy className="chip-icon" />}
              </button>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="portrait">
              <img src="/images/ProfilePhoto1.png" alt="Dawit Yemane" />
            </div>
            <div className="float-card float-card-a">
              <FiAward />
              <div>
                <strong>1st Place</strong>
                <span>Hacklanta 2026</span>
              </div>
            </div>
            <a href="#impact" className="float-card float-card-b">
              <FiUsers />
              <div>
                <strong>Founder</strong>
                <span>Roman&apos;s Summer Bridge</span>
              </div>
            </a>
          </motion.div>
        </section>

        <ul className="stats">
          {highlights.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <main>
          <Section id="impact" eyebrow="Community impact" title="Roman's Summer Bridge Program" animate={animateSections}>
            <div className="bridge-feature">
              <div className="bridge-photos">
                {summerBridge.photos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    className="bridge-photo"
                    onClick={() => openLightbox(summerBridge.photos.map((item) => item.src), index)}
                    aria-label={`Open photo: ${photo.caption}`}
                  >
                    <img src={photo.src} alt={photo.caption} loading="lazy" style={{ objectPosition: photo.position }} />
                    <span className="bridge-caption">{photo.caption}</span>
                  </button>
                ))}
              </div>

              <div className="bridge-info">
                <div className="bridge-head">
                  <img className="org-logo" src={summerBridge.logo} alt={`${summerBridge.name} logo`} loading="lazy" />
                  <div className="role-title">
                    <h3>{summerBridge.role}</h3>
                    <p className="meta">
                      {summerBridge.location} · {summerBridge.date}
                    </p>
                  </div>
                </div>
                <p className="bridge-summary">{summerBridge.summary}</p>
                <ul className="bridge-impact">
                  {summerBridge.impact.map((item) => (
                    <li key={item.label}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
                <ul className="bullets">
                  {summerBridge.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="hero-actions bridge-actions">
                  <a href={summerBridge.website} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    Visit the platform <FiArrowUpRight />
                  </a>
                  <a href="#projects" className="btn btn-ghost btn-sm">
                    How I built it <FiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </Section>

          <Section id="about" eyebrow="01 · About" title="Builder, student, community organizer." animate={animateSections}>
            <div className="bento">
              <article className="card bento-about">
                <p className="lead">I build practical software that solves real-world problems and supports people at scale.</p>
                <p className="muted">
                  Recent work includes AI-powered recommendation systems, multiplayer application logic, and education-focused platforms for local communities.
                </p>
              </article>

              <article className="card bento-edu">
                <p className="card-label">Education</p>
                <h3>{education.school}</h3>
                <p className="meta">
                  {education.degree} · {education.graduation}
                </p>
                <p className="card-label card-label-sub">Awards & honors</p>
                <ul className="bullets compact">
                  {education.honors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="card-label card-label-sub">Relevant coursework</p>
                <ul className="bullets compact">
                  {education.coursework.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="card bento-skills">
                <p className="card-label">Technical stack</p>
                <div className="skill-groups">
                  {technicalSkills.map((skill) => (
                    <div key={skill.category} className="skill-group">
                      <h4>{skill.category}</h4>
                      <Tags items={skill.items} />
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </Section>

          <Section id="experience" eyebrow="02 · Experience" title="Where I've worked" animate={animateSections}>
            <ol className="timeline">
              {experiences.map((item) => (
                <li key={item.title} className="timeline-item">
                  <span className="timeline-dot" aria-hidden="true" />
                  <article className="card">
                    <div className="role-head">
                      <img className="org-logo" src={item.logo} alt={`${item.organization} logo`} loading="lazy" />
                      <div className="role-title">
                        <h3>{item.title}</h3>
                        <p className="meta">{item.organization}</p>
                      </div>
                      <span className="date-pill">{item.date}</span>
                    </div>
                    <ul className="bullets">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="projects" eyebrow="03 · Projects" title="Selected work" intro="Hackathon wins, shipped products, and things built for my community." animate={animateSections}>
            <ProjectCard project={featuredProject} onOpen={openLightbox} featured />
            <div className="project-grid">
              {otherProjects.map((project) => (
                <ProjectCard key={project.title} project={project} onOpen={openLightbox} />
              ))}
            </div>
          </Section>

          <Section id="leadership" eyebrow="04 · Leadership" title="Leadership & growth" animate={animateSections}>
            <article className="card sls-card">
              <div className="sls-head">
                <span className="org-logo org-monogram" aria-hidden="true">SLS</span>
                <div className="role-title">
                  <p className="award">
                    <FiAward /> {servantLeaderScholars.badge}
                  </p>
                  <h3>{servantLeaderScholars.organization}</h3>
                  <p className="meta">{servantLeaderScholars.summary}</p>
                </div>
                <span className="date-pill">{servantLeaderScholars.date}</span>
              </div>

              <ul className="sls-impact">
                {servantLeaderScholars.impact.map((item) => (
                  <li key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="sls-roles">
                {servantLeaderScholars.roles.map((role) => (
                  <div key={role.title} className="sls-role">
                    <div className="sls-role-head">
                      <h4>{role.title}</h4>
                      <span className="meta">{role.date}</span>
                    </div>
                    <ul className="bullets">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    {role.stack ? <Tags items={role.stack} /> : null}
                  </div>
                ))}
              </div>

              {servantLeaderScholars.images.length > 0 && <Thumbs images={servantLeaderScholars.images} onOpen={openLightbox} className="sls-thumbs" />}
            </article>

            <div className="leader-grid">
              {leadership.map((item) => (
                <article key={item.title} className="card leader-card">
                  <div className="role-head">
                    <img className="org-logo" src={item.logo} alt={`${item.organization} logo`} loading="lazy" />
                    <div className="role-title">
                      <h3>{item.title}</h3>
                      <p className="meta">
                        {item.organization} · {item.location}
                      </p>
                    </div>
                  </div>
                  <span className="date-pill date-pill-inline">{item.date}</span>
                  <ul className="bullets">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {item.images.length > 0 && <Thumbs images={item.images} onOpen={openLightbox} />}
                </article>
              ))}
            </div>
          </Section>

          <Section id="beyond" eyebrow="05 · Beyond tech" title="Travel" intro="I love exploring different countries and places!" animate={animateSections}>
            <div className="travel">
              {travelPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  className={`travel-photo is-${photo.shape}`}
                  onClick={() => openLightbox(travelPhotos.map((item) => item.src), index)}
                  aria-label={`Open photo: ${photo.alt}`}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" style={{ objectPosition: photo.position }} />
                </button>
              ))}
            </div>
          </Section>

          <Section id="contact" eyebrow="06 · Contact" animate={animateSections}>
            <div className="contact-card">
              <div className="contact-copy">
                <h2>Let&apos;s build something.</h2>
                <p className="muted">Send a message if you want to connect about internships, projects, or collaboration. I typically respond through email.</p>
                <div className="contact-direct">
                  <a href={`mailto:${EMAIL}`} className="contact-line">
                    <FiMail /> {EMAIL}
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="contact-line">
                    <FiLinkedin /> linkedin.com/in/dawityemane
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="contact-line">
                    <FiGithub /> github.com/dawyem
                  </a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <input type="hidden" name="_subject" value="New portfolio contact message" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="field-row">
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
                </div>

                <label>
                  Message
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={(event) => setContactForm((current) => ({ ...current, message: event.target.value }))}
                    placeholder="Write your message here"
                    rows="5"
                    required
                  />
                </label>

                {contactStatus.message && (
                  <p className={`contact-status ${contactStatus.type}`} aria-live="polite">
                    {contactStatus.message}
                  </p>
                )}

                <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send message'} <FiArrowRight />
                </button>
              </form>
            </div>
          </Section>
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Dawit Yemane</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>

      {lightboxState && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image preview">
          <button type="button" className="lightbox-close icon-btn" onClick={closeLightbox} aria-label="Close preview">
            <FiX />
          </button>
          {lightboxState.images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev icon-btn"
              onClick={(event) => {
                event.stopPropagation()
                stepLightbox(-1)
              }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>
          )}
          <img src={lightboxState.images[lightboxState.index]} alt="Expanded portfolio visual" onClick={(event) => event.stopPropagation()} />
          {lightboxState.images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next icon-btn"
              onClick={(event) => {
                event.stopPropagation()
                stepLightbox(1)
              }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          )}
          <p className="lightbox-count">
            {lightboxState.index + 1} / {lightboxState.images.length}
          </p>
        </div>
      )}
    </div>
  )
}

export default App
