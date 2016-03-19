app.controller('HomeController', function($scope, uiGmapGoogleMapApi){	

	this.notifications = testNotifications;

	this.agendaThumb = "assets/agenda-thumb.png";

	this.notificationThumb = "assets/notification-thumb.png";	

	this.selectedNotification = [];

	$scope.map = {};
	$scope.marker = {};

	this.showNotification = function(notification, navigation)
	{
		this.selectedNotification = notification;

		navigation.goToSection("Notificação");

		$scope.map = {center: {latitude: notification.latitude, longitude: notification.longitude }, zoom: 14};
		$scope.marker = {
	      id: 0,
	      coords: {
          	latitude: notification.latitude,
          	longitude: notification.longitude
          },
          options: {
          	title: notification.nome
          }
      	};
	};

	this.setSelectedNotification = function(notification)
	{
		this.selectedNotification = notification;
	};

	this.isSelectedNotification = function(notification)
	{
		return this.selectedNotification === notification;
	};
});

app.controller('CarteirasController', function($scope){

	this.carteirinhas = carteirinhas;

	this.selectedCarteira = [];
	
	this.setSelectedCarteira = function(carteira, navigation)
	{
		this.selectedCarteira = carteira;

		navigation.goToSection('Carteira');
	};

	this.isSelectedCarteira = function(carteira)
	{
		return this.selectedCarteira === carteira;
	};
});

app.controller('NavigationController', function($scope){	

	this.page = "Notificações";
	
	this.section = "Início"

	this.goToPage = function(page)
	{
		this.page = page;

		this.goToSection("Início");
	};

	this.goToSection = function(section)
	{
		this.section = section;
	};

	this.isPage = function(page)
	{
		return this.page === page;
	};

	this.isSection = function(section)
	{
		return this.section === section;
	};
});

var carteirinhas = 
[
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

var testNotifications = 
	[
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