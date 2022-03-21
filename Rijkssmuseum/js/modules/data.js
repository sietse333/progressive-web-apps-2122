import { emptyText, url, moreButton } from './vars.js'
import { displayLoading, hideLoading } from './loading.js'
import { renderHTML } from './render.js'
import { showMore } from './showmore.js'


export const getData = (url) =>{
    displayLoading()
    console.log(moreButton)
    const data = fetch(url)
      .then(response => response.json())
      .then(data => {
        hideLoading()
        emptyText.textContent = "";
        renderHTML(data, () => {
            console.log('done!')
        })
        moreButton.addEventListener('click', () => {
            showMore()
        })
      })
      .catch(err => emptyText.textContent = "Failed to load paintings please refresh the page" )
  }

  console.log(getData)