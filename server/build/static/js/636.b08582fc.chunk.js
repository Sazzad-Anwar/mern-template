"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [636],
  {
    6625: function (e, t, n) {
      var r = n(9439),
        a = n(9220),
        o = n(2791),
        l = n(3853),
        s = n(6355),
        i = n(184);
      t.Z = function (e) {
        var t = e.hideButton,
          n = (0, o.useState)("dark"),
          c = (0, r.Z)(n, 2),
          u = c[0],
          d = c[1];
        return (
          (0, o.useEffect)(
            function () {
              "undefined" !== typeof window &&
                ("dark" === localStorage.theme ||
                (!("theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)
                  ? (document.documentElement.classList.add("dark"),
                    d("dark"),
                    localStorage.setItem("theme", "dark"))
                  : (localStorage.setItem("theme", "light"),
                    d("light"),
                    document.documentElement.classList.remove("dark")));
            },
            [u]
          ),
          t
            ? null
            : (0, i.jsx)("button", {
                onClick: function () {
                  "dark" === u
                    ? (localStorage.setItem("theme", "light"), d("light"))
                    : (localStorage.setItem("theme", "dark"), d("dark"));
                },
                className:
                  "cursor-pointer text-gray-600 transition-all ease-in-out hover:text-black dark:text-gray-500 dark:hover:text-white",
                children:
                  "dark" === u
                    ? (0, i.jsx)(a.Z, {
                        placement: "bottomRight",
                        title: (0, i.jsx)("span", {
                          children: "Toggle to light mode",
                        }),
                        children: (0, i.jsx)(l.kXG, {
                          className:
                            "bi bi-brightness-high-fill normal-transition text-xl text-gray-600 hover:text-black active:animate-ping dark:text-gray-500 dark:hover:text-white",
                        }),
                      })
                    : (0, i.jsx)(a.Z, {
                        placement: "bottomRight",
                        title: (0, i.jsx)("span", {
                          children: "Toggle to dark mode",
                        }),
                        children: (0, i.jsx)(s.TLr, {
                          className:
                            "bi bi-moon-stars-fill normal-transition text-xl text-gray-600 hover:text-black active:animate-ping dark:text-gray-500 dark:hover:text-white",
                        }),
                      }),
              })
        );
      };
    },
    9636: function (e, t, n) {
      n.r(t);
      var r = n(5861),
        a = n(9439),
        o = n(7757),
        l = n.n(o),
        s = n(2791),
        i = n(9823),
        c = n(8678),
        u = n(2014),
        d = n(7309),
        p = n(6856),
        f = n(5868),
        m = n(3853),
        h = n(8820),
        v = n(6871),
        x = n(3504),
        g = n(8704),
        y = n(577),
        b = n(1033),
        k = n(2419),
        w = n(2065),
        Z = n(6625),
        j = n(6570),
        C = n(184);
      t.default = function () {
        var e = (0, g.b)(),
          t = e.auth,
          n = e.authDispatch,
          o = (0, k.ZP)("/users/hasSuperAdmin", w.Z).data,
          N = (0, k.ZP)("/app-config", w.Z).data,
          O = (0, k.ZP)("/roles", w.Z).data,
          S = (0, s.useState)({}),
          E = (0, a.Z)(S, 2),
          _ = E[0],
          I = E[1];
        (0, s.useEffect)(
          function () {
            N && N.data && I(N.data[0]);
          },
          [N]
        );
        var P,
          F,
          A,
          K,
          T,
          B,
          V = (function () {
            var e = (0, r.Z)(
              l().mark(function e(t) {
                var r, a, o, s, i, c, u, d;
                return l().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.email),
                            (a = t.password),
                            (o = t.remember),
                            (e.prev = 1),
                            (e.next = 4),
                            b.Z.post("/auth/login", { email: r, password: a })
                          );
                        case 4:
                          (s = e.sent),
                            (i = s.data),
                            n({ type: "LOGIN", payload: i.data.accessToken }),
                            (c = { ue: r, up: a }),
                            console.log(c),
                            o
                              ? (localStorage.setItem(
                                  "__uc",
                                  JSON.stringify(c)
                                ),
                                localStorage.setItem("remember", o))
                              : (localStorage.removeItem("__uc"),
                                localStorage.removeItem("remember", o)),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(1)),
                            y.Am.error(
                              null !==
                                (u =
                                  null === (d = e.t0.response) || void 0 === d
                                    ? void 0
                                    : d.data.message) && void 0 !== u
                                ? u
                                : e.t0.message
                            );
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 12]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return t.user || (null !== o && void 0 !== o && o.hasSuperAdmin)
          ? t.user &&
            O &&
            !O.data.find(function (e) {
              return e.role === t.user.role;
            })
            ? (y.Am.error("Only admins and super admins can have access!"),
              (0, C.jsx)(v.Fg, { to: "/login" }))
            : t.user
            ? (0, C.jsx)(v.Fg, { to: "/" })
            : (0, C.jsxs)(C.Fragment, {
                children: [
                  (0, C.jsx)("div", {
                    className: "absolute right-5 top-5 z-10",
                    children: (0, C.jsx)(Z.Z, { hideButton: !0 }),
                  }),
                  (0, C.jsxs)("div", {
                    className:
                      "relative grid h-screen w-screen grid-cols-1 overflow-hidden lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
                    children: [
                      (0, C.jsxs)("div", {
                        className:
                          "relative hidden lg:col-span-2 lg:block xl:col-span-3 2xl:col-span-4",
                        children: [
                          (0, C.jsx)("img", {
                            className: "h-full w-auto brightness-50",
                            src: "/login-image.png",
                            alt: "login",
                          }),
                          (0, C.jsxs)("div", {
                            className:
                              "absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md",
                            children: [
                              (0, C.jsx)("img", {
                                className: "h-20 w-20",
                                src: "/logo192.png",
                                alt: "logo",
                              }),
                              (0, C.jsx)("h1", {
                                className: "text-white xl:text-5xl",
                                children:
                                  null !==
                                    (P =
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.name) && void 0 !== P
                                    ? P
                                    : j.iC,
                              }),
                              (0, C.jsx)("div", {
                                className: "text-2xl text-white",
                                children: (0, C.jsx)(f.Z, {
                                  steps:
                                    null !== _ &&
                                    void 0 !== _ &&
                                    null !== (F = _.motto) &&
                                    void 0 !== F &&
                                    F.split(".").length
                                      ? [
                                          null === _ ||
                                          void 0 === _ ||
                                          null === (A = _.motto) ||
                                          void 0 === A
                                            ? void 0
                                            : A.split(".")[0],
                                          2e3,
                                          null === _ ||
                                          void 0 === _ ||
                                          null === (K = _.motto) ||
                                          void 0 === K
                                            ? void 0
                                            : K.split(".")[0],
                                          3e3,
                                        ]
                                      : null !== _ && void 0 !== _ && _.motto
                                      ? [
                                          null === _ || void 0 === _
                                            ? void 0
                                            : _.motto,
                                          2e3,
                                        ]
                                      : [j.y$, 2e3, j.gc, 3e3],
                                  loop: 1 / 0,
                                  wrapper: "p",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsx)("div", {
                        className:
                          "flex h-full w-full items-center dark:bg-dark px-5 pt-10 backdrop-blur-lg dark:lg:bg-dark",
                        children: (0, C.jsxs)("div", {
                          className: "w-full",
                          children: [
                            (0, C.jsx)("h1", {
                              className:
                                "flex items-center justify-center text-2xl font-semibold dark:text-white",
                              children: (0, C.jsx)("div", {
                                className:
                                  "rounded-full dark:bg-gray-600 bg-gray-200 flex justify-center items-center p-2",
                                children: (0, C.jsx)(h.oF6, {
                                  size: 30,
                                  className: "m-0 p-0",
                                }),
                              }),
                            }),
                            (0, C.jsxs)(i.Z, {
                              layout: "vertical",
                              onFinish: V,
                              onFinishFailed: function (e) {
                                y.Am.error(e);
                              },
                              name: "basic",
                              initialValues: {
                                remember: !!localStorage.getItem("remember"),
                                email:
                                  (null ===
                                    (T = JSON.parse(
                                      localStorage.getItem("__uc")
                                    )) || void 0 === T
                                    ? void 0
                                    : T.ue) || "",
                                password:
                                  (null ===
                                    (B = JSON.parse(
                                      localStorage.getItem("__uc")
                                    )) || void 0 === B
                                    ? void 0
                                    : B.up) || "",
                              },
                              children: [
                                (0, C.jsx)(i.Z.Item, {
                                  label: (0, C.jsx)("h1", {
                                    className:
                                      "text-lg font-semibold dark:text-white",
                                    children: "Email",
                                  }),
                                  name: "email",
                                  className: "mt-5 w-full",
                                  rules: [
                                    {
                                      required: !0,
                                      message: "Please input your email!",
                                    },
                                  ],
                                  children: (0, C.jsx)(c.Z, {
                                    type: "email",
                                    size: "large",
                                    prefix: (0, C.jsx)(p.ixJ, { size: 25 }),
                                    placeholder: "Email",
                                  }),
                                }),
                                (0, C.jsx)(i.Z.Item, {
                                  label: (0, C.jsx)("h1", {
                                    className:
                                      "text-lg font-semibold dark:text-white",
                                    children: "Password",
                                  }),
                                  name: "password",
                                  className: "mt-10 w-full",
                                  rules: [
                                    {
                                      required: !0,
                                      message: "Please input your password!",
                                    },
                                  ],
                                  children: (0, C.jsx)(c.Z.Password, {
                                    type: "password",
                                    size: "large",
                                    prefix: (0, C.jsx)(m.o1l, { size: 25 }),
                                    placeholder: "Password",
                                  }),
                                }),
                                (0, C.jsx)(i.Z.Item, {
                                  name: "remember",
                                  valuePropName: "checked",
                                  children: (0, C.jsx)(u.Z, {
                                    className: "dark:text-white",
                                    children: "Remember me",
                                  }),
                                }),
                                (0, C.jsx)(i.Z.Item, {
                                  children: (0, C.jsx)(d.Z, {
                                    type: "primary",
                                    htmlType: "submit",
                                    className: "mt-5 w-full",
                                    size: "large",
                                    children: "Submit",
                                  }),
                                }),
                                (0, C.jsx)(x.rU, {
                                  to: "/forgot-password",
                                  children: (0, C.jsx)("p", {
                                    className:
                                      "normal-transition text-center text-base dark:text-gray-300 underline dark:hover:text-white",
                                    children: "Forgot Password",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
          : (0, C.jsx)(v.Fg, { to: "/registration" });
      };
    },
    2014: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var r = n(4942),
        a = n(7462),
        o = n(2791),
        l = n(1694),
        s = n.n(l),
        i = n(8083),
        c = n(3433),
        u = n(9439),
        d = n(1818),
        p = n(9077),
        f = function (e, t) {
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
        m = o.createContext(null),
        h = function (e, t) {
          var n = e.defaultValue,
            l = e.children,
            i = e.options,
            h = void 0 === i ? [] : i,
            v = e.prefixCls,
            x = e.className,
            g = e.style,
            y = e.onChange,
            b = f(e, [
              "defaultValue",
              "children",
              "options",
              "prefixCls",
              "className",
              "style",
              "onChange",
            ]),
            k = o.useContext(p.E_),
            Z = k.getPrefixCls,
            j = k.direction,
            C = o.useState(b.value || n || []),
            N = (0, u.Z)(C, 2),
            O = N[0],
            S = N[1],
            E = o.useState([]),
            _ = (0, u.Z)(E, 2),
            I = _[0],
            P = _[1];
          o.useEffect(
            function () {
              "value" in b && S(b.value || []);
            },
            [b.value]
          );
          var F = function () {
              return h.map(function (e) {
                return "string" === typeof e || "number" === typeof e
                  ? { label: e, value: e }
                  : e;
              });
            },
            A = Z("checkbox", v),
            K = "".concat(A, "-group"),
            T = (0, d.Z)(b, ["value", "disabled"]);
          h &&
            h.length > 0 &&
            (l = F().map(function (e) {
              return o.createElement(
                w,
                {
                  prefixCls: A,
                  key: e.value.toString(),
                  disabled: "disabled" in e ? e.disabled : b.disabled,
                  value: e.value,
                  checked: -1 !== O.indexOf(e.value),
                  onChange: e.onChange,
                  className: "".concat(K, "-item"),
                  style: e.style,
                },
                e.label
              );
            }));
          var B = {
              toggleOption: function (e) {
                var t = O.indexOf(e.value),
                  n = (0, c.Z)(O);
                -1 === t ? n.push(e.value) : n.splice(t, 1),
                  "value" in b || S(n);
                var r = F();
                null === y ||
                  void 0 === y ||
                  y(
                    n
                      .filter(function (e) {
                        return -1 !== I.indexOf(e);
                      })
                      .sort(function (e, t) {
                        return (
                          r.findIndex(function (t) {
                            return t.value === e;
                          }) -
                          r.findIndex(function (e) {
                            return e.value === t;
                          })
                        );
                      })
                  );
              },
              value: O,
              disabled: b.disabled,
              name: b.name,
              registerValue: function (e) {
                P(function (t) {
                  return [].concat((0, c.Z)(t), [e]);
                });
              },
              cancelValue: function (e) {
                P(function (t) {
                  return t.filter(function (t) {
                    return t !== e;
                  });
                });
              },
            },
            V = s()(K, (0, r.Z)({}, "".concat(K, "-rtl"), "rtl" === j), x);
          return o.createElement(
            "div",
            (0, a.Z)({ className: V, style: g }, T, { ref: t }),
            o.createElement(m.Provider, { value: B }, l)
          );
        },
        v = o.forwardRef(h),
        x = o.memo(v),
        g = n(4824),
        y = function (e, t) {
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
        b = function (e, t) {
          var n,
            l = e.prefixCls,
            c = e.className,
            u = e.children,
            d = e.indeterminate,
            f = void 0 !== d && d,
            h = e.style,
            v = e.onMouseEnter,
            x = e.onMouseLeave,
            b = e.skipGroup,
            k = void 0 !== b && b,
            w = y(e, [
              "prefixCls",
              "className",
              "children",
              "indeterminate",
              "style",
              "onMouseEnter",
              "onMouseLeave",
              "skipGroup",
            ]),
            Z = o.useContext(p.E_),
            j = Z.getPrefixCls,
            C = Z.direction,
            N = o.useContext(m),
            O = o.useRef(w.value);
          o.useEffect(function () {
            null === N || void 0 === N || N.registerValue(w.value),
              (0, g.Z)(
                "checked" in w || !!N || !("value" in w),
                "Checkbox",
                "`value` is not a valid prop, do you mean `checked`?"
              );
          }, []),
            o.useEffect(
              function () {
                if (!k)
                  return (
                    w.value !== O.current &&
                      (null === N || void 0 === N || N.cancelValue(O.current),
                      null === N || void 0 === N || N.registerValue(w.value),
                      (O.current = w.value)),
                    function () {
                      return null === N || void 0 === N
                        ? void 0
                        : N.cancelValue(w.value);
                    }
                  );
              },
              [w.value]
            );
          var S = j("checkbox", l),
            E = (0, a.Z)({}, w);
          N &&
            !k &&
            ((E.onChange = function () {
              w.onChange && w.onChange.apply(w, arguments),
                N.toggleOption && N.toggleOption({ label: u, value: w.value });
            }),
            (E.name = N.name),
            (E.checked = -1 !== N.value.indexOf(w.value)),
            (E.disabled = w.disabled || N.disabled));
          var _ = s()(
              ((n = {}),
              (0, r.Z)(n, "".concat(S, "-wrapper"), !0),
              (0, r.Z)(n, "".concat(S, "-rtl"), "rtl" === C),
              (0, r.Z)(n, "".concat(S, "-wrapper-checked"), E.checked),
              (0, r.Z)(n, "".concat(S, "-wrapper-disabled"), E.disabled),
              n),
              c
            ),
            I = s()((0, r.Z)({}, "".concat(S, "-indeterminate"), f));
          return o.createElement(
            "label",
            { className: _, style: h, onMouseEnter: v, onMouseLeave: x },
            o.createElement(
              i.Z,
              (0, a.Z)({}, E, { prefixCls: S, className: I, ref: t })
            ),
            void 0 !== u && o.createElement("span", null, u)
          );
        },
        k = o.forwardRef(b);
      k.displayName = "Checkbox";
      var w = k,
        Z = w;
      (Z.Group = x), (Z.__ANT_CHECKBOX = !0);
      var j = Z;
    },
    8083: function (e, t, n) {
      var r = n(7462),
        a = n(4942),
        o = n(4925),
        l = n(1413),
        s = n(5671),
        i = n(3144),
        c = n(9340),
        u = n(8557),
        d = n(2791),
        p = n(1694),
        f = n.n(p),
        m = (function (e) {
          (0, c.Z)(n, e);
          var t = (0, u.Z)(n);
          function n(e) {
            var r;
            (0, s.Z)(this, n),
              ((r = t.call(this, e)).handleChange = function (e) {
                var t = r.props,
                  n = t.disabled,
                  a = t.onChange;
                n ||
                  ("checked" in r.props ||
                    r.setState({ checked: e.target.checked }),
                  a &&
                    a({
                      target: (0, l.Z)(
                        (0, l.Z)({}, r.props),
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
              (r.saveInput = function (e) {
                r.input = e;
              });
            var a = "checked" in e ? e.checked : e.defaultChecked;
            return (r.state = { checked: a }), r;
          }
          return (
            (0, i.Z)(
              n,
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
                      t = this.props,
                      n = t.prefixCls,
                      l = t.className,
                      s = t.style,
                      i = t.name,
                      c = t.id,
                      u = t.type,
                      p = t.disabled,
                      m = t.readOnly,
                      h = t.tabIndex,
                      v = t.onClick,
                      x = t.onFocus,
                      g = t.onBlur,
                      y = t.onKeyDown,
                      b = t.onKeyPress,
                      k = t.onKeyUp,
                      w = t.autoFocus,
                      Z = t.value,
                      j = t.required,
                      C = (0, o.Z)(t, [
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
                      N = Object.keys(C).reduce(function (e, t) {
                        return (
                          ("aria-" !== t.substr(0, 5) &&
                            "data-" !== t.substr(0, 5) &&
                            "role" !== t) ||
                            (e[t] = C[t]),
                          e
                        );
                      }, {}),
                      O = this.state.checked,
                      S = f()(
                        n,
                        l,
                        ((e = {}),
                        (0, a.Z)(e, "".concat(n, "-checked"), O),
                        (0, a.Z)(e, "".concat(n, "-disabled"), p),
                        e)
                      );
                    return d.createElement(
                      "span",
                      { className: S, style: s },
                      d.createElement(
                        "input",
                        (0, r.Z)(
                          {
                            name: i,
                            id: c,
                            type: u,
                            required: j,
                            readOnly: m,
                            disabled: p,
                            tabIndex: h,
                            className: "".concat(n, "-input"),
                            checked: !!O,
                            onClick: v,
                            onFocus: x,
                            onBlur: g,
                            onKeyUp: k,
                            onKeyDown: y,
                            onKeyPress: b,
                            onChange: this.handleChange,
                            autoFocus: w,
                            ref: this.saveInput,
                            value: Z,
                          },
                          N
                        )
                      ),
                      d.createElement("span", {
                        className: "".concat(n, "-inner"),
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return "checked" in e
                      ? (0, l.Z)((0, l.Z)({}, t), {}, { checked: e.checked })
                      : null;
                  },
                },
              ]
            ),
            n
          );
        })(d.Component);
      (m.defaultProps = {
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
        (t.Z = m);
    },
    5868: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var r = n(3433),
        a = n(4506),
        o = n(181);
      function l(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (0, o.Z)(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var l,
          s = !0,
          i = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (i = !0), (l = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (i) throw l;
            }
          },
        };
      }
      var s = n(5861),
        i = n(7757),
        c = n.n(i),
        u = n(2791),
        d = c().mark(w),
        p = c().mark(Z),
        f = c().mark(j);
      function m(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (
          (h = (0, s.Z)(
            c().mark(function e(t) {
              var n,
                r,
                a,
                o,
                l,
                s,
                i = arguments;
              return c().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      for (
                        n = i.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
                        a < n;
                        a++
                      )
                        r[a - 1] = i[a];
                      (o = 0), (l = r);
                    case 2:
                      if (!(o < l.length)) {
                        e.next = 21;
                        break;
                      }
                      (s = l[o]),
                        (e.t0 = typeof s),
                        (e.next =
                          "string" === e.t0
                            ? 7
                            : "number" === e.t0
                            ? 10
                            : "function" === e.t0
                            ? 13
                            : 16);
                      break;
                    case 7:
                      return (e.next = 9), v(t, s);
                    case 9:
                      return e.abrupt("break", 18);
                    case 10:
                      return (e.next = 12), g(s);
                    case 12:
                      return e.abrupt("break", 18);
                    case 13:
                      return (e.next = 15), s.apply(void 0, [t].concat(r));
                    case 15:
                      return e.abrupt("break", 18);
                    case 16:
                      return (e.next = 18), s;
                    case 18:
                      o++, (e.next = 2);
                      break;
                    case 21:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          h.apply(this, arguments)
        );
      }
      function v(e, t) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = (0, s.Z)(
          c().mark(function e(t, n) {
            var a;
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = C(t.textContent, n)),
                      (e.next = 3),
                      b(
                        t,
                        [].concat(
                          (0, r.Z)(j(t.textContent, a)),
                          (0, r.Z)(Z(n, a))
                        )
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function g(e) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = (0, s.Z)(
          c().mark(function e(t) {
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise(function (e) {
                        return setTimeout(e, t);
                      })
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function b(e, t) {
        return k.apply(this, arguments);
      }
      function k() {
        return (
          (k = (0, s.Z)(
            c().mark(function e(t, n) {
              var r,
                a,
                o,
                s = arguments;
              return c().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (r = s.length > 2 && void 0 !== s[2] ? s[2] : 60),
                          (a = l(w(n))),
                          (e.prev = 2),
                          a.s();
                      case 4:
                        if ((o = a.n()).done) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (0, o.value)(t),
                          (e.next = 9),
                          g(r + r * (Math.random() - 0.5))
                        );
                      case 9:
                        e.next = 4;
                        break;
                      case 11:
                        e.next = 16;
                        break;
                      case 13:
                        (e.prev = 13), (e.t0 = e.catch(2)), a.e(e.t0);
                      case 16:
                        return (e.prev = 16), a.f(), e.finish(16);
                      case 19:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 13, 16, 19]]
              );
            })
          )),
          k.apply(this, arguments)
        );
      }
      function w(e) {
        var t, n, r;
        return c().wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  (t = l(e)),
                    (a.prev = 1),
                    (r = c().mark(function e() {
                      var t;
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = n.value),
                                (e.next = 3),
                                function (e) {
                                  return requestAnimationFrame(function () {
                                    return (e.textContent = t);
                                  });
                                }
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })),
                    t.s();
                case 4:
                  if ((n = t.n()).done) {
                    a.next = 8;
                    break;
                  }
                  return a.delegateYield(r(), "t0", 6);
                case 6:
                  a.next = 4;
                  break;
                case 8:
                  a.next = 13;
                  break;
                case 10:
                  (a.prev = 10), (a.t1 = a.catch(1)), t.e(a.t1);
                case 13:
                  return (a.prev = 13), t.f(), a.finish(13);
                case 16:
                case "end":
                  return a.stop();
              }
          },
          d,
          null,
          [[1, 10, 13, 16]]
        );
      }
      function Z(e) {
        var t,
          n,
          r,
          o,
          l = arguments;
        return c().wrap(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                (t = (0, a.Z)(e)),
                  (n = t.slice(0)),
                  (r = l.length > 1 && void 0 !== l[1] ? l[1] : 0),
                  (o = l.length > 2 && void 0 !== l[2] ? l[2] : n.length);
              case 3:
                if (!(r < o)) {
                  s.next = 8;
                  break;
                }
                return (s.next = 6), n.slice(0, ++r).join("");
              case 6:
                s.next = 3;
                break;
              case 8:
              case "end":
                return s.stop();
            }
        }, p);
      }
      function j(e) {
        var t,
          n,
          r,
          o,
          l = arguments;
        return c().wrap(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                (t = (0, a.Z)(e)),
                  (n = t.slice(0)),
                  (r = l.length > 1 && void 0 !== l[1] ? l[1] : 0),
                  (o = l.length > 2 && void 0 !== l[2] ? l[2] : n.length);
              case 3:
                if (!(o > r)) {
                  s.next = 8;
                  break;
                }
                return (s.next = 6), n.slice(0, --o).join("");
              case 6:
                s.next = 3;
                break;
              case 8:
              case "end":
                return s.stop();
            }
        }, f);
      }
      function C(e, t) {
        var n = (0, a.Z)(t).slice(0);
        return [].concat((0, r.Z)(e), [NaN]).findIndex(function (e, t) {
          return n[t] !== e;
        });
      }
      var N = "styles_typicalWrapper__1_Uvh";
      !(function (e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" !== typeof document) {
          var r = document.head || document.getElementsByTagName("head")[0],
            a = document.createElement("style");
          (a.type = "text/css"),
            "top" === n && r.firstChild
              ? r.insertBefore(a, r.firstChild)
              : r.appendChild(a),
            a.styleSheet
              ? (a.styleSheet.cssText = e)
              : a.appendChild(document.createTextNode(e));
        }
      })(
        '.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}'
      );
      var O = function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
          return Array.from(e);
        },
        S = (0, u.memo)(function (e) {
          var t = e.steps,
            n = e.loop,
            r = e.className,
            a = e.wrapper,
            o = void 0 === a ? "p" : a,
            l = (0, u.useRef)(null),
            s = o,
            i = [N];
          return (
            r && i.unshift(r),
            (0, u.useEffect)(function () {
              n === 1 / 0
                ? m.apply(void 0, [l.current].concat(O(t), [m]))
                : "number" === typeof n
                ? m.apply(
                    void 0,
                    [l.current].concat(O(Array(n).fill(t).flat()))
                  )
                : m.apply(void 0, [l.current].concat(O(t)));
            }),
            u.createElement(s, { ref: l, className: i.join(" ") })
          );
        });
    },
  },
]);
//# sourceMappingURL=636.b08582fc.chunk.js.map
