import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../../services/BooksService";
import Book from "./Book";
import NewBook from "./NewBook";

function Books() {
	const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState();

	useEffect(() => {
		getBooks().then(res => setBooks(res.data));
	}, []);

  const displayDetail = index => {
    setSelectedBook(books[index]);
  }
  
  const removeBook = async id => {
    let res = await deleteBook(id);
    if(res.data.message == 'successful') {
      setBooks(books.filter(book => book.id != id));
    }
    // console.log(res.data)
    // deleteBook(id).then(res => console.log(res.data));
  }

	return (<>
		<h1>Books</h1>
    <NewBook books={books} setBooks={setBooks} />
		<ul>
			{
				books.map((book, index) => {
					return <li key={book.id}><span  onClick={() => displayDetail(index)}>{book.title}</span>  <button onClick={() => removeBook(book.id)}>X</button></li>
				})
			}      
		</ul>
    {
      selectedBook != null && <Book book={selectedBook} />
    }  
	</>);
}

export default Books;