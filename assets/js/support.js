// Usage: deskEV('system.snippets.loading')
function deskEV(v) {
    v = v.replace(/\./g, '-');
    return $('#' + v).html();
}

// =====================================================
// Minified Plugins
// =====================================================
/*! jQuery Placeholder Plugin - v0.7.0 - 2012-12-03
 * http://andrew-jones.com/jquery-placeholder-plugin
 * Copyright (c) 2012 Andrew Jones; Licensed MIT */
(function(a) {
    "use strict", a.extend({
        placeholder: {
            settings: {
                focusClass: "placeholderFocus",
                activeClass: "placeholder",
                overrideSupport: !1,
                preventRefreshIssues: !0
            }
        }
    }), a.support.placeholder = "placeholder" in document.createElement("input"), a.fn.plVal = a.fn.val, a.fn.val = function(b) {
        if (typeof b == "undefined") return a.fn.plVal.call(this);
        var c = a(this[0]),
            d = c.plVal(),
            e = a(this).plVal(b);
        return c.hasClass(a.placeholder.settings.activeClass) && d === c.attr("placeholder") ? (c.removeClass(a.placeholder.settings.activeClass), e) : c.hasClass(a.placeholder.settings.activeClass) && c.plVal() === c.attr("placeholder") ? "" : a.fn.plVal.call(this, b)
    }, a(window).bind("beforeunload.placeholder", function() {
        var b = a("input." + a.placeholder.settings.activeClass);
        b.length > 0 && b.val("").attr("autocomplete", "off")
    }), a.fn.placeholder = function(b) {
        return b = a.extend({}, a.placeholder.settings, b), !b.overrideSupport && a.support.placeholder ? this : this.each(function() {
            var c = a(this);
            if (!c.is("[placeholder]")) return;
            if (c.is(":password")) return;
            b.preventRefreshIssues && c.attr("autocomplete", "off"), c.bind("focus.placeholder", function() {
                var c = a(this);
                this.value === c.attr("placeholder") && c.hasClass(b.activeClass) && c.val("").removeClass(b.activeClass).addClass(b.focusClass)
            }), c.bind("blur.placeholder", function() {
                var c = a(this);
                c.removeClass(b.focusClass), this.value === "" && c.val(c.attr("placeholder")).addClass(b.activeClass)
            }), c.triggerHandler("blur"), c.parents("form").submit(function() {
                c.triggerHandler("focus.placeholder")
            })
        })
    }
})(jQuery);
/*!
 * jquery.customSelect() - v0.5.1
 * http://adam.co/lab/jquery/customselect/
 * 2014-04-19
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */
(function(a) {
    a.fn.extend({
        customSelect: function(c) {
            if (typeof document.body.style.maxHeight === "undefined") {
                return this
            }
            var e = {
                    customClass: "customSelect",
                    mapClass: true,
                    mapStyle: true
                },
                c = a.extend(e, c),
                d = c.customClass,
                f = function(h, k) {
                    var g = h.find(":selected"),
                        j = k.children(":first"),
                        i = g.html() || "&nbsp;";
                    j.html(i);
                    if (g.attr("disabled")) {
                        k.addClass(b("DisabledOption"))
                    } else {
                        k.removeClass(b("DisabledOption"))
                    }
                    setTimeout(function() {
                        k.removeClass(b("Open"));
                        a(document).off("mouseup.customSelect")
                    }, 60)
                },
                b = function(g) {
                    return d + g
                };
            return this.each(function() {
                var g = a(this),
                    i = a("<span />").addClass(b("Inner")),
                    h = a("<span />");
                g.after(h.append(i));
                h.addClass(d);
                if (c.mapClass) {
                    h.addClass(g.attr("class"))
                }
                if (c.mapStyle) {
                    h.attr("style", g.attr("style"))
                }
                g.addClass("hasCustomSelect").on("render.customSelect", function() {
                    f(g, h);
                    g.css("width", "");
                    var k = parseInt(g.outerWidth(), 10) - (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10));
                    h.css({
                        display: "inline-block"
                    });
                    var j = h.outerHeight();
                    if (g.attr("disabled")) {
                        h.addClass(b("Disabled"))
                    } else {
                        h.removeClass(b("Disabled"))
                    }
                    i.css({
                        width: k,
                        display: "inline-block"
                    });
                    g.css({
                        "-webkit-appearance": "menulist-button",
                        width: h.outerWidth(),
                        position: "absolute",
                        opacity: 0,
                        height: j,
                        fontSize: h.css("font-size")
                    })
                }).on("change.customSelect", function() {
                    h.addClass(b("Changed"));
                    f(g, h)
                }).on("keyup.customSelect", function(j) {
                    if (!h.hasClass(b("Open"))) {
                        g.trigger("blur.customSelect");
                        g.trigger("focus.customSelect")
                    } else {
                        if (j.which == 13 || j.which == 27) {
                            f(g, h)
                        }
                    }
                }).on("mousedown.customSelect", function() {
                    h.removeClass(b("Changed"))
                }).on("mouseup.customSelect", function(j) {
                    if (!h.hasClass(b("Open"))) {
                        if (a("." + b("Open")).not(h).length > 0 && typeof InstallTrigger !== "undefined") {
                            g.trigger("focus.customSelect")
                        } else {
                            h.addClass(b("Open"));
                            j.stopPropagation();
                            a(document).one("mouseup.customSelect", function(k) {
                                if (k.target != g.get(0) && a.inArray(k.target, g.find("*").get()) < 0) {
                                    g.trigger("blur.customSelect")
                                } else {
                                    f(g, h)
                                }
                            })
                        }
                    }
                }).on("focus.customSelect", function() {
                    h.removeClass(b("Changed")).addClass(b("Focus"))
                }).on("blur.customSelect", function() {
                    h.removeClass(b("Focus") + " " + b("Open"))
                }).on("mouseenter.customSelect", function() {
                    h.addClass(b("Hover"))
                }).on("mouseleave.customSelect", function() {
                    h.removeClass(b("Hover"))
                }).trigger("render.customSelect")
            })
        }
    })
})(jQuery);
/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            } : {
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
                if (void 0 === c || c === !1) return !0;
                if (e = a.split("_"), e.length > 1) {
                    var d = b.find(p + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(p + "-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery",
                    g = Boolean(a.fn.mfpFastClick);
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                            h = g ? "mfpFastClick" : "click";
                        e[h](function() {
                            b.prev()
                        }), f[h](function() {
                            b.next()
                        }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                            b.img.css({
                                "max-width": b.img[0].naturalWidth / c,
                                width: "100%"
                            })
                        }), w("ElementParse." + U, function(b, d) {
                            d.src = a.replaceSrc(d, c)
                        }))
                    }
                }
            }
        }),
        function() {
            var b = 1e3,
                c = "ontouchstart" in window,
                d = function() {
                    v.off("touchmove" + f + " touchend" + f)
                },
                e = "mfpFastClick",
                f = "." + e;
            a.fn.mfpFastClick = function(e) {
                return a(this).each(function() {
                    var g, h = a(this);
                    if (c) {
                        var i, j, k, l, m, n;
                        h.on("touchstart" + f, function(a) {
                            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) {
                                m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                            }).on("touchend" + f, function(a) {
                                d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                    g = !1
                                }, b), e())
                            })
                        })
                    }
                    h.on("click" + f, function() {
                        g || e()
                    })
                })
            }, a.fn.destroyMfpFastClick = function() {
                a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
            }
        }(), A()
});

