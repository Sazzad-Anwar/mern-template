"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [838],
  {
    4838: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        });
      var r = a(1413),
        n = a(5861),
        s = a(9439),
        l = a(7757),
        i = a.n(l),
        c = a(8678),
        o = a(6446),
        u = a(9823),
        m = a(7309),
        d = a(2791),
        p = a(2419),
        f = a(8717),
        g = a(2065),
        x = a(8957),
        v = a(1033),
        h = a(577),
        y = a(6570),
        Z = a(184),
        j = c.Z.TextArea;
      function b() {
        var e,
          t,
          a = (0, p.ZP)("/app-config", g.Z),
          l = a.data,
          b = a.error,
          w = (0, d.useState)({}),
          C = (0, s.Z)(w, 2),
          N = C[0],
          k = C[1];
        (0, d.useEffect)(
          function () {
            var e;
            return (
              (e = setTimeout(function () {
                k(l && l.data[0]);
              }, 500)),
              function () {
                return clearTimeout(e);
              }
            );
          },
          [l]
        );
        var E = (function () {
            var e = (0, n.Z)(
              i().mark(function e(t) {
                var a, r;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            v.Z.put("/app-config/".concat(N._id), t)
                          );
                        case 3:
                          h.Am.success("Config updated successfully!"),
                            (0, p.JG)("/app-config", t),
                            (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            h.Am.error(
                              null !== (a = e.t0.response) &&
                                void 0 !== a &&
                                a.data.message
                                ? null === (r = e.t0.response) || void 0 === r
                                  ? void 0
                                  : r.data.message
                                : e.t0.message
                            );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          P = (function () {
            var e = (0, n.Z)(
              i().mark(function e(t) {
                var a, r;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            v.Z.post("/app-config", t)
                          );
                        case 3:
                          h.Am.success("Config created successfully!"),
                            (0, p.JG)("/app-config", t),
                            (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            h.Am.error(
                              null !== (a = e.t0.response) &&
                                void 0 !== a &&
                                a.data.message
                                ? null === (r = e.t0.response) || void 0 === r
                                  ? void 0
                                  : r.data.message
                                : e.t0.message
                            );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(f.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !1, link: "/settings", name: "Settings" },
              ],
            }),
            b
              ? (0, Z.jsx)(x.Z, {
                  error: b.response.data.message
                    ? b.response.data.message
                    : b.message,
                })
              : (0, Z.jsx)("div", {
                  className: "my-5",
                  children: (0, Z.jsx)("div", {
                    className: "w-96 mx-auto",
                    children: (0, Z.jsx)("div", {
                      className: "text-center mb-5",
                      children:
                        N &&
                        (null === (e = Object.keys(N)) || void 0 === e
                          ? void 0
                          : e.length) > 0
                          ? (0, Z.jsxs)("div", {
                              children: [
                                (0, Z.jsx)(o.C, {
                                  alt:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.name,
                                  src:
                                    null === N || void 0 === N
                                      ? void 0
                                      : N.logo,
                                  className: "dark:text-gray-900",
                                  size: 50,
                                  children:
                                    null === N ||
                                    void 0 === N ||
                                    null === (t = N.name) ||
                                    void 0 === t
                                      ? void 0
                                      : t.split("")[0].toUpperCase(),
                                }),
                                (0, Z.jsxs)(u.Z, {
                                  name: "user-details",
                                  layout: "vertical",
                                  initialValues: (0, r.Z)({}, N),
                                  className: "ml-5 grid grid-cols-1 gap-2",
                                  onFinish: E,
                                  children: [
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsx)("span", {
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
                                      children: (0, Z.jsx)(c.Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsx)("span", {
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
                                      children: (0, Z.jsx)(c.Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsxs)("span", {
                                        className: "text-lg dark:text-white",
                                        children: [
                                          "Image",
                                          " ",
                                          (0, Z.jsx)("span", {
                                            className: "text-xs",
                                            children:
                                              "(Login, Forget Password, Reset Password Page)",
                                          }),
                                          " ",
                                        ],
                                      }),
                                      name: "image",
                                      children: (0, Z.jsx)(c.Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsx)("span", {
                                        className: "text-lg dark:text-white",
                                        children: "Motto",
                                      }),
                                      name: "motto",
                                      children: (0, Z.jsx)(j, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsx)("span", {
                                        className: "text-lg dark:text-white",
                                        children: "Description",
                                      }),
                                      name: "description",
                                      children: (0, Z.jsx)(j, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      children: (0, Z.jsx)(m.Z, {
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
                          : (0, Z.jsxs)(Z.Fragment, {
                              children: [
                                (0, Z.jsx)(o.C, {
                                  alt: y.iC,
                                  src: "/logo.jpg",
                                  className: "dark:text-gray-900",
                                  size: 50,
                                  children: y.iC.split("")[0].toUpperCase(),
                                }),
                                (0, Z.jsxs)(u.Z, {
                                  name: "user-details",
                                  layout: "vertical",
                                  className: "ml-5 grid grid-cols-1 gap-2",
                                  onFinish: P,
                                  initialValues: {
                                    name: y.iC,
                                    logo: window.location.origin + "/logo.jpg",
                                    motto: y.y$ + ". " + y.gc,
                                    description: y.y$ + ". " + y.gc,
                                    image: "/login-image.png",
                                  },
                                  children: [
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsx)("span", {
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
                                      children: (0, Z.jsx)(c.Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsx)("span", {
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
                                      children: (0, Z.jsx)(c.Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsxs)("span", {
                                        className: "text-lg dark:text-white",
                                        children: [
                                          "Image",
                                          " ",
                                          (0, Z.jsx)("span", {
                                            className: "text-xs",
                                            children:
                                              "(Login, Forget Password, Reset Password Page)",
                                          }),
                                          " ",
                                        ],
                                      }),
                                      name: "image",
                                      children: (0, Z.jsx)(c.Z, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsx)("span", {
                                        className: "text-lg dark:text-white",
                                        children: "Motto",
                                      }),
                                      name: "motto",
                                      children: (0, Z.jsx)(j, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      label: (0, Z.jsx)("span", {
                                        className: "text-lg dark:text-white",
                                        children: "Description",
                                      }),
                                      name: "description",
                                      children: (0, Z.jsx)(j, {
                                        allowClear: !0,
                                        size: "large",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Item, {
                                      children: (0, Z.jsx)(m.Z, {
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
                            }),
                    }),
                  }),
                }),
          ],
        });
      }
    },
    7924: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var r = function (e) {
        return e ? ("function" === typeof e ? e() : e) : null;
      };
    },
    9581: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = a(9439),
        n = a(2791);
      function s() {
        var e = n.useReducer(function (e) {
          return e + 1;
        }, 0);
        return (0, r.Z)(e, 2)[1];
      }
    },
    6446: function (e, t, a) {
      a.d(t, {
        C: function () {
          return R;
        },
      });
      var r = a(7462),
        n = a(4942),
        s = a(1002),
        l = a(9439),
        i = a(2791),
        c = a(1694),
        o = a.n(c),
        u = a(8829),
        m = a(8834),
        d = a(9077),
        p = a(4824),
        f = a(8295),
        g = a(2832),
        x = i.createContext("default"),
        v = function (e) {
          var t = e.children,
            a = e.size;
          return i.createElement(x.Consumer, null, function (e) {
            return i.createElement(x.Provider, { value: a || e }, t);
          });
        },
        h = x,
        y = function (e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (a[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                (a[r[n]] = e[r[n]]);
          }
          return a;
        },
        Z = function (e, t) {
          var a,
            c,
            x = i.useContext(h),
            v = i.useState(1),
            Z = (0, l.Z)(v, 2),
            j = Z[0],
            b = Z[1],
            w = i.useState(!1),
            C = (0, l.Z)(w, 2),
            N = C[0],
            k = C[1],
            E = i.useState(!0),
            P = (0, l.Z)(E, 2),
            z = P[0],
            O = P[1],
            S = i.useRef(),
            I = i.useRef(),
            R = (0, m.sQ)(t, S),
            A = i.useContext(d.E_).getPrefixCls,
            T = function () {
              if (I.current && S.current) {
                var t = I.current.offsetWidth,
                  a = S.current.offsetWidth;
                if (0 !== t && 0 !== a) {
                  var r = e.gap,
                    n = void 0 === r ? 4 : r;
                  2 * n < a && b(a - 2 * n < t ? (a - 2 * n) / t : 1);
                }
              }
            };
          i.useEffect(function () {
            k(!0);
          }, []),
            i.useEffect(
              function () {
                O(!0), b(1);
              },
              [e.src]
            ),
            i.useEffect(
              function () {
                T();
              },
              [e.gap]
            );
          var L = e.prefixCls,
            F = e.shape,
            _ = e.size,
            q = e.src,
            D = e.srcSet,
            H = e.icon,
            G = e.className,
            M = e.alt,
            V = e.draggable,
            W = e.children,
            J = e.crossOrigin,
            U = y(e, [
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
            $ = "default" === _ ? x : _,
            Q = Object.keys(("object" === (0, s.Z)($) && $) || {}).some(
              function (e) {
                return ["xs", "sm", "md", "lg", "xl", "xxl"].includes(e);
              }
            ),
            X = (0, g.Z)(Q),
            B = i.useMemo(
              function () {
                if ("object" !== (0, s.Z)($)) return {};
                var e = f.c4.find(function (e) {
                    return X[e];
                  }),
                  t = $[e];
                return t
                  ? {
                      width: t,
                      height: t,
                      lineHeight: "".concat(t, "px"),
                      fontSize: H ? t / 2 : 18,
                    }
                  : {};
              },
              [X, $]
            );
          (0, p.Z)(
            !("string" === typeof H && H.length > 2),
            "Avatar",
            "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(
              H,
              "` at https://ant.design/components/icon"
            )
          );
          var K,
            Y = A("avatar", L),
            ee = o()(
              ((a = {}),
              (0, n.Z)(a, "".concat(Y, "-lg"), "large" === $),
              (0, n.Z)(a, "".concat(Y, "-sm"), "small" === $),
              a)
            ),
            te = i.isValidElement(q),
            ae = o()(
              Y,
              ee,
              ((c = {}),
              (0, n.Z)(c, "".concat(Y, "-").concat(F), !!F),
              (0, n.Z)(c, "".concat(Y, "-image"), te || (q && z)),
              (0, n.Z)(c, "".concat(Y, "-icon"), !!H),
              c),
              G
            ),
            re =
              "number" === typeof $
                ? {
                    width: $,
                    height: $,
                    lineHeight: "".concat($, "px"),
                    fontSize: H ? $ / 2 : 18,
                  }
                : {};
          if ("string" === typeof q && z)
            K = i.createElement("img", {
              src: q,
              draggable: V,
              srcSet: D,
              onError: function () {
                var t = e.onError;
                !1 !== (t ? t() : void 0) && O(!1);
              },
              alt: M,
              crossOrigin: J,
            });
          else if (te) K = q;
          else if (H) K = H;
          else if (N || 1 !== j) {
            var ne = "scale(".concat(j, ") translateX(-50%)"),
              se = { msTransform: ne, WebkitTransform: ne, transform: ne },
              le =
                "number" === typeof $ ? { lineHeight: "".concat($, "px") } : {};
            K = i.createElement(
              u.Z,
              { onResize: T },
              i.createElement(
                "span",
                {
                  className: "".concat(Y, "-string"),
                  ref: function (e) {
                    I.current = e;
                  },
                  style: (0, r.Z)((0, r.Z)({}, le), se),
                },
                W
              )
            );
          } else
            K = i.createElement(
              "span",
              {
                className: "".concat(Y, "-string"),
                style: { opacity: 0 },
                ref: function (e) {
                  I.current = e;
                },
              },
              W
            );
          return (
            delete U.onError,
            delete U.gap,
            i.createElement(
              "span",
              (0, r.Z)({}, U, {
                style: (0, r.Z)((0, r.Z)((0, r.Z)({}, re), B), U.style),
                className: ae,
                ref: R,
              }),
              K
            )
          );
        },
        j = i.forwardRef(Z);
      (j.displayName = "Avatar"),
        (j.defaultProps = { shape: "circle", size: "default" });
      var b = j,
        w = a(5501),
        C = a(1113),
        N = a(9220),
        k = a(7924),
        E = a(9464),
        P = function (e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (a[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                (a[r[n]] = e[r[n]]);
          }
          return a;
        },
        z = i.forwardRef(function (e, t) {
          var a = e.prefixCls,
            n = e.title,
            s = e.content,
            l = P(e, ["prefixCls", "title", "content"]),
            c = i.useContext(d.E_).getPrefixCls,
            o = c("popover", a),
            u = c();
          return i.createElement(
            N.Z,
            (0, r.Z)({}, l, {
              prefixCls: o,
              ref: t,
              overlay: (function (e) {
                if (n || s)
                  return i.createElement(
                    i.Fragment,
                    null,
                    n &&
                      i.createElement(
                        "div",
                        { className: "".concat(e, "-title") },
                        (0, k.Z)(n)
                      ),
                    i.createElement(
                      "div",
                      { className: "".concat(e, "-inner-content") },
                      (0, k.Z)(s)
                    )
                  );
              })(o),
              transitionName: (0, E.mL)(u, "zoom-big", l.transitionName),
            })
          );
        });
      (z.displayName = "Popover"),
        (z.defaultProps = {
          placement: "top",
          trigger: "hover",
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1,
          overlayStyle: {},
        });
      var O = z,
        S = function (e) {
          var t = i.useContext(d.E_),
            a = t.getPrefixCls,
            r = t.direction,
            s = e.prefixCls,
            l = e.className,
            c = void 0 === l ? "" : l,
            u = e.maxCount,
            m = e.maxStyle,
            p = e.size,
            f = a("avatar-group", s),
            g = o()(f, (0, n.Z)({}, "".concat(f, "-rtl"), "rtl" === r), c),
            x = e.children,
            h = e.maxPopoverPlacement,
            y = void 0 === h ? "top" : h,
            Z = e.maxPopoverTrigger,
            j = void 0 === Z ? "hover" : Z,
            N = (0, w.Z)(x).map(function (e, t) {
              return (0, C.Tm)(e, { key: "avatar-key-".concat(t) });
            }),
            k = N.length;
          if (u && u < k) {
            var E = N.slice(0, u),
              P = N.slice(u, k);
            return (
              E.push(
                i.createElement(
                  O,
                  {
                    key: "avatar-popover-key",
                    content: P,
                    trigger: j,
                    placement: y,
                    overlayClassName: "".concat(f, "-popover"),
                  },
                  i.createElement(b, { style: m }, "+".concat(k - u))
                )
              ),
              i.createElement(
                v,
                { size: p },
                i.createElement("div", { className: g, style: e.style }, E)
              )
            );
          }
          return i.createElement(
            v,
            { size: p },
            i.createElement("div", { className: g, style: e.style }, N)
          );
        },
        I = b;
      I.Group = S;
      var R = I;
    },
    2832: function (e, t, a) {
      var r = a(2791),
        n = a(9581),
        s = a(8295);
      t.Z = function () {
        var e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          t = (0, r.useRef)({}),
          a = (0, n.Z)();
        return (
          (0, r.useEffect)(function () {
            var r = s.ZP.subscribe(function (r) {
              (t.current = r), e && a();
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
//# sourceMappingURL=838.a2cc0356.chunk.js.map
