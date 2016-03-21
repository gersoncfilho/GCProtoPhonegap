//Define an angular module for our app
var App = angular.module('App', ['ngRoute','ui-listView', 'uiGmapgoogle-maps']); 
 
App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Notificacoes', {
        templateUrl: 'templates/notificacoes.html',
        controller: 'NotificacoesController'
    }).
      when('/Carteiras', {
        templateUrl: 'templates/carteiras.html',
        controller: 'CarteirasController'
      }).
      when('/Favoritos', {
        templateUrl: 'templates/favoritos.html',
        controller: 'FavoritosController'
      }).
      when('/Agenda', {
        templateUrl: 'templates/agenda.html',
        controller: 'AgendaController'
      }).
      when('/Notificacoes/:name', {
        templateUrl: 'templates/detalhe.html',
        controller: 'DetalheController'
      }).
      otherwise({
        redirectTo: '/Notificacoes'
      })
}]);

App.config(function(uiGmapGoogleMapApiProvider) {
[
  function(uiGmapGoogleMapApiProvider){
    uiGmapGoogleMapApiProvider.configure({        
        key: 'AIzaSyAimn8YL1R383fSyjL-zpTShSt1_cqqfu8', //    key: 'your api key',
        v: '3.23', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  }
]});

//App.controller('DetalheController', ['$routeParams', function($scope, $routeParams, uiGmapGoogleMapApi){
//    $scope.notification = $routeParams.notification;    
//}]);

App.controller('DetalheController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.name = $routeParams.name;
  }]);

App.controller('NotificacoesController', function($scope){ 

  $scope.titulo = "Notificações";

  $scope.notificacoes = [
    {
      'nome':'Dr. José da Silva',
      'especialidade':'Cardiologista',
      'data':'18 de março de 2016',
      'horario':'10:00 hs',
      'endereco1':'Norteshopping - Centro Médico',
      'endereco2':'Av. Dom Hélder Câmara, 4000',
      "endereco3":"Bloco 4 - Sala 1313",
      'tel':'2689-0909',
      'email':'joseferreira@consultorio.com.br',
      'latitude':'-22.9135455',
      'longitude':'-43.2235144'
    },
    {
      'nome':'Dr. Pedro da Silva',
      'especialidade':'Cardiologista',
      'data':'18 de março de 2016',
      'horario':'10:00 hs',
      'endereco1':'Norteshopping - Centro Médico',
      'endereco2':'Av. Dom Hélder Câmara, 4000',
      "endereco3":"Bloco 4 - Sala 1313",
      'tel':'2689-0909',
      'email':'joseferreira@consultorio.com.br',
      'latitude':'-22.9135455',
      'longitude':'-43.2235144'
    },
    {
      'nome':'Dr. Sara da Silva',
      'especialidade':'Cardiologista',
      'data':'18 de março de 2016',
      'horario':'10:00 hs',
      'endereco1':'Norteshopping - Centro Médico',
      'endereco2':'Av. Dom Hélder Câmara, 4000',
      "endereco3":"Bloco 4 - Sala 1313",
      'tel':'2689-0909',
      'email':'joseferreira@consultorio.com.br',
      'latitude':'-22.9135455',
      'longitude':'-43.2235144'
    },{
      'nome':'Dr. Paulo da Silva',
      'especialidade':'Cardiologista',
      'data':'18 de março de 2016',
      'horario':'10:00 hs',
      'endereco1':'Norteshopping - Centro Médico',
      'endereco2':'Av. Dom Hélder Câmara, 4000',
      "endereco3":"Bloco 4 - Sala 1313",
      'tel':'2689-0909',
      'email':'joseferreira@consultorio.com.br',
      'latitude':'-22.9135455',
      'longitude':'-43.2235144'
    },{
      'nome':'Dr. Paulo da Silva',
      'especialidade':'Nutricionista',
      'data':'18 de março de 2016',
      'horario':'10:00 hs',
      'endereco1':'Norteshopping - Centro Médico',
      'endereco2':'Av. Dom Hélder Câmara, 4000',
      "endereco3":"Bloco 4 - Sala 1313",
      'tel':'2689-0909',
      'email':'joseferreira@consultorio.com.br',
      'latitude':'-22.9135455',
      'longitude':'-43.2235144'
    },{
      'nome':'Dr. Sara da Silva',
      'especialidade':'Cardiologista',
      'data':'18 de março de 2016',
      'horario':'10:00 hs',
      'endereco1':'Norteshopping - Centro Médico',
      'endereco2':'Av. Dom Hélder Câmara, 6000',
      "endereco3":"Bloco 4 - Sala 1313",
      'tel':'2689-0909',
      'email':'joseferreira@consultorio.com.br',
      'latitude':'-22.9135455',
      'longitude':'-43.2235144'
    },{
      'nome':'Dr. José da Silva',
      'especialidade':'Cardiologista',
      'data':'18 de março de 2016',
      'horario':'10:00 hs',
      'endereco1':'Norteshopping - Centro Médico',
      'endereco2':'Av. Dom Hélder Câmara, 4000',
      "endereco3":"Bloco 4 - Sala 1313",
      'tel':'2689-0909',
      'email':'joseferreira@consultorio.com.br',
      'latitude':'-22.9135455',
      'longitude':'-43.2235144'
    },{
      'nome':'Dr. José da Silva',
      'especialidade':'Cardiologista',
      'data':'18 de março de 2016',
      'horario':'10:00 hs',
      'endereco1':'Norteshopping - Centro Médico',
      'endereco2':'Av. Dom Hélder Câmara, 4000',
      "endereco3":"Bloco 4 - Sala 1313",
      'tel':'2689-0909',
      'email':'joseferreira@consultorio.com.br',
      'latitude':'-22.9135455',
      'longitude':'-43.2235144'
    }
  ];
});
 
 
App.controller('CarteirasController', function($scope) {
 
    $scope.titulo = 'Carteiras';
 
    $scope.carteiras = [
      {
        'usuario':'Pedro Souza',
        'tipo':'Titular',
        'carteiraUrl':'assets/carteira1.png'
      },
      {
        'usuario':'Maria Silva Souza',
        'tipo':'Dependente',
        'carteiraUrl':'assets/carteira2.png'
      },
      {
        'usuario':'Carlos Silva Souza',
        'tipo':'Dependente',
        'carteiraUrl':'assets/carteira1.png'
      }

    ];

});


