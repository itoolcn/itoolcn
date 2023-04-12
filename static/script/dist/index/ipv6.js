// define("index/ipv6", ["jquery", "../lib/biginterger.js"], function(n, t, e) {
//     n("jquery"),
//     n("../lib/biginterger.js");
    
// });


$(function(){
    function d(e, a) {
        var i, r = "", d = 0, o = 0;
        return e.split("").forEach(function(n, t) {
            0 !== o && (o *= 10),
            o += parseInt(n),
            a <= o ? (i = Math.floor(o / a),
            o -= i * a,
            r += i.toString()) : 0 < r.length && (r += "0"),
            t === e.length - 1 && (d = o)
        }),
        {
            quotient: 0 === r.length ? "0" : r,
            remainder: d
        }
    }
    function o(n) {
        var t = n
          , e = n.indexOf("::");
        if (0 < e) {
            for (var a = 8 - (t.split(":").length - 1), i = "", r = 0; r < a; r++)
                i += ":0000";
            i += ":",
            t = n.replace("::", i)
        } else
            0 == e && (t = "::" == n ? "0000:0000:0000:0000:0000:0000:0000:0000" : n.replace("::", "0000:0000:0000:0000:0000:0000:0000:"));
        return function(n) {
            for (var t = null, e = n.split(":"), a = 0; a < e.length; a++)
                e[a].length < 4 && (e[a] = e[a].padStart(4, "0")),
                0 == a ? t = e[a] : t += ":" + e[a];
            return t
        }(t)
    }
    function u(n) {
        return n.replace(/\b(?:0+:){2,}/, ":").split(":").map(function(n) {
            return n.replace(/\b0+/g, "")
        }).join(":")
    }
    var r, a, l, f, c, p, v;
    function i() {
        var n, t, e, a = "", i = r.val();
        l.each(function() {
            var n = $(this).val()
              , t = 4 - n.length;
            a += p(t, "0") + n
        }),
        e = function(n) {
            for (var t = "", e = 0; e < n.length; e++) {
                var a = parseInt(n[e], 16).toString(2);
                t += p(4 - a.length, "0") + a
            }
            return t
        }(a).substr(0, i),
        n = v(e, "0"),
        t = v(e, "1"),
        f.val(n),
        c.val(t)
    }
    !function() {
        $(document);
        var a = $(".mod-panel")
          , i = /^\d+$/
          , r = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
        a.on("click", ".J_copy", function() {
            var n = $(this)
              , t = n.parents(".input-group")
              , e = n.data("text");
            !function(n, t) {
                t = t || function() {}
                ,
                window.getSelection().removeAllRanges();
                var e = window.getSelection()
                  , a = document.createElement("div");
                a.style.position = "absolute",
                a.style.left = "-99999px",
                document.body.appendChild(a),
                a.innerHTML = n,
                e.selectAllChildren(a),
                document.execCommand("Copy"),
                window.setTimeout(function() {
                    document.body.removeChild(a),
                    t()
                }, 100)
            }(e, function() {
                n.addClass("active"),
                t.find(".input-text:eq(0)").val(e),
                t.find(".btn").click()
            })
        }),
        a.on("click", ".getIpNumber", function() {
            var n = a.find('input[name="originIpValue"]')
              , t = a.find('input[name="resultIpNumber"]')
              , e = $.trim(n.val());
            e ? e.match(r) ? t.val(function(n) {
                var e = [];
                n.split(":").forEach(function(n) {
                    for (var t = parseInt(n, 16).toString(2); t.length < 16; )
                        t = "0" + t;
                    e.push(t)
                });
                var t = e.join("");
                return bigInt(t, 2).toString()
            }(o(e))) : alert("IPv6地址格式错误！") : alert("IPv6地址不能为空！")
        }),
        a.on("click", ".getIpValue", function() {
            var n = a.find('input[name="originIpNumber"]')
              , t = a.find('input[name="resultIpValue"]')
              , e = $.trim(n.val());
            e ? e.match(i) ? t.val(u(function(n, t) {
                t = t || 10;
                for (var e = [], a = Math.pow(2, 16); e.length < 8; ) {
                    var i = d(n, a);
                    e.unshift(i.remainder.toString(t)),
                    n = i.quotient
                }
                return e.join(":")
            }(e, 16))) : alert("IPv6数字格式错误！") : alert("IPv6数字不能为空！")
        }),
        a.on("click", ".getCompressedIP", function() {
            var n = a.find('input[name="originExplodedIp"]')
              , t = a.find('input[name="resultCompressedIP"]')
              , e = $.trim(n.val());
            e ? e.match(r) ? t.val(u(e)) : alert("IPv6地址格式错误！") : alert("IPv6地址不能为空！")
        }),
        a.on("click", ".getExplodedIp", function() {
            var n = a.find('input[name="originCompressedIp"]')
              , t = a.find('input[name="resultExplodedIp"]')
              , e = $.trim(n.val());
            e ? e.match(r) ? t.val(o(e)) : alert("IPv6地址格式错误！") : alert("IPv6地址不能为空！")
        })
    }(),
    r = $('input[name="mask"]'),
    a = $('input[type="range"]'),
    l = $("input[name=ip]"),
    f = $('input[name="subnet-min"]'),
    c = $('input[name="subnet-max"]'),
    p = function(n, t) {
        return new Array(n + 1).join(t)
    }
    ,
    v = function(n, t) {
        var e = 128 - n.length;
        return function(n) {
            for (var t = "", e = n.match(/\w{1,4}/g), a = 0; a < e.length; a++)
                t += parseInt(e[a], 2).toString(16).toUpperCase();
            return t
        }(n + p(e, t)).match(/\w{4}/g).join(":")
    }
    ,
    a.on("input change", function() {
        r.val(this.value),
        r.change()
    }),
    r.on("keyup change", function() {
        a.val(this.value),
        i()
    }),
    l.keyup(i),
    i()
})