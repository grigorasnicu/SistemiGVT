/**
 * Created by kode.vreative on 14-Nov-16.
 */

$(document).ready(function(){

    //Call Button =========================

    function show_button() {
        $('#call_button').show();
    }
    setTimeout(show_button, 3000);



    // Scrollspy
    $('.scrollspy').scrollSpy();

    //modal
    $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute

    });
    $('.modal-clos').closeModal();



});// end of document ready