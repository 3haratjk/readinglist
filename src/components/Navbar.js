import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {

    const { books } = useContext(BookContext);

    return ( 
        <div className="Navbar">
            <h1>Book Reading List</h1>
            <p>you have {books.length} books to go through...</p>
        </div>
     );
}
 
export default Navbar;