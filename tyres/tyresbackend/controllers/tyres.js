const tyresRouter = require('express').Router()
const Tyre = require('../models/tyre')

tyresRouter.get('/', (request, response, next) => {
  Blog
    .find({})
    .then(tyres => {
      response.json(tyres)
    })
    .catch(error => next(error))
})

tyresRouter.post('/', (request, response, next) => {
  const body = request.body
  const tyre = new Tyre ({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  })
  tyre
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => next(error))
})

tyresRouter.put('/:id', (request, response, next) => {
  const { tyres } = request.body
  Tyre.findByIdAndUpdate(request.params.id, { tyres }, { new: true, tyres: 'query' } )
    .then(updatedTyres => {
      response.json(updatedTyres)
    })
    .catch(error => next(error))
})

tyresRouter.delete('/:id', (request, response, next) => {
  Tyre.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

module.exports = tyresRouter