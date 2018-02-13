$set = $('.colorButton')

$set.on('click keypress', function(event){
	 $(".brushBox").css("background-color", $('input').val());
})

$('input').on('keypress', function(e) {
    var code = e.keyCode || e.which;
    if(code==13){
        $(".brushBox").css("background-color", $('input').val());
    }
});

for(var i = 0; i < 100; i++){
	$('body').append('<div class="square">Hello</div>');  
}

$('.square').on('mouseover', function(){
	$(this).css("background-color", $("input").val())
})

	

	// OMDB Section	
$('.movieButton').on('click',function(){
	$inputValue = $('.movieInput').val()
	var options = {
		url: 'http://www.omdbapi.com/?apikey=2f6435d9&s=' + $inputValue
	};

	
	$.ajax(options).done(function(response){	
			
	   response.Search.forEach(function(movie){
			
			$( ".container" ).append('<img src= ' + movie.Poster + '>');
			})
	})
})