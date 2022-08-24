import React from 'react';
import { getData } from '../utils/data';
import BookshelfHeader from './BookshelfHeader';
import BookshelfContent from './BookshelfContent';
import BookshelfFooter from './BookshelfFooter';
import BookshelfModal from './BookshelfModal';

class BookshelfApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: getData(),
            openModal: false,
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.setOpenModal = this.setOpenModal.bind(this);
        this.onAddBookHandler = this.onAddBookHandler.bind(this);
        this.onMoveBookHandler = this.onMoveBookHandler.bind(this);
    }

    onAddBookHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                books: [
                    ...prevState.books,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString().slice(0, 10),
                        archived: false,
                    }
                ]
            }
        });

        const openModal = false;
        this.setState({ openModal });
    }

    onDeleteHandler(id) {
        const books = this.state.books.filter(book => book.id !== id);
        this.setState({ books });
    }

    setOpenModal(isOpenModal) {
        const openModal = isOpenModal;
        this.setState({ openModal });
    }

    onMoveBookHandler(id, archived) {
        this.setState((prevState) => {
            return {
                books: prevState.books.map(
                    book => book.id === id ? { ...book, archived: archived } : book
                )
            }
        });
    }

    render() {
        return (
            <div className='bookself-app'>
                <BookshelfHeader setOpenModal={this.setOpenModal} />
                <BookshelfContent books={this.state.books} onDelete={this.onDeleteHandler} onMoveBook={this.onMoveBookHandler} />
                {this.state.openModal && <BookshelfModal setOpenModal={this.setOpenModal} addBook={this.onAddBookHandler} />}
                <BookshelfFooter />
            </div>
        );
    }
}

export default BookshelfApp;