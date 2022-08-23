import React from 'react';
import BookshelfList from './BookshelfList';

function BookshelfContent({ books, onDelete, onMoveBook }) {
    return (
        <div className="wrapper">
            <div className="container">
                <h2 className="container-header">List Buku Yang Belum Dibaca</h2>
                <BookshelfList books={books} whatDoing={'unread'} onDelete={onDelete} onMoveBook={onMoveBook} />
            </div>
            <div className="container">
                <h2 className="container-header">List Buku Yang Sedang Dibaca</h2>
                <BookshelfList books={books} whatDoing={'read'} onDelete={onDelete} onMoveBook={onMoveBook} />
            </div>
            <div className="container">
                <h2 className="container-header">List Buku Yang Sudah Dibaca</h2>
                <BookshelfList books={books} whatDoing={'finish'} onDelete={onDelete} onMoveBook={onMoveBook} />
            </div>
        </div>
    );
}

export default BookshelfContent;