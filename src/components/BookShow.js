

import {useState} from 'react';
import BookEdit from './BookEdit';

// function handleSubmit(event){
// 	event.preventDefault();
// }

function BookShow ({element,onDelete}) {
const [showEdit,setShowEdit] = useState(false);

const handleEditClick = () =>{
setShowEdit(!showEdit);	
};

const handleDeleteClick = (event) =>{
onDelete(element.id);	
};

let content = <h3>{element.title}</h3>

if(showEdit){

	content = <BookEdit showEdit={showEdit}/>
}
	return (
		
	<div className="book-show">
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