/*
 * jQuery centerImages
 * You have to use the imagesLoaded Plugin (https://github.com/desandro/imagesloaded) to use this plugin
 */
(function ($) {
$.fn.centerImages = function() {
  return this.children("img").each(function(i){
    $(this).imagesLoaded(function($images, $proper, $broken) {
      var h = $images.height();
      var oh = $images.outerHeight();
      var w = $images.width()
      var ow = $images.outerWidth();
      var ml = (w + (ow - w)) / 2;
      var mt = (h + (oh - h)) / 2;
      $images.css("cssText", "top: 50%; margin-top: -" + mt + "px; left: 50%; margin-left: -" + ml + "px; position: absolute;");
    });
  });
};
})(jQuery);