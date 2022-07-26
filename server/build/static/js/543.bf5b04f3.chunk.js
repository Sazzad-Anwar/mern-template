"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [543],
  {
    7543: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return h;
          },
        });
      var i = t(5861),
        r = t(9439),
        a = t(7757),
        s = t.n(a),
        o = t(2791),
        l = t(6871),
        u = t(2419),
        c = t(8717),
        d = t(2065),
        f = t(9286),
        p = t(9553),
        m = t(8510),
        v = t(184);
      function h() {
        var n = (0, l.UO)().id,
          e = (0, u.ZP)("/folders/".concat(n), d.Z).data,
          t = e && e.data,
          a = (0, o.useState)(!1),
          h = (0, r.Z)(a, 2),
          k = h[0],
          Z = h[1],
          w = (0, o.useState)(""),
          x = (0, r.Z)(w, 2),
          j = x[0],
          b = x[1],
          g = (0, o.useState)(""),
          L = (0, r.Z)(g, 2),
          y = L[0],
          C = L[1],
          F = (0, o.useState)([]),
          S = (0, r.Z)(F, 2),
          U = S[0],
          P = S[1],
          O = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/folders", name: "Folders" },
            {
              isLink: !0,
              link: "/folders/".concat(n, "/details"),
              name: (null === t || void 0 === t ? void 0 : t.name) + "s",
            },
            { isLink: !1, link: "", name: "Upload" },
          ],
          R = function (n) {
            new Promise(function (e, t) {
              var i = new FileReader();
              i.readAsDataURL(n),
                (i.onload = function () {
                  return e(i.result);
                }),
                (i.onerror = function (n) {
                  return t(n);
                });
            });
          },
          T = (function () {
            var n = (0, i.Z)(
              s().mark(function n(e) {
                return s().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        e.preview ||
                          ((e.preview = R(e.originFileObj)),
                          b(e.preview),
                          Z(!0),
                          C(e.name));
                      case 1:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })(),
          _ = (0, v.jsxs)("button", {
            children: [
              (0, v.jsx)(f.Z, {}),
              (0, v.jsx)("div", {
                style: { marginTop: 8 },
                children: "Upload",
              }),
            ],
          });
        return (0, v.jsxs)(v.Fragment, {
          children: [
            (0, v.jsx)(c.Z, { details: O }),
            (0, v.jsx)(p.Z, {
              action:
                "https://run.mocky.io/v3/5265c021-1478-422c-9feb-aa9029571cb2",
              listType: "picture-card",
              fileList: U,
              onPreview: T,
              onChange: function (n) {
                var e = n.fileList;
                return P(e);
              },
              children: U.length >= 8 ? null : _,
            }),
            (0, v.jsx)(m.Z, {
              visible: k,
              title: y,
              footer: null,
              onCancel: function () {
                return Z(!1);
              },
              children: (0, v.jsx)("img", {
                alt: "example",
                style: { width: "100%" },
                src: j,
              }),
            }),
          ],
        });
      }
    },
    2065: function (n, e, t) {
      var i = t(1033);
      e.Z = function (n) {
        return i.Z.get(n).then(function (n) {
          return n.data;
        });
      };
    },
  },
]);
//# sourceMappingURL=543.bf5b04f3.chunk.js.map
