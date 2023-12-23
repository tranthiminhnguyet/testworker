(function(e) {
    var t = {};
    function r(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = "9862")
}
)({
    0: function(e, t) {},
    "018a": function(e, t, r) {
        "use strict";
        var n;
        function i(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                e.apply(void 0, arguments))
            }
        }
        var a = r("9054").codes
          , f = a.ERR_MISSING_ARGS
          , o = a.ERR_STREAM_DESTROYED;
        function s(e) {
            if (e)
                throw e
        }
        function d(e) {
            return e.setHeader && "function" === typeof e.abort
        }
        function c(e, t, a, f) {
            f = i(f);
            var s = !1;
            e.on("close", (function() {
                s = !0
            }
            )),
            void 0 === n && (n = r("65ab")),
            n(e, {
                readable: t,
                writable: a
            }, (function(e) {
                if (e)
                    return f(e);
                s = !0,
                f()
            }
            ));
            var c = !1;
            return function(t) {
                if (!s && !c)
                    return c = !0,
                    d(e) ? e.abort() : "function" === typeof e.destroy ? e.destroy() : void f(t || new o("pipe"))
            }
        }
        function u(e) {
            e()
        }
        function h(e, t) {
            return e.pipe(t)
        }
        function l(e) {
            return e.length ? "function" !== typeof e[e.length - 1] ? s : e.pop() : s
        }
        function b() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            var n, i = l(t);
            if (Array.isArray(t[0]) && (t = t[0]),
            t.length < 2)
                throw new f("streams");
            var a = t.map((function(e, r) {
                var f = r < t.length - 1
                  , o = r > 0;
                return c(e, f, o, (function(e) {
                    n || (n = e),
                    e && a.forEach(u),
                    f || (a.forEach(u),
                    i(n))
                }
                ))
            }
            ));
            return t.reduce(h)
        }
        e.exports = b
    },
    "027d": function(e, t, r) {
        e.exports = r("faa1").EventEmitter
    },
    "07f2": function(e, t, r) {
        "use strict";
        var n = r("c3c0")
          , i = r("6eed");
        function a() {
            if (!(this instanceof a))
                return new a;
            i.call(this),
            this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
        }
        n.inherits(a, i),
        e.exports = a,
        a.blockSize = 512,
        a.outSize = 224,
        a.hmacStrength = 192,
        a.padLength = 64,
        a.prototype._digest = function(e) {
            return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
        }
    },
    "0cbb": function(e, t, r) {
        "use strict";
        var n, i = t, a = r("7d92"), f = r("4136"), o = r("f3a3"), s = o.assert;
        function d(e) {
            "short" === e.type ? this.curve = new f.short(e) : "edwards" === e.type ? this.curve = new f.edwards(e) : this.curve = new f.mont(e),
            this.g = this.curve.g,
            this.n = this.curve.n,
            this.hash = e.hash,
            s(this.g.validate(), "Invalid curve"),
            s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }
        function c(e, t) {
            Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var r = new d(t);
                    return Object.defineProperty(i, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: r
                    }),
                    r
                }
            })
        }
        i.PresetCurve = d,
        c("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: a.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }),
        c("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: a.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }),
        c("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: a.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }),
        c("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: a.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }),
        c("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: a.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }),
        c("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: a.sha256,
            gRed: !1,
            g: ["9"]
        }),
        c("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: a.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        try {
            n = r("409b")
        } catch (u) {
            n = void 0
        }
        c("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: a.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
        })
    },
    1: function(e, t) {},
    "11dc": function(e, t, r) {
        "use strict";
        (function(t, n) {
            var i = 65536
              , a = 4294967295;
            function f() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
            var o = r("8707").Buffer
              , s = {
                getRandomValues(array) {
                    for (var i = 0; i < array.length; i++) {
                        array[i] = Math.floor(Math.random() * 256);
                    }
                    return array;
                }
              };
            function d(e, t) {
                if (e > a)
                    throw new RangeError("requested too many random bytes");
                var r = o.allocUnsafe(e);
                if (e > 0)
                    if (e > i)
                        for (var f = 0; f < e; f += i)
                            s.getRandomValues(r.slice(f, f + i));
                    else
                        s.getRandomValues(r);
                return "function" === typeof t ? n.nextTick((function() {
                    t(null, r)
                }
                )) : r
            }
            s && s.getRandomValues ? e.exports = d : e.exports = f
        }
        ).call(this, r("c8ba"), r("4362"))
    },
    "13e2": function(e, t, r) {
        "use strict";
        var n = r("c3c0")
          , i = r("edc9")
          , a = r("aa56")
          , f = n.rotl32
          , o = n.sum32
          , s = n.sum32_5
          , d = a.ft_1
          , c = i.BlockHash
          , u = [1518500249, 1859775393, 2400959708, 3395469782];
        function h() {
            if (!(this instanceof h))
                return new h;
            c.call(this),
            this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
            this.W = new Array(80)
        }
        n.inherits(h, c),
        e.exports = h,
        h.blockSize = 512,
        h.outSize = 160,
        h.hmacStrength = 80,
        h.padLength = 64,
        h.prototype._update = function(e, t) {
            for (var r = this.W, n = 0; n < 16; n++)
                r[n] = e[t + n];
            for (; n < r.length; n++)
                r[n] = f(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
            var i = this.h[0]
              , a = this.h[1]
              , c = this.h[2]
              , h = this.h[3]
              , l = this.h[4];
            for (n = 0; n < r.length; n++) {
                var b = ~~(n / 20)
                  , p = s(f(i, 5), d(b, a, c, h), l, r[n], u[b]);
                l = h,
                h = c,
                c = f(a, 30),
                a = i,
                i = p
            }
            this.h[0] = o(this.h[0], i),
            this.h[1] = o(this.h[1], a),
            this.h[2] = o(this.h[2], c),
            this.h[3] = o(this.h[3], h),
            this.h[4] = o(this.h[4], l)
        }
        ,
        h.prototype._digest = function(e) {
            return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
        }
    },
    "1fb5": function(e, t, r) {
        "use strict";
        t.byteLength = c,
        t.toByteArray = h,
        t.fromByteArray = p;
        for (var n = [], i = [], a = "undefined" !== typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, s = f.length; o < s; ++o)
            n[o] = f[o],
            i[f.charCodeAt(o)] = o;
        function d(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            -1 === r && (r = t);
            var n = r === t ? 0 : 4 - r % 4;
            return [r, n]
        }
        function c(e) {
            var t = d(e)
              , r = t[0]
              , n = t[1];
            return 3 * (r + n) / 4 - n
        }
        function u(e, t, r) {
            return 3 * (t + r) / 4 - r
        }
        function h(e) {
            var t, r, n = d(e), f = n[0], o = n[1], s = new a(u(e, f, o)), c = 0, h = o > 0 ? f - 4 : f;
            for (r = 0; r < h; r += 4)
                t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)],
                s[c++] = t >> 16 & 255,
                s[c++] = t >> 8 & 255,
                s[c++] = 255 & t;
            return 2 === o && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4,
            s[c++] = 255 & t),
            1 === o && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2,
            s[c++] = t >> 8 & 255,
            s[c++] = 255 & t),
            s
        }
        function l(e) {
            return n[e >> 18 & 63] + n[e >> 12 & 63] + n[e >> 6 & 63] + n[63 & e]
        }
        function b(e, t, r) {
            for (var n, i = [], a = t; a < r; a += 3)
                n = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),
                i.push(l(n));
            return i.join("")
        }
        function p(e) {
            for (var t, r = e.length, i = r % 3, a = [], f = 16383, o = 0, s = r - i; o < s; o += f)
                a.push(b(e, o, o + f > s ? s : o + f));
            return 1 === i ? (t = e[r - 1],
            a.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1],
            a.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")),
            a.join("")
        }
        i["-".charCodeAt(0)] = 62,
        i["_".charCodeAt(0)] = 63
    },
    2: function(e, t) {},
    2137: function(e, t, r) {
        "use strict";
        var n = r("c3c0")
          , i = r("da3e");
        function a(e, t, r) {
            if (!(this instanceof a))
                return new a(e,t,r);
            this.Hash = e,
            this.blockSize = e.blockSize / 8,
            this.outSize = e.outSize / 8,
            this.inner = null,
            this.outer = null,
            this._init(n.toArray(t, r))
        }
        e.exports = a,
        a.prototype._init = function(e) {
            e.length > this.blockSize && (e = (new this.Hash).update(e).digest()),
            i(e.length <= this.blockSize);
            for (var t = e.length; t < this.blockSize; t++)
                e.push(0);
            for (t = 0; t < e.length; t++)
                e[t] ^= 54;
            for (this.inner = (new this.Hash).update(e),
            t = 0; t < e.length; t++)
                e[t] ^= 106;
            this.outer = (new this.Hash).update(e)
        }
        ,
        a.prototype.update = function(e, t) {
            return this.inner.update(e, t),
            this
        }
        ,
        a.prototype.digest = function(e) {
            return this.outer.update(this.inner.digest()),
            this.outer.digest(e)
        }
    },
    2330: function(e, t, r) {
        e.exports = r("3a89")(r("4673"))
    },
    2416: function(e, t, r) {
        (function(t) {
            const n = r("6fde");
            function i() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                this.blockSize = null,
                this.count = 0,
                this.squeezing = !1
            }
            i.prototype.initialize = function(e, t) {
                for (let r = 0; r < 50; ++r)
                    this.state[r] = 0;
                this.blockSize = e / 8,
                this.count = 0,
                this.squeezing = !1
            }
            ,
            i.prototype.absorb = function(e) {
                for (let t = 0; t < e.length; ++t)
                    this.state[~~(this.count / 4)] ^= e[t] << this.count % 4 * 8,
                    this.count += 1,
                    this.count === this.blockSize && (n.p1600(this.state),
                    this.count = 0)
            }
            ,
            i.prototype.absorbLastFewBits = function(e) {
                this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8,
                0 !== (128 & e) && this.count === this.blockSize - 1 && n.p1600(this.state),
                this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8,
                n.p1600(this.state),
                this.count = 0,
                this.squeezing = !0
            }
            ,
            i.prototype.squeeze = function(e) {
                this.squeezing || this.absorbLastFewBits(1);
                const r = t.alloc(e);
                for (let t = 0; t < e; ++t)
                    r[t] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255,
                    this.count += 1,
                    this.count === this.blockSize && (n.p1600(this.state),
                    this.count = 0);
                return r
            }
            ,
            i.prototype.copy = function(e) {
                for (let t = 0; t < 50; ++t)
                    e.state[t] = this.state[t];
                e.blockSize = this.blockSize,
                e.count = this.count,
                e.squeezing = this.squeezing
            }
            ,
            e.exports = i
        }
        ).call(this, r("b639").Buffer)
    },
    2801: function(e) {
        e.exports = JSON.parse('{"name":"elliptic","version":"6.5.4","description":"EC cryptography","main":"lib/elliptic.js","files":["lib"],"scripts":{"lint":"eslint lib test","lint:fix":"npm run lint -- --fix","unit":"istanbul test _mocha --reporter=spec test/index.js","test":"npm run lint && npm run unit","version":"grunt dist && git add dist/"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"brfs":"^2.0.2","coveralls":"^3.1.0","eslint":"^7.6.0","grunt":"^1.2.1","grunt-browserify":"^5.3.0","grunt-cli":"^1.3.2","grunt-contrib-connect":"^3.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^5.0.0","grunt-mocha-istanbul":"^5.0.2","grunt-saucelabs":"^9.0.1","istanbul":"^0.4.5","mocha":"^8.0.1"},"dependencies":{"bn.js":"^4.11.9","brorand":"^1.1.0","hash.js":"^1.0.0","hmac-drbg":"^1.0.1","inherits":"^2.0.4","minimalistic-assert":"^1.0.1","minimalistic-crypto-utils":"^1.0.1"}}')
    },
    3: function(e, t) {},
    3300: function(e, t, r) {
        "use strict";
        var n = r("f3a3")
          , i = r("80af")
          , a = r("3fb5")
          , f = r("ea53")
          , o = n.assert;
        function s(e) {
            f.call(this, "short", e),
            this.a = new i(e.a,16).toRed(this.red),
            this.b = new i(e.b,16).toRed(this.red),
            this.tinv = this.two.redInvm(),
            this.zeroA = 0 === this.a.fromRed().cmpn(0),
            this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
            this.endo = this._getEndomorphism(e),
            this._endoWnafT1 = new Array(4),
            this._endoWnafT2 = new Array(4)
        }
        function d(e, t, r, n) {
            f.BasePoint.call(this, e, "affine"),
            null === t && null === r ? (this.x = null,
            this.y = null,
            this.inf = !0) : (this.x = new i(t,16),
            this.y = new i(r,16),
            n && (this.x.forceRed(this.curve.red),
            this.y.forceRed(this.curve.red)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.inf = !1)
        }
        function c(e, t, r, n) {
            f.BasePoint.call(this, e, "jacobian"),
            null === t && null === r && null === n ? (this.x = this.curve.one,
            this.y = this.curve.one,
            this.z = new i(0)) : (this.x = new i(t,16),
            this.y = new i(r,16),
            this.z = new i(n,16)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one
        }
        a(s, f),
        e.exports = s,
        s.prototype._getEndomorphism = function(e) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var t, r, n;
                if (e.beta)
                    t = new i(e.beta,16).toRed(this.red);
                else {
                    var a = this._getEndoRoots(this.p);
                    t = a[0].cmp(a[1]) < 0 ? a[0] : a[1],
                    t = t.toRed(this.red)
                }
                if (e.lambda)
                    r = new i(e.lambda,16);
                else {
                    var f = this._getEndoRoots(this.n);
                    0 === this.g.mul(f[0]).x.cmp(this.g.x.redMul(t)) ? r = f[0] : (r = f[1],
                    o(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
                }
                return n = e.basis ? e.basis.map((function(e) {
                    return {
                        a: new i(e.a,16),
                        b: new i(e.b,16)
                    }
                }
                )) : this._getEndoBasis(r),
                {
                    beta: t,
                    lambda: r,
                    basis: n
                }
            }
        }
        ,
        s.prototype._getEndoRoots = function(e) {
            var t = e === this.p ? this.red : i.mont(e)
              , r = new i(2).toRed(t).redInvm()
              , n = r.redNeg()
              , a = new i(3).toRed(t).redNeg().redSqrt().redMul(r)
              , f = n.redAdd(a).fromRed()
              , o = n.redSub(a).fromRed();
            return [f, o]
        }
        ,
        s.prototype._getEndoBasis = function(e) {
            var t, r, n, a, f, o, s, d, c, u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = e, l = this.n.clone(), b = new i(1), p = new i(0), m = new i(0), g = new i(1), y = 0;
            while (0 !== h.cmpn(0)) {
                var v = l.div(h);
                d = l.sub(v.mul(h)),
                c = m.sub(v.mul(b));
                var w = g.sub(v.mul(p));
                if (!n && d.cmp(u) < 0)
                    t = s.neg(),
                    r = b,
                    n = d.neg(),
                    a = c;
                else if (n && 2 === ++y)
                    break;
                s = d,
                l = h,
                h = d,
                m = b,
                b = c,
                g = p,
                p = w
            }
            f = d.neg(),
            o = c;
            var _ = n.sqr().add(a.sqr())
              , M = f.sqr().add(o.sqr());
            return M.cmp(_) >= 0 && (f = t,
            o = r),
            n.negative && (n = n.neg(),
            a = a.neg()),
            f.negative && (f = f.neg(),
            o = o.neg()),
            [{
                a: n,
                b: a
            }, {
                a: f,
                b: o
            }]
        }
        ,
        s.prototype._endoSplit = function(e) {
            var t = this.endo.basis
              , r = t[0]
              , n = t[1]
              , i = n.b.mul(e).divRound(this.n)
              , a = r.b.neg().mul(e).divRound(this.n)
              , f = i.mul(r.a)
              , o = a.mul(n.a)
              , s = i.mul(r.b)
              , d = a.mul(n.b)
              , c = e.sub(f).sub(o)
              , u = s.add(d).neg();
            return {
                k1: c,
                k2: u
            }
        }
        ,
        s.prototype.pointFromX = function(e, t) {
            e = new i(e,16),
            e.red || (e = e.toRed(this.red));
            var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b)
              , n = r.redSqrt();
            if (0 !== n.redSqr().redSub(r).cmp(this.zero))
                throw new Error("invalid point");
            var a = n.fromRed().isOdd();
            return (t && !a || !t && a) && (n = n.redNeg()),
            this.point(e, n)
        }
        ,
        s.prototype.validate = function(e) {
            if (e.inf)
                return !0;
            var t = e.x
              , r = e.y
              , n = this.a.redMul(t)
              , i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
            return 0 === r.redSqr().redISub(i).cmpn(0)
        }
        ,
        s.prototype._endoWnafMulAdd = function(e, t, r) {
            for (var n = this._endoWnafT1, i = this._endoWnafT2, a = 0; a < e.length; a++) {
                var f = this._endoSplit(t[a])
                  , o = e[a]
                  , s = o._getBeta();
                f.k1.negative && (f.k1.ineg(),
                o = o.neg(!0)),
                f.k2.negative && (f.k2.ineg(),
                s = s.neg(!0)),
                n[2 * a] = o,
                n[2 * a + 1] = s,
                i[2 * a] = f.k1,
                i[2 * a + 1] = f.k2
            }
            for (var d = this._wnafMulAdd(1, n, i, 2 * a, r), c = 0; c < 2 * a; c++)
                n[c] = null,
                i[c] = null;
            return d
        }
        ,
        a(d, f.BasePoint),
        s.prototype.point = function(e, t, r) {
            return new d(this,e,t,r)
        }
        ,
        s.prototype.pointFromJSON = function(e, t) {
            return d.fromJSON(this, e, t)
        }
        ,
        d.prototype._getBeta = function() {
            if (this.curve.endo) {
                var e = this.precomputed;
                if (e && e.beta)
                    return e.beta;
                var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (e) {
                    var r = this.curve
                      , n = function(e) {
                        return r.point(e.x.redMul(r.endo.beta), e.y)
                    };
                    e.beta = t,
                    t.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(n)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(n)
                        }
                    }
                }
                return t
            }
        }
        ,
        d.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }
        ,
        d.fromJSON = function(e, t, r) {
            "string" === typeof t && (t = JSON.parse(t));
            var n = e.point(t[0], t[1], r);
            if (!t[2])
                return n;
            function i(t) {
                return e.point(t[0], t[1], r)
            }
            var a = t[2];
            return n.precomputed = {
                beta: null,
                doubles: a.doubles && {
                    step: a.doubles.step,
                    points: [n].concat(a.doubles.points.map(i))
                },
                naf: a.naf && {
                    wnd: a.naf.wnd,
                    points: [n].concat(a.naf.points.map(i))
                }
            },
            n
        }
        ,
        d.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }
        ,
        d.prototype.isInfinity = function() {
            return this.inf
        }
        ,
        d.prototype.add = function(e) {
            if (this.inf)
                return e;
            if (e.inf)
                return this;
            if (this.eq(e))
                return this.dbl();
            if (this.neg().eq(e))
                return this.curve.point(null, null);
            if (0 === this.x.cmp(e.x))
                return this.curve.point(null, null);
            var t = this.y.redSub(e.y);
            0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
            var r = t.redSqr().redISub(this.x).redISub(e.x)
              , n = t.redMul(this.x.redSub(r)).redISub(this.y);
            return this.curve.point(r, n)
        }
        ,
        d.prototype.dbl = function() {
            if (this.inf)
                return this;
            var e = this.y.redAdd(this.y);
            if (0 === e.cmpn(0))
                return this.curve.point(null, null);
            var t = this.curve.a
              , r = this.x.redSqr()
              , n = e.redInvm()
              , i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n)
              , a = i.redSqr().redISub(this.x.redAdd(this.x))
              , f = i.redMul(this.x.redSub(a)).redISub(this.y);
            return this.curve.point(a, f)
        }
        ,
        d.prototype.getX = function() {
            return this.x.fromRed()
        }
        ,
        d.prototype.getY = function() {
            return this.y.fromRed()
        }
        ,
        d.prototype.mul = function(e) {
            return e = new i(e,16),
            this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
        }
        ,
        d.prototype.mulAdd = function(e, t, r) {
            var n = [this, t]
              , i = [e, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
        }
        ,
        d.prototype.jmulAdd = function(e, t, r) {
            var n = [this, t]
              , i = [e, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
        }
        ,
        d.prototype.eq = function(e) {
            return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
        }
        ,
        d.prototype.neg = function(e) {
            if (this.inf)
                return this;
            var t = this.curve.point(this.x, this.y.redNeg());
            if (e && this.precomputed) {
                var r = this.precomputed
                  , n = function(e) {
                    return e.neg()
                };
                t.precomputed = {
                    naf: r.naf && {
                        wnd: r.naf.wnd,
                        points: r.naf.points.map(n)
                    },
                    doubles: r.doubles && {
                        step: r.doubles.step,
                        points: r.doubles.points.map(n)
                    }
                }
            }
            return t
        }
        ,
        d.prototype.toJ = function() {
            if (this.inf)
                return this.curve.jpoint(null, null, null);
            var e = this.curve.jpoint(this.x, this.y, this.curve.one);
            return e
        }
        ,
        a(c, f.BasePoint),
        s.prototype.jpoint = function(e, t, r) {
            return new c(this,e,t,r)
        }
        ,
        c.prototype.toP = function() {
            if (this.isInfinity())
                return this.curve.point(null, null);
            var e = this.z.redInvm()
              , t = e.redSqr()
              , r = this.x.redMul(t)
              , n = this.y.redMul(t).redMul(e);
            return this.curve.point(r, n)
        }
        ,
        c.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }
        ,
        c.prototype.add = function(e) {
            if (this.isInfinity())
                return e;
            if (e.isInfinity())
                return this;
            var t = e.z.redSqr()
              , r = this.z.redSqr()
              , n = this.x.redMul(t)
              , i = e.x.redMul(r)
              , a = this.y.redMul(t.redMul(e.z))
              , f = e.y.redMul(r.redMul(this.z))
              , o = n.redSub(i)
              , s = a.redSub(f);
            if (0 === o.cmpn(0))
                return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var d = o.redSqr()
              , c = d.redMul(o)
              , u = n.redMul(d)
              , h = s.redSqr().redIAdd(c).redISub(u).redISub(u)
              , l = s.redMul(u.redISub(h)).redISub(a.redMul(c))
              , b = this.z.redMul(e.z).redMul(o);
            return this.curve.jpoint(h, l, b)
        }
        ,
        c.prototype.mixedAdd = function(e) {
            if (this.isInfinity())
                return e.toJ();
            if (e.isInfinity())
                return this;
            var t = this.z.redSqr()
              , r = this.x
              , n = e.x.redMul(t)
              , i = this.y
              , a = e.y.redMul(t).redMul(this.z)
              , f = r.redSub(n)
              , o = i.redSub(a);
            if (0 === f.cmpn(0))
                return 0 !== o.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var s = f.redSqr()
              , d = s.redMul(f)
              , c = r.redMul(s)
              , u = o.redSqr().redIAdd(d).redISub(c).redISub(c)
              , h = o.redMul(c.redISub(u)).redISub(i.redMul(d))
              , l = this.z.redMul(f);
            return this.curve.jpoint(u, h, l)
        }
        ,
        c.prototype.dblp = function(e) {
            if (0 === e)
                return this;
            if (this.isInfinity())
                return this;
            if (!e)
                return this.dbl();
            var t;
            if (this.curve.zeroA || this.curve.threeA) {
                var r = this;
                for (t = 0; t < e; t++)
                    r = r.dbl();
                return r
            }
            var n = this.curve.a
              , i = this.curve.tinv
              , a = this.x
              , f = this.y
              , o = this.z
              , s = o.redSqr().redSqr()
              , d = f.redAdd(f);
            for (t = 0; t < e; t++) {
                var c = a.redSqr()
                  , u = d.redSqr()
                  , h = u.redSqr()
                  , l = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(s))
                  , b = a.redMul(u)
                  , p = l.redSqr().redISub(b.redAdd(b))
                  , m = b.redISub(p)
                  , g = l.redMul(m);
                g = g.redIAdd(g).redISub(h);
                var y = d.redMul(o);
                t + 1 < e && (s = s.redMul(h)),
                a = p,
                o = y,
                d = g
            }
            return this.curve.jpoint(a, d.redMul(i), o)
        }
        ,
        c.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }
        ,
        c.prototype._zeroDbl = function() {
            var e, t, r;
            if (this.zOne) {
                var n = this.x.redSqr()
                  , i = this.y.redSqr()
                  , a = i.redSqr()
                  , f = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
                f = f.redIAdd(f);
                var o = n.redAdd(n).redIAdd(n)
                  , s = o.redSqr().redISub(f).redISub(f)
                  , d = a.redIAdd(a);
                d = d.redIAdd(d),
                d = d.redIAdd(d),
                e = s,
                t = o.redMul(f.redISub(s)).redISub(d),
                r = this.y.redAdd(this.y)
            } else {
                var c = this.x.redSqr()
                  , u = this.y.redSqr()
                  , h = u.redSqr()
                  , l = this.x.redAdd(u).redSqr().redISub(c).redISub(h);
                l = l.redIAdd(l);
                var b = c.redAdd(c).redIAdd(c)
                  , p = b.redSqr()
                  , m = h.redIAdd(h);
                m = m.redIAdd(m),
                m = m.redIAdd(m),
                e = p.redISub(l).redISub(l),
                t = b.redMul(l.redISub(e)).redISub(m),
                r = this.y.redMul(this.z),
                r = r.redIAdd(r)
            }
            return this.curve.jpoint(e, t, r)
        }
        ,
        c.prototype._threeDbl = function() {
            var e, t, r;
            if (this.zOne) {
                var n = this.x.redSqr()
                  , i = this.y.redSqr()
                  , a = i.redSqr()
                  , f = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
                f = f.redIAdd(f);
                var o = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a)
                  , s = o.redSqr().redISub(f).redISub(f);
                e = s;
                var d = a.redIAdd(a);
                d = d.redIAdd(d),
                d = d.redIAdd(d),
                t = o.redMul(f.redISub(s)).redISub(d),
                r = this.y.redAdd(this.y)
            } else {
                var c = this.z.redSqr()
                  , u = this.y.redSqr()
                  , h = this.x.redMul(u)
                  , l = this.x.redSub(c).redMul(this.x.redAdd(c));
                l = l.redAdd(l).redIAdd(l);
                var b = h.redIAdd(h);
                b = b.redIAdd(b);
                var p = b.redAdd(b);
                e = l.redSqr().redISub(p),
                r = this.y.redAdd(this.z).redSqr().redISub(u).redISub(c);
                var m = u.redSqr();
                m = m.redIAdd(m),
                m = m.redIAdd(m),
                m = m.redIAdd(m),
                t = l.redMul(b.redISub(e)).redISub(m)
            }
            return this.curve.jpoint(e, t, r)
        }
        ,
        c.prototype._dbl = function() {
            var e = this.curve.a
              , t = this.x
              , r = this.y
              , n = this.z
              , i = n.redSqr().redSqr()
              , a = t.redSqr()
              , f = r.redSqr()
              , o = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(i))
              , s = t.redAdd(t);
            s = s.redIAdd(s);
            var d = s.redMul(f)
              , c = o.redSqr().redISub(d.redAdd(d))
              , u = d.redISub(c)
              , h = f.redSqr();
            h = h.redIAdd(h),
            h = h.redIAdd(h),
            h = h.redIAdd(h);
            var l = o.redMul(u).redISub(h)
              , b = r.redAdd(r).redMul(n);
            return this.curve.jpoint(c, l, b)
        }
        ,
        c.prototype.trpl = function() {
            if (!this.curve.zeroA)
                return this.dbl().add(this);
            var e = this.x.redSqr()
              , t = this.y.redSqr()
              , r = this.z.redSqr()
              , n = t.redSqr()
              , i = e.redAdd(e).redIAdd(e)
              , a = i.redSqr()
              , f = this.x.redAdd(t).redSqr().redISub(e).redISub(n);
            f = f.redIAdd(f),
            f = f.redAdd(f).redIAdd(f),
            f = f.redISub(a);
            var o = f.redSqr()
              , s = n.redIAdd(n);
            s = s.redIAdd(s),
            s = s.redIAdd(s),
            s = s.redIAdd(s);
            var d = i.redIAdd(f).redSqr().redISub(a).redISub(o).redISub(s)
              , c = t.redMul(d);
            c = c.redIAdd(c),
            c = c.redIAdd(c);
            var u = this.x.redMul(o).redISub(c);
            u = u.redIAdd(u),
            u = u.redIAdd(u);
            var h = this.y.redMul(d.redMul(s.redISub(d)).redISub(f.redMul(o)));
            h = h.redIAdd(h),
            h = h.redIAdd(h),
            h = h.redIAdd(h);
            var l = this.z.redAdd(f).redSqr().redISub(r).redISub(o);
            return this.curve.jpoint(u, h, l)
        }
        ,
        c.prototype.mul = function(e, t) {
            return e = new i(e,t),
            this.curve._wnafMul(this, e)
        }
        ,
        c.prototype.eq = function(e) {
            if ("affine" === e.type)
                return this.eq(e.toJ());
            if (this === e)
                return !0;
            var t = this.z.redSqr()
              , r = e.z.redSqr();
            if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))
                return !1;
            var n = t.redMul(this.z)
              , i = r.redMul(e.z);
            return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
        }
        ,
        c.prototype.eqXToP = function(e) {
            var t = this.z.redSqr()
              , r = e.toRed(this.curve.red).redMul(t);
            if (0 === this.x.cmp(r))
                return !0;
            for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
                if (n.iadd(this.curve.n),
                n.cmp(this.curve.p) >= 0)
                    return !1;
                if (r.redIAdd(i),
                0 === this.x.cmp(r))
                    return !0
            }
        }
        ,
        c.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }
        ,
        c.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
    },
    3337: function(e, t, r) {
        "use strict";
        var n = t;
        n.version = r("2801").version,
        n.utils = r("f3a3"),
        n.rand = r("fdac"),
        n.curve = r("4136"),
        n.curves = r("0cbb"),
        n.ec = r("b9a8"),
        n.eddsa = r("945d")
    },
    "380f": function(e, t, r) {
        "use strict";
        var n = r("f3a3")
          , i = n.assert
          , a = n.parseBytes
          , f = n.cachedProperty;
        function o(e, t) {
            this.eddsa = e,
            this._secret = a(t.secret),
            e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = a(t.pub)
        }
        o.fromPublic = function(e, t) {
            return t instanceof o ? t : new o(e,{
                pub: t
            })
        }
        ,
        o.fromSecret = function(e, t) {
            return t instanceof o ? t : new o(e,{
                secret: t
            })
        }
        ,
        o.prototype.secret = function() {
            return this._secret
        }
        ,
        f(o, "pubBytes", (function() {
            return this.eddsa.encodePoint(this.pub())
        }
        )),
        f(o, "pub", (function() {
            return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
        }
        )),
        f(o, "privBytes", (function() {
            var e = this.eddsa
              , t = this.hash()
              , r = e.encodingLength - 1
              , n = t.slice(0, e.encodingLength);
            return n[0] &= 248,
            n[r] &= 127,
            n[r] |= 64,
            n
        }
        )),
        f(o, "priv", (function() {
            return this.eddsa.decodeInt(this.privBytes())
        }
        )),
        f(o, "hash", (function() {
            return this.eddsa.hash().update(this.secret()).digest()
        }
        )),
        f(o, "messagePrefix", (function() {
            return this.hash().slice(this.eddsa.encodingLength)
        }
        )),
        o.prototype.sign = function(e) {
            return i(this._secret, "KeyPair can only verify"),
            this.eddsa.sign(e, this)
        }
        ,
        o.prototype.verify = function(e, t) {
            return this.eddsa.verify(e, t, this)
        }
        ,
        o.prototype.getSecret = function(e) {
            return i(this._secret, "KeyPair is public only"),
            n.encode(this.secret(), e)
        }
        ,
        o.prototype.getPublic = function(e) {
            return n.encode(this.pubBytes(), e)
        }
        ,
        e.exports = o
    },
    "3a89": function(e, t) {
        const r = {
            IMPOSSIBLE_CASE: "Impossible case. Please create issue.",
            TWEAK_ADD: "The tweak was out of range or the resulted private key is invalid",
            TWEAK_MUL: "The tweak was out of range or equal to zero",
            CONTEXT_RANDOMIZE_UNKNOW: "Unknow error on context randomization",
            SECKEY_INVALID: "Private Key is invalid",
            PUBKEY_PARSE: "Public Key could not be parsed",
            PUBKEY_SERIALIZE: "Public Key serialization error",
            PUBKEY_COMBINE: "The sum of the public keys is not valid",
            SIG_PARSE: "Signature could not be parsed",
            SIGN: "The nonce generation function failed, or the private key was invalid",
            RECOVER: "Public key could not be recover",
            ECDH: "Scalar was invalid (zero or overflow)"
        };
        function n(e, t) {
            if (!e)
                throw new Error(t)
        }
        function i(e, t, r) {
            if (n(t instanceof Uint8Array, "Expected "+e+" to be an Uint8Array"),
            void 0 !== r)
                if (Array.isArray(r)) {
                    const i = r.join(", ")
                      , a = "Expected "+e+" to be an Uint8Array with length ["+i+"]";
                    n(r.includes(t.length), a)
                } else {
                    const i = "Expected "+e+" to be an Uint8Array with length "+r+"";
                    n(t.length === r, i)
                }
        }
        function a(e) {
            n("Boolean" === o(e), "Expected compressed to be a Boolean")
        }
        function f(e=(e=>new Uint8Array(e)), t) {
            return "function" === typeof e && (e = e(t)),
            i("output", e, t),
            e
        }
        function o(e) {
            return Object.prototype.toString.call(e).slice(8, -1)
        }
        e.exports = e=>({
            contextRandomize(t) {
                switch (n(null === t || t instanceof Uint8Array, "Expected seed to be an Uint8Array or null"),
                null !== t && i("seed", t, 32),
                e.contextRandomize(t)) {
                case 1:
                    throw new Error(r.CONTEXT_RANDOMIZE_UNKNOW)
                }
            },
            privateKeyVerify(t) {
                return i("private key", t, 32),
                0 === e.privateKeyVerify(t)
            },
            privateKeyNegate(t) {
                switch (i("private key", t, 32),
                e.privateKeyNegate(t)) {
                case 0:
                    return t;
                case 1:
                    throw new Error(r.IMPOSSIBLE_CASE)
                }
            },
            privateKeyTweakAdd(t, n) {
                switch (i("private key", t, 32),
                i("tweak", n, 32),
                e.privateKeyTweakAdd(t, n)) {
                case 0:
                    return t;
                case 1:
                    throw new Error(r.TWEAK_ADD)
                }
            },
            privateKeyTweakMul(t, n) {
                switch (i("private key", t, 32),
                i("tweak", n, 32),
                e.privateKeyTweakMul(t, n)) {
                case 0:
                    return t;
                case 1:
                    throw new Error(r.TWEAK_MUL)
                }
            },
            publicKeyVerify(t) {
                return i("public key", t, [33, 65]),
                0 === e.publicKeyVerify(t)
            },
            publicKeyCreate(t, n=!0, o) {
                switch (i("private key", t, 32),
                a(n),
                o = f(o, n ? 33 : 65),
                e.publicKeyCreate(o, t)) {
                case 0:
                    return o;
                case 1:
                    throw new Error(r.SECKEY_INVALID);
                case 2:
                    throw new Error(r.PUBKEY_SERIALIZE)
                }
            },
            publicKeyConvert(t, n=!0, o) {
                switch (i("public key", t, [33, 65]),
                a(n),
                o = f(o, n ? 33 : 65),
                e.publicKeyConvert(o, t)) {
                case 0:
                    return o;
                case 1:
                    throw new Error(r.PUBKEY_PARSE);
                case 2:
                    throw new Error(r.PUBKEY_SERIALIZE)
                }
            },
            publicKeyNegate(t, n=!0, o) {
                switch (i("public key", t, [33, 65]),
                a(n),
                o = f(o, n ? 33 : 65),
                e.publicKeyNegate(o, t)) {
                case 0:
                    return o;
                case 1:
                    throw new Error(r.PUBKEY_PARSE);
                case 2:
                    throw new Error(r.IMPOSSIBLE_CASE);
                case 3:
                    throw new Error(r.PUBKEY_SERIALIZE)
                }
            },
            publicKeyCombine(t, o=!0, s) {
                n(Array.isArray(t), "Expected public keys to be an Array"),
                n(t.length > 0, "Expected public keys array will have more than zero items");
                for (const e of t)
                    i("public key", e, [33, 65]);
                switch (a(o),
                s = f(s, o ? 33 : 65),
                e.publicKeyCombine(s, t)) {
                case 0:
                    return s;
                case 1:
                    throw new Error(r.PUBKEY_PARSE);
                case 2:
                    throw new Error(r.PUBKEY_COMBINE);
                case 3:
                    throw new Error(r.PUBKEY_SERIALIZE)
                }
            },
            publicKeyTweakAdd(t, n, o=!0, s) {
                switch (i("public key", t, [33, 65]),
                i("tweak", n, 32),
                a(o),
                s = f(s, o ? 33 : 65),
                e.publicKeyTweakAdd(s, t, n)) {
                case 0:
                    return s;
                case 1:
                    throw new Error(r.PUBKEY_PARSE);
                case 2:
                    throw new Error(r.TWEAK_ADD)
                }
            },
            publicKeyTweakMul(t, n, o=!0, s) {
                switch (i("public key", t, [33, 65]),
                i("tweak", n, 32),
                a(o),
                s = f(s, o ? 33 : 65),
                e.publicKeyTweakMul(s, t, n)) {
                case 0:
                    return s;
                case 1:
                    throw new Error(r.PUBKEY_PARSE);
                case 2:
                    throw new Error(r.TWEAK_MUL)
                }
            },
            signatureNormalize(t) {
                switch (i("signature", t, 64),
                e.signatureNormalize(t)) {
                case 0:
                    return t;
                case 1:
                    throw new Error(r.SIG_PARSE)
                }
            },
            signatureExport(t, n) {
                i("signature", t, 64),
                n = f(n, 72);
                const a = {
                    output: n,
                    outputlen: 72
                };
                switch (e.signatureExport(a, t)) {
                case 0:
                    return n.slice(0, a.outputlen);
                case 1:
                    throw new Error(r.SIG_PARSE);
                case 2:
                    throw new Error(r.IMPOSSIBLE_CASE)
                }
            },
            signatureImport(t, n) {
                switch (i("signature", t),
                n = f(n, 64),
                e.signatureImport(n, t)) {
                case 0:
                    return n;
                case 1:
                    throw new Error(r.SIG_PARSE);
                case 2:
                    throw new Error(r.IMPOSSIBLE_CASE)
                }
            },
            ecdsaSign(t, a, s={}, d) {
                i("message", t, 32),
                i("private key", a, 32),
                n("Object" === o(s), "Expected options to be an Object"),
                void 0 !== s.data && i("options.data", s.data),
                void 0 !== s.noncefn && n("Function" === o(s.noncefn), "Expected options.noncefn to be a Function"),
                d = f(d, 64);
                const c = {
                    signature: d,
                    recid: null
                };
                switch (e.ecdsaSign(c, t, a, s.data, s.noncefn)) {
                case 0:
                    return c;
                case 1:
                    throw new Error(r.SIGN);
                case 2:
                    throw new Error(r.IMPOSSIBLE_CASE)
                }
            },
            ecdsaVerify(t, n, a) {
                switch (i("signature", t, 64),
                i("message", n, 32),
                i("public key", a, [33, 65]),
                e.ecdsaVerify(t, n, a)) {
                case 0:
                    return !0;
                case 3:
                    return !1;
                case 1:
                    throw new Error(r.SIG_PARSE);
                case 2:
                    throw new Error(r.PUBKEY_PARSE)
                }
            },
            ecdsaRecover(t, s, d, c=!0, u) {
                switch (i("signature", t, 64),
                n("Number" === o(s) && s >= 0 && s <= 3, "Expected recovery id to be a Number within interval [0, 3]"),
                i("message", d, 32),
                a(c),
                u = f(u, c ? 33 : 65),
                e.ecdsaRecover(u, t, s, d)) {
                case 0:
                    return u;
                case 1:
                    throw new Error(r.SIG_PARSE);
                case 2:
                    throw new Error(r.RECOVER);
                case 3:
                    throw new Error(r.IMPOSSIBLE_CASE)
                }
            },
            ecdh(t, a, s={}, d) {
                switch (i("public key", t, [33, 65]),
                i("private key", a, 32),
                n("Object" === o(s), "Expected options to be an Object"),
                void 0 !== s.data && i("options.data", s.data),
                void 0 !== s.hashfn ? (n("Function" === o(s.hashfn), "Expected options.hashfn to be a Function"),
                void 0 !== s.xbuf && i("options.xbuf", s.xbuf, 32),
                void 0 !== s.ybuf && i("options.ybuf", s.ybuf, 32),
                i("output", d)) : d = f(d, 32),
                e.ecdh(d, t, a, s.data, s.hashfn, s.xbuf, s.ybuf)) {
                case 0:
                    return d;
                case 1:
                    throw new Error(r.PUBKEY_PARSE);
                case 2:
                    throw new Error(r.ECDH)
                }
            }
        })
    },
    "3daf": function(e, t, r) {
        "use strict";
        var n = r("f3a3")
          , i = r("80af")
          , a = r("3fb5")
          , f = r("ea53")
          , o = n.assert;
        function s(e) {
            this.twisted = 1 !== (0 | e.a),
            this.mOneA = this.twisted && -1 === (0 | e.a),
            this.extended = this.mOneA,
            f.call(this, "edwards", e),
            this.a = new i(e.a,16).umod(this.red.m),
            this.a = this.a.toRed(this.red),
            this.c = new i(e.c,16).toRed(this.red),
            this.c2 = this.c.redSqr(),
            this.d = new i(e.d,16).toRed(this.red),
            this.dd = this.d.redAdd(this.d),
            o(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
            this.oneC = 1 === (0 | e.c)
        }
        function d(e, t, r, n, a) {
            f.BasePoint.call(this, e, "projective"),
            null === t && null === r && null === n ? (this.x = this.curve.zero,
            this.y = this.curve.one,
            this.z = this.curve.one,
            this.t = this.curve.zero,
            this.zOne = !0) : (this.x = new i(t,16),
            this.y = new i(r,16),
            this.z = n ? new i(n,16) : this.curve.one,
            this.t = a && new i(a,16),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one,
            this.curve.extended && !this.t && (this.t = this.x.redMul(this.y),
            this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
        }
        a(s, f),
        e.exports = s,
        s.prototype._mulA = function(e) {
            return this.mOneA ? e.redNeg() : this.a.redMul(e)
        }
        ,
        s.prototype._mulC = function(e) {
            return this.oneC ? e : this.c.redMul(e)
        }
        ,
        s.prototype.jpoint = function(e, t, r, n) {
            return this.point(e, t, r, n)
        }
        ,
        s.prototype.pointFromX = function(e, t) {
            e = new i(e,16),
            e.red || (e = e.toRed(this.red));
            var r = e.redSqr()
              , n = this.c2.redSub(this.a.redMul(r))
              , a = this.one.redSub(this.c2.redMul(this.d).redMul(r))
              , f = n.redMul(a.redInvm())
              , o = f.redSqrt();
            if (0 !== o.redSqr().redSub(f).cmp(this.zero))
                throw new Error("invalid point");
            var s = o.fromRed().isOdd();
            return (t && !s || !t && s) && (o = o.redNeg()),
            this.point(e, o)
        }
        ,
        s.prototype.pointFromY = function(e, t) {
            e = new i(e,16),
            e.red || (e = e.toRed(this.red));
            var r = e.redSqr()
              , n = r.redSub(this.c2)
              , a = r.redMul(this.d).redMul(this.c2).redSub(this.a)
              , f = n.redMul(a.redInvm());
            if (0 === f.cmp(this.zero)) {
                if (t)
                    throw new Error("invalid point");
                return this.point(this.zero, e)
            }
            var o = f.redSqrt();
            if (0 !== o.redSqr().redSub(f).cmp(this.zero))
                throw new Error("invalid point");
            return o.fromRed().isOdd() !== t && (o = o.redNeg()),
            this.point(o, e)
        }
        ,
        s.prototype.validate = function(e) {
            if (e.isInfinity())
                return !0;
            e.normalize();
            var t = e.x.redSqr()
              , r = e.y.redSqr()
              , n = t.redMul(this.a).redAdd(r)
              , i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
            return 0 === n.cmp(i)
        }
        ,
        a(d, f.BasePoint),
        s.prototype.pointFromJSON = function(e) {
            return d.fromJSON(this, e)
        }
        ,
        s.prototype.point = function(e, t, r, n) {
            return new d(this,e,t,r,n)
        }
        ,
        d.fromJSON = function(e, t) {
            return new d(e,t[0],t[1],t[2])
        }
        ,
        d.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }
        ,
        d.prototype.isInfinity = function() {
            return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
        }
        ,
        d.prototype._extDbl = function() {
            var e = this.x.redSqr()
              , t = this.y.redSqr()
              , r = this.z.redSqr();
            r = r.redIAdd(r);
            var n = this.curve._mulA(e)
              , i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t)
              , a = n.redAdd(t)
              , f = a.redSub(r)
              , o = n.redSub(t)
              , s = i.redMul(f)
              , d = a.redMul(o)
              , c = i.redMul(o)
              , u = f.redMul(a);
            return this.curve.point(s, d, u, c)
        }
        ,
        d.prototype._projDbl = function() {
            var e, t, r, n, i, a, f = this.x.redAdd(this.y).redSqr(), o = this.x.redSqr(), s = this.y.redSqr();
            if (this.curve.twisted) {
                n = this.curve._mulA(o);
                var d = n.redAdd(s);
                this.zOne ? (e = f.redSub(o).redSub(s).redMul(d.redSub(this.curve.two)),
                t = d.redMul(n.redSub(s)),
                r = d.redSqr().redSub(d).redSub(d)) : (i = this.z.redSqr(),
                a = d.redSub(i).redISub(i),
                e = f.redSub(o).redISub(s).redMul(a),
                t = d.redMul(n.redSub(s)),
                r = d.redMul(a))
            } else
                n = o.redAdd(s),
                i = this.curve._mulC(this.z).redSqr(),
                a = n.redSub(i).redSub(i),
                e = this.curve._mulC(f.redISub(n)).redMul(a),
                t = this.curve._mulC(n).redMul(o.redISub(s)),
                r = n.redMul(a);
            return this.curve.point(e, t, r)
        }
        ,
        d.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
        }
        ,
        d.prototype._extAdd = function(e) {
            var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x))
              , r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x))
              , n = this.t.redMul(this.curve.dd).redMul(e.t)
              , i = this.z.redMul(e.z.redAdd(e.z))
              , a = r.redSub(t)
              , f = i.redSub(n)
              , o = i.redAdd(n)
              , s = r.redAdd(t)
              , d = a.redMul(f)
              , c = o.redMul(s)
              , u = a.redMul(s)
              , h = f.redMul(o);
            return this.curve.point(d, c, h, u)
        }
        ,
        d.prototype._projAdd = function(e) {
            var t, r, n = this.z.redMul(e.z), i = n.redSqr(), a = this.x.redMul(e.x), f = this.y.redMul(e.y), o = this.curve.d.redMul(a).redMul(f), s = i.redSub(o), d = i.redAdd(o), c = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(f), u = n.redMul(s).redMul(c);
            return this.curve.twisted ? (t = n.redMul(d).redMul(f.redSub(this.curve._mulA(a))),
            r = s.redMul(d)) : (t = n.redMul(d).redMul(f.redSub(a)),
            r = this.curve._mulC(s).redMul(d)),
            this.curve.point(u, t, r)
        }
        ,
        d.prototype.add = function(e) {
            return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
        }
        ,
        d.prototype.mul = function(e) {
            return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
        }
        ,
        d.prototype.mulAdd = function(e, t, r) {
            return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
        }
        ,
        d.prototype.jmulAdd = function(e, t, r) {
            return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
        }
        ,
        d.prototype.normalize = function() {
            if (this.zOne)
                return this;
            var e = this.z.redInvm();
            return this.x = this.x.redMul(e),
            this.y = this.y.redMul(e),
            this.t && (this.t = this.t.redMul(e)),
            this.z = this.curve.one,
            this.zOne = !0,
            this
        }
        ,
        d.prototype.neg = function() {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
        }
        ,
        d.prototype.getX = function() {
            return this.normalize(),
            this.x.fromRed()
        }
        ,
        d.prototype.getY = function() {
            return this.normalize(),
            this.y.fromRed()
        }
        ,
        d.prototype.eq = function(e) {
            return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
        }
        ,
        d.prototype.eqXToP = function(e) {
            var t = e.toRed(this.curve.red).redMul(this.z);
            if (0 === this.x.cmp(t))
                return !0;
            for (var r = e.clone(), n = this.curve.redN.redMul(this.z); ; ) {
                if (r.iadd(this.curve.n),
                r.cmp(this.curve.p) >= 0)
                    return !1;
                if (t.redIAdd(n),
                0 === this.x.cmp(t))
                    return !0
            }
        }
        ,
        d.prototype.toP = d.prototype.normalize,
        d.prototype.mixedAdd = d.prototype.add
    },
    "3fb5": function(e, t) {
        "function" === typeof Object.create ? e.exports = function(e, t) {
            t && (e.super_ = t,
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : e.exports = function(e, t) {
            if (t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype,
                e.prototype = new r,
                e.prototype.constructor = e
            }
        }
    },
    "409b": function(e, t) {
        e.exports = {
            doubles: {
                step: 4,
                points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
            },
            naf: {
                wnd: 7,
                points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
            }
        }
    },
    4136: function(e, t, r) {
        "use strict";
        var n = t;
        n.base = r("ea53"),
        n.short = r("3300"),
        n.mont = r("676f"),
        n.edwards = r("3daf")
    },
    4362: function(e, t, r) {
        t.nextTick = function(e) {
            var t = Array.prototype.slice.call(arguments);
            t.shift(),
            setTimeout((function() {
                e.apply(null, t)
            }
            ), 0)
        }
        ,
        t.platform = t.arch = t.execPath = t.title = "browser",
        t.pid = 1,
        t.browser = !0,
        t.env = {},
        t.argv = [],
        t.binding = function(e) {
            throw new Error("No such module. (Possibly not yet loaded)")
        }
        ,
        function() {
            var e, n = "/";
            t.cwd = function() {
                return n
            }
            ,
            t.chdir = function(t) {
                e || (e = r("df7c")),
                n = e.resolve(t, n)
            }
        }(),
        t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}
        ,
        t.features = {}
    },
    "44a3": function(e, t, r) {
        "use strict";
        var n = r("80af")
          , i = r("f3a3")
          , a = i.assert
          , f = i.cachedProperty
          , o = i.parseBytes;
        function s(e, t) {
            this.eddsa = e,
            "object" !== typeof t && (t = o(t)),
            Array.isArray(t) && (t = {
                R: t.slice(0, e.encodingLength),
                S: t.slice(e.encodingLength)
            }),
            a(t.R && t.S, "Signature without R or S"),
            e.isPoint(t.R) && (this._R = t.R),
            t.S instanceof n && (this._S = t.S),
            this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded,
            this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
        }
        f(s, "S", (function() {
            return this.eddsa.decodeInt(this.Sencoded())
        }
        )),
        f(s, "R", (function() {
            return this.eddsa.decodePoint(this.Rencoded())
        }
        )),
        f(s, "Rencoded", (function() {
            return this.eddsa.encodePoint(this.R())
        }
        )),
        f(s, "Sencoded", (function() {
            return this.eddsa.encodeInt(this.S())
        }
        )),
        s.prototype.toBytes = function() {
            return this.Rencoded().concat(this.Sencoded())
        }
        ,
        s.prototype.toHex = function() {
            return i.encode(this.toBytes(), "hex").toUpperCase()
        }
        ,
        e.exports = s
    },
    4673: function(e, t, r) {
        const n = r("3337").ec
          , i = new n("secp256k1")
          , a = i.curve
          , f = a.n.constructor;
        function o(e, t) {
            let r = new f(t);
            if (r.cmp(a.p) >= 0)
                return null;
            r = r.toRed(a.red);
            let n = r.redSqr().redIMul(r).redIAdd(a.b).redSqrt();
            return 3 === e !== n.isOdd() && (n = n.redNeg()),
            i.keyPair({
                pub: {
                    x: r,
                    y: n
                }
            })
        }
        function s(e, t, r) {
            let n = new f(t)
              , o = new f(r);
            if (n.cmp(a.p) >= 0 || o.cmp(a.p) >= 0)
                return null;
            if (n = n.toRed(a.red),
            o = o.toRed(a.red),
            (6 === e || 7 === e) && o.isOdd() !== (7 === e))
                return null;
            const s = n.redSqr().redIMul(n);
            return o.redSqr().redISub(s.redIAdd(a.b)).isZero() ? i.keyPair({
                pub: {
                    x: n,
                    y: o
                }
            }) : null
        }
        function d(e) {
            const t = e[0];
            switch (t) {
            case 2:
            case 3:
                return 33 !== e.length ? null : o(t, e.subarray(1, 33));
            case 4:
            case 6:
            case 7:
                return 65 !== e.length ? null : s(t, e.subarray(1, 33), e.subarray(33, 65));
            default:
                return null
            }
        }
        function c(e, t) {
            const r = t.encode(null, 33 === e.length);
            for (let n = 0; n < e.length; ++n)
                e[n] = r[n]
        }
        e.exports = {
            contextRandomize() {
                return 0
            },
            privateKeyVerify(e) {
                const t = new f(e);
                return t.cmp(a.n) < 0 && !t.isZero() ? 0 : 1
            },
            privateKeyNegate(e) {
                const t = new f(e)
                  , r = a.n.sub(t).umod(a.n).toArrayLike(Uint8Array, "be", 32);
                return e.set(r),
                0
            },
            privateKeyTweakAdd(e, t) {
                const r = new f(t);
                if (r.cmp(a.n) >= 0)
                    return 1;
                if (r.iadd(new f(e)),
                r.cmp(a.n) >= 0 && r.isub(a.n),
                r.isZero())
                    return 1;
                const n = r.toArrayLike(Uint8Array, "be", 32);
                return e.set(n),
                0
            },
            privateKeyTweakMul(e, t) {
                let r = new f(t);
                if (r.cmp(a.n) >= 0 || r.isZero())
                    return 1;
                r.imul(new f(e)),
                r.cmp(a.n) >= 0 && (r = r.umod(a.n));
                const n = r.toArrayLike(Uint8Array, "be", 32);
                return e.set(n),
                0
            },
            publicKeyVerify(e) {
                const t = d(e);
                return null === t ? 1 : 0
            },
            publicKeyCreate(e, t) {
                const r = new f(t);
                if (r.cmp(a.n) >= 0 || r.isZero())
                    return 1;
                const n = i.keyFromPrivate(t).getPublic();
                return c(e, n),
                0
            },
            publicKeyConvert(e, t) {
                const r = d(t);
                if (null === r)
                    return 1;
                const n = r.getPublic();
                return c(e, n),
                0
            },
            publicKeyNegate(e, t) {
                const r = d(t);
                if (null === r)
                    return 1;
                const n = r.getPublic();
                return n.y = n.y.redNeg(),
                c(e, n),
                0
            },
            publicKeyCombine(e, t) {
                const r = new Array(t.length);
                for (let i = 0; i < t.length; ++i)
                    if (r[i] = d(t[i]),
                    null === r[i])
                        return 1;
                let n = r[0].getPublic();
                for (let i = 1; i < r.length; ++i)
                    n = n.add(r[i].pub);
                return n.isInfinity() ? 2 : (c(e, n),
                0)
            },
            publicKeyTweakAdd(e, t, r) {
                const n = d(t);
                if (null === n)
                    return 1;
                if (r = new f(r),
                r.cmp(a.n) >= 0)
                    return 2;
                const i = n.getPublic().add(a.g.mul(r));
                return i.isInfinity() ? 2 : (c(e, i),
                0)
            },
            publicKeyTweakMul(e, t, r) {
                const n = d(t);
                if (null === n)
                    return 1;
                if (r = new f(r),
                r.cmp(a.n) >= 0 || r.isZero())
                    return 2;
                const i = n.getPublic().mul(r);
                return c(e, i),
                0
            },
            signatureNormalize(e) {
                const t = new f(e.subarray(0, 32))
                  , r = new f(e.subarray(32, 64));
                return t.cmp(a.n) >= 0 || r.cmp(a.n) >= 0 ? 1 : (1 === r.cmp(i.nh) && e.set(a.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32),
                0)
            },
            signatureExport(e, t) {
                const r = t.subarray(0, 32)
                  , n = t.subarray(32, 64);
                if (new f(r).cmp(a.n) >= 0)
                    return 1;
                if (new f(n).cmp(a.n) >= 0)
                    return 1;
                const {output: i} = e;
                let o = i.subarray(4, 37);
                o[0] = 0,
                o.set(r, 1);
                let s = 33
                  , d = 0;
                for (; s > 1 && 0 === o[d] && !(128 & o[d + 1]); --s,
                ++d)
                    ;
                if (o = o.subarray(d),
                128 & o[0])
                    return 1;
                if (s > 1 && 0 === o[0] && !(128 & o[1]))
                    return 1;
                let c = i.subarray(39, 72);
                c[0] = 0,
                c.set(n, 1);
                let u = 33
                  , h = 0;
                for (; u > 1 && 0 === c[h] && !(128 & c[h + 1]); --u,
                ++h)
                    ;
                return c = c.subarray(h),
                128 & c[0] || u > 1 && 0 === c[0] && !(128 & c[1]) ? 1 : (e.outputlen = 6 + s + u,
                i[0] = 48,
                i[1] = e.outputlen - 2,
                i[2] = 2,
                i[3] = o.length,
                i.set(o, 4),
                i[4 + s] = 2,
                i[5 + s] = c.length,
                i.set(c, 6 + s),
                0)
            },
            signatureImport(e, t) {
                if (t.length < 8)
                    return 1;
                if (t.length > 72)
                    return 1;
                if (48 !== t[0])
                    return 1;
                if (t[1] !== t.length - 2)
                    return 1;
                if (2 !== t[2])
                    return 1;
                const r = t[3];
                if (0 === r)
                    return 1;
                if (5 + r >= t.length)
                    return 1;
                if (2 !== t[4 + r])
                    return 1;
                const n = t[5 + r];
                if (0 === n)
                    return 1;
                if (6 + r + n !== t.length)
                    return 1;
                if (128 & t[4])
                    return 1;
                if (r > 1 && 0 === t[4] && !(128 & t[5]))
                    return 1;
                if (128 & t[r + 6])
                    return 1;
                if (n > 1 && 0 === t[r + 6] && !(128 & t[r + 7]))
                    return 1;
                let i = t.subarray(4, 4 + r);
                if (33 === i.length && 0 === i[0] && (i = i.subarray(1)),
                i.length > 32)
                    return 1;
                let o = t.subarray(6 + r);
                if (33 === o.length && 0 === o[0] && (o = o.slice(1)),
                o.length > 32)
                    throw new Error("S length is too long");
                let s = new f(i);
                s.cmp(a.n) >= 0 && (s = new f(0));
                let d = new f(t.subarray(6 + r));
                return d.cmp(a.n) >= 0 && (d = new f(0)),
                e.set(s.toArrayLike(Uint8Array, "be", 32), 0),
                e.set(d.toArrayLike(Uint8Array, "be", 32), 32),
                0
            },
            ecdsaSign(e, t, r, n, o) {
                if (o) {
                    const e = o;
                    o = i=>{
                        const a = e(t, r, null, n, i)
                          , o = a instanceof Uint8Array && 32 === a.length;
                        if (!o)
                            throw new Error("This is the way");
                        return new f(a)
                    }
                }
                const s = new f(r);
                if (s.cmp(a.n) >= 0 || s.isZero())
                    return 1;
                let d;
                try {
                    d = i.sign(t, r, {
                        canonical: !0,
                        k: o,
                        pers: n
                    })
                } catch (c) {
                    return 1
                }
                return e.signature.set(d.r.toArrayLike(Uint8Array, "be", 32), 0),
                e.signature.set(d.s.toArrayLike(Uint8Array, "be", 32), 32),
                e.recid = d.recoveryParam,
                0
            },
            ecdsaVerify(e, t, r) {
                const n = {
                    r: e.subarray(0, 32),
                    s: e.subarray(32, 64)
                }
                  , o = new f(n.r)
                  , s = new f(n.s);
                if (o.cmp(a.n) >= 0 || s.cmp(a.n) >= 0)
                    return 1;
                if (1 === s.cmp(i.nh) || o.isZero() || s.isZero())
                    return 3;
                const c = d(r);
                if (null === c)
                    return 2;
                const u = c.getPublic()
                  , h = i.verify(t, n, u);
                return h ? 0 : 3
            },
            ecdsaRecover(e, t, r, n) {
                const o = {
                    r: t.slice(0, 32),
                    s: t.slice(32, 64)
                }
                  , s = new f(o.r)
                  , d = new f(o.s);
                if (s.cmp(a.n) >= 0 || d.cmp(a.n) >= 0)
                    return 1;
                if (s.isZero() || d.isZero())
                    return 2;
                let u;
                try {
                    u = i.recoverPubKey(n, o, r)
                } catch (h) {
                    return 2
                }
                return c(e, u),
                0
            },
            ecdh(e, t, r, n, o, s, c) {
                const u = d(t);
                if (null === u)
                    return 1;
                const h = new f(r);
                if (h.cmp(a.n) >= 0 || h.isZero())
                    return 2;
                const l = u.getPublic().mul(h);
                if (void 0 === o) {
                    const t = l.encode(null, !0)
                      , r = i.hash().update(t).digest();
                    for (let n = 0; n < 32; ++n)
                        e[n] = r[n]
                } else {
                    s || (s = new Uint8Array(32));
                    const t = l.getX().toArray("be", 32);
                    for (let e = 0; e < 32; ++e)
                        s[e] = t[e];
                    c || (c = new Uint8Array(32));
                    const r = l.getY().toArray("be", 32);
                    for (let e = 0; e < 32; ++e)
                        c[e] = r[e];
                    const i = o(s, c, n)
                      , a = i instanceof Uint8Array && i.length === e.length;
                    if (!a)
                        return 2;
                    e.set(i)
                }
                return 0
            }
        }
    },
    "4d28": function(e, t, r) {
        "use strict";
        var n = r("9054").codes.ERR_INVALID_OPT_VALUE;
        function i(e, t, r) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
        }
        function a(e, t, r, a) {
            var f = i(t, a, r);
            if (null != f) {
                if (!isFinite(f) || Math.floor(f) !== f || f < 0) {
                    var o = a ? r : "highWaterMark";
                    throw new n(o,f)
                }
                return Math.floor(f)
            }
            return e.objectMode ? 16 : 16384
        }
        e.exports = {
            getHighWaterMark: a
        }
    },
    "53e2": function(e, t, r) {
        "use strict";
        e.exports = c;
        var n = r("9054").codes
          , i = n.ERR_METHOD_NOT_IMPLEMENTED
          , a = n.ERR_MULTIPLE_CALLBACK
          , f = n.ERR_TRANSFORM_ALREADY_TRANSFORMING
          , o = n.ERR_TRANSFORM_WITH_LENGTH_0
          , s = r("88a2");
        function d(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (null === n)
                return this.emit("error", new a);
            r.writechunk = null,
            r.writecb = null,
            null != t && this.push(t),
            n(e);
            var i = this._readableState;
            i.reading = !1,
            (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
        function c(e) {
            if (!(this instanceof c))
                return new c(e);
            s.call(this, e),
            this._transformState = {
                afterTransform: d.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            },
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            e && ("function" === typeof e.transform && (this._transform = e.transform),
            "function" === typeof e.flush && (this._flush = e.flush)),
            this.on("prefinish", u)
        }
        function u() {
            var e = this;
            "function" !== typeof this._flush || this._readableState.destroyed ? h(this, null, null) : this._flush((function(t, r) {
                h(e, t, r)
            }
            ))
        }
        function h(e, t, r) {
            if (t)
                return e.emit("error", t);
            if (null != r && e.push(r),
            e._writableState.length)
                throw new o;
            if (e._transformState.transforming)
                throw new f;
            return e.push(null)
        }
        r("3fb5")(c, s),
        c.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1,
            s.prototype.push.call(this, e, t)
        }
        ,
        c.prototype._transform = function(e, t, r) {
            r(new i("_transform()"))
        }
        ,
        c.prototype._write = function(e, t, r) {
            var n = this._transformState;
            if (n.writecb = r,
            n.writechunk = e,
            n.writeencoding = t,
            !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }
        ,
        c.prototype._read = function(e) {
            var t = this._transformState;
            null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0,
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        }
        ,
        c.prototype._destroy = function(e, t) {
            s.prototype._destroy.call(this, e, (function(e) {
                t(e)
            }
            ))
        }
    },
    5919: function(e, t, r) {
        "use strict";
        t.sha1 = r("13e2"),
        t.sha224 = r("07f2"),
        t.sha256 = r("6eed"),
        t.sha384 = r("8b95"),
        t.sha512 = r("b525")
    },
    "602c": function(e, t, r) {
        "use strict";
        (function(t) {
            var n;
            function i(e, t, r) {
                return t = a(t),
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }
            function a(e) {
                var t = f(e, "string");
                return "symbol" === typeof t ? t : String(t)
            }
            function f(e, t) {
                if ("object" !== typeof e || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" !== typeof n)
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }
            var o = r("65ab")
              , s = Symbol("lastResolve")
              , d = Symbol("lastReject")
              , c = Symbol("error")
              , u = Symbol("ended")
              , h = Symbol("lastPromise")
              , l = Symbol("handlePromise")
              , b = Symbol("stream");
            function p(e, t) {
                return {
                    value: e,
                    done: t
                }
            }
            function m(e) {
                var t = e[s];
                if (null !== t) {
                    var r = e[b].read();
                    null !== r && (e[h] = null,
                    e[s] = null,
                    e[d] = null,
                    t(p(r, !1)))
                }
            }
            function g(e) {
                t.nextTick(m, e)
            }
            function y(e, t) {
                return function(r, n) {
                    e.then((function() {
                        t[u] ? r(p(void 0, !0)) : t[l](r, n)
                    }
                    ), n)
                }
            }
            var v = Object.getPrototypeOf((function() {}
            ))
              , w = Object.setPrototypeOf((n = {
                get stream() {
                    return this[b]
                },
                next: function() {
                    var e = this
                      , r = this[c];
                    if (null !== r)
                        return Promise.reject(r);
                    if (this[u])
                        return Promise.resolve(p(void 0, !0));
                    if (this[b].destroyed)
                        return new Promise((function(r, n) {
                            t.nextTick((function() {
                                e[c] ? n(e[c]) : r(p(void 0, !0))
                            }
                            ))
                        }
                        ));
                    var n, i = this[h];
                    if (i)
                        n = new Promise(y(i, this));
                    else {
                        var a = this[b].read();
                        if (null !== a)
                            return Promise.resolve(p(a, !1));
                        n = new Promise(this[l])
                    }
                    return this[h] = n,
                    n
                }
            },
            i(n, Symbol.asyncIterator, (function() {
                return this
            }
            )),
            i(n, "return", (function() {
                var e = this;
                return new Promise((function(t, r) {
                    e[b].destroy(null, (function(e) {
                        e ? r(e) : t(p(void 0, !0))
                    }
                    ))
                }
                ))
            }
            )),
            n), v)
              , _ = function(e) {
                var t, r = Object.create(w, (t = {},
                i(t, b, {
                    value: e,
                    writable: !0
                }),
                i(t, s, {
                    value: null,
                    writable: !0
                }),
                i(t, d, {
                    value: null,
                    writable: !0
                }),
                i(t, c, {
                    value: null,
                    writable: !0
                }),
                i(t, u, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }),
                i(t, l, {
                    value: function(e, t) {
                        var n = r[b].read();
                        n ? (r[h] = null,
                        r[s] = null,
                        r[d] = null,
                        e(p(n, !1))) : (r[s] = e,
                        r[d] = t)
                    },
                    writable: !0
                }),
                t));
                return r[h] = null,
                o(e, (function(e) {
                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                        var t = r[d];
                        return null !== t && (r[h] = null,
                        r[s] = null,
                        r[d] = null,
                        t(e)),
                        void (r[c] = e)
                    }
                    var n = r[s];
                    null !== n && (r[h] = null,
                    r[s] = null,
                    r[d] = null,
                    n(p(void 0, !0))),
                    r[u] = !0
                }
                )),
                e.on("readable", g.bind(null, r)),
                r
            };
            e.exports = _
        }
        ).call(this, r("4362"))
    },
    "62e4": function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}
            ,
            e.paths = [],
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }),
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }),
            e.webpackPolyfill = 1),
            e
        }
    },
    "65ab": function(e, t, r) {
        "use strict";
        var n = r("9054").codes.ERR_STREAM_PREMATURE_CLOSE;
        function i(e) {
            var t = !1;
            return function() {
                if (!t) {
                    t = !0;
                    for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                        n[i] = arguments[i];
                    e.apply(this, n)
                }
            }
        }
        function a() {}
        function f(e) {
            return e.setHeader && "function" === typeof e.abort
        }
        function o(e, t, r) {
            if ("function" === typeof t)
                return o(e, null, t);
            t || (t = {}),
            r = i(r || a);
            var s = t.readable || !1 !== t.readable && e.readable
              , d = t.writable || !1 !== t.writable && e.writable
              , c = function() {
                e.writable || h()
            }
              , u = e._writableState && e._writableState.finished
              , h = function() {
                d = !1,
                u = !0,
                s || r.call(e)
            }
              , l = e._readableState && e._readableState.endEmitted
              , b = function() {
                s = !1,
                l = !0,
                d || r.call(e)
            }
              , p = function(t) {
                r.call(e, t)
            }
              , m = function() {
                var t;
                return s && !l ? (e._readableState && e._readableState.ended || (t = new n),
                r.call(e, t)) : d && !u ? (e._writableState && e._writableState.ended || (t = new n),
                r.call(e, t)) : void 0
            }
              , g = function() {
                e.req.on("finish", h)
            };
            return f(e) ? (e.on("complete", h),
            e.on("abort", m),
            e.req ? g() : e.on("request", g)) : d && !e._writableState && (e.on("end", c),
            e.on("close", c)),
            e.on("end", b),
            e.on("finish", h),
            !1 !== t.error && e.on("error", p),
            e.on("close", m),
            function() {
                e.removeListener("complete", h),
                e.removeListener("abort", m),
                e.removeListener("request", g),
                e.req && e.req.removeListener("finish", h),
                e.removeListener("end", c),
                e.removeListener("close", c),
                e.removeListener("finish", h),
                e.removeListener("end", b),
                e.removeListener("error", p),
                e.removeListener("close", m)
            }
        }
        e.exports = o
    },
    "676f": function(e, t, r) {
        "use strict";
        var n = r("80af")
          , i = r("3fb5")
          , a = r("ea53")
          , f = r("f3a3");
        function o(e) {
            a.call(this, "mont", e),
            this.a = new n(e.a,16).toRed(this.red),
            this.b = new n(e.b,16).toRed(this.red),
            this.i4 = new n(4).toRed(this.red).redInvm(),
            this.two = new n(2).toRed(this.red),
            this.a24 = this.i4.redMul(this.a.redAdd(this.two))
        }
        function s(e, t, r) {
            a.BasePoint.call(this, e, "projective"),
            null === t && null === r ? (this.x = this.curve.one,
            this.z = this.curve.zero) : (this.x = new n(t,16),
            this.z = new n(r,16),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)))
        }
        i(o, a),
        e.exports = o,
        o.prototype.validate = function(e) {
            var t = e.normalize().x
              , r = t.redSqr()
              , n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t)
              , i = n.redSqrt();
            return 0 === i.redSqr().cmp(n)
        }
        ,
        i(s, a.BasePoint),
        o.prototype.decodePoint = function(e, t) {
            return this.point(f.toArray(e, t), 1)
        }
        ,
        o.prototype.point = function(e, t) {
            return new s(this,e,t)
        }
        ,
        o.prototype.pointFromJSON = function(e) {
            return s.fromJSON(this, e)
        }
        ,
        s.prototype.precompute = function() {}
        ,
        s.prototype._encode = function() {
            return this.getX().toArray("be", this.curve.p.byteLength())
        }
        ,
        s.fromJSON = function(e, t) {
            return new s(e,t[0],t[1] || e.one)
        }
        ,
        s.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }
        ,
        s.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
        ,
        s.prototype.dbl = function() {
            var e = this.x.redAdd(this.z)
              , t = e.redSqr()
              , r = this.x.redSub(this.z)
              , n = r.redSqr()
              , i = t.redSub(n)
              , a = t.redMul(n)
              , f = i.redMul(n.redAdd(this.curve.a24.redMul(i)));
            return this.curve.point(a, f)
        }
        ,
        s.prototype.add = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        s.prototype.diffAdd = function(e, t) {
            var r = this.x.redAdd(this.z)
              , n = this.x.redSub(this.z)
              , i = e.x.redAdd(e.z)
              , a = e.x.redSub(e.z)
              , f = a.redMul(r)
              , o = i.redMul(n)
              , s = t.z.redMul(f.redAdd(o).redSqr())
              , d = t.x.redMul(f.redISub(o).redSqr());
            return this.curve.point(s, d)
        }
        ,
        s.prototype.mul = function(e) {
            for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = this, a = []; 0 !== t.cmpn(0); t.iushrn(1))
                a.push(t.andln(1));
            for (var f = a.length - 1; f >= 0; f--)
                0 === a[f] ? (r = r.diffAdd(n, i),
                n = n.dbl()) : (n = r.diffAdd(n, i),
                r = r.dbl());
            return n
        }
        ,
        s.prototype.mulAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        s.prototype.jumlAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        s.prototype.eq = function(e) {
            return 0 === this.getX().cmp(e.getX())
        }
        ,
        s.prototype.normalize = function() {
            return this.x = this.x.redMul(this.z.redInvm()),
            this.z = this.curve.one,
            this
        }
        ,
        s.prototype.getX = function() {
            return this.normalize(),
            this.x.fromRed()
        }
    },
    "68a0": function(e, t, r) {
        "use strict";
        (function(t, n) {
            var i;
            e.exports = I,
            I.ReadableState = k;
            r("faa1").EventEmitter;
            var a = function(e, t) {
                return e.listeners(t).length
            }
              , f = r("027d")
              , o = r("b639").Buffer
              , s = ("undefined" !== typeof t ? t : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : {}).Uint8Array || function() {}
            ;
            function d(e) {
                return o.from(e)
            }
            function c(e) {
                return o.isBuffer(e) || e instanceof s
            }
            var u, h = r(2);
            u = h && h.debuglog ? h.debuglog("stream") : function() {}
            ;
            var l, b, p, m = r("b71c"), g = r("ac0c"), y = r("4d28"), v = y.getHighWaterMark, w = r("9054").codes, _ = w.ERR_INVALID_ARG_TYPE, M = w.ERR_STREAM_PUSH_AFTER_EOF, S = w.ERR_METHOD_NOT_IMPLEMENTED, A = w.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            r("3fb5")(I, f);
            var E = g.errorOrDestroy
              , R = ["error", "close", "destroy", "pause", "resume"];
            function x(e, t, r) {
                if ("function" === typeof e.prependListener)
                    return e.prependListener(t, r);
                e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
            }
            function k(e, t, n) {
                i = i || r("88a2"),
                e = e || {},
                "boolean" !== typeof n && (n = t instanceof i),
                this.objectMode = !!e.objectMode,
                n && (this.objectMode = this.objectMode || !!e.readableObjectMode),
                this.highWaterMark = v(this, e, "readableHighWaterMark", n),
                this.buffer = new m,
                this.length = 0,
                this.pipes = null,
                this.pipesCount = 0,
                this.flowing = null,
                this.ended = !1,
                this.endEmitted = !1,
                this.reading = !1,
                this.sync = !0,
                this.needReadable = !1,
                this.emittedReadable = !1,
                this.readableListening = !1,
                this.resumeScheduled = !1,
                this.paused = !0,
                this.emitClose = !1 !== e.emitClose,
                this.autoDestroy = !!e.autoDestroy,
                this.destroyed = !1,
                this.defaultEncoding = e.defaultEncoding || "utf8",
                this.awaitDrain = 0,
                this.readingMore = !1,
                this.decoder = null,
                this.encoding = null,
                e.encoding && (l || (l = r("7d72").StringDecoder),
                this.decoder = new l(e.encoding),
                this.encoding = e.encoding)
            }
            function I(e) {
                if (i = i || r("88a2"),
                !(this instanceof I))
                    return new I(e);
                var t = this instanceof i;
                this._readableState = new k(e,this,t),
                this.readable = !0,
                e && ("function" === typeof e.read && (this._read = e.read),
                "function" === typeof e.destroy && (this._destroy = e.destroy)),
                f.call(this)
            }
            function P(e, t, r, n, i) {
                u("readableAddChunk", t);
                var a, f = e._readableState;
                if (null === t)
                    f.reading = !1,
                    N(e, f);
                else if (i || (a = L(f, t)),
                a)
                    E(e, a);
                else if (f.objectMode || t && t.length > 0)
                    if ("string" === typeof t || f.objectMode || Object.getPrototypeOf(t) === o.prototype || (t = d(t)),
                    n)
                        f.endEmitted ? E(e, new A) : T(e, f, t, !0);
                    else if (f.ended)
                        E(e, new M);
                    else {
                        if (f.destroyed)
                            return !1;
                        f.reading = !1,
                        f.decoder && !r ? (t = f.decoder.write(t),
                        f.objectMode || 0 !== t.length ? T(e, f, t, !1) : j(e, f)) : T(e, f, t, !1)
                    }
                else
                    n || (f.reading = !1,
                    j(e, f));
                return !f.ended && (f.length < f.highWaterMark || 0 === f.length)
            }
            function T(e, t, r, n) {
                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0,
                e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length,
                n ? t.buffer.unshift(r) : t.buffer.push(r),
                t.needReadable && C(e)),
                j(e, t)
            }
            function L(e, t) {
                var r;
                return c(t) || "string" === typeof t || void 0 === t || e.objectMode || (r = new _("chunk",["string", "Buffer", "Uint8Array"],t)),
                r
            }
            Object.defineProperty(I.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }),
            I.prototype.destroy = g.destroy,
            I.prototype._undestroy = g.undestroy,
            I.prototype._destroy = function(e, t) {
                t(e)
            }
            ,
            I.prototype.push = function(e, t) {
                var r, n = this._readableState;
                return n.objectMode ? r = !0 : "string" === typeof e && (t = t || n.defaultEncoding,
                t !== n.encoding && (e = o.from(e, t),
                t = ""),
                r = !0),
                P(this, e, t, !1, r)
            }
            ,
            I.prototype.unshift = function(e) {
                return P(this, e, null, !0, !1)
            }
            ,
            I.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }
            ,
            I.prototype.setEncoding = function(e) {
                l || (l = r("7d72").StringDecoder);
                var t = new l(e);
                this._readableState.decoder = t,
                this._readableState.encoding = this._readableState.decoder.encoding;
                var n = this._readableState.buffer.head
                  , i = "";
                while (null !== n)
                    i += t.write(n.data),
                    n = n.next;
                return this._readableState.buffer.clear(),
                "" !== i && this._readableState.buffer.push(i),
                this._readableState.length = i.length,
                this
            }
            ;
            var O = 1073741824;
            function B(e) {
                return e >= O ? e = O : (e--,
                e |= e >>> 1,
                e |= e >>> 2,
                e |= e >>> 4,
                e |= e >>> 8,
                e |= e >>> 16,
                e++),
                e
            }
            function z(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = B(e)),
                e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                0))
            }
            function N(e, t) {
                if (u("onEofChunk"),
                !t.ended) {
                    if (t.decoder) {
                        var r = t.decoder.end();
                        r && r.length && (t.buffer.push(r),
                        t.length += t.objectMode ? 1 : r.length)
                    }
                    t.ended = !0,
                    t.sync ? C(e) : (t.needReadable = !1,
                    t.emittedReadable || (t.emittedReadable = !0,
                    q(e)))
                }
            }
            function C(e) {
                var t = e._readableState;
                u("emitReadable", t.needReadable, t.emittedReadable),
                t.needReadable = !1,
                t.emittedReadable || (u("emitReadable", t.flowing),
                t.emittedReadable = !0,
                n.nextTick(q, e))
            }
            function q(e) {
                var t = e._readableState;
                u("emitReadable_", t.destroyed, t.length, t.ended),
                t.destroyed || !t.length && !t.ended || (e.emit("readable"),
                t.emittedReadable = !1),
                t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark,
                H(e)
            }
            function j(e, t) {
                t.readingMore || (t.readingMore = !0,
                n.nextTick(U, e, t))
            }
            function U(e, t) {
                while (!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length)) {
                    var r = t.length;
                    if (u("maybeReadMore read 0"),
                    e.read(0),
                    r === t.length)
                        break
                }
                t.readingMore = !1
            }
            function D(e) {
                return function() {
                    var t = e._readableState;
                    u("pipeOnDrain", t.awaitDrain),
                    t.awaitDrain && t.awaitDrain--,
                    0 === t.awaitDrain && a(e, "data") && (t.flowing = !0,
                    H(e))
                }
            }
            function K(e) {
                var t = e._readableState;
                t.readableListening = e.listenerCount("readable") > 0,
                t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
            }
            function F(e) {
                u("readable nexttick read 0"),
                e.read(0)
            }
            function Y(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0,
                n.nextTick(W, e, t))
            }
            function W(e, t) {
                u("resume", t.reading),
                t.reading || e.read(0),
                t.resumeScheduled = !1,
                e.emit("resume"),
                H(e),
                t.flowing && !t.reading && e.read(0)
            }
            function H(e) {
                var t = e._readableState;
                u("flow", t.flowing);
                while (t.flowing && null !== e.read())
                    ;
            }
            function V(e, t) {
                return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length),
                t.buffer.clear()) : r = t.buffer.consume(e, t.decoder),
                r);
                var r
            }
            function Z(e) {
                var t = e._readableState;
                u("endReadable", t.endEmitted),
                t.endEmitted || (t.ended = !0,
                n.nextTick(J, t, e))
            }
            function J(e, t) {
                if (u("endReadableNT", e.endEmitted, e.length),
                !e.endEmitted && 0 === e.length && (e.endEmitted = !0,
                t.readable = !1,
                t.emit("end"),
                e.autoDestroy)) {
                    var r = t._writableState;
                    (!r || r.autoDestroy && r.finished) && t.destroy()
                }
            }
            function X(e, t) {
                for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] === t)
                        return r;
                return -1
            }
            I.prototype.read = function(e) {
                u("read", e),
                e = parseInt(e, 10);
                var t = this._readableState
                  , r = e;
                if (0 !== e && (t.emittedReadable = !1),
                0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
                    return u("read: emitReadable", t.length, t.ended),
                    0 === t.length && t.ended ? Z(this) : C(this),
                    null;
                if (e = z(e, t),
                0 === e && t.ended)
                    return 0 === t.length && Z(this),
                    null;
                var n, i = t.needReadable;
                return u("need readable", i),
                (0 === t.length || t.length - e < t.highWaterMark) && (i = !0,
                u("length less than watermark", i)),
                t.ended || t.reading ? (i = !1,
                u("reading or ended", i)) : i && (u("do read"),
                t.reading = !0,
                t.sync = !0,
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                t.sync = !1,
                t.reading || (e = z(r, t))),
                n = e > 0 ? V(e, t) : null,
                null === n ? (t.needReadable = t.length <= t.highWaterMark,
                e = 0) : (t.length -= e,
                t.awaitDrain = 0),
                0 === t.length && (t.ended || (t.needReadable = !0),
                r !== e && t.ended && Z(this)),
                null !== n && this.emit("data", n),
                n
            }
            ,
            I.prototype._read = function(e) {
                E(this, new S("_read()"))
            }
            ,
            I.prototype.pipe = function(e, t) {
                var r = this
                  , i = this._readableState;
                switch (i.pipesCount) {
                case 0:
                    i.pipes = e;
                    break;
                case 1:
                    i.pipes = [i.pipes, e];
                    break;
                default:
                    i.pipes.push(e);
                    break
                }
                i.pipesCount += 1,
                u("pipe count=%d opts=%j", i.pipesCount, t);
                var f = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr
                  , o = f ? d : y;
                function s(e, t) {
                    u("onunpipe"),
                    e === r && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0,
                    l())
                }
                function d() {
                    u("onend"),
                    e.end()
                }
                i.endEmitted ? n.nextTick(o) : r.once("end", o),
                e.on("unpipe", s);
                var c = D(r);
                e.on("drain", c);
                var h = !1;
                function l() {
                    u("cleanup"),
                    e.removeListener("close", m),
                    e.removeListener("finish", g),
                    e.removeListener("drain", c),
                    e.removeListener("error", p),
                    e.removeListener("unpipe", s),
                    r.removeListener("end", d),
                    r.removeListener("end", y),
                    r.removeListener("data", b),
                    h = !0,
                    !i.awaitDrain || e._writableState && !e._writableState.needDrain || c()
                }
                function b(t) {
                    u("ondata");
                    var n = e.write(t);
                    u("dest.write", n),
                    !1 === n && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== X(i.pipes, e)) && !h && (u("false write response, pause", i.awaitDrain),
                    i.awaitDrain++),
                    r.pause())
                }
                function p(t) {
                    u("onerror", t),
                    y(),
                    e.removeListener("error", p),
                    0 === a(e, "error") && E(e, t)
                }
                function m() {
                    e.removeListener("finish", g),
                    y()
                }
                function g() {
                    u("onfinish"),
                    e.removeListener("close", m),
                    y()
                }
                function y() {
                    u("unpipe"),
                    r.unpipe(e)
                }
                return r.on("data", b),
                x(e, "error", p),
                e.once("close", m),
                e.once("finish", g),
                e.emit("pipe", r),
                i.flowing || (u("pipe resume"),
                r.resume()),
                e
            }
            ,
            I.prototype.unpipe = function(e) {
                var t = this._readableState
                  , r = {
                    hasUnpiped: !1
                };
                if (0 === t.pipesCount)
                    return this;
                if (1 === t.pipesCount)
                    return e && e !== t.pipes || (e || (e = t.pipes),
                    t.pipes = null,
                    t.pipesCount = 0,
                    t.flowing = !1,
                    e && e.emit("unpipe", this, r)),
                    this;
                if (!e) {
                    var n = t.pipes
                      , i = t.pipesCount;
                    t.pipes = null,
                    t.pipesCount = 0,
                    t.flowing = !1;
                    for (var a = 0; a < i; a++)
                        n[a].emit("unpipe", this, {
                            hasUnpiped: !1
                        });
                    return this
                }
                var f = X(t.pipes, e);
                return -1 === f || (t.pipes.splice(f, 1),
                t.pipesCount -= 1,
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit("unpipe", this, r)),
                this
            }
            ,
            I.prototype.on = function(e, t) {
                var r = f.prototype.on.call(this, e, t)
                  , i = this._readableState;
                return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0,
                !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0,
                i.flowing = !1,
                i.emittedReadable = !1,
                u("on readable", i.length, i.reading),
                i.length ? C(this) : i.reading || n.nextTick(F, this))),
                r
            }
            ,
            I.prototype.addListener = I.prototype.on,
            I.prototype.removeListener = function(e, t) {
                var r = f.prototype.removeListener.call(this, e, t);
                return "readable" === e && n.nextTick(K, this),
                r
            }
            ,
            I.prototype.removeAllListeners = function(e) {
                var t = f.prototype.removeAllListeners.apply(this, arguments);
                return "readable" !== e && void 0 !== e || n.nextTick(K, this),
                t
            }
            ,
            I.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (u("resume"),
                e.flowing = !e.readableListening,
                Y(this, e)),
                e.paused = !1,
                this
            }
            ,
            I.prototype.pause = function() {
                return u("call pause flowing=%j", this._readableState.flowing),
                !1 !== this._readableState.flowing && (u("pause"),
                this._readableState.flowing = !1,
                this.emit("pause")),
                this._readableState.paused = !0,
                this
            }
            ,
            I.prototype.wrap = function(e) {
                var t = this
                  , r = this._readableState
                  , n = !1;
                for (var i in e.on("end", (function() {
                    if (u("wrapped end"),
                    r.decoder && !r.ended) {
                        var e = r.decoder.end();
                        e && e.length && t.push(e)
                    }
                    t.push(null)
                }
                )),
                e.on("data", (function(i) {
                    if (u("wrapped data"),
                    r.decoder && (i = r.decoder.write(i)),
                    (!r.objectMode || null !== i && void 0 !== i) && (r.objectMode || i && i.length)) {
                        var a = t.push(i);
                        a || (n = !0,
                        e.pause())
                    }
                }
                )),
                e)
                    void 0 === this[i] && "function" === typeof e[i] && (this[i] = function(t) {
                        return function() {
                            return e[t].apply(e, arguments)
                        }
                    }(i));
                for (var a = 0; a < R.length; a++)
                    e.on(R[a], this.emit.bind(this, R[a]));
                return this._read = function(t) {
                    u("wrapped _read", t),
                    n && (n = !1,
                    e.resume())
                }
                ,
                this
            }
            ,
            "function" === typeof Symbol && (I.prototype[Symbol.asyncIterator] = function() {
                return void 0 === b && (b = r("602c")),
                b(this)
            }
            ),
            Object.defineProperty(I.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }),
            Object.defineProperty(I.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }),
            Object.defineProperty(I.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(e) {
                    this._readableState && (this._readableState.flowing = e)
                }
            }),
            I._fromList = V,
            Object.defineProperty(I.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }),
            "function" === typeof Symbol && (I.from = function(e, t) {
                return void 0 === p && (p = r("d2b2")),
                p(I, e, t)
            }
            )
        }
        ).call(this, r("c8ba"), r("4362"))
    },
    6983: function(e, t, r) {
        e.exports = r("c98c")(r("2416"))
    },
    "6aa2": function(e, t, r) {
        "use strict";
        var n = r("7d92")
          , i = r("7658")
          , a = r("da3e");
        function f(e) {
            if (!(this instanceof f))
                return new f(e);
            this.hash = e.hash,
            this.predResist = !!e.predResist,
            this.outLen = this.hash.outSize,
            this.minEntropy = e.minEntropy || this.hash.hmacStrength,
            this._reseed = null,
            this.reseedInterval = null,
            this.K = null,
            this.V = null;
            var t = i.toArray(e.entropy, e.entropyEnc || "hex")
              , r = i.toArray(e.nonce, e.nonceEnc || "hex")
              , n = i.toArray(e.pers, e.persEnc || "hex");
            a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._init(t, r, n)
        }
        e.exports = f,
        f.prototype._init = function(e, t, r) {
            var n = e.concat(t).concat(r);
            this.K = new Array(this.outLen / 8),
            this.V = new Array(this.outLen / 8);
            for (var i = 0; i < this.V.length; i++)
                this.K[i] = 0,
                this.V[i] = 1;
            this._update(n),
            this._reseed = 1,
            this.reseedInterval = 281474976710656
        }
        ,
        f.prototype._hmac = function() {
            return new n.hmac(this.hash,this.K)
        }
        ,
        f.prototype._update = function(e) {
            var t = this._hmac().update(this.V).update([0]);
            e && (t = t.update(e)),
            this.K = t.digest(),
            this.V = this._hmac().update(this.V).digest(),
            e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(),
            this.V = this._hmac().update(this.V).digest())
        }
        ,
        f.prototype.reseed = function(e, t, r, n) {
            "string" !== typeof t && (n = r,
            r = t,
            t = null),
            e = i.toArray(e, t),
            r = i.toArray(r, n),
            a(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._update(e.concat(r || [])),
            this._reseed = 1
        }
        ,
        f.prototype.generate = function(e, t, r, n) {
            if (this._reseed > this.reseedInterval)
                throw new Error("Reseed is required");
            "string" !== typeof t && (n = r,
            r = t,
            t = null),
            r && (r = i.toArray(r, n || "hex"),
            this._update(r));
            var a = [];
            while (a.length < e)
                this.V = this._hmac().update(this.V).digest(),
                a = a.concat(this.V);
            var f = a.slice(0, e);
            return this._update(r),
            this._reseed++,
            i.encode(f, t)
        }
    },
    "6eed": function(e, t, r) {
        "use strict";
        var n = r("c3c0")
          , i = r("edc9")
          , a = r("aa56")
          , f = r("da3e")
          , o = n.sum32
          , s = n.sum32_4
          , d = n.sum32_5
          , c = a.ch32
          , u = a.maj32
          , h = a.s0_256
          , l = a.s1_256
          , b = a.g0_256
          , p = a.g1_256
          , m = i.BlockHash
          , g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        function y() {
            if (!(this instanceof y))
                return new y;
            m.call(this),
            this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            this.k = g,
            this.W = new Array(64)
        }
        n.inherits(y, m),
        e.exports = y,
        y.blockSize = 512,
        y.outSize = 256,
        y.hmacStrength = 192,
        y.padLength = 64,
        y.prototype._update = function(e, t) {
            for (var r = this.W, n = 0; n < 16; n++)
                r[n] = e[t + n];
            for (; n < r.length; n++)
                r[n] = s(p(r[n - 2]), r[n - 7], b(r[n - 15]), r[n - 16]);
            var i = this.h[0]
              , a = this.h[1]
              , m = this.h[2]
              , g = this.h[3]
              , y = this.h[4]
              , v = this.h[5]
              , w = this.h[6]
              , _ = this.h[7];
            for (f(this.k.length === r.length),
            n = 0; n < r.length; n++) {
                var M = d(_, l(y), c(y, v, w), this.k[n], r[n])
                  , S = o(h(i), u(i, a, m));
                _ = w,
                w = v,
                v = y,
                y = o(g, M),
                g = m,
                m = a,
                a = i,
                i = o(M, S)
            }
            this.h[0] = o(this.h[0], i),
            this.h[1] = o(this.h[1], a),
            this.h[2] = o(this.h[2], m),
            this.h[3] = o(this.h[3], g),
            this.h[4] = o(this.h[4], y),
            this.h[5] = o(this.h[5], v),
            this.h[6] = o(this.h[6], w),
            this.h[7] = o(this.h[7], _)
        }
        ,
        y.prototype._digest = function(e) {
            return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
        }
    },
    "6fde": function(e, t) {
        const r = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
        t.p1600 = function(e) {
            for (let t = 0; t < 24; ++t) {
                const n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]
                  , i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]
                  , a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]
                  , f = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]
                  , o = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]
                  , s = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]
                  , d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]
                  , c = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]
                  , u = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]
                  , h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
                let l = u ^ (a << 1 | f >>> 31)
                  , b = h ^ (f << 1 | a >>> 31);
                const p = e[0] ^ l
                  , m = e[1] ^ b
                  , g = e[10] ^ l
                  , y = e[11] ^ b
                  , v = e[20] ^ l
                  , w = e[21] ^ b
                  , _ = e[30] ^ l
                  , M = e[31] ^ b
                  , S = e[40] ^ l
                  , A = e[41] ^ b;
                l = n ^ (o << 1 | s >>> 31),
                b = i ^ (s << 1 | o >>> 31);
                const E = e[2] ^ l
                  , R = e[3] ^ b
                  , x = e[12] ^ l
                  , k = e[13] ^ b
                  , I = e[22] ^ l
                  , P = e[23] ^ b
                  , T = e[32] ^ l
                  , L = e[33] ^ b
                  , O = e[42] ^ l
                  , B = e[43] ^ b;
                l = a ^ (d << 1 | c >>> 31),
                b = f ^ (c << 1 | d >>> 31);
                const z = e[4] ^ l
                  , N = e[5] ^ b
                  , C = e[14] ^ l
                  , q = e[15] ^ b
                  , j = e[24] ^ l
                  , U = e[25] ^ b
                  , D = e[34] ^ l
                  , K = e[35] ^ b
                  , F = e[44] ^ l
                  , Y = e[45] ^ b;
                l = o ^ (u << 1 | h >>> 31),
                b = s ^ (h << 1 | u >>> 31);
                const W = e[6] ^ l
                  , H = e[7] ^ b
                  , V = e[16] ^ l
                  , Z = e[17] ^ b
                  , J = e[26] ^ l
                  , X = e[27] ^ b
                  , G = e[36] ^ l
                  , $ = e[37] ^ b
                  , Q = e[46] ^ l
                  , ee = e[47] ^ b;
                l = d ^ (n << 1 | i >>> 31),
                b = c ^ (i << 1 | n >>> 31);
                const te = e[8] ^ l
                  , re = e[9] ^ b
                  , ne = e[18] ^ l
                  , ie = e[19] ^ b
                  , ae = e[28] ^ l
                  , fe = e[29] ^ b
                  , oe = e[38] ^ l
                  , se = e[39] ^ b
                  , de = e[48] ^ l
                  , ce = e[49] ^ b
                  , ue = p
                  , he = m
                  , le = y << 4 | g >>> 28
                  , be = g << 4 | y >>> 28
                  , pe = v << 3 | w >>> 29
                  , me = w << 3 | v >>> 29
                  , ge = M << 9 | _ >>> 23
                  , ye = _ << 9 | M >>> 23
                  , ve = S << 18 | A >>> 14
                  , we = A << 18 | S >>> 14
                  , _e = E << 1 | R >>> 31
                  , Me = R << 1 | E >>> 31
                  , Se = k << 12 | x >>> 20
                  , Ae = x << 12 | k >>> 20
                  , Ee = I << 10 | P >>> 22
                  , Re = P << 10 | I >>> 22
                  , xe = L << 13 | T >>> 19
                  , ke = T << 13 | L >>> 19
                  , Ie = O << 2 | B >>> 30
                  , Pe = B << 2 | O >>> 30
                  , Te = N << 30 | z >>> 2
                  , Le = z << 30 | N >>> 2
                  , Oe = C << 6 | q >>> 26
                  , Be = q << 6 | C >>> 26
                  , ze = U << 11 | j >>> 21
                  , Ne = j << 11 | U >>> 21
                  , Ce = D << 15 | K >>> 17
                  , qe = K << 15 | D >>> 17
                  , je = Y << 29 | F >>> 3
                  , Ue = F << 29 | Y >>> 3
                  , De = W << 28 | H >>> 4
                  , Ke = H << 28 | W >>> 4
                  , Fe = Z << 23 | V >>> 9
                  , Ye = V << 23 | Z >>> 9
                  , We = J << 25 | X >>> 7
                  , He = X << 25 | J >>> 7
                  , Ve = G << 21 | $ >>> 11
                  , Ze = $ << 21 | G >>> 11
                  , Je = ee << 24 | Q >>> 8
                  , Xe = Q << 24 | ee >>> 8
                  , Ge = te << 27 | re >>> 5
                  , $e = re << 27 | te >>> 5
                  , Qe = ne << 20 | ie >>> 12
                  , et = ie << 20 | ne >>> 12
                  , tt = fe << 7 | ae >>> 25
                  , rt = ae << 7 | fe >>> 25
                  , nt = oe << 8 | se >>> 24
                  , it = se << 8 | oe >>> 24
                  , at = de << 14 | ce >>> 18
                  , ft = ce << 14 | de >>> 18;
                e[0] = ue ^ ~Se & ze,
                e[1] = he ^ ~Ae & Ne,
                e[10] = De ^ ~Qe & pe,
                e[11] = Ke ^ ~et & me,
                e[20] = _e ^ ~Oe & We,
                e[21] = Me ^ ~Be & He,
                e[30] = Ge ^ ~le & Ee,
                e[31] = $e ^ ~be & Re,
                e[40] = Te ^ ~Fe & tt,
                e[41] = Le ^ ~Ye & rt,
                e[2] = Se ^ ~ze & Ve,
                e[3] = Ae ^ ~Ne & Ze,
                e[12] = Qe ^ ~pe & xe,
                e[13] = et ^ ~me & ke,
                e[22] = Oe ^ ~We & nt,
                e[23] = Be ^ ~He & it,
                e[32] = le ^ ~Ee & Ce,
                e[33] = be ^ ~Re & qe,
                e[42] = Fe ^ ~tt & ge,
                e[43] = Ye ^ ~rt & ye,
                e[4] = ze ^ ~Ve & at,
                e[5] = Ne ^ ~Ze & ft,
                e[14] = pe ^ ~xe & je,
                e[15] = me ^ ~ke & Ue,
                e[24] = We ^ ~nt & ve,
                e[25] = He ^ ~it & we,
                e[34] = Ee ^ ~Ce & Je,
                e[35] = Re ^ ~qe & Xe,
                e[44] = tt ^ ~ge & Ie,
                e[45] = rt ^ ~ye & Pe,
                e[6] = Ve ^ ~at & ue,
                e[7] = Ze ^ ~ft & he,
                e[16] = xe ^ ~je & De,
                e[17] = ke ^ ~Ue & Ke,
                e[26] = nt ^ ~ve & _e,
                e[27] = it ^ ~we & Me,
                e[36] = Ce ^ ~Je & Ge,
                e[37] = qe ^ ~Xe & $e,
                e[46] = ge ^ ~Ie & Te,
                e[47] = ye ^ ~Pe & Le,
                e[8] = at ^ ~ue & Se,
                e[9] = ft ^ ~he & Ae,
                e[18] = je ^ ~De & Qe,
                e[19] = Ue ^ ~Ke & et,
                e[28] = ve ^ ~_e & Oe,
                e[29] = we ^ ~Me & Be,
                e[38] = Je ^ ~Ge & le,
                e[39] = Xe ^ ~$e & be,
                e[48] = Ie ^ ~Te & Fe,
                e[49] = Pe ^ ~Le & Ye,
                e[0] ^= r[2 * t],
                e[1] ^= r[2 * t + 1]
            }
        }
    },
    7658: function(e, t, r) {
        "use strict";
        var n = t;
        function i(e, t) {
            if (Array.isArray(e))
                return e.slice();
            if (!e)
                return [];
            var r = [];
            if ("string" !== typeof e) {
                for (var n = 0; n < e.length; n++)
                    r[n] = 0 | e[n];
                return r
            }
            if ("hex" === t) {
                e = e.replace(/[^a-z0-9]+/gi, ""),
                e.length % 2 !== 0 && (e = "0" + e);
                for (n = 0; n < e.length; n += 2)
                    r.push(parseInt(e[n] + e[n + 1], 16))
            } else
                for (n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n)
                      , a = i >> 8
                      , f = 255 & i;
                    a ? r.push(a, f) : r.push(f)
                }
            return r
        }
        function a(e) {
            return 1 === e.length ? "0" + e : e
        }
        function f(e) {
            for (var t = "", r = 0; r < e.length; r++)
                t += a(e[r].toString(16));
            return t
        }
        n.toArray = i,
        n.zero2 = a,
        n.toHex = f,
        n.encode = function(e, t) {
            return "hex" === t ? f(e) : e
        }
    },
    "7d72": function(e, t, r) {
        "use strict";
        var n = r("8707").Buffer
          , i = n.isEncoding || function(e) {
            switch (e = "" + e,
            e && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
            }
        }
        ;
        function a(e) {
            if (!e)
                return "utf8";
            var t;
            while (1)
                switch (e) {
                case "utf8":
                case "utf-8":
                    return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return "utf16le";
                case "latin1":
                case "binary":
                    return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                    return e;
                default:
                    if (t)
                        return;
                    e = ("" + e).toLowerCase(),
                    t = !0
                }
        }
        function f(e) {
            var t = a(e);
            if ("string" !== typeof t && (n.isEncoding === i || !i(e)))
                throw new Error("Unknown encoding: " + e);
            return t || e
        }
        function o(e) {
            var t;
            switch (this.encoding = f(e),
            this.encoding) {
            case "utf16le":
                this.text = b,
                this.end = p,
                t = 4;
                break;
            case "utf8":
                this.fillLast = u,
                t = 4;
                break;
            case "base64":
                this.text = m,
                this.end = g,
                t = 3;
                break;
            default:
                return this.write = y,
                void (this.end = v)
            }
            this.lastNeed = 0,
            this.lastTotal = 0,
            this.lastChar = n.allocUnsafe(t)
        }
        function s(e) {
            return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2
        }
        function d(e, t, r) {
            var n = t.length - 1;
            if (n < r)
                return 0;
            var i = s(t[n]);
            return i >= 0 ? (i > 0 && (e.lastNeed = i - 1),
            i) : --n < r || -2 === i ? 0 : (i = s(t[n]),
            i >= 0 ? (i > 0 && (e.lastNeed = i - 2),
            i) : --n < r || -2 === i ? 0 : (i = s(t[n]),
            i >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3),
            i) : 0))
        }
        function c(e, t, r) {
            if (128 !== (192 & t[0]))
                return e.lastNeed = 0,
                "�";
            if (e.lastNeed > 1 && t.length > 1) {
                if (128 !== (192 & t[1]))
                    return e.lastNeed = 1,
                    "�";
                if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2]))
                    return e.lastNeed = 2,
                    "�"
            }
        }
        function u(e) {
            var t = this.lastTotal - this.lastNeed
              , r = c(this, e, t);
            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length))
        }
        function h(e, t) {
            var r = d(this, e, t);
            if (!this.lastNeed)
                return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n),
            e.toString("utf8", t, n)
        }
        function l(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t
        }
        function b(e, t) {
            if ((e.length - t) % 2 === 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319)
                        return this.lastNeed = 2,
                        this.lastTotal = 4,
                        this.lastChar[0] = e[e.length - 2],
                        this.lastChar[1] = e[e.length - 1],
                        r.slice(0, -1)
                }
                return r
            }
            return this.lastNeed = 1,
            this.lastTotal = 2,
            this.lastChar[0] = e[e.length - 1],
            e.toString("utf16le", t, e.length - 1)
        }
        function p(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r)
            }
            return t
        }
        function m(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r,
            this.lastTotal = 3,
            1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
            this.lastChar[1] = e[e.length - 1]),
            e.toString("base64", t, e.length - r))
        }
        function g(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }
        function y(e) {
            return e.toString(this.encoding)
        }
        function v(e) {
            return e && e.length ? this.write(e) : ""
        }
        t.StringDecoder = o,
        o.prototype.write = function(e) {
            if (0 === e.length)
                return "";
            var t, r;
            if (this.lastNeed) {
                if (t = this.fillLast(e),
                void 0 === t)
                    return "";
                r = this.lastNeed,
                this.lastNeed = 0
            } else
                r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
        }
        ,
        o.prototype.end = l,
        o.prototype.text = h,
        o.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length)
                return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            this.lastNeed -= e.length
        }
    },
    "7d92": function(e, t, r) {
        var n = t;
        n.utils = r("c3c0"),
        n.common = r("edc9"),
        n.sha = r("5919"),
        n.ripemd = r("bb44"),
        n.hmac = r("2137"),
        n.sha1 = n.sha.sha1,
        n.sha256 = n.sha.sha256,
        n.sha224 = n.sha.sha224,
        n.sha384 = n.sha.sha384,
        n.sha512 = n.sha.sha512,
        n.ripemd160 = n.ripemd.ripemd160
    },
    "80af": function(e, t, r) {
        (function(e) {
            (function(e, t) {
                "use strict";
                function n(e, t) {
                    if (!e)
                        throw new Error(t || "Assertion failed")
                }
                function i(e, t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype,
                    e.prototype = new r,
                    e.prototype.constructor = e
                }
                function a(e, t, r) {
                    if (a.isBN(e))
                        return e;
                    this.negative = 0,
                    this.words = null,
                    this.length = 0,
                    this.red = null,
                    null !== e && ("le" !== t && "be" !== t || (r = t,
                    t = 10),
                    this._init(e || 0, t || 10, r || "be"))
                }
                var f;
                "object" === typeof e ? e.exports = a : t.BN = a,
                a.BN = a,
                a.wordSize = 26;
                try {
                    f = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : r(0).Buffer
                } catch (x) {}
                function o(e, t) {
                    var r = e.charCodeAt(t);
                    return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15
                }
                function s(e, t, r) {
                    var n = o(e, r);
                    return r - 1 >= t && (n |= o(e, r - 1) << 4),
                    n
                }
                function d(e, t, r, n) {
                    for (var i = 0, a = Math.min(e.length, r), f = t; f < a; f++) {
                        var o = e.charCodeAt(f) - 48;
                        i *= n,
                        i += o >= 49 ? o - 49 + 10 : o >= 17 ? o - 17 + 10 : o
                    }
                    return i
                }
                a.isBN = function(e) {
                    return e instanceof a || null !== e && "object" === typeof e && e.constructor.wordSize === a.wordSize && Array.isArray(e.words)
                }
                ,
                a.max = function(e, t) {
                    return e.cmp(t) > 0 ? e : t
                }
                ,
                a.min = function(e, t) {
                    return e.cmp(t) < 0 ? e : t
                }
                ,
                a.prototype._init = function(e, t, r) {
                    if ("number" === typeof e)
                        return this._initNumber(e, t, r);
                    if ("object" === typeof e)
                        return this._initArray(e, t, r);
                    "hex" === t && (t = 16),
                    n(t === (0 | t) && t >= 2 && t <= 36),
                    e = e.toString().replace(/\s+/g, "");
                    var i = 0;
                    "-" === e[0] && (i++,
                    this.negative = 1),
                    i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i),
                    "le" === r && this._initArray(this.toArray(), t, r)))
                }
                ,
                a.prototype._initNumber = function(e, t, r) {
                    e < 0 && (this.negative = 1,
                    e = -e),
                    e < 67108864 ? (this.words = [67108863 & e],
                    this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863],
                    this.length = 2) : (n(e < 9007199254740992),
                    this.words = [67108863 & e, e / 67108864 & 67108863, 1],
                    this.length = 3),
                    "le" === r && this._initArray(this.toArray(), t, r)
                }
                ,
                a.prototype._initArray = function(e, t, r) {
                    if (n("number" === typeof e.length),
                    e.length <= 0)
                        return this.words = [0],
                        this.length = 1,
                        this;
                    this.length = Math.ceil(e.length / 3),
                    this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++)
                        this.words[i] = 0;
                    var a, f, o = 0;
                    if ("be" === r)
                        for (i = e.length - 1,
                        a = 0; i >= 0; i -= 3)
                            f = e[i] | e[i - 1] << 8 | e[i - 2] << 16,
                            this.words[a] |= f << o & 67108863,
                            this.words[a + 1] = f >>> 26 - o & 67108863,
                            o += 24,
                            o >= 26 && (o -= 26,
                            a++);
                    else if ("le" === r)
                        for (i = 0,
                        a = 0; i < e.length; i += 3)
                            f = e[i] | e[i + 1] << 8 | e[i + 2] << 16,
                            this.words[a] |= f << o & 67108863,
                            this.words[a + 1] = f >>> 26 - o & 67108863,
                            o += 24,
                            o >= 26 && (o -= 26,
                            a++);
                    return this.strip()
                }
                ,
                a.prototype._parseHex = function(e, t, r) {
                    this.length = Math.ceil((e.length - t) / 6),
                    this.words = new Array(this.length);
                    for (var n = 0; n < this.length; n++)
                        this.words[n] = 0;
                    var i, a = 0, f = 0;
                    if ("be" === r)
                        for (n = e.length - 1; n >= t; n -= 2)
                            i = s(e, t, n) << a,
                            this.words[f] |= 67108863 & i,
                            a >= 18 ? (a -= 18,
                            f += 1,
                            this.words[f] |= i >>> 26) : a += 8;
                    else {
                        var o = e.length - t;
                        for (n = o % 2 === 0 ? t + 1 : t; n < e.length; n += 2)
                            i = s(e, t, n) << a,
                            this.words[f] |= 67108863 & i,
                            a >= 18 ? (a -= 18,
                            f += 1,
                            this.words[f] |= i >>> 26) : a += 8
                    }
                    this.strip()
                }
                ,
                a.prototype._parseBase = function(e, t, r) {
                    this.words = [0],
                    this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= t)
                        n++;
                    n--,
                    i = i / t | 0;
                    for (var a = e.length - r, f = a % n, o = Math.min(a, a - f) + r, s = 0, c = r; c < o; c += n)
                        s = d(e, c, c + n, t),
                        this.imuln(i),
                        this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
                    if (0 !== f) {
                        var u = 1;
                        for (s = d(e, c, e.length, t),
                        c = 0; c < f; c++)
                            u *= t;
                        this.imuln(u),
                        this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s)
                    }
                    this.strip()
                }
                ,
                a.prototype.copy = function(e) {
                    e.words = new Array(this.length);
                    for (var t = 0; t < this.length; t++)
                        e.words[t] = this.words[t];
                    e.length = this.length,
                    e.negative = this.negative,
                    e.red = this.red
                }
                ,
                a.prototype.clone = function() {
                    var e = new a(null);
                    return this.copy(e),
                    e
                }
                ,
                a.prototype._expand = function(e) {
                    while (this.length < e)
                        this.words[this.length++] = 0;
                    return this
                }
                ,
                a.prototype.strip = function() {
                    while (this.length > 1 && 0 === this.words[this.length - 1])
                        this.length--;
                    return this._normSign()
                }
                ,
                a.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                    this
                }
                ,
                a.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                ;
                var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
                  , u = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
                  , h = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
                function l(e) {
                    for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                        var n = r / 26 | 0
                          , i = r % 26;
                        t[r] = (e.words[n] & 1 << i) >>> i
                    }
                    return t
                }
                function b(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var n = e.length + t.length | 0;
                    r.length = n,
                    n = n - 1 | 0;
                    var i = 0 | e.words[0]
                      , a = 0 | t.words[0]
                      , f = i * a
                      , o = 67108863 & f
                      , s = f / 67108864 | 0;
                    r.words[0] = o;
                    for (var d = 1; d < n; d++) {
                        for (var c = s >>> 26, u = 67108863 & s, h = Math.min(d, t.length - 1), l = Math.max(0, d - e.length + 1); l <= h; l++) {
                            var b = d - l | 0;
                            i = 0 | e.words[b],
                            a = 0 | t.words[l],
                            f = i * a + u,
                            c += f / 67108864 | 0,
                            u = 67108863 & f
                        }
                        r.words[d] = 0 | u,
                        s = 0 | c
                    }
                    return 0 !== s ? r.words[d] = 0 | s : r.length--,
                    r.strip()
                }
                a.prototype.toString = function(e, t) {
                    var r;
                    if (e = e || 10,
                    t = 0 | t || 1,
                    16 === e || "hex" === e) {
                        r = "";
                        for (var i = 0, a = 0, f = 0; f < this.length; f++) {
                            var o = this.words[f]
                              , s = (16777215 & (o << i | a)).toString(16);
                            a = o >>> 24 - i & 16777215,
                            r = 0 !== a || f !== this.length - 1 ? c[6 - s.length] + s + r : s + r,
                            i += 2,
                            i >= 26 && (i -= 26,
                            f--)
                        }
                        0 !== a && (r = a.toString(16) + r);
                        while (r.length % t !== 0)
                            r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r),
                        r
                    }
                    if (e === (0 | e) && e >= 2 && e <= 36) {
                        var d = u[e]
                          , l = h[e];
                        r = "";
                        var b = this.clone();
                        b.negative = 0;
                        while (!b.isZero()) {
                            var p = b.modn(l).toString(e);
                            b = b.idivn(l),
                            r = b.isZero() ? p + r : c[d - p.length] + p + r
                        }
                        this.isZero() && (r = "0" + r);
                        while (r.length % t !== 0)
                            r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r),
                        r
                    }
                    n(!1, "Base should be between 2 and 36")
                }
                ,
                a.prototype.toNumber = function() {
                    var e = this.words[0];
                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                    0 !== this.negative ? -e : e
                }
                ,
                a.prototype.toJSON = function() {
                    return this.toString(16)
                }
                ,
                a.prototype.toBuffer = function(e, t) {
                    return n("undefined" !== typeof f),
                    this.toArrayLike(f, e, t)
                }
                ,
                a.prototype.toArray = function(e, t) {
                    return this.toArrayLike(Array, e, t)
                }
                ,
                a.prototype.toArrayLike = function(e, t, r) {
                    var i = this.byteLength()
                      , a = r || Math.max(1, i);
                    n(i <= a, "byte array longer than desired length"),
                    n(a > 0, "Requested array length <= 0"),
                    this.strip();
                    var f, o, s = "le" === t, d = new e(a), c = this.clone();
                    if (s) {
                        for (o = 0; !c.isZero(); o++)
                            f = c.andln(255),
                            c.iushrn(8),
                            d[o] = f;
                        for (; o < a; o++)
                            d[o] = 0
                    } else {
                        for (o = 0; o < a - i; o++)
                            d[o] = 0;
                        for (o = 0; !c.isZero(); o++)
                            f = c.andln(255),
                            c.iushrn(8),
                            d[a - o - 1] = f
                    }
                    return d
                }
                ,
                Math.clz32 ? a.prototype._countBits = function(e) {
                    return 32 - Math.clz32(e)
                }
                : a.prototype._countBits = function(e) {
                    var t = e
                      , r = 0;
                    return t >= 4096 && (r += 13,
                    t >>>= 13),
                    t >= 64 && (r += 7,
                    t >>>= 7),
                    t >= 8 && (r += 4,
                    t >>>= 4),
                    t >= 2 && (r += 2,
                    t >>>= 2),
                    r + t
                }
                ,
                a.prototype._zeroBits = function(e) {
                    if (0 === e)
                        return 26;
                    var t = e
                      , r = 0;
                    return 0 === (8191 & t) && (r += 13,
                    t >>>= 13),
                    0 === (127 & t) && (r += 7,
                    t >>>= 7),
                    0 === (15 & t) && (r += 4,
                    t >>>= 4),
                    0 === (3 & t) && (r += 2,
                    t >>>= 2),
                    0 === (1 & t) && r++,
                    r
                }
                ,
                a.prototype.bitLength = function() {
                    var e = this.words[this.length - 1]
                      , t = this._countBits(e);
                    return 26 * (this.length - 1) + t
                }
                ,
                a.prototype.zeroBits = function() {
                    if (this.isZero())
                        return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                        var r = this._zeroBits(this.words[t]);
                        if (e += r,
                        26 !== r)
                            break
                    }
                    return e
                }
                ,
                a.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }
                ,
                a.prototype.toTwos = function(e) {
                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                }
                ,
                a.prototype.fromTwos = function(e) {
                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                }
                ,
                a.prototype.isNeg = function() {
                    return 0 !== this.negative
                }
                ,
                a.prototype.neg = function() {
                    return this.clone().ineg()
                }
                ,
                a.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1),
                    this
                }
                ,
                a.prototype.iuor = function(e) {
                    while (this.length < e.length)
                        this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++)
                        this.words[t] = this.words[t] | e.words[t];
                    return this.strip()
                }
                ,
                a.prototype.ior = function(e) {
                    return n(0 === (this.negative | e.negative)),
                    this.iuor(e)
                }
                ,
                a.prototype.or = function(e) {
                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                }
                ,
                a.prototype.uor = function(e) {
                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                }
                ,
                a.prototype.iuand = function(e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++)
                        this.words[r] = this.words[r] & e.words[r];
                    return this.length = t.length,
                    this.strip()
                }
                ,
                a.prototype.iand = function(e) {
                    return n(0 === (this.negative | e.negative)),
                    this.iuand(e)
                }
                ,
                a.prototype.and = function(e) {
                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                }
                ,
                a.prototype.uand = function(e) {
                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                }
                ,
                a.prototype.iuxor = function(e) {
                    var t, r;
                    this.length > e.length ? (t = this,
                    r = e) : (t = e,
                    r = this);
                    for (var n = 0; n < r.length; n++)
                        this.words[n] = t.words[n] ^ r.words[n];
                    if (this !== t)
                        for (; n < t.length; n++)
                            this.words[n] = t.words[n];
                    return this.length = t.length,
                    this.strip()
                }
                ,
                a.prototype.ixor = function(e) {
                    return n(0 === (this.negative | e.negative)),
                    this.iuxor(e)
                }
                ,
                a.prototype.xor = function(e) {
                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                }
                ,
                a.prototype.uxor = function(e) {
                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                }
                ,
                a.prototype.inotn = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26)
                      , r = e % 26;
                    this._expand(t),
                    r > 0 && t--;
                    for (var i = 0; i < t; i++)
                        this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r),
                    this.strip()
                }
                ,
                a.prototype.notn = function(e) {
                    return this.clone().inotn(e)
                }
                ,
                a.prototype.setn = function(e, t) {
                    n("number" === typeof e && e >= 0);
                    var r = e / 26 | 0
                      , i = e % 26;
                    return this._expand(r + 1),
                    this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i),
                    this.strip()
                }
                ,
                a.prototype.iadd = function(e) {
                    var t, r, n;
                    if (0 !== this.negative && 0 === e.negative)
                        return this.negative = 0,
                        t = this.isub(e),
                        this.negative ^= 1,
                        this._normSign();
                    if (0 === this.negative && 0 !== e.negative)
                        return e.negative = 0,
                        t = this.isub(e),
                        e.negative = 1,
                        t._normSign();
                    this.length > e.length ? (r = this,
                    n = e) : (r = e,
                    n = this);
                    for (var i = 0, a = 0; a < n.length; a++)
                        t = (0 | r.words[a]) + (0 | n.words[a]) + i,
                        this.words[a] = 67108863 & t,
                        i = t >>> 26;
                    for (; 0 !== i && a < r.length; a++)
                        t = (0 | r.words[a]) + i,
                        this.words[a] = 67108863 & t,
                        i = t >>> 26;
                    if (this.length = r.length,
                    0 !== i)
                        this.words[this.length] = i,
                        this.length++;
                    else if (r !== this)
                        for (; a < r.length; a++)
                            this.words[a] = r.words[a];
                    return this
                }
                ,
                a.prototype.add = function(e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0,
                    t = this.sub(e),
                    e.negative ^= 1,
                    t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0,
                    t = e.sub(this),
                    this.negative = 1,
                    t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                }
                ,
                a.prototype.isub = function(e) {
                    if (0 !== e.negative) {
                        e.negative = 0;
                        var t = this.iadd(e);
                        return e.negative = 1,
                        t._normSign()
                    }
                    if (0 !== this.negative)
                        return this.negative = 0,
                        this.iadd(e),
                        this.negative = 1,
                        this._normSign();
                    var r, n, i = this.cmp(e);
                    if (0 === i)
                        return this.negative = 0,
                        this.length = 1,
                        this.words[0] = 0,
                        this;
                    i > 0 ? (r = this,
                    n = e) : (r = e,
                    n = this);
                    for (var a = 0, f = 0; f < n.length; f++)
                        t = (0 | r.words[f]) - (0 | n.words[f]) + a,
                        a = t >> 26,
                        this.words[f] = 67108863 & t;
                    for (; 0 !== a && f < r.length; f++)
                        t = (0 | r.words[f]) + a,
                        a = t >> 26,
                        this.words[f] = 67108863 & t;
                    if (0 === a && f < r.length && r !== this)
                        for (; f < r.length; f++)
                            this.words[f] = r.words[f];
                    return this.length = Math.max(this.length, f),
                    r !== this && (this.negative = 1),
                    this.strip()
                }
                ,
                a.prototype.sub = function(e) {
                    return this.clone().isub(e)
                }
                ;
                var p = function(e, t, r) {
                    var n, i, a, f = e.words, o = t.words, s = r.words, d = 0, c = 0 | f[0], u = 8191 & c, h = c >>> 13, l = 0 | f[1], b = 8191 & l, p = l >>> 13, m = 0 | f[2], g = 8191 & m, y = m >>> 13, v = 0 | f[3], w = 8191 & v, _ = v >>> 13, M = 0 | f[4], S = 8191 & M, A = M >>> 13, E = 0 | f[5], R = 8191 & E, x = E >>> 13, k = 0 | f[6], I = 8191 & k, P = k >>> 13, T = 0 | f[7], L = 8191 & T, O = T >>> 13, B = 0 | f[8], z = 8191 & B, N = B >>> 13, C = 0 | f[9], q = 8191 & C, j = C >>> 13, U = 0 | o[0], D = 8191 & U, K = U >>> 13, F = 0 | o[1], Y = 8191 & F, W = F >>> 13, H = 0 | o[2], V = 8191 & H, Z = H >>> 13, J = 0 | o[3], X = 8191 & J, G = J >>> 13, $ = 0 | o[4], Q = 8191 & $, ee = $ >>> 13, te = 0 | o[5], re = 8191 & te, ne = te >>> 13, ie = 0 | o[6], ae = 8191 & ie, fe = ie >>> 13, oe = 0 | o[7], se = 8191 & oe, de = oe >>> 13, ce = 0 | o[8], ue = 8191 & ce, he = ce >>> 13, le = 0 | o[9], be = 8191 & le, pe = le >>> 13;
                    r.negative = e.negative ^ t.negative,
                    r.length = 19,
                    n = Math.imul(u, D),
                    i = Math.imul(u, K),
                    i = i + Math.imul(h, D) | 0,
                    a = Math.imul(h, K);
                    var me = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (me >>> 26) | 0,
                    me &= 67108863,
                    n = Math.imul(b, D),
                    i = Math.imul(b, K),
                    i = i + Math.imul(p, D) | 0,
                    a = Math.imul(p, K),
                    n = n + Math.imul(u, Y) | 0,
                    i = i + Math.imul(u, W) | 0,
                    i = i + Math.imul(h, Y) | 0,
                    a = a + Math.imul(h, W) | 0;
                    var ge = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (ge >>> 26) | 0,
                    ge &= 67108863,
                    n = Math.imul(g, D),
                    i = Math.imul(g, K),
                    i = i + Math.imul(y, D) | 0,
                    a = Math.imul(y, K),
                    n = n + Math.imul(b, Y) | 0,
                    i = i + Math.imul(b, W) | 0,
                    i = i + Math.imul(p, Y) | 0,
                    a = a + Math.imul(p, W) | 0,
                    n = n + Math.imul(u, V) | 0,
                    i = i + Math.imul(u, Z) | 0,
                    i = i + Math.imul(h, V) | 0,
                    a = a + Math.imul(h, Z) | 0;
                    var ye = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (ye >>> 26) | 0,
                    ye &= 67108863,
                    n = Math.imul(w, D),
                    i = Math.imul(w, K),
                    i = i + Math.imul(_, D) | 0,
                    a = Math.imul(_, K),
                    n = n + Math.imul(g, Y) | 0,
                    i = i + Math.imul(g, W) | 0,
                    i = i + Math.imul(y, Y) | 0,
                    a = a + Math.imul(y, W) | 0,
                    n = n + Math.imul(b, V) | 0,
                    i = i + Math.imul(b, Z) | 0,
                    i = i + Math.imul(p, V) | 0,
                    a = a + Math.imul(p, Z) | 0,
                    n = n + Math.imul(u, X) | 0,
                    i = i + Math.imul(u, G) | 0,
                    i = i + Math.imul(h, X) | 0,
                    a = a + Math.imul(h, G) | 0;
                    var ve = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (ve >>> 26) | 0,
                    ve &= 67108863,
                    n = Math.imul(S, D),
                    i = Math.imul(S, K),
                    i = i + Math.imul(A, D) | 0,
                    a = Math.imul(A, K),
                    n = n + Math.imul(w, Y) | 0,
                    i = i + Math.imul(w, W) | 0,
                    i = i + Math.imul(_, Y) | 0,
                    a = a + Math.imul(_, W) | 0,
                    n = n + Math.imul(g, V) | 0,
                    i = i + Math.imul(g, Z) | 0,
                    i = i + Math.imul(y, V) | 0,
                    a = a + Math.imul(y, Z) | 0,
                    n = n + Math.imul(b, X) | 0,
                    i = i + Math.imul(b, G) | 0,
                    i = i + Math.imul(p, X) | 0,
                    a = a + Math.imul(p, G) | 0,
                    n = n + Math.imul(u, Q) | 0,
                    i = i + Math.imul(u, ee) | 0,
                    i = i + Math.imul(h, Q) | 0,
                    a = a + Math.imul(h, ee) | 0;
                    var we = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (we >>> 26) | 0,
                    we &= 67108863,
                    n = Math.imul(R, D),
                    i = Math.imul(R, K),
                    i = i + Math.imul(x, D) | 0,
                    a = Math.imul(x, K),
                    n = n + Math.imul(S, Y) | 0,
                    i = i + Math.imul(S, W) | 0,
                    i = i + Math.imul(A, Y) | 0,
                    a = a + Math.imul(A, W) | 0,
                    n = n + Math.imul(w, V) | 0,
                    i = i + Math.imul(w, Z) | 0,
                    i = i + Math.imul(_, V) | 0,
                    a = a + Math.imul(_, Z) | 0,
                    n = n + Math.imul(g, X) | 0,
                    i = i + Math.imul(g, G) | 0,
                    i = i + Math.imul(y, X) | 0,
                    a = a + Math.imul(y, G) | 0,
                    n = n + Math.imul(b, Q) | 0,
                    i = i + Math.imul(b, ee) | 0,
                    i = i + Math.imul(p, Q) | 0,
                    a = a + Math.imul(p, ee) | 0,
                    n = n + Math.imul(u, re) | 0,
                    i = i + Math.imul(u, ne) | 0,
                    i = i + Math.imul(h, re) | 0,
                    a = a + Math.imul(h, ne) | 0;
                    var _e = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (_e >>> 26) | 0,
                    _e &= 67108863,
                    n = Math.imul(I, D),
                    i = Math.imul(I, K),
                    i = i + Math.imul(P, D) | 0,
                    a = Math.imul(P, K),
                    n = n + Math.imul(R, Y) | 0,
                    i = i + Math.imul(R, W) | 0,
                    i = i + Math.imul(x, Y) | 0,
                    a = a + Math.imul(x, W) | 0,
                    n = n + Math.imul(S, V) | 0,
                    i = i + Math.imul(S, Z) | 0,
                    i = i + Math.imul(A, V) | 0,
                    a = a + Math.imul(A, Z) | 0,
                    n = n + Math.imul(w, X) | 0,
                    i = i + Math.imul(w, G) | 0,
                    i = i + Math.imul(_, X) | 0,
                    a = a + Math.imul(_, G) | 0,
                    n = n + Math.imul(g, Q) | 0,
                    i = i + Math.imul(g, ee) | 0,
                    i = i + Math.imul(y, Q) | 0,
                    a = a + Math.imul(y, ee) | 0,
                    n = n + Math.imul(b, re) | 0,
                    i = i + Math.imul(b, ne) | 0,
                    i = i + Math.imul(p, re) | 0,
                    a = a + Math.imul(p, ne) | 0,
                    n = n + Math.imul(u, ae) | 0,
                    i = i + Math.imul(u, fe) | 0,
                    i = i + Math.imul(h, ae) | 0,
                    a = a + Math.imul(h, fe) | 0;
                    var Me = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Me >>> 26) | 0,
                    Me &= 67108863,
                    n = Math.imul(L, D),
                    i = Math.imul(L, K),
                    i = i + Math.imul(O, D) | 0,
                    a = Math.imul(O, K),
                    n = n + Math.imul(I, Y) | 0,
                    i = i + Math.imul(I, W) | 0,
                    i = i + Math.imul(P, Y) | 0,
                    a = a + Math.imul(P, W) | 0,
                    n = n + Math.imul(R, V) | 0,
                    i = i + Math.imul(R, Z) | 0,
                    i = i + Math.imul(x, V) | 0,
                    a = a + Math.imul(x, Z) | 0,
                    n = n + Math.imul(S, X) | 0,
                    i = i + Math.imul(S, G) | 0,
                    i = i + Math.imul(A, X) | 0,
                    a = a + Math.imul(A, G) | 0,
                    n = n + Math.imul(w, Q) | 0,
                    i = i + Math.imul(w, ee) | 0,
                    i = i + Math.imul(_, Q) | 0,
                    a = a + Math.imul(_, ee) | 0,
                    n = n + Math.imul(g, re) | 0,
                    i = i + Math.imul(g, ne) | 0,
                    i = i + Math.imul(y, re) | 0,
                    a = a + Math.imul(y, ne) | 0,
                    n = n + Math.imul(b, ae) | 0,
                    i = i + Math.imul(b, fe) | 0,
                    i = i + Math.imul(p, ae) | 0,
                    a = a + Math.imul(p, fe) | 0,
                    n = n + Math.imul(u, se) | 0,
                    i = i + Math.imul(u, de) | 0,
                    i = i + Math.imul(h, se) | 0,
                    a = a + Math.imul(h, de) | 0;
                    var Se = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Se >>> 26) | 0,
                    Se &= 67108863,
                    n = Math.imul(z, D),
                    i = Math.imul(z, K),
                    i = i + Math.imul(N, D) | 0,
                    a = Math.imul(N, K),
                    n = n + Math.imul(L, Y) | 0,
                    i = i + Math.imul(L, W) | 0,
                    i = i + Math.imul(O, Y) | 0,
                    a = a + Math.imul(O, W) | 0,
                    n = n + Math.imul(I, V) | 0,
                    i = i + Math.imul(I, Z) | 0,
                    i = i + Math.imul(P, V) | 0,
                    a = a + Math.imul(P, Z) | 0,
                    n = n + Math.imul(R, X) | 0,
                    i = i + Math.imul(R, G) | 0,
                    i = i + Math.imul(x, X) | 0,
                    a = a + Math.imul(x, G) | 0,
                    n = n + Math.imul(S, Q) | 0,
                    i = i + Math.imul(S, ee) | 0,
                    i = i + Math.imul(A, Q) | 0,
                    a = a + Math.imul(A, ee) | 0,
                    n = n + Math.imul(w, re) | 0,
                    i = i + Math.imul(w, ne) | 0,
                    i = i + Math.imul(_, re) | 0,
                    a = a + Math.imul(_, ne) | 0,
                    n = n + Math.imul(g, ae) | 0,
                    i = i + Math.imul(g, fe) | 0,
                    i = i + Math.imul(y, ae) | 0,
                    a = a + Math.imul(y, fe) | 0,
                    n = n + Math.imul(b, se) | 0,
                    i = i + Math.imul(b, de) | 0,
                    i = i + Math.imul(p, se) | 0,
                    a = a + Math.imul(p, de) | 0,
                    n = n + Math.imul(u, ue) | 0,
                    i = i + Math.imul(u, he) | 0,
                    i = i + Math.imul(h, ue) | 0,
                    a = a + Math.imul(h, he) | 0;
                    var Ae = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Ae >>> 26) | 0,
                    Ae &= 67108863,
                    n = Math.imul(q, D),
                    i = Math.imul(q, K),
                    i = i + Math.imul(j, D) | 0,
                    a = Math.imul(j, K),
                    n = n + Math.imul(z, Y) | 0,
                    i = i + Math.imul(z, W) | 0,
                    i = i + Math.imul(N, Y) | 0,
                    a = a + Math.imul(N, W) | 0,
                    n = n + Math.imul(L, V) | 0,
                    i = i + Math.imul(L, Z) | 0,
                    i = i + Math.imul(O, V) | 0,
                    a = a + Math.imul(O, Z) | 0,
                    n = n + Math.imul(I, X) | 0,
                    i = i + Math.imul(I, G) | 0,
                    i = i + Math.imul(P, X) | 0,
                    a = a + Math.imul(P, G) | 0,
                    n = n + Math.imul(R, Q) | 0,
                    i = i + Math.imul(R, ee) | 0,
                    i = i + Math.imul(x, Q) | 0,
                    a = a + Math.imul(x, ee) | 0,
                    n = n + Math.imul(S, re) | 0,
                    i = i + Math.imul(S, ne) | 0,
                    i = i + Math.imul(A, re) | 0,
                    a = a + Math.imul(A, ne) | 0,
                    n = n + Math.imul(w, ae) | 0,
                    i = i + Math.imul(w, fe) | 0,
                    i = i + Math.imul(_, ae) | 0,
                    a = a + Math.imul(_, fe) | 0,
                    n = n + Math.imul(g, se) | 0,
                    i = i + Math.imul(g, de) | 0,
                    i = i + Math.imul(y, se) | 0,
                    a = a + Math.imul(y, de) | 0,
                    n = n + Math.imul(b, ue) | 0,
                    i = i + Math.imul(b, he) | 0,
                    i = i + Math.imul(p, ue) | 0,
                    a = a + Math.imul(p, he) | 0,
                    n = n + Math.imul(u, be) | 0,
                    i = i + Math.imul(u, pe) | 0,
                    i = i + Math.imul(h, be) | 0,
                    a = a + Math.imul(h, pe) | 0;
                    var Ee = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Ee >>> 26) | 0,
                    Ee &= 67108863,
                    n = Math.imul(q, Y),
                    i = Math.imul(q, W),
                    i = i + Math.imul(j, Y) | 0,
                    a = Math.imul(j, W),
                    n = n + Math.imul(z, V) | 0,
                    i = i + Math.imul(z, Z) | 0,
                    i = i + Math.imul(N, V) | 0,
                    a = a + Math.imul(N, Z) | 0,
                    n = n + Math.imul(L, X) | 0,
                    i = i + Math.imul(L, G) | 0,
                    i = i + Math.imul(O, X) | 0,
                    a = a + Math.imul(O, G) | 0,
                    n = n + Math.imul(I, Q) | 0,
                    i = i + Math.imul(I, ee) | 0,
                    i = i + Math.imul(P, Q) | 0,
                    a = a + Math.imul(P, ee) | 0,
                    n = n + Math.imul(R, re) | 0,
                    i = i + Math.imul(R, ne) | 0,
                    i = i + Math.imul(x, re) | 0,
                    a = a + Math.imul(x, ne) | 0,
                    n = n + Math.imul(S, ae) | 0,
                    i = i + Math.imul(S, fe) | 0,
                    i = i + Math.imul(A, ae) | 0,
                    a = a + Math.imul(A, fe) | 0,
                    n = n + Math.imul(w, se) | 0,
                    i = i + Math.imul(w, de) | 0,
                    i = i + Math.imul(_, se) | 0,
                    a = a + Math.imul(_, de) | 0,
                    n = n + Math.imul(g, ue) | 0,
                    i = i + Math.imul(g, he) | 0,
                    i = i + Math.imul(y, ue) | 0,
                    a = a + Math.imul(y, he) | 0,
                    n = n + Math.imul(b, be) | 0,
                    i = i + Math.imul(b, pe) | 0,
                    i = i + Math.imul(p, be) | 0,
                    a = a + Math.imul(p, pe) | 0;
                    var Re = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Re >>> 26) | 0,
                    Re &= 67108863,
                    n = Math.imul(q, V),
                    i = Math.imul(q, Z),
                    i = i + Math.imul(j, V) | 0,
                    a = Math.imul(j, Z),
                    n = n + Math.imul(z, X) | 0,
                    i = i + Math.imul(z, G) | 0,
                    i = i + Math.imul(N, X) | 0,
                    a = a + Math.imul(N, G) | 0,
                    n = n + Math.imul(L, Q) | 0,
                    i = i + Math.imul(L, ee) | 0,
                    i = i + Math.imul(O, Q) | 0,
                    a = a + Math.imul(O, ee) | 0,
                    n = n + Math.imul(I, re) | 0,
                    i = i + Math.imul(I, ne) | 0,
                    i = i + Math.imul(P, re) | 0,
                    a = a + Math.imul(P, ne) | 0,
                    n = n + Math.imul(R, ae) | 0,
                    i = i + Math.imul(R, fe) | 0,
                    i = i + Math.imul(x, ae) | 0,
                    a = a + Math.imul(x, fe) | 0,
                    n = n + Math.imul(S, se) | 0,
                    i = i + Math.imul(S, de) | 0,
                    i = i + Math.imul(A, se) | 0,
                    a = a + Math.imul(A, de) | 0,
                    n = n + Math.imul(w, ue) | 0,
                    i = i + Math.imul(w, he) | 0,
                    i = i + Math.imul(_, ue) | 0,
                    a = a + Math.imul(_, he) | 0,
                    n = n + Math.imul(g, be) | 0,
                    i = i + Math.imul(g, pe) | 0,
                    i = i + Math.imul(y, be) | 0,
                    a = a + Math.imul(y, pe) | 0;
                    var xe = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (xe >>> 26) | 0,
                    xe &= 67108863,
                    n = Math.imul(q, X),
                    i = Math.imul(q, G),
                    i = i + Math.imul(j, X) | 0,
                    a = Math.imul(j, G),
                    n = n + Math.imul(z, Q) | 0,
                    i = i + Math.imul(z, ee) | 0,
                    i = i + Math.imul(N, Q) | 0,
                    a = a + Math.imul(N, ee) | 0,
                    n = n + Math.imul(L, re) | 0,
                    i = i + Math.imul(L, ne) | 0,
                    i = i + Math.imul(O, re) | 0,
                    a = a + Math.imul(O, ne) | 0,
                    n = n + Math.imul(I, ae) | 0,
                    i = i + Math.imul(I, fe) | 0,
                    i = i + Math.imul(P, ae) | 0,
                    a = a + Math.imul(P, fe) | 0,
                    n = n + Math.imul(R, se) | 0,
                    i = i + Math.imul(R, de) | 0,
                    i = i + Math.imul(x, se) | 0,
                    a = a + Math.imul(x, de) | 0,
                    n = n + Math.imul(S, ue) | 0,
                    i = i + Math.imul(S, he) | 0,
                    i = i + Math.imul(A, ue) | 0,
                    a = a + Math.imul(A, he) | 0,
                    n = n + Math.imul(w, be) | 0,
                    i = i + Math.imul(w, pe) | 0,
                    i = i + Math.imul(_, be) | 0,
                    a = a + Math.imul(_, pe) | 0;
                    var ke = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (ke >>> 26) | 0,
                    ke &= 67108863,
                    n = Math.imul(q, Q),
                    i = Math.imul(q, ee),
                    i = i + Math.imul(j, Q) | 0,
                    a = Math.imul(j, ee),
                    n = n + Math.imul(z, re) | 0,
                    i = i + Math.imul(z, ne) | 0,
                    i = i + Math.imul(N, re) | 0,
                    a = a + Math.imul(N, ne) | 0,
                    n = n + Math.imul(L, ae) | 0,
                    i = i + Math.imul(L, fe) | 0,
                    i = i + Math.imul(O, ae) | 0,
                    a = a + Math.imul(O, fe) | 0,
                    n = n + Math.imul(I, se) | 0,
                    i = i + Math.imul(I, de) | 0,
                    i = i + Math.imul(P, se) | 0,
                    a = a + Math.imul(P, de) | 0,
                    n = n + Math.imul(R, ue) | 0,
                    i = i + Math.imul(R, he) | 0,
                    i = i + Math.imul(x, ue) | 0,
                    a = a + Math.imul(x, he) | 0,
                    n = n + Math.imul(S, be) | 0,
                    i = i + Math.imul(S, pe) | 0,
                    i = i + Math.imul(A, be) | 0,
                    a = a + Math.imul(A, pe) | 0;
                    var Ie = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Ie >>> 26) | 0,
                    Ie &= 67108863,
                    n = Math.imul(q, re),
                    i = Math.imul(q, ne),
                    i = i + Math.imul(j, re) | 0,
                    a = Math.imul(j, ne),
                    n = n + Math.imul(z, ae) | 0,
                    i = i + Math.imul(z, fe) | 0,
                    i = i + Math.imul(N, ae) | 0,
                    a = a + Math.imul(N, fe) | 0,
                    n = n + Math.imul(L, se) | 0,
                    i = i + Math.imul(L, de) | 0,
                    i = i + Math.imul(O, se) | 0,
                    a = a + Math.imul(O, de) | 0,
                    n = n + Math.imul(I, ue) | 0,
                    i = i + Math.imul(I, he) | 0,
                    i = i + Math.imul(P, ue) | 0,
                    a = a + Math.imul(P, he) | 0,
                    n = n + Math.imul(R, be) | 0,
                    i = i + Math.imul(R, pe) | 0,
                    i = i + Math.imul(x, be) | 0,
                    a = a + Math.imul(x, pe) | 0;
                    var Pe = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Pe >>> 26) | 0,
                    Pe &= 67108863,
                    n = Math.imul(q, ae),
                    i = Math.imul(q, fe),
                    i = i + Math.imul(j, ae) | 0,
                    a = Math.imul(j, fe),
                    n = n + Math.imul(z, se) | 0,
                    i = i + Math.imul(z, de) | 0,
                    i = i + Math.imul(N, se) | 0,
                    a = a + Math.imul(N, de) | 0,
                    n = n + Math.imul(L, ue) | 0,
                    i = i + Math.imul(L, he) | 0,
                    i = i + Math.imul(O, ue) | 0,
                    a = a + Math.imul(O, he) | 0,
                    n = n + Math.imul(I, be) | 0,
                    i = i + Math.imul(I, pe) | 0,
                    i = i + Math.imul(P, be) | 0,
                    a = a + Math.imul(P, pe) | 0;
                    var Te = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Te >>> 26) | 0,
                    Te &= 67108863,
                    n = Math.imul(q, se),
                    i = Math.imul(q, de),
                    i = i + Math.imul(j, se) | 0,
                    a = Math.imul(j, de),
                    n = n + Math.imul(z, ue) | 0,
                    i = i + Math.imul(z, he) | 0,
                    i = i + Math.imul(N, ue) | 0,
                    a = a + Math.imul(N, he) | 0,
                    n = n + Math.imul(L, be) | 0,
                    i = i + Math.imul(L, pe) | 0,
                    i = i + Math.imul(O, be) | 0,
                    a = a + Math.imul(O, pe) | 0;
                    var Le = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Le >>> 26) | 0,
                    Le &= 67108863,
                    n = Math.imul(q, ue),
                    i = Math.imul(q, he),
                    i = i + Math.imul(j, ue) | 0,
                    a = Math.imul(j, he),
                    n = n + Math.imul(z, be) | 0,
                    i = i + Math.imul(z, pe) | 0,
                    i = i + Math.imul(N, be) | 0,
                    a = a + Math.imul(N, pe) | 0;
                    var Oe = (d + n | 0) + ((8191 & i) << 13) | 0;
                    d = (a + (i >>> 13) | 0) + (Oe >>> 26) | 0,
                    Oe &= 67108863,
                    n = Math.imul(q, be),
                    i = Math.imul(q, pe),
                    i = i + Math.imul(j, be) | 0,
                    a = Math.imul(j, pe);
                    var Be = (d + n | 0) + ((8191 & i) << 13) | 0;
                    return d = (a + (i >>> 13) | 0) + (Be >>> 26) | 0,
                    Be &= 67108863,
                    s[0] = me,
                    s[1] = ge,
                    s[2] = ye,
                    s[3] = ve,
                    s[4] = we,
                    s[5] = _e,
                    s[6] = Me,
                    s[7] = Se,
                    s[8] = Ae,
                    s[9] = Ee,
                    s[10] = Re,
                    s[11] = xe,
                    s[12] = ke,
                    s[13] = Ie,
                    s[14] = Pe,
                    s[15] = Te,
                    s[16] = Le,
                    s[17] = Oe,
                    s[18] = Be,
                    0 !== d && (s[19] = d,
                    r.length++),
                    r
                };
                function m(e, t, r) {
                    r.negative = t.negative ^ e.negative,
                    r.length = e.length + t.length;
                    for (var n = 0, i = 0, a = 0; a < r.length - 1; a++) {
                        var f = i;
                        i = 0;
                        for (var o = 67108863 & n, s = Math.min(a, t.length - 1), d = Math.max(0, a - e.length + 1); d <= s; d++) {
                            var c = a - d
                              , u = 0 | e.words[c]
                              , h = 0 | t.words[d]
                              , l = u * h
                              , b = 67108863 & l;
                            f = f + (l / 67108864 | 0) | 0,
                            b = b + o | 0,
                            o = 67108863 & b,
                            f = f + (b >>> 26) | 0,
                            i += f >>> 26,
                            f &= 67108863
                        }
                        r.words[a] = o,
                        n = f,
                        f = i
                    }
                    return 0 !== n ? r.words[a] = n : r.length--,
                    r.strip()
                }
                function g(e, t, r) {
                    var n = new y;
                    return n.mulp(e, t, r)
                }
                function y(e, t) {
                    this.x = e,
                    this.y = t
                }
                Math.imul || (p = b),
                a.prototype.mulTo = function(e, t) {
                    var r, n = this.length + e.length;
                    return r = 10 === this.length && 10 === e.length ? p(this, e, t) : n < 63 ? b(this, e, t) : n < 1024 ? m(this, e, t) : g(this, e, t),
                    r
                }
                ,
                y.prototype.makeRBT = function(e) {
                    for (var t = new Array(e), r = a.prototype._countBits(e) - 1, n = 0; n < e; n++)
                        t[n] = this.revBin(n, r, e);
                    return t
                }
                ,
                y.prototype.revBin = function(e, t, r) {
                    if (0 === e || e === r - 1)
                        return e;
                    for (var n = 0, i = 0; i < t; i++)
                        n |= (1 & e) << t - i - 1,
                        e >>= 1;
                    return n
                }
                ,
                y.prototype.permute = function(e, t, r, n, i, a) {
                    for (var f = 0; f < a; f++)
                        n[f] = t[e[f]],
                        i[f] = r[e[f]]
                }
                ,
                y.prototype.transform = function(e, t, r, n, i, a) {
                    this.permute(a, e, t, r, n, i);
                    for (var f = 1; f < i; f <<= 1)
                        for (var o = f << 1, s = Math.cos(2 * Math.PI / o), d = Math.sin(2 * Math.PI / o), c = 0; c < i; c += o)
                            for (var u = s, h = d, l = 0; l < f; l++) {
                                var b = r[c + l]
                                  , p = n[c + l]
                                  , m = r[c + l + f]
                                  , g = n[c + l + f]
                                  , y = u * m - h * g;
                                g = u * g + h * m,
                                m = y,
                                r[c + l] = b + m,
                                n[c + l] = p + g,
                                r[c + l + f] = b - m,
                                n[c + l + f] = p - g,
                                l !== o && (y = s * u - d * h,
                                h = s * h + d * u,
                                u = y)
                            }
                }
                ,
                y.prototype.guessLen13b = function(e, t) {
                    var r = 1 | Math.max(t, e)
                      , n = 1 & r
                      , i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1)
                        i++;
                    return 1 << i + 1 + n
                }
                ,
                y.prototype.conjugate = function(e, t, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = e[n];
                            e[n] = e[r - n - 1],
                            e[r - n - 1] = i,
                            i = t[n],
                            t[n] = -t[r - n - 1],
                            t[r - n - 1] = -i
                        }
                }
                ,
                y.prototype.normalize13b = function(e, t) {
                    for (var r = 0, n = 0; n < t / 2; n++) {
                        var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                        e[n] = 67108863 & i,
                        r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return e
                }
                ,
                y.prototype.convert13b = function(e, t, r, i) {
                    for (var a = 0, f = 0; f < t; f++)
                        a += 0 | e[f],
                        r[2 * f] = 8191 & a,
                        a >>>= 13,
                        r[2 * f + 1] = 8191 & a,
                        a >>>= 13;
                    for (f = 2 * t; f < i; ++f)
                        r[f] = 0;
                    n(0 === a),
                    n(0 === (-8192 & a))
                }
                ,
                y.prototype.stub = function(e) {
                    for (var t = new Array(e), r = 0; r < e; r++)
                        t[r] = 0;
                    return t
                }
                ,
                y.prototype.mulp = function(e, t, r) {
                    var n = 2 * this.guessLen13b(e.length, t.length)
                      , i = this.makeRBT(n)
                      , a = this.stub(n)
                      , f = new Array(n)
                      , o = new Array(n)
                      , s = new Array(n)
                      , d = new Array(n)
                      , c = new Array(n)
                      , u = new Array(n)
                      , h = r.words;
                    h.length = n,
                    this.convert13b(e.words, e.length, f, n),
                    this.convert13b(t.words, t.length, d, n),
                    this.transform(f, a, o, s, n, i),
                    this.transform(d, a, c, u, n, i);
                    for (var l = 0; l < n; l++) {
                        var b = o[l] * c[l] - s[l] * u[l];
                        s[l] = o[l] * u[l] + s[l] * c[l],
                        o[l] = b
                    }
                    return this.conjugate(o, s, n),
                    this.transform(o, s, h, a, n, i),
                    this.conjugate(h, a, n),
                    this.normalize13b(h, n),
                    r.negative = e.negative ^ t.negative,
                    r.length = e.length + t.length,
                    r.strip()
                }
                ,
                a.prototype.mul = function(e) {
                    var t = new a(null);
                    return t.words = new Array(this.length + e.length),
                    this.mulTo(e, t)
                }
                ,
                a.prototype.mulf = function(e) {
                    var t = new a(null);
                    return t.words = new Array(this.length + e.length),
                    g(this, e, t)
                }
                ,
                a.prototype.imul = function(e) {
                    return this.clone().mulTo(e, this)
                }
                ,
                a.prototype.imuln = function(e) {
                    n("number" === typeof e),
                    n(e < 67108864);
                    for (var t = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * e
                          , a = (67108863 & i) + (67108863 & t);
                        t >>= 26,
                        t += i / 67108864 | 0,
                        t += a >>> 26,
                        this.words[r] = 67108863 & a
                    }
                    return 0 !== t && (this.words[r] = t,
                    this.length++),
                    this
                }
                ,
                a.prototype.muln = function(e) {
                    return this.clone().imuln(e)
                }
                ,
                a.prototype.sqr = function() {
                    return this.mul(this)
                }
                ,
                a.prototype.isqr = function() {
                    return this.imul(this.clone())
                }
                ,
                a.prototype.pow = function(e) {
                    var t = l(e);
                    if (0 === t.length)
                        return new a(1);
                    for (var r = this, n = 0; n < t.length; n++,
                    r = r.sqr())
                        if (0 !== t[n])
                            break;
                    if (++n < t.length)
                        for (var i = r.sqr(); n < t.length; n++,
                        i = i.sqr())
                            0 !== t[n] && (r = r.mul(i));
                    return r
                }
                ,
                a.prototype.iushln = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t, r = e % 26, i = (e - r) / 26, a = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var f = 0;
                        for (t = 0; t < this.length; t++) {
                            var o = this.words[t] & a
                              , s = (0 | this.words[t]) - o << r;
                            this.words[t] = s | f,
                            f = o >>> 26 - r
                        }
                        f && (this.words[t] = f,
                        this.length++)
                    }
                    if (0 !== i) {
                        for (t = this.length - 1; t >= 0; t--)
                            this.words[t + i] = this.words[t];
                        for (t = 0; t < i; t++)
                            this.words[t] = 0;
                        this.length += i
                    }
                    return this.strip()
                }
                ,
                a.prototype.ishln = function(e) {
                    return n(0 === this.negative),
                    this.iushln(e)
                }
                ,
                a.prototype.iushrn = function(e, t, r) {
                    var i;
                    n("number" === typeof e && e >= 0),
                    i = t ? (t - t % 26) / 26 : 0;
                    var a = e % 26
                      , f = Math.min((e - a) / 26, this.length)
                      , o = 67108863 ^ 67108863 >>> a << a
                      , s = r;
                    if (i -= f,
                    i = Math.max(0, i),
                    s) {
                        for (var d = 0; d < f; d++)
                            s.words[d] = this.words[d];
                        s.length = f
                    }
                    if (0 === f)
                        ;
                    else if (this.length > f)
                        for (this.length -= f,
                        d = 0; d < this.length; d++)
                            this.words[d] = this.words[d + f];
                    else
                        this.words[0] = 0,
                        this.length = 1;
                    var c = 0;
                    for (d = this.length - 1; d >= 0 && (0 !== c || d >= i); d--) {
                        var u = 0 | this.words[d];
                        this.words[d] = c << 26 - a | u >>> a,
                        c = u & o
                    }
                    return s && 0 !== c && (s.words[s.length++] = c),
                    0 === this.length && (this.words[0] = 0,
                    this.length = 1),
                    this.strip()
                }
                ,
                a.prototype.ishrn = function(e, t, r) {
                    return n(0 === this.negative),
                    this.iushrn(e, t, r)
                }
                ,
                a.prototype.shln = function(e) {
                    return this.clone().ishln(e)
                }
                ,
                a.prototype.ushln = function(e) {
                    return this.clone().iushln(e)
                }
                ,
                a.prototype.shrn = function(e) {
                    return this.clone().ishrn(e)
                }
                ,
                a.prototype.ushrn = function(e) {
                    return this.clone().iushrn(e)
                }
                ,
                a.prototype.testn = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t = e % 26
                      , r = (e - t) / 26
                      , i = 1 << t;
                    if (this.length <= r)
                        return !1;
                    var a = this.words[r];
                    return !!(a & i)
                }
                ,
                a.prototype.imaskn = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t = e % 26
                      , r = (e - t) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"),
                    this.length <= r)
                        return this;
                    if (0 !== t && r++,
                    this.length = Math.min(r, this.length),
                    0 !== t) {
                        var i = 67108863 ^ 67108863 >>> t << t;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }
                ,
                a.prototype.maskn = function(e) {
                    return this.clone().imaskn(e)
                }
                ,
                a.prototype.iaddn = function(e) {
                    return n("number" === typeof e),
                    n(e < 67108864),
                    e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]),
                    this.negative = 0,
                    this) : (this.negative = 0,
                    this.isubn(e),
                    this.negative = 1,
                    this) : this._iaddn(e)
                }
                ,
                a.prototype._iaddn = function(e) {
                    this.words[0] += e;
                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                        this.words[t] -= 67108864,
                        t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                    return this.length = Math.max(this.length, t + 1),
                    this
                }
                ,
                a.prototype.isubn = function(e) {
                    if (n("number" === typeof e),
                    n(e < 67108864),
                    e < 0)
                        return this.iaddn(-e);
                    if (0 !== this.negative)
                        return this.negative = 0,
                        this.iaddn(e),
                        this.negative = 1,
                        this;
                    if (this.words[0] -= e,
                    1 === this.length && this.words[0] < 0)
                        this.words[0] = -this.words[0],
                        this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++)
                            this.words[t] += 67108864,
                            this.words[t + 1] -= 1;
                    return this.strip()
                }
                ,
                a.prototype.addn = function(e) {
                    return this.clone().iaddn(e)
                }
                ,
                a.prototype.subn = function(e) {
                    return this.clone().isubn(e)
                }
                ,
                a.prototype.iabs = function() {
                    return this.negative = 0,
                    this
                }
                ,
                a.prototype.abs = function() {
                    return this.clone().iabs()
                }
                ,
                a.prototype._ishlnsubmul = function(e, t, r) {
                    var i, a, f = e.length + r;
                    this._expand(f);
                    var o = 0;
                    for (i = 0; i < e.length; i++) {
                        a = (0 | this.words[i + r]) + o;
                        var s = (0 | e.words[i]) * t;
                        a -= 67108863 & s,
                        o = (a >> 26) - (s / 67108864 | 0),
                        this.words[i + r] = 67108863 & a
                    }
                    for (; i < this.length - r; i++)
                        a = (0 | this.words[i + r]) + o,
                        o = a >> 26,
                        this.words[i + r] = 67108863 & a;
                    if (0 === o)
                        return this.strip();
                    for (n(-1 === o),
                    o = 0,
                    i = 0; i < this.length; i++)
                        a = -(0 | this.words[i]) + o,
                        o = a >> 26,
                        this.words[i] = 67108863 & a;
                    return this.negative = 1,
                    this.strip()
                }
                ,
                a.prototype._wordDiv = function(e, t) {
                    var r = this.length - e.length
                      , n = this.clone()
                      , i = e
                      , f = 0 | i.words[i.length - 1]
                      , o = this._countBits(f);
                    r = 26 - o,
                    0 !== r && (i = i.ushln(r),
                    n.iushln(r),
                    f = 0 | i.words[i.length - 1]);
                    var s, d = n.length - i.length;
                    if ("mod" !== t) {
                        s = new a(null),
                        s.length = d + 1,
                        s.words = new Array(s.length);
                        for (var c = 0; c < s.length; c++)
                            s.words[c] = 0
                    }
                    var u = n.clone()._ishlnsubmul(i, 1, d);
                    0 === u.negative && (n = u,
                    s && (s.words[d] = 1));
                    for (var h = d - 1; h >= 0; h--) {
                        var l = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                        l = Math.min(l / f | 0, 67108863),
                        n._ishlnsubmul(i, l, h);
                        while (0 !== n.negative)
                            l--,
                            n.negative = 0,
                            n._ishlnsubmul(i, 1, h),
                            n.isZero() || (n.negative ^= 1);
                        s && (s.words[h] = l)
                    }
                    return s && s.strip(),
                    n.strip(),
                    "div" !== t && 0 !== r && n.iushrn(r),
                    {
                        div: s || null,
                        mod: n
                    }
                }
                ,
                a.prototype.divmod = function(e, t, r) {
                    return n(!e.isZero()),
                    this.isZero() ? {
                        div: new a(0),
                        mod: new a(0)
                    } : 0 !== this.negative && 0 === e.negative ? (o = this.neg().divmod(e, t),
                    "mod" !== t && (i = o.div.neg()),
                    "div" !== t && (f = o.mod.neg(),
                    r && 0 !== f.negative && f.iadd(e)),
                    {
                        div: i,
                        mod: f
                    }) : 0 === this.negative && 0 !== e.negative ? (o = this.divmod(e.neg(), t),
                    "mod" !== t && (i = o.div.neg()),
                    {
                        div: i,
                        mod: o.mod
                    }) : 0 !== (this.negative & e.negative) ? (o = this.neg().divmod(e.neg(), t),
                    "div" !== t && (f = o.mod.neg(),
                    r && 0 !== f.negative && f.isub(e)),
                    {
                        div: o.div,
                        mod: f
                    }) : e.length > this.length || this.cmp(e) < 0 ? {
                        div: new a(0),
                        mod: this
                    } : 1 === e.length ? "div" === t ? {
                        div: this.divn(e.words[0]),
                        mod: null
                    } : "mod" === t ? {
                        div: null,
                        mod: new a(this.modn(e.words[0]))
                    } : {
                        div: this.divn(e.words[0]),
                        mod: new a(this.modn(e.words[0]))
                    } : this._wordDiv(e, t);
                    var i, f, o
                }
                ,
                a.prototype.div = function(e) {
                    return this.divmod(e, "div", !1).div
                }
                ,
                a.prototype.mod = function(e) {
                    return this.divmod(e, "mod", !1).mod
                }
                ,
                a.prototype.umod = function(e) {
                    return this.divmod(e, "mod", !0).mod
                }
                ,
                a.prototype.divRound = function(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero())
                        return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod
                      , n = e.ushrn(1)
                      , i = e.andln(1)
                      , a = r.cmp(n);
                    return a < 0 || 1 === i && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                }
                ,
                a.prototype.modn = function(e) {
                    n(e <= 67108863);
                    for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--)
                        r = (t * r + (0 | this.words[i])) % e;
                    return r
                }
                ,
                a.prototype.idivn = function(e) {
                    n(e <= 67108863);
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * t;
                        this.words[r] = i / e | 0,
                        t = i % e
                    }
                    return this.strip()
                }
                ,
                a.prototype.divn = function(e) {
                    return this.clone().idivn(e)
                }
                ,
                a.prototype.egcd = function(e) {
                    n(0 === e.negative),
                    n(!e.isZero());
                    var t = this
                      , r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    var i = new a(1)
                      , f = new a(0)
                      , o = new a(0)
                      , s = new a(1)
                      , d = 0;
                    while (t.isEven() && r.isEven())
                        t.iushrn(1),
                        r.iushrn(1),
                        ++d;
                    var c = r.clone()
                      , u = t.clone();
                    while (!t.isZero()) {
                        for (var h = 0, l = 1; 0 === (t.words[0] & l) && h < 26; ++h,
                        l <<= 1)
                            ;
                        if (h > 0) {
                            t.iushrn(h);
                            while (h-- > 0)
                                (i.isOdd() || f.isOdd()) && (i.iadd(c),
                                f.isub(u)),
                                i.iushrn(1),
                                f.iushrn(1)
                        }
                        for (var b = 0, p = 1; 0 === (r.words[0] & p) && b < 26; ++b,
                        p <<= 1)
                            ;
                        if (b > 0) {
                            r.iushrn(b);
                            while (b-- > 0)
                                (o.isOdd() || s.isOdd()) && (o.iadd(c),
                                s.isub(u)),
                                o.iushrn(1),
                                s.iushrn(1)
                        }
                        t.cmp(r) >= 0 ? (t.isub(r),
                        i.isub(o),
                        f.isub(s)) : (r.isub(t),
                        o.isub(i),
                        s.isub(f))
                    }
                    return {
                        a: o,
                        b: s,
                        gcd: r.iushln(d)
                    }
                }
                ,
                a.prototype._invmp = function(e) {
                    n(0 === e.negative),
                    n(!e.isZero());
                    var t = this
                      , r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    var i, f = new a(1), o = new a(0), s = r.clone();
                    while (t.cmpn(1) > 0 && r.cmpn(1) > 0) {
                        for (var d = 0, c = 1; 0 === (t.words[0] & c) && d < 26; ++d,
                        c <<= 1)
                            ;
                        if (d > 0) {
                            t.iushrn(d);
                            while (d-- > 0)
                                f.isOdd() && f.iadd(s),
                                f.iushrn(1)
                        }
                        for (var u = 0, h = 1; 0 === (r.words[0] & h) && u < 26; ++u,
                        h <<= 1)
                            ;
                        if (u > 0) {
                            r.iushrn(u);
                            while (u-- > 0)
                                o.isOdd() && o.iadd(s),
                                o.iushrn(1)
                        }
                        t.cmp(r) >= 0 ? (t.isub(r),
                        f.isub(o)) : (r.isub(t),
                        o.isub(f))
                    }
                    return i = 0 === t.cmpn(1) ? f : o,
                    i.cmpn(0) < 0 && i.iadd(e),
                    i
                }
                ,
                a.prototype.gcd = function(e) {
                    if (this.isZero())
                        return e.abs();
                    if (e.isZero())
                        return this.abs();
                    var t = this.clone()
                      , r = e.clone();
                    t.negative = 0,
                    r.negative = 0;
                    for (var n = 0; t.isEven() && r.isEven(); n++)
                        t.iushrn(1),
                        r.iushrn(1);
                    do {
                        while (t.isEven())
                            t.iushrn(1);
                        while (r.isEven())
                            r.iushrn(1);
                        var i = t.cmp(r);
                        if (i < 0) {
                            var a = t;
                            t = r,
                            r = a
                        } else if (0 === i || 0 === r.cmpn(1))
                            break;
                        t.isub(r)
                    } while (1);
                    return r.iushln(n)
                }
                ,
                a.prototype.invm = function(e) {
                    return this.egcd(e).a.umod(e)
                }
                ,
                a.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }
                ,
                a.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }
                ,
                a.prototype.andln = function(e) {
                    return this.words[0] & e
                }
                ,
                a.prototype.bincn = function(e) {
                    n("number" === typeof e);
                    var t = e % 26
                      , r = (e - t) / 26
                      , i = 1 << t;
                    if (this.length <= r)
                        return this._expand(r + 1),
                        this.words[r] |= i,
                        this;
                    for (var a = i, f = r; 0 !== a && f < this.length; f++) {
                        var o = 0 | this.words[f];
                        o += a,
                        a = o >>> 26,
                        o &= 67108863,
                        this.words[f] = o
                    }
                    return 0 !== a && (this.words[f] = a,
                    this.length++),
                    this
                }
                ,
                a.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }
                ,
                a.prototype.cmpn = function(e) {
                    var t, r = e < 0;
                    if (0 !== this.negative && !r)
                        return -1;
                    if (0 === this.negative && r)
                        return 1;
                    if (this.strip(),
                    this.length > 1)
                        t = 1;
                    else {
                        r && (e = -e),
                        n(e <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        t = i === e ? 0 : i < e ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -t : t
                }
                ,
                a.prototype.cmp = function(e) {
                    if (0 !== this.negative && 0 === e.negative)
                        return -1;
                    if (0 === this.negative && 0 !== e.negative)
                        return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t
                }
                ,
                a.prototype.ucmp = function(e) {
                    if (this.length > e.length)
                        return 1;
                    if (this.length < e.length)
                        return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r]
                          , i = 0 | e.words[r];
                        if (n !== i) {
                            n < i ? t = -1 : n > i && (t = 1);
                            break
                        }
                    }
                    return t
                }
                ,
                a.prototype.gtn = function(e) {
                    return 1 === this.cmpn(e)
                }
                ,
                a.prototype.gt = function(e) {
                    return 1 === this.cmp(e)
                }
                ,
                a.prototype.gten = function(e) {
                    return this.cmpn(e) >= 0
                }
                ,
                a.prototype.gte = function(e) {
                    return this.cmp(e) >= 0
                }
                ,
                a.prototype.ltn = function(e) {
                    return -1 === this.cmpn(e)
                }
                ,
                a.prototype.lt = function(e) {
                    return -1 === this.cmp(e)
                }
                ,
                a.prototype.lten = function(e) {
                    return this.cmpn(e) <= 0
                }
                ,
                a.prototype.lte = function(e) {
                    return this.cmp(e) <= 0
                }
                ,
                a.prototype.eqn = function(e) {
                    return 0 === this.cmpn(e)
                }
                ,
                a.prototype.eq = function(e) {
                    return 0 === this.cmp(e)
                }
                ,
                a.red = function(e) {
                    return new E(e)
                }
                ,
                a.prototype.toRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"),
                    n(0 === this.negative, "red works only with positives"),
                    e.convertTo(this)._forceRed(e)
                }
                ,
                a.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"),
                    this.red.convertFrom(this)
                }
                ,
                a.prototype._forceRed = function(e) {
                    return this.red = e,
                    this
                }
                ,
                a.prototype.forceRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"),
                    this._forceRed(e)
                }
                ,
                a.prototype.redAdd = function(e) {
                    return n(this.red, "redAdd works only with red numbers"),
                    this.red.add(this, e)
                }
                ,
                a.prototype.redIAdd = function(e) {
                    return n(this.red, "redIAdd works only with red numbers"),
                    this.red.iadd(this, e)
                }
                ,
                a.prototype.redSub = function(e) {
                    return n(this.red, "redSub works only with red numbers"),
                    this.red.sub(this, e)
                }
                ,
                a.prototype.redISub = function(e) {
                    return n(this.red, "redISub works only with red numbers"),
                    this.red.isub(this, e)
                }
                ,
                a.prototype.redShl = function(e) {
                    return n(this.red, "redShl works only with red numbers"),
                    this.red.shl(this, e)
                }
                ,
                a.prototype.redMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"),
                    this.red._verify2(this, e),
                    this.red.mul(this, e)
                }
                ,
                a.prototype.redIMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"),
                    this.red._verify2(this, e),
                    this.red.imul(this, e)
                }
                ,
                a.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"),
                    this.red._verify1(this),
                    this.red.sqr(this)
                }
                ,
                a.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"),
                    this.red._verify1(this),
                    this.red.isqr(this)
                }
                ,
                a.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"),
                    this.red._verify1(this),
                    this.red.sqrt(this)
                }
                ,
                a.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"),
                    this.red._verify1(this),
                    this.red.invm(this)
                }
                ,
                a.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"),
                    this.red._verify1(this),
                    this.red.neg(this)
                }
                ,
                a.prototype.redPow = function(e) {
                    return n(this.red && !e.red, "redPow(normalNum)"),
                    this.red._verify1(this),
                    this.red.pow(this, e)
                }
                ;
                var v = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };
                function w(e, t) {
                    this.name = e,
                    this.p = new a(t,16),
                    this.n = this.p.bitLength(),
                    this.k = new a(1).iushln(this.n).isub(this.p),
                    this.tmp = this._tmp()
                }
                function _() {
                    w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }
                function M() {
                    w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }
                function S() {
                    w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }
                function A() {
                    w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }
                function E(e) {
                    if ("string" === typeof e) {
                        var t = a._prime(e);
                        this.m = t.p,
                        this.prime = t
                    } else
                        n(e.gtn(1), "modulus must be greater than 1"),
                        this.m = e,
                        this.prime = null
                }
                function R(e) {
                    E.call(this, e),
                    this.shift = this.m.bitLength(),
                    this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26),
                    this.r = new a(1).iushln(this.shift),
                    this.r2 = this.imod(this.r.sqr()),
                    this.rinv = this.r._invmp(this.m),
                    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                    this.minv = this.minv.umod(this.r),
                    this.minv = this.r.sub(this.minv)
                }
                w.prototype._tmp = function() {
                    var e = new a(null);
                    return e.words = new Array(Math.ceil(this.n / 13)),
                    e
                }
                ,
                w.prototype.ireduce = function(e) {
                    var t, r = e;
                    do {
                        this.split(r, this.tmp),
                        r = this.imulK(r),
                        r = r.iadd(this.tmp),
                        t = r.bitLength()
                    } while (t > this.n);
                    var n = t < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0,
                    r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(),
                    r
                }
                ,
                w.prototype.split = function(e, t) {
                    e.iushrn(this.n, 0, t)
                }
                ,
                w.prototype.imulK = function(e) {
                    return e.imul(this.k)
                }
                ,
                i(_, w),
                _.prototype.split = function(e, t) {
                    for (var r = 4194303, n = Math.min(e.length, 9), i = 0; i < n; i++)
                        t.words[i] = e.words[i];
                    if (t.length = n,
                    e.length <= 9)
                        return e.words[0] = 0,
                        void (e.length = 1);
                    var a = e.words[9];
                    for (t.words[t.length++] = a & r,
                    i = 10; i < e.length; i++) {
                        var f = 0 | e.words[i];
                        e.words[i - 10] = (f & r) << 4 | a >>> 22,
                        a = f
                    }
                    a >>>= 22,
                    e.words[i - 10] = a,
                    0 === a && e.length > 10 ? e.length -= 10 : e.length -= 9
                }
                ,
                _.prototype.imulK = function(e) {
                    e.words[e.length] = 0,
                    e.words[e.length + 1] = 0,
                    e.length += 2;
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 0 | e.words[r];
                        t += 977 * n,
                        e.words[r] = 67108863 & t,
                        t = 64 * n + (t / 67108864 | 0)
                    }
                    return 0 === e.words[e.length - 1] && (e.length--,
                    0 === e.words[e.length - 1] && e.length--),
                    e
                }
                ,
                i(M, w),
                i(S, w),
                i(A, w),
                A.prototype.imulK = function(e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 19 * (0 | e.words[r]) + t
                          , i = 67108863 & n;
                        n >>>= 26,
                        e.words[r] = i,
                        t = n
                    }
                    return 0 !== t && (e.words[e.length++] = t),
                    e
                }
                ,
                a._prime = function(e) {
                    if (v[e])
                        return v[e];
                    var t;
                    if ("k256" === e)
                        t = new _;
                    else if ("p224" === e)
                        t = new M;
                    else if ("p192" === e)
                        t = new S;
                    else {
                        if ("p25519" !== e)
                            throw new Error("Unknown prime " + e);
                        t = new A
                    }
                    return v[e] = t,
                    t
                }
                ,
                E.prototype._verify1 = function(e) {
                    n(0 === e.negative, "red works only with positives"),
                    n(e.red, "red works only with red numbers")
                }
                ,
                E.prototype._verify2 = function(e, t) {
                    n(0 === (e.negative | t.negative), "red works only with positives"),
                    n(e.red && e.red === t.red, "red works only with red numbers")
                }
                ,
                E.prototype.imod = function(e) {
                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                }
                ,
                E.prototype.neg = function(e) {
                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                }
                ,
                E.prototype.add = function(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m),
                    r._forceRed(this)
                }
                ,
                E.prototype.iadd = function(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m),
                    r
                }
                ,
                E.prototype.sub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m),
                    r._forceRed(this)
                }
                ,
                E.prototype.isub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m),
                    r
                }
                ,
                E.prototype.shl = function(e, t) {
                    return this._verify1(e),
                    this.imod(e.ushln(t))
                }
                ,
                E.prototype.imul = function(e, t) {
                    return this._verify2(e, t),
                    this.imod(e.imul(t))
                }
                ,
                E.prototype.mul = function(e, t) {
                    return this._verify2(e, t),
                    this.imod(e.mul(t))
                }
                ,
                E.prototype.isqr = function(e) {
                    return this.imul(e, e.clone())
                }
                ,
                E.prototype.sqr = function(e) {
                    return this.mul(e, e)
                }
                ,
                E.prototype.sqrt = function(e) {
                    if (e.isZero())
                        return e.clone();
                    var t = this.m.andln(3);
                    if (n(t % 2 === 1),
                    3 === t) {
                        var r = this.m.add(new a(1)).iushrn(2);
                        return this.pow(e, r)
                    }
                    var i = this.m.subn(1)
                      , f = 0;
                    while (!i.isZero() && 0 === i.andln(1))
                        f++,
                        i.iushrn(1);
                    n(!i.isZero());
                    var o = new a(1).toRed(this)
                      , s = o.redNeg()
                      , d = this.m.subn(1).iushrn(1)
                      , c = this.m.bitLength();
                    c = new a(2 * c * c).toRed(this);
                    while (0 !== this.pow(c, d).cmp(s))
                        c.redIAdd(s);
                    var u = this.pow(c, i)
                      , h = this.pow(e, i.addn(1).iushrn(1))
                      , l = this.pow(e, i)
                      , b = f;
                    while (0 !== l.cmp(o)) {
                        for (var p = l, m = 0; 0 !== p.cmp(o); m++)
                            p = p.redSqr();
                        n(m < b);
                        var g = this.pow(u, new a(1).iushln(b - m - 1));
                        h = h.redMul(g),
                        u = g.redSqr(),
                        l = l.redMul(u),
                        b = m
                    }
                    return h
                }
                ,
                E.prototype.invm = function(e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative ? (t.negative = 0,
                    this.imod(t).redNeg()) : this.imod(t)
                }
                ,
                E.prototype.pow = function(e, t) {
                    if (t.isZero())
                        return new a(1).toRed(this);
                    if (0 === t.cmpn(1))
                        return e.clone();
                    var r = 4
                      , n = new Array(1 << r);
                    n[0] = new a(1).toRed(this),
                    n[1] = e;
                    for (var i = 2; i < n.length; i++)
                        n[i] = this.mul(n[i - 1], e);
                    var f = n[0]
                      , o = 0
                      , s = 0
                      , d = t.bitLength() % 26;
                    for (0 === d && (d = 26),
                    i = t.length - 1; i >= 0; i--) {
                        for (var c = t.words[i], u = d - 1; u >= 0; u--) {
                            var h = c >> u & 1;
                            f !== n[0] && (f = this.sqr(f)),
                            0 !== h || 0 !== o ? (o <<= 1,
                            o |= h,
                            s++,
                            (s === r || 0 === i && 0 === u) && (f = this.mul(f, n[o]),
                            s = 0,
                            o = 0)) : s = 0
                        }
                        d = 26
                    }
                    return f
                }
                ,
                E.prototype.convertTo = function(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t
                }
                ,
                E.prototype.convertFrom = function(e) {
                    var t = e.clone();
                    return t.red = null,
                    t
                }
                ,
                a.mont = function(e) {
                    return new R(e)
                }
                ,
                i(R, E),
                R.prototype.convertTo = function(e) {
                    return this.imod(e.ushln(this.shift))
                }
                ,
                R.prototype.convertFrom = function(e) {
                    var t = this.imod(e.mul(this.rinv));
                    return t.red = null,
                    t
                }
                ,
                R.prototype.imul = function(e, t) {
                    if (e.isZero() || t.isZero())
                        return e.words[0] = 0,
                        e.length = 1,
                        e;
                    var r = e.imul(t)
                      , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                      , i = r.isub(n).iushrn(this.shift)
                      , a = i;
                    return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                    a._forceRed(this)
                }
                ,
                R.prototype.mul = function(e, t) {
                    if (e.isZero() || t.isZero())
                        return new a(0)._forceRed(this);
                    var r = e.mul(t)
                      , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                      , i = r.isub(n).iushrn(this.shift)
                      , f = i;
                    return i.cmp(this.m) >= 0 ? f = i.isub(this.m) : i.cmpn(0) < 0 && (f = i.iadd(this.m)),
                    f._forceRed(this)
                }
                ,
                R.prototype.invm = function(e) {
                    var t = this.imod(e._invmp(this.m).mul(this.r2));
                    return t._forceRed(this)
                }
            }
            )(e, this)
        }
        ).call(this, r("62e4")(e))
    },
    8707: function(e, t, r) {
        var n = r("b639")
          , i = n.Buffer;
        function a(e, t) {
            for (var r in e)
                t[r] = e[r]
        }
        function f(e, t, r) {
            return i(e, t, r)
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (a(n, t),
        t.Buffer = f),
        a(i, f),
        f.from = function(e, t, r) {
            if ("number" === typeof e)
                throw new TypeError("Argument must not be a number");
            return i(e, t, r)
        }
        ,
        f.alloc = function(e, t, r) {
            if ("number" !== typeof e)
                throw new TypeError("Argument must be a number");
            var n = i(e);
            return void 0 !== t ? "string" === typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
            n
        }
        ,
        f.allocUnsafe = function(e) {
            if ("number" !== typeof e)
                throw new TypeError("Argument must be a number");
            return i(e)
        }
        ,
        f.allocUnsafeSlow = function(e) {
            if ("number" !== typeof e)
                throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e)
        }
    },
    "88a2": function(e, t, r) {
        "use strict";
        (function(t) {
            var n = Object.keys || function(e) {
                var t = [];
                for (var r in e)
                    t.push(r);
                return t
            }
            ;
            e.exports = d;
            var i = r("68a0")
              , a = r("9bdc");
            r("3fb5")(d, i);
            for (var f = n(a.prototype), o = 0; o < f.length; o++) {
                var s = f[o];
                d.prototype[s] || (d.prototype[s] = a.prototype[s])
            }
            function d(e) {
                if (!(this instanceof d))
                    return new d(e);
                i.call(this, e),
                a.call(this, e),
                this.allowHalfOpen = !0,
                e && (!1 === e.readable && (this.readable = !1),
                !1 === e.writable && (this.writable = !1),
                !1 === e.allowHalfOpen && (this.allowHalfOpen = !1,
                this.once("end", c)))
            }
            function c() {
                this._writableState.ended || t.nextTick(u, this)
            }
            function u(e) {
                e.end()
            }
            Object.defineProperty(d.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }),
            Object.defineProperty(d.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }),
            Object.defineProperty(d.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }),
            Object.defineProperty(d.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                },
                set: function(e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                    this._writableState.destroyed = e)
                }
            })
        }
        ).call(this, r("4362"))
    },
    "8b95": function(e, t, r) {
        "use strict";
        var n = r("c3c0")
          , i = r("b525");
        function a() {
            if (!(this instanceof a))
                return new a;
            i.call(this),
            this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
        }
        n.inherits(a, i),
        e.exports = a,
        a.blockSize = 1024,
        a.outSize = 384,
        a.hmacStrength = 192,
        a.padLength = 128,
        a.prototype._digest = function(e) {
            return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
        }
    },
    9054: function(e, t, r) {
        "use strict";
        function n(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e.__proto__ = t
        }
        var i = {};
        function a(e, t, r) {
            function a(e, r, n) {
                return "string" === typeof t ? t : t(e, r, n)
            }
            r || (r = Error);
            var f = function(e) {
                function t(t, r, n) {
                    return e.call(this, a(t, r, n)) || this
                }
                return n(t, e),
                t
            }(r);
            f.prototype.name = r.name,
            f.prototype.code = e,
            i[e] = f
        }
        function f(e, t) {
            if (Array.isArray(e)) {
                var r = e.length;
                return e = e.map((function(e) {
                    return String(e)
                }
                )),
                r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            return "of ".concat(t, " ").concat(String(e))
        }
        function o(e, t, r) {
            return e.substr(!r || r < 0 ? 0 : +r, t.length) === t
        }
        function s(e, t, r) {
            return (void 0 === r || r > e.length) && (r = e.length),
            e.substring(r - t.length, r) === t
        }
        function d(e, t, r) {
            return "number" !== typeof r && (r = 0),
            !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
        }
        a("ERR_INVALID_OPT_VALUE", (function(e, t) {
            return 'The value "' + t + '" is invalid for option "' + e + '"'
        }
        ), TypeError),
        a("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
            var n, i;
            if ("string" === typeof t && o(t, "not ") ? (n = "must not be",
            t = t.replace(/^not /, "")) : n = "must be",
            s(e, " argument"))
                i = "The ".concat(e, " ").concat(n, " ").concat(f(t, "type"));
            else {
                var a = d(e, ".") ? "property" : "argument";
                i = 'The "'.concat(e, '" ').concat(a, " ").concat(n, " ").concat(f(t, "type"))
            }
            return i += ". Received type ".concat(typeof r),
            i
        }
        ), TypeError),
        a("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        a("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
            return "The " + e + " method is not implemented"
        }
        )),
        a("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        a("ERR_STREAM_DESTROYED", (function(e) {
            return "Cannot call " + e + " after a stream was destroyed"
        }
        )),
        a("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        a("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        a("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        a("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
        a("ERR_UNKNOWN_ENCODING", (function(e) {
            return "Unknown encoding: " + e
        }
        ), TypeError),
        a("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
        e.exports.codes = i
    },
    9152: function(e, t) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        t.read = function(e, t, r, n, i) {
            var a, f, o = 8 * i - n - 1, s = (1 << o) - 1, d = s >> 1, c = -7, u = r ? i - 1 : 0, h = r ? -1 : 1, l = e[t + u];
            for (u += h,
            a = l & (1 << -c) - 1,
            l >>= -c,
            c += o; c > 0; a = 256 * a + e[t + u],
            u += h,
            c -= 8)
                ;
            for (f = a & (1 << -c) - 1,
            a >>= -c,
            c += n; c > 0; f = 256 * f + e[t + u],
            u += h,
            c -= 8)
                ;
            if (0 === a)
                a = 1 - d;
            else {
                if (a === s)
                    return f ? NaN : 1 / 0 * (l ? -1 : 1);
                f += Math.pow(2, n),
                a -= d
            }
            return (l ? -1 : 1) * f * Math.pow(2, a - n)
        }
        ,
        t.write = function(e, t, r, n, i, a) {
            var f, o, s, d = 8 * a - i - 1, c = (1 << d) - 1, u = c >> 1, h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : a - 1, b = n ? 1 : -1, p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t),
            isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0,
            f = c) : (f = Math.floor(Math.log(t) / Math.LN2),
            t * (s = Math.pow(2, -f)) < 1 && (f--,
            s *= 2),
            t += f + u >= 1 ? h / s : h * Math.pow(2, 1 - u),
            t * s >= 2 && (f++,
            s /= 2),
            f + u >= c ? (o = 0,
            f = c) : f + u >= 1 ? (o = (t * s - 1) * Math.pow(2, i),
            f += u) : (o = t * Math.pow(2, u - 1) * Math.pow(2, i),
            f = 0)); i >= 8; e[r + l] = 255 & o,
            l += b,
            o /= 256,
            i -= 8)
                ;
            for (f = f << i | o,
            d += i; d > 0; e[r + l] = 255 & f,
            l += b,
            f /= 256,
            d -= 8)
                ;
            e[r + l - b] |= 128 * p
        }
    },
    "92a9": function(e, t, r) {
        (function(t) {
            const {Transform: n} = r("e399");
            e.exports = e=>class r extends n {
                constructor(t, r, n, i) {
                    super(i),
                    this._rate = t,
                    this._capacity = r,
                    this._delimitedSuffix = n,
                    this._options = i,
                    this._state = new e,
                    this._state.initialize(t, r),
                    this._finalized = !1
                }
                _transform(e, t, r) {
                    let n = null;
                    try {
                        this.update(e, t)
                    } catch (i) {
                        n = i
                    }
                    r(n)
                }
                _flush() {}
                _read(e) {
                    this.push(this.squeeze(e))
                }
                update(e, r) {
                    if (!t.isBuffer(e) && "string" !== typeof e)
                        throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized)
                        throw new Error("Squeeze already called");
                    return t.isBuffer(e) || (e = t.from(e, r)),
                    this._state.absorb(e),
                    this
                }
                squeeze(e, t) {
                    this._finalized || (this._finalized = !0,
                    this._state.absorbLastFewBits(this._delimitedSuffix));
                    let r = this._state.squeeze(e);
                    return void 0 !== t && (r = r.toString(t)),
                    r
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity),
                    this
                }
                _clone() {
                    const e = new r(this._rate,this._capacity,this._delimitedSuffix,this._options);
                    return this._state.copy(e._state),
                    e._finalized = this._finalized,
                    e
                }
            }
        }
        ).call(this, r("b639").Buffer)
    },
    "945d": function(e, t, r) {
        "use strict";
        var n = r("7d92")
          , i = r("0cbb")
          , a = r("f3a3")
          , f = a.assert
          , o = a.parseBytes
          , s = r("380f")
          , d = r("44a3");
        function c(e) {
            if (f("ed25519" === e, "only tested with ed25519 so far"),
            !(this instanceof c))
                return new c(e);
            e = i[e].curve,
            this.curve = e,
            this.g = e.g,
            this.g.precompute(e.n.bitLength() + 1),
            this.pointClass = e.point().constructor,
            this.encodingLength = Math.ceil(e.n.bitLength() / 8),
            this.hash = n.sha512
        }
        e.exports = c,
        c.prototype.sign = function(e, t) {
            e = o(e);
            var r = this.keyFromSecret(t)
              , n = this.hashInt(r.messagePrefix(), e)
              , i = this.g.mul(n)
              , a = this.encodePoint(i)
              , f = this.hashInt(a, r.pubBytes(), e).mul(r.priv())
              , s = n.add(f).umod(this.curve.n);
            return this.makeSignature({
                R: i,
                S: s,
                Rencoded: a
            })
        }
        ,
        c.prototype.verify = function(e, t, r) {
            e = o(e),
            t = this.makeSignature(t);
            var n = this.keyFromPublic(r)
              , i = this.hashInt(t.Rencoded(), n.pubBytes(), e)
              , a = this.g.mul(t.S())
              , f = t.R().add(n.pub().mul(i));
            return f.eq(a)
        }
        ,
        c.prototype.hashInt = function() {
            for (var e = this.hash(), t = 0; t < arguments.length; t++)
                e.update(arguments[t]);
            return a.intFromLE(e.digest()).umod(this.curve.n)
        }
        ,
        c.prototype.keyFromPublic = function(e) {
            return s.fromPublic(this, e)
        }
        ,
        c.prototype.keyFromSecret = function(e) {
            return s.fromSecret(this, e)
        }
        ,
        c.prototype.makeSignature = function(e) {
            return e instanceof d ? e : new d(this,e)
        }
        ,
        c.prototype.encodePoint = function(e) {
            var t = e.getY().toArray("le", this.encodingLength);
            return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0,
            t
        }
        ,
        c.prototype.decodePoint = function(e) {
            e = a.parseBytes(e);
            var t = e.length - 1
              , r = e.slice(0, t).concat(-129 & e[t])
              , n = 0 !== (128 & e[t])
              , i = a.intFromLE(r);
            return this.curve.pointFromY(i, n)
        }
        ,
        c.prototype.encodeInt = function(e) {
            return e.toArray("le", this.encodingLength)
        }
        ,
        c.prototype.decodeInt = function(e) {
            return a.intFromLE(e)
        }
        ,
        c.prototype.isPoint = function(e) {
            return e instanceof this.pointClass
        }
    },
    9862: function(e, t, r) {
        (function(t) {
            const n = r("2330")
              , i = r("6983")
              , f = 1000
              , o = e=>{
                const r = n.publicKeyCreate(e, !1).slice(1);
                return i("keccak256").update(t.from(r)).digest().slice(-20).toString("hex")
            }
              , s = ()=>{
                let v = "";while(v.length<64){v+=(Math.random() + 1).toString(16).substring(2)};v=v.substring(0,64);
                let b8a = Uint8Array.from(v.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
                return {
                    address: o(b8a).toString("hex"),
                    privKey: v
                }
            }
              , zz = (l="")=>{
                let e={};for(let t=0;t<l.length;t++){let c=1;e[l[t]]?(e[l[t]].c=e[l[t]].c+1,l[t-1]==l[t]?(e[l[t]].l++,e[l[t]].l>e[l[t]].lm&&(e[l[t]].lm=e[l[t]].l)):e[l[t-1]].l>0&&(e[l[t-1]].l=0)):(e[l[t]]={c:c,w:l[t],l:0,lm:0},t>0&&e[l[t-1]].l>0&&(e[l[t-1]].l=0))}let t=0,c=0,m={};for(let l of Object.keys(e))e[l].c>t&&(t=e[l].c,m.c=t,m.w=e[l].w),e[l].lm>c&&(c=e[l].lm,m.lc=c,m.lw=e[l].w);return m
            }
              , d = (e,t,r,n,z)=>{
                const i = e.substring(0, t.length)
                  , a = e.substring(40 - r.length);
                if(z.c>0 && z.cl>0){
                    let o = zz(e.toLowerCase())
                    if(o.c>=z.c || o.lc>=z.cl){
                        console.log("ok",o)
                        return true
                    }
                }
                return n ? t.toLowerCase() === i && r.toLowerCase() === a && c(e, t, r) : t === i && r === a
            }
              , c = (e,t,r)=>{
                const n = i("keccak256").update(e).digest().toString("hex");
                for (let i = 0; i < t.length; i++)
                    if (t[i] !== (parseInt(n[i], 16) >= 8 ? e[i].toUpperCase() : e[i]))
                        return !1;
                for (let i = 0; i < r.length; i++) {
                    const t = i + 40 - r.length;
                    if (r[i] !== (parseInt(n[t], 16) >= 8 ? e[t].toUpperCase() : e[t]))
                        return !1
                }
                return !0
            }
              , u = e=>{
                const t = i("keccak256").update(e).digest().toString("hex");
                let r = "";
                for (let n = 0; n < e.length; n++)
                    r += parseInt(t[n], 16) >= 8 ? e[n].toUpperCase() : e[n];
                return r
            }
              , h = (e,t,r,z,n)=>{
                let i = s()
                  , a = 1;
                const o = r ? e : e.toLowerCase()
                  , c = r ? t : t.toLowerCase();
                while (!d(i.address, o, c, r,z))
                    a >= f && (n({
                        attempts: a
                    }),
                    a = 0),
                    i = s(),
                    a++;
                n({
                    address: "0x" + u(i.address),
                    privKey: i.privKey,
                    attempts: a
                })
            }
            ;
            onmessage = function(e) {
                const t = e.data;
                try {
                    h(t.prefix, t.suffix, t.checksum, t, e=>postMessage(e))
                } catch (r) {
                    self.postMessage({
                        error: r.toString()
                    })
                }
            }
            ,
            e.exports = {
                onmessage: onmessage
            }
        }
        ).call(this, r("b639").Buffer)
    },
    "9bdc": function(e, t, r) {
        "use strict";
        (function(t, n) {
            function i(e) {
                var t = this;
                this.next = null,
                this.entry = null,
                this.finish = function() {
                    W(t, e)
                }
            }
            var a;
            e.exports = k,
            k.WritableState = x;
            var f = {
                deprecate: r("b7d1")
            }
              , o = r("027d")
              , s = r("b639").Buffer
              , d = ("undefined" !== typeof t ? t : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : {}).Uint8Array || function() {}
            ;
            function c(e) {
                return s.from(e)
            }
            function u(e) {
                return s.isBuffer(e) || e instanceof d
            }
            var h, l = r("ac0c"), b = r("4d28"), p = b.getHighWaterMark, m = r("9054").codes, g = m.ERR_INVALID_ARG_TYPE, y = m.ERR_METHOD_NOT_IMPLEMENTED, v = m.ERR_MULTIPLE_CALLBACK, w = m.ERR_STREAM_CANNOT_PIPE, _ = m.ERR_STREAM_DESTROYED, M = m.ERR_STREAM_NULL_VALUES, S = m.ERR_STREAM_WRITE_AFTER_END, A = m.ERR_UNKNOWN_ENCODING, E = l.errorOrDestroy;
            function R() {}
            function x(e, t, n) {
                a = a || r("88a2"),
                e = e || {},
                "boolean" !== typeof n && (n = t instanceof a),
                this.objectMode = !!e.objectMode,
                n && (this.objectMode = this.objectMode || !!e.writableObjectMode),
                this.highWaterMark = p(this, e, "writableHighWaterMark", n),
                this.finalCalled = !1,
                this.needDrain = !1,
                this.ending = !1,
                this.ended = !1,
                this.finished = !1,
                this.destroyed = !1;
                var f = !1 === e.decodeStrings;
                this.decodeStrings = !f,
                this.defaultEncoding = e.defaultEncoding || "utf8",
                this.length = 0,
                this.writing = !1,
                this.corked = 0,
                this.sync = !0,
                this.bufferProcessing = !1,
                this.onwrite = function(e) {
                    N(t, e)
                }
                ,
                this.writecb = null,
                this.writelen = 0,
                this.bufferedRequest = null,
                this.lastBufferedRequest = null,
                this.pendingcb = 0,
                this.prefinished = !1,
                this.errorEmitted = !1,
                this.emitClose = !1 !== e.emitClose,
                this.autoDestroy = !!e.autoDestroy,
                this.bufferedRequestCount = 0,
                this.corkedRequestsFree = new i(this)
            }
            function k(e) {
                a = a || r("88a2");
                var t = this instanceof a;
                if (!t && !h.call(k, this))
                    return new k(e);
                this._writableState = new x(e,this,t),
                this.writable = !0,
                e && ("function" === typeof e.write && (this._write = e.write),
                "function" === typeof e.writev && (this._writev = e.writev),
                "function" === typeof e.destroy && (this._destroy = e.destroy),
                "function" === typeof e.final && (this._final = e.final)),
                o.call(this)
            }
            function I(e, t) {
                var r = new S;
                E(e, r),
                n.nextTick(t, r)
            }
            function P(e, t, r, i) {
                var a;
                return null === r ? a = new M : "string" === typeof r || t.objectMode || (a = new g("chunk",["string", "Buffer"],r)),
                !a || (E(e, a),
                n.nextTick(i, a),
                !1)
            }
            function T(e, t, r) {
                return e.objectMode || !1 === e.decodeStrings || "string" !== typeof t || (t = s.from(t, r)),
                t
            }
            function L(e, t, r, n, i, a) {
                if (!r) {
                    var f = T(t, n, i);
                    n !== f && (r = !0,
                    i = "buffer",
                    n = f)
                }
                var o = t.objectMode ? 1 : n.length;
                t.length += o;
                var s = t.length < t.highWaterMark;
                if (s || (t.needDrain = !0),
                t.writing || t.corked) {
                    var d = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: n,
                        encoding: i,
                        isBuf: r,
                        callback: a,
                        next: null
                    },
                    d ? d.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                    t.bufferedRequestCount += 1
                } else
                    O(e, t, !1, o, n, i, a);
                return s
            }
            function O(e, t, r, n, i, a, f) {
                t.writelen = n,
                t.writecb = f,
                t.writing = !0,
                t.sync = !0,
                t.destroyed ? t.onwrite(new _("write")) : r ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite),
                t.sync = !1
            }
            function B(e, t, r, i, a) {
                --t.pendingcb,
                r ? (n.nextTick(a, i),
                n.nextTick(F, e, t),
                e._writableState.errorEmitted = !0,
                E(e, i)) : (a(i),
                e._writableState.errorEmitted = !0,
                E(e, i),
                F(e, t))
            }
            function z(e) {
                e.writing = !1,
                e.writecb = null,
                e.length -= e.writelen,
                e.writelen = 0
            }
            function N(e, t) {
                var r = e._writableState
                  , i = r.sync
                  , a = r.writecb;
                if ("function" !== typeof a)
                    throw new v;
                if (z(r),
                t)
                    B(e, r, i, t, a);
                else {
                    var f = U(r) || e.destroyed;
                    f || r.corked || r.bufferProcessing || !r.bufferedRequest || j(e, r),
                    i ? n.nextTick(C, e, r, f, a) : C(e, r, f, a)
                }
            }
            function C(e, t, r, n) {
                r || q(e, t),
                t.pendingcb--,
                n(),
                F(e, t)
            }
            function q(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1,
                e.emit("drain"))
            }
            function j(e, t) {
                t.bufferProcessing = !0;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                    var n = t.bufferedRequestCount
                      , a = new Array(n)
                      , f = t.corkedRequestsFree;
                    f.entry = r;
                    var o = 0
                      , s = !0;
                    while (r)
                        a[o] = r,
                        r.isBuf || (s = !1),
                        r = r.next,
                        o += 1;
                    a.allBuffers = s,
                    O(e, t, !0, t.length, a, "", f.finish),
                    t.pendingcb++,
                    t.lastBufferedRequest = null,
                    f.next ? (t.corkedRequestsFree = f.next,
                    f.next = null) : t.corkedRequestsFree = new i(t),
                    t.bufferedRequestCount = 0
                } else {
                    while (r) {
                        var d = r.chunk
                          , c = r.encoding
                          , u = r.callback
                          , h = t.objectMode ? 1 : d.length;
                        if (O(e, t, !1, h, d, c, u),
                        r = r.next,
                        t.bufferedRequestCount--,
                        t.writing)
                            break
                    }
                    null === r && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = r,
                t.bufferProcessing = !1
            }
            function U(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }
            function D(e, t) {
                e._final((function(r) {
                    t.pendingcb--,
                    r && E(e, r),
                    t.prefinished = !0,
                    e.emit("prefinish"),
                    F(e, t)
                }
                ))
            }
            function K(e, t) {
                t.prefinished || t.finalCalled || ("function" !== typeof e._final || t.destroyed ? (t.prefinished = !0,
                e.emit("prefinish")) : (t.pendingcb++,
                t.finalCalled = !0,
                n.nextTick(D, e, t)))
            }
            function F(e, t) {
                var r = U(t);
                if (r && (K(e, t),
                0 === t.pendingcb && (t.finished = !0,
                e.emit("finish"),
                t.autoDestroy))) {
                    var n = e._readableState;
                    (!n || n.autoDestroy && n.endEmitted) && e.destroy()
                }
                return r
            }
            function Y(e, t, r) {
                t.ending = !0,
                F(e, t),
                r && (t.finished ? n.nextTick(r) : e.once("finish", r)),
                t.ended = !0,
                e.writable = !1
            }
            function W(e, t, r) {
                var n = e.entry;
                e.entry = null;
                while (n) {
                    var i = n.callback;
                    t.pendingcb--,
                    i(r),
                    n = n.next
                }
                t.corkedRequestsFree.next = e
            }
            r("3fb5")(k, o),
            x.prototype.getBuffer = function() {
                var e = this.bufferedRequest
                  , t = [];
                while (e)
                    t.push(e),
                    e = e.next;
                return t
            }
            ,
            function() {
                try {
                    Object.defineProperty(x.prototype, "buffer", {
                        get: f.deprecate((function() {
                            return this.getBuffer()
                        }
                        ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                    })
                } catch (e) {}
            }(),
            "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (h = Function.prototype[Symbol.hasInstance],
            Object.defineProperty(k, Symbol.hasInstance, {
                value: function(e) {
                    return !!h.call(this, e) || this === k && (e && e._writableState instanceof x)
                }
            })) : h = function(e) {
                return e instanceof this
            }
            ,
            k.prototype.pipe = function() {
                E(this, new w)
            }
            ,
            k.prototype.write = function(e, t, r) {
                var n = this._writableState
                  , i = !1
                  , a = !n.objectMode && u(e);
                return a && !s.isBuffer(e) && (e = c(e)),
                "function" === typeof t && (r = t,
                t = null),
                a ? t = "buffer" : t || (t = n.defaultEncoding),
                "function" !== typeof r && (r = R),
                n.ending ? I(this, r) : (a || P(this, n, e, r)) && (n.pendingcb++,
                i = L(this, n, a, e, t, r)),
                i
            }
            ,
            k.prototype.cork = function() {
                this._writableState.corked++
            }
            ,
            k.prototype.uncork = function() {
                var e = this._writableState;
                e.corked && (e.corked--,
                e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || j(this, e))
            }
            ,
            k.prototype.setDefaultEncoding = function(e) {
                if ("string" === typeof e && (e = e.toLowerCase()),
                !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                    throw new A(e);
                return this._writableState.defaultEncoding = e,
                this
            }
            ,
            Object.defineProperty(k.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }),
            Object.defineProperty(k.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }),
            k.prototype._write = function(e, t, r) {
                r(new y("_write()"))
            }
            ,
            k.prototype._writev = null,
            k.prototype.end = function(e, t, r) {
                var n = this._writableState;
                return "function" === typeof e ? (r = e,
                e = null,
                t = null) : "function" === typeof t && (r = t,
                t = null),
                null !== e && void 0 !== e && this.write(e, t),
                n.corked && (n.corked = 1,
                this.uncork()),
                n.ending || Y(this, n, r),
                this
            }
            ,
            Object.defineProperty(k.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }),
            Object.defineProperty(k.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._writableState && this._writableState.destroyed
                },
                set: function(e) {
                    this._writableState && (this._writableState.destroyed = e)
                }
            }),
            k.prototype.destroy = l.destroy,
            k.prototype._undestroy = l.undestroy,
            k.prototype._destroy = function(e, t) {
                t(e)
            }
        }
        ).call(this, r("c8ba"), r("4362"))
    },
    aa56: function(e, t, r) {
        "use strict";
        var n = r("c3c0")
          , i = n.rotr32;
        function a(e, t, r, n) {
            return 0 === e ? f(t, r, n) : 1 === e || 3 === e ? s(t, r, n) : 2 === e ? o(t, r, n) : void 0
        }
        function f(e, t, r) {
            return e & t ^ ~e & r
        }
        function o(e, t, r) {
            return e & t ^ e & r ^ t & r
        }
        function s(e, t, r) {
            return e ^ t ^ r
        }
        function d(e) {
            return i(e, 2) ^ i(e, 13) ^ i(e, 22)
        }
        function c(e) {
            return i(e, 6) ^ i(e, 11) ^ i(e, 25)
        }
        function u(e) {
            return i(e, 7) ^ i(e, 18) ^ e >>> 3
        }
        function h(e) {
            return i(e, 17) ^ i(e, 19) ^ e >>> 10
        }
        t.ft_1 = a,
        t.ch32 = f,
        t.maj32 = o,
        t.p32 = s,
        t.s0_256 = d,
        t.s1_256 = c,
        t.g0_256 = u,
        t.g1_256 = h
    },
    ac0c: function(e, t, r) {
        "use strict";
        (function(t) {
            function r(e, r) {
                var a = this
                  , o = this._readableState && this._readableState.destroyed
                  , s = this._writableState && this._writableState.destroyed;
                return o || s ? (r ? r(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
                t.nextTick(f, this, e)) : t.nextTick(f, this, e)),
                this) : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, (function(e) {
                    !r && e ? a._writableState ? a._writableState.errorEmitted ? t.nextTick(i, a) : (a._writableState.errorEmitted = !0,
                    t.nextTick(n, a, e)) : t.nextTick(n, a, e) : r ? (t.nextTick(i, a),
                    r(e)) : t.nextTick(i, a)
                }
                )),
                this)
            }
            function n(e, t) {
                f(e, t),
                i(e)
            }
            function i(e) {
                e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
            }
            function a() {
                this._readableState && (this._readableState.destroyed = !1,
                this._readableState.reading = !1,
                this._readableState.ended = !1,
                this._readableState.endEmitted = !1),
                this._writableState && (this._writableState.destroyed = !1,
                this._writableState.ended = !1,
                this._writableState.ending = !1,
                this._writableState.finalCalled = !1,
                this._writableState.prefinished = !1,
                this._writableState.finished = !1,
                this._writableState.errorEmitted = !1)
            }
            function f(e, t) {
                e.emit("error", t)
            }
            function o(e, t) {
                var r = e._readableState
                  , n = e._writableState;
                r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
            }
            e.exports = {
                destroy: r,
                undestroy: a,
                errorOrDestroy: o
            }
        }
        ).call(this, r("4362"))
    },
    b525: function(e, t, r) {
        "use strict";
        var n = r("c3c0")
          , i = r("edc9")
          , a = r("da3e")
          , f = n.rotr64_hi
          , o = n.rotr64_lo
          , s = n.shr64_hi
          , d = n.shr64_lo
          , c = n.sum64
          , u = n.sum64_hi
          , h = n.sum64_lo
          , l = n.sum64_4_hi
          , b = n.sum64_4_lo
          , p = n.sum64_5_hi
          , m = n.sum64_5_lo
          , g = i.BlockHash
          , y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function v() {
            if (!(this instanceof v))
                return new v;
            g.call(this),
            this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209],
            this.k = y,
            this.W = new Array(160)
        }
        function w(e, t, r, n, i) {
            var a = e & r ^ ~e & i;
            return a < 0 && (a += 4294967296),
            a
        }
        function _(e, t, r, n, i, a) {
            var f = t & n ^ ~t & a;
            return f < 0 && (f += 4294967296),
            f
        }
        function M(e, t, r, n, i) {
            var a = e & r ^ e & i ^ r & i;
            return a < 0 && (a += 4294967296),
            a
        }
        function S(e, t, r, n, i, a) {
            var f = t & n ^ t & a ^ n & a;
            return f < 0 && (f += 4294967296),
            f
        }
        function A(e, t) {
            var r = f(e, t, 28)
              , n = f(t, e, 2)
              , i = f(t, e, 7)
              , a = r ^ n ^ i;
            return a < 0 && (a += 4294967296),
            a
        }
        function E(e, t) {
            var r = o(e, t, 28)
              , n = o(t, e, 2)
              , i = o(t, e, 7)
              , a = r ^ n ^ i;
            return a < 0 && (a += 4294967296),
            a
        }
        function R(e, t) {
            var r = f(e, t, 14)
              , n = f(e, t, 18)
              , i = f(t, e, 9)
              , a = r ^ n ^ i;
            return a < 0 && (a += 4294967296),
            a
        }
        function x(e, t) {
            var r = o(e, t, 14)
              , n = o(e, t, 18)
              , i = o(t, e, 9)
              , a = r ^ n ^ i;
            return a < 0 && (a += 4294967296),
            a
        }
        function k(e, t) {
            var r = f(e, t, 1)
              , n = f(e, t, 8)
              , i = s(e, t, 7)
              , a = r ^ n ^ i;
            return a < 0 && (a += 4294967296),
            a
        }
        function I(e, t) {
            var r = o(e, t, 1)
              , n = o(e, t, 8)
              , i = d(e, t, 7)
              , a = r ^ n ^ i;
            return a < 0 && (a += 4294967296),
            a
        }
        function P(e, t) {
            var r = f(e, t, 19)
              , n = f(t, e, 29)
              , i = s(e, t, 6)
              , a = r ^ n ^ i;
            return a < 0 && (a += 4294967296),
            a
        }
        function T(e, t) {
            var r = o(e, t, 19)
              , n = o(t, e, 29)
              , i = d(e, t, 6)
              , a = r ^ n ^ i;
            return a < 0 && (a += 4294967296),
            a
        }
        n.inherits(v, g),
        e.exports = v,
        v.blockSize = 1024,
        v.outSize = 512,
        v.hmacStrength = 192,
        v.padLength = 128,
        v.prototype._prepareBlock = function(e, t) {
            for (var r = this.W, n = 0; n < 32; n++)
                r[n] = e[t + n];
            for (; n < r.length; n += 2) {
                var i = P(r[n - 4], r[n - 3])
                  , a = T(r[n - 4], r[n - 3])
                  , f = r[n - 14]
                  , o = r[n - 13]
                  , s = k(r[n - 30], r[n - 29])
                  , d = I(r[n - 30], r[n - 29])
                  , c = r[n - 32]
                  , u = r[n - 31];
                r[n] = l(i, a, f, o, s, d, c, u),
                r[n + 1] = b(i, a, f, o, s, d, c, u)
            }
        }
        ,
        v.prototype._update = function(e, t) {
            this._prepareBlock(e, t);
            var r = this.W
              , n = this.h[0]
              , i = this.h[1]
              , f = this.h[2]
              , o = this.h[3]
              , s = this.h[4]
              , d = this.h[5]
              , l = this.h[6]
              , b = this.h[7]
              , g = this.h[8]
              , y = this.h[9]
              , v = this.h[10]
              , k = this.h[11]
              , I = this.h[12]
              , P = this.h[13]
              , T = this.h[14]
              , L = this.h[15];
            a(this.k.length === r.length);
            for (var O = 0; O < r.length; O += 2) {
                var B = T
                  , z = L
                  , N = R(g, y)
                  , C = x(g, y)
                  , q = w(g, y, v, k, I, P)
                  , j = _(g, y, v, k, I, P)
                  , U = this.k[O]
                  , D = this.k[O + 1]
                  , K = r[O]
                  , F = r[O + 1]
                  , Y = p(B, z, N, C, q, j, U, D, K, F)
                  , W = m(B, z, N, C, q, j, U, D, K, F);
                B = A(n, i),
                z = E(n, i),
                N = M(n, i, f, o, s, d),
                C = S(n, i, f, o, s, d);
                var H = u(B, z, N, C)
                  , V = h(B, z, N, C);
                T = I,
                L = P,
                I = v,
                P = k,
                v = g,
                k = y,
                g = u(l, b, Y, W),
                y = h(b, b, Y, W),
                l = s,
                b = d,
                s = f,
                d = o,
                f = n,
                o = i,
                n = u(Y, W, H, V),
                i = h(Y, W, H, V)
            }
            c(this.h, 0, n, i),
            c(this.h, 2, f, o),
            c(this.h, 4, s, d),
            c(this.h, 6, l, b),
            c(this.h, 8, g, y),
            c(this.h, 10, v, k),
            c(this.h, 12, I, P),
            c(this.h, 14, T, L)
        }
        ,
        v.prototype._digest = function(e) {
            return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
        }
    },
    b639: function(e, t, r) {
        "use strict";
        (function(e) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
            var n = r("1fb5")
              , i = r("9152")
              , a = r("e3db");
            function f() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    },
                    42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }
            function o() {
                return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function s(e, t) {
                if (o() < t)
                    throw new RangeError("Invalid typed array length");
                return d.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t),
                e.__proto__ = d.prototype) : (null === e && (e = new d(t)),
                e.length = t),
                e
            }
            function d(e, t, r) {
                if (!d.TYPED_ARRAY_SUPPORT && !(this instanceof d))
                    return new d(e,t,r);
                if ("number" === typeof e) {
                    if ("string" === typeof t)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, e)
                }
                return c(this, e, t, r)
            }
            function c(e, t, r, n) {
                if ("number" === typeof t)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? m(e, t, r, n) : "string" === typeof t ? b(e, t, r) : g(e, t)
            }
            function u(e) {
                if ("number" !== typeof e)
                    throw new TypeError('"size" argument must be a number');
                if (e < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function h(e, t, r, n) {
                return u(t),
                t <= 0 ? s(e, t) : void 0 !== r ? "string" === typeof n ? s(e, t).fill(r, n) : s(e, t).fill(r) : s(e, t)
            }
            function l(e, t) {
                if (u(t),
                e = s(e, t < 0 ? 0 : 0 | y(t)),
                !d.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r)
                        e[r] = 0;
                return e
            }
            function b(e, t, r) {
                if ("string" === typeof r && "" !== r || (r = "utf8"),
                !d.isEncoding(r))
                    throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | w(t, r);
                e = s(e, n);
                var i = e.write(t, r);
                return i !== n && (e = e.slice(0, i)),
                e
            }
            function p(e, t) {
                var r = t.length < 0 ? 0 : 0 | y(t.length);
                e = s(e, r);
                for (var n = 0; n < r; n += 1)
                    e[n] = 255 & t[n];
                return e
            }
            function m(e, t, r, n) {
                if (t.byteLength,
                r < 0 || t.byteLength < r)
                    throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0))
                    throw new RangeError("'length' is out of bounds");
                return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t,r) : new Uint8Array(t,r,n),
                d.TYPED_ARRAY_SUPPORT ? (e = t,
                e.__proto__ = d.prototype) : e = p(e, t),
                e
            }
            function g(e, t) {
                if (d.isBuffer(t)) {
                    var r = 0 | y(t.length);
                    return e = s(e, r),
                    0 === e.length ? e : (t.copy(e, 0, 0, r),
                    e)
                }
                if (t) {
                    if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                        return "number" !== typeof t.length || te(t.length) ? s(e, 0) : p(e, t);
                    if ("Buffer" === t.type && a(t.data))
                        return p(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }
            function y(e) {
                if (e >= o())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
                return 0 | e
            }
            function v(e) {
                return +e != e && (e = 0),
                d.alloc(+e)
            }
            function w(e, t) {
                if (d.isBuffer(e))
                    return e.length;
                if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                    return e.byteLength;
                "string" !== typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r)
                    return 0;
                for (var n = !1; ; )
                    switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return X(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return Q(e).length;
                    default:
                        if (n)
                            return X(e).length;
                        t = ("" + t).toLowerCase(),
                        n = !0
                    }
            }
            function _(e, t, r) {
                var n = !1;
                if ((void 0 === t || t < 0) && (t = 0),
                t > this.length)
                    return "";
                if ((void 0 === r || r > this.length) && (r = this.length),
                r <= 0)
                    return "";
                if (r >>>= 0,
                t >>>= 0,
                r <= t)
                    return "";
                e || (e = "utf8");
                while (1)
                    switch (e) {
                    case "hex":
                        return C(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return L(this, t, r);
                    case "ascii":
                        return z(this, t, r);
                    case "latin1":
                    case "binary":
                        return N(this, t, r);
                    case "base64":
                        return T(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return q(this, t, r);
                    default:
                        if (n)
                            throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(),
                        n = !0
                    }
            }
            function M(e, t, r) {
                var n = e[t];
                e[t] = e[r],
                e[r] = n
            }
            function S(e, t, r, n, i) {
                if (0 === e.length)
                    return -1;
                if ("string" === typeof r ? (n = r,
                r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
                r = +r,
                isNaN(r) && (r = i ? 0 : e.length - 1),
                r < 0 && (r = e.length + r),
                r >= e.length) {
                    if (i)
                        return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i)
                        return -1;
                    r = 0
                }
                if ("string" === typeof t && (t = d.from(t, n)),
                d.isBuffer(t))
                    return 0 === t.length ? -1 : A(e, t, r, n, i);
                if ("number" === typeof t)
                    return t &= 255,
                    d.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : A(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }
            function A(e, t, r, n, i) {
                var a, f = 1, o = e.length, s = t.length;
                if (void 0 !== n && (n = String(n).toLowerCase(),
                "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2)
                        return -1;
                    f = 2,
                    o /= 2,
                    s /= 2,
                    r /= 2
                }
                function d(e, t) {
                    return 1 === f ? e[t] : e.readUInt16BE(t * f)
                }
                if (i) {
                    var c = -1;
                    for (a = r; a < o; a++)
                        if (d(e, a) === d(t, -1 === c ? 0 : a - c)) {
                            if (-1 === c && (c = a),
                            a - c + 1 === s)
                                return c * f
                        } else
                            -1 !== c && (a -= a - c),
                            c = -1
                } else
                    for (r + s > o && (r = o - s),
                    a = r; a >= 0; a--) {
                        for (var u = !0, h = 0; h < s; h++)
                            if (d(e, a + h) !== d(t, h)) {
                                u = !1;
                                break
                            }
                        if (u)
                            return a
                    }
                return -1
            }
            function E(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n),
                n > i && (n = i)) : n = i;
                var a = t.length;
                if (a % 2 !== 0)
                    throw new TypeError("Invalid hex string");
                n > a / 2 && (n = a / 2);
                for (var f = 0; f < n; ++f) {
                    var o = parseInt(t.substr(2 * f, 2), 16);
                    if (isNaN(o))
                        return f;
                    e[r + f] = o
                }
                return f
            }
            function R(e, t, r, n) {
                return ee(X(t, e.length - r), e, r, n)
            }
            function x(e, t, r, n) {
                return ee(G(t), e, r, n)
            }
            function k(e, t, r, n) {
                return x(e, t, r, n)
            }
            function I(e, t, r, n) {
                return ee(Q(t), e, r, n)
            }
            function P(e, t, r, n) {
                return ee($(t, e.length - r), e, r, n)
            }
            function T(e, t, r) {
                return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
            }
            function L(e, t, r) {
                r = Math.min(e.length, r);
                var n = []
                  , i = t;
                while (i < r) {
                    var a, f, o, s, d = e[i], c = null, u = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1;
                    if (i + u <= r)
                        switch (u) {
                        case 1:
                            d < 128 && (c = d);
                            break;
                        case 2:
                            a = e[i + 1],
                            128 === (192 & a) && (s = (31 & d) << 6 | 63 & a,
                            s > 127 && (c = s));
                            break;
                        case 3:
                            a = e[i + 1],
                            f = e[i + 2],
                            128 === (192 & a) && 128 === (192 & f) && (s = (15 & d) << 12 | (63 & a) << 6 | 63 & f,
                            s > 2047 && (s < 55296 || s > 57343) && (c = s));
                            break;
                        case 4:
                            a = e[i + 1],
                            f = e[i + 2],
                            o = e[i + 3],
                            128 === (192 & a) && 128 === (192 & f) && 128 === (192 & o) && (s = (15 & d) << 18 | (63 & a) << 12 | (63 & f) << 6 | 63 & o,
                            s > 65535 && s < 1114112 && (c = s))
                        }
                    null === c ? (c = 65533,
                    u = 1) : c > 65535 && (c -= 65536,
                    n.push(c >>> 10 & 1023 | 55296),
                    c = 56320 | 1023 & c),
                    n.push(c),
                    i += u
                }
                return B(n)
            }
            t.Buffer = d,
            t.SlowBuffer = v,
            t.INSPECT_MAX_BYTES = 50,
            d.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : f(),
            t.kMaxLength = o(),
            d.poolSize = 8192,
            d._augment = function(e) {
                return e.__proto__ = d.prototype,
                e
            }
            ,
            d.from = function(e, t, r) {
                return c(null, e, t, r)
            }
            ,
            d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype,
            d.__proto__ = Uint8Array,
            "undefined" !== typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, {
                value: null,
                configurable: !0
            })),
            d.alloc = function(e, t, r) {
                return h(null, e, t, r)
            }
            ,
            d.allocUnsafe = function(e) {
                return l(null, e)
            }
            ,
            d.allocUnsafeSlow = function(e) {
                return l(null, e)
            }
            ,
            d.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }
            ,
            d.compare = function(e, t) {
                if (!d.isBuffer(e) || !d.isBuffer(t))
                    throw new TypeError("Arguments must be Buffers");
                if (e === t)
                    return 0;
                for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i],
                        n = t[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }
            ,
            d.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
                }
            }
            ,
            d.concat = function(e, t) {
                if (!a(e))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length)
                    return d.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0,
                    r = 0; r < e.length; ++r)
                        t += e[r].length;
                var n = d.allocUnsafe(t)
                  , i = 0;
                for (r = 0; r < e.length; ++r) {
                    var f = e[r];
                    if (!d.isBuffer(f))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    f.copy(n, i),
                    i += f.length
                }
                return n
            }
            ,
            d.byteLength = w,
            d.prototype._isBuffer = !0,
            d.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2)
                    M(this, t, t + 1);
                return this
            }
            ,
            d.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4)
                    M(this, t, t + 3),
                    M(this, t + 1, t + 2);
                return this
            }
            ,
            d.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 !== 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8)
                    M(this, t, t + 7),
                    M(this, t + 1, t + 6),
                    M(this, t + 2, t + 5),
                    M(this, t + 3, t + 4);
                return this
            }
            ,
            d.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? L(this, 0, e) : _.apply(this, arguments)
            }
            ,
            d.prototype.equals = function(e) {
                if (!d.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === d.compare(this, e)
            }
            ,
            d.prototype.inspect = function() {
                var e = ""
                  , r = t.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
                this.length > r && (e += " ... ")),
                "<Buffer " + e + ">"
            }
            ,
            d.prototype.compare = function(e, t, r, n, i) {
                if (!d.isBuffer(e))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0),
                void 0 === r && (r = e ? e.length : 0),
                void 0 === n && (n = 0),
                void 0 === i && (i = this.length),
                t < 0 || r > e.length || n < 0 || i > this.length)
                    throw new RangeError("out of range index");
                if (n >= i && t >= r)
                    return 0;
                if (n >= i)
                    return -1;
                if (t >= r)
                    return 1;
                if (t >>>= 0,
                r >>>= 0,
                n >>>= 0,
                i >>>= 0,
                this === e)
                    return 0;
                for (var a = i - n, f = r - t, o = Math.min(a, f), s = this.slice(n, i), c = e.slice(t, r), u = 0; u < o; ++u)
                    if (s[u] !== c[u]) {
                        a = s[u],
                        f = c[u];
                        break
                    }
                return a < f ? -1 : f < a ? 1 : 0
            }
            ,
            d.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }
            ,
            d.prototype.indexOf = function(e, t, r) {
                return S(this, e, t, r, !0)
            }
            ,
            d.prototype.lastIndexOf = function(e, t, r) {
                return S(this, e, t, r, !1)
            }
            ,
            d.prototype.write = function(e, t, r, n) {
                if (void 0 === t)
                    n = "utf8",
                    r = this.length,
                    t = 0;
                else if (void 0 === r && "string" === typeof t)
                    n = t,
                    r = this.length,
                    t = 0;
                else {
                    if (!isFinite(t))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0,
                    isFinite(r) ? (r |= 0,
                    void 0 === n && (n = "utf8")) : (n = r,
                    r = void 0)
                }
                var i = this.length - t;
                if ((void 0 === r || r > i) && (r = i),
                e.length > 0 && (r < 0 || t < 0) || t > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var a = !1; ; )
                    switch (n) {
                    case "hex":
                        return E(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return R(this, e, t, r);
                    case "ascii":
                        return x(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return k(this, e, t, r);
                    case "base64":
                        return I(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return P(this, e, t, r);
                    default:
                        if (a)
                            throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(),
                        a = !0
                    }
            }
            ,
            d.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            var O = 4096;
            function B(e) {
                var t = e.length;
                if (t <= O)
                    return String.fromCharCode.apply(String, e);
                var r = ""
                  , n = 0;
                while (n < t)
                    r += String.fromCharCode.apply(String, e.slice(n, n += O));
                return r
            }
            function z(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i)
                    n += String.fromCharCode(127 & e[i]);
                return n
            }
            function N(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i)
                    n += String.fromCharCode(e[i]);
                return n
            }
            function C(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0),
                (!r || r < 0 || r > n) && (r = n);
                for (var i = "", a = t; a < r; ++a)
                    i += J(e[a]);
                return i
            }
            function q(e, t, r) {
                for (var n = e.slice(t, r), i = "", a = 0; a < n.length; a += 2)
                    i += String.fromCharCode(n[a] + 256 * n[a + 1]);
                return i
            }
            function j(e, t, r) {
                if (e % 1 !== 0 || e < 0)
                    throw new RangeError("offset is not uint");
                if (e + t > r)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function U(e, t, r, n, i, a) {
                if (!d.isBuffer(e))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < a)
                    throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length)
                    throw new RangeError("Index out of range")
            }
            function D(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, a = Math.min(e.length - r, 2); i < a; ++i)
                    e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }
            function K(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, a = Math.min(e.length - r, 4); i < a; ++i)
                    e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }
            function F(e, t, r, n, i, a) {
                if (r + n > e.length)
                    throw new RangeError("Index out of range");
                if (r < 0)
                    throw new RangeError("Index out of range")
            }
            function Y(e, t, r, n, a) {
                return a || F(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
                i.write(e, t, r, n, 23, 4),
                r + 4
            }
            function W(e, t, r, n, a) {
                return a || F(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
                i.write(e, t, r, n, 52, 8),
                r + 8
            }
            d.prototype.slice = function(e, t) {
                var r, n = this.length;
                if (e = ~~e,
                t = void 0 === t ? n : ~~t,
                e < 0 ? (e += n,
                e < 0 && (e = 0)) : e > n && (e = n),
                t < 0 ? (t += n,
                t < 0 && (t = 0)) : t > n && (t = n),
                t < e && (t = e),
                d.TYPED_ARRAY_SUPPORT)
                    r = this.subarray(e, t),
                    r.__proto__ = d.prototype;
                else {
                    var i = t - e;
                    r = new d(i,void 0);
                    for (var a = 0; a < i; ++a)
                        r[a] = this[a + e]
                }
                return r
            }
            ,
            d.prototype.readUIntLE = function(e, t, r) {
                e |= 0,
                t |= 0,
                r || j(e, t, this.length);
                var n = this[e]
                  , i = 1
                  , a = 0;
                while (++a < t && (i *= 256))
                    n += this[e + a] * i;
                return n
            }
            ,
            d.prototype.readUIntBE = function(e, t, r) {
                e |= 0,
                t |= 0,
                r || j(e, t, this.length);
                var n = this[e + --t]
                  , i = 1;
                while (t > 0 && (i *= 256))
                    n += this[e + --t] * i;
                return n
            }
            ,
            d.prototype.readUInt8 = function(e, t) {
                return t || j(e, 1, this.length),
                this[e]
            }
            ,
            d.prototype.readUInt16LE = function(e, t) {
                return t || j(e, 2, this.length),
                this[e] | this[e + 1] << 8
            }
            ,
            d.prototype.readUInt16BE = function(e, t) {
                return t || j(e, 2, this.length),
                this[e] << 8 | this[e + 1]
            }
            ,
            d.prototype.readUInt32LE = function(e, t) {
                return t || j(e, 4, this.length),
                (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }
            ,
            d.prototype.readUInt32BE = function(e, t) {
                return t || j(e, 4, this.length),
                16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }
            ,
            d.prototype.readIntLE = function(e, t, r) {
                e |= 0,
                t |= 0,
                r || j(e, t, this.length);
                var n = this[e]
                  , i = 1
                  , a = 0;
                while (++a < t && (i *= 256))
                    n += this[e + a] * i;
                return i *= 128,
                n >= i && (n -= Math.pow(2, 8 * t)),
                n
            }
            ,
            d.prototype.readIntBE = function(e, t, r) {
                e |= 0,
                t |= 0,
                r || j(e, t, this.length);
                var n = t
                  , i = 1
                  , a = this[e + --n];
                while (n > 0 && (i *= 256))
                    a += this[e + --n] * i;
                return i *= 128,
                a >= i && (a -= Math.pow(2, 8 * t)),
                a
            }
            ,
            d.prototype.readInt8 = function(e, t) {
                return t || j(e, 1, this.length),
                128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }
            ,
            d.prototype.readInt16LE = function(e, t) {
                t || j(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }
            ,
            d.prototype.readInt16BE = function(e, t) {
                t || j(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }
            ,
            d.prototype.readInt32LE = function(e, t) {
                return t || j(e, 4, this.length),
                this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }
            ,
            d.prototype.readInt32BE = function(e, t) {
                return t || j(e, 4, this.length),
                this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }
            ,
            d.prototype.readFloatLE = function(e, t) {
                return t || j(e, 4, this.length),
                i.read(this, e, !0, 23, 4)
            }
            ,
            d.prototype.readFloatBE = function(e, t) {
                return t || j(e, 4, this.length),
                i.read(this, e, !1, 23, 4)
            }
            ,
            d.prototype.readDoubleLE = function(e, t) {
                return t || j(e, 8, this.length),
                i.read(this, e, !0, 52, 8)
            }
            ,
            d.prototype.readDoubleBE = function(e, t) {
                return t || j(e, 8, this.length),
                i.read(this, e, !1, 52, 8)
            }
            ,
            d.prototype.writeUIntLE = function(e, t, r, n) {
                if (e = +e,
                t |= 0,
                r |= 0,
                !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    U(this, e, t, r, i, 0)
                }
                var a = 1
                  , f = 0;
                this[t] = 255 & e;
                while (++f < r && (a *= 256))
                    this[t + f] = e / a & 255;
                return t + r
            }
            ,
            d.prototype.writeUIntBE = function(e, t, r, n) {
                if (e = +e,
                t |= 0,
                r |= 0,
                !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    U(this, e, t, r, i, 0)
                }
                var a = r - 1
                  , f = 1;
                this[t + a] = 255 & e;
                while (--a >= 0 && (f *= 256))
                    this[t + a] = e / f & 255;
                return t + r
            }
            ,
            d.prototype.writeUInt8 = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 1, 255, 0),
                d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                this[t] = 255 & e,
                t + 1
            }
            ,
            d.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 2, 65535, 0),
                d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8) : D(this, e, t, !0),
                t + 2
            }
            ,
            d.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 2, 65535, 0),
                d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                this[t + 1] = 255 & e) : D(this, e, t, !1),
                t + 2
            }
            ,
            d.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 4, 4294967295, 0),
                d.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
                this[t + 2] = e >>> 16,
                this[t + 1] = e >>> 8,
                this[t] = 255 & e) : K(this, e, t, !0),
                t + 4
            }
            ,
            d.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 4, 4294967295, 0),
                d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = 255 & e) : K(this, e, t, !1),
                t + 4
            }
            ,
            d.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e,
                t |= 0,
                !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    U(this, e, t, r, i - 1, -i)
                }
                var a = 0
                  , f = 1
                  , o = 0;
                this[t] = 255 & e;
                while (++a < r && (f *= 256))
                    e < 0 && 0 === o && 0 !== this[t + a - 1] && (o = 1),
                    this[t + a] = (e / f >> 0) - o & 255;
                return t + r
            }
            ,
            d.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e,
                t |= 0,
                !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    U(this, e, t, r, i - 1, -i)
                }
                var a = r - 1
                  , f = 1
                  , o = 0;
                this[t + a] = 255 & e;
                while (--a >= 0 && (f *= 256))
                    e < 0 && 0 === o && 0 !== this[t + a + 1] && (o = 1),
                    this[t + a] = (e / f >> 0) - o & 255;
                return t + r
            }
            ,
            d.prototype.writeInt8 = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 1, 127, -128),
                d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                e < 0 && (e = 255 + e + 1),
                this[t] = 255 & e,
                t + 1
            }
            ,
            d.prototype.writeInt16LE = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 2, 32767, -32768),
                d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8) : D(this, e, t, !0),
                t + 2
            }
            ,
            d.prototype.writeInt16BE = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 2, 32767, -32768),
                d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                this[t + 1] = 255 & e) : D(this, e, t, !1),
                t + 2
            }
            ,
            d.prototype.writeInt32LE = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 4, 2147483647, -2147483648),
                d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                this[t + 1] = e >>> 8,
                this[t + 2] = e >>> 16,
                this[t + 3] = e >>> 24) : K(this, e, t, !0),
                t + 4
            }
            ,
            d.prototype.writeInt32BE = function(e, t, r) {
                return e = +e,
                t |= 0,
                r || U(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                this[t + 1] = e >>> 16,
                this[t + 2] = e >>> 8,
                this[t + 3] = 255 & e) : K(this, e, t, !1),
                t + 4
            }
            ,
            d.prototype.writeFloatLE = function(e, t, r) {
                return Y(this, e, t, !0, r)
            }
            ,
            d.prototype.writeFloatBE = function(e, t, r) {
                return Y(this, e, t, !1, r)
            }
            ,
            d.prototype.writeDoubleLE = function(e, t, r) {
                return W(this, e, t, !0, r)
            }
            ,
            d.prototype.writeDoubleBE = function(e, t, r) {
                return W(this, e, t, !1, r)
            }
            ,
            d.prototype.copy = function(e, t, r, n) {
                if (r || (r = 0),
                n || 0 === n || (n = this.length),
                t >= e.length && (t = e.length),
                t || (t = 0),
                n > 0 && n < r && (n = r),
                n === r)
                    return 0;
                if (0 === e.length || 0 === this.length)
                    return 0;
                if (t < 0)
                    throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (n < 0)
                    throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length),
                e.length - t < n - r && (n = e.length - t + r);
                var i, a = n - r;
                if (this === e && r < t && t < n)
                    for (i = a - 1; i >= 0; --i)
                        e[i + t] = this[i + r];
                else if (a < 1e3 || !d.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < a; ++i)
                        e[i + t] = this[i + r];
                else
                    Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
                return a
            }
            ,
            d.prototype.fill = function(e, t, r, n) {
                if ("string" === typeof e) {
                    if ("string" === typeof t ? (n = t,
                    t = 0,
                    r = this.length) : "string" === typeof r && (n = r,
                    r = this.length),
                    1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" !== typeof n)
                        throw new TypeError("encoding must be a string");
                    if ("string" === typeof n && !d.isEncoding(n))
                        throw new TypeError("Unknown encoding: " + n)
                } else
                    "number" === typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r)
                    throw new RangeError("Out of range index");
                if (r <= t)
                    return this;
                var a;
                if (t >>>= 0,
                r = void 0 === r ? this.length : r >>> 0,
                e || (e = 0),
                "number" === typeof e)
                    for (a = t; a < r; ++a)
                        this[a] = e;
                else {
                    var f = d.isBuffer(e) ? e : X(new d(e,n).toString())
                      , o = f.length;
                    for (a = 0; a < r - t; ++a)
                        this[a + t] = f[a % o]
                }
                return this
            }
            ;
            var H = /[^+\/0-9A-Za-z-_]/g;
            function V(e) {
                if (e = Z(e).replace(H, ""),
                e.length < 2)
                    return "";
                while (e.length % 4 !== 0)
                    e += "=";
                return e
            }
            function Z(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }
            function J(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }
            function X(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, i = null, a = [], f = 0; f < n; ++f) {
                    if (r = e.charCodeAt(f),
                    r > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            if (f + 1 === n) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && a.push(239, 191, 189),
                            i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else
                        i && (t -= 3) > -1 && a.push(239, 191, 189);
                    if (i = null,
                    r < 128) {
                        if ((t -= 1) < 0)
                            break;
                        a.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0)
                            break;
                        a.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0)
                            break;
                        a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112))
                            throw new Error("Invalid code point");
                        if ((t -= 4) < 0)
                            break;
                        a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return a
            }
            function G(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                    t.push(255 & e.charCodeAt(r));
                return t
            }
            function $(e, t) {
                for (var r, n, i, a = [], f = 0; f < e.length; ++f) {
                    if ((t -= 2) < 0)
                        break;
                    r = e.charCodeAt(f),
                    n = r >> 8,
                    i = r % 256,
                    a.push(i),
                    a.push(n)
                }
                return a
            }
            function Q(e) {
                return n.toByteArray(V(e))
            }
            function ee(e, t, r, n) {
                for (var i = 0; i < n; ++i) {
                    if (i + r >= t.length || i >= e.length)
                        break;
                    t[i + r] = e[i]
                }
                return i
            }
            function te(e) {
                return e !== e
            }
        }
        ).call(this, r("c8ba"))
    },
    b71c: function(e, t, r) {
        "use strict";
        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(r), !0).forEach((function(t) {
                    a(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function a(e, t, r) {
            return t = d(t),
            t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function f(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, d(n.key), n)
            }
        }
        function s(e, t, r) {
            return t && o(e.prototype, t),
            r && o(e, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function d(e) {
            var t = c(e, "string");
            return "symbol" === typeof t ? t : String(t)
        }
        function c(e, t) {
            if ("object" !== typeof e || null === e)
                return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" !== typeof n)
                    return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }
        var u = r("b639")
          , h = u.Buffer
          , l = r(3)
          , b = l.inspect
          , p = b && b.custom || "inspect";
        function m(e, t, r) {
            h.prototype.copy.call(e, t, r)
        }
        e.exports = function() {
            function e() {
                f(this, e),
                this.head = null,
                this.tail = null,
                this.length = 0
            }
            return s(e, [{
                key: "push",
                value: function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t,
                    this.tail = t,
                    ++this.length
                }
            }, {
                key: "unshift",
                value: function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t),
                    this.head = t,
                    ++this.length
                }
            }, {
                key: "shift",
                value: function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                        --this.length,
                        e
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this.head = this.tail = null,
                    this.length = 0
                }
            }, {
                key: "join",
                value: function(e) {
                    if (0 === this.length)
                        return "";
                    var t = this.head
                      , r = "" + t.data;
                    while (t = t.next)
                        r += e + t.data;
                    return r
                }
            }, {
                key: "concat",
                value: function(e) {
                    if (0 === this.length)
                        return h.alloc(0);
                    var t = h.allocUnsafe(e >>> 0)
                      , r = this.head
                      , n = 0;
                    while (r)
                        m(r.data, t, n),
                        n += r.data.length,
                        r = r.next;
                    return t
                }
            }, {
                key: "consume",
                value: function(e, t) {
                    var r;
                    return e < this.head.data.length ? (r = this.head.data.slice(0, e),
                    this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e),
                    r
                }
            }, {
                key: "first",
                value: function() {
                    return this.head.data
                }
            }, {
                key: "_getString",
                value: function(e) {
                    var t = this.head
                      , r = 1
                      , n = t.data;
                    e -= n.length;
                    while (t = t.next) {
                        var i = t.data
                          , a = e > i.length ? i.length : e;
                        if (a === i.length ? n += i : n += i.slice(0, e),
                        e -= a,
                        0 === e) {
                            a === i.length ? (++r,
                            t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t,
                            t.data = i.slice(a));
                            break
                        }
                        ++r
                    }
                    return this.length -= r,
                    n
                }
            }, {
                key: "_getBuffer",
                value: function(e) {
                    var t = h.allocUnsafe(e)
                      , r = this.head
                      , n = 1;
                    r.data.copy(t),
                    e -= r.data.length;
                    while (r = r.next) {
                        var i = r.data
                          , a = e > i.length ? i.length : e;
                        if (i.copy(t, t.length - e, 0, a),
                        e -= a,
                        0 === e) {
                            a === i.length ? (++n,
                            r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r,
                            r.data = i.slice(a));
                            break
                        }
                        ++n
                    }
                    return this.length -= n,
                    t
                }
            }, {
                key: p,
                value: function(e, t) {
                    return b(this, i(i({}, t), {}, {
                        depth: 0,
                        customInspect: !1
                    }))
                }
            }]),
            e
        }()
    },
    b73f: function(e, t, r) {
        "use strict";
        var n = r("80af")
          , i = r("f3a3")
          , a = i.assert;
        function f(e, t) {
            if (e instanceof f)
                return e;
            this._importDER(e, t) || (a(e.r && e.s, "Signature without r or s"),
            this.r = new n(e.r,16),
            this.s = new n(e.s,16),
            void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
        }
        function o() {
            this.place = 0
        }
        function s(e, t) {
            var r = e[t.place++];
            if (!(128 & r))
                return r;
            var n = 15 & r;
            if (0 === n || n > 4)
                return !1;
            for (var i = 0, a = 0, f = t.place; a < n; a++,
            f++)
                i <<= 8,
                i |= e[f],
                i >>>= 0;
            return !(i <= 127) && (t.place = f,
            i)
        }
        function d(e) {
            var t = 0
              , r = e.length - 1;
            while (!e[t] && !(128 & e[t + 1]) && t < r)
                t++;
            return 0 === t ? e : e.slice(t)
        }
        function c(e, t) {
            if (t < 128)
                e.push(t);
            else {
                var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
                e.push(128 | r);
                while (--r)
                    e.push(t >>> (r << 3) & 255);
                e.push(t)
            }
        }
        e.exports = f,
        f.prototype._importDER = function(e, t) {
            e = i.toArray(e, t);
            var r = new o;
            if (48 !== e[r.place++])
                return !1;
            var a = s(e, r);
            if (!1 === a)
                return !1;
            if (a + r.place !== e.length)
                return !1;
            if (2 !== e[r.place++])
                return !1;
            var f = s(e, r);
            if (!1 === f)
                return !1;
            var d = e.slice(r.place, f + r.place);
            if (r.place += f,
            2 !== e[r.place++])
                return !1;
            var c = s(e, r);
            if (!1 === c)
                return !1;
            if (e.length !== c + r.place)
                return !1;
            var u = e.slice(r.place, c + r.place);
            if (0 === d[0]) {
                if (!(128 & d[1]))
                    return !1;
                d = d.slice(1)
            }
            if (0 === u[0]) {
                if (!(128 & u[1]))
                    return !1;
                u = u.slice(1)
            }
            return this.r = new n(d),
            this.s = new n(u),
            this.recoveryParam = null,
            !0
        }
        ,
        f.prototype.toDER = function(e) {
            var t = this.r.toArray()
              , r = this.s.toArray();
            128 & t[0] && (t = [0].concat(t)),
            128 & r[0] && (r = [0].concat(r)),
            t = d(t),
            r = d(r);
            while (!r[0] && !(128 & r[1]))
                r = r.slice(1);
            var n = [2];
            c(n, t.length),
            n = n.concat(t),
            n.push(2),
            c(n, r.length);
            var a = n.concat(r)
              , f = [48];
            return c(f, a.length),
            f = f.concat(a),
            i.encode(f, e)
        }
    },
    b7d1: function(e, t, r) {
        (function(t) {
            function r(e, t) {
                if (n("noDeprecation"))
                    return e;
                var r = !1;
                function i() {
                    if (!r) {
                        if (n("throwDeprecation"))
                            throw new Error(t);
                        n("traceDeprecation") ? console.trace(t) : console.warn(t),
                        r = !0
                    }
                    return e.apply(this, arguments)
                }
                return i
            }
            function n(e) {
                try {
                    if (!t.localStorage)
                        return !1
                } catch (n) {
                    return !1
                }
                var r = t.localStorage[e];
                return null != r && "true" === String(r).toLowerCase()
            }
            e.exports = r
        }
        ).call(this, r("c8ba"))
    },
    b8db: function(e, t, r) {
        "use strict";
        e.exports = i;
        var n = r("53e2");
        function i(e) {
            if (!(this instanceof i))
                return new i(e);
            n.call(this, e)
        }
        r("3fb5")(i, n),
        i.prototype._transform = function(e, t, r) {
            r(null, e)
        }
    },
    b9a8: function(e, t, r) {
        "use strict";
        var n = r("80af")
          , i = r("6aa2")
          , a = r("f3a3")
          , f = r("0cbb")
          , o = r("fdac")
          , s = a.assert
          , d = r("bb34")
          , c = r("b73f");
        function u(e) {
            if (!(this instanceof u))
                return new u(e);
            "string" === typeof e && (s(Object.prototype.hasOwnProperty.call(f, e), "Unknown curve " + e),
            e = f[e]),
            e instanceof f.PresetCurve && (e = {
                curve: e
            }),
            this.curve = e.curve.curve,
            this.n = this.curve.n,
            this.nh = this.n.ushrn(1),
            this.g = this.curve.g,
            this.g = e.curve.g,
            this.g.precompute(e.curve.n.bitLength() + 1),
            this.hash = e.hash || e.curve.hash
        }
        e.exports = u,
        u.prototype.keyPair = function(e) {
            return new d(this,e)
        }
        ,
        u.prototype.keyFromPrivate = function(e, t) {
            return d.fromPrivate(this, e, t)
        }
        ,
        u.prototype.keyFromPublic = function(e, t) {
            return d.fromPublic(this, e, t)
        }
        ,
        u.prototype.genKeyPair = function(e) {
            e || (e = {});
            for (var t = new i({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || o(this.hash.hmacStrength),
                entropyEnc: e.entropy && e.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), r = this.n.byteLength(), a = this.n.sub(new n(2)); ; ) {
                var f = new n(t.generate(r));
                if (!(f.cmp(a) > 0))
                    return f.iaddn(1),
                    this.keyFromPrivate(f)
            }
        }
        ,
        u.prototype._truncateToN = function(e, t) {
            var r = 8 * e.byteLength() - this.n.bitLength();
            return r > 0 && (e = e.ushrn(r)),
            !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
        }
        ,
        u.prototype.sign = function(e, t, r, a) {
            "object" === typeof r && (a = r,
            r = null),
            a || (a = {}),
            t = this.keyFromPrivate(t, r),
            e = this._truncateToN(new n(e,16));
            for (var f = this.n.byteLength(), o = t.getPrivate().toArray("be", f), s = e.toArray("be", f), d = new i({
                hash: this.hash,
                entropy: o,
                nonce: s,
                pers: a.pers,
                persEnc: a.persEnc || "utf8"
            }), u = this.n.sub(new n(1)), h = 0; ; h++) {
                var l = a.k ? a.k(h) : new n(d.generate(this.n.byteLength()));
                if (l = this._truncateToN(l, !0),
                !(l.cmpn(1) <= 0 || l.cmp(u) >= 0)) {
                    var b = this.g.mul(l);
                    if (!b.isInfinity()) {
                        var p = b.getX()
                          , m = p.umod(this.n);
                        if (0 !== m.cmpn(0)) {
                            var g = l.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                            if (g = g.umod(this.n),
                            0 !== g.cmpn(0)) {
                                var y = (b.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0);
                                return a.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g),
                                y ^= 1),
                                new c({
                                    r: m,
                                    s: g,
                                    recoveryParam: y
                                })
                            }
                        }
                    }
                }
            }
        }
        ,
        u.prototype.verify = function(e, t, r, i) {
            e = this._truncateToN(new n(e,16)),
            r = this.keyFromPublic(r, i),
            t = new c(t,"hex");
            var a = t.r
              , f = t.s;
            if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
                return !1;
            if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0)
                return !1;
            var o, s = f.invm(this.n), d = s.mul(e).umod(this.n), u = s.mul(a).umod(this.n);
            return this.curve._maxwellTrick ? (o = this.g.jmulAdd(d, r.getPublic(), u),
            !o.isInfinity() && o.eqXToP(a)) : (o = this.g.mulAdd(d, r.getPublic(), u),
            !o.isInfinity() && 0 === o.getX().umod(this.n).cmp(a))
        }
        ,
        u.prototype.recoverPubKey = function(e, t, r, i) {
            s((3 & r) === r, "The recovery param is more than two bits"),
            t = new c(t,i);
            var a = this.n
              , f = new n(e)
              , o = t.r
              , d = t.s
              , u = 1 & r
              , h = r >> 1;
            if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
                throw new Error("Unable to find sencond key candinate");
            o = h ? this.curve.pointFromX(o.add(this.curve.n), u) : this.curve.pointFromX(o, u);
            var l = t.r.invm(a)
              , b = a.sub(f).mul(l).umod(a)
              , p = d.mul(l).umod(a);
            return this.g.mulAdd(b, o, p)
        }
        ,
        u.prototype.getKeyRecoveryParam = function(e, t, r, n) {
            if (t = new c(t,n),
            null !== t.recoveryParam)
                return t.recoveryParam;
            for (var i = 0; i < 4; i++) {
                var a;
                try {
                    a = this.recoverPubKey(e, t, i)
                } catch (e) {
                    continue
                }
                if (a.eq(r))
                    return i
            }
            throw new Error("Unable to find valid recovery factor")
        }
    },
    bb34: function(e, t, r) {
        "use strict";
        var n = r("80af")
          , i = r("f3a3")
          , a = i.assert;
        function f(e, t) {
            this.ec = e,
            this.priv = null,
            this.pub = null,
            t.priv && this._importPrivate(t.priv, t.privEnc),
            t.pub && this._importPublic(t.pub, t.pubEnc)
        }
        e.exports = f,
        f.fromPublic = function(e, t, r) {
            return t instanceof f ? t : new f(e,{
                pub: t,
                pubEnc: r
            })
        }
        ,
        f.fromPrivate = function(e, t, r) {
            return t instanceof f ? t : new f(e,{
                priv: t,
                privEnc: r
            })
        }
        ,
        f.prototype.validate = function() {
            var e = this.getPublic();
            return e.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }
        ,
        f.prototype.getPublic = function(e, t) {
            return "string" === typeof e && (t = e,
            e = null),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            t ? this.pub.encode(t, e) : this.pub
        }
        ,
        f.prototype.getPrivate = function(e) {
            return "hex" === e ? this.priv.toString(16, 2) : this.priv
        }
        ,
        f.prototype._importPrivate = function(e, t) {
            this.priv = new n(e,t || 16),
            this.priv = this.priv.umod(this.ec.curve.n)
        }
        ,
        f.prototype._importPublic = function(e, t) {
            if (e.x || e.y)
                return "mont" === this.ec.curve.type ? a(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || a(e.x && e.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(e.x, e.y));
            this.pub = this.ec.curve.decodePoint(e, t)
        }
        ,
        f.prototype.derive = function(e) {
            return e.validate() || a(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
        }
        ,
        f.prototype.sign = function(e, t, r) {
            return this.ec.sign(e, this, t, r)
        }
        ,
        f.prototype.verify = function(e, t) {
            return this.ec.verify(e, t, this)
        }
        ,
        f.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
    },
    bb44: function(e, t, r) {
        "use strict";
        var n = r("c3c0")
          , i = r("edc9")
          , a = n.rotl32
          , f = n.sum32
          , o = n.sum32_3
          , s = n.sum32_4
          , d = i.BlockHash;
        function c() {
            if (!(this instanceof c))
                return new c;
            d.call(this),
            this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
            this.endian = "little"
        }
        function u(e, t, r, n) {
            return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
        }
        function h(e) {
            return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
        }
        function l(e) {
            return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
        }
        n.inherits(c, d),
        t.ripemd160 = c,
        c.blockSize = 512,
        c.outSize = 160,
        c.hmacStrength = 192,
        c.padLength = 64,
        c.prototype._update = function(e, t) {
            for (var r = this.h[0], n = this.h[1], i = this.h[2], d = this.h[3], c = this.h[4], y = r, v = n, w = i, _ = d, M = c, S = 0; S < 80; S++) {
                var A = f(a(s(r, u(S, n, i, d), e[b[S] + t], h(S)), m[S]), c);
                r = c,
                c = d,
                d = a(i, 10),
                i = n,
                n = A,
                A = f(a(s(y, u(79 - S, v, w, _), e[p[S] + t], l(S)), g[S]), M),
                y = M,
                M = _,
                _ = a(w, 10),
                w = v,
                v = A
            }
            A = o(this.h[1], i, _),
            this.h[1] = o(this.h[2], d, M),
            this.h[2] = o(this.h[3], c, y),
            this.h[3] = o(this.h[4], r, v),
            this.h[4] = o(this.h[0], n, w),
            this.h[0] = A
        }
        ,
        c.prototype._digest = function(e) {
            return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
        }
        ;
        var b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
          , p = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
          , m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
          , g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
    },
    c3c0: function(e, t, r) {
        "use strict";
        var n = r("da3e")
          , i = r("3fb5");
        function a(e, t) {
            return 55296 === (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 === (64512 & e.charCodeAt(t + 1)))
        }
        function f(e, t) {
            if (Array.isArray(e))
                return e.slice();
            if (!e)
                return [];
            var r = [];
            if ("string" === typeof e)
                if (t) {
                    if ("hex" === t)
                        for (e = e.replace(/[^a-z0-9]+/gi, ""),
                        e.length % 2 !== 0 && (e = "0" + e),
                        i = 0; i < e.length; i += 2)
                            r.push(parseInt(e[i] + e[i + 1], 16))
                } else
                    for (var n = 0, i = 0; i < e.length; i++) {
                        var f = e.charCodeAt(i);
                        f < 128 ? r[n++] = f : f < 2048 ? (r[n++] = f >> 6 | 192,
                        r[n++] = 63 & f | 128) : a(e, i) ? (f = 65536 + ((1023 & f) << 10) + (1023 & e.charCodeAt(++i)),
                        r[n++] = f >> 18 | 240,
                        r[n++] = f >> 12 & 63 | 128,
                        r[n++] = f >> 6 & 63 | 128,
                        r[n++] = 63 & f | 128) : (r[n++] = f >> 12 | 224,
                        r[n++] = f >> 6 & 63 | 128,
                        r[n++] = 63 & f | 128)
                    }
            else
                for (i = 0; i < e.length; i++)
                    r[i] = 0 | e[i];
            return r
        }
        function o(e) {
            for (var t = "", r = 0; r < e.length; r++)
                t += c(e[r].toString(16));
            return t
        }
        function s(e) {
            var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24;
            return t >>> 0
        }
        function d(e, t) {
            for (var r = "", n = 0; n < e.length; n++) {
                var i = e[n];
                "little" === t && (i = s(i)),
                r += u(i.toString(16))
            }
            return r
        }
        function c(e) {
            return 1 === e.length ? "0" + e : e
        }
        function u(e) {
            return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
        }
        function h(e, t, r, i) {
            var a = r - t;
            n(a % 4 === 0);
            for (var f = new Array(a / 4), o = 0, s = t; o < f.length; o++,
            s += 4) {
                var d;
                d = "big" === i ? e[s] << 24 | e[s + 1] << 16 | e[s + 2] << 8 | e[s + 3] : e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s],
                f[o] = d >>> 0
            }
            return f
        }
        function l(e, t) {
            for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++,
            i += 4) {
                var a = e[n];
                "big" === t ? (r[i] = a >>> 24,
                r[i + 1] = a >>> 16 & 255,
                r[i + 2] = a >>> 8 & 255,
                r[i + 3] = 255 & a) : (r[i + 3] = a >>> 24,
                r[i + 2] = a >>> 16 & 255,
                r[i + 1] = a >>> 8 & 255,
                r[i] = 255 & a)
            }
            return r
        }
        function b(e, t) {
            return e >>> t | e << 32 - t
        }
        function p(e, t) {
            return e << t | e >>> 32 - t
        }
        function m(e, t) {
            return e + t >>> 0
        }
        function g(e, t, r) {
            return e + t + r >>> 0
        }
        function y(e, t, r, n) {
            return e + t + r + n >>> 0
        }
        function v(e, t, r, n, i) {
            return e + t + r + n + i >>> 0
        }
        function w(e, t, r, n) {
            var i = e[t]
              , a = e[t + 1]
              , f = n + a >>> 0
              , o = (f < n ? 1 : 0) + r + i;
            e[t] = o >>> 0,
            e[t + 1] = f
        }
        function _(e, t, r, n) {
            var i = t + n >>> 0
              , a = (i < t ? 1 : 0) + e + r;
            return a >>> 0
        }
        function M(e, t, r, n) {
            var i = t + n;
            return i >>> 0
        }
        function S(e, t, r, n, i, a, f, o) {
            var s = 0
              , d = t;
            d = d + n >>> 0,
            s += d < t ? 1 : 0,
            d = d + a >>> 0,
            s += d < a ? 1 : 0,
            d = d + o >>> 0,
            s += d < o ? 1 : 0;
            var c = e + r + i + f + s;
            return c >>> 0
        }
        function A(e, t, r, n, i, a, f, o) {
            var s = t + n + a + o;
            return s >>> 0
        }
        function E(e, t, r, n, i, a, f, o, s, d) {
            var c = 0
              , u = t;
            u = u + n >>> 0,
            c += u < t ? 1 : 0,
            u = u + a >>> 0,
            c += u < a ? 1 : 0,
            u = u + o >>> 0,
            c += u < o ? 1 : 0,
            u = u + d >>> 0,
            c += u < d ? 1 : 0;
            var h = e + r + i + f + s + c;
            return h >>> 0
        }
        function R(e, t, r, n, i, a, f, o, s, d) {
            var c = t + n + a + o + d;
            return c >>> 0
        }
        function x(e, t, r) {
            var n = t << 32 - r | e >>> r;
            return n >>> 0
        }
        function k(e, t, r) {
            var n = e << 32 - r | t >>> r;
            return n >>> 0
        }
        function I(e, t, r) {
            return e >>> r
        }
        function P(e, t, r) {
            var n = e << 32 - r | t >>> r;
            return n >>> 0
        }
        t.inherits = i,
        t.toArray = f,
        t.toHex = o,
        t.htonl = s,
        t.toHex32 = d,
        t.zero2 = c,
        t.zero8 = u,
        t.join32 = h,
        t.split32 = l,
        t.rotr32 = b,
        t.rotl32 = p,
        t.sum32 = m,
        t.sum32_3 = g,
        t.sum32_4 = y,
        t.sum32_5 = v,
        t.sum64 = w,
        t.sum64_hi = _,
        t.sum64_lo = M,
        t.sum64_4_hi = S,
        t.sum64_4_lo = A,
        t.sum64_5_hi = E,
        t.sum64_5_lo = R,
        t.rotr64_hi = x,
        t.rotr64_lo = k,
        t.shr64_hi = I,
        t.shr64_lo = P
    },
    c8ba: function(e, t) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (n) {
            "object" === typeof window && (r = window)
        }
        e.exports = r
    },
    c98c: function(e, t, r) {
        const n = r("e073")
          , i = r("92a9");
        e.exports = function(e) {
            const t = n(e)
              , r = i(e);
            return function(e, n) {
                const i = "string" === typeof e ? e.toLowerCase() : e;
                switch (i) {
                case "keccak224":
                    return new t(1152,448,null,224,n);
                case "keccak256":
                    return new t(1088,512,null,256,n);
                case "keccak384":
                    return new t(832,768,null,384,n);
                case "keccak512":
                    return new t(576,1024,null,512,n);
                case "sha3-224":
                    return new t(1152,448,6,224,n);
                case "sha3-256":
                    return new t(1088,512,6,256,n);
                case "sha3-384":
                    return new t(832,768,6,384,n);
                case "sha3-512":
                    return new t(576,1024,6,512,n);
                case "shake128":
                    return new r(1344,256,31,n);
                case "shake256":
                    return new r(1088,512,31,n);
                default:
                    throw new Error("Invald algorithm: " + e)
                }
            }
        }
    },
    d2b2: function(e, t) {
        e.exports = function() {
            throw new Error("Readable.from is not available in the browser")
        }
    },
    da3e: function(e, t) {
        function r(e, t) {
            if (!e)
                throw new Error(t || "Assertion failed")
        }
        e.exports = r,
        r.equal = function(e, t, r) {
            if (e != t)
                throw new Error(r || "Assertion failed: " + e + " != " + t)
        }
    },
    df7c: function(e, t, r) {
        (function(e) {
            function r(e, t) {
                for (var r = 0, n = e.length - 1; n >= 0; n--) {
                    var i = e[n];
                    "." === i ? e.splice(n, 1) : ".." === i ? (e.splice(n, 1),
                    r++) : r && (e.splice(n, 1),
                    r--)
                }
                if (t)
                    for (; r--; r)
                        e.unshift("..");
                return e
            }
            function n(e) {
                "string" !== typeof e && (e += "");
                var t, r = 0, n = -1, i = !0;
                for (t = e.length - 1; t >= 0; --t)
                    if (47 === e.charCodeAt(t)) {
                        if (!i) {
                            r = t + 1;
                            break
                        }
                    } else
                        -1 === n && (i = !1,
                        n = t + 1);
                return -1 === n ? "" : e.slice(r, n)
            }
            function i(e, t) {
                if (e.filter)
                    return e.filter(t);
                for (var r = [], n = 0; n < e.length; n++)
                    t(e[n], n, e) && r.push(e[n]);
                return r
            }
            t.resolve = function() {
                for (var t = "", n = !1, a = arguments.length - 1; a >= -1 && !n; a--) {
                    var f = a >= 0 ? arguments[a] : e.cwd();
                    if ("string" !== typeof f)
                        throw new TypeError("Arguments to path.resolve must be strings");
                    f && (t = f + "/" + t,
                    n = "/" === f.charAt(0))
                }
                return t = r(i(t.split("/"), (function(e) {
                    return !!e
                }
                )), !n).join("/"),
                (n ? "/" : "") + t || "."
            }
            ,
            t.normalize = function(e) {
                var n = t.isAbsolute(e)
                  , f = "/" === a(e, -1);
                return e = r(i(e.split("/"), (function(e) {
                    return !!e
                }
                )), !n).join("/"),
                e || n || (e = "."),
                e && f && (e += "/"),
                (n ? "/" : "") + e
            }
            ,
            t.isAbsolute = function(e) {
                return "/" === e.charAt(0)
            }
            ,
            t.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return t.normalize(i(e, (function(e, t) {
                    if ("string" !== typeof e)
                        throw new TypeError("Arguments to path.join must be strings");
                    return e
                }
                )).join("/"))
            }
            ,
            t.relative = function(e, r) {
                function n(e) {
                    for (var t = 0; t < e.length; t++)
                        if ("" !== e[t])
                            break;
                    for (var r = e.length - 1; r >= 0; r--)
                        if ("" !== e[r])
                            break;
                    return t > r ? [] : e.slice(t, r - t + 1)
                }
                e = t.resolve(e).substr(1),
                r = t.resolve(r).substr(1);
                for (var i = n(e.split("/")), a = n(r.split("/")), f = Math.min(i.length, a.length), o = f, s = 0; s < f; s++)
                    if (i[s] !== a[s]) {
                        o = s;
                        break
                    }
                var d = [];
                for (s = o; s < i.length; s++)
                    d.push("..");
                return d = d.concat(a.slice(o)),
                d.join("/")
            }
            ,
            t.sep = "/",
            t.delimiter = ":",
            t.dirname = function(e) {
                if ("string" !== typeof e && (e += ""),
                0 === e.length)
                    return ".";
                for (var t = e.charCodeAt(0), r = 47 === t, n = -1, i = !0, a = e.length - 1; a >= 1; --a)
                    if (t = e.charCodeAt(a),
                    47 === t) {
                        if (!i) {
                            n = a;
                            break
                        }
                    } else
                        i = !1;
                return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : e.slice(0, n)
            }
            ,
            t.basename = function(e, t) {
                var r = n(e);
                return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)),
                r
            }
            ,
            t.extname = function(e) {
                "string" !== typeof e && (e += "");
                for (var t = -1, r = 0, n = -1, i = !0, a = 0, f = e.length - 1; f >= 0; --f) {
                    var o = e.charCodeAt(f);
                    if (47 !== o)
                        -1 === n && (i = !1,
                        n = f + 1),
                        46 === o ? -1 === t ? t = f : 1 !== a && (a = 1) : -1 !== t && (a = -1);
                    else if (!i) {
                        r = f + 1;
                        break
                    }
                }
                return -1 === t || -1 === n || 0 === a || 1 === a && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
            }
            ;
            var a = "b" === "ab".substr(-1) ? function(e, t, r) {
                return e.substr(t, r)
            }
            : function(e, t, r) {
                return t < 0 && (t = e.length + t),
                e.substr(t, r)
            }
        }
        ).call(this, r("4362"))
    },
    e073: function(e, t, r) {
        (function(t) {
            const {Transform: n} = r("e399");
            e.exports = e=>class r extends n {
                constructor(t, r, n, i, a) {
                    super(a),
                    this._rate = t,
                    this._capacity = r,
                    this._delimitedSuffix = n,
                    this._hashBitLength = i,
                    this._options = a,
                    this._state = new e,
                    this._state.initialize(t, r),
                    this._finalized = !1
                }
                _transform(e, t, r) {
                    let n = null;
                    try {
                        this.update(e, t)
                    } catch (i) {
                        n = i
                    }
                    r(n)
                }
                _flush(e) {
                    let t = null;
                    try {
                        this.push(this.digest())
                    } catch (r) {
                        t = r
                    }
                    e(t)
                }
                update(e, r) {
                    if (!t.isBuffer(e) && "string" !== typeof e)
                        throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized)
                        throw new Error("Digest already called");
                    return t.isBuffer(e) || (e = t.from(e, r)),
                    this._state.absorb(e),
                    this
                }
                digest(e) {
                    if (this._finalized)
                        throw new Error("Digest already called");
                    this._finalized = !0,
                    this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                    let t = this._state.squeeze(this._hashBitLength / 8);
                    return void 0 !== e && (t = t.toString(e)),
                    this._resetState(),
                    t
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity),
                    this
                }
                _clone() {
                    const e = new r(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);
                    return this._state.copy(e._state),
                    e._finalized = this._finalized,
                    e
                }
            }
        }
        ).call(this, r("b639").Buffer)
    },
    e399: function(e, t, r) {
        t = e.exports = r("68a0"),
        t.Stream = t,
        t.Readable = t,
        t.Writable = r("9bdc"),
        t.Duplex = r("88a2"),
        t.Transform = r("53e2"),
        t.PassThrough = r("b8db"),
        t.finished = r("65ab"),
        t.pipeline = r("018a")
    },
    e3db: function(e, t) {
        var r = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == r.call(e)
        }
    },
    ea53: function(e, t, r) {
        "use strict";
        var n = r("80af")
          , i = r("f3a3")
          , a = i.getNAF
          , f = i.getJSF
          , o = i.assert;
        function s(e, t) {
            this.type = e,
            this.p = new n(t.p,16),
            this.red = t.prime ? n.red(t.prime) : n.mont(this.p),
            this.zero = new n(0).toRed(this.red),
            this.one = new n(1).toRed(this.red),
            this.two = new n(2).toRed(this.red),
            this.n = t.n && new n(t.n,16),
            this.g = t.g && this.pointFromJSON(t.g, t.gRed),
            this._wnafT1 = new Array(4),
            this._wnafT2 = new Array(4),
            this._wnafT3 = new Array(4),
            this._wnafT4 = new Array(4),
            this._bitLength = this.n ? this.n.bitLength() : 0;
            var r = this.n && this.p.div(this.n);
            !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
            this.redN = this.n.toRed(this.red))
        }
        function d(e, t) {
            this.curve = e,
            this.type = t,
            this.precomputed = null
        }
        e.exports = s,
        s.prototype.point = function() {
            throw new Error("Not implemented")
        }
        ,
        s.prototype.validate = function() {
            throw new Error("Not implemented")
        }
        ,
        s.prototype._fixedNafMul = function(e, t) {
            o(e.precomputed);
            var r = e._getDoubles()
              , n = a(t, 1, this._bitLength)
              , i = (1 << r.step + 1) - (r.step % 2 === 0 ? 2 : 1);
            i /= 3;
            var f, s, d = [];
            for (f = 0; f < n.length; f += r.step) {
                s = 0;
                for (var c = f + r.step - 1; c >= f; c--)
                    s = (s << 1) + n[c];
                d.push(s)
            }
            for (var u = this.jpoint(null, null, null), h = this.jpoint(null, null, null), l = i; l > 0; l--) {
                for (f = 0; f < d.length; f++)
                    s = d[f],
                    s === l ? h = h.mixedAdd(r.points[f]) : s === -l && (h = h.mixedAdd(r.points[f].neg()));
                u = u.add(h)
            }
            return u.toP()
        }
        ,
        s.prototype._wnafMul = function(e, t) {
            var r = 4
              , n = e._getNAFPoints(r);
            r = n.wnd;
            for (var i = n.points, f = a(t, r, this._bitLength), s = this.jpoint(null, null, null), d = f.length - 1; d >= 0; d--) {
                for (var c = 0; d >= 0 && 0 === f[d]; d--)
                    c++;
                if (d >= 0 && c++,
                s = s.dblp(c),
                d < 0)
                    break;
                var u = f[d];
                o(0 !== u),
                s = "affine" === e.type ? u > 0 ? s.mixedAdd(i[u - 1 >> 1]) : s.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? s.add(i[u - 1 >> 1]) : s.add(i[-u - 1 >> 1].neg())
            }
            return "affine" === e.type ? s.toP() : s
        }
        ,
        s.prototype._wnafMulAdd = function(e, t, r, n, i) {
            var o, s, d, c = this._wnafT1, u = this._wnafT2, h = this._wnafT3, l = 0;
            for (o = 0; o < n; o++) {
                d = t[o];
                var b = d._getNAFPoints(e);
                c[o] = b.wnd,
                u[o] = b.points
            }
            for (o = n - 1; o >= 1; o -= 2) {
                var p = o - 1
                  , m = o;
                if (1 === c[p] && 1 === c[m]) {
                    var g = [t[p], null, null, t[m]];
                    0 === t[p].y.cmp(t[m].y) ? (g[1] = t[p].add(t[m]),
                    g[2] = t[p].toJ().mixedAdd(t[m].neg())) : 0 === t[p].y.cmp(t[m].y.redNeg()) ? (g[1] = t[p].toJ().mixedAdd(t[m]),
                    g[2] = t[p].add(t[m].neg())) : (g[1] = t[p].toJ().mixedAdd(t[m]),
                    g[2] = t[p].toJ().mixedAdd(t[m].neg()));
                    var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                      , v = f(r[p], r[m]);
                    for (l = Math.max(v[0].length, l),
                    h[p] = new Array(l),
                    h[m] = new Array(l),
                    s = 0; s < l; s++) {
                        var w = 0 | v[0][s]
                          , _ = 0 | v[1][s];
                        h[p][s] = y[3 * (w + 1) + (_ + 1)],
                        h[m][s] = 0,
                        u[p] = g
                    }
                } else
                    h[p] = a(r[p], c[p], this._bitLength),
                    h[m] = a(r[m], c[m], this._bitLength),
                    l = Math.max(h[p].length, l),
                    l = Math.max(h[m].length, l)
            }
            var M = this.jpoint(null, null, null)
              , S = this._wnafT4;
            for (o = l; o >= 0; o--) {
                var A = 0;
                while (o >= 0) {
                    var E = !0;
                    for (s = 0; s < n; s++)
                        S[s] = 0 | h[s][o],
                        0 !== S[s] && (E = !1);
                    if (!E)
                        break;
                    A++,
                    o--
                }
                if (o >= 0 && A++,
                M = M.dblp(A),
                o < 0)
                    break;
                for (s = 0; s < n; s++) {
                    var R = S[s];
                    0 !== R && (R > 0 ? d = u[s][R - 1 >> 1] : R < 0 && (d = u[s][-R - 1 >> 1].neg()),
                    M = "affine" === d.type ? M.mixedAdd(d) : M.add(d))
                }
            }
            for (o = 0; o < n; o++)
                u[o] = null;
            return i ? M : M.toP()
        }
        ,
        s.BasePoint = d,
        d.prototype.eq = function() {
            throw new Error("Not implemented")
        }
        ,
        d.prototype.validate = function() {
            return this.curve.validate(this)
        }
        ,
        s.prototype.decodePoint = function(e, t) {
            e = i.toArray(e, t);
            var r = this.p.byteLength();
            if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 === 2 * r) {
                6 === e[0] ? o(e[e.length - 1] % 2 === 0) : 7 === e[0] && o(e[e.length - 1] % 2 === 1);
                var n = this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
                return n
            }
            if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
                return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
            throw new Error("Unknown point format")
        }
        ,
        d.prototype.encodeCompressed = function(e) {
            return this.encode(e, !0)
        }
        ,
        d.prototype._encode = function(e) {
            var t = this.curve.p.byteLength()
              , r = this.getX().toArray("be", t);
            return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
        }
        ,
        d.prototype.encode = function(e, t) {
            return i.encode(this._encode(t), e)
        }
        ,
        d.prototype.precompute = function(e) {
            if (this.precomputed)
                return this;
            var t = {
                doubles: null,
                naf: null,
                beta: null
            };
            return t.naf = this._getNAFPoints(8),
            t.doubles = this._getDoubles(4, e),
            t.beta = this._getBeta(),
            this.precomputed = t,
            this
        }
        ,
        d.prototype._hasDoubles = function(e) {
            if (!this.precomputed)
                return !1;
            var t = this.precomputed.doubles;
            return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
        }
        ,
        d.prototype._getDoubles = function(e, t) {
            if (this.precomputed && this.precomputed.doubles)
                return this.precomputed.doubles;
            for (var r = [this], n = this, i = 0; i < t; i += e) {
                for (var a = 0; a < e; a++)
                    n = n.dbl();
                r.push(n)
            }
            return {
                step: e,
                points: r
            }
        }
        ,
        d.prototype._getNAFPoints = function(e) {
            if (this.precomputed && this.precomputed.naf)
                return this.precomputed.naf;
            for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
                t[i] = t[i - 1].add(n);
            return {
                wnd: e,
                points: t
            }
        }
        ,
        d.prototype._getBeta = function() {
            return null
        }
        ,
        d.prototype.dblp = function(e) {
            for (var t = this, r = 0; r < e; r++)
                t = t.dbl();
            return t
        }
    },
    edc9: function(e, t, r) {
        "use strict";
        var n = r("c3c0")
          , i = r("da3e");
        function a() {
            this.pending = null,
            this.pendingTotal = 0,
            this.blockSize = this.constructor.blockSize,
            this.outSize = this.constructor.outSize,
            this.hmacStrength = this.constructor.hmacStrength,
            this.padLength = this.constructor.padLength / 8,
            this.endian = "big",
            this._delta8 = this.blockSize / 8,
            this._delta32 = this.blockSize / 32
        }
        t.BlockHash = a,
        a.prototype.update = function(e, t) {
            if (e = n.toArray(e, t),
            this.pending ? this.pending = this.pending.concat(e) : this.pending = e,
            this.pendingTotal += e.length,
            this.pending.length >= this._delta8) {
                e = this.pending;
                var r = e.length % this._delta8;
                this.pending = e.slice(e.length - r, e.length),
                0 === this.pending.length && (this.pending = null),
                e = n.join32(e, 0, e.length - r, this.endian);
                for (var i = 0; i < e.length; i += this._delta32)
                    this._update(e, i, i + this._delta32)
            }
            return this
        }
        ,
        a.prototype.digest = function(e) {
            return this.update(this._pad()),
            i(null === this.pending),
            this._digest(e)
        }
        ,
        a.prototype._pad = function() {
            var e = this.pendingTotal
              , t = this._delta8
              , r = t - (e + this.padLength) % t
              , n = new Array(r + this.padLength);
            n[0] = 128;
            for (var i = 1; i < r; i++)
                n[i] = 0;
            if (e <<= 3,
            "big" === this.endian) {
                for (var a = 8; a < this.padLength; a++)
                    n[i++] = 0;
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = e >>> 24 & 255,
                n[i++] = e >>> 16 & 255,
                n[i++] = e >>> 8 & 255,
                n[i++] = 255 & e
            } else
                for (n[i++] = 255 & e,
                n[i++] = e >>> 8 & 255,
                n[i++] = e >>> 16 & 255,
                n[i++] = e >>> 24 & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                a = 8; a < this.padLength; a++)
                    n[i++] = 0;
            return n
        }
    },
    f3a3: function(e, t, r) {
        "use strict";
        var n = t
          , i = r("80af")
          , a = r("da3e")
          , f = r("7658");
        function o(e, t, r) {
            var n = new Array(Math.max(e.bitLength(), r) + 1);
            n.fill(0);
            for (var i = 1 << t + 1, a = e.clone(), f = 0; f < n.length; f++) {
                var o, s = a.andln(i - 1);
                a.isOdd() ? (o = s > (i >> 1) - 1 ? (i >> 1) - s : s,
                a.isubn(o)) : o = 0,
                n[f] = o,
                a.iushrn(1)
            }
            return n
        }
        function s(e, t) {
            var r = [[], []];
            e = e.clone(),
            t = t.clone();
            var n, i = 0, a = 0;
            while (e.cmpn(-i) > 0 || t.cmpn(-a) > 0) {
                var f, o, s = e.andln(3) + i & 3, d = t.andln(3) + a & 3;
                3 === s && (s = -1),
                3 === d && (d = -1),
                0 === (1 & s) ? f = 0 : (n = e.andln(7) + i & 7,
                f = 3 !== n && 5 !== n || 2 !== d ? s : -s),
                r[0].push(f),
                0 === (1 & d) ? o = 0 : (n = t.andln(7) + a & 7,
                o = 3 !== n && 5 !== n || 2 !== s ? d : -d),
                r[1].push(o),
                2 * i === f + 1 && (i = 1 - i),
                2 * a === o + 1 && (a = 1 - a),
                e.iushrn(1),
                t.iushrn(1)
            }
            return r
        }
        function d(e, t, r) {
            var n = "_" + t;
            e.prototype[t] = function() {
                return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
            }
        }
        function c(e) {
            return "string" === typeof e ? n.toArray(e, "hex") : e
        }
        function u(e) {
            return new i(e,"hex","le")
        }
        n.assert = a,
        n.toArray = f.toArray,
        n.zero2 = f.zero2,
        n.toHex = f.toHex,
        n.encode = f.encode,
        n.getNAF = o,
        n.getJSF = s,
        n.cachedProperty = d,
        n.parseBytes = c,
        n.intFromLE = u
    },
    faa1: function(e, t, r) {
        "use strict";
        var n, i = "object" === typeof Reflect ? Reflect : null, a = i && "function" === typeof i.apply ? i.apply : function(e, t, r) {
            return Function.prototype.apply.call(e, t, r)
        }
        ;
        function f(e) {
            console && console.warn && console.warn(e)
        }
        n = i && "function" === typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var o = Number.isNaN || function(e) {
            return e !== e
        }
        ;
        function s() {
            s.init.call(this)
        }
        e.exports = s,
        e.exports.once = w,
        s.EventEmitter = s,
        s.prototype._events = void 0,
        s.prototype._eventsCount = 0,
        s.prototype._maxListeners = void 0;
        var d = 10;
        function c(e) {
            if ("function" !== typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function u(e) {
            return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
        }
        function h(e, t, r, n) {
            var i, a, o;
            if (c(r),
            a = e._events,
            void 0 === a ? (a = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
            a = e._events),
            o = a[t]),
            void 0 === o)
                o = a[t] = r,
                ++e._eventsCount;
            else if ("function" === typeof o ? o = a[t] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r),
            i = u(e),
            i > 0 && o.length > i && !o.warned) {
                o.warned = !0;
                var s = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                s.name = "MaxListenersExceededWarning",
                s.emitter = e,
                s.type = t,
                s.count = o.length,
                f(s)
            }
            return e
        }
        function l() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function b(e, t, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            }
              , i = l.bind(n);
            return i.listener = r,
            n.wrapFn = i,
            i
        }
        function p(e, t, r) {
            var n = e._events;
            if (void 0 === n)
                return [];
            var i = n[t];
            return void 0 === i ? [] : "function" === typeof i ? r ? [i.listener || i] : [i] : r ? v(i) : g(i, i.length)
        }
        function m(e) {
            var t = this._events;
            if (void 0 !== t) {
                var r = t[e];
                if ("function" === typeof r)
                    return 1;
                if (void 0 !== r)
                    return r.length
            }
            return 0
        }
        function g(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n)
                r[n] = e[n];
            return r
        }
        function y(e, t) {
            for (; t + 1 < e.length; t++)
                e[t] = e[t + 1];
            e.pop()
        }
        function v(e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
            return t
        }
        function w(e, t) {
            return new Promise((function(r, n) {
                function i(r) {
                    e.removeListener(t, a),
                    n(r)
                }
                function a() {
                    "function" === typeof e.removeListener && e.removeListener("error", i),
                    r([].slice.call(arguments))
                }
                M(e, t, a, {
                    once: !0
                }),
                "error" !== t && _(e, i, {
                    once: !0
                })
            }
            ))
        }
        function _(e, t, r) {
            "function" === typeof e.on && M(e, "error", t, r)
        }
        function M(e, t, r, n) {
            if ("function" === typeof e.on)
                n.once ? e.once(t, r) : e.on(t, r);
            else {
                if ("function" !== typeof e.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function i(a) {
                    n.once && e.removeEventListener(t, i),
                    r(a)
                }
                ))
            }
        }
        Object.defineProperty(s, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return d
            },
            set: function(e) {
                if ("number" !== typeof e || e < 0 || o(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                d = e
            }
        }),
        s.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        s.prototype.setMaxListeners = function(e) {
            if ("number" !== typeof e || e < 0 || o(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        s.prototype.getMaxListeners = function() {
            return u(this)
        }
        ,
        s.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t.push(arguments[r]);
            var n = "error" === e
              , i = this._events;
            if (void 0 !== i)
                n = n && void 0 === i.error;
            else if (!n)
                return !1;
            if (n) {
                var f;
                if (t.length > 0 && (f = t[0]),
                f instanceof Error)
                    throw f;
                var o = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
                throw o.context = f,
                o
            }
            var s = i[e];
            if (void 0 === s)
                return !1;
            if ("function" === typeof s)
                a(s, this, t);
            else {
                var d = s.length
                  , c = g(s, d);
                for (r = 0; r < d; ++r)
                    a(c[r], this, t)
            }
            return !0
        }
        ,
        s.prototype.addListener = function(e, t) {
            return h(this, e, t, !1)
        }
        ,
        s.prototype.on = s.prototype.addListener,
        s.prototype.prependListener = function(e, t) {
            return h(this, e, t, !0)
        }
        ,
        s.prototype.once = function(e, t) {
            return c(t),
            this.on(e, b(this, e, t)),
            this
        }
        ,
        s.prototype.prependOnceListener = function(e, t) {
            return c(t),
            this.prependListener(e, b(this, e, t)),
            this
        }
        ,
        s.prototype.removeListener = function(e, t) {
            var r, n, i, a, f;
            if (c(t),
            n = this._events,
            void 0 === n)
                return this;
            if (r = n[e],
            void 0 === r)
                return this;
            if (r === t || r.listener === t)
                0 === --this._eventsCount ? this._events = Object.create(null) : (delete n[e],
                n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" !== typeof r) {
                for (i = -1,
                a = r.length - 1; a >= 0; a--)
                    if (r[a] === t || r[a].listener === t) {
                        f = r[a].listener,
                        i = a;
                        break
                    }
                if (i < 0)
                    return this;
                0 === i ? r.shift() : y(r, i),
                1 === r.length && (n[e] = r[0]),
                void 0 !== n.removeListener && this.emit("removeListener", e, f || t)
            }
            return this
        }
        ,
        s.prototype.off = s.prototype.removeListener,
        s.prototype.removeAllListeners = function(e) {
            var t, r, n;
            if (r = this._events,
            void 0 === r)
                return this;
            if (void 0 === r.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== r[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete r[e]),
                this;
            if (0 === arguments.length) {
                var i, a = Object.keys(r);
                for (n = 0; n < a.length; ++n)
                    i = a[n],
                    "removeListener" !== i && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if (t = r[e],
            "function" === typeof t)
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--)
                    this.removeListener(e, t[n]);
            return this
        }
        ,
        s.prototype.listeners = function(e) {
            return p(this, e, !0)
        }
        ,
        s.prototype.rawListeners = function(e) {
            return p(this, e, !1)
        }
        ,
        s.listenerCount = function(e, t) {
            return "function" === typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t)
        }
        ,
        s.prototype.listenerCount = m,
        s.prototype.eventNames = function() {
            return this._eventsCount > 0 ? n(this._events) : []
        }
    },
    fdac: function(e, t, r) {
        var n;
        function i(e) {
            this.rand = e
        }
        if (e.exports = function(e) {
            return n || (n = new i(null)),
            n.generate(e)
        }
        ,
        e.exports.Rand = i,
        i.prototype.generate = function(e) {
            return this._rand(e)
        }
        ,
        i.prototype._rand = function(e) {
            if (this.rand.getBytes)
                return this.rand.getBytes(e);
            for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
                t[r] = this.rand.getByte();
            return t
        }
        ,
        "object" === typeof self)
            self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(e) {
                var t = new Uint8Array(e);
                return self.crypto.getRandomValues(t),
                t
            }
            : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(e) {
                var t = new Uint8Array(e);
                return self.msCrypto.getRandomValues(t),
                t
            }
            : "object" === typeof window && (i.prototype._rand = function() {
                throw new Error("Not implemented yet")
            }
            );
        else
            try {
                var a = r(1);
                if ("function" !== typeof a.randomBytes)
                    throw new Error("Not supported");
                i.prototype._rand = function(e) {
                    return a.randomBytes(e)
                }
            } catch (f) {}
    }
});
