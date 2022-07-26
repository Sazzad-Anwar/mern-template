"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [822],
  {
    3822: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return b;
          },
        });
      var a = t(5861),
        r = t(9439),
        l = t(7757),
        i = t.n(l),
        c = t(9823),
        o = t(8678),
        u = t(3734),
        s = t(2014),
        d = t(7309),
        f = t(2791),
        p = t(6871),
        v = t(577),
        m = t(2419),
        h = t(1033),
        g = t(2065),
        x = t(8717),
        y = t(184);
      function b() {
        var e = (0, f.useState)([]),
          n = (0, r.Z)(e, 2),
          t = n[0],
          l = n[1],
          b = (0, f.useState)(!1),
          C = (0, r.Z)(b, 2),
          Z = C[0],
          k = C[1],
          O = (0, m.ZP)("/categories", g.Z).data,
          w = (0, p.s0)();
        (0, f.useEffect)(
          function () {
            l(O && O.data);
          },
          [O]
        );
        var j = (function () {
          var e = (0, a.Z)(
            i().mark(function e(n) {
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (e.next = 3), h.Z.post("/categories", n)
                        );
                      case 3:
                        (n.isActive = Z),
                          v.Am.success("Category created successfully"),
                          (n.name = ""),
                          (n.parent = ""),
                          k(!1),
                          w("/category"),
                          (e.next = 14);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(0)),
                          v.Am.error(e.t0.response.data.message);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 11]]
              );
            })
          );
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(x.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !0, link: "/category", name: "Category" },
                { isLink: !1, link: "", name: "Add a category" },
              ],
            }),
            (0, y.jsx)("div", {
              className: "w-full pt-3 md:pt-10",
              children: (0, y.jsxs)(c.Z, {
                name: "Create Category",
                onFinish: j,
                autoComplete: "off",
                layout: "vertical",
                className: "w-full mx-1 md:w-96 md:mx-auto",
                children: [
                  (0, y.jsx)(c.Z.Item, {
                    name: "name",
                    label: (0, y.jsx)("label", {
                      className: "dark:text-white text-lg",
                      children: "Category Name",
                    }),
                    rules: [
                      { required: !0, message: "Please input category name!" },
                    ],
                    children: (0, y.jsx)(o.Z, {
                      size: "large",
                      allowClear: !0,
                      placeholder: "Enter a category name",
                    }),
                  }),
                  (0, y.jsx)(c.Z.Item, {
                    name: "parent",
                    label: (0, y.jsx)("label", {
                      className: "dark:text-white text-lg",
                      children: "Select Parent",
                    }),
                    children: (0, y.jsx)(u.Z, {
                      allowClear: !0,
                      placeholder: "Select a category",
                      size: "large",
                      children:
                        null === t || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return (0, y.jsx)(
                                u.Z.Option,
                                {
                                  value: e.name,
                                  children:
                                    e.name.split("")[0].toUpperCase() +
                                    e.name
                                      .split("")
                                      .filter(function (n) {
                                        return n !== e.name.split("")[0];
                                      })
                                      .join(""),
                                },
                                e._id
                              );
                            }),
                    }),
                  }),
                  (0, y.jsx)(c.Z.Item, {
                    name: "isActive",
                    children: (0, y.jsx)(s.Z, {
                      onChange: function (e) {
                        k(e.target.checked);
                      },
                      checked: Z,
                      className: "dark:text-white text-base",
                      children: "Active",
                    }),
                  }),
                  (0, y.jsx)(d.Z, {
                    htmlType: "submit",
                    type: "primary",
                    size: "large",
                    className: "w-full",
                    children: "Save",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    2065: function (e, n, t) {
      var a = t(1033);
      n.Z = function (e) {
        return a.Z.get(e).then(function (e) {
          return e.data;
        });
      };
    },
    2014: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return O;
        },
      });
      var a = t(4942),
        r = t(7462),
        l = t(2791),
        i = t(1694),
        c = t.n(i),
        o = t(8083),
        u = t(3433),
        s = t(9439),
        d = t(1818),
        f = t(9077),
        p = function (e, n) {
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
        v = l.createContext(null),
        m = function (e, n) {
          var t = e.defaultValue,
            i = e.children,
            o = e.options,
            m = void 0 === o ? [] : o,
            h = e.prefixCls,
            g = e.className,
            x = e.style,
            y = e.onChange,
            b = p(e, [
              "defaultValue",
              "children",
              "options",
              "prefixCls",
              "className",
              "style",
              "onChange",
            ]),
            C = l.useContext(f.E_),
            k = C.getPrefixCls,
            O = C.direction,
            w = l.useState(b.value || t || []),
            j = (0, s.Z)(w, 2),
            E = j[0],
            N = j[1],
            P = l.useState([]),
            S = (0, s.Z)(P, 2),
            V = S[0],
            _ = S[1];
          l.useEffect(
            function () {
              "value" in b && N(b.value || []);
            },
            [b.value]
          );
          var A = function () {
              return m.map(function (e) {
                return "string" === typeof e || "number" === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            I = k("checkbox", h),
            L = "".concat(I, "-group"),
            M = (0, d.Z)(b, ["value", "disabled"]);
          m &&
            m.length > 0 &&
            (i = A().map(function (e) {
              return l.createElement(
                Z,
                {
                  prefixCls: I,
                  key: e.value.toString(),
                  disabled: "disabled" in e ? e.disabled : b.disabled,
                  value: e.value,
                  checked: -1 !== E.indexOf(e.value),
                  onChange: e.onChange,
                  className: "".concat(L, "-item"),
                  style: e.style,
                },
                e.label
              );
            }));
          var z = {
              toggleOption: function (e) {
                var n = E.indexOf(e.value),
                  t = (0, u.Z)(E);
                -1 === n ? t.push(e.value) : t.splice(n, 1),
                  "value" in b || N(t);
                var a = A();
                null === y ||
                  void 0 === y ||
                  y(
                    t
                      .filter(function (e) {
                        return -1 !== V.indexOf(e);
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
              value: E,
              disabled: b.disabled,
              name: b.name,
              registerValue: function (e) {
                _(function (n) {
                  return [].concat((0, u.Z)(n), [e]);
                });
              },
              cancelValue: function (e) {
                _(function (n) {
                  return n.filter(function (n) {
                    return n !== e;
                  });
                });
              },
            },
            G = c()(L, (0, a.Z)({}, "".concat(L, "-rtl"), "rtl" === O), g);
          return l.createElement(
            "div",
            (0, r.Z)({ className: G, style: x }, M, { ref: n }),
            l.createElement(v.Provider, { value: z }, i)
          );
        },
        h = l.forwardRef(m),
        g = l.memo(h),
        x = t(4824),
        y = function (e, n) {
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
            i = e.prefixCls,
            u = e.className,
            s = e.children,
            d = e.indeterminate,
            p = void 0 !== d && d,
            m = e.style,
            h = e.onMouseEnter,
            g = e.onMouseLeave,
            b = e.skipGroup,
            C = void 0 !== b && b,
            Z = y(e, [
              "prefixCls",
              "className",
              "children",
              "indeterminate",
              "style",
              "onMouseEnter",
              "onMouseLeave",
              "skipGroup",
            ]),
            k = l.useContext(f.E_),
            O = k.getPrefixCls,
            w = k.direction,
            j = l.useContext(v),
            E = l.useRef(Z.value);
          l.useEffect(function () {
            null === j || void 0 === j || j.registerValue(Z.value),
              (0, x.Z)(
                "checked" in Z || !!j || !("value" in Z),
                "Checkbox",
                "`value` is not a valid prop, do you mean `checked`?"
              );
          }, []),
            l.useEffect(
              function () {
                if (!C)
                  return (
                    Z.value !== E.current &&
                      (null === j || void 0 === j || j.cancelValue(E.current),
                      null === j || void 0 === j || j.registerValue(Z.value),
                      (E.current = Z.value)),
                    function () {
                      return null === j || void 0 === j
                        ? void 0
                        : j.cancelValue(Z.value);
                    }
                  );
              },
              [Z.value]
            );
          var N = O("checkbox", i),
            P = (0, r.Z)({}, Z);
          j &&
            !C &&
            ((P.onChange = function () {
              Z.onChange && Z.onChange.apply(Z, arguments),
                j.toggleOption && j.toggleOption({ label: s, value: Z.value });
            }),
            (P.name = j.name),
            (P.checked = -1 !== j.value.indexOf(Z.value)),
            (P.disabled = Z.disabled || j.disabled));
          var S = c()(
              ((t = {}),
              (0, a.Z)(t, "".concat(N, "-wrapper"), !0),
              (0, a.Z)(t, "".concat(N, "-rtl"), "rtl" === w),
              (0, a.Z)(t, "".concat(N, "-wrapper-checked"), P.checked),
              (0, a.Z)(t, "".concat(N, "-wrapper-disabled"), P.disabled),
              t),
              u
            ),
            V = c()((0, a.Z)({}, "".concat(N, "-indeterminate"), p));
          return l.createElement(
            "label",
            { className: S, style: m, onMouseEnter: h, onMouseLeave: g },
            l.createElement(
              o.Z,
              (0, r.Z)({}, P, { prefixCls: N, className: V, ref: n })
            ),
            void 0 !== s && l.createElement("span", null, s)
          );
        },
        C = l.forwardRef(b);
      C.displayName = "Checkbox";
      var Z = C,
        k = Z;
      (k.Group = g), (k.__ANT_CHECKBOX = !0);
      var O = k;
    },
  },
]);
//# sourceMappingURL=822.2ae730b9.chunk.js.map
