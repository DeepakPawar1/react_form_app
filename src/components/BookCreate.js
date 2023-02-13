
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
		return (<form onSubmit={handleSubmit}> <input value={inpvalue} onChange={handleChange}/> <button>Create!</button></form>)
}

export default BookCreate;