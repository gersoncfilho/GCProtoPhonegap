app.controller('HomeController', function(){	
	this.notifications = testNotifications;

	this.agendaThumb = "assets/agenda-thumb.png";

	this.notificationThumb = "assets/notification-thumb.png";	

	this.selectedNotification = [];

	this.showNotification = function(notification, navigation)
	{
		this.selectedNotification = notification;

		navigation.goToSection("Notificação");
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

app.controller('CarteirasController', function(){

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

app.controller('NavigationController', function(){	
	this.page = "Notificações";
	this.section = "Início"

	this.goToPage = function(page)
	{
		this.page = page;
		this.section = "Início";
	};

	this.goToSection = function(section)
	{
		this.section = section;
	}

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
		}
	];