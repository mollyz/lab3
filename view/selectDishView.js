var SelectDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.container = container;
    this.model = model;
    this.courseType = container.find("#courseType");

	
	this.update = function () {
	var dishes = model.getAllDishes(this.courseType.val());
    var i = 0;
    var row;
	var allDishesHtml = "";
	
	while (true) {
	row="<tr>"
	for (i = 0; i < allDishes.length; i++) { 
		   row += "<td><div class='col'><img  id='"+dishes[i].id+"' class='dishImage' src = images/" + dishes[i].image + ">";
           row += "<p>" + dishes[i].name + "</p>";
           row += "</tr>";
            $("#dishTable").append(row);
            i++;
        }
    }
};
	this.update();
}