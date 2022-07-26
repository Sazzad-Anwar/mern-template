"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [843],
  {
    4843: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return A;
          },
        });
      var r = t(2791),
        a = t(8717),
        s = t(7309),
        c = t(6871),
        l = t(5861),
        i = t(9439),
        o = t(7757),
        u = t.n(o),
        d = t(9220),
        f = t(6038),
        E = t(9823),
        m = t(8678),
        N = t(8820),
        p = t(6355),
        v = t(577),
        x = t(2419),
        h = t(1033),
        C = t(783),
        _ = t(184);
      function T(e) {
        var n = e.folder,
          t = (0, c.s0)(),
          a = (0, r.useState)(!1),
          o = (0, i.Z)(a, 2),
          T = o[0],
          O = o[1],
          S = (0, r.useRef)(),
          A = (function () {
            var e = (0, l.Z)(
              u().mark(function e(n) {
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            h.Z.delete("/folders/".concat(n))
                          );
                        case 3:
                          v.Am.success("Category deleted successfully"),
                            (0, x.JG)("/folders"),
                            (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            v.Am.error(e.t0.response.data.message);
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
          })(),
          U = (function () {
            var e = (0, l.Z)(
              u().mark(function e(t) {
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((O(!1), t.name === n.name)) {
                            e.next = 13;
                            break;
                          }
                          return (
                            (e.prev = 2),
                            console.log(t),
                            (e.next = 6),
                            h.Z.put("/folders/".concat(n._id), t)
                          );
                        case 6:
                          v.Am.success("Folder is created successfully"),
                            (0, x.JG)("/folders"),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(2)),
                            v.Am.error(e.t0.response.data.message);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 10]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
        return (0, _.jsx)(_.Fragment, {
          children: (0, _.jsx)("div", {
            className:
              "flex w-full h-full justify-center py-3 items-center dark:hover:bg-deepDark hover:bg-gray-300 normal-transition",
            children: (0, _.jsxs)("div", {
              className: "flex flex-col items-center justify-center",
              children: [
                (0, _.jsxs)("button", {
                  className: "relative group",
                  children: [
                    (0, _.jsx)(p.$nz, {
                      onClick: function () {
                        return t("/folders/".concat(n._id, "/details"));
                      },
                      size: 35,
                      className: "dark:text-white text-gray-500",
                    }),
                    (0, _.jsx)(d.Z, {
                      title: "Delete folder",
                      className:
                        "hidden group-hover:block absolute -top-3 -right-5",
                      children: (0, _.jsx)(f.Z, {
                        title: "Are you sure to delete this folder?",
                        onConfirm: function () {
                          return A(n._id);
                        },
                        okText: "Yes",
                        cancelText: "No",
                        children: (0, _.jsx)(s.Z, {
                          type: "text",
                          shape: "default",
                          icon: (0, _.jsx)("div", {
                            className: "flex justify-center items-center",
                            children: (0, _.jsx)(N.LHV, {
                              className: "dark:text-white",
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                T
                  ? (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsxs)(E.Z, {
                        initialValues: { name: n.name },
                        onFinish: U,
                        children: [
                          (0, _.jsx)(E.Z.Item, {
                            name: "name",
                            className: "mb-0",
                            rules: [
                              {
                                required: !0,
                                message: "Please input the folder name",
                              },
                            ],
                            children: (0, _.jsx)(m.Z, {
                              placeholder: "Folder name",
                              className: "w-full text-center",
                              size: "small",
                              autoFocus: !0,
                              onBlur: function () {
                                O(!1), S.current.click();
                              },
                            }),
                          }),
                          (0, _.jsx)(s.Z, {
                            ref: S,
                            htmlType: "submit",
                            className: "hidden",
                          }),
                        ],
                      }),
                    })
                  : (0, _.jsx)(d.Z, {
                      title: "Double click to name to edit",
                      placement: "bottom",
                      children: (0, _.jsx)("button", {
                        onClick: function (e) {
                          2 === e.detail && O(!0);
                        },
                        className: "truncate",
                        children: (0, _.jsx)("p", {
                          className:
                            "font-medium dark:text-white text-sm py-1.5 truncate w-full",
                          children: (0, C.Z)(n.name),
                        }),
                      }),
                    }),
              ],
            }),
          }),
        });
      }
      var O = t(2065),
        S = t(8957);
      function A() {
        var e,
          n,
          t = (0, c.s0)(),
          r = (0, x.ZP)("/folders", O.Z),
          l = r.data,
          i = r.error,
          o = l && l.data;
        return (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)("div", {
            className: "py-6",
            children: [
              (0, _.jsx)(a.Z, {
                details: [
                  { isLink: !0, link: "/", name: "Home" },
                  { isLink: !1, link: "/folders", name: "Folders" },
                ],
              }),
              i
                ? (0, _.jsx)(S.Z, {
                    error:
                      null !== i &&
                      void 0 !== i &&
                      null !== (e = i.response) &&
                      void 0 !== e &&
                      e.data
                        ? null === (n = i.response.data) || void 0 === n
                          ? void 0
                          : n.message
                        : i.message,
                  })
                : (0, _.jsxs)("div", {
                    className: "my-5",
                    children: [
                      (0, _.jsx)(s.Z, {
                        onClick: function () {
                          return t("/create-folder");
                        },
                        type: "ghost",
                        shape: "default",
                        className:
                          "mr-1 flex py-5 items-center shadow-md dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                        children: (0, _.jsx)("span", {
                          children: "Create Folder",
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className:
                          "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-11 my-5",
                        children:
                          null === o || void 0 === o
                            ? void 0
                            : o.map(function (e) {
                                return (0, _.jsx)(T, { folder: e }, e._id);
                              }),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
    },
    783: function (e, n, t) {
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
                    .filter(function (n) {
                      return n !== e.split("")[0];
                    })
                    .join(""));
      }
      t.d(n, {
        Z: function () {
          return r;
        },
      });
    },
    1783: function (e, n, t) {
      var r = t(7462),
        a = t(9439),
        s = t(2791),
        c = t(8368),
        l = t(7309),
        i = t(6417);
      function o(e) {
        return !(!e || !e.then);
      }
      n.Z = function (e) {
        var n = s.useRef(!1),
          t = s.useRef(),
          u = (0, c.Z)(!1),
          d = (0, a.Z)(u, 2),
          f = d[0],
          E = d[1];
        s.useEffect(function () {
          var n;
          if (e.autoFocus) {
            var r = t.current;
            n = setTimeout(function () {
              return r.focus();
            });
          }
          return function () {
            n && clearTimeout(n);
          };
        }, []);
        var m = e.type,
          N = e.children,
          p = e.prefixCls,
          v = e.buttonProps;
        return s.createElement(
          l.Z,
          (0, r.Z)(
            {},
            (0, i.n)(m),
            {
              onClick: function (t) {
                var r = e.actionFn,
                  a = e.close;
                if (!n.current)
                  if (((n.current = !0), r)) {
                    var s;
                    if (e.emitEvent) {
                      if (((s = r(t)), e.quitOnNullishReturnValue && !o(s)))
                        return (n.current = !1), void a(t);
                    } else if (r.length) (s = r(a)), (n.current = !1);
                    else if (!(s = r())) return void a();
                    !(function (t) {
                      var r = e.close;
                      o(t) &&
                        (E(!0),
                        t.then(
                          function () {
                            E(!1, !0),
                              r.apply(void 0, arguments),
                              (n.current = !1);
                          },
                          function (e) {
                            console.error(e), E(!1, !0), (n.current = !1);
                          }
                        ));
                    })(s);
                  } else a();
              },
              loading: f,
              prefixCls: p,
            },
            v,
            { ref: t }
          ),
          N
        );
      };
    },
    7924: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var r = function (e) {
        return e ? ("function" === typeof e ? e() : e) : null;
      };
    },
    6038: function (e, n, t) {
      var r = t(7462),
        a = t(9439),
        s = t(2791),
        c = t(1694),
        l = t.n(c),
        i = t(5179),
        o = t(187),
        u = t(1354),
        d = t(9220),
        f = t(7309),
        E = t(6417),
        m = t(3486),
        N = t(454),
        p = t(9077),
        v = t(7924),
        x = t(1113),
        h = t(9464),
        C = t(1783),
        _ = void 0,
        T = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              n.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (t[r[a]] = e[r[a]]);
          }
          return t;
        },
        O = s.forwardRef(function (e, n) {
          var t = s.useContext(p.E_).getPrefixCls,
            c = (0, i.Z)(!1, {
              value: e.visible,
              defaultValue: e.defaultVisible,
            }),
            o = (0, a.Z)(c, 2),
            O = o[0],
            S = o[1],
            A = function (n, t) {
              var r;
              S(n, !0),
                null === (r = e.onVisibleChange) ||
                  void 0 === r ||
                  r.call(e, n, t);
            },
            U = function (e) {
              A(!1, e);
            },
            M = function (n) {
              var t;
              return null === (t = e.onConfirm) || void 0 === t
                ? void 0
                : t.call(_, n);
            },
            y = function (n) {
              var t;
              A(!1, n),
                null === (t = e.onCancel) || void 0 === t || t.call(_, n);
            },
            I = e.prefixCls,
            Z = e.placement,
            R = e.children,
            P = e.overlayClassName,
            g = T(e, [
              "prefixCls",
              "placement",
              "children",
              "overlayClassName",
            ]),
            b = t("popover", I),
            k = t("popconfirm", I),
            F = l()(k, P),
            j = s.createElement(
              m.Z,
              { componentName: "Popconfirm", defaultLocale: N.Z.Popconfirm },
              function (n) {
                return (function (n, a) {
                  var c = e.okButtonProps,
                    l = e.cancelButtonProps,
                    i = e.title,
                    o = e.cancelText,
                    u = e.okText,
                    d = e.okType,
                    m = e.icon,
                    N = e.showCancel,
                    p = void 0 === N || N;
                  return s.createElement(
                    "div",
                    { className: "".concat(n, "-inner-content") },
                    s.createElement(
                      "div",
                      { className: "".concat(n, "-message") },
                      m,
                      s.createElement(
                        "div",
                        { className: "".concat(n, "-message-title") },
                        (0, v.Z)(i)
                      )
                    ),
                    s.createElement(
                      "div",
                      { className: "".concat(n, "-buttons") },
                      p &&
                        s.createElement(
                          f.Z,
                          (0, r.Z)({ onClick: y, size: "small" }, l),
                          o || a.cancelText
                        ),
                      s.createElement(
                        C.Z,
                        {
                          buttonProps: (0, r.Z)(
                            (0, r.Z)({ size: "small" }, (0, E.n)(d)),
                            c
                          ),
                          actionFn: M,
                          close: U,
                          prefixCls: t("btn"),
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
            L = t();
          return s.createElement(
            d.Z,
            (0, r.Z)({}, g, {
              prefixCls: b,
              placement: Z,
              onVisibleChange: function (n) {
                e.disabled || A(n);
              },
              visible: O,
              overlay: j,
              overlayClassName: F,
              ref: n,
              transitionName: (0, h.mL)(L, "zoom-big", e.transitionName),
            }),
            (0, x.Tm)(R, {
              onKeyDown: function (e) {
                var n, t;
                s.isValidElement(R) &&
                  (null ===
                    (t =
                      null === R || void 0 === R
                        ? void 0
                        : (n = R.props).onKeyDown) ||
                    void 0 === t ||
                    t.call(n, e)),
                  (function (e) {
                    e.keyCode === u.Z.ESC && O && A(!1, e);
                  })(e);
              },
            })
          );
        });
      (O.defaultProps = {
        placement: "top",
        trigger: "click",
        okType: "primary",
        icon: s.createElement(o.Z, null),
        disabled: !1,
      }),
        (n.Z = O);
    },
    1354: function (e, n) {
      var t = {
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
            (n >= t.F1 && n <= t.F12)
          )
            return !1;
          switch (n) {
            case t.ALT:
            case t.CAPS_LOCK:
            case t.CONTEXT_MENU:
            case t.CTRL:
            case t.DOWN:
            case t.END:
            case t.ESC:
            case t.HOME:
            case t.INSERT:
            case t.LEFT:
            case t.MAC_FF_META:
            case t.META:
            case t.NUMLOCK:
            case t.NUM_CENTER:
            case t.PAGE_DOWN:
            case t.PAGE_UP:
            case t.PAUSE:
            case t.PRINT_SCREEN:
            case t.RIGHT:
            case t.SHIFT:
            case t.UP:
            case t.WIN_KEY:
            case t.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (e >= t.ZERO && e <= t.NINE) return !0;
          if (e >= t.NUM_ZERO && e <= t.NUM_MULTIPLY) return !0;
          if (e >= t.A && e <= t.Z) return !0;
          if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
            return !0;
          switch (e) {
            case t.SPACE:
            case t.QUESTION_MARK:
            case t.NUM_PLUS:
            case t.NUM_MINUS:
            case t.NUM_PERIOD:
            case t.NUM_DIVISION:
            case t.SEMICOLON:
            case t.DASH:
            case t.EQUALS:
            case t.COMMA:
            case t.PERIOD:
            case t.SLASH:
            case t.APOSTROPHE:
            case t.SINGLE_QUOTE:
            case t.OPEN_SQUARE_BRACKET:
            case t.BACKSLASH:
            case t.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      n.Z = t;
    },
  },
]);
//# sourceMappingURL=843.a0f8babe.chunk.js.map
