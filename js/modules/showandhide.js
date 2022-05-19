// Function for making the paintings slide in and out
export const showandhideArticles = (entries) => {
    entries.forEach(entry => {
      const targetClass = entry.target.classList;
      if (entry.isIntersecting) {
        targetClass.add('observed')
      } 
    });
  };