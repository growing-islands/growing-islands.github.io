;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    34629: function (e, t, a) {
      'use strict'
      a.d(t, {
        q: function () {
          return d
        },
      })
      var l = a(94184),
        n = a.n(l),
        r = a(26868),
        s = a.n(r),
        i = a(26290),
        c = a(58174),
        o = {
          pc: {
            particles: {
              number: { value: 50, density: { enable: !0, value_area: 1e3 } },
              color: { value: '#ffffff' },
              shape: { type: 'polygon', polygon: { nb_sides: 6 } },
              opacity: {
                value: 0.5,
                random: !0,
                anim: { enable: !0, speed: 0.5 },
              },
              size: { value: 8, random: !0 },
              line_linked: {
                enable: !0,
                distance: 150,
                color: '#ffffff',
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: !0,
                speed: 3,
                direction: 'none',
                out_mode: 'bounce',
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: { resize: !0 },
              modes: {
                grab: { distance: 10, line_linked: { opacity: 0.4 } },
                bubble: { distance: 10, size: 40, duration: 2, opacity: 8 },
                repulse: { distance: 20 },
              },
            },
            retina_detect: !0,
          },
          sp: {
            particles: {
              number: { value: 50, density: { enable: !0, value_area: 500 } },
              color: { value: '#ffffff' },
              shape: { type: 'polygon', polygon: { nb_sides: 6 } },
              opacity: {
                value: 0.5,
                random: !0,
                anim: { enable: !0, speed: 0.5 },
              },
              size: { value: 8, random: !0 },
              line_linked: {
                enable: !0,
                distance: 150,
                color: '#ffffff',
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: !0,
                speed: 3,
                direction: 'none',
                out_mode: 'bounce',
              },
            },
            interactivity: {
              detect_on: 'canvas',
              modes: {
                grab: { distance: 10, line_linked: { opacity: 0.4 } },
                bubble: { distance: 10, size: 40, duration: 2, opacity: 8 },
                repulse: { distance: 20 },
              },
            },
            retina_detect: !0,
          },
        },
        p = a(85893),
        d = function (e) {
          var t = e.className,
            a = e.style,
            l = (0, i.F)()
          return (0, p.jsx)('div', {
            className: n()(c.component, t),
            style: a,
            children: (0, p.jsx)('div', {
              className: c.component__particles,
              children:
                'pc' === l
                  ? (0, p.jsx)(s(), {
                      className: c.component__particle,
                      canvasClassName: c.component__canvas,
                      width: '100%',
                      height: '100%',
                      options: o.pc,
                    })
                  : (0, p.jsx)(s(), {
                      className: c.component__particle,
                      canvasClassName: c.component__canvas,
                      width: '100%',
                      height: '100%',
                      options: o.sp,
                    }),
            }),
          })
        }
    },
    84150: function (e, t, a) {
      'use strict'
      a.d(t, {
        I: function () {
          return f
        },
      })
      var l = a(92809),
        n = a(67294),
        r = a(94700),
        s = a(84956),
        i = a(13340),
        c = a(67597),
        o = a(94184),
        p = a.n(o),
        d = a(66261),
        _ = a(22608),
        m = a(85893),
        u = function (e) {
          var t = e.className,
            a = e.style
          return (0, m.jsx)('button', {
            className: p()(_.component, t),
            style: a,
            onClick: function () {
              d.NY.scrollToTop({ smooth: !0, duration: 1e3 })
            },
          })
        }
      function b(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          t &&
            (l = l.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, l)
        }
        return a
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(a), !0).forEach(function (t) {
                ;(0, l.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : b(Object(a)).forEach(function (t) {
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
          l = (0, r.Z)(0, 0).height,
          o = (0, s.Z)(),
          p = (0, n.useState)(!1),
          d = p[0],
          _ = p[1]
        return o() && l > 0
          ? (0, m.jsx)(i.$, {
              className: t,
              fixedTop: l - 100,
              absoluteBottom: 50,
              style: h(h({}, a), {}, { left: 'auto', right: '68px' }),
              onUntil: function () {
                return _(!1)
              },
              onFixed: function () {
                return _(!0)
              },
              children: (0, m.jsx)(c.V, {
                visible: d,
                children: (0, m.jsx)(u, {}),
              }),
            })
          : (0, m.jsx)(m.Fragment, {})
      }
    },
    67597: function (e, t, a) {
      'use strict'
      a.d(t, {
        V: function () {
          return i
        },
      })
      var l = a(94184),
        n = a.n(l),
        r = a(52671),
        s = a(85893),
        i = function (e) {
          var t = e.children,
            a = e.className,
            l = e.style,
            i = e.visible
          return (0, s.jsx)('div', {
            className: n()(
              r.component,
              i ? r['is-visible'] : r['is-hidden'],
              a && a
            ),
            style: l,
            children: t,
          })
        }
    },
    93722: function (e, t, a) {
      'use strict'
      a.d(t, {
        D: function () {
          return h
        },
      })
      var l = a(92809),
        n = a(10219),
        r = a(94184),
        s = a.n(r),
        i = a(80318),
        c = a(70131),
        o = a(81265),
        p = a(85893),
        d = function (e) {
          var t = e.className,
            a = e.style,
            l = e.texts,
            n = e.textColor,
            r = void 0 === n ? o['palette-white'] : n,
            d = e.borderColor,
            _ = void 0 === d ? o['palette-smokegray'] : d,
            m = (0, c.YD)({
              root: null,
              rootMargin: '0px 0px -30%',
              threshold: 0,
              triggerOnce: !0,
            }),
            u = (0, i.Z)(m, 2),
            b = u[0],
            h = u[1]
          return (0, p.jsx)('div', {
            ref: b,
            className: s()(o.component, t, h && o['is-active']),
            style: Object.assign(a || {}, { '--text-color': r }),
            children: (0, p.jsxs)('div', {
              className: o.component__inner,
              children: [
                (0, p.jsx)('span', {
                  className: o.component__english,
                  translate: 'no',
                  children: l.en,
                }),
                (0, p.jsx)('hr', {
                  className: o.component__border,
                  style: { '--border-color': _ },
                }),
                (0, p.jsx)('span', {
                  className: o.component__japanese,
                  children: l.ja,
                }),
              ],
            }),
          })
        },
        _ = a(4336),
        m = ['className', 'style']
      function u(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          t &&
            (l = l.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, l)
        }
        return a
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(a), !0).forEach(function (t) {
                ;(0, l.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : u(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var h = function (e) {
        var t = e.className,
          a = e.style,
          l = (0, n.Z)(e, m)
        return (0, p.jsx)('div', {
          className: s()(_.component, t),
          style: a,
          children: (0, p.jsx)(
            d,
            b({ className: _.component__content }, b({}, l))
          ),
        })
      }
    },
    32573: function (e, t, a) {
      'use strict'
      a.d(t, {
        Z: function () {
          return m
        },
      })
      var l = a(92809),
        n = a(10219),
        r = a(67294),
        s = a(44586),
        i = a(89819),
        c = a(85893),
        o = ['primaryColor', 'shadowColor', 'gradient']
      function p(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          t &&
            (l = l.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, l)
        }
        return a
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(a), !0).forEach(function (t) {
                ;(0, l.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : p(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var _ = function (e) {
          var t = e.primaryColor,
            a = void 0 === t ? i['palette-mintblue'] : t,
            l = e.shadowColor,
            n = void 0 === l ? i['palette-smokegray'] : l,
            o = e.gradient,
            p = void 0 !== o && o,
            d = (0, r.useState)(),
            _ = d[0],
            m = d[1]
          return (
            (0, r.useEffect)(function () {
              m((0, s.Z)())
            }, []),
            (0, c.jsxs)(c.Fragment, {
              children: [
                p &&
                  (0, c.jsxs)(c.Fragment, {
                    children: [
                      (0, c.jsxs)('defs', {
                        children: [
                          (0, c.jsxs)('linearGradient', {
                            id: 'gradient-1-'.concat(_),
                            x1: '0',
                            x2: '0',
                            y1: '0',
                            y2: '1',
                            children: [
                              (0, c.jsx)('stop', {
                                offset: '0.5',
                                stopColor: 'white',
                                stopOpacity: '0',
                              }),
                              (0, c.jsx)('stop', {
                                offset: '1',
                                stopColor: 'white',
                                stopOpacity: '1',
                              }),
                            ],
                          }),
                          (0, c.jsxs)('linearGradient', {
                            id: 'gradient-2-'.concat(_),
                            x1: '0',
                            x2: '0',
                            y1: '0',
                            y2: '1',
                            children: [
                              (0, c.jsx)('stop', {
                                offset: '0',
                                stopColor: 'white',
                                stopOpacity: '0',
                              }),
                              (0, c.jsx)('stop', {
                                offset: '0.5',
                                stopColor: 'white',
                                stopOpacity: '1',
                              }),
                            ],
                          }),
                          (0, c.jsx)('mask', {
                            id: 'mask-1-'.concat(_),
                            children: (0, c.jsx)('rect', {
                              x: '0',
                              y: '0',
                              width: '15.63',
                              height: '17.45',
                              fill: 'url(#gradient-1-'.concat(_, ')'),
                            }),
                          }),
                          (0, c.jsx)('mask', {
                            id: 'mask-2-'.concat(_),
                            children: (0, c.jsx)('rect', {
                              x: '0',
                              y: '0',
                              width: '15.63',
                              height: '17.45',
                              fill: 'url(#gradient-2-'.concat(_, ')'),
                            }),
                          }),
                        ],
                      }),
                      (0, c.jsxs)('g', {
                        fill: i['palette-pastelgreen'],
                        children: [
                          (0, c.jsx)('path', {
                            d: 'M15.63,2a2,2,0,1,1-2-2A2,2,0,0,1,15.63,2Z',
                          }),
                          (0, c.jsx)('path', {
                            d: 'M11.54,7l.32.27a1.73,1.73,0,0,0,.48-1.21,1.78,1.78,0,0,0-1.78-1.78A1.8,1.8,0,0,0,9,5.22l.2.14Z',
                          }),
                          (0, c.jsx)('path', {
                            d: 'M11.86,7.3a1.75,1.75,0,0,1-1.3.57A1.78,1.78,0,0,1,8.78,6.09,1.81,1.81,0,0,1,9,5.22L6.87,3.69A2.62,2.62,0,0,0,4.1,3.42a2.65,2.65,0,0,0-.93.8,3.2,3.2,0,0,0-.55,1.84s0,3.59,0,4.53L.88,13A1,1,0,0,0,0,14a1.11,1.11,0,0,0,.48.9L3,16.71a1.07,1.07,0,0,0,1.5-.19,1,1,0,0,0,.15-.78l1.79-2.5,4.21-1.42h0a3.17,3.17,0,0,0,1.57-1.12,2.55,2.55,0,0,0-.36-3.4Zm-1.43,3.87L6,12.66l-2.15,3a.38.38,0,0,1,.08.46.38.38,0,0,1-.53,0L.88,14.34a.38.38,0,0,1-.14-.51.37.37,0,0,1,.46-.07l2.12-2.95V9.94H5c.43,0,.63-.4.22-.79a1.42,1.42,0,0,1,.94-2.49A1.43,1.43,0,0,1,7.54,8.08a1.41,1.41,0,0,1-.48,1.07c-.42.39-.21.79.22.79h4.58A2.32,2.32,0,0,1,10.43,11.17Z',
                          }),
                        ],
                      }),
                      (0, c.jsxs)('g', {
                        fill: i['palette-emeraldgreen'],
                        mask: 'url(#mask-2-'.concat(_, ')'),
                        children: [
                          (0, c.jsx)('path', {
                            d: 'M15.63,2a2,2,0,1,1-2-2A2,2,0,0,1,15.63,2Z',
                          }),
                          (0, c.jsx)('path', {
                            d: 'M11.54,7l.32.27a1.73,1.73,0,0,0,.48-1.21,1.78,1.78,0,0,0-1.78-1.78A1.8,1.8,0,0,0,9,5.22l.2.14Z',
                          }),
                          (0, c.jsx)('path', {
                            d: 'M11.86,7.3a1.75,1.75,0,0,1-1.3.57A1.78,1.78,0,0,1,8.78,6.09,1.81,1.81,0,0,1,9,5.22L6.87,3.69A2.62,2.62,0,0,0,4.1,3.42a2.65,2.65,0,0,0-.93.8,3.2,3.2,0,0,0-.55,1.84s0,3.59,0,4.53L.88,13A1,1,0,0,0,0,14a1.11,1.11,0,0,0,.48.9L3,16.71a1.07,1.07,0,0,0,1.5-.19,1,1,0,0,0,.15-.78l1.79-2.5,4.21-1.42h0a3.17,3.17,0,0,0,1.57-1.12,2.55,2.55,0,0,0-.36-3.4Zm-1.43,3.87L6,12.66l-2.15,3a.38.38,0,0,1,.08.46.38.38,0,0,1-.53,0L.88,14.34a.38.38,0,0,1-.14-.51.37.37,0,0,1,.46-.07l2.12-2.95V9.94H5c.43,0,.63-.4.22-.79a1.42,1.42,0,0,1,.94-2.49A1.43,1.43,0,0,1,7.54,8.08a1.41,1.41,0,0,1-.48,1.07c-.42.39-.21.79.22.79h4.58A2.32,2.32,0,0,1,10.43,11.17Z',
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, c.jsxs)('g', {
                  fill: a,
                  mask: p ? 'url(#mask-1-'.concat(_, ')') : void 0,
                  children: [
                    (0, c.jsx)('path', {
                      d: 'M15.63,2a2,2,0,1,1-2-2A2,2,0,0,1,15.63,2Z',
                    }),
                    (0, c.jsx)('path', {
                      d: 'M11.54,7l.32.27a1.73,1.73,0,0,0,.48-1.21,1.78,1.78,0,0,0-1.78-1.78A1.8,1.8,0,0,0,9,5.22l.2.14Z',
                    }),
                    (0, c.jsx)('path', {
                      d: 'M11.86,7.3a1.75,1.75,0,0,1-1.3.57A1.78,1.78,0,0,1,8.78,6.09,1.81,1.81,0,0,1,9,5.22L6.87,3.69A2.62,2.62,0,0,0,4.1,3.42a2.65,2.65,0,0,0-.93.8,3.2,3.2,0,0,0-.55,1.84s0,3.59,0,4.53L.88,13A1,1,0,0,0,0,14a1.11,1.11,0,0,0,.48.9L3,16.71a1.07,1.07,0,0,0,1.5-.19,1,1,0,0,0,.15-.78l1.79-2.5,4.21-1.42h0a3.17,3.17,0,0,0,1.57-1.12,2.55,2.55,0,0,0-.36-3.4Zm-1.43,3.87L6,12.66l-2.15,3a.38.38,0,0,1,.08.46.38.38,0,0,1-.53,0L.88,14.34a.38.38,0,0,1-.14-.51.37.37,0,0,1,.46-.07l2.12-2.95V9.94H5c.43,0,.63-.4.22-.79a1.42,1.42,0,0,1,.94-2.49A1.43,1.43,0,0,1,7.54,8.08a1.41,1.41,0,0,1-.48,1.07c-.42.39-.21.79.22.79h4.58A2.32,2.32,0,0,1,10.43,11.17Z',
                    }),
                  ],
                }),
                (0, c.jsx)('ellipse', {
                  fill: n,
                  cx: '7.1',
                  cy: '16.93',
                  rx: '4.43',
                  ry: '0.52',
                }),
              ],
            })
          )
        },
        m = function (e) {
          var t = e.primaryColor,
            a = void 0 === t ? i['palette-mintblue'] : t,
            l = e.shadowColor,
            r = void 0 === l ? i['palette-smokegray'] : l,
            s = e.gradient,
            p = void 0 !== s && s,
            m = (0, n.Z)(e, o)
          return (0, c.jsx)(
            'svg',
            d(
              d(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 15.63 17.45',
                  'aria-label':
                    '\u682a\u5f0f\u4f1a\u793e\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u306e\u30ed\u30b4\u30b7\u30f3\u30dc\u30eb',
                },
                d({}, m)
              ),
              {},
              {
                children: (0, c.jsx)(_, {
                  primaryColor: a,
                  shadowColor: r,
                  gradient: p,
                }),
              }
            )
          )
        }
    },
    13340: function (e, t, a) {
      'use strict'
      a.d(t, {
        $: function () {
          return c
        },
      })
      var l = a(67294),
        n = a(94184),
        r = a.n(n)
      var s = a(37699),
        i = a(85893),
        c = function (e) {
          var t = e.children,
            a = e.className,
            n = e.style,
            c = e.fixedTop,
            o = void 0 === c ? 0 : c,
            p = e.absoluteBottom,
            d = void 0 === p ? 0 : p,
            _ = e.endStyle,
            m = e.onFixed,
            u = e.onUntil,
            b = e.onEnd,
            h = (0, l.useState)('until'),
            f = h[0],
            g = h[1],
            x = (0, l.useRef)(null)
          function j() {
            return x.current && null !== x.current.parentElement
              ? ((e = x.current.parentElement),
                window.pageYOffset + e.getBoundingClientRect().top)
              : 0
            var e
          }
          function y() {
            x.current &&
              ((x.current && null !== x.current.parentElement
                ? x.current.parentElement.getBoundingClientRect().height
                : 0) +
                j() -
                o -
                d -
                x.current.clientHeight <=
              window.pageYOffset
                ? (g('end'), b && b())
                : j() <= window.pageYOffset
                ? (g('active'), m && m())
                : (g('until'), u && u()))
          }
          ;(0, l.useEffect)(function () {
            x.current &&
              null !== x.current.parentElement &&
              'relative' !== x.current.parentElement.style.position &&
              (x.current.parentElement.style.position = 'relative')
          }, []),
            (0, l.useEffect)(
              function () {
                return (
                  document.addEventListener('scroll', y),
                  function () {
                    document.removeEventListener('scroll', y)
                  }
                )
              },
              [o, d]
            )
          var v = {
            top: 'end' !== f ? o : 'auto',
            bottom: 'end' === f ? d : '',
          }
          return (0, i.jsx)('div', {
            ref: x,
            style: Object.assign(v, n || {}, 'end' === f && _ && _),
            className: r()(
              s.component,
              'active' === f && s['is-fixed'],
              'end' === f && s['is-end'],
              a && a
            ),
            children: t,
          })
        }
    },
    25354: function (e, t, a) {
      'use strict'
      a.d(t, {
        C: function () {
          return l
        },
      })
      var l = a(26372).v9
    },
    45655: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, {
          default: function () {
            return Ae
          },
        })
      var l = a(80318),
        n = a(11163),
        r = a(67294),
        s = a(66261),
        i = a(70131),
        c = a(41113)
      var o = a(26290),
        p = a(25354),
        d = a(36100),
        _ = a(39165),
        m = a(26),
        u = a(53960),
        b = a(84150),
        h = a(34629),
        f = a(77529),
        g = a(94184),
        x = a.n(g),
        j = a(94620),
        y =
          '/_next/static/image/src/images/top/img-mv-object.515f2f6ec90eae4e73007dbdeb230442.png',
        v = a(85893),
        w = function (e) {
          var t = e.className,
            a = e.style
          return (0, v.jsx)('div', {
            className: x()(j.component, t),
            style: a,
            children: (0, v.jsx)('div', {
              className: 'l-wrap',
              children: (0, v.jsxs)('div', {
                className: x()('l-inner', j.component__inner),
                children: [
                  (0, v.jsxs)('header', {
                    className: x()(j.component__header, j.header),
                    children: [
                      (0, v.jsxs)('h2', {
                        className: j.header__title,
                        children: [
                          'CREATING',
                          (0, v.jsx)('br', {}),
                          'VALUE',
                          (0, v.jsx)('br', {}),
                          'TOGETHER',
                        ],
                      }),
                      (0, v.jsx)('p', {
                        className: j['header__sub-title'],
                        children:
                          '\u4fa1\u5024\u3092\u5171\u306b\u5275\u308a\u7d9a\u3051\u308b',
                      }),
                      (0, v.jsx)('p', {
                        className: j.header__text,
                        children:
                          'IT\u6295\u8cc7\u306e\u52b9\u679c\u3092\u6700\u5927\u9650\u306b',
                      }),
                    ],
                  }),
                  (0, v.jsxs)('div', {
                    className: x()(j.component__object, j.object),
                    children: [
                      (0, v.jsx)('svg', {
                        className: x()(
                          j.object__outline,
                          'hidden tablet:block'
                        ),
                        viewBox: '0 0 100 100',
                        children: (0, v.jsx)('circle', {
                          cx: '50',
                          cy: '50',
                          r: '50',
                        }),
                      }),
                      (0, v.jsx)('div', { className: j['object__circle--1'] }),
                      (0, v.jsx)('div', { className: j['object__circle--2'] }),
                      (0, v.jsx)('div', {
                        className: j.object__image,
                        children: (0, v.jsx)(f.E, {
                          src: y,
                          width: '100%',
                          placeholder: 'blur',
                          alt: 'Object',
                        }),
                      }),
                    ],
                  }),
                  (0, v.jsx)('div', {
                    className: x()(
                      j.component__scroll,
                      j.scroll,
                      'tablet:hidden'
                    ),
                    children: (0, v.jsx)('span', {
                      className: j.scroll__text,
                      children: 'scroll',
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        N = a(32573),
        k = a(93722),
        A = a(33807),
        O =
          '/_next/static/image/src/images/top/illust-idea.f76c7aaf343cbd568f9f705a94c3e06b.png',
        C =
          '/_next/static/image/src/images/top/illust-goal.cb52e2886f0445f4ee0d34552112dc97.png',
        S = function (e) {
          var t = e.className,
            a = e.style
          return (0, v.jsx)('div', {
            className: x()(A.component, t),
            style: a,
            children: (0, v.jsx)('div', {
              className: 'l-wrap',
              children: (0, v.jsxs)('div', {
                className: x()('l-inner', A.component__inner),
                children: [
                  (0, v.jsx)(k.D, {
                    className: 'hidden tablet:block',
                    texts: {
                      en: 'About  Growing Islands',
                      ja: '\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u306b\u3064\u3044\u3066',
                    },
                    textColor: A['palette-white'],
                  }),
                  (0, v.jsxs)('p', {
                    className: A.component__text,
                    'data-aos': 'fade-up',
                    children: [
                      '\u682a\u5f0f\u4f1a\u793e\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u306f\u3001\u304a\u5ba2\u69d8\u306e\u4e8b\u696d\u6226\u7565\u304b\u3089',
                      (0, v.jsx)('br', {}),
                      '\u73fe\u5728\u62b1\u3048\u308b\u8ab2\u984c\u307e\u3067\u5fb9\u5e95\u7684\u306b\u7406\u89e3\u3001',
                      (0, v.jsx)('br', {}),
                      '\u76ee\u6307\u3059\u672a\u6765\u306b\u5171\u611f\u3057\u76ee\u7684\u3092\u660e\u78ba\u306b\u6301\u3061\u3001',
                      (0, v.jsx)('br', {}),
                      '\u9069\u5207\u306aIT\u65bd\u7b56\u3067\u304a\u5ba2\u69d8\u3068\u5171\u5275\u3057\u306a\u304c\u3089\u8ab2\u984c\u3092\u89e3\u6c7a\u3057\u307e\u3059\u3002',
                    ],
                  }),
                  (0, v.jsxs)('ul', {
                    className: A.component__list,
                    'data-aos': 'fade-up',
                    children: [
                      (0, v.jsxs)('li', {
                        className: x()(A.component__item, A.item),
                        children: [
                          (0, v.jsx)('div', { className: A.item__decoration }),
                          (0, v.jsx)('div', { className: A.item__decoration }),
                          (0, v.jsx)('div', { className: A.item__decoration }),
                          (0, v.jsxs)('div', {
                            className: A.item__inner,
                            children: [
                              (0, v.jsx)('p', {
                                className: A.item__name,
                                translate: 'no',
                                children: 'ANALYSIS',
                              }),
                              (0, v.jsx)('p', {
                                className: A.item__description,
                                children: '\u5206\u6790\u30fb\u7406\u89e3',
                              }),
                              (0, v.jsx)('div', {
                                className: A.item__image,
                                children: (0, v.jsx)(N.Z, {
                                  className: A.item__svg,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, v.jsxs)('li', {
                        className: x()(A.component__item, A.item),
                        children: [
                          (0, v.jsx)('div', { className: A.item__decoration }),
                          (0, v.jsx)('div', { className: A.item__decoration }),
                          (0, v.jsx)('div', { className: A.item__decoration }),
                          (0, v.jsxs)('div', {
                            className: A.item__inner,
                            children: [
                              (0, v.jsx)('p', {
                                className: A.item__name,
                                translate: 'no',
                                children: 'IDEA',
                              }),
                              (0, v.jsx)('p', {
                                className: A.item__description,
                                children: '\u5171\u5275',
                              }),
                              (0, v.jsx)('div', {
                                className: A.item__image,
                                children: (0, v.jsx)(f.E, {
                                  src: O,
                                  alt: 'IDEA\u3001\u5171\u5275\u306e\u30a4\u30e9\u30b9\u30c8',
                                  width: 124,
                                  height: 126,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, v.jsxs)('li', {
                        className: x()(A.component__item, A.item),
                        children: [
                          (0, v.jsx)('div', { className: A.item__decoration }),
                          (0, v.jsx)('div', { className: A.item__decoration }),
                          (0, v.jsx)('div', { className: A.item__decoration }),
                          (0, v.jsxs)('div', {
                            className: A.item__inner,
                            children: [
                              (0, v.jsx)('p', {
                                className: A.item__name,
                                translate: 'no',
                                children: 'GOAL',
                              }),
                              (0, v.jsx)('p', {
                                className: A.item__description,
                                children: '\u76ee\u6a19',
                              }),
                              (0, v.jsx)('div', {
                                className: A.item__image,
                                children: (0, v.jsx)(f.E, {
                                  src: C,
                                  alt: 'GOAL\u3001\u76ee\u6a19\u306e\u30a4\u30e9\u30b9\u30c8',
                                  width: 144,
                                  height: 160,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        },
        E = a(92809),
        P = a(30352),
        I = function (e) {
          var t = e.className,
            a = e.style,
            l = e.children,
            n = e.text,
            r = e.tag,
            s = void 0 === r ? 'h3' : r,
            i = e.textColor,
            c = void 0 === i ? P['palette-white'] : i,
            o = e.symbolColor,
            p = void 0 === o ? P['palette-white'] : o,
            d = e['data-aos']
          return (0, v.jsxs)('header', {
            className: x()(P.component, t),
            'data-aos': d,
            style: a,
            children: [
              (0, v.jsx)(N.Z, {
                className: x()(P.component__symbol),
                primaryColor: 'gradient' !== p ? p : P['palette-deepblue'],
                shadowColor: 'gradient' !== p ? p : P['palette-deepblue'],
                gradient: 'gradient' === p,
              }),
              (0, v.jsx)(s, {
                className: P.component__title,
                style: { '--text-color': c },
                children: n,
              }),
              l,
            ],
          })
        },
        F = a(52911),
        U = a(84305),
        M =
          '/_next/static/image/src/images/top/img-service-pc.d06564d0456f997f06f1715d8eed0ca3.png',
        D =
          '/_next/static/image/src/images/top/img-service-sp.08b84486b806d82d5fbc97612b109457.png',
        V = a(41901)
      function L(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          t &&
            (l = l.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, l)
        }
        return a
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(a), !0).forEach(function (t) {
                ;(0, E.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : L(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var Z = function (e) {
          var t = e.className,
            a = e.style,
            l = { text: 'SERVICE', 'data-aos': 'fade-up' }
          return (0, v.jsxs)('div', {
            id: 'service',
            className: x()(U.component, t),
            style: a,
            children: [
              (0, v.jsx)('div', {
                className: 'l-wrap',
                children: (0, v.jsxs)('div', {
                  className: x()('l-inner', U.component__inner),
                  children: [
                    (0, v.jsx)(k.D, {
                      className: x()(
                        U['component__column-header'],
                        'hidden tablet:block'
                      ),
                      texts: { en: 'Service', ja: '\u696d\u52d9\u5185\u5bb9' },
                      textColor: U['palette-deepblue'],
                      borderColor: U['palette-deepblue'],
                    }),
                    (0, v.jsx)(
                      I,
                      T(
                        T(
                          {
                            className: x()(
                              U.component__header,
                              U.header,
                              'tablet:hidden'
                            ),
                            symbolColor: 'gradient',
                            textColor: U['palette-deepblue'],
                          },
                          T({}, l)
                        ),
                        {},
                        {
                          children: (0, v.jsxs)('p', {
                            className: U.header__text,
                            children: [
                              '\u304a\u5ba2\u69d8\u306e\u8ab2\u984c\u3092\u304a\u4f3a\u3044\u3057\u3001\u30b7\u30b9\u30c6\u30e0\u53d7\u8a17\u958b\u767a\u304b\u3089SES\u307e\u3067\u5e45\u5e83\u304f\u3054\u63d0\u6848\u3002',
                              (0, v.jsx)('br', {}),
                              '\u5171\u306b\u89e3\u6c7a\u3057\u3066\u307e\u3044\u308a\u307e\u3059\u3002',
                            ],
                          }),
                        }
                      )
                    ),
                    (0, v.jsx)(
                      I,
                      T(
                        T(
                          {
                            className: x()(
                              U.component__header,
                              U.header,
                              'hidden tablet:block'
                            ),
                            symbolColor: U['palette-white'],
                            textColor: U['palette-white'],
                          },
                          T({}, l)
                        ),
                        {},
                        {
                          children: (0, v.jsxs)('p', {
                            className: U.header__text,
                            children: [
                              '\u304a\u5ba2\u69d8\u306e\u8ab2\u984c\u3092\u304a\u4f3a\u3044\u3057\u3001\u30b7\u30b9\u30c6\u30e0\u53d7\u8a17\u958b\u767a\u304b\u3089SES\u307e\u3067\u5e45\u5e83\u304f\u3054\u63d0\u6848\u3002',
                              (0, v.jsx)('br', {}),
                              '\u5171\u306b\u89e3\u6c7a\u3057\u3066\u307e\u3044\u308a\u307e\u3059\u3002',
                            ],
                          }),
                        }
                      )
                    ),
                    (0, v.jsxs)('ul', {
                      className: U.component__list,
                      children: [
                        (0, v.jsxs)('li', {
                          className: x()(U.component__item, U.item),
                          'data-aos': 'fade-up',
                          children: [
                            (0, v.jsxs)('header', {
                              className: U.item__header,
                              children: [
                                (0, v.jsx)('h4', {
                                  className: U.item__title,
                                  children:
                                    '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a',
                                }),
                                (0, v.jsx)('p', {
                                  className: U['item__sub-title'],
                                  children: 'Co-Creation Contract Development',
                                }),
                              ],
                            }),
                            (0, v.jsxs)('p', {
                              className: U.item__description,
                              children: [
                                '\u8cb4\u793e\u306e\u4e8b\u696d\u3092\u6210\u9577\u3055\u305b\u308b\u305f\u3081\u306e\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u3092\u901a\u3058\u3066\u3001',
                                (0, v.jsx)('br', {}),
                                '\u4fa1\u5024\u3092\u5171\u306b\u5275\u308a\u7d9a\u3051\u307e\u3059\u3002',
                                (0, v.jsx)('br', {}),
                                '\u4eca\u307e\u3067\u306e\u8acb\u8ca0\u578b\u306e\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u306e\u3088\u3046\u306b\u3001\u6642\u9593\u3092\u304b\u3051\u3066',
                                (0, v.jsx)('br', {
                                  className: 'inline-block tablet:hidden',
                                }),
                                '\u958b\u767a\u3092\u884c\u3044\u300c\u7d0d\u54c1\u3057\u3066\u7d42\u308f\u308a\u300d\u3067\u306f\u306a\u304f\u3001\u30aa\u30d5\u30b7\u30e7\u30a2\u3067',
                                (0, v.jsx)('br', {
                                  className: 'inline-block tablet:hidden',
                                }),
                                '\u306e\u5b9a\u984d\u9867\u554f\u30b9\u30bf\u30a4\u30eb\u3092\u4f4e\u30b3\u30b9\u30c8\u3067\u63d0\u4f9b\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001',
                                (0, v.jsx)('br', {
                                  className: 'inline-block tablet:hidden',
                                }),
                                '\u5f0a\u793e\u306f\u304a\u5ba2\u69d8\u306e\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u306a\u308a\u3001\u4e8b\u696d\u6210\u9577\u3068\u4f75\u8d70\u3057\u3066',
                                (0, v.jsx)('br', {
                                  className: 'inline-block tablet:hidden',
                                }),
                                '\u307e\u3044\u308a\u307e\u3059\u3002',
                              ],
                            }),
                            (0, v.jsx)('div', {
                              className: U['item__button-wrap'],
                              children: (0, v.jsx)(F.b, {
                                href: V.V.contract_development.$url(),
                                className: U.item__button,
                                icon: !0,
                                children:
                                  '\u958b\u767a\u3092\u3054\u4f9d\u983c\u306e\u304a\u5ba2\u69d8',
                              }),
                            }),
                          ],
                        }),
                        (0, v.jsxs)('li', {
                          className: x()(U.component__item, U.item),
                          'data-aos': 'fade-up',
                          children: [
                            (0, v.jsxs)('header', {
                              className: U.item__header,
                              children: [
                                (0, v.jsx)('h4', {
                                  className: U.item__title,
                                  children:
                                    '\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u306eSES',
                                }),
                                (0, v.jsx)('p', {
                                  className: U['item__sub-title'],
                                  children: "Growing Islands's SES",
                                }),
                              ],
                            }),
                            (0, v.jsxs)('p', {
                              className: U.item__description,
                              children: [
                                '\u4ee3\u8868\u81ea\u8eab\u304c\u30a8\u30f3\u30b8\u30cb\u30a2\u3067\u3042\u308b\u5f0a\u793e\u3067\u306f\u3001',
                                (0, v.jsx)('br', {
                                  className: 'inline-block tablet:hidden',
                                }),
                                '\u30a8\u30f3\u30b8\u30cb\u30a2\u4eba\u6750\u3092\u63a2\u3059\u4f01\u696d\u69d8\u3001\u305d\u3057\u3066\u6848\u4ef6\u3092\u63a2\u3059',
                                (0, v.jsx)('br', {
                                  className: 'inline-block tablet:hidden',
                                }),
                                '\u30a8\u30f3\u30b8\u30cb\u30a2\u306e\u7686\u69d8\u4e21\u65b9\u306e\u7acb\u5834\u3092\u7406\u89e3\u3057\u3001',
                                (0, v.jsx)('br', {
                                  className: 'inline-block tablet:hidden',
                                }),
                                '\u9069\u5207\u306a\u30de\u30c3\u30c1\u30f3\u30b0\u3068\u3054\u7d39\u4ecb\u3092\u884c\u3046\u3053\u3068\u3067\u3001\u591a\u304f\u306e\u304a\u5ba2\u69d8\u30fb',
                                (0, v.jsx)('br', {
                                  className: 'inline-block tablet:hidden',
                                }),
                                '\u30a8\u30f3\u30b8\u30cb\u30a2\u306e\u7686\u69d8\u3088\u308a\u3054\u597d\u8a55\u3092\u9802\u3044\u3066\u304a\u308a\u307e\u3059\u3002',
                              ],
                            }),
                            (0, v.jsx)('div', {
                              className: U['item__button-wrap'],
                              children: (0, v.jsx)(F.b, {
                                href: V.V.ses.$url(),
                                className: U.item__button,
                                icon: !0,
                                children:
                                  'SES\u3092\u3054\u4f9d\u983c\u306e\u304a\u5ba2\u69d8',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, v.jsx)('div', {
                className: x()(U.component__image, 'hidden tablet:block'),
                children: (0, v.jsx)(f.E, {
                  src: M,
                  alt: '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\u306e\u30a4\u30e1\u30fc\u30b8',
                  width: '100%',
                  placeholder: 'blur',
                }),
              }),
              (0, v.jsx)('div', {
                className: x()(U.component__image, 'tablet:hidden'),
                children: (0, v.jsx)(f.E, {
                  src: D,
                  alt: '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\u306e\u30a4\u30e1\u30fc\u30b8',
                  width: '100%',
                  placeholder: 'blur',
                }),
              }),
            ],
          })
        },
        W = a(78081)
      function B(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          t &&
            (l = l.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, l)
        }
        return a
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(a), !0).forEach(function (t) {
                ;(0, E.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : B(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var H = [
          {
            title: 'MISSION',
            image: {
              src: {
                src: '/_next/static/image/src/images/top/img-mission-01.71da3eea25a48aa1776fce45bba7ec72.png',
                height: 1064,
                width: 1065,
                blurDataURL:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4ElEQVR42gWAO04CQRiAv//fGdZdl0eCGBpEGxIvZKGFxHN4FeOaaGPrHYylhSeQyqyiIMq+ZoYIwPXa3y9LRtq6q8mBMS/Pq/zjsy6AM3Oz9Q8I52UJ/07ffgo0tVFPaqUr9tHEcJSqMEtCtWhlEDXAn9S2MR0VHWlHuVTC73iP+HQofj8Lvk20kzhdxxrNNVMaK3gF+ho46QnT4xgTjF++0pgW8gjpq4QqBInVBzKj1fDQDGzpb03pWaQKGyfx1oUVDo0qutOZpR77QgCeGp9/NUw2jrmW2OKbO/G8Axc7wMJb0x6rgzQAAAAASUVORK5CYII=',
              },
              width: '100%',
            },
            contents: [
              (0, v.jsx)(
                'div',
                {
                  className: W.item__content,
                  children: (0, v.jsxs)('p', {
                    className: W.item__text,
                    children: [
                      'IT\u3067',
                      (0, v.jsx)('br', {
                        className: 'hidden tablet:inline-block',
                      }),
                      '\u56f0\u3063\u3066\u3044\u308b',
                      (0, v.jsx)('br', { className: 'tablet:hidden' }),
                      '\u4eba\u3092\u52a9\u3051\u308b',
                    ],
                  }),
                },
                'mission'
              ),
            ],
          },
          {
            title: 'VISION',
            image: {
              src: {
                src: '/_next/static/image/src/images/top/img-mission-02.a117814e00b8e4aa8d424fa6a021b8f1.png',
                height: 1078,
                width: 1078,
                blurDataURL:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR42g2JUUrDUBREZ24eN62JGF6oRS1++CEK0l8NdkFZkl2G4IcLUOwKKuIeLChYeJKMb2A4Bw6Rt3j6vF5etg8H9bQ79gKLOry5sQfwztnjx9Xdzfy1aevoos6nhglBH/U1Ee7D8iKum1hFDkynDj8JQDEqyRj/pHWoq7JzmOYl/aykIoVpAS8BJaELxWiYueEo5CChBRDyS2QaYCFpU1E8JFNlYAEwx2SZo7Cx75/UF4N2DeGB0B4UQCe0E9Db82273YurAL04OFAafrOPwArA9h+Mvkm1yPeEcgAAAABJRU5ErkJggg==',
              },
              width: '100%',
            },
            contents: [
              (0, v.jsx)(
                'div',
                {
                  className: W.item__content,
                  children: (0, v.jsxs)('p', {
                    className: W.item__text,
                    children: [
                      'IT\u6295\u8cc7\u306b\u5bfe\u3059\u308b',
                      (0, v.jsx)('br', { className: 'tablet:hidden' }),
                      '\u30cf\u30fc\u30c9\u30eb\u3092',
                      (0, v.jsx)('br', {}),
                      '\u6975\u9650\u307e\u3067\u4f4e\u304f\u3059\u308b',
                    ],
                  }),
                },
                'vision'
              ),
            ],
          },
          {
            title: 'VALUE',
            image: {
              src: {
                src: '/_next/static/image/src/images/top/img-mission-03.77aafc6c56bff5dc1df639d84aad5d71.png',
                height: 1134,
                width: 1046,
                blurDataURL:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA10lEQVR42mMwuvT0iMurL5EMSCB3xxcW5r6PjAw611+8iH/99X/P+x9np776mcDAcJENrsrl7rsjje9+/J/+7uf/Fe9+/Z90/dsjlfkfivRnflJgqH31bdVUoMTyt79+7Xr3+/vZt3/+Lz7343/Iss99DDPf/exd/PbX/x1vf38//+7P/9tAfOX133iwsave/SrY8/HP/4vv//y/+fbP45vv/hqBxGfs+8rEsOTZr+BlN3/833Tl54abv/5zgySOP/7NAtYZvuGTg+Xij30wBx5/+JsFxgYAapZ/2K4hpgMAAAAASUVORK5CYII=',
              },
              width: '100%',
            },
            contents: [
              (0, v.jsxs)(
                'div',
                {
                  className: W.item__content,
                  children: [
                    (0, v.jsx)('p', {
                      className: W.item__text,
                      children:
                        '\u5171\u60f3\u300c\u5171\u306b\u60f3\u3046\u300d',
                    }),
                    (0, v.jsxs)('p', {
                      className: W.item__description,
                      children: [
                        '\u304a\u5ba2\u69d8\u304c\u8003\u3048\u308b\u672a\u6765\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u3092\u4e16\u306b\u51fa\u3057\u305f',
                        (0, v.jsx)('br', {
                          className: 'hidden tablet:inline-block',
                        }),
                        '\u5f8c\u306e\u7406\u60f3\u3001\u6211\u3005\u306f\u540c\u3058\u5922\u3092\u3001\u540c\u3058\u8996\u70b9\u3067\u898b\u307e\u3059\u3002',
                      ],
                    }),
                  ],
                },
                'value-1'
              ),
              (0, v.jsxs)(
                'div',
                {
                  className: W.item__content,
                  children: [
                    (0, v.jsx)('p', {
                      className: W.item__text,
                      children:
                        '\u5171\u5275\u300c\u5171\u306b\u5275\u308b\u300d',
                    }),
                    (0, v.jsxs)('p', {
                      className: W.item__description,
                      children: [
                        '\u304a\u5ba2\u69d8\u304c\u793e\u4f1a\u306b\u63d0\u4f9b\u3059\u308b\u4fa1\u5024\u3092\u3001',
                        (0, v.jsx)('br', {}),
                        '\u30b7\u30b9\u30c6\u30e0\u3092\u901a\u3057\u3066\u5171\u306b\u5275\u308a\u307e\u3059\u3002',
                      ],
                    }),
                  ],
                },
                'value-2'
              ),
              (0, v.jsxs)(
                'div',
                {
                  className: W.item__content,
                  children: [
                    (0, v.jsx)('p', {
                      className: W.item__text,
                      children:
                        '\u5171\u8d70\u300c\u5171\u306b\u8d70\u308b\u300d',
                    }),
                    (0, v.jsxs)('p', {
                      className: W.item__description,
                      children: [
                        '\u5909\u5316\u306e\u6fc0\u3057\u3044\u6642\u4ee3\u306b\u98f2\u307e\u308c\u308b\u3053\u3068\u306a\u304f\u3001',
                        (0, v.jsx)('br', {
                          className: 'hidden tablet:inline-block',
                        }),
                        '\u5171\u306b\u4f34\u8d70\u3057\u307e\u3059\u3002',
                      ],
                    }),
                  ],
                },
                'value-3'
              ),
            ],
          },
        ],
        z = function (e) {
          var t = e.className,
            a = e.style
          return (0, v.jsx)('div', {
            id: 'mission',
            className: x()(W.component, t),
            style: a,
            children: (0, v.jsx)('div', {
              className: 'l-wrap',
              children: (0, v.jsxs)('div', {
                className: x()('l-inner', W.component__inner),
                children: [
                  (0, v.jsx)(k.D, {
                    className: x()(
                      W['component__column-header'],
                      'hidden tablet:block'
                    ),
                    texts: {
                      en: 'Service Mission',
                      ja: '\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u306e\u30dd\u30ea\u30b7\u30fc',
                    },
                    textColor: W['palette-deepblue'],
                    borderColor: W['palette-deepblue'],
                  }),
                  (0, v.jsx)(I, {
                    className: W.component__header,
                    text: 'SERVICE MISSION',
                    symbolColor: 'gradient',
                    textColor: W['palette-deepblue'],
                    'data-aos': 'fade-up',
                  }),
                  (0, v.jsxs)('svg', {
                    width: '0',
                    height: '0',
                    className: W.svg,
                    children: [
                      (0, v.jsxs)('linearGradient', {
                        id: 'gradient-mission',
                        x1: '0',
                        x2: '0',
                        y1: '0',
                        y2: '1',
                        children: [
                          (0, v.jsx)('stop', {
                            offset: '0%',
                            stopColor: W['palette-deepblue'],
                          }),
                          (0, v.jsx)('stop', {
                            offset: '50%',
                            stopColor: W['palette-emeraldgreen'],
                          }),
                          (0, v.jsx)('stop', {
                            offset: '100%',
                            stopColor: W['palette-pastelgreen'],
                          }),
                        ],
                      }),
                      (0, v.jsx)('mask', {
                        id: 'mask-circle',
                        children: (0, v.jsx)('circle', {
                          cx: '50',
                          cy: '50',
                          r: '45',
                          fill: 'transparent',
                          stroke: 'white',
                        }),
                      }),
                    ],
                  }),
                  (0, v.jsx)('ul', {
                    className: W.component__list,
                    children: H.map(function (e) {
                      var t = e.title,
                        a = e.image,
                        l = e.contents
                      return (0, v.jsxs)(
                        'li',
                        {
                          className: x()(W.component__item, W.item),
                          'data-aos': 'fade-up',
                          children: [
                            (0, v.jsxs)('div', {
                              className: W.item__inner,
                              children: [
                                (0, v.jsxs)('header', {
                                  className: W.item__header,
                                  children: [
                                    (0, v.jsx)('svg', {
                                      className: W.item__svg,
                                      viewBox: '0 0 100 100',
                                      children: (0, v.jsx)('circle', {
                                        cx: '50',
                                        cy: '50',
                                        r: '50',
                                        fill: 'url(#gradient-mission)',
                                        mask: 'url(#mask-circle)',
                                      }),
                                    }),
                                    (0, v.jsx)('h4', {
                                      className: W.item__title,
                                      children: t,
                                    }),
                                  ],
                                }),
                                (0, v.jsx)('div', {
                                  className: W.item__contents,
                                  children: l.map(function (e) {
                                    return e
                                  }),
                                }),
                              ],
                            }),
                            (0, v.jsx)('div', {
                              className: W.item__image,
                              children: (0, v.jsx)(
                                f.E,
                                R(
                                  R(
                                    {
                                      alt: ''.concat(
                                        t,
                                        '\u306e\u30e2\u30c1\u30fc\u30d5\u30aa\u30d6\u30b8\u30a7\u30af\u30c8'
                                      ),
                                      placeholder: 'blur',
                                    },
                                    R({}, a)
                                  ),
                                  {},
                                  { src: a.src.src }
                                )
                              ),
                            }),
                          ],
                        },
                        t
                      )
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        G = a(13195),
        q = [
          {
            label: '\u4f1a\u793e\u540d',
            text: '\u682a\u5f0f\u4f1a\u793e\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba',
          },
          {
            label: '\u4f4f\u6240',
            text: "\u3012 279-0002<br class='tablet:hidden' /> \u5343\u8449\u770c\u6d66\u5b89\u5e02\u5317\u68041-1-3 \u67f3\u5185\u30d3\u30eb 3\u968e",
          },
          {
            label: '\u4e8b\u696d\u5185\u5bb9',
            text: 'WEB\u30b7\u30b9\u30c6\u30e0\u306e\u4f01\u753b\u7acb\u6848\u30fb\u8a2d\u8a08\u30fb\u69cb\u7bc9 \u904b\u7528\u53ca\u3073\u30b3\u30f3\u30b5\u30eb\u30bf\u30f3\u30c8\u696d\u52d9<br class="hidden tablet:inline-block" />\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u958b\u767a\u3001\u8ca9\u58f2',
          },
          {
            label: '\u4ee3\u8868\u53d6\u7de0\u5f79',
            text: '\u6df1\u677e\u4e00\u5e73',
          },
          { label: '\u8a2d\u7acb', text: '2015\u5e7412\u6708' },
          {
            label: '\u53d6\u5f15\u9280\u884c',
            text: '\u307f\u305a\u307b\u9280\u884c \u65b0\u6d66\u5b89\u652f\u5e97',
          },
        ],
        K = function (e) {
          var t = e.className,
            a = e.style
          return (0, v.jsx)('div', {
            id: 'company',
            className: x()(G.component, t),
            style: a,
            children: (0, v.jsx)('div', {
              className: 'l-wrap',
              children: (0, v.jsxs)('div', {
                className: x()('l-inner', G.component__inner),
                children: [
                  (0, v.jsx)(k.D, {
                    className: x()(
                      G['component__column-header'],
                      'hidden tablet:block'
                    ),
                    texts: { en: 'Company', ja: '\u4f1a\u793e\u6982\u8981' },
                    textColor: G['palette-deepblue'],
                    borderColor: G['palette-deepblue'],
                  }),
                  (0, v.jsx)(I, {
                    className: G.component__header,
                    text: 'COMPANY',
                    symbolColor: 'gradient',
                    textColor: G['palette-deepblue'],
                    'data-aos': 'fade-up',
                  }),
                  (0, v.jsx)('div', {
                    className: G.component__map,
                    'data-aos': 'fade-up',
                    children: (0, v.jsx)('iframe', {
                      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.51387623262!2d139.89392581525823!3d35.664346880198224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187d3fa682b8fd%3A0xc64b91f80bf68808!2z5qCq5byP5Lya56S-44Om44Oh44Op44Oc!5e0!3m2!1sja!2sjp!4v1638179648047!5m2!1sja!2sjp',
                      loading: 'lazy',
                    }),
                  }),
                  (0, v.jsx)('div', {
                    className: G.component__list,
                    'data-aos': 'fade-up',
                    children: q.map(function (e) {
                      var t = e.label,
                        a = e.text
                      return (0,
                      v.jsxs)('dl', { className: x()(G.component__item, G.item), children: [(0, v.jsx)('dt', { className: G.item__label, dangerouslySetInnerHTML: { __html: t } }), (0, v.jsx)('dd', { className: G.item__body, dangerouslySetInnerHTML: { __html: a } })] }, t)
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        Y = a(83789),
        Q = a(10219),
        J = a(30266),
        X = a(809),
        $ = a.n(X),
        ee = a(87536),
        te = a(41664),
        ae = a(4298),
        le = a(77678),
        ne = a(55234),
        re = function (e) {
          var t = e.className,
            a = e.color,
            l = void 0 === a ? ne['palette-black'] : a,
            n = e.style
          return (0, v.jsxs)('svg', {
            viewBox: '0 0 100 100',
            preserveAspectRatio: 'xMidYMid',
            className: x()(t),
            style: n,
            children: [
              (0, v.jsx)('g', {
                transform: 'rotate(0 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.9166666666666666s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(30 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.8333333333333334s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(60 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.75s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(90 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.6666666666666666s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(120 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.5833333333333334s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(150 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.5s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(180 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.4166666666666667s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(210 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.3333333333333333s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(240 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.25s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(270 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.16666666666666666s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(300 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '-0.08333333333333333s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
              (0, v.jsx)('g', {
                transform: 'rotate(330 50 50)',
                children: (0, v.jsx)('rect', {
                  x: '47.5',
                  y: '0',
                  rx: '9.5',
                  ry: '2',
                  width: '5',
                  height: '20',
                  fill: l,
                  children: (0, v.jsx)('animate', {
                    attributeName: 'opacity',
                    values: '1;0',
                    keyTimes: '0;1',
                    dur: '1s',
                    begin: '0s',
                    repeatCount: 'indefinite',
                  }),
                }),
              }),
            ],
          })
        },
        se = a(73352),
        ie = function (e) {
          var t = e.className,
            a = e.style
          return (0, v.jsx)('div', {
            className: x()(se.component, t),
            style: a,
            children: (0, v.jsxs)('div', {
              className: se.component__inner,
              children: [
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc',
                    (0, v.jsx)('br', {}),
                    '\u682a\u5f0f\u4f1a\u793e\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\uff08\u4ee5\u4e0b\u300c\u5f53\u793e\u300d\uff09\u3067\u306f\u3001\u500b\u4eba\u60c5\u5831\u306b\u95a2\u3059\u308b\u6cd5\u4ee4\u304a\u3088\u3073\u305d\u306e\u4ed6\u306e\u898f\u7bc4\u3092\u9075\u5b88\u3057\u3001\u304a\u5ba2\u69d8\u306e\u5927\u5207\u306a\u500b\u4eba\u60c5\u5831\u306e\u4fdd\u8b77\u306b\u4e07\u5168\u3092\u5c3d\u304f\u3057\u307e\u3059\u3002',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '1 \u500b\u4eba\u60c5\u5831\u306e\u53ce\u96c6\u306b\u3064\u3044\u3066',
                    (0, v.jsx)('br', {}),
                    '\u5f53\u793e\u3067\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u5fc5\u8981\u306a\u7bc4\u56f2\u3067\u500b\u4eba\u60c5\u5831\u3092\u53ce\u96c6\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '\u30fb\u5f53\u793e\u3078\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u6642',
                    (0, v.jsx)('br', {}),
                    '\u30fb\u5f53\u793e\u3078\u306e\u30b5\u30fc\u30d3\u30b9\u304a\u7533\u3057\u8fbc\u307f\u6642',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '2 \u500b\u4eba\u60c5\u5831\u306e\u5229\u7528\u76ee\u7684\u306b\u3064\u3044\u3066',
                    (0, v.jsx)('br', {}),
                    '\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u304b\u3089\u53ce\u96c6\u3057\u305f\u500b\u4eba\u60c5\u5831\u3092\u6b21\u306e\u76ee\u7684\u3067\u5229\u7528\u3044\u305f\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u76ee\u7684\u306e\u7bc4\u56f2\u5185\u3067\u3042\u3063\u3066\u3082\u3001\u9055\u6cd5\u307e\u305f\u306f\u4e0d\u5f53\u306a\u884c\u70ba\u3092\u52a9\u9577\u307e\u305f\u306f\u8a98\u767a\u3059\u308b\u304a\u305d\u308c\u304c\u3042\u308b\u65b9\u6cd5\u3067\u304a\u5ba2\u69d8\u306e\u500b\u4eba\u60c5\u5831\u3092\u5229\u7528\u3057\u307e\u305b\u3093\u3002',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '\u30fb\u304a\u5ba2\u69d8\u3078\u306e\u9023\u7d61\u306e\u305f\u3081',
                    (0, v.jsx)('br', {}),
                    '\u30fb\u304a\u5ba2\u69d8\u304b\u3089\u306e\u304a\u554f\u3044\u5408\u305b\u306b\u5bfe\u3059\u308b\u56de\u7b54\u306e\u305f\u3081',
                    (0, v.jsx)('br', {}),
                    '\u30fb\u304a\u5ba2\u69d8\u3078\u306e\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u306e\u305f\u3081',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '3 \u500b\u4eba\u60c5\u5831\u306e\u7b2c\u4e09\u8005\u3078\u306e\u63d0\u4f9b\u306b\u3064\u3044\u3066',
                    (0, v.jsx)('br', {}),
                    '\u5f53\u793e\u3067\u306f\u3001\u304a\u5ba2\u69d8\u3088\u308a\u53d6\u5f97\u3057\u305f\u500b\u4eba\u60c5\u5831\u3092\u7b2c\u4e09\u8005\u306b\u958b\u793a\u307e\u305f\u306f\u63d0\u4f9b\u3059\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002',
                    (0, v.jsx)('br', {}),
                    '\u305f\u3060\u3057\u3001\u6b21\u306e\u5834\u5408\u306f\u9664\u304d\u307e\u3059\u3002',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '\u30fb\u3054\u672c\u4eba\u306e\u540c\u610f\u304c\u3042\u308b\u5834\u5408',
                    (0, v.jsx)('br', {}),
                    '\u30fb\u8b66\u5bdf\u304b\u3089\u306e\u8981\u8acb\u306a\u3069\u3001\u5b98\u516c\u7f72\u304b\u3089\u306e\u8981\u8acb\u306e\u5834\u5408',
                    (0, v.jsx)('br', {}),
                    '\u30fb\u6cd5\u5f8b\u306e\u9069\u7528\u3092\u53d7\u3051\u308b\u5834\u5408',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '4 \u500b\u4eba\u60c5\u5831\u306e\u958b\u793a\u3001\u8a02\u6b63\u7b49\u306b\u3064\u3044\u3066',
                    (0, v.jsx)('br', {}),
                    '\u5f53\u793e\u306f\u3001\u304a\u5ba2\u69d8\u3054\u672c\u4eba\u304b\u3089\u306e\u81ea\u5df1\u60c5\u5831\u306e\u958b\u793a\u3001\u8a02\u6b63\u3001\u524a\u9664\u7b49\u306e\u304a\u6c42\u3081\u304c\u3042\u3063\u305f\u5834\u5408\u306f\u3001\u78ba\u5b9f\u306b\u5fdc\u3058\u307e\u3059\u3002',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '5 \u82e6\u60c5\u3084\u76f8\u8ac7\u3078\u306e\u5bfe\u5fdc\u3068\u5b89\u5168\u7ba1\u7406\u63aa\u7f6e\u306b\u3064\u3044\u3066',
                    (0, v.jsx)('br', {}),
                    '\u5f53\u793e\u306f\u3001\u500b\u4eba\u60c5\u5831\u306e\u53d6\u6271\u3044\u306b\u95a2\u3059\u308b\u304a\u5ba2\u69d8\u304b\u3089\u306e\u82e6\u60c5\u3084\u76f8\u8ac7\u3092\u53d7\u3051\u4ed8\u3051\u3001\u9069\u5207\u304b\u3064\u8fc5\u901f\u306b\u5bfe\u5fdc\u3044\u305f\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u304a\u5ba2\u69d8\u304b\u3089\u306e\u958b\u793a\u30fb\u8a02\u6b63\u30fb\u8ffd\u52a0\u30fb\u524a\u9664\u3001\u5229\u7528\u53c8\u306f\u63d0\u4f9b\u306e\u505c\u6b62\u306a\u3069\u306e\u3054\u8981\u671b\u306b\u5bfe\u3057\u3066\u3082\u3001\u8fc5\u901f\u9069\u5207\u306b\u5bfe\u5fdc\u3044\u305f\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u53d7\u4ed8\u7a93\u53e3\u306f\u30018\u306b\u8a18\u8f09\u306e\u7a93\u53e3\u3068\u306a\u308a\u307e\u3059\u3002',
                    (0, v.jsx)('br', {}),
                    '\u307e\u305f\u3001\u5f53\u793e\u306f\u3001\u500b\u4eba\u60c5\u5831\u4fdd\u8b77\u6cd5\u306b\u57fa\u3065\u304d\u3001\u500b\u4eba\u60c5\u5831\u306b\u3064\u3044\u3066\u3001\u6f0f\u3048\u3044\u3001\u6ec5\u5931\u53c8\u306f\u6bc0\u640d\u306e\u9632\u6b62\u7b49\u3001\u305d\u306e\u4ed6\u306e\u5b89\u5168\u7ba1\u7406\u306e\u305f\u3081\u306b\u5fc5\u8981\u304b\u3064\u9069\u5207\u306a\u5b89\u5168\u7ba1\u7406\u63aa\u7f6e\u3092\u8b1b\u3058\u307e\u3059\u3002\u4fdd\u6709\u500b\u4eba\u30c7\u30fc\u30bf\u306e\u5b89\u5168\u7ba1\u7406\u306e\u305f\u3081\u306b\u8b1b\u3058\u305f\u63aa\u7f6e\u306b\u3064\u3044\u3066\u30018\u306b\u8a18\u8f09\u306e\u7a93\u53e3\u306b\u554f\u3044\u5408\u308f\u305b\u3044\u305f\u3060\u3044\u305f\u5834\u5408\u3001\u5f53\u793e\u306f\u500b\u4eba\u60c5\u5831\u4fdd\u8b77\u6cd5\u306e\u5b9a\u3081\u306b\u5f93\u3044\u3001\u304a\u5ba2\u69d8\u3054\u672c\u4eba\u306e\u6c42\u3081\u306b\u5fdc\u3058\u3066\u9045\u6ede\u306a\u304f\u56de\u7b54\u3092\u884c\u3044\u307e\u3059\u3002',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '6 \u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306e\u5909\u66f4',
                    (0, v.jsx)('br', {}),
                    '\u672c\u30dd\u30ea\u30b7\u30fc\u5185\u5bb9\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u901a\u77e5\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3082\u306e\u3068\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u5f53\u793e\u304c\u5225\u9014\u5b9a\u3081\u308b\u5834\u5408\u3092\u9664\u3044\u3066\u3001\u5909\u66f4\u5f8c\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306f\u3001\u672c\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u63b2\u8f09\u3057\u305f\u3068\u304d\u304b\u3089\u52b9\u529b\u3092\u751f\u3058\u308b\u3082\u306e\u3068\u3057\u307e\u3059\u3002',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '7 \u5f53\u793e\u540d\u79f0\u53ca\u3073\u4ee3\u8868\u8005\u6c0f\u540d',
                    (0, v.jsx)('br', {}),
                    '\u4f1a\u793e\u540d\uff1a\u682a\u5f0f\u4f1a\u793e\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba',
                    (0, v.jsx)('br', {}),
                    '\u4ee3\u8868\u53d6\u7de0\u5f79\uff1a\u6df1\u677e\u4e00\u5e73',
                    (0, v.jsx)('br', {}),
                    '\u4f4f\u6240\uff1a\u5343\u8449\u770c\u6d66\u5b89\u5e02\u5317\u68041-1-3 \u67f3\u5185\u30d3\u30eb 3\u968e',
                  ],
                }),
                (0, v.jsxs)('p', {
                  className: se.component__text,
                  children: [
                    '8 \u554f\u3044\u5408\u308f\u305b\u7a93\u53e3',
                    (0, v.jsx)('br', {}),
                    '\u672c\u30dd\u30ea\u30b7\u30fc\u306b\u95a2\u3059\u308b\u304a\u554f\u3044\u5408\u308f\u305b\u306f\u3001\u672c\u30da\u30fc\u30b8\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002',
                  ],
                }),
              ],
            }),
          })
        },
        ce = a(50604),
        oe = a(34155),
        pe = ['match'],
        de = ['label', 'value'],
        _e = ['formrunId']
      function me(e, t) {
        var a = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          t &&
            (l = l.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, l)
        }
        return a
      }
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? me(Object(a), !0).forEach(function (t) {
                ;(0, E.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : me(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var be = oe.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY,
        he = function (e) {
          var t = e.id,
            a = e.items,
            l = e.action,
            n = e.method,
            i = void 0 === n ? 'post' : n,
            c = e.privacyPolicy,
            o = e.reCaptcha,
            _ = void 0 !== o && o,
            m = e.onSubmit,
            u = e.className,
            b = e.style,
            h = e['data-aos'],
            f = (0, ee.cI)({ shouldUnregister: !1, mode: 'onBlur' }),
            g = f.register,
            j = f.trigger,
            y = f.getValues,
            w = f.reset,
            N = f.setValue,
            k = f.formState.errors,
            A = (0, r.useState)(!1),
            O = A[0],
            C = A[1],
            S = (0, r.useState)(!1),
            E = S[0],
            P = S[1],
            I = (0, p.C)(d.WS),
            U = (0, r.useRef)(null)
          function M() {
            return (M = (0, J.Z)(
              $().mark(function e(l) {
                var n
                return $().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = [].concat((0, Y.Z)(a), [
                            _ ? { name: 're-captcha' } : {},
                          ])),
                          (e.next = 3),
                          Promise.all(
                            n.map(function (e) {
                              return j(e.name)
                            })
                          )
                        )
                      case 3:
                        if (
                          !e.sent.every(function (e) {
                            return e
                          })
                        ) {
                          e.next = 18
                          break
                        }
                        if ((C(!0), !m)) {
                          e.next = 15
                          break
                        }
                        return (e.next = 9), m(l, y())
                      case 9:
                        return C(!1), P(!0), w(), e.abrupt('return', !1)
                      case 15:
                        return e.abrupt('return', !0)
                      case 16:
                        e.next = 21
                        break
                      case 18:
                        return (
                          s.OK.scrollTo(t, {
                            duration: 500,
                            smooth: !0,
                            offset: -I,
                          }),
                          l.preventDefault(),
                          e.abrupt('return', !1)
                        )
                      case 21:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )).apply(this, arguments)
          }
          function D(e) {
            if (e) {
              var t = e.match,
                a = ue({}, (0, Q.Z)(e, pe))
              return (
                t &&
                  (a.validate = function (e) {
                    return e === y(t.value) || t.message
                  }),
                a
              )
            }
          }
          return (
            (0, r.useEffect)(
              function () {
                _ && g('re-captcha', { required: !0 })
              },
              [_]
            ),
            (0, v.jsxs)('div', {
              className: x()(ce.component, u, E && ce['is-complete']),
              'data-aos': h,
              children: [
                _ &&
                  (0, v.jsx)(ae.default, {
                    src: 'https://www.google.com/recaptcha/api.js',
                  }),
                !E &&
                  (0, v.jsxs)('form', {
                    ref: U,
                    className: x()(ce.component, u),
                    onSubmit: function (e) {
                      return M.apply(this, arguments)
                    },
                    id: t,
                    style: b,
                    action: l,
                    method: i,
                    children: [
                      O &&
                        (0, v.jsx)('div', {
                          className: ce.loading,
                          children: (0, v.jsx)(re, {
                            className: ce.loading__icon,
                            color: ce['palette-deepblue'],
                          }),
                        }),
                      (0, v.jsx)('div', {
                        className: ce.component__contents,
                        children: a.map(function (e) {
                          var a,
                            l = e.name,
                            n = e.type,
                            r = e.label,
                            s = e.attributes,
                            i = e.validation,
                            c = ''.concat(l, '-').concat(t)
                          return (0, v.jsxs)(
                            'div',
                            {
                              className: x()(ce.component__item, ce.item),
                              children: [
                                (0, v.jsxs)('label', {
                                  htmlFor: c,
                                  className: ce.item__head,
                                  children: [
                                    (0, v.jsx)('span', {
                                      className: ce.item__label,
                                      children: r,
                                    }),
                                    (null === i || void 0 === i
                                      ? void 0
                                      : i.required) &&
                                      (0, v.jsx)('span', {
                                        className: ce.item__required,
                                        children: '\u5fc5\u9808',
                                      }),
                                  ],
                                }),
                                (0, v.jsxs)('div', {
                                  className: ce.item__body,
                                  children: [
                                    (function () {
                                      switch (n) {
                                        case 'selectbox':
                                          var t = s
                                          return (0, v.jsxs)('div', {
                                            className: ce['item__select-wrap'],
                                            children: [
                                              (0, v.jsx)(
                                                'select',
                                                ue(
                                                  ue(
                                                    ue({ id: c }, g(l, D(i))),
                                                    ue({}, t)
                                                  ),
                                                  {},
                                                  {
                                                    children: e.options.map(
                                                      function (e) {
                                                        var t = e.label,
                                                          a = e.value,
                                                          l = (0, Q.Z)(e, de)
                                                        return (0, v.jsx)(
                                                          'option',
                                                          ue(
                                                            ue(
                                                              { value: a },
                                                              ue({}, l)
                                                            ),
                                                            {},
                                                            {
                                                              children: e.label,
                                                            }
                                                          ),
                                                          t
                                                        )
                                                      }
                                                    ),
                                                  }
                                                )
                                              ),
                                              (0, v.jsx)('i', {
                                                className:
                                                  ce['item__select-icon'],
                                              }),
                                            ],
                                          })
                                        case 'textarea':
                                          var a = s
                                          return (0, v.jsx)(
                                            'textarea',
                                            ue(
                                              ue({ id: c }, g(l, D(i))),
                                              ue({}, a)
                                            )
                                          )
                                        default:
                                          var r = s
                                          return (0, v.jsx)(
                                            'input',
                                            ue(
                                              ue({ id: c }, g(l, D(i))),
                                              ue({}, r)
                                            )
                                          )
                                      }
                                    })(),
                                    k[l] &&
                                      (0, v.jsx)('span', {
                                        className: ce.item__error,
                                        children:
                                          null === (a = k[l]) || void 0 === a
                                            ? void 0
                                            : a.message,
                                      }),
                                  ],
                                }),
                              ],
                            },
                            l
                          )
                        }),
                      }),
                      'block' === c.type &&
                        (0, v.jsx)(ie, {
                          className: ce['component__privacy-policy'],
                        }),
                      (0, v.jsxs)('div', {
                        className: x()(
                          ce['component__policy-check'],
                          ce['policy-check']
                        ),
                        children: [
                          (0, v.jsx)(
                            'input',
                            ue(
                              {
                                id: 'privacy-policy-'.concat(t),
                                type: 'checkbox',
                                required: !0,
                              },
                              g('privacy-policy', {
                                required: {
                                  value: !0,
                                  message:
                                    '\u5fc5\u9808\u9805\u76ee\u3067\u3059',
                                },
                              })
                            )
                          ),
                          (0, v.jsx)('label', {
                            htmlFor: 'privacy-policy-'.concat(t),
                            className: ce['policy-check__label'],
                            children: (function () {
                              switch (c.type) {
                                case 'external':
                                  return (0, v.jsxs)(v.Fragment, {
                                    children: [
                                      '\u300c',
                                      (0, v.jsx)('a', {
                                        href: c.url,
                                        target: '_blank',
                                        rel: 'noreferrer',
                                        children:
                                          '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc',
                                      }),
                                      '\u300d\u306b\u540c\u610f\u3057\u307e\u3059',
                                    ],
                                  })
                                case 'internal':
                                  return (0, v.jsxs)(v.Fragment, {
                                    children: [
                                      (0, v.jsxs)(te.default, {
                                        href: c.url,
                                        children: [
                                          '\u300c',
                                          (0, v.jsx)('a', {
                                            children:
                                              '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc',
                                          }),
                                          '\u300d',
                                        ],
                                      }),
                                      '\u306b\u540c\u610f\u3057\u307e\u3059',
                                    ],
                                  })
                                case 'block':
                                default:
                                  return '\u300c\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u300d\u306b\u540c\u610f\u3057\u307e\u3059'
                              }
                            })(),
                          }),
                        ],
                      }),
                      be &&
                        _ &&
                        (0, v.jsxs)('div', {
                          className: x()(ce['component__re-captcha']),
                          children: [
                            (0, v.jsx)(le.Z, {
                              sitekey: be,
                              onChange: function (e) {
                                e && N('re-captcha', e)
                              },
                              onExpired: function () {
                                N('re-captcha', '')
                              },
                              onErrored: function () {
                                N('re-captcha', '')
                              },
                            }),
                            k['re-captcha'] &&
                              (0, v.jsx)('span', {
                                className: ce.item__error,
                                children:
                                  '\u4e0a\u8a18\u9805\u76ee\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044\u3002',
                              }),
                          ],
                        }),
                      (0, v.jsx)('div', {
                        className: ce.component__buttons,
                        children: (0, v.jsx)(F.h, {
                          className: ce.component__button,
                          type: 'submit',
                          children: '\u9001\u4fe1',
                        }),
                      }),
                    ],
                  }),
              ],
            })
          )
        },
        fe = function (e) {
          var t = e.formrunId,
            a = (0, Q.Z)(e, _e),
            l = (0, r.useState)(!1),
            n = l[0],
            s = l[1],
            i = (0, r.useState)(!1),
            c = i[0],
            o = i[1]
          function p() {
            window.Formrun._reset(), window.Formrun.init('.formrun'), s(!0)
          }
          return (
            (0, r.useEffect)(function () {
              !(function () {
                if (window.Formrun) return p(), !1
                new Promise(function (e, t) {
                  var a = document.createElement('script')
                  a.addEventListener('load', e),
                    a.addEventListener('error', t),
                    (a.src = 'https://sdk.form.run/js/v2/formrun.js'),
                    document.head.appendChild(a)
                })
                  .then(function () {
                    p()
                  })
                  .catch(function (e) {
                    console.error(e), o(!0)
                  })
              })()
            }, []),
            c
              ? (0, v.jsxs)('div', {
                  className: ce.error,
                  children: [
                    (0, v.jsx)('p', {
                      className: ce.error__title,
                      children: '\u901a\u4fe1\u30a8\u30e9\u30fc',
                    }),
                    (0, v.jsxs)('p', {
                      className: ce.error__text,
                      children: [
                        '\u901a\u4fe1\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002',
                        (0, v.jsx)('br', {}),
                        '\u6050\u308c\u5165\u308a\u307e\u3059\u304c\u753b\u9762\u3092\u8aad\u307f\u8fbc\u307f\u76f4\u3057\u3066\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002',
                        (0, v.jsx)('br', {}),
                        '\u305d\u308c\u3067\u3082\u6539\u5584\u3055\u308c\u306a\u3044\u5834\u5408\u3001\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u306e\u53ef\u80fd\u6027\u304c\u3054\u3056\u3044\u307e\u3059\u306e\u3067',
                        (0, v.jsx)('br', {}),
                        '\u6050\u308c\u5165\u308a\u307e\u3059\u304c\u6642\u9593\u3092\u304a\u3044\u3066\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002',
                      ],
                    }),
                  ],
                })
              : (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(
                      he,
                      ue(
                        {
                          action: 'https://form.run/api/v1/r/'.concat(t),
                          method: 'post',
                        },
                        ue({}, a)
                      )
                    ),
                    !n &&
                      (0, v.jsx)('div', {
                        className: ce.loading,
                        children: (0, v.jsx)(re, {
                          className: ce.loading__icon,
                          color: ce['palette-deepblue'],
                        }),
                      }),
                  ],
                })
          )
        },
        ge = a(89132),
        xe =
          '\u3053\u306e\u9805\u76ee\u306f\u5165\u529b\u5fc5\u9808\u3067\u3059',
        je =
          '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306e\u5f62\u5f0f\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093',
        ye = {
          num: /^[0-9]+$/,
          alphanumeric: /^[0-9a-zA-Z]+$/,
          hiragana: /^[\u3041-\u3093\u30fc\u3000]*$/,
          fullKana: /^[\u30a1-\u30f6\u30fc\u3000]*$/,
          halfKana: /^[\uff66-\uff9f]*$/,
          tel: /^(0{1}\d{9,10})$/,
          email:
            /^([\w!#$%&'*+\-\/=?^`{|}~]+(\.[\w!#$%&'*+\-\/=?^`{|}~]+)*|"([\w!#$%&'*+\-\/=?^`{|}~. ()<>\[\]:;@,]|\\[\\"])+")@(([a-zA-Z\d\-]+\.)+[a-zA-Z]+|\[(\d{1,3}(\.\d{1,3}){3}|IPv6:[\da-fA-F]{0,4}(:[\da-fA-F]{0,4}){1,5}(:\d{1,3}(\.\d{1,3}){3}|(:[\da-fA-F]{0,4}){0,2}))\])$/,
          password:
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z0-9!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]{8,16}$/,
          dependent_char:
            /^(?!.*(\u2460|\u2461|\u2462|\u2463|\u2464|\u2465|\u2466|\u2467|\u2468|\u2469|\u246a|\u246b|\u246c|\u246d|\u246f|\u2470|\u2471|\u2472|\u2473|\u2160|\u2161|\u2162|\u2163|\u2164|\u2165|\u2166|\u2167|\u2168|\u2169|\u3349|\u3314|\u3322|\u334d|\u3318|\u3327|\u3303|\u3336|\u3351|\u3357|\u330d|\u3326|\u3323|\u332b|\u334a|\u333b|\u339c|\u339d|\u339e|\u338e|\u338f|\u33c4|\u33a1|\u337b|\u301d|\u301f|\u2116|\u33cd|\u2121|\u32a4|\u32a5|\u32a6|\u32a7|\u32a8|\u3231|\u3232|\u3239|\u337e|\u337d|\u337c|\u222e|\u221f|\u22bf|\u2170|\u2171|\u2172|\u2173|\u2174|\u2175|\u2176|\u2177|\u2178|\u2179|\uffe2|\uffe4|[\uD800-\uDBFF][\uDC00-\uDFFF])).*$/,
          url: /^(https?)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/,
        },
        ve = a(34155).env.NEXT_PUBLIC_FORMRUN_ID,
        we = [
          {
            name: 'company-name',
            label: '\u4f1a\u793e\u540d',
            type: 'text',
            attributes: {
              placeholder:
                '\u4f8b\uff09\u682a\u5f0f\u4f1a\u793e\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba',
            },
          },
          {
            name: 'your-name',
            label: '\u304a\u540d\u524d',
            type: 'text',
            attributes: { placeholder: '\u4f8b\uff09\u5c71\u7530\u592a\u90ce' },
            validation: { required: { value: !0, message: xe } },
          },
          {
            name: 'email',
            label: '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9',
            type: 'email',
            attributes: { placeholder: 'mail@example.co.jp' },
            validation: {
              required: { value: !0, message: xe },
              pattern: { value: ye.email, message: je },
            },
          },
          {
            name: 'email-confirm',
            label:
              '\u78ba\u8a8d\u7528\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9',
            type: 'email',
            attributes: { placeholder: 'mail@example.co.jp' },
            validation: {
              required: { value: !0, message: xe },
              pattern: { value: ye.email, message: je },
              match: {
                value: 'email',
                message:
                  '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093',
              },
            },
          },
          {
            name: 'subject',
            label: '\u304a\u554f\u3044\u5408\u308f\u305b\u9805\u76ee',
            type: 'selectbox',
            attributes: { defaultValue: '' },
            options: [
              {
                label: '\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044',
                value: '',
              },
              {
                label:
                  '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\u306b\u95a2\u3057\u3066',
                value:
                  '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\u306b\u95a2\u3057\u3066',
              },
              {
                label: 'SES\u306b\u95a2\u3057\u3066',
                value: 'SES\u306b\u95a2\u3057\u3066',
              },
              {
                label:
                  '\u30a8\u30f3\u30b8\u30cb\u30a2\u69d8\u306e\u3054\u767b\u9332',
                value:
                  '\u30a8\u30f3\u30b8\u30cb\u30a2\u69d8\u306e\u3054\u767b\u9332',
              },
              { label: '\u305d\u306e\u4ed6', value: '\u305d\u306e\u4ed6' },
            ],
          },
          {
            name: 'detail',
            label: '\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9',
            type: 'textarea',
            attributes: {
              placeholder:
                '\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9\u3092\u5165\u529b\u304f\u3060\u3055\u3044\u3002',
            },
          },
        ],
        Ne = function (e) {
          var t = e.className,
            a = e.style,
            l = e.complete
          return (0, v.jsx)('div', {
            id: 'contact',
            className: x()(ge.component, t),
            style: a,
            children: (0, v.jsx)('div', {
              className: 'l-wrap',
              children: (0, v.jsxs)('div', {
                className: 'l-inner',
                children: [
                  (0, v.jsx)(I, {
                    className: x()(ge.component__header, ge.header),
                    text: l
                      ? '\u9001\u4fe1\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002'
                      : 'CONTACT',
                    symbolColor: 'gradient',
                    textColor: ge['palette-deepblue'],
                    'data-aos': 'fade-up',
                    children: l
                      ? (0, v.jsxs)('p', {
                          className: ge.header__text,
                          children: [
                            '\u304a\u554f\u3044\u5408\u308f\u305b\u9802\u304d\u8aa0\u306b\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3057\u305f\u3002',
                            (0, v.jsx)('br', {}),
                            '\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3001\u62c5\u5f53\u8005\u3088\u308a\u9023\u7d61\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002',
                            (0, v.jsx)('br', {}),
                            '\u4eca\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u3044\u305f\u3060\u3051\u307e\u3059\u3088\u3046\u3001\u5b9c\u3057\u304f\u304a\u9858\u3044\u7533\u3057\u4e0a\u3052\u307e\u3059\u3002',
                          ],
                        })
                      : (0, v.jsxs)('p', {
                          className: ge.header__text,
                          children: [
                            '\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u3067\u304a\u60a9\u307f\u306e\u4f01\u696d\u69d8\u3001\u5f0a\u793e\u304c\u300c\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\u300d\u3067\u89e3\u6c7a\u3044\u305f\u3057\u307e\u3059\u3002',
                            (0, v.jsx)('br', {
                              className: 'hidden tablet:inline-block',
                            }),
                            '\u307e\u305f\u3001\u30a8\u30f3\u30b8\u30cb\u30a2\u7686\u69d8\u3078\u306e\u6848\u4ef6\u7d39\u4ecb\u3082\u3053\u3061\u3089\u304b\u3089\u53d7\u3051\u4ed8\u3051\u3066\u304a\u308a\u307e\u3059\u3002',
                            (0, v.jsx)('br', {}),
                            '\u307e\u305a\u306f\u304a\u6c17\u8efd\u306b\u3054\u76f8\u8ac7\u4e0b\u3055\u3044\u3002',
                          ],
                        }),
                  }),
                  ve &&
                    !l &&
                    (0, v.jsx)(fe, {
                      id: 'formrun',
                      items: we,
                      reCaptcha: !0,
                      privacyPolicy: { type: 'block' },
                      formrunId: ve,
                      'data-aos': 'fade-up',
                    }),
                ],
              }),
            }),
          })
        },
        ke = a(84646),
        Ae = function () {
          var e = (function () {
              var e = (0, n.useRouter)()
              return [
                (function (e) {
                  var t
                  return null !== (t = e.split('#')[1]) && void 0 !== t ? t : ''
                })(e.asPath),
                (0, r.useCallback)(function (t) {
                  e.replace({ hash: t }, void 0, { shallow: !0 })
                }, []),
              ]
            })(),
            t = (0, l.Z)(e, 2),
            a = t[0],
            f = t[1],
            g = (0, p.C)(d.WS),
            x = (0, n.useRouter)(),
            j = (0, o.F)(),
            y = (0, r.useState)(),
            N = y[0],
            k = y[1],
            A = (0, i.YD)(ke.P9),
            O = A.ref,
            C = A.inView
          return (
            (0, r.useEffect)(
              function () {
                var e = { duration: 500, smooth: !0, offset: -g },
                  t = x.query.complete
                'string' === typeof t &&
                  'true' === t &&
                  ('' !== document.referrer &&
                  document.referrer.indexOf(window.location.origin) > -1
                    ? (s.OK.scrollTo('contact', e),
                      k(!0),
                      history.replaceState('', '', '/'))
                    : x.replace('/')),
                  a && (s.OK.scrollTo(a, e), f(''))
              },
              [x.query]
            ),
            (0, v.jsxs)('div', {
              className: 'l-page',
              children: [
                (0, v.jsx)(_.H, {
                  title:
                    '\u5e45\u5e83\u3044IT\u4e8b\u696d\u3067\u4fa1\u5024\u3092\u5171\u306b\u5275\u308a\u7d9a\u3051\u308b',
                  url: ke.RH.URL,
                }),
                (0, v.jsx)(m.h, { overBorder: C }),
                (0, v.jsxs)(c.Parallax, {
                  strength: 'pc' === j ? 7e3 : 4500,
                  contentClassName: 'l-gradient',
                  className: 'l-parallax is-top',
                  children: [
                    (0, v.jsx)(w, {}),
                    (0, v.jsx)(c.Background, {
                      className: 'l-parallax__background',
                      children: (0, v.jsx)(h.q, {}),
                    }),
                    (0, v.jsxs)('main', {
                      className: 'l-main',
                      ref: O,
                      children: [
                        (0, v.jsx)(S, {}),
                        (0, v.jsx)(Z, {}),
                        (0, v.jsx)(z, {}),
                        (0, v.jsx)(K, {}),
                        (0, v.jsx)(Ne, { complete: N }),
                        (0, v.jsx)(b.I, {}),
                      ],
                    }),
                  ],
                }),
                (0, v.jsx)(u.$, {}),
              ],
            })
          )
        }
    },
    84646: function (e, t, a) {
      'use strict'
      a.d(t, {
        RH: function () {
          return l
        },
        P9: function () {
          return n
        },
      })
      var l = {
          URL: a(34155).env.NEXT_PUBLIC_SITE_URL || 'https://',
          TWITTER: 'https://twitter.com/yumelab1214',
          FACEBOOK: 'https://www.facebook.com/yumelab.co.jp/',
        },
        n = { root: null, rootMargin: '0px 0px -100%', threshold: 0 }
    },
    45301: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return a(45655)
        },
      ])
    },
    58174: function (e) {
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
        component: 'AnimationParticles_component__1pmHX',
        fadeIn: 'AnimationParticles_fadeIn__3XSGS',
        component__particles: 'AnimationParticles_component__particles__PEV7-',
        component__canvas: 'AnimationParticles_component__canvas__3W_Ga',
        showWord: 'AnimationParticles_showWord__6qwYG',
        fadeUp: 'AnimationParticles_fadeUp__TtkN4',
      }
    },
    22608: function (e) {
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
        component: 'ToTopButton_component__2F-0K',
        showWord: 'ToTopButton_showWord__18fVy',
        fadeUp: 'ToTopButton_fadeUp__12BfA',
        fadeIn: 'ToTopButton_fadeIn__17NIx',
      }
    },
    52671: function (e) {
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
        component: 'FadeContent_component__3zZAe',
        'is-visible': 'FadeContent_is-visible__KZ0Ha',
        fadein: 'FadeContent_fadein__27w29',
        'is-hidden': 'FadeContent_is-hidden__1MC8g',
        fadeout: 'FadeContent_fadeout__3RqwO',
        showWord: 'FadeContent_showWord__LN7Aj',
        fadeUp: 'FadeContent_fadeUp__2c_0Z',
        fadeIn: 'FadeContent_fadeIn__3G8FX',
      }
    },
    50604: function (e) {
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
        component: 'Form_component__2dLRJ',
        component__item: 'Form_component__item__rcT6A',
        component__contents: 'Form_component__contents__3_POZ',
        'component__policy-check': 'Form_component__policy-check__2xlte',
        component__buttons: 'Form_component__buttons__1ExwF',
        component__button: 'Form_component__button__1Jwwx',
        'component__re-captcha': 'Form_component__re-captcha__1SLuQ',
        item__error: 'Form_item__error__3KsK7',
        'component__privacy-policy': 'Form_component__privacy-policy__2FFER',
        item__head: 'Form_item__head__7VEIo',
        item__label: 'Form_item__label__381xJ',
        item__required: 'Form_item__required__38jZr',
        item__body: 'Form_item__body__36mbm',
        item__text: 'Form_item__text__2_07t',
        'item__select-wrap': 'Form_item__select-wrap__1n9ck',
        'item__select-icon': 'Form_item__select-icon__1uri6',
        item: 'Form_item__2-a_z',
        'policy-check': 'Form_policy-check__1s7cv',
        'policy-check__label': 'Form_policy-check__label__2ly29',
        loading: 'Form_loading__3wTsu',
        loading__icon: 'Form_loading__icon__3FrNs',
        showWord: 'Form_showWord__EL-Mu',
        fadeUp: 'Form_fadeUp__2oHUO',
        fadeIn: 'Form_fadeIn__29gbw',
      }
    },
    73352: function (e) {
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
        component: 'PrivacyPolicyBlock_component__2U5aU',
        component__inner: 'PrivacyPolicyBlock_component__inner__EGCti',
        component__text: 'PrivacyPolicyBlock_component__text__2j_Mf',
        showWord: 'PrivacyPolicyBlock_showWord__1lXB_',
        fadeUp: 'PrivacyPolicyBlock_fadeUp__1gRtb',
        fadeIn: 'PrivacyPolicyBlock_fadeIn__31_cv',
      }
    },
    81265: function (e) {
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
        component: 'ColumnHeading_component__1QYMb',
        'is-active': 'ColumnHeading_is-active__CazGN',
        component__border: 'ColumnHeading_component__border__3PTgm',
        component__inner: 'ColumnHeading_component__inner__1tY2-',
        component__english: 'ColumnHeading_component__english__3QUCC',
        component__japanese: 'ColumnHeading_component__japanese__1DVzX',
        showWord: 'ColumnHeading_showWord__1y1-2',
        fadeUp: 'ColumnHeading_fadeUp__TjQuG',
        fadeIn: 'ColumnHeading_fadeIn__3Wc-A',
      }
    },
    4336: function (e) {
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
        component: 'ColumnHeadingForSection_component__1EZ6N',
        showWord: 'ColumnHeadingForSection_showWord__1GqZ9',
        fadeUp: 'ColumnHeadingForSection_fadeUp__2s6ug',
        fadeIn: 'ColumnHeadingForSection_fadeIn__18YVP',
      }
    },
    30352: function (e) {
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
        component: 'WithSymbolHeading_component__2OQLN',
        component__symbol: 'WithSymbolHeading_component__symbol__2RJ9u',
        component__title: 'WithSymbolHeading_component__title__2XhAv',
        showWord: 'WithSymbolHeading_showWord__1zLMs',
        fadeUp: 'WithSymbolHeading_fadeUp__3NYs4',
        fadeIn: 'WithSymbolHeading_fadeIn__yZi5Q',
      }
    },
    55234: function (e) {
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
        showWord: 'Loading_showWord__3L6eT',
        fadeUp: 'Loading_fadeUp__cK_D-',
        fadeIn: 'Loading_fadeIn__1tR8L',
      }
    },
    89819: function (e) {
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
        showWord: 'Logo_showWord__3waRa',
        fadeUp: 'Logo_fadeUp__2MVuW',
        fadeIn: 'Logo_fadeIn__382HH',
      }
    },
    37699: function (e) {
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
        component: 'StickyContent_component__1fz9w',
        'is-fixed': 'StickyContent_is-fixed__2UsUe',
        'is-end': 'StickyContent_is-end__Gj_qx',
        showWord: 'StickyContent_showWord__2gp4x',
        fadeUp: 'StickyContent_fadeUp__3FtaF',
        fadeIn: 'StickyContent_fadeIn__2tKaz',
      }
    },
    33807: function (e) {
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
        component: 'About_component__1_s4S',
        component__inner: 'About_component__inner__18cvN',
        component__text: 'About_component__text__2hA3D',
        component__list: 'About_component__list__3zfNN',
        component__item: 'About_component__item__3azvR',
        item: 'About_item__2ppR1',
        item__inner: 'About_item__inner__1wtiw',
        item__name: 'About_item__name__3m84j',
        item__description: 'About_item__description__2OlFH',
        item__image: 'About_item__image__1EBIQ',
        item__decoration: 'About_item__decoration__3vAST',
        showWord: 'About_showWord__9GeVH',
        fadeUp: 'About_fadeUp__-lSYx',
        fadeIn: 'About_fadeIn__2c7Lz',
      }
    },
    13195: function (e) {
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
        component: 'Company_component__3BofS',
        component__inner: 'Company_component__inner__3pyAB',
        component__header: 'Company_component__header__1Quwg',
        'component__column-header': 'Company_component__column-header__35rDS',
        component__map: 'Company_component__map__JXkeg',
        component__list: 'Company_component__list__1bsVQ',
        component__item: 'Company_component__item__O7-Ko',
        item: 'Company_item__C2JlN',
        item__label: 'Company_item__label__2UQ-c',
        item__body: 'Company_item__body__2Q3iG',
        showWord: 'Company_showWord__3U7TV',
        fadeUp: 'Company_fadeUp__2JqPM',
        fadeIn: 'Company_fadeIn__2UDnr',
      }
    },
    89132: function (e) {
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
        component: 'Contact_component__1En7F',
        component__header: 'Contact_component__header__38mL3',
        header__text: 'Contact_header__text__2db1s',
        showWord: 'Contact_showWord__3QJGn',
        fadeUp: 'Contact_fadeUp__1GYHq',
        fadeIn: 'Contact_fadeIn__2rWSj',
      }
    },
    94620: function (e) {
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
        component: 'MainVisual_component__25FxW',
        component__inner: 'MainVisual_component__inner__3F78d',
        component__header: 'MainVisual_component__header__27LXt',
        component__object: 'MainVisual_component__object__3BYCg',
        component__scroll: 'MainVisual_component__scroll__3jUdt',
        header: 'MainVisual_header__3FxsX',
        header__title: 'MainVisual_header__title__2JLO9',
        showWord: 'MainVisual_showWord__3Uvtw',
        'header__sub-title': 'MainVisual_header__sub-title__36UCh',
        fadeUp: 'MainVisual_fadeUp__XS9uF',
        header__text: 'MainVisual_header__text__27VBI',
        object: 'MainVisual_object__3-eD8',
        object__circle: 'MainVisual_object__circle__3C4qC',
        'object__circle--2': 'MainVisual_object__circle--2__1yyz7',
        'object__circle--1': 'MainVisual_object__circle--1__3revI',
        object__image: 'MainVisual_object__image__1iylP',
        zoomInSp: 'MainVisual_zoomInSp__34jKR',
        zoomInPc: 'MainVisual_zoomInPc__2qZ_Q',
        object__outline: 'MainVisual_object__outline__1HH4g',
        roundCircle: 'MainVisual_roundCircle__28GlK',
        alternateStroke: 'MainVisual_alternateStroke__3oOq9',
        scroll: 'MainVisual_scroll__8p4cK',
        leadScroll: 'MainVisual_leadScroll__1zEfZ',
        scroll__text: 'MainVisual_scroll__text__3OQx_',
        fadeIn: 'MainVisual_fadeIn__12A0B',
      }
    },
    78081: function (e) {
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
        component: 'Mission_component__RM9hy',
        component__inner: 'Mission_component__inner__3DIMu',
        component__header: 'Mission_component__header__2BReJ',
        'component__column-header': 'Mission_component__column-header__2v-av',
        item: 'Mission_item__1QV4_',
        item__inner: 'Mission_item__inner__2Uo31',
        item__header: 'Mission_item__header__2WBFW',
        item__image: 'Mission_item__image__EUhkL',
        item__contents: 'Mission_item__contents__2-UMN',
        item__title: 'Mission_item__title__1HIaR',
        item__svg: 'Mission_item__svg__1zrJ3',
        item__content: 'Mission_item__content__1IEVd',
        item__text: 'Mission_item__text__2Qyff',
        item__description: 'Mission_item__description__120sj',
        svg: 'Mission_svg__3I0z1',
        showWord: 'Mission_showWord__3Kx4f',
        fadeUp: 'Mission_fadeUp__15uRZ',
        fadeIn: 'Mission_fadeIn__btS-C',
      }
    },
    84305: function (e) {
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
        component: 'Service_component__pU63Z',
        component__inner: 'Service_component__inner__2g45e',
        component__header: 'Service_component__header__2yIUc',
        'component__column-header': 'Service_component__column-header__16X-A',
        component__item: 'Service_component__item__2uvqJ',
        component__image: 'Service_component__image__3JqnD',
        header__text: 'Service_header__text__3pmsD',
        item: 'Service_item__AxuJP',
        item__header: 'Service_item__header__10fBK',
        item__description: 'Service_item__description__28dzA',
        'item__button-wrap': 'Service_item__button-wrap__1E6Tp',
        item__title: 'Service_item__title__2j2TJ',
        'item__sub-title': 'Service_item__sub-title__3MShn',
        item__button: 'Service_item__button__PLowM',
        showWord: 'Service_showWord__1Insx',
        fadeUp: 'Service_fadeUp__3Yecd',
        fadeIn: 'Service_fadeIn__17_9U',
      }
    },
  },
  function (e) {
    e.O(0, [57, 924, 798, 495, 774, 888, 179], function () {
      return (t = 45301), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
