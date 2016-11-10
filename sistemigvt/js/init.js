(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready

  //Carousel

  $('.slider').slider({full_width: true});

})(jQuery); // end of jQuery name space


// Map

function initMap() {
  var uluru = {lat: 45.422016, lng: 11.890598};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}