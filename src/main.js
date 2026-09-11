import './style.css'

const projects = [
  {
    name: 'Morrow Studio', type: 'Brand / Digital', year: '2026', category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85', alt: 'Minimal stationery and packaging mockups',
  },
  {
    name: 'Field Notes', type: 'Editorial / Web', year: '2026', category: 'Web design',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85', alt: 'Notebook, glasses and desk workspace',
  },
  {
    name: 'Common Ground', type: 'Strategy / Campaign', year: '2026', category: 'Campaigns',
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
    <a class="header-cta" href="mailto:neynjauke@gmail.com">Let's talk <span>↗</span></a>
  </header>
  <main id="top">
    <section class="hero section-wrap">
      <div class="hero-kicker"><span class="status-dot"></span> Techpreneur <span class="kicker-line"></span> Based in Kenya</div>
      <h1>Digital work<br /><em>with a point of view.</em></h1>
      <div class="hero-bottom"><p class="hero-intro">I help ambitious people and teams turn clear ideas into digital products, brands, and experiences that create lasting impact.</p><a class="round-link" href="#work" aria-label="Scroll to selected work"><span>↓</span></a></div>
      <div class="hero-note">Currently taking on select projects for Q4 <span>↗</span></div>
    </section>
    <section id="work" class="work section-wrap">
      <div class="section-heading"><p class="eyebrow">01 / Selected work</p><p class="section-aside">A few things I've made useful<br />and made to last.</p></div>
      <div class="filter-row" role="group" aria-label="Filter selected work"><button class="filter-button is-active" data-filter="All">All work</button><button class="filter-button" data-filter="Branding">Branding</button><button class="filter-button" data-filter="Web design">Web design</button><button class="filter-button" data-filter="Campaigns">Campaigns</button></div>
      <div class="project-grid">${projects.map(projectMarkup).join('')}</div>
      <div class="work-footer"><span>More work available on request</span><a href="mailto:hello@maraellis.studio">View archive <span>↗</span></a></div>
    </section>
    <section id="services" class="approach section-wrap">
      <div class="section-heading"><p class="eyebrow">02 / How I work</p><p class="section-aside">Good work is a conversation<br />before it's a deliverable.</p></div>
      <div class="approach-grid"><div class="approach-statement"><p>Small teams, senior thinking, and a process that keeps the good ideas in the room.</p><span class="big-mark">✳</span></div><div class="service-list">
        <div class="service-item"><span>01</span><div><h3>Make it clear</h3><p>Positioning, naming, and visual systems that make the right people pay attention.</p></div></div>
        <div class="service-item"><span>02</span><div><h3>Make it felt</h3><p>Websites and digital experiences that are easy to use and hard to forget.</p></div></div>
        <div class="service-item"><span>03</span><div><h3>Make it real</h3><p>Thoughtful design support from first sketch through launch day and beyond.</p></div></div>
      </div></div>
    </section>
    <section id="contact" class="contact section-wrap"><p class="eyebrow">03 / Start a conversation</p><div class="contact-content"><h2>Have a good<br /><em>one in mind?</em></h2><a class="contact-link" href="mailto:neynjauke@gmail.com">neynjauke@gmail.com <span>↗</span></a><a class="contact-link" href="tel:+254727843135">+254 727 843 135 <span>↗</span></a></div><div class="contact-bottom"><p>For collaborations, product ideas, and business conversations across Kenya and beyond.</p><div class="social-links"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.are.na" target="_blank" rel="noreferrer">Are.na ↗</a></div></div></section>
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
