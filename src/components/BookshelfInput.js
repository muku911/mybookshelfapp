import React from 'react';

class BookshelfInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addBook(this.state);
    }

    render() {
        return (
            <form className='form' onSubmit={this.onSubmitEventHandler}>
                <div className="form-group">
                    <label htmlFor="title">Masukan title</label>
                    <input required type="text" placeholder="title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Masukkan body</label>
                    <input required type="text" placeholder="body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                </div>
                <button className="btn-submit" type="submit">Tambah</button>
            </form>
        )
    }
}

export default BookshelfInput;