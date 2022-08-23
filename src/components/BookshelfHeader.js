import React from 'react';
import bookWriting from "../image/026-writing.svg";

function BookshelfHeader({ setOpenModal }) {
    return (
        <header>
            <h1>My Bookshelf</h1>
            <button className='top-right-button' style={{ backgroundImage: `url(${bookWriting})` }} onClick={() => setOpenModal(true)}></button>
        </header>
    );
}

export default BookshelfHeader;