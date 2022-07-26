"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [700],
  {
    3700: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var r = n(9439),
        a = n(2791),
        l = n(2419),
        s = n(8957),
        i = n(2065),
        o = n(9220),
        c = n(7309),
        d = n(9421),
        u = n(5861),
        m = n(7757),
        f = n.n(m),
        g = n(6038),
        h = n(8820),
        x = n(3853),
        p = n(6871),
        v = n(577),
        y = n(1033),
        b = n(783),
        j = n(8510),
        k = n(184);
      function Z(e) {
        var t = e.showModal,
          n = e.toggleModal,
          r = e.children,
          a = e.title;
        return (0, k.jsx)(j.Z, {
          visible: t,
          title: a,
          onOk: n,
          onCancel: n,
          footer: null,
          children: r,
        });
      }
      function N(e) {
        var t = e.category,
          n = (0, a.useState)(!1),
          s = (0, r.Z)(n, 2),
          d = s[0],
          m = s[1],
          j = (0, a.useState)([]),
          N = (0, r.Z)(j, 2),
          C = N[0],
          w = N[1],
          E = (0, p.s0)(),
          O = (0, l.ZP)("/categories", i.Z).data;
        (0, a.useEffect)(
          function () {
            w(O && O.data);
          },
          [O]
        );
        var P = function () {
            m(!d);
          },
          T = (function () {
            var e = (0, u.Z)(
              f().mark(function e(t) {
                return f().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            y.Z.delete("/categories/".concat(t))
                          );
                        case 3:
                          v.Am.success("Category deleted successfully"),
                            w(
                              C.filter(function (e) {
                                return e.id !== t;
                              })
                            ),
                            (0, l.JG)("/categories"),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            v.Am.error(e.t0.response.data.message);
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
          })();
        return (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsxs)("div", {
              className:
                "my-3 shadow-md hover:shadow-lg normal-transition pl-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-between",
              children: [
                (0, k.jsxs)("button", {
                  onClick: P,
                  className: "flex items-center",
                  children: [
                    null !== t && void 0 !== t && t.image
                      ? (0, k.jsx)("div", {
                          className:
                            "mr-2 flex justify-center items-center rounded-full dark:bg-gray-600 bg-gray-300",
                          children: (0, k.jsx)("img", {
                            className: "h-5 w-5 rounded-full",
                            src: t.image,
                            alt: t.name,
                          }),
                        })
                      : (0, k.jsx)("div", {
                          className:
                            "mr-2 p-5 flex justify-center items-center rounded-full dark:bg-gray-600 bg-gray-300",
                          children: (0, k.jsx)("div", {
                            className: "bg-deepDark",
                          }),
                        }),
                    (0, k.jsx)("div", {
                      className: "overflow-hidden",
                      children: (0, k.jsx)("p", {
                        className:
                          "font-medium dark:text-white text-base truncate",
                        children: (0, b.Z)(t.name),
                      }),
                    }),
                  ],
                }),
                (0, k.jsxs)("div", {
                  children: [
                    (0, k.jsx)(o.Z, {
                      title: "Edit category",
                      children: (0, k.jsx)(c.Z, {
                        onClick: function () {
                          return E("/category/".concat(t._id));
                        },
                        type: "ghost",
                        shape: "default",
                        className:
                          "mr-1 dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                        icon: (0, k.jsx)("div", {
                          className: "flex justify-center items-center",
                          children: (0, k.jsx)(x.Nte, {}),
                        }),
                      }),
                    }),
                    (0, k.jsx)(o.Z, {
                      title: "Delete category",
                      children: (0, k.jsx)(g.Z, {
                        title: "Are you sure to delete this category?",
                        onConfirm: function () {
                          return T(t._id);
                        },
                        okText: "Yes",
                        cancelText: "No",
                        children: (0, k.jsx)(c.Z, {
                          type: "ghost",
                          shape: "default",
                          className:
                            "mr-2 dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                          icon: (0, k.jsx)("div", {
                            className: "flex justify-center items-center",
                            children: (0, k.jsx)(h.YK6, {}),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsxs)(Z, {
              showModal: d,
              toggleModal: P,
              title: "Category Details",
              children: [
                (0, k.jsxs)("h2", {
                  className: "dark:text-white text-lg",
                  children: [
                    "Category:",
                    " ",
                    (0, k.jsx)("span", {
                      className: "font-mono font-semibold ml-2",
                      children: (0, b.Z)(t.name),
                    }),
                  ],
                }),
                (0, k.jsxs)("h2", {
                  className: "dark:text-white text-lg",
                  children: [
                    "Children:",
                    " ",
                    (0, k.jsx)("span", {
                      className: "font-mono font-semibold ml-2",
                      children: t.children.length
                        ? t.children.join(",")
                        : "No children",
                    }),
                    " ",
                  ],
                }),
                (0, k.jsxs)("h2", {
                  className: "dark:text-white text-lg",
                  children: [
                    "Active:",
                    " ",
                    (0, k.jsx)("span", {
                      className: "font-mono font-semibold ml-2",
                      children: t.isActive ? "Yes" : "No",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var C = n(8704),
        w = n(8717);
      function E() {
        var e = (0, a.useState)([]),
          t = (0, r.Z)(e, 2),
          n = t[0],
          u = t[1],
          m = (0, C.b)().sideBar,
          f = (0, p.s0)(),
          g = (0, l.ZP)("/categories", i.Z),
          h = g.data,
          x = g.error;
        (0, a.useEffect)(
          function () {
            u(h && h.data);
          },
          [h]
        );
        return (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)(w.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !1, link: "/category", name: "Category" },
              ],
            }),
            x
              ? (0, k.jsx)(s.Z, {
                  error: x.response.data.message
                    ? x.response.data.message
                    : x.message,
                })
              : (0, k.jsxs)("div", {
                  className: "pt-3",
                  children: [
                    (0, k.jsx)(o.Z, {
                      title: "Add Category",
                      children: (0, k.jsx)(c.Z, {
                        onClick: function () {
                          return f("/create-category");
                        },
                        type: "ghost",
                        shape: "default",
                        className:
                          "mr-1 flex py-5 items-center shadow-md dark:bg-deepDark dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                        children: (0, k.jsx)("span", {
                          className: "",
                          children: "Create Category",
                        }),
                      }),
                    }),
                    n && !n.length && (0, k.jsx)(d.Z, {}),
                    (0, k.jsx)("div", {
                      className: m.isOpen
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
                        : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3",
                      children:
                        null === n || void 0 === n
                          ? void 0
                          : n.map(function (e) {
                              return (0, k.jsx)(N, { category: e }, e._id);
                            }),
                    }),
                  ],
                }),
          ],
        });
      }
    },
    783: function (e, t, n) {
      function r(e) {
        return (
          (null === e || void 0 === e ? void 0 : e.split("")[0].toUpperCase()) +
          (null === e || void 0 === e
            ? void 0
            : e
                .split("")
                .filter(function (t) {
                  return t !== e.split("")[0];
                })
                .join(""))
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    2065: function (e, t, n) {
      var r = n(1033);
      t.Z = function (e) {
        return r.Z.get(e).then(function (e) {
          return e.data;
        });
      };
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
    6038: function (e, t, n) {
      var r = n(7462),
        a = n(9439),
        l = n(2791),
        s = n(1694),
        i = n.n(s),
        o = n(5179),
        c = n(187),
        d = n(1354),
        u = n(9220),
        m = n(7309),
        f = n(6417),
        g = n(3486),
        h = n(454),
        x = n(9077),
        p = n(7924),
        v = n(1113),
        y = n(9464),
        b = n(1783),
        j = void 0,
        k = function (e, t) {
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
        Z = l.forwardRef(function (e, t) {
          var n = l.useContext(x.E_).getPrefixCls,
            s = (0, o.Z)(!1, {
              value: e.visible,
              defaultValue: e.defaultVisible,
            }),
            c = (0, a.Z)(s, 2),
            Z = c[0],
            N = c[1],
            C = function (t, n) {
              var r;
              N(t, !0),
                null === (r = e.onVisibleChange) ||
                  void 0 === r ||
                  r.call(e, t, n);
            },
            w = function (e) {
              C(!1, e);
            },
            E = function (t) {
              var n;
              return null === (n = e.onConfirm) || void 0 === n
                ? void 0
                : n.call(j, t);
            },
            O = function (t) {
              var n;
              C(!1, t),
                null === (n = e.onCancel) || void 0 === n || n.call(j, t);
            },
            P = e.prefixCls,
            T = e.placement,
            A = e.children,
            D = e.overlayClassName,
            S = k(e, [
              "prefixCls",
              "placement",
              "children",
              "overlayClassName",
            ]),
            V = n("popover", P),
            _ = n("popconfirm", P),
            L = i()(_, D),
            M = l.createElement(
              g.Z,
              { componentName: "Popconfirm", defaultLocale: h.Z.Popconfirm },
              function (t) {
                return (function (t, a) {
                  var s = e.okButtonProps,
                    i = e.cancelButtonProps,
                    o = e.title,
                    c = e.cancelText,
                    d = e.okText,
                    u = e.okType,
                    g = e.icon,
                    h = e.showCancel,
                    x = void 0 === h || h;
                  return l.createElement(
                    "div",
                    { className: "".concat(t, "-inner-content") },
                    l.createElement(
                      "div",
                      { className: "".concat(t, "-message") },
                      g,
                      l.createElement(
                        "div",
                        { className: "".concat(t, "-message-title") },
                        (0, p.Z)(o)
                      )
                    ),
                    l.createElement(
                      "div",
                      { className: "".concat(t, "-buttons") },
                      x &&
                        l.createElement(
                          m.Z,
                          (0, r.Z)({ onClick: O, size: "small" }, i),
                          c || a.cancelText
                        ),
                      l.createElement(
                        b.Z,
                        {
                          buttonProps: (0, r.Z)(
                            (0, r.Z)({ size: "small" }, (0, f.n)(u)),
                            s
                          ),
                          actionFn: E,
                          close: w,
                          prefixCls: n("btn"),
                          quitOnNullishReturnValue: !0,
                          emitEvent: !0,
                        },
                        d || a.okText
                      )
                    )
                  );
                })(V, t);
              }
            ),
            z = n();
          return l.createElement(
            u.Z,
            (0, r.Z)({}, S, {
              prefixCls: V,
              placement: T,
              onVisibleChange: function (t) {
                e.disabled || C(t);
              },
              visible: Z,
              overlay: M,
              overlayClassName: L,
              ref: t,
              transitionName: (0, y.mL)(z, "zoom-big", e.transitionName),
            }),
            (0, v.Tm)(A, {
              onKeyDown: function (e) {
                var t, n;
                l.isValidElement(A) &&
                  (null ===
                    (n =
                      null === A || void 0 === A
                        ? void 0
                        : (t = A.props).onKeyDown) ||
                    void 0 === n ||
                    n.call(t, e)),
                  (function (e) {
                    e.keyCode === d.Z.ESC && Z && C(!1, e);
                  })(e);
              },
            })
          );
        });
      (Z.defaultProps = {
        placement: "top",
        trigger: "click",
        okType: "primary",
        icon: l.createElement(c.Z, null),
        disabled: !1,
      }),
        (t.Z = Z);
    },
  },
]);
//# sourceMappingURL=700.4e8de175.chunk.js.map
