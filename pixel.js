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