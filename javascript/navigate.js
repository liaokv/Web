$(document).ready(function(){
    $("#pl1").click(function(){
        $(".pp1").fadeIn("slow");
		$("#backarrow").fadeIn("slow");
    });
});

$(document).ready(function(){
    $("#pl2").click(function(){
        $(".pp2").fadeIn("slow");
		$("#backarrow").fadeIn("slow");
    });
});

$(document).ready(function(){
    $("#pl3").click(function(){
        $(".pp3").fadeIn("slow");
		$("#backarrow").fadeIn("slow");
    });
});

$(document).ready(function(){
    $("#backarrow").click(function(){
		$(".pp1").fadeOut("slow");
        $(".pp2").fadeOut("slow");
		$(".pp3").fadeOut("slow");
		$("#backarrow").fadeOut("slow");
    });
});