import React, { useState, useEffect } from 'react'
import axios from "axios"

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/get-posts")
      setPosts(res.data.posts)
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLike = async (id) => {
    try {
      await axios.put(`http://localhost:8000/like-post/${id}`)
      setPosts(posts.map(post => 
        post._id === id ? { ...post, likes: (post.likes || 0) + 1 } : post
      ))
    } catch (error) {
      console.error("Error liking post:", error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/delete-post/${id}`)
      setPosts(posts.filter(post => post._id !== id))
    } catch (error) {
      console.error("Error deleting post:", error)
    }
  }

  return (
    <section className="feed-section">
      {isLoading ? (
        <div className="message" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="spinner"></span> Loading posts...
        </div>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <div className="image-container">
              <img 
                src={post.image} 
                alt="post" 
                className="post-image"
              />
            </div>
            <p className="caption">{post.caption}</p>
            <div className="post-actions">
              <button className="like-btn" onClick={() => handleLike(post._id)}>
                👍 Like ({post.likes || 0})
              </button>
              <button className="delete-btn" onClick={() => handleDelete(post._id)}>
                🗑 Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="message">No posts available</h1>
      )}
    </section>
  )
}

export default Feed