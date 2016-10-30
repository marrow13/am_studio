var DECENTTHEMES = DECENTTHEMES || {};
!function (a) {
    "use strict";
    DECENTTHEMES.initialize = {
        init: function () {
            DECENTTHEMES.initialize.defaults(), DECENTTHEMES.initialize.sectionCustomize(), DECENTTHEMES.initialize.swiperInit(), DECENTTHEMES.initialize.isotopeInit(), DECENTTHEMES.initialize.gmap3(), DECENTTHEMES.initialize.parallaxBGImg(), DECENTTHEMES.initialize.parallaxBGVdo(), DECENTTHEMES.initialize.navigationBar(), DECENTTHEMES.initialize.sectionSwitch(), DECENTTHEMES.initialize.contactForm()
        }, defaults: function () {
            if ((new WOW).init(), a("a.lightbox").lightbox(), (window.innerHeight < 600 || window.innerWidth < 600) && a("#header").addClass("scrolled"), a(window).load(function () {
                    a(".loader").fadeOut(), a("#preloader").delay(350).fadeOut("slow")
                }), a("#back-to-top").length) {
                var t = window.innerHeight, i = function () {
                    var i = a(window).scrollTop();
                    i > t ? a("#back-to-top").addClass("show") : a("#back-to-top").removeClass("show")
                };
                i(), a(window).on("scroll", function () {
                    i()
                }), a("#back-to-top").on("click", function (t) {
                    t.preventDefault(), a("html,body").animate({scrollTop: 0}, 700)
                })
            }
            a("video,audio").mediaelementplayer()
        }, skillBars: function () {
            a(".dt-progress > span").each(function () {
                var t = a(this).data("amount");
                a(this).animate({width: t}, 500)
            })
        }, sectionCustomize: function () {
            function t(t) {
                a(t).each(function () {
                    if ("[data-padding]" === t)var i = {padding: a(this).data("padding")}; else if ("[data-padding-top]" === t)var i = {paddingTop: a(this).data("padding-top")}; else if ("[data-padding-right]" === t)var i = {paddingRight: a(this).data("padding-right")}; else if ("[data-padding-bottom]" === t)var i = {paddingBottom: a(this).data("padding-bottom")}; else if ("[data-padding-left]" === t)var i = {paddingLeft: a(this).data("padding-left")};
                    a(this).css(i)
                })
            }

            function i(t) {
                a(t).each(function () {
                    if ("[data-margin]" === t)var i = {margin: a(this).data("margin")}; else if ("[data-margin-top]" === t)var i = {marginTop: a(this).data("margin-top")}; else if ("[data-margin-right]" === t)var i = {marginRight: a(this).data("margin-right")}; else if ("[data-margin-bottom]" === t)var i = {marginBottom: a(this).data("margin-bottom")}; else if ("[data-margin-left]" === t)var i = {marginLeft: a(this).data("margin-left")};
                    a(this).css(i)
                })
            }

            a("[data-bg-color]").each(function () {
                var t = a(this).data("bg-color");
                a(this).css({backgroundColor: t})
            }),
                a("[data-bg-image]").each(function () {
                var t = a(this).data("bg-image");
                a(this).css({backgroundImage: "url(" + t + ")"})
            }),
                t("[data-padding]"), t("[data-padding-top]"), t("[data-padding-right]"), t("[data-padding-bottom]"), t("[data-padding-left]"), i("[data-margin]"), i("[data-margin-top]"), i("[data-margin-right]"), i("[data-margin-bottom]"), i("[data-margin-left]"), a(".background-video").background()
        }, swiperInit: function () {
            a('[data-carousel="swiper"]').each(function () {
                function t(t, i) {
                    var n = function () {
                        a(t + " .swiper-slide-active [data-animate]").each(function () {
                            var t = a(this).data("animate"), i = a(this).data("delay"), n = a(this).data("duration");
                            a(this).addClass(t + " animated").css({
                                webkitAnimationDelay: i,
                                animationDelay: i,
                                webkitAnimationDuration: n,
                                animationDuration: n
                            }).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                a(this).removeClass(t + " animated")
                            })
                        })
                    };
                    n(), i.on("SlideChangeStart", function () {
                        a(f + " [data-animate]").each(function () {
                            var t = a(this).data("animate");
                            a(this).removeClass(t + " animated")
                        })
                    }), i.on("SlideChangeEnd", n)
                }

                var i = a(this).find('[data-swiper="container"]').attr("id"), n = a(this).find('[data-swiper="pagination"]').attr("id"), e = a(this).find('[data-swiper="prev"]').attr("id"), o = a(this).find('[data-swiper="next"]').attr("id"), d = a(this).data("items"), s = a(this).data("loop"), r = a(this).data("center"), c = a(this).data("effect"), l = a(this).data("direction"), u = a(this).data("autoplay"), p = a(this).data("breakpoints"), m = a(this).data("initial"), h = (window.innerWidth, {});
                if (d && (h.slidesPerView = d), r && (h.centeredSlides = r), s && (h.loop = s), m && (h.initialSlide = m), c && (h.effect = c), u && (h.autoplay = u), l && (h.direction = l), e && (h.prevButton = "#" + e), o && (h.nextButton = "#" + o), o && (h.nextButton = "#" + o), n && (h.pagination = "#" + n, h.paginationClickable = !0), p && (h.breakpoints = p), i) {
                    var f = "#" + i, g = new Swiper(f, h);
                    t(f, g)
                }
            })
        }, countUp: function () {
            a("[data-countup]").each(function () {
                var t = a(this).data("countup"), i = {
                    useEasing: !0,
                    useGrouping: !0,
                    separator: "",
                    decimal: "",
                    prefix: "",
                    suffix: ""
                }, n = new CountUp(this, 0, t, 0, 2, i);
                n.start()
            })
        }, isotopeInit: function () {
            a('[data-area="isotope"]').each(function () {
                var t = "#" + a(this).find('[data-isotope="container"]').attr("id"), i = "#" + a(this).find('[data-isotope="filters"]').attr("id"), n = a(t).isotope({
                    itemSelector: ".grid-item",
                    masonry: {columnWidth: 2}
                });
                a(i).on("click", "button", function () {
                    var t = a(this).attr("data-filter");
                    n.isotope({filter: t})
                })
            }), a(".button-group").each(function (t, i) {
                var n = a(i);
                n.on("click", "button", function () {
                    n.find(".active").removeClass("active"), a(this).addClass("active")
                })
            })
        }, gmap3: function () {
            function t() {
                return "ontouchstart"in document.documentElement
            }

            function i(i, n, e, o) {
                if ("undefined" != typeof google) {
                    var d = {
                        center: [n, e],
                        zoom: 15,
                        mapTypeControl: !0,
                        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                        navigationControl: !0,
                        scrollwheel: !1,
                        streetViewControl: !0
                    };
                    t() && (d.draggable = !1), a(i).gmap3({
                        map: {options: d},
                        marker: {latLng: [n, e], options: {icon: o}}
                    })
                }
            }

            a(".gmap3-area").each(function () {
                var t = a(this).data("lat"), n = a(this).data("lng"), e = a(this).data("img"), o = a(this);
                i(o, t, n, e)
            }), a('[data-area="map"]').each(function () {
                var t = a(this).find(".gmap3-section"), i = a(this).find('[data-toogle="map"]');
                a(i).click(function () {
                    a(t).toggleClass("full")
                })
            })
        }, parallaxBGImg: function () {
            a('[data-parallax="image"]').each(function () {
                var t = a(this).position().top, i = (a(this).data("parallax-speed"), t - a(window).scrollTop()), n = -(i / 2), e = n + "px";
                a(this).css({backgroundPosition: "50% " + e})
            })
        }, parallaxBGVdo: function () {
            a('[data-parallax="video"]').each(function () {
                var t = a(this).position().top, i = t - a(window).scrollTop(), n = -(i / 2), e = n + "px";
                a(this).find(".fs-background-media").css({top: e})
            })
        }, header: function () {
            window.innerHeight < 600 || window.innerWidth < 600 ? a("#header").addClass("scrolled") : a(window).scrollTop() > 10 ? a("#header").addClass("scrolled") : a("#header").removeClass("scrolled")
        }, navigationBar: function () {
            a("#nav-trigger").click(function () {
                a("#top-menu").toggleClass("active"), a("#mobile-menu").toggleClass("active"), a("#top-menu .menu-items").removeClass("active"), a("#top-menu .menu-items").delay(50).queue(function () {
                    a(this).addClass("active").clearQueue()
                })
            }), a(".has-submenu").hover(function () {
                a(this).toggleClass("active")
            })
        }, sectionSwitch: function () {
            a('[data-type="section-switch"]').click(function () {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var t = a(this.hash);
                    if (t = t.length ? t : a("[name=" + this.hash.slice(1) + "]"), t.length)return a("html,body").animate({scrollTop: t.offset().top}, 1e3), !1
                }
            })
        }, contactForm: function () {
            a(".dt-contact-form-ajax").each(function () {
                var t = a(this);
                t.submit(function () {
                    t.find('button[type="submit"]').addClass("clicked");
                    var i = a(this).attr("action");
                    return a.ajax({
                        url: i,
                        type: "POST",
                        data: {
                            action: t.attr("action"),
                            name: t.find('input[name="name"]').val(),
                            email: t.find('input[name="email"]').val(),
                            messages: t.find('textarea[name="messages"]').val()
                        },
                        success: function (a) {
                            t.find(".dt-ajax-response").html(a).addClass("success").css("display", "block"), t.find('button[type="submit"]').removeClass("clicked")
                        },
                        error: function () {
                            t.find(".dt-ajax-response").html("Sorry, an error occurred.").addClass("error").css("display", "block"), t.find('button[type="submit"]').removeClass("clicked")
                        }
                    }), !1
                })
            })
        }
    }, DECENTTHEMES.documentOnReady = {
        init: function () {
            DECENTTHEMES.initialize.init()
        }
    }, DECENTTHEMES.documentOnResize = {
        init: function () {
            DECENTTHEMES.initialize.swiperInit()
        }
    }, DECENTTHEMES.documentOnScroll = {
        init: function () {
            DECENTTHEMES.initialize.header(), DECENTTHEMES.initialize.parallaxBGImg(), DECENTTHEMES.initialize.parallaxBGVdo()
        }
    }, a(document).ready(DECENTTHEMES.documentOnReady.init), a(document).on("scroll", DECENTTHEMES.documentOnScroll.init), a("#site-stats").appear(function () {
        DECENTTHEMES.initialize.countUp()
    }, {accX: 0, accY: -300}), a(".skill-items").appear(function () {
        DECENTTHEMES.initialize.skillBars()
    }, {accX: 0, accY: -300})
}(jQuery);