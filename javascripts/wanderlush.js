(function($) {

  /*
   * Lazy load's the background images of the provided elements to full size
   * and cover.
   */
  $.fn.lazyLoad = function() {
    this.each(function() {
      var div = $(this);
      var data = div.attr("data");
      div.css("background-image", "url(" + data + ")");
    });
  };
}(jQuery));

/*
 * Behaviour that the site actual implements here.
 */
$(document).ready(function() {

  /*
   * Lazy load all images in the large and small boxes.
   */
  $(".large-box, .small-box").lazyLoad();

  /*
   * All bar name boxes show the bar information and review box overlay
   * when clicked.
   */
  $(".bar-container").click(function() {
    var content = $(this).find(".content-box");
    var display = $(content).css("visibility");
    if (display == "hidden") {
      $(content).css("visibility", "visible");
    }
    else {
      $(content).css("visibility", "hidden");
    }
  });
});
