var topBarView = function (container, model) {
	    this.backEditButton = container.find("#backEditButton");
	    this.topBarnumberOfGuest = container.find("#topBarnumberOfGuest");
	    
	    container.find("#topBarnumberOfGuest").html(model.getNumberOfGuests());
	}