// =====================================================
// Theme Option Variables
// =====================================================
var currentPage = deskEV('current-page');
var MBSearchPage = deskEV('MBSearchPage');
var MBSearchSuggest = deskEV('MBSearchSuggest');
var MBArticleSuggest = deskEV('MBArticleSuggest');
var SkipPreCreate = deskEV('SkipPreCreate');
var responsiveImages = deskEV('responsiveImages');
// =====================================================
// Index Page
// =====================================================
if (currentPage == 'page_index') {
    if (deskEV('enable_gs') == 'true') {
        //INDEX PAGE/GET SATISFACTION
        setTimeout(function() {
            $("#gs_questions div.topic h5 a").appendTo("#gs_questions div.topic").addClass("btn btn-pill");
            $("#gs_ideas div.topic h5 a").appendTo("#gs_ideas div.topic").addClass("btn btn-pill");
            $("#gs_problems div.topic h5 a").appendTo("#gs_problems div.topic").addClass("btn btn-pill");
            $("#gs_praises div.topic h5 a").appendTo("#gs_praises div.topic").addClass("btn btn-pill");
        }, 3500);
    }
};
// =====================================================
// Article Page
// =====================================================
if (currentPage == 'page_article') {
    //ARTICLE CONTENT ADJUSTMENTS
    if (responsiveImages == 'true') {
        $(".container.article .body.row img").addClass("img-responsive");
        $('.container.article .body.row img').css('width', '');
        $('.container.article .body.row img').css('height', '');
    }
    //ARTICLE RATEBLOCK
    setTimeout(function() {
        $('a.rate.increment').html('<i class="fa fa-thumbs-up"></i>')
        $('a.rate.decrement').html('<i class="fa fa-thumbs-down"></i>')
        $('#blockrate').html('div.answer-rating ')
        if ($('#rate_article_container').css('display') == 'none') {
            $('div.row.rateblock').addClass('hidden');
        }
    }, 500);
    $('div.body.row iframe, div.body.row object, div.body.row video, div.body.row embed').addClass('embed-responsive-item').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $(document).ready(function() {
        $(".container.article .body div > img").magnificPopup({
            type: 'image',
            callbacks: {
                elementParse: function(item) {
                    var magnificPopup = $.magnificPopup.instance,
                        cur = magnificPopup.st.el;
                    item.src = cur.attr('src');
                }
            }
        });
    });
};
// =====================================================
// Topic Page
// =====================================================
if (currentPage == 'page_topic') {};
// =====================================================
// Search Results Page
// =====================================================
if (currentPage == 'page_search_result') {};
// =====================================================
// Question New
// =====================================================
if (currentPage == 'question_new') {
    $('#qna_body').textarea_maxlength();
    $('#new_question').validate({
        submitHandler: function(form) {
            $('#question_submit').attr('disabled', true);
            $('#question_submit').addClass('disabled');
            $('#question_submit_spinner').show();
            form.submit();
        },
        messages: {
            'interaction[name]': {
                'required': $("#system-snippets-name_required").html()
            },
            'interaction[email]': {
                'required': $("#system-snippets-email_required").html(),
                'email': $("#system-snippets-invalid_email").html()
            },
            'qna[subject]': {
                'required': $("#system-snippets-subject_required").html()
            },
            'qna[body]': {
                'required': $("#system-snippets-question_required").html(),
                'maxlength': $("#system-snippets-exceeding_max_chars").html()
            }
        },
        rules: {
            'interaction[name]': {
                'required': true
            },
            'interaction[email]': {
                'required': true,
                'email': true
            },
            'qna[subject]': {
                'required': true,
                'invalidchars': '<>'
            },
            'qna[body]': {
                'required': true,
                'maxlength': 5000,
                'invalidchars': ''
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            $('label:empty').remove();
        },
        success: function(element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            $('label:empty').remove();
        }
    });
    if ($("#qna-kb_topic_id").text() != '') {
        $('#qna_kb_topic_id').val($("#qna-kb_topic_id").text());
    }
};
// =====================================================
// Question Pre Create
// =====================================================
if (currentPage == 'question_pre_create') {};
// =====================================================
// Question Show
// =====================================================
if (currentPage == 'question_show') {
    $('#qna_body').textarea_maxlength();
    $('#new_answer').validate({
        submitHandler: function(form) {
            $('#answer_submit').attr('disabled', true);
            $('#answer_submit').addClass('disabled');
            form.submit();
        },
        messages: {
            'interaction[name]': {
                'required': deskEV('system.snippets.name_required')
            },
            'interaction[email]': {
                'required': deskEV('system.snippets.email_required'),
                'email': deskEV('system.snippets.invalid_email')
            },
            'qna[body]': {
                'required': deskEV('system.snippets.answer_required'),
                'maxlength': deskEV('system.snippets.exceeding_max_chars')
            }
        },
        rules: {
            'interaction[name]': {
                'required': true
            },
            'interaction[email]': {
                'required': true,
                'email': true
            },
            'qna[body]': {
                'required': true,
                'maxlength': 5000
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            $('label:empty').remove();
        },
        success: function(element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            $('label:empty').remove();
        }
    });
    setTimeout(function() {
        $('a.rate.increment').html('<i class="fa fa-thumbs-up"></i>')
        $('a.rate.decrement').html('<i class="fa fa-thumbs-down"></i>')
    }, 500);
};
// =====================================================
// Email New
// =====================================================
if (currentPage == 'email_new') {
    //-- FORM VALIDATION NEW
    $(document).ready(function() {
        $('#email_body').textarea_maxlength();
        $('#new_email').validate({
            submitHandler: function(form) {
                $('#email_submit').prop('disabled', true);
                $('#email_submit').addClass('disabled');
                $('#email_submit_spinner').show();
                form.submit();
            },
            messages: {
                'interaction[name]': {
                    'required': $("#system-snippets-name_required").html()
                },
                'interaction[email]': {
                    'required': $("#system-snippets-invalid_email").html(),
                    'email': $("#system-snippets-invalid_email").html()
                },
                'email[subject]': {
                    'required': $("#system-snippets-subject_required").html()
                },
                'email[body]': {
                    'required': $("#system-snippets-question_required").html(),
                    'maxlength': $("#system-snippets-exceeding_max_chars").html()
                }
            },
            rules: {
                'interaction[name]': {
                    'minlength': 2,
                    'required': true
                },
                'interaction[email]': {
                    'required': true,
                    'email': true
                },
                'email[subject]': {
                    'required': true,
                    'invalidchars': ''
                },
                'email[body]': {
                    'required': true,
                    'maxlength': 5000,
                    'invalidchars': ''
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                $('label:empty').remove();
            },
            success: function(element) {
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
                $('label:empty').remove();
            }
        });
    });
};
// =====================================================
// Email PreCreate
// =====================================================
if (currentPage == 'email_pre_create') {
    jQuery(document).ready(function() {
        $('#email_submit').click(function() {
            $(this).addClass('disabled');
        })
    });
    if (deskEV('number_search_results') == '0') {
        jQuery('#new_email').submit();
    }
    $('#email_body').textarea_maxlength();
    $('#new_email').validate({
        submitHandler: function(form) {
            $('#email_submit').prop('disabled', true);
            $('#email_submit').addClass('disabled');
            $('#email_submit_spinner').show();
            form.submit();
        },
        messages: {
            'interaction[name]': {
                'required': $("#system-snippets-name_required").html()
            },
            'interaction[email]': {
                'required': $("#system-snippets-email_required").html(),
                'email': $("#system-snippets-invalid_email").html()
            },
            'email[subject]': {
                'required': $("#system-snippets-subject_required").html()
            },
            'email[body]': {
                'required': $("#system-snippets-question_required").html(),
                'maxlength': $("#system-snippets-exceeding_max_chars").html()
            }
        },
        rules: {
            'interaction[name]': {
                'required': true
            },
            'interaction[email]': {
                'required': true,
                'email': true
            },
            'email[subject]': {
                'required': true,
                'invalidchars': '<>'
            },
            'email[body]': {
                'required': true,
                'maxlength': 5000,
                'invalidchars': '<>'
            }
        },
        errorClass: 'invalid'
    });
};
// =====================================================
// Email Submitted
// =====================================================
if (currentPage == 'email_submitted') {};
// =====================================================
// Chat New
// =====================================================
if (currentPage == 'chat_new') {
    //-- NEW CHAT VALIDATION
    $(document).ready(function() {
        $('#chat_subject').textarea_maxlength();
        $('#new_chat').validate({
            submitHandler: function(form) {
                $('#chat_submit').attr('disabled', true);
                $('#chat_submit').addClass('disabled');
                $('#chat_submit_spinner').show();
                form.submit();
            },
            messages: {
                'interaction[name]': {
                    'required': deskEV('system-snippets-name_required')
                },
                'interaction[email]': {
                    'required': deskEV('system-snippets-email_required'),
                    'email': deskEV('system-snippets-invalid_email')
                },
                'chat[subject]': {
                    'required': deskEV('system-snippets-question_required'),
                    'maxlength': deskEV('system-snippets-exceeding_max_chars')
                }
            },
            rules: {
                'interaction[name]': {
                    'required': true
                },
                'interaction[email]': {
                    'required': true,
                    'email': true
                },
                'chat[subject]': {
                    'required': true,
                    'maxlength': 5000,
                    'invalidchars': '<>'
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
                $('label:empty').remove();
            },
            success: function(element) {
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
                $('label:empty').remove();
            }
        });
    });
};
// =====================================================
// Chat PreCreate
// =====================================================
if (currentPage == 'chat_pre_create') {
    function openChatWindow() {
        window.open('', 'newChatWin', 'width=500,height=500,toolbar=0');
    }
    jQuery(document).ready(function() {
        $('#chat_submit').click(function() {
            $(this).addClass('disabled');
        })
    });
    if (deskEV('number_search_results') == '0') {
        jQuery(document).ready(function() {
            $('#chat_submit').click(function() {
                $(this).addClass('disabled');
                setTimeout(function() {
                    window.location = $('#breadcrumbs ol.breadcrumb li:first-child a').attr("href");
                }, 5000);
            })
        });

        function openChatWindow() {
            window.open('', 'newChatWin', 'width=500,height=500,toolbar=0');
        }
    } else {
        jQuery(document).ready(function() {
            $('#chat_submit').click(function() {
                $(this).addClass('disabled');
                setTimeout(function() {
                    window.location = $('#breadcrumbs ol.breadcrumb li:first-child a').attr("href");
                }, 5000);
            })
        });

        function openChatWindow() {
            window.open('', 'newChatWin', 'width=500,height=500,toolbar=0');
        }
    }
    $('#chat_subject').textarea_maxlength();
    $('#new_chat').validate({
        submitHandler: function(form) {
            $('#chat_submit').attr('disabled', true);
            $('#chat_submit').addClass('disabled');
            $('#chat_submit_spinner').show();
            form.submit();
        },
        messages: {
            'interaction[name]': {
                'required': deskEV('system.snippets.name_required')
            },
            'interaction[email]': {
                'required': deskEV('system.snippets.email_required'),
                'email': deskEV('system.snippets.invalid_email')
            },
            'chat[subject]': {
                'required': deskEV('system.snippets.question_required'),
                'maxlength': deskEV('system.snippets.exceeding_max_chars')
            }
        },
        rules: {
            'interaction[name]': {
                'required': true
            },
            'interaction[email]': {
                'required': true,
                'email': true
            },
            'chat[subject]': {
                'required': true,
                'maxlength': 5000,
                'invalidchars': '<>'
            }
        },
        errorClass: 'invalid'
    });
};
// =====================================================
// Email / Chat / Question  - Related Article Suggestion
// =====================================================
if (currentPage == 'email_new' || currentPage == 'question_new' || currentPage == 'email_pre_create' || currentPage == 'chat_new') {
    //MODAL/POPUP

    //SKIP PRECREATE SITE WIDE?
    if (SkipPreCreate == 'true') {
        $('#new_email').attr('action', '/customer/portal/emails');
        $('#new_chat').attr('action', '/customer/portal/chats');
        $('#new_question').attr('action', '/customer/portal/questions');
    };
    $(function() {
        $('#email_subject, #email_body, #chat_subject, #qna_subject, #qna_body, #qna_kb_topic_id').on('keyup change paste', function() {
            if (true) {
                clearTimeout(window.timer);
                window.timer = setTimeout(function() { // setting the delay for each keypress
                    if (MBArticleSuggest == 'true') {
                        articleSuggestMultiBrand();
                    } else {
                        articleSuggest();
                    }
                }, 500);
            }
        });
    });
    //-- MULTIBRAND ARTICLE SUGGEST
    articleSuggestMultiBrand = function() {
            $('#site-brands > div').each(function(i, e) {
                systemLanguageDesk = $('#system_language').html();
                resultsFound = $('#results_mobile').html();
                brandID = e.id;
                brandName = e.textContent;
                as_count = 0;
                if (currentPage == 'email_new') {
                    search_query = $('#email_subject').val() + ' ' + $('#email_body').val();
                }
                if (currentPage == 'question_new') {
                    search_query = $('#qna_subject').val() + ' ' + $('#qna_body').val() + ' ' + $("#qna_kb_topic_id option:selected").text();
                }
                if (currentPage == 'chat_new') {
                    search_query = $('#chat_subject').val();
                }
                $.ajax({
                    url: '//' + document.domain.toString() + '/customer/' + systemLanguageDesk + '/portal/articles/autocomplete?b_id=' + brandID + '&term=' + search_query,
                    brandID: brandID,
                    brandName: brandName,
                    dataType: 'json',
                    success: function(data) {
                            apiSuccess(data, this.brandID, this.brandName);

                            function apiSuccess(data, brandID, brandName) {
                                $('.autosuggest.multi-brand div#brand-' + brandID).remove();
                                auto_suggest_content = "";
                                auto_suggest = "";
                                system_snippet_do_these_help = $('#system-snippets-do_these_help').text() || 'Do these help?';
                                $('#common h2').html(system_snippet_do_these_help);
                                $('#common h4').hide();
                                as_count = 0;
                                $.each(data, function() {
                                    var html = $(this.label);
                                    article_title = html.find(".article-autocomplete-subject").html();
                                    if (as_count == 3) {
                                        auto_suggest += '<div class="collapse" id="collapse-' + brandID + '"><li class="hidden"></li>';
                                    }
                                    if (this.id.indexOf("questions") !== -1) {
                                        auto_suggest += '<li><a target="_blank" href="' + this.id + '" class="discussion"><i class="fa fa-question"></i><span>' + article_title + '</span></a></li>';
                                    } else {
                                        auto_suggest += '<li><a target="_blank" href="' + this.id + '" class="article"><i class="fa fa-file-text-o"></i><span>' + article_title + '</span></a></li>';
                                    }
                                    as_count++;
                                });
                                if (as_count > 0) {
                                    if (as_count > 9) {
                                        $('.autosuggest.multi-brand').append('<div id="brand-' + brandID + '"><h4 class="muted"><span>' + as_count + ' + </span>' + resultsFound + ' in ' + brandName + '</h4><ul class="unstyled"></ul>');
                                    } else {
                                        $('.autosuggest.multi-brand').append('<div id="brand-' + brandID + '"><h4 class="muted"><span>' + as_count + ' </span>' + resultsFound + ' in ' + brandName + '</h4><ul class="unstyled"></ul>');
                                    }
                                    if (as_count > 0) {
                                        $('.autosuggest.multi-brand div#brand-' + brandID + ' ul').append(auto_suggest);
                                        if (as_count > 9) {
                                            $('.autosuggest.multi-brand div#brand-' + brandID + ' ul div').append('<a class="btn btn-submit" target="_blank" href="//' + document.domain.toString() + '/customer/' + systemLanguageDesk + '/portal/articles/search?b_id=' + brandID + '&q=' + search_query + '&displayMode=BrandOnly">View All</a>');
                                        }
                                        $('.autosuggest.multi-brand div#brand-' + brandID + ' ul div').append('</div>');
                                        if (as_count > 3) {
                                            $('.autosuggest.multi-brand div#brand-' + brandID + ' ul').append('<button class="btn btn-submit coltrig">More</button>');
                                        }
                                    } // IF SUGGESTIONS
                                    as_count = 0;
                                }
                            } // FUNCTION API SUCCESS
                        } // SUCCESS
                }); // AJAX REQUEST
            }); // FOR EACH BRAND
        } // ARTICLE SUGGESTION MULTIBRAND
        //-- REGULAR ARTICLE SUGGEST
    articleSuggest = function() {
            as_count = 0;
            if (currentPage == 'email_new') {
                search_query = $('#email_subject').val() + ' ' + $('#email_body').val();
            }
            if (currentPage == 'question_new') {
                search_query = $('#qna_subject').val() + ' ' + $('#qna_body').val() + ' ' + $("#qna_kb_topic_id option:selected").text();
            }
            if (currentPage == 'chat_new') {
                search_query = $('#chat_subject').val();
            }
            var systemLanguageDesk = $('#system_language').html();
            var brandID = $('#brand_id').text();
            if (brandID == "/" || brandID == "") {
                $.ajax({
                    url: '//' + document.domain.toString() + '/customer/' + systemLanguageDesk + '/portal/articles/autocomplete?term=' + search_query,
                    dataType: 'json'
                }).done(apiSuccess).fail(apiFail);
            } else {
                $.ajax({
                    url: '//' + document.domain.toString() + '/customer/' + systemLanguageDesk + '/portal/articles/autocomplete?term=' + search_query + '&b_id=' + brandID,
                    dataType: 'json'
                }).done(apiSuccess).fail(apiFail);
            }
        }
        //RESULTS
    apiSuccess = function(data) {
        auto_suggest_content = "";
        auto_suggest_articles = "";
        auto_suggest_questions = "";
        var system_snippet_do_these_help = $('#system-snippets-do_these_help').text() || 'Do these help?';
        $('.autosuggest').html('<h2 class="muted">' + system_snippet_do_these_help + '</h4><ul class="unstyled"></ul>');
        $.each(data, function() {
            var html = $(this.label);
            article_title = html.find(".article-autocomplete-subject").html();
            if (this.id.indexOf("questions") !== -1) {
                auto_suggest_questions += '<li><a target="_blank" href="' + this.id + '" class="discussion"><span>' + article_title + '</span><i class="fa fa-angle-right"></i></a></li>';
            } else {
                auto_suggest_articles += '<li><a target="_blank" href="' + this.id + '" class="article"><span>' + article_title + '</span><i class="fa fa-angle-right"></i></a></li>';
            }
            as_count++;
        });
        if (as_count > 0) {
            $('.autosuggest ul').append(auto_suggest_articles + auto_suggest_questions);
            $("#common").hide();
            $(".autosuggest").removeClass('hide');
        } else {
            $(".autosuggest").addClass('hide');
            $("#common").show();
        }
    };
    //NO RESULTS
    apiFail = function(data) {}

    //AJAX COMPLETE?
    $(document).ajaxComplete(function() {
        $('.coltrig').click(function() {
            $(this).prevAll('div.collapse').collapse();
            $(this).hide();
        });
    });
};
// =====================================================
// MyPortal Index
// =====================================================
if (currentPage == 'myportal_index') {
    $(function() {
        var filter_value = $.getUrlVar("filter");
        if (filter_value != null && filter_value.length > 0) {
            $("#CaseFilter").val(filter_value);
        }
        $("#CaseFilter").change(function(event) {
            $.updateOrAddVar("filter", $(this).val())
        });
        $("#ActiveOnly").attr("checked", $.getUrlVar("active") == "1" ? true : false);
        $("#ActiveOnly").change(function() {
            $.updateOrAddVar("active", $(this).is(":checked") ? "1" : "0")
        });
    });
    jQuery(function($) {
        $(document).on("click", "table#MyCases tr", function(e) {
            var href = $(this).find("td.a-casesubject a").attr("href");
            if (href) {
                window.location = href;
            }
        });
        if (registration_in_progress) {
            $("#registration-in-progress").show();
            $("#MyCases").hide();
            setInterval(function() {
                $.get("/customer/portal/private/registration-progress", function(registration) {
                    if (registration.complete) {
                        window.location.reload();
                    }
                });
            }, 3000);
        }
    });
    // CONTORLS LOADING AND SORTING OF ALL CASES ON THE SAME PAGE
    (function($) {
        if ($('#MyCaseSort').val() != null) {
            /* TableSorter 2.0 - Client-side table sorting with ease!  * Version 2.0.5b   * Copyright (c) 2007 Christian Bach  */
            (function($) {
                $.extend({
                    tablesorter: new
                    function() {
                        var parsers = [],
                            widgets = [];
                        this.defaults = {
                            cssHeader: "header",
                            cssAsc: "headerSortUp",
                            cssDesc: "headerSortDown",
                            cssChildRow: "expand-child",
                            sortInitialOrder: "asc",
                            sortMultiSortKey: "shiftKey",
                            sortForce: null,
                            sortAppend: null,
                            sortLocaleCompare: true,
                            textExtraction: "simple",
                            parsers: {},
                            widgets: [],
                            widgetZebra: {
                                css: ["even", "odd"]
                            },
                            headers: {},
                            widthFixed: false,
                            cancelSelection: true,
                            sortList: [],
                            headerList: [],
                            dateFormat: "us",
                            decimal: '/\.|\,/g',
                            onRenderHeader: null,
                            selectorHeaders: 'thead th',
                            debug: false
                        };

                        function benchmark(s, d) {
                            log(s + "," + (new Date().getTime() - d.getTime()) + "ms");
                        }
                        this.benchmark = benchmark;

                        function log(s) {
                            if (typeof console != "undefined" && typeof console.debug != "undefined") {
                                console.log(s);
                            } else {
                                alert(s);
                            }
                        }

                        function buildParserCache(table, $headers) {
                            if (table.config.debug) {
                                var parsersDebug = "";
                            }
                            if (table.tBodies.length == 0) return;
                            var rows = table.tBodies[0].rows;
                            if (rows[0]) {
                                var list = [],
                                    cells = rows[0].cells,
                                    l = cells.length;
                                for (var i = 0; i < l; i++) {
                                    var p = false;
                                    if ($.metadata && ($($headers[i]).metadata() && $($headers[i]).metadata().sorter)) {
                                        p = getParserById($($headers[i]).metadata().sorter);
                                    } else if ((table.config.headers[i] && table.config.headers[i].sorter)) {
                                        p = getParserById(table.config.headers[i].sorter);
                                    }
                                    if (!p) {
                                        p = detectParserForColumn(table, rows, -1, i);
                                    }
                                    if (table.config.debug) {
                                        parsersDebug += "column:" + i + " parser:" + p.id + "\n";
                                    }
                                    list.push(p);
                                }
                            }
                            if (table.config.debug) {
                                log(parsersDebug);
                            }
                            return list;
                        };

                        function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                            var l = parsers.length,
                                node = false,
                                nodeValue = false,
                                keepLooking = true;
                            while (nodeValue == '' && keepLooking) {
                                rowIndex++;
                                if (rows[rowIndex]) {
                                    node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                                    nodeValue = trimAndGetNodeText(table.config, node);
                                    if (table.config.debug) {
                                        log('Checking if value was empty on row:' + rowIndex);
                                    }
                                } else {
                                    keepLooking = false;
                                }
                            }
                            for (var i = 1; i < l; i++) {
                                if (parsers[i].is(nodeValue, table, node)) {
                                    return parsers[i];
                                }
                            }
                            return parsers[0];
                        }

                        function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
                            return rows[rowIndex].cells[cellIndex];
                        }

                        function trimAndGetNodeText(config, node) {
                            return $.trim(getElementText(config, node));
                        }

                        function getParserById(name) {
                            var l = parsers.length;
                            for (var i = 0; i < l; i++) {
                                if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
                                    return parsers[i];
                                }
                            }
                            return false;
                        }

                        function buildCache(table) {
                            if (table.config.debug) {
                                var cacheTime = new Date();
                            }
                            var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0,
                                totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0,
                                parsers = table.config.parsers,
                                cache = {
                                    row: [],
                                    normalized: []
                                };
                            for (var i = 0; i < totalRows; ++i) {
                                var c = $(table.tBodies[0].rows[i]),
                                    cols = [];
                                if (c.hasClass(table.config.cssChildRow)) {
                                    cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
                                    continue;
                                }
                                cache.row.push(c);
                                for (var j = 0; j < totalCells; ++j) {
                                    cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]));
                                }
                                cols.push(cache.normalized.length);
                                cache.normalized.push(cols);
                                cols = null;
                            };
                            if (table.config.debug) {
                                benchmark("Building cache for " + totalRows + " rows:", cacheTime);
                            }
                            return cache;
                        };

                        function getElementText(config, node) {
                            var text = "";
                            if (!node) return "";
                            if (!config.supportsTextContent) config.supportsTextContent = node.textContent || false;
                            if (config.textExtraction == "simple") {
                                if (config.supportsTextContent) {
                                    text = node.textContent;
                                } else {
                                    if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                                        text = node.childNodes[0].innerHTML;
                                    } else {
                                        text = node.innerHTML;
                                    }
                                }
                            } else {
                                if (typeof(config.textExtraction) == "function") {
                                    text = config.textExtraction(node);
                                } else {
                                    text = $(node).text();
                                }
                            }
                            return text;
                        }

                        function appendToTable(table, cache) {
                            if (table.config.debug) {
                                var appendTime = new Date()
                            }
                            var c = cache,
                                r = c.row,
                                n = c.normalized,
                                totalRows = n.length,
                                checkCell = (n[0].length - 1),
                                tableBody = $(table.tBodies[0]),
                                rows = [];
                            for (var i = 0; i < totalRows; i++) {
                                var pos = n[i][checkCell];
                                rows.push(r[pos]);
                                if (!table.config.appender) {
                                    var l = r[pos].length;
                                    for (var j = 0; j < l; j++) {
                                        tableBody[0].appendChild(r[pos][j]);
                                    }
                                }
                            }
                            if (table.config.appender) {
                                table.config.appender(table, rows);
                            }
                            rows = null;
                            if (table.config.debug) {
                                benchmark("Rebuilt table:", appendTime);
                            }
                            applyWidget(table);
                            setTimeout(function() {
                                $(table).trigger("sortEnd");
                            }, 0);
                        };

                        function buildHeaders(table) {
                            if (table.config.debug) {
                                var time = new Date();
                            }
                            var meta = ($.metadata) ? true : false;
                            var header_index = computeTableHeaderCellIndexes(table);
                            $tableHeaders = $(table.config.selectorHeaders, table).each(function(index) {
                                this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                                this.order = formatSortingOrder(table.config.sortInitialOrder);
                                this.count = this.order;
                                if (checkHeaderMetadata(this) || checkHeaderOptions(table, index)) this.sortDisabled = true;
                                if (checkHeaderOptionsSortingLocked(table, index)) this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);
                                if (!this.sortDisabled) {
                                    var $th = $(this).addClass(table.config.cssHeader);
                                    if (table.config.onRenderHeader) table.config.onRenderHeader.apply($th);
                                }
                                table.config.headerList[index] = this;
                            });
                            if (table.config.debug) {
                                benchmark("Built headers:", time);
                                log($tableHeaders);
                            }
                            return $tableHeaders;
                        };

                        function computeTableHeaderCellIndexes(t) {
                            var matrix = [];
                            var lookup = {};
                            var thead = t.getElementsByTagName('THEAD')[0];
                            var trs = thead.getElementsByTagName('TR');
                            for (var i = 0; i < trs.length; i++) {
                                var cells = trs[i].cells;
                                for (var j = 0; j < cells.length; j++) {
                                    var c = cells[j];
                                    var rowIndex = c.parentNode.rowIndex;
                                    var cellId = rowIndex + "-" + c.cellIndex;
                                    var rowSpan = c.rowSpan || 1;
                                    var colSpan = c.colSpan || 1
                                    var firstAvailCol;
                                    if (typeof(matrix[rowIndex]) == "undefined") {
                                        matrix[rowIndex] = [];
                                    }
                                    for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                                        if (typeof(matrix[rowIndex][k]) == "undefined") {
                                            firstAvailCol = k;
                                            break;
                                        }
                                    }
                                    lookup[cellId] = firstAvailCol;
                                    for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                                        if (typeof(matrix[k]) == "undefined") {
                                            matrix[k] = [];
                                        }
                                        var matrixrow = matrix[k];
                                        for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                                            matrixrow[l] = "x";
                                        }
                                    }
                                }
                            }
                            return lookup;
                        }

                        function checkCellColSpan(table, rows, row) {
                            var arr = [],
                                r = table.tHead.rows,
                                c = r[row].cells;
                            for (var i = 0; i < c.length; i++) {
                                var cell = c[i];
                                if (cell.colSpan > 1) {
                                    arr = arr.concat(checkCellColSpan(table, headerArr, row++));
                                } else {
                                    if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                                        arr.push(cell);
                                    }
                                }
                            }
                            return arr;
                        };

                        function checkHeaderMetadata(cell) {
                            if (($.metadata) && ($(cell).metadata().sorter === false)) {
                                return true;
                            };
                            return false;
                        }

                        function checkHeaderOptions(table, i) {
                            if ((table.config.headers[i]) && (table.config.headers[i].sorter === false)) {
                                return true;
                            };
                            return false;
                        }

                        function checkHeaderOptionsSortingLocked(table, i) {
                            if ((table.config.headers[i]) && (table.config.headers[i].lockedOrder)) return table.config.headers[i].lockedOrder;
                            return false;
                        }

                        function applyWidget(table) {
                            var c = table.config.widgets;
                            var l = c.length;
                            for (var i = 0; i < l; i++) {
                                getWidgetById(c[i]).format(table);
                            }
                        }

                        function getWidgetById(name) {
                            var l = widgets.length;
                            for (var i = 0; i < l; i++) {
                                if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
                                    return widgets[i];
                                }
                            }
                        };

                        function formatSortingOrder(v) {
                            if (typeof(v) != "Number") {
                                return (v.toLowerCase() == "desc") ? 1 : 0;
                            } else {
                                return (v == 1) ? 1 : 0;
                            }
                        }

                        function isValueInArray(v, a) {
                            var l = a.length;
                            for (var i = 0; i < l; i++) {
                                if (a[i][0] == v) {
                                    return true;
                                }
                            }
                            return false;
                        }

                        function setHeadersCss(table, $headers, list, css) {
                            $headers.removeClass(css[0]).removeClass(css[1]);
                            var h = [];
                            $headers.each(function(offset) {
                                if (!this.sortDisabled) {
                                    h[this.column] = $(this);
                                }
                            });
                            var l = list.length;
                            for (var i = 0; i < l; i++) {
                                h[list[i][0]].addClass(css[list[i][1]]);
                            }
                        }

                        function fixColumnWidth(table, $headers) {
                            var c = table.config;
                            if (c.widthFixed) {
                                var colgroup = $('<colgroup>');
                                $("tr:first td", table.tBodies[0]).each(function() {
                                    colgroup.append($('<col>').css('width', $(this).width()));
                                });
                                $(table).prepend(colgroup);
                            };
                        }

                        function updateHeaderSortCount(table, sortList) {
                            var c = table.config,
                                l = sortList.length;
                            for (var i = 0; i < l; i++) {
                                var s = sortList[i],
                                    o = c.headerList[s[0]];
                                o.count = s[1];
                                o.count++;
                            }
                        }

                        function multisort(table, sortList, cache) {
                            if (table.config.debug) {
                                var sortTime = new Date();
                            }
                            var dynamicExp = "var sortWrapper = function(a,b) {",
                                l = sortList.length;
                            for (var i = 0; i < l; i++) {
                                var c = sortList[i][0];
                                var order = sortList[i][1];
                                var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
                                var e = "e" + i;
                                dynamicExp += "var " + e + " = " + s;
                                dynamicExp += "if(" + e + ") { return " + e + "; } ";
                                dynamicExp += "else { ";
                            }
                            var orgOrderCol = cache.normalized[0].length - 1;
                            dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                            for (var i = 0; i < l; i++) {
                                dynamicExp += "}; ";
                            }
                            dynamicExp += "return 0; ";
                            dynamicExp += "}; ";
                            if (table.config.debug) {
                                benchmark("Evaling expression:" + dynamicExp, new Date());
                            }
                            eval(dynamicExp);
                            cache.normalized.sort(sortWrapper);
                            if (table.config.debug) {
                                benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
                            }
                            return cache;
                        };

                        function makeSortFunction(type, direction, index) {
                            var a = "a[" + index + "]",
                                b = "b[" + index + "]";
                            if (type == 'text' && direction == 'asc') {
                                return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
                            } else if (type == 'text' && direction == 'desc') {
                                return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
                            } else if (type == 'numeric' && direction == 'asc') {
                                return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
                            } else if (type == 'numeric' && direction == 'desc') {
                                return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
                            }
                        };

                        function makeSortText(i) {
                            return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
                        };

                        function makeSortTextDesc(i) {
                            return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
                        };

                        function makeSortNumeric(i) {
                            return "a[" + i + "]-b[" + i + "];";
                        };

                        function makeSortNumericDesc(i) {
                            return "b[" + i + "]-a[" + i + "];";
                        };

                        function sortText(a, b) {
                            if (table.config.sortLocaleCompare) return a.localeCompare(b);
                            return ((a < b) ? -1 : ((a > b) ? 1 : 0));
                        };

                        function sortTextDesc(a, b) {
                            if (table.config.sortLocaleCompare) return b.localeCompare(a);
                            return ((b < a) ? -1 : ((b > a) ? 1 : 0));
                        };

                        function sortNumeric(a, b) {
                            return a - b;
                        };

                        function sortNumericDesc(a, b) {
                            return b - a;
                        };

                        function getCachedSortType(parsers, i) {
                            return parsers[i].type;
                        };
                        this.construct = function(settings) {
                            return this.each(function() {
                                if (!this.tHead || !this.tBodies) return;
                                var $this, $document, $headers, cache, config, shiftDown = 0,
                                    sortOrder;
                                this.config = {};
                                config = $.extend(this.config, $.tablesorter.defaults, settings);
                                $this = $(this);
                                $.data(this, "tablesorter", config);
                                $headers = buildHeaders(this);
                                this.config.parsers = buildParserCache(this, $headers);
                                cache = buildCache(this);
                                var sortCSS = [config.cssDesc, config.cssAsc];
                                fixColumnWidth(this);
                                $headers.click(function(e) {
                                    var totalRows = ($this[0].tBodies[0] && $this[0].tBodies[0].rows.length) || 0;
                                    if (!this.sortDisabled && totalRows > 0) {
                                        $this.trigger("sortStart");
                                        var $cell = $(this);
                                        var i = this.column;
                                        this.order = this.count++ % 2;
                                        if (this.lockedOrder) this.order = this.lockedOrder;
                                        if (!e[config.sortMultiSortKey]) {
                                            config.sortList = [];
                                            if (config.sortForce != null) {
                                                var a = config.sortForce;
                                                for (var j = 0; j < a.length; j++) {
                                                    if (a[j][0] != i) {
                                                        config.sortList.push(a[j]);
                                                    }
                                                }
                                            }
                                            config.sortList.push([i, this.order]);
                                        } else {
                                            if (isValueInArray(i, config.sortList)) {
                                                for (var j = 0; j < config.sortList.length; j++) {
                                                    var s = config.sortList[j],
                                                        o = config.headerList[s[0]];
                                                    if (s[0] == i) {
                                                        o.count = s[1];
                                                        o.count++;
                                                        s[1] = o.count % 2;
                                                    }
                                                }
                                            } else {
                                                config.sortList.push([i, this.order]);
                                            }
                                        };
                                        setTimeout(function() {
                                            setHeadersCss($this[0], $headers, config.sortList, sortCSS);
                                            appendToTable($this[0], multisort($this[0], config.sortList, cache));
                                        }, 1);
                                        return false;
                                    }
                                }).mousedown(function() {
                                    if (config.cancelSelection) {
                                        this.onselectstart = function() {
                                            return false
                                        };
                                        return false;
                                    }
                                });
                                $this.bind("update", function() {
                                    var me = this;
                                    setTimeout(function() {
                                        me.config.parsers = buildParserCache(me, $headers);
                                        cache = buildCache(me);
                                    }, 1);
                                }).bind("updateCell", function(e, cell) {
                                    var config = this.config;
                                    var pos = [(cell.parentNode.rowIndex - 1), cell.cellIndex];
                                    cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(getElementText(config, cell), cell);
                                }).bind("sorton", function(e, list) {
                                    $(this).trigger("sortStart");
                                    config.sortList = list;
                                    var sortList = config.sortList;
                                    updateHeaderSortCount(this, sortList);
                                    setHeadersCss(this, $headers, sortList, sortCSS);
                                    appendToTable(this, multisort(this, sortList, cache));
                                }).bind("appendCache", function() {
                                    appendToTable(this, cache);
                                }).bind("applyWidgetId", function(e, id) {
                                    getWidgetById(id).format(this);
                                }).bind("applyWidgets", function() {
                                    applyWidget(this);
                                });
                                if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) {
                                    config.sortList = $(this).metadata().sortlist;
                                }
                                if (config.sortList.length > 0) {
                                    $this.trigger("sorton", [config.sortList]);
                                }
                                applyWidget(this);
                            });
                        };
                        this.addParser = function(parser) {
                            var l = parsers.length,
                                a = true;
                            for (var i = 0; i < l; i++) {
                                if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
                                    a = false;
                                }
                            }
                            if (a) {
                                parsers.push(parser);
                            };
                        };
                        this.addWidget = function(widget) {
                            widgets.push(widget);
                        };
                        this.formatFloat = function(s) {
                            var i = parseFloat(s);
                            return (isNaN(i)) ? 0 : i;
                        };
                        this.formatInt = function(s) {
                            var i = parseInt(s);
                            return (isNaN(i)) ? 0 : i;
                        };
                        this.isDigit = function(s, config) {
                            return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, '')));
                        };
                        this.clearTableBody = function(table) {
                            if ($.browser.msie) {
                                function empty() {
                                    while (this.firstChild) this.removeChild(this.firstChild);
                                }
                                empty.apply(table.tBodies[0]);
                            } else {
                                table.tBodies[0].innerHTML = "";
                            }
                        };
                    }
                });
                $.fn.extend({
                    tablesorter: $.tablesorter.construct
                });
                var ts = $.tablesorter;
                ts.addParser({
                    id: "text",
                    is: function(s) {
                        return true;
                    },
                    format: function(s) {
                        return $.trim(s.toLocaleLowerCase());
                    },
                    type: "text"
                });
                ts.addParser({
                    id: "digit",
                    is: function(s, table) {
                        var c = table.config;
                        return $.tablesorter.isDigit(s, c);
                    },
                    format: function(s) {
                        return $.tablesorter.formatFloat(s);
                    },
                    type: "numeric"
                });
                ts.addParser({
                    id: "currency",
                    is: function(s) {
                        return /^[Ã‚Â£$Ã¢â€šÂ¬?.]/.test(s);
                    },
                    format: function(s) {
                        return $.tablesorter.formatFloat(s.replace(new RegExp(/[Ã‚Â£$Ã¢â€šÂ¬]/g), ""));
                    },
                    type: "numeric"
                });
                ts.addParser({
                    id: "ipAddress",
                    is: function(s) {
                        return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);
                    },
                    format: function(s) {
                        var a = s.split("."),
                            r = "",
                            l = a.length;
                        for (var i = 0; i < l; i++) {
                            var item = a[i];
                            if (item.length == 2) {
                                r += "0" + item;
                            } else {
                                r += item;
                            }
                        }
                        return $.tablesorter.formatFloat(r);
                    },
                    type: "numeric"
                });
                ts.addParser({
                    id: "url",
                    is: function(s) {
                        return /^(https?|ftp|file):\/\/$/.test(s);
                    },
                    format: function(s) {
                        return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ''));
                    },
                    type: "text"
                });
                ts.addParser({
                    id: "isoDate",
                    is: function(s) {
                        return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);
                    },
                    format: function(s) {
                        return $.tablesorter.formatFloat((s != "") ? new Date(s.replace(new RegExp(/-/g), "/")).getTime() : "0");
                    },
                    type: "numeric"
                });
                ts.addParser({
                    id: "percent",
                    is: function(s) {
                        return /\%$/.test($.trim(s));
                    },
                    format: function(s) {
                        return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""));
                    },
                    type: "numeric"
                });
                ts.addParser({
                    id: "usLongDate",
                    is: function(s) {
                        return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
                    },
                    format: function(s) {
                        return $.tablesorter.formatFloat(new Date(s).getTime());
                    },
                    type: "numeric"
                });
                ts.addParser({
                    id: "shortDate",
                    is: function(s) {
                        return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
                    },
                    format: function(s, table) {
                        var c = table.config;
                        s = s.replace(/\-/g, "/");
                        if (c.dateFormat == "us") {
                            s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
                        } else if (c.dateFormat == "uk") {
                            s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
                        } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
                            s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
                        }
                        return $.tablesorter.formatFloat(new Date(s).getTime());
                    },
                    type: "numeric"
                });
                ts.addParser({
                    id: "time",
                    is: function(s) {
                        return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);
                    },
                    format: function(s) {
                        return $.tablesorter.formatFloat(new Date("2000/01/01 " + s).getTime());
                    },
                    type: "numeric"
                });
                ts.addParser({
                    id: "metadata",
                    is: function(s) {
                        return false;
                    },
                    format: function(s, table, cell) {
                        var c = table.config,
                            p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
                        return $(cell).metadata()[p];
                    },
                    type: "numeric"
                });
                ts.addWidget({
                    id: "zebra",
                    format: function(table) {
                        if (table.config.debug) {
                            var time = new Date();
                        }
                        var $tr, row = -1,
                            odd;
                        $("tr:visible", table.tBodies[0]).each(function(i) {
                            $tr = $(this);
                            if (!$tr.hasClass(table.config.cssChildRow)) row++;
                            odd = (row % 2 == 0);
                            $tr.removeClass(table.config.widgetZebra.css[odd ? 0 : 1]).addClass(table.config.widgetZebra.css[odd ? 1 : 0])
                        });
                        if (table.config.debug) {
                            $.tablesorter.benchmark("Applying Zebra widget", time);
                        }
                    }
                });
            })(jQuery);
            if ($('#pagination a.next_page').length) {
                function nextPage(url, callback) {
                    $.get(url, function(data, textStatus, jqXHR) {
                        var cases = $(data).find('#MyCases tbody tr'),
                            nextUrl = $(data).find('#pagination a.next_page');
                        callback(cases);
                        if (nextUrl && nextUrl.attr('href')) nextPage(nextUrl.attr('href'), callback);
                    }, 'html');
                }
                var nextUrl = $('#pagination a.next_page');
                if (nextUrl && nextUrl.attr('href')) {
                    nextPage(nextUrl.attr('href'), function(cases) {
                        $('#MyCases tbody').append(cases);
                    });
                    $('#pagination').hide();
                }
                $('#MyCases').ajaxStop(function() {
                    $("#MyCases").tablesorter();
                });
            } else {
                $("#MyCases").tablesorter();
            }
        }
    }(jQuery));
};
// =====================================================
// My Portal - Show Case
// =====================================================
if (currentPage == 'myportal_show') {
    $('#qna_body').textarea_maxlength();
    $('#new_reply').validate({
        submitHandler: function(form) {
            $('#reply_submit').attr('disabled', true);
            $('#reply_submit').addClass('disabled');
            form.submit();
        },
        messages: {
            'interaction[body]': {
                'required': $("#system-snippets-reply_required").html(),
            }
        },
        rules: {
            'interaction[body]': {
                'required': true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            $('label:empty').remove();
        },
        success: function(element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            $('label:empty').remove();
        }
    });
    $(function() {
        var flash_exists = $(".a-flash").html().trim().length > 0;
        if (flash_exists) {
            $("html, body").animate({
                scrollTop: $(document).height()
            }, "slow");
        }
    });
};
// =====================================================
// Login Page
// =====================================================
if (currentPage == 'login') {
    //LOGIN PAGE SOCIAL BUTTON TWEAKS
    $(".alternatelogins a[href*='facebook']").prepend('<i class="fa fa-facebook fa-lg"></i> ').addClass('btn').after('<br />');
    $(".alternatelogins a[href*='twitter']").prepend('<i class="fa fa-twitter fa-lg"></i> ').addClass('btn');
    $("div.newaccount").prependTo("li.create").html();
    $("div.forgotpw").prependTo("li.reset").html();
    $(function() {
        $("#auth_key").focus();
    });
    $('#login_form').validate({
        submitHandler: function(form) {
            $('#commit').attr('disabled', true);
            $('#commit').addClass('disabled');
            form.submit();
        },
        messages: {
            'auth_key': {
                'required': $("#system-snippets-email_required").html(),
                'email': $("#system-snippets-invalid_email").html()
            },
            'password': {
                'required': $("#system-snippets-password_required").html()
            }
        },
        rules: {
            'password': {
                'required': true
            },
            'auth_key': {
                'required': true,
                'email': true
            }
        },
        highlight: function(element) {
            $(element).closest('.field').removeClass('has-success').addClass('has-error');
            $('label:empty').remove();
        },
        success: function(element) {
            $(element).closest('.field').removeClass('has-error').addClass('has-success');
            $('label:empty').remove();
        }
    });
};
// =====================================================
// Registration Page
// =====================================================
if (currentPage == 'registration') {
    $('#form form').validate({
        submitHandler: function(form) {
            $('#registration_submit').attr('disabled', true);
            $('#registration_submit').addClass('disabled');
            form.submit();
        },
        rules: {
            'email': {
                'required': true,
                'email': true
            }
        },
        messages: {
            'email': {
                'required': $("#system-snippets-email_required").html(),
                'email': $("#system-snippets-invalid_email").html()
            }
        },
        highlight: function(element) {
            $(element).closest('div.field').removeClass('has-success').addClass('has-error');
            $('label:empty').remove();
        },
        success: function(element) {
            $(element).closest('div.field').removeClass('has-error').addClass('has-success');
            $('label:empty').remove();
        }
    });
}
// =====================================================
// Forgot Password
// =====================================================
if (currentPage == 'forgot_password') {
    $(function() {
        $("#email").focus();
        $("#identity_password").focus();
        $('#form > form').validate({
            submitHandler: function(form) {
                $('#password_reset_submit').attr('disabled', true);
                $('#password_reset_submit').addClass('disabled');
                form.submit();
            },
            rules: {
                'email': {
                    'required': true,
                    'email': true
                }
            },
            messages: {
                'email': {
                    'required': $("#system-snippets-email_required").html(),
                    'email': $("#system-snippets-invalid_email").html()
                }
            },
            errorClass: 'invalid'
        });
    });
};
// =====================================================
// My Account
// =====================================================
if (currentPage == 'myaccount') {
    $(function() {
        $("#new_email").focus();
        $('#new_customer_contact_email').validate({
            submitHandler: function(form) {
                if (!check_duplicate()) {
                    $("label.invalid").remove();
                    $("<label class=\"invalid\" for=\"new_email\" generated=\"true\">" + $("#system-snippets-duplicate_email").html() + "</label>").insertAfter("#add_email");
                    return false
                }
                $('button').attr('disabled', true);
                $('button').addClass('disabled');
                form.submit();
            },
            rules: {
                'customer_contact_email[email]': {
                    'required': true,
                    'email': true
                }
            },
            messages: {
                'customer_contact_email[email]': {
                    'required': $("#system-snippets-email_required").html(),
                    'email': $("#system-snippets-invalid_email").html()
                }
            },
            highlight: function(element) {
                $('.form-group').removeClass('has-success').addClass('has-error');
                $('label:empty').remove();
            },
            success: function(element) {
                $('.form-group').removeClass('has-error').addClass('has-success');
                $('label:empty').remove();
            }
        });
    });

    function check_duplicate() {
        var return_val = true;
        $(".email_address").each(function(index) {
            if ($(this).text() == $("#new_email").val()) {
                return_val = false;
            }
        });
        return return_val;
    }
    jQuery(document).ready(function() {
        //MY ACCOUNT PAGE TWEAKS
        $("#new_email").wrap('<div class="form-group"></div>');
        $("#add_email").appendTo('.form-group');
        $(".myaccount-form input#new_email").addClass('form-control');
        $(".myportal #add_facebook input").addClass('btn');
        $(".myportal #add_twitter input").addClass('btn');
        $(".myportal #add_facebook").appendTo('#facebookAdd');
        $(".myportal #add_twitter").appendTo('#twitterAdd');
        $('.myportal .email_delete [type^="submit"]').val("x");
        $('.myportal [id^="email_"] [alt^="Verified"]').parent().parent().addClass('confirmed');
        $('<i class="fa fa-twitter"></i>').prependTo('.myportal [id^="twitter_"]');
        $('<i class="fa fa-facebook"></i>').prependTo('.myportal [id^="facebook_"]');
        $('<i class="fa fa-envelope"></i>').prependTo('.myportal [id^="email_"]');
    });
};
// =====================================================
// Page Authentication Verification
// =====================================================
if (currentPage == 'authentication_verification') {
    $(document).ready(function() {
        $("#new_email").focus();
    });
    $('#new_customer_contact_email').validate({
        submitHandler: function(form) {
            $('#add_email').prop('disabled', true);
            $('#add_email').addClass('disabled');
            $('#new_customer_contact_email_submit_spinner').show();
            form.submit();
        },
        messages: {
            'customer_contact_email[email]': {
                'required': $("#system-snippets-invalid_email").html(),
                'email': $("#system-snippets-invalid_email").html()
            }
        },
        rules: {
            'customer_contact_email[email]': {
                'required': true,
                'email': true
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter('button');
        },
        errorClass: 'invalid'
    });
};
// =====================================================
// CSAT Page(S)
// =====================================================
if (currentPage == 'customer_feedback') {
    //CUSTOMER SATASTICATION HIGHLIGHT VALUE/SELECTED
    var VoteValue = $('#customer-feedback-checked-rating').val();
    $('.btn.value-' + VoteValue).addClass('active');
    //FEEDBACK BUTTONS
    $(function() {
        $('.btn-radio').click(function(e) {
            $('.btn-radio').not(this).removeClass('active')
                .siblings('input').prop('checked', false)
            $(this).addClass('active')
                .siblings('input').prop('checked', true)
        });
    });
};
//START ONLOAD
$(document).ready(function() {
    // =====================================================
    // Search Related (Site Wide)
    // =====================================================

    //HIGHLIGHT SEARCH TERMS
    setTimeout(function() {
        function highlightSearchTerms(search_terms) {
            $.each(search_terms.split(' '), function(index, value) {
                if (value.length > 3) {
                    $('.container.article .body p, #PreCreate p, #PreCreate a, .container.search .result p, .container.search .result h3 a span').highlight($.trim(value), '<span class=\"highlight\">$1</span>');
                }
            });
        }
        highlightSearchTerms($('#search-term').html());
    }, 500);
    var searchWidth = 0;
    var searchWidth = $('#search #q').outerWidth();
    if ($('#q').length) {
        if ($("#q").val().length > 0) $("#question-mask").hide();
        // Default FOCUS
        $("#q").bind("autocompleteopen", function(event, ui) {
            $('.ui-autocomplete').css({
                'margin': '0px',
                'width': searchWidth
            });
        });
    }
    if ($("#site-search_autocomplete_articles_url").length > 0) {
        var autocomplete_source = deskEV('site-search_autocomplete_articles_url');
        var brandID = deskEV('brand_id');
        $("#q").autocomplete({
            delay: 200,
            minLength: 2,
            search: function(event, ui) {
                $("#q").autocomplete("option", "source", autocomplete_source);
            },
            select: function(event, ui) {
                $(location).attr('href', ui.item.id);
            },
            focus: function(event, ui) {
                return false;
            }
        });
    }
    //Text Enterted
    if ($('#q').length) {
        if ($('#q').length !== 0) {
            //Hide #question-mask if search has content
            if ($('#q').val().length > 0) {
                $('#question-mask').hide();
            }
            $('#q').focus(function() {
                $('#question-mask').hide();
            });
            $('#q').blur(function() {
                if ($(this).val().length === 0) $('#question-mask').show();
            });
        }
    }
    $('#question-mask').click(function() {
        $('#q').focus();
    });
    $('form').submit(function() {
        $('input[type=text]').each(function() {
            $(this).val($.trim($(this).val()))
        });
    });
    // Extra validator added to handle invalid characters
    $.validator.addMethod('invalidchars', function(value, element, param) {
        param = param.split("").join("|");
        if (param.length > 0) {
            return this.optional(element) || !new RegExp(param).test(value);
        }
        return true;
    }, deskEV('system.snippets.invalid_characters_found'));
    $("#a-content-select").change(function(event) {
        var r = location.pathname.match(/\/customer(.*)\/portal(.*)/i);
        if (r && r.length > 1)
            location.href = "/customer/" + $(this).val() + "/portal" + r[2] + location.search;
        else
            location.href = "/customer/" + $(this).val() + "/portal/articles" + location.search;
    });
    // =====================================================
    // Mobile Related
    // =====================================================
    //MOBILE MENU TOGGLE
    $('#MobileToggle').click(function() {
        toggleNav();
    });
    //TOGGLE FUNCTION
    function toggleNav() {
        if ($('#site-wrapper').hasClass('show-nav')) {
            // CLOSE NAV
            $('#site-wrapper').removeClass('show-nav');
            $('#mobileHeader').removeClass('show-nav');
            $('#MobileToggle').removeClass('open');
        } else {
            // OPEN NAV
            $('#site-wrapper').addClass('show-nav');
            $('#mobileHeader').addClass('show-nav');
            $('#MobileToggle').addClass('open');
        }
    }
    // MOBILE MENU SEARCH SUGGESTION
    $('#q2').keyup(function() {
        count = 0;
        if ($('#q2').val().length > 2) {
            query = $('#q2').val();
            brandID = deskEV('brand_id');
            if (brandID === '') {
                $.ajax({
                    url: '//' + document.domain.toString() + '/customer/portal/articles/autocomplete?term=' + query,
                    dataType: 'json'
                }).done(MOBapiSuccess).fail(MOBapiFail);
            } else {
                $.ajax({
                    url: '//' + document.domain.toString() + '/customer/portal/articles/autocomplete?b_id=' + brandID + '&term=' + query,
                    dataType: 'json'
                }).done(MOBapiSuccess).fail(MOBapiFail);
            }

        } else {
            $(".mobile-suggest").addClass('hide');
        }
    });
    //MOBILE SUGGEST RESULTS
    MOBapiSuccess = function(data) {
        auto_suggest_content = "";
        auto_suggest_articles = "";
        auto_suggest_questions = "";
        var resultsMobile = $('#results_mobile').html();
        $('.mobile-suggest').html('<ul class="results"><li class="title">' + resultsMobile + '</li></ul>');
        $.each(data, function() {
            var html = $(this.label);
            article_title = html.find(".article-autocomplete-subject").html();
            if (this.id.indexOf("questions") !== -1) {
                auto_suggest_questions += '<li><a href="' + this.id + '" class="discussion">' + article_title + '<i class="fa fa-angle-right"></i></a></li>';
            } else {
                auto_suggest_articles += '<li><a href="' + this.id + '" class="article">' + article_title + '<i class="fa fa-angle-right"></i></a></li>';
            }
            count++;
        });
        if (count > 0) {
            $('.mobile-suggest ul').append(auto_suggest_articles + auto_suggest_questions);
            $(".mobile-suggest").removeClass('hide');
        } else {
            $(".mobile-suggest").addClass('hide');
        }
    };
    //API FAILURE
    MOBapiFail = function(data) {};
    // =====================================================
    // ALL PAGES // SITE WIDE JS
    // =====================================================
    $('body').addClass(deskEV('current-page'));
    /* This is causing problems and I don't think we need it
    $('#PreCreate').appendTo("body").modal('show');
    //MODAL CLOSE GO BACK
    $('#PreCreate .onclick-go-back').click(function() {
        history.back();
    });*/
    //MODERATION FUNCTIONALITY
    /* Also causing issues, commenting out since we're not using this anyway
    $('#Moderated').appendTo("body").modal('show');
    $('#moderation_okay_button, #Moderated .close').click(function() {
        window.location = location.origin + location.pathname;
    });*/
    //BREADCRUMBS HOME LINK
    var home_link = $('#breadcrumbs a:first-child').attr("href") || location.href;
    $("a[href='/']").attr("href", home_link);
    // HIDE VARIABLE DIVS (backup to css display:none)
    $('.desk-external-variables').hide();
    //BOOSTRAP FORM CLASSES AND LEGACY BROWSER PLACE HOLDER
    $('#content input, #content select').addClass('form-control');
    $(":input[placeholder]").placeholder();
    //PAGINATION BLOCK BOOTSTRAP CONVERSION
    $(".pagination").addClass("pagination-lg");
    $(".pagination .previous_page").html('<i class="fa fa-angle-double-left"></i>');
    $(".pagination .next_page").html('<i class="fa fa-angle-double-right"></i>');
    $(".pagination > a").wrap("<li></li>");
    $(".pagination > span.disabled").wrap("<li class='disabled'><a></a></li>");
    $(".pagination > em").wrap("<li class='active'><a></a></li>");
    //CUSTOM LANGUAGE SELECTS
    $('#desk-mobile-lang-list').append($('#a-content-select').clone(true).removeAttr('id'));
    $("#desk-mobile-lang-list select").change(function() {
        $('#a-content-select').val($("#desk-mobile-lang-list select").val()).change();
    });
    $('#a-content-select').customSelect({
        customClass: 'langslct'
    });
    $('.langslctInner').append('<i class="fa fa-angle-down"></i>');
    $('#desk-mobile-lang-list').customSelect({
        customClass: 'moblangslct'
    });
    $('.moblangslctInner').append('<i class="fa fa-language"></i>');
    //CONVERT HEADER TEXT COLOR TO RGBA COLORS FOR BORDERS
    function hexToRgbA(hex) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ', .30)';
        }
    }
    $('#header ul.nav.nav-pills li a, #header .langslct').css('border-color', hexToRgbA($('#header_text').text()));
    // Twitter Share Button
    ! function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = "//platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
    // Facebook Like Button
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=190751927613851";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    // Google Plus Button
    (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    })();
    // READ ONLY PORTAL UI ADJUSTMENTS
    if (deskEV('read_only') == 'true') {
        $(".input-button input[type='submit']").hide();
        $("#support-side a").each(function() {
            if ($(this).attr("href").match(/emails/)) {
                if (deskEV('site.default_mailbox').length > 0) {
                    var default_mailbox = "mailto:" + deskEV('site.default_mailbox');
                    $(this).attr("href", default_mailbox);
                } else {
                    $(this).hide();
                }
            } else {
                $(this).hide();
            }
        });
        $(".answer-rating").hide();
        $(".question #form").html("{{system.snippets.answers_unavailable}}");
        $("#rate_article").hide();
    }

    //Get Satisfaction
    if (deskEV('enable_gs') == 'true') {
        gsStringTable['generic_error'] = deskEV('system.snippets.get_satisfaction_error');
        gsStringTable['view_all'] = deskEV('system.snippets.view_all');
        gsStringTable['search_header_no_results'] = deskEV('system.snippets.no_related_discussions');
        gsStringTable['search_header_with_results'] = deskEV('system.snippets.related_discussions') + " {0} " + deskEV('system.snippets.discussions');
        gsStringTable['generic_results_subheader'] = "{0} " + deskEV('system.snippets.discussions');
        gsStringTable['generic_replies'] = "{0} " + deskEV('system.snippets.replies');
        gsStringTable['questions_header'] = deskEV('system.snippets.questions');
        gsStringTable['ideas_header'] = deskEV('system.snippets.ideas');
        gsStringTable['problems_header'] = deskEV('system.snippets.problems');
        gsStringTable['praises_header'] = deskEV('system.snippets.praise');
        getCompanyId(); //Get Satisfaction Company ID
    }
    //Get Satisfaction Search Terms
    if (deskEV('enable_gs') == 'true') {
        var search_term = deskEV('search_term');
        var params = (search_term !== null) ? "&topic[query]=" + escape(search_term) : "";
        $('#gs_link').attr('href', gsurl + "/topics/new?from=company&product=&commit=Nope.+Finish+posting+my+question" + params);
    }
    //ENDING ONLOAD
}); //End OnLoad
// =====================================================
// MultiBrand Search Page (All results, One Page!)
// =====================================================
if (currentPage == 'page_search_result') {
    if (MBSearchPage == 'true') {
        jQuery(document).ready(function() {
            //VARIABLES
            themeID = 0; //ONLY NEEDED IF WORKING ON THEME AND WANT TO RENDER LINKS w/THEME ID
            brandCount = 0;
            displayLimit = 10;
            totalCount = 0;
            searchTerm = $('#search-term').html(); //LOADS SEARCH TERM
            systemLanguageDesk = $('#system_language').html(); //LOADS SYSTEM LANGUAGE
            readArticle = $('#read-article').html(); //LOADS READ ARTICLE SNIPPET
            //FOR EACH BRAND FUNCTION
            $('#site-brands > div').each(function(i, e) {
                //LOOP VARIABLES
                brandID = e.id;
                brandCount++;
                totalBrands = $('#site-brands > div').length;
                brandName = e.textContent;
                //ADDING TAB ELEMENTS FOR BRANDS AND ALL RESULTS
                if (brandCount == 1) {
                    $('#siteResults ul.nav-tabs').append('<li role="presentation" class="active"><a href="#' + brandID + 'Results" aria-controls="' + brandID + 'Results" role="tab" data-toggle="tab">' + brandName + '</a></li>');
                    $('#siteResults div.tab-content').append('<div id="' + brandID + 'Results" role="tabpanel" class="tab-pane brand active"><div class="articles"></div><div class="footer col-md-12"></div></div>');
                } else {
                    $('#siteResults ul.nav-tabs').append('<li role="presentation"><a href="#' + brandID + 'Results" aria-controls="' + brandID + 'Results" role="tab" data-toggle="tab">' + brandName + '</a></li>');
                    $('#siteResults div.tab-content').append('<div id="' + brandID + 'Results" role="tabpanel" class="tab-pane brand"><div class="articles"></div><div class="footer col-md-12"></div></div>');
                }
                MultiSearch = function(data) {
                    brandID = e.id;
                    resultsCount = 0;
                    noResults = $('div.noresults').html();
                    auto_suggest_content = "";
                    auto_suggest_articles = "";
                    auto_suggest_questions = "";
                    $.each(data, function() {
                        var html = $(this.label);
                        article_title = html.find(".article-autocomplete-subject").html();
                        article_body = html.find(".article-autocomplete-body").html();
                        auto_suggest_articles += '<article class="row nomarg result article"><div class="col-md-12"><h3><a href="' + this.id + '&t=' + themeID + '">' + article_title + '</a></h3><p>' + article_body + '</p><a class="btn btn-pill" href="' + this.id + '">' + readArticle + '</a></div></article>';
                        resultsCount++;
                    });

                    totalCount = totalCount + resultsCount;
                    if (resultsCount < 1) {
                        $('#siteResults div.tab-content div#' + brandID + 'Results .articles').append(noResults);
                    };
                    if (resultsCount > 0) {
                        $('#siteResults div.tab-content div#' + brandID + 'Results .articles').append(auto_suggest_articles);
                    }
                    if (resultsCount >= 10) {
                        $('#siteResults div.tab-content div#' + brandID + 'Results .footer').append('<button class="next-page btn btn-primary" data-page="2" data-brand="' + brandID + '">Load More Results<i class="fa fa-spinner fa-spin hidden"></i></button>');
                    }
                };
                //NO RESULTS
                MultiFail = function(data) {
                    brandID = e.id;
                    //DISPLAY NO RESULTS FOR BRAND
                    $('#' + brandID + ' > h3').removeClass('hidden');
                };
                //AJAX REQUEST
                brandID = e.id;
                $.ajax({
                    url: '//' + document.domain.toString() + '/customer/' + systemLanguageDesk + '/portal/articles/autocomplete?term=' + searchTerm + '&b_id=' + brandID,
                    dataType: 'json'
                }).done(MultiSearch).fail(MultiFail);
            }); //END OF EACH BRAND FUNCTION

            //CHECK URL PARAMETER
            function getParameterByName(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }
            displayMode = getParameterByName('displayMode');
            //DISPLAY SITE WIDE RESULTS OR BRAND ONLY RESULTS
            if (displayMode == "BrandOnly") {
                $('#brandResults').removeClass('hidden');
                $('#siteResults').addClass('hidden');
            } else {
                $('#brandResults').addClass('hidden');
                $('#siteResults').removeClass('hidden');
            }

            $('body').on('click', 'button.next-page', function() {
                brandID = $(this).attr('data-brand');
                pageNumber = parseInt($(this).attr('data-page'));
                searchTerm = $('#search-term').html(); //LOADS SEARCH TERM
                systemLanguageDesk = $('#system_language').html(); //LOADS SYSTEM LANGUAGE
                searchBrandURL = 'https://' + document.domain.toString() + '/customer/' + systemLanguageDesk + '/portal/articles/search?q=' + searchTerm + '&page=' + pageNumber + '&b_id=' + brandID + '&displayMode=BrandOnly'
                    //AJAX REQUEST(S)
                $.ajax({
                    async: true,
                    type: 'GET',
                    url: searchBrandURL,
                    beforeSend: function() {
                        $('#siteResults div.tab-content div#' + brandID + 'Results .footer .next-page i').removeClass('hidden');
                    },
                    complete: function() {
                        $('#siteResults div.tab-content div#' + brandID + 'Results .footer .next-page i').addClass('hidden');
                        ++pageNumber
                        $('#siteResults div.tab-content div#' + brandID + 'Results .footer .next-page').attr('data-page', pageNumber);
                    },
                    success: function(data) {
                        var searchbrandResults = $(data).find('#brandResults .result');
                        var resultsCount = $(data).find('#results-count').html();
                        var nextUrl = $(data).find('#paginate_block a.next_page').attr('href');
                        if (!nextUrl) {
                            $('#siteResults div.tab-content div#' + brandID + 'Results button.next-page').hide();
                            $('#siteResults div.tab-content div#' + brandID + 'Results .footer').append('<h5> All ' + resultsCount + ' Results Loaded</h5>')
                        } else {

                        }
                        $('#siteResults div.tab-content div#' + brandID + 'Results .articles').append(searchbrandResults);
                        if (pageNumber == 2) {
                            $('a[href$="#' + brandID + 'Results"]').append('<span data-count="' + resultsCount + '"> (' + resultsCount + ')</span>');
                        }

                    },
                    fail: function() {
                        alert('no results');
                    }
                });

            });
        });
    }
}
// =====================================================
// MultiBrand Search Auto Suggest
// =====================================================
if (MBSearchSuggest == 'true') {
    /* NEW MULTIBRAND AUTO COMPLETE */
    $(function() {
        $('#qMB').on("keyup paste", function() {
            if ($('#qMB').val().length > 3 && $('#qMB').val().length <= 250) {
                clearTimeout(window.timer);
                window.timer = setTimeout(function() { // setting the delay for each keypress
                    var position = $('#qMB').offset();
                    position.top = position.top + $('#qMB').outerHeight() - 1;
                    marginLeft = $('#qMB').css('padding-left');
                    searchWidth = $('#qMB').width();
                    $('#SearchAutoSuggest').css(position);
                    $('#SearchAutoSuggest').css('width', searchWidth);
                    $('#SearchAutoSuggest').css('margin-left', marginLeft);
                    SearchAutoSuggest();
                }, 500);
            }
        });
    });
    /* HIDE ON CLICK OFF */
    $(document).mouseup(function(e) {
        var container = $("#SearchAutoSuggest");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });
    //-- MULTIBRAND SEARCH SUGGEST
    SearchAutoSuggest = function() {
            var showResults = false;
            $('#site-brands > div').each(function(i, e) {
                systemLanguageDesk = $('#system_language').html();
                resultsFound = $('#results_mobile').html();
                brandID = e.id;
                brandName = e.textContent;
                as_count = 0;
                search_query = $('#qMB').val();
                $.ajax({
                    url: '//' + document.domain.toString() + '/customer/' + systemLanguageDesk + '/portal/articles/autocomplete?b_id=' + brandID + '&term=' + search_query,
                    brandID: brandID,
                    brandName: brandName,
                    dataType: 'json',
                    success: function(data) {
                            apiSuccess(data, this.brandID, this.brandName);

                            function apiSuccess(data, brandID, brandName) {
                                $('#SearchAutoSuggest div#brand-' + brandID).remove();
                                auto_suggest_content = "";
                                auto_suggest = "";
                                system_snippet_do_these_help = $('#system-snippets-do_these_help').text() || 'Do these help?';
                                as_count = 0;
                                $.each(data, function() {
                                    var html = $(this.label);
                                    article_title = html.find(".article-autocomplete-subject").html();
                                    if (as_count < 5) {
                                        if (this.id.indexOf("questions") !== -1) {
                                            auto_suggest += '<li><a target="_blank" href="' + this.id + '" class="discussion"><i class="fa fa-question"></i><span>' + article_title + '</span></a></li>';
                                        } else {
                                            auto_suggest += '<li><a target="_blank" href="' + this.id + '" class="article"><i class="fa fa-file-text-o"></i><span>' + article_title + '</span></a></li>';
                                        }
                                    }
                                    as_count++;
                                });
                                if (as_count > 0) {
                                    showResults = true;
                                    if (as_count > 9) {
                                        $('#SearchAutoSuggest').append(' ' +
                                            '<div class="col-md-12" id="brand-' + brandID + '">' +
                                            '<div class="row"><h4 class="muted"><span>' + as_count + ' + </span>' + resultsFound + ' in ' + brandName + '</h4>' +
                                            '<a class="btn btn-submit" target="_blank" href="//' + document.domain.toString() + '/customer/' + systemLanguageDesk + '/portal/articles/search?b_id=' + brandID + '&q=' + search_query + '">View All</a></div>' +
                                            '<div class="row"><ul class="unstyled"></ul></div>'
                                        );
                                    } else {
                                        $('#SearchAutoSuggest').append(
                                            '<div class="col-md-12" id="brand-' + brandID + '">' +
                                            '<div class="row"><h4 class="muted"><span>' + as_count + ' </span>' + resultsFound + ' in ' + brandName + '</h4>' +
                                            '<a class="btn btn-submit" target="_blank" href="//' + document.domain.toString() + '/customer/' + systemLanguageDesk + '/portal/articles/search?b_id=' + brandID + '&q=' + search_query + '">View All</a></div>' +
                                            '<div class="row"><ul class="unstyled"></ul></div>'
                                        );
                                    }
                                    if (as_count > 0) {
                                        $('#SearchAutoSuggest div#brand-' + brandID + ' ul').append(auto_suggest);
                                    } // IF SUGGESTIONS
                                    as_count = 0;
                                }
                                if (showResults == false) {
                                    $('#SearchAutoSuggest').hide();
                                } else {
                                    $('#SearchAutoSuggest').show();
                                }
                            } // BRAND REQUEST
                        } // SUCCESS
                }); // AJAX REQUEST
            }); // FOR EACH BRAND
        } // ARTICLE SUGGESTION ON KEYUP FUNCTION
};
// =====================================================
// OLD JS? Is this even needed?
// =====================================================
//TWITTER... BROKEN DUE TO NEW API?
jQuery(document).ready(function() {
    if (deskEV('twitter_enabled') == 'true') {
        jQuery('#tweets').tweet({
            join_text: 'auto',
            auto_join_text_default: '',
            auto_join_text_reply: '',
            username: deskEV('twitter_username'),
            avatar_size: 24,
            count: 3,
            loading_text: deskEV('system.snippets.loading') + '...',
            time_text_seconds_ago: $("#system-snippets-seconds_ago").html(),
            time_text_a_minute_ago: $('#system-snippets-a_minute_ago').html(),
            time_text_minutes_ago: $('#system-snippets-minutes_ago').html(),
            time_text_an_hour_ago: $('#system-snippets-an_hour_ago').html(),
            time_text_hours_ago: $('#system-snippets-hours_ago').html(),
            time_text_a_day_ago: $('#system-snippets-a_day_ago').html(),
            time_text_days_ago: $('#system-snippets-days_ago').html(),
            time_text_about: $('#system-snippets-about').html()
        });
    }
});