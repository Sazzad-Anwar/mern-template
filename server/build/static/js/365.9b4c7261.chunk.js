(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [365],
  {
    2365: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return f;
          },
        });
      n(2791);
      var r = n(6871),
        i = n(2419),
        s = n(2065),
        a = n(7892),
        o = n.n(a),
        c = n(7528),
        u = n(8717),
        l = n(184);
      function f() {
        var t = (0, r.UO)().id,
          e = (0, i.ZP)("/error-logs/".concat(t), s.Z).data,
          n = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/error-logs", name: "Error Logs" },
            { isLink: !1, link: "", name: t },
          ];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(u.Z, { details: n }),
            (0, l.jsxs)("pre", {
              className: "dark:text-white pt-3 text-base",
              children: [
                "Error title : ",
                e && e.data.message,
                (0, l.jsx)("br", {}),
                "Error accrued at",
                " ",
                (0, l.jsx)(c.Z, {
                  color: "purple",
                  children: (0, l.jsx)("span", {
                    className: "text-base font-medium",
                    children:
                      e &&
                      o()(e.data.createdAt).format("MMMM DD, YYYY h:mm:ss a"),
                  }),
                }),
                (0, l.jsx)("br", {}),
                "Error originated by: ",
                e && e.data.IP,
                (0, l.jsx)("br", {}),
                e && e.data.stack,
              ],
            }),
          ],
        });
      }
    },
    2065: function (t, e, n) {
      "use strict";
      var r = n(1033);
      e.Z = function (t) {
        return r.Z.get(t).then(function (t) {
          return t.data;
        });
      };
    },
    732: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return c;
        },
      });
      var r = n(1413),
        i = n(2791),
        s = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
                },
              },
            ],
          },
          name: "close",
          theme: "outlined",
        },
        a = n(4291),
        o = function (t, e) {
          return i.createElement(
            a.Z,
            (0, r.Z)((0, r.Z)({}, t), {}, { ref: e, icon: s })
          );
        };
      o.displayName = "CloseOutlined";
      var c = i.forwardRef(o);
    },
    7528: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return b;
        },
      });
      var r = n(4942),
        i = n(7462),
        s = n(9439),
        a = n(2791),
        o = n(1694),
        c = n.n(o),
        u = n(1818),
        l = n(732),
        f = n(9077),
        h = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
              e.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                (n[r[i]] = t[r[i]]);
          }
          return n;
        },
        d = function (t) {
          var e,
            n = t.prefixCls,
            s = t.className,
            o = t.checked,
            u = t.onChange,
            l = t.onClick,
            d = h(t, [
              "prefixCls",
              "className",
              "checked",
              "onChange",
              "onClick",
            ]),
            $ = (0, a.useContext(f.E_).getPrefixCls)("tag", n),
            m = c()(
              $,
              ((e = {}),
              (0, r.Z)(e, "".concat($, "-checkable"), !0),
              (0, r.Z)(e, "".concat($, "-checkable-checked"), o),
              e),
              s
            );
          return a.createElement(
            "span",
            (0, i.Z)({}, d, {
              className: m,
              onClick: function (t) {
                null === u || void 0 === u || u(!o),
                  null === l || void 0 === l || l(t);
              },
            })
          );
        },
        $ = n(4466),
        m = n(2833),
        p = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
              e.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                (n[r[i]] = t[r[i]]);
          }
          return n;
        },
        v = new RegExp("^(".concat($.Y.join("|"), ")(-inverse)?$")),
        g = new RegExp("^(".concat($.E.join("|"), ")$")),
        y = function (t, e) {
          var n,
            o = t.prefixCls,
            h = t.className,
            d = t.style,
            $ = t.children,
            y = t.icon,
            M = t.color,
            b = t.onClose,
            O = t.closeIcon,
            w = t.closable,
            D = void 0 !== w && w,
            S = p(t, [
              "prefixCls",
              "className",
              "style",
              "children",
              "icon",
              "color",
              "onClose",
              "closeIcon",
              "closable",
            ]),
            x = a.useContext(f.E_),
            k = x.getPrefixCls,
            C = x.direction,
            Z = a.useState(!0),
            _ = (0, s.Z)(Z, 2),
            j = _[0],
            E = _[1];
          a.useEffect(
            function () {
              "visible" in S && E(S.visible);
            },
            [S.visible]
          );
          var Y = function () {
              return !!M && (v.test(M) || g.test(M));
            },
            N = (0, i.Z)({ backgroundColor: M && !Y() ? M : void 0 }, d),
            L = Y(),
            H = k("tag", o),
            T = c()(
              H,
              ((n = {}),
              (0, r.Z)(n, "".concat(H, "-").concat(M), L),
              (0, r.Z)(n, "".concat(H, "-has-color"), M && !L),
              (0, r.Z)(n, "".concat(H, "-hidden"), !j),
              (0, r.Z)(n, "".concat(H, "-rtl"), "rtl" === C),
              n),
              h
            ),
            P = function (t) {
              t.stopPropagation(),
                null === b || void 0 === b || b(t),
                t.defaultPrevented || "visible" in S || E(!1);
            },
            I = "onClick" in S || ($ && "a" === $.type),
            A = (0, u.Z)(S, ["visible"]),
            W = y || null,
            F = W
              ? a.createElement(
                  a.Fragment,
                  null,
                  W,
                  a.createElement("span", null, $)
                )
              : $,
            U = a.createElement(
              "span",
              (0, i.Z)({}, A, { ref: e, className: T, style: N }),
              F,
              D
                ? O
                  ? a.createElement(
                      "span",
                      { className: "".concat(H, "-close-icon"), onClick: P },
                      O
                    )
                  : a.createElement(l.Z, {
                      className: "".concat(H, "-close-icon"),
                      onClick: P,
                    })
                : null
            );
          return I ? a.createElement(m.Z, null, U) : U;
        },
        M = a.forwardRef(y);
      (M.displayName = "Tag"), (M.CheckableTag = d);
      var b = M;
    },
    7892: function (t) {
      t.exports = (function () {
        "use strict";
        var t = 1e3,
          e = 6e4,
          n = 36e5,
          r = "millisecond",
          i = "second",
          s = "minute",
          a = "hour",
          o = "day",
          c = "week",
          u = "month",
          l = "quarter",
          f = "year",
          h = "date",
          d = "Invalid Date",
          $ =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          m =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          p = {
            name: "en",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
          },
          v = function (t, e, n) {
            var r = String(t);
            return !r || r.length >= e
              ? t
              : "" + Array(e + 1 - r.length).join(n) + t;
          },
          g = {
            s: v,
            z: function (t) {
              var e = -t.utcOffset(),
                n = Math.abs(e),
                r = Math.floor(n / 60),
                i = n % 60;
              return (e <= 0 ? "+" : "-") + v(r, 2, "0") + ":" + v(i, 2, "0");
            },
            m: function t(e, n) {
              if (e.date() < n.date()) return -t(n, e);
              var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                i = e.clone().add(r, u),
                s = n - i < 0,
                a = e.clone().add(r + (s ? -1 : 1), u);
              return +(-(r + (n - i) / (s ? i - a : a - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (t) {
              return (
                { M: u, y: f, w: c, d: o, D: h, h: a, m: s, s: i, ms: r, Q: l }[
                  t
                ] ||
                String(t || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          },
          y = "en",
          M = {};
        M[y] = p;
        var b = function (t) {
            return t instanceof S;
          },
          O = function t(e, n, r) {
            var i;
            if (!e) return y;
            if ("string" == typeof e) {
              var s = e.toLowerCase();
              M[s] && (i = s), n && ((M[s] = n), (i = s));
              var a = e.split("-");
              if (!i && a.length > 1) return t(a[0]);
            } else {
              var o = e.name;
              (M[o] = e), (i = o);
            }
            return !r && i && (y = i), i || (!r && y);
          },
          w = function (t, e) {
            if (b(t)) return t.clone();
            var n = "object" == typeof e ? e : {};
            return (n.date = t), (n.args = arguments), new S(n);
          },
          D = g;
        (D.l = O),
          (D.i = b),
          (D.w = function (t, e) {
            return w(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var S = (function () {
            function p(t) {
              (this.$L = O(t.locale, null, !0)), this.parse(t);
            }
            var v = p.prototype;
            return (
              (v.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    n = t.utc;
                  if (null === e) return new Date(NaN);
                  if (D.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                      var i = r[2] - 1 || 0,
                        s = (r[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              r[1],
                              i,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              s
                            )
                          )
                        : new Date(
                            r[1],
                            i,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            s
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  (this.$x = t.x || {}),
                  this.init();
              }),
              (v.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (v.$utils = function () {
                return D;
              }),
              (v.isValid = function () {
                return !(this.$d.toString() === d);
              }),
              (v.isSame = function (t, e) {
                var n = w(t);
                return this.startOf(e) <= n && n <= this.endOf(e);
              }),
              (v.isAfter = function (t, e) {
                return w(t) < this.startOf(e);
              }),
              (v.isBefore = function (t, e) {
                return this.endOf(e) < w(t);
              }),
              (v.$g = function (t, e, n) {
                return D.u(t) ? this[e] : this.set(n, t);
              }),
              (v.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (v.valueOf = function () {
                return this.$d.getTime();
              }),
              (v.startOf = function (t, e) {
                var n = this,
                  r = !!D.u(e) || e,
                  l = D.p(t),
                  d = function (t, e) {
                    var i = D.w(
                      n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                      n
                    );
                    return r ? i : i.endOf(o);
                  },
                  $ = function (t, e) {
                    return D.w(
                      n
                        .toDate()
                        [t].apply(
                          n.toDate("s"),
                          (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      n
                    );
                  },
                  m = this.$W,
                  p = this.$M,
                  v = this.$D,
                  g = "set" + (this.$u ? "UTC" : "");
                switch (l) {
                  case f:
                    return r ? d(1, 0) : d(31, 11);
                  case u:
                    return r ? d(1, p) : d(0, p + 1);
                  case c:
                    var y = this.$locale().weekStart || 0,
                      M = (m < y ? m + 7 : m) - y;
                    return d(r ? v - M : v + (6 - M), p);
                  case o:
                  case h:
                    return $(g + "Hours", 0);
                  case a:
                    return $(g + "Minutes", 1);
                  case s:
                    return $(g + "Seconds", 2);
                  case i:
                    return $(g + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (v.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (v.$set = function (t, e) {
                var n,
                  c = D.p(t),
                  l = "set" + (this.$u ? "UTC" : ""),
                  d = ((n = {}),
                  (n[o] = l + "Date"),
                  (n[h] = l + "Date"),
                  (n[u] = l + "Month"),
                  (n[f] = l + "FullYear"),
                  (n[a] = l + "Hours"),
                  (n[s] = l + "Minutes"),
                  (n[i] = l + "Seconds"),
                  (n[r] = l + "Milliseconds"),
                  n)[c],
                  $ = c === o ? this.$D + (e - this.$W) : e;
                if (c === u || c === f) {
                  var m = this.clone().set(h, 1);
                  m.$d[d]($),
                    m.init(),
                    (this.$d = m.set(h, Math.min(this.$D, m.daysInMonth())).$d);
                } else d && this.$d[d]($);
                return this.init(), this;
              }),
              (v.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (v.get = function (t) {
                return this[D.p(t)]();
              }),
              (v.add = function (r, l) {
                var h,
                  d = this;
                r = Number(r);
                var $ = D.p(l),
                  m = function (t) {
                    var e = w(d);
                    return D.w(e.date(e.date() + Math.round(t * r)), d);
                  };
                if ($ === u) return this.set(u, this.$M + r);
                if ($ === f) return this.set(f, this.$y + r);
                if ($ === o) return m(1);
                if ($ === c) return m(7);
                var p =
                    ((h = {}), (h[s] = e), (h[a] = n), (h[i] = t), h)[$] || 1,
                  v = this.$d.getTime() + r * p;
                return D.w(v, this);
              }),
              (v.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (v.format = function (t) {
                var e = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || d;
                var r = t || "YYYY-MM-DDTHH:mm:ssZ",
                  i = D.z(this),
                  s = this.$H,
                  a = this.$m,
                  o = this.$M,
                  c = n.weekdays,
                  u = n.months,
                  l = function (t, n, i, s) {
                    return (t && (t[n] || t(e, r))) || i[n].slice(0, s);
                  },
                  f = function (t) {
                    return D.s(s % 12 || 12, t, "0");
                  },
                  h =
                    n.meridiem ||
                    function (t, e, n) {
                      var r = t < 12 ? "AM" : "PM";
                      return n ? r.toLowerCase() : r;
                    },
                  $ = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: o + 1,
                    MM: D.s(o + 1, 2, "0"),
                    MMM: l(n.monthsShort, o, u, 3),
                    MMMM: l(u, o),
                    D: this.$D,
                    DD: D.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: l(n.weekdaysMin, this.$W, c, 2),
                    ddd: l(n.weekdaysShort, this.$W, c, 3),
                    dddd: c[this.$W],
                    H: String(s),
                    HH: D.s(s, 2, "0"),
                    h: f(1),
                    hh: f(2),
                    a: h(s, a, !0),
                    A: h(s, a, !1),
                    m: String(a),
                    mm: D.s(a, 2, "0"),
                    s: String(this.$s),
                    ss: D.s(this.$s, 2, "0"),
                    SSS: D.s(this.$ms, 3, "0"),
                    Z: i,
                  };
                return r.replace(m, function (t, e) {
                  return e || $[t] || i.replace(":", "");
                });
              }),
              (v.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (v.diff = function (r, h, d) {
                var $,
                  m = D.p(h),
                  p = w(r),
                  v = (p.utcOffset() - this.utcOffset()) * e,
                  g = this - p,
                  y = D.m(this, p);
                return (
                  (y =
                    (($ = {}),
                    ($[f] = y / 12),
                    ($[u] = y),
                    ($[l] = y / 3),
                    ($[c] = (g - v) / 6048e5),
                    ($[o] = (g - v) / 864e5),
                    ($[a] = g / n),
                    ($[s] = g / e),
                    ($[i] = g / t),
                    $)[m] || g),
                  d ? y : D.a(y)
                );
              }),
              (v.daysInMonth = function () {
                return this.endOf(u).$D;
              }),
              (v.$locale = function () {
                return M[this.$L];
              }),
              (v.locale = function (t, e) {
                if (!t) return this.$L;
                var n = this.clone(),
                  r = O(t, e, !0);
                return r && (n.$L = r), n;
              }),
              (v.clone = function () {
                return D.w(this.$d, this);
              }),
              (v.toDate = function () {
                return new Date(this.valueOf());
              }),
              (v.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (v.toISOString = function () {
                return this.$d.toISOString();
              }),
              (v.toString = function () {
                return this.$d.toUTCString();
              }),
              p
            );
          })(),
          x = S.prototype;
        return (
          (w.prototype = x),
          [
            ["$ms", r],
            ["$s", i],
            ["$m", s],
            ["$H", a],
            ["$W", o],
            ["$M", u],
            ["$y", f],
            ["$D", h],
          ].forEach(function (t) {
            x[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          (w.extend = function (t, e) {
            return t.$i || (t(e, S, w), (t.$i = !0)), w;
          }),
          (w.locale = O),
          (w.isDayjs = b),
          (w.unix = function (t) {
            return w(1e3 * t);
          }),
          (w.en = M[y]),
          (w.Ls = M),
          (w.p = {}),
          w
        );
      })();
    },
  },
]);
//# sourceMappingURL=365.9b4c7261.chunk.js.map
