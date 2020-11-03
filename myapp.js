var shown=false;
var hm=false;
var work,bf,cnt=false;

$(document).ready(function(){
    $(".btn").on("click", function(){
        if (shown){$("#sideNav").addClass("hide");
        shown=false;
        }
         else {
             $("#sideNav").removeClass("hide");
            shown=true;
         }
    });
// if the portfolio is selected
 $("#portfolio").on("click",function(){
 if (!work){$("#about").addClass("hide");
 $("#contacto").addClass("hide");
 $("#folio").removeClass("hide");
var work=true;
 var bf,hm,cnt=false;
 }
});
// if contact is selected then hide portfolio and contact info
 $("#contact").on("click",function(){
     if (!cnt){$("#about").addClass("hide");
     $("#folio").addClass("hide");
     $("#contacto").removeClass("hide");
  var   cnt=true;
  var  bf,hm,work=false;
     }
     });
    //  if the about is selected then hide everything else 
    $("#casa").on("click",function(){
        console.log(hm);
        if (!hm){$("#about").removeClass("hide");
        $("#folio").addClass("hide");
        $("#contacto").addClass("hide");
        var work=true;
        var bf,hm,cnt=false;
        }
        });





}); // this is the closing of the main function 

