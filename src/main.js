// Import components
import { initNav } from './components/nav.js'
import { initHero } from './components/hero.js'
import { initAbout } from './components/about.js'
import { initProjects } from './components/projects.js'
import { initContact } from './components/contact.js'

// Initialize app
function init() {
  console.log('Initializing portfolio app...')

  initNav()
  initHero()
  initAbout()
  initProjects()
  initContact()

  // Back to top button
  const btn = document.getElementById('back-to-top')
  if (btn) {
    window.addEventListener('scroll', () => {
      btn.classList.toggle('is-visible', window.scrollY > 400)
    }, { passive: true })
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

  console.log('✓ App initialized successfully')
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
