
import {useState,useContext} from 'react';
import BooksContext from '../contexts/Books';

function BookCreate () {

	const {createBook} = useContext(BooksContext);

const[inpvalue,setinpvalue] = useState('');

	function handleSubmit(event){
		event.preventDefault();
		createBook(inpvalue);
setinpvalue('');
	}

	function handleChange(event){
		setinpvalue(event.target.value);
	}
		return (<div className="book-create"><h3>Add a book</h3><form onSubmit={handleSubmit}> <input className="input" value={inpvalue} onChange={handleChange}/> <button className="button">Create!</button></form></div>)
}

export default BookCreate;