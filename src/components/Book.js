import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Book = ({ book }) => {
    const { title, author, id } = book;
    const { dispatch } = useContext(BookContext);
    return ( 
        <li className="Book" onClick={() => dispatch({type: 'REMOVE_BOOK', id})}>
            <h2>{title}</h2>
            <p>{author}</p>
        </li>
     );
}
 
export default Book;