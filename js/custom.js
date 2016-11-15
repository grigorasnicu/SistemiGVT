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

});// end of document ready