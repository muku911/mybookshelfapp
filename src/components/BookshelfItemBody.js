import React from 'react';

function BookshelfItemBody({ title, body, createdAt }) {
    return (
        <div className="inner">
            <h3>{title}</h3>
            <p className='body'>{body}</p>
            <p className='dateCreated'>{createdAt}</p>
        </div>
    );
}

export default BookshelfItemBody;