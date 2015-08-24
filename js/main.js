var ANCHOR = ANCHOR || {};

!function(a) {
    $.extend(a, {
        speed: 1e3,
        scrollToAnchor: function(a) {
            var b = $("section.anchor_intro"), c = $("nav.sub_nav").height();
            $("html,body").animate({
                scrollTop: b.offset().top - c
            }, "slow");
        },
        init: function() {
            $(".scroll_obj span").click(function() {
                $(this).attr("id");
                a.scrollToAnchor("id");
            });
        },
        readyFunc: function() {
            a.init();
        }
    });
}(ANCHOR), $(document).ready(ANCHOR.readyFunc);

var HEADER = HEADER || {};

!function(a) {
    $.extend(a, {
        speed: 1e3,
        visable: !0,
        init: function() {},
        extend_border: function() {
            $("nav.sub_nav").parent().css({
                top: "-100%"
            }), $("nav.sub_nav span.border").css({
                "margin-left": "0",
                "margin-right": "0"
            }), $("nav.sub_nav").css({
                "background-color": "rgba(255,255,255,0.95)"
            }), $("#small_menu,nav.sub_nav a, div.form_group span").css({
                color: "red"
            }), $("nav.sub_nav a.img_wrapper_small").show(), $("nav.sub_nav").parent().animate({
                top: "0"
            }, 800, "linear"), a.visable = !1;
        },
        remove_border: function() {
            $("nav.sub_nav").css({
                "background-color": "rgba(255,255,255,0)"
            }), $("#small_menu,nav.sub_nav a, div.form_group span").css({
                color: "white"
            }), $("nav.sub_nav a.img_wrapper_small").hide(), $("nav.sub_nav span.border").animate({
                "margin-left": "112px",
                "margin-right": "112px"
            }, 100, "linear"), a.visable = !0;
        },
        calc_offset: function() {
            var b = $(document).scrollTop(), c = $("header nav.main_nav").height();
            console.log(a.visable), b > c && 1 == a.visable ? ($("nav.sub_nav").parent().addClass("fixed_header"), 
            a.extend_border()) : c >= b && 0 == a.visable && ($("nav.sub_nav").parent().removeClass("fixed_header"), 
            a.remove_border());
        },
        readyFunc: function() {
            a.init();
        }
    });
}(HEADER), $(window).scroll(HEADER.calc_offset), $(document).ready(HEADER.readyFunc);

var QUOTE = QUOTE || {};

!function(a) {
    $.extend(a, {
        speed: 200,
        degree: 180,
        count: 0,
        AnimateRotate: function(b, c, d) {
            $({
                deg: b
            }).animate({
                deg: c
            }, {
                duration: a.speed,
                step: function(a) {
                    d.css({
                        transform: "rotate(" + a + "deg)"
                    });
                }
            });
        },
        init: function() {
            $("button.show_quote").click(function() {
                var b = a.count + a.degree, c = $(this).parent().parent().find("blockquote");
                c.slideToggle(a.speed, "linear");
                var d = $(this).children("span");
                a.AnimateRotate(a.count, b, d), a.count += a.degree;
            });
        },
        readyFunc: function() {
            a.init();
        }
    });
}(QUOTE), $(document).ready(QUOTE.readyFunc);

var SLIDE_MENU = SLIDE_MENU || {};

!function(a) {
    $.extend(a, {
        speed: 500,
        visable: !1,
        offset: 0,
        header_heigt: 0,
        scroll_offset: function() {
            a.header_heigt = $("nav.sub_nav").height();
            var b = $(window).scrollTop();
            return b;
        },
        show_menu: function() {
            a.offset = a.scroll_offset(), $("body").css({
                top: -a.offset
            }), $("nav.sub_nav").parent().removeClass("fixed_header"), HEADER.visable = !0, 
            $("body").animate({
                left: "15em"
            }, a.speed, function() {}), $("#slide_menu").animate({
                left: 0
            }, a.speed, function() {}), $("html").css({
                position: "fixed"
            }), a.visable = !0;
        },
        hide_menu: function() {
            var b = $(window).scrollTop() - $("body").offset().top;
            $("body").animate({
                left: 0
            }, a.speed, function() {}), $("#slide_menu").animate({
                left: "-15em"
            }, a.speed, function() {}), $("html").css({
                position: ""
            }), $("body").css({
                top: ""
            }), $("html, body").scrollTop(b), HEADER.calc_offset(), a.visable = !1;
        },
        init: function() {
            $("#small_menu").click(function() {
                $("div.darken").show(), a.show_menu();
            }), $(".darken").click(function() {
                1 == a.visable && (a.hide_menu(), $("div.darken").hide());
            });
        },
        readyFunc: function() {
            a.init();
        }
    });
}(SLIDE_MENU), $(document).ready(SLIDE_MENU.readyFunc);