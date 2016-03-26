//Define an angular module for our app
var App = angular.module('App', ['ngRoute','ui-listView', 'uiGmapgoogle-maps']); 
 

/* ********** Services ********** */ 
/* Notificacao */
App.factory('notificacaoFactory', function(){
  var notificacaoFactory = {};

  notificacaoFactory.notificacao = [];

  notificacaoFactory.set = function(value){
    notificacaoFactory.notificacao = value;
  };

  return notificacaoFactory;
});

/* Carteiras*/
App.factory('carteiraFactory', function(){
  var carteiraFactory = {};

  carteiraFactory.carteira = [];

  carteiraFactory.set = function(value){
    carteiraFactory.carteira = value;
  };

  return carteiraFactory;
});

/* ********** Services ********** */ 



/* ********** Router Configuration ********** */ 
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
      when('/Notificacao/Detalhe', {
        templateUrl: 'templates/detalhe.html',
        controller: 'DetalheController'
      }).
      when('/Carteiras/Carteira', {
        templateUrl: 'templates/carteira.html',
        controller: 'CarteirinhaController'
      }).
      otherwise({
        redirectTo: '/Notificacoes'
      })
}]);
/* ********** Router Configuration ********** */  

/* ********** Google Maps Configuration ********** */ 
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
/* ********** Google Maps Configuration ********** */ 


/* ********** Controllers ********** */ 
App.controller('NotificacoesController', function($scope, $location, notificacaoFactory){ 

  $scope.titulo = "NOTIFICAÇÕES";

  $scope.addNotificacao = function(notificacao){
    notificacaoFactory.set(notificacao);
    
    console.log(notificacaoFactory.notificacao);

    $location.path("/Notificacao/Detalhe");
  }

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
      'longitude':'-43.2235144',
      'thumb':'assets/agenda-thumb-branca.png'
    },
    {
      'nome':'FELIZ ANIVERSÁRIO!!',
      'especialidade':'',
      'data':'PARABÉNS PELO SEU DIA.',
      'horario':'',
      'endereco1':'Norteshopping - Centro Médico',
      'endereco2':'Av. Dom Hélder Câmara, 4000',
      "endereco3":"Bloco 4 - Sala 1313",
      'tel':'2689-0909',
      'email':'joseferreira@consultorio.com.br',
      'latitude':'-22.9135455',
      'longitude':'-43.2235144',
      'thumb':'assets/message-thumb-branco.png'
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
      'longitude':'-43.2235144',
      'thumb':'assets/agenda-thumb-branca.png'
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
      'longitude':'-43.2235144',
      'thumb':'assets/agenda-thumb-branca.png'
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
      'longitude':'-43.2235144',
      'thumb':'assets/agenda-thumb-branca.png'
    }
  ];
});
 
 
App.controller('DetalheController', function($scope, notificacaoFactory, uiGmapGoogleMapApi){

  $scope.titulo = "Detalhe";

  $scope.notificacao = notificacaoFactory.notificacao;

  $scope.map = [];
  
  $scope.marker = [];

   uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = {center: {latitude: $scope.notificacao.latitude, longitude: $scope.notificacao.longitude }, zoom: 14};

   $scope.marker = {
       id: 0,
       coords: {
           latitude: $scope.notificacao.latitude,
           longitude: $scope.notificacao.longitude
          },
          options: {
           title: $scope.notificacao.nome
          }
       };
    });
});

App.controller('CarteirasController', function($scope, $location, carteiraFactory) {
 
    $scope.titulo = 'Carteiras';

    $scope.addCarteira = function(carteira){
    carteiraFactory.set(carteira);

    $location.path("/Carteiras/Carteira");
  }
 
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

App.controller('CarteirinhaController', function($scope, carteiraFactory){

  $scope.titulo = "Carteira";

  $scope.carteira = carteiraFactory.carteira;

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

/* ********** Controllers ********** */ 
