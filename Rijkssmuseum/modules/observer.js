import { showandhideArticles } from './showandhide.js'

// Observer that watches if a new painting is in the screen
export function generateObserver(done) {
    //Intersection Observer experiment
    const observer = new IntersectionObserver(showandhideArticles); // er wordt intersection object aangemaakt
    const elements = document.querySelectorAll('.hallo')
    elements.forEach(element => {
      observer.observe(element)
    });
    done();
  }