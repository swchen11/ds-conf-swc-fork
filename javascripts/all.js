window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

$(function() {
  $(".main-content").click(function(){
    $(".page").removeClass("show-menu");
  });
  $(".menu-button").click(function(){
    $(".page").toggleClass("show-menu");
    return false;
  });

  function resize_box() {
      $(window).resize(function() {
          $.colorbox.resize({
              width: $(window).width(),
              height: $(window).height()
          });
      });
  }

  function stop_resize_box() {
      $(window).unbind('resize');
  }

  $('a.lightbox').on('click', function() {
        $.colorbox({
            opacity: 0.85,
            fixed: true,
            initialWidth: '200px',
            initialHeight: '200px',
            width: '100%',
            height: '100%',
            inline: true,
            href: $(this).attr('href'),
            onOpen: resize_box,
            onClosed: stop_resize_box
        });
        return false;
  });
});

// google map API
function buildMap(lat, lng, id, popcontent) {
    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(id), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
    });

    var infowindow = new google.maps.InfoWindow({
      content: popcontent
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', buildMap(25.0422145,121.6141917, "google-map", "中央研究院"));






























































console.log('看三小!? 這麼愛看人家內褲請參加 http://hitcon.org/2013/wargame/')
console.log("HITCON，尖端科技的結晶，是一場人性化的萬能研討會。出現在我們這個無奇不有的世界。霹靂駭客艾倫翁，刀槍不入，無所不能，充滿正義感，是一個英勇的資訊自由鬥士。他以無比的勇氣，超人的智慧，打擊網路犯罪，拯救善良無助的受害者。")
console.log("🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊")
