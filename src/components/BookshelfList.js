import React from 'react';
import BookshelfItem from './BookshelfItem';

function BookshelfList({ books, archived, onDelete, onMoveBook }) {
    let countBook = books.filter(book => book.archived === archived).length;
    if (countBook > 0) {
        return (
            <div className="list-item">
                {books.filter(book => book.archived === archived).map(filteredBook => (
                    <BookshelfItem key={filteredBook.id} book={filteredBook} onDelete={onDelete} onMoveBook={onMoveBook} />
                ))}
            </div>
        );
    } else {
        return (
            <div className="list-item">
                <div className="item shadow">
                    <div className="inner">
                        <h3>Tidak ada buku</h3>
                        <p className='body'>Pindahkan buku dari rak lain atau masukan buku</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookshelfList;