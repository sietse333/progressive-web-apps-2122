const express = require("express")
const request = require('request');
const app = express()
const port = 3000
const fetch = require('node-fetch')
const compression = require('compression')
const minify = require('express-minify');


let setCache = (req, res, next) => {
  // here you can define period in second, this one is 5 minutes
const period = 60 * 5 

require('dotenv').config({path: '.env'})

// minify aanzetten
app.use(minify());
app.use(express.static(__dirname + '/static'));

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
app.get('/kunst/:id', (req, res) => {
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
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&q=${req.query.searchbalk}&imgonly=true`)
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


// you only want to cache for GET requests
if (req.method == 'GET') {
  res.set('Cache-control', `public, max-age=${period}`)
} else {
  // for the other requests set strict no caching parameters
  res.set('Cache-control', `no-store`)
}

// remember to call next() to pass on the request
next()
}

// now call the new middleware function in your app

app.use(setCache)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})








  