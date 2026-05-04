import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
  const navigate = useNavigate()
  const [isUploading, setIsUploading] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setIsUploading(true)

    const formData = new FormData(e.target)

    try {
      await axios.post("http://localhost:8000/create-post", formData)
      setIsUploading(false)
      navigate("/feed")
    } catch (error) {
      console.error("Error creating post:", error)
      alert("Failed to create post. Please try again.")
      setIsUploading(false)
    }
  }

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit} >
        <input type="file" name='image' accept='image/*' required />
        <input type="text" name='caption' placeholder='Enter Caption' required />
        <button type='submit' disabled={isUploading}>
          {isUploading ? (
            <>
              <span className="spinner" style={{ borderColor: 'rgba(0,0,0,0.1)', borderLeftColor: '#888' }}></span>
              Uploading...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </form>

    </section>
  )
}

export default CreatePost