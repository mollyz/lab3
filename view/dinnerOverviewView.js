var DinnerOverviewView = function (container, model) {
	
	this.myDisheslist = container.find("#myDisheslist");
	this.dinnerOverviewtTotalPrice = container.find("#dinnerOverviewtTotalPrice");
	this.printButton = container.find("#printButton");

    this.update = function () {

        var menu = model.getFullMenu();

        $('myDisheslist').html(" ");

        var row = "";
        for (var i = 0; i < menu.length; i++) {
            row = "<div class=col-xs-2>";
            row += "<img src='" + "images/" + menu[i].image + "'>";
            row += "<h1>" + menu[i].name + "</h1>";
            row += "<p>" + model.getPriceForDish(menu[i].id) + "<span> SEK</span></p>";
            row += "</div>";
            $('myDisheslist').append(row);
        }

        var total = 0;
        for (var j = 0; j < menu.length; j++) {
            total += model.getPriceForDish(menu[j].id);
        }

        row = "<div class=col-xs-1><h3>Total</h3>";
        row += "<p><span>" + total + "</span> SEK</p></div>";
        $('#dinnerOverviewtTotalPrice').append(row);
    }

    this.update();
}