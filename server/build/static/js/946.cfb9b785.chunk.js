"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [946],
  {
    3946: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return k;
          },
        });
      var r = a(5861),
        l = a(7757),
        t = a.n(l),
        n = a(9823),
        i = a(8678),
        o = a(7123),
        d = a(6435),
        c = a(3231),
        u = a(7309),
        m = a(2791),
        h = a(3853),
        x = a(6871),
        p = a(577),
        w = a(2419),
        j = a(8717),
        f = a(5675),
        g = a(8704),
        v = a(1033),
        Z = a(2065),
        P = a(184);
      function k() {
        var e = (0, g.b)().authDispatch,
          s = (0, x.s0)(),
          a = (0, w.ZP)("/roles", Z.Z).data,
          l = (0, w.ZP)("/locations", Z.Z).data,
          k = a && a.data,
          b = l && l.data,
          N = (function () {
            var a = (0, r.Z)(
              t().mark(function a(r) {
                return t().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (a.next = 3),
                            v.Z.post("/auth/registration", r)
                          );
                        case 3:
                          p.Am.success("User created successfully!"),
                            e({ type: f.Nv }),
                            s("/login"),
                            (a.next = 11);
                          break;
                        case 8:
                          (a.prev = 8),
                            (a.t0 = a.catch(0)),
                            p.Am.error(a.t0.message);
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
        return (0, P.jsxs)(P.Fragment, {
          children: [
            (0, P.jsx)(j.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !0, link: "/users", name: "Users" },
                { isLink: !1, link: "", name: "Create User" },
              ],
            }),
            (0, P.jsx)("div", {
              className: "py-5",
              children: (0, P.jsx)("div", {
                className: "w-96 mx-auto",
                children: (0, P.jsxs)(n.Z, {
                  name: "user-details",
                  layout: "vertical",
                  className: "ml-5 grid grid-cols-1 gap-2",
                  onFinish: N,
                  children: [
                    (0, P.jsx)(n.Z.Item, {
                      label: (0, P.jsx)("span", {
                        className: "text-lg dark:text-white",
                        children: "Name",
                      }),
                      name: "name",
                      rules: [
                        { required: !0, message: "Please input your name!" },
                      ],
                      children: (0, P.jsx)(i.Z, {
                        size: "large",
                        placeholder: "Name",
                      }),
                    }),
                    (0, P.jsx)(n.Z.Item, {
                      label: (0, P.jsx)("span", {
                        className: "text-lg dark:text-white",
                        children: "Email",
                      }),
                      name: "email",
                      rules: [
                        { required: !0, message: "Please input your email!" },
                      ],
                      children: (0, P.jsx)(i.Z, {
                        type: "email",
                        size: "large",
                        placeholder: "Email",
                      }),
                    }),
                    (0, P.jsx)(n.Z.Item, {
                      label: (0, P.jsx)("span", {
                        className: "text-lg dark:text-white",
                        children: "Phone Number",
                      }),
                      name: "phoneNumber",
                      rules: [
                        { required: !0, message: "Please input phone number!" },
                      ],
                      children: (0, P.jsx)(i.Z, {
                        type: "tel",
                        size: "large",
                        placeholder: "Phone",
                      }),
                    }),
                    (0, P.jsx)(n.Z.Item, {
                      label: (0, P.jsx)("span", {
                        className: "text-lg dark:text-white",
                        children: "Select Date of Birth",
                      }),
                      name: "dateOfBirth",
                      rules: [
                        {
                          required: !0,
                          message: "Please input date of birth!",
                        },
                      ],
                      children: (0, P.jsx)(o.Z, {
                        onChange: function (e, s) {
                          console.log(e, s);
                        },
                        size: "large",
                        className: "w-full",
                      }),
                    }),
                    (0, P.jsx)(n.Z.Item, {
                      name: "location",
                      label: (0, P.jsx)("label", {
                        className: "dark:text-white text-lg",
                        children: "Select Division",
                      }),
                      children: (0, P.jsx)(d.Z, {
                        value: b,
                        allowClear: !0,
                        placeholder: "Select a division",
                        size: "large",
                        showSearch: !0,
                        filterOption: function (e, s) {
                          return s.children.includes(e);
                        },
                        filterSort: function (e, s) {
                          return e.children
                            .toLowerCase()
                            .localeCompare(s.children.toLowerCase());
                        },
                        children:
                          null === b || void 0 === b
                            ? void 0
                            : b.map(function (e) {
                                return (0,
                                P.jsx)(d.Z.Option, { value: e.name, children: e.name }, m.useId);
                              }),
                      }),
                    }),
                    (0, P.jsx)(n.Z.Item, {
                      label: (0, P.jsx)("h1", {
                        className: "text-lg font-semibold dark:text-white",
                        children: "Password",
                      }),
                      name: "password",
                      dependencies: ["confirmPassword"],
                      hasFeedback: !0,
                      className: "w-full",
                      rules: [
                        {
                          required: !0,
                          message: "Please input your password!",
                        },
                        function (e) {
                          var s = e.getFieldValue;
                          return {
                            validator: function (e, a) {
                              return a && s("confirmPassword") !== a
                                ? Promise.reject(
                                    new Error(
                                      "The two passwords that you entered do not match!"
                                    )
                                  )
                                : Promise.resolve();
                            },
                          };
                        },
                      ],
                      children: (0, P.jsx)(i.Z.Password, {
                        type: "password",
                        size: "large",
                        prefix: (0, P.jsx)(h.o1l, { size: 25 }),
                        placeholder: "Password",
                      }),
                    }),
                    (0, P.jsx)(n.Z.Item, {
                      label: (0, P.jsx)("h1", {
                        className: "text-lg font-semibold dark:text-white",
                        children: "Confirm Password",
                      }),
                      dependencies: ["password"],
                      hasFeedback: !0,
                      name: "confirmPassword",
                      className: "w-full",
                      rules: [
                        {
                          required: !0,
                          message: "Please input your password!",
                        },
                        function (e) {
                          var s = e.getFieldValue;
                          return {
                            validator: function (e, a) {
                              return a && s("password") !== a
                                ? Promise.reject(
                                    new Error(
                                      "The two passwords that you entered do not match!"
                                    )
                                  )
                                : Promise.resolve();
                            },
                          };
                        },
                      ],
                      children: (0, P.jsx)(i.Z.Password, {
                        type: "password",
                        size: "large",
                        prefix: (0, P.jsx)(h.o1l, { size: 25 }),
                        placeholder: "Password",
                      }),
                    }),
                    (0, P.jsx)(n.Z.Item, {
                      label: (0, P.jsx)("span", {
                        className: "text-lg dark:text-white",
                        children: "User Status",
                      }),
                      name: "isActive",
                      rules: [
                        { required: !0, message: "Please select user status!" },
                      ],
                      children: (0, P.jsxs)(c.ZP.Group, {
                        children: [
                          (0, P.jsx)(c.ZP, {
                            value: !0,
                            className: "dark:text-white",
                            children: "Active",
                          }),
                          (0, P.jsx)(c.ZP, {
                            value: !1,
                            className: "dark:text-white",
                            children: "Inactive",
                          }),
                        ],
                      }),
                    }),
                    (0, P.jsx)(n.Z.Item, {
                      label: (0, P.jsx)("span", {
                        className: "text-lg dark:text-white",
                        children: "Role",
                      }),
                      name: "role",
                      rules: [
                        {
                          required: !0,
                          message: "Please mark to at least one role!",
                        },
                      ],
                      children: (0, P.jsx)(c.ZP.Group, {
                        children:
                          k &&
                          (null === k || void 0 === k
                            ? void 0
                            : k.map(function (e) {
                                return "superadmin" === e.role
                                  ? null
                                  : (0, P.jsx)(
                                      c.ZP,
                                      {
                                        className: "dark:text-white",
                                        value: e.role,
                                        children: e.role.toUpperCase(),
                                      },
                                      e._id
                                    );
                              })),
                      }),
                    }),
                    (0, P.jsx)(n.Z.Item, {
                      children: (0, P.jsx)(u.Z, {
                        htmlType: "submit",
                        size: "large",
                        className:
                          "w-full dark:text-white text-blue-600 hover:text-white",
                        type: "primary",
                        children: "Save",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=946.cfb9b785.chunk.js.map
