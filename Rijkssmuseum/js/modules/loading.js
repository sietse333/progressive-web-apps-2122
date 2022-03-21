import { emptyText, sectionArea } from './vars.js'

// Skeleton that is being showed when the page is loading
export function displayLoading() {
    console.log(sectionArea)
    sectionArea.classList.add("skeleton")
}
  
export function hideLoading() {
    sectionArea.classList.remove("skeleton")
}

