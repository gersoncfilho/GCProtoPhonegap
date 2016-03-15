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
		'tipo':'Titular'
	},
	{
		'usuario':'Maria Silva Souza',
		'tipo':'Dependente'
	},
	{
		'usuario':'Carlos Silva Souza',
		'tipo':'Dependente'
	}

];

var testNotifications = 
	[
		{
			'nome':'Dr. José da Silva',
			'especialidade':'Cardiologista',
			'data':'18 de março de 2016',
			'horario':'10:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs',
			'latitude':'-22.9135455',
			'longitude':'-43.2235144'
		}
	];