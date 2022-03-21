import { url} from './modules/vars.js'
import { getData } from './modules/data.js'
import { searchBalk, search } from './modules/searchBalk.js'
import './routes/routie.js'

routie({
  '': () => {
    console.log('dit werkt!')
    getData(url)
  }
});


