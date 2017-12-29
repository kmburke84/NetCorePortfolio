/**
 * Created with IntelliJ IDEA.
 * User: Coach-Lap
 * Date: 8/16/14
 * Time: 9:00 PM
 * To change this template use File | Settings | File Templates.
 */


$( ".draggable" ).draggable({ snapMode: "both" });
            var snapMode = $(".draggable").draggable("option", "snapMode");
            $(".draggable").draggable("option", "snapMode","inner" );


$("#droppable").droppable({
    drop: function (event, ui) {
         console.log("icon was dragged");

        // $(this.class).find("a img").attr('src');
        }
    });
//
//$(".droppable").droppable({ hoverClass: "droppable"})
//           var activeClass = $(".droppable").droppable("option","hoverClass");
//           $(".droppable").droppable("option", "hoverClass", "customContentPage");

