var SideNavController = function (view, model) {
	
	  view.numberOfGuests.on('change', function () {
      model.setNumberOfGuests($(this).val());
    });
	
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
 
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});


    view.container.on('click', function (e) {
        if ($(e.target).hasClass('deleteIcon')) {
            model.removeDishFromMenu(e.target.id);
        }
    });

    function confirmdinner() {
  	$("#SecondPage").hide();
 	$("#topBarView").show();
	$("#dinnerOverviewView").show();
};	
};