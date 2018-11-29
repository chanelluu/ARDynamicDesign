function show_content(id,parent){

	
	var transform = {"<>":"p","class":"${stylesid}","html":"${contentname}"};

	var data = [
		{'stylesid':'explore-title','contentname':id},
		{'stylesid':'explore-body','contentname':parent}
	];

	// var transform = {'<>':'div','text':'${title}'};

	// var data = [
	// 	{'title':parent},
 //    {'title':id}
	// ];
	$("#populate-html-content").empty();
	$("#populate-html-content").json2html(data,transform);
}