//Set the object
var HEADER = HEADER || {};

(function (HEADER) {
    $.extend(HEADER, {
        //default variables
        speed : 1000,
        visable: true,

        init: function (){
         
        },

        extend_border: function (){
            $("nav.sub_nav").parent().css({'top':'-100%'});
            $("nav.sub_nav span.border").css({'margin-left': '0','margin-right': '0'});
            $("nav.sub_nav").css({'background-color': 'rgba(255,255,255,0.95)'});
            //Change the color
            $("#small_menu,nav.sub_nav a, div.form_group span").css({'color':'red'});
            //show logo
            $("nav.sub_nav a.img_wrapper_small").show();
            $("nav.sub_nav").parent().animate({'top': '0'},800,'linear');
            HEADER.visable = false;
        },

        remove_border: function (){
            $("nav.sub_nav").css({'background-color': 'rgba(255,255,255,0)'});
            $("#small_menu,nav.sub_nav a, div.form_group span").css({'color':'white'});
            //show logo
            $("nav.sub_nav a.img_wrapper_small").hide();            
            $("nav.sub_nav span.border").animate({'margin-left': '112px','margin-right': '112px'},100,'linear');
            HEADER.visable = true;
        },

        calc_offset: function(){
            //Set variables
            var scr_offset = $(document).scrollTop(),
            header_height = $("header nav.main_nav").height();
            console.log(HEADER.visable);
            //Check if the user is scrolling if so add class
            if(scr_offset>header_height && HEADER.visable == true){
                $("nav.sub_nav").parent().addClass('fixed_header');
                HEADER.extend_border();
            }
            else if(scr_offset<= header_height && HEADER.visable == false){
                $("nav.sub_nav").parent().removeClass('fixed_header');
                HEADER.remove_border();
            }
        },

        readyFunc: function (){
            HEADER.init();
        }

    });
})(HEADER);

$(window).scroll(HEADER.calc_offset);
$(document).ready ( HEADER.readyFunc );