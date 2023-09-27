/* gkn_au_main.js */

/* hover intent https://github.com/tristen/hoverintent */
!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var t; t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.hoverintent = e() } }(function () { return function e(t, n, o) { function r(u, f) { if (!n[u]) { if (!t[u]) { var s = "function" == typeof require && require; if (!f && s) return s(u, !0); if (i) return i(u, !0); var c = new Error("Cannot find module '" + u + "'"); throw c.code = "MODULE_NOT_FOUND", c } var a = n[u] = { exports: {} }; t[u][0].call(a.exports, function (e) { var n = t[u][1][e]; return r(n ? n : e) }, a, a.exports, e, t, n, o) } return n[u].exports } for (var i = "function" == typeof require && require, u = 0; u < o.length; u++)r(o[u]); return r }({ 1: [function (e, t, n) { !function (n) { "use strict"; var o = e("xtend"), r = function (e, t, n) { function r(e, t) { return p && (p = clearTimeout(p)), m = 0, n.call(e, t) } function i(e) { c = e.clientX, a = e.clientY } function u(e, n) { return p && (p = clearTimeout(p)), Math.abs(v - c) + Math.abs(l - a) < y.sensitivity ? (m = 1, t.call(e, n)) : (v = c, l = a, p = setTimeout(function () { u(e, n) }, y.interval), void 0) } function f(t) { return p && (p = clearTimeout(p)), e.removeEventListener("mousemove", i, !1), 1 !== m && (v = t.clientX, l = t.clientY, e.addEventListener("mousemove", i, !1), p = setTimeout(function () { u(e, t) }, y.interval)), this } function s(t) { return p && (p = clearTimeout(p)), e.removeEventListener("mousemove", i, !1), 1 === m && (p = setTimeout(function () { r(e, t) }, y.timeout)), this } var c, a, v, l, d = {}, m = 0, p = 0, y = { sensitivity: 7, interval: 100, timeout: 0 }; return d.options = function (e) { return y = o({}, y, e), d }, d.remove = function () { e && (e.removeEventListener("mouseover", f, !1), e.removeEventListener("mouseout", s, !1)) }, e && (e.addEventListener("mouseover", f, !1), e.addEventListener("mouseout", s, !1)), d }; n.hoverintent = r, "undefined" != typeof t && t.exports && (t.exports = r) }(this) }, { xtend: 2 }], 2: [function (e, t, n) { function o() { for (var e = {}, t = 0; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) r.call(n, o) && (e[o] = n[o]) } return e } t.exports = o; var r = Object.prototype.hasOwnProperty }, {}] }, {}, [1])(1) });

/* JavaScript Cookie v2.1.3 (for Fokker redirect modal) */
!function (a) { var b = !1; if ("function" == typeof define && define.amd && (define(a), b = !0), "object" == typeof exports && (module.exports = a(), b = !0), !b) { var c = window.Cookies, d = window.Cookies = a(); d.noConflict = function () { return window.Cookies = c, d } } }(function () { function a() { for (var a = 0, b = {}; a < arguments.length; a++) { var c = arguments[a]; for (var d in c) b[d] = c[d] } return b } function b(c) { function d(b, e, f) { var g; if ("undefined" != typeof document) { if (arguments.length > 1) { if (f = a({ path: "/" }, d.defaults, f), "number" == typeof f.expires) { var h = new Date; h.setMilliseconds(h.getMilliseconds() + 864e5 * f.expires), f.expires = h } f.expires = f.expires ? f.expires.toUTCString() : ""; try { g = JSON.stringify(e), /^[\{\[]/.test(g) && (e = g) } catch (a) { } e = c.write ? c.write(e, b) : encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), b = encodeURIComponent(String(b)), b = b.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), b = b.replace(/[\(\)]/g, escape); var i = ""; for (var j in f) f[j] && (i += "; " + j, f[j] !== !0 && (i += "=" + f[j])); return document.cookie = b + "=" + e + i } b || (g = {}); for (var k = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, m = 0; m < k.length; m++) { var n = k[m].split("="), o = n.slice(1).join("="); '"' === o.charAt(0) && (o = o.slice(1, -1)); try { var p = n[0].replace(l, decodeURIComponent); if (o = c.read ? c.read(o, p) : c(o, p) || o.replace(l, decodeURIComponent), this.json) try { o = JSON.parse(o) } catch (a) { } if (b === p) { g = o; break } b || (g[p] = o) } catch (a) { } } return g } } return d.set = d, d.get = function (a) { return d.call(d, a) }, d.getJSON = function () { return d.apply({ json: !0 }, [].slice.call(arguments)) }, d.defaults = {}, d.remove = function (b, c) { d(b, "", a(c, { expires: -1 })) }, d.withConverter = b, d } return b(function () { }) });


