import './style.css'

window.history.scrollRestoration = 'manual'

if (window.location.hash) {
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
}

requestAnimationFrame(() => window.scrollTo(0, 0))

const projects = [
  {
    name: 'Brand Direction', type: 'Concept / Strategy', year: '2026', category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85', alt: 'Minimal stationery and packaging mockups',
  },
  {
    name: 'Product Story', type: 'Web / Experience', year: '2026', category: 'Web design',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85', alt: 'Notebook, glasses and desk workspace',
  },
  {
    name: 'Growth Campaign', type: 'Positioning / Launch', year: '2026', category: 'Campaigns',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85', alt: 'Warm creative studio interior',
  },
]

const projectMarkup = (project, index) => `
  <article class="project-card reveal" data-category="${project.category}" style="--delay: ${index * 100}ms">
    <a href="#contact" class="project-image" aria-label="Discuss ${project.name}">
      <img src="${project.image}" alt="${project.alt}" loading="lazy" />
      <span class="project-arrow" aria-hidden="true">↗</span>
    </a>
    <div class="project-meta"><div><h3>${project.name}</h3><p>${project.type}</p></div><span>${project.year}</span></div>
  </article>`

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Kelvin Njau home">KN<span>.</span></a>
    <nav class="nav-links" aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Approach</a><a href="#contact">Contact</a></nav>
    <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <a class="header-cta" href="mailto:qevohnjau@gmail.com">Let's talk <span>↗</span></a>
  </header>
  <main id="top">
    <section class="hero section-wrap">
      <div class="hero-kicker"><span class="status-dot"></span> Techpreneur • Product builder • Kenya</div>
      <h1>Building digital ideas<br /><em>that move people.</em></h1>
      <div class="hero-bottom"><p class="hero-intro">I help founders, startups, and ambitious teams turn bold ideas into products, brands, and digital experiences with real traction.</p></div>
      <div class="hero-note">Available for product, brand, and digital growth work <span>↗</span></div>
      <div class="hero-bio"><p>I'm a Kenyan techpreneur focused on building useful digital systems, meaningful brands, and ventures that turn strategy into traction. I work best where product thinking, design clarity, and execution meet.</p></div>
      <a class="hero-next round-link" href="#about" aria-label="Scroll to About section"><span>↓</span></a>
    </section>
    <section id="about" class="approach section-wrap">
      <div class="section-heading"><p class="eyebrow">00 / About</p><p class="section-aside">Building ideas with clarity<br />and a long-term view.</p></div>
      <div class="approach-grid"><div class="approach-statement"><p>From early concept to polished digital execution, I help ideas become products people trust and remember.</p><span class="big-mark">✦</span></div><div class="service-list">
        <div class="service-item"><span>01</span><div><h3>Founder-first thinking</h3><p>I bring strategic clarity to new ideas, helping teams focus on what matters before they scale.</p></div></div>
        <div class="service-item"><span>02</span><div><h3>Digital execution</h3><p>From strategy to web experiences, I design systems that feel intentional, usable, and memorable.</p></div></div>
        <div class="service-item"><span>03</span><div><h3>Long-term value</h3><p>I care about work that lasts — simple, thoughtful, and useful long after launch.</p></div></div>
      </div></div><a class="section-next round-link" href="#work" aria-label="Scroll to selected focus"><span>↓</span></a>
    </section>
    <section id="work" class="work section-wrap">
      <div class="section-heading"><p class="eyebrow">01 / Selected focus</p><p class="section-aside">A few directions shaping<br />my work right now.</p></div>
      <div class="filter-row" role="group" aria-label="Filter selected focus"><button class="filter-button is-active" data-filter="All">All focus</button><button class="filter-button" data-filter="Branding">Branding</button><button class="filter-button" data-filter="Web design">Web design</button><button class="filter-button" data-filter="Campaigns">Campaigns</button></div>
      <div class="project-grid">${projects.map(projectMarkup).join('')}</div>
      <div class="work-footer"><span>More work available on request</span><a href="mailto:qevohnjau@gmail.com">Discuss a project <span>↗</span></a></div><a class="section-next round-link" href="#services" aria-label="Scroll to How I Work section"><span>↓</span></a>
    </section>
    <section id="services" class="approach section-wrap">
      <div class="section-heading"><p class="eyebrow">02 / How I work</p><p class="section-aside">Strategy first.<br />Execution with intent.</p></div>
      <div class="approach-grid"><div class="approach-statement"><p>I partner with founders and teams to sharpen the story, shape the product, and build digital experiences that create real momentum.</p><span class="big-mark">✳</span></div><div class="service-list">
        <div class="service-item"><span>01</span><div><h3>Define the direction</h3><p>Positioning, messaging, and brand strategy that help the right audience connect quickly and confidently.</p></div></div>
        <div class="service-item"><span>02</span><div><h3>Build the product</h3><p>Web experiences, digital systems, and user journeys designed to feel clear, useful, and memorable.</p></div></div>
        <div class="service-item"><span>03</span><div><h3>Grow with intention</h3><p>Thoughtful execution that keeps momentum strong from kickoff through launch and beyond.</p></div></div>
      </div></div><a class="section-next round-link" href="#contact" aria-label="Scroll to contact section"><span>↓</span></a>
    </section>
    <section id="contact" class="contact section-wrap"><p class="eyebrow">03 / Start a conversation</p><div class="contact-content"><h2>Have a good<br /><em>idea in motion?</em></h2><a class="contact-link" href="mailto:qevohnjau@gmail.com">qevohnjau@gmail.com <span>↗</span></a><a class="contact-link" href="tel:+254727843135">+254 727 843 135 <span>↗</span></a></div><div class="contact-bottom"><p>For partnerships, product thinking, and digital growth conversations across Kenya and beyond.</p><div class="social-links"><a href="https://www.linkedin.com/in/kelvin-njau" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/v0qeh" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
  </main>
  <footer class="site-footer"><span>© 2026 Kelvin Njau</span><span>Techpreneur • Kenya</span><a href="#top">Back to top ↑</a></footer>
`

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('is-active'))
    button.classList.add('is-active')
    const filter = button.dataset.filter
    document.querySelectorAll('.project-card').forEach((card) => { card.hidden = filter !== 'All' && card.dataset.category !== filter })
  })
})

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})

const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open')
    menuToggle.classList.toggle('is-open', isOpen)
    menuToggle.setAttribute('aria-expanded', String(isOpen))
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu')
  })

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open')
      menuToggle.classList.remove('is-open')
      menuToggle.setAttribute('aria-expanded', 'false')
      menuToggle.setAttribute('aria-label', 'Open navigation menu')
    })
  })
}
