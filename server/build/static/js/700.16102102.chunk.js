"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [700],
  {
    3700: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return _;
          },
        });
      var s = r(9439),
        n = r(2791),
        a = r(2419),
        i = r(8957),
        l = r(2065),
        o = r(9220),
        d = r(7309),
        c = r(9421),
        u = r(5861),
        h = r(7757),
        m = r.n(h),
        x = r(6446),
        g = r(6038),
        f = r(8820),
        p = r(3853),
        j = r(6871),
        v = r(577),
        k = r(1033),
        y = r(783),
        b = r(1256),
        N = r(184);
      function Z(e) {
        var t = e.showModal,
          r = e.toggleModal,
          s = e.children,
          n = e.title;
        return (0, N.jsx)(b.Z, {
          visible: t,
          title: n,
          onOk: r,
          onCancel: r,
          footer: null,
          children: s,
        });
      }
      function w(e) {
        var t = e.category,
          r = (0, n.useState)(!1),
          i = (0, s.Z)(r, 2),
          c = i[0],
          h = i[1],
          b = (0, n.useState)([]),
          w = (0, s.Z)(b, 2),
          C = w[0],
          A = w[1],
          _ = (0, j.s0)(),
          M = (0, a.ZP)("/categories", l.Z).data;
        (0, n.useEffect)(
          function () {
            A(M && M.data);
          },
          [M]
        );
        var D = function () {
            h(!c);
          },
          E = (function () {
            var e = (0, u.Z)(
              m().mark(function e(t) {
                return m().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            k.Z.delete("/categories/".concat(t))
                          );
                        case 3:
                          v.Am.success("Category deleted successfully"),
                            A(
                              C.filter(function (e) {
                                return e.id !== t;
                              })
                            ),
                            (0, a.JG)("/categories"),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            v.Am.error(e.t0.response.data.message);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsxs)("div", {
              className:
                "my-3 shadow-md hover:shadow-lg normal-transition pl-2 py-2 border border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-between",
              children: [
                (0, N.jsxs)("button", {
                  onClick: D,
                  className: "flex items-center",
                  children: [
                    (0, N.jsx)(x.C, {
                      alt: t.name,
                      src: t.image,
                      className: "dark:text-gray-900 mr-2",
                      size: 35,
                      children: t.name.split("")[0].toUpperCase(),
                    }),
                    (0, N.jsx)("div", {
                      className: "overflow-hidden",
                      children: (0, N.jsx)("p", {
                        className:
                          "font-medium dark:text-white text-base truncate",
                        children: (0, y.Z)(t.name),
                      }),
                    }),
                  ],
                }),
                (0, N.jsxs)("div", {
                  children: [
                    (0, N.jsx)(o.Z, {
                      title: "Edit category",
                      children: (0, N.jsx)(d.Z, {
                        onClick: function () {
                          return _("/category/".concat(t._id));
                        },
                        type: "ghost",
                        shape: "default",
                        className:
                          "mr-1 dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                        icon: (0, N.jsx)("div", {
                          className: "flex justify-center items-center",
                          children: (0, N.jsx)(p.Nte, {}),
                        }),
                      }),
                    }),
                    (0, N.jsx)(o.Z, {
                      title: "Delete category",
                      children: (0, N.jsx)(g.Z, {
                        title: "Are you sure to delete this category?",
                        onConfirm: function () {
                          return E(t._id);
                        },
                        okText: "Yes",
                        cancelText: "No",
                        children: (0, N.jsx)(d.Z, {
                          type: "ghost",
                          shape: "default",
                          className:
                            "mr-2 dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                          icon: (0, N.jsx)("div", {
                            className: "flex justify-center items-center",
                            children: (0, N.jsx)(f.YK6, {}),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsxs)(Z, {
              showModal: c,
              toggleModal: D,
              title: "Category Details",
              children: [
                (0, N.jsxs)("h2", {
                  className: "dark:text-white text-lg",
                  children: [
                    "Category:",
                    " ",
                    (0, N.jsx)("span", {
                      className: "font-mono font-semibold ml-2",
                      children: (0, y.Z)(t.name),
                    }),
                  ],
                }),
                (0, N.jsxs)("h2", {
                  className: "dark:text-white text-lg",
                  children: [
                    "Children:",
                    " ",
                    (0, N.jsx)("span", {
                      className: "font-mono font-semibold ml-2",
                      children: t.children.length
                        ? t.children.join(",")
                        : "No children",
                    }),
                    " ",
                  ],
                }),
                (0, N.jsxs)("h2", {
                  className: "dark:text-white text-lg",
                  children: [
                    "Active:",
                    " ",
                    (0, N.jsx)("span", {
                      className: "font-mono font-semibold ml-2",
                      children: t.isActive ? "Yes" : "No",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var C = r(8704),
        A = r(8717);
      function _() {
        var e = (0, n.useState)([]),
          t = (0, s.Z)(e, 2),
          r = t[0],
          u = t[1],
          h = (0, C.b)().sideBar,
          m = (0, j.s0)(),
          x = (0, a.ZP)("/categories", l.Z),
          g = x.data,
          f = x.error;
        (0, n.useEffect)(
          function () {
            u(g && g.data);
          },
          [g]
        );
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(A.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !1, link: "/category", name: "Category" },
              ],
            }),
            f
              ? (0, N.jsx)(i.Z, {
                  error: f.response.data.message
                    ? f.response.data.message
                    : f.message,
                })
              : (0, N.jsxs)("div", {
                  className: "pt-3",
                  children: [
                    (0, N.jsx)(o.Z, {
                      title: "Add Category",
                      children: (0, N.jsx)(d.Z, {
                        onClick: function () {
                          return m("/create-category");
                        },
                        type: "ghost",
                        shape: "default",
                        className:
                          "mr-1 flex py-5 items-center shadow-md dark:bg-deepDark dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                        children: (0, N.jsx)("span", {
                          className: "",
                          children: "Create Category",
                        }),
                      }),
                    }),
                    r && !r.length && (0, N.jsx)(c.Z, {}),
                    (0, N.jsx)("div", {
                      className: h.isOpen
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
                        : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3",
                      children:
                        null === r || void 0 === r
                          ? void 0
                          : r.map(function (e) {
                              return (0, N.jsx)(w, { category: e }, e._id);
                            }),
                    }),
                  ],
                }),
          ],
        });
      }
    },
    783: function (e, t, r) {
      function s(e) {
        return (null === e || void 0 === e ? void 0 : e.split(" ").length) > 1
          ? e
              .split(" ")
              .map(function (e) {
                return s(e);
              })
              .join(" ")
          : (null === e || void 0 === e
              ? void 0
              : e.split("")[0].toUpperCase()) +
              (null === e || void 0 === e
                ? void 0
                : e
                    .split("")
                    .filter(function (t) {
                      return t !== e.split("")[0];
                    })
                    .join(""));
      }
      r.d(t, {
        Z: function () {
          return s;
        },
      });
    },
  },
]);
//# sourceMappingURL=700.16102102.chunk.js.map
