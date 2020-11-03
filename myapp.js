var shown=false;

$(".btn").on("click", function(){
    if (shown){$("#sideNav").addClass("hide");
    shown=false;
    }
    else{
        $("#sideNav").removeClass("hide");
        shown=true;
    }
    
})