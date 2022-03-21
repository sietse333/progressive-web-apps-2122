import { getData } from './data.js'
import { url} from './vars.js'

export let artAmount = 10

export const showMore = () => {
        artAmount = artAmount + 10
        getData(url);
}
