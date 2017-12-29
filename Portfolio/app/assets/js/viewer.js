/**
 * Created with IntelliJ IDEA.
 * User: Kevin Burke
 * Date: 8/16/14
 * Time: 9:00 PM
 */
$(function () {
    $(".draggable").draggable({containment: 'document',
        revert: true, snap: true, snapMode: "inner"});

    $("#droppable").droppable({
        accept: ".draggable",
        drop: function (event, ui) {

            var href = ui.draggable.find('img').prop('src');
            console.log(ui);
            
            var getThumbID = ui.draggable.data('file');
            var cssChangeClass = $("#" + getThumbID);
//            var selectDragNotCurrent = $("description")
//                .select
//                .not(ui.draggable).toggle();

            if (ui.draggable) {
                cssChangeClass.toggle(function () {
                    $(cssChangeClass).css({
                        display: "block"
                    });


                });
            }



            $("#droppable").css('background-image', 'url(' + href + ')');

            console.log(ui.draggable.data('file'));
        }

    });
});
