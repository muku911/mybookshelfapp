import React from 'react';

function BookshelfItemBody({ judul, pengarang }) {
    return (
        <div className="inner">
            <h3>{judul}</h3>
            <p>{pengarang}</p>
        </div>
    );
}

export default BookshelfItemBody;