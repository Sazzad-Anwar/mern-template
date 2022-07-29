"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [486],
  {
    2486: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var s = n(2791),
        a = n(3433),
        i = n(9439),
        r = n(978),
        c = n(3504),
        l = n(783),
        o = n(184),
        d = function (e) {
          var t = e.src,
            n = e.title,
            d = e.className,
            m = (0, s.useState)([]),
            u = (0, i.Z)(m, 2),
            x = u[0],
            f = u[1];
          return (
            (0, s.useEffect)(
              function () {
                for (var e in t) {
                  var n = t[e].url.path.split("/")[1];
                  x.includes(n) || f([].concat((0, a.Z)(x), [n]).sort());
                }
              },
              [x, t]
            ),
            (0, o.jsxs)("div", {
              className:
                "normal-transition min-h-screen dark:bg-dark " + (d || ""),
              children: [
                (0, o.jsx)("div", {
                  className: "flex items-center justify-between py-3",
                  children: (0, o.jsxs)("h1", {
                    className:
                      "font-ubuntu text-3xl font-medium dark:text-white",
                    children: [
                      n,
                      " ",
                      (0, o.jsxs)("span", {
                        className: "font-ubuntu text-base",
                        children: ["(", t.length, ")"],
                      }),
                    ],
                  }),
                }),
                (0, o.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-11 my-5",
                  children: x.map(function (e) {
                    return (0,
                    o.jsxs)(c.rU, { to: "/api/".concat(e, "/details"), className: "flex flex-col items-center justify-between py-3 dark:hover:bg-deepDark hover:bg-gray-300 normal-transition", children: [(0, o.jsx)(r.nB$, { size: 40, className: "dark:text-white text-dark" }), (0, o.jsx)("h2", { className: "font-mono text-base font-medium dark:text-white mt-2", children: (0, l.Z)(e) })] }, e);
                  }),
                }),
              ],
            })
          );
        },
        m = n(1137),
        u = n(6570),
        x = n(8717);
      function f() {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(x.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !1, link: "/api", name: "Api Documentation" },
              ],
            }),
            (0, o.jsx)(d, {
              src: m,
              title: "REST API documentation for ".concat(u.iC),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=486.e20d1e51.chunk.js.map
