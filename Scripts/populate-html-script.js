// $(document).ready(function(){
// 	$(".populated-content").hide();
// })


function show_content(id){
	$("#populate-html-content").children().hide();
	$("#side-nav").empty();
	switch(id){
		case 0:
			$("#content-trait").css('opacity','1');
			$("#content-trait").show();
			$("#side-nav").append("Content Traits");
		break;

		case 1:
			$("#dimensionality").css('opacity','1');
			$("#dimensionality").show();
			$("#side-nav").append("Content Traits&ensp;>&ensp;Dimensionality");
		break;

		case 2:
			$("#two-dimensions").css('opacity','1');
			$("#two-dimensions").show();
			$("#side-nav").append("Content Traits&ensp;>&ensp;Dimensionality&ensp;>&ensp;Two Dimensions");
		break;

	}
}