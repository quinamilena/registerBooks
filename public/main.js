var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http){

    $scope.todosLivro = [];
    $scope.livro = {};
    $scope.livro.disponivel = true;
    $scope.livro.preVenda = false;
    $scope.showMe = false;

    $scope.meMostra = function(){
        $scope.showMe = !$scope.showMe;
        $scope.livro = {};
        $scope.livro.disponivel = true;
        $scope.livro.preVenda = false;
    }

    $scope.limpa = function(){
        $scope.livro = {};
        $scope.livro.disponivel = true;
        $scope.livro.preVenda = false;
        $scope.showMe = false;
    }

    $scope.chamarTodos =  function (){
        $http({
            url: '/livraria',
            method: 'GET'
        }).then(function(response){
            $scope.todosLivro = response.data;
        })
    }

    $scope.chamarUmLivro = function(id){
        $http({
            url: `/livraria/${id}`,
            method: 'GET'
        }).then(function(response){
            $scope.livro = response.data;
            $scope.showMe = true;
        });
    }

    $scope.info = function(id){
        $http({
            url: `/livraria/${id}`,
            method: 'GET'
        }).then(function(response){
            $scope.livro = response.data;
        }); 
    }

    $scope.salvar = function (){
        if ($scope.livro._id){
            $http({
                url: `/livraria/${$scope.livro._id}`,
                method: 'PUT',
                data: $scope.livro
            }).then(function(response){
                $scope.livro = {};
                $scope.chamarTodos();
                $scope.livro.disponivel = true;
                $scope.livro.preVenda = false;
                $scope.showMe = false;
            })
        } else if ($scope.livro.livroNome && $scope.livro.ISBN13){
            $http({
                url: 'livraria',
                method: 'POST',
                data: $scope.livro
            }).then(function (response){
                $scope.livro = {};
                $scope.chamarTodos();
                $scope.livro.disponivel = true;
                $scope.livro.preVenda = false;
                $scope.showMe = false;
            });
        }
    }

    $scope.remover = function (){
        if(confirm('Você desejar remover este cadastro de livro?')){
            $http({
                url: `/livraria/${$scope.livro._id}`,
                method: 'DELETE'
            }).then(function(response){
                $scope.livro = {};
                $scope.chamarTodos();
                $scope.showMe = false;
            });
        }
    }
});

app.directive('formulario', function(){
    return{
        restrict: "EA",
        templateUrl: './App/Cadastro/viewCadastro.html'
    }
})
