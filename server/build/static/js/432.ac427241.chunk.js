"use strict";
(self.webpackChunkadmin_panel = self.webpackChunkadmin_panel || []).push([
  [432],
  {
    7543: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return T;
          },
        });
      var a = t(3433),
        o = t(5861),
        r = t(9439),
        i = t(7757),
        c = t.n(i),
        s = t(2791),
        l = t(6871),
        d = t(2419),
        u = t(8717),
        f = t(2065),
        m = t(6755),
        E = t(9823),
        p = t(8678),
        h = t(7309),
        N = t(9220),
        g = t(1033),
        S = t(6570),
        v = t(577),
        C = t(783),
        M = t(184);
      function T() {
        var e = (0, l.UO)().id,
          n = (0, d.ZP)("/folders/".concat(e), f.Z).data,
          t = (0, s.useState)(!1),
          i = (0, r.Z)(t, 2),
          T = i[0],
          _ = i[1],
          U = (0, s.useRef)(),
          O = n && n.data,
          A = (0, s.useState)([]),
          I = (0, r.Z)(A, 2),
          y = I[0],
          x = I[1],
          L = [
            { isLink: !0, link: "/", name: "Home" },
            { isLink: !0, link: "/folders", name: "Folders" },
            {
              isLink: !0,
              link: "/folders/".concat(e, "/details"),
              name: (null === O || void 0 === O ? void 0 : O.name) + "s",
            },
            { isLink: !1, link: "", name: "Upload" },
          ],
          w = (function () {
            var n = (0, o.Z)(
              c().mark(function n(t) {
                var o, r, i;
                return c().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (o = new FormData()).append(
                            "files",
                            t.target.files[0]
                          ),
                          (n.next = 4),
                          g.Z.post("/files/upload?folderId=".concat(e), o, {
                            onUploadProgress: function (e) {
                              var n = e.loaded / e.total;
                              (n = parseInt(100 * n)), console.log(n);
                            },
                          })
                        );
                      case 4:
                        (r = n.sent),
                          (i = r.data),
                          x(function (e) {
                            return [].concat((0, a.Z)(e), [i.data[0]]);
                          });
                      case 7:
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
          P = (function () {
            var e = (0, o.Z)(
              c().mark(function e(n) {
                var t, o;
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((_(!1), n.name === y[0].name)) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (e.prev = 2),
                            (e.next = 5),
                            g.Z.put("/files/".concat(y[0]._id), n)
                          );
                        case 5:
                          (t = e.sent),
                            (o = t.data),
                            x(function (e) {
                              return [o.data].concat((0, a.Z)(e.slice(1)));
                            }),
                            v.Am.success("Image name is saved"),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(2)),
                            v.Am.error(e.t0.response.data.message);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 11]]
                );
              })
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          R = function (e) {
            2 === e.detail && _(!0);
          };
        return (0, M.jsxs)(M.Fragment, {
          children: [
            (0, M.jsx)(u.Z, { details: L }),
            (0, M.jsx)("div", {
              className: "my-5 flex justify-center items-center",
              children: (0, M.jsx)("div", {
                className: "text-white flex flex-col",
                children: y.length
                  ? (0, M.jsx)(M.Fragment, {
                      children: y.map(function (e) {
                        return (0, M.jsxs)(
                          "div",
                          {
                            className: "flex flex-col justify-center",
                            children: [
                              (0, M.jsx)(
                                m.Z,
                                {
                                  alt: e.name,
                                  className: "w-auto h-auto md:h-96",
                                  src: S.T5 + "/static/" + e.url,
                                },
                                e._id
                              ),
                              T
                                ? (0, M.jsxs)(E.Z, {
                                    initialValues: { name: e.name },
                                    onFinish: P,
                                    className: "mt-5",
                                    children: [
                                      (0, M.jsx)(E.Z.Item, {
                                        name: "name",
                                        className: "mb-0",
                                        rules: [
                                          {
                                            required: !0,
                                            message:
                                              "Please input the folder name",
                                          },
                                        ],
                                        children: (0, M.jsx)(p.Z, {
                                          placeholder: "Folder name",
                                          className: "w-full text-center",
                                          size: "large",
                                          autoFocus: !0,
                                          onBlur: function () {
                                            _(!1), U.current.click();
                                          },
                                        }),
                                      }),
                                      (0, M.jsx)(h.Z, {
                                        ref: U,
                                        htmlType: "submit",
                                        className: "hidden",
                                      }),
                                    ],
                                  })
                                : (0, M.jsx)(N.Z, {
                                    title: "Double click to name to edit",
                                    placement: "bottom",
                                    className: "mt-4",
                                    children: (0, M.jsx)("button", {
                                      onClick: R,
                                      className: "truncate",
                                      children: (0, M.jsx)("p", {
                                        className:
                                          "font-medium dark:text-white text-sm truncate w-full",
                                        children: (0, C.Z)(e.name),
                                      }),
                                    }),
                                  }),
                            ],
                          },
                          e._id
                        );
                      }),
                    })
                  : (0, M.jsx)("input", {
                      className:
                        "block w-full ring-2 rounded-full ring-violet-700 text-sm dark:text-white text-dark font-mono file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold dark:file:bg-violet-50 file:text-violet-700  hover:file:bg-violet-100",
                      type: "file",
                      onChange: w,
                    }),
              }),
            }),
          ],
        });
      }
    },
    783: function (e, n, t) {
      function a(e) {
        return (null === e || void 0 === e ? void 0 : e.split(" ").length) > 1
          ? e
              .split(" ")
              .map(function (e) {
                return a(e);
              })
              .join(" ")
          : (null === e || void 0 === e
              ? void 0
              : e.split("")[0].toUpperCase()) +
              (null === e || void 0 === e
                ? void 0
                : e
                    .split("")
                    .filter(function (n) {
                      return n !== e.split("")[0];
                    })
                    .join(""));
      }
      t.d(n, {
        Z: function () {
          return a;
        },
      });
    },
    732: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(1413),
        o = t(2791),
        r = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
                },
              },
            ],
          },
          name: "close",
          theme: "outlined",
        },
        i = t(4291),
        c = function (e, n) {
          return o.createElement(
            i.Z,
            (0, a.Z)((0, a.Z)({}, e), {}, { ref: n, icon: r })
          );
        };
      c.displayName = "CloseOutlined";
      var s = o.forwardRef(c);
    },
    4308: function (e, n, t) {
      var a = t(454);
      n.Z = a.Z;
    },
    2632: function (e, n, t) {
      t.d(n, {
        g1: function () {
          return a;
        },
        os: function () {
          return o;
        },
      });
      function a() {
        return {
          width: document.documentElement.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight,
        };
      }
      function o(e) {
        var n = e.getBoundingClientRect(),
          t = document.documentElement;
        return {
          left:
            n.left +
            (window.pageXOffset || t.scrollLeft) -
            (t.clientLeft || document.body.clientLeft || 0),
          top:
            n.top +
            (window.pageYOffset || t.scrollTop) -
            (t.clientTop || document.body.clientTop || 0),
        };
      }
    },
    1354: function (e, n) {
      var t = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
          var n = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (n >= t.F1 && n <= t.F12)
          )
            return !1;
          switch (n) {
            case t.ALT:
            case t.CAPS_LOCK:
            case t.CONTEXT_MENU:
            case t.CTRL:
            case t.DOWN:
            case t.END:
            case t.ESC:
            case t.HOME:
            case t.INSERT:
            case t.LEFT:
            case t.MAC_FF_META:
            case t.META:
            case t.NUMLOCK:
            case t.NUM_CENTER:
            case t.PAGE_DOWN:
            case t.PAGE_UP:
            case t.PAUSE:
            case t.PRINT_SCREEN:
            case t.RIGHT:
            case t.SHIFT:
            case t.UP:
            case t.WIN_KEY:
            case t.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (e >= t.ZERO && e <= t.NINE) return !0;
          if (e >= t.NUM_ZERO && e <= t.NUM_MULTIPLY) return !0;
          if (e >= t.A && e <= t.Z) return !0;
          if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
            return !0;
          switch (e) {
            case t.SPACE:
            case t.QUESTION_MARK:
            case t.NUM_PLUS:
            case t.NUM_MINUS:
            case t.NUM_PERIOD:
            case t.NUM_DIVISION:
            case t.SEMICOLON:
            case t.DASH:
            case t.EQUALS:
            case t.COMMA:
            case t.PERIOD:
            case t.SLASH:
            case t.APOSTROPHE:
            case t.SINGLE_QUOTE:
            case t.OPEN_SQUARE_BRACKET:
            case t.BACKSLASH:
            case t.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      n.Z = t;
    },
    9025: function (e, n, t) {
      var a;
      function o(e) {
        if ("undefined" === typeof document) return 0;
        if (e || void 0 === a) {
          var n = document.createElement("div");
          (n.style.width = "100%"), (n.style.height = "200px");
          var t = document.createElement("div"),
            o = t.style;
          (o.position = "absolute"),
            (o.top = "0"),
            (o.left = "0"),
            (o.pointerEvents = "none"),
            (o.visibility = "hidden"),
            (o.width = "200px"),
            (o.height = "150px"),
            (o.overflow = "hidden"),
            t.appendChild(n),
            document.body.appendChild(t);
          var r = n.offsetWidth;
          t.style.overflow = "scroll";
          var i = n.offsetWidth;
          r === i && (i = t.clientWidth),
            document.body.removeChild(t),
            (a = r - i);
        }
        return a;
      }
      function r(e) {
        var n = e.match(/^(.*)px$/),
          t = Number(null === n || void 0 === n ? void 0 : n[1]);
        return Number.isNaN(t) ? o() : t;
      }
      function i(e) {
        if ("undefined" === typeof document || !e || !(e instanceof Element))
          return { width: 0, height: 0 };
        var n = getComputedStyle(e, "::-webkit-scrollbar"),
          t = n.width,
          a = n.height;
        return { width: r(t), height: r(a) };
      }
      t.d(n, {
        Z: function () {
          return o;
        },
        o: function () {
          return i;
        },
      });
    },
    4170: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var a = t(1413),
        o = ""
          .concat(
            "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap",
            " "
          )
          .concat(
            "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError"
          )
          .split(/[\s\n]+/),
        r = "aria-",
        i = "data-";
      function c(e, n) {
        return 0 === e.indexOf(n);
      }
      function s(e) {
        var n,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        n =
          !1 === t
            ? { aria: !0, data: !0, attr: !0 }
            : !0 === t
            ? { aria: !0 }
            : (0, a.Z)({}, t);
        var s = {};
        return (
          Object.keys(e).forEach(function (t) {
            ((n.aria && ("role" === t || c(t, r))) ||
              (n.data && c(t, i)) ||
              (n.attr && o.includes(t))) &&
              (s[t] = e[t]);
          }),
          s
        );
      }
    },
  },
]);
//# sourceMappingURL=432.ac427241.chunk.js.map
