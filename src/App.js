
import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookShow from './components/BookShow';
import BookList from './components/BookList';
function App(){


const deleteBook = (id) => {
	const updatedbooks = books.filter((book)=>{
	if (id!==book.id){
	return id!==book.id;
	}
	})
	setBooks(updatedbooks);
}

function createBook(event){
setBooks([...books,{id: Math.round(Math.random() * 9999),title: event}]);
}

	
const [books, setBooks] = useState([]);
	
	return (<div className="app">
	<BookList booklist={books} onDelete={deleteBook}/>
<BookCreate handle={createBook}/>
	</div>);

}

export default App;