var PrepareDishView = function (container, model) {
	
	this.prepareDinner = container.find("#prepareDinner");

this.update = function () {

        $('#prepareDinner').html(" ");

        var menu = model.getFullMenu();
        var row;
        for (var i = 0; i < menu.length; i++) {
            row = "<tr>";
            row += "<td><img src = images/" + menu[i].image + "></td>";
            row += "<td><h1>" + menu[i].name + "</h1></td>";
            row += "<td><h3>Preparation</h3> </p>" + menu[i].description + "</p></td>";
            row += "</tr>";
            $('#prepareDinner').append(row);
        }
    }
    this.update();
}


	
