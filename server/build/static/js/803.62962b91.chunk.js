"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [803],
  {
    1803: function (e, a, r) {
      r.r(a),
        r.d(a, {
          default: function () {
            return p;
          },
        });
      var n = r(5861),
        s = r(7757),
        l = r.n(s),
        t = r(9823),
        i = r(8678),
        c = r(7309),
        m = (r(2791), r(6871)),
        u = r(577),
        d = r(1033),
        o = r(8717),
        f = r(184);
      function p() {
        var e = (0, m.s0)(),
          a = (function () {
            var a = (0, n.Z)(
              l().mark(function a(r) {
                return l().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0), (a.next = 3), d.Z.post("/folders", r)
                          );
                        case 3:
                          u.Am.success("Folder is created successfully"),
                            (r.name = ""),
                            e("/folders"),
                            (a.next = 11);
                          break;
                        case 8:
                          (a.prev = 8),
                            (a.t0 = a.catch(0)),
                            u.Am.error(a.t0.response.data.message);
                        case 11:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(o.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !0, link: "/folders", name: "Folders" },
                { isLink: !1, link: "", name: "Create a folder" },
              ],
            }),
            (0, f.jsx)("div", {
              className: "w-full pt-3 md:pt-10",
              children: (0, f.jsxs)(t.Z, {
                name: "Create Folder",
                onFinish: a,
                autoComplete: "off",
                layout: "vertical",
                className: "w-full mx-1 md:w-96 md:mx-auto",
                children: [
                  (0, f.jsx)(t.Z.Item, {
                    name: "name",
                    label: (0, f.jsx)("label", {
                      className: "dark:text-white text-lg",
                      children: "Folder Name",
                    }),
                    rules: [
                      { required: !0, message: "Please input folder name!" },
                    ],
                    children: (0, f.jsx)(i.Z, {
                      size: "large",
                      allowClear: !0,
                      placeholder: "Enter a folder name",
                    }),
                  }),
                  (0, f.jsx)(c.Z, {
                    htmlType: "submit",
                    type: "primary",
                    size: "large",
                    className: "w-full",
                    children: "Save",
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
//# sourceMappingURL=803.62962b91.chunk.js.map
