const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const api = supertest(app)
const Blog = require('../models/blog')



test('Blogs are returned as json', async () => {
  await api
  .get('/api/blogs')
  .expect(201)
  .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('is id id', async () => {
  expect(helper.initialBlogs[0].id).toBeDefined()
})

test('does POST works', async () => {
  const newBlog = {
    "author": "Lasse Pirnes",
    "likes": 0, 
    "title": "testi blogi",
    "url": "https://www.google.fi"
  }

  // await api 
  // .post('/api/blogs')
  // .send(newBlog)
  // .expect(201)

  const response = await Blog.find({})
  console.log(response)
  expect(helper.initialBlogs.length).toHaveLength(2)
})


afterAll(() => {
  mongoose.connection.close()
})