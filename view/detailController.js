var DetailController = function (view, model) {

    view.confirmDinnerButton.click(function () {
        var id = $(this).attr("value");
        model.addDishToMenu(id);
        $("#detailView").hide();
        $("#searchArea").show();
        $("#selectDishView").show();
    });

    view.backToSelectButton.click(function(){
        $("#detailView").hide();
        $("#searchArea").show();
        $("#selectDishView").show();
    });
};