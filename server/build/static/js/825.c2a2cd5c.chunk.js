"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [825],
  {
    825: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Q;
          },
        });
      var r = n(9439),
        i = n(2791),
        o = n(7462),
        a = n(4942),
        s = n(5671),
        l = n(3144),
        c = n(9340),
        u = n(8557),
        f = n(1002),
        d = n(1694),
        p = n.n(d),
        v = n(1818),
        m = n(8829),
        h = n(9077),
        g = n(3433),
        y = n(5314);
      function x() {
        return function (e, t, n) {
          var r = n.value,
            i = !1;
          return {
            configurable: !0,
            get: function () {
              if (i || this === e.prototype || this.hasOwnProperty(t)) return r;
              var n = (function (e) {
                var t,
                  n = function (n) {
                    return function () {
                      (t = null), e.apply(void 0, (0, g.Z)(n));
                    };
                  },
                  r = function () {
                    if (null == t) {
                      for (
                        var e = arguments.length, r = new Array(e), i = 0;
                        i < e;
                        i++
                      )
                        r[i] = arguments[i];
                      t = (0, y.Z)(n(r));
                    }
                  };
                return (
                  (r.cancel = function () {
                    return y.Z.cancel(t);
                  }),
                  r
                );
              })(r.bind(this));
              return (
                (i = !0),
                Object.defineProperty(this, t, {
                  value: n,
                  configurable: !0,
                  writable: !0,
                }),
                (i = !1),
                n
              );
            },
          };
        };
      }
      var b = n(1585);
      function Z(e) {
        return e !== window
          ? e.getBoundingClientRect()
          : { top: 0, bottom: window.innerHeight };
      }
      function w(e, t, n) {
        if (void 0 !== n && t.top > e.top - n) return n + t.top;
      }
      function E(e, t, n) {
        if (void 0 !== n && t.bottom < e.bottom + n)
          return n + (window.innerHeight - t.bottom);
      }
      var P = [
          "resize",
          "scroll",
          "touchstart",
          "touchmove",
          "touchend",
          "pageshow",
          "load",
        ],
        O = [];
      function N(e, t) {
        if (e) {
          var n = O.find(function (t) {
            return t.target === e;
          });
          n
            ? n.affixList.push(t)
            : ((n = { target: e, affixList: [t], eventHandlers: {} }),
              O.push(n),
              P.forEach(function (t) {
                n.eventHandlers[t] = (0, b.Z)(e, t, function () {
                  n.affixList.forEach(function (e) {
                    e.lazyUpdatePosition();
                  });
                });
              }));
        }
      }
      function C(e) {
        var t = O.find(function (t) {
          var n = t.affixList.some(function (t) {
            return t === e;
          });
          return (
            n &&
              (t.affixList = t.affixList.filter(function (t) {
                return t !== e;
              })),
            n
          );
        });
        t &&
          0 === t.affixList.length &&
          ((O = O.filter(function (e) {
            return e !== t;
          })),
          P.forEach(function (e) {
            var n = t.eventHandlers[e];
            n && n.remove && n.remove();
          }));
      }
      var S,
        k = function (e, t, n, r) {
          var i,
            o = arguments.length,
            a =
              o < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            "object" ===
              ("undefined" === typeof Reflect
                ? "undefined"
                : (0, f.Z)(Reflect)) &&
            "function" === typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, r);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
          return o > 3 && a && Object.defineProperty(t, n, a), a;
        };
      function j() {
        return "undefined" !== typeof window ? window : null;
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Prepare = 1)] = "Prepare");
      })(S || (S = {}));
      var T = (function (e) {
        (0, c.Z)(n, e);
        var t = (0, u.Z)(n);
        function n() {
          var e;
          return (
            (0, s.Z)(this, n),
            ((e = t.apply(this, arguments)).state = {
              status: S.None,
              lastAffix: !1,
              prevTarget: null,
            }),
            (e.getOffsetTop = function () {
              var t = e.props,
                n = t.offsetBottom,
                r = t.offsetTop;
              return void 0 === n && void 0 === r ? 0 : r;
            }),
            (e.getOffsetBottom = function () {
              return e.props.offsetBottom;
            }),
            (e.savePlaceholderNode = function (t) {
              e.placeholderNode = t;
            }),
            (e.saveFixedNode = function (t) {
              e.fixedNode = t;
            }),
            (e.measure = function () {
              var t = e.state,
                n = t.status,
                r = t.lastAffix,
                i = e.props.onChange,
                o = e.getTargetFunc();
              if (n === S.Prepare && e.fixedNode && e.placeholderNode && o) {
                var a = e.getOffsetTop(),
                  s = e.getOffsetBottom(),
                  l = o();
                if (l) {
                  var c = { status: S.None },
                    u = Z(l),
                    f = Z(e.placeholderNode),
                    d = w(f, u, a),
                    p = E(f, u, s);
                  void 0 !== d
                    ? ((c.affixStyle = {
                        position: "fixed",
                        top: d,
                        width: f.width,
                        height: f.height,
                      }),
                      (c.placeholderStyle = {
                        width: f.width,
                        height: f.height,
                      }))
                    : void 0 !== p &&
                      ((c.affixStyle = {
                        position: "fixed",
                        bottom: p,
                        width: f.width,
                        height: f.height,
                      }),
                      (c.placeholderStyle = {
                        width: f.width,
                        height: f.height,
                      })),
                    (c.lastAffix = !!c.affixStyle),
                    i && r !== c.lastAffix && i(c.lastAffix),
                    e.setState(c);
                }
              }
            }),
            (e.prepareMeasure = function () {
              e.setState({
                status: S.Prepare,
                affixStyle: void 0,
                placeholderStyle: void 0,
              });
            }),
            e
          );
        }
        return (
          (0, l.Z)(n, [
            {
              key: "getTargetFunc",
              value: function () {
                var e = this.context.getTargetContainer,
                  t = this.props.target;
                return void 0 !== t ? t : e || j;
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                var e = this,
                  t = this.getTargetFunc();
                t &&
                  (this.timeout = setTimeout(function () {
                    N(t(), e), e.updatePosition();
                  }));
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this.state.prevTarget,
                  n = this.getTargetFunc(),
                  r = (null === n || void 0 === n ? void 0 : n()) || null;
                t !== r &&
                  (C(this),
                  r && (N(r, this), this.updatePosition()),
                  this.setState({ prevTarget: r })),
                  (e.offsetTop === this.props.offsetTop &&
                    e.offsetBottom === this.props.offsetBottom) ||
                    this.updatePosition(),
                  this.measure();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.timeout),
                  C(this),
                  this.updatePosition.cancel(),
                  this.lazyUpdatePosition.cancel();
              },
            },
            {
              key: "updatePosition",
              value: function () {
                this.prepareMeasure();
              },
            },
            {
              key: "lazyUpdatePosition",
              value: function () {
                var e = this.getTargetFunc(),
                  t = this.state.affixStyle;
                if (e && t) {
                  var n = this.getOffsetTop(),
                    r = this.getOffsetBottom(),
                    i = e();
                  if (i && this.placeholderNode) {
                    var o = Z(i),
                      a = Z(this.placeholderNode),
                      s = w(a, o, n),
                      l = E(a, o, r);
                    if (
                      (void 0 !== s && t.top === s) ||
                      (void 0 !== l && t.bottom === l)
                    )
                      return;
                  }
                }
                this.prepareMeasure();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state,
                  n = t.affixStyle,
                  r = t.placeholderStyle,
                  s = this.props,
                  l = s.affixPrefixCls,
                  c = s.children,
                  u = p()((0, a.Z)({}, l, !!n)),
                  f = (0, v.Z)(this.props, [
                    "prefixCls",
                    "offsetTop",
                    "offsetBottom",
                    "target",
                    "onChange",
                    "affixPrefixCls",
                  ]);
                return i.createElement(
                  m.Z,
                  {
                    onResize: function () {
                      e.updatePosition();
                    },
                  },
                  i.createElement(
                    "div",
                    (0, o.Z)({}, f, { ref: this.savePlaceholderNode }),
                    n &&
                      i.createElement("div", {
                        style: r,
                        "aria-hidden": "true",
                      }),
                    i.createElement(
                      "div",
                      { className: u, ref: this.saveFixedNode, style: n },
                      i.createElement(
                        m.Z,
                        {
                          onResize: function () {
                            e.updatePosition();
                          },
                        },
                        c
                      )
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(i.Component);
      (T.contextType = h.E_),
        k([x()], T.prototype, "updatePosition", null),
        k([x()], T.prototype, "lazyUpdatePosition", null);
      var z = i.forwardRef(function (e, t) {
          var n = e.prefixCls,
            r = (0, i.useContext(h.E_).getPrefixCls)("affix", n),
            a = (0, o.Z)((0, o.Z)({}, e), { affixPrefixCls: r });
          return i.createElement(T, (0, o.Z)({}, a, { ref: t }));
        }),
        R = n(6446),
        L = n(6871),
        A = n(8704),
        B = n(2896),
        _ = n(6570),
        D = n(2419),
        F = n(2065),
        H = n(577),
        M = function () {
          var e = (0, D.ZP)("/auth/checkSession", F.Z).error,
            t = (0, A.b)().authDispatch;
          return (
            (0, i.useEffect)(
              function () {
                ((e &&
                  null !== e &&
                  void 0 !== e &&
                  e.message.split(" ").includes("401")) ||
                  (e &&
                    null !== e &&
                    void 0 !== e &&
                    e.message.split(" ").includes("403"))) &&
                  (t({ type: "LOGOUT" }),
                  H.Am.error("Your session is expired! please login again!"),
                  window.location.reload());
              },
              [e, t]
            ),
            null
          );
        },
        U = n(4106),
        W = n(184),
        I = (0, i.lazy)(function () {
          return Promise.all([n.e(784), n.e(697), n.e(964)]).then(
            n.bind(n, 964)
          );
        }),
        G = (0, i.lazy)(function () {
          return Promise.all([n.e(355), n.e(941)]).then(n.bind(n, 1941));
        });
      function Q(e) {
        var t,
          n,
          o,
          a,
          s,
          l,
          c,
          u = e.children,
          f = e.breadcrumbs,
          d = (0, A.b)(),
          p = d.auth,
          v = d.sideBar,
          m = d.sideBarToggleDispatch,
          h = (0, D.ZP)("/app-config", F.Z).data,
          g = (0, i.useState)({}),
          y = (0, r.Z)(g, 2),
          x = y[0],
          b = y[1],
          Z = (0, L.TH)();
        (0, i.useEffect)(
          function () {
            function e() {
              window.innerWidth <= 1024 &&
                v.isOpen &&
                m({ type: U.CLOSE_SIDE_BAR, payload: !1 });
            }
            return (
              window.addEventListener("resize", e),
              window.innerWidth <= 1024 &&
                v.isOpen &&
                m({ type: U.CLOSE_SIDE_BAR, payload: !1 }),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          },
          [m]
        ),
          (0, i.useEffect)(
            function () {
              h && h.data && b(h.data[0]);
            },
            [h]
          );
        var w = {
          name:
            null === p || void 0 === p || null === (t = p.user) || void 0 === t
              ? void 0
              : t.name,
          link: "",
          id:
            null === p || void 0 === p || null === (n = p.user) || void 0 === n
              ? void 0
              : n._id,
          image:
            null === p || void 0 === p || null === (o = p.user) || void 0 === o
              ? void 0
              : o.avatar,
          email:
            null === p || void 0 === p || null === (a = p.user) || void 0 === a
              ? void 0
              : a.email,
          hasSubMenu: !0,
          subMenu: [
            { name: "Logout", link: "", id: "/logout" },
            {
              name: "Role Management",
              link: "/role-management",
              id: "/role-management",
              superAdmin: !0,
            },
            {
              name: "Settings",
              link: "/settings",
              id: "/settings",
              superAdmin: !0,
            },
          ],
        };
        return _.sp.includes(Z.pathname) && !p.user
          ? u
          : p.user
          ? (0, W.jsxs)("div", {
              className: "flex w-full items-start bg-gray-100 dark:bg-dark",
              children: [
                (0, W.jsx)(z, {
                  children: (0, W.jsxs)("div", {
                    children: [
                      (0, W.jsxs)("div", {
                        className: v.isOpen
                          ? "items-center flex justify-start py-2 px-5 bg-white border-b border-r dark:border-gray-800 dark:bg-deepDark"
                          : "hidden md:flex items-center justify-center py-2 bg-white border-b border-r dark:border-gray-800 dark:bg-deepDark",
                        children: [
                          (0, W.jsx)(R.C, {
                            alt: null === x || void 0 === x ? void 0 : x.name,
                            src:
                              null !==
                                (s =
                                  null === x || void 0 === x
                                    ? void 0
                                    : x.logo) && void 0 !== s
                                ? s
                                : "/logo.jpg",
                            className: v.isOpen
                              ? "normal-transition rounded-full dark:text-gray-900"
                              : "normal-transition dark:text-gray-900",
                            size: 45,
                            children:
                              null === x ||
                              void 0 === x ||
                              null === (l = x.name) ||
                              void 0 === l
                                ? void 0
                                : l.split("")[0].toUpperCase(),
                          }),
                          v.isOpen &&
                            (0, W.jsx)("p", {
                              className:
                                "dark:text-white text-lg ml-3 truncate",
                              children:
                                null !==
                                  (c =
                                    null === x || void 0 === x
                                      ? void 0
                                      : x.name) && void 0 !== c
                                  ? c
                                  : _.iC,
                            }),
                        ],
                      }),
                      (0, W.jsx)(i.Suspense, {
                        fallback: (0, W.jsx)(B.Z, {}),
                        children: (0, W.jsx)(I, {
                          collapsed: v.isOpen,
                          menulist: _.Tl,
                          admin: w,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, W.jsxs)("div", {
                  className: "normal-transition min-h-screen w-full",
                  children: [
                    (0, W.jsx)(G, { breadcrumbs: f }),
                    (0, W.jsxs)("main", {
                      className: "normal-transition ml-auto overflow-auto px-5",
                      children: [(0, W.jsx)(M, {}), u],
                    }),
                  ],
                }),
              ],
            })
          : (0, W.jsx)(L.Fg, { to: "login" });
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
          return o;
        },
      });
      var r = n(9439),
        i = n(2791);
      function o() {
        var e = i.useReducer(function (e) {
          return e + 1;
        }, 0);
        return (0, r.Z)(e, 2)[1];
      }
    },
    6446: function (e, t, n) {
      n.d(t, {
        C: function () {
          return R;
        },
      });
      var r = n(7462),
        i = n(4942),
        o = n(1002),
        a = n(9439),
        s = n(2791),
        l = n(1694),
        c = n.n(l),
        u = n(8829),
        f = n(8834),
        d = n(9077),
        p = n(4824),
        v = n(8295),
        m = n(2832),
        h = s.createContext("default"),
        g = function (e) {
          var t = e.children,
            n = e.size;
          return s.createElement(h.Consumer, null, function (e) {
            return s.createElement(h.Provider, { value: n || e }, t);
          });
        },
        y = h,
        x = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        },
        b = function (e, t) {
          var n,
            l,
            h = s.useContext(y),
            g = s.useState(1),
            b = (0, a.Z)(g, 2),
            Z = b[0],
            w = b[1],
            E = s.useState(!1),
            P = (0, a.Z)(E, 2),
            O = P[0],
            N = P[1],
            C = s.useState(!0),
            S = (0, a.Z)(C, 2),
            k = S[0],
            j = S[1],
            T = s.useRef(),
            z = s.useRef(),
            R = (0, f.sQ)(t, T),
            L = s.useContext(d.E_).getPrefixCls,
            A = function () {
              if (z.current && T.current) {
                var t = z.current.offsetWidth,
                  n = T.current.offsetWidth;
                if (0 !== t && 0 !== n) {
                  var r = e.gap,
                    i = void 0 === r ? 4 : r;
                  2 * i < n && w(n - 2 * i < t ? (n - 2 * i) / t : 1);
                }
              }
            };
          s.useEffect(function () {
            N(!0);
          }, []),
            s.useEffect(
              function () {
                j(!0), w(1);
              },
              [e.src]
            ),
            s.useEffect(
              function () {
                A();
              },
              [e.gap]
            );
          var B = e.prefixCls,
            _ = e.shape,
            D = e.size,
            F = e.src,
            H = e.srcSet,
            M = e.icon,
            U = e.className,
            W = e.alt,
            I = e.draggable,
            G = e.children,
            Q = e.crossOrigin,
            V = x(e, [
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
            X = "default" === D ? h : D,
            Y = Object.keys(("object" === (0, o.Z)(X) && X) || {}).some(
              function (e) {
                return ["xs", "sm", "md", "lg", "xl", "xxl"].includes(e);
              }
            ),
            q = (0, m.Z)(Y),
            J = s.useMemo(
              function () {
                if ("object" !== (0, o.Z)(X)) return {};
                var e = v.c4.find(function (e) {
                    return q[e];
                  }),
                  t = X[e];
                return t
                  ? {
                      width: t,
                      height: t,
                      lineHeight: "".concat(t, "px"),
                      fontSize: M ? t / 2 : 18,
                    }
                  : {};
              },
              [q, X]
            );
          (0, p.Z)(
            !("string" === typeof M && M.length > 2),
            "Avatar",
            "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(
              M,
              "` at https://ant.design/components/icon"
            )
          );
          var K,
            $ = L("avatar", B),
            ee = c()(
              ((n = {}),
              (0, i.Z)(n, "".concat($, "-lg"), "large" === X),
              (0, i.Z)(n, "".concat($, "-sm"), "small" === X),
              n)
            ),
            te = s.isValidElement(F),
            ne = c()(
              $,
              ee,
              ((l = {}),
              (0, i.Z)(l, "".concat($, "-").concat(_), !!_),
              (0, i.Z)(l, "".concat($, "-image"), te || (F && k)),
              (0, i.Z)(l, "".concat($, "-icon"), !!M),
              l),
              U
            ),
            re =
              "number" === typeof X
                ? {
                    width: X,
                    height: X,
                    lineHeight: "".concat(X, "px"),
                    fontSize: M ? X / 2 : 18,
                  }
                : {};
          if ("string" === typeof F && k)
            K = s.createElement("img", {
              src: F,
              draggable: I,
              srcSet: H,
              onError: function () {
                var t = e.onError;
                !1 !== (t ? t() : void 0) && j(!1);
              },
              alt: W,
              crossOrigin: Q,
            });
          else if (te) K = F;
          else if (M) K = M;
          else if (O || 1 !== Z) {
            var ie = "scale(".concat(Z, ") translateX(-50%)"),
              oe = { msTransform: ie, WebkitTransform: ie, transform: ie },
              ae =
                "number" === typeof X ? { lineHeight: "".concat(X, "px") } : {};
            K = s.createElement(
              u.Z,
              { onResize: A },
              s.createElement(
                "span",
                {
                  className: "".concat($, "-string"),
                  ref: function (e) {
                    z.current = e;
                  },
                  style: (0, r.Z)((0, r.Z)({}, ae), oe),
                },
                G
              )
            );
          } else
            K = s.createElement(
              "span",
              {
                className: "".concat($, "-string"),
                style: { opacity: 0 },
                ref: function (e) {
                  z.current = e;
                },
              },
              G
            );
          return (
            delete V.onError,
            delete V.gap,
            s.createElement(
              "span",
              (0, r.Z)({}, V, {
                style: (0, r.Z)((0, r.Z)((0, r.Z)({}, re), J), V.style),
                className: ne,
                ref: R,
              }),
              K
            )
          );
        },
        Z = s.forwardRef(b);
      (Z.displayName = "Avatar"),
        (Z.defaultProps = { shape: "circle", size: "default" });
      var w = Z,
        E = n(5501),
        P = n(1113),
        O = n(9220),
        N = n(7924),
        C = n(9464),
        S = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        },
        k = s.forwardRef(function (e, t) {
          var n = e.prefixCls,
            i = e.title,
            o = e.content,
            a = S(e, ["prefixCls", "title", "content"]),
            l = s.useContext(d.E_).getPrefixCls,
            c = l("popover", n),
            u = l();
          return s.createElement(
            O.Z,
            (0, r.Z)({}, a, {
              prefixCls: c,
              ref: t,
              overlay: (function (e) {
                if (i || o)
                  return s.createElement(
                    s.Fragment,
                    null,
                    i &&
                      s.createElement(
                        "div",
                        { className: "".concat(e, "-title") },
                        (0, N.Z)(i)
                      ),
                    s.createElement(
                      "div",
                      { className: "".concat(e, "-inner-content") },
                      (0, N.Z)(o)
                    )
                  );
              })(c),
              transitionName: (0, C.mL)(u, "zoom-big", a.transitionName),
            })
          );
        });
      (k.displayName = "Popover"),
        (k.defaultProps = {
          placement: "top",
          trigger: "hover",
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1,
          overlayStyle: {},
        });
      var j = k,
        T = function (e) {
          var t = s.useContext(d.E_),
            n = t.getPrefixCls,
            r = t.direction,
            o = e.prefixCls,
            a = e.className,
            l = void 0 === a ? "" : a,
            u = e.maxCount,
            f = e.maxStyle,
            p = e.size,
            v = n("avatar-group", o),
            m = c()(v, (0, i.Z)({}, "".concat(v, "-rtl"), "rtl" === r), l),
            h = e.children,
            y = e.maxPopoverPlacement,
            x = void 0 === y ? "top" : y,
            b = e.maxPopoverTrigger,
            Z = void 0 === b ? "hover" : b,
            O = (0, E.Z)(h).map(function (e, t) {
              return (0, P.Tm)(e, { key: "avatar-key-".concat(t) });
            }),
            N = O.length;
          if (u && u < N) {
            var C = O.slice(0, u),
              S = O.slice(u, N);
            return (
              C.push(
                s.createElement(
                  j,
                  {
                    key: "avatar-popover-key",
                    content: S,
                    trigger: Z,
                    placement: x,
                    overlayClassName: "".concat(v, "-popover"),
                  },
                  s.createElement(w, { style: f }, "+".concat(N - u))
                )
              ),
              s.createElement(
                g,
                { size: p },
                s.createElement("div", { className: m, style: e.style }, C)
              )
            );
          }
          return s.createElement(
            g,
            { size: p },
            s.createElement("div", { className: m, style: e.style }, O)
          );
        },
        z = w;
      z.Group = T;
      var R = z;
    },
    2832: function (e, t, n) {
      var r = n(2791),
        i = n(9581),
        o = n(8295);
      t.Z = function () {
        var e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          t = (0, r.useRef)({}),
          n = (0, i.Z)();
        return (
          (0, r.useEffect)(function () {
            var r = o.ZP.subscribe(function (r) {
              (t.current = r), e && n();
            });
            return function () {
              return o.ZP.unsubscribe(r);
            };
          }, []),
          t.current
        );
      };
    },
  },
]);
//# sourceMappingURL=825.c2a2cd5c.chunk.js.map
