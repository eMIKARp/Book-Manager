
app.constant('BOOK_ENDPOINT','/api/books/:id')

app.factory('Book', function($resource, BOOK_ENDPOINT){
	return $resource(BOOK_ENDPOINT);
})

/**
app.factory('Book', function(){
	
	function Book(id, title, author, isbn){
		this.id = id;
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
	
	return Book;
})
*/

app.service('Books', function(Book){
	
	/**
	var books = [
		new Book(0, 'Henryk Sienkiewicz', 'Krzyżacy','12345'),
		new Book(1, 'Adam Mickiewicz', 'Pan Tadeusz','23456'),
		new Book(2, 'Eliza Orzeszkowa', 'Nad Niemnem','34567')
	];
	
	this.size = function(){
		return books.lenght;
	}
	*/
	
	this.getAll = function(){
		return Book.query();
	}
	
	this.get = function(index){
		return Book.get({id:index});
	}
	this.add = function(book){
		book.$save();
	}
})