/*! @vimeo/player v2.1.0 | (c) 2017 Vimeo | MIT License | https://github.com/vimeo/player.js */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e.Vimeo = e.Vimeo || {}, e.Vimeo.Player = t()) }(this, function () { "use strict"; function e(e, t) { return t = { exports: {} }, e(t, t.exports), t.exports } function t(e, t, n) { var r = _.get(e.element) || {}; t in r || (r[t] = []), r[t].push(n), _.set(e.element, r) } function n(e, t) { var n = _.get(e.element) || {}; return n[t] || [] } function r(e, t, n) { var r = _.get(e.element) || {}; if (!r[t]) return !0; if (!n) return r[t] = [], _.set(e.element, r), !0; var o = r[t].indexOf(n); return o !== -1 && r[t].splice(o, 1), _.set(e.element, r), r[t] && 0 === r[t].length } function o(e, t) { var o = n(e, t); if (o.length < 1) return !1; var i = o.shift(); return r(e, t, i), i } function i(e, t) { var n = _.get(e); _.set(t, n), _.delete(e) } function a(e, t) { return 0 === e.indexOf(t.toLowerCase()) ? e : "" + t.toLowerCase() + e.substr(0, 1).toUpperCase() + e.substr(1) } function u(e) { return e instanceof window.HTMLElement } function s(e) { return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e } function c(e) { return /^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e) } function f() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.id, n = e.url, r = t || n; if (!r) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."); if (s(r)) return "https://vimeo.com/" + r; if (c(r)) return r.replace("http:", "https:"); if (t) throw new TypeError("“" + t + "” is not a valid video id."); throw new TypeError("“" + r + "” is not a vimeo.com url.") } function l(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return j.reduce(function (t, n) { var r = e.getAttribute("data-vimeo-" + n); return (r || "" === r) && (t[n] = "" === r ? 1 : r), t }, t) } function h(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return new Promise(function (n, r) { if (!c(e)) throw new TypeError("“" + e + "” is not a vimeo.com url."); var o = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(e); for (var i in t) t.hasOwnProperty(i) && (o += "&" + i + "=" + encodeURIComponent(t[i])); var a = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest; a.open("GET", o, !0), a.onload = function () { if (404 === a.status) return void r(new Error("“" + e + "” was not found.")); if (403 === a.status) return void r(new Error("“" + e + "” is not embeddable.")); try { var t = JSON.parse(a.responseText); n(t) } catch (e) { r(e) } }, a.onerror = function () { var e = a.status ? " (" + a.status + ")" : ""; r(new Error("There was an error fetching the embed code from Vimeo" + e + ".")) }, a.send() }) } function d(e, t) { var n = e.html; if (!t) throw new TypeError("An element must be provided"); if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe"); var r = document.createElement("div"); return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe") } function v() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), n = function (e) { "console" in window && console.error && console.error("There was an error creating an embed: " + e) }; t.forEach(function (e) { try { if (null !== e.getAttribute("data-vimeo-defer")) return; var t = l(e), r = f(t); h(r, t).then(function (t) { return d(t, e) }).catch(n) } catch (e) { n(e) } }) } function p() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t = function (t) { if (c(t.origin) && t.data && "spacechange" === t.data.event) for (var n = e.querySelectorAll("iframe"), r = 0; r < n.length; r++)if (n[r].contentWindow === t.source) { var o = n[r].parentElement; o && o.className.indexOf("vimeo-space") !== -1 && (o.style.paddingBottom = t.data.data[0].bottom + "px"); break } }; window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent && window.attachEvent("onmessage", t) } function y(e) { return "string" == typeof e && (e = JSON.parse(e)), e } function m(e, t, n) { if (e.element.contentWindow && e.element.contentWindow.postMessage) { var r = { method: t }; void 0 !== n && (r.value = n); var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")); o >= 8 && o < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin) } } function g(e, t) { t = y(t); var i = [], a = void 0; if (t.event) { if ("error" === t.event) { var u = n(e, t.data.method); u.forEach(function (n) { var o = new Error(t.data.message); o.name = t.data.name, n.reject(o), r(e, t.data.method, n) }) } i = n(e, "event:" + t.event), a = t.data } else if (t.method) { var s = o(e, t.method); s && (i.push(s), a = t.value) } i.forEach(function (t) { try { if ("function" == typeof t) return void t.call(e, a); t.resolve(a) } catch (e) { } }) } function w(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var k = "undefined" != typeof Array.prototype.indexOf, b = "undefined" != typeof window.postMessage; if (!k || !b) throw new Error("Sorry, the Vimeo Player API is not available in this browser."); var E = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, T = (e(function (e, t) { !function (e) { function t(e, t) { function r(e) { return this && this.constructor === r ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, void (e && n.call(this, e))) : new r(e) } return t || w(e, "size", { get: y }), e.constructor = r, r.prototype = e, r } function n(e) { this.add ? e.forEach(this.add, this) : e.forEach(function (e) { this.set(e[0], e[1]) }, this) } function r(e) { return this.has(e) && (this._keys.splice(g, 1), this._values.splice(g, 1), this._itp.forEach(function (e) { g < e[0] && e[0]-- })), -1 < g } function o(e) { return this.has(e) ? this._values[g] : void 0 } function i(e, t) { if (this.objectOnly && t !== Object(t)) throw new TypeError("Invalid value used as weak collection key"); if (t != t || 0 === t) for (g = e.length; g-- && !k(e[g], t);); else g = e.indexOf(t); return -1 < g } function a(e) { return i.call(this, this._values, e) } function u(e) { return i.call(this, this._keys, e) } function s(e, t) { return this.has(e) ? this._values[g] = t : this._values[this._keys.push(e) - 1] = t, this } function c(e) { return this.has(e) || this._values.push(e), this } function f() { (this._keys || 0).length = this._values.length = 0 } function l() { return p(this._itp, this._keys) } function h() { return p(this._itp, this._values) } function d() { return p(this._itp, this._keys, this._values) } function v() { return p(this._itp, this._values, this._values) } function p(e, t, n) { var r = [0], o = !1; return e.push(r), { next: function () { var i, a = r[0]; return !o && a < t.length ? (i = n ? [t[a], n[a]] : t[a], r[0]++) : (o = !0, e.splice(e.indexOf(r), 1)), { done: o, value: i } } } } function y() { return this._values.length } function m(e, t) { for (var n = this.entries(); ;) { var r = n.next(); if (r.done) break; e.call(t, r.value[1], r.value[0], this) } } var g, w = Object.defineProperty, k = function (e, t) { return e === t || e !== e && t !== t }; "undefined" == typeof WeakMap && (e.WeakMap = t({ delete: r, clear: f, get: o, has: u, set: s }, !0)), "undefined" != typeof Map && "function" == typeof (new Map).values && (new Map).values().next || (e.Map = t({ delete: r, has: u, get: o, set: s, keys: l, values: h, entries: d, forEach: m, clear: f })), "undefined" != typeof Set && "function" == typeof (new Set).values && (new Set).values().next || (e.Set = t({ has: a, add: c, delete: r, clear: f, keys: h, values: h, entries: v, forEach: m })), "undefined" == typeof WeakSet && (e.WeakSet = t({ delete: r, add: c, clear: f, has: a }, !0)) }("undefined" != typeof E ? E : window) }), e(function (e) { var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }; !function (t, n, r) { n[t] = n[t] || r(), e.exports && (e.exports = n[t]) }("Promise", "undefined" != typeof E ? E : E, function () { function e(e, t) { d.add(e, t), h || (h = p(d.drain)) } function n(e) { var n, r = "undefined" == typeof e ? "undefined" : t(e); return null == e || "object" != r && "function" != r || (n = e.then), "function" == typeof n && n } function r() { for (var e = 0; e < this.chain.length; e++)o(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]); this.chain.length = 0 } function o(e, t, r) { var o, i; try { t === !1 ? r.reject(e.msg) : (o = t === !0 ? e.msg : t.call(void 0, e.msg), o === r.promise ? r.reject(TypeError("Promise-chain cycle")) : (i = n(o)) ? i.call(o, r.resolve, r.reject) : r.resolve(o)) } catch (e) { r.reject(e) } } function i(t) { var o, u = this; if (!u.triggered) { u.triggered = !0, u.def && (u = u.def); try { (o = n(t)) ? e(function () { var e = new s(u); try { o.call(t, function () { i.apply(e, arguments) }, function () { a.apply(e, arguments) }) } catch (t) { a.call(e, t) } }) : (u.msg = t, u.state = 1, u.chain.length > 0 && e(r, u)) } catch (e) { a.call(new s(u), e) } } } function a(t) { var n = this; n.triggered || (n.triggered = !0, n.def && (n = n.def), n.msg = t, n.state = 2, n.chain.length > 0 && e(r, n)) } function u(e, t, n, r) { for (var o = 0; o < t.length; o++)!function (o) { e.resolve(t[o]).then(function (e) { n(o, e) }, r) }(o) } function s(e) { this.def = e, this.triggered = !1 } function c(e) { this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0 } function f(t) { if ("function" != typeof t) throw TypeError("Not a function"); if (0 !== this.__NPO__) throw TypeError("Not a promise"); this.__NPO__ = 1; var n = new c(this); this.then = function (t, o) { var i = { success: "function" != typeof t || t, failure: "function" == typeof o && o }; return i.promise = new this.constructor(function (e, t) { if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function"); i.resolve = e, i.reject = t }), n.chain.push(i), 0 !== n.state && e(r, n), i.promise }, this.catch = function (e) { return this.then(void 0, e) }; try { t.call(void 0, function (e) { i.call(n, e) }, function (e) { a.call(n, e) }) } catch (e) { a.call(n, e) } } var l, h, d, v = Object.prototype.toString, p = "undefined" != typeof setImmediate ? function (e) { return setImmediate(e) } : setTimeout; try { Object.defineProperty({}, "x", {}), l = function (e, t, n, r) { return Object.defineProperty(e, t, { value: n, writable: !0, configurable: r !== !1 }) } } catch (e) { l = function (e, t, n) { return e[t] = n, e } } d = function () { function e(e, t) { this.fn = e, this.self = t, this.next = void 0 } var t, n, r; return { add: function (o, i) { r = new e(o, i), n ? n.next = r : t = r, n = r, r = void 0 }, drain: function () { var e = t; for (t = n = h = void 0; e;)e.fn.call(e.self), e = e.next } } }(); var y = l({}, "constructor", f, !1); return f.prototype = y, l(y, "__NPO__", 0, !1), l(f, "resolve", function (e) { var n = this; return e && "object" == ("undefined" == typeof e ? "undefined" : t(e)) && 1 === e.__NPO__ ? e : new n(function (t, n) { if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function"); t(e) }) }), l(f, "reject", function (e) { return new this(function (t, n) { if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function"); n(e) }) }), l(f, "all", function (e) { var t = this; return "[object Array]" != v.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function (n, r) { if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function"); var o = e.length, i = Array(o), a = 0; u(t, e, function (e, t) { i[e] = t, ++a === o && n(i) }, r) }) }), l(f, "race", function (e) { var t = this; return "[object Array]" != v.call(e) ? t.reject(TypeError("Not an array")) : new t(function (n, r) { if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function"); u(t, e, function (e, t) { n(t) }, r) }) }), f }) })), _ = new WeakMap, j = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive"], x = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), M = new WeakMap, A = new WeakMap, Player = function () { function Player(e) { var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (w(this, Player), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "string" == typeof e && (e = document.getElementById(e)), !u(e)) throw new TypeError("You must pass either a valid element or a valid id."); if ("IFRAME" !== e.nodeName) { var r = e.querySelector("iframe"); r && (e = r) } if ("IFRAME" === e.nodeName && !c(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed."); if (M.has(e)) return M.get(e); this.element = e, this.origin = "*"; var o = new T(function (r, o) { var a = function (e) { if (c(e.origin) && t.element.contentWindow === e.source) { "*" === t.origin && (t.origin = e.origin); var n = y(e.data), o = "event" in n && "ready" === n.event, i = "method" in n && "ping" === n.method; return o || i ? (t.element.setAttribute("data-ready", "true"), void r()) : void g(t, n) } }; if (window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a), "IFRAME" !== t.element.nodeName) { var u = l(e, n), s = f(u); h(s, u).then(function (n) { var r = d(n, e); return t.element = r, i(e, r), M.set(t.element, t), n }).catch(function (e) { return o(e) }) } }); return A.set(this, o), M.set(this.element, this), "IFRAME" === this.element.nodeName && m(this, "ping"), this } return x(Player, [{ key: "callMethod", value: function (e) { var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return new T(function (o, i) { return n.ready().then(function () { t(n, e, { resolve: o, reject: i }), m(n, e, r) }) }) } }, { key: "get", value: function (e) { var n = this; return new T(function (r, o) { return e = a(e, "get"), n.ready().then(function () { t(n, e, { resolve: r, reject: o }), m(n, e) }) }) } }, { key: "set", value: function (e, n) { var r = this; return T.resolve(n).then(function (n) { if (e = a(e, "set"), void 0 === n || null === n) throw new TypeError("There must be a value to set."); return r.ready().then(function () { return new T(function (o, i) { t(r, e, { resolve: o, reject: i }), m(r, e, n) }) }) }) } }, { key: "on", value: function (e, r) { if (!e) throw new TypeError("You must pass an event name."); if (!r) throw new TypeError("You must pass a callback function."); if ("function" != typeof r) throw new TypeError("The callback must be a function."); var o = n(this, "event:" + e); 0 === o.length && this.callMethod("addEventListener", e).catch(function () { }), t(this, "event:" + e, r) } }, { key: "off", value: function (e, t) { if (!e) throw new TypeError("You must pass an event name."); if (t && "function" != typeof t) throw new TypeError("The callback must be a function."); var n = r(this, "event:" + e, t); n && this.callMethod("removeEventListener", e).catch(function (e) { }) } }, { key: "loadVideo", value: function (e) { return this.callMethod("loadVideo", e) } }, { key: "ready", value: function () { var e = A.get(this); return T.resolve(e) } }, { key: "addCuePoint", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return this.callMethod("addCuePoint", { time: e, data: t }) } }, { key: "removeCuePoint", value: function (e) { return this.callMethod("removeCuePoint", e) } }, { key: "enableTextTrack", value: function (e, t) { if (!e) throw new TypeError("You must pass a language."); return this.callMethod("enableTextTrack", { language: e, kind: t }) } }, { key: "disableTextTrack", value: function () { return this.callMethod("disableTextTrack") } }, { key: "pause", value: function () { return this.callMethod("pause") } }, { key: "play", value: function () { return this.callMethod("play") } }, { key: "unload", value: function () { return this.callMethod("unload") } }, { key: "getAutopause", value: function () { return this.get("autopause") } }, { key: "setAutopause", value: function (e) { return this.set("autopause", e) } }, { key: "getColor", value: function () { return this.get("color") } }, { key: "setColor", value: function (e) { return this.set("color", e) } }, { key: "getCuePoints", value: function () { return this.get("cuePoints") } }, { key: "getCurrentTime", value: function () { return this.get("currentTime") } }, { key: "setCurrentTime", value: function (e) { return this.set("currentTime", e) } }, { key: "getDuration", value: function () { return this.get("duration") } }, { key: "getEnded", value: function () { return this.get("ended") } }, { key: "getLoop", value: function () { return this.get("loop") } }, { key: "setLoop", value: function (e) { return this.set("loop", e) } }, { key: "getPaused", value: function () { return this.get("paused") } }, { key: "getTextTracks", value: function () { return this.get("textTracks") } }, { key: "getVideoEmbedCode", value: function () { return this.get("videoEmbedCode") } }, { key: "getVideoId", value: function () { return this.get("videoId") } }, { key: "getVideoTitle", value: function () { return this.get("videoTitle") } }, { key: "getVideoWidth", value: function () { return this.get("videoWidth") } }, { key: "getVideoHeight", value: function () { return this.get("videoHeight") } }, { key: "getVideoUrl", value: function () { return this.get("videoUrl") } }, { key: "getVolume", value: function () { return this.get("volume") } }, { key: "setVolume", value: function (e) { return this.set("volume", e) } }]), Player }(); return v(), p(), Player });

$(document).ready(function () {

    /* nav backdrop */
    var navBackTrigger = document.createElement('div');
    navBackTrigger.setAttribute('id', 'navBackTrigger');
    document.getElementById('page').insertBefore(navBackTrigger, document.getElementById('middle'));

    navBackTrigger.addEventListener('click', function () {
        document.getElementById('navBackTrigger').style.display = 'none';
        var tmpniKeepOpen = document.querySelectorAll('header nav .nav.navbar-nav > li');
        Array.prototype.forEach.call(tmpniKeepOpen, function (el) {
            el.classList.remove('keep-open', 'hover', 'blurred');
            //el.classList.add('closed');
        });
    });


    /* mobile nav */
    $('header nav .nav.navbar-nav li.dropdown').prepend('<div class="trigger"></div>');
    $('header nav .nav.navbar-nav').on('click', '.trigger', function (e) {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().toggleClass('open');
        }
    });

    /* hoverintents */
    // THis now put into Hard code for AU Nav
    //$('header nav .nav.navbar-nav > li .wrapper').wrapInner( '<div class="lmt"></div>');

    /*if ( $('header nav .nav.navbar-nav template').length ) {
        $('header nav .nav.navbar-nav template').each(function() {
            $(this).after($(this)[0].innerHTML);
        });
    }|*/

    /* check if 3rd level active */
    if ($('header nav .nav.navbar-nav > li.active > .wrapper > ul > li.active > ul > li.dropdown.active').length) {
        $('header nav .nav.navbar-nav > li.active > .wrapper > ul > li.active > ul > li.dropdown.active').each(function () {
            $('figure', $(this).parent().parent().parent()).addClass('faded');
        });
    }


    var navLis = document.querySelectorAll('header nav .nav.navbar-nav li');
    Array.prototype.forEach.call(navLis, function (el) {
        hoverintent(el,
            function () {
                this.classList.add('hover');
                //get tallest child list of current 1st level item
                if ($(this).is('header nav .nav.navbar-nav > li.dropdown')) {

                    var topHeight2Level = 0;

                    $('.wrapper > ul > li', $(this)).each(function () {
                        topHeight2Level += $(this).height();
                    });

                    $('.wrapper > ul > li ul', $(this)).each(function () {
                        topHeight2Level = topHeight2Level > $(this).height() ? topHeight2Level : $(this).height();
                    });

                    $('figure', $(this)).each(function () {
                        topHeight2Level = topHeight2Level > $(this).height() ? topHeight2Level : $(this).height();
                    });


                    if ($('header nav .nav.navbar-nav .dropdown > .trigger').css('position') !== 'absolute') {
                        $('.wrapper > ul', $(this)).css({ 'min-height': topHeight2Level });
                        $('.wrapper > ul > li ul', $(this)).css({ 'min-height': topHeight2Level });
                    }
                }


                if ($(this).is('header nav .nav.navbar-nav > li > .wrapper > ul > li > ul > li.dropdown')) {
                    $('figure', $(this).parent().parent().parent()).addClass('faded');
                }


            }, function () {
                this.classList.remove('hover');
                if ($(this).is('header nav .nav.navbar-nav > li.dropdown')) {
                    if ($('figure', $(this)).hasClass('faded') && !$('.wrapper > ul > li > ul > li.active', $(this)).length) {
                        $('figure', $(this)).removeClass('faded');
                    }
                }
            }).options({ timeout: 250 });
    });



    $('header nav .nav.navbar-nav li:not(.active)').on('mouseenter', function (e) {
        $(this).siblings('.active').addClass('blurred');

        //$('header nav .nav.navbar-nav > li > ul > li.dropdown.active').addClass('blurred');
    });
    $('header nav .nav.navbar-nav li:not(.active)').on('mouseleave', function (e) {
        if (!$(this).hasClass('keep-open')) {
            $(this).siblings('.active').removeClass('blurred');
        }
    });

    // THis now put into Hard code for AU Nav
    //$('header nav .nav.navbar-nav > li.dropdown > a').each(function() {
    //	$('.wrapper', $(this).parent()).prepend('<div class="titlebar"><button class="navclose"></button></div>');		
    //});
    $('header nav .nav.navbar-nav').on('click', '.titlebar > .navclose', function () {
        $('header nav .nav.navbar-nav > li.keep-open').removeClass('keep-open').addClass('closed');
        $('header nav .nav.navbar-nav > li.blurred').removeClass('blurred');
        $(this).closest(".dropdown.hover").removeClass('hover');
        document.getElementById('navBackTrigger').style.display = 'none';
    });

    // KEEP OPEN
    $('header nav .nav.navbar-nav > li').on('mouseenter', function (e) {
        document.getElementById('navBackTrigger').style.display = 'block';
        $('header nav .nav.navbar-nav > li.keep-open').removeClass('keep-open');
        $('header nav .nav.navbar-nav > li').removeClass('closed');
        $(this).addClass('keep-open');
        if (!$('header nav .nav.navbar-nav > li.active').hasClass('keep-open')) {
            $('header nav .nav.navbar-nav > li.active').addClass('blurred');
        }
    });
    $('header nav .nav.navbar-nav > li').on('mouseleave', function (e) {
        if ($(this).hasClass('keep-open') && !$(this).hasClass('dropdown')) {
            $(this).removeClass('keep-open');
            $(this).siblings('.active').removeClass('blurred');
        }
    });


    /* CRUMBNAV */
    if ($('#crumbnav').length) {

        $('#crumbnav').on('mouseenter', '> ul > li:not(:last-child)', function (e) {
            $('#crumbnav > ul > li:last-child').addClass('blurred');
        });
        $('#crumbnav').on('mouseleave', '> ul > li:not(:last-child)', function (e) {
            $('#crumbnav > ul > li:last-child').removeClass('blurred');
        });
    }
    /* end CRUMBNAV */

    /* LANGUAGES DROPDOWN */
    $('#top .lang-switch .lang-trigger').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('#top .lang-switch .lang-drop').toggleClass('visible');
    });
    /* end LANGUAGES DROPDOWN */


    /* INITIAL HEADER POSITIONING */
    $headerEl.addClass('sticky');
    $('#page').css({ 'padding-top': $headerEl.outerHeight(true) });
    /* end INITIAL HEADER POSITIONING */

    //console.log('Third level height: ' + $('header nav .nav.navbar-nav > li > ul > li.active > ul').outerHeight(false));


    /* EQUALIZE .panel */
    if ($('div:not(#shares-panel) .panel').length) {
        $('div:not(#shares-panel) .panel').closest('.row').each(function () {
            var panelMaxH = 0;
            $(this).find('.panel').each(function () {
                var panelH = 0
                $(this).children().each(function () {
                    panelH = panelH + $(this).outerHeight(true);
                });
                panelMaxH = Math.max(panelMaxH, panelH);
            });
            $(this).find('.panel').css({ 'min-height': panelMaxH + 5 });//temporary accounting for webfont - shoud be recalculated after webfont is loaded
        });
    }
    /* end EQUALIZE .panel */


    /* EQUALIZE .card.type-1 */
    if ($('.card.type-1 .equalize').length) {
        $parentRow = $('.card.type-1 .equalize').parent().parent().closest('.row').each(function () {
            var maxH = 0;
            $(this).find('.card.type-1 .equalize .cnt').each(function () {
                var tmpH = $(this).outerHeight(true);
                maxH = Math.max(maxH, tmpH);
            });
            $(this).find('.card.type-1 .equalize').css({ 'min-height': maxH });
        });
    }
    /* end EQUALIZE .card.type-1 */
    /* EQUALIZE .card.type-2 */
    if ($('.card.type-2 .equalize').length) {
        $parentRow = $('.card.type-2 .equalize').parent().parent().parent().closest('.row').each(function () {
            var maxH = 0;
            $(this).find('.card.type-2 .equalize .title').each(function () {
                var tmpH = $(this).outerHeight(true);
                maxH = Math.max(maxH, tmpH);
            });
            $(this).find('.card.type-2.video-image').append('<span class="playico"></span>');
            $(this).find('.card.type-2 .equalize').css({ 'min-height': maxH });
            $(this).find('.card.type-2 > img').css({ 'border-bottom-width': maxH });
            $(this).find('.card.type-2.video-image .playico').css({ 'bottom': maxH });
        });
        if ($('section.bizmod-s-3').length) {
            positionBizModelBgs();
        }
    }
    /* end EQUALIZE .card.type-2 */
    /* EQUALIZE .card.type-3 */
    if ($('.card.type-3 .equalize').length) {
        $parentRow = $('.card.type-3 .equalize').parent().parent().parent().closest('.row').each(function () {
            var maxH = 0;
            $(this).find('.card.type-3 .equalize').each(function () {
                var th = 0;
                var bh = 0;
                if ($('.title', $(this)).length) {
                    th = $('.title', $(this)).eq(0).outerHeight(true);
                }
                if ($('.body', $(this)).length) {
                    bh = $('.body', $(this)).eq(0).outerHeight(true);
                }
                var tmpH = th + bh;
                maxH = Math.max(maxH, tmpH);
            });
            $(this).find('.card.type-3 .equalize').css({ 'min-height': maxH });
            $(this).find('.card.type-3.video-image .image').append('<span class="playico"></span>');
        });
    }
    /* end EQUALIZE .card.type-3 */
    /* EQUALIZE .card.type-5 */
    if ($('.card.type-5 .equalize').length) {
        $parentRow = $('.card.type-5 .equalize').parent().parent().parent().closest('.row').each(function () {
            var maxH = 0;
            $(this).find('.card.type-5 .equalize .title').each(function () {
                var tmpH = $(this).outerHeight(true);
                maxH = Math.max(maxH, tmpH);
            });
            $(this).find('.card.type-5.video-image').append('<span class="playico"></span>');
            $(this).find('.card.type-5 .equalize').css({ 'min-height': maxH });
            $(this).find('.card.type-5 > img').css({ 'border-bottom-width': maxH });
            $(this).find('.card.type-5.video-image .playico').css({ 'bottom': maxH });
        });
    }
    /* end EQUALIZE .card.type-5 */
    /* EQUALIZE .award */
    if ($('.award .equalize').length) {
        $parentRow = $('.award .equalize').parent().parent().closest('.row').each(function () {
            var maxH = 0;
            $(this).find('.award .equalize').each(function () {
                var tmpH = $(this).outerHeight(true);
                maxH = Math.max(maxH, tmpH);
            });
            $(this).find('.award .equalize').css({ 'min-height': maxH });
        });
    }

    /* EQUALIZE .medialib */
    if ($('.medialib .equalize').length) {
        $parentRow = $('.medialib .equalize').closest('.row').each(function () {
            var maxH = 0;
            $(this).find('.medialib .equalize .wrapper').each(function () {
                var tmpH = $(this).outerHeight(true);
                maxH = Math.max(maxH, tmpH);
            });
            $(this).find('.medialib .equalize').css({ 'min-height': maxH });
        });
    }
    if ($('.imglib .equalize').length) {
        $parentRow = $('.imglib .equalize').closest('.row').each(function () {
            var maxH = 0;
            $(this).find('.imglib .equalize .wrapper').each(function () {
                var tmpH = $(this).outerHeight(true);
                maxH = Math.max(maxH, tmpH);
            });
            $(this).find('.imglib .equalize').css({ 'min-height': maxH });
        });
    }

    // award2
    if ($('.award2 .title > span').length) {
        var awardTitleMaxH = 0;
        $('.award2 .title > span').each(function () {
            var tmpH = $(this).outerHeight(true);
            awardTitleMaxH = Math.max(awardTitleMaxH, tmpH);
        });
        $('.award2 .title').css({ 'min-height': awardTitleMaxH });
        console.log('Award title is set.');
    }
    /* end EQUALIZE .award */

    /* EQUALIZE .person-thumbnail */
    if ($('.person-thumbnail .equalize').length) {
        $parentRow = $('.person-thumbnail .equalize').parent().closest('.row').each(function () {
            var maxH = 0;
            $(this).find('.person-thumbnail .equalize .meta').each(function () {
                var tmpH = $(this).outerHeight(true);
                maxH = Math.max(maxH, tmpH);
            });
            $(this).find('.person-thumbnail .equalize').css({ 'min-height': maxH });
        });
    }
    /* end EQUALIZE .card.type-1 */

});


