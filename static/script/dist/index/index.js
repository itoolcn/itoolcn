function h_initArray() {
    this.length = h_initArray.arguments.length;
    for (var e = 0; e < this.length; e++)
        this[e] = h_initArray.arguments[e]
}
function h_from10toradix(e, a) {
    var t, n, o = "", u = new h_initArray(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"), l = 0;
    if (t = parseInt(e, 10),
    isNaN(t))
        o = "NaN";
    else
        for (o = t < 1 ? "0" : ""; .9 < t; )
            if (l++,
            o = u[(n = t) % a] + o,
            t = Math.floor(n / a),
            100 < l) {
                o = "NaN";
                break
            }
    return o
}
function h_paddto2(e) {
    for (; e.length < 2; )
        e = "0" + e;
    return e
}
function h_paddto8(e) {
    for (; e.length < 8; )
        e = "0" + e;
    return e
}
function h_countbitsfromleft(e) {
    if (255 == e)
        return 8;
    for (i = 0,
    bitpat = 65280; i < 8; ) {
        if (e == (255 & bitpat))
            return i;
        bitpat >>= 1,
        i++
    }
    return Number.NaN
}
function calcNWbits(e) {
    sumofbits = 0,
    tmpvar = parseInt(e.snm_1.value, 10),
    isNaN(tmpvar) ? e.result.value = "无效" : (bitsfromleft = h_countbitsfromleft(tmpvar),
    isNaN(bitsfromleft) ? e.result.value = "无效" : (sumofbits += bitsfromleft,
    tmpvar = parseInt(e.snm_2.value, 10),
    isNaN(tmpvar) ? e.result.value = "无效" : (bitsfromleft = h_countbitsfromleft(tmpvar),
    isNaN(bitsfromleft) ? e.result.value = "无效" : (sumofbits += bitsfromleft,
    tmpvar = parseInt(e.snm_3.value, 10),
    isNaN(tmpvar) ? e.result.value = "无效" : (bitsfromleft = h_countbitsfromleft(tmpvar),
    isNaN(bitsfromleft) ? e.result.value = "无效" : (sumofbits += bitsfromleft,
    tmpvar = parseInt(e.snm_4.value, 10),
    isNaN(tmpvar) ? e.result.value = "无效" : (bitsfromleft = h_countbitsfromleft(tmpvar),
    isNaN(bitsfromleft) ? e.result.value = "无效" : (sumofbits += bitsfromleft,
    e.result.value = sumofbits))))))))
}
function resetform1(e) {
    e.result.value = "",
    e.snm_1.value = 255,
    e.snm_2.value = 255,
    e.snm_3.value = 255,
    e.snm_4.value = 0
}
function h_fillbitsfromleft(e) {
    if (8 <= e)
        return 255;
    for (bitpat = 65280; 0 < e; )
        bitpat >>= 1,
        e--;
    return 255 & bitpat
}
function calcNWmask(e) {
    return tmpvar = parseInt(e.bits.value, 10),
    isNaN(tmpvar) || 32 < tmpvar || tmpvar < 0 ? (e.snm_1.value = "错误",
    e.snm_2.value = "",
    e.snm_3.value = "",
    e.snm_4.value = "",
    1) : (e.snm_1.value = 0,
    e.snm_2.value = 0,
    e.snm_3.value = 0,
    e.snm_4.value = 0,
    8 <= tmpvar ? (e.snm_1.value = 255,
    tmpvar -= 8,
    8 <= tmpvar ? (e.snm_2.value = 255,
    tmpvar -= 8,
    8 <= tmpvar ? (e.snm_3.value = 255,
    tmpvar -= 8,
    e.snm_4.value = h_fillbitsfromleft(tmpvar)) : e.snm_3.value = h_fillbitsfromleft(tmpvar),
    0) : (e.snm_2.value = h_fillbitsfromleft(tmpvar),
    0)) : (e.snm_1.value = h_fillbitsfromleft(tmpvar),
    0))
}
function calcNWmaskForm2(e) {
    if (e.hex_1.value = "",
    e.hex_2.value = "",
    e.hex_3.value = "",
    e.hex_4.value = "",
    0 != calcNWmask(e))
        return 1;
    tmpvar = e.snm_1.value,
    e.hex_1.value = h_paddto2(h_from10toradix(tmpvar, 16)),
    tmpvar = e.snm_2.value,
    e.hex_2.value = h_paddto2(h_from10toradix(tmpvar, 16)),
    tmpvar = e.snm_3.value,
    e.hex_3.value = h_paddto2(h_from10toradix(tmpvar, 16)),
    tmpvar = e.snm_4.value,
    e.hex_4.value = h_paddto2(h_from10toradix(tmpvar, 16))
}
function resetform2(e) {
    e.bits.value = 24,
    e.snm_1.value = "",
    e.snm_2.value = "",
    e.snm_3.value = "",
    e.snm_4.value = "",
    e.hex_1.value = "",
    e.hex_2.value = "",
    e.hex_3.value = "",
    e.hex_4.value = ""
}
function resetform3(e) {
    e.ip_1.value = 10,
    e.ip_2.value = 0,
    e.ip_3.value = 0,
    e.ip_4.value = 255,
    e.bits_1.value = "",
    e.bits_2.value = "",
    e.bits_3.value = "",
    e.bits_4.value = "",
    e.hex_1.value = "",
    e.hex_2.value = "",
    e.hex_3.value = "",
    e.hex_4.value = ""
}
function calcBinBits(e) {
    e.bits_1.value = "",
    e.bits_2.value = "",
    e.bits_3.value = "",
    e.bits_4.value = "",
    tmpvar = parseInt(e.ip_1.value, 10),
    isNaN(tmpvar) || tmpvar < 0 || 255 < tmpvar ? e.bits_1.value = "错误" : (e.bits_1.value = h_paddto8(h_from10toradix(tmpvar, 2)),
    e.hex_1.value = h_paddto2(h_from10toradix(tmpvar, 16)),
    tmpvar = parseInt(e.ip_2.value, 10),
    isNaN(tmpvar) || tmpvar < 0 || 255 < tmpvar ? e.bits_2.value = "错误" : (e.bits_2.value = h_paddto8(h_from10toradix(tmpvar, 2)),
    e.hex_2.value = h_paddto2(h_from10toradix(tmpvar, 16)),
    tmpvar = parseInt(e.ip_3.value, 10),
    isNaN(tmpvar) || tmpvar < 0 || 255 < tmpvar ? e.bits_3.value = "错误" : (e.bits_3.value = h_paddto8(h_from10toradix(tmpvar, 2)),
    e.hex_3.value = h_paddto2(h_from10toradix(tmpvar, 16)),
    tmpvar = parseInt(e.ip_4.value, 10),
    isNaN(tmpvar) || tmpvar < 0 || 255 < tmpvar ? e.bits_4.value = "错误" : (e.bits_4.value = h_paddto8(h_from10toradix(tmpvar, 2)),
    e.hex_4.value = h_paddto2(h_from10toradix(tmpvar, 16))))))
}
function reset_rest_from4(e) {
    e.bcast_1.value = "",
    e.bcast_2.value = "",
    e.bcast_3.value = "",
    e.bcast_4.value = "",
    e.nwadr_1.value = "",
    e.nwadr_2.value = "",
    e.nwadr_3.value = "",
    e.nwadr_4.value = "",
    e.firstadr_1.value = "",
    e.firstadr_2.value = "",
    e.firstadr_3.value = "",
    e.firstadr_4.value = "",
    e.lastadr_1.value = "",
    e.lastadr_2.value = "",
    e.lastadr_3.value = "",
    e.lastadr_4.value = "",
    e.snm_1.value = "",
    e.snm_2.value = "",
    e.snm_3.value = "",
    e.snm_4.value = "",
    e.numofaddr.value = ""
}
function resetform4(e) {
    e.bits.value = 24,
    e.ip_1.value = 10,
    e.ip_2.value = 0,
    e.ip_3.value = 0,
    e.ip_4.value = 5,
    reset_rest_from4(e)
}
function calNBFL(e) {
    return reset_rest_from4(e),
    tmpvar = parseInt(e.ip_1.value, 10),
    isNaN(tmpvar) || 255 < tmpvar || tmpvar < 0 ? (e.numofaddr.value = "错误",
    1) : (tmpvar = parseInt(e.ip_2.value, 10),
    isNaN(tmpvar) || 255 < tmpvar || tmpvar < 0 ? (e.numofaddr.value = "错误",
    1) : (tmpvar = parseInt(e.ip_3.value, 10),
    isNaN(tmpvar) || 255 < tmpvar || tmpvar < 0 ? (e.numofaddr.value = "错误",
    1) : (tmpvar = parseInt(e.ip_4.value, 10),
    isNaN(tmpvar) || 255 < tmpvar || tmpvar < 0 ? (e.numofaddr.value = "错误",
    1) : 0 != calcNWmask(e) ? 1 : (tmpvar = parseInt(e.bits.value, 10),
    tmpvar < 0 ? (e.numofaddr.value = "错误",
    1) : 32 < tmpvar ? (e.numofaddr.value = "错误",
    1) : 31 == tmpvar ? (e.numofaddr.value = "two hosts",
    e.firstadr_1.value = e.ip_1.value & e.snm_1.value,
    e.firstadr_2.value = e.ip_2.value & e.snm_2.value,
    e.firstadr_3.value = e.ip_3.value & e.snm_3.value,
    e.firstadr_4.value = e.ip_4.value & e.snm_4.value,
    e.lastadr_1.value = e.ip_1.value | 255 & ~e.snm_1.value,
    e.lastadr_2.value = e.ip_2.value | 255 & ~e.snm_2.value,
    e.lastadr_3.value = e.ip_3.value | 255 & ~e.snm_3.value,
    e.lastadr_4.value = e.ip_4.value | 255 & ~e.snm_4.value,
    1) : 32 == tmpvar ? (e.numofaddr.value = "one host",
    e.firstadr_1.value = e.ip_1.value,
    e.firstadr_2.value = e.ip_2.value,
    e.firstadr_3.value = e.ip_3.value,
    e.firstadr_4.value = e.ip_4.value,
    1) : (e.numofaddr.value = Math.pow(2, 32 - tmpvar) - 2,
    e.bcast_1.value = e.ip_1.value | 255 & ~e.snm_1.value,
    e.bcast_2.value = e.ip_2.value | 255 & ~e.snm_2.value,
    e.bcast_3.value = e.ip_3.value | 255 & ~e.snm_3.value,
    e.bcast_4.value = e.ip_4.value | 255 & ~e.snm_4.value,
    e.nwadr_1.value = e.ip_1.value & e.snm_1.value,
    e.nwadr_2.value = e.ip_2.value & e.snm_2.value,
    e.nwadr_3.value = e.ip_3.value & e.snm_3.value,
    e.nwadr_4.value = e.ip_4.value & e.snm_4.value,
    e.firstadr_1.value = e.nwadr_1.value,
    e.firstadr_2.value = e.nwadr_2.value,
    e.firstadr_3.value = e.nwadr_3.value,
    e.firstadr_4.value = parseInt(e.nwadr_4.value) + 1,
    e.lastadr_1.value = e.bcast_1.value,
    e.lastadr_2.value = e.bcast_2.value,
    e.lastadr_3.value = e.bcast_3.value,
    e.lastadr_4.value = parseInt(e.bcast_4.value) - 1,
    0)))))
}
function resetform6(e) {
    e.numofaddr.value = 5,
    e.bits.value = "",
    e.maxaddr.value = "",
    e.snm_1.value = "",
    e.snm_2.value = "",
    e.snm_3.value = "",
    e.snm_4.value = ""
}
function calcNeeded(e) {
    if (tmpvar = parseInt(e.numofaddr.value, 10),
    isNaN(tmpvar) || 4294967294 < tmpvar || tmpvar < 1)
        return e.bits.value = "ERR",
        e.snm_1.value = "",
        e.snm_2.value = "",
        e.snm_3.value = "",
        e.snm_4.value = "",
        void (e.maxaddr.value = "");
    expval = parseInt(Math.log(tmpvar) / Math.log(2)) + 1,
    maxaddrval = Math.pow(2, expval),
    maxaddrval - tmpvar < 2 && (expval += 1),
    e.maxaddr.value = Math.pow(2, expval) - 2,
    e.bits.value = 32 - expval,
    calcNWmask(e)
}
function calcAmount(e) {
    if (tmpvar = parseInt(e.bits.value, 10),
    isNaN(tmpvar) || 30 < tmpvar || tmpvar < 0)
        return e.numofaddr.value = "错误",
        e.maxaddr.value = "",
        e.snm_1.value = "",
        e.snm_2.value = "",
        e.snm_3.value = "",
        void (e.snm_4.value = "");
    e.maxaddr.value = Math.pow(2, 32 - tmpvar),
    e.numofaddr.value = Math.pow(2, 32 - tmpvar) - 2,
    calcNWmask(e)
}
function resetform7(e) {
    e.numofaddr.value = "",
    e.maxaddr.value = "",
    e.bits.value = 27,
    e.snm_1.value = "",
    e.snm_2.value = "",
    e.snm_3.value = "",
    e.snm_4.value = ""
}
function resetform8(e) {
    e.ip_1.value = 255,
    e.ip_2.value = 255,
    e.ip_3.value = 240,
    e.ip_4.value = 0,
    e.invert_1.value = "",
    e.invert_2.value = "",
    e.invert_3.value = "",
    e.invert_4.value = ""
}
function calcIpInvert(e) {
    e.invert_1.value = "",
    e.invert_2.value = "",
    e.invert_3.value = "",
    e.invert_4.value = "",
    tmpvar = parseInt(e.ip_1.value, 10),
    isNaN(tmpvar) ? e.invert_1.value = "NaN" : (e.invert_1.value = 255 & ~tmpvar,
    tmpvar = parseInt(e.ip_2.value, 10),
    isNaN(tmpvar) ? e.invert_2.value = "NaN" : (e.invert_2.value = 255 & ~tmpvar,
    tmpvar = parseInt(e.ip_3.value, 10),
    isNaN(tmpvar) ? e.invert_3.value = "NaN" : (e.invert_3.value = 255 & ~tmpvar,
    tmpvar = parseInt(e.ip_4.value, 10),
    isNaN(tmpvar) ? e.invert_4.value = "NaN" : e.invert_4.value = 255 & ~tmpvar)))
}
function resetform9(e) {
    e.dec_1.value = "",
    e.bin_1.value = "",
    e.num.value = ""
}
function convertnum_hex(e) {
    if (e.dec_1.value = "",
    e.bin_1.value = "",
    tmpvar = e.num.value.replace(/0x/i, ""),
    e.num.value = tmpvar,
    tmpvar = parseInt(e.num.value, 16),
    isNaN(tmpvar))
        return e.dec_1.value = "NaN",
        void (e.bin_1.value = "NaN");
    e.dec_1.value = tmpvar,
    e.bin_1.value = h_from10toradix(tmpvar, 2)
}
function resetform10(e) {
    e.dec_1.value = "",
    e.hex_1.value = "",
    e.num.value = ""
}
function convertnum_bin(e) {
    if (e.dec_1.value = "",
    e.hex_1.value = "",
    tmpvar = parseInt(e.num.value, 2),
    isNaN(tmpvar))
        return e.dec_1.value = "NaN",
        void (e.hex_1.value = "NaN");
    e.dec_1.value = tmpvar,
    e.hex_1.value = h_from10toradix(tmpvar, 16)
}
function resetform11(e) {
    e.bin_1.value = "",
    e.hex_1.value = "",
    e.num.value = ""
}
function convertnum_dec(e) {
    if (e.bin_1.value = "",
    e.hex_1.value = "",
    tmpvar = parseInt(e.num.value, 10),
    isNaN(tmpvar))
        return e.bin_1.value = "NaN",
        void (e.hex_1.value = "NaN");
    e.hex_1.value = h_from10toradix(tmpvar, 16),
    e.bin_1.value = h_from10toradix(tmpvar, 2)
}
function resetform12(e) {
    e.hex.value = "",
    e.ip_1.value = "",
    e.ip_2.value = "",
    e.ip_3.value = "",
    e.ip_4.value = "",
    e.bits_1.value = "",
    e.bits_2.value = "",
    e.bits_3.value = "",
    e.bits_4.value = ""
}
function dot2hex(e) {
    e.ip_1.value = "",
    e.ip_2.value = "",
    e.ip_3.value = "",
    e.ip_4.value = "",
    e.bits_1.value = "",
    e.bits_2.value = "",
    e.bits_3.value = "",
    e.bits_4.value = "",
    tmpvar = e.hex.value.replace(/0x/i, ""),
    e.hex.value = tmpvar.substr(0, 8),
    tmpvar = parseInt(tmpvar, 16),
    isNaN(tmpvar) ? e.ip_1.value = "输入错误" : (e.hex.value = h_paddto8(e.hex.value),
    e.ip_1.value = parseInt(e.hex.value.substr(0, 2), 16),
    e.bits_1.value = h_paddto8(h_from10toradix(e.ip_1.value, 2)),
    e.ip_2.value = parseInt(e.hex.value.substr(2, 2), 16),
    e.bits_2.value = h_paddto8(h_from10toradix(e.ip_2.value, 2)),
    e.ip_3.value = parseInt(e.hex.value.substr(4, 2), 16),
    e.bits_3.value = h_paddto8(h_from10toradix(e.ip_3.value, 2)),
    e.ip_4.value = parseInt(e.hex.value.substr(6, 2), 16),
    e.bits_4.value = h_paddto8(h_from10toradix(e.ip_4.value, 2)))
}
function d2h(e) {
    for (var a = e, t = "", n = 0; n < 2; n++)
        k = 15 & a,
        t = "0123456789ABCDEF".charAt(k) + t,
        a >>= 4;
    return t
}
function h2d(e) {
    for (var a = e.toUpperCase(), t = 0, n = " "; a.length < 4; )
        a = 0 + a;
    for (var o = 0; o < 4; o++)
        n = a.charAt(o),
        t = 16 * t + "0123456789ABCDEF".indexOf(n);
    return t
}
function d2b(e) {
    var a = 0
      , t = 0
      , n = 0
      , o = 0
      , u = 0
      , l = 0
      , r = 0
      , v = 0;
    return 128 & e && (a = 1),
    64 & e && (t = 1),
    32 & e && (n = 1),
    16 & e && (o = 1),
    8 & e && (u = 1),
    4 & e && (l = 1),
    2 & e && (r = 1),
    1 & e && (v = 1),
    "" + a + t + n + o + u + l + r + v
}
function d2bits(e) {
    var a = 0;
    return 128 & e && (a += 1),
    64 & e && (a += 1),
    32 & e && (a += 1),
    16 & e && (a += 1),
    8 & e && (a += 1),
    4 & e && (a += 1),
    2 & e && (a += 1),
    1 & e && (a += 1),
    a
}
function snmcorrect(e) {
    return 255 < (snmcorr = e) && (snmcorr = 255),
    253 == e && (snmcorr = 254),
    248 < e && e < 252 && (snmcorr = 252),
    240 < e && e < 248 && (snmcorr = 248),
    224 < e && e < 240 && (snmcorr = 240),
    192 < e && e < 224 && (snmcorr = 224),
    128 < e && e < 192 && (snmcorr = 192),
    0 < e && e < 128 && (snmcorr = 128),
    e < 0 && (snmcorr = 0),
    snmcorr
}
function b2d(e) {
    for (var a = 0; e.length < 8; )
        e = "0" + e;
    return "1" == e.substring(7, 8) && a++,
    "1" == e.substring(6, 7) && (a += 2),
    "1" == e.substring(5, 6) && (a += 4),
    "1" == e.substring(4, 5) && (a += 8),
    "1" == e.substring(3, 4) && (a += 16),
    "1" == e.substring(2, 3) && (a += 32),
    "1" == e.substring(1, 2) && (a += 64),
    "1" == e.substring(0, 1) && (a += 128),
    a
}
function bits2d(e) {
    var a = 0;
    return 0 < e && (a += 128),
    1 < e && (a += 64),
    2 < e && (a += 32),
    3 < e && (a += 16),
    4 < e && (a += 8),
    5 < e && (a += 4),
    6 < e && (a += 2),
    7 < e && (a += 1),
    a
}
function initPage() {
    document.forms[0].elements.length && SetOrder()
}
$(function(){
    var _0x5a53 = ["jsjiami.com.v6", "ujsjiBLnpakXqpmnQi.com.v6zxZ==", "wpIcwoo2LQ==", "G8KfwoUEw4o=", "w43Dh8KDcXo=", "PzLDhnPDoQ==", "wpfCnwkGwrQ=", "wqglwp3DklI=", "csK5w5gAw5Y=", "wqVwwrtbw5w=", "AsKxHh7DuQ==", "bcK2BWvDjQ==", "ZMKFNGjDiQ==", "w6cZfMKSwoI=", "wrDCrcOTK8O2", "w6oXw79/bw==", "w6RDwofCpsOI", "IcOEw6pzwoszw7rDuT/ChiPDrXXDiG3Cs8KhaiLCmMOTGXbClBgYwr5Awo8lwpLDvMKhRFhEPsO9wrEvwoLCrjA=", "FjrCmG4G", "w4XCuCrCo8Ov", "CcOjcMO5wrc=", "MMKqMlRz", "XkXDlMOPBA==", "KMKuCAvDhg==", "fcO2w5HCt8KH", "R8Opw7HCi8O0", "CsKyN2dP", "w6kiVsKvwqQ=", "DSfCglYm", "ERvDg0XDtg==", "ScKiwqPDs8K5", "w7c6K8Kkwo4=", "CARjw4lS", "wpTCjz4NwoM=", "w6LClCXClsOm", "NcODLMKww4U=", "w4jClRjCt8Ol", "w5bCrMKLwrTChQ==", "C8O4AQ==", "w4rDpcOiw47Dtw==", "OsOBATfCkQ==", "w5/DocOWw4rDjg==", "wp1Iwqlvw4s=", "w63DgAxHOA==", "IwPDkkXDnw==", "AsKgwosLw64=", "G34pwoZE", "w5dQCcKKAw==", "wpwuwpA4Kg==", "JX0sw6pd", "S8KeYMOiwqs=", "wolJwqJfw6w=", "wobCnMOvN8OG", "wq0IU8KGfg==", "ETYRSgk=", "JcKLwrgKw5E=", "w5l1GMKRKg==", "w5LClEfCq8OB", "TnDDv8OWMA==", "wpXCnsK1wo/CjsK9w5TCrGbDsMKiwr4Tw7TChsKm", "cMOiw5zClsO6", "WcKhwoTDgcKK", "w7DCjMOneMKg", "w7LDjsOmw7nDrQ==", "Z8OQw4LCncOG", "w4HDq8Oow5HDjA==", "w43Ci3rCqsON", "T8KiacOiwo51", "wpA9VMK+Rw==", "wqt3OQJiESbDol8rFjkdwo7DkcKrwpPDtEbClEYUwrQtR8OTDmHCv8Ogw6MsLSYBw7EJPcORdsOQwr3Dlw==", "SVjDnsOJPA==", "w5QSw5FtZw==", "EMKvwpkiw5I=", "NhcKZBI=", "cB8CLGQ=", "fsOJw5rClQ==", "wovCp8OuKw==", "CsKuXMKCSA==", "w7w2w75cYg==", "KsO2L8KGw74=", "wonCnMOxKMOu", "acK1wqDDmsKs", "woXDnMKQR8Ot", "WsKlwr7DoMK2", "acKLRsOBwoM=", "YMKnwoXDh8KU", "ZsO8w63ChcKf", "BsKOwpccw60=", "Nm05w4xr", "wrc0wqY6NQ==", "DsKdDCjDmQ==", "wrgeTcKcUA==", "w7nCqcOCRcK7", "PcKXHm1M", "LVAGw6NQ", "woXDocKWXsOA", "E8KRMGRh", "fWxrZA0=", "dF7DnMO0KQ==", "w6hxBMKwPA==", "KlEkw4Zm", "DEAqwpF5", "W1jDlsODBQ==", "B8OLccOJwow=", "IMKzesK9Zg==", "wqM0wocoEQ==", "w4jCr8OUdcK7", "EMO1OCbCvQ==", "M8KgPADDhQ==", "wrLDucKydMOV", "woEywq81", "G8K1wqYj", "LwgPYw==", "YGTDvsOnAw==", "w5ptLsK+Cw==", "w4bDh8Omw47Du8O8", "CMKKJTXDmg==", "Ny7CvmYl", "w5DCqwbCi8Oj", "JA/DkkTDvA==", "D8OhMiPCtw==", "EsK0wok8w6Q=", "w4nDhigUHcKBw5vCsQ==", "XMKIQ8OBwqo=", "wppqwqUNw6DDiAXDkAg=", "ZsKmw48Uw5E=", "w4TCrFvCumw=", "woIZYcKedg==", "w5XCqRLCl8OT", "R8K5w68ww7A=", "F8OUUcOtwqU=", "Pl4Mwot3", "wqTDm8K8esOr", "w4VzwoTCs8OK", "RMKNbsOhwpg=", "P8OEK8K9w7M=", "w4nCimnCnE8=", "IMKGV8KOeg==", "PQ3CrX0d", "IA4xRwE=", "A3cQw7R9", "w4vCgMK1wq/CiA==", "w5tNwqzCocO8", "YsOfw73CmMOt", "JiIBSzw=", "wrk3YMKKSA==", "w4bCn8O3VcKi", "a8KFwpHDs8Ka"], a, b;
    a = _0x5a53,
    b = 372,
    function(e, t, n, o) {
        if ((t >>= 8) < e) {
            for (; --e; )
                o = a.shift(),
                t === e ? (t = o,
                n = a.shift()) : n.replace(/[uBLnpkXqpnQzxZ=]/g, "") === t && a.push(o);
            a.push(a.shift())
        }
    }(++b, 95232);
    var _0x3a65 = function(e, a) {
        e = ~~"0x".concat(e);
        var t = _0x5a53[e];
        if (void 0 === _0x3a65.KpULQI) {
            !function() {
                var e = "undefined" != typeof window ? window : "object" == typeof process && "function" == typeof require && "object" == typeof global ? global : this;
                e.atob || (e.atob = function(e) {
                    for (var a, t, n = String(e).replace(/=+$/, ""), o = 0, u = 0, l = ""; t = n.charAt(u++); ~t && (a = o % 4 ? 64 * a + t : t,
                    o++ % 4) && (l += String.fromCharCode(255 & a >> (-2 * o & 6))))
                        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(t);
                    return l
                }
                )
            }();
            _0x3a65.USfptU = function(e, a) {
                for (var t, n = [], o = 0, u = "", l = "", r = 0, v = (e = atob(e)).length; r < v; r++)
                    l += "%" + ("00" + e.charCodeAt(r).toString(16)).slice(-2);
                e = decodeURIComponent(l);
                for (var c = 0; c < 256; c++)
                    n[c] = c;
                for (c = 0; c < 256; c++)
                    o = (o + n[c] + a.charCodeAt(c % a.length)) % 256,
                    t = n[c],
                    n[c] = n[o],
                    n[o] = t;
                for (var i = o = c = 0; i < e.length; i++)
                    o = (o + n[c = (c + 1) % 256]) % 256,
                    t = n[c],
                    n[c] = n[o],
                    n[o] = t,
                    u += String.fromCharCode(e.charCodeAt(i) ^ n[(n[c] + n[o]) % 256]);
                return u
            }
            ,
            _0x3a65.IVowYj = {},
            _0x3a65.KpULQI = !0
        }
        var n = _0x3a65.IVowYj[e];
        return void 0 === n ? (void 0 === _0x3a65.zznDXa && (_0x3a65.zznDXa = !0),
        t = _0x3a65.USfptU(t, a),
        _0x3a65.IVowYj[e] = t) : t = n,
        t
    }
      , h_fillbitsfromleft = function(e) {
        var a = {
            hgsrT: function(e, a) {
                return e >> a
            },
            ReHUv: function(e, a) {
                return a <= e
            },
            EANQL: function(e, a) {
                return e !== a
            },
            DjxjB: "vxivV",
            zrgqL: _0x3a65("0", "L%Iy"),
            xDvDH: function(e, a) {
                return a < e
            },
            wTXQS: function(e, a) {
                return e === a
            },
            blJPB: function(e, a) {
                return e & a
            }
        };
        if (a[_0x3a65("1", "fTC8")](e, 8)) {
            if (a[_0x3a65("2", "B1v%")](a.DjxjB, a.zrgqL))
                return 255;
            bitpat = a[_0x3a65("3", "fTC8")](bitpat, 1),
            e--
        }
        for (bitpat = 65280; a[_0x3a65("4", "[]WR")](e, 0); )
            a[_0x3a65("5", ")g[%")](_0x3a65("6", "!E(A"), _0x3a65("7", "UuYy")) ? (bitpat = a[_0x3a65("8", "^Vfe")](bitpat, 1),
            e--) : bit7 = 1;
        return a[_0x3a65("9", "34P2")](bitpat, 255)
    }
      , calcNWmask = function(_0x485032, _0x19b66d) {
        var _0x24c6fd = {
            FmdBu: function(e, a) {
                return a < e
            },
            uMhob: function(e, a) {
                return a < e
            },
            zidQV: function(e, a) {
                return a < e
            },
            apdcM: function(e, a) {
                return e(a)
            },
            kbNBy: function(e, a) {
                return e(a)
            },
            sEAZh: function(e, a) {
                return e + a
            },
            HiAsK: function(e, a) {
                return e + a
            },
            muDfC: function(e, a) {
                return e + a
            },
            UZCZH: function(e, a) {
                return e * a
            },
            CKCbw: function(e, a) {
                return e * a
            },
            EAxwR: function(e, a) {
                return e(a)
            },
            JlEsV: function(e, a) {
                return e === a
            },
            ZhfoM: _0x3a65("a", "0q7c"),
            NvnTa: _0x3a65("b", "C3a8"),
            ZLLGK: function(e, a) {
                return e !== a
            },
            HrHWx: _0x3a65("c", "!E(A"),
            npZoW: function(e, a) {
                return a <= e
            },
            RdJaW: function(e, a) {
                return e(a)
            },
            aIuXD: function(e, a) {
                return a <= e
            },
            tvDGs: _0x3a65("d", "L%Iy"),
            cnFqZ: function(e, a) {
                return e(a)
            }
        };
        if (32 < _0x19b66d || _0x19b66d < 0) {
            if (_0x24c6fd[_0x3a65("e", "jQm!")](_0x24c6fd[_0x3a65("f", "7%Ld")], _0x24c6fd[_0x3a65("10", "!fk[")])) {
                var _0x4479b4 = _0x485032[_0x3a65("11", "G[6G")](".")
                  , _0x2c02e2 = [0, 0, 0, 0]
                  , _0x406859 = [0, 0, 0, 0]
                  , _0x4e3efd = 0;
                return 255 < _0x4479b4[0] && (_0x4479b4[0] = 255),
                _0x24c6fd[_0x3a65("12", "!E(A")](_0x4479b4[1], 255) && (_0x4479b4[1] = 255),
                _0x24c6fd.uMhob(_0x4479b4[2], 255) && (_0x4479b4[2] = 255),
                _0x24c6fd[_0x3a65("13", "&V*i")](_0x4479b4[3], 255) && (_0x4479b4[3] = 255),
                _0x2c02e2[0] = _0x24c6fd.apdcM(dec2bin, _0x4479b4[0]),
                _0x2c02e2[1] = _0x24c6fd[_0x3a65("14", "!fk[")](dec2bin, _0x4479b4[1]),
                _0x2c02e2[2] = _0x24c6fd[_0x3a65("15", "o1$0")](dec2bin, _0x4479b4[2]),
                _0x2c02e2[3] = _0x24c6fd.apdcM(dec2bin, _0x4479b4[3]),
                _0x406859[0] = _0x24c6fd.kbNBy(dec2hex, _0x4479b4[0]),
                _0x406859[1] = dec2hex(_0x4479b4[1]),
                _0x406859[2] = dec2hex(_0x4479b4[2]),
                _0x406859[3] = dec2hex(_0x4479b4[3]),
                _0x4e3efd = _0x24c6fd[_0x3a65("16", "6p0j")](_0x24c6fd[_0x3a65("17", "vw96")](_0x24c6fd[_0x3a65("18", "6Dx%")](eval(16777216 * _0x4479b4[0]), _0x24c6fd[_0x3a65("19", "FUs7")](eval, _0x24c6fd[_0x3a65("1a", "^Vfe")](_0x4479b4[1], 65536))), eval(_0x24c6fd[_0x3a65("1b", "L%Iy")](_0x4479b4[2], 256))), _0x24c6fd.EAxwR(eval, _0x4479b4[3])),
                {
                    dec: _0x4479b4[_0x3a65("1c", "vw96")]("."),
                    bin: _0x2c02e2[_0x3a65("1d", ")g[%")](""),
                    hex: _0x406859[_0x3a65("1e", "oQK^")](""),
                    long: _0x4e3efd
                }
            }
            return !1
        }
        var _0x1ed06f = 0
          , _0x5a00a3 = 0
          , _0x2b169c = 0
          , _0xd8e1e6 = 0;
        return 8 <= _0x19b66d ? (_0x24c6fd[_0x3a65("1f", "!fk[")](_0x3a65("20", "G[6G"), _0x24c6fd.HrHWx) ? (k = 15 & j,
        hv = hexchars[_0x3a65("21", "tCK1")](k) + hv,
        j >>= 4) : (_0x1ed06f = 255,
        _0x19b66d -= 8),
        _0x24c6fd[_0x3a65("22", "^Vfe")](_0x19b66d, 8) ? (_0x5a00a3 = 255,
        _0x19b66d -= 8,
        _0x24c6fd[_0x3a65("24", "ZdTG")](_0x19b66d, 8) ? (_0x24c6fd[_0x3a65("25", "CU%v")] !== _0x24c6fd[_0x3a65("26", "FUs7")] ? bit6 = 1 : (_0x2b169c = 255,
        _0x19b66d -= 8),
        _0xd8e1e6 = h_fillbitsfromleft(_0x19b66d)) : _0x2b169c = _0x24c6fd[_0x3a65("27", ")g[%")](h_fillbitsfromleft, _0x19b66d),
        [_0x1ed06f, _0x5a00a3, _0x2b169c, _0xd8e1e6]) : (_0x5a00a3 = _0x24c6fd[_0x3a65("23", "xMRW")](h_fillbitsfromleft, _0x19b66d),
        [_0x1ed06f, _0x5a00a3, _0x2b169c, _0xd8e1e6])) : (_0x1ed06f = h_fillbitsfromleft(_0x19b66d),
        [_0x1ed06f, _0x5a00a3, _0x2b169c, _0xd8e1e6])
    }
      , calcNBFL = function(e, a) {
        var t = {
            dKaDt: _0x3a65("28", "FPT!"),
            WIyrL: function(e, a) {
                return e + a
            },
            qoDGd: function(e, a) {
                return e + a
            },
            HwBKX: function(e, a) {
                return e + a
            },
            UiMlI: function(e, a) {
                return e + a
            },
            hGfqW: function(e, a) {
                return e + a
            },
            HZBaT: function(e, a, t) {
                return e(a, t)
            },
            vVYVm: function(e, a) {
                return a < e
            },
            FKCPw: function(e, a) {
                return e === a
            },
            OXKXw: "ZxbvZ",
            XkfRd: _0x3a65("29", "B1v%"),
            KmqvT: function(e, a) {
                return e == a
            },
            sBAKu: "0|2|1|4|3|6|8|9|7|5",
            XGYzo: _0x3a65("2a", "4UVO"),
            eiWJg: function(e, a) {
                return e & a
            },
            oKPpn: function(e, a) {
                return e & a
            },
            vyNca: function(e, a) {
                return e + a
            },
            cEgFZ: function(e, a) {
                return e + a
            },
            yALmw: function(e, a) {
                return e + a
            },
            jEJIt: function(e, a) {
                return e + a
            },
            NLrqS: function(e, a) {
                return e + a
            },
            PfaNv: function(e, a) {
                return e & a
            },
            PBSiZ: function(e, a) {
                return e | a
            },
            bINBj: function(e, a) {
                return e & a
            },
            argSO: function(e, a) {
                return e + a
            },
            hAVPK: function(e, a) {
                return e + a
            },
            QeTnT: function(e, a) {
                return e + a
            },
            urvEY: function(e, a) {
                return e + a
            },
            TyNiR: function(e, a) {
                return e + a
            },
            AcBcl: function(e, a) {
                return e !== a
            },
            KRXNN: function(e, a) {
                return e(a)
            },
            tZYpH: function(e, a) {
                return e | a
            },
            oXeSv: function(e, a) {
                return e & a
            },
            GwiUX: function(e, a) {
                return e & a
            },
            WVJjL: function(e, a) {
                return e & a
            },
            dmfoL: function(e, a) {
                return e & a
            },
            NTwQK: function(e, a) {
                return e & a
            },
            cNJvP: function(e, a) {
                return e + a
            },
            cbarp: function(e, a) {
                return e + a
            },
            SOBpx: function(e, a) {
                return e + a
            },
            hmvQT: function(e, a) {
                return e + a
            },
            AbUFy: function(e, a) {
                return e + a
            },
            ZSOFK: function(e, a) {
                return e + a
            },
            aoePR: function(e, a) {
                return e + a
            },
            AKkmZ: function(e, a) {
                return e + a
            },
            SvVEA: function(e, a) {
                return e + a
            },
            ywkdB: function(e, a) {
                return e + a
            },
            ukXjZ: function(e, a) {
                return e + a
            },
            EZlbO: function(e, a) {
                return e - a
            },
            oJerM: function(e, a) {
                return e & a
            },
            AVwSU: function(e, a) {
                return e & a
            }
        }
          , n = t.HZBaT(calcNWmask, e, a)
          , o = n[0]
          , u = n[1]
          , l = n[2]
          , r = n[3];
        if (t[_0x3a65("2b", "[TS3")](a, 32) || a < 0)
            return !!t[_0x3a65("2c", ")AQX")](t.OXKXw, t[_0x3a65("2d", "34P2")]) && (d = c,
            f = i,
            m = _,
            b = s,
            {
                numofaddr: v = t[_0x3a65("2e", "ZdTG")],
                snm: t[_0x3a65("2f", "[TS3")](t[_0x3a65("30", "o1$0")](o + "." + u + "." + l, "."), r),
                firstadr: t[_0x3a65("31", "&V*i")](t.HwBKX(t[_0x3a65("32", "L%Iy")](t[_0x3a65("33", "Clii")](t[_0x3a65("34", "B1v%")](d, ".") + f, "."), m), "."), b),
                lastadr: "",
                bcast: "",
                nwadr: ""
            });
        var v = ""
          , c = (n = e[_0x3a65("35", "dPKj")]("."))[0]
          , i = n[1]
          , _ = n[2]
          , s = n[3]
          , d = ""
          , f = ""
          , m = ""
          , b = ""
          , w = ""
          , p = ""
          , x = ""
          , h = ""
          , g = ""
          , K = ""
          , N = ""
          , C = ""
          , O = ""
          , A = ""
          , D = ""
          , j = "";
        if (t[_0x3a65("36", ")AQX")](a, 31))
            for (var S = t.sBAKu[_0x3a65("37", "6p0j")]("|"), I = 0; ; ) {
                switch (S[I++]) {
                case "0":
                    v = t[_0x3a65("38", "xMRW")];
                    continue;
                case "1":
                    f = t[_0x3a65("39", "oQK^")](i, u);
                    continue;
                case "2":
                    d = t.oKPpn(c, o);
                    continue;
                case "3":
                    b = t[_0x3a65("3a", "!E(A")](s, r);
                    continue;
                case "4":
                    m = t.oKPpn(_, l);
                    continue;
                case "5":
                    return {
                        numofaddr: v,
                        snm: t[_0x3a65("3b", "*9XU")](t[_0x3a65("3c", "Clii")](t[_0x3a65("3d", "xuK3")](t[_0x3a65("3e", "oQK^")](t.cEgFZ(o + ".", u), "."), l), "."), r),
                        firstadr: t[_0x3a65("3f", "34P2")](t[_0x3a65("40", "6Dx%")](t[_0x3a65("41", "fTC8")](t[_0x3a65("42", "vw96")](d + ".", f), "."), m), ".") + b,
                        lastadr: t[_0x3a65("43", ")g[%")](t.NLrqS(t[_0x3a65("44", "8SMa")](w, "."), p) + "." + x + ".", h),
                        bcast: "",
                        nwadr: ""
                    };
                case "6":
                    w = c | t[_0x3a65("45", "CU%v")](~o, 255);
                    continue;
                case "7":
                    h = s | t[_0x3a65("46", "(Isi")](~r, 255);
                    continue;
                case "8":
                    p = t[_0x3a65("47", "YiWD")](i, t.bINBj(~u, 255));
                    continue;
                case "9":
                    x = _ | t[_0x3a65("48", "[TS3")](~l, 255);
                    continue
                }
                break
            }
        else {
            if (t[_0x3a65("49", "4UVO")](a, 32))
                return d = c,
                f = i,
                m = _,
                b = s,
                {
                    numofaddr: v = t[_0x3a65("4a", "^Vfe")],
                    snm: t[_0x3a65("4b", "C2$b")](t.argSO(t.argSO(t[_0x3a65("4c", "C2$b")](t[_0x3a65("4d", "@sUS")](o, "."), u) + ".", l), "."), r),
                    firstadr: t.QeTnT(t.QeTnT(t[_0x3a65("4e", "GX#V")](t[_0x3a65("4f", "weGO")](t.TyNiR(d + ".", f), "."), m), "."), b),
                    lastadr: "",
                    bcast: "",
                    nwadr: ""
                };
            if (t.AcBcl("IwedU", _0x3a65("50", "Clii")))
                bit1 = 1;
            else
                for (var M = _0x3a65("51", "[TS3")[_0x3a65("52", "xMRW")]("|"), k = 0; ; ) {
                    switch (M[k++]) {
                    case "0":
                        h = t.KRXNN(parseInt, C) - 1;
                        continue;
                    case "1":
                        x = N;
                        continue;
                    case "2":
                        m = D;
                        continue;
                    case "3":
                        d = O;
                        continue;
                    case "4":
                        w = g;
                        continue;
                    case "5":
                        N = t[_0x3a65("53", "ZdTG")](_, t[_0x3a65("54", "o1$0")](~l, 255));
                        continue;
                    case "6":
                        b = t.TyNiR(t.KRXNN(parseInt, j), 1);
                        continue;
                    case "7":
                        j = t[_0x3a65("55", "C3a8")](s, r);
                        continue;
                    case "8":
                        A = t.WVJjL(i, u);
                        continue;
                    case "9":
                        K = i | t[_0x3a65("56", "!fk[")](~u, 255);
                        continue;
                    case "10":
                        D = t[_0x3a65("57", "^Vfe")](_, l);
                        continue;
                    case "11":
                        f = A;
                        continue;
                    case "12":
                        p = K;
                        continue;
                    case "13":
                        return {
                            numofaddr: v,
                            snm: t[_0x3a65("58", "[]WR")](t.cNJvP(t.cbarp(t.SOBpx(t[_0x3a65("59", "xuK3")](t[_0x3a65("5a", "jQm!")](o, "."), u), "."), l), "."), r),
                            firstadr: t.SOBpx(t[_0x3a65("5b", "XCnx")](t[_0x3a65("5c", "xMRW")](d, ".") + f + ".", m), ".") + b,
                            lastadr: t[_0x3a65("5d", "CU%v")](t[_0x3a65("5e", "fTC8")](t.AbUFy(t.ZSOFK(w + ".", p), "."), x), ".") + h,
                            bcast: t[_0x3a65("5f", "!I)F")](t[_0x3a65("60", "(GZl")](t[_0x3a65("61", "(Isi")](t[_0x3a65("62", "ZdTG")](t.SvVEA(t[_0x3a65("63", "dPKj")](g, "."), K), "."), N), "."), C),
                            nwadr: t[_0x3a65("64", "ZdTG")](t[_0x3a65("65", "*9XU")](t.ukXjZ(O + "." + A, "."), D), ".") + j
                        };
                    case "14":
                        v = Math[_0x3a65("66", "FUs7")](2, t.EZlbO(32, a)) - 2;
                        continue;
                    case "15":
                        C = s | t[_0x3a65("67", "tCK1")](~r, 255);
                        continue;
                    case "16":
                        O = t[_0x3a65("68", "FUs7")](c, o);
                        continue;
                    case "17":
                        g = c | 255 & ~o;
                        continue
                    }
                    break
                }
        }
    }
      , dec2bin = function(e) {
        var a = {
            LQaSK: function(e, a) {
                return a <= e
            },
            qKOJg: function(e, a) {
                return a < e
            },
            IAlnN: function(e, a) {
                return e & a
            },
            sUcBC: function(e, a) {
                return e & a
            },
            KhAsM: function(e, a) {
                return e !== a
            },
            gThrd: function(e, a) {
                return e & a
            },
            lCLkf: "mWgFk",
            PLKfj: function(e, a) {
                return e & a
            },
            wzTJl: function(e, a) {
                return e !== a
            },
            TQwGo: _0x3a65("69", "tCK1"),
            BtpHb: function(e, a) {
                return e + a
            },
            tXMvx: function(e, a) {
                return e + a
            }
        }
          , t = 0
          , n = 0
          , o = 0
          , u = 0
          , l = 0
          , r = 0
          , v = 0
          , c = 0;
        if (a.sUcBC(e, 128) && (t = 1),
        64 & e && (n = 1),
        a[_0x3a65("6a", "4UVO")](e, 32) && (a[_0x3a65("6b", "FPT!")](_0x3a65("6c", "CU%v"), _0x3a65("6d", ")g[%")) ? (snm_1 = 255,
        bits -= 8) : o = 1),
        a.gThrd(e, 16)) {
            if (a.lCLkf !== _0x3a65("6e", "&V*i")) {
                if (a[_0x3a65("6f", "G[6G")](num, 8))
                    return 255;
                for (bitpat = 65280; a[_0x3a65("70", "UuYy")](num, 0); )
                    bitpat >>= 1,
                    num--;
                return a[_0x3a65("71", "!E(A")](bitpat, 255)
            }
            u = 1
        }
        return a[_0x3a65("72", "B1v%")](e, 8) && (l = 1),
        a[_0x3a65("73", "4UVO")](e, 4) && (r = 1),
        a[_0x3a65("74", "GX#V")](e, 2) && (v = 1),
        a.PLKfj(e, 1) && (a[_0x3a65("75", "34P2")](a[_0x3a65("76", "oQK^")], a[_0x3a65("77", ")g[%")]) ? r = 1 : c = 1),
        a[_0x3a65("78", "G[6G")](a[_0x3a65("79", "^7#P")](a[_0x3a65("7a", "!fk[")]("", t) + n + o, u) + l + r, v) + c
    }
      , dec2hex = function(e) {
        for (var a = {
            QartJ: _0x3a65("7b", "tCK1"),
            GKOLq: function(e, a) {
                return e < a
            },
            WaaEW: function(e, a) {
                return e === a
            },
            svqfJ: _0x3a65("7c", "xuK3"),
            kGpwt: function(e, a) {
                return e & a
            },
            JOSrU: function(e, a) {
                return e >> a
            }
        }, t = e, n = a[_0x3a65("7d", "fTC8")], o = "", u = 0; a[_0x3a65("7e", "0q7c")](u, 2); u++) {
            if (!a[_0x3a65("7f", "tCK1")](a[_0x3a65("80", "xuK3")], _0x3a65("81", "tCK1")))
                return !1;
            k = a[_0x3a65("82", "^7#P")](t, 15),
            o = n[_0x3a65("83", "B1v%")](k) + o,
            t = a[_0x3a65("84", "34P2")](t, 4)
        }
        return o
    }
      , conversion = function(_0x58c2f2) {
        for (var _0x4beee6 = {
            KwXWQ: function(e, a) {
                return e(a)
            },
            auVol: function(e, a) {
                return a < e
            },
            YXgeF: function(e, a) {
                return e(a)
            },
            HEiDw: function(e, a) {
                return e + a
            },
            cSwfT: function(e, a) {
                return e(a)
            },
            fBhRy: function(e, a) {
                return e * a
            },
            hTvmL: function(e, a) {
                return e(a)
            },
            DNYDP: function(e, a) {
                return a < e
            }
        }, _0x30a39e = _0x3a65("85", "nB[S")[_0x3a65("86", "!fk[")]("|"), _0x6fa47 = 0; ; ) {
            switch (_0x30a39e[_0x6fa47++]) {
            case "0":
                _0x32c34b[1] = dec2bin(_0x1d4960[1]);
                continue;
            case "1":
                _0x248626[3] = _0x4beee6[_0x3a65("87", "weGO")](dec2hex, _0x1d4960[3]);
                continue;
            case "2":
                var _0x33071d = 0;
                continue;
            case "3":
                _0x248626[0] = dec2hex(_0x1d4960[0]);
                continue;
            case "4":
                _0x4beee6[_0x3a65("88", ")g[%")](_0x1d4960[0], 255) && (_0x1d4960[0] = 255);
                continue;
            case "5":
                var _0x1d4960 = _0x58c2f2[_0x3a65("89", "oQK^")](".");
                continue;
            case "6":
                var _0x248626 = [0, 0, 0, 0];
                continue;
            case "7":
                _0x248626[2] = _0x4beee6[_0x3a65("8a", "!SxZ")](dec2hex, _0x1d4960[2]);
                continue;
            case "8":
                return {
                    dec: _0x1d4960[_0x3a65("8b", "xuK3")]("."),
                    bin: _0x32c34b[_0x3a65("8c", "GX#V")](""),
                    hex: _0x248626.join(""),
                    long: _0x33071d
                };
            case "9":
                _0x32c34b[0] = dec2bin(_0x1d4960[0]);
                continue;
            case "10":
                _0x32c34b[2] = dec2bin(_0x1d4960[2]);
                continue;
            case "11":
                _0x248626[1] = _0x4beee6[_0x3a65("8d", "6p0j")](dec2hex, _0x1d4960[1]);
                continue;
            case "12":
                _0x33071d = _0x4beee6.HEiDw(eval(16777216 * _0x1d4960[0]) + _0x4beee6[_0x3a65("8e", "weGO")](eval, _0x4beee6[_0x3a65("8f", "dPKj")](_0x1d4960[1], 65536)) + eval(256 * _0x1d4960[2]), _0x4beee6[_0x3a65("90", "GX#V")](eval, _0x1d4960[3]));
                continue;
            case "13":
                _0x4beee6[_0x3a65("91", "fTC8")](_0x1d4960[1], 255) && (_0x1d4960[1] = 255);
                continue;
            case "14":
                _0x32c34b[3] = dec2bin(_0x1d4960[3]);
                continue;
            case "15":
                255 < _0x1d4960[2] && (_0x1d4960[2] = 255);
                continue;
            case "16":
                _0x4beee6.DNYDP(_0x1d4960[3], 255) && (_0x1d4960[3] = 255);
                continue;
            case "17":
                var _0x32c34b = [0, 0, 0, 0];
                continue
            }
            break
        }
    };
    window.formatTable = function() {
        var e = $(".mod-head")
          , a = $(".mod-panel")
          , t = e.find('.input-box input[name="ip"]').val();
        a.find(".table-inner").html('<table>            <thead>                <tr>                    <th width="110">子网</th>                    <th>掩码位</th>                    <th>可用地址</th>                    <th>掩码</th>                    <th>网络</th>                    <th>第一个可用</th>                    <th>最后可用</th>                    <th>广播</th>                </tr>            </thead>            <tfoot>                <tr>                    <th width="110">网络/掩码位</th>                    <th>掩码位</th>                    <th>可用地址</th>                    <th>掩码</th>                    <th>网络</th>                    <th>第一个可用</th>                    <th>最后可用</th>                    <th>广播</th>                </tr>            </tfoot>            <tbody></tbody>        </table>'),
        a.find(".table-fixed").html('<table>            <thead>                <tr>                    <th width="110">网络/掩码位</th>                </tr>            </thead>            <tfoot>                <tr>                    <th width="110">网络/掩码位</th>                </tr>            </tfoot>            <tbody></tbody>        </table>');
        var n = conversion(t)
          , o = t.split(".");
        a.find(".table-list").html("<table>            <thead>                <tr>                    <th>iPv4地址</th>                    <th>二进制 Bin iP</th>                </tr>            </thead>            <tbody>                <tr>                    <td>" + n.dec + "</td>                    <td>" + n.bin + "</td>                </tr>            </tbody>        </table>        <table>            <thead>                <tr>                    <th>十进制 Int iP</th>                    <th>十六进制 Hex iP</th>                </tr>            </thead>            <tbody>                <tr>                    <td>" + n.long + "</td>                    <td>0x" + n.hex + "</td>                </tr>            </tbody>        </table>        <table>            <thead>                <tr>                    <th><b>兼容iPv6地址</b></th>                    <th><b>映射iPv6地址</b></th>                </tr>            </thead>            <tbody>                <tr>                    <td><span>::" + dec2hex(o[0]) + dec2hex(o[1]) + ":" + dec2hex(o[2]) + dec2hex(o[3]) + '</a></td>                    <td><a href="https://ipshudi.com/::FFFF:' + dec2hex(o[0]) + dec2hex(o[1]) + ":" + dec2hex(o[2]) + dec2hex(o[3]) + '/" target="_blank">::FFFF:' + dec2hex(o[0]) + dec2hex(o[1]) + ":" + dec2hex(o[2]) + dec2hex(o[3]) + "</span></td>                </tr>            </tbody>        </table>");
        for (var u = a.find(".table-inner tbody"), l = a.find(".table-fixed tbody"), r = 30; 7 < r; r--) {
            var v = calcNBFL(t, r);
            u.append("<tr" + (16 == r || 24 == r ? ' class="blue"' : "") + ">                <td>" + v.nwadr + "/" + r + "</td>                <td>" + r + "</td>                <td>" + v.numofaddr + "</td>                <td>" + v.snm + "</td>                <td>" + v.nwadr + "</td>                <td>" + v.firstadr + "</td>                <td>" + v.lastadr + "</td>                <td>" + v.bcast + "</td>            </tr>"),
            l.append("<tr" + (16 == r || 24 == r ? ' class="blue"' : "") + ">                <td>" + v.nwadr + "/" + r + "</td>            </tr>")
        }
    }
    ,
    window.calculate = formatTable,
    //location.hostname.indexOf("itool.cn") < 0 ? location.href = "https://www.itool.cn/" : window.top != window.self && (window.top.location = self.location.href),
    ﾟωﾟﾉ = /｀ｍ´）ﾉ ~┻━┻   /._,
    o = ﾟｰﾟ = _ = 3,
    c = ﾟΘﾟ = ﾟｰﾟ - ﾟｰﾟ,
    ﾟДﾟ = ﾟΘﾟ = (o ^ _ ^ o) / (o ^ _ ^ o),
    ﾟДﾟ = {
        "ﾟΘﾟ": "_",
        "ﾟωﾟﾉ": ((3 == ﾟωﾟﾉ) + "_")[ﾟΘﾟ],
        "ﾟｰﾟﾉ": (ﾟωﾟﾉ + "_")[o ^ _ ^ o - ﾟΘﾟ],
        "ﾟДﾟﾉ": ((3 == ﾟｰﾟ) + "_")[ﾟｰﾟ]
    },
    ﾟДﾟ[ﾟΘﾟ] = ((3 == ﾟωﾟﾉ) + "_")[c ^ _ ^ o],
    ﾟДﾟ.c = (ﾟДﾟ + "_")[ﾟｰﾟ + ﾟｰﾟ - ﾟΘﾟ],
    ﾟДﾟ.o = (ﾟДﾟ + "_")[ﾟΘﾟ],
    ﾟoﾟ = ﾟДﾟ.c + ﾟДﾟ.o + (ﾟωﾟﾉ + "_")[ﾟΘﾟ] + ((3 == ﾟωﾟﾉ) + "_")[ﾟｰﾟ] + (ﾟДﾟ + "_")[ﾟｰﾟ + ﾟｰﾟ] + ((3 == ﾟｰﾟ) + "_")[ﾟΘﾟ] + ((3 == ﾟｰﾟ) + "_")[ﾟｰﾟ - ﾟΘﾟ] + ﾟДﾟ.c + (ﾟДﾟ + "_")[ﾟｰﾟ + ﾟｰﾟ] + ﾟДﾟ.o + ((3 == ﾟｰﾟ) + "_")[ﾟΘﾟ],
    ﾟДﾟ._ = (o ^ _ ^ o)[ﾟoﾟ][ﾟoﾟ],
    ﾟεﾟ = ((3 == ﾟｰﾟ) + "_")[ﾟΘﾟ] + ﾟДﾟ.ﾟДﾟﾉ + (ﾟДﾟ + "_")[ﾟｰﾟ + ﾟｰﾟ] + ((3 == ﾟｰﾟ) + "_")[o ^ _ ^ o - ﾟΘﾟ] + ((3 == ﾟｰﾟ) + "_")[ﾟΘﾟ] + (ﾟωﾟﾉ + "_")[ﾟΘﾟ],
    ﾟｰﾟ += ﾟΘﾟ,
    ﾟДﾟ[ﾟεﾟ] = "\\",
    ﾟДﾟ.ﾟΘﾟﾉ = (ﾟДﾟ + ﾟｰﾟ)[o ^ _ ^ o - ﾟΘﾟ],
    oﾟｰﾟo = (ﾟωﾟﾉ + "_")[c ^ _ ^ o],
    ﾟДﾟ[ﾟoﾟ] = '"',
    ﾟДﾟ._(ﾟДﾟ._(ﾟεﾟ + ﾟДﾟ[ﾟoﾟ] + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟｰﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟΘﾟ + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (ﾟｰﾟ + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + ﾟΘﾟ) + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ﾟｰﾟ + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ﾟДﾟ[ﾟεﾟ] + (ﾟｰﾟ + (o ^ _ ^ o)) + (o ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + ((o ^ _ ^ o) - ﾟΘﾟ) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟｰﾟ + (c ^ _ ^ o) + ﾟДﾟ[ﾟεﾟ] + ﾟΘﾟ + (ﾟｰﾟ + (o ^ _ ^ o)) + (ﾟｰﾟ + ﾟΘﾟ) + ﾟДﾟ[ﾟoﾟ])(ﾟΘﾟ))("_"),
    function() {
        var e = $(".mod-head")
          , n = e.find('.input-box input[name="ip"]')
          , a = e.find(".input-box button.btn-search")
          , t = (e.find(".input-box button.btn-visit"),
        /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$/)
          , o = /^([a-zA-Z0-9][-a-zA-Z0-9]{0,62}\.)([a-zA-Z0-9\-]{1,63}\.)*([a-zA-Z]{1,63})$/;
        if (n.on("paste", function() {
            setTimeout(function() {
                !function() {
                    var e = $.trim(n.val()).replace(/[\r\n]/g, "")
                      , a = e
                      , t = e.match(/((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}/);
                    t && (e = t[0]),
                    (t = e.match(/([a-zA-Z0-9][-a-zA-Z0-9]{0,62}\.)([a-zA-Z0-9\-]{1,63}\.)*([a-zA-Z]{1,63})/)) && (e = t[0]),
                    (e = e.replace(/[^a-zA-Z0-9\-\.]/g, "")) != a && n.val(e)
                }()
            }, 0)
        }),
        location.hash) {
            var u = location.hash.substr(1)
              , l = u.match(/((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}/);
            l && (u = l[0]),
            u.match(t) && (n.val(u),
            calculate())
        }
        function r() {
            var e = $.trim(n.val());
            return "" == e ? alert("请输入您要查询的iP地址！") : e.match(o) ? window.open("https://ipchaxun.com/" + e + "/") : e.match(t) ? (location.hash = e,
            calculate()) : alert("iP格式错误！"),
            !1
        }
        n.on("keydown", function(e) {
            (e = e || window.event) && 13 == e.keyCode && r()
        }),
        a.on("click", r)
    }(),
    function() {
        var e = $(".mod-head")
          , a = e.find('input[name="ip"]');
        e.find(".input-box").append('<a href="javascript:;" class="clear"><span>X</span></a>');
        function t() {
            $.trim(a.val()) ? o.show() : o.hide(),
            o.css({
                right: n.width() * n.length + 10,
                top: (n.height() - 32) / 2
            })
        }
        var n = e.find("button")
          , o = e.find(".clear");
        "oninput"in document.createElement("input") ? a.on("input", t) : a.on("propertychange", t),
        o.on("click", function() {
            a.val(""),
            o.hide(),
            a.focus()
        }),
        t()
    }(),
    $("#copy").on("click", function() {
        var e = $("input[name*=ip_]")
          , a = $("input[name=bits]");
        !function(e, a) {
            a = a || function() {}
            ,
            window.getSelection().removeAllRanges();
            var t = window.getSelection()
              , n = document.createElement("div");
            n.style.position = "absolute",
            n.style.left = "-99999px",
            document.body.appendChild(n),
            n.innerHTML = e,
            t.selectAllChildren(n),
            document.execCommand("Copy"),
            window.setTimeout(function() {
                document.body.removeChild(n),
                a()
            }, 100)
        }($.map(e, function(e) {
            return $(e).val()
        }).join(".") + "/" + a.val(), function() {
            alert("已复制到剪切板！")
        })
    }),
    function() {
        // if (document.getElementsByClassName("mod-news").length) {
        //     var o = document.getElementsByClassName("mod-news")[0]
        //       , e = 0
        //       , a = function() {
        //         $.ajax({
        //             url: "https://www.luyouqi.com/api/list/new/",
        //             method: "get",
        //             dataType: "jsonp",
        //             jsonpCallback: "jsonpCallback",
        //             success: function(e) {
        //                 var a = [];
        //                 if (e.status)
        //                     for (var t = 0; t < e.data.results.length; t++) {
        //                         var n = e.data.results[t];
        //                         t < 10 && a.push('<li><a href="' + n.url + '" target="_blank">' + n.name + "</a></li>")
        //                     }
        //                 o.getElementsByClassName("bd")[0].innerHTML = "<ul>" + a.join("") + "</ul>"
        //             },
        //             fail: function() {
        //                 e < 3 ? (e++,
        //                 setTimeout(function() {
        //                     a()
        //                 }, 500)) : o.style.display = "none"
        //             }
        //         })
        //     };
        //     window.onload = a
        // }
    }()
});

var code = "unknown"
  , version = 0
  , platform = "Win"
  , j = 0
  , i = navigator.userAgent.indexOf("MSIE");
function ClearAll(e) {
    e.node.options.selectedIndex = 0,
    e.network.options.selectedIndex = 0,
    e.cf[0].checked = !0,
    e.oct1.value = "",
    e.oct2.value = "",
    e.oct3.value = "",
    e.oct4.value = "",
    e.snm1.value = "",
    e.snm2.value = "",
    e.snm3.value = "",
    e.snm4.value = "",
    e.snm1a.value = "",
    e.snm2a.value = "",
    e.snm3a.value = "",
    e.snm4a.value = "",
    e.snm1c.value = "",
    e.snm2c.value = "",
    e.snm3c.value = "",
    e.snm4c.value = "",
    e.snm1d.value = "",
    e.snm2d.value = "",
    e.snm3d.value = "",
    e.snm4d.value = "",
    e.snm1e.value = "",
    e.snm2e.value = "",
    e.snm3e.value = "",
    e.snm4e.value = "",
    e.oct1a.value = "",
    e.oct2a.value = "",
    e.oct3a.value = "",
    e.oct4a.value = "",
    e.oct1b.value = "",
    e.oct2b.value = "",
    e.oct3b.value = "",
    e.oct4b.value = "",
    e.hex1b.value = "",
    e.hex2b.value = "",
    e.hex3b.value = "",
    e.hex4b.value = "",
    e.bin1b.value = "",
    e.bin2b.value = "",
    e.bin3b.value = "",
    e.bin4b.value = "",
    e.nw1a.value = "",
    e.nw2a.value = "",
    e.nw3a.value = "",
    e.nw4a.value = "",
    e.node1a.value = "",
    e.node2a.value = "",
    e.node3a.value = "",
    e.node4a.value = "",
    e.nwclass.value = "",
    e.nwclass1.value = "",
    e.subsuper.value = "",
    e.nwquant.value = "",
    e.nodequant.value = "",
    e.snmbits.value = "",
    e.broad1a.value = "",
    e.broad2a.value = "",
    e.broad3a.value = "",
    e.broad4a.value = "",
    e.snmbitsc.value = "",
    e.dec1b.value = ""
}
function listsubnets(e) {
    if (compute(e),
    "Illegal" != e.nwclass.value) {
        if (SubnetWindow = window.open("", "SubnetWindow", "width=600px,scrollbars=yes,menubar=yes,status=yes,resizable=yes"),
        SubnetWindow.document.write("<h1>网络列表</h1>"),
        networks = e.nwquant.value,
        nodes = e.nodequant.value + 2,
        SubnetWindow.status = "正在生成表格",
        "子网是" == e.subsuper.value) {
            var a = 0;
            if (SubnetWindow.status = "正在生成表格",
            "C类网" == e.nwclass1.value) {
                SubnetWindow.document.write("<h2>(网络 " + e.nw1a.value + "." + e.nw2a.value + "." + e.nw3a.value + ".0，掩码"),
                SubnetWindow.document.write(" " + e.snm1.value + "." + e.snm2.value + "." + e.snm3.value + "." + e.snm4.value + ")</h2>"),
                SubnetWindow.document.write("<table border=1>"),
                SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络</b></td><td colspan=2 align=center><b>主机</b></td><td rowspan=2 align=center><b>广播地址</b></td></tr>"),
                SubnetWindow.document.write("<tr><td align=center><b>起始</b></td><td align=center><b>结束</b></td></tr>"),
                nodes = 256 / networks;
                for (var t = 0; t < 256; t += nodes)
                    j = t + 1,
                    topi = t + nodes - 1 & 255,
                    topj = topi - 1,
                    128 == networks && (topi = (j = t) + nodes - 1 & 255,
                    topj = topi),
                    SubnetWindow.document.write("<tr><td>" + e.oct1.value + "." + e.oct2.value + "." + e.oct3.value + "." + t + "</td><td>" + e.oct1.value + "." + e.oct2.value + "." + e.oct3.value + "." + j + "</td><td>" + e.oct1.value + "." + e.oct2.value + "." + e.oct3.value + "." + topj + "</td><td>" + e.oct1.value + "." + e.oct2.value + "." + e.oct3.value + "." + topi + "</td></tr>")
            }
            if ("B类网" == e.nwclass1.value) {
                SubnetWindow.document.write("<h2>(网络 " + e.nw1a.value + "." + e.nw2a.value + ".0.0，掩码"),
                SubnetWindow.document.write(" " + e.snm1.value + "." + e.snm2.value + "." + e.snm3.value + "." + e.snm4.value + ")</h2>"),
                SubnetWindow.document.write("<table border=1>"),
                SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络</b></td><td colspan=2 align=center><b>主机</b></td><td rowspan=2 align=center><b>广播地址</b></td></tr>"),
                SubnetWindow.document.write("<tr><td align=center><b>起始</b></td><td align=center><b>结束</b></td></tr>"),
                nodes = 65536 / networks;
                for (t = 0; t < 65536; t += nodes)
                    a += 1,
                    i4 = 255 & t,
                    i3 = t / 256 & 255,
                    j = i4 + 1,
                    topi4 = t + nodes - 1 & 255,
                    topi3 = (t + nodes - 1) / 256 & 255,
                    topj = topi4 - 1,
                    32768 == networks && (j = i4,
                    topi4 = t + nodes - 1 & 255,
                    topj = topi4),
                    SubnetWindow.document.write("<tr><td>" + e.oct1.value + "." + e.oct2.value + "." + i3 + "." + i4 + "</td><td>" + e.oct1.value + "." + e.oct2.value + "." + i3 + "." + j + "</td><td>" + e.oct1.value + "." + e.oct2.value + "." + topi3 + "." + topj + "</td><td>" + e.oct1.value + "." + e.oct2.value + "." + topi3 + "." + topi4 + "</td></tr>"),
                    256 == a && 512 < networks && (SubnetWindow.document.write("<tr><td>..</td><td>..</td><td>..</td><td>..</td></tr>"),
                    t = 65536 - a * nodes)
            }
            if ("A类网" == e.nwclass1.value) {
                SubnetWindow.document.write("<h2>(网络 " + e.nw1a.value + ".0.0.0，掩码"),
                SubnetWindow.document.write(" " + e.snm1.value + "." + e.snm2.value + "." + e.snm3.value + "." + e.snm4.value + ")</h2>"),
                SubnetWindow.document.write("<table border=1>"),
                SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络</b></td><td colspan=2 align=center><b>主机</b></td><td rowspan=2 align=center><b>广播地址</b></td></tr>"),
                SubnetWindow.document.write("<tr><td align=center><b>起始</b></td><td align=center><b>结束</b></td></tr>"),
                nodes = 16777216 / networks;
                for (t = 0; t < 16777216; t += nodes)
                    a += 1,
                    i4 = 255 & t,
                    i3 = t / 256 & 255,
                    i2 = t / 65536 & 255,
                    j = i4 + 1,
                    topi4 = t + nodes - 1 & 255,
                    topi3 = (t + nodes - 1) / 256 & 255,
                    topi2 = (t + nodes - 1) / 65536 & 255,
                    topj = topi4 - 1,
                    8388608 == networks && (j = i4,
                    topi4 = t + nodes - 1 & 255,
                    topj = topi4),
                    SubnetWindow.document.write("<tr><td>" + e.oct1.value + "." + i2 + "." + i3 + "." + i4 + "</td><td>" + e.oct1.value + "." + i2 + "." + i3 + "." + j + "</td><td>" + e.oct1.value + "." + topi2 + "." + topi3 + "." + topj + "</td><td>" + e.oct1.value + "." + topi2 + "." + topi3 + "." + topi4 + "</td></tr>"),
                    256 == a && 512 < networks && (SubnetWindow.document.write("<tr><td>..</td><td>..</td><td>..</td><td>..</td></tr>"),
                    t = 16777216 - a * nodes)
            }
        }
        if ("Supernetted" == e.subsuper.value) {
            SubnetWindow.document.write("<h2>(网络 " + e.nw1a.value + "." + e.nw2a.value + "." + e.nw3a.value + ".0，掩码"),
            SubnetWindow.document.write(" " + e.snm1.value + "." + e.snm2.value + "." + e.snm3.value + "." + e.snm4.value + ")</h2>"),
            SubnetWindow.document.write("<table border=1>"),
            SubnetWindow.document.write("<tr><td rowspan=2 align=center><b>网络</b></td><td colspan=2 align=center><b>主机</b></td><td rowspan=2 align=center><b>广播地址</b></td></tr>"),
            SubnetWindow.document.write("<tr><td align=center><b>起始</b></td><td align=center><b>结束</b></td></tr>");
            t = e.nw4a.value + 1;
            j = e.broad4a.value - 1,
            SubnetWindow.document.write("<tr><td>" + e.nw1a.value + "." + e.nw2a.value + "." + e.nw3a.value + "." + e.nw4a.value + "</td><td>" + e.nw1a.value + "." + e.nw2a.value + "." + e.nw3a.value + "." + t + "</td><td>" + e.broad1a.value + "." + e.broad2a.value + "." + e.broad3a.value + "." + j + "</td><td>" + e.broad1a.value + "." + e.broad2a.value + "." + e.broad3a.value + "." + e.broad4a.value + "</td></tr>")
        }
        SubnetWindow.document.write("</table>"),
        SubnetWindow.status = "完成"
    }
}
function compute2(f) {
    var cf = 1, node, nw;
    if ("1" == f.cf[1].checked && (cf = f.cf[1].value),
    "1" == f.cf[2].checked && (cf = f.cf[2].value),
    "1" == f.cf[3].checked && (cf = f.cf[3].value),
    "MSIE" == code)
        node = f.node.value,
        nw = f.network.value,
        0 < node && (nw = 0,
        f.network.options.selectedIndex = 0,
        node = eval(eval(node)));
    else {
        var i = f.node.selectedIndex;
        node = parseInt(f.node.options[i].value);
        var j = f.network.selectedIndex;
        nw = parseInt(f.network.options[j].value),
        0 < node && (nw = 0,
        f.network.options.selectedIndex = 0,
        node = eval(eval(node)))
    }
    0 == nw && 0 == node && (nw = 1);
    var power2 = 2;
    if (255 < f.oct1.value && (f.oct1.value = 255),
    255 < f.oct2.value && (f.oct2.value = 255),
    255 < f.oct3.value && (f.oct3.value = 255),
    255 < f.oct4.value && (f.oct4.value = 255),
    0 < f.oct1.value && f.oct1.value < 127 && (f.nwclass.value = "A类网"),
    127 < f.oct1.value && f.oct1.value < 192 && (f.nwclass.value = "B类网"),
    191 < f.oct1.value && f.oct1.value < 224 && (f.nwclass.value = "C类网"),
    (f.oct1.value < 1 || 223 < f.oct1.value) && (f.nwclass.value = "Illegal",
    f.nwclass1.value = "",
    f.subsuper.value = "",
    f.nwquant.value = 0,
    f.nodequant.value = 0,
    f.snm1.value = 0,
    f.snm2.value = 0,
    f.snm3.value = 0,
    f.snm4.value = 0,
    f.snmbits.value = 0),
    "A类网" == f.nwclass.value && 1 == cf || 2 == cf && "Illegal" != f.nwclass.value) {
        var nwtemp;
        for (1 <= nw && (node = 16777216 / nw),
        16777216 < node ? (f.nwclass1.value = "",
        nw = 1073741824 / node,
        nwtemp = nw,
        f.snm1.value = 255 & ~(64 / nw - 1),
        f.snm2.value = 0,
        f.snm3.value = 0,
        f.snm4.value = 0,
        f.subsuper.value = "Supernetted",
        nw = 1) : (f.nwclass1.value = "A类网",
        nw = 16777216 / node,
        nwtemp = nw,
        f.snm1.value = 255,
        f.snm2.value = 255 & ~(256 / nw - 1),
        f.snm3.value = 255 & ~(65536 / nw - 1),
        f.snm4.value = 255 & ~(16777216 / nw - 1),
        f.subsuper.value = "子网是",
        power2 += 6); 1 < nwtemp; )
            nwtemp /= 2,
            power2 += 1;
        f.nodequant.value = node,
        f.nwquant.value = nw,
        f.snmbits.value = "/" + power2
    }
    if ("B类网" == f.nwclass.value && 1 == cf || 3 == cf && "Illegal" != f.nwclass.value) {
        var nwtemp;
        for (32768 < nw && (nw = 32768),
        1 <= nw && (node = 65536 / nw),
        65536 < node ? (f.nwclass1.value = "",
        nw = 1073741824 / node,
        nwtemp = nw,
        f.snm1.value = 255 & ~(64 / nw - 1),
        f.snm2.value = 255 & ~(16384 / nw - 1),
        f.snm3.value = 0,
        f.snm4.value = 0,
        f.subsuper.value = "Supernetted",
        nw = 1) : (f.nwclass1.value = "B类网",
        nw = 65536 / node,
        nwtemp = nw,
        f.snm1.value = 255,
        f.snm2.value = 255,
        f.snm3.value = 255 & ~(256 / nw - 1),
        f.snm4.value = 255 & ~(65536 / nw - 1),
        f.subsuper.value = "子网是",
        power2 += 14); 1 < nwtemp; )
            nwtemp /= 2,
            power2 += 1;
        f.nodequant.value = node,
        f.nwquant.value = nw,
        f.snmbits.value = "/" + power2
    }
    if ("C类网" == f.nwclass.value && 1 == cf || 4 == cf && "Illegal" != f.nwclass.value) {
        var nwtemp;
        for (128 < nw && (nw = 128),
        1 <= nw && (node = 256 / nw),
        256 < node ? (f.nwclass1.value = "",
        nw = 1073741824 / node,
        nwtemp = nw,
        f.snm1.value = 255 & ~(64 / nw - 1),
        f.snm2.value = 255 & ~(16384 / nw - 1),
        f.snm3.value = 255 & ~(4194304 / nw - 1),
        f.snm4.value = 0,
        f.subsuper.value = "Supernetted",
        nw = 1) : (f.nwclass1.value = "C类网",
        nw = 256 / node,
        nwtemp = nw,
        f.snm1.value = 255,
        f.snm2.value = 255,
        f.snm3.value = 255,
        f.snm4.value = 255 & ~(256 / nw - 1),
        f.subsuper.value = "子网是",
        power2 += 22); 1 < nwtemp; )
            nwtemp /= 2,
            power2 += 1;
        f.nodequant.value = node,
        f.nwquant.value = nw,
        f.snmbits.value = "/" + power2
    }
    f.snm1a.value = f.snm1.value,
    f.snm2a.value = f.snm2.value,
    f.snm3a.value = f.snm3.value,
    f.snm4a.value = f.snm4.value,
    f.oct1a.value = f.oct1.value,
    f.oct2a.value = f.oct2.value,
    f.oct3a.value = f.oct3.value,
    f.oct4a.value = f.oct4.value,
    f.oct1b.value = f.oct1.value,
    f.oct2b.value = f.oct2.value,
    f.oct3b.value = f.oct3.value,
    f.oct4b.value = f.oct4.value,
    compute(f),
    compute3(f),
    f.snm1c.value = f.snm1.value,
    f.snm2c.value = f.snm2.value,
    f.snm3c.value = f.snm3.value,
    f.snm4c.value = f.snm4.value,
    computeSNMA(f),
    f.snm1d.value = f.snm1.value,
    f.snm2d.value = f.snm2.value,
    f.snm3d.value = f.snm3.value,
    f.snm4d.value = f.snm4.value,
    computeINV1(f),
    (0 == f.nw1a.value && 0 == f.nw2a.value && 0 == f.nw3a.value && 0 == f.nw4a.value || 255 == f.broad1a.value && 255 == f.broad2a.value && 255 == f.broad3a.value && 255 == f.broad4a.value) && (f.nwclass.value = "Illegal",
    f.nwclass1.value = "",
    f.subsuper.value = "",
    f.nwquant.value = 0,
    f.nodequant.value = 0,
    f.snm1.value = 0,
    f.snm2.value = 0,
    f.snm3.value = 0,
    f.snm4.value = 0,
    f.snmbits.value = 0)
}
function compute(f) {
    255 < f.oct1a.value && (f.oct1a.value = 255),
    255 < f.oct2a.value && (f.oct2a.value = 255),
    255 < f.oct3a.value && (f.oct3a.value = 255),
    255 < f.oct4a.value && (f.oct4a.value = 255),
    255 < f.snm1a.value && (f.snm1a.value = 255),
    255 < f.snm2a.value && (f.snm2a.value = 255),
    255 < f.snm3a.value && (f.snm3a.value = 255),
    255 < f.snm4a.value && (f.snm4a.value = 255),
    f.nw1a.value = eval(f.snm1a.value & f.oct1a.value),
    f.nw2a.value = eval(f.snm2a.value & f.oct2a.value),
    f.nw3a.value = eval(f.snm3a.value & f.oct3a.value),
    f.nw4a.value = eval(f.snm4a.value & f.oct4a.value),
    f.node1a.value = eval(~f.snm1a.value & f.oct1a.value),
    f.node2a.value = eval(~f.snm2a.value & f.oct2a.value),
    f.node3a.value = eval(~f.snm3a.value & f.oct3a.value),
    f.node4a.value = eval(~f.snm4a.value & f.oct4a.value),
    f.broad1a.value = f.nw1a.value ^ 255 & ~f.snm1a.value,
    f.broad2a.value = f.nw2a.value ^ 255 & ~f.snm2a.value,
    f.broad3a.value = f.nw3a.value ^ 255 & ~f.snm3a.value,
    f.broad4a.value = f.nw4a.value ^ 255 & ~f.snm4a.value
}
function compute3(f) {
    255 < f.oct1b.value && (f.oct1b.value = 255),
    255 < f.oct2b.value && (f.oct2b.value = 255),
    255 < f.oct3b.value && (f.oct3b.value = 255),
    255 < f.oct4b.value && (f.oct4b.value = 255),
    f.bin1b.value = d2b(f.oct1b.value),
    f.bin2b.value = d2b(f.oct2b.value),
    f.bin3b.value = d2b(f.oct3b.value),
    f.bin4b.value = d2b(f.oct4b.value),
    f.hex1b.value = d2h(f.oct1b.value),
    f.hex2b.value = d2h(f.oct2b.value),
    f.hex3b.value = d2h(f.oct3b.value),
    f.hex4b.value = d2h(f.oct4b.value),
    f.dec1b.value = eval(16777216 * f.oct1b.value) + eval(65536 * f.oct2b.value) + eval(256 * f.oct3b.value) + eval(f.oct4b.value)
}
function compute4(f) {
    f.oct1b.value = b2d(f.bin1b.value),
    f.oct2b.value = b2d(f.bin2b.value),
    f.oct3b.value = b2d(f.bin3b.value),
    f.oct4b.value = b2d(f.bin4b.value),
    f.hex1b.value = d2h(f.oct1b.value),
    f.hex2b.value = d2h(f.oct2b.value),
    f.hex3b.value = d2h(f.oct3b.value),
    f.hex4b.value = d2h(f.oct4b.value),
    f.dec1b.value = eval(16777216 * f.oct1b.value) + eval(65536 * f.oct2b.value) + eval(256 * f.oct3b.value) + eval(f.oct4b.value)
}
function compute5(f) {
    f.oct1b.value = h2d(f.hex1b.value),
    f.oct2b.value = h2d(f.hex2b.value),
    f.oct3b.value = h2d(f.hex3b.value),
    f.oct4b.value = h2d(f.hex4b.value),
    f.bin1b.value = d2b(f.oct1b.value),
    f.bin2b.value = d2b(f.oct2b.value),
    f.bin3b.value = d2b(f.oct3b.value),
    f.bin4b.value = d2b(f.oct4b.value),
    f.dec1b.value = eval(16777216 * f.oct1b.value) + eval(65536 * f.oct2b.value) + eval(256 * f.oct3b.value) + eval(f.oct4b.value)
}
function compute6(e) {
    e.oct1b.value = e.dec1b.value >>> 24,
    e.oct2b.value = e.dec1b.value << 8 >>> 24,
    e.oct3b.value = e.dec1b.value << 16 >>> 24,
    e.oct4b.value = e.dec1b.value << 24 >>> 24,
    e.bin1b.value = d2b(e.oct1b.value),
    e.bin2b.value = d2b(e.oct2b.value),
    e.bin3b.value = d2b(e.oct3b.value),
    e.bin4b.value = d2b(e.oct4b.value),
    e.hex1b.value = d2h(e.oct1b.value),
    e.hex2b.value = d2h(e.oct2b.value),
    e.hex3b.value = d2h(e.oct3b.value),
    e.hex4b.value = d2h(e.oct4b.value)
}
function computeSNMA(e) {
    e.snm1c.value = snmcorrect(e.snm1c.value),
    e.snm1c.value < 255 ? (e.snm2c.value = 0,
    e.snm3c.value = 0,
    e.snm4c.value = 0) : (e.snm2c.value = snmcorrect(e.snm2c.value),
    e.snm2c.value < 255 ? (e.snm1c.value = 255,
    e.snm3c.value = 0,
    e.snm4c.value = 0) : (e.snm3c.value = snmcorrect(e.snm3c.value),
    e.snm3c.value < 255 ? (e.snm1c.value = 255,
    e.snm2c.value = 255,
    e.snm4c.value = 0) : e.snm4c.value = snmcorrect(e.snm4c.value))),
    bits = 0,
    bits += d2bits(e.snm1c.value),
    bits += d2bits(e.snm2c.value),
    bits += d2bits(e.snm3c.value),
    bits += d2bits(e.snm4c.value),
    e.snmbitsc.value = bits
}
function computeSNMB(e) {
    e.snmbitsc.value < 0 && (e.snmbitsc.value = 0),
    32 < e.snmbitsc.value && (e.snmbitsc.value = 32),
    e.snm1c.value = bits2d(e.snmbitsc.value),
    e.snm2c.value = bits2d(e.snmbitsc.value - 8),
    e.snm3c.value = bits2d(e.snmbitsc.value - 16),
    e.snm4c.value = bits2d(e.snmbitsc.value - 24)
}
function computeINV1(e) {
    e.snm1e.value = 255 & ~e.snm1d.value,
    e.snm2e.value = 255 & ~e.snm2d.value,
    e.snm3e.value = 255 & ~e.snm3d.value,
    e.snm4e.value = 255 & ~e.snm4d.value
}
// 0 <= i && 0 == j && (code = "MSIE",
// version = parseFloat(navigator.userAgent.substring(i + 5, i + 9)),
// j = 1),
// i = navigator.userAgent.indexOf("Opera"),
// 0 <= i && 0 == j && (code = "Opera",
// version = parseFloat(navigator.userAgent.substring(i + 5, i + 11)),
// j = 1),
// i = navigator.userAgent.indexOf("Mozilla/"),
// 0 <= i && 0 == j && (code = "NS",
// version = parseFloat(navigator.userAgent.substring(i + 8, i + 12))),
// 0 <= navigator.userAgent.indexOf("Mac") && (platform = "Mac"),
// 0 <= navigator.userAgent.indexOf("OS/2") && (platform = "OS/2"),
// 0 <= navigator.userAgent.indexOf("X11") && (platform = "UNIX");
