angular
  .module('booker')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];
  function BooksShowController (  $http,   $routeParams, $location  ) {
    var vm = this;
    console.log($routeParams);
    var bookId= $routeParams.id
    console.log(bookId)
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/'+bookId
    }).then(function onBookShowSuccess(response) {
      console.log('so far so good')
      console.log(response)
      vm.book = response.data;
    });
  }