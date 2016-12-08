(function ($) {
    
    /**
     * Header
     * @author: @esr360
     */
    $.fn.header = function(custom) {
        
        // Options
        var options = $.extend({
            stickyOffset: 600
        }, custom);
        
        // Run the code on each occurance of the element
        return this.each(function() {

            var header = $(this);
            var stickyOffset   = options.stickyOffset || header.offset().top;
   
            $(window).on('load scroll', function(e) {
                var scroll = $(window).scrollTop();
                if (scroll > stickyOffset) {
                    header.fadeIn(400);
                } else {
                    header.fadeOut(400);
                }
            });
                
        }); // this.each
 
    }; // scrollSpy()
 
}(jQuery));