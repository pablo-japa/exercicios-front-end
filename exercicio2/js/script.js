let app = angular.module('meuApp',[]);
app.factory('adicao',function(){
    let operacaoAdicao = {};

    operacaoAdicao.adicionar = function(a,b){
        return (a+b)
    };
    return operacaoAdicao;
});
app.controller('meuController',function($scope,adicao){
    $scope.numero1="";
    $scope.numero2="";
    $scope.resultado="";
    $scope.meuResultado=false;

    $scope.somar=function(){
        let numero1 = parseInt($scope.numero1);
        let numero2 = parseInt($scope.numero2);
         $scope.resultado = adicao.adicionar(numero1,numero2);
         $scope.meuResultado=true;
    };
});



app.factory('subtracao',function(){
let operacaoSubtracao = {};

operacaoSubtracao.subtrairMetodo=function(a,b){
    return (a-b);
};
return operacaoSubtracao;
});
app.controller('meuController',function($scope,subtracao){
    $scope.numero1="";
    $scope.numero2="";
    $scope.resultado="";
    $scope.meuResultado=false;

    $scope.subtrair=function(){
        let numero1 = parseInt($scope.numero1);
        let numero2 = parseInt($scope.numero2);
         $scope.resultado = subtracao.subtrairMetodo(numero1,numero2);
         $scope.meuResultado=true;
    }
})