import React, { useState } from 'react'
import { useLoaderData, Form } from 'react-router-dom'

const Update = () => {
    const bookmark = useLoaderData()
    const [formData, setFormData] = useState(bookmark)

    const handleChange = (e) => {
      setFormData(prevState => {
        return { ...prevState, [e.target.name] : e.target.value}
      })
    }

  return (
    <div>
        <Form
            action={`/update/${bookmark._id}`}
            method='post'
            className="bg-red-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
            <input
                type="text"
                onChange={handleChange}
                name='title'
                value={formData.title}
                placeholder='Enter a title'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />
            <input
                type="text"
                onChange={handleChange}
                name='url'
                value={formData.url}
                placeholder='Enter a url'
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <br />
            <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" value={`Update ${bookmark.title}`} />
        </Form>
    </div>
  )
}

export default Update