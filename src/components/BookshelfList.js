import React from 'react';
import BookshelfItem from './BookshelfItem';

function BookshelfList({ books, whatDoing, onDelete, onMoveBook }) {
    let countBook = books.filter(book => book.whatDoing === whatDoing).length;
    if (countBook > 0) {
        return (
            <div className="list-item">
                {books.filter(book => book.whatDoing === whatDoing).map(filteredBook => (
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
                        <p>Pindahkan buku dari rak lain atau masukan buku</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookshelfList;