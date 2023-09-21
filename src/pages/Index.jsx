import React from 'react';
import { useLoaderData, Link, Form } from 'react-router-dom';

const Index = () => {
    const bookmark = useLoaderData();
   

    // Early exit in case of an error
    if (bookmarks && bookmarks.error) {
       return <p>Error loading bookmarks: {bookmarks.error}</p>;
    }

    return (
        <div>
            <Form action='/Create' method='post'>
                <input type="text" name='title' placeholder='Enter a title' />
                <br />
                <input type="text" name='url' placeholder='Enter a url' />
                <br />
                <input type="submit" value='Create a Bookmark' />
            </Form>

            {bookmark.map(book => (
                <div key={book.id} className=''>
                    <Link to={`/Bookmarks/${book.id}`}>{book.title}</Link>
                </div>
            )
            )}
        </div>
    );
}

export default Index;
