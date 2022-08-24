import React from 'react';
import { showFormattedDate } from '../utils/index'

function BookshelfItemBody({ title, body, createdAt }) {
    return (
        <div className="inner">
            <h3>{title}</h3>
            <p className='body'>{body}</p>
            <p className='dateCreated'>{showFormattedDate(createdAt)}</p>
        </div>
    );
}

export default BookshelfItemBody;