$(function () {


    function update() {
        $("h3").text( $(window).width() + " x " + $(window).height() );
    }

    update();
    
    $(window).resize(function () { 
        update(); 
    });


});