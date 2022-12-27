
$(document).ready(function(){
$("#fees").click(function(){


        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");


        $("#panel").slideDown("slow");
    });
    $("#aff").click(function(){
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
            $("#panel2").slideDown("slow");
        });

        $("#loc").click(function(){
            $("#panel").slideUp("slow");
            $("#panel2").slideUp("slow");
            $("#panel4").slideUp("slow");
                $("#panel3").slideDown("slow");

            });


            $("#site").click(function(){
                $("#panel").slideUp("slow");
                $("#panel3").slideUp("slow");
                $("#panel2").slideUp("slow");
                    $("#panel4").slideDown("slow");
                });

});
