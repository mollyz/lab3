var DetailView = function(container, model) {

    this.container = container;
    this.model = model;
    this.backToSelectButton = container.find("#backToSelectButton");
    this.confirmButton = container.find("#confirmDishButton");

    this.oneDishNumberOfGuest = container.find("#oneDishNumberOfGuest");
    this.oneDishIngredientsList = container.find("#oneDishIngredientsList");
    this.oneDishTotalPrice = container.find("#oneDishTotalPrice");


    this.update = function (dishID) {

        var dish = model.getDish(dishID);

        if (dish === undefined)
            return;

        var iUrl = "images/" + dish.image;
        $("#basicInfo").html("<h1>" + dish.name + "</h1>" + "<br><img src='" + iUrl + "' height='280' width='280'><br><br><p>" + dish.description + "</p>");
        $("#instructions").html(dish.description);


        $('#oneDishIngredientsList').html(" ");

        var ingredients = dish.ingredients;
        var row;
        for (var i = 0; i < ingredients.length; i++) {
            row = "<tr>";
            row += "<td>" + ingredients[i].quantity + " " + ingredients[i].unit + "</td>";
            row += "<td>" + ingredients[i].name + "</td>";
            row += "<td>SEK</td>";
            row += "<td>" + ingredients[i].price + "</td>";
            row += "</tr>";
            $('#oneDishIngredientsList').append(row);
        }

        container.find("#oneDishNumberOfGuest").html(model.getNumberOfGuests());

        row = "<tr>";
        row += "<td>SEK</td>";
        row += "<td>" + model.getPriceForDish(dish.id) + "</td>";
        row += "</tr>";
        $('#oneDishTotalPrice').append(row);
    }
};

