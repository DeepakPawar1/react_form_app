import {useState,createContext} from 'react';
import axios from 'axios';
const BooksContext = createContext();


function Provider ({children}){
	const [books, setBooks] = useState([]);
	
	const fetchBooks = async() =>{
		console.log("in fetchooks");
		const response = await axios.get("http://localhost:3001/books");
		setBooks(response.data);
	}


	const deleteBook = async (id) => {

		const response = await axios.delete(`http://localhost:3001/books/${id}`)
			const updatedbooks = books.filter((book) => {
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
			if (id===book.id){
			return {...book,...response.data};
			}
			return book;
			})
		
			//const newBooks = [...books.slice(0,id),{id,title},...books.slice(id)]
		
		
			setBooks(updatedbooks);
		}
		
		const createBook = async (event) => {
			const response = await axios.post('http://localhost:3001/books',{title:event});
			console.log(response.data,"asdasdad")
			setBooks([...books,response.data]);
			}

			const valueToShare = {
				books,
				deleteBook,
				editBook,
				fetchBooks,
				createBook
			};

	return (
		<BooksContext.Provider value={valueToShare}>
		{children}
		</BooksContext.Provider>
		)
}

export {Provider};
export default BooksContext;
