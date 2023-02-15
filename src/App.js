
import {useState,useEffect} from 'react';
import BookCreate from './components/BookCreate';
import BookShow from './components/BookShow';
import BookList from './components/BookList';
import axios from 'axios';
function App(){


const deleteBook = async (id) => {

const response = await axios.delete(`http://localhost:3001/books/${id}`)
	const updatedbooks = books.filter((book)=>{
	if (id!==book.id){
	return id!==book.id;
	}
	})
	setBooks(updatedbooks);
}

const editBook = async (id,title) => {
//console.log("in editbook")
const response = await axios.put(`http://localhost:3001/books/${id}`,{title})
	const updatedbooks = books.map((book)=>{
	if (id==book.id){
	return {...book,...response.data};
	}
	return book;
	})

	//const newBooks = [...books.slice(0,id),{id,title},...books.slice(id)]


	setBooks(updatedbooks);
}


const fetchBooks = async() =>{
	const response = await axios.get("http://localhost:3001/books");
	setBooks(response.data);
}
useEffect(()=>{
	fetchBooks();
},[]);

const createBook = async (event) => {
const response = await axios.post('http://localhost:3001/books',{title:event});
console.log(response.data,"asdasdad")
setBooks([...books,response.data]);
}

	
const [books, setBooks] = useState([]);
	
	return (<div className="app">
	<BookList booklist={books} onDelete={deleteBook} onEdit={editBook}/>
<BookCreate handle={createBook}/>
	</div>);

}

export default App;