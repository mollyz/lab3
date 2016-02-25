var SelectDishController = function(view, model) {
	   
	view.courseType.on('change', function () {
    		view.update();
    });

    view.container.on({
        "click": function (e) {
            if ($(e.target).hasClass('dishImage')) {
            	$("#searchArea").hide();
  				$("#selectDishView").hide();
				$("#detailView").show();
            }
        }
    });

};