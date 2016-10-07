angular
  .module('booker')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];
function BooksIndexController ($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    console.log(response)
    console.log('books')
    vm.books = response.data.books;

  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
}