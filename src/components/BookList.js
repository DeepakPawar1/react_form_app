// function BookList () {

// 	return <div> BookList </div>
// }

// export default BookList;

import BookShow from './BookShow';

function BookList ({booklist, onDelete}) {
console.log(booklist,"in booklist")

const render_template= booklist.map((elem,index) => {
	// return <div index={elem.id}>{elem.title}</div>;
return <BookShow key={elem.id} element={elem} onDelete={onDelete}/>
});

	return (<div className="book-list"> {render_template } </div>)

}

export default BookList;