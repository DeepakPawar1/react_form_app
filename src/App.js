
import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookShow from './components/BookShow';
function App(){

function createBook(event){
	console.log(event,"in app.js");
setBooks([...books,event]);
}

	
const [books, setBooks] = useState([]);
	
	return (<div>
	<BookShow booklist={books}/>
<BookCreate handle={createBook}/>
	</div>);

}

export default App;