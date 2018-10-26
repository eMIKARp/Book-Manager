app.controller('ListController', function(Books){
	var vm = this;
	vm.books = Books.getAll();
})

app.controller('DetailsController', function($routeParams, Books){
	var vm = this;
	var bookIndex = $routeParams.id;
	vm.book = Books.get(bookIndex);
})

app.controller('NewController', function(Books, Book){
	var vm = this;
	vm.book = new Book();
	vm.saveBook = function(){
		// vm.book.id = Books.size();
		Books.add(vm.book);
		vm.book = new Book();
	}
})