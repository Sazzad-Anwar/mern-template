"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [964],
  {
    964: function (e, n, t) {
      t.r(n);
      var s = t(1697),
        a = t(7528),
        i = t(6871),
        l = t(3504),
        r = t(8704),
        c = t(5675),
        d = t(8820),
        u = t(184),
        m = s.Z.SubMenu;
      n.default = function (e) {
        var n,
          t = e.menulist,
          o = e.admin,
          h = (0, r.b)(),
          x = h.authDispatch,
          p = h.auth,
          j = h.sideBar,
          k = (0, i.s0)(),
          b = (0, i.TH)();
        return (0, u.jsx)("div", {
          className: "".concat(
            j.isOpen ? "w-60" : "w-0 md:w-14",
            " normal-transition h-screen border-r dark:border-gray-700"
          ),
          children: (0, u.jsxs)(s.Z, {
            defaultSelectedKeys: ["/"],
            defaultOpenKeys: [b.pathname.split("/")[1]],
            mode: "inline",
            inlineCollapsed: !j.isOpen,
            className: "h-full w-auto relative",
            children: [
              t.map(function (e) {
                return e.hasSubMenu
                  ? (0, u.jsx)(
                      m,
                      {
                        icon: e.icon,
                        title: (0, u.jsx)("p", {
                          className: "text-sm",
                          children: e.name,
                        }),
                        children: e.subMenu.map(function (e) {
                          return e.hasSubMenu
                            ? (0, u.jsx)(
                                m,
                                {
                                  className: "dark:text-white",
                                  title: (0, u.jsx)("p", {
                                    className: "text-sm",
                                    children: e.name,
                                  }),
                                  children: e.subMenu.map(function (e) {
                                    return e.hasSubMenu
                                      ? (0, u.jsx)(
                                          m,
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
                                                s.Z.Item,
                                                {
                                                  className: "text-sm",
                                                  onClick: function () {
                                                    return k(e.link);
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
                                          s.Z.Item,
                                          {
                                            className: "text-sm",
                                            onClick: function () {
                                              return k(e.link);
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
                                s.Z.Item,
                                {
                                  onClick: function () {
                                    return k(e.link);
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
                      s.Z.Item,
                      {
                        icon: e.icon,
                        className: "border-r border-transparent",
                        children: (0, u.jsx)(l.rU, {
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
                m,
                {
                  className: "absolute "
                    .concat(
                      j.isOpen ? "bottom-[55px]" : "bottom-[70px]",
                      " w-full "
                    )
                    .concat(j.isOpen ? "pt-2 pb-4" : "py-0"),
                  icon: (0, u.jsx)(d.nf1, { size: 20 }),
                  title: (0, u.jsxs)("div", {
                    className: "dark:text-white",
                    children: [
                      (0, u.jsx)("div", {
                        className:
                          "text-sm truncate leading-3 mt-2 font-semibold",
                        children: o.name,
                      }),
                      (0, u.jsx)(a.Z, {
                        color: "purple",
                        children:
                          p &&
                          (null === p ||
                          void 0 === p ||
                          null === (n = p.user) ||
                          void 0 === n
                            ? void 0
                            : n.role),
                      }),
                    ],
                  }),
                  children:
                    o.hasSubMenu &&
                    o.subMenu.map(function (e) {
                      var n;
                      return "" === e.link
                        ? (0, u.jsx)(
                            s.Z.Item,
                            {
                              onClick: function () {
                                return x({ type: c.Nv }, k("/login"));
                              },
                              className: "text-sm ".concat(
                                j.isOpen ? "pl-14" : "pl-auto",
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
                          p &&
                          "superadmin" !==
                            (null === p ||
                            void 0 === p ||
                            null === (n = p.user) ||
                            void 0 === n
                              ? void 0
                              : n.role)
                        ? null
                        : (0, u.jsx)(
                            s.Z.Item,
                            {
                              className: "text-sm ".concat(
                                j.isOpen ? "pl-14" : "pl-auto",
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
                o.id
              ),
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=964.ba17cba5.chunk.js.map
