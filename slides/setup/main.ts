import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Handle 404 redirects with slide number preservation
  if (typeof window !== 'undefined') {
    // Check for slide query parameter from 404 redirect
    const urlParams = new URLSearchParams(window.location.search)
    const targetSlide = urlParams.get('slide')
    
    if (targetSlide && router) {
      // Navigate to the target slide after router is ready
      router.isReady().then(() => {
        const slideNumber = parseInt(targetSlide, 10)
        if (!isNaN(slideNumber) && slideNumber > 0) {
          // Navigate to the slide
          router.push(`/${slideNumber}`)
          
          // Clean up the URL by removing the query parameter
          const cleanUrl = window.location.pathname + window.location.hash
          window.history.replaceState({}, '', cleanUrl)
        }
      })
    }
  }

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
