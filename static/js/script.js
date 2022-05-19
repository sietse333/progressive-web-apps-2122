
const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
       await navigator.serviceWorker.register('/service.js')
      } catch (error) {
        console.error(`Registration failed with ${error}`)
      }
    }
  }
  
  
  registerServiceWorker()