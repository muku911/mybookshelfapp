import React from 'react';

class BookshelfInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            judul: '',
            pengarang: '',
        }

        this.onJudulChangeEventHandler = this.onJudulChangeEventHandler.bind(this);
        this.onPengarangChangeEventHandler = this.onPengarangChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onJudulChangeEventHandler(event) {
        this.setState(() => {
            return {
                judul: event.target.value,
            }
        });
    }

    onPengarangChangeEventHandler(event) {
        this.setState(() => {
            return {
                pengarang: event.target.value,
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
                    <label htmlFor="judul">Masukan Judul Buku</label>
                    <input required type="text" placeholder="Judul Buku" value={this.state.judul} onChange={this.onJudulChangeEventHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="pengarang">Masukkan Pengarang Buku</label>
                    <input required type="text" placeholder="Pengarang" value={this.state.pengarang} onChange={this.onPengarangChangeEventHandler} />
                </div>
                <button className="btn-submit" type="submit">Tambah</button>
            </form>
        )
    }
}

export default BookshelfInput;