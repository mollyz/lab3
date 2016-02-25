/*OK*/
function createnew() {
  $("#hover-div").hide();
  $("#SecondPage").show();
  $("#sideNavView").show();
  $("#searchArea").show();
  $("#selectDishView").show();
}

/*ok*/
function seeDetail(){
	$("#searchArea").hide();
  $("#selectDishView").hide();
	$("#detailView").show();
} 

/*ok*/
function backtoselect() {
  $("#detailView").hide();
  $("#searchArea").show();
  $("#selectDishView").show();
}

/*ok*/
function confirmdinner() {
  $("#SecondPage").hide();
 	$("#topBarView").show();
	$("#dinnerOverviewView").show();	
}	

/*ok*/
function confirmdish() {
  $("#detailView").hide();
  $("#searchArea").show();
  $("#selectDishView").show();
}
/*ok*/
function editmenu() {	
	$("#topBarView").hide();
	$("#dinnerOverviewView").hide();
	$("#dinnerPreparationView").hide();
  $("#SecondPage").show();
  $("#detailView").hide();
}

/*ok*/
function finalresult() {
  $("#dinnerOverviewView").hide();
  $("#DinnerPreparation").show();
  
}