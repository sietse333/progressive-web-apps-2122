import { getData } from './data.js'
searchText = getElementById('searchError')


if(data.artObjects.length === 0){
    searchText.textContent = "Your search is not in the database. Please try something different";
}
