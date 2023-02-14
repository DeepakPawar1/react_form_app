

import BookShow from './BookShow';

function BookList ({booklist, onDelete,onEdit}) {
console.log(booklist,"in booklist")

const render_template= booklist.map((elem,index) => {
	
return <BookShow key={elem.id} element={elem} onDelete={onDelete} onEdit={onEdit}/>
});

	return (<div className="book-list"> {render_template } </div>)

}

export default BookList;