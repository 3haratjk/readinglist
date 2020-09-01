import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {

    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {title, author};
        setTitle('');
        setAuthor('');
        dispatch({type: 'ADD_BOOK', book});
    }

    return ( 
        <form className="BookForm" onSubmit={ handleSubmit }>
            <input className="titleInput" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input className="authorInput" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input id="submitButton" type="submit" value="Add Book" />
        </form>
     );
}
 
export default BookForm;