import React, { useState } from 'react'
import { Form, Link, useLoaderData } from "react-router-dom"

const Index = () => {
    const bookmark = useLoaderData()
    console.log(bookmark);
  
  return (
    <div className="w-full max-w-xs">
      <Form
        action='/create'
        method='post'
        className="bg-red-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >

        <input
            type="text"
            name='title'
            placeholder='Enter a title'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <br />
        <input
            type="text"
            name='url'
            placeholder='Enter a link'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />

        <input type="submit" value='Create a Bookmark' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' />
      </Form>


    
      {bookmark.map(book => (
        <div key={book._id} className='flex-initial'>
          <Link to={`${book.url}`} target='_blank' rel="noopener noreferrer">
            <h1 className='animate-[pulse_2s_ease-in-out_infinite] hover:animate-none w-full p-2 bg-red-300 hover:bg-red-400'>{book.title}</h1>
          </Link>

          <Form action={`/delete/${book._id}`} method='post'>
            <button type="submit" value='Create a Bookmark' className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
              X
            </button>
          </Form>

          <Form action={`/${book._id}/edit`}>
            <button type="submit" value='Create a Bookmark' className='bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
              Update {book.title}
            </button>
          </Form>

          <br/>
          
        </div>
      ))}
  </div>
  )
}

export default Index