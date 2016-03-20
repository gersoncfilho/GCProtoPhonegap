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