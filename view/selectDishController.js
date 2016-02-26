var SelectDishController = function(view, model) {
	   
	view.courseType.on('change', function () {
    		model.getSelectedDish; 
            view.update();
    });

    view.container.click(function (e) {
            if ($(e.target).hasClass('dishImage')) {
            	$("#searchArea").hide();
  				$("#selectDishView").hide();
				$("#detailView").show();
            }
    });

};