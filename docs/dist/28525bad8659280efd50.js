function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 1.9.1
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  var a = (_gsScope.document || {}).documentElement,
      b = _gsScope,
      c = function c(_c, d) {
    var e = "x" === d ? "Width" : "Height",
        f = "scroll" + e,
        g = "client" + e,
        h = document.body;
    return _c === b || _c === a || _c === h ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g]) : _c[f] - _c["offset" + e];
  },
      d = function d(a) {
    return "string" == typeof a && (a = TweenLite.selector(a)), a.length && a !== b && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === b || a.nodeType && a.style ? a : null;
  },
      e = function e(c, d) {
    var e = "scroll" + ("x" === d ? "Left" : "Top");
    return c === b && (null != c.pageXOffset ? e = "page" + d.toUpperCase() + "Offset" : c = null != a[e] ? a : document.body), function () {
      return c[e];
    };
  },
      f = function f(c, _f) {
    var g = d(c).getBoundingClientRect(),
        h = document.body,
        i = !_f || _f === b || _f === h,
        j = i ? {
      top: a.clientTop - (window.pageYOffset || a.scrollTop || h.scrollTop || 0),
      left: a.clientLeft - (window.pageXOffset || a.scrollLeft || h.scrollLeft || 0)
    } : _f.getBoundingClientRect(),
        k = {
      x: g.left - j.left,
      y: g.top - j.top
    };
    return !i && _f && (k.x += e(_f, "x")(), k.y += e(_f, "y")()), k;
  },
      g = function g(a, b, d) {
    var e = _typeof(a);

    return isNaN(a) ? "number" === e || "string" === e && "=" === a.charAt(1) ? a : "max" === a ? c(b, d) : Math.min(c(b, d), f(a, b)[d]) : parseFloat(a);
  },
      h = _gsScope._gsDefine.plugin({
    propName: "scrollTo",
    API: 2,
    global: !0,
    version: "1.9.1",
    init: function init(a, c, d) {
      return this._wdw = a === b, this._target = a, this._tween = d, "object" != _typeof(c) ? (c = {
        y: c
      }, "string" == typeof c.y && "max" !== c.y && "=" !== c.y.charAt(1) && (c.x = c.y)) : c.nodeType && (c = {
        y: c,
        x: c
      }), this.vars = c, this._autoKill = c.autoKill !== !1, this.getX = e(a, "x"), this.getY = e(a, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != c.x ? (this._addTween(this, "x", this.x, g(c.x, a, "x") - (c.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != c.y ? (this._addTween(this, "y", this.y, g(c.y, a, "y") - (c.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0;
    },
    set: function set(a) {
      this._super.setRatio.call(this, a);

      var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
          e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
          f = e - this.yPrev,
          g = d - this.xPrev,
          i = h.autoKillThreshold;
      this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (g > i || -i > g) && d < c(this._target, "x") && (this.skipX = !0), !this.skipY && (f > i || -i > f) && e < c(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y;
    }
  }),
      i = h.prototype;

  h.max = c, h.getOffset = f, h.buildGetter = e, h.autoKillThreshold = 7, i._kill = function (a) {
    return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a);
  };
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
  "use strict";

  var b = function b() {
    return (_gsScope.GreenSockGlobals || _gsScope)[a];
  };

  "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b);
}("ScrollToPlugin");