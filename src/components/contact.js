export function initContact() {
  setupEmailLink()
  setupContactForm()

  console.log('✓ Contact section initialized')
}

function setupEmailLink() {
  const emailLink = document.querySelector('.contact-email a')

  if (!emailLink) return

  // Email is already set via href in HTML
  // This can be enhanced later with dynamic email if needed
  emailLink.addEventListener('click', () => {
    console.log('Email link clicked')
  })
}

function setupContactForm() {
  const form = document.querySelector('#contact-form')
  const messageDiv = document.querySelector('#form-message')

  if (!form) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    // Get form data
    const name = document.querySelector('#name').value.trim()
    const email = document.querySelector('#email').value.trim()
    const message = document.querySelector('#message').value.trim()

    // Validation
    if (!name || !email || !message) {
      showMessage('Please fill in all fields', 'error', messageDiv)
      return
    }

    // Show loading state
    const submitBtn = form.querySelector('.form-submit')
    const originalText = submitBtn.textContent
    submitBtn.disabled = true
    submitBtn.textContent = 'Sending...'

    try {
      // Submit to Formspree (replace with your Formspree endpoint)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })

      if (response.ok) {
        showMessage('Thanks for reaching out! I\'ll get back to you soon.', 'success', messageDiv)
        form.reset()
      } else {
        showMessage('Something went wrong. Please try again or email directly.', 'error', messageDiv)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      showMessage('Network error. Please try again or email directly.', 'error', messageDiv)
    } finally {
      submitBtn.disabled = false
      submitBtn.textContent = originalText
    }
  })
}

function showMessage(text, type, container) {
  // Clear previous messages
  container.innerHTML = ''

  const msgEl = document.createElement('div')
  msgEl.className = `message ${type}`
  msgEl.textContent = text

  container.appendChild(msgEl)

  // Auto-remove success message after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      msgEl.remove()
    }, 5000)
  }
}
