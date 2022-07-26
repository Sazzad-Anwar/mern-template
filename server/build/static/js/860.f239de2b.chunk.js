"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [860],
  {
    4860: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return Y;
          },
        });
      var a = t(3433),
        r = t(5861),
        o = t(9439),
        c = t(7757),
        l = t.n(c),
        i = t(2791),
        s = t(8957),
        u = t(8704),
        d = t(8717),
        p = t(2014),
        f = t(783),
        v = t(184);
      function m(e) {
        var n = e.addRoute,
          t = e.api,
          a = e._id,
          r = e.accessRoles;
        return (0, v.jsx)("div", {
          className:
            "normal-transition pl-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-between",
          children: (0, v.jsxs)(
            p.Z,
            {
              className: "dark:text-white mx-0 text-base bg-transparent",
              checked: r.includes(t),
              onChange: function (e) {
                return n(t, e);
              },
              children: [
                "GET" === t.split("/")[0]
                  ? (0, v.jsx)("span", {
                      className: "text-green-500 font-medium",
                      children: "GET",
                    })
                  : "POST" === t.split("/")[0]
                  ? (0, v.jsx)("span", {
                      className: "text-purple-500 font-medium",
                      children: "Create",
                    })
                  : "PUT" === t.split("/")[0]
                  ? (0, v.jsx)("span", {
                      className: "text-blue-500 font-medium",
                      children: "Update",
                    })
                  : (0, v.jsx)("span", {
                      className: "text-red-500 font-medium",
                      children: "Delete",
                    }),
                " ",
                (0, f.Z)(t.split("/")[3]),
              ],
            },
            a
          ),
        });
      }
      var h = t(2065),
        y = t(2419),
        x = t(1033),
        g = t(6871),
        b = t(577),
        Z = t(9126),
        C = t(7462),
        k = t(4942),
        N = t(5671),
        E = t(3144),
        P = t(9340),
        w = t(8557),
        O = t(1002),
        I = t(1694),
        K = t.n(I),
        j = t(9613),
        A = t.n(j),
        R = t(5501),
        S = t(5207),
        _ = i.forwardRef(function (e, n) {
          var t,
            a = e.prefixCls,
            r = e.forceRender,
            c = e.className,
            l = e.style,
            s = e.children,
            u = e.isActive,
            d = e.role,
            p = i.useState(u || r),
            f = (0, o.Z)(p, 2),
            v = f[0],
            m = f[1];
          return (
            i.useEffect(
              function () {
                (r || u) && m(!0);
              },
              [r, u]
            ),
            v
              ? i.createElement(
                  "div",
                  {
                    ref: n,
                    className: K()(
                      "".concat(a, "-content"),
                      ((t = {}),
                      (0, k.Z)(t, "".concat(a, "-content-active"), u),
                      (0, k.Z)(t, "".concat(a, "-content-inactive"), !u),
                      t),
                      c
                    ),
                    style: l,
                    role: d,
                  },
                  i.createElement(
                    "div",
                    { className: "".concat(a, "-content-box") },
                    s
                  )
                )
              : null
          );
        });
      _.displayName = "PanelContent";
      var M = _,
        F = (function (e) {
          (0, P.Z)(t, e);
          var n = (0, w.Z)(t);
          function t() {
            var e;
            (0, N.Z)(this, t);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o];
            return (
              ((e = n.call.apply(n, [this].concat(r))).handleItemClick =
                function () {
                  var n = e.props,
                    t = n.onItemClick,
                    a = n.panelKey;
                  "function" === typeof t && t(a);
                }),
              (e.handleKeyPress = function (n) {
                ("Enter" !== n.key && 13 !== n.keyCode && 13 !== n.which) ||
                  e.handleItemClick();
              }),
              e
            );
          }
          return (
            (0, E.Z)(t, [
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  return !A()(this.props, e);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    n,
                    t = this,
                    a = this.props,
                    r = a.className,
                    o = a.id,
                    c = a.style,
                    l = a.prefixCls,
                    s = a.header,
                    u = a.headerClass,
                    d = a.children,
                    p = a.isActive,
                    f = a.showArrow,
                    v = a.destroyInactivePanel,
                    m = a.accordion,
                    h = a.forceRender,
                    y = a.openMotion,
                    x = a.expandIcon,
                    g = a.extra,
                    b = a.collapsible,
                    Z = "disabled" === b,
                    N = K()(
                      "".concat(l, "-header"),
                      ((e = {}),
                      (0, k.Z)(e, u, u),
                      (0, k.Z)(
                        e,
                        "".concat(l, "-header-collapsible-only"),
                        "header" === b
                      ),
                      e)
                    ),
                    E = K()(
                      ((n = {}),
                      (0, k.Z)(n, "".concat(l, "-item"), !0),
                      (0, k.Z)(n, "".concat(l, "-item-active"), p),
                      (0, k.Z)(n, "".concat(l, "-item-disabled"), Z),
                      n),
                      r
                    ),
                    P = i.createElement("i", { className: "arrow" });
                  f && "function" === typeof x && (P = x(this.props));
                  var w = null !== g && void 0 !== g && "boolean" !== typeof g;
                  return i.createElement(
                    "div",
                    { className: E, style: c, id: o },
                    i.createElement(
                      "div",
                      {
                        className: N,
                        onClick: function () {
                          return "header" !== b && t.handleItemClick();
                        },
                        role: m ? "tab" : "button",
                        tabIndex: Z ? -1 : 0,
                        "aria-expanded": p,
                        onKeyPress: this.handleKeyPress,
                      },
                      f && P,
                      "header" === b
                        ? i.createElement(
                            "span",
                            {
                              onClick: this.handleItemClick,
                              className: "".concat(l, "-header-text"),
                            },
                            s
                          )
                        : s,
                      w &&
                        i.createElement(
                          "div",
                          { className: "".concat(l, "-extra") },
                          g
                        )
                    ),
                    i.createElement(
                      S.Z,
                      (0, C.Z)(
                        {
                          visible: p,
                          leavedClassName: "".concat(l, "-content-hidden"),
                        },
                        y,
                        { forceRender: h, removeOnLeave: v }
                      ),
                      function (e, n) {
                        var t = e.className,
                          a = e.style;
                        return i.createElement(
                          M,
                          {
                            ref: n,
                            prefixCls: l,
                            className: t,
                            style: a,
                            isActive: p,
                            forceRender: h,
                            role: m ? "tabpanel" : null,
                          },
                          d
                        );
                      }
                    )
                  );
                },
              },
            ]),
            t
          );
        })(i.Component);
      F.defaultProps = {
        showArrow: !0,
        isActive: !1,
        onItemClick: function () {},
        headerClass: "",
        forceRender: !1,
      };
      var T = F;
      function U(e) {
        var n = e;
        if (!Array.isArray(n)) {
          var t = (0, O.Z)(n);
          n = "number" === t || "string" === t ? [n] : [];
        }
        return n.map(function (e) {
          return String(e);
        });
      }
      var D = (function (e) {
        (0, P.Z)(t, e);
        var n = (0, w.Z)(t);
        function t(e) {
          var r;
          (0, N.Z)(this, t),
            ((r = n.call(this, e)).onClickItem = function (e) {
              var n = r.state.activeKey;
              if (r.props.accordion) n = n[0] === e ? [] : [e];
              else {
                var t = (n = (0, a.Z)(n)).indexOf(e);
                t > -1 ? n.splice(t, 1) : n.push(e);
              }
              r.setActiveKey(n);
            }),
            (r.getNewChild = function (e, n) {
              if (!e) return null;
              var t = r.state.activeKey,
                a = r.props,
                o = a.prefixCls,
                c = a.openMotion,
                l = a.accordion,
                s = a.destroyInactivePanel,
                u = a.expandIcon,
                d = a.collapsible,
                p = e.key || String(n),
                f = e.props,
                v = f.header,
                m = f.headerClass,
                h = f.destroyInactivePanel,
                y = f.collapsible,
                x = null !== y && void 0 !== y ? y : d,
                g = {
                  key: p,
                  panelKey: p,
                  header: v,
                  headerClass: m,
                  isActive: l ? t[0] === p : t.indexOf(p) > -1,
                  prefixCls: o,
                  destroyInactivePanel: null !== h && void 0 !== h ? h : s,
                  openMotion: c,
                  accordion: l,
                  children: e.props.children,
                  onItemClick: "disabled" === x ? null : r.onClickItem,
                  expandIcon: u,
                  collapsible: x,
                };
              return "string" === typeof e.type ? e : i.cloneElement(e, g);
            }),
            (r.getItems = function () {
              var e = r.props.children;
              return (0, R.Z)(e).map(r.getNewChild);
            }),
            (r.setActiveKey = function (e) {
              "activeKey" in r.props || r.setState({ activeKey: e }),
                r.props.onChange(r.props.accordion ? e[0] : e);
            });
          var o = e.activeKey,
            c = e.defaultActiveKey;
          return (
            "activeKey" in e && (c = o), (r.state = { activeKey: U(c) }), r
          );
        }
        return (
          (0, E.Z)(
            t,
            [
              {
                key: "shouldComponentUpdate",
                value: function (e, n) {
                  return !A()(this.props, e) || !A()(this.state, n);
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    n = this.props,
                    t = n.prefixCls,
                    a = n.className,
                    r = n.style,
                    o = n.accordion,
                    c = K()(
                      ((e = {}), (0, k.Z)(e, t, !0), (0, k.Z)(e, a, !!a), e)
                    );
                  return i.createElement(
                    "div",
                    { className: c, style: r, role: o ? "tablist" : null },
                    this.getItems()
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e) {
                  var n = {};
                  return "activeKey" in e && (n.activeKey = U(e.activeKey)), n;
                },
              },
            ]
          ),
          t
        );
      })(i.Component);
      (D.defaultProps = {
        prefixCls: "rc-collapse",
        onChange: function () {},
        accordion: !1,
        destroyInactivePanel: !1,
      }),
        (D.Panel = T);
      var V = D,
        L = (D.Panel, t(1938)),
        B = t(1818),
        G = t(9077),
        q = t(4824),
        z = function (e) {
          (0, q.Z)(
            !("disabled" in e),
            "Collapse.Panel",
            '`disabled` is deprecated. Please use `collapsible="disabled"` instead.'
          );
          var n = i.useContext(G.E_).getPrefixCls,
            t = e.prefixCls,
            a = e.className,
            r = void 0 === a ? "" : a,
            o = e.showArrow,
            c = void 0 === o || o,
            l = n("collapse", t),
            s = K()((0, k.Z)({}, "".concat(l, "-no-arrow"), !c), r);
          return i.createElement(
            V.Panel,
            (0, C.Z)({}, e, { prefixCls: l, className: s })
          );
        },
        H = t(9464),
        J = t(1113),
        X = function (e) {
          var n,
            t = i.useContext(G.E_),
            a = t.getPrefixCls,
            r = t.direction,
            o = e.prefixCls,
            c = e.className,
            l = void 0 === c ? "" : c,
            s = e.bordered,
            u = void 0 === s || s,
            d = e.ghost,
            p = a("collapse", o),
            f = (function () {
              var n = e.expandIconPosition;
              return void 0 !== n ? n : "rtl" === r ? "right" : "left";
            })(),
            v = K()(
              ((n = {}),
              (0, k.Z)(n, "".concat(p, "-borderless"), !u),
              (0, k.Z)(n, "".concat(p, "-icon-position-").concat(f), !0),
              (0, k.Z)(n, "".concat(p, "-rtl"), "rtl" === r),
              (0, k.Z)(n, "".concat(p, "-ghost"), !!d),
              n),
              l
            ),
            m = (0, C.Z)((0, C.Z)({}, H.ZP), {
              motionAppear: !1,
              leavedClassName: "".concat(p, "-content-hidden"),
            });
          return i.createElement(
            V,
            (0, C.Z)({ openMotion: m }, e, {
              expandIcon: function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.expandIcon,
                  a = t
                    ? t(n)
                    : i.createElement(L.Z, {
                        rotate: n.isActive ? 90 : void 0,
                      });
                return i.createElement(
                  "div",
                  null,
                  (0, J.Tm)(a, function () {
                    return {
                      className: K()(a.props.className, "".concat(p, "-arrow")),
                    };
                  })
                );
              },
              prefixCls: p,
              className: v,
            }),
            (function () {
              var n = e.children;
              return (0, R.Z)(n).map(function (e, n) {
                var t;
                if (
                  null === (t = e.props) || void 0 === t ? void 0 : t.disabled
                ) {
                  var a = e.key || String(n),
                    r = e.props,
                    o = r.disabled,
                    c = r.collapsible,
                    l = (0, C.Z)(
                      (0, C.Z)({}, (0, B.Z)(e.props, ["disabled"])),
                      {
                        key: a,
                        collapsible:
                          null !== c && void 0 !== c
                            ? c
                            : o
                            ? "disabled"
                            : void 0,
                      }
                    );
                  return (0, J.Tm)(e, l);
                }
                return e;
              });
            })()
          );
        },
        Q = X,
        W = (X.Panel = z);
      function Y() {
        var e = (0, u.b)(),
          n = e.auth,
          t = e.sideBar,
          c = (0, g.UO)().id,
          p = (0, y.ZP)("/roles/".concat(c), h.Z).data,
          C = (0, y.ZP)("/getAPI", h.Z).data,
          k = (0, i.useState)([]),
          N = (0, o.Z)(k, 2),
          E = N[0],
          P = N[1],
          w = p && p.data,
          O = C && C.data;
        console.log(O),
          (0, i.useEffect)(
            function () {
              var e = setTimeout(function () {
                P(w.accessRoutes);
              }, 100);
              return function () {
                return clearTimeout(e);
              };
            },
            [w]
          );
        var I = (function () {
            var e = (0, r.Z)(
              l().mark(function e(n, t) {
                return l().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t.target.checked = !t.target.checked),
                            null === E || void 0 === E || !E.includes(n))
                          ) {
                            e.next = 14;
                            break;
                          }
                          return (
                            P(
                              E.filter(function (e) {
                                return e !== n;
                              })
                            ),
                            (e.prev = 3),
                            (e.next = 6),
                            x.Z.put("/roles/".concat(w._id), {
                              role: w.role,
                              accessRoutes: E.filter(function (e) {
                                return e !== n;
                              }),
                            })
                          );
                        case 6:
                          b.Am.warning("Route removed successfully!"),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(3)),
                            b.Am.error(e.t0.response.data.message);
                        case 12:
                          e.next = 25;
                          break;
                        case 14:
                          return (
                            P(function (e) {
                              return [].concat((0, a.Z)(e), [n]);
                            }),
                            (e.prev = 15),
                            (e.next = 18),
                            x.Z.put("/roles/".concat(w._id), {
                              role: w.role,
                              accessRoutes: [].concat((0, a.Z)(E), [n]),
                            })
                          );
                        case 18:
                          b.Am.success("Route added successfully!"),
                            (0, y.JG)("/roles"),
                            (e.next = 25);
                          break;
                        case 22:
                          (e.prev = 22),
                            (e.t1 = e.catch(15)),
                            b.Am.error(e.t1.response.data.message);
                        case 25:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [3, 9],
                    [15, 22],
                  ]
                );
              })
            );
            return function (n, t) {
              return e.apply(this, arguments);
            };
          })(),
          K = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/role-management", name: "Role Management" },
            { isLink: !1, link: "/role-management/:id", name: w && w.role },
          ];
        if (!n || "superadmin" !== !n.user.role)
          return (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(d.Z, { details: K }),
              (0, v.jsxs)("div", {
                className: "mt-5",
                children: [
                  (0, v.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, v.jsx)(Z._Tb, {
                        size: 20,
                        className: "dark:text-white",
                      }),
                      (0, v.jsxs)("h1", {
                        className: "dark:text-white font-medium text-xl ml-3",
                        children: [
                          "Access Routes of ",
                          null === w || void 0 === w ? void 0 : w.role,
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)(Q, {
                    onChange: function (e) {
                      console.log(e);
                    },
                    className: "my-5",
                    children:
                      null === O || void 0 === O
                        ? void 0
                        : O.map(function (e) {
                            var n = e.slug,
                              a = e._id,
                              r = e.name;
                            return (0, v.jsx)(
                              W,
                              {
                                header: (0, v.jsxs)("span", {
                                  className:
                                    "text-base font-semibold dark:text-white",
                                  children: [(0, f.Z)(n), " Routes"],
                                }),
                                children: (0, v.jsx)("div", {
                                  className: t.isOpen
                                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 py-5"
                                    : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 py-5",
                                  children: r.map(function (e) {
                                    return (0,
                                    v.jsx)(m, { addRoute: I, api: e, _id: e, accessRoles: E }, i.useId);
                                  }),
                                }),
                              },
                              a
                            );
                          }),
                  }),
                ],
              }),
            ],
          });
        s.Z;
      }
    },
    783: function (e, n, t) {
      function a(e) {
        return (null === e || void 0 === e ? void 0 : e.split(" ").length) > 1
          ? e
              .split(" ")
              .map(function (e) {
                return a(e);
              })
              .join(" ")
          : (null === e || void 0 === e
              ? void 0
              : e.split("")[0].toUpperCase()) +
              (null === e || void 0 === e
                ? void 0
                : e
                    .split("")
                    .filter(function (n) {
                      return n !== e.split("")[0];
                    })
                    .join(""));
      }
      t.d(n, {
        Z: function () {
          return a;
        },
      });
    },
    1938: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(1413),
        r = t(2791),
        o = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z",
                },
              },
            ],
          },
          name: "right",
          theme: "outlined",
        },
        c = t(4291),
        l = function (e, n) {
          return r.createElement(
            c.Z,
            (0, a.Z)((0, a.Z)({}, e), {}, { ref: n, icon: o })
          );
        };
      l.displayName = "RightOutlined";
      var i = r.forwardRef(l);
    },
    2014: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var a = t(4942),
        r = t(7462),
        o = t(2791),
        c = t(1694),
        l = t.n(c),
        i = t(8083),
        s = t(3433),
        u = t(9439),
        d = t(1818),
        p = t(9077),
        f = function (e, n) {
          var t = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              n.indexOf(a) < 0 &&
              (t[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              n.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (t[a[r]] = e[a[r]]);
          }
          return t;
        },
        v = o.createContext(null),
        m = function (e, n) {
          var t = e.defaultValue,
            c = e.children,
            i = e.options,
            m = void 0 === i ? [] : i,
            h = e.prefixCls,
            y = e.className,
            x = e.style,
            g = e.onChange,
            b = f(e, [
              "defaultValue",
              "children",
              "options",
              "prefixCls",
              "className",
              "style",
              "onChange",
            ]),
            Z = o.useContext(p.E_),
            k = Z.getPrefixCls,
            N = Z.direction,
            E = o.useState(b.value || t || []),
            P = (0, u.Z)(E, 2),
            w = P[0],
            O = P[1],
            I = o.useState([]),
            K = (0, u.Z)(I, 2),
            j = K[0],
            A = K[1];
          o.useEffect(
            function () {
              "value" in b && O(b.value || []);
            },
            [b.value]
          );
          var R = function () {
              return m.map(function (e) {
                return "string" === typeof e || "number" === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            S = k("checkbox", h),
            _ = "".concat(S, "-group"),
            M = (0, d.Z)(b, ["value", "disabled"]);
          m &&
            m.length > 0 &&
            (c = R().map(function (e) {
              return o.createElement(
                C,
                {
                  prefixCls: S,
                  key: e.value.toString(),
                  disabled: "disabled" in e ? e.disabled : b.disabled,
                  value: e.value,
                  checked: -1 !== w.indexOf(e.value),
                  onChange: e.onChange,
                  className: "".concat(_, "-item"),
                  style: e.style,
                },
                e.label
              );
            }));
          var F = {
              toggleOption: function (e) {
                var n = w.indexOf(e.value),
                  t = (0, s.Z)(w);
                -1 === n ? t.push(e.value) : t.splice(n, 1),
                  "value" in b || O(t);
                var a = R();
                null === g ||
                  void 0 === g ||
                  g(
                    t
                      .filter(function (e) {
                        return -1 !== j.indexOf(e);
                      })
                      .sort(function (e, n) {
                        return (
                          a.findIndex(function (n) {
                            return n.value === e;
                          }) -
                          a.findIndex(function (e) {
                            return e.value === n;
                          })
                        );
                      })
                  );
              },
              value: w,
              disabled: b.disabled,
              name: b.name,
              registerValue: function (e) {
                A(function (n) {
                  return [].concat((0, s.Z)(n), [e]);
                });
              },
              cancelValue: function (e) {
                A(function (n) {
                  return n.filter(function (n) {
                    return n !== e;
                  });
                });
              },
            },
            T = l()(_, (0, a.Z)({}, "".concat(_, "-rtl"), "rtl" === N), y);
          return o.createElement(
            "div",
            (0, r.Z)({ className: T, style: x }, M, { ref: n }),
            o.createElement(v.Provider, { value: F }, c)
          );
        },
        h = o.forwardRef(m),
        y = o.memo(h),
        x = t(4824),
        g = function (e, n) {
          var t = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              n.indexOf(a) < 0 &&
              (t[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              n.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (t[a[r]] = e[a[r]]);
          }
          return t;
        },
        b = function (e, n) {
          var t,
            c = e.prefixCls,
            s = e.className,
            u = e.children,
            d = e.indeterminate,
            f = void 0 !== d && d,
            m = e.style,
            h = e.onMouseEnter,
            y = e.onMouseLeave,
            b = e.skipGroup,
            Z = void 0 !== b && b,
            C = g(e, [
              "prefixCls",
              "className",
              "children",
              "indeterminate",
              "style",
              "onMouseEnter",
              "onMouseLeave",
              "skipGroup",
            ]),
            k = o.useContext(p.E_),
            N = k.getPrefixCls,
            E = k.direction,
            P = o.useContext(v),
            w = o.useRef(C.value);
          o.useEffect(function () {
            null === P || void 0 === P || P.registerValue(C.value),
              (0, x.Z)(
                "checked" in C || !!P || !("value" in C),
                "Checkbox",
                "`value` is not a valid prop, do you mean `checked`?"
              );
          }, []),
            o.useEffect(
              function () {
                if (!Z)
                  return (
                    C.value !== w.current &&
                      (null === P || void 0 === P || P.cancelValue(w.current),
                      null === P || void 0 === P || P.registerValue(C.value),
                      (w.current = C.value)),
                    function () {
                      return null === P || void 0 === P
                        ? void 0
                        : P.cancelValue(C.value);
                    }
                  );
              },
              [C.value]
            );
          var O = N("checkbox", c),
            I = (0, r.Z)({}, C);
          P &&
            !Z &&
            ((I.onChange = function () {
              C.onChange && C.onChange.apply(C, arguments),
                P.toggleOption && P.toggleOption({ label: u, value: C.value });
            }),
            (I.name = P.name),
            (I.checked = -1 !== P.value.indexOf(C.value)),
            (I.disabled = C.disabled || P.disabled));
          var K = l()(
              ((t = {}),
              (0, a.Z)(t, "".concat(O, "-wrapper"), !0),
              (0, a.Z)(t, "".concat(O, "-rtl"), "rtl" === E),
              (0, a.Z)(t, "".concat(O, "-wrapper-checked"), I.checked),
              (0, a.Z)(t, "".concat(O, "-wrapper-disabled"), I.disabled),
              t),
              s
            ),
            j = l()((0, a.Z)({}, "".concat(O, "-indeterminate"), f));
          return o.createElement(
            "label",
            { className: K, style: m, onMouseEnter: h, onMouseLeave: y },
            o.createElement(
              i.Z,
              (0, r.Z)({}, I, { prefixCls: O, className: j, ref: n })
            ),
            void 0 !== u && o.createElement("span", null, u)
          );
        },
        Z = o.forwardRef(b);
      Z.displayName = "Checkbox";
      var C = Z,
        k = C;
      (k.Group = y), (k.__ANT_CHECKBOX = !0);
      var N = k;
    },
    8083: function (e, n, t) {
      var a = t(7462),
        r = t(4942),
        o = t(4925),
        c = t(1413),
        l = t(5671),
        i = t(3144),
        s = t(9340),
        u = t(8557),
        d = t(2791),
        p = t(1694),
        f = t.n(p),
        v = (function (e) {
          (0, s.Z)(t, e);
          var n = (0, u.Z)(t);
          function t(e) {
            var a;
            (0, l.Z)(this, t),
              ((a = n.call(this, e)).handleChange = function (e) {
                var n = a.props,
                  t = n.disabled,
                  r = n.onChange;
                t ||
                  ("checked" in a.props ||
                    a.setState({ checked: e.target.checked }),
                  r &&
                    r({
                      target: (0, c.Z)(
                        (0, c.Z)({}, a.props),
                        {},
                        { checked: e.target.checked }
                      ),
                      stopPropagation: function () {
                        e.stopPropagation();
                      },
                      preventDefault: function () {
                        e.preventDefault();
                      },
                      nativeEvent: e.nativeEvent,
                    }));
              }),
              (a.saveInput = function (e) {
                a.input = e;
              });
            var r = "checked" in e ? e.checked : e.defaultChecked;
            return (a.state = { checked: r }), a;
          }
          return (
            (0, i.Z)(
              t,
              [
                {
                  key: "focus",
                  value: function () {
                    this.input.focus();
                  },
                },
                {
                  key: "blur",
                  value: function () {
                    this.input.blur();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      n = this.props,
                      t = n.prefixCls,
                      c = n.className,
                      l = n.style,
                      i = n.name,
                      s = n.id,
                      u = n.type,
                      p = n.disabled,
                      v = n.readOnly,
                      m = n.tabIndex,
                      h = n.onClick,
                      y = n.onFocus,
                      x = n.onBlur,
                      g = n.onKeyDown,
                      b = n.onKeyPress,
                      Z = n.onKeyUp,
                      C = n.autoFocus,
                      k = n.value,
                      N = n.required,
                      E = (0, o.Z)(n, [
                        "prefixCls",
                        "className",
                        "style",
                        "name",
                        "id",
                        "type",
                        "disabled",
                        "readOnly",
                        "tabIndex",
                        "onClick",
                        "onFocus",
                        "onBlur",
                        "onKeyDown",
                        "onKeyPress",
                        "onKeyUp",
                        "autoFocus",
                        "value",
                        "required",
                      ]),
                      P = Object.keys(E).reduce(function (e, n) {
                        return (
                          ("aria-" !== n.substr(0, 5) &&
                            "data-" !== n.substr(0, 5) &&
                            "role" !== n) ||
                            (e[n] = E[n]),
                          e
                        );
                      }, {}),
                      w = this.state.checked,
                      O = f()(
                        t,
                        c,
                        ((e = {}),
                        (0, r.Z)(e, "".concat(t, "-checked"), w),
                        (0, r.Z)(e, "".concat(t, "-disabled"), p),
                        e)
                      );
                    return d.createElement(
                      "span",
                      { className: O, style: l },
                      d.createElement(
                        "input",
                        (0, a.Z)(
                          {
                            name: i,
                            id: s,
                            type: u,
                            required: N,
                            readOnly: v,
                            disabled: p,
                            tabIndex: m,
                            className: "".concat(t, "-input"),
                            checked: !!w,
                            onClick: h,
                            onFocus: y,
                            onBlur: x,
                            onKeyUp: Z,
                            onKeyDown: g,
                            onKeyPress: b,
                            onChange: this.handleChange,
                            autoFocus: C,
                            ref: this.saveInput,
                            value: k,
                          },
                          P
                        )
                      ),
                      d.createElement("span", {
                        className: "".concat(t, "-inner"),
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, n) {
                    return "checked" in e
                      ? (0, c.Z)((0, c.Z)({}, n), {}, { checked: e.checked })
                      : null;
                  },
                },
              ]
            ),
            t
          );
        })(d.Component);
      (v.defaultProps = {
        prefixCls: "rc-checkbox",
        className: "",
        style: {},
        type: "checkbox",
        defaultChecked: !1,
        onFocus: function () {},
        onBlur: function () {},
        onChange: function () {},
        onKeyDown: function () {},
        onKeyPress: function () {},
        onKeyUp: function () {},
      }),
        (n.Z = v);
    },
  },
]);
//# sourceMappingURL=860.f239de2b.chunk.js.map
