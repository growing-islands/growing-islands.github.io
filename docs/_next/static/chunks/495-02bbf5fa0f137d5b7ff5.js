;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [495],
  {
    52911: function (e, t, a) {
      'use strict'
      a.d(t, {
        h: function () {
          return f
        },
        b: function () {
          return b
        },
      })
      var n = a(92809),
        r = a(10219),
        l = a(94184),
        o = a.n(l),
        c = a(41664),
        i = a(63973),
        p = a(85893),
        s = ['className', 'style', 'children', 'disabled', 'icon'],
        d = ['className', 'style', 'children', 'disabled', 'href', 'icon']
      function _(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _(Object(a), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : _(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var f = function (e) {
          var t = e.className,
            a = e.style,
            n = e.children,
            l = e.disabled,
            c = e.icon,
            d = (0, r.Z)(e, s)
          return (0, p.jsxs)(
            'button',
            u(
              u(
                { className: o()(i.component, t) },
                u({ disabled: l, style: a }, d)
              ),
              {},
              {
                children: [
                  (0, p.jsx)('span', {
                    className: i.component__text,
                    children: n,
                  }),
                  c && (0, p.jsx)('span', { className: i.component__icon }),
                ],
              }
            )
          )
        },
        b = function (e) {
          var t = e.className,
            a = e.style,
            n = e.children,
            l = e.disabled,
            s = e.href,
            _ = e.icon,
            f = (0, r.Z)(e, d)
          return (0, p.jsx)(c.default, {
            href: l ? '' : s,
            children: (0, p.jsxs)(
              'a',
              u(
                u(
                  { className: o()(i.component, t), 'data-disabled': l },
                  u(u({}, f), {}, { style: a })
                ),
                {},
                {
                  children: [
                    (0, p.jsx)('span', {
                      className: i.component__text,
                      children: n,
                    }),
                    _ && (0, p.jsx)('span', { className: i.component__icon }),
                  ],
                }
              )
            ),
          })
        }
    },
    53960: function (e, t, a) {
      'use strict'
      a.d(t, {
        $: function () {
          return c
        },
      })
      var n = a(94184),
        r = a.n(n),
        l = a(60690),
        o = a(85893),
        c = function (e) {
          var t = e.className,
            a = e.style
          return (0, o.jsx)('footer', {
            className: r()(l.component, t),
            style: a,
            children: (0, o.jsx)('div', {
              className: l.component__inner,
              children: (0, o.jsx)('small', {
                className: l.component__copyright,
                translate: 'no',
                children: '\xa9Growing Islands Inc.',
              }),
            }),
          })
        }
    },
    26: function (e, t, a) {
      'use strict'
      a.d(t, {
        h: function () {
          return W
        },
      })
      var n = a(92809),
        r = a(80318),
        l = a(67294),
        o = a(41664),
        c = a(11163),
        i = a(94184),
        p = a.n(i),
        s = a(89211),
        d = a(43590),
        _ = a(66261),
        u = a(51150),
        f = a(26290),
        b = a(26372),
        g = a(36100),
        h = a(10219),
        m = a(356),
        v = a(85893),
        y = ['primaryColor']
      function j(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(a), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : j(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var O = function (e) {
          var t = e.primaryColor,
            a = void 0 === t ? m['palette-black'] : t,
            n = (0, h.Z)(e, y)
          return (0, v.jsx)(
            'svg',
            w(
              w(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 512 384',
                  'aria-label': '\u30e1\u30fc\u30eb',
                },
                w({}, n)
              ),
              {},
              {
                children: (0, v.jsx)('path', {
                  d: 'M464,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V112A48,48,0,0,0,464,64Zm0,48v40.8c-22.42,18.26-58.17,46.66-134.59,106.49C312.57,272.54,279.21,304.37,256,304c-23.21.37-56.58-31.46-73.41-44.71C106.18,199.46,70.43,171.07,48,152.8V112ZM48,400V214.4c22.91,18.25,55.41,43.86,104.94,82.64,21.85,17.21,60.13,55.19,103.06,55,42.72.23,80.51-37.2,103.05-54.95,49.53-38.78,82-64.4,105-82.65V400Z',
                  transform: 'translate(0 -64)',
                  fill: a,
                }),
              }
            )
          )
        },
        x = a(70958),
        k = a(15053),
        N = function (e) {
          var t = e.active,
            a = void 0 !== t && t,
            n = e.onClick,
            o = e.className,
            c = e.style,
            i = (0, s.Z)(a),
            d = (0, r.Z)(i, 2),
            _ = d[0],
            u = d[1]
          return (
            (0, l.useEffect)(
              function () {
                _ !== a && u(a)
              },
              [a]
            ),
            (0, v.jsx)('div', {
              className: p()(k.component, _ && k['is-active'], o),
              onClick: function () {
                n ? n() : u()
              },
              style: c,
              children: (0, v.jsx)('span', {}),
            })
          )
        },
        P = a(77529),
        E =
          '/_next/static/image/src/images/top/logo.aec39aa93288ec25c2f536db46b1a7c9.png',
        C = a(56965),
        H = a(41901)
      function S(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? S(Object(a), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : S(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var I = [
          { id: 'home', label: 'HOME', href: '/', anchor: !1, pc: !1 },
          {
            id: 'service',
            label: 'SERVICE',
            subTitle: '\u30b5\u30fc\u30d3\u30b9',
            href: '/',
            anchor: !0,
            pc: !0,
            children: [
              {
                id: 'contract-development',
                label: '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a',
                pc: !0,
                anchor: !1,
                href: H.V.contract_development.$url(),
              },
              {
                id: 'ses',
                label:
                  '\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u306eSES',
                pc: !0,
                anchor: !1,
                href: H.V.ses.$url(),
              },
            ],
          },
          {
            id: 'mission',
            label: 'MISSION',
            subTitle: '\u30df\u30c3\u30b7\u30e7\u30f3',
            href: '/',
            anchor: !0,
            pc: !0,
          },
          {
            id: 'company',
            label: 'COMPANY',
            subTitle: '\u4f1a\u793e\u6982\u8981',
            href: '/',
            anchor: !0,
            pc: !0,
          },
        ],
        W = function (e) {
          var t = e.className,
            a = e.style,
            n = e.overBorder,
            i = void 0 !== n && n,
            h = e.onShow,
            m = (0, b.I0)(),
            y = (0, c.useRouter)(),
            j = (0, f.F)(),
            w = (0, s.Z)(!1),
            k = (0, r.Z)(w, 2),
            H = k[0],
            S = k[1],
            W = (0, u.C)().scrollDirection,
            U = (0, l.useState)('DOWN'),
            T = U[0],
            Z = U[1],
            B = '/' === y.pathname ? 'h1' : 'div',
            R = (0, d.Z)(),
            F = (0, r.Z)(R, 2),
            M = F[0],
            z = F[1].height
          ;(0, l.useEffect)(
            function () {
              m((0, g.cs)(z))
            },
            [j, z]
          ),
            (0, l.useEffect)(
              function () {
                'pc' === j && S(!1)
              },
              [j]
            ),
            (0, l.useEffect)(
              function () {
                h && h(!(i && !H && 'DOWN' === T))
              },
              [i, j, H, T]
            ),
            (0, l.useEffect)(
              function () {
                'UP' === W && 'UP' !== T && Z('UP'),
                  'DOWN' === W && 'DOWN' !== T && Z('DOWN')
              },
              [W]
            )
          var V = { smooth: !0, offset: -z, duration: 500 },
            A = function (e) {
              var t = e.className,
                a = e.style,
                n = e.anchor,
                r = e.href,
                l = e.id,
                c = e.label,
                i = e.subTitle,
                s = e.pc,
                d = e.children
              return y.pathname === r && n
                ? (0, v.jsxs)(
                    _.rU,
                    D(
                      D(
                        {
                          to: l,
                          className: p()(C.link, t, !s && 'tablet:hidden'),
                          onClick: function () {
                            return 'sp' === j && S()
                          },
                        },
                        D({ style: a }, V)
                      ),
                      {},
                      {
                        children: [
                          (0, v.jsx)('span', {
                            className: C.link__title,
                            children: c,
                          }),
                          i &&
                            (0, v.jsx)('span', {
                              className: p()(
                                C['link__sub-title'],
                                'tablet:hidden'
                              ),
                              children: i,
                            }),
                          d &&
                            (0, v.jsx)(x.R, {
                              className: p()(
                                C.link__icon,
                                'hidden tablet:inline-block'
                              ),
                              primaryColor: C['palette-white'],
                            }),
                        ],
                      }
                    )
                  )
                : (0, v.jsx)(o.default, {
                    href: n ? ''.concat(r, '#').concat(l) : r,
                    children: (0, v.jsxs)('a', {
                      className: p()(C.link, t, !s && 'tablet:hidden'),
                      onClick: function () {
                        return 'sp' === j && S()
                      },
                      style: a,
                      children: [
                        (0, v.jsx)('span', {
                          className: C.link__title,
                          children: c,
                        }),
                        i &&
                          (0, v.jsx)('span', {
                            className: p()(
                              C['link__sub-title'],
                              'tablet:hidden'
                            ),
                            children: i,
                          }),
                        d &&
                          (0, v.jsx)(x.R, {
                            className: p()(
                              C.link__icon,
                              'hidden tablet:inline-block'
                            ),
                            primaryColor: C['palette-white'],
                          }),
                      ],
                    }),
                  })
            }
          return (0, l.useMemo)(
            function () {
              var e = i && !H && 'DOWN' === T
              return (0, v.jsx)('header', {
                className: p()(
                  C.component,
                  t,
                  i && C['is-change'],
                  e && C['is-hide']
                ),
                ref: M,
                style: a,
                children: (0, v.jsxs)('div', {
                  className: C.component__inner,
                  children: [
                    (0, v.jsx)(B, {
                      className: C.component__logo,
                      children: (0, v.jsx)(o.default, {
                        href: '/',
                        children: (0, v.jsx)('a', {
                          children: (0, v.jsx)(P.E, {
                            src: E,
                            alt: '\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba',
                            width: '60%',
                          }),
                        }),
                      }),
                    }),
                    (0, v.jsxs)('div', {
                      className: C.component__content,
                      children: [
                        (0, v.jsx)('nav', {
                          className: p()(
                            C.component__navigation,
                            C.navigation,
                            H && C['is-active']
                          ),
                          onClick: function () {
                            'sp' === j && S()
                          },
                          style: H ? { paddingTop: z } : {},
                          children: (0, v.jsxs)('ul', {
                            className: C.navigation__list,
                            children: [
                              I.map(function (e) {
                                var t = e.id,
                                  a = e.children
                                return (0, v.jsxs)(
                                  'li',
                                  {
                                    className: C.navigation__item,
                                    children: [
                                      (0, v.jsx)(
                                        A,
                                        D(
                                          { className: C.navigation__link },
                                          D({}, e)
                                        )
                                      ),
                                      a &&
                                        (0, v.jsx)('ul', {
                                          className: C.navigation__children,
                                          children: a.map(function (e) {
                                            var t = e.id
                                            return (0,
                                            v.jsx)('li', { children: (0, v.jsx)(A, D({}, D({}, e))) }, t)
                                          }),
                                        }),
                                    ],
                                  },
                                  t
                                )
                              }),
                              (0, v.jsx)('li', {
                                className: C.navigation__contact,
                                children:
                                  '/' === y.pathname
                                    ? (0, v.jsxs)(
                                        _.rU,
                                        D(
                                          D(
                                            {
                                              to: 'contact',
                                              onClick: function () {
                                                return 'sp' === j && S()
                                              },
                                            },
                                            D({}, V)
                                          ),
                                          {},
                                          {
                                            children: [
                                              (0, v.jsx)(O, {
                                                primaryColor:
                                                  C['palette-deepblue'],
                                              }),
                                              (0, v.jsx)('span', {
                                                children: 'CONTACT',
                                              }),
                                            ],
                                          }
                                        )
                                      )
                                    : (0, v.jsx)(o.default, {
                                        href: '/#contact',
                                        children: (0, v.jsxs)('a', {
                                          children: [
                                            (0, v.jsx)(O, {
                                              primaryColor:
                                                C['palette-deepblue'],
                                            }),
                                            (0, v.jsx)('span', {
                                              children: 'CONTACT',
                                            }),
                                          ],
                                        }),
                                      }),
                              }),
                            ],
                          }),
                        }),
                        (0, v.jsx)(N, {
                          className: p()(
                            C.component__hamburger,
                            'tablet:hidden'
                          ),
                          active: H,
                          onClick: S,
                        }),
                      ],
                    }),
                  ],
                }),
              })
            },
            [i, j, H, T]
          )
        }
    },
    70958: function (e, t, a) {
      'use strict'
      a.d(t, {
        R: function () {
          return s
        },
      })
      var n = a(92809),
        r = a(10219),
        l = a(62629),
        o = a(85893),
        c = ['primaryColor']
      function i(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var s = function (e) {
        var t = e.primaryColor,
          a = void 0 === t ? l['palette-black'] : t,
          n = (0, r.Z)(e, c)
        return (0, o.jsx)(
          'svg',
          p(
            p(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 21 31',
                'aria-label': '\u89d2',
              },
              p({}, n)
            ),
            {},
            {
              children: (0, o.jsx)('path', {
                d: 'M.405.98h4.427l15.342 14.815L4.832 30.611H.527l15.347-14.816L.405.98Z',
                fill: a,
              }),
            }
          )
        )
      }
    },
    77529: function (e, t, a) {
      'use strict'
      a.d(t, {
        E: function () {
          return c
        },
      })
      var n = a(92809),
        r = a(85893)
      function l(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(a), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var c = function (e) {
        return (0, r.jsx)('img', o(o({}, e), {}, { src: e.src }))
      }
    },
    39165: function (e, t, a) {
      'use strict'
      a.d(t, {
        H: function () {
          return c
        },
      })
      var n = a(9008),
        r = a(34155),
        l = {
          description:
            '\u682a\u5f0f\u4f1a\u793e\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u306f\u5343\u8449\u770c\u6d66\u5b89\u5e02\u306eIT/Web\u958b\u767a\u30fbSES\u4e8b\u696d\u3067\u304a\u5ba2\u69d8\u306eIT\u6295\u8cc7\u3092\u6700\u5927\u9650\u306b\u751f\u304b\u3057\u4fa1\u5024\u3092\u5171\u306b\u5275\u308a\u7d9a\u3051\u308b\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u4f01\u696d\u3067\u3059\u3002\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u30fb\u4fdd\u5b88\u904b\u7528\u3001IT\u6d3b\u7528\u30fb\u30b5\u30dd\u30fc\u30c8\u3001SES\u3067\u306e\u4f53\u5236\u69cb\u7bc9\u304b\u3089\u3001Web\u30b5\u30a4\u30c8\u5236\u4f5c\u30fb\u4f01\u753b\u904b\u7528\u307e\u3067\u3001IT/Web\u306b\u95a2\u308f\u308b\u30c8\u30fc\u30bf\u30eb\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u307e\u3059\u3002',
          ogType: 'website',
          ogUrl: r.env.NEXT_PUBLIC_SITE_URL || '',
          ogImage: ''.concat(r.env.NEXT_PUBLIC_SITE_URL || '', '/OGP.png'),
          ogSiteName: 'Default ogSiteName',
        },
        o = a(85893),
        c = function (e) {
          var t = e.title,
            a = e.description,
            r = e.url,
            c = e.image,
            i = e.meta,
            p = e.children,
            s =
              t +
              '\uff5c\u682a\u5f0f\u4f1a\u793e\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba'
          return (0, o.jsxs)(n.default, {
            children: [
              (0, o.jsx)('title', { children: s }),
              (0, o.jsx)('meta', {
                name: 'viewport',
                content: 'initial-scale=1.0, width=device-width',
              }),
              (0, o.jsx)('link', {
                rel: 'shortcut icon',
                href: '/favicon/favicon.ico',
              }),
              (0, o.jsx)('link', {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon/favicon-32x32.png',
              }),
              (0, o.jsx)('link', {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon/favicon-16x16.png',
              }),
              (0, o.jsx)('link', {
                rel: 'apple-touch-icon',
                type: 'image/png',
                href: '/favicon/apple-touch-icon.png',
              }),
              (0, o.jsx)('link', {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon/android-chrome-192x192.png',
                sizes: '192x192',
              }),
              (0, o.jsx)('link', {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon/android-chrome-512x512.png',
                sizes: '512x512',
              }),
              (0, o.jsx)('meta', {
                name: 'msapplication-TileImage',
                content: '/favicon/mstile-150\xd7150.png',
              }),
              (0, o.jsx)('meta', { name: 'theme-color', content: '#1e2888' }),
              (0, o.jsx)('meta', {
                name: 'description',
                content: a || l.description,
              }),
              (0, o.jsx)('meta', { property: 'og:title', content: s }),
              (0, o.jsx)('meta', {
                property: 'og:description',
                content: a || l.description,
              }),
              (0, o.jsx)('meta', {
                property: 'og:type',
                content:
                  (null === i || void 0 === i ? void 0 : i.ogType) || l.ogType,
              }),
              (0, o.jsx)('meta', { property: 'og:url', content: r || l.ogUrl }),
              (0, o.jsx)('meta', {
                property: 'og:image',
                content: c || l.ogImage,
              }),
              (0, o.jsx)('meta', {
                property: 'og:site_name',
                content:
                  (null === i || void 0 === i ? void 0 : i.ogSiteName) || s,
              }),
              (0, o.jsx)('meta', {
                name: 'twitter:card',
                content:
                  (null === i || void 0 === i ? void 0 : i.twitterCard) ||
                  l.twitterCard,
              }),
              (0, o.jsx)('meta', {
                name: 'twitter:site',
                content:
                  (null === i || void 0 === i ? void 0 : i.twitterSite) ||
                  l.twitterSite,
              }),
              p,
            ],
          })
        }
    },
    26290: function (e, t, a) {
      'use strict'
      a.d(t, {
        F: function () {
          return l
        },
      })
      var n = a(67294),
        r = a(94700)
      function l(e) {
        var t = (0, r.Z)(e).width,
          a = (0, n.useState)(t),
          l = a[0],
          o = a[1]
        return (
          (0, n.useEffect)(function () {
            function e() {
              o(window.innerWidth)
            }
            return (
              window.addEventListener('resize', e),
              e(),
              function () {
                return window.removeEventListener('resize', e)
              }
            )
          }),
          l <= 768 ? 'sp' : 'pc'
        )
      }
    },
    41901: function (e, t, a) {
      'use strict'
      a.d(t, {
        V: function () {
          return n
        },
      })
      var n = {
        contract_development: {
          $url: function (e) {
            return {
              pathname: '/contract-development',
              hash: null === e || void 0 === e ? void 0 : e.hash,
            }
          },
        },
        ses: {
          $url: function (e) {
            return {
              pathname: '/ses',
              hash: null === e || void 0 === e ? void 0 : e.hash,
            }
          },
        },
        $url: function (e) {
          return {
            pathname: '/',
            hash: null === e || void 0 === e ? void 0 : e.hash,
          }
        },
      }
    },
    63973: function (e) {
      e.exports = {
        'palette-white': '#fff',
        'palette-whiteshadow': 'rgba(255,255,255,.2)',
        'palette-black': '#000',
        'palette-mintblue': '#00afc4',
        'palette-gray': '#6a6c77',
        'palette-smokegray': '#ccc',
        'palette-lightgray': '#e5e5e5',
        'palette-deepgray': '#999',
        'palette-lightblack': '#333',
        'palette-deepblue': '#1e2888',
        'palette-emeraldgreen': '#06717e',
        'palette-pastelgreen': '#8eccc3',
        'palette-vividgreen': '#05ceb9',
        'palette-lemon': '#eceda2',
        'palette-yellow': '#ead966',
        'palette-smokegreen': '#baecca',
        'palette-borderblue': '#1f4bbc',
        'palette-dirtyblue': '#5a7993',
        'palette-bordergreen': '#076e7f',
        'palette-blueblack': '#000722',
        'palette-lightgreen': '#c4e4df',
        'palette-red': '#c00',
        'palette-list1': '#578fa8',
        'palette-list2': '#81c0c5',
        'palette-list3': '#e4d9ab',
        'palette-list4': '#eea65e',
        'palette-step1': '#9ed442',
        'palette-step2': '#43d1a1',
        'palette-step3': '#40d3e2',
        'palette-step4': '#41a7e1',
        'palette-step5': '#4282cc',
        component: 'RoundButton_component__2oNt8',
        component__text: 'RoundButton_component__text__1uK-C',
        component__icon: 'RoundButton_component__icon__zUYq2',
        growUp: 'RoundButton_growUp__1-WOJ',
        showWord: 'RoundButton_showWord__3m-9-',
        fadeUp: 'RoundButton_fadeUp__32jGt',
        fadeIn: 'RoundButton_fadeIn__1xaEz',
      }
    },
    60690: function (e) {
      e.exports = {
        'palette-white': '#fff',
        'palette-whiteshadow': 'rgba(255,255,255,.2)',
        'palette-black': '#000',
        'palette-mintblue': '#00afc4',
        'palette-gray': '#6a6c77',
        'palette-smokegray': '#ccc',
        'palette-lightgray': '#e5e5e5',
        'palette-deepgray': '#999',
        'palette-lightblack': '#333',
        'palette-deepblue': '#1e2888',
        'palette-emeraldgreen': '#06717e',
        'palette-pastelgreen': '#8eccc3',
        'palette-vividgreen': '#05ceb9',
        'palette-lemon': '#eceda2',
        'palette-yellow': '#ead966',
        'palette-smokegreen': '#baecca',
        'palette-borderblue': '#1f4bbc',
        'palette-dirtyblue': '#5a7993',
        'palette-bordergreen': '#076e7f',
        'palette-blueblack': '#000722',
        'palette-lightgreen': '#c4e4df',
        'palette-red': '#c00',
        'palette-list1': '#578fa8',
        'palette-list2': '#81c0c5',
        'palette-list3': '#e4d9ab',
        'palette-list4': '#eea65e',
        'palette-step1': '#9ed442',
        'palette-step2': '#43d1a1',
        'palette-step3': '#40d3e2',
        'palette-step4': '#41a7e1',
        'palette-step5': '#4282cc',
        component: 'Footer_component__WM1DC',
        component__inner: 'Footer_component__inner__2IbdX',
        component__copyright: 'Footer_component__copyright__1CGVE',
        component__navigation: 'Footer_component__navigation__2EpTJ',
        component__socials: 'Footer_component__socials__25W9O',
        social: 'Footer_social__3pHvW',
        social__item: 'Footer_social__item__cy_mh',
        social__link: 'Footer_social__link__-H5vn',
        social__icon: 'Footer_social__icon__3zsHZ',
        'is-twitter': 'Footer_is-twitter__1RJTQ',
        'is-facebook': 'Footer_is-facebook__1gskm',
        showWord: 'Footer_showWord__1n5BT',
        fadeUp: 'Footer_fadeUp__JSNH-',
        fadeIn: 'Footer_fadeIn__MlaND',
      }
    },
    15053: function (e) {
      e.exports = {
        'palette-white': '#fff',
        'palette-whiteshadow': 'rgba(255,255,255,.2)',
        'palette-black': '#000',
        'palette-mintblue': '#00afc4',
        'palette-gray': '#6a6c77',
        'palette-smokegray': '#ccc',
        'palette-lightgray': '#e5e5e5',
        'palette-deepgray': '#999',
        'palette-lightblack': '#333',
        'palette-deepblue': '#1e2888',
        'palette-emeraldgreen': '#06717e',
        'palette-pastelgreen': '#8eccc3',
        'palette-vividgreen': '#05ceb9',
        'palette-lemon': '#eceda2',
        'palette-yellow': '#ead966',
        'palette-smokegreen': '#baecca',
        'palette-borderblue': '#1f4bbc',
        'palette-dirtyblue': '#5a7993',
        'palette-bordergreen': '#076e7f',
        'palette-blueblack': '#000722',
        'palette-lightgreen': '#c4e4df',
        'palette-red': '#c00',
        'palette-list1': '#578fa8',
        'palette-list2': '#81c0c5',
        'palette-list3': '#e4d9ab',
        'palette-list4': '#eea65e',
        'palette-step1': '#9ed442',
        'palette-step2': '#43d1a1',
        'palette-step3': '#40d3e2',
        'palette-step4': '#41a7e1',
        'palette-step5': '#4282cc',
        component: 'HamburgerButton_component__1rN0B',
        'is-active': 'HamburgerButton_is-active__2bX2C',
        showWord: 'HamburgerButton_showWord__1oRzS',
        fadeUp: 'HamburgerButton_fadeUp__-kCV8',
        fadeIn: 'HamburgerButton_fadeIn__4Pz__',
      }
    },
    56965: function (e) {
      e.exports = {
        'palette-white': '#fff',
        'palette-whiteshadow': 'rgba(255,255,255,.2)',
        'palette-black': '#000',
        'palette-mintblue': '#00afc4',
        'palette-gray': '#6a6c77',
        'palette-smokegray': '#ccc',
        'palette-lightgray': '#e5e5e5',
        'palette-deepgray': '#999',
        'palette-lightblack': '#333',
        'palette-deepblue': '#1e2888',
        'palette-emeraldgreen': '#06717e',
        'palette-pastelgreen': '#8eccc3',
        'palette-vividgreen': '#05ceb9',
        'palette-lemon': '#eceda2',
        'palette-yellow': '#ead966',
        'palette-smokegreen': '#baecca',
        'palette-borderblue': '#1f4bbc',
        'palette-dirtyblue': '#5a7993',
        'palette-bordergreen': '#076e7f',
        'palette-blueblack': '#000722',
        'palette-lightgreen': '#c4e4df',
        'palette-red': '#c00',
        'palette-list1': '#578fa8',
        'palette-list2': '#81c0c5',
        'palette-list3': '#e4d9ab',
        'palette-list4': '#eea65e',
        'palette-step1': '#9ed442',
        'palette-step2': '#43d1a1',
        'palette-step3': '#40d3e2',
        'palette-step4': '#41a7e1',
        'palette-step5': '#4282cc',
        component: 'Header_component__FyEta',
        'is-hide': 'Header_is-hide__1BSCI',
        component__navigation: 'Header_component__navigation__2Hni8',
        'is-change': 'Header_is-change__2svef',
        component__inner: 'Header_component__inner__3EgcM',
        component__logo: 'Header_component__logo__1mTYK',
        navigation: 'Header_navigation__xHDz3',
        'is-active': 'Header_is-active__1-jSI',
        navigation__list: 'Header_navigation__list__1jRwy',
        navigation__item: 'Header_navigation__item__30Oht',
        navigation__children: 'Header_navigation__children__1kANb',
        link: 'Header_link__1fsUO',
        link__title: 'Header_link__title__2sCkW',
        navigation__contact: 'Header_navigation__contact__1hvrN',
        'link__sub-title': 'Header_link__sub-title__DivjO',
        link__icon: 'Header_link__icon__1yhu_',
        showWord: 'Header_showWord__1f3Rc',
        fadeUp: 'Header_fadeUp__3EpOF',
        fadeIn: 'Header_fadeIn__-TsPw',
      }
    },
    62629: function (e) {
      e.exports = {
        'palette-white': '#fff',
        'palette-whiteshadow': 'rgba(255,255,255,.2)',
        'palette-black': '#000',
        'palette-mintblue': '#00afc4',
        'palette-gray': '#6a6c77',
        'palette-smokegray': '#ccc',
        'palette-lightgray': '#e5e5e5',
        'palette-deepgray': '#999',
        'palette-lightblack': '#333',
        'palette-deepblue': '#1e2888',
        'palette-emeraldgreen': '#06717e',
        'palette-pastelgreen': '#8eccc3',
        'palette-vividgreen': '#05ceb9',
        'palette-lemon': '#eceda2',
        'palette-yellow': '#ead966',
        'palette-smokegreen': '#baecca',
        'palette-borderblue': '#1f4bbc',
        'palette-dirtyblue': '#5a7993',
        'palette-bordergreen': '#076e7f',
        'palette-blueblack': '#000722',
        'palette-lightgreen': '#c4e4df',
        'palette-red': '#c00',
        'palette-list1': '#578fa8',
        'palette-list2': '#81c0c5',
        'palette-list3': '#e4d9ab',
        'palette-list4': '#eea65e',
        'palette-step1': '#9ed442',
        'palette-step2': '#43d1a1',
        'palette-step3': '#40d3e2',
        'palette-step4': '#41a7e1',
        'palette-step5': '#4282cc',
        showWord: 'Angle_showWord__OZE2f',
        fadeUp: 'Angle_fadeUp__3N7vW',
        fadeIn: 'Angle_fadeIn__R-33B',
      }
    },
    356: function (e) {
      e.exports = {
        'palette-white': '#fff',
        'palette-whiteshadow': 'rgba(255,255,255,.2)',
        'palette-black': '#000',
        'palette-mintblue': '#00afc4',
        'palette-gray': '#6a6c77',
        'palette-smokegray': '#ccc',
        'palette-lightgray': '#e5e5e5',
        'palette-deepgray': '#999',
        'palette-lightblack': '#333',
        'palette-deepblue': '#1e2888',
        'palette-emeraldgreen': '#06717e',
        'palette-pastelgreen': '#8eccc3',
        'palette-vividgreen': '#05ceb9',
        'palette-lemon': '#eceda2',
        'palette-yellow': '#ead966',
        'palette-smokegreen': '#baecca',
        'palette-borderblue': '#1f4bbc',
        'palette-dirtyblue': '#5a7993',
        'palette-bordergreen': '#076e7f',
        'palette-blueblack': '#000722',
        'palette-lightgreen': '#c4e4df',
        'palette-red': '#c00',
        'palette-list1': '#578fa8',
        'palette-list2': '#81c0c5',
        'palette-list3': '#e4d9ab',
        'palette-list4': '#eea65e',
        'palette-step1': '#9ed442',
        'palette-step2': '#43d1a1',
        'palette-step3': '#40d3e2',
        'palette-step4': '#41a7e1',
        'palette-step5': '#4282cc',
        showWord: 'Mail_showWord__3g6Zm',
        fadeUp: 'Mail_fadeUp__hBbPR',
        fadeIn: 'Mail_fadeIn__1-NQC',
      }
    },
  },
])
