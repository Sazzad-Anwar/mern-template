"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [271],
  {
    1271: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return N;
          },
        });
      var l = s(5861),
        r = s(7757),
        t = s.n(r),
        i = s(6446),
        n = s(9823),
        d = s(8678),
        c = s(7123),
        u = s(3734),
        m = s(3231),
        o = s(7309),
        h = (s(2791), s(6871)),
        x = s(577),
        p = s(2419),
        v = s(1033),
        j = s(2065),
        Z = s(2896),
        g = s(8704),
        f = s(8717),
        k = s(2426),
        b = s.n(k),
        w = s(184);
      function N() {
        var e = (0, h.UO)().id,
          a = (0, g.b)().auth,
          s = (0, p.ZP)("/users/".concat(e), j.Z).data,
          r = (0, p.ZP)("/roles", j.Z),
          k = r.data,
          N = r.error,
          P = (0, p.ZP)("/locations?q=divisions", j.Z).data,
          y = P && P.data,
          U = s && s.data,
          A = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/users", name: "Users" },
            { isLink: !1, link: "", name: U && "undefined" !== U && U.name },
          ],
          C = (function () {
            var a = (0, l.Z)(
              t().mark(function a(s) {
                var l, r;
                return t().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (s.isActive =
                              null !== (l = s.isActive) && void 0 !== l
                                ? l
                                : U.isActive),
                            (s.role =
                              null !== (r = s.role) && void 0 !== r
                                ? r
                                : U.role),
                            (a.next = 5),
                            v.Z.put("/users/".concat(e), s)
                          );
                        case 5:
                          x.Am.success("User details updated successfully!"),
                            (0, p.JG)("/users/".concat(e), s),
                            (a.next = 12);
                          break;
                        case 9:
                          (a.prev = 9),
                            (a.t0 = a.catch(0)),
                            x.Am.error(
                              a.t0.response.data.message
                                ? a.t0.response.data.message
                                : a.t0.message
                            );
                        case 12:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        return (0, w.jsxs)(w.Fragment, {
          children: [
            (0, w.jsx)(f.Z, { details: A }),
            (0, w.jsx)("div", {
              className: "py-5",
              children:
                U && "undefined" !== U
                  ? (0, w.jsxs)("div", {
                      className: "w-96 mx-auto",
                      children: [
                        (0, w.jsx)("div", {
                          className: "text-center mb-5",
                          children: (0, w.jsx)(i.C, {
                            alt: U.name,
                            src: U.avatarUrl,
                            className: "dark:text-gray-900",
                            size: 50,
                            children: U.name.split("")[0].toUpperCase(),
                          }),
                        }),
                        (0, w.jsxs)(n.Z, {
                          name: "user-details",
                          layout: "vertical",
                          initialValues: {
                            name: U.name,
                            email: U.email,
                            phoneNumber: U.phoneNumber,
                            role: U.role,
                            dateOfBirth:
                              "" !== U.dateOfBirth ? b()(U.dateOfBirth) : "",
                            location: U.location,
                            isActive: U.isActive,
                            avatarUrl: U.avatarUrl,
                          },
                          className: "ml-5 grid grid-cols-1 gap-2",
                          onFinish: C,
                          children: [
                            (0, w.jsx)(n.Z.Item, {
                              label: (0, w.jsx)("span", {
                                className: "text-lg dark:text-white",
                                children: "Name",
                              }),
                              name: "name",
                              rules: [
                                {
                                  required: !0,
                                  message: "Please input your name!",
                                },
                              ],
                              children: (0, w.jsx)(d.Z, { size: "large" }),
                            }),
                            (0, w.jsx)(n.Z.Item, {
                              label: (0, w.jsx)("span", {
                                className: "text-lg dark:text-white",
                                children: "Email",
                              }),
                              name: "email",
                              rules: [
                                {
                                  required: !0,
                                  message: "Please input your email!",
                                },
                              ],
                              children: (0, w.jsx)(d.Z, {
                                type: "email",
                                size: "large",
                              }),
                            }),
                            (0, w.jsx)(n.Z.Item, {
                              label: (0, w.jsx)("span", {
                                className: "text-lg dark:text-white",
                                children: "Phone Number",
                              }),
                              name: "phoneNumber",
                              rules: [
                                {
                                  required: !0,
                                  message: "Please input phone number!",
                                },
                              ],
                              children: (0, w.jsx)(d.Z, {
                                type: "tel",
                                size: "large",
                              }),
                            }),
                            (0, w.jsx)(n.Z.Item, {
                              label: (0, w.jsx)("span", {
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
                              children: (0, w.jsx)(c.Z, {
                                format: "YYYY/MM/DD",
                                size: "large",
                                className: "w-full",
                              }),
                            }),
                            (0, w.jsx)(n.Z.Item, {
                              name: "location",
                              label: (0, w.jsx)("label", {
                                className: "dark:text-white text-lg",
                                children: "Select Division",
                              }),
                              children: (0, w.jsx)(u.Z, {
                                value: y,
                                showSearch: !0,
                                allowClear: !0,
                                placeholder: "Select a division",
                                size: "large",
                                filterOption: function (e, a) {
                                  return a.children.includes(e);
                                },
                                filterSort: function (e, a) {
                                  return e.children
                                    .toLowerCase()
                                    .localeCompare(a.children.toLowerCase());
                                },
                                children:
                                  null === y || void 0 === y
                                    ? void 0
                                    : y.map(function (e) {
                                        return (0,
                                        w.jsx)(u.Z.Option, { value: e.name, children: e.name }, e.name + "-" + e._id);
                                      }),
                              }),
                            }),
                            (0, w.jsx)(n.Z.Item, {
                              name: "avatarUrl",
                              label: (0, w.jsx)("label", {
                                className: "dark:text-white text-lg",
                                children: "Avatar Url",
                              }),
                              children: (0, w.jsx)(d.Z, {
                                size: "large",
                                allowClear: !0,
                                placeholder: "Enter image url",
                              }),
                            }),
                            "superadmin" ===
                              (null === a || void 0 === a
                                ? void 0
                                : a.user.role) &&
                              (0, w.jsxs)(w.Fragment, {
                                children: [
                                  (0, w.jsx)(n.Z.Item, {
                                    label: (0, w.jsx)("span", {
                                      className: "text-lg dark:text-white",
                                      children: "User Status",
                                    }),
                                    name: "isActive",
                                    rules: [
                                      {
                                        required: !0,
                                        message: "Please select user status!",
                                      },
                                    ],
                                    children: (0, w.jsxs)(m.ZP.Group, {
                                      children: [
                                        (0, w.jsx)(m.ZP, {
                                          value: !0,
                                          className: "dark:text-white",
                                          children: "Active",
                                        }),
                                        (0, w.jsx)(m.ZP, {
                                          value: !1,
                                          className: "dark:text-white",
                                          children: "Inactive",
                                        }),
                                      ],
                                    }),
                                  }),
                                  !(null !== N && void 0 !== N && N.message) &&
                                    (0, w.jsx)(n.Z.Item, {
                                      label: (0, w.jsx)("span", {
                                        className: "text-lg dark:text-white",
                                        children: "Role",
                                      }),
                                      name: "role",
                                      rules: [
                                        {
                                          required: !0,
                                          message:
                                            "Please mark to at least one role!",
                                        },
                                      ],
                                      children: (0, w.jsx)(m.ZP.Group, {
                                        children:
                                          k &&
                                          (null === k || void 0 === k
                                            ? void 0
                                            : k.data.map(function (e) {
                                                return (0,
                                                w.jsx)(m.ZP, { className: "dark:text-white", disabled: U && "superadmin" === U.role, value: e.role, children: e.role.toUpperCase() }, e._id);
                                              })),
                                      }),
                                    }),
                                ],
                              }),
                            (0, w.jsx)(n.Z.Item, {
                              children: (0, w.jsx)(o.Z, {
                                htmlType: "submit",
                                size: "large",
                                className: "w-full",
                                type: "primary",
                                disabled:
                                  "superadmin" ===
                                    (null === U || void 0 === U
                                      ? void 0
                                      : U.role) &&
                                  "superadmin" !==
                                    (null === a || void 0 === a
                                      ? void 0
                                      : a.user.role),
                                children: "Save",
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, w.jsx)(Z.Z, {}),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=271.1055d505.chunk.js.map
