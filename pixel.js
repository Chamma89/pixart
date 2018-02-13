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

$('.square').on('click', function(){
	$(this).css("background-color", "green")
	console.log("Test");
})