"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [822],
  {
    3822: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return x;
          },
        });
      var a = t(5861),
        r = t(9439),
        l = t(7757),
        c = t.n(l),
        o = t(9823),
        i = t(8678),
        u = t(6435),
        s = t(2014),
        d = t(7309),
        f = t(2791),
        p = t(6871),
        v = t(577),
        m = t(2419),
        h = t(1033),
        y = t(2065),
        g = t(8717),
        b = t(184);
      function x() {
        var e = (0, f.useState)([]),
          n = (0, r.Z)(e, 2),
          t = n[0],
          l = n[1],
          x = (0, f.useState)(!1),
          k = (0, r.Z)(x, 2),
          C = k[0],
          Z = k[1],
          O = (0, m.ZP)("/categories", y.Z).data,
          w = (0, p.s0)();
        (0, f.useEffect)(
          function () {
            l(O && O.data);
          },
          [O]
        );
        var j = (function () {
          var e = (0, a.Z)(
            c().mark(function e(n) {
              return c().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (e.next = 3), h.Z.post("/categories", n)
                        );
                      case 3:
                        (n.isActive = C),
                          v.Am.success("Category created successfully"),
                          (n.name = ""),
                          (n.parent = ""),
                          Z(!1),
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
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsx)(g.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !0, link: "/category", name: "Category" },
                { isLink: !1, link: "", name: "Add a category" },
              ],
            }),
            (0, b.jsx)("div", {
              className: "w-full pt-3 md:pt-10",
              children: (0, b.jsxs)(o.Z, {
                name: "Create Category",
                onFinish: j,
                autoComplete: "off",
                layout: "vertical",
                className: "w-full mx-1 md:w-96 md:mx-auto",
                children: [
                  (0, b.jsx)(o.Z.Item, {
                    name: "name",
                    label: (0, b.jsx)("label", {
                      className: "dark:text-white text-lg",
                      children: "Category Name",
                    }),
                    rules: [
                      { required: !0, message: "Please input category name!" },
                    ],
                    children: (0, b.jsx)(i.Z, {
                      size: "large",
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
                      allowClear: !0,
                      placeholder: "Select a category",
                      size: "large",
                      children:
                        null === t || void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return (0, b.jsx)(
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
                  (0, b.jsx)(o.Z.Item, {
                    name: "isActive",
                    children: (0, b.jsx)(s.Z, {
                      onChange: function (e) {
                        Z(e.target.checked);
                      },
                      checked: C,
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
    2014: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return O;
        },
      });
      var a = t(4942),
        r = t(7462),
        l = t(2791),
        c = t(1694),
        o = t.n(c),
        i = t(8083),
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
            c = e.children,
            i = e.options,
            m = void 0 === i ? [] : i,
            h = e.prefixCls,
            y = e.className,
            g = e.style,
            b = e.onChange,
            x = p(e, [
              "defaultValue",
              "children",
              "options",
              "prefixCls",
              "className",
              "style",
              "onChange",
            ]),
            k = l.useContext(f.E_),
            Z = k.getPrefixCls,
            O = k.direction,
            w = l.useState(x.value || t || []),
            j = (0, s.Z)(w, 2),
            E = j[0],
            N = j[1],
            P = l.useState([]),
            S = (0, s.Z)(P, 2),
            K = S[0],
            I = S[1];
          l.useEffect(
            function () {
              "value" in x && N(x.value || []);
            },
            [x.value]
          );
          var F = function () {
              return m.map(function (e) {
                return "string" === typeof e || "number" === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            V = Z("checkbox", h),
            _ = "".concat(V, "-group"),
            A = (0, d.Z)(x, ["value", "disabled"]);
          m &&
            m.length > 0 &&
            (c = F().map(function (e) {
              return l.createElement(
                C,
                {
                  prefixCls: V,
                  key: e.value.toString(),
                  disabled: "disabled" in e ? e.disabled : x.disabled,
                  value: e.value,
                  checked: -1 !== E.indexOf(e.value),
                  onChange: e.onChange,
                  className: "".concat(_, "-item"),
                  style: e.style,
                },
                e.label
              );
            }));
          var D = {
              toggleOption: function (e) {
                var n = E.indexOf(e.value),
                  t = (0, u.Z)(E);
                -1 === n ? t.push(e.value) : t.splice(n, 1),
                  "value" in x || N(t);
                var a = F();
                null === b ||
                  void 0 === b ||
                  b(
                    t
                      .filter(function (e) {
                        return -1 !== K.indexOf(e);
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
              disabled: x.disabled,
              name: x.name,
              registerValue: function (e) {
                I(function (n) {
                  return [].concat((0, u.Z)(n), [e]);
                });
              },
              cancelValue: function (e) {
                I(function (n) {
                  return n.filter(function (n) {
                    return n !== e;
                  });
                });
              },
            },
            L = o()(_, (0, a.Z)({}, "".concat(_, "-rtl"), "rtl" === O), y);
          return l.createElement(
            "div",
            (0, r.Z)({ className: L, style: g }, A, { ref: n }),
            l.createElement(v.Provider, { value: D }, c)
          );
        },
        h = l.forwardRef(m),
        y = l.memo(h),
        g = t(4824),
        b = function (e, n) {
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
        x = function (e, n) {
          var t,
            c = e.prefixCls,
            u = e.className,
            s = e.children,
            d = e.indeterminate,
            p = void 0 !== d && d,
            m = e.style,
            h = e.onMouseEnter,
            y = e.onMouseLeave,
            x = e.skipGroup,
            k = void 0 !== x && x,
            C = b(e, [
              "prefixCls",
              "className",
              "children",
              "indeterminate",
              "style",
              "onMouseEnter",
              "onMouseLeave",
              "skipGroup",
            ]),
            Z = l.useContext(f.E_),
            O = Z.getPrefixCls,
            w = Z.direction,
            j = l.useContext(v),
            E = l.useRef(C.value);
          l.useEffect(function () {
            null === j || void 0 === j || j.registerValue(C.value),
              (0, g.Z)(
                "checked" in C || !!j || !("value" in C),
                "Checkbox",
                "`value` is not a valid prop, do you mean `checked`?"
              );
          }, []),
            l.useEffect(
              function () {
                if (!k)
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
          var N = O("checkbox", c),
            P = (0, r.Z)({}, C);
          j &&
            !k &&
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
            K = o()((0, a.Z)({}, "".concat(N, "-indeterminate"), p));
          return l.createElement(
            "label",
            { className: S, style: m, onMouseEnter: h, onMouseLeave: y },
            l.createElement(
              i.Z,
              (0, r.Z)({}, P, { prefixCls: N, className: K, ref: n })
            ),
            void 0 !== s && l.createElement("span", null, s)
          );
        },
        k = l.forwardRef(x);
      k.displayName = "Checkbox";
      var C = k,
        Z = C;
      (Z.Group = y), (Z.__ANT_CHECKBOX = !0);
      var O = Z;
    },
    8083: function (e, n, t) {
      var a = t(7462),
        r = t(4942),
        l = t(4925),
        c = t(1413),
        o = t(5671),
        i = t(3144),
        u = t(9340),
        s = t(8557),
        d = t(2791),
        f = t(1694),
        p = t.n(f),
        v = (function (e) {
          (0, u.Z)(t, e);
          var n = (0, s.Z)(t);
          function t(e) {
            var a;
            (0, o.Z)(this, t),
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
                      o = n.style,
                      i = n.name,
                      u = n.id,
                      s = n.type,
                      f = n.disabled,
                      v = n.readOnly,
                      m = n.tabIndex,
                      h = n.onClick,
                      y = n.onFocus,
                      g = n.onBlur,
                      b = n.onKeyDown,
                      x = n.onKeyPress,
                      k = n.onKeyUp,
                      C = n.autoFocus,
                      Z = n.value,
                      O = n.required,
                      w = (0, l.Z)(n, [
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
                      j = Object.keys(w).reduce(function (e, n) {
                        return (
                          ("aria-" !== n.substr(0, 5) &&
                            "data-" !== n.substr(0, 5) &&
                            "role" !== n) ||
                            (e[n] = w[n]),
                          e
                        );
                      }, {}),
                      E = this.state.checked,
                      N = p()(
                        t,
                        c,
                        ((e = {}),
                        (0, r.Z)(e, "".concat(t, "-checked"), E),
                        (0, r.Z)(e, "".concat(t, "-disabled"), f),
                        e)
                      );
                    return d.createElement(
                      "span",
                      { className: N, style: o },
                      d.createElement(
                        "input",
                        (0, a.Z)(
                          {
                            name: i,
                            id: u,
                            type: s,
                            required: O,
                            readOnly: v,
                            disabled: f,
                            tabIndex: m,
                            className: "".concat(t, "-input"),
                            checked: !!E,
                            onClick: h,
                            onFocus: y,
                            onBlur: g,
                            onKeyUp: k,
                            onKeyDown: b,
                            onKeyPress: x,
                            onChange: this.handleChange,
                            autoFocus: C,
                            ref: this.saveInput,
                            value: Z,
                          },
                          j
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
//# sourceMappingURL=822.e6d6adea.chunk.js.map