var $headerEl = $('#page header'),
    $headerNavEl = $('#page header nav'),
    $headerTopEl = $('#top'),
    $topElInitialHeight = $('#page header nav').outerHeight(false);
previousScroll = 0; // previous scroll position
$hSizeEl = $headerTopEl;


// on scroll hide/show menu
$(window).scroll(function () {
    if (gknScreenSize !== 'mobile') {
        $hSizeEl = $headerTopEl;
    } else {
        $hSizeEl = $headerEl;
    }

    //console.log('header outer height:' + $headerNavEl.outerHeight(false));
    var currentScroll = $(this).scrollTop();

    if (currentScroll <= $hSizeEl.outerHeight(false)) {
        $headerEl.css({ 'top': -$(this).scrollTop() });
    } else {
        $headerEl.css({ 'top': -$hSizeEl.outerHeight(false) });
    }

    // replace previous scroll position with new one
    previousScroll = currentScroll;

});


/* homepage hero */
$('#home-hero .shortcuts a, #divisions-hero .shortcuts a').on('click', function (e) {
    e.preventDefault();
    $('#home-hero .item.active, #divisions-hero .item.active, #home-hero .shortcuts a.active, #divisions-hero .shortcuts a.active').removeClass('active');
    $(this).addClass('active');
    $('#home-hero .item, #divisions-hero .item').eq(getItemIndex(this)).addClass('active');
});

