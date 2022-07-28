"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [486],
  {
    2486: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        });
      var s = n(2791),
        a = n(3433),
        i = n(9439),
        r = n(978),
        l = n(3504),
        c = n(783),
        o = n(184),
        d = function (e) {
          var t = e.src,
            n = e.title,
            d = e.className,
            u = (0, s.useState)([]),
            m = (0, i.Z)(u, 2),
            f = m[0],
            x = m[1];
          return (
            (0, s.useEffect)(
              function () {
                for (var e in t) {
                  var n = t[e].url.path.split("/")[1];
                  f.includes(n) || x([].concat((0, a.Z)(f), [n]).sort());
                }
              },
              [f, t]
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
                  children: f.map(function (e) {
                    return (0,
                    o.jsxs)(l.rU, { to: "/api/".concat(e, "/details"), className: "flex flex-col items-center justify-between py-3 dark:hover:bg-deepDark hover:bg-gray-300 normal-transition", children: [(0, o.jsx)(r.nB$, { size: 40, className: "dark:text-white text-dark" }), (0, o.jsx)("h2", { className: "font-mono text-base font-medium dark:text-white mt-2", children: (0, c.Z)(e) })] }, e);
                  }),
                }),
              ],
            })
          );
        },
        u = n(1137),
        m = n(8704),
        f = n(6871),
        x = n(6570),
        h = n(8717);
      function k() {
        var e = (0, m.b)().auth,
          t = (0, f.TH)();
        if (!e.user)
          return (0, o.jsx)(f.Fg, {
            to: "/login",
            state: { from: t },
            replace: !0,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(h.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !1, link: "/api", name: "Api Documentation" },
              ],
            }),
            (0, o.jsx)(d, {
              src: u,
              title: "REST API documentation for ".concat(x.iC),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=486.f8d6f5e3.chunk.js.map
