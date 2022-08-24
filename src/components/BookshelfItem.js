import React from 'react';
import BookshelfItemBody from './BookshelfItemBody';
import { DeleteButton, UnreadButton, FinishButton } from './BookshelfItemButton';

function BookshelfItem({ book, onDelete, onMoveBook }) {
    if (book.archived === true) {
        return (
            <div className="item shadow">
                <BookshelfItemBody title={book.title} body={book.body} createdAt={book.createdAt} />
                <UnreadButton id={book.id} onMoveBook={onMoveBook} />
                <DeleteButton id={book.id} onDelete={onDelete} />
            </div>
        );
    }
    return (
        <div className="item shadow">
            <BookshelfItemBody title={book.title} body={book.body} createdAt={book.createdAt} />
            <FinishButton id={book.id} onMoveBook={onMoveBook} />
            <DeleteButton id={book.id} onDelete={onDelete} />
        </div>
    );
    // if (book.archived === 'unread') {
    //     return (
    //         <div className="item shadow">
    //             <BookshelfItemBody title={book.title} body={book.body} />
    //             <ReadButton id={book.id} onMoveBook={onMoveBook} />
    //             <FinishButton id={book.id} onMoveBook={onMoveBook} />
    //             <DeleteButton id={book.id} onDelete={onDelete} />
    //         </div>
    //     );
    // } else if (book.archived === 'read') {
    //     return (
    //         <div className="item shadow">
    //             <BookshelfItemBody title={book.title} body={book.body} />
    //             <UnreadButton id={book.id} onMoveBook={onMoveBook} />
    //             <FinishButton id={book.id} onMoveBook={onMoveBook} />
    //             <DeleteButton id={book.id} onDelete={onDelete} />
    //         </div>
    //     );
    // } else if (book.archived === 'finish') {
    //     return (
    //         <div className="item shadow">
    //             <BookshelfItemBody title={book.title} body={book.body} />
    //             <ReadButton id={book.id} onMoveBook={onMoveBook} />
    //             <UnreadButton id={book.id} onMoveBook={onMoveBook} />
    //             <DeleteButton id={book.id} onDelete={onDelete} />
    //         </div>
    //     );
    // }
}

export default BookshelfItem;