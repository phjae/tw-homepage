import React from "react";
import './style.css'

const BlogPosts = () => {
  return (
    <div className='posts'>
      <div className='blog-post'>
        <a href='https://facebook.com' >
          <span>facebook</span>
          <span></span>
        </a>
      </div>
      <div className='blog-post'>
        <a href='https://facebook.com' >
          <span>youtube</span>
          <span></span>
        </a>
      </div>
      <div className='blog-post'>
        <a href='https://facebook.com' >
          <span>indeed</span>
          <span></span>
        </a>
      </div>
    </div>
  )
}

export default BlogPosts;