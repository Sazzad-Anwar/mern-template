"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [613],
  {
    5646: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return Z;
          },
        });
      var a = t(5861),
        r = t(9439),
        l = t(7757),
        i = t.n(l),
        o = t(9823),
        c = t(8678),
        u = t(3734),
        s = t(2014),
        d = t(7309),
        f = t(2791),
        v = t(6871),
        p = t(577),
        m = t(2419),
        h = t(1033),
        g = t(783),
        x = t(2065),
        y = t(8717),
        b = t(184);
      function Z() {
        var e,
          n = (0, v.UO)().id,
          t = o.Z.useForm(),
          l = (0, r.Z)(t, 1)[0],
          Z = (0, m.ZP)("/categories", x.Z).data,
          C = (0, m.ZP)("/categories/".concat(n), x.Z).data,
          k = (0, m.ZP)("/categories/".concat(n, "?q=getParent"), x.Z).data,
          O = (0, f.useState)(!1),
          w = (0, r.Z)(O, 2),
          j = w[0],
          E = w[1],
          N = (0, v.s0)();
        (0, f.useEffect)(
          function () {
            var e = setTimeout(function () {
              E(C && C.data.isActive);
            }, 500);
            return function () {
              return clearTimeout(e);
            };
          },
          [C]
        );
        var P = Z && Z.data,
          S = C && C.data,
          V = k && k.data,
          _ = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/category", name: "Category" },
            {
              isLink: !1,
              link: "/category/".concat(n),
              name: null === S || void 0 === S ? void 0 : S.name,
            },
          ],
          A = (function () {
            var e = (0, a.Z)(
              i().mark(function e(t) {
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            h.Z.put("/categories/".concat(n), t)
                          );
                        case 3:
                          p.Am.success("Category created successfully"),
                            l.resetFields(),
                            E(!1),
                            N("/category"),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            p.Am.error(e.t0.response.data.message);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })();
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(y.Z, { details: _ }),
            void 0 !== S &&
              void 0 !== V &&
              (0, b.jsx)("div", {
                className: "w-full pt-3 md:pt-10",
                children: (0, b.jsxs)(o.Z, {
                  name: "Create Category",
                  onFinish: A,
                  autoComplete: "off",
                  layout: "vertical",
                  className: "w-full mx-1 md:w-96 md:mx-auto",
                  initialValues: {
                    name: null === S || void 0 === S ? void 0 : S.name,
                    parent: null === V || void 0 === V ? void 0 : V.name,
                    isActive: j,
                  },
                  children: [
                    (0, b.jsx)(o.Z.Item, {
                      name: "name",
                      label: (0, b.jsx)("label", {
                        className: "dark:text-white text-lg",
                        children: "Category Name",
                      }),
                      rules: [
                        {
                          required: !0,
                          message: "Please input category name!",
                        },
                      ],
                      children: (0, b.jsx)(c.Z, {
                        size: "large",
                        value: S && S.name,
                        allowClear: !0,
                        placeholder: "Enter a category name",
                      }),
                    }),
                    (0, b.jsx)(o.Z.Item, {
                      name: "parent",
                      label: (0, b.jsx)("label", {
                        className: "dark:text-white text-lg",
                        children: "Select Parent",
                      }),
                      children: (0, b.jsx)(u.Z, {
                        value: V && V.name,
                        allowClear: !0,
                        placeholder: "Select a category",
                        size: "large",
                        children:
                          P &&
                          (null ===
                            (e = P.filter(function (e) {
                              return (
                                e._id !== n &&
                                !(
                                  null !== S &&
                                  void 0 !== S &&
                                  S.children.includes(e.name)
                                )
                              );
                            })) || void 0 === e
                            ? void 0
                            : e.map(function (e) {
                                return (0,
                                b.jsx)(u.Z.Option, { value: e.name, children: (0, g.Z)(e.name) }, e._id);
                              })),
                      }),
                    }),
                    (0, b.jsx)(o.Z.Item, {
                      name: "isActive",
                      children: (0, b.jsx)(s.Z, {
                        onChange: function (e) {
                          E(e.target.checked);
                        },
                        checked: j,
                        className: "dark:text-white text-base",
                        children: "Active",
                      }),
                    }),
                    (0, b.jsx)(d.Z, {
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
    783: function (e, n, t) {
      function a(e) {
        return (
          (null === e || void 0 === e ? void 0 : e.split("")[0].toUpperCase()) +
          (null === e || void 0 === e
            ? void 0
            : e
                .split("")
                .filter(function (n) {
                  return n !== e.split("")[0];
                })
                .join(""))
        );
      }
      t.d(n, {
        Z: function () {
          return a;
        },
      });
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
        o = t.n(i),
        c = t(8083),
        u = t(3433),
        s = t(9439),
        d = t(1818),
        f = t(9077),
        v = function (e, n) {
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
        p = l.createContext(null),
        m = function (e, n) {
          var t = e.defaultValue,
            i = e.children,
            c = e.options,
            m = void 0 === c ? [] : c,
            h = e.prefixCls,
            g = e.className,
            x = e.style,
            y = e.onChange,
            b = v(e, [
              "defaultValue",
              "children",
              "options",
              "prefixCls",
              "className",
              "style",
              "onChange",
            ]),
            Z = l.useContext(f.E_),
            k = Z.getPrefixCls,
            O = Z.direction,
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
                C,
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
          var F = {
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
            T = o()(L, (0, a.Z)({}, "".concat(L, "-rtl"), "rtl" === O), g);
          return l.createElement(
            "div",
            (0, r.Z)({ className: T, style: x }, M, { ref: n }),
            l.createElement(p.Provider, { value: F }, i)
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
            v = void 0 !== d && d,
            m = e.style,
            h = e.onMouseEnter,
            g = e.onMouseLeave,
            b = e.skipGroup,
            Z = void 0 !== b && b,
            C = y(e, [
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
            j = l.useContext(p),
            E = l.useRef(C.value);
          l.useEffect(function () {
            null === j || void 0 === j || j.registerValue(C.value),
              (0, x.Z)(
                "checked" in C || !!j || !("value" in C),
                "Checkbox",
                "`value` is not a valid prop, do you mean `checked`?"
              );
          }, []),
            l.useEffect(
              function () {
                if (!Z)
                  return (
                    C.value !== E.current &&
                      (null === j || void 0 === j || j.cancelValue(E.current),
                      null === j || void 0 === j || j.registerValue(C.value),
                      (E.current = C.value)),
                    function () {
                      return null === j || void 0 === j
                        ? void 0
                        : j.cancelValue(C.value);
                    }
                  );
              },
              [C.value]
            );
          var N = O("checkbox", i),
            P = (0, r.Z)({}, C);
          j &&
            !Z &&
            ((P.onChange = function () {
              C.onChange && C.onChange.apply(C, arguments),
                j.toggleOption && j.toggleOption({ label: s, value: C.value });
            }),
            (P.name = j.name),
            (P.checked = -1 !== j.value.indexOf(C.value)),
            (P.disabled = C.disabled || j.disabled));
          var S = o()(
              ((t = {}),
              (0, a.Z)(t, "".concat(N, "-wrapper"), !0),
              (0, a.Z)(t, "".concat(N, "-rtl"), "rtl" === w),
              (0, a.Z)(t, "".concat(N, "-wrapper-checked"), P.checked),
              (0, a.Z)(t, "".concat(N, "-wrapper-disabled"), P.disabled),
              t),
              u
            ),
            V = o()((0, a.Z)({}, "".concat(N, "-indeterminate"), v));
          return l.createElement(
            "label",
            { className: S, style: m, onMouseEnter: h, onMouseLeave: g },
            l.createElement(
              c.Z,
              (0, r.Z)({}, P, { prefixCls: N, className: V, ref: n })
            ),
            void 0 !== s && l.createElement("span", null, s)
          );
        },
        Z = l.forwardRef(b);
      Z.displayName = "Checkbox";
      var C = Z,
        k = C;
      (k.Group = g), (k.__ANT_CHECKBOX = !0);
      var O = k;
    },
  },
]);
//# sourceMappingURL=613.1aa6bbf2.chunk.js.map
