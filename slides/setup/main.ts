import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Add slide number overlay
  if (typeof document !== 'undefined') {
    router.afterEach((to) => {
      setTimeout(() => {
        const existingNumber = document.getElementById('slide-number-overlay')
        if (existingNumber) {
          existingNumber.remove()
        }

        const slideNumber = document.createElement('div')
        slideNumber.id = 'slide-number-overlay'
        slideNumber.style.cssText = `
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          font-size: 0.875rem;
          opacity: 0.5;
          z-index: 9999;
          background: white;
          padding: 0.5rem 0.75rem;
          border-radius: 0.375rem;
          pointer-events: none;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        `

        const currentSlide = to.path.split('/')[1] || '1'
        const totalSlides = router.getRoutes().filter(r => r.path.match(/^\/\d+$/)).length

        slideNumber.textContent = `${currentSlide} / ${totalSlides}`
        document.body.appendChild(slideNumber)
      }, 100)
    })
  }
})
