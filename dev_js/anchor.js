//Set the object
var ANCHOR = ANCHOR || {};

(function (ANCHOR) {
    $.extend(ANCHOR, {
        //default variables
        speed : 1000,

        scrollToAnchor: function (id){
            //Set variables
            var aTag = $("section.anchor_intro"),
            nav_height = $('nav.sub_nav').height();
            //Smooth scroll to object minus the navigation height
            $('html,body').animate({scrollTop: (aTag.offset().top-nav_height)},'slow');
        },

        init: function (){
            $('.scroll_obj span').click(function() {
                //Get the id of the attribute
                var id = $(this).attr('id');
                //Scroll to object by ID
                ANCHOR.scrollToAnchor('id');
            });    
        },

        readyFunc: function (){
            ANCHOR.init();
        }

    });
})(ANCHOR);

$(document).ready ( ANCHOR.readyFunc );