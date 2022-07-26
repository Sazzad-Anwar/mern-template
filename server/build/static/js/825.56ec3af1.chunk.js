"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [825],
  {
    825: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var i = n(2791),
        o = n(7462),
        r = n(4942),
        a = n(5671),
        s = n(3144),
        l = n(9340),
        u = n(8557),
        f = n(1002),
        d = n(1694),
        c = n.n(d),
        p = n(1818),
        h = n(8829),
        v = n(9077),
        m = n(3433),
        g = n(5314);
      function x() {
        return function (e, t, n) {
          var i = n.value,
            o = !1;
          return {
            configurable: !0,
            get: function () {
              if (o || this === e.prototype || this.hasOwnProperty(t)) return i;
              var n = (function (e) {
                var t,
                  n = function (n) {
                    return function () {
                      (t = null), e.apply(void 0, (0, m.Z)(n));
                    };
                  },
                  i = function () {
                    if (null == t) {
                      for (
                        var e = arguments.length, i = new Array(e), o = 0;
                        o < e;
                        o++
                      )
                        i[o] = arguments[o];
                      t = (0, g.Z)(n(i));
                    }
                  };
                return (
                  (i.cancel = function () {
                    return g.Z.cancel(t);
                  }),
                  i
                );
              })(i.bind(this));
              return (
                (o = !0),
                Object.defineProperty(this, t, {
                  value: n,
                  configurable: !0,
                  writable: !0,
                }),
                (o = !1),
                n
              );
            },
          };
        };
      }
      var y = n(1585);
      function w(e) {
        return e !== window
          ? e.getBoundingClientRect()
          : { top: 0, bottom: window.innerHeight };
      }
      function b(e, t, n) {
        if (void 0 !== n && t.top > e.top - n) return n + t.top;
      }
      function P(e, t, n) {
        if (void 0 !== n && t.bottom < e.bottom + n)
          return n + (window.innerHeight - t.bottom);
      }
      var k = [
          "resize",
          "scroll",
          "touchstart",
          "touchmove",
          "touchend",
          "pageshow",
          "load",
        ],
        T = [];
      function N(e, t) {
        if (e) {
          var n = T.find(function (t) {
            return t.target === e;
          });
          n
            ? n.affixList.push(t)
            : ((n = { target: e, affixList: [t], eventHandlers: {} }),
              T.push(n),
              k.forEach(function (t) {
                n.eventHandlers[t] = (0, y.Z)(e, t, function () {
                  n.affixList.forEach(function (e) {
                    e.lazyUpdatePosition();
                  });
                });
              }));
        }
      }
      function Z(e) {
        var t = T.find(function (t) {
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
          ((T = T.filter(function (e) {
            return e !== t;
          })),
          k.forEach(function (e) {
            var n = t.eventHandlers[e];
            n && n.remove && n.remove();
          }));
      }
      var O,
        S = function (e, t, n, i) {
          var o,
            r = arguments.length,
            a =
              r < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, n))
                : i;
          if (
            "object" ===
              ("undefined" === typeof Reflect
                ? "undefined"
                : (0, f.Z)(Reflect)) &&
            "function" === typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, i);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (o = e[s]) &&
                (a = (r < 3 ? o(a) : r > 3 ? o(t, n, a) : o(t, n)) || a);
          return r > 3 && a && Object.defineProperty(t, n, a), a;
        };
      function j() {
        return "undefined" !== typeof window ? window : null;
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Prepare = 1)] = "Prepare");
      })(O || (O = {}));
      var E = (function (e) {
        (0, l.Z)(n, e);
        var t = (0, u.Z)(n);
        function n() {
          var e;
          return (
            (0, a.Z)(this, n),
            ((e = t.apply(this, arguments)).state = {
              status: O.None,
              lastAffix: !1,
              prevTarget: null,
            }),
            (e.getOffsetTop = function () {
              var t = e.props,
                n = t.offsetBottom,
                i = t.offsetTop;
              return void 0 === n && void 0 === i ? 0 : i;
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
                i = t.lastAffix,
                o = e.props.onChange,
                r = e.getTargetFunc();
              if (n === O.Prepare && e.fixedNode && e.placeholderNode && r) {
                var a = e.getOffsetTop(),
                  s = e.getOffsetBottom(),
                  l = r();
                if (l) {
                  var u = { status: O.None },
                    f = w(l),
                    d = w(e.placeholderNode),
                    c = b(d, f, a),
                    p = P(d, f, s);
                  void 0 !== c
                    ? ((u.affixStyle = {
                        position: "fixed",
                        top: c,
                        width: d.width,
                        height: d.height,
                      }),
                      (u.placeholderStyle = {
                        width: d.width,
                        height: d.height,
                      }))
                    : void 0 !== p &&
                      ((u.affixStyle = {
                        position: "fixed",
                        bottom: p,
                        width: d.width,
                        height: d.height,
                      }),
                      (u.placeholderStyle = {
                        width: d.width,
                        height: d.height,
                      })),
                    (u.lastAffix = !!u.affixStyle),
                    o && i !== u.lastAffix && o(u.lastAffix),
                    e.setState(u);
                }
              }
            }),
            (e.prepareMeasure = function () {
              e.setState({
                status: O.Prepare,
                affixStyle: void 0,
                placeholderStyle: void 0,
              });
            }),
            e
          );
        }
        return (
          (0, s.Z)(n, [
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
                  i = (null === n || void 0 === n ? void 0 : n()) || null;
                t !== i &&
                  (Z(this),
                  i && (N(i, this), this.updatePosition()),
                  this.setState({ prevTarget: i })),
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
                  Z(this),
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
                    i = this.getOffsetBottom(),
                    o = e();
                  if (o && this.placeholderNode) {
                    var r = w(o),
                      a = w(this.placeholderNode),
                      s = b(a, r, n),
                      l = P(a, r, i);
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
                  a = t.placeholderStyle,
                  s = this.props,
                  l = s.affixPrefixCls,
                  u = s.children,
                  f = c()((0, r.Z)({}, l, !!n)),
                  d = (0, p.Z)(this.props, [
                    "prefixCls",
                    "offsetTop",
                    "offsetBottom",
                    "target",
                    "onChange",
                    "affixPrefixCls",
                  ]);
                return i.createElement(
                  h.Z,
                  {
                    onResize: function () {
                      e.updatePosition();
                    },
                  },
                  i.createElement(
                    "div",
                    (0, o.Z)({}, d, { ref: this.savePlaceholderNode }),
                    n &&
                      i.createElement("div", {
                        style: a,
                        "aria-hidden": "true",
                      }),
                    i.createElement(
                      "div",
                      { className: f, ref: this.saveFixedNode, style: n },
                      i.createElement(
                        h.Z,
                        {
                          onResize: function () {
                            e.updatePosition();
                          },
                        },
                        u
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
      (E.contextType = v.E_),
        S([x()], E.prototype, "updatePosition", null),
        S([x()], E.prototype, "lazyUpdatePosition", null);
      var C = i.forwardRef(function (e, t) {
          var n = e.prefixCls,
            r = (0, i.useContext(v.E_).getPrefixCls)("affix", n),
            a = (0, o.Z)((0, o.Z)({}, e), { affixPrefixCls: r });
          return i.createElement(E, (0, o.Z)({}, a, { ref: t }));
        }),
        B = n(6871),
        L = n(8704),
        z = n(2896),
        R = n(6570),
        A = n(2419),
        D = n(2065),
        _ = n(577),
        F = function () {
          var e = (0, A.ZP)("/auth/checkSession", D.Z).error,
            t = (0, L.b)().authDispatch;
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
                  _.Am.error("Your session is expired! please login again!"),
                  window.location.reload());
              },
              [e, t]
            ),
            null
          );
        },
        M = n(4106),
        U = n(184),
        H = (0, i.lazy)(function () {
          return Promise.all([n.e(784), n.e(697), n.e(964)]).then(
            n.bind(n, 964)
          );
        }),
        W = (0, i.lazy)(function () {
          return Promise.all([n.e(324), n.e(941)]).then(n.bind(n, 1941));
        });
      function I(e) {
        var t,
          n,
          o,
          r,
          a = e.children,
          s = e.breadcrumbs,
          l = (0, L.b)(),
          u = l.auth,
          f = l.sideBar,
          d = l.sideBarToggleDispatch,
          c = (0, B.TH)();
        (0, i.useEffect)(
          function () {
            function e() {
              window.innerWidth <= 1024 &&
                f.isOpen &&
                d({ type: M.CLOSE_SIDE_BAR, payload: !1 });
            }
            return (
              window.addEventListener("resize", e),
              window.innerWidth <= 1024 &&
                f.isOpen &&
                d({ type: M.CLOSE_SIDE_BAR, payload: !1 }),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          },
          [d]
        );
        var p = {
          name:
            null === u || void 0 === u || null === (t = u.user) || void 0 === t
              ? void 0
              : t.name,
          link: "",
          id:
            null === u || void 0 === u || null === (n = u.user) || void 0 === n
              ? void 0
              : n._id,
          image:
            null === u || void 0 === u || null === (o = u.user) || void 0 === o
              ? void 0
              : o.avatar,
          email:
            null === u || void 0 === u || null === (r = u.user) || void 0 === r
              ? void 0
              : r.email,
          hasSubMenu: !0,
          subMenu: [
            { name: "Logout", link: "", id: "/logout" },
            {
              name: "Role Management",
              link: "/role-management",
              id: "/role-management",
              superAdmin: !0,
            },
            { name: "Settings", link: "/settings", id: "/settings" },
          ],
        };
        return R.sp.includes(c.pathname) && !u.user
          ? a
          : u.user
          ? (0, U.jsxs)("div", {
              className: "flex w-full items-start bg-gray-100 dark:bg-dark",
              children: [
                (0, U.jsx)(C, {
                  children: (0, U.jsxs)("div", {
                    children: [
                      (0, U.jsxs)("div", {
                        className: f.isOpen
                          ? "items-center flex justify-center py-4 bg-white border-b border-r dark:border-gray-800 dark:bg-deepDark"
                          : "hidden md:flex items-center justify-center py-4 bg-white border-b border-r dark:border-gray-800 dark:bg-deepDark",
                        children: [
                          (0, U.jsx)("img", {
                            src: "/logo192.png",
                            className: f.isOpen
                              ? "normal-transition rounded-full h-8 w-8"
                              : "normal-transition h-auto w-8",
                            alt: "logo",
                          }),
                          f.isOpen &&
                            (0, U.jsx)("p", {
                              className:
                                "dark:text-white text-lg ml-3 truncate",
                              children: R.iC,
                            }),
                        ],
                      }),
                      (0, U.jsx)(i.Suspense, {
                        fallback: (0, U.jsx)(z.Z, {}),
                        children: (0, U.jsx)(H, {
                          collapsed: f.isOpen,
                          menulist: R.Tl,
                          admin: p,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, U.jsxs)("div", {
                  className: "normal-transition min-h-screen w-full",
                  children: [
                    (0, U.jsx)(W, { breadcrumbs: s }),
                    (0, U.jsxs)("main", {
                      className: "normal-transition ml-auto overflow-auto px-5",
                      children: [(0, U.jsx)(F, {}), a],
                    }),
                  ],
                }),
              ],
            })
          : (0, U.jsx)(B.Fg, { to: "login" });
      }
    },
    2065: function (e, t, n) {
      var i = n(1033);
      t.Z = function (e) {
        return i.Z.get(e).then(function (e) {
          return e.data;
        });
      };
    },
  },
]);
//# sourceMappingURL=825.56ec3af1.chunk.js.map
