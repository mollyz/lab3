var SideNavView = function(container, model){
	model.addObserver(this);
    this.model = model;
    this.container = container;
    this.plusButton = container.find("#plusGuest");
    this.minusButton = container.find("#minusGuest");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.myMenu = container.find("#myMenu");
    this.confirmDinnerButton= container.find("#confirmDinnerButton");


    this.myMenu = function () {
        
        $('#myMenu').html(" ");

        var menu = model.getFullMenu();
        var row = "<tr><td>Dish Name</th><th>Cost</th><th></th></tr>";
        $('#myMenu').append(row);

        for (var i = 0; i < menu.length; i++) {
            row = "<tr class='menuRow'>";
            row += "<td><p class='nameCol'>" + menu[i].name + "</p></td>";
            row += "<td><p class='priceCol'>" + model.getPriceForDish(menu[i].id) + "</p></td>";
            row += "<td><img id='"+menu[i].id+"' class='deleteICon' src = images/remove.png></td>";
            row += "</tr>";
            $('#myMenu').append(row);
        }

        this.totalPrice = container.find("#totalPrice");

        this.totalPrice.html(model.getTotalMenuPrice());
    };

    this.myMenu();
}
