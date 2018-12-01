$(document).ready(function(){
	$('a').click(function(event){
		if ($(this).attr('id').length){
	    event.preventDefault();
	    var idValue = parseInt($(this).attr('id'));
	    show_content(idValue);
  	}
  });  
})

function show_content(id){
	$("#populate-html-content").children().hide();
	$("#side-nav").empty();
	switch(id){
		case 0:
			$("#content-attribute").css('opacity','1');
			$("#content-attribute").show();
			$("#side-nav").append("Content Attributes");
		break;

		case 1:
			$("#dimensionality").css('opacity','1');
			$("#dimensionality").show();
			$("#side-nav").append("Content Attributes&ensp;>&ensp;Dimensionality");
		break;

		case 2:
			$("#two-dimensions").css('opacity','1');
			$("#two-dimensions").show();
			$("#side-nav").append("Content Attributes&ensp;>&ensp;Dimensionality&ensp;>&ensp;Two Dimensions");
		break;

		case 3:
			$("#three-dimensions").css('opacity','1');
			$("#three-dimensions").show();
			$("#side-nav").append("Content Attributes&ensp;>&ensp;Dimensionality&ensp;>&ensp;Three Dimensions");
		break;

		case 4:
			$("#origin").css('opacity','1');
			$("#origin").show();
			$("#side-nav").append("Content Attributes&ensp;>&ensp;Origin");
		break;

		case 5:
			$("#omnipresent").css('opacity','1');
			$("#omnipresent").show();
			$("#side-nav").append("Content Attributes&ensp;>&ensp;Origin&ensp;>&ensp;Omnipresent");
		break;

		case 6:
			$("#manual").css('opacity','1');
			$("#manual").show();
			$("#side-nav").append("Content Attributes&ensp;>&ensp;Origin&ensp;>&ensp;Manual");
		break;

		case 7:
			$("#procedural").css('opacity','1');
			$("#procedural").show();
			$("#side-nav").append("Content Attributes&ensp;>&ensp;Origin&ensp;>&ensp;Procedural");
		break;
	}
}