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

app.controller('NotificationController', function(){	
	this.notifications = testNotifications;

	this.agendaThumb = "assets/agenda-thumb.png";

	this.notificationThumb = "assets/notification-thumb.png";	
});