/* end homepage hero */

/* carousel type 2 */
$('.gkncarousel.type-2').each(function (carouselIndex) {
    $('.slides .cntnr .item', $(this)).eq(0).addClass('active');
    $('.bar .tabs a', $(this)).eq(0).addClass('active');
});
$('.gkncarousel.type-2 .bar .tabs a').on('click', function (e) {
    e.preventDefault();
    carouselSlideTo(getItemIndex(this), $(this).closest('.gkncarousel.type-2'));
});
$('.gkncarousel.type-2 .bar .nav a.prev').on('click', function (e) {
    e.preventDefault();
    carouselToPrevSlide($(this).closest('.gkncarousel.type-2'));
});
$('.gkncarousel.type-2 .bar .nav a.next').on('click', function (e) {
    e.preventDefault();
    carouselToNextSlide($(this).closest('.gkncarousel.type-2'));
});

function getItemIndex(el) {
    var family = $.makeArray($(el).parent().children());
    return family.indexOf(el);
}
function carouselToPrevSlide($carousel) {
    var currentActive = $('.slides .cntnr .item.active', $carousel)[0];
    var slidesLength = $('.slides .cntnr .item', $carousel).length;
    if (slidesLength < 2) {
        return;
    }
    if (currentActive) {
        var currentIndex = getItemIndex(currentActive);
        if (currentIndex > 0) {
            carouselSlideTo(currentIndex - 1, $carousel);
        } else {
            carouselSlideTo(slidesLength - 1, $carousel);
        }
    } else {
        carouselSlideTo(slidesLength - 1, $carousel);
    }
}
function carouselToNextSlide($carousel) {
    var currentActive = $('.slides .cntnr .item.active', $carousel)[0];
    var slidesLength = $('.slides .cntnr .item', $carousel).length;
    if (slidesLength < 2) {
        return;
    }
    if (currentActive) {
        var currentIndex = getItemIndex(currentActive);
        if (currentIndex < slidesLength - 1) {
            carouselSlideTo(currentIndex + 1, $carousel);
        } else {
            carouselSlideTo(0, $carousel);
        }
    } else {
        carouselSlideTo(1, $carousel);
    }
}
function carouselSlideTo(index, $carousel) {
    if ($('.slides .cntnr .item', $carousel).length < 2) {
        return;
    }
    $('.slides .cntnr .item.active', $carousel).removeClass('active');
    $('.slides .cntnr .item', $carousel).eq(index).addClass('active');
    $('.bar .tabs a.active', $carousel).removeClass('active');
    $('.bar .tabs a', $carousel).eq(index).addClass('active');
}
/* end carousel type 2 */

