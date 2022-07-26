"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [765],
  {
    6625: function (e, t, r) {
      var n = r(9439),
        a = r(9220),
        s = r(2791),
        i = r(3853),
        o = r(6355),
        l = r(184);
      t.Z = function (e) {
        var t = e.hideButton,
          r = (0, s.useState)("dark"),
          c = (0, n.Z)(r, 2),
          u = c[0],
          d = c[1];
        return (
          (0, s.useEffect)(
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
            : (0, l.jsx)("button", {
                onClick: function () {
                  "dark" === u
                    ? (localStorage.setItem("theme", "light"), d("light"))
                    : (localStorage.setItem("theme", "dark"), d("dark"));
                },
                className:
                  "cursor-pointer text-gray-600 transition-all ease-in-out hover:text-black dark:text-gray-500 dark:hover:text-white",
                children:
                  "dark" === u
                    ? (0, l.jsx)(a.Z, {
                        placement: "bottomRight",
                        title: (0, l.jsx)("span", {
                          children: "Toggle to light mode",
                        }),
                        children: (0, l.jsx)(i.kXG, {
                          className:
                            "bi bi-brightness-high-fill normal-transition text-xl text-gray-600 hover:text-black active:animate-ping dark:text-gray-500 dark:hover:text-white",
                        }),
                      })
                    : (0, l.jsx)(a.Z, {
                        placement: "bottomRight",
                        title: (0, l.jsx)("span", {
                          children: "Toggle to dark mode",
                        }),
                        children: (0, l.jsx)(o.TLr, {
                          className:
                            "bi bi-moon-stars-fill normal-transition text-xl text-gray-600 hover:text-black active:animate-ping dark:text-gray-500 dark:hover:text-white",
                        }),
                      }),
              })
        );
      };
    },
    9765: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return Z;
          },
        });
      var n = r(5861),
        a = r(7757),
        s = r.n(a),
        i = (r(2791), r(9823)),
        o = r(8678),
        l = r(7309),
        c = r(6856),
        u = r(5868),
        d = r(3853),
        m = r(8820),
        p = r(6871),
        h = r(3504),
        f = r(8704),
        x = r(577),
        g = r(1033),
        v = r(2419),
        w = r(2065),
        b = r(9126),
        y = r(5675),
        k = r(6625),
        j = r(6570),
        N = r(184);
      function Z() {
        var e,
          t,
          r = (0, f.b)(),
          a = r.auth,
          Z = r.authDispatch,
          P = (0, v.ZP)("/users/hasSuperAdmin", w.Z).data,
          A = (function () {
            var e = (0, n.Z)(
              s().mark(function e(t) {
                var r, n, a, i, o, l, c;
                return s().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = t.name),
                            (n = t.email),
                            (a = t.password),
                            (i = t.confirmPassword),
                            (o = t.phoneNumber),
                            (e.prev = 1),
                            a !== i)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 5),
                            g.Z.post("/auth/registration", {
                              name: r,
                              phoneNumber: o,
                              email: n,
                              password: a,
                              role: "superAdmin",
                            })
                          );
                        case 5:
                          return (
                            (l = e.sent),
                            (c = l.data),
                            (e.next = 9),
                            g.Z.post("/roles", {
                              role: "superAdmin",
                              accessRoutes: ["*"],
                            })
                          );
                        case 9:
                          Z({ type: y.th, payload: c.data.accessToken }),
                            (e.next = 13);
                          break;
                        case 12:
                          x.Am.error("Password does not match");
                        case 13:
                          e.next = 18;
                          break;
                        case 15:
                          (e.prev = 15),
                            (e.t0 = e.catch(1)),
                            x.Am.error(e.t0.response.data.message);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 15]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return !a ||
          ("admin" !==
            (null === (e = a.user) || void 0 === e ? void 0 : e.role) &&
            "superAdmin" !==
              (null === (t = a.user) || void 0 === t ? void 0 : t.role))
          ? P && null !== P && void 0 !== P && P.hasSuperAdmin
            ? (0, N.jsx)(p.Fg, { to: "/login" })
            : (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)("div", {
                    className: "absolute right-5 top-5 z-10",
                    children: (0, N.jsx)(k.Z, { hideButton: !0 }),
                  }),
                  (0, N.jsxs)("div", {
                    className:
                      "relative grid h-screen w-screen grid-cols-1 overflow-hidden lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
                    children: [
                      (0, N.jsxs)("div", {
                        className:
                          "relative hidden lg:col-span-2 lg:block xl:col-span-3 2xl:col-span-4",
                        children: [
                          (0, N.jsx)("img", {
                            className: "h-full w-auto brightness-50",
                            src: "/login-image.png",
                            alt: "login",
                          }),
                          (0, N.jsxs)("div", {
                            className:
                              "absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md",
                            children: [
                              (0, N.jsx)("img", {
                                className: "h-20 w-20",
                                src: "/logo192.png",
                                alt: "logo",
                              }),
                              (0, N.jsx)("h1", {
                                className: "text-white xl:text-5xl",
                                children: j.iC,
                              }),
                              (0, N.jsx)("div", {
                                className: "text-2xl text-white",
                                children: (0, N.jsx)(u.Z, {
                                  steps: [j.y$, 2e3, j.gc, 3e3],
                                  loop: 1 / 0,
                                  wrapper: "p",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, N.jsx)("div", {
                        className:
                          "flex h-full w-full items-center dark:bg-dark px-5 pt-10 backdrop-blur-lg dark:lg:bg-dark",
                        children: (0, N.jsxs)("div", {
                          className: "w-full",
                          children: [
                            (0, N.jsx)("h1", {
                              className:
                                "flex items-center justify-center text-2xl font-semibold dark:text-white",
                              children: (0, N.jsx)("div", {
                                className:
                                  "rounded-full dark:bg-gray-600 bg-gray-200 flex justify-center items-center p-2",
                                children: (0, N.jsx)(m.oF6, {
                                  size: 30,
                                  className: "m-0 p-0",
                                }),
                              }),
                            }),
                            (0, N.jsxs)(i.Z, {
                              layout: "vertical",
                              onFinish: A,
                              onFinishFailed: function (e) {
                                x.Am.error(e);
                              },
                              name: "basic",
                              children: [
                                (0, N.jsx)(i.Z.Item, {
                                  label: (0, N.jsx)("h1", {
                                    className:
                                      "text-lg font-semibold dark:text-white",
                                    children: "Name",
                                  }),
                                  name: "name",
                                  className: "mt-5 w-full",
                                  rules: [
                                    {
                                      required: !0,
                                      message: "Please input your name!",
                                    },
                                  ],
                                  children: (0, N.jsx)(o.Z, {
                                    type: "text",
                                    size: "large",
                                    prefix: (0, N.jsx)(b._Tb, { size: 25 }),
                                    placeholder: "Name",
                                  }),
                                }),
                                (0, N.jsx)(i.Z.Item, {
                                  label: (0, N.jsx)("h1", {
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
                                  children: (0, N.jsx)(o.Z, {
                                    type: "email",
                                    size: "large",
                                    prefix: (0, N.jsx)(c.ixJ, { size: 25 }),
                                    placeholder: "Email",
                                  }),
                                }),
                                (0, N.jsx)(i.Z.Item, {
                                  label: (0, N.jsx)("h1", {
                                    className:
                                      "text-lg font-semibold dark:text-white",
                                    children: "Phone Number",
                                  }),
                                  name: "phoneNumber",
                                  className: "mt-5 w-full",
                                  rules: [
                                    {
                                      required: !0,
                                      message:
                                        "Please input your phone number!",
                                    },
                                  ],
                                  children: (0, N.jsx)(o.Z, {
                                    type: "tel",
                                    size: "large",
                                    prefix: (0, N.jsx)(b.UL8, { size: 25 }),
                                    placeholder: "Email",
                                  }),
                                }),
                                (0, N.jsx)(i.Z.Item, {
                                  label: (0, N.jsx)("h1", {
                                    className:
                                      "text-lg font-semibold dark:text-white",
                                    children: "Password",
                                  }),
                                  name: "password",
                                  dependencies: ["confirmPassword"],
                                  hasFeedback: !0,
                                  className: "mt-10 w-full",
                                  rules: [
                                    {
                                      required: !0,
                                      message: "Please input your password!",
                                    },
                                    function (e) {
                                      var t = e.getFieldValue;
                                      return {
                                        validator: function (e, r) {
                                          return r && t("confirmPassword") !== r
                                            ? Promise.reject(
                                                new Error(
                                                  "The two passwords that you entered do not match!"
                                                )
                                              )
                                            : Promise.resolve();
                                        },
                                      };
                                    },
                                  ],
                                  children: (0, N.jsx)(o.Z.Password, {
                                    type: "password",
                                    size: "large",
                                    prefix: (0, N.jsx)(d.o1l, { size: 25 }),
                                    placeholder: "Password",
                                  }),
                                }),
                                (0, N.jsx)(i.Z.Item, {
                                  label: (0, N.jsx)("h1", {
                                    className:
                                      "text-lg font-semibold dark:text-white",
                                    children: "Confirm Password",
                                  }),
                                  dependencies: ["password"],
                                  hasFeedback: !0,
                                  name: "confirmPassword",
                                  className: "mt-10 w-full",
                                  rules: [
                                    {
                                      required: !0,
                                      message: "Please input your password!",
                                    },
                                    function (e) {
                                      var t = e.getFieldValue;
                                      return {
                                        validator: function (e, r) {
                                          return r && t("password") !== r
                                            ? Promise.reject(
                                                new Error(
                                                  "The two passwords that you entered do not match!"
                                                )
                                              )
                                            : Promise.resolve();
                                        },
                                      };
                                    },
                                  ],
                                  children: (0, N.jsx)(o.Z.Password, {
                                    type: "password",
                                    size: "large",
                                    prefix: (0, N.jsx)(d.o1l, { size: 25 }),
                                    placeholder: "Password",
                                  }),
                                }),
                                (0, N.jsx)(i.Z.Item, {
                                  children: (0, N.jsx)(l.Z, {
                                    type: "primary",
                                    htmlType: "submit",
                                    className: "mt-5 w-full",
                                    size: "large",
                                    children: "Submit",
                                  }),
                                }),
                                (0, N.jsx)(h.rU, {
                                  to: "/forgot-password",
                                  children: (0, N.jsx)("p", {
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
          : (0, N.jsx)(p.Fg, { to: "/" });
      }
    },
    2065: function (e, t, r) {
      var n = r(1033);
      t.Z = function (e) {
        return n.Z.get(e).then(function (e) {
          return e.data;
        });
      };
    },
    5868: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return _;
        },
      });
      var n = r(3433),
        a = r(4506),
        s = r(181);
      function i(e, t) {
        var r =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (0, s.Z)(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
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
        var i,
          o = !0,
          l = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (l = !0), (i = e);
          },
          f: function () {
            try {
              o || null == r.return || r.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      var o = r(5861),
        l = r(7757),
        c = r.n(l),
        u = r(2791),
        d = c().mark(k),
        m = c().mark(j),
        p = c().mark(N);
      function h(e) {
        return f.apply(this, arguments);
      }
      function f() {
        return (
          (f = (0, o.Z)(
            c().mark(function e(t) {
              var r,
                n,
                a,
                s,
                i,
                o,
                l = arguments;
              return c().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      for (
                        r = l.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
                        a < r;
                        a++
                      )
                        n[a - 1] = l[a];
                      (s = 0), (i = n);
                    case 2:
                      if (!(s < i.length)) {
                        e.next = 21;
                        break;
                      }
                      (o = i[s]),
                        (e.t0 = typeof o),
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
                      return (e.next = 9), x(t, o);
                    case 9:
                      return e.abrupt("break", 18);
                    case 10:
                      return (e.next = 12), v(o);
                    case 12:
                      return e.abrupt("break", 18);
                    case 13:
                      return (e.next = 15), o.apply(void 0, [t].concat(n));
                    case 15:
                      return e.abrupt("break", 18);
                    case 16:
                      return (e.next = 18), o;
                    case 18:
                      s++, (e.next = 2);
                      break;
                    case 21:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          f.apply(this, arguments)
        );
      }
      function x(e, t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, o.Z)(
          c().mark(function e(t, r) {
            var a;
            return c().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = Z(t.textContent, r)),
                      (e.next = 3),
                      b(
                        t,
                        [].concat(
                          (0, n.Z)(N(t.textContent, a)),
                          (0, n.Z)(j(r, a))
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
      function v(e) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = (0, o.Z)(
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
        return y.apply(this, arguments);
      }
      function y() {
        return (
          (y = (0, o.Z)(
            c().mark(function e(t, r) {
              var n,
                a,
                s,
                o = arguments;
              return c().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = o.length > 2 && void 0 !== o[2] ? o[2] : 60),
                          (a = i(k(r))),
                          (e.prev = 2),
                          a.s();
                      case 4:
                        if ((s = a.n()).done) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (0, s.value)(t),
                          (e.next = 9),
                          v(n + n * (Math.random() - 0.5))
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
          y.apply(this, arguments)
        );
      }
      function k(e) {
        var t, r, n;
        return c().wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  (t = i(e)),
                    (a.prev = 1),
                    (n = c().mark(function e() {
                      var t;
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = r.value),
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
                  if ((r = t.n()).done) {
                    a.next = 8;
                    break;
                  }
                  return a.delegateYield(n(), "t0", 6);
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
      function j(e) {
        var t,
          r,
          n,
          s,
          i = arguments;
        return c().wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                (t = (0, a.Z)(e)),
                  (r = t.slice(0)),
                  (n = i.length > 1 && void 0 !== i[1] ? i[1] : 0),
                  (s = i.length > 2 && void 0 !== i[2] ? i[2] : r.length);
              case 3:
                if (!(n < s)) {
                  o.next = 8;
                  break;
                }
                return (o.next = 6), r.slice(0, ++n).join("");
              case 6:
                o.next = 3;
                break;
              case 8:
              case "end":
                return o.stop();
            }
        }, m);
      }
      function N(e) {
        var t,
          r,
          n,
          s,
          i = arguments;
        return c().wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                (t = (0, a.Z)(e)),
                  (r = t.slice(0)),
                  (n = i.length > 1 && void 0 !== i[1] ? i[1] : 0),
                  (s = i.length > 2 && void 0 !== i[2] ? i[2] : r.length);
              case 3:
                if (!(s > n)) {
                  o.next = 8;
                  break;
                }
                return (o.next = 6), r.slice(0, --s).join("");
              case 6:
                o.next = 3;
                break;
              case 8:
              case "end":
                return o.stop();
            }
        }, p);
      }
      function Z(e, t) {
        var r = (0, a.Z)(t).slice(0);
        return [].concat((0, n.Z)(e), [NaN]).findIndex(function (e, t) {
          return r[t] !== e;
        });
      }
      var P = "styles_typicalWrapper__1_Uvh";
      !(function (e, t) {
        void 0 === t && (t = {});
        var r = t.insertAt;
        if (e && "undefined" !== typeof document) {
          var n = document.head || document.getElementsByTagName("head")[0],
            a = document.createElement("style");
          (a.type = "text/css"),
            "top" === r && n.firstChild
              ? n.insertBefore(a, n.firstChild)
              : n.appendChild(a),
            a.styleSheet
              ? (a.styleSheet.cssText = e)
              : a.appendChild(document.createTextNode(e));
        }
      })(
        '.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}'
      );
      var A = function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
          }
          return Array.from(e);
        },
        _ = (0, u.memo)(function (e) {
          var t = e.steps,
            r = e.loop,
            n = e.className,
            a = e.wrapper,
            s = void 0 === a ? "p" : a,
            i = (0, u.useRef)(null),
            o = s,
            l = [P];
          return (
            n && l.unshift(n),
            (0, u.useEffect)(function () {
              r === 1 / 0
                ? h.apply(void 0, [i.current].concat(A(t), [h]))
                : "number" === typeof r
                ? h.apply(
                    void 0,
                    [i.current].concat(A(Array(r).fill(t).flat()))
                  )
                : h.apply(void 0, [i.current].concat(A(t)));
            }),
            u.createElement(o, { ref: i, className: l.join(" ") })
          );
        });
    },
  },
]);
//# sourceMappingURL=765.fe1bf251.chunk.js.map
