"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [445],
  {
    6445: function (e, s, i) {
      i.r(s),
        i.d(s, {
          default: function () {
            return m;
          },
        });
      i(2791);
      var r = i(9126),
        t = i(5763),
        l = i(6355),
        a = i(184);
      function d(e) {
        var s = e.icon,
          i = e.title,
          r = e.subTitle;
        return (0, a.jsxs)("div", {
          className:
            "shadow-md hover:shadow-lg normal-transition px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md flex items-center",
          children: [
            (0, a.jsx)("div", {
              className:
                "mr-5 p-3 flex justify-center items-center rounded-full dark:bg-gray-600 bg-gray-300",
              children: s,
            }),
            (0, a.jsxs)("div", {
              className: "overflow-hidden",
              children: [
                (0, a.jsx)("h1", {
                  className: "font-semibold dark:text-white text-xl",
                  children: i,
                }),
                (0, a.jsx)("p", {
                  className: "font-medium dark:text-white text-base truncate",
                  children: r,
                }),
              ],
            }),
          ],
        });
      }
      var c = i(7425),
        n = i(8704),
        o = i(6856),
        x = i(8717);
      function m() {
        var e = (0, n.b)().sideBar;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(x.Z, {
              details: [{ isLink: !1, link: "/", name: "Home" }],
            }),
            (0, a.jsx)("div", {
              className: "py-6",
              children: (0, a.jsxs)("div", {
                className: e.isOpen
                  ? "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4",
                children: [
                  (0, a.jsx)(d, {
                    icon: (0, a.jsx)(r.fFq, {
                      className: "dark:text-white",
                      size: 20,
                    }),
                    title: "20",
                    subTitle: "Total Users",
                  }),
                  (0, a.jsx)(d, {
                    icon: (0, a.jsx)(t.Aju, {
                      className: "dark:text-white",
                      size: 20,
                    }),
                    title: "10",
                    subTitle: "Course enrolled",
                  }),
                  (0, a.jsx)(d, {
                    icon: (0, a.jsx)(l.Mp$, {
                      className: "dark:text-white",
                      size: 20,
                    }),
                    title: "15",
                    subTitle: "Total courses",
                  }),
                  (0, a.jsx)(d, {
                    icon: (0, a.jsx)(c.RPM, {
                      className: "dark:text-white",
                      size: 20,
                    }),
                    title: "30",
                    subTitle: "Today's user visit",
                  }),
                  (0, a.jsx)(d, {
                    icon: (0, a.jsx)(o.dwX, {
                      className: "dark:text-white",
                      size: 20,
                    }),
                    title: "10",
                    subTitle: "Total categories",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=445.3fab7792.chunk.js.map
