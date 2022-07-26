(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [589],
  {
    6589: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          },
        });
      var a = n(5861),
        r = n(9439),
        o = n(7757),
        c = n.n(o),
        s = n(2791),
        i = n(6871),
        l = n(2419),
        u = n(2065),
        d = n(8717),
        f = n(8678),
        m = n(7309),
        p = n(9221),
        v = n(1033),
        x = n(8957),
        g = n(1413),
        h = n(577),
        y = n(6570),
        b = n(3853),
        Z = n(8820),
        C = n(6998),
        w = n.n(C),
        k = n(9823),
        j = n(9220),
        N = n(6038),
        S = n(6755),
        E = n(184);
      function D(e) {
        var t = e.file,
          n = e.page,
          o = e.pageSize,
          i = e.files,
          u = e.setFiles,
          d = e.folder,
          p = (0, s.useState)(!1),
          x = (0, r.Z)(p, 2),
          C = x[0],
          D = x[1],
          T = (0, s.useRef)(),
          P = (function () {
            var e = (0, a.Z)(
              c().mark(function e(t) {
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            v.Z.delete("/files/".concat(t))
                          );
                        case 3:
                          u(
                            i.filter(function (e) {
                              return e._id !== t;
                            })
                          ),
                            (0, l.JG)(
                              "/files?folderId="
                                .concat(t, "&page=")
                                .concat(n, "&pageSize=")
                                .concat(o),
                              { data: i },
                              !1
                            ),
                            h.Am.success("File is deleted"),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            h.Am.error(
                              e.t0.response.data.message
                                ? e.t0.response.data.message
                                : e.t0.message
                            );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          z = (function () {
            var e = (0, a.Z)(
              c().mark(function e(a) {
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((D(!1), a.name === t.name)) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.prev = 2),
                            (e.next = 5),
                            v.Z.put("/files/".concat(t._id), a)
                          );
                        case 5:
                          (0, l.JG)(
                            "/files?folderId="
                              .concat(d._id, "&page=")
                              .concat(n, "&pageSize=")
                              .concat(o),
                            {
                              data: i.map(function (e) {
                                return e._id === t._id
                                  ? (0, g.Z)(
                                      (0, g.Z)({}, e),
                                      {},
                                      { name: a.name }
                                    )
                                  : e;
                              }),
                            },
                            !1
                          ),
                            h.Am.success("Image name is saved"),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(2)),
                            h.Am.error(e.t0.response.data.message);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (0, E.jsxs)("div", {
          children: [
            (0, E.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [
                C
                  ? (0, E.jsxs)(k.Z, {
                      initialValues: { name: t.name },
                      onFinish: z,
                      className: "mr-2",
                      children: [
                        (0, E.jsx)(k.Z.Item, {
                          name: "name",
                          className: "mb-0",
                          rules: [
                            {
                              required: !0,
                              message: "Please input the folder name",
                            },
                          ],
                          children: (0, E.jsx)(f.Z, {
                            placeholder: "Folder name",
                            className: "w-full text-center",
                            size: "small",
                            autoFocus: !0,
                            onBlur: function () {
                              D(!1), T.current.click();
                            },
                          }),
                        }),
                        (0, E.jsx)(m.Z, {
                          ref: T,
                          htmlType: "submit",
                          className: "hidden",
                        }),
                      ],
                    })
                  : (0, E.jsx)(j.Z, {
                      title: "Double click to name to edit",
                      placement: "bottom",
                      children: (0, E.jsx)("button", {
                        onClick: function (e) {
                          2 === e.detail && D(!0);
                        },
                        children: (0, E.jsx)("span", {
                          className: "dark:text-white truncate font-mono",
                          children: t.name,
                        }),
                      }),
                    }),
                (0, E.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, E.jsx)(j.Z, {
                      title: "Copy url to clipboard",
                      children: (0, E.jsx)("button", {
                        onClick: function () {
                          return (
                            (e = y.T5 + "/static/" + t.url),
                            w()(e),
                            void h.Am.success("Copied to clipboard")
                          );
                          var e;
                        },
                        children: (0, E.jsx)(b.C3L, {
                          className: "dark:text-white",
                        }),
                      }),
                    }),
                    (0, E.jsx)(j.Z, {
                      title: "Delete file",
                      children: (0, E.jsx)(N.Z, {
                        title: "Are you sure to delete this file?",
                        onConfirm: function () {
                          return P(t._id);
                        },
                        okText: "Yes",
                        cancelText: "No",
                        className: "ml-2",
                        children: (0, E.jsx)("button", {
                          children: (0, E.jsx)(Z.LHV, {
                            className: "dark:text-white",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, E.jsx)("div", {
              className: "flex justify-center",
              children: (0, E.jsx)(S.Z, {
                height: "auto",
                width: "auto",
                alt: t.name,
                src: y.T5 + "/static/" + t.url,
              }),
            }),
          ],
        });
      }
      var T = f.Z.Search;
      function P() {
        var e = (0, i.UO)().id,
          t = (0, s.useState)(1),
          n = (0, r.Z)(t, 2),
          o = n[0],
          f = n[1],
          g = (0, s.useState)(10),
          y = (0, r.Z)(g, 2),
          b = y[0],
          Z = y[1],
          C = (0, s.useState)(0),
          w = (0, r.Z)(C, 2),
          k = w[0],
          j = w[1],
          N = (0, s.useState)([]),
          S = (0, r.Z)(N, 2),
          P = S[0],
          z = S[1],
          R = (0, l.ZP)("/folders/".concat(e), u.Z).data,
          A = (0, l.ZP)(
            "/files?folderId="
              .concat(e, "&page=")
              .concat(o, "&pageSize=")
              .concat(b),
            u.Z
          ),
          O = A.data,
          F = A.error,
          I = (0, i.s0)(),
          _ = R && R.data;
        (0, s.useEffect)(
          function () {
            z(O && O.data), j(O && O.totalSize);
          },
          [O]
        );
        var V = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/folders", name: "Folders" },
            {
              isLink: !1,
              link: "",
              name: (null === _ || void 0 === _ ? void 0 : _.name) + "s",
            },
          ],
          L = (function () {
            var t = (0, a.Z)(
              c().mark(function t(n) {
                var a, r;
                return c().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            v.Z.get(
                              "/files?folderId="
                                .concat(e, "&page=")
                                .concat(o, "&pageSize=")
                                .concat(b, "&q=")
                                .concat(n)
                            )
                          );
                        case 3:
                          (a = t.sent),
                            (r = a.data),
                            z(r.data),
                            j(r.totalSize),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            h.Am.error(
                              t.t0.response.data.message
                                ? t.t0.response.data.message
                                : t.t0.message
                            );
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return (0, E.jsxs)(E.Fragment, {
          children: [
            (0, E.jsx)(d.Z, { details: V }),
            F
              ? (0, E.jsx)(x.Z, {
                  error: F.response.data.message
                    ? F.response.data.message
                    : F.message,
                })
              : (0, E.jsxs)("div", {
                  className: "my-5",
                  children: [
                    (0, E.jsxs)("div", {
                      className: "flex justify-between items-center",
                      children: [
                        (0, E.jsx)(m.Z, {
                          onClick: function () {
                            return I("/folders/".concat(e, "/upload"));
                          },
                          type: "ghost",
                          shape: "default",
                          className:
                            "mr-1 flex py-5 items-center shadow-md dark:text-white dark:hover:text-blue-400 dark:border-gray-600 dark:hover:border-blue-400",
                          children: (0, E.jsx)("span", {
                            children: "Upload a file",
                          }),
                        }),
                        (0, E.jsx)(T, {
                          allowClear: !0,
                          size: "large",
                          className: "w-full lg:w-96 lg:ml-auto search-input",
                          placeholder: "Search...",
                          onSearch: L,
                        }),
                      ],
                    }),
                    (0, E.jsx)("div", {
                      className:
                        "my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4",
                      children:
                        P &&
                        P.map(function (e) {
                          return (0,
                          E.jsx)(D, { file: e, files: P, setFiles: z, folder: _, page: o, pageSize: b }, e._id);
                        }),
                    }),
                    (0, E.jsx)(p.Z, {
                      showSizeChanger: !0,
                      showTotal: function (e, t) {
                        return ""
                          .concat(t[0], "-")
                          .concat(t[1], " of ")
                          .concat(e, " items");
                      },
                      total: k,
                      current: o,
                      pageSize: b,
                      className:
                        "dark:text-white my-5 flex justify-end items-end",
                      hideOnSinglePage: !0,
                      responsive: !0,
                      onChange: function (e, t) {
                        f(e), Z(t);
                      },
                    }),
                  ],
                }),
          ],
        });
      }
    },
    1783: function (e, t, n) {
      "use strict";
      var a = n(7462),
        r = n(9439),
        o = n(2791),
        c = n(8368),
        s = n(7309),
        i = n(6417);
      function l(e) {
        return !(!e || !e.then);
      }
      t.Z = function (e) {
        var t = o.useRef(!1),
          n = o.useRef(),
          u = (0, c.Z)(!1),
          d = (0, r.Z)(u, 2),
          f = d[0],
          m = d[1];
        o.useEffect(function () {
          var t;
          if (e.autoFocus) {
            var a = n.current;
            t = setTimeout(function () {
              return a.focus();
            });
          }
          return function () {
            t && clearTimeout(t);
          };
        }, []);
        var p = e.type,
          v = e.children,
          x = e.prefixCls,
          g = e.buttonProps;
        return o.createElement(
          s.Z,
          (0, a.Z)(
            {},
            (0, i.n)(p),
            {
              onClick: function (n) {
                var a = e.actionFn,
                  r = e.close;
                if (!t.current)
                  if (((t.current = !0), a)) {
                    var o;
                    if (e.emitEvent) {
                      if (((o = a(n)), e.quitOnNullishReturnValue && !l(o)))
                        return (t.current = !1), void r(n);
                    } else if (a.length) (o = a(r)), (t.current = !1);
                    else if (!(o = a())) return void r();
                    !(function (n) {
                      var a = e.close;
                      l(n) &&
                        (m(!0),
                        n.then(
                          function () {
                            m(!1, !0),
                              a.apply(void 0, arguments),
                              (t.current = !1);
                          },
                          function (e) {
                            console.error(e), m(!1, !0), (t.current = !1);
                          }
                        ));
                    })(o);
                  } else r();
              },
              loading: f,
              prefixCls: x,
            },
            g,
            { ref: n }
          ),
          v
        );
      };
    },
    7924: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var a = function (e) {
        return e ? ("function" === typeof e ? e() : e) : null;
      };
    },
    6038: function (e, t, n) {
      "use strict";
      var a = n(7462),
        r = n(9439),
        o = n(2791),
        c = n(1694),
        s = n.n(c),
        i = n(5179),
        l = n(187),
        u = n(1354),
        d = n(9220),
        f = n(7309),
        m = n(6417),
        p = n(3486),
        v = n(454),
        x = n(9077),
        g = n(7924),
        h = n(1113),
        y = n(9464),
        b = n(1783),
        Z = void 0,
        C = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        w = o.forwardRef(function (e, t) {
          var n = o.useContext(x.E_).getPrefixCls,
            c = (0, i.Z)(!1, {
              value: e.visible,
              defaultValue: e.defaultVisible,
            }),
            l = (0, r.Z)(c, 2),
            w = l[0],
            k = l[1],
            j = function (t, n) {
              var a;
              k(t, !0),
                null === (a = e.onVisibleChange) ||
                  void 0 === a ||
                  a.call(e, t, n);
            },
            N = function (e) {
              j(!1, e);
            },
            S = function (t) {
              var n;
              return null === (n = e.onConfirm) || void 0 === n
                ? void 0
                : n.call(Z, t);
            },
            E = function (t) {
              var n;
              j(!1, t),
                null === (n = e.onCancel) || void 0 === n || n.call(Z, t);
            },
            D = e.prefixCls,
            T = e.placement,
            P = e.children,
            z = e.overlayClassName,
            R = C(e, [
              "prefixCls",
              "placement",
              "children",
              "overlayClassName",
            ]),
            A = n("popover", D),
            O = n("popconfirm", D),
            F = s()(O, z),
            I = o.createElement(
              p.Z,
              { componentName: "Popconfirm", defaultLocale: v.Z.Popconfirm },
              function (t) {
                return (function (t, r) {
                  var c = e.okButtonProps,
                    s = e.cancelButtonProps,
                    i = e.title,
                    l = e.cancelText,
                    u = e.okText,
                    d = e.okType,
                    p = e.icon,
                    v = e.showCancel,
                    x = void 0 === v || v;
                  return o.createElement(
                    "div",
                    { className: "".concat(t, "-inner-content") },
                    o.createElement(
                      "div",
                      { className: "".concat(t, "-message") },
                      p,
                      o.createElement(
                        "div",
                        { className: "".concat(t, "-message-title") },
                        (0, g.Z)(i)
                      )
                    ),
                    o.createElement(
                      "div",
                      { className: "".concat(t, "-buttons") },
                      x &&
                        o.createElement(
                          f.Z,
                          (0, a.Z)({ onClick: E, size: "small" }, s),
                          l || r.cancelText
                        ),
                      o.createElement(
                        b.Z,
                        {
                          buttonProps: (0, a.Z)(
                            (0, a.Z)({ size: "small" }, (0, m.n)(d)),
                            c
                          ),
                          actionFn: S,
                          close: N,
                          prefixCls: n("btn"),
                          quitOnNullishReturnValue: !0,
                          emitEvent: !0,
                        },
                        u || r.okText
                      )
                    )
                  );
                })(A, t);
              }
            ),
            _ = n();
          return o.createElement(
            d.Z,
            (0, a.Z)({}, R, {
              prefixCls: A,
              placement: T,
              onVisibleChange: function (t) {
                e.disabled || j(t);
              },
              visible: w,
              overlay: I,
              overlayClassName: F,
              ref: t,
              transitionName: (0, y.mL)(_, "zoom-big", e.transitionName),
            }),
            (0, h.Tm)(P, {
              onKeyDown: function (e) {
                var t, n;
                o.isValidElement(P) &&
                  (null ===
                    (n =
                      null === P || void 0 === P
                        ? void 0
                        : (t = P.props).onKeyDown) ||
                    void 0 === n ||
                    n.call(t, e)),
                  (function (e) {
                    e.keyCode === u.Z.ESC && w && j(!1, e);
                  })(e);
              },
            })
          );
        });
      (w.defaultProps = {
        placement: "top",
        trigger: "click",
        okType: "primary",
        icon: o.createElement(l.Z, null),
        disabled: !1,
      }),
        (t.Z = w);
    },
    6998: function (e, t, n) {
      "use strict";
      var a = n(2458),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          o,
          c,
          s,
          i,
          l,
          u = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((c = a()),
            (s = document.createRange()),
            (i = document.getSelection()),
            ((l = document.createElement("span")).textContent = e),
            (l.style.all = "unset"),
            (l.style.position = "fixed"),
            (l.style.top = 0),
            (l.style.clip = "rect(0, 0, 0, 0)"),
            (l.style.whiteSpace = "pre"),
            (l.style.webkitUserSelect = "text"),
            (l.style.MozUserSelect = "text"),
            (l.style.msUserSelect = "text"),
            (l.style.userSelect = "text"),
            l.addEventListener("copy", function (a) {
              if ((a.stopPropagation(), t.format))
                if (
                  (a.preventDefault(), "undefined" === typeof a.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var o = r[t.format] || r.default;
                  window.clipboardData.setData(o, e);
                } else
                  a.clipboardData.clearData(),
                    a.clipboardData.setData(t.format, e);
              t.onCopy && (a.preventDefault(), t.onCopy(a.clipboardData));
            }),
            document.body.appendChild(l),
            s.selectNodeContents(l),
            i.addRange(s),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          u = !0;
        } catch (d) {
          n && console.error("unable to copy using execCommand: ", d),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (d) {
            n && console.error("unable to copy using clipboardData: ", d),
              n && console.error("falling back to prompt"),
              (o = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(o, e);
          }
        } finally {
          i &&
            ("function" == typeof i.removeRange
              ? i.removeRange(s)
              : i.removeAllRanges()),
            l && document.body.removeChild(l),
            c();
        }
        return u;
      };
    },
    2458: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], a = 0;
          a < e.rangeCount;
          a++
        )
          n.push(e.getRangeAt(a));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
]);
//# sourceMappingURL=589.abb9fe8c.chunk.js.map
