import React from 'react';
import BookshelfList from './BookshelfList';

function BookshelfContent({ books, onDelete, onMoveBook }) {
    return (
        <div className="wrapper">
            <div className="container">
                <h2 className="container-header">List Buku Yang Belum ARCHIEF</h2>
                <BookshelfList books={books} archived={false} onDelete={onDelete} onMoveBook={onMoveBook} />
            </div>
            <div className="container">
                <h2 className="container-header">List Buku Yang Sudah ARCHIEF</h2>
                <BookshelfList books={books} archived={true} onDelete={onDelete} onMoveBook={onMoveBook} />
            </div>
            {/* <div className="container">
                <h2 className="container-header">List Buku Yang Sudah Dibaca</h2>
                <BookshelfList books={books} archived={'finish'} onDelete={onDelete} onMoveBook={onMoveBook} />
            </div> */}
        </div>
    );
}

export default BookshelfContent;