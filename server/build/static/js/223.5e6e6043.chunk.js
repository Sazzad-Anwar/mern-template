"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [223],
  {
    9223: function (e, a, i) {
      i.r(a),
        i.d(a, {
          default: function () {
            return h;
          },
        });
      var s = i(2791),
        r = i(2896),
        t = i(184),
        n = (0, s.lazy)(function () {
          return Promise.all([i.e(126), i.e(909)]).then(i.bind(i, 8909));
        }),
        d = function (e) {
          var a = e.src,
            i = e.title,
            d = e.className;
          return (0, t.jsxs)("div", {
            className:
              "normal-transition min-h-screen dark:bg-dark " + (d || ""),
            children: [
              (0, t.jsx)("div", {
                className: "flex items-center justify-between py-3",
                children: (0, t.jsxs)("h1", {
                  className: "font-ubuntu text-3xl font-medium dark:text-white",
                  children: [
                    i,
                    " ",
                    (0, t.jsxs)("span", {
                      className: "font-ubuntu text-base",
                      children: ["(", a.length, ")"],
                    }),
                  ],
                }),
              }),
              a.length &&
                a.map(function (e, a) {
                  return (0,
                  t.jsx)(s.Fragment, { children: (0, t.jsx)(s.Suspense, { fallback: (0, t.jsx)(r.Z, {}), children: (0, t.jsx)(n, { api: e, index: a }) }) }, e.apiName + "-" + a);
                }),
            ],
          });
        },
        o = JSON.parse(
          '[{"name":"Registration","description":"<p>User registration with registration details <b><i>name</i></b>,<b><i>email</i></b>, <b><i>phoneNumber</i></b>. <b><i>password</i></b>. </p>","url":{"path":"/auth/registration","variables":{}},"method":"POST","body":{"isRequired":true,"params":{"name":"user1234","email":"user1234@mail.com","dateOfBirth":"01/01/2022","location":"Dhaka","phoneNumber":"12345678901","password":"admin123456"}},"headers":{"isRequired":false,"params":{}},"query":{"isRequired":false,"params":{}}},{"name":"Login","description":"<p>User login with login details <b><i>email</i></b> or <b><i>phoneNumber</i></b> and <b><i>password</i></b> </p>","url":{"path":"/auth/login","variables":{}},"method":"POST","body":{"isRequired":true,"params":{"email":"sazzadzihan@gmail.com","password":"admin123456"}},"headers":{"isRequired":false,"params":{}},"query":{"isRequired":false,"params":{}}},{"name":"Reset Password","description":"<p>This api needs a <i>user Id</i> to get a password reset link</p>","url":{"path":"/auth/resetPassword","variables":{"id":"6261c86af46f1c9a47cdd31b"}},"method":"GET","body":{"isRequired":false,"params":{}},"headers":{"isRequired":false,"params":{}},"query":{"isRequired":false,"params":{}}},{"name":"Get all users","description":"<p>This api will respond with the data of all users.</p>","url":{"path":"/users","variables":{}},"method":"GET","body":{"isRequired":false,"params":{}},"headers":{"isRequired":true,"params":{"authorization":"bearer (paste the token here)"}},"query":{"isRequired":false,"params":{"page":1,"limit":20,"name":"","email":"","phoneNumber":""}}},{"name":"Get a user\'s details.","description":"<p>This api needs an access token to request and only accessible to the <i>Admin</i>,<i>Super admin</i> and <i>User</i>.</p>","url":{"path":"/users","variables":{"id":"62c1d5a427cf96bf632a0573"}},"method":"GET","body":{"isRequired":false,"params":{}},"headers":{"isRequired":true,"params":{"authorization":"bearer (paste the token here)"}},"query":{"isRequired":false,"params":{}}},{"name":"Update a user\'s details.","description":"<p>This api needs an access token to request and only accessible to the <i>Admin</i>,<i>Super admin</i> and <i>User</i>.</p>","url":{"path":"/users","variables":{"id":"6261c86af46f1c9a47cdd31b"}},"method":"PUT","body":{"isRequired":true,"params":{"name":"Medi Career","email":"admin@mail.com","phoneNumber":"1234567890","isActive":false,"role":["superAdmin"]}},"headers":{"isRequired":true,"params":{"authorization":"bearer (paste the token here)"}},"query":{"isRequired":false,"params":{}}},{"name":"Delete a user","description":"<p>This api needs an access token to request and only accessible to the <i>Admin</i>,<i>Super admin</i> and <i>User</i>.</p>","url":{"path":"/users","variables":{"id":"62654d6b0526bf59320fca7d"}},"method":"DELETE","body":{"isRequired":true,"params":{}},"headers":{"isRequired":true,"params":{"authorization":"bearer (paste the token here)"}},"query":{"isRequired":false,"params":{}}},{"name":"Get categories","description":"<p>This api will send the category details using the parent and ancestors name </p","url":{"path":"/categories","variables":{}},"method":"GET","body":{"isRequired":false,"params":{}},"headers":{"isRequired":false,"params":{}},"query":{"isRequired":true,"params":{"parent":"","ancestors":""}}},{"name":"Get locations","description":"<p>This api will send the locations </p","url":{"path":"/locations","variables":{}},"method":"GET","body":{"isRequired":false,"params":{}},"headers":{"isRequired":false,"params":{}},"query":{"isRequired":false,"params":{}}},{"name":"Get all error logs","description":"<p>This api will send all the error logs. This api needs <i>JWT token</i> in header </p","url":{"path":"/error-logs","variables":{}},"method":"GET","body":{"isRequired":false,"params":{}},"headers":{"isRequired":true,"params":{"authorization":"bearer (paste the token here)"}},"query":{"isRequired":true,"params":{"pageSize":10,"page":1}}}]'
        ),
        l = i(8704),
        u = i(6871),
        p = i(6570),
        m = i(8717);
      function h() {
        var e = (0, l.b)().auth,
          a = (0, u.TH)();
        if (!e.user)
          return (0, t.jsx)(u.Fg, {
            to: "/login",
            state: { from: a },
            replace: !0,
          });
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(m.Z, {
              details: [
                { isLink: !0, link: "/", name: "Home" },
                { isLink: !1, link: "/api", name: "Api Documentation" },
              ],
            }),
            (0, t.jsx)(d, {
              src: o,
              title: "REST API documentation for ".concat(p.iC),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=223.5e6e6043.chunk.js.map
