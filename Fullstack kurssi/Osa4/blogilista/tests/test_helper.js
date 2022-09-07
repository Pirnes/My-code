const Blog = require('../models/blog')

const initialBlogs = [
  {
    "author": "Karoliina Pentikäinen",
    "id": "62df92be8e701aa542a23e9f",
    "likes": 4,
    "title": "Kolmistaan",
    "url": "https://anna.fi/kolmistaan/"
  },
  {
    "author": "Hanne Valtari", "id": 
    "62df93878e701aa542a23ead", 
    "likes": 5,
    "title": "Lähiömutsi", 
    "url": "https://lahiomutsi.fi/"
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  console.log('blobs lalalalalalala: ', blogs)
  return blogs.map(blog => blog.toJSON())

}

module.exports = {
 initialBlogs, blogsInDb
}