/* carousel type 1 */
$('.gkncarousel.type-1').each(function (carouselIndex) {
    var $items = $('.slides .cntnr .item', $(this));
    $items.eq(0).addClass('active');
    if ($items.length < 2) {
        $('a.next, a.prev', $(this)).css({ 'display': 'none' });
        return;
    }
    var $indicatorsContainer = $('.indicators', $(this)).eq(0);
    $('.slides .cntnr .item', $(this));
    for (var i = 0; i < $items.length; i++) {
        $indicatorsContainer.append('<a href="#">' + (i + 1) + '</a>');
    }
    $indicatorsContainer.on('click', 'a', function (e) {
        e.preventDefault();
        carouselSlideTo2(getItemIndex(this), $(this).closest('.gkncarousel.type-1'));
    });
    $('a', $indicatorsContainer).eq(0).addClass('active');
    //$('.bar .tabs a', $(this)).eq(0).addClass('active');
});
/*$('.gkncarousel.type-1 .bar .tabs a').on('click', function(e) {
    e.preventDefault();
    carouselSlideTo(getItemIndex(this), $(this).closest('.gkncarousel.type-2'));
});*/




$('.gkncarousel.type-1 a.prev').on('click', function (e) {
    e.preventDefault();
    carouselToPrevSlide2($(this).closest('.gkncarousel.type-1'));
});
$('.gkncarousel.type-1 a.next').on('click', function (e) {
    e.preventDefault();
    carouselToNextSlide2($(this).closest('.gkncarousel.type-1'));
});
/* //taking one from carousel type 1
function getItemIndex(el) {
    var family = $.makeArray($(el).parent().children());
    return family.indexOf(el);
}*/
function carouselToPrevSlide2($carousel) {
    var currentActive = $('.slides .cntnr .item.active', $carousel)[0];
    var slidesLength = $('.slides .cntnr .item', $carousel).length;
    if (slidesLength < 2) {
        return;
    }
    if (currentActive) {
        var currentIndex = getItemIndex(currentActive);
        if (currentIndex > 0) {
            carouselSlideTo2(currentIndex - 1, $carousel);
        } else {
            carouselSlideTo2(slidesLength - 1, $carousel);
        }
    } else {
        carouselSlideTo2(slidesLength - 1, $carousel);
    }
}
function carouselToNextSlide2($carousel) {
    var currentActive = $('.slides .cntnr .item.active', $carousel)[0];
    var slidesLength = $('.slides .cntnr .item', $carousel).length;
    if (slidesLength < 2) {
        return;
    }
    if (currentActive) {
        var currentIndex = getItemIndex(currentActive);
        if (currentIndex < slidesLength - 1) {
            carouselSlideTo2(currentIndex + 1, $carousel);
        } else {
            carouselSlideTo2(0, $carousel);
        }
    } else {
        carouselSlideTo2(1, $carousel);
    }
}
function carouselSlideTo2(index, $carousel) {
    var $slides = $('.slides', $carousel);
    if ($('.slides .cntnr .item', $carousel).length < 2) {
        return;
    }
    $slides.removeClass('from-left from-right');
    var allSlidesLength = $('.slides .cntnr .item', $carousel).length;
    var $currentSlide = $('.slides .cntnr .item.active', $carousel);
    var $previousSlide = $('.slides .cntnr .item.ex', $carousel);
    var currentSlideIndex = getItemIndex($currentSlide[0]);
    $currentSlide.removeClass('active').addClass('ex');
    var $newSlide = $('.slides .cntnr .item', $carousel).eq(index);

    var directionalClass = "from-left";
    if (((currentSlideIndex < index) && !(currentSlideIndex === 0 && index === allSlidesLength - 1)) || (index === 0 && currentSlideIndex === allSlidesLength - 1)) {
        directionalClass = "from-right";
    }
    $slides.addClass(directionalClass);
    $newSlide.addClass('active');
    $previousSlide.removeClass('ex');
    $('.indicators a.active', $carousel).removeClass('active');
    $('.indicators a', $carousel).eq(index).addClass('active');


    /* Equalize cards */
    var maxH = 0;
    $newSlide.find('.card.type-2 .equalize .title').each(function () {
        var tmpH = $(this).outerHeight(true);
        maxH = Math.max(maxH, tmpH);
    });
    $newSlide.find('.card.type-2 .equalize').css({ 'min-height': maxH });
    $newSlide.find('.card.type-2 > img').css({ 'border-bottom-width': maxH });
    $newSlide.find('.card.type-2.video-image .playico').css({ 'bottom': maxH });
}


