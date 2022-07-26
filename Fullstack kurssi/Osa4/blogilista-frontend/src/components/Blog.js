import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import '../index.css'
const Blog = ({ blog, voteBlog, removeBlog }) => {

  return (
    <Box 
      border={1} 
      borderColor={ 'black' } 
      margin={2} 
      marginLeft={'auto'}
      marginRight={'auto'}
      maxWidth={450} 
      borderRadius={2} 
      style={{ 
        backgroundColor: 'turquoise',
        }}
      >
    <li className='blogtitle'>
      <b>Title:</b> {blog.title}
    </li>
    <li className='blogauthor'>
      <b>Author:</b> {blog.author}
    </li>
    <li className='blogurl'>
      <b>url:</b> <a href={blog.url} target={'_blank'} rel="noreferrer">{blog.url}</a>
    </li>
    <li className='bloglikes' style={{ alignItems: 'center', display: 'initial', flexWrap: 'nowrap' }}>
      Likes: {blog.likes}
    </li>
    <Button onClick={voteBlog}
        variant='contained'
          style={{
          margin: 10,
          alignSelf: 'flex-end'
          }}
        >
          Like
      </Button>
      <Button onClick={removeBlog}
        variant='contained'
          style={{
          margin: 10,
          alignSelf: 'flex-end'
          }}
          disabled={false}
        >
          Remove
      </Button>
    </Box>
  )
}
    
export default Blog