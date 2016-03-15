app.controller('HomeController', function(){	
	this.notifications = testNotifications;

	this.agendaThumb = "assets/agenda-thumb.png";

	this.notificationThumb = "assets/notification-thumb.png";	

	this.selectedNotification = [];

	this.showNotification = function(notification, navigation)
	{
		this.selectedNotification = notification;

		navigation.goToPage("Notificação");
	}
});

app.controller('NavigationController', function(){	
	this.page = "Início";

	this.goToPage = function(page)
	{
		this.page = page;
	};

	this.isPage = function(page)
	{
		return this.page === page;
	};
});

var testNotifications = 
	[
		{
			'nome':'Dr. José da Silva',
			'especialidade':'Cardiologista',
			'data':'18 de março de 2016',
			'horario':'10:00 hs'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs'
		},
		{
			'nome':'Dr. Pedro Lima',
			'especialidade':'Oftalmologista',
			'data':'20 de março de 2016',
			'horario':'12:00 hs'
		},
		{
			'nome':'Dra. Sara Silva',
			'especialidade':'Ortopedista',
			'data':'21 de março de 2016',
			'horario':'15:00 hs'
		}
	];