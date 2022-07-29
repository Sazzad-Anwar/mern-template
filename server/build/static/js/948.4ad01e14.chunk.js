"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [948],
  {
    1479: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return b;
        },
      });
      var s = a(1413),
        n = a(5861),
        r = a(9439),
        i = a(7757),
        c = a.n(i),
        l = a(2791),
        o = a(577),
        d = a(6570),
        u = a(3853),
        m = a(8820),
        f = a(1033),
        x = a(4560),
        h = a(9823),
        p = a(8678),
        g = a(7309),
        j = a(9220),
        k = a(6038),
        Z = a(6755),
        v = a(184);
      function b(e) {
        var t = e.file,
          a = e.files,
          i = e.setFiles,
          b = e.folderId,
          w = e.mutate,
          N = (0, l.useState)(!1),
          y = (0, r.Z)(N, 2),
          S = y[0],
          C = y[1],
          _ = (0, l.useRef)(),
          z = (function () {
            var e = (0, n.Z)(
              c().mark(function e(t) {
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            f.Z.delete("/files/".concat(t))
                          );
                        case 3:
                          i(
                            a.filter(function (e) {
                              return e._id !== t;
                            })
                          ),
                            w("/files?folderId=".concat(t), { data: a }, !1),
                            o.Am.success("File is deleted"),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            o.Am.error(
                              e.t0.response.data.message
                                ? e.t0.response.data.message
                                : e.t0.message
                            );
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
          })(),
          F = (function () {
            var e = (0, n.Z)(
              c().mark(function e(n) {
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((C(!1), n.name === t.name)) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.prev = 2),
                            (e.next = 5),
                            f.Z.put("/files/".concat(t._id), n)
                          );
                        case 5:
                          w(
                            "/files?folderId=".concat(b),
                            {
                              data: a.map(function (e) {
                                return e._id === t._id
                                  ? (0, s.Z)(
                                      (0, s.Z)({}, e),
                                      {},
                                      { name: n.name }
                                    )
                                  : e;
                              }),
                            },
                            !1
                          ),
                            o.Am.success("Image name is saved"),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(2)),
                            o.Am.error(e.t0.response.data.message);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, v.jsxs)("div", {
          children: [
            (0, v.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [
                w && S
                  ? (0, v.jsxs)(h.Z, {
                      initialValues: { name: t.name },
                      onFinish: F,
                      className: "mr-2",
                      children: [
                        (0, v.jsx)(h.Z.Item, {
                          name: "name",
                          className: "mb-0",
                          rules: [
                            {
                              required: !0,
                              message: "Please input the folder name",
                            },
                          ],
                          children: (0, v.jsx)(p.Z, {
                            placeholder: "Folder name",
                            className: "w-full text-center",
                            size: "small",
                            autoFocus: !0,
                            onBlur: function () {
                              C(!1), _.current.click();
                            },
                          }),
                        }),
                        (0, v.jsx)(g.Z, {
                          ref: _,
                          htmlType: "submit",
                          className: "hidden",
                        }),
                      ],
                    })
                  : (0, v.jsx)(j.Z, {
                      title: w && "Double click to name to edit",
                      placement: "bottom",
                      children: (0, v.jsx)("button", {
                        onClick: function (e) {
                          2 === e.detail && C(!0);
                        },
                        className: "truncate",
                        children: (0, v.jsx)("span", {
                          className:
                            "dark:text-white text-black truncate font-mono",
                          children: t.name,
                        }),
                      }),
                    }),
                (0, v.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, v.jsx)(j.Z, {
                      title: "Copy url to clipboard",
                      children: (0, v.jsx)("button", {
                        onClick: function () {
                          return (0, x.Z)(d.T5 + "/static/" + t.url);
                        },
                        children: (0, v.jsx)(u.C3L, {
                          className: "dark:text-white text-black",
                        }),
                      }),
                    }),
                    (0, v.jsx)(j.Z, {
                      title: "Delete file",
                      children: (0, v.jsx)(k.Z, {
                        title: "Are you sure to delete this file?",
                        onConfirm: function () {
                          return z(t._id);
                        },
                        okText: "Yes",
                        cancelText: "No",
                        className: "ml-2",
                        children: (0, v.jsx)("button", {
                          children: (0, v.jsx)(m.LHV, {
                            className: "dark:text-white text-black",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, v.jsx)("div", {
              className: "flex justify-center",
              children: (0, v.jsx)(Z.Z, {
                height: "auto",
                width: "auto",
                alt: t.name,
                src: d.T5 + "/static/" + t.url,
              }),
            }),
          ],
        });
      }
    },
    948: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return b;
          },
        });
      var s = a(5861),
        n = a(9439),
        r = a(7757),
        i = a.n(r),
        c = a(2791),
        l = a(6871),
        o = a(2419),
        d = a(2065),
        u = a(8717),
        m = a(8678),
        f = a(7309),
        x = a(9221),
        h = a(1033),
        p = a(8957),
        g = a(1479),
        j = a(577),
        k = a(8704),
        Z = a(184),
        v = m.Z.Search;
      function b() {
        var e = (0, k.b)().sideBar,
          t = (0, l.UO)().id,
          a = (0, c.useState)(1),
          r = (0, n.Z)(a, 2),
          m = r[0],
          b = r[1],
          w = (0, c.useState)(10),
          N = (0, n.Z)(w, 2),
          y = N[0],
          S = N[1],
          C = (0, c.useState)(0),
          _ = (0, n.Z)(C, 2),
          z = _[0],
          F = _[1],
          I = (0, c.useState)([]),
          A = (0, n.Z)(I, 2),
          T = A[0],
          L = A[1],
          P = (0, o.ZP)("/folders/".concat(t), d.Z).data,
          O = (0, o.ZP)(
            "/files?folderId="
              .concat(t, "&page=")
              .concat(m, "&pageSize=")
              .concat(y),
            d.Z
          ),
          q = O.data,
          B = O.error,
          D = O.mutate,
          H = (0, l.s0)(),
          U = P && P.data;
        (0, c.useEffect)(
          function () {
            L(q && q.data), F(q && q.totalSize);
          },
          [q]
        );
        var V = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/folders", name: "Folders" },
            {
              isLink: !1,
              link: "",
              name: (null === U || void 0 === U ? void 0 : U.name) + "s",
            },
          ],
          E = (function () {
            var e = (0, s.Z)(
              i().mark(function e(a) {
                var s, n;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            h.Z.get(
                              "/files?folderId="
                                .concat(t, "&page=")
                                .concat(m, "&pageSize=")
                                .concat(y, "&q=")
                                .concat(a)
                            )
                          );
                        case 3:
                          (s = e.sent),
                            (n = s.data),
                            L(n.data),
                            F(n.totalSize),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(0)),
                            j.Am.error(
                              e.t0.response.data.message
                                ? e.t0.response.data.message
                                : e.t0.message
                            );
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(u.Z, { details: V }),
            B
              ? (0, Z.jsx)(p.Z, {
                  error: B.response.data.message
                    ? B.response.data.message
                    : B.message,
                })
              : (0, Z.jsxs)("div", {
                  className: "my-5",
                  children: [
                    (0, Z.jsxs)("div", {
                      className: "flex justify-between items-center",
                      children: [
                        (0, Z.jsx)(f.Z, {
                          onClick: function () {
                            return H("/folders/".concat(t, "/upload"));
                          },
                          type: "ghost",
                          shape: "default",
                          className:
                            "mr-1 flex py-5 items-center shadow-md dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                          children: (0, Z.jsx)("span", {
                            children: "Upload a file",
                          }),
                        }),
                        (0, Z.jsx)(v, {
                          allowClear: !0,
                          size: "large",
                          className: "w-full lg:w-96 lg:ml-auto search-input",
                          placeholder: "Search...",
                          onSearch: E,
                        }),
                      ],
                    }),
                    (0, Z.jsx)("div", {
                      className: e.isOpen
                        ? "my-5 normal-transition grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
                        : "my-5 normal-transition grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",
                      children:
                        T &&
                        T.map(function (e) {
                          return (0,
                          Z.jsx)(g.Z, { file: e, files: T, setFiles: L, folderId: U._id, mutate: D }, e._id);
                        }),
                    }),
                    (0, Z.jsx)(x.Z, {
                      showSizeChanger: !0,
                      showTotal: function (e, t) {
                        return ""
                          .concat(t[0], "-")
                          .concat(t[1], " of ")
                          .concat(e, " items");
                      },
                      total: z,
                      current: m,
                      pageSize: y,
                      className:
                        "dark:text-white my-5 flex justify-end items-end",
                      hideOnSinglePage: !0,
                      responsive: !0,
                      onChange: function (e, t) {
                        b(e), S(t);
                      },
                    }),
                  ],
                }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=948.4ad01e14.chunk.js.map
