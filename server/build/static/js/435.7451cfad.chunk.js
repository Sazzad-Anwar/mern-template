"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [435],
  {
    1479: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var r = n(1413),
        a = n(5861),
        o = n(9439),
        s = n(7757),
        c = n.n(s),
        i = n(2791),
        l = n(577),
        u = n(6570),
        d = n(3853),
        p = n(8820),
        f = n(1033),
        m = n(4560),
        h = n(9823),
        g = n(8678),
        v = n(7309),
        E = n(9220),
        y = n(6038),
        k = n(6755),
        N = n(184);
      function x(e) {
        var t = e.file,
          n = e.files,
          s = e.setFiles,
          x = e.folderId,
          C = e.mutate,
          b = (0, i.useState)(!1),
          S = (0, o.Z)(b, 2),
          O = S[0],
          w = S[1],
          P = (0, i.useRef)(),
          Z = (function () {
            var e = (0, a.Z)(
              c().mark(function e(t) {
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            f.Z.delete("/files/".concat(t))
                          );
                        case 3:
                          s(
                            n.filter(function (e) {
                              return e._id !== t;
                            })
                          ),
                            C("/files?folderId=".concat(t), { data: n }, !1),
                            l.Am.success("File is deleted"),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            l.Am.error(
                              e.t0.response.data.message
                                ? e.t0.response.data.message
                                : e.t0.message
                            );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          T = (function () {
            var e = (0, a.Z)(
              c().mark(function e(a) {
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((w(!1), a.name === t.name)) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.prev = 2),
                            (e.next = 5),
                            f.Z.put("/files/".concat(t._id), a)
                          );
                        case 5:
                          C(
                            "/files?folderId=".concat(x),
                            {
                              data: n.map(function (e) {
                                return e._id === t._id
                                  ? (0, r.Z)(
                                      (0, r.Z)({}, e),
                                      {},
                                      { name: a.name }
                                    )
                                  : e;
                              }),
                            },
                            !1
                          ),
                            l.Am.success("Image name is saved"),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(2)),
                            l.Am.error(e.t0.response.data.message);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, N.jsxs)("div", {
          children: [
            (0, N.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [
                C && O
                  ? (0, N.jsxs)(h.Z, {
                      initialValues: { name: t.name },
                      onFinish: T,
                      className: "mr-2",
                      children: [
                        (0, N.jsx)(h.Z.Item, {
                          name: "name",
                          className: "mb-0",
                          rules: [
                            {
                              required: !0,
                              message: "Please input the folder name",
                            },
                          ],
                          children: (0, N.jsx)(g.Z, {
                            placeholder: "Folder name",
                            className: "w-full text-center",
                            size: "small",
                            autoFocus: !0,
                            onBlur: function () {
                              w(!1), P.current.click();
                            },
                          }),
                        }),
                        (0, N.jsx)(v.Z, {
                          ref: P,
                          htmlType: "submit",
                          className: "hidden",
                        }),
                      ],
                    })
                  : (0, N.jsx)(E.Z, {
                      title: C && "Double click to name to edit",
                      placement: "bottom",
                      children: (0, N.jsx)("button", {
                        onClick: function (e) {
                          2 === e.detail && w(!0);
                        },
                        className: "truncate",
                        children: (0, N.jsx)("span", {
                          className:
                            "dark:text-white text-black truncate font-mono",
                          children: t.name,
                        }),
                      }),
                    }),
                (0, N.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, N.jsx)(E.Z, {
                      title: "Copy url to clipboard",
                      children: (0, N.jsx)("button", {
                        onClick: function () {
                          return (0, m.Z)(u.T5 + "/static/" + t.url);
                        },
                        children: (0, N.jsx)(d.C3L, {
                          className: "dark:text-white text-black",
                        }),
                      }),
                    }),
                    (0, N.jsx)(E.Z, {
                      title: "Delete file",
                      children: (0, N.jsx)(y.Z, {
                        title: "Are you sure to delete this file?",
                        onConfirm: function () {
                          return Z(t._id);
                        },
                        okText: "Yes",
                        cancelText: "No",
                        className: "ml-2",
                        children: (0, N.jsx)("button", {
                          children: (0, N.jsx)(p.LHV, {
                            className: "dark:text-white text-black",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsx)("div", {
              className: "flex justify-center",
              children: (0, N.jsx)(k.Z, {
                height: "auto",
                width: "auto",
                alt: t.name,
                src: u.T5 + "/static/" + t.url,
              }),
            }),
          ],
        });
      }
    },
    1933: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ue;
          },
        });
      var r = n(5861),
        a = n(9439),
        o = n(7757),
        s = n.n(o),
        c = n(2791),
        i = n(6871),
        l = n(2419),
        u = n(8717),
        d = n(2065),
        p = n(1033),
        f = n(577),
        m = n(8704),
        h = n(1479),
        g = n(4942),
        v = n(7462),
        E = n(5671),
        y = n(3144),
        k = n(7326),
        N = n(9340),
        x = n(8557),
        C = n(1694),
        b = n.n(C),
        S = n(1818),
        O = n(732),
        w = n(7575),
        P = n(7557),
        Z = n(2621),
        T = n(9077),
        M = n(9393),
        I = n(4824),
        _ = n(6327);
      function L(e) {
        return !e || e < 0 ? 0 : e > 100 ? 100 : e;
      }
      function A(e) {
        var t = e.success,
          n = e.successPercent;
        return (
          t &&
            "progress" in t &&
            ((0, I.Z)(
              !1,
              "Progress",
              "`success.progress` is deprecated. Please use `success.percent` instead."
            ),
            (n = t.progress)),
          t && "percent" in t && (n = t.percent),
          n
        );
      }
      var U = function (e, t) {
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
        j = function (e, t) {
          var n = e.from,
            r = void 0 === n ? _.ez.blue : n,
            a = e.to,
            o = void 0 === a ? _.ez.blue : a,
            s = e.direction,
            c = void 0 === s ? ("rtl" === t ? "to left" : "to right") : s,
            i = U(e, ["from", "to", "direction"]);
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
        R = function (e) {
          var t = e.prefixCls,
            n = e.direction,
            r = e.percent,
            a = e.strokeWidth,
            o = e.size,
            s = e.strokeColor,
            i = e.strokeLinecap,
            l = e.children,
            u = e.trailColor,
            d = e.success,
            p = s && "string" !== typeof s ? j(s, n) : { background: s },
            f = u ? { backgroundColor: u } : void 0,
            m = (0, v.Z)(
              {
                width: "".concat(L(r), "%"),
                height: a || ("small" === o ? 6 : 8),
                borderRadius: "square" === i ? 0 : void 0,
              },
              p
            ),
            h = A(e),
            g = {
              width: "".concat(L(h), "%"),
              height: a || ("small" === o ? 6 : 8),
              borderRadius: "square" === i ? 0 : void 0,
              backgroundColor:
                null === d || void 0 === d ? void 0 : d.strokeColor,
            },
            E =
              void 0 !== h
                ? c.createElement("div", {
                    className: "".concat(t, "-success-bg"),
                    style: g,
                  })
                : null;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "div",
              { className: "".concat(t, "-outer") },
              c.createElement(
                "div",
                { className: "".concat(t, "-inner"), style: f },
                c.createElement("div", {
                  className: "".concat(t, "-bg"),
                  style: m,
                }),
                E
              )
            ),
            l
          );
        },
        D = n(4925),
        F = {
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
        W = function (e) {
          var t = e.map(function () {
              return (0, c.useRef)();
            }),
            n = (0, c.useRef)(null);
          return (
            (0, c.useEffect)(function () {
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
        K = [
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
        H = function (e) {
          var t = e.className,
            n = e.percent,
            r = e.prefixCls,
            o = e.strokeColor,
            s = e.strokeLinecap,
            i = e.strokeWidth,
            l = e.style,
            u = e.trailColor,
            d = e.trailWidth,
            p = e.transition,
            f = (0, D.Z)(e, K);
          delete f.gapPosition;
          var m = Array.isArray(n) ? n : [n],
            h = Array.isArray(o) ? o : [o],
            g = W(m),
            E = (0, a.Z)(g, 1)[0],
            y = i / 2,
            k = 100 - i / 2,
            N = "M "
              .concat("round" === s ? y : 0, ",")
              .concat(y, "\n         L ")
              .concat("round" === s ? k : 100, ",")
              .concat(y),
            x = "0 0 100 ".concat(i),
            C = 0;
          return c.createElement(
            "svg",
            (0, v.Z)(
              {
                className: b()("".concat(r, "-line"), t),
                viewBox: x,
                preserveAspectRatio: "none",
                style: l,
              },
              f
            ),
            c.createElement("path", {
              className: "".concat(r, "-line-trail"),
              d: N,
              strokeLinecap: s,
              stroke: u,
              strokeWidth: d || i,
              fillOpacity: "0",
            }),
            m.map(function (e, t) {
              var n = 1;
              switch (s) {
                case "round":
                  n = 1 - i / 100;
                  break;
                case "square":
                  n = 1 - i / 2 / 100;
                  break;
                default:
                  n = 1;
              }
              var a = {
                  strokeDasharray: "".concat(e * n, "px, 100px"),
                  strokeDashoffset: "-".concat(C, "px"),
                  transition:
                    p ||
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear",
                },
                o = h[t] || h[h.length - 1];
              return (
                (C += e),
                c.createElement("path", {
                  key: t,
                  className: "".concat(r, "-line-path"),
                  d: N,
                  strokeLinecap: s,
                  stroke: o,
                  strokeWidth: i,
                  fillOpacity: "0",
                  ref: E[t],
                  style: a,
                })
              );
            })
          );
        };
      (H.defaultProps = F), (H.displayName = "Line");
      var B = n(1002),
        G = n(4937),
        z = 0,
        V = (0, G.Z)();
      var Q = function (e) {
          var t = c.useState(),
            n = (0, a.Z)(t, 2),
            r = n[0],
            o = n[1];
          return (
            c.useEffect(function () {
              o(
                "rc_progress_".concat(
                  (function () {
                    var e;
                    return V ? ((e = z), (z += 1)) : (e = "TEST_OR_SSR"), e;
                  })()
                )
              );
            }, []),
            e || r
          );
        },
        Y = [
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
      function q(e) {
        return +e.replace("%", "");
      }
      function X(e) {
        var t = null !== e && void 0 !== e ? e : [];
        return Array.isArray(t) ? t : [t];
      }
      function J(e, t, n, r) {
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
      var $ = function (e) {
        var t = e.id,
          n = e.prefixCls,
          r = e.strokeWidth,
          o = e.trailWidth,
          s = e.gapDegree,
          i = e.gapPosition,
          l = e.trailColor,
          u = e.strokeLinecap,
          d = e.style,
          p = e.className,
          f = e.strokeColor,
          m = e.percent,
          h = (0, D.Z)(e, Y),
          g = Q(t),
          E = "".concat(g, "-gradient"),
          y = J(0, 100, l, r, s, i),
          k = y.pathString,
          N = y.pathStyle,
          x = X(m),
          C = X(f),
          S = C.find(function (e) {
            return e && "object" === (0, B.Z)(e);
          }),
          O = W(x),
          w = (0, a.Z)(O, 1)[0];
        return c.createElement(
          "svg",
          (0, v.Z)(
            {
              className: b()("".concat(n, "-circle"), p),
              viewBox: "0 0 100 100",
              style: d,
              id: t,
            },
            h
          ),
          S &&
            c.createElement(
              "defs",
              null,
              c.createElement(
                "linearGradient",
                { id: E, x1: "100%", y1: "0%", x2: "0%", y2: "0%" },
                Object.keys(S)
                  .sort(function (e, t) {
                    return q(e) - q(t);
                  })
                  .map(function (e, t) {
                    return c.createElement("stop", {
                      key: t,
                      offset: e,
                      stopColor: S[e],
                    });
                  })
              )
            ),
          c.createElement("path", {
            className: "".concat(n, "-circle-trail"),
            d: k,
            stroke: l,
            strokeLinecap: u,
            strokeWidth: o || r,
            fillOpacity: "0",
            style: N,
          }),
          (function () {
            var e = 0;
            return x.map(function (t, a) {
              var o = C[a] || C[C.length - 1],
                l = o && "object" === (0, B.Z)(o) ? "url(#".concat(E, ")") : "",
                d = J(e, t, o, r, s, i);
              return (
                (e += t),
                c.createElement("path", {
                  key: a,
                  className: "".concat(n, "-circle-path"),
                  d: d.pathString,
                  stroke: l,
                  strokeLinecap: u,
                  strokeWidth: r,
                  opacity: 0 === t ? 0 : 1,
                  fillOpacity: "0",
                  style: d.pathStyle,
                  ref: w[a],
                })
              );
            });
          })().reverse()
        );
      };
      ($.defaultProps = F), ($.displayName = "Circle");
      var ee = $;
      function te(e) {
        var t = e.percent,
          n = L(A({ success: e.success, successPercent: e.successPercent }));
        return [n, L(L(t) - n)];
      }
      var ne = function (e) {
          var t = e.prefixCls,
            n = e.width,
            r = e.strokeWidth,
            a = e.trailColor,
            o = e.strokeLinecap,
            s = e.gapPosition,
            i = e.gapDegree,
            l = e.type,
            u = e.children,
            d = e.success,
            p = n || 120,
            f = { width: p, height: p, fontSize: 0.15 * p + 6 },
            m = r || 6,
            h = s || ("dashboard" === l && "bottom") || "top",
            v =
              "[object Object]" ===
              Object.prototype.toString.call(e.strokeColor),
            E = (function (e) {
              var t = e.success,
                n = void 0 === t ? {} : t,
                r = e.strokeColor;
              return [n.strokeColor || _.ez.green, r || null];
            })({ success: d, strokeColor: e.strokeColor }),
            y = b()(
              "".concat(t, "-inner"),
              (0, g.Z)({}, "".concat(t, "-circle-gradient"), v)
            );
          return c.createElement(
            "div",
            { className: y, style: f },
            c.createElement(ee, {
              percent: te(e),
              strokeWidth: m,
              trailWidth: m,
              strokeColor: E,
              strokeLinecap: o,
              trailColor: a,
              prefixCls: t,
              gapDegree: i || 0 === i ? i : "dashboard" === l ? 75 : void 0,
              gapPosition: h,
            }),
            u
          );
        },
        re = function (e) {
          for (
            var t = e.size,
              n = e.steps,
              r = e.percent,
              a = void 0 === r ? 0 : r,
              o = e.strokeWidth,
              s = void 0 === o ? 8 : o,
              i = e.strokeColor,
              l = e.trailColor,
              u = e.prefixCls,
              d = e.children,
              p = Math.round(n * (a / 100)),
              f = "small" === t ? 2 : 14,
              m = [],
              h = 0;
            h < n;
            h += 1
          )
            m.push(
              c.createElement("div", {
                key: h,
                className: b()(
                  "".concat(u, "-steps-item"),
                  (0, g.Z)({}, "".concat(u, "-steps-item-active"), h <= p - 1)
                ),
                style: {
                  backgroundColor: h <= p - 1 ? i : l,
                  width: f,
                  height: s,
                },
              })
            );
          return c.createElement(
            "div",
            { className: "".concat(u, "-steps-outer") },
            m,
            d
          );
        },
        ae = function (e, t) {
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
        oe =
          ((0, M.b)("line", "circle", "dashboard"),
          (0, M.b)("normal", "exception", "active", "success")),
        se = (function (e) {
          (0, N.Z)(n, e);
          var t = (0, x.Z)(n);
          function n() {
            var e;
            return (
              (0, E.Z)(this, n),
              ((e = t.apply(this, arguments)).renderProgress = function (t) {
                var n,
                  r,
                  a = t.getPrefixCls,
                  o = t.direction,
                  s = (0, k.Z)(e).props,
                  i = s.prefixCls,
                  l = s.className,
                  u = s.size,
                  d = s.type,
                  p = s.steps,
                  f = s.showInfo,
                  m = s.strokeColor,
                  h = ae(s, [
                    "prefixCls",
                    "className",
                    "size",
                    "type",
                    "steps",
                    "showInfo",
                    "strokeColor",
                  ]),
                  E = a("progress", i),
                  y = e.getProgressStatus(),
                  N = e.renderProcessInfo(E, y);
                (0, I.Z)(
                  !("successPercent" in s),
                  "Progress",
                  "`successPercent` is deprecated. Please use `success.percent` instead."
                ),
                  "line" === d
                    ? (r = p
                        ? c.createElement(
                            re,
                            (0, v.Z)({}, e.props, {
                              strokeColor: "string" === typeof m ? m : void 0,
                              prefixCls: E,
                              steps: p,
                            }),
                            N
                          )
                        : c.createElement(
                            R,
                            (0, v.Z)({}, e.props, {
                              prefixCls: E,
                              direction: o,
                            }),
                            N
                          ))
                    : ("circle" !== d && "dashboard" !== d) ||
                      (r = c.createElement(
                        ne,
                        (0, v.Z)({}, e.props, {
                          prefixCls: E,
                          progressStatus: y,
                        }),
                        N
                      ));
                var x = b()(
                  E,
                  ((n = {}),
                  (0, g.Z)(
                    n,
                    ""
                      .concat(E, "-")
                      .concat(
                        ("dashboard" === d ? "circle" : p && "steps") || d
                      ),
                    !0
                  ),
                  (0, g.Z)(n, "".concat(E, "-status-").concat(y), !0),
                  (0, g.Z)(n, "".concat(E, "-show-info"), f),
                  (0, g.Z)(n, "".concat(E, "-").concat(u), u),
                  (0, g.Z)(n, "".concat(E, "-rtl"), "rtl" === o),
                  n),
                  l
                );
                return c.createElement(
                  "div",
                  (0, v.Z)(
                    {},
                    (0, S.Z)(h, [
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
            (0, y.Z)(n, [
              {
                key: "getPercentNumber",
                value: function () {
                  var e = this.props.percent,
                    t = void 0 === e ? 0 : e,
                    n = A(this.props);
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
                  return oe.indexOf(e) < 0 && this.getPercentNumber() >= 100
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
                    i = r.percent,
                    l = A(this.props);
                  if (!a) return null;
                  var u = "line" === s;
                  return (
                    o || ("exception" !== t && "success" !== t)
                      ? (n = (
                          o ||
                          function (e) {
                            return "".concat(e, "%");
                          }
                        )(L(i), L(l)))
                      : "exception" === t
                      ? (n = u
                          ? c.createElement(Z.Z, null)
                          : c.createElement(O.Z, null))
                      : "success" === t &&
                        (n = u
                          ? c.createElement(P.Z, null)
                          : c.createElement(w.Z, null)),
                    c.createElement(
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
                  return c.createElement(T.C, null, this.renderProgress);
                },
              },
            ]),
            n
          );
        })(c.Component);
      se.defaultProps = {
        type: "line",
        percent: 0,
        showInfo: !0,
        trailColor: null,
        size: "default",
        gapDegree: void 0,
        strokeLinecap: "round",
      };
      var ce = se,
        ie = n(184);
      function le(e) {
        var t = e.percent;
        return (0, ie.jsx)("div", {
          className: "absolute h-full w-full inset-0 z-50 backdrop-blur-sm",
          children: (0, ie.jsxs)("div", {
            className:
              "h-full my-auto w-auto mx-2 md:w-96 md:mx-auto flex flex-col justify-center items-center",
            children: [
              (0, ie.jsx)("h1", {
                className: "dark:text-white font-medium text-lg",
                children: "Uploading ...",
              }),
              (0, ie.jsx)(ce, {
                strokeColor: { "0%": "#108ee9", "100%": "#87d068" },
                percent: t,
                className: "dark:text-white",
              }),
            ],
          }),
        });
      }
      function ue() {
        var e = (0, m.b)().sideBar,
          t = (0, i.UO)().id,
          n = (0, l.ZP)("/folders/".concat(t), d.Z).data,
          o = (0, c.useState)(0),
          g = (0, a.Z)(o, 2),
          v = g[0],
          E = g[1],
          y = (0, c.useState)(!1),
          k = (0, a.Z)(y, 2),
          N = k[0],
          x = k[1],
          C = n && n.data,
          b = (0, c.useState)([]),
          S = (0, a.Z)(b, 2),
          O = S[0],
          w = S[1],
          P = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/folders", name: "Folders" },
            {
              isLink: !0,
              link: "/folders/".concat(t, "/details"),
              name: (null === C || void 0 === C ? void 0 : C.name) + "s",
            },
            { isLink: !1, link: "", name: "Upload" },
          ],
          Z = (function () {
            var e = (0, r.Z)(
              s().mark(function e(n) {
                var r, a, o, c, i;
                return s().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          for (o in ((r = new FormData()),
                          (a = n.target.files),
                          x(!0),
                          a))
                            r.append("files", a[o]);
                          return (
                            (e.prev = 4),
                            (e.next = 7),
                            p.Z.post("/files/upload?folderId=".concat(t), r, {
                              onUploadProgress: function (e) {
                                var t = e.loaded / e.total;
                                (t = parseInt(100 * t)), E(t);
                              },
                            })
                          );
                        case 7:
                          (c = e.sent),
                            (i = c.data),
                            w(i.data),
                            (n.target.value = null),
                            x(!1),
                            (e.next = 17);
                          break;
                        case 14:
                          (e.prev = 14),
                            (e.t0 = e.catch(4)),
                            f.Am.error(
                              e.t0.response.data.message
                                ? e.t0.response.data.message
                                : e.t0.message
                            );
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 14]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, ie.jsxs)(ie.Fragment, {
          children: [
            (0, ie.jsx)(u.Z, { details: P }),
            (0, ie.jsx)("div", {
              className: "my-5",
              children: (0, ie.jsxs)("div", {
                className: "text-white flex flex-col",
                children: [
                  (0, ie.jsx)("div", {
                    className: "w-full md:w-96 mx-auto",
                    children: (0, ie.jsx)("input", {
                      className:
                        "block w-full ring-2 rounded-full ring-violet-700 text-sm dark:text-white text-dark font-mono file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold dark:file:bg-violet-50 file:text-violet-700  hover:file:bg-violet-100",
                      type: "file",
                      onChange: Z,
                      multiple: !0,
                    }),
                  }),
                  (0, ie.jsx)("div", {
                    className: e.isOpen
                      ? "my-5 normal-transition grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                      : "my-5 normal-transition grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",
                    children:
                      O &&
                      O.map(function (e) {
                        return (0,
                        ie.jsx)(h.Z, { file: e, files: O, setFiles: w, folderId: t }, null === e || void 0 === e ? void 0 : e._id);
                      }),
                  }),
                ],
              }),
            }),
            N && (0, ie.jsx)(le, { percent: v }),
          ],
        });
      }
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
//# sourceMappingURL=435.7451cfad.chunk.js.map
