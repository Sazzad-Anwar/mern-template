"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [838],
  {
    4838: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var r = n(5861),
        a = n(9439),
        s = n(7757),
        i = n.n(s),
        l = n(8678),
        c = n(6446),
        o = n(9823),
        u = n(7309),
        f = n(2791),
        m = n(2419),
        d = n(8717),
        p = n(2065),
        v = n(8957),
        g = n(1033),
        x = n(577),
        h = n(2896),
        y = n(184),
        Z = l.Z.TextArea;
      function b() {
        var e,
          t = (0, m.ZP)("/app-config", p.Z),
          n = t.data,
          s = t.error,
          b = (0, f.useState)({}),
          j = (0, a.Z)(b, 2),
          E = j[0],
          C = j[1];
        (0, f.useEffect)(
          function () {
            n && n.data && C(n.data[0]);
          },
          [n]
        );
        var N = (function () {
          var e = (0, r.Z)(
            i().mark(function e(t) {
              var n, r;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.prev = 0), !E || !E._id)) {
                          e.next = 8;
                          break;
                        }
                        return (
                          (e.next = 4), g.Z.put("/app-config/".concat(E._id), t)
                        );
                      case 4:
                        x.Am.success("Config updated successfully!"),
                          (0, m.JG)("/app-config", t),
                          (e.next = 12);
                        break;
                      case 8:
                        return (e.next = 10), g.Z.post("/app-config", t);
                      case 10:
                        x.Am.success("Config created successfully!"),
                          (0, m.JG)("/app-config", t);
                      case 12:
                        e.next = 17;
                        break;
                      case 14:
                        (e.prev = 14),
                          (e.t0 = e.catch(0)),
                          x.Am.error(
                            null !== (n = e.t0.response) &&
                              void 0 !== n &&
                              n.data.message
                              ? null === (r = e.t0.response) || void 0 === r
                                ? void 0
                                : r.data.message
                              : e.t0.message
                          );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 14]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(d.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !1, link: "/settings", name: "Settings" },
              ],
            }),
            s
              ? (0, y.jsx)(v.Z, {
                  error: s.response.data.message
                    ? s.response.data.message
                    : s.message,
                })
              : (0, y.jsx)("div", {
                  className: "my-5",
                  children: (0, y.jsx)("div", {
                    className: "w-96 mx-auto",
                    children: (0, y.jsx)("div", {
                      className: "text-center mb-5",
                      children:
                        E && E._id
                          ? (0, y.jsxs)(y.Fragment, {
                              children: [
                                (0, y.jsx)(c.C, {
                                  alt:
                                    null === E || void 0 === E
                                      ? void 0
                                      : E.name,
                                  src:
                                    null === E || void 0 === E
                                      ? void 0
                                      : E.logo,
                                  className: "dark:text-gray-900",
                                  size: 50,
                                  children:
                                    null === E ||
                                    void 0 === E ||
                                    null === (e = E.name) ||
                                    void 0 === e
                                      ? void 0
                                      : e.split("")[0].toUpperCase(),
                                }),
                                (0, y.jsxs)(o.Z, {
                                  name: "user-details",
                                  layout: "vertical",
                                  initialValues: {
                                    name:
                                      null === E || void 0 === E
                                        ? void 0
                                        : E.name,
                                    logo:
                                      null === E || void 0 === E
                                        ? void 0
                                        : E.logo,
                                    motto:
                                      null === E || void 0 === E
                                        ? void 0
                                        : E.motto,
                                    description:
                                      null === E || void 0 === E
                                        ? void 0
                                        : E.description,
                                  },
                                  className: "ml-5 grid grid-cols-1 gap-2",
                                  onFinish: N,
                                  children: [
                                    (0, y.jsx)(o.Z.Item, {
                                      label: (0, y.jsx)("span", {
                                        className: "text-lg dark:text-white",
                                        children: "App Name",
                                      }),
                                      name: "name",
                                      rules: [
                                        {
                                          required: !0,
                                          message: "Please input app name!",
                                        },
                                      ],
                                      children: (0, y.jsx)(l.Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, y.jsx)(o.Z.Item, {
                                      label: (0, y.jsx)("span", {
                                        className: "text-lg dark:text-white",
                                        children: "Logo",
                                      }),
                                      name: "logo",
                                      rules: [
                                        {
                                          required: !0,
                                          message: "Please input logo url!",
                                        },
                                      ],
                                      children: (0, y.jsx)(l.Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, y.jsx)(o.Z.Item, {
                                      label: (0, y.jsx)("span", {
                                        className: "text-lg dark:text-white",
                                        children: "Motto",
                                      }),
                                      name: "motto",
                                      children: (0, y.jsx)(Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, y.jsx)(o.Z.Item, {
                                      label: (0, y.jsx)("span", {
                                        className: "text-lg dark:text-white",
                                        children: "Description",
                                      }),
                                      name: "description",
                                      children: (0, y.jsx)(Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, y.jsx)(o.Z.Item, {
                                      children: (0, y.jsx)(u.Z, {
                                        htmlType: "submit",
                                        size: "large",
                                        className: "w-full",
                                        type: "primary",
                                        children: "Save",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, y.jsx)(h.Z, {}),
                    }),
                  }),
                }),
          ],
        });
      }
    },
    7924: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var r = function (e) {
        return e ? ("function" === typeof e ? e() : e) : null;
      };
    },
    9581: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(9439),
        a = n(2791);
      function s() {
        var e = a.useReducer(function (e) {
          return e + 1;
        }, 0);
        return (0, r.Z)(e, 2)[1];
      }
    },
    6446: function (e, t, n) {
      n.d(t, {
        C: function () {
          return _;
        },
      });
      var r = n(7462),
        a = n(4942),
        s = n(1002),
        i = n(9439),
        l = n(2791),
        c = n(1694),
        o = n.n(c),
        u = n(8829),
        f = n(8834),
        m = n(9077),
        d = n(4824),
        p = n(8295),
        v = n(2832),
        g = l.createContext("default"),
        x = function (e) {
          var t = e.children,
            n = e.size;
          return l.createElement(g.Consumer, null, function (e) {
            return l.createElement(g.Provider, { value: n || e }, t);
          });
        },
        h = g,
        y = function (e, t) {
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
        Z = function (e, t) {
          var n,
            c,
            g = l.useContext(h),
            x = l.useState(1),
            Z = (0, i.Z)(x, 2),
            b = Z[0],
            j = Z[1],
            E = l.useState(!1),
            C = (0, i.Z)(E, 2),
            N = C[0],
            k = C[1],
            w = l.useState(!0),
            O = (0, i.Z)(w, 2),
            P = O[0],
            z = O[1],
            S = l.useRef(),
            R = l.useRef(),
            _ = (0, f.sQ)(t, S),
            A = l.useContext(m.E_).getPrefixCls,
            I = function () {
              if (R.current && S.current) {
                var t = R.current.offsetWidth,
                  n = S.current.offsetWidth;
                if (0 !== t && 0 !== n) {
                  var r = e.gap,
                    a = void 0 === r ? 4 : r;
                  2 * a < n && j(n - 2 * a < t ? (n - 2 * a) / t : 1);
                }
              }
            };
          l.useEffect(function () {
            k(!0);
          }, []),
            l.useEffect(
              function () {
                z(!0), j(1);
              },
              [e.src]
            ),
            l.useEffect(
              function () {
                I();
              },
              [e.gap]
            );
          var T = e.prefixCls,
            L = e.shape,
            F = e.size,
            H = e.src,
            D = e.srcSet,
            G = e.icon,
            W = e.className,
            q = e.alt,
            J = e.draggable,
            M = e.children,
            V = e.crossOrigin,
            Q = y(e, [
              "prefixCls",
              "shape",
              "size",
              "src",
              "srcSet",
              "icon",
              "className",
              "alt",
              "draggable",
              "children",
              "crossOrigin",
            ]),
            U = "default" === F ? g : F,
            X = Object.keys(("object" === (0, s.Z)(U) && U) || {}).some(
              function (e) {
                return ["xs", "sm", "md", "lg", "xl", "xxl"].includes(e);
              }
            ),
            B = (0, v.Z)(X),
            K = l.useMemo(
              function () {
                if ("object" !== (0, s.Z)(U)) return {};
                var e = p.c4.find(function (e) {
                    return B[e];
                  }),
                  t = U[e];
                return t
                  ? {
                      width: t,
                      height: t,
                      lineHeight: "".concat(t, "px"),
                      fontSize: G ? t / 2 : 18,
                    }
                  : {};
              },
              [B, U]
            );
          (0, d.Z)(
            !("string" === typeof G && G.length > 2),
            "Avatar",
            "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(
              G,
              "` at https://ant.design/components/icon"
            )
          );
          var Y,
            $ = A("avatar", T),
            ee = o()(
              ((n = {}),
              (0, a.Z)(n, "".concat($, "-lg"), "large" === U),
              (0, a.Z)(n, "".concat($, "-sm"), "small" === U),
              n)
            ),
            te = l.isValidElement(H),
            ne = o()(
              $,
              ee,
              ((c = {}),
              (0, a.Z)(c, "".concat($, "-").concat(L), !!L),
              (0, a.Z)(c, "".concat($, "-image"), te || (H && P)),
              (0, a.Z)(c, "".concat($, "-icon"), !!G),
              c),
              W
            ),
            re =
              "number" === typeof U
                ? {
                    width: U,
                    height: U,
                    lineHeight: "".concat(U, "px"),
                    fontSize: G ? U / 2 : 18,
                  }
                : {};
          if ("string" === typeof H && P)
            Y = l.createElement("img", {
              src: H,
              draggable: J,
              srcSet: D,
              onError: function () {
                var t = e.onError;
                !1 !== (t ? t() : void 0) && z(!1);
              },
              alt: q,
              crossOrigin: V,
            });
          else if (te) Y = H;
          else if (G) Y = G;
          else if (N || 1 !== b) {
            var ae = "scale(".concat(b, ") translateX(-50%)"),
              se = { msTransform: ae, WebkitTransform: ae, transform: ae },
              ie =
                "number" === typeof U ? { lineHeight: "".concat(U, "px") } : {};
            Y = l.createElement(
              u.Z,
              { onResize: I },
              l.createElement(
                "span",
                {
                  className: "".concat($, "-string"),
                  ref: function (e) {
                    R.current = e;
                  },
                  style: (0, r.Z)((0, r.Z)({}, ie), se),
                },
                M
              )
            );
          } else
            Y = l.createElement(
              "span",
              {
                className: "".concat($, "-string"),
                style: { opacity: 0 },
                ref: function (e) {
                  R.current = e;
                },
              },
              M
            );
          return (
            delete Q.onError,
            delete Q.gap,
            l.createElement(
              "span",
              (0, r.Z)({}, Q, {
                style: (0, r.Z)((0, r.Z)((0, r.Z)({}, re), K), Q.style),
                className: ne,
                ref: _,
              }),
              Y
            )
          );
        },
        b = l.forwardRef(Z);
      (b.displayName = "Avatar"),
        (b.defaultProps = { shape: "circle", size: "default" });
      var j = b,
        E = n(5501),
        C = n(1113),
        N = n(9220),
        k = n(7924),
        w = n(9464),
        O = function (e, t) {
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
        P = l.forwardRef(function (e, t) {
          var n = e.prefixCls,
            a = e.title,
            s = e.content,
            i = O(e, ["prefixCls", "title", "content"]),
            c = l.useContext(m.E_).getPrefixCls,
            o = c("popover", n),
            u = c();
          return l.createElement(
            N.Z,
            (0, r.Z)({}, i, {
              prefixCls: o,
              ref: t,
              overlay: (function (e) {
                if (a || s)
                  return l.createElement(
                    l.Fragment,
                    null,
                    a &&
                      l.createElement(
                        "div",
                        { className: "".concat(e, "-title") },
                        (0, k.Z)(a)
                      ),
                    l.createElement(
                      "div",
                      { className: "".concat(e, "-inner-content") },
                      (0, k.Z)(s)
                    )
                  );
              })(o),
              transitionName: (0, w.mL)(u, "zoom-big", i.transitionName),
            })
          );
        });
      (P.displayName = "Popover"),
        (P.defaultProps = {
          placement: "top",
          trigger: "hover",
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1,
          overlayStyle: {},
        });
      var z = P,
        S = function (e) {
          var t = l.useContext(m.E_),
            n = t.getPrefixCls,
            r = t.direction,
            s = e.prefixCls,
            i = e.className,
            c = void 0 === i ? "" : i,
            u = e.maxCount,
            f = e.maxStyle,
            d = e.size,
            p = n("avatar-group", s),
            v = o()(p, (0, a.Z)({}, "".concat(p, "-rtl"), "rtl" === r), c),
            g = e.children,
            h = e.maxPopoverPlacement,
            y = void 0 === h ? "top" : h,
            Z = e.maxPopoverTrigger,
            b = void 0 === Z ? "hover" : Z,
            N = (0, E.Z)(g).map(function (e, t) {
              return (0, C.Tm)(e, { key: "avatar-key-".concat(t) });
            }),
            k = N.length;
          if (u && u < k) {
            var w = N.slice(0, u),
              O = N.slice(u, k);
            return (
              w.push(
                l.createElement(
                  z,
                  {
                    key: "avatar-popover-key",
                    content: O,
                    trigger: b,
                    placement: y,
                    overlayClassName: "".concat(p, "-popover"),
                  },
                  l.createElement(j, { style: f }, "+".concat(k - u))
                )
              ),
              l.createElement(
                x,
                { size: d },
                l.createElement("div", { className: v, style: e.style }, w)
              )
            );
          }
          return l.createElement(
            x,
            { size: d },
            l.createElement("div", { className: v, style: e.style }, N)
          );
        },
        R = j;
      R.Group = S;
      var _ = R;
    },
    2832: function (e, t, n) {
      var r = n(2791),
        a = n(9581),
        s = n(8295);
      t.Z = function () {
        var e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          t = (0, r.useRef)({}),
          n = (0, a.Z)();
        return (
          (0, r.useEffect)(function () {
            var r = s.ZP.subscribe(function (r) {
              (t.current = r), e && n();
            });
            return function () {
              return s.ZP.unsubscribe(r);
            };
          }, []),
          t.current
        );
      };
    },
  },
]);
//# sourceMappingURL=838.6aa78719.chunk.js.map
