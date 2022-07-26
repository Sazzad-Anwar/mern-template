"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [697],
  {
    5033: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(1413),
        o = t(2791),
        i = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z",
                },
              },
            ],
          },
          name: "ellipsis",
          theme: "outlined",
        },
        l = t(4291),
        a = function (e, n) {
          return o.createElement(
            l.Z,
            (0, r.Z)((0, r.Z)({}, e), {}, { ref: n, icon: i })
          );
        };
      a.displayName = "EllipsisOutlined";
      var c = o.forwardRef(a);
    },
    6864: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(1413),
        o = t(2791),
        i = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
                },
              },
            ],
          },
          name: "left",
          theme: "outlined",
        },
        l = t(4291),
        a = function (e, n) {
          return o.createElement(
            l.Z,
            (0, r.Z)((0, r.Z)({}, e), {}, { ref: n, icon: i })
          );
        };
      a.displayName = "LeftOutlined";
      var c = o.forwardRef(a);
    },
    1938: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(1413),
        o = t(2791),
        i = {
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
        l = t(4291),
        a = function (e, n) {
          return o.createElement(
            l.Z,
            (0, r.Z)((0, r.Z)({}, e), {}, { ref: n, icon: i })
          );
        };
      a.displayName = "RightOutlined";
      var c = o.forwardRef(a);
    },
    1697: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Pn;
        },
      });
      var r = t(5671),
        o = t(3144),
        i = t(9340),
        l = t(8557),
        a = t(7462),
        c = t(2791),
        u = t(4942),
        s = t(1413),
        d = t(3433),
        f = t(9439),
        p = t(4925),
        v = t(1694),
        m = t.n(v),
        h = t(9613),
        y = t.n(h),
        Z = t(5179),
        g = t(632),
        b = t(7573),
        C = t(1354),
        E = t(1818),
        x = t(1534),
        N = ["children", "locked"],
        w = c.createContext(null);
      function M(e) {
        var n = e.children,
          t = e.locked,
          r = (0, p.Z)(e, N),
          o = c.useContext(w),
          i = (0, x.Z)(
            function () {
              return (function (e, n) {
                var t = (0, s.Z)({}, e);
                return (
                  Object.keys(n).forEach(function (e) {
                    var r = n[e];
                    void 0 !== r && (t[e] = r);
                  }),
                  t
                );
              })(o, r);
            },
            [o, r],
            function (e, n) {
              return !t && (e[0] !== n[0] || !y()(e[1], n[1]));
            }
          );
        return c.createElement(w.Provider, { value: i }, n);
      }
      function P(e, n, t, r) {
        var o = c.useContext(w),
          i = o.activeKey,
          l = o.onActive,
          a = o.onInactive,
          u = { active: i === e };
        return (
          n ||
            ((u.onMouseEnter = function (n) {
              null === t || void 0 === t || t({ key: e, domEvent: n }), l(e);
            }),
            (u.onMouseLeave = function (n) {
              null === r || void 0 === r || r({ key: e, domEvent: n }), a(e);
            })),
          u
        );
      }
      var S = ["item"];
      function I(e) {
        var n = e.item,
          t = (0, p.Z)(e, S);
        return (
          Object.defineProperty(t, "item", {
            get: function () {
              return (
                (0, g.ZP)(
                  !1,
                  "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."
                ),
                n
              );
            },
          }),
          t
        );
      }
      function O(e) {
        var n = e.icon,
          t = e.props,
          r = e.children;
        return (
          ("function" === typeof n ? c.createElement(n, (0, s.Z)({}, t)) : n) ||
          r ||
          null
        );
      }
      function k(e) {
        var n = c.useContext(w),
          t = n.mode,
          r = n.rtl,
          o = n.inlineIndent;
        if ("inline" !== t) return null;
        return r ? { paddingRight: e * o } : { paddingLeft: e * o };
      }
      var R = [],
        K = c.createContext(null);
      function T() {
        return c.useContext(K);
      }
      var L = c.createContext(R);
      function A(e) {
        var n = c.useContext(L);
        return c.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, d.Z)(n), [e]) : n;
          },
          [n, e]
        );
      }
      var D = c.createContext(null),
        z = c.createContext(null);
      function j(e, n) {
        return void 0 === e ? null : "".concat(e, "-").concat(n);
      }
      function _(e) {
        return j(c.useContext(z), e);
      }
      var F = c.createContext({}),
        V = ["title", "attribute", "elementRef"],
        H = [
          "style",
          "className",
          "eventKey",
          "warnKey",
          "disabled",
          "itemIcon",
          "children",
          "role",
          "onMouseEnter",
          "onMouseLeave",
          "onClick",
          "onKeyDown",
          "onFocus",
        ],
        W = ["active"],
        B = (function (e) {
          (0, i.Z)(t, e);
          var n = (0, l.Z)(t);
          function t() {
            return (0, r.Z)(this, t), n.apply(this, arguments);
          }
          return (
            (0, o.Z)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    n = e.title,
                    t = e.attribute,
                    r = e.elementRef,
                    o = (0, p.Z)(e, V),
                    i = (0, E.Z)(o, ["eventKey"]);
                  return (
                    (0, g.ZP)(
                      !t,
                      "`attribute` of Menu.Item is deprecated. Please pass attribute directly."
                    ),
                    c.createElement(
                      b.Z.Item,
                      (0, a.Z)(
                        {},
                        t,
                        { title: "string" === typeof n ? n : void 0 },
                        i,
                        { ref: r }
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(c.Component),
        $ = function (e) {
          var n,
            t = e.style,
            r = e.className,
            o = e.eventKey,
            i = (e.warnKey, e.disabled),
            l = e.itemIcon,
            f = e.children,
            v = e.role,
            h = e.onMouseEnter,
            y = e.onMouseLeave,
            Z = e.onClick,
            g = e.onKeyDown,
            b = e.onFocus,
            E = (0, p.Z)(e, H),
            x = _(o),
            N = c.useContext(w),
            M = N.prefixCls,
            S = N.onItemClick,
            R = N.disabled,
            K = N.overflowDisabled,
            T = N.itemIcon,
            L = N.selectedKeys,
            D = N.onActive,
            z = c.useContext(F)._internalRenderMenuItem,
            j = "".concat(M, "-item"),
            V = c.useRef(),
            $ = c.useRef(),
            q = R || i,
            G = A(o);
          var U = function (e) {
              return {
                key: o,
                keyPath: (0, d.Z)(G).reverse(),
                item: V.current,
                domEvent: e,
              };
            },
            Q = l || T,
            X = P(o, q, h, y),
            Y = X.active,
            J = (0, p.Z)(X, W),
            ee = L.includes(o),
            ne = k(G.length),
            te = {};
          "option" === e.role && (te["aria-selected"] = ee);
          var re = c.createElement(
            B,
            (0, a.Z)(
              {
                ref: V,
                elementRef: $,
                role: null === v ? "none" : v || "menuitem",
                tabIndex: i ? null : -1,
                "data-menu-id": K && x ? null : x,
              },
              E,
              J,
              te,
              {
                component: "li",
                "aria-disabled": i,
                style: (0, s.Z)((0, s.Z)({}, ne), t),
                className: m()(
                  j,
                  ((n = {}),
                  (0, u.Z)(n, "".concat(j, "-active"), Y),
                  (0, u.Z)(n, "".concat(j, "-selected"), ee),
                  (0, u.Z)(n, "".concat(j, "-disabled"), q),
                  n),
                  r
                ),
                onClick: function (e) {
                  if (!q) {
                    var n = U(e);
                    null === Z || void 0 === Z || Z(I(n)), S(n);
                  }
                },
                onKeyDown: function (e) {
                  if (
                    (null === g || void 0 === g || g(e), e.which === C.Z.ENTER)
                  ) {
                    var n = U(e);
                    null === Z || void 0 === Z || Z(I(n)), S(n);
                  }
                },
                onFocus: function (e) {
                  D(o), null === b || void 0 === b || b(e);
                },
              }
            ),
            f,
            c.createElement(O, {
              props: (0, s.Z)((0, s.Z)({}, e), {}, { isSelected: ee }),
              icon: Q,
            })
          );
          return z && (re = z(re, e, { selected: ee })), re;
        };
      var q = function (e) {
          var n = e.eventKey,
            t = T(),
            r = A(n);
          return (
            c.useEffect(
              function () {
                if (t)
                  return (
                    t.registerPath(n, r),
                    function () {
                      t.unregisterPath(n, r);
                    }
                  );
              },
              [r]
            ),
            t ? null : c.createElement($, e)
          );
        },
        G = t(5501);
      function U(e, n) {
        return (0, G.Z)(e).map(function (e, t) {
          if (c.isValidElement(e)) {
            var r,
              o,
              i = e.key,
              l =
                null !==
                  (r =
                    null === (o = e.props) || void 0 === o
                      ? void 0
                      : o.eventKey) && void 0 !== r
                  ? r
                  : i;
            (null === l || void 0 === l) &&
              (l = "tmp_key-".concat([].concat((0, d.Z)(n), [t]).join("-")));
            var a = { key: l, eventKey: l };
            return c.cloneElement(e, a);
          }
          return e;
        });
      }
      function Q(e) {
        var n = c.useRef(e);
        n.current = e;
        var t = c.useCallback(function () {
          for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          return null === (e = n.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [n].concat(r));
        }, []);
        return e ? t : void 0;
      }
      var X = ["className", "children"],
        Y = function (e, n) {
          var t = e.className,
            r = e.children,
            o = (0, p.Z)(e, X),
            i = c.useContext(w),
            l = i.prefixCls,
            u = i.mode,
            s = i.rtl;
          return c.createElement(
            "ul",
            (0, a.Z)(
              {
                className: m()(
                  l,
                  s && "".concat(l, "-rtl"),
                  "".concat(l, "-sub"),
                  ""
                    .concat(l, "-")
                    .concat("inline" === u ? "inline" : "vertical"),
                  t
                ),
              },
              o,
              { "data-menu-list": !0, ref: n }
            ),
            r
          );
        },
        J = c.forwardRef(Y);
      J.displayName = "SubMenuList";
      var ee = J,
        ne = t(34),
        te = t(5314),
        re = { adjustX: 1, adjustY: 1 },
        oe = {
          topLeft: { points: ["bl", "tl"], overflow: re, offset: [0, -7] },
          bottomLeft: { points: ["tl", "bl"], overflow: re, offset: [0, 7] },
          leftTop: { points: ["tr", "tl"], overflow: re, offset: [-4, 0] },
          rightTop: { points: ["tl", "tr"], overflow: re, offset: [4, 0] },
        },
        ie = {
          topLeft: { points: ["bl", "tl"], overflow: re, offset: [0, -7] },
          bottomLeft: { points: ["tl", "bl"], overflow: re, offset: [0, 7] },
          rightTop: { points: ["tr", "tl"], overflow: re, offset: [-4, 0] },
          leftTop: { points: ["tl", "tr"], overflow: re, offset: [4, 0] },
        };
      function le(e, n, t) {
        return n || (t ? t[e] || t.other : void 0);
      }
      var ae = {
        horizontal: "bottomLeft",
        vertical: "rightTop",
        "vertical-left": "rightTop",
        "vertical-right": "leftTop",
      };
      function ce(e) {
        var n = e.prefixCls,
          t = e.visible,
          r = e.children,
          o = e.popup,
          i = e.popupClassName,
          l = e.popupOffset,
          a = e.disabled,
          d = e.mode,
          p = e.onVisibleChange,
          v = c.useContext(w),
          h = v.getPopupContainer,
          y = v.rtl,
          Z = v.subMenuOpenDelay,
          g = v.subMenuCloseDelay,
          b = v.builtinPlacements,
          C = v.triggerSubMenuAction,
          E = v.forceSubMenuRender,
          x = v.motion,
          N = v.defaultMotions,
          M = c.useState(!1),
          P = (0, f.Z)(M, 2),
          S = P[0],
          I = P[1],
          O = y ? (0, s.Z)((0, s.Z)({}, ie), b) : (0, s.Z)((0, s.Z)({}, oe), b),
          k = ae[d],
          R = le(d, x, N),
          K = (0, s.Z)(
            (0, s.Z)({}, R),
            {},
            {
              leavedClassName: "".concat(n, "-hidden"),
              removeOnLeave: !1,
              motionAppear: !0,
            }
          ),
          T = c.useRef();
        return (
          c.useEffect(
            function () {
              return (
                (T.current = (0, te.Z)(function () {
                  I(t);
                })),
                function () {
                  te.Z.cancel(T.current);
                }
              );
            },
            [t]
          ),
          c.createElement(
            ne.Z,
            {
              prefixCls: n,
              popupClassName: m()(
                "".concat(n, "-popup"),
                (0, u.Z)({}, "".concat(n, "-rtl"), y),
                i
              ),
              stretch: "horizontal" === d ? "minWidth" : null,
              getPopupContainer: h,
              builtinPlacements: O,
              popupPlacement: k,
              popupVisible: S,
              popup: o,
              popupAlign: l && { offset: l },
              action: a ? [] : [C],
              mouseEnterDelay: Z,
              mouseLeaveDelay: g,
              onPopupVisibleChange: p,
              forceRender: E,
              popupMotion: K,
            },
            r
          )
        );
      }
      var ue = t(5207);
      function se(e) {
        var n = e.id,
          t = e.open,
          r = e.keyPath,
          o = e.children,
          i = "inline",
          l = c.useContext(w),
          u = l.prefixCls,
          d = l.forceSubMenuRender,
          p = l.motion,
          v = l.defaultMotions,
          m = l.mode,
          h = c.useRef(!1);
        h.current = m === i;
        var y = c.useState(!h.current),
          Z = (0, f.Z)(y, 2),
          g = Z[0],
          b = Z[1],
          C = !!h.current && t;
        c.useEffect(
          function () {
            h.current && b(!1);
          },
          [m]
        );
        var E = (0, s.Z)({}, le(i, p, v));
        r.length > 1 && (E.motionAppear = !1);
        var x = E.onVisibleChanged;
        return (
          (E.onVisibleChanged = function (e) {
            return (
              h.current || e || b(!0),
              null === x || void 0 === x ? void 0 : x(e)
            );
          }),
          g
            ? null
            : c.createElement(
                M,
                { mode: i, locked: !h.current },
                c.createElement(
                  ue.Z,
                  (0, a.Z)({ visible: C }, E, {
                    forceRender: d,
                    removeOnLeave: !1,
                    leavedClassName: "".concat(u, "-hidden"),
                  }),
                  function (e) {
                    var t = e.className,
                      r = e.style;
                    return c.createElement(
                      ee,
                      { id: n, className: t, style: r },
                      o
                    );
                  }
                )
              )
        );
      }
      var de = [
          "style",
          "className",
          "title",
          "eventKey",
          "warnKey",
          "disabled",
          "internalPopupClose",
          "children",
          "itemIcon",
          "expandIcon",
          "popupClassName",
          "popupOffset",
          "onClick",
          "onMouseEnter",
          "onMouseLeave",
          "onTitleClick",
          "onTitleMouseEnter",
          "onTitleMouseLeave",
        ],
        fe = ["active"],
        pe = function (e) {
          var n,
            t = e.style,
            r = e.className,
            o = e.title,
            i = e.eventKey,
            l = (e.warnKey, e.disabled),
            d = e.internalPopupClose,
            v = e.children,
            h = e.itemIcon,
            y = e.expandIcon,
            Z = e.popupClassName,
            g = e.popupOffset,
            C = e.onClick,
            E = e.onMouseEnter,
            x = e.onMouseLeave,
            N = e.onTitleClick,
            S = e.onTitleMouseEnter,
            R = e.onTitleMouseLeave,
            K = (0, p.Z)(e, de),
            T = _(i),
            L = c.useContext(w),
            z = L.prefixCls,
            j = L.mode,
            V = L.openKeys,
            H = L.disabled,
            W = L.overflowDisabled,
            B = L.activeKey,
            $ = L.selectedKeys,
            q = L.itemIcon,
            G = L.expandIcon,
            U = L.onItemClick,
            X = L.onOpenChange,
            Y = L.onActive,
            J = c.useContext(F)._internalRenderSubMenuItem,
            ne = c.useContext(D).isSubPathKey,
            te = A(),
            re = "".concat(z, "-submenu"),
            oe = H || l,
            ie = c.useRef(),
            le = c.useRef();
          var ae = h || q,
            ue = y || G,
            pe = V.includes(i),
            ve = !W && pe,
            me = ne($, i),
            he = P(i, oe, S, R),
            ye = he.active,
            Ze = (0, p.Z)(he, fe),
            ge = c.useState(!1),
            be = (0, f.Z)(ge, 2),
            Ce = be[0],
            Ee = be[1],
            xe = function (e) {
              oe || Ee(e);
            },
            Ne = c.useMemo(
              function () {
                return ye || ("inline" !== j && (Ce || ne([B], i)));
              },
              [j, ye, B, Ce, i, ne]
            ),
            we = k(te.length),
            Me = Q(function (e) {
              null === C || void 0 === C || C(I(e)), U(e);
            }),
            Pe = T && "".concat(T, "-popup"),
            Se = c.createElement(
              "div",
              (0, a.Z)(
                {
                  role: "menuitem",
                  style: we,
                  className: "".concat(re, "-title"),
                  tabIndex: oe ? null : -1,
                  ref: ie,
                  title: "string" === typeof o ? o : null,
                  "data-menu-id": W && T ? null : T,
                  "aria-expanded": ve,
                  "aria-haspopup": !0,
                  "aria-controls": Pe,
                  "aria-disabled": oe,
                  onClick: function (e) {
                    oe ||
                      (null === N || void 0 === N || N({ key: i, domEvent: e }),
                      "inline" === j && X(i, !pe));
                  },
                  onFocus: function () {
                    Y(i);
                  },
                },
                Ze
              ),
              o,
              c.createElement(
                O,
                {
                  icon: "horizontal" !== j ? ue : null,
                  props: (0, s.Z)(
                    (0, s.Z)({}, e),
                    {},
                    { isOpen: ve, isSubMenu: !0 }
                  ),
                },
                c.createElement("i", { className: "".concat(re, "-arrow") })
              )
            ),
            Ie = c.useRef(j);
          if (
            ("inline" !== j && (Ie.current = te.length > 1 ? "vertical" : j),
            !W)
          ) {
            var Oe = Ie.current;
            Se = c.createElement(
              ce,
              {
                mode: Oe,
                prefixCls: re,
                visible: !d && ve && "inline" !== j,
                popupClassName: Z,
                popupOffset: g,
                popup: c.createElement(
                  M,
                  { mode: "horizontal" === Oe ? "vertical" : Oe },
                  c.createElement(ee, { id: Pe, ref: le }, v)
                ),
                disabled: oe,
                onVisibleChange: function (e) {
                  "inline" !== j && X(i, e);
                },
              },
              Se
            );
          }
          var ke = c.createElement(
            b.Z.Item,
            (0, a.Z)({ role: "none" }, K, {
              component: "li",
              style: t,
              className: m()(
                re,
                "".concat(re, "-").concat(j),
                r,
                ((n = {}),
                (0, u.Z)(n, "".concat(re, "-open"), ve),
                (0, u.Z)(n, "".concat(re, "-active"), Ne),
                (0, u.Z)(n, "".concat(re, "-selected"), me),
                (0, u.Z)(n, "".concat(re, "-disabled"), oe),
                n)
              ),
              onMouseEnter: function (e) {
                xe(!0),
                  null === E || void 0 === E || E({ key: i, domEvent: e });
              },
              onMouseLeave: function (e) {
                xe(!1),
                  null === x || void 0 === x || x({ key: i, domEvent: e });
              },
            }),
            Se,
            !W && c.createElement(se, { id: Pe, open: ve, keyPath: te }, v)
          );
          return (
            J &&
              (ke = J(ke, e, {
                selected: me,
                active: Ne,
                open: ve,
                disabled: oe,
              })),
            c.createElement(
              M,
              {
                onItemClick: Me,
                mode: "horizontal" === j ? "vertical" : j,
                itemIcon: ae,
                expandIcon: ue,
              },
              ke
            )
          );
        };
      function ve(e) {
        var n,
          t = e.eventKey,
          r = e.children,
          o = A(t),
          i = U(r, o),
          l = T();
        return (
          c.useEffect(
            function () {
              if (l)
                return (
                  l.registerPath(t, o),
                  function () {
                    l.unregisterPath(t, o);
                  }
                );
            },
            [o]
          ),
          (n = l ? i : c.createElement(pe, e, i)),
          c.createElement(L.Provider, { value: o }, n)
        );
      }
      var me = t(2386);
      function he(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0, me.Z)(e)) {
          var t = e.nodeName.toLowerCase(),
            r =
              ["input", "select", "textarea", "button"].includes(t) ||
              e.isContentEditable ||
              ("a" === t && !!e.getAttribute("href")),
            o = e.getAttribute("tabindex"),
            i = Number(o),
            l = null;
          return (
            o && !Number.isNaN(i) ? (l = i) : r && null === l && (l = 0),
            r && e.disabled && (l = null),
            null !== l && (l >= 0 || (n && l < 0))
          );
        }
        return !1;
      }
      function ye(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = (0, d.Z)(e.querySelectorAll("*")).filter(function (e) {
            return he(e, n);
          });
        return he(e, n) && t.unshift(e), t;
      }
      var Ze = C.Z.LEFT,
        ge = C.Z.RIGHT,
        be = C.Z.UP,
        Ce = C.Z.DOWN,
        Ee = C.Z.ENTER,
        xe = C.Z.ESC,
        Ne = C.Z.HOME,
        we = C.Z.END,
        Me = [be, Ce, Ze, ge];
      function Pe(e, n) {
        return ye(e, !0).filter(function (e) {
          return n.has(e);
        });
      }
      function Se(e, n, t) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var o = Pe(e, n),
          i = o.length,
          l = o.findIndex(function (e) {
            return t === e;
          });
        return (
          r < 0 ? (-1 === l ? (l = i - 1) : (l -= 1)) : r > 0 && (l += 1),
          o[(l = (l + i) % i)]
        );
      }
      function Ie(e, n, t, r, o, i, l, a, s, d) {
        var f = c.useRef(),
          p = c.useRef();
        p.current = n;
        var v = function () {
          te.Z.cancel(f.current);
        };
        return (
          c.useEffect(function () {
            return function () {
              v();
            };
          }, []),
          function (c) {
            var m = c.which;
            if ([].concat(Me, [Ee, xe, Ne, we]).includes(m)) {
              var h,
                y,
                Z,
                g = function () {
                  return (
                    (h = new Set()),
                    (y = new Map()),
                    (Z = new Map()),
                    i().forEach(function (e) {
                      var n = document.querySelector(
                        "[data-menu-id='".concat(j(r, e), "']")
                      );
                      n && (h.add(n), Z.set(n, e), y.set(e, n));
                    }),
                    h
                  );
                };
              g();
              var b = (function (e, n) {
                  for (var t = e || document.activeElement; t; ) {
                    if (n.has(t)) return t;
                    t = t.parentElement;
                  }
                  return null;
                })(y.get(n), h),
                C = Z.get(b),
                E = (function (e, n, t, r) {
                  var o,
                    i,
                    l,
                    a,
                    c = "prev",
                    s = "next",
                    d = "children",
                    f = "parent";
                  if ("inline" === e && r === Ee) return { inlineTrigger: !0 };
                  var p = ((o = {}), (0, u.Z)(o, be, c), (0, u.Z)(o, Ce, s), o),
                    v =
                      ((i = {}),
                      (0, u.Z)(i, Ze, t ? s : c),
                      (0, u.Z)(i, ge, t ? c : s),
                      (0, u.Z)(i, Ce, d),
                      (0, u.Z)(i, Ee, d),
                      i),
                    m =
                      ((l = {}),
                      (0, u.Z)(l, be, c),
                      (0, u.Z)(l, Ce, s),
                      (0, u.Z)(l, Ee, d),
                      (0, u.Z)(l, xe, f),
                      (0, u.Z)(l, Ze, t ? d : f),
                      (0, u.Z)(l, ge, t ? f : d),
                      l);
                  switch (
                    null ===
                      (a = {
                        inline: p,
                        horizontal: v,
                        vertical: m,
                        inlineSub: p,
                        horizontalSub: m,
                        verticalSub: m,
                      }["".concat(e).concat(n ? "" : "Sub")]) || void 0 === a
                      ? void 0
                      : a[r]
                  ) {
                    case c:
                      return { offset: -1, sibling: !0 };
                    case s:
                      return { offset: 1, sibling: !0 };
                    case f:
                      return { offset: -1, sibling: !1 };
                    case d:
                      return { offset: 1, sibling: !1 };
                    default:
                      return null;
                  }
                })(e, 1 === l(C, !0).length, t, m);
              if (!E && m !== Ne && m !== we) return;
              (Me.includes(m) || [Ne, we].includes(m)) && c.preventDefault();
              var x = function (e) {
                if (e) {
                  var n = e,
                    t = e.querySelector("a");
                  (null === t || void 0 === t
                    ? void 0
                    : t.getAttribute("href")) && (n = t);
                  var r = Z.get(e);
                  a(r),
                    v(),
                    (f.current = (0, te.Z)(function () {
                      p.current === r && n.focus();
                    }));
                }
              };
              if ([Ne, we].includes(m) || E.sibling || !b) {
                var N,
                  w,
                  M = Pe(
                    (N =
                      b && "inline" !== e
                        ? (function (e) {
                            for (var n = e; n; ) {
                              if (n.getAttribute("data-menu-list")) return n;
                              n = n.parentElement;
                            }
                            return null;
                          })(b)
                        : o.current),
                    h
                  );
                (w =
                  m === Ne
                    ? M[0]
                    : m === we
                    ? M[M.length - 1]
                    : Se(N, h, b, E.offset)),
                  x(w);
              } else if (E.inlineTrigger) s(C);
              else if (E.offset > 0)
                s(C, !0),
                  v(),
                  (f.current = (0, te.Z)(function () {
                    g();
                    var e = b.getAttribute("aria-controls"),
                      n = Se(document.getElementById(e), h);
                    x(n);
                  }, 5));
              else if (E.offset < 0) {
                var P = l(C, !0),
                  S = P[P.length - 2],
                  I = y.get(S);
                s(S, !1), x(I);
              }
            }
            null === d || void 0 === d || d(c);
          }
        );
      }
      var Oe = Math.random().toFixed(5).toString().slice(2),
        ke = 0;
      var Re = "__RC_UTIL_PATH_SPLIT__",
        Ke = function (e) {
          return e.join(Re);
        },
        Te = "rc-menu-more";
      function Le() {
        var e = c.useState({}),
          n = (0, f.Z)(e, 2)[1],
          t = (0, c.useRef)(new Map()),
          r = (0, c.useRef)(new Map()),
          o = c.useState([]),
          i = (0, f.Z)(o, 2),
          l = i[0],
          a = i[1],
          u = (0, c.useRef)(0),
          s = (0, c.useRef)(!1),
          p = (0, c.useCallback)(function (e, o) {
            var i = Ke(o);
            r.current.set(i, e), t.current.set(e, i), (u.current += 1);
            var l,
              a = u.current;
            (l = function () {
              a === u.current && (s.current || n({}));
            }),
              Promise.resolve().then(l);
          }, []),
          v = (0, c.useCallback)(function (e, n) {
            var o = Ke(n);
            r.current.delete(o), t.current.delete(e);
          }, []),
          m = (0, c.useCallback)(function (e) {
            a(e);
          }, []),
          h = (0, c.useCallback)(
            function (e, n) {
              var r = t.current.get(e) || "",
                o = r.split(Re);
              return n && l.includes(o[0]) && o.unshift(Te), o;
            },
            [l]
          ),
          y = (0, c.useCallback)(
            function (e, n) {
              return e.some(function (e) {
                return h(e, !0).includes(n);
              });
            },
            [h]
          ),
          Z = (0, c.useCallback)(function (e) {
            var n = "".concat(t.current.get(e)).concat(Re),
              o = new Set();
            return (
              (0, d.Z)(r.current.keys()).forEach(function (e) {
                e.startsWith(n) && o.add(r.current.get(e));
              }),
              o
            );
          }, []);
        return (
          c.useEffect(function () {
            return function () {
              s.current = !0;
            };
          }, []),
          {
            registerPath: p,
            unregisterPath: v,
            refreshOverflowKeys: m,
            isSubPathKey: y,
            getKeyPath: h,
            getKeys: function () {
              var e = (0, d.Z)(t.current.keys());
              return l.length && e.push(Te), e;
            },
            getSubPathKeys: Z,
          }
        );
      }
      var Ae = t(8834),
        De = [
          "prefixCls",
          "style",
          "className",
          "tabIndex",
          "children",
          "direction",
          "id",
          "mode",
          "inlineCollapsed",
          "disabled",
          "disabledOverflow",
          "subMenuOpenDelay",
          "subMenuCloseDelay",
          "forceSubMenuRender",
          "defaultOpenKeys",
          "openKeys",
          "activeKey",
          "defaultActiveFirst",
          "selectable",
          "multiple",
          "defaultSelectedKeys",
          "selectedKeys",
          "onSelect",
          "onDeselect",
          "inlineIndent",
          "motion",
          "defaultMotions",
          "triggerSubMenuAction",
          "builtinPlacements",
          "itemIcon",
          "expandIcon",
          "overflowedIndicator",
          "overflowedIndicatorPopupClassName",
          "getPopupContainer",
          "onClick",
          "onOpenChange",
          "onKeyDown",
          "openAnimation",
          "openTransitionName",
          "_internalRenderMenuItem",
          "_internalRenderSubMenuItem",
        ],
        ze = [],
        je = c.forwardRef(function (e, n) {
          var t,
            r,
            o = e.prefixCls,
            i = void 0 === o ? "rc-menu" : o,
            l = e.style,
            v = e.className,
            h = e.tabIndex,
            g = void 0 === h ? 0 : h,
            C = e.children,
            E = e.direction,
            x = e.id,
            N = e.mode,
            w = void 0 === N ? "vertical" : N,
            P = e.inlineCollapsed,
            S = e.disabled,
            O = e.disabledOverflow,
            k = e.subMenuOpenDelay,
            R = void 0 === k ? 0.1 : k,
            T = e.subMenuCloseDelay,
            L = void 0 === T ? 0.1 : T,
            A = e.forceSubMenuRender,
            j = e.defaultOpenKeys,
            _ = e.openKeys,
            V = e.activeKey,
            H = e.defaultActiveFirst,
            W = e.selectable,
            B = void 0 === W || W,
            $ = e.multiple,
            G = void 0 !== $ && $,
            X = e.defaultSelectedKeys,
            Y = e.selectedKeys,
            J = e.onSelect,
            ee = e.onDeselect,
            ne = e.inlineIndent,
            te = void 0 === ne ? 24 : ne,
            re = e.motion,
            oe = e.defaultMotions,
            ie = e.triggerSubMenuAction,
            le = void 0 === ie ? "hover" : ie,
            ae = e.builtinPlacements,
            ce = e.itemIcon,
            ue = e.expandIcon,
            se = e.overflowedIndicator,
            de = void 0 === se ? "..." : se,
            fe = e.overflowedIndicatorPopupClassName,
            pe = e.getPopupContainer,
            me = e.onClick,
            he = e.onOpenChange,
            ye = e.onKeyDown,
            Ze =
              (e.openAnimation,
              e.openTransitionName,
              e._internalRenderMenuItem),
            ge = e._internalRenderSubMenuItem,
            be = (0, p.Z)(e, De),
            Ce = U(C, ze),
            Ee = c.useState(!1),
            xe = (0, f.Z)(Ee, 2),
            Ne = xe[0],
            we = xe[1],
            Me = c.useRef(),
            Pe = (0, Ae.sQ)(Me, n),
            Se = (function (e) {
              var n = (0, Z.Z)(e, { value: e }),
                t = (0, f.Z)(n, 2),
                r = t[0],
                o = t[1];
              return (
                c.useEffect(function () {
                  ke += 1;
                  var e = "".concat(Oe, "-").concat(ke);
                  o("rc-menu-uuid-".concat(e));
                }, []),
                r
              );
            })(x),
            Re = "rtl" === E;
          var Ke = c.useMemo(
              function () {
                return ("inline" !== w && "vertical" !== w) || !P
                  ? [w, !1]
                  : ["vertical", P];
              },
              [w, P]
            ),
            je = (0, f.Z)(Ke, 2),
            _e = je[0],
            Fe = je[1],
            Ve = c.useState(0),
            He = (0, f.Z)(Ve, 2),
            We = He[0],
            Be = He[1],
            $e = We >= Ce.length - 1 || "horizontal" !== _e || O,
            qe = (0, Z.Z)(j, {
              value: _,
              postState: function (e) {
                return e || ze;
              },
            }),
            Ge = (0, f.Z)(qe, 2),
            Ue = Ge[0],
            Qe = Ge[1],
            Xe = function (e) {
              Qe(e), null === he || void 0 === he || he(e);
            },
            Ye = c.useState(Ue),
            Je = (0, f.Z)(Ye, 2),
            en = Je[0],
            nn = Je[1],
            tn = "inline" === _e,
            rn = c.useRef(!1);
          c.useEffect(
            function () {
              tn && nn(Ue);
            },
            [Ue]
          ),
            c.useEffect(
              function () {
                rn.current ? (tn ? Qe(en) : Xe(ze)) : (rn.current = !0);
              },
              [tn]
            );
          var on = Le(),
            ln = on.registerPath,
            an = on.unregisterPath,
            cn = on.refreshOverflowKeys,
            un = on.isSubPathKey,
            sn = on.getKeyPath,
            dn = on.getKeys,
            fn = on.getSubPathKeys,
            pn = c.useMemo(
              function () {
                return { registerPath: ln, unregisterPath: an };
              },
              [ln, an]
            ),
            vn = c.useMemo(
              function () {
                return { isSubPathKey: un };
              },
              [un]
            );
          c.useEffect(
            function () {
              cn(
                $e
                  ? ze
                  : Ce.slice(We + 1).map(function (e) {
                      return e.key;
                    })
              );
            },
            [We, $e]
          );
          var mn = (0, Z.Z)(
              V ||
                (H && (null === (t = Ce[0]) || void 0 === t ? void 0 : t.key)),
              { value: V }
            ),
            hn = (0, f.Z)(mn, 2),
            yn = hn[0],
            Zn = hn[1],
            gn = Q(function (e) {
              Zn(e);
            }),
            bn = Q(function () {
              Zn(void 0);
            }),
            Cn = (0, Z.Z)(X || [], {
              value: Y,
              postState: function (e) {
                return Array.isArray(e)
                  ? e
                  : null === e || void 0 === e
                  ? ze
                  : [e];
              },
            }),
            En = (0, f.Z)(Cn, 2),
            xn = En[0],
            Nn = En[1],
            wn = Q(function (e) {
              null === me || void 0 === me || me(I(e)),
                (function (e) {
                  if (B) {
                    var n,
                      t = e.key,
                      r = xn.includes(t);
                    (n = G
                      ? r
                        ? xn.filter(function (e) {
                            return e !== t;
                          })
                        : [].concat((0, d.Z)(xn), [t])
                      : [t]),
                      Nn(n);
                    var o = (0, s.Z)((0, s.Z)({}, e), {}, { selectedKeys: n });
                    r
                      ? null === ee || void 0 === ee || ee(o)
                      : null === J || void 0 === J || J(o);
                  }
                  !G && Ue.length && "inline" !== _e && Xe(ze);
                })(e);
            }),
            Mn = Q(function (e, n) {
              var t = Ue.filter(function (n) {
                return n !== e;
              });
              if (n) t.push(e);
              else if ("inline" !== _e) {
                var r = fn(e);
                t = t.filter(function (e) {
                  return !r.has(e);
                });
              }
              y()(Ue, t) || Xe(t);
            }),
            Pn = Q(pe),
            Sn = Ie(
              _e,
              yn,
              Re,
              Se,
              Me,
              dn,
              sn,
              Zn,
              function (e, n) {
                var t = null !== n && void 0 !== n ? n : !Ue.includes(e);
                Mn(e, t);
              },
              ye
            );
          c.useEffect(function () {
            we(!0);
          }, []);
          var In = c.useMemo(
              function () {
                return {
                  _internalRenderMenuItem: Ze,
                  _internalRenderSubMenuItem: ge,
                };
              },
              [Ze, ge]
            ),
            On =
              "horizontal" !== _e || O
                ? Ce
                : Ce.map(function (e, n) {
                    return c.createElement(
                      M,
                      { key: e.key, overflowDisabled: n > We },
                      e
                    );
                  }),
            kn = c.createElement(
              b.Z,
              (0, a.Z)(
                {
                  id: x,
                  ref: Pe,
                  prefixCls: "".concat(i, "-overflow"),
                  component: "ul",
                  itemComponent: q,
                  className: m()(
                    i,
                    "".concat(i, "-root"),
                    "".concat(i, "-").concat(_e),
                    v,
                    ((r = {}),
                    (0, u.Z)(r, "".concat(i, "-inline-collapsed"), Fe),
                    (0, u.Z)(r, "".concat(i, "-rtl"), Re),
                    r)
                  ),
                  dir: E,
                  style: l,
                  role: "menu",
                  tabIndex: g,
                  data: On,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var n = e.length,
                      t = n ? Ce.slice(-n) : null;
                    return c.createElement(
                      ve,
                      {
                        eventKey: Te,
                        title: de,
                        disabled: $e,
                        internalPopupClose: 0 === n,
                        popupClassName: fe,
                      },
                      t
                    );
                  },
                  maxCount:
                    "horizontal" !== _e || O ? b.Z.INVALIDATE : b.Z.RESPONSIVE,
                  ssr: "full",
                  "data-menu-list": !0,
                  onVisibleChange: function (e) {
                    Be(e);
                  },
                  onKeyDown: Sn,
                },
                be
              )
            );
          return c.createElement(
            F.Provider,
            { value: In },
            c.createElement(
              z.Provider,
              { value: Se },
              c.createElement(
                M,
                {
                  prefixCls: i,
                  mode: _e,
                  openKeys: Ue,
                  rtl: Re,
                  disabled: S,
                  motion: Ne ? re : null,
                  defaultMotions: Ne ? oe : null,
                  activeKey: yn,
                  onActive: gn,
                  onInactive: bn,
                  selectedKeys: xn,
                  inlineIndent: te,
                  subMenuOpenDelay: R,
                  subMenuCloseDelay: L,
                  forceSubMenuRender: A,
                  builtinPlacements: ae,
                  triggerSubMenuAction: le,
                  getPopupContainer: Pn,
                  itemIcon: ce,
                  expandIcon: ue,
                  onItemClick: wn,
                  onOpenChange: Mn,
                },
                c.createElement(D.Provider, { value: vn }, kn),
                c.createElement(
                  "div",
                  { style: { display: "none" }, "aria-hidden": !0 },
                  c.createElement(K.Provider, { value: pn }, Ce)
                )
              )
            )
          );
        }),
        _e = ["className", "title", "eventKey", "children"],
        Fe = ["children"],
        Ve = function (e) {
          var n = e.className,
            t = e.title,
            r = (e.eventKey, e.children),
            o = (0, p.Z)(e, _e),
            i = c.useContext(w).prefixCls,
            l = "".concat(i, "-item-group");
          return c.createElement(
            "li",
            (0, a.Z)({}, o, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: m()(l, n),
            }),
            c.createElement(
              "div",
              {
                className: "".concat(l, "-title"),
                title: "string" === typeof t ? t : void 0,
              },
              t
            ),
            c.createElement("ul", { className: "".concat(l, "-list") }, r)
          );
        };
      function He(e) {
        var n = e.children,
          t = (0, p.Z)(e, Fe),
          r = U(n, A(t.eventKey));
        return T() ? r : c.createElement(Ve, (0, E.Z)(t, ["warnKey"]), r);
      }
      function We(e) {
        var n = e.className,
          t = e.style,
          r = c.useContext(w).prefixCls;
        return T()
          ? null
          : c.createElement("li", {
              className: m()("".concat(r, "-item-divider"), n),
              style: t,
            });
      }
      var Be = A,
        $e = je;
      ($e.Item = q), ($e.SubMenu = ve), ($e.ItemGroup = He), ($e.Divider = We);
      var qe = $e,
        Ge = t(5033),
        Ue = (0, c.createContext)({
          prefixCls: "",
          firstLevel: !0,
          inlineCollapsed: !1,
        }),
        Qe = t(1113);
      var Xe = function (e) {
          var n,
            t,
            r = e.popupClassName,
            o = e.icon,
            i = e.title,
            l = e.theme,
            u = c.useContext(Ue),
            s = u.prefixCls,
            d = u.inlineCollapsed,
            f = u.antdMenuTheme,
            p = Be();
          if (o) {
            var v = (0, Qe.l$)(i) && "span" === i.type;
            t = c.createElement(
              c.Fragment,
              null,
              (0, Qe.Tm)(o, {
                className: m()(
                  (0, Qe.l$)(o)
                    ? null === (n = o.props) || void 0 === n
                      ? void 0
                      : n.className
                    : "",
                  "".concat(s, "-item-icon")
                ),
              }),
              v
                ? i
                : c.createElement(
                    "span",
                    { className: "".concat(s, "-title-content") },
                    i
                  )
            );
          } else
            t =
              d && !p.length && i && "string" === typeof i
                ? c.createElement(
                    "div",
                    { className: "".concat(s, "-inline-collapsed-noicon") },
                    i.charAt(0)
                  )
                : c.createElement(
                    "span",
                    { className: "".concat(s, "-title-content") },
                    i
                  );
          var h = c.useMemo(
            function () {
              return (0, a.Z)((0, a.Z)({}, u), { firstLevel: !1 });
            },
            [u]
          );
          return c.createElement(
            Ue.Provider,
            { value: h },
            c.createElement(
              ve,
              (0, a.Z)({}, (0, E.Z)(e, ["icon"]), {
                title: t,
                popupClassName: m()(s, "".concat(s, "-").concat(l || f), r),
              })
            )
          );
        },
        Ye = t(9220),
        Je = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z",
                },
              },
            ],
          },
          name: "bars",
          theme: "outlined",
        },
        en = t(4291),
        nn = function (e, n) {
          return c.createElement(
            en.Z,
            (0, s.Z)((0, s.Z)({}, e), {}, { ref: n, icon: Je })
          );
        };
      nn.displayName = "BarsOutlined";
      var tn = c.forwardRef(nn),
        rn = t(1938),
        on = t(6864),
        ln = t(9077),
        an = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              n.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (t[r[o]] = e[r[o]]);
          }
          return t;
        },
        cn = c.createContext({
          siderHook: {
            addSider: function () {
              return null;
            },
            removeSider: function () {
              return null;
            },
          },
        });
      function un(e) {
        var n = e.suffixCls,
          t = e.tagName,
          r = e.displayName;
        return function (e) {
          var o = c.forwardRef(function (r, o) {
            var i = c.useContext(ln.E_).getPrefixCls,
              l = r.prefixCls,
              u = i(n, l);
            return c.createElement(
              e,
              (0, a.Z)({ ref: o, prefixCls: u, tagName: t }, r)
            );
          });
          return (o.displayName = r), o;
        };
      }
      var sn = c.forwardRef(function (e, n) {
          var t = e.prefixCls,
            r = e.className,
            o = e.children,
            i = e.tagName,
            l = an(e, ["prefixCls", "className", "children", "tagName"]),
            u = m()(t, r);
          return c.createElement(
            i,
            (0, a.Z)((0, a.Z)({ className: u }, l), { ref: n }),
            o
          );
        }),
        dn = c.forwardRef(function (e, n) {
          var t,
            r = c.useContext(ln.E_).direction,
            o = c.useState([]),
            i = (0, f.Z)(o, 2),
            l = i[0],
            s = i[1],
            p = e.prefixCls,
            v = e.className,
            h = e.children,
            y = e.hasSider,
            Z = e.tagName,
            g = an(e, [
              "prefixCls",
              "className",
              "children",
              "hasSider",
              "tagName",
            ]),
            b = m()(
              p,
              ((t = {}),
              (0, u.Z)(
                t,
                "".concat(p, "-has-sider"),
                "boolean" === typeof y ? y : l.length > 0
              ),
              (0, u.Z)(t, "".concat(p, "-rtl"), "rtl" === r),
              t),
              v
            ),
            C = c.useMemo(function () {
              return {
                siderHook: {
                  addSider: function (e) {
                    s(function (n) {
                      return [].concat((0, d.Z)(n), [e]);
                    });
                  },
                  removeSider: function (e) {
                    s(function (n) {
                      return n.filter(function (n) {
                        return n !== e;
                      });
                    });
                  },
                },
              };
            }, []);
          return c.createElement(
            cn.Provider,
            { value: C },
            c.createElement(Z, (0, a.Z)({ ref: n, className: b }, g), h)
          );
        }),
        fn =
          (un({
            suffixCls: "layout",
            tagName: "section",
            displayName: "Layout",
          })(dn),
          un({
            suffixCls: "layout-header",
            tagName: "header",
            displayName: "Header",
          })(sn),
          un({
            suffixCls: "layout-footer",
            tagName: "footer",
            displayName: "Footer",
          })(sn),
          un({
            suffixCls: "layout-content",
            tagName: "main",
            displayName: "Content",
          })(sn),
          function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          }),
        pn = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              n.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (t[r[o]] = e[r[o]]);
          }
          return t;
        },
        vn = {
          xs: "479.98px",
          sm: "575.98px",
          md: "767.98px",
          lg: "991.98px",
          xl: "1199.98px",
          xxl: "1599.98px",
        },
        mn = c.createContext({}),
        hn = (function () {
          var e = 0;
          return function () {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return (e += 1), "".concat(n).concat(e);
          };
        })(),
        yn = c.forwardRef(function (e, n) {
          var t = e.prefixCls,
            r = e.className,
            o = e.trigger,
            i = e.children,
            l = e.defaultCollapsed,
            s = void 0 !== l && l,
            d = e.theme,
            p = void 0 === d ? "dark" : d,
            v = e.style,
            h = void 0 === v ? {} : v,
            y = e.collapsible,
            Z = void 0 !== y && y,
            g = e.reverseArrow,
            b = void 0 !== g && g,
            C = e.width,
            x = void 0 === C ? 200 : C,
            N = e.collapsedWidth,
            w = void 0 === N ? 80 : N,
            M = e.zeroWidthTriggerStyle,
            P = e.breakpoint,
            S = e.onCollapse,
            I = e.onBreakpoint,
            O = pn(e, [
              "prefixCls",
              "className",
              "trigger",
              "children",
              "defaultCollapsed",
              "theme",
              "style",
              "collapsible",
              "reverseArrow",
              "width",
              "collapsedWidth",
              "zeroWidthTriggerStyle",
              "breakpoint",
              "onCollapse",
              "onBreakpoint",
            ]),
            k = (0, c.useContext)(cn).siderHook,
            R = (0, c.useState)("collapsed" in O ? O.collapsed : s),
            K = (0, f.Z)(R, 2),
            T = K[0],
            L = K[1],
            A = (0, c.useState)(!1),
            D = (0, f.Z)(A, 2),
            z = D[0],
            j = D[1];
          (0, c.useEffect)(
            function () {
              "collapsed" in O && L(O.collapsed);
            },
            [O.collapsed]
          );
          var _ = function (e, n) {
              "collapsed" in O || L(e), null === S || void 0 === S || S(e, n);
            },
            F = (0, c.useRef)();
          (F.current = function (e) {
            j(e.matches),
              null === I || void 0 === I || I(e.matches),
              T !== e.matches && _(e.matches, "responsive");
          }),
            (0, c.useEffect)(
              function () {
                function e(e) {
                  return F.current(e);
                }
                var n;
                if ("undefined" !== typeof window) {
                  var t = window.matchMedia;
                  if (t && P && P in vn) {
                    n = t("(max-width: ".concat(vn[P], ")"));
                    try {
                      n.addEventListener("change", e);
                    } catch (r) {
                      n.addListener(e);
                    }
                    e(n);
                  }
                }
                return function () {
                  try {
                    null === n ||
                      void 0 === n ||
                      n.removeEventListener("change", e);
                  } catch (r) {
                    null === n || void 0 === n || n.removeListener(e);
                  }
                };
              },
              [P]
            ),
            (0, c.useEffect)(function () {
              var e = hn("ant-sider-");
              return (
                k.addSider(e),
                function () {
                  return k.removeSider(e);
                }
              );
            }, []);
          var V = function () {
              _(!T, "clickTrigger");
            },
            H = (0, c.useContext)(ln.E_).getPrefixCls,
            W = c.useMemo(
              function () {
                return { siderCollapsed: T };
              },
              [T]
            );
          return c.createElement(
            mn.Provider,
            { value: W },
            (function () {
              var e,
                l = H("layout-sider", t),
                s = (0, E.Z)(O, ["collapsed"]),
                d = T ? w : x,
                f = fn(d) ? "".concat(d, "px") : String(d),
                v =
                  0 === parseFloat(String(w || 0))
                    ? c.createElement(
                        "span",
                        {
                          onClick: V,
                          className: m()(
                            "".concat(l, "-zero-width-trigger"),
                            ""
                              .concat(l, "-zero-width-trigger-")
                              .concat(b ? "right" : "left")
                          ),
                          style: M,
                        },
                        o || c.createElement(tn, null)
                      )
                    : null,
                y = {
                  expanded: b
                    ? c.createElement(rn.Z, null)
                    : c.createElement(on.Z, null),
                  collapsed: b
                    ? c.createElement(on.Z, null)
                    : c.createElement(rn.Z, null),
                }[T ? "collapsed" : "expanded"],
                g =
                  null !== o
                    ? v ||
                      c.createElement(
                        "div",
                        {
                          className: "".concat(l, "-trigger"),
                          onClick: V,
                          style: { width: f },
                        },
                        o || y
                      )
                    : null,
                C = (0, a.Z)((0, a.Z)({}, h), {
                  flex: "0 0 ".concat(f),
                  maxWidth: f,
                  minWidth: f,
                  width: f,
                }),
                N = m()(
                  l,
                  "".concat(l, "-").concat(p),
                  ((e = {}),
                  (0, u.Z)(e, "".concat(l, "-collapsed"), !!T),
                  (0, u.Z)(
                    e,
                    "".concat(l, "-has-trigger"),
                    Z && null !== o && !v
                  ),
                  (0, u.Z)(e, "".concat(l, "-below"), !!z),
                  (0, u.Z)(e, "".concat(l, "-zero-width"), 0 === parseFloat(f)),
                  e),
                  r
                );
              return c.createElement(
                "aside",
                (0, a.Z)({ className: N }, s, { style: C, ref: n }),
                c.createElement(
                  "div",
                  { className: "".concat(l, "-children") },
                  i
                ),
                Z || (z && v) ? g : null
              );
            })()
          );
        });
      yn.displayName = "Sider";
      var Zn = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              n.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (t[r[o]] = e[r[o]]);
          }
          return t;
        },
        gn = (function (e) {
          (0, i.Z)(t, e);
          var n = (0, l.Z)(t);
          function t() {
            var e;
            return (
              (0, r.Z)(this, t),
              ((e = n.apply(this, arguments)).renderItem = function (n) {
                var t,
                  r,
                  o = n.siderCollapsed,
                  i = e.context,
                  l = i.prefixCls,
                  s = i.firstLevel,
                  d = i.inlineCollapsed,
                  f = i.direction,
                  p = i.disableMenuItemTitleTooltip,
                  v = e.props,
                  h = v.className,
                  y = v.children,
                  Z = e.props,
                  g = Z.title,
                  b = Z.icon,
                  C = Z.danger,
                  E = Zn(Z, ["title", "icon", "danger"]),
                  x = g;
                "undefined" === typeof g
                  ? (x = s ? y : "")
                  : !1 === g && (x = "");
                var N = { title: x };
                o || d || ((N.title = null), (N.visible = !1));
                var w = (0, G.Z)(y).length,
                  M = c.createElement(
                    q,
                    (0, a.Z)({}, E, {
                      className: m()(
                        ((t = {}),
                        (0, u.Z)(t, "".concat(l, "-item-danger"), C),
                        (0, u.Z)(
                          t,
                          "".concat(l, "-item-only-child"),
                          1 === (b ? w + 1 : w)
                        ),
                        t),
                        h
                      ),
                      title: "string" === typeof g ? g : void 0,
                    }),
                    (0, Qe.Tm)(b, {
                      className: m()(
                        (0, Qe.l$)(b)
                          ? null === (r = b.props) || void 0 === r
                            ? void 0
                            : r.className
                          : "",
                        "".concat(l, "-item-icon")
                      ),
                    }),
                    e.renderItemChildren(d)
                  );
                return (
                  p ||
                    (M = c.createElement(
                      Ye.Z,
                      (0, a.Z)({}, N, {
                        placement: "rtl" === f ? "left" : "right",
                        overlayClassName: "".concat(
                          l,
                          "-inline-collapsed-tooltip"
                        ),
                      }),
                      M
                    )),
                  M
                );
              }),
              e
            );
          }
          return (
            (0, o.Z)(t, [
              {
                key: "renderItemChildren",
                value: function (e) {
                  var n = this.context,
                    t = n.prefixCls,
                    r = n.firstLevel,
                    o = this.props,
                    i = o.icon,
                    l = o.children,
                    a = c.createElement(
                      "span",
                      { className: "".concat(t, "-title-content") },
                      l
                    );
                  return (!i || ((0, Qe.l$)(l) && "span" === l.type)) &&
                    l &&
                    e &&
                    r &&
                    "string" === typeof l
                    ? c.createElement(
                        "div",
                        { className: "".concat(t, "-inline-collapsed-noicon") },
                        l.charAt(0)
                      )
                    : a;
                },
              },
              {
                key: "render",
                value: function () {
                  return c.createElement(mn.Consumer, null, this.renderItem);
                },
              },
            ]),
            t
          );
        })(c.Component);
      gn.contextType = Ue;
      var bn = t(4824),
        Cn = t(9464),
        En = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              n.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (t[r[o]] = e[r[o]]);
          }
          return t;
        },
        xn = function (e) {
          var n = e.prefixCls,
            t = e.className,
            r = e.dashed,
            o = En(e, ["prefixCls", "className", "dashed"]),
            i = (0, c.useContext(ln.E_).getPrefixCls)("menu", n),
            l = m()((0, u.Z)({}, "".concat(i, "-item-divider-dashed"), !!r), t);
          return c.createElement(We, (0, a.Z)({ className: l }, o));
        },
        Nn = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              n.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (t[r[o]] = e[r[o]]);
          }
          return t;
        };
      function wn(e) {
        var n = c.useContext(ln.E_),
          t = n.getPrefixCls,
          r = n.getPopupContainer,
          o = n.direction,
          i = t(),
          l = e.prefixCls,
          u = e.className,
          s = e.theme,
          d = void 0 === s ? "light" : s,
          f = e.expandIcon,
          p = e._internalDisableMenuItemTitleTooltip,
          v = e.inlineCollapsed,
          h = e.siderCollapsed,
          y = Nn(e, [
            "prefixCls",
            "className",
            "theme",
            "expandIcon",
            "_internalDisableMenuItemTitleTooltip",
            "inlineCollapsed",
            "siderCollapsed",
          ]),
          Z = (0, E.Z)(y, ["collapsedWidth"]);
        (0, bn.Z)(
          !("inlineCollapsed" in e && "inline" !== e.mode),
          "Menu",
          "`inlineCollapsed` should only be used when `mode` is inline."
        ),
          (0, bn.Z)(
            !(void 0 !== e.siderCollapsed && "inlineCollapsed" in e),
            "Menu",
            "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."
          );
        var g = c.useMemo(
            function () {
              return void 0 !== h ? h : v;
            },
            [v, h]
          ),
          b = {
            horizontal: { motionName: "".concat(i, "-slide-up") },
            inline: Cn.ZP,
            other: { motionName: "".concat(i, "-zoom-big") },
          },
          C = t("menu", l),
          x = m()("".concat(C, "-").concat(d), u),
          N = c.useMemo(
            function () {
              return {
                prefixCls: C,
                inlineCollapsed: g || !1,
                antdMenuTheme: d,
                direction: o,
                firstLevel: !0,
                disableMenuItemTitleTooltip: p,
              };
            },
            [C, g, d, o, p]
          );
        return c.createElement(
          Ue.Provider,
          { value: N },
          c.createElement(
            qe,
            (0, a.Z)(
              {
                getPopupContainer: r,
                overflowedIndicator: c.createElement(Ge.Z, null),
                overflowedIndicatorPopupClassName: "".concat(C, "-").concat(d),
              },
              Z,
              {
                inlineCollapsed: g,
                className: x,
                prefixCls: C,
                direction: o,
                defaultMotions: b,
                expandIcon: (0, Qe.Tm)(f, {
                  className: "".concat(C, "-submenu-expand-icon"),
                }),
              }
            )
          )
        );
      }
      var Mn = (function (e) {
        (0, i.Z)(t, e);
        var n = (0, l.Z)(t);
        function t() {
          return (0, r.Z)(this, t), n.apply(this, arguments);
        }
        return (
          (0, o.Z)(t, [
            {
              key: "render",
              value: function () {
                var e = this;
                return c.createElement(mn.Consumer, null, function (n) {
                  return c.createElement(wn, (0, a.Z)({}, e.props, n));
                });
              },
            },
          ]),
          t
        );
      })(c.Component);
      (Mn.Divider = xn), (Mn.Item = gn), (Mn.SubMenu = Xe), (Mn.ItemGroup = He);
      var Pn = Mn;
    },
  },
]);
//# sourceMappingURL=697.d1748d36.chunk.js.map
