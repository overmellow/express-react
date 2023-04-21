function Book(props) {

	return (<>
		<h3>Book details</h3>
		<strong>{props.book.id}: {props.book.title} - {props.book.ISBN}</strong>
	</>);
}

export default Book;