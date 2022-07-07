"use strict";
(self.webpackChunkadmin_pwa = self.webpackChunkadmin_pwa || []).push([
  [642],
  {
    3642: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return o;
          },
        });
      var r = a(3853),
        n = a(7425),
        s = a(3504),
        i = a(6625),
        l = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          return crypto
            .getRandomValues(new Uint8Array(e))
            .reduce(function (e, t) {
              return (e +=
                (t &= 63) < 36
                  ? t.toString(36)
                  : t < 62
                  ? (t - 26).toString(36).toUpperCase()
                  : t > 62
                  ? "-"
                  : "_");
            }, "");
        },
        c = a(184),
        o = function (e) {
          var t = e.setShowSidebar,
            a = e.showSidebar,
            o = e.breadcrumbs;
          return (0, c.jsx)("header", {
            className:
              "normal-transition sticky top-0 z-20 h-16 min-w-full border-b border-b-gray-300 bg-gray-100 py-2.5 dark:border-b-gray-900 dark:bg-gray-900",
            children: (0, c.jsxs)("div", {
              className: "mx-5 flex h-full items-center justify-between",
              children: [
                (0, c.jsx)("div", {
                  className:
                    "normal-transition font-nunito purple-text flex w-auto items-center py-0 text-2xl font-extrabold",
                  children: (0, c.jsx)("button", {
                    onClick: function () {
                      t(!a);
                    },
                    className:
                      "absolute flex justify-center items-center rounded-full top-1/2 left-3 -translate-y-1/2 scale-100 cursor-pointer p-2 active:scale-90 bg-transparent hover:bg-gray-300 dark:bg-transparent hover:dark:bg-black normal-transition",
                    children: a
                      ? (0, c.jsx)(n.KK$, {
                          className:
                            "normal-transition text-2xl text-black active:rotate-[360deg] dark:text-white",
                        })
                      : (0, c.jsx)(n.PhP, {
                          className:
                            "normal-transition text-2xl text-black active:rotate-[360deg] dark:text-white",
                        }),
                  }),
                }),
                (0, c.jsx)("div", {
                  className: "mr-auto ml-10",
                  children: (0, c.jsx)("div", {
                    className: "flex items-center dark:text-white",
                    children: o.map(function (e, t) {
                      return e.isLink && t !== o.length
                        ? (0, c.jsxs)(
                            "div",
                            {
                              className: "flex items-center",
                              children: [
                                (0, c.jsx)(s.rU, {
                                  to: e.link,
                                  children: (0, c.jsx)("p", {
                                    className: "text-base",
                                    children: e.name,
                                  }),
                                }),
                                (0, c.jsxs)("span", {
                                  className: "mx-1 mt-1.5",
                                  children: [" ", (0, c.jsx)(r.qhs, {}), " "],
                                }),
                              ],
                            },
                            l()
                          )
                        : (0, c.jsx)(
                            "p",
                            { className: "text-base", children: e.name },
                            l()
                          );
                    }),
                  }),
                }),
                (0, c.jsx)("div", {
                  className: "flex items-center",
                  children: (0, c.jsx)(i.Z, { className: "mr-auto" }),
                }),
              ],
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=642.5d37bcb5.chunk.js.map
