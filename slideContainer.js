/*
	jQuery Code v1.0.0  2013-05-30
	(c) 2013 Korori - korori-gaming.com
	license: http://www.opensource.org/licenses/mit-license.php
*/

(function($){
/*
		Gallery Slide
	*/
    $.fn.SlideContainer = function (interval, id) {
        var slides;
        var amount;
        var i;

        function run() {
            $(slides[i]).fadeOut(1000);
            i++;
            if (i >= amount) i = 0;
            $(slides[i]).fadeIn(1000);
            setTimeout(run, interval);
        }

        slides = $('#' + id).children();
        i = 0;
        amount = slides.length;
        setTimeout(run, interval);
    };
    
    }(jQuery));
