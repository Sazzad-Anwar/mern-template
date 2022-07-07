"use strict";
(self.webpackChunkadmin_pwa = self.webpackChunkadmin_pwa || []).push([
  [964],
  {
    964: function (e, n, t) {
      t.r(n);
      var a = t(1697),
        s = t(6871),
        l = t(3504),
        i = t(3113),
        r = t(5675),
        c = t(8820),
        u = t(184),
        d = a.Z.SubMenu;
      n.default = function (e) {
        var n = e.collapsed,
          t = e.menulist,
          m = e.admin,
          o = (0, i.b)(),
          x = o.authDispatch,
          h = o.auth,
          p = (0, s.s0)("/"),
          b = (0, s.TH)();
        return (
          console.log(n),
          (0, u.jsx)("div", {
            className: "".concat(
              n ? "w-auto" : "w-72",
              " normal-transition h-screen border-r dark:border-gray-700"
            ),
            children: (0, u.jsxs)(a.Z, {
              defaultSelectedKeys: ["/" + b.pathname.split("/")[1]],
              defaultOpenKeys: [b.pathname.split("/")[1]],
              mode: "inline",
              inlineCollapsed: n,
              className: "h-full relative",
              children: [
                t.map(function (e) {
                  return e.hasSubMenu
                    ? (0, u.jsx)(
                        d,
                        {
                          icon: e.icon,
                          title: (0, u.jsx)("p", {
                            className: "text-base",
                            children: e.name,
                          }),
                          children: e.subMenu.map(function (e) {
                            return e.hasSubMenu
                              ? (0, u.jsx)(
                                  d,
                                  {
                                    className: "dark:text-white",
                                    title: (0, u.jsx)("p", {
                                      className: "text-base",
                                      children: e.name,
                                    }),
                                    children: e.subMenu.map(function (e) {
                                      return e.hasSubMenu
                                        ? (0, u.jsx)(
                                            d,
                                            {
                                              className: "dark:text-white",
                                              title: (0, u.jsx)("p", {
                                                className: "text-base",
                                                children: e.name,
                                              }),
                                              children: e.subMenu.map(function (
                                                e
                                              ) {
                                                return (0, u.jsx)(
                                                  a.Z.Item,
                                                  {
                                                    className: "text-base",
                                                    onClick: function () {
                                                      return p(e.link);
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
                                            a.Z.Item,
                                            {
                                              className: "text-base",
                                              onClick: function () {
                                                return p(e.link);
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
                                  a.Z.Item,
                                  {
                                    onClick: function () {
                                      return p(e.link);
                                    },
                                    className: "text-base",
                                    children: e.name,
                                  },
                                  e.id
                                );
                          }),
                        },
                        e.id
                      )
                    : (0, u.jsx)(
                        a.Z.Item,
                        {
                          icon: e.icon,
                          className: "border-r border-transparent",
                          children: (0, u.jsx)(l.rU, {
                            to: e.link,
                            children: (0, u.jsx)("span", {
                              className: "text-lg dark:text-white",
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
                    className: "absolute bottom-[65px] w-full ".concat(
                      n ? "py-0" : "pt-2 pb-4"
                    ),
                    icon: (0, u.jsx)(c.nf1, { size: 28 }),
                    title: (0, u.jsxs)("div", {
                      className: "flex flex-col dark:text-white",
                      children: [
                        (0, u.jsx)("span", {
                          className: "text-sm truncate",
                          children: m.name,
                        }),
                        (0, u.jsx)("span", {
                          className: "text-xs text-purple-500 font-bold",
                          children: h.user.role.toUpperCase(),
                        }),
                      ],
                    }),
                    children:
                      m.hasSubMenu &&
                      m.subMenu.map(function (e) {
                        return "" === e.link
                          ? (0, u.jsx)(
                              a.Z.Item,
                              {
                                onClick: function () {
                                  return x({ type: r.Nv }, p("/login"));
                                },
                                className: "text-base ".concat(
                                  n ? "pl-auto" : "pl-16",
                                  " dark:text-white"
                                ),
                                children: (0, u.jsx)("span", {
                                  className: "dark:text-white",
                                  children: e.name,
                                }),
                              },
                              e.id
                            )
                          : e.superAdmin && "superAdmin" === !h.user.role
                          ? null
                          : (0, u.jsx)(
                              a.Z.Item,
                              {
                                className: "text-base ".concat(
                                  n ? "pl-auto" : "pl-16",
                                  " dark:text-white"
                                ),
                                children: (0, u.jsx)(l.rU, {
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
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=964.99239e42.chunk.js.map
