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
      var t = i(9126),
        l = i(5763),
        r = i(184);
      function a(e) {
        var s = e.icon,
          i = e.title,
          t = e.subTitle;
        return (0, r.jsxs)("div", {
          className:
            "shadow-md hover:shadow-lg normal-transition px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md flex items-center",
          children: [
            (0, r.jsx)("div", {
              className:
                "mr-5 p-3 flex justify-center items-center rounded-full dark:bg-gray-600 bg-gray-300",
              children: s,
            }),
            (0, r.jsxs)("div", {
              className: "overflow-hidden",
              children: [
                (0, r.jsx)("h1", {
                  className: "font-semibold dark:text-white text-xl",
                  children: i,
                }),
                (0, r.jsx)("p", {
                  className: "font-medium dark:text-white text-base truncate",
                  children: t,
                }),
              ],
            }),
          ],
        });
      }
      var d = i(7425),
        c = i(8704),
        n = i(6856),
        o = i(1578),
        x = i(8717);
      function m() {
        var e = (0, c.b)().sideBar;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(x.Z, {
              details: [{ isLink: !1, link: "/", name: "Home" }],
            }),
            (0, r.jsx)("div", {
              className: "py-6",
              children: (0, r.jsxs)("div", {
                className: e.isOpen
                  ? "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4",
                children: [
                  (0, r.jsx)(a, {
                    icon: (0, r.jsx)(t.fFq, {
                      className: "dark:text-white",
                      size: 20,
                    }),
                    title: "20",
                    subTitle: "Total Users",
                  }),
                  (0, r.jsx)(a, {
                    icon: (0, r.jsx)(l.Aju, {
                      className: "dark:text-white",
                      size: 20,
                    }),
                    title: "10",
                    subTitle: "Total Items",
                  }),
                  (0, r.jsx)(a, {
                    icon: (0, r.jsx)(o.wQ_, {
                      className: "dark:text-white",
                      size: 20,
                    }),
                    title: "150000",
                    subTitle: "Total Sales",
                  }),
                  (0, r.jsx)(a, {
                    icon: (0, r.jsx)(d.RPM, {
                      className: "dark:text-white",
                      size: 20,
                    }),
                    title: "30",
                    subTitle: "Today's user visit",
                  }),
                  (0, r.jsx)(a, {
                    icon: (0, r.jsx)(n.dwX, {
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
//# sourceMappingURL=445.4c55c2c2.chunk.js.map
