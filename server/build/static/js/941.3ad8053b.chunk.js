"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [941],
  {
    6625: function (e, t, a) {
      var r = a(9439),
        n = a(9220),
        l = a(2791),
        i = a(3853),
        s = a(6355),
        o = a(184);
      t.Z = function (e) {
        var t = e.hideButton,
          a = (0, l.useState)("dark"),
          c = (0, r.Z)(a, 2),
          d = c[0],
          m = c[1];
        return (
          (0, l.useEffect)(
            function () {
              "undefined" !== typeof window &&
                ("dark" === localStorage.theme ||
                (!("theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)
                  ? (document.documentElement.classList.add("dark"),
                    m("dark"),
                    localStorage.setItem("theme", "dark"))
                  : (localStorage.setItem("theme", "light"),
                    m("light"),
                    document.documentElement.classList.remove("dark")));
            },
            [d]
          ),
          t
            ? null
            : (0, o.jsx)("button", {
                onClick: function () {
                  "dark" === d
                    ? (localStorage.setItem("theme", "light"), m("light"))
                    : (localStorage.setItem("theme", "dark"), m("dark"));
                },
                className:
                  "cursor-pointer text-gray-600 transition-all ease-in-out hover:text-black dark:text-gray-500 dark:hover:text-white",
                children:
                  "dark" === d
                    ? (0, o.jsx)(n.Z, {
                        placement: "bottomRight",
                        title: (0, o.jsx)("span", {
                          children: "Toggle to light mode",
                        }),
                        children: (0, o.jsx)(i.kXG, {
                          className:
                            "bi bi-brightness-high-fill normal-transition text-xl text-gray-600 hover:text-black active:animate-ping dark:text-gray-500 dark:hover:text-white",
                        }),
                      })
                    : (0, o.jsx)(n.Z, {
                        placement: "bottomRight",
                        title: (0, o.jsx)("span", {
                          children: "Toggle to dark mode",
                        }),
                        children: (0, o.jsx)(s.TLr, {
                          className:
                            "bi bi-moon-stars-fill normal-transition text-xl text-gray-600 hover:text-black active:animate-ping dark:text-gray-500 dark:hover:text-white",
                        }),
                      }),
              })
        );
      };
    },
    1941: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var r = a(7425),
        n = a(6625),
        l = a(8704),
        i = a(4106),
        s = a(9220),
        o = "0.0.2",
        c = a(184),
        d = function () {
          var e = (0, l.b)(),
            t = e.sideBar,
            a = e.sideBarToggleDispatch;
          return (0, c.jsx)("header", {
            className:
              "normal-transition sticky top-0 z-20 h-16 min-w-full border-b border-b-gray-300 bg-white py-2.5 dark:border-b-gray-900 dark:bg-deepDark",
            children: (0, c.jsxs)("div", {
              className:
                "mx-2 md:mx-5 flex h-full items-center justify-between",
              children: [
                (0, c.jsx)("div", {
                  className:
                    "normal-transition font-nunito purple-text flex w-auto items-center py-0 text-2xl font-extrabold",
                  children: (0, c.jsx)("button", {
                    onClick: function () {
                      t.isOpen
                        ? a({ type: i.CLOSE_SIDE_BAR })
                        : a({ type: i.OPEN_SIDE_BAR });
                    },
                    className:
                      "absolute flex justify-center items-center rounded-full top-1/2 left-3 -translate-y-1/2 scale-100 cursor-pointer p-2 active:scale-90 bg-transparent hover:bg-gray-200 dark:bg-transparent hover:dark:bg-black normal-transition",
                    children: t.isOpen
                      ? (0, c.jsx)(s.Z, {
                          placement: "bottomLeft",
                          title: (0, c.jsx)("span", {
                            children: "Close Side Menu",
                          }),
                          children: (0, c.jsx)(r.KK$, {
                            className:
                              "normal-transition text-2xl text-black active:rotate-[360deg] dark:text-white",
                          }),
                        })
                      : (0, c.jsx)(s.Z, {
                          placement: "bottomLeft",
                          title: (0, c.jsx)("span", {
                            children: "Open Side Menu",
                          }),
                          children: (0, c.jsx)(r.PhP, {
                            className:
                              "normal-transition text-2xl text-black active:rotate-[360deg] dark:text-white",
                          }),
                        }),
                  }),
                }),
                (0, c.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, c.jsx)(s.Z, {
                      placement: "bottomLeft",
                      title: (0, c.jsxs)("span", {
                        children: ["App version ", o],
                      }),
                      children: (0, c.jsxs)("p", {
                        className:
                          "dark:text-white mr-5 text-base font-medium font-mono",
                        children: ["v", o],
                      }),
                    }),
                    (0, c.jsx)(n.Z, { className: "mr-auto" }),
                  ],
                }),
              ],
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=941.3ad8053b.chunk.js.map
