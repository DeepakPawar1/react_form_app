import {useState,useContext} from 'react';
import BooksContext from '../contexts/Books';

function BookEdit ({book,handleSave}) {


const [title,setTitle] = useState(book.title);
const {editBook} = useContext(BooksContext);
const handleChange=(event) =>{
setTitle(event.target.value)
	
}

const handleSubmit = (event)=>{
	event.preventDefault();
	// console.log('New title',title);
	// setTitle(title);
	handleSave();
	editBook(book.id,title)

}

	return <form className="book-edit" onSubmit={handleSubmit}>
	<label>Title</label>
	<input className="input" value={title} onChange={handleChange}/>
	<button className="button is-primary"> Save</button>
	</form>
}

export default BookEdit;