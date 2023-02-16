
import {useContext} from 'react';
import BookShow from './BookShow';
import BooksContext from '../contexts/Books';

function BookList () {
	const {books} = useContext(BooksContext);
const render_template= books.map((book) => {
	
return <BookShow key={books.id} book={book} />
});

return (<div className="book-list">{render_template } </div>)

}

export default BookList;