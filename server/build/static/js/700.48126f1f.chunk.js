"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [700],
  {
    3700: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return _;
          },
        });
      var s = t(9439),
        a = t(2791),
        n = t(2419),
        l = t(8957),
        i = t(2065),
        d = t(9220),
        o = t(7309),
        c = t(9421),
        h = t(5861),
        m = t(7757),
        u = t.n(m),
        x = t(6446),
        g = t(6038),
        f = t(8820),
        j = t(3853),
        p = t(6871),
        k = t(577),
        y = t(1033),
        v = t(783),
        b = t(1256),
        N = t(184);
      function Z(e) {
        var r = e.showModal,
          t = e.toggleModal,
          s = e.children,
          a = e.title;
        return (0, N.jsx)(b.Z, {
          visible: r,
          title: a,
          onOk: t,
          onCancel: t,
          footer: null,
          children: s,
        });
      }
      function w(e) {
        var r = e.category,
          t = (0, a.useState)(!1),
          l = (0, s.Z)(t, 2),
          c = l[0],
          m = l[1],
          b = (0, a.useState)([]),
          w = (0, s.Z)(b, 2),
          C = w[0],
          A = w[1],
          _ = (0, p.s0)(),
          M = (0, n.ZP)("/categories", i.Z).data;
        (0, a.useEffect)(
          function () {
            A(M && M.data);
          },
          [M]
        );
        var D = function () {
            m(!c);
          },
          E = (function () {
            var e = (0, h.Z)(
              u().mark(function e(r) {
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            y.Z.delete("/categories/".concat(r))
                          );
                        case 3:
                          k.Am.success("Category deleted successfully"),
                            A(
                              C.filter(function (e) {
                                return e.id !== r;
                              })
                            ),
                            (0, n.JG)("/categories"),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            k.Am.error(e.t0.response.data.message);
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
            return function (r) {
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
                      alt: r.name,
                      src: r.image,
                      className: "dark:text-gray-900 mr-2",
                      size: 35,
                      children: r.name.split("")[0].toUpperCase(),
                    }),
                    (0, N.jsx)("div", {
                      className: "overflow-hidden",
                      children: (0, N.jsx)("p", {
                        className:
                          "font-medium dark:text-white text-base truncate",
                        children: (0, v.Z)(r.name),
                      }),
                    }),
                  ],
                }),
                (0, N.jsxs)("div", {
                  children: [
                    (0, N.jsx)(d.Z, {
                      title: "Edit category",
                      children: (0, N.jsx)(o.Z, {
                        onClick: function () {
                          return _("/category/".concat(r._id));
                        },
                        type: "ghost",
                        shape: "default",
                        className:
                          "mr-1 dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                        icon: (0, N.jsx)("div", {
                          className: "flex justify-center items-center",
                          children: (0, N.jsx)(j.Nte, {}),
                        }),
                      }),
                    }),
                    (0, N.jsx)(d.Z, {
                      title: "Delete category",
                      children: (0, N.jsx)(g.Z, {
                        title: "Are you sure to delete this category?",
                        onConfirm: function () {
                          return E(r._id);
                        },
                        okText: "Yes",
                        cancelText: "No",
                        children: (0, N.jsx)(o.Z, {
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
                      children: (0, v.Z)(r.name),
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
                      children: r.children.length
                        ? r.children.join(",")
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
                      children: r.isActive ? "Yes" : "No",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var C = t(8704),
        A = t(8717);
      function _() {
        var e,
          r = (0, a.useState)([]),
          t = (0, s.Z)(r, 2),
          h = t[0],
          m = t[1],
          u = (0, C.b)().sideBar,
          x = (0, p.s0)(),
          g = (0, n.ZP)("/categories", i.Z),
          f = g.data,
          j = g.error;
        (0, a.useEffect)(
          function () {
            m(f && f.data);
          },
          [f]
        );
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsx)(A.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !1, link: "/category", name: "Category" },
              ],
            }),
            j
              ? (0, N.jsx)(l.Z, {
                  error:
                    null !== (e = j.response) && void 0 !== e && e.data.message
                      ? j.response.data.message
                      : j.message,
                })
              : (0, N.jsxs)("div", {
                  className: "pt-3",
                  children: [
                    (0, N.jsx)(d.Z, {
                      title: "Add Category",
                      children: (0, N.jsx)(o.Z, {
                        onClick: function () {
                          return x("/create-category");
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
                    h && !h.length && (0, N.jsx)(c.Z, {}),
                    (0, N.jsx)("div", {
                      className: u.isOpen
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
                        : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3",
                      children:
                        null === h || void 0 === h
                          ? void 0
                          : h.map(function (e) {
                              return (0, N.jsx)(w, { category: e }, e._id);
                            }),
                    }),
                  ],
                }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=700.48126f1f.chunk.js.map
