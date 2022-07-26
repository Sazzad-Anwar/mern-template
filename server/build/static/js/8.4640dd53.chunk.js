"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [8],
  {
    5915: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return he;
          },
        });
      var r = n(3433),
        a = n(5861),
        o = n(9439),
        s = n(7757),
        c = n.n(s),
        i = n(2791),
        l = n(6871),
        u = n(2419),
        d = n(8717),
        p = n(2065),
        f = n(4942),
        m = n(7462),
        h = n(5671),
        v = n(3144),
        g = n(7326),
        E = n(9340),
        y = n(8557),
        k = n(1694),
        N = n.n(k),
        C = n(1818),
        S = n(732),
        x = n(7575),
        O = n(7557),
        b = n(2621),
        P = n(9077),
        Z = n(9393),
        w = n(4824),
        M = n(6327);
      function T(e) {
        return !e || e < 0 ? 0 : e > 100 ? 100 : e;
      }
      function L(e) {
        var t = e.success,
          n = e.successPercent;
        return (
          t &&
            "progress" in t &&
            ((0, w.Z)(
              !1,
              "Progress",
              "`success.progress` is deprecated. Please use `success.percent` instead."
            ),
            (n = t.progress)),
          t && "percent" in t && (n = t.percent),
          n
        );
      }
      var _ = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        I = function (e, t) {
          var n = e.from,
            r = void 0 === n ? M.ez.blue : n,
            a = e.to,
            o = void 0 === a ? M.ez.blue : a,
            s = e.direction,
            c = void 0 === s ? ("rtl" === t ? "to left" : "to right") : s,
            i = _(e, ["from", "to", "direction"]);
          if (0 !== Object.keys(i).length) {
            var l = (function (e) {
              var t = [];
              return (
                Object.keys(e).forEach(function (n) {
                  var r = parseFloat(n.replace(/%/g, ""));
                  isNaN(r) || t.push({ key: r, value: e[n] });
                }),
                (t = t.sort(function (e, t) {
                  return e.key - t.key;
                }))
                  .map(function (e) {
                    var t = e.key,
                      n = e.value;
                    return "".concat(n, " ").concat(t, "%");
                  })
                  .join(", ")
              );
            })(i);
            return {
              backgroundImage: "linear-gradient("
                .concat(c, ", ")
                .concat(l, ")"),
            };
          }
          return {
            backgroundImage: "linear-gradient("
              .concat(c, ", ")
              .concat(r, ", ")
              .concat(o, ")"),
          };
        },
        A = function (e) {
          var t = e.prefixCls,
            n = e.direction,
            r = e.percent,
            a = e.strokeWidth,
            o = e.size,
            s = e.strokeColor,
            c = e.strokeLinecap,
            l = e.children,
            u = e.trailColor,
            d = e.success,
            p = s && "string" !== typeof s ? I(s, n) : { background: s },
            f = u ? { backgroundColor: u } : void 0,
            h = (0, m.Z)(
              {
                width: "".concat(T(r), "%"),
                height: a || ("small" === o ? 6 : 8),
                borderRadius: "square" === c ? 0 : void 0,
              },
              p
            ),
            v = L(e),
            g = {
              width: "".concat(T(v), "%"),
              height: a || ("small" === o ? 6 : 8),
              borderRadius: "square" === c ? 0 : void 0,
              backgroundColor:
                null === d || void 0 === d ? void 0 : d.strokeColor,
            },
            E =
              void 0 !== v
                ? i.createElement("div", {
                    className: "".concat(t, "-success-bg"),
                    style: g,
                  })
                : null;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: "".concat(t, "-outer") },
              i.createElement(
                "div",
                { className: "".concat(t, "-inner"), style: f },
                i.createElement("div", {
                  className: "".concat(t, "-bg"),
                  style: h,
                }),
                E
              )
            ),
            l
          );
        },
        U = n(4925),
        R = {
          className: "",
          percent: 0,
          prefixCls: "rc-progress",
          strokeColor: "#2db7f5",
          strokeLinecap: "round",
          strokeWidth: 1,
          style: {},
          trailColor: "#D9D9D9",
          trailWidth: 1,
        },
        D = function (e) {
          var t = e.map(function () {
              return (0, i.useRef)();
            }),
            n = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(function () {
              var e = Date.now(),
                r = !1;
              Object.keys(t).forEach(function (a) {
                var o = t[a].current;
                if (o) {
                  r = !0;
                  var s = o.style;
                  (s.transitionDuration = ".3s, .3s, .3s, .06s"),
                    n.current &&
                      e - n.current < 100 &&
                      (s.transitionDuration = "0s, 0s");
                }
              }),
                r && (n.current = Date.now());
            }),
            [t]
          );
        },
        j = [
          "className",
          "percent",
          "prefixCls",
          "strokeColor",
          "strokeLinecap",
          "strokeWidth",
          "style",
          "trailColor",
          "trailWidth",
          "transition",
        ],
        F = function (e) {
          var t = e.className,
            n = e.percent,
            r = e.prefixCls,
            a = e.strokeColor,
            s = e.strokeLinecap,
            c = e.strokeWidth,
            l = e.style,
            u = e.trailColor,
            d = e.trailWidth,
            p = e.transition,
            f = (0, U.Z)(e, j);
          delete f.gapPosition;
          var h = Array.isArray(n) ? n : [n],
            v = Array.isArray(a) ? a : [a],
            g = D(h),
            E = (0, o.Z)(g, 1)[0],
            y = c / 2,
            k = 100 - c / 2,
            C = "M "
              .concat("round" === s ? y : 0, ",")
              .concat(y, "\n         L ")
              .concat("round" === s ? k : 100, ",")
              .concat(y),
            S = "0 0 100 ".concat(c),
            x = 0;
          return i.createElement(
            "svg",
            (0, m.Z)(
              {
                className: N()("".concat(r, "-line"), t),
                viewBox: S,
                preserveAspectRatio: "none",
                style: l,
              },
              f
            ),
            i.createElement("path", {
              className: "".concat(r, "-line-trail"),
              d: C,
              strokeLinecap: s,
              stroke: u,
              strokeWidth: d || c,
              fillOpacity: "0",
            }),
            h.map(function (e, t) {
              var n = 1;
              switch (s) {
                case "round":
                  n = 1 - c / 100;
                  break;
                case "square":
                  n = 1 - c / 2 / 100;
                  break;
                default:
                  n = 1;
              }
              var a = {
                  strokeDasharray: "".concat(e * n, "px, 100px"),
                  strokeDashoffset: "-".concat(x, "px"),
                  transition:
                    p ||
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear",
                },
                o = v[t] || v[v.length - 1];
              return (
                (x += e),
                i.createElement("path", {
                  key: t,
                  className: "".concat(r, "-line-path"),
                  d: C,
                  strokeLinecap: s,
                  stroke: o,
                  strokeWidth: c,
                  fillOpacity: "0",
                  ref: E[t],
                  style: a,
                })
              );
            })
          );
        };
      (F.defaultProps = R), (F.displayName = "Line");
      var W = n(1002),
        K = n(4937),
        H = 0,
        B = (0, K.Z)();
      var G = function (e) {
          var t = i.useState(),
            n = (0, o.Z)(t, 2),
            r = n[0],
            a = n[1];
          return (
            i.useEffect(function () {
              a(
                "rc_progress_".concat(
                  (function () {
                    var e;
                    return B ? ((e = H), (H += 1)) : (e = "TEST_OR_SSR"), e;
                  })()
                )
              );
            }, []),
            e || r
          );
        },
        z = [
          "id",
          "prefixCls",
          "strokeWidth",
          "trailWidth",
          "gapDegree",
          "gapPosition",
          "trailColor",
          "strokeLinecap",
          "style",
          "className",
          "strokeColor",
          "percent",
        ];
      function Q(e) {
        return +e.replace("%", "");
      }
      function V(e) {
        var t = null !== e && void 0 !== e ? e : [];
        return Array.isArray(t) ? t : [t];
      }
      function Y(e, t, n, r) {
        var a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          o = arguments.length > 5 ? arguments[5] : void 0,
          s = 50 - r / 2,
          c = 0,
          i = -s,
          l = 0,
          u = -2 * s;
        switch (o) {
          case "left":
            (c = -s), (i = 0), (l = 2 * s), (u = 0);
            break;
          case "right":
            (c = s), (i = 0), (l = -2 * s), (u = 0);
            break;
          case "bottom":
            (i = s), (u = 2 * s);
        }
        var d = "M 50,50 m "
            .concat(c, ",")
            .concat(i, "\n   a ")
            .concat(s, ",")
            .concat(s, " 0 1 1 ")
            .concat(l, ",")
            .concat(-u, "\n   a ")
            .concat(s, ",")
            .concat(s, " 0 1 1 ")
            .concat(-l, ",")
            .concat(u),
          p = 2 * Math.PI * s,
          f = {
            stroke: "string" === typeof n ? n : void 0,
            strokeDasharray: ""
              .concat((t / 100) * (p - a), "px ")
              .concat(p, "px"),
            strokeDashoffset: "-".concat(a / 2 + (e / 100) * (p - a), "px"),
            transition:
              "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
          };
        return { pathString: d, pathStyle: f };
      }
      var q = function (e) {
        var t = e.id,
          n = e.prefixCls,
          r = e.strokeWidth,
          a = e.trailWidth,
          s = e.gapDegree,
          c = e.gapPosition,
          l = e.trailColor,
          u = e.strokeLinecap,
          d = e.style,
          p = e.className,
          f = e.strokeColor,
          h = e.percent,
          v = (0, U.Z)(e, z),
          g = G(t),
          E = "".concat(g, "-gradient"),
          y = Y(0, 100, l, r, s, c),
          k = y.pathString,
          C = y.pathStyle,
          S = V(h),
          x = V(f),
          O = x.find(function (e) {
            return e && "object" === (0, W.Z)(e);
          }),
          b = D(S),
          P = (0, o.Z)(b, 1)[0];
        return i.createElement(
          "svg",
          (0, m.Z)(
            {
              className: N()("".concat(n, "-circle"), p),
              viewBox: "0 0 100 100",
              style: d,
              id: t,
            },
            v
          ),
          O &&
            i.createElement(
              "defs",
              null,
              i.createElement(
                "linearGradient",
                { id: E, x1: "100%", y1: "0%", x2: "0%", y2: "0%" },
                Object.keys(O)
                  .sort(function (e, t) {
                    return Q(e) - Q(t);
                  })
                  .map(function (e, t) {
                    return i.createElement("stop", {
                      key: t,
                      offset: e,
                      stopColor: O[e],
                    });
                  })
              )
            ),
          i.createElement("path", {
            className: "".concat(n, "-circle-trail"),
            d: k,
            stroke: l,
            strokeLinecap: u,
            strokeWidth: a || r,
            fillOpacity: "0",
            style: C,
          }),
          (function () {
            var e = 0;
            return S.map(function (t, a) {
              var o = x[a] || x[x.length - 1],
                l = o && "object" === (0, W.Z)(o) ? "url(#".concat(E, ")") : "",
                d = Y(e, t, o, r, s, c);
              return (
                (e += t),
                i.createElement("path", {
                  key: a,
                  className: "".concat(n, "-circle-path"),
                  d: d.pathString,
                  stroke: l,
                  strokeLinecap: u,
                  strokeWidth: r,
                  opacity: 0 === t ? 0 : 1,
                  fillOpacity: "0",
                  style: d.pathStyle,
                  ref: P[a],
                })
              );
            });
          })().reverse()
        );
      };
      (q.defaultProps = R), (q.displayName = "Circle");
      var X = q;
      function J(e) {
        var t = e.percent,
          n = T(L({ success: e.success, successPercent: e.successPercent }));
        return [n, T(T(t) - n)];
      }
      var $ = function (e) {
          var t = e.prefixCls,
            n = e.width,
            r = e.strokeWidth,
            a = e.trailColor,
            o = e.strokeLinecap,
            s = e.gapPosition,
            c = e.gapDegree,
            l = e.type,
            u = e.children,
            d = e.success,
            p = n || 120,
            m = { width: p, height: p, fontSize: 0.15 * p + 6 },
            h = r || 6,
            v = s || ("dashboard" === l && "bottom") || "top",
            g =
              "[object Object]" ===
              Object.prototype.toString.call(e.strokeColor),
            E = (function (e) {
              var t = e.success,
                n = void 0 === t ? {} : t,
                r = e.strokeColor;
              return [n.strokeColor || M.ez.green, r || null];
            })({ success: d, strokeColor: e.strokeColor }),
            y = N()(
              "".concat(t, "-inner"),
              (0, f.Z)({}, "".concat(t, "-circle-gradient"), g)
            );
          return i.createElement(
            "div",
            { className: y, style: m },
            i.createElement(X, {
              percent: J(e),
              strokeWidth: h,
              trailWidth: h,
              strokeColor: E,
              strokeLinecap: o,
              trailColor: a,
              prefixCls: t,
              gapDegree: c || 0 === c ? c : "dashboard" === l ? 75 : void 0,
              gapPosition: v,
            }),
            u
          );
        },
        ee = function (e) {
          for (
            var t = e.size,
              n = e.steps,
              r = e.percent,
              a = void 0 === r ? 0 : r,
              o = e.strokeWidth,
              s = void 0 === o ? 8 : o,
              c = e.strokeColor,
              l = e.trailColor,
              u = e.prefixCls,
              d = e.children,
              p = Math.round(n * (a / 100)),
              m = "small" === t ? 2 : 14,
              h = [],
              v = 0;
            v < n;
            v += 1
          )
            h.push(
              i.createElement("div", {
                key: v,
                className: N()(
                  "".concat(u, "-steps-item"),
                  (0, f.Z)({}, "".concat(u, "-steps-item-active"), v <= p - 1)
                ),
                style: {
                  backgroundColor: v <= p - 1 ? c : l,
                  width: m,
                  height: s,
                },
              })
            );
          return i.createElement(
            "div",
            { className: "".concat(u, "-steps-outer") },
            h,
            d
          );
        },
        te = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        ne =
          ((0, Z.b)("line", "circle", "dashboard"),
          (0, Z.b)("normal", "exception", "active", "success")),
        re = (function (e) {
          (0, E.Z)(n, e);
          var t = (0, y.Z)(n);
          function n() {
            var e;
            return (
              (0, h.Z)(this, n),
              ((e = t.apply(this, arguments)).renderProgress = function (t) {
                var n,
                  r,
                  a = t.getPrefixCls,
                  o = t.direction,
                  s = (0, g.Z)(e).props,
                  c = s.prefixCls,
                  l = s.className,
                  u = s.size,
                  d = s.type,
                  p = s.steps,
                  h = s.showInfo,
                  v = s.strokeColor,
                  E = te(s, [
                    "prefixCls",
                    "className",
                    "size",
                    "type",
                    "steps",
                    "showInfo",
                    "strokeColor",
                  ]),
                  y = a("progress", c),
                  k = e.getProgressStatus(),
                  S = e.renderProcessInfo(y, k);
                (0, w.Z)(
                  !("successPercent" in s),
                  "Progress",
                  "`successPercent` is deprecated. Please use `success.percent` instead."
                ),
                  "line" === d
                    ? (r = p
                        ? i.createElement(
                            ee,
                            (0, m.Z)({}, e.props, {
                              strokeColor: "string" === typeof v ? v : void 0,
                              prefixCls: y,
                              steps: p,
                            }),
                            S
                          )
                        : i.createElement(
                            A,
                            (0, m.Z)({}, e.props, {
                              prefixCls: y,
                              direction: o,
                            }),
                            S
                          ))
                    : ("circle" !== d && "dashboard" !== d) ||
                      (r = i.createElement(
                        $,
                        (0, m.Z)({}, e.props, {
                          prefixCls: y,
                          progressStatus: k,
                        }),
                        S
                      ));
                var x = N()(
                  y,
                  ((n = {}),
                  (0, f.Z)(
                    n,
                    ""
                      .concat(y, "-")
                      .concat(
                        ("dashboard" === d ? "circle" : p && "steps") || d
                      ),
                    !0
                  ),
                  (0, f.Z)(n, "".concat(y, "-status-").concat(k), !0),
                  (0, f.Z)(n, "".concat(y, "-show-info"), h),
                  (0, f.Z)(n, "".concat(y, "-").concat(u), u),
                  (0, f.Z)(n, "".concat(y, "-rtl"), "rtl" === o),
                  n),
                  l
                );
                return i.createElement(
                  "div",
                  (0, m.Z)(
                    {},
                    (0, C.Z)(E, [
                      "status",
                      "format",
                      "trailColor",
                      "strokeWidth",
                      "width",
                      "gapDegree",
                      "gapPosition",
                      "strokeLinecap",
                      "percent",
                      "success",
                      "successPercent",
                    ]),
                    { className: x }
                  ),
                  r
                );
              }),
              e
            );
          }
          return (
            (0, v.Z)(n, [
              {
                key: "getPercentNumber",
                value: function () {
                  var e = this.props.percent,
                    t = void 0 === e ? 0 : e,
                    n = L(this.props);
                  return parseInt(
                    void 0 !== n ? n.toString() : t.toString(),
                    10
                  );
                },
              },
              {
                key: "getProgressStatus",
                value: function () {
                  var e = this.props.status;
                  return ne.indexOf(e) < 0 && this.getPercentNumber() >= 100
                    ? "success"
                    : e || "normal";
                },
              },
              {
                key: "renderProcessInfo",
                value: function (e, t) {
                  var n,
                    r = this.props,
                    a = r.showInfo,
                    o = r.format,
                    s = r.type,
                    c = r.percent,
                    l = L(this.props);
                  if (!a) return null;
                  var u = "line" === s;
                  return (
                    o || ("exception" !== t && "success" !== t)
                      ? (n = (
                          o ||
                          function (e) {
                            return "".concat(e, "%");
                          }
                        )(T(c), T(l)))
                      : "exception" === t
                      ? (n = u
                          ? i.createElement(b.Z, null)
                          : i.createElement(S.Z, null))
                      : "success" === t &&
                        (n = u
                          ? i.createElement(O.Z, null)
                          : i.createElement(x.Z, null)),
                    i.createElement(
                      "span",
                      {
                        className: "".concat(e, "-text"),
                        title: "string" === typeof n ? n : void 0,
                      },
                      n
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return i.createElement(P.C, null, this.renderProgress);
                },
              },
            ]),
            n
          );
        })(i.Component);
      re.defaultProps = {
        type: "line",
        percent: 0,
        showInfo: !0,
        trailColor: null,
        size: "default",
        gapDegree: void 0,
        strokeLinecap: "round",
      };
      var ae = re,
        oe = n(6755),
        se = n(9823),
        ce = n(8678),
        ie = n(7309),
        le = n(9220),
        ue = n(1033),
        de = n(6570),
        pe = n(577),
        fe = n(783),
        me = n(184);
      function he() {
        var e = (0, l.UO)().id,
          t = (0, u.ZP)("/folders/".concat(e), p.Z).data,
          n = (0, i.useState)(!1),
          s = (0, o.Z)(n, 2),
          f = s[0],
          m = s[1],
          h = (0, i.useState)(0),
          v = (0, o.Z)(h, 2),
          g = v[0],
          E = v[1],
          y = (0, i.useState)(!1),
          k = (0, o.Z)(y, 2),
          N = k[0],
          C = k[1],
          S = (0, i.useRef)(),
          x = t && t.data,
          O = (0, i.useState)([]),
          b = (0, o.Z)(O, 2),
          P = b[0],
          Z = b[1],
          w = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/folders", name: "Folders" },
            {
              isLink: !0,
              link: "/folders/".concat(e, "/details"),
              name: (null === x || void 0 === x ? void 0 : x.name) + "s",
            },
            { isLink: !1, link: "", name: "Upload" },
          ],
          M = (function () {
            var t = (0, a.Z)(
              c().mark(function t(n) {
                var a, o, s;
                return c().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = new FormData()).append(
                              "files",
                              n.target.files[0]
                            ),
                            C(!0),
                            (t.prev = 3),
                            (t.next = 6),
                            ue.Z.post("/files/upload?folderId=".concat(e), a, {
                              onUploadProgress: function (e) {
                                var t = e.loaded / e.total;
                                (t = parseInt(100 * t)), E(t);
                              },
                            })
                          );
                        case 6:
                          (o = t.sent),
                            (s = o.data),
                            Z(function (e) {
                              return [].concat((0, r.Z)(e), [s.data[0]]);
                            }),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(3)),
                            pe.Am.error(
                              t.t0.response.data.message
                                ? t.t0.response.data.message
                                : t.t0.message
                            );
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[3, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          T = (function () {
            var e = (0, a.Z)(
              c().mark(function e(t) {
                var n, a;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((m(!1), t.name === P[0].name && "" === t.name)) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (e.prev = 2),
                            (e.next = 5),
                            ue.Z.put("/files/".concat(P[0]._id), t)
                          );
                        case 5:
                          (n = e.sent),
                            (a = n.data),
                            Z(function (e) {
                              return [a.data].concat((0, r.Z)(e.slice(1)));
                            }),
                            pe.Am.success("Image name is saved"),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(2)),
                            pe.Am.error(e.t0.response.data.message);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 11]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          L = function (e) {
            2 === e.detail && m(!0);
          };
        return (0, me.jsxs)(me.Fragment, {
          children: [
            (0, me.jsx)(d.Z, { details: w }),
            (0, me.jsx)("div", {
              className: "my-5 flex justify-center items-center",
              children: (0, me.jsx)("div", {
                className: "text-white flex flex-col",
                children: P.length
                  ? (0, me.jsx)(me.Fragment, {
                      children: P.map(function (e) {
                        return (0, me.jsxs)(
                          "div",
                          {
                            className: "flex flex-col justify-center",
                            children: [
                              (0, me.jsx)(
                                oe.Z,
                                {
                                  alt: e.name,
                                  className: "w-auto h-auto md:h-96",
                                  src: de.T5 + "/static/" + e.url,
                                },
                                e._id
                              ),
                              f
                                ? (0, me.jsxs)(se.Z, {
                                    initialValues: { name: e.name },
                                    onFinish: T,
                                    className: "mt-5",
                                    children: [
                                      (0, me.jsx)(se.Z.Item, {
                                        name: "name",
                                        className: "mb-0",
                                        rules: [
                                          {
                                            required: !0,
                                            message:
                                              "Please input the file name",
                                          },
                                        ],
                                        children: (0, me.jsx)(ce.Z, {
                                          placeholder: "File name",
                                          className: "w-full text-center",
                                          size: "large",
                                          autoFocus: !0,
                                          onBlur: function () {
                                            m(!1), S.current.click();
                                          },
                                        }),
                                      }),
                                      (0, me.jsx)(ie.Z, {
                                        ref: S,
                                        htmlType: "submit",
                                        className: "hidden",
                                      }),
                                    ],
                                  })
                                : (0, me.jsx)(le.Z, {
                                    title: "Double click to name to edit",
                                    placement: "bottom",
                                    className: "mt-4",
                                    children: (0, me.jsx)("button", {
                                      onClick: L,
                                      className: "truncate",
                                      children: (0, me.jsx)("p", {
                                        className:
                                          "font-medium dark:text-white text-sm truncate w-full",
                                        children: (0, fe.Z)(e.name),
                                      }),
                                    }),
                                  }),
                            ],
                          },
                          e._id
                        );
                      }),
                    })
                  : (0, me.jsxs)("div", {
                      children: [
                        (0, me.jsx)("input", {
                          className:
                            "block w-full ring-2 rounded-full ring-violet-700 text-sm dark:text-white text-dark font-mono file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold dark:file:bg-violet-50 file:text-violet-700  hover:file:bg-violet-100",
                          type: "file",
                          onChange: M,
                        }),
                        N &&
                          (0, me.jsx)(ae, {
                            percent: g,
                            className: "dark:text-white",
                          }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
    },
    783: function (e, t, n) {
      function r(e) {
        return (null === e || void 0 === e ? void 0 : e.split(" ").length) > 1
          ? e
              .split(" ")
              .map(function (e) {
                return r(e);
              })
              .join(" ")
          : (null === e || void 0 === e
              ? void 0
              : e.split("")[0].toUpperCase()) +
              (null === e || void 0 === e
                ? void 0
                : e
                    .split("")
                    .filter(function (t) {
                      return t !== e.split("")[0];
                    })
                    .join(""));
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    7575: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(1413),
        a = n(2791),
        o = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
                },
              },
            ],
          },
          name: "check",
          theme: "outlined",
        },
        s = n(4291),
        c = function (e, t) {
          return a.createElement(
            s.Z,
            (0, r.Z)((0, r.Z)({}, e), {}, { ref: t, icon: o })
          );
        };
      c.displayName = "CheckOutlined";
      var i = a.forwardRef(c);
    },
    732: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(1413),
        a = n(2791),
        o = {
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
        s = n(4291),
        c = function (e, t) {
          return a.createElement(
            s.Z,
            (0, r.Z)((0, r.Z)({}, e), {}, { ref: t, icon: o })
          );
        };
      c.displayName = "CloseOutlined";
      var i = a.forwardRef(c);
    },
    4308: function (e, t, n) {
      var r = n(454);
      t.Z = r.Z;
    },
    2632: function (e, t, n) {
      n.d(t, {
        g1: function () {
          return r;
        },
        os: function () {
          return a;
        },
      });
      function r() {
        return {
          width: document.documentElement.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight,
        };
      }
      function a(e) {
        var t = e.getBoundingClientRect(),
          n = document.documentElement;
        return {
          left:
            t.left +
            (window.pageXOffset || n.scrollLeft) -
            (n.clientLeft || document.body.clientLeft || 0),
          top:
            t.top +
            (window.pageYOffset || n.scrollTop) -
            (n.clientTop || document.body.clientTop || 0),
        };
      }
    },
    1354: function (e, t) {
      var n = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
          var t = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (t >= n.F1 && t <= n.F12)
          )
            return !1;
          switch (t) {
            case n.ALT:
            case n.CAPS_LOCK:
            case n.CONTEXT_MENU:
            case n.CTRL:
            case n.DOWN:
            case n.END:
            case n.ESC:
            case n.HOME:
            case n.INSERT:
            case n.LEFT:
            case n.MAC_FF_META:
            case n.META:
            case n.NUMLOCK:
            case n.NUM_CENTER:
            case n.PAGE_DOWN:
            case n.PAGE_UP:
            case n.PAUSE:
            case n.PRINT_SCREEN:
            case n.RIGHT:
            case n.SHIFT:
            case n.UP:
            case n.WIN_KEY:
            case n.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (e >= n.ZERO && e <= n.NINE) return !0;
          if (e >= n.NUM_ZERO && e <= n.NUM_MULTIPLY) return !0;
          if (e >= n.A && e <= n.Z) return !0;
          if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
            return !0;
          switch (e) {
            case n.SPACE:
            case n.QUESTION_MARK:
            case n.NUM_PLUS:
            case n.NUM_MINUS:
            case n.NUM_PERIOD:
            case n.NUM_DIVISION:
            case n.SEMICOLON:
            case n.DASH:
            case n.EQUALS:
            case n.COMMA:
            case n.PERIOD:
            case n.SLASH:
            case n.APOSTROPHE:
            case n.SINGLE_QUOTE:
            case n.OPEN_SQUARE_BRACKET:
            case n.BACKSLASH:
            case n.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      t.Z = n;
    },
    9025: function (e, t, n) {
      var r;
      function a(e) {
        if ("undefined" === typeof document) return 0;
        if (e || void 0 === r) {
          var t = document.createElement("div");
          (t.style.width = "100%"), (t.style.height = "200px");
          var n = document.createElement("div"),
            a = n.style;
          (a.position = "absolute"),
            (a.top = "0"),
            (a.left = "0"),
            (a.pointerEvents = "none"),
            (a.visibility = "hidden"),
            (a.width = "200px"),
            (a.height = "150px"),
            (a.overflow = "hidden"),
            n.appendChild(t),
            document.body.appendChild(n);
          var o = t.offsetWidth;
          n.style.overflow = "scroll";
          var s = t.offsetWidth;
          o === s && (s = n.clientWidth),
            document.body.removeChild(n),
            (r = o - s);
        }
        return r;
      }
      function o(e) {
        var t = e.match(/^(.*)px$/),
          n = Number(null === t || void 0 === t ? void 0 : t[1]);
        return Number.isNaN(n) ? a() : n;
      }
      function s(e) {
        if ("undefined" === typeof document || !e || !(e instanceof Element))
          return { width: 0, height: 0 };
        var t = getComputedStyle(e, "::-webkit-scrollbar"),
          n = t.width,
          r = t.height;
        return { width: o(n), height: o(r) };
      }
      n.d(t, {
        Z: function () {
          return a;
        },
        o: function () {
          return s;
        },
      });
    },
    4170: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(1413),
        a = ""
          .concat(
            "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap",
            " "
          )
          .concat(
            "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError"
          )
          .split(/[\s\n]+/),
        o = "aria-",
        s = "data-";
      function c(e, t) {
        return 0 === e.indexOf(t);
      }
      function i(e) {
        var t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t =
          !1 === n
            ? { aria: !0, data: !0, attr: !0 }
            : !0 === n
            ? { aria: !0 }
            : (0, r.Z)({}, n);
        var i = {};
        return (
          Object.keys(e).forEach(function (n) {
            ((t.aria && ("role" === n || c(n, o))) ||
              (t.data && c(n, s)) ||
              (t.attr && a.includes(n))) &&
              (i[n] = e[n]);
          }),
          i
        );
      }
    },
  },
]);
//# sourceMappingURL=8.4640dd53.chunk.js.map
