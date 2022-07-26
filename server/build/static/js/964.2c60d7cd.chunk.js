"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [964],
  {
    964: function (e, n, t) {
      t.r(n);
      var l = t(1697),
        a = t(7528),
        c = t(6871),
        s = t(3504),
        i = t(8704),
        r = t(5675),
        o = t(8820),
        u = t(184),
        d = l.Z.SubMenu;
      n.default = function (e) {
        var n,
          t = e.menulist,
          m = e.admin,
          p = (0, i.b)(),
          h = p.authDispatch,
          x = p.auth,
          f = p.sideBar,
          b = (0, c.s0)(),
          v = (0, c.TH)();
        return (0, u.jsx)("div", {
          className: "".concat(
            f.isOpen ? "w-60" : "w-0 md:w-14",
            " normal-transition h-screen border-r dark:border-gray-700"
          ),
          children: (0, u.jsxs)(l.Z, {
            defaultSelectedKeys: ["/"],
            defaultOpenKeys: [v.pathname.split("/")[1]],
            mode: "inline",
            inlineCollapsed: !f.isOpen,
            className: "h-full w-auto relative",
            children: [
              t.map(function (e) {
                return e.hasSubMenu
                  ? (0, u.jsx)(
                      d,
                      {
                        icon: e.icon,
                        title: (0, u.jsx)("p", {
                          className: "text-sm",
                          children: e.name,
                        }),
                        children: e.subMenu.map(function (e) {
                          return e.hasSubMenu
                            ? (0, u.jsx)(
                                d,
                                {
                                  className: "dark:text-white",
                                  title: (0, u.jsx)("p", {
                                    className: "text-sm",
                                    children: e.name,
                                  }),
                                  children: e.subMenu.map(function (e) {
                                    return e.hasSubMenu
                                      ? (0, u.jsx)(
                                          d,
                                          {
                                            className: "dark:text-white",
                                            title: (0, u.jsx)("p", {
                                              className: "text-sm",
                                              children: e.name,
                                            }),
                                            children: e.subMenu.map(function (
                                              e
                                            ) {
                                              return (0, u.jsx)(
                                                l.Z.Item,
                                                {
                                                  className: "text-sm",
                                                  onClick: function () {
                                                    return b(e.link);
                                                  },
                                                  children: e.name,
                                                },
                                                e.id
                                              );
                                            }),
                                          },
                                          e.id
                                        )
                                      : (0, u.jsx)(
                                          l.Z.Item,
                                          {
                                            className: "text-sm",
                                            onClick: function () {
                                              return b(e.link);
                                            },
                                            children: e.name,
                                          },
                                          e.id
                                        );
                                  }),
                                },
                                e.id
                              )
                            : (0, u.jsx)(
                                l.Z.Item,
                                {
                                  onClick: function () {
                                    return b(e.link);
                                  },
                                  className: "text-sm",
                                  children: e.name,
                                },
                                e.id
                              );
                        }),
                      },
                      e.id
                    )
                  : (0, u.jsx)(
                      l.Z.Item,
                      {
                        icon: e.icon,
                        className: "border-r border-transparent",
                        children: (0, u.jsx)(s.rU, {
                          to: e.link,
                          children: (0, u.jsx)("span", {
                            className: "text-sm dark:text-white",
                            children: e.name,
                          }),
                        }),
                      },
                      e.id
                    );
              }),
              (0, u.jsx)(
                d,
                {
                  className: "absolute "
                    .concat(
                      f.isOpen ? "bottom-[55px]" : "bottom-[70px]",
                      " w-full "
                    )
                    .concat(f.isOpen ? "pt-2 pb-4" : "py-0"),
                  icon: (0, u.jsx)(o.nf1, { size: 20 }),
                  title: (0, u.jsxs)("div", {
                    className: "dark:text-white",
                    children: [
                      (0, u.jsx)("div", {
                        className:
                          "text-sm truncate leading-3 mt-2 font-semibold",
                        children: m.name,
                      }),
                      (0, u.jsx)(a.Z, {
                        color: "purple",
                        children:
                          x &&
                          (null === x ||
                          void 0 === x ||
                          null === (n = x.user) ||
                          void 0 === n
                            ? void 0
                            : n.role),
                      }),
                    ],
                  }),
                  children:
                    m.hasSubMenu &&
                    m.subMenu.map(function (e) {
                      var n;
                      return "" === e.link
                        ? (0, u.jsx)(
                            l.Z.Item,
                            {
                              onClick: function () {
                                return h({ type: r.Nv }, b("/login"));
                              },
                              className: "text-sm ".concat(
                                f.isOpen ? "pl-14" : "pl-auto",
                                " dark:text-white"
                              ),
                              children: (0, u.jsx)("span", {
                                className: "dark:text-white",
                                children: e.name,
                              }),
                            },
                            e.id
                          )
                        : e.superAdmin &&
                          x &&
                          "superAdmin" !==
                            (null === x ||
                            void 0 === x ||
                            null === (n = x.user) ||
                            void 0 === n
                              ? void 0
                              : n.role)
                        ? null
                        : (0, u.jsx)(
                            l.Z.Item,
                            {
                              className: "text-sm ".concat(
                                f.isOpen ? "pl-14" : "pl-auto",
                                " dark:text-white"
                              ),
                              children: (0, u.jsx)(s.rU, {
                                to: e.link,
                                className: "dark:text-white",
                                children: e.name,
                              }),
                            },
                            e.id
                          );
                    }),
                },
                m.id
              ),
            ],
          }),
        });
      };
    },
    7528: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var l = t(4942),
        a = t(7462),
        c = t(9439),
        s = t(2791),
        i = t(1694),
        r = t.n(i),
        o = t(1818),
        u = t(732),
        d = t(9077),
        m = function (e, n) {
          var t = {};
          for (var l in e)
            Object.prototype.hasOwnProperty.call(e, l) &&
              n.indexOf(l) < 0 &&
              (t[l] = e[l]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (l = Object.getOwnPropertySymbols(e); a < l.length; a++)
              n.indexOf(l[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, l[a]) &&
                (t[l[a]] = e[l[a]]);
          }
          return t;
        },
        p = function (e) {
          var n,
            t = e.prefixCls,
            c = e.className,
            i = e.checked,
            o = e.onChange,
            u = e.onClick,
            p = m(e, [
              "prefixCls",
              "className",
              "checked",
              "onChange",
              "onClick",
            ]),
            h = (0, s.useContext(d.E_).getPrefixCls)("tag", t),
            x = r()(
              h,
              ((n = {}),
              (0, l.Z)(n, "".concat(h, "-checkable"), !0),
              (0, l.Z)(n, "".concat(h, "-checkable-checked"), i),
              n),
              c
            );
          return s.createElement(
            "span",
            (0, a.Z)({}, p, {
              className: x,
              onClick: function (e) {
                null === o || void 0 === o || o(!i),
                  null === u || void 0 === u || u(e);
              },
            })
          );
        },
        h = t(4466),
        x = t(2833),
        f = function (e, n) {
          var t = {};
          for (var l in e)
            Object.prototype.hasOwnProperty.call(e, l) &&
              n.indexOf(l) < 0 &&
              (t[l] = e[l]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (l = Object.getOwnPropertySymbols(e); a < l.length; a++)
              n.indexOf(l[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, l[a]) &&
                (t[l[a]] = e[l[a]]);
          }
          return t;
        },
        b = new RegExp("^(".concat(h.Y.join("|"), ")(-inverse)?$")),
        v = new RegExp("^(".concat(h.E.join("|"), ")$")),
        k = function (e, n) {
          var t,
            i = e.prefixCls,
            m = e.className,
            p = e.style,
            h = e.children,
            k = e.icon,
            j = e.color,
            N = e.onClose,
            y = e.closeIcon,
            C = e.closable,
            O = void 0 !== C && C,
            w = f(e, [
              "prefixCls",
              "className",
              "style",
              "children",
              "icon",
              "color",
              "onClose",
              "closeIcon",
              "closable",
            ]),
            Z = s.useContext(d.E_),
            g = Z.getPrefixCls,
            E = Z.direction,
            S = s.useState(!0),
            I = (0, c.Z)(S, 2),
            P = I[0],
            M = I[1];
          s.useEffect(
            function () {
              "visible" in w && M(w.visible);
            },
            [w.visible]
          );
          var _ = function () {
              return !!j && (b.test(j) || v.test(j));
            },
            R = (0, a.Z)({ backgroundColor: j && !_() ? j : void 0 }, p),
            T = _(),
            A = g("tag", i),
            K = r()(
              A,
              ((t = {}),
              (0, l.Z)(t, "".concat(A, "-").concat(j), T),
              (0, l.Z)(t, "".concat(A, "-has-color"), j && !T),
              (0, l.Z)(t, "".concat(A, "-hidden"), !P),
              (0, l.Z)(t, "".concat(A, "-rtl"), "rtl" === E),
              t),
              m
            ),
            U = function (e) {
              e.stopPropagation(),
                null === N || void 0 === N || N(e),
                e.defaultPrevented || "visible" in w || M(!1);
            },
            $ = "onClick" in w || (h && "a" === h.type),
            z = (0, o.Z)(w, ["visible"]),
            B = k || null,
            D = B
              ? s.createElement(
                  s.Fragment,
                  null,
                  B,
                  s.createElement("span", null, h)
                )
              : h,
            F = s.createElement(
              "span",
              (0, a.Z)({}, z, { ref: n, className: K, style: R }),
              D,
              O
                ? y
                  ? s.createElement(
                      "span",
                      { className: "".concat(A, "-close-icon"), onClick: U },
                      y
                    )
                  : s.createElement(u.Z, {
                      className: "".concat(A, "-close-icon"),
                      onClick: U,
                    })
                : null
            );
          return $ ? s.createElement(x.Z, null, F) : F;
        },
        j = s.forwardRef(k);
      (j.displayName = "Tag"), (j.CheckableTag = p);
      var N = j;
    },
  },
]);
//# sourceMappingURL=964.2c60d7cd.chunk.js.map
