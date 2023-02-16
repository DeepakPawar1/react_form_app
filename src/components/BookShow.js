

import {useState,useContext} from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../contexts/Books';


function BookShow ({book}) {
const [showEdit,setShowEdit] = useState(false);

const {deleteBook} = useContext(BooksContext);

const handleEditClick = () =>{
setShowEdit(!showEdit);	
};

const handleDeleteClick = (book) =>{
	deleteBook(book.id);	
};

let content = <h3>{book.title}</h3>

if(showEdit){

	content = <BookEdit book={book} handleSave={handleEditClick}/>
}
	return (
		
	<div className="book-show">
	<img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
	<div>{content}</div>
		<div className="actions"> 
			<button className="delete" onClick={handleDeleteClick}>
			Delete
			</button>
 			<button className="edit" onClick={handleEditClick}>
 			Edit
 			</button> 
 		</div>
		
	</div>



	 )
}

export default BookShow;