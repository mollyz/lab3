var SelectDishView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
    this.courseType = container.find("#courseType");

	this.allDishes = container.find("#allDishes");

	console.log(courseTemp);
	var myDishes = model.getAllDishes(courseTemp);
    
    var html = "";
    console.log(myDishes);
	for (i = 0; i < myDishes.length; i++) { 
		html += "<div class='floating-box' ><div><img onclick='seedetail();'class='borderAll' src='./images/"+myDishes[i].image
					+"' alt='"+myDishes[i].name+"'></div><div class='textMiddle'>"+myDishes[i].name
					+"</div><div style='padding: 5px;'>"+myDishes[i].description+"</div></div>";
    }
	console.log(html);
	$(".allDishes").html(html);
}

function changevalue(){
	courseTemp=$("#courseType").find('option:selected').val();
	searchArea($("#searchArea"),model);
	SelectDishView($("#selectDishView"),model);
}