$('.gkncarousel.type-1.nnp').each(function () {
    var self = $(this);
    self.set = setInterval(function () {
        console.log(self);
        carouselToNextSlide2(self);
    }, 6000);
});



/* end carousel type 1 */


/* video modal */
$('.video-modal').on('show.bs.modal', function (event) {
    var link = $(event.relatedTarget).attr('href');
    $('.video-modal .videoWrapper iframe').attr('src', getVideoIframeLink(link));
});
$('.video-modal').on('hidden.bs.modal', function (event) {
    $('.video-modal .videoWrapper iframe').attr('src', '');
});
function getVideoIframeLink(link) {
    var patternVimeo = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
    var patternYoutube = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
    if (patternVimeo.test(link)) {
        var replacement = 'https://player.vimeo.com/video/$1';
        return link.replace(patternVimeo, replacement);
    }
    if (patternYoutube.test(link)) {
        var replacement = 'https://www.youtube.com/embed/$1';
        return link.replace(patternYoutube, replacement);
    }
}

$('.video-image, a.video-text').on('click', function (e) {
    e.preventDefault();
    var link = $(this).attr('href');
    $('.video-modal .videoWrapper').append('<iframe src="' + getVideoIframeLink(link) + '" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    $('.video-modal').modal('show');
});

$('#page').append('<div class="modal fade video-modal"><div class="modal-dialog modal-lg"><div class="modal-content"><button type="button" class="close" data-dismiss="modal">×</button><div class="videoWrapper"></div></div></div></div>');
$('.video-modal').on('hidden.bs.modal', function (e) {
    $('.video-modal .videoWrapper iframe').remove();
})
/* end video modal */


/* Tabs */
if ($('.tabs').length) {

    $('.tabs a').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href').split('#')[1];
        var $tabToOpen = $('.tabbed-content #' + href);

        $tabToOpen.parent().find('.tab-content').css({ 'display': 'none' }).removeClass('active');
        $tabToOpen.css({ 'display': 'block' }).addClass('active');
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');

        if ($tabToOpen.closest('.tabbed-content').find('.tab-content[data-big-bg]').length) {
            var optionalBgUrl = $tabToOpen.attr('data-big-bg');
            if (optionalBgUrl !== undefined) {
                $tabToOpen.closest('.tabbed-content').css({ 'background-image': 'url(' + optionalBgUrl + ')' });
            } else {
                $tabToOpen.closest('.tabbed-content').css({ 'background-image': 'initial' });
            }
        }
    });
}
/* end Tabs */

/* Accordion */
$('ul.accordion li:not(.expanded)').addClass('collapsed');
$('ul.accordion li .title').on('click', function (e) {
    e.preventDefault();
    var $container = $(this).parent();
    if ($container.hasClass('collapsed')) {
        $container.parent().find('li.expanded').removeClass('expanded animateIn').addClass('collapsed animateOut');
        $container.removeClass('collapsed animateOut').addClass('expanded animateIn');
        /*$('html, body').stop().animate({scrollTop: $container.offset().top + parseInt($('#page>header').css('top'), 10) - parseInt($('#page').css('padding-top'), 10) }, 600 );*/
    } else {
        $container.removeClass('expanded animateIn').addClass('collapsed animateOut');
    }
});
/* end Accordion */




/* Anchor navigation */
$('nav.navbar.separated a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var dest = $(this).attr('href');
    if ($('#page > header > nav.navbar').length) {
        $('html,body').animate({ scrollTop: $(dest).offset().top - parseInt($('#page > header > nav.navbar').outerHeight(), 10) }, 'slow');
    } else {
        $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow');
    }
});
/* end Anchor navigation */


