"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [398],
  {
    5398: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return x;
          },
        });
      n(2791);
      var t = n(2419),
        a = n(2065),
        c = n(9220),
        s = n(7309),
        l = n(8704),
        i = n(8957),
        o = n(8717),
        u = n(5861),
        d = n(7757),
        E = n.n(d),
        f = n(6038),
        N = n(8820),
        m = n(577),
        p = n(9126),
        v = n(1033),
        C = n(783),
        _ = n(6871),
        T = n(184);
      function O(e) {
        var r = e.role,
          n = (0, _.s0)(),
          l = (0, t.ZP)("/roles?role=".concat(r.role), a.Z).data,
          i = l && l.data,
          o = (function () {
            var e = (0, u.Z)(
              E().mark(function e(r) {
                return E().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            v.Z.delete("/roles/".concat(r._id))
                          );
                        case 3:
                          m.Am.success("Role deleted successfully!"),
                            (0, t.JG)("/roles"),
                            (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            m.Am.error(e.t0.response.data.message);
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
            return function (r) {
              return e.apply(this, arguments);
            };
          })();
        return (0, T.jsx)(T.Fragment, {
          children: (0, T.jsxs)("div", {
            className:
              "my-3 shadow-md hover:shadow-lg normal-transition pl-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-between",
            children: [
              (0, T.jsxs)("button", {
                className: "flex items-center",
                onClick: function () {
                  return n("/role-management/".concat(r._id));
                },
                children: [
                  (0, T.jsx)("div", {
                    className:
                      "mr-2 flex justify-center items-center rounded-full dark:bg-gray-600 bg-gray-300",
                    children: (0, T.jsx)(p._Tb, {
                      size: 30,
                      className: "dark:text-white",
                    }),
                  }),
                  (0, T.jsx)("div", {
                    className: "overflow-hidden",
                    children: (0, T.jsxs)("p", {
                      className: "font-medium dark:text-white text-lg truncate",
                      children: [(0, C.Z)(r.role), " (", i, ")"],
                    }),
                  }),
                ],
              }),
              (0, T.jsx)("div", {
                children: (0, T.jsx)(c.Z, {
                  title: "Delete role",
                  children: (0, T.jsx)(f.Z, {
                    title: "Are you sure to delete this role?",
                    onConfirm: function () {
                      return o(r);
                    },
                    okText: "Yes",
                    cancelText: "No",
                    children: (0, T.jsx)(s.Z, {
                      type: "ghost",
                      shape: "default",
                      className:
                        "mr-2 dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                      icon: (0, T.jsx)("div", {
                        className: "flex justify-center items-center",
                        children: (0, T.jsx)(N.YK6, {}),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var x = function () {
        var e = (0, l.b)(),
          r = e.auth,
          n = e.sideBar,
          u = (0, t.ZP)("/roles", a.Z).data,
          d = (0, _.s0)(),
          E = u && u.data;
        if (!r || "superAdmin" !== !r.user.role)
          return (0, T.jsxs)(T.Fragment, {
            children: [
              (0, T.jsx)(o.Z, {
                details: [
                  { isLink: !0, link: "/", name: "Home" },
                  {
                    isLink: !1,
                    link: "/role-management",
                    name: "Role Management",
                  },
                ],
              }),
              (0, T.jsxs)("div", {
                className: "my-5",
                children: [
                  (0, T.jsx)(c.Z, {
                    title: "Create Role",
                    children: (0, T.jsx)(s.Z, {
                      onClick: function () {
                        return d("/create-role");
                      },
                      type: "ghost",
                      shape: "default",
                      className:
                        "mr-1 flex py-5 items-center shadow-md dark:bg-deepDark dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                      children: (0, T.jsx)("span", {
                        className: "",
                        children: "Create Role",
                      }),
                    }),
                  }),
                  (0, T.jsx)("div", {
                    className: n.isOpen
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
                      : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3",
                    children:
                      E &&
                      E.filter(function (e) {
                        return "superadmin" !== e.role;
                      }).map(function (e) {
                        return (0, T.jsx)(O, { role: e }, e._id);
                      }),
                  }),
                ],
              }),
            ],
          });
        i.Z;
      };
    },
    1783: function (e, r, n) {
      var t = n(7462),
        a = n(9439),
        c = n(2791),
        s = n(8368),
        l = n(7309),
        i = n(6417);
      function o(e) {
        return !(!e || !e.then);
      }
      r.Z = function (e) {
        var r = c.useRef(!1),
          n = c.useRef(),
          u = (0, s.Z)(!1),
          d = (0, a.Z)(u, 2),
          E = d[0],
          f = d[1];
        c.useEffect(function () {
          var r;
          if (e.autoFocus) {
            var t = n.current;
            r = setTimeout(function () {
              return t.focus();
            });
          }
          return function () {
            r && clearTimeout(r);
          };
        }, []);
        var N = e.type,
          m = e.children,
          p = e.prefixCls,
          v = e.buttonProps;
        return c.createElement(
          l.Z,
          (0, t.Z)(
            {},
            (0, i.n)(N),
            {
              onClick: function (n) {
                var t = e.actionFn,
                  a = e.close;
                if (!r.current)
                  if (((r.current = !0), t)) {
                    var c;
                    if (e.emitEvent) {
                      if (((c = t(n)), e.quitOnNullishReturnValue && !o(c)))
                        return (r.current = !1), void a(n);
                    } else if (t.length) (c = t(a)), (r.current = !1);
                    else if (!(c = t())) return void a();
                    !(function (n) {
                      var t = e.close;
                      o(n) &&
                        (f(!0),
                        n.then(
                          function () {
                            f(!1, !0),
                              t.apply(void 0, arguments),
                              (r.current = !1);
                          },
                          function (e) {
                            console.error(e), f(!1, !0), (r.current = !1);
                          }
                        ));
                    })(c);
                  } else a();
              },
              loading: E,
              prefixCls: p,
            },
            v,
            { ref: n }
          ),
          m
        );
      };
    },
    7924: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return t;
        },
      });
      var t = function (e) {
        return e ? ("function" === typeof e ? e() : e) : null;
      };
    },
    6038: function (e, r, n) {
      var t = n(7462),
        a = n(9439),
        c = n(2791),
        s = n(1694),
        l = n.n(s),
        i = n(5179),
        o = n(187),
        u = n(1354),
        d = n(9220),
        E = n(7309),
        f = n(6417),
        N = n(3486),
        m = n(454),
        p = n(9077),
        v = n(7924),
        C = n(1113),
        _ = n(9464),
        T = n(1783),
        O = void 0,
        x = function (e, r) {
          var n = {};
          for (var t in e)
            Object.prototype.hasOwnProperty.call(e, t) &&
              r.indexOf(t) < 0 &&
              (n[t] = e[t]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (t = Object.getOwnPropertySymbols(e); a < t.length; a++)
              r.indexOf(t[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, t[a]) &&
                (n[t[a]] = e[t[a]]);
          }
          return n;
        },
        h = c.forwardRef(function (e, r) {
          var n = c.useContext(p.E_).getPrefixCls,
            s = (0, i.Z)(!1, {
              value: e.visible,
              defaultValue: e.defaultVisible,
            }),
            o = (0, a.Z)(s, 2),
            h = o[0],
            S = o[1],
            A = function (r, n) {
              var t;
              S(r, !0),
                null === (t = e.onVisibleChange) ||
                  void 0 === t ||
                  t.call(e, r, n);
            },
            M = function (e) {
              A(!1, e);
            },
            U = function (r) {
              var n;
              return null === (n = e.onConfirm) || void 0 === n
                ? void 0
                : n.call(O, r);
            },
            g = function (r) {
              var n;
              A(!1, r),
                null === (n = e.onCancel) || void 0 === n || n.call(O, r);
            },
            R = e.prefixCls,
            y = e.placement,
            I = e.children,
            P = e.overlayClassName,
            Z = x(e, [
              "prefixCls",
              "placement",
              "children",
              "overlayClassName",
            ]),
            b = n("popover", R),
            k = n("popconfirm", R),
            L = l()(k, P),
            F = c.createElement(
              N.Z,
              { componentName: "Popconfirm", defaultLocale: m.Z.Popconfirm },
              function (r) {
                return (function (r, a) {
                  var s = e.okButtonProps,
                    l = e.cancelButtonProps,
                    i = e.title,
                    o = e.cancelText,
                    u = e.okText,
                    d = e.okType,
                    N = e.icon,
                    m = e.showCancel,
                    p = void 0 === m || m;
                  return c.createElement(
                    "div",
                    { className: "".concat(r, "-inner-content") },
                    c.createElement(
                      "div",
                      { className: "".concat(r, "-message") },
                      N,
                      c.createElement(
                        "div",
                        { className: "".concat(r, "-message-title") },
                        (0, v.Z)(i)
                      )
                    ),
                    c.createElement(
                      "div",
                      { className: "".concat(r, "-buttons") },
                      p &&
                        c.createElement(
                          E.Z,
                          (0, t.Z)({ onClick: g, size: "small" }, l),
                          o || a.cancelText
                        ),
                      c.createElement(
                        T.Z,
                        {
                          buttonProps: (0, t.Z)(
                            (0, t.Z)({ size: "small" }, (0, f.n)(d)),
                            s
                          ),
                          actionFn: U,
                          close: M,
                          prefixCls: n("btn"),
                          quitOnNullishReturnValue: !0,
                          emitEvent: !0,
                        },
                        u || a.okText
                      )
                    )
                  );
                })(b, r);
              }
            ),
            j = n();
          return c.createElement(
            d.Z,
            (0, t.Z)({}, Z, {
              prefixCls: b,
              placement: y,
              onVisibleChange: function (r) {
                e.disabled || A(r);
              },
              visible: h,
              overlay: F,
              overlayClassName: L,
              ref: r,
              transitionName: (0, _.mL)(j, "zoom-big", e.transitionName),
            }),
            (0, C.Tm)(I, {
              onKeyDown: function (e) {
                var r, n;
                c.isValidElement(I) &&
                  (null ===
                    (n =
                      null === I || void 0 === I
                        ? void 0
                        : (r = I.props).onKeyDown) ||
                    void 0 === n ||
                    n.call(r, e)),
                  (function (e) {
                    e.keyCode === u.Z.ESC && h && A(!1, e);
                  })(e);
              },
            })
          );
        });
      (h.defaultProps = {
        placement: "top",
        trigger: "click",
        okType: "primary",
        icon: c.createElement(o.Z, null),
        disabled: !1,
      }),
        (r.Z = h);
    },
    1354: function (e, r) {
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
          var r = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (r >= n.F1 && r <= n.F12)
          )
            return !1;
          switch (r) {
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
      r.Z = n;
    },
  },
]);
//# sourceMappingURL=398.728a9ca3.chunk.js.map
