/* eslint-disable eqeqeq */
require('dotenv').config()
const fetch = require('node-fetch')
const Prismic = require('@prismicio/client')
const PrismicH = require('@prismicio/helpers')
const logger = require('morgan')
const express = require('express')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const find = require('lodash/find')
const app = express()
const path = require('path')
const port = 3000

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())

app.use(express.static(path.join(__dirname, 'public')))

const initApi = (req) => {
  return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch
  })
}

const handleLinkResolver = (doc) => {
  console.log(doc)
  if (doc.type === 'products') {
    return `/detail/${doc.slug}`
  }

  if (doc.type === 'collections') {
    return '/collections'
  }

  if (doc.type === 'aboutpage') {
    return '/about'
  }
  return '/'
}

app.use((req, res, next) => {
  res.locals.Link = handleLinkResolver

  res.locals.PrismicH = PrismicH
  res.locals.Numbers = (index) => {
    return index == 0
      ? 'One'
      : index == 1
        ? 'Two'
        : index == 2
          ? 'Three'
          : index == 3
            ? 'Four'
            : ''
  }

  next()
})

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  const api = await initApi(req)
  const home = await api.getSingle('home')
  const meta = await api.getSingle('metadata')
  const preloader = await api.getSingle('preloader')
  const collections = await api.getAllByType('collections', {
    fetchLinks: 'products.image'
  })
  const navigation = await api.getSingle('navigation')

  console.log(preloader.data.title)
  res.render('pages/home', { home, meta, preloader, collections, navigation })
})

app.get('/about', async (req, res) => {
  const api = await initApi(req)
  const about = await api.getSingle('aboutpage')
  const meta = await api.getSingle('metadata')
  const preloader = await api.getSingle('preloader')
  // console.log(about)
  // about.data.body.forEach((item) => {
  //   console.log(item.primary.description.text)
  //   // if (item.slice_type === 'content') {
  //   //   console.log(item)
  //   // }
  // })

  res.render('pages/about', { about, meta, preloader })
})

app.get('/collections', async (req, res) => {
  const api = await initApi(req)
  const meta = await api.getSingle('metadata')
  const home = await api.getSingle('home')
  const preloader = await api.getSingle('preloader')
  const collections = await api.getAllByType('collections', {
    fetchLinks: 'products.image'
  })
  // console.log(collections[0].data.products);
  res.render('pages/collections', { collections, meta, home, preloader })
})

app.get('/detail/:uid', async (req, res) => {
  const api = await initApi(req)
  const meta = await api.getSingle('metadata')
  const preloader = await api.getSingle('preloader')
  const product = await api.getByUID('products', req.params.uid, {
    fetchLinks: 'collections.title'
  })

  res.render('pages/detail', { meta, product, preloader })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
