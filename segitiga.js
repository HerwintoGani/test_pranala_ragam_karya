exports.generateSegitiga = function (data){
	//var data = $("#text").val();
	var text = "";
	var j = 1;
	for (let i = 0; i < data.length; i++)
	{
		text += data[i];
		for(let j = 0; j < i+1; j++)
		{
			text +="0";
		}
		text += "<BR>";
	}
	return
}