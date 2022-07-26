"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [613],
  {
    5646: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return k;
          },
        });
      var a = t(5861),
        r = t(9439),
        l = t(7757),
        o = t.n(l),
        c = t(9823),
        i = t(8678),
        u = t(3734),
        s = t(2014),
        d = t(7309),
        f = t(2791),
        p = t(6871),
        v = t(577),
        m = t(2419),
        h = t(1033),
        y = t(783),
        g = t(2065),
        x = t(8717),
        b = t(184);
      function k() {
        var e,
          n = (0, p.UO)().id,
          t = c.Z.useForm(),
          l = (0, r.Z)(t, 1)[0],
          k = (0, m.ZP)("/categories", g.Z).data,
          Z = (0, m.ZP)("/categories/".concat(n), g.Z).data,
          C = (0, m.ZP)("/categories/".concat(n, "?q=getParent"), g.Z).data,
          O = (0, f.useState)(!1),
          w = (0, r.Z)(O, 2),
          j = w[0],
          E = w[1],
          N = (0, p.s0)();
        (0, f.useEffect)(
          function () {
            var e = setTimeout(function () {
              E(Z && Z.data.isActive);
            }, 500);
            return function () {
              return clearTimeout(e);
            };
          },
          [Z]
        );
        var P = k && k.data,
          I = Z && Z.data,
          K = C && C.data,
          S = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/category", name: "Category" },
            {
              isLink: !1,
              link: "/category/".concat(n),
              name: null === I || void 0 === I ? void 0 : I.name,
            },
          ],
          F = (function () {
            var e = (0, a.Z)(
              o().mark(function e(t) {
                return o().wrap(
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
                          v.Am.success("Category created successfully"),
                            l.resetFields(),
                            E(!1),
                            N("/category"),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            v.Am.error(e.t0.response.data.message);
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
            (0, b.jsx)(x.Z, { details: S }),
            void 0 !== I &&
              void 0 !== K &&
              (0, b.jsx)("div", {
                className: "w-full pt-3 md:pt-10",
                children: (0, b.jsxs)(c.Z, {
                  name: "Create Category",
                  onFinish: F,
                  autoComplete: "off",
                  layout: "vertical",
                  className: "w-full mx-1 md:w-96 md:mx-auto",
                  initialValues: {
                    name: null === I || void 0 === I ? void 0 : I.name,
                    parent: null === K || void 0 === K ? void 0 : K.name,
                    isActive: j,
                  },
                  children: [
                    (0, b.jsx)(c.Z.Item, {
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
                      children: (0, b.jsx)(i.Z, {
                        size: "large",
                        value: I && I.name,
                        allowClear: !0,
                        placeholder: "Enter a category name",
                      }),
                    }),
                    (0, b.jsx)(c.Z.Item, {
                      name: "parent",
                      label: (0, b.jsx)("label", {
                        className: "dark:text-white text-lg",
                        children: "Select Parent",
                      }),
                      children: (0, b.jsx)(u.Z, {
                        value: K && K.name,
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
                                  null !== I &&
                                  void 0 !== I &&
                                  I.children.includes(e.name)
                                )
                              );
                            })) || void 0 === e
                            ? void 0
                            : e.map(function (e) {
                                return (0,
                                b.jsx)(u.Z.Option, { value: e.name, children: (0, y.Z)(e.name) }, e._id);
                              })),
                      }),
                    }),
                    (0, b.jsx)(c.Z.Item, {
                      name: "image",
                      label: (0, b.jsx)("label", {
                        className: "dark:text-white text-lg",
                        children: "Image Url",
                      }),
                      children: (0, b.jsx)(i.Z, {
                        size: "large",
                        value: I && I.image,
                        allowClear: !0,
                        placeholder: "Enter image url",
                      }),
                    }),
                    (0, b.jsx)(c.Z.Item, {
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
    2014: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return O;
        },
      });
      var a = t(4942),
        r = t(7462),
        l = t(2791),
        o = t(1694),
        c = t.n(o),
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
            o = e.children,
            i = e.options,
            m = void 0 === i ? [] : i,
            h = e.prefixCls,
            y = e.className,
            g = e.style,
            x = e.onChange,
            b = p(e, [
              "defaultValue",
              "children",
              "options",
              "prefixCls",
              "className",
              "style",
              "onChange",
            ]),
            k = l.useContext(f.E_),
            C = k.getPrefixCls,
            O = k.direction,
            w = l.useState(b.value || t || []),
            j = (0, s.Z)(w, 2),
            E = j[0],
            N = j[1],
            P = l.useState([]),
            I = (0, s.Z)(P, 2),
            K = I[0],
            S = I[1];
          l.useEffect(
            function () {
              "value" in b && N(b.value || []);
            },
            [b.value]
          );
          var F = function () {
              return m.map(function (e) {
                return "string" === typeof e || "number" === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            V = C("checkbox", h),
            _ = "".concat(V, "-group"),
            A = (0, d.Z)(b, ["value", "disabled"]);
          m &&
            m.length > 0 &&
            (o = F().map(function (e) {
              return l.createElement(
                Z,
                {
                  prefixCls: V,
                  key: e.value.toString(),
                  disabled: "disabled" in e ? e.disabled : b.disabled,
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
                  "value" in b || N(t);
                var a = F();
                null === x ||
                  void 0 === x ||
                  x(
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
              disabled: b.disabled,
              name: b.name,
              registerValue: function (e) {
                S(function (n) {
                  return [].concat((0, u.Z)(n), [e]);
                });
              },
              cancelValue: function (e) {
                S(function (n) {
                  return n.filter(function (n) {
                    return n !== e;
                  });
                });
              },
            },
            U = c()(_, (0, a.Z)({}, "".concat(_, "-rtl"), "rtl" === O), y);
          return l.createElement(
            "div",
            (0, r.Z)({ className: U, style: g }, A, { ref: n }),
            l.createElement(v.Provider, { value: D }, o)
          );
        },
        h = l.forwardRef(m),
        y = l.memo(h),
        g = t(4824),
        x = function (e, n) {
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
            o = e.prefixCls,
            u = e.className,
            s = e.children,
            d = e.indeterminate,
            p = void 0 !== d && d,
            m = e.style,
            h = e.onMouseEnter,
            y = e.onMouseLeave,
            b = e.skipGroup,
            k = void 0 !== b && b,
            Z = x(e, [
              "prefixCls",
              "className",
              "children",
              "indeterminate",
              "style",
              "onMouseEnter",
              "onMouseLeave",
              "skipGroup",
            ]),
            C = l.useContext(f.E_),
            O = C.getPrefixCls,
            w = C.direction,
            j = l.useContext(v),
            E = l.useRef(Z.value);
          l.useEffect(function () {
            null === j || void 0 === j || j.registerValue(Z.value),
              (0, g.Z)(
                "checked" in Z || !!j || !("value" in Z),
                "Checkbox",
                "`value` is not a valid prop, do you mean `checked`?"
              );
          }, []),
            l.useEffect(
              function () {
                if (!k)
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
          var N = O("checkbox", o),
            P = (0, r.Z)({}, Z);
          j &&
            !k &&
            ((P.onChange = function () {
              Z.onChange && Z.onChange.apply(Z, arguments),
                j.toggleOption && j.toggleOption({ label: s, value: Z.value });
            }),
            (P.name = j.name),
            (P.checked = -1 !== j.value.indexOf(Z.value)),
            (P.disabled = Z.disabled || j.disabled));
          var I = c()(
              ((t = {}),
              (0, a.Z)(t, "".concat(N, "-wrapper"), !0),
              (0, a.Z)(t, "".concat(N, "-rtl"), "rtl" === w),
              (0, a.Z)(t, "".concat(N, "-wrapper-checked"), P.checked),
              (0, a.Z)(t, "".concat(N, "-wrapper-disabled"), P.disabled),
              t),
              u
            ),
            K = c()((0, a.Z)({}, "".concat(N, "-indeterminate"), p));
          return l.createElement(
            "label",
            { className: I, style: m, onMouseEnter: h, onMouseLeave: y },
            l.createElement(
              i.Z,
              (0, r.Z)({}, P, { prefixCls: N, className: K, ref: n })
            ),
            void 0 !== s && l.createElement("span", null, s)
          );
        },
        k = l.forwardRef(b);
      k.displayName = "Checkbox";
      var Z = k,
        C = Z;
      (C.Group = y), (C.__ANT_CHECKBOX = !0);
      var O = C;
    },
    8083: function (e, n, t) {
      var a = t(7462),
        r = t(4942),
        l = t(4925),
        o = t(1413),
        c = t(5671),
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
            (0, c.Z)(this, t),
              ((a = n.call(this, e)).handleChange = function (e) {
                var n = a.props,
                  t = n.disabled,
                  r = n.onChange;
                t ||
                  ("checked" in a.props ||
                    a.setState({ checked: e.target.checked }),
                  r &&
                    r({
                      target: (0, o.Z)(
                        (0, o.Z)({}, a.props),
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
                      o = n.className,
                      c = n.style,
                      i = n.name,
                      u = n.id,
                      s = n.type,
                      f = n.disabled,
                      v = n.readOnly,
                      m = n.tabIndex,
                      h = n.onClick,
                      y = n.onFocus,
                      g = n.onBlur,
                      x = n.onKeyDown,
                      b = n.onKeyPress,
                      k = n.onKeyUp,
                      Z = n.autoFocus,
                      C = n.value,
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
                        o,
                        ((e = {}),
                        (0, r.Z)(e, "".concat(t, "-checked"), E),
                        (0, r.Z)(e, "".concat(t, "-disabled"), f),
                        e)
                      );
                    return d.createElement(
                      "span",
                      { className: N, style: c },
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
                            onKeyDown: x,
                            onKeyPress: b,
                            onChange: this.handleChange,
                            autoFocus: Z,
                            ref: this.saveInput,
                            value: C,
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
                      ? (0, o.Z)((0, o.Z)({}, n), {}, { checked: e.checked })
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
//# sourceMappingURL=613.a6575cbb.chunk.js.map
