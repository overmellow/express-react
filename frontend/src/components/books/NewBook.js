import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addBook } from '../../services/BooksService';


function NewBook(props) {

    const initialBook = {
        id: '',
        title: '',
        ISBN: ''
    }

    const [book, setBook] = useState(initialBook);

    const handleChange = (e) => {     
        e.preventDefault();   
        setBook({...book, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(book).then(res => {
            props.setBooks([...props.books, res.data.book]);
            setBook(initialBook)
        });
    }

    return (<>
        <h1>Add New Book</h1>
        <form onSubmit={handleSubmit} >
            Id: <input type="text" name="id" value={book.id} onChange={handleChange} />
            <br />
            Title: <input type="text" name="title" value={book.title} onChange={handleChange} />
            <br />
            ISBN: <input type="text" name="ISBN" value={book.ISBN} onChange={handleChange} />
            <br />
            <input type="submit" />
        </form>
        </>);
}

export default NewBook;