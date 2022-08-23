import React from 'react';
import BookshelfInput from './BookshelfInput';

function BookshelfModal({ setOpenModal, addBook }) {
    return (
        <div className='modal'>
            <div className="modal-content">
                <div className="modal-header">
                    <button onClick={() => setOpenModal(false)} className="close" title="Close">
                        &times;
                    </button>
                    <h2>Tambah Buku Bacaan</h2>
                </div>
                <div className="modal-body">
                    <BookshelfInput addBook={addBook} />
                </div>
            </div>
        </div>
    );
}

export default BookshelfModal;