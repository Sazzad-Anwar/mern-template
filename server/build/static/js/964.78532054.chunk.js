"use strict";
(self.webpackChunkadmin_pwa = self.webpackChunkadmin_pwa || []).push([
  [964],
  {
    964: function (e, n, t) {
      t.r(n);
      var s = t(1697),
        a = t(6871),
        i = t(3504),
        l = t(8704),
        r = t(5675),
        c = t(8820),
        m = t(184),
        u = s.Z.SubMenu;
      n.default = function (e) {
        var n = e.menulist,
          t = e.admin,
          d = (0, l.b)(),
          o = d.authDispatch,
          x = d.auth,
          p = d.sideBar,
          h = (0, a.s0)("/"),
          j = (0, a.TH)();
        return (0, m.jsx)("div", {
          className: "".concat(
            p.isOpen ? "w-60" : "w-14",
            " normal-transition h-screen border-r dark:border-gray-700"
          ),
          children: (0, m.jsxs)(s.Z, {
            defaultSelectedKeys: ["/" + j.pathname.split("/")[1]],
            defaultOpenKeys: [j.pathname.split("/")[1]],
            mode: "inline",
            inlineCollapsed: !p.isOpen,
            className: "h-full w-auto relative",
            children: [
              n.map(function (e) {
                return e.hasSubMenu
                  ? (0, m.jsx)(
                      u,
                      {
                        icon: e.icon,
                        title: (0, m.jsx)("p", {
                          className: "text-sm",
                          children: e.name,
                        }),
                        children: e.subMenu.map(function (e) {
                          return e.hasSubMenu
                            ? (0, m.jsx)(
                                u,
                                {
                                  className: "dark:text-white",
                                  title: (0, m.jsx)("p", {
                                    className: "text-sm",
                                    children: e.name,
                                  }),
                                  children: e.subMenu.map(function (e) {
                                    return e.hasSubMenu
                                      ? (0, m.jsx)(
                                          u,
                                          {
                                            className: "dark:text-white",
                                            title: (0, m.jsx)("p", {
                                              className: "text-sm",
                                              children: e.name,
                                            }),
                                            children: e.subMenu.map(function (
                                              e
                                            ) {
                                              return (0, m.jsx)(
                                                s.Z.Item,
                                                {
                                                  className: "text-sm",
                                                  onClick: function () {
                                                    return h(e.link);
                                                  },
                                                  children: e.name,
                                                },
                                                e.id
                                              );
                                            }),
                                          },
                                          e.id
                                        )
                                      : (0, m.jsx)(
                                          s.Z.Item,
                                          {
                                            className: "text-sm",
                                            onClick: function () {
                                              return h(e.link);
                                            },
                                            children: e.name,
                                          },
                                          e.id
                                        );
                                  }),
                                },
                                e.id
                              )
                            : (0, m.jsx)(
                                s.Z.Item,
                                {
                                  onClick: function () {
                                    return h(e.link);
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
                  : (0, m.jsx)(
                      s.Z.Item,
                      {
                        icon: e.icon,
                        className: "border-r border-transparent",
                        children: (0, m.jsx)(i.rU, {
                          to: e.link,
                          children: (0, m.jsx)("span", {
                            className: "text-sm dark:text-white",
                            children: e.name,
                          }),
                        }),
                      },
                      e.id
                    );
              }),
              (0, m.jsx)(
                u,
                {
                  className: "absolute bottom-[55px] w-full ".concat(
                    p.isOpen ? "pt-2 pb-4" : "py-0"
                  ),
                  icon: (0, m.jsx)(c.nf1, { size: 20 }),
                  title: (0, m.jsxs)("div", {
                    className: "flex flex-col dark:text-white",
                    children: [
                      (0, m.jsx)("span", {
                        className: "text-sm truncate",
                        children: t.name,
                      }),
                      (0, m.jsx)("span", {
                        className: "text-xs text-purple-500 font-bold",
                        children: x.user.role.toUpperCase(),
                      }),
                    ],
                  }),
                  children:
                    t.hasSubMenu &&
                    t.subMenu.map(function (e) {
                      return "" === e.link
                        ? (0, m.jsx)(
                            s.Z.Item,
                            {
                              onClick: function () {
                                return o({ type: r.Nv }, h("/login"));
                              },
                              className: "text-sm ".concat(
                                p.isOpen ? "pl-14" : "pl-auto",
                                " dark:text-white"
                              ),
                              children: (0, m.jsx)("span", {
                                className: "dark:text-white",
                                children: e.name,
                              }),
                            },
                            e.id
                          )
                        : e.superAdmin && "superAdmin" === !x.user.role
                        ? null
                        : (0, m.jsx)(
                            s.Z.Item,
                            {
                              className: "text-sm ".concat(
                                p.isOpen ? "pl-14" : "pl-auto",
                                " dark:text-white"
                              ),
                              children: (0, m.jsx)(i.rU, {
                                to: e.link,
                                className: "dark:text-white",
                                children: e.name,
                              }),
                            },
                            e.id
                          );
                    }),
                },
                t.id
              ),
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=964.78532054.chunk.js.map
