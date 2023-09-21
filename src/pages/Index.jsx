import React from 'react'
import { useLoaderData, Link, Form } from 'react-router-dom';


const Index = () => {
  const bookmarks = useLoaderData()
  
 
  
  return (
  <div>
    <h2>Create a Bookmark</h2>
    <Form action="/create" method="post">
      <input type="text" name="title" placeholder='Enter a title'/>
      <input type="text" name="link" placeholder='Enter a link'/>
      <input type="submit" value="Create a Bookmark"/>
    </Form>
    
  {  bookmarks.map((bookmark) =>{
    return(
    <div key={bookmark._id} className=''>
      <Link to={`/${bookmark.url}`}>
        {bookmark.title}
      </Link>
      
      <Form action={`/delete/${bookmark._id}`} method="post">
      <button type="submit"value="Delete Me">Delete Me</button>
    </Form>
  
    </div>
    )
  })}
  </div>
)}

export default Index;