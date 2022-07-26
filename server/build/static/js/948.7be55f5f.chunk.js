"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [948],
  {
    948: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return o;
          },
        });
      a(2791);
      var r = a(6871),
        t = a(2419),
        i = a(2065),
        d = a(8717),
        s = a(7309),
        l = a(184);
      function o() {
        var e = (0, r.UO)().id,
          n = (0, t.ZP)("/folders/".concat(e), i.Z).data,
          a = (0, r.s0)(),
          o = n && n.data,
          c = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/folders", name: "Folders" },
            {
              isLink: !1,
              link: "",
              name: (null === o || void 0 === o ? void 0 : o.name) + "s",
            },
          ];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(d.Z, { details: c }),
            (0, l.jsx)("div", {
              className: "my-5",
              children: (0, l.jsx)(s.Z, {
                onClick: function () {
                  return a("/folders/".concat(e, "/upload"));
                },
                type: "ghost",
                shape: "default",
                className:
                  "mr-1 flex py-5 items-center shadow-md dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                children: (0, l.jsx)("span", { children: "Upload a file" }),
              }),
            }),
          ],
        });
      }
    },
    2065: function (e, n, a) {
      var r = a(1033);
      n.Z = function (e) {
        return r.Z.get(e).then(function (e) {
          return e.data;
        });
      };
    },
  },
]);
//# sourceMappingURL=948.7be55f5f.chunk.js.map
