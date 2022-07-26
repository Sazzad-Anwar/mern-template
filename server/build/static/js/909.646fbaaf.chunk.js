"use strict";
(self.webpackChunkadmin_pwa = self.webpackChunkadmin_pwa || []).push([
  [909],
  {
    8909: function (e, t, a) {
      a.r(t);
      var r = a(1413),
        s = a(5861),
        n = a(9439),
        d = a(7757),
        i = a.n(d),
        l = a(2791),
        u = a(9126),
        o = a(2896),
        c = a(2888),
        m = a(1033),
        b = a(7528),
        x = a(184),
        h = (0, l.lazy)(function () {
          return a.e(939).then(a.t.bind(a, 1939, 23));
        });
      t.default = function (e) {
        var t,
          a = e.api,
          d = e.index,
          f = (0, l.useState)(!1),
          y = (0, n.Z)(f, 2),
          p = y[0],
          g = y[1],
          j = (0, l.useState)("body"),
          k = (0, n.Z)(j, 2),
          v = k[0],
          w = k[1],
          S = (0, l.useState)({}),
          N = (0, n.Z)(S, 2),
          T = N[0],
          q = N[1],
          Z = (0, l.useState)(!1),
          O = (0, n.Z)(Z, 2),
          R = O[0],
          _ = O[1],
          C = (0, l.useState)([]),
          D = (0, n.Z)(C, 2),
          z = D[0],
          E = D[1],
          P = (0, l.useState)(14),
          V = (0, n.Z)(P, 2),
          H = V[0],
          B = V[1],
          F = (0, l.useState)({}),
          I = (0, n.Z)(F, 2),
          M = I[0],
          W = I[1],
          A = (0, l.useState)({}),
          G = (0, n.Z)(A, 2),
          L = G[0],
          Q = G[1],
          U = (0, l.useState)({}),
          Y = (0, n.Z)(U, 2),
          J = Y[0],
          K = Y[1],
          X = (0, l.useState)({ status: "", statusText: "", time: "0 ms" }),
          $ = (0, n.Z)(X, 2),
          ee = $[0],
          te = $[1],
          ae = {
            overflowWrap: "break-word",
            wordBreak: "break-all",
            width: "100%",
            fontSize: H,
            padding: "1.5rem 1rem",
            maxHeight: "600px",
            overflowY: "auto",
          };
        (0, l.useMemo)(
          function () {
            q(a.body.params),
              W(a.query.params),
              Q(a.headers.params),
              K(a.url.variables);
          },
          [a.body.params, a.headers.params, a.query.params, a.url.variables]
        );
        var re = (0, l.useCallback)(function (e) {
          E(e);
        }, []);
        (0, l.useEffect)(
          function () {
            a.headers.isRequired
              ? w("headers")
              : a.body.isRequired
              ? w("body")
              : a.query.isRequired
              ? w("query")
              : w("");
          },
          [a.body.isRequired, a.headers.isRequired, a.query.isRequired]
        );
        var se = (function () {
            var e = (0, s.Z)(
              i().mark(function e() {
                var t;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            _(!0),
                            (e.prev = 1),
                            m.Z.interceptors.request.use(
                              function (e) {
                                var t = (0, r.Z)({}, e);
                                return (
                                  (t.metadata = { startTime: new Date() }), t
                                );
                              },
                              function (e) {
                                return Promise.reject(e);
                              }
                            ),
                            m.Z.interceptors.response.use(
                              function (e) {
                                var t = (0, r.Z)({}, e);
                                return (
                                  (t.config.metadata.endTime = new Date()),
                                  (t.duration =
                                    t.config.metadata.endTime -
                                    t.config.metadata.startTime),
                                  t
                                );
                              },
                              function (e) {
                                var t = (0, r.Z)({}, e);
                                return (
                                  (t.config.metadata.endTime = new Date()),
                                  (t.duration =
                                    t.config.metadata.endTime -
                                    t.config.metadata.startTime),
                                  Promise.reject(t)
                                );
                              }
                            ),
                            (e.next = 6),
                            (0, m.Z)({
                              method: a.method,
                              url:
                                a.url.path +
                                (0 !== Object.keys(J).length
                                  ? "/".concat(Object.values(J))
                                  : ""),
                              headers: L,
                              params: M,
                              data:
                                a.body.isRequired && Object.keys(T).length > 0
                                  ? T
                                  : a.body.params,
                              timeout: 4e3,
                            })
                          );
                        case 6:
                          (t = e.sent),
                            re(t.data),
                            te({
                              status: t.status,
                              statusText: t.statusText,
                              time: t.duration + " ms",
                            }),
                            _(!1),
                            (e.next = 17);
                          break;
                        case 12:
                          (e.prev = 12),
                            (e.t0 = e.catch(1)),
                            re(e.t0.response.data),
                            te({
                              status: e.t0.response.status,
                              statusText: e.t0.response.statusText,
                              time: e.t0.duration + " ms",
                            }),
                            _(!1);
                        case 17:
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
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          ne = {
            method: a.method,
            url:
              c.T5 +
              a.url.path +
              (0 !== Object.keys(J).length ? "/".concat(Object.values(J)) : ""),
          };
        return (0, x.jsxs)("div", {
          className: "my-4",
          children: [
            (0, x.jsxs)("button", {
              onClick: function () {
                g(!p), 0 !== Object.keys(z).length && z.length >= 50 && re({});
              },
              className: "w-full cursor-pointer ".concat(
                p
                  ? "rounded-b-none rounded-tl-2xl rounded-tr-2xl"
                  : "rounded-full",
                " flex items-center border-transparent bg-white px-1 py-1 dark:border dark:border-gray-600 dark:bg-gray-800 "
              ),
              children: [
                (0, x.jsx)("span", {
                  className:
                    "flex items-center justify-center px-2.5 py-1 ".concat(
                      p
                        ? "bg-green-700 text-white dark:bg-green-600"
                        : "bg-gray-300 dark:bg-gray-600",
                      " mr-1 rounded-full font-medium  dark:text-white"
                    ),
                  children: d + 1,
                }),
                p
                  ? (0, x.jsx)(u.SZO, {
                      className:
                        "normal-transition font-ubuntu text-base font-medium dark:text-white lg:text-lg",
                    })
                  : (0, x.jsx)(u.AV3, {
                      className:
                        "normal-transition font-ubuntu text-base font-medium dark:text-white lg:text-lg",
                    }),
                (0, x.jsxs)("h1", {
                  className:
                    "font-ubuntu ml-3 text-base font-medium dark:text-white lg:text-lg",
                  children: [
                    a.name,
                    " ",
                    (0, x.jsx)(b.Z, {
                      color:
                        "GET" === a.method
                          ? "green"
                          : "POST" === a.method
                          ? "geekblue"
                          : "PUT" === a.method
                          ? "purple"
                          : "red",
                      children: a.method,
                    }),
                  ],
                }),
              ],
            }),
            p &&
              (0, x.jsxs)("div", {
                className:
                  "border-t-none animate__animated animate__fadeIn rounded-t-none rounded-bl-2xl rounded-br-2xl border-0 border-gray-400 bg-white py-3 px-5 dark:border dark:border-gray-600 dark:bg-gray-900",
                children: [
                  (0, x.jsx)(l.Suspense, {
                    fallback: (0, x.jsx)(o.Z, {}),
                    children: (0, x.jsx)(h, {
                      src: ne,
                      name: !1,
                      onEdit: function (e) {
                        return q(e.updated_src);
                      },
                      iconStyle: "square",
                      style: ae,
                      theme: "bright",
                      displayDataTypes: !0,
                      displayObjectSize: !0,
                    }),
                  }),
                  (0, x.jsx)("h1", {
                    className:
                      "font-ubuntu my-3 text-lg font-semibold dark:text-white",
                    children: "Description:",
                  }),
                  (0, x.jsx)("div", {
                    className:
                      "font-ubuntu mb-5 rounded-md bg-gray-100 p-5 text-sm font-normal dark:bg-gray-800 dark:text-white",
                    dangerouslySetInnerHTML: {
                      __html: a.description ? a.description : "",
                    },
                  }),
                  (0, x.jsxs)("div", {
                    className: "flex w-full items-center",
                    children: [
                      [
                        { name: "headers", label: "Headers" },
                        { name: "body", label: "Body" },
                        { name: "query", label: "Query" },
                        { name: "pathVariables", label: "Path Variables" },
                      ].map(function (e) {
                        return (0, x.jsx)(
                          "div",
                          {
                            onClick: function () {
                              return w(e.name);
                            },
                            className: "".concat(
                              v === e.name
                                ? " border-b-2 border-gray-700 dark:border-[#FF6C37]"
                                : "border-b-2 border-transparent",
                              " font-ubuntu mr-5 cursor-pointer text-lg font-medium dark:text-white"
                            ),
                            children: e.label,
                          },
                          e.name
                        );
                      }),
                      (0, x.jsx)("button", {
                        onClick: se,
                        className:
                          "font-base lg:font-lg font-ubuntu normal-transition py-.5 items-end justify-self-end rounded-md border border-gray-600 px-3 font-medium hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white",
                        children: "Send",
                      }),
                    ],
                  }),
                  (0, x.jsx)("div", {
                    className: "my-4",
                    children:
                      a.body.isRequired && "body" === v
                        ? (0, x.jsx)(l.Suspense, {
                            fallback: (0, x.jsx)(o.Z, {}),
                            children: (0, x.jsx)(h, {
                              src: T,
                              name: !1,
                              onEdit: function (e) {
                                return q(e.updated_src);
                              },
                              iconStyle: "square",
                              style: ae,
                              theme: "bright",
                              displayDataTypes: !0,
                              displayObjectSize: !0,
                            }),
                          })
                        : null,
                  }),
                  (0, x.jsx)("div", {
                    className: "my-4",
                    children:
                      a.query.isRequired && "query" === v
                        ? (0, x.jsx)(l.Suspense, {
                            fallback: (0, x.jsx)(o.Z, {}),
                            children: (0, x.jsx)(h, {
                              src: M,
                              name: !1,
                              onEdit: function (e) {
                                return W(e.updated_src);
                              },
                              iconStyle: "square",
                              style: ae,
                              theme: "bright",
                              displayDataTypes: !0,
                              displayObjectSize: !0,
                            }),
                          })
                        : null,
                  }),
                  (0, x.jsx)("div", {
                    className: "my-4",
                    children:
                      a.headers.isRequired && "headers" === v
                        ? (0, x.jsx)(l.Suspense, {
                            fallback: (0, x.jsx)(o.Z, {}),
                            children: (0, x.jsx)(h, {
                              src: L,
                              name: !1,
                              onEdit: function (e) {
                                return Q(e.updated_src);
                              },
                              iconStyle: "square",
                              style: ae,
                              theme: "bright",
                              displayDataTypes: !0,
                              displayObjectSize: !0,
                            }),
                          })
                        : null,
                  }),
                  (0, x.jsx)("div", {
                    className: "my-4",
                    children:
                      0 !== Object.keys(a.url.variables).length &&
                      "pathVariables" === v
                        ? (0, x.jsx)(l.Suspense, {
                            fallback: (0, x.jsx)(o.Z, {}),
                            children: (0, x.jsx)(h, {
                              src: J,
                              name: !1,
                              onEdit: function (e) {
                                return K(e.updated_src);
                              },
                              iconStyle: "square",
                              style: ae,
                              theme: "bright",
                              displayDataTypes: !0,
                              displayObjectSize: !0,
                            }),
                          })
                        : null,
                  }),
                  R || 0 === Object.keys(z).length
                    ? R
                      ? (0, x.jsx)(o.Z, {})
                      : null
                    : (0, x.jsxs)("div", {
                        className: "mt-5",
                        children: [
                          (0, x.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, x.jsxs)("div", {
                                className: "mb-3 flex items-center",
                                children: [
                                  (0, x.jsx)("h1", {
                                    className:
                                      "font-ubuntu text-base font-medium dark:text-white lg:text-lg",
                                    children: "Request Result",
                                  }),
                                  (0, x.jsx)("button", {
                                    onClick: function () {
                                      return re({});
                                    },
                                    className:
                                      "font-base lg:font-lg font-ubuntu normal-transition py-.5 ml-5 items-end justify-self-end rounded-md border border-gray-600 px-3 font-medium hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white",
                                    children: "Reset",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  (0, x.jsxs)("div", {
                                    className:
                                      "mr-4 flex items-center justify-between",
                                    children: [
                                      (0, x.jsx)("button", {
                                        onClick: function () {
                                          return (
                                            H > 14 &&
                                            B(function (e) {
                                              return e - 1;
                                            })
                                          );
                                        },
                                        className:
                                          "font-base font-ubuntu items-end justify-self-end border-gray-600 px-1 py-px font-medium text-gray-600 hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white lg:text-lg" +
                                          (H <= 14
                                            ? " cursor-not-allowed"
                                            : ""),
                                        children: (0, x.jsx)(u.TVH, {}),
                                      }),
                                      (0, x.jsx)("p", {
                                        className:
                                          "font-ubuntu mx-2 text-base font-normal dark:text-white lg:text-lg",
                                        children: H,
                                      }),
                                      (0, x.jsx)("button", {
                                        onClick: function () {
                                          return (
                                            H < 36 &&
                                            B(function (e) {
                                              return e + 1;
                                            })
                                          );
                                        },
                                        className:
                                          "font-base font-ubuntu items-end justify-self-end border-gray-600 px-1 py-px font-medium text-gray-600 hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white lg:text-lg" +
                                          (H >= 36
                                            ? " cursor-not-allowed"
                                            : ""),
                                        children: (0, x.jsx)(u.iTs, {}),
                                      }),
                                    ],
                                  }),
                                  (0, x.jsxs)("p", {
                                    className:
                                      "font-ubuntu mr-4 text-base font-semibold dark:font-normal dark:text-white",
                                    children: [
                                      "Status:",
                                      (0, x.jsxs)("span", {
                                        className:
                                          null !== (t = ee.status) &&
                                          void 0 !== t &&
                                          t.toString().startsWith("2", 0)
                                            ? "ml-1 font-medium text-green-600 dark:font-normal dark:text-green-400"
                                            : "ml-1 font-medium text-red-500 dark:font-normal",
                                        children: [
                                          ee.status,
                                          " ",
                                          ee.statusText,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, x.jsxs)("p", {
                                    className:
                                      "font-ubuntu mr-4 text-base font-semibold dark:font-normal dark:text-white",
                                    children: [
                                      "Time:",
                                      (0, x.jsx)("span", {
                                        className:
                                          "ml-1 font-normal text-green-600 dark:font-normal dark:text-green-400",
                                        children: ee.time,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, x.jsx)(l.Suspense, {
                            fallback: (0, x.jsx)(o.Z, {}),
                            children: (0, x.jsx)(h, {
                              src: z,
                              name: !1,
                              iconStyle: "square",
                              style: ae,
                              theme: "bright",
                              displayDataTypes: !1,
                              displayObjectSize: !0,
                            }),
                          }),
                        ],
                      }),
                ],
              }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=909.646fbaaf.chunk.js.map
