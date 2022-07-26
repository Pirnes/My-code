import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import axios from 'axios'
import blogService from './services/blogs'
import React from 'react'
import './index.css'
import Notification from './components/Notification'
import  Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [blogTitle, setBlogTitle] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [blogUrl, setBlogUrl] = useState('')


  useEffect(() => {
    blogService
      .getAll()
      .then(response => {
        setBlogs(response)
      })
  },[])

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: blogTitle,
      author: blogAuthor,
      url: blogUrl,
      likes: 0
    }

    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setBlogTitle('')
        setBlogAuthor('')
        setBlogUrl('')
      })
      .catch(error => {
        setErrorMessage(error.response.data.error)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  const voteBlog = (id) => {
    const blog = blogs.find(b => b.id === id)
    const updatedBlog = {
      likes: blog.likes +=1
    }
    blogService
      .update(id, updatedBlog)
      .then(res => {
        setBlogs(blogs.map(p => p.id !== blog.id ? p : res))
  })
    .catch(error => {
      setErrorMessage(error.response.data.error) 
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
  }  

  const removeBlog = (id) => {
    const blog = blogs.find(b => b.id === id)
    if (window.confirm('Do you really want to remove this blog from Blogilista?')) {
      blogService
      .remove(blog.id)
      .then(response => response.data)
      window.location.reload(false)
      .catch(error => {
        setErrorMessage(error.response.data.error) 
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }

  const handleBlogTitle = (event) => {
    setBlogTitle(event.target.value)
  }
  
  const handleBlogAuthor = (event) => {
    setBlogAuthor(event.target.value)
  }

  const handleBlogUrl = (event) => {
    setBlogUrl(event.target.value)
  }

  const hook = () => {
    axios
      .get('api/blogs')
  }

  useEffect(hook, [])
  
  return (
    <div>
      <Notification message={errorMessage}/>
        <Box 
          border={1} 
          borderColor={'black'} 
          margin={2} 
          marginLeft={'auto'}
          marginRight={'auto'}
          maxWidth={500} 
          borderRadius={2}
          style={{ 
            backgroundColor: 'lavender'
          }}>
        <form onSubmit={addBlog}>
      <Box
        border={1} 
        borderColor={'black'} 
        margin={2} 
        marginLeft={'auto'}
        marginRight={'auto'}
        maxWidth={300} 
        borderRadius={2}
        style={{ 
          backgroundColor: 'turquoise'
        }}>
      <div className='title'>
        <b>Blog's title</b>: <input
          value={blogTitle}
          onChange={handleBlogTitle}/>
      </div>
        <div className='author'>
          <b>Author:</b> <input
            value={blogAuthor}
            onChange={handleBlogAuthor}/>
        </div>
      <div className='url'>
        <b>Blog's url:</b> <input
          value={blogUrl}
          onChange={handleBlogUrl}/>
      </div>
    <div>
      <Button variant='contained'
        
          style={{
            margin: 10,
          }} type='submit'>Add blog to blogilist</Button>
    </div>
      </Box>
        <h2>BLOGS</h2>
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} voteBlog={()=> voteBlog(blog.id)} removeBlog={()=> removeBlog(blog.id)}/>
            )}
        </form>
      </Box>
    </div>
  )
}

export default App