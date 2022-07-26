"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [398],
  {
    5398: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return h;
          },
        });
      r(2791);
      var t = r(2419),
        a = r(2065),
        c = r(9220),
        i = r(7309),
        l = r(8704),
        s = r(8957),
        o = r(8717),
        u = r(5861),
        d = r(7757),
        f = r.n(d),
        E = r(6038),
        N = r(8820),
        m = r(577),
        p = r(9126),
        v = r(1033),
        C = r(783),
        _ = r(6871),
        T = r(184);
      function O(e) {
        var n = e.role,
          r = (0, _.s0)(),
          l = (0, t.ZP)("/roles?role=".concat(n.role), a.Z).data,
          s = l && l.data,
          o = (function () {
            var e = (0, u.Z)(
              f().mark(function e(n) {
                return f().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            v.Z.delete("/roles/".concat(n._id))
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
            return function (n) {
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
                  return r("/role-management/".concat(n._id));
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
                      children: [(0, C.Z)(n.role), " (", s, ")"],
                    }),
                  }),
                ],
              }),
              (0, T.jsx)("div", {
                children: (0, T.jsx)(c.Z, {
                  title: "Delete role",
                  children: (0, T.jsx)(E.Z, {
                    title: "Are you sure to delete this role?",
                    onConfirm: function () {
                      return o(n);
                    },
                    okText: "Yes",
                    cancelText: "No",
                    children: (0, T.jsx)(i.Z, {
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
      var h = function () {
        var e = (0, l.b)(),
          n = e.auth,
          r = e.sideBar,
          u = (0, t.ZP)("/roles", a.Z).data,
          d = (0, _.s0)(),
          f = u && u.data;
        if (!n || "superAdmin" !== !n.user.role)
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
                    children: (0, T.jsx)(i.Z, {
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
                    className: r.isOpen
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
                      : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3",
                    children:
                      f &&
                      f
                        .filter(function (e) {
                          return "superadmin" !== e.role;
                        })
                        .map(function (e) {
                          return (0, T.jsx)(O, { role: e }, e._id);
                        }),
                  }),
                ],
              }),
            ],
          });
        s.Z;
      };
    },
    783: function (e, n, r) {
      function t(e) {
        return (null === e || void 0 === e ? void 0 : e.split(" ").length) > 1
          ? e
              .split(" ")
              .map(function (e) {
                return t(e);
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
      r.d(n, {
        Z: function () {
          return t;
        },
      });
    },
    1783: function (e, n, r) {
      var t = r(7462),
        a = r(9439),
        c = r(2791),
        i = r(8368),
        l = r(7309),
        s = r(6417);
      function o(e) {
        return !(!e || !e.then);
      }
      n.Z = function (e) {
        var n = c.useRef(!1),
          r = c.useRef(),
          u = (0, i.Z)(!1),
          d = (0, a.Z)(u, 2),
          f = d[0],
          E = d[1];
        c.useEffect(function () {
          var n;
          if (e.autoFocus) {
            var t = r.current;
            n = setTimeout(function () {
              return t.focus();
            });
          }
          return function () {
            n && clearTimeout(n);
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
            (0, s.n)(N),
            {
              onClick: function (r) {
                var t = e.actionFn,
                  a = e.close;
                if (!n.current)
                  if (((n.current = !0), t)) {
                    var c;
                    if (e.emitEvent) {
                      if (((c = t(r)), e.quitOnNullishReturnValue && !o(c)))
                        return (n.current = !1), void a(r);
                    } else if (t.length) (c = t(a)), (n.current = !1);
                    else if (!(c = t())) return void a();
                    !(function (r) {
                      var t = e.close;
                      o(r) &&
                        (E(!0),
                        r.then(
                          function () {
                            E(!1, !0),
                              t.apply(void 0, arguments),
                              (n.current = !1);
                          },
                          function (e) {
                            console.error(e), E(!1, !0), (n.current = !1);
                          }
                        ));
                    })(c);
                  } else a();
              },
              loading: f,
              prefixCls: p,
            },
            v,
            { ref: r }
          ),
          m
        );
      };
    },
    7924: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return t;
        },
      });
      var t = function (e) {
        return e ? ("function" === typeof e ? e() : e) : null;
      };
    },
    6038: function (e, n, r) {
      var t = r(7462),
        a = r(9439),
        c = r(2791),
        i = r(1694),
        l = r.n(i),
        s = r(5179),
        o = r(187),
        u = r(1354),
        d = r(9220),
        f = r(7309),
        E = r(6417),
        N = r(3486),
        m = r(454),
        p = r(9077),
        v = r(7924),
        C = r(1113),
        _ = r(9464),
        T = r(1783),
        O = void 0,
        h = function (e, n) {
          var r = {};
          for (var t in e)
            Object.prototype.hasOwnProperty.call(e, t) &&
              n.indexOf(t) < 0 &&
              (r[t] = e[t]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (t = Object.getOwnPropertySymbols(e); a < t.length; a++)
              n.indexOf(t[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, t[a]) &&
                (r[t[a]] = e[t[a]]);
          }
          return r;
        },
        x = c.forwardRef(function (e, n) {
          var r = c.useContext(p.E_).getPrefixCls,
            i = (0, s.Z)(!1, {
              value: e.visible,
              defaultValue: e.defaultVisible,
            }),
            o = (0, a.Z)(i, 2),
            x = o[0],
            S = o[1],
            A = function (n, r) {
              var t;
              S(n, !0),
                null === (t = e.onVisibleChange) ||
                  void 0 === t ||
                  t.call(e, n, r);
            },
            U = function (e) {
              A(!1, e);
            },
            g = function (n) {
              var r;
              return null === (r = e.onConfirm) || void 0 === r
                ? void 0
                : r.call(O, n);
            },
            M = function (n) {
              var r;
              A(!1, n),
                null === (r = e.onCancel) || void 0 === r || r.call(O, n);
            },
            R = e.prefixCls,
            y = e.placement,
            I = e.children,
            P = e.overlayClassName,
            Z = h(e, [
              "prefixCls",
              "placement",
              "children",
              "overlayClassName",
            ]),
            b = r("popover", R),
            k = r("popconfirm", R),
            L = l()(k, P),
            F = c.createElement(
              N.Z,
              { componentName: "Popconfirm", defaultLocale: m.Z.Popconfirm },
              function (n) {
                return (function (n, a) {
                  var i = e.okButtonProps,
                    l = e.cancelButtonProps,
                    s = e.title,
                    o = e.cancelText,
                    u = e.okText,
                    d = e.okType,
                    N = e.icon,
                    m = e.showCancel,
                    p = void 0 === m || m;
                  return c.createElement(
                    "div",
                    { className: "".concat(n, "-inner-content") },
                    c.createElement(
                      "div",
                      { className: "".concat(n, "-message") },
                      N,
                      c.createElement(
                        "div",
                        { className: "".concat(n, "-message-title") },
                        (0, v.Z)(s)
                      )
                    ),
                    c.createElement(
                      "div",
                      { className: "".concat(n, "-buttons") },
                      p &&
                        c.createElement(
                          f.Z,
                          (0, t.Z)({ onClick: M, size: "small" }, l),
                          o || a.cancelText
                        ),
                      c.createElement(
                        T.Z,
                        {
                          buttonProps: (0, t.Z)(
                            (0, t.Z)({ size: "small" }, (0, E.n)(d)),
                            i
                          ),
                          actionFn: g,
                          close: U,
                          prefixCls: r("btn"),
                          quitOnNullishReturnValue: !0,
                          emitEvent: !0,
                        },
                        u || a.okText
                      )
                    )
                  );
                })(b, n);
              }
            ),
            j = r();
          return c.createElement(
            d.Z,
            (0, t.Z)({}, Z, {
              prefixCls: b,
              placement: y,
              onVisibleChange: function (n) {
                e.disabled || A(n);
              },
              visible: x,
              overlay: F,
              overlayClassName: L,
              ref: n,
              transitionName: (0, _.mL)(j, "zoom-big", e.transitionName),
            }),
            (0, C.Tm)(I, {
              onKeyDown: function (e) {
                var n, r;
                c.isValidElement(I) &&
                  (null ===
                    (r =
                      null === I || void 0 === I
                        ? void 0
                        : (n = I.props).onKeyDown) ||
                    void 0 === r ||
                    r.call(n, e)),
                  (function (e) {
                    e.keyCode === u.Z.ESC && x && A(!1, e);
                  })(e);
              },
            })
          );
        });
      (x.defaultProps = {
        placement: "top",
        trigger: "click",
        okType: "primary",
        icon: c.createElement(o.Z, null),
        disabled: !1,
      }),
        (n.Z = x);
    },
    1354: function (e, n) {
      var r = {
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
          var n = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (n >= r.F1 && n <= r.F12)
          )
            return !1;
          switch (n) {
            case r.ALT:
            case r.CAPS_LOCK:
            case r.CONTEXT_MENU:
            case r.CTRL:
            case r.DOWN:
            case r.END:
            case r.ESC:
            case r.HOME:
            case r.INSERT:
            case r.LEFT:
            case r.MAC_FF_META:
            case r.META:
            case r.NUMLOCK:
            case r.NUM_CENTER:
            case r.PAGE_DOWN:
            case r.PAGE_UP:
            case r.PAUSE:
            case r.PRINT_SCREEN:
            case r.RIGHT:
            case r.SHIFT:
            case r.UP:
            case r.WIN_KEY:
            case r.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (e >= r.ZERO && e <= r.NINE) return !0;
          if (e >= r.NUM_ZERO && e <= r.NUM_MULTIPLY) return !0;
          if (e >= r.A && e <= r.Z) return !0;
          if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
            return !0;
          switch (e) {
            case r.SPACE:
            case r.QUESTION_MARK:
            case r.NUM_PLUS:
            case r.NUM_MINUS:
            case r.NUM_PERIOD:
            case r.NUM_DIVISION:
            case r.SEMICOLON:
            case r.DASH:
            case r.EQUALS:
            case r.COMMA:
            case r.PERIOD:
            case r.SLASH:
            case r.APOSTROPHE:
            case r.SINGLE_QUOTE:
            case r.OPEN_SQUARE_BRACKET:
            case r.BACKSLASH:
            case r.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      n.Z = r;
    },
  },
]);
//# sourceMappingURL=398.598e2cac.chunk.js.map
