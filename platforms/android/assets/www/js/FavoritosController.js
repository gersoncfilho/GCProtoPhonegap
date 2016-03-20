app.controller('FavoritosController', function($scope, navigation){
	this.favoritos = favoritos;

	this.favoritoThumb = "assets/favorito-thumb.png";

	this.selectedFavorito = [];

	this.showFavorito = function(favorito, navigation)
	{
		this.selectedFavorito = favorito;

		navigation.goToSection("Favorito");
	};

	this.isSelectedFavorito = function(favorito){
		return this.selectedFavorito === favorito;
	};

});	

var favoritos = 
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
		}
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
		}
];