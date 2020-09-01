import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import Book from './Book';

const BookList = () => {

    const { books } = useContext(BookContext);

    return ( 
        <div className="BookList">
            {books.length ?
                <ul>{books.map((book) => <Book key={book.id} book={book} />)}</ul> :
                <p className="no-books">no books.. hello freetime :)</p>}
        </div>
     );
}
 
export default BookList;