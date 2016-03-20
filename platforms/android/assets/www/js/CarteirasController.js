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