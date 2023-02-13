function BookShow ({booklist}) {


const render_template= booklist.map((elem,index) => {
	return <div index={index}>{elem}</div>;
});

	return (<div> {render_template } </div>)

}

export default BookShow;