
app.constant('BOOK_ENDPOINT','/api/books/:id')
app.constant('LOGIN_ENDPOINT','/login')

app.service('AuthenticationService', function($http, LOGIN_ENDPOINT) {
	this.authenticate = function(credentials, successCallback) {
		var authHeader = {Authorization: 'Basic ' + btoa(credentials.username+':'+credentials.password)};
		var config = {headers: authHeader};
		$http
		.post(LOGIN_ENDPOINT, {}, config)
		.then(function success(value) {
			$http.defaults.headers.post.Authorization = authHeader.Authorization;
			successCallback();
		}, function error(reason) {
			console.log('Login error');
			console.log(reason);
		});
	}
	this.logout = function(successCallback){
		delete $http.defaults.headers.post.Authorization;
		successCallback();
	}
})

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