App.controller('FavoritosController', function($scope) {
 
    $scope.titulo = 'Favoritos';
 
    $scope.favoritos = [
      {
        'nome':'Dr. José da Silva',
        'especialidade':'Cardiologista',
        'endereco1':'Norteshopping - Centro Médico',
        'endereco2':'Av. Dom Hélder Câmara, 4000',
        "endereco3":"Bloco 4 - Sala 1313",
        'tel':'2689-0909',
        'email':'joseferreira@consultorio.com.br',
        'latitude':'-22.9135455',
        'longitude':'-43.2235144'
      },
      {
        'nome':'Dr. Pedro Ricardo',
        'especialidade':'Nutricionista',
        'endereco1':'Barrashopping - Centro Médico',
        'endereco2':'Av. das Américas, 5000',
        "endereco3":"Bloco 2 - Sala 3131",
        'tel':'8899-9999',
        'email':'joseferreira@consultorio.com.br',
        'latitude':'-22.9135455',
        'longitude':'-43.2235144'
      },
      {
        'nome':'Dr. José da Silva',
        'especialidade':'Cardiologista',
        'endereco1':'Norteshopping - Centro Médico',
        'endereco2':'Av. Dom Hélder Câmara, 4000',
        "endereco3":"Bloco 4 - Sala 1313",
        'tel':'2689-0909',
        'email':'joseferreira@consultorio.com.br',
        'latitude':'-22.9135455',
        'longitude':'-43.2235144'
      },
      {
        'nome':'Dr. José da Silva',
        'especialidade':'Cardiologista',
        'endereco1':'Norteshopping - Centro Médico',
        'endereco2':'Av. Dom Hélder Câmara, 4000',
        "endereco3":"Bloco 4 - Sala 1313",
        'tel':'2689-0909',
        'email':'joseferreira@consultorio.com.br',
        'latitude':'-22.9135455',
        'longitude':'-43.2235144'
      }
];

});
App.controller('AgendaController', function($scope) {
 
    $scope.titulo = 'Agendar';

});
