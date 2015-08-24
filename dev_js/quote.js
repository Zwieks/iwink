//Set the object
var QUOTE = QUOTE || {};

(function (QUOTE) {
    $.extend(QUOTE, {
        //default variables
        speed : 200,
        degree : 180,
        count : 0,

        AnimateRotate: function (c,d,elem){
            $({deg: c}).animate({deg: d}, {
                duration: QUOTE.speed,
                step: function(now){
                    elem.css({
                         transform: "rotate(" + now + "deg)"
                    });
                }
            });
        },

        init: function (){
            $('button.show_quote').click(function() {
                var degree = QUOTE.count+QUOTE.degree;
                //Get the element
                var element = $(this).parent().parent().find('blockquote');
                //Show the blockqoute
                element.slideToggle( QUOTE.speed, "linear" );
                //Turn the arrow
                var rotate_element = $(this).children('span');
                //Call rotate function
                QUOTE.AnimateRotate(QUOTE.count,degree,rotate_element);
                //Double the animation degree
                QUOTE.count += QUOTE.degree;
            });
        },

        readyFunc: function (){
            QUOTE.init();
        }

    });
})(QUOTE);

$(document).ready ( QUOTE.readyFunc );