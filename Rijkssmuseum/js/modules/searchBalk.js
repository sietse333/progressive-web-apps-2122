import { getData } from './data.js'

export const searchBalk = document.querySelector('#searchbalk')
// Searchfunctie
export const search = () => {
  let searchTerm = searchBalk.value;
  let url = "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" + searchTerm
  console.log(url);
  getData(url);
}
searchBalk.addEventListener("keyup", function (e) {
  search();
});

// voor hoeveelheden "&ps=5"