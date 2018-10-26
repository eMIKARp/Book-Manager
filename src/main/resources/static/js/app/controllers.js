app.controller('AuthenticationController', function($rootScope, $location, AuthenticationService){
	var vm = this;
	vm.credentials = {};
	var loginSuccess = function(){
		$rootScope.authenticated = true;
		$location.path('/new');
	}
	vm.login = function(){
		AuthenticationService.authenticate(vm.credentials, loginSuccess);
	}
	
	var logoutSuccess = function() {
		$rootScope.authenticated = false;
		$location.path('/');
	}
	vm.logout = function() {
		AuthenticationService.logout(logoutSuccess);
	}
})

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