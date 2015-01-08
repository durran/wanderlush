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
