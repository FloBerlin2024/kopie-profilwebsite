const WORDS = ['KI-', 'LERN-', 'COMPUTER-', 'WISSENS-', 'DESIGN-']

export function initHero() {
  const heroSection = document.querySelector('#hero')
  if (!heroSection) return

  // Word cycle animation
  const wordEl = heroSection.querySelector('.hero-word-current')
  if (wordEl) {
    let index = 0

    setInterval(() => {
      index = (index + 1) % WORDS.length
      const nextWord = WORDS[index]

      // Slide current word out
      wordEl.classList.add('slide-out')

      setTimeout(() => {
        // Snap to bottom (invisible), update text
        wordEl.classList.remove('slide-out')
        wordEl.classList.add('slide-in')
        wordEl.textContent = nextWord

        // Force reflow so transition triggers
        void wordEl.offsetWidth

        wordEl.classList.remove('slide-in')
      }, 350)
    }, 2000)
  }

  console.log('✓ Hero section initialized')
}
