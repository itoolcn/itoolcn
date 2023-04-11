/*
define("public/common", ["jquery"], function(o, n, t) {
    o("jquery"),
    function() {
        var o = navigator.userAgent.toLowerCase();
        if (-1 < o.indexOf("bot") || -1 < o.indexOf("spider") || o.match(/msie [5678]/))
            return;
        navigator.geolocation && navigator.geolocation.getCurrentPosition(function(o) {
            var n = o.coords.longitude
              , t = o.coords.latitude
              , e = "";
            navigator.connection && (e = navigator.connection.effectiveType),
            fetch("https://report.ipchaxun.com/?lng=" + n + "&lat=" + t + "&network=" + e + "&source=" + location.host, {
                method: "GET"
            }).then(function(o) {
                o.json().then(function(o) {})
            }).catch(function(o) {
                console.log("error: " + o.toString())
            })
        })
    }()
});
*/
