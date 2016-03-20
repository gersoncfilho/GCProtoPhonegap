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