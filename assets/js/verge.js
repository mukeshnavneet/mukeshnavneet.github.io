/*!
 * verge 1.10.2+201705300050
 * http://npm.im/verge
 * MIT Ryan Van Etten
 */
! function(a, b, c) { "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c() }(this, "verge", function() {
    function a() { return { width: k(), height: l() } }

    function b(a, b) { var c = {}; return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c }

    function c(a, c) { return !(!(a = a && !a.nodeType ? a[0] : a) || 1 !== a.nodeType) && b(a.getBoundingClientRect(), c) }

    function d(b) { b = null == b ? a() : 1 === b.nodeType ? c(b) : b; var d = b.height,
            e = b.width; return d = "function" == typeof d ? d.call(b) : d, (e = "function" == typeof e ? e.call(b) : e) / d } var e = {},
        f = "undefined" != typeof window && window,
        g = "undefined" != typeof document && document,
        h = g && g.documentElement,
        i = f.matchMedia || f.msMatchMedia,
        j = i ? function(a) { return !!i.call(f, a).matches } : function() { return !1 },
        k = e.viewportW = function() { var a = h.clientWidth,
                b = f.innerWidth; return a < b ? b : a },
        l = e.viewportH = function() { var a = h.clientHeight,
                b = f.innerHeight; return a < b ? b : a }; return e.mq = j, e.matchMedia = i ? function() { return i.apply(f, arguments) } : function() { return {} }, e.viewport = a, e.scrollX = function() { return f.pageXOffset || h.scrollLeft }, e.scrollY = function() { return f.pageYOffset || h.scrollTop }, e.rectangle = c, e.aspect = d, e.inX = function(a, b) { var d = c(a, b); return !!d && d.right >= 0 && d.left <= k() }, e.inY = function(a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.top <= l() }, e.inViewport = function(a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k() }, e });