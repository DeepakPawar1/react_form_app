
import {useState} from 'react';

function BookCreate ({handle}) {


const[inpvalue,setinpvalue] = useState('');
	function handleSubmit(event){
		event.preventDefault();
		// console.log(event.target.value);
handle(inpvalue);
setinpvalue('');
	}

	function handleChange(event){

		console.log(event.target.value);
		setinpvalue(event.target.value);
	}
		return (<div className="book-create"><h3>Add a book</h3><form onSubmit={handleSubmit}> <input className="input" value={inpvalue} onChange={handleChange}/> <button className="button">Create!</button></form></div>)
}

export default BookCreate;