
const express = require("express")
const request = require('request');
const app = express()
const port = 3000
const fetch = require('node-fetch')

require('dotenv').config({path: '.env'})


const {
  API_KEY
} = process.env

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
app.use(express.static('static'));

// Create a home route
app.get('/', (req, res) => {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&imgonly=true`)
    .then(async response => {
      const artWorks = await response.json()
      res.render('index', {
        title: 'Art Museum',
        data: artWorks.artObjects,
      });
    })
    .catch(err => res.send(err))
  })


// detail page
app.get('/kunst/:id', function (req, res) {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection/${req.params.id}?key=${API_KEY}`)
      .then(async response => {
          console.log(response);
          const artWorks = await response.json()
          res.render('detail', {
              pageTitle: 'Art Museum' + req.params.id,
              kunst: artWorks.artObject
          });
      })
      .catch(err => res.send(err))
})



// Search action
app.get('/search', (req, res) => {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&q=${req.query.query}&imgonly=true`)
    .then(async response => {
      const artWorks = await response.json()
      res.render('index', {
        title: 'Art Museum',
        data: artWorks.artObjects,
      });
    })
    .catch(err => res.send(err))
})

// offline action
app.get('/offline', (req, res) => {
  res.render('offline', {
    title: 'Art Museum',
    
  });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

