//Set the object
var SLIDE_MENU = SLIDE_MENU || {};

(function (SLIDE_MENU) {
    $.extend(SLIDE_MENU, {
        //default variables
        speed : 500,
        visable: false,
        offset: 0,
        header_heigt: 0,

        scroll_offset: function (){
            //Get the fixed header height
            SLIDE_MENU.header_heigt = $('nav.sub_nav').height();
            //Scroll offset of the body element
            var offset = $(window).scrollTop();

            return offset;
        },

        show_menu: function (){
            //Get the scroll offset
            SLIDE_MENU.offset = SLIDE_MENU.scroll_offset();
            //Set the current scroll position fixed
            $('body').css({'top':-SLIDE_MENU.offset});
            
            //Hide the navigation and set the visable to true
            $("nav.sub_nav").parent().removeClass('fixed_header');
            HEADER.visable = true;

            //Slide body to right
            $('body').animate({
                left: '15em'
                }, SLIDE_MENU.speed, function() {

            });
            //Slide menu in
            $('#slide_menu').animate({
                left:0
                }, SLIDE_MENU.speed, function() {

            }); 
            //Set the HTML on fixed 
            $('html').css({'position':'fixed'});
            //Set visable on true
            SLIDE_MENU.visable = true;          
        },

        hide_menu: function (){
            var ftop = $(window).scrollTop() - $('body').offset().top;
            //Slide body to left
            $('body').animate({
                left: 0
                }, SLIDE_MENU.speed, function() {

            });
            //Slide menu out
            $('#slide_menu').animate({
                left:'-15em'
                }, SLIDE_MENU.speed, function() {

            });
            //Remove the inline styles
            $('html').css({'position':''});
            $('body').css({'top':''});
            //Get the scroll offset
            $("html, body").scrollTop(ftop);
            //Show the navigation
            HEADER.calc_offset();
            
            //Set visable on false
            SLIDE_MENU.visable = false;
        },

        init: function (){
            $('#small_menu').click(function() {
                //Show the dark overlay
                $('div.darken').show();
                //Animate the slide menu for phone
                SLIDE_MENU.show_menu();
            });

            $('.darken').click(function(){
                //Hide the slide menu
                if(SLIDE_MENU.visable == true){
                    SLIDE_MENU.hide_menu();
                    //Hide the dark overlay
                    $('div.darken').hide();
                }
            });
        },

        readyFunc: function (){
            SLIDE_MENU.init();
        }

    });
})(SLIDE_MENU);

$(document).ready ( SLIDE_MENU.readyFunc );