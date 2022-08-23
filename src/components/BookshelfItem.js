import React from 'react';
import BookshelfItemBody from './BookshelfItemBody';
import { DeleteButton, ReadButton, UnreadButton, FinishButton } from './BookshelfItemButton';

function BookshelfItem({ book, onDelete, onMoveBook }) {
    if (book.whatDoing === 'unread') {
        return (
            <div className="item shadow">
                <BookshelfItemBody judul={book.judul} pengarang={book.pengarang} />
                <ReadButton id={book.id} onMoveBook={onMoveBook} />
                <FinishButton id={book.id} onMoveBook={onMoveBook} />
                <DeleteButton id={book.id} onDelete={onDelete} />
            </div>
        );
    } else if (book.whatDoing === 'read') {
        return (
            <div className="item shadow">
                <BookshelfItemBody judul={book.judul} pengarang={book.pengarang} />
                <UnreadButton id={book.id} onMoveBook={onMoveBook} />
                <FinishButton id={book.id} onMoveBook={onMoveBook} />
                <DeleteButton id={book.id} onDelete={onDelete} />
            </div>
        );
    } else if (book.whatDoing === 'finish') {
        return (
            <div className="item shadow">
                <BookshelfItemBody judul={book.judul} pengarang={book.pengarang} />
                <ReadButton id={book.id} onMoveBook={onMoveBook} />
                <UnreadButton id={book.id} onMoveBook={onMoveBook} />
                <DeleteButton id={book.id} onDelete={onDelete} />
            </div>
        );
    }
}

export default BookshelfItem;