/* NEW PAGINATION */
$('.pagination').each(function () {
    var targetAttr = $(this).attr('data-target');
    if (targetAttr == "") {
        return;
    }
    var $targets = $(targetAttr);
    /*$targets.each(function(){
        $(this).attr('data-display', $(this).css('display'));
    });*/
    var limitAttr = parseInt($(this).attr('data-limit'), 10);
    var numPages = Math.ceil($targets.length / limitAttr);
    var buttonsHtml = '';
    for (var i = 0; i < numPages; i++) {
        if (i !== 0) {
            buttonsHtml += '<a href="#">' + (i + 1) + '</a> ';
        } else {
            buttonsHtml += '<a href="#" class="active">' + (i + 1) + '</a> ';
        }
    }
    $(this).html(buttonsHtml);
    $(this).on('click', 'a', function (e2) {
        e2.preventDefault();
        var $allTargets = $($(this).parent().attr('data-target'));
        var limit = parseInt($(this).parent().attr('data-limit'));
        var newPage = parseInt($(this).text());
        $allTargets.css({ 'display': 'none' });
        var $currentTargets = $allTargets.slice((newPage - 1) * limit, newPage * limit)
        $currentTargets.css({ 'display': '' });
        $('html,body').animate({ scrollTop: $currentTargets.eq(0).offset().top - parseInt($('#page > header > nav.navbar').outerHeight(), 10) }, 100);
        $('a.active', $(this).parent()).removeClass('active');
        $(this).addClass('active');
    })

    /*init*/
    $targets.css({ 'display': 'none' });
    $targets.slice(0, limitAttr).css({ 'display': '' });
});
/* end NEW PAGINATION */


/* GKN AT GLANCE WIDGET */
if ($('.gkn-at-glance .widget').length) {
    var $atGlanceWidget = $('.gkn-at-glance .widget').eq(0);
    $('.mid > div:not(:first)', $atGlanceWidget).css({ 'display': 'none' });
    $('.circle', $atGlanceWidget).eq(0).addClass('active');
    $('.circle', $atGlanceWidget).on('click', function (e) {
        e.preventDefault();

        var selected = $(this).attr('href');
        $('.mid > div', $atGlanceWidget).css({ 'display': 'none' });
        $('.mid > div' + selected, $atGlanceWidget).css({ 'display': '' });
        $('.circle.active', $atGlanceWidget).removeClass('active');
        $(this).addClass('active');
    });
}
/* end GKN AT GLANCE WIDGET */


/* parallax */

function parallaxIt() {
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    $fwindow.on('scroll resize', function () {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    });

    $('section.parallax').each(function () {
        var $bg = $('img.bg', $(this)).eq(0);
        var slotHeight = $(this).innerHeight();
        var tmpParent = $(this);

        $fwindow.on('scroll resize', function () {
            var bgHeight = $bg.outerHeight();
            var viewRange = $fwindow.height() + slotHeight;
            var posInView = -(scrollTop - tmpParent.offset().top);
            var bgRange = -(bgHeight);
            var yPos = Math.max((posInView / viewRange) * (-bgHeight), (-bgHeight + slotHeight));
            $bg.css({ 'top': yPos });
        });
    });
    $fwindow.trigger('scroll');
};
if ($('section.parallax').length) {
    parallaxIt();
}
/* end parallax */

/* Business model backgrounds */
if ($('section.bizmod-s-3').length) {
    positionBizModelBgs();
}
function positionBizModelBgs() {
    var section3Half = Math.floor($('section.bizmod-s-3').outerHeight() / 2);
    var $section1 = $('section.bizmod-s-1');
    var $section2 = $('section.bizmod-s-2');
    var $section2TabCon = $('section.bizmod-s-2 .tabbed-content');
    var $section4 = $('section.bizmod-s-4');

    if ($section1.length && $section2.length) {
        var s1BgOffset = 510 - Math.floor(section3Half + $section2.outerHeight());
        $section1.css({ 'background-position': 'center bottom ' + s1BgOffset + 'px' })
    }
    if ($section2.length) {
        var s2BgOffset = 210 - section3Half;
        var s2TCBgOffset = 150 - section3Half;
        $section2.css({ 'background-position': 'center bottom ' + s2BgOffset + 'px' })
        $section2TabCon.css({ 'background-position': 'center bottom ' + s2TCBgOffset + 'px' })
    }
    if ($section4.length) {
        var s4BgOffset = 210 - section3Half;
        $section4.css({ 'background-position': 'center top ' + s4BgOffset + 'px' })
    }
}

/* end Business model backgrounds */

/* Scroll to top */
$('body').prepend('<a href="javascript:" id="return-to-top"></a>');

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});
/* end Scroll to top */

/* Show Fokker redirect modal */
if ($('.modal.fokker-modal').length && Cookies.get('seenFokkerModal') === undefined) {
    var x = document.referrer;
    if (x.includes("fokker.com")) {
        $('.modal.fokker-modal').modal('show');
    }
}
$('.modal.fokker-modal').on('hide.bs.modal', function (e) {
    Cookies.set('seenFokkerModal', '1');
})
/* end Fokker redirect modal */

/* video banner */
var fullScreenApiSupported = function (el) {
    if (el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen) {
        return true;
    } else {
        return false;
    }
};

var requestFullscreen = function (ele) {
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
};

var exitFullscreen = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else {
        console.log('Fullscreen API is not supported.');
    }
};




var vidbnrEls = document.querySelectorAll('.vidbnr');

if (vidbnrEls.length) {
    var bnrVidIframe;
    var bnrVidPlayer;
    Array.prototype.forEach.call(vidbnrEls, function (vidbnrEl) {

        // should video play in fullpage modal?
        if (vidbnrEl.classList.contains('fullpage')) {
            // modal exists?
            if (document.getElementById('vidmodfullwin') === null) {
                var pageNode = document.getElementById('page');
                var newModNode = document.createElement('div');

                newModNode.setAttribute('id', 'vidmodfullwin');
                /*if (!vidbnrEl.classList.contains('autovisible')) {
                    newModNode.classList.add('hidden');
                }*/
                newModNode.innerHTML = vidbnrEl.querySelector('.vidbg').innerHTML;
                pageNode.parentNode.insertBefore(newModNode, pageNode.nextSibling);
            }

            bnrVidIframe = document.getElementById('vidmodfullwin').querySelector('iframe');
            bnrVidPlayer = new Vimeo.Player(bnrVidIframe);

            document.querySelector('#vidmodfullwin button.closebtn').addEventListener('click', function (e) {
                document.getElementById('vidmodfullwin').classList.add('hidden');
                bnrVidPlayer.pause();
            });


            //remove original iframe 
            var datavidurl = vidbnrEl.querySelector('.vidbg iframe').getAttribute('src');
            vidbnrEl.querySelector('.vidbg').setAttribute('data-vidurl', datavidurl);
            vidbnrEl.querySelector('.vidbg iframe').remove();

            //original play buttons open fullpage modal
            document.querySelector('.vidbnr .playbtn').addEventListener('click', function (e) {
                document.getElementById('vidmodfullwin').classList.remove('hidden');
                bnrVidPlayer.play();
            });

        } else {
            console.log('dupa');
            bnrVidIframe = document.querySelector('.vidbnr > .vidbg > .embed-responsive > iframe');
            bnrVidPlayer = new Vimeo.Player(bnrVidIframe);

            document.querySelector('.vidbnr .playbtn').addEventListener('click', function (e) {
                document.querySelector('.vidbnr .vidoverlay').classList.add('hidden');
                bnrVidPlayer.play();
                var videoBg = document.querySelector('.vidbnr > .vidbg');

                //if (e.target.matches('.vidbnr.fullscreen .playbtn') && fullScreenApiSupported(videoBg)) {
                if ($(this).is('.vidbnr.fullscreen .playbtn') && fullScreenApiSupported(videoBg)) {
                    requestFullscreen(videoBg);
                }
            });

            document.querySelector('.vidbnr .closebtn').addEventListener('click', function (e) {
                document.querySelector('.vidbnr .vidoverlay').classList.remove('hidden');
                bnrVidPlayer.pause();
                exitFullscreen();
            });

        }

    });
}
/* end video banner */


