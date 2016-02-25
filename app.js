$(function() {
	var model = new DinnerModel();
	model.setNumberOfGuests(5);

	var sideNavView = new SideNavView($("#sideNavView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var detailView = new DetailView($("#detailView"), model);
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var prepareDishView = new PrepareDishView($("#dinnerPreparationView"),model);

	var sideNavController = new SideNavController(sideNavView, model);
    var selectDishController = new SelectDishController(selectDishView, model);
    var detailController = new DetailController(detailView, model);

});

function initialization(){
	$("#hover-div").show();
	$("#sideNavView").hide();
	$("#searchArea").hide();
	$("#selectDishView").hide();
	$("#detailView").hide();
	$("#topBarView").hide();
	$("#dinnerOverviewView").hide();
	$("#dinnerPreparationView").hide();
}

