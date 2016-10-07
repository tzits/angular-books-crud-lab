angular
  .module('booker')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams'];
  function BooksShowController (  $http,   $routeParams  ) {
    var vm = this;
    console.log($routeParams);
    var bookId= $routeParams.id
    console.log(bookId)
    $http({
      method: 'GET',
      url: '/api/'+ bookId  // how can we get the id? (hint: check console log from above)
    }).then(function successCallback(json) {
      vm.book = json.data;
      console.log(vm.book)
    });
  }