/* button expander */
if ($('.btnexpander').length) {
    var expbreakpoint = {};
    expbreakpoint.refreshValue = function () {
        this.value = window.getComputedStyle(document.querySelector('.btnexpander'), ':before').getPropertyValue('content').replace(/\"/g, '');
    };
    $(window).resize(function () {
        expbreakpoint.refreshValue();
        //console.log(expbreakpoint.value);
    }).resize();


    function moveExpmodal(ind) {
        ind = parseInt(ind, 10) + 1;
        var colsInRow;
        if (expbreakpoint.value == 'two') {
            colsInRow = 2;
        } else if (expbreakpoint.value == 'one') {
            colsInRow = 1;
        } else {
            colsInRow = 3;
        }

        var afterind = Math.ceil((ind) / colsInRow) * colsInRow;
        if (parseInt($('.expmodal').attr('data-afterind')) == (afterind - 1)) {
            console.log('not move');
        } else {
            $('.expmodal').attr('data-afterind', (afterind - 1));
            $('.expmodal').insertAfter($('.btnexpander > .container > .row > .col-lg-4.col-md-6').eq(afterind - 1));
            console.log('move');
        }
    }


    $('.btnexpander .expbtn').each(function (index) {
        $(this).attr('data-id', index);
        $(this).parent().attr('data-id', index);
    });
    $('.btnexpander .expbtn').on('click', function () {
        var dataid = $(this).attr('data-id');
        var $details = $(this).siblings(".details");
        //console.log(dataid);
        moveExpmodal(dataid);


        if ($(this).parent().hasClass('active')) {
            $('.btnexpander .expitem.active').removeClass('active');
        } else {
            $('.btnexpander .expitem.active').removeClass('active');
            $(this).parent().addClass('active');
        }
        $('.btnexpander .expmodal .exptop h3').html($('.title', $details).html());
        $('.btnexpander .expmodal .expmid .img img').attr('src', $('.photo', $details).attr('data-src'));
        $('.btnexpander .expmodal .expmid .copy').html($('.copy', $details).html());
        $('.btnexpander .expmodal .expfooter .col-sm-12').html($('.buttons', $details).html());
        //console.log($('.btnexpander .expmodal').attr('data-id'))
        if ($('.btnexpander .expmodal').attr('data-id') == dataid) {
            $('.btnexpander .expmodal').toggleClass('opened');
        } else {
            $('.btnexpander .expmodal').removeClass('opened');
            $('.btnexpander .expmodal').addClass('opened');
        }
        $('.btnexpander .expmodal').attr('data-id', dataid);
    });
    $('.btnexpander .expmodal .exptop .expnavbtns button.clos').on('click', function () {
        $('.btnexpander .expmodal').removeClass('opened');
    });
    $('.btnexpander .expmodal .exptop .expnavbtns button.prev').on('click', function () {
        var currentID = parseInt($('.btnexpander .expmodal').attr('data-id'), 10);
        var btnsNr = $('.btnexpander .expitem').length;
        if (currentID == 0) {
            $('.btnexpander .expbtn').eq(btnsNr - 1).click();
        } else {
            $('.btnexpander .expbtn').eq(currentID - 1).click();
        }
    });
    $('.btnexpander .expmodal .exptop .expnavbtns button.next').on('click', function () {
        var currentID = parseInt($('.btnexpander .expmodal').attr('data-id'), 10);
        var btnsNr = $('.btnexpander .expitem').length;
        if (currentID == btnsNr - 1) {

            $('.btnexpander .expbtn').eq(0).click();
        } else {
            $('.btnexpander .expbtn').eq(currentID + 1).click();
        }
    });
}
/* end button expander */

/* Powder Metal 2.0 */
if ($('.powdermet-20').length) {
    $('.powdermet-20 .cntbtns .item').on('click', function (e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.powdermet-20 .cntbtns .item.active').removeClass('active');
            $(this).addClass('active');
        }

    });
}

/* end Powder Metal 2.0 */



/* file download tooltip */
if ($('.file-blocks .item .info button.ttip').length) {
    $('.file-blocks .item .info button.ttip').on('mouseenter', function () {
        $(this).addClass('active');
        if ($(this).parent().parent().parent().position().top < 115) {

            if ($(this).parent().parent().parent().parent().innerHeight() > 250) {
                $(this).addClass('below');
            } else {
                $(this).addClass('left');
            }
        }
    });
    $('.file-blocks .item .info button.ttip').on('mouseleave', function () {
        $(this).removeClass('active below left right');
    });
}
/* end file download tooltip */


// awards modal
$('.award2.openmodal').on('click', function () {
    var titleHtml = $(this).find('.modaldata .title').eq(0).text();
    var mainHtml = $(this).find('.modaldata .main-content').eq(0).html();
    var logoHtml = $(this).find('.image').eq(0).html();
    var furtherHtml = $(this).find('.modaldata .further').eq(0).html();

    $('.award-modal .modal-body .title').html(titleHtml);
    $('.award-modal .modal-body .main-content').html(mainHtml);
    $('.award-modal .modal-body .logo').html(logoHtml);
    if (furtherHtml !== '' && furtherHtml !== undefined) {
        $('.award-modal .modal-body .further').html('Further reading:<br>' + furtherHtml);
    } else {
        $('.award-modal .modal-body .further').html('');
    }

    $('.award-modal').modal('show');
});

// show more button
$('.btn.collapsed.hideaftertoggle').on('click', function () {
    console.log('open');
    $(this).css({ 'display': 'none' });
});


// image library modal
$('.image-library .item .openmodal').on('click', function (e) {
    e.preventDefault();
    var description = $(this).parent().find('.info .wrapper').html();
    var imageUrl = $(this).attr('href');
    var keywords = $(this).parent().attr('data-keywords');

    $('.imglib-modal .modal-body .image').html('<img src="' + imageUrl + '" alt="">');
    $('.imglib-modal .modal-body .description').html(description);
    if (keywords !== undefined) {
        $('.imglib-modal .modal-body .keywords').html('<b>Keywords: </b>' + keywords);
    } else {
        $('.imglib-modal .modal-body .keywords').html('');
    }

    $('.imglib-modal').modal('show');
});




/* sniff mobile nav */
var winResizeTimeout;
var gknScreenSize;
function checkBreakpoint() {
    gknScreenSize = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
}

$(window).on('resize', function () {
    //debounce
    clearTimeout(winResizeTimeout);
    winResizeTimeout = setTimeout(checkBreakpoint, 250);
});
checkBreakpoint();

/* gkn_au.js */

/* gkn_gg_au.js */
$(document).ready(function () {

    $('.googleoptout').on('click', function (e) {
        e.preventDefault();
        var gaProperty = 'UA-123845352-4';
        var disableStr = 'ga-disable-' + gaProperty;
        if (!(document.cookie.indexOf(disableStr + '=true') > -1)) {
            document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        }
        window[disableStr] = true;
        alert("You have opted out from google analytics on this website.");
    });

    $('#siblingselector').on('change', function (e) {
        var sel = document.getElementById("siblingselector");
        var el = sel.selectedIndex
        //alert(sel[el].value);
        document.location.href = sel[el].value;
    });
});