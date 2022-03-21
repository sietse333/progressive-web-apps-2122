import { sectionArea } from './vars.js'
import { generateObserver } from './observer.js'

// The data is being rendered into the html page
export const renderHTML = (data, done) => {
    console.log(data)
    sectionArea.innerHTML = ""
    data.artObjects.forEach(kunst => {
        sectionArea.insertAdjacentHTML(
            'afterbegin',
            `<article class="hallo"><h2>${kunst.title}</h2> 
                <img src="${kunst.webImage.url}">
            </article>
            `)
        })
    generateObserver(() => {
        done();
    })
  }

// <a href="${kunst.id}" </a>