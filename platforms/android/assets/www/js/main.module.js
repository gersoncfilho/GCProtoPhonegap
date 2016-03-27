//Define an angular module for our app
var App = angular.module('App', ['ngRoute','ui-listView', 'uiGmapgoogle-maps']); 
 
App.directive('back', ['$window', function($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
}]);

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

/* Carteiras*/
App.factory('favoritoFactory', function(){
  var favoritoFactory = {};

  favoritoFactory.favorito = [];

  favoritoFactory.set = function(value){
    favoritoFactory.favorito = value;
  };

  return favoritoFactory;
});

/* Carteiras*/
App.factory('reembolsoFactory', function(){
  var reembolsoFactory = {};

  reembolsoFactory.reembolso = [];

  reembolsoFactory.set = function(value){
    reembolsoFactory.reembolso = value;
  };

  return reembolsoFactory;
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
      when('/MeuPlano', {
        templateUrl: 'templates/meuplano.html',
        'controller': 'MeuPlanoController'
      }).
      when('/Carteiras', {
        templateUrl: 'templates/carteiras.html',
        controller: 'CarteirasController'
      }).
      when('/Reembolsos', {
        templateUrl: 'templates/reembolsos.html',
        controller: 'ReembolsosController'
      }).
      when('/Favoritos', {
        templateUrl: 'templates/favoritos.html',
        controller: 'FavoritosController'
      }).
      when('/Agenda', {
        templateUrl: 'templates/agenda.html',
        controller: 'AgendaController'
      }).
      when('/Carteiras/Carteira', {
        templateUrl: 'templates/carteira.html',
        controller: 'CarteirinhaController'
      }).
      when('/Favoritos/Detalhe', {
        templateUrl: 'templates/detalhe.html',
        controller: 'DetalheController'
      }).
      when('/DadosCadastrais', {
        templateUrl: 'templates/dadoscadastrais.html',
        controller: 'DadosCadastraisController'
      }).
      when('/SolicitaReembolso', {
        templateUrl: 'templates/solicitareembolso.html',
        controller: 'SolicitaReembolsoController'
      }).
      when('/ConsultaReembolsos', {
        templateUrl: 'templates/consultareembolsos.html',
        controller: 'ConsultaReembolsoController'
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

  // $scope.map = [];
  
  // $scope.marker = [];

  //  uiGmapGoogleMapApi.then(function(maps) {
  //     $scope.map = {center: {latitude: $scope.notificacao.latitude, longitude: $scope.notificacao.longitude }, zoom: 14};

  //  $scope.marker = {
  //      id: 0,
  //      coords: {
  //          latitude: $scope.notificacao.latitude,
  //          longitude: $scope.notificacao.longitude
  //         },
  //         options: {
  //          title: $scope.notificacao.nome
  //         }
  //      };
  //   });
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

App.controller('DetalheController', function($scope, favoritoFactory){

  $scope.titulo = 'Detalhe Contato';
  
  $scope.favorito = favoritoFactory.favorito;

});


App.controller('FavoritosController', function($scope, $location, favoritoFactory) {
 
    $scope.titulo = 'Favoritos';

    $scope.addFavorito = function(favorito){
    favoritoFactory.set(favorito);

    $location.path("/Favoritos/Detalhe");
  }
 
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

App.controller('MeuPlanoController', function($scope){
  $scope.titulo = 'MEU PLANO'
});

App.controller('DadosCadastraisController', function($scope){
  $scope.titulo = 'DADOS CADASTRAIS'
});

App.controller('ReembolsosController', function($scope){
  $scope.titulo = 'Reembolsos';
});

App.controller('SolicitaReembolsoController', function($scope){
  $scope.titulo = 'Solicita Reembolso'
});

App.controller('ConsultaReembolsoController', function($scope, $location, reembolsoFactory){
  $scope.titulo = 'Consulta Reembolsos';
  $scope.reembolsos = 
  [
    {
      'cpf_cnpj':'00.000.000/0001-20',
      'razao':'CLINICA MEDICA TESTE LTDA',
      'dataevento':'20/01/2001',
      'datapagamento':'20/02/2001',
      'processo':'01352072777',
      'reembolso_solicitado':'R$100,00',
      'bac':'237/2456/123334',
      'valor_reembolsado':'R$100,00'
    },
    {
      'cpf_cnpj':'00.000.000/0001-20',
      'razao':'CLINICA MEDICA TESTE LTDA',
      'dataevento':'20/01/2001',
      'datapagamento':'20/02/2001',
      'processo':'01352072777',
      'reembolso_solicitado':'R$100,00',
      'bac':'237/2456/123334',
      'valor_reembolsado':'R$100,00'
    },
    {
      'cpf_cnpj':'00.000.000/0001-20',
      'razao':'CLINICA MEDICA TESTE LTDA',
      'dataevento':'20/01/2001',
      'datapagamento':'20/02/2001',
      'processo':'01352072777',
      'reembolso_solicitado':'R$100,00',
      'bac':'237/2456/123334',
      'valor_reembolsado':'R$100,00'
    }
  ];
});


/* ********** Controllers ********** */ 
