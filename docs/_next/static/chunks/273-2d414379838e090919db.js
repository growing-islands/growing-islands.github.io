;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [273],
  {
    10329: function (e, t, a) {
      'use strict'
      a.d(t, {
        U: function () {
          return d
        },
      })
      var n = a(80318),
        l = a(67294),
        o = a(94184),
        c = a.n(o),
        r = a(56180),
        p = a(89211),
        s = a(17114),
        i = a(85893),
        d = function (e) {
          var t = e.data,
            a = e.opened,
            o = void 0 !== a && a,
            d = e.className,
            _ = e.style,
            m = e['data-aos'],
            u = (0, p.Z)(!1),
            f = (0, n.Z)(u, 2),
            b = f[0],
            g = f[1]
          return (
            (0, l.useEffect)(
              function () {
                b !== o && g(o)
              },
              [o]
            ),
            (0, i.jsx)('div', {
              className: c()(s.component, d),
              onClick: g,
              'data-aos': m,
              style: _,
              children: (0, i.jsxs)('div', {
                className: s.component__inner,
                children: [
                  (0, i.jsxs)('div', {
                    className: s.component__head,
                    children: [
                      (0, i.jsx)('span', {
                        className: s.component__label,
                        children: 'Q',
                      }),
                      (0, i.jsx)('p', {
                        className: s.component__question,
                        children: t.head,
                      }),
                      (0, i.jsx)('button', {
                        className: c()(s.component__icon, b && s['is-opened']),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(r.Collapse, {
                    theme: {
                      collapse: s.component__toggle,
                      content: s.component__body,
                    },
                    isOpened: b,
                    children: [
                      (0, i.jsx)('span', {
                        className: s.component__label,
                        children: 'A',
                      }),
                      (0, i.jsx)('p', {
                        className: s.component__answer,
                        children: t.body,
                      }),
                    ],
                  }),
                ],
              }),
            })
          )
        }
    },
    84150: function (e, t, a) {
      'use strict'
      a.d(t, {
        I: function () {
          return g
        },
      })
      var n = a(92809),
        l = a(67294),
        o = a(94700),
        c = a(84956),
        r = a(13340),
        p = a(67597),
        s = a(94184),
        i = a.n(s),
        d = a(66261),
        _ = a(22608),
        m = a(85893),
        u = function (e) {
          var t = e.className,
            a = e.style
          return (0, m.jsx)('button', {
            className: i()(_.component, t),
            style: a,
            onClick: function () {
              d.NY.scrollToTop({ smooth: !0, duration: 1e3 })
            },
          })
        }
      function f(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? f(Object(a), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : f(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var g = function (e) {
        var t = e.className,
          a = e.style,
          n = (0, o.Z)(0, 0).height,
          s = (0, c.Z)(),
          i = (0, l.useState)(!1),
          d = i[0],
          _ = i[1]
        return s() && n > 0
          ? (0, m.jsx)(r.$, {
              className: t,
              fixedTop: n - 100,
              absoluteBottom: 50,
              style: b(b({}, a), {}, { left: 'auto', right: '68px' }),
              onUntil: function () {
                return _(!1)
              },
              onFixed: function () {
                return _(!0)
              },
              children: (0, m.jsx)(p.V, {
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
          return r
        },
      })
      var n = a(94184),
        l = a.n(n),
        o = a(52671),
        c = a(85893),
        r = function (e) {
          var t = e.children,
            a = e.className,
            n = e.style,
            r = e.visible
          return (0, c.jsx)('div', {
            className: l()(
              o.component,
              r ? o['is-visible'] : o['is-hidden'],
              a && a
            ),
            style: n,
            children: t,
          })
        }
    },
    93722: function (e, t, a) {
      'use strict'
      a.d(t, {
        D: function () {
          return b
        },
      })
      var n = a(92809),
        l = a(10219),
        o = a(94184),
        c = a.n(o),
        r = a(80318),
        p = a(70131),
        s = a(81265),
        i = a(85893),
        d = function (e) {
          var t = e.className,
            a = e.style,
            n = e.texts,
            l = e.textColor,
            o = void 0 === l ? s['palette-white'] : l,
            d = e.borderColor,
            _ = void 0 === d ? s['palette-smokegray'] : d,
            m = (0, p.YD)({
              root: null,
              rootMargin: '0px 0px -30%',
              threshold: 0,
              triggerOnce: !0,
            }),
            u = (0, r.Z)(m, 2),
            f = u[0],
            b = u[1]
          return (0, i.jsx)('div', {
            ref: f,
            className: c()(s.component, t, b && s['is-active']),
            style: Object.assign(a || {}, { '--text-color': o }),
            children: (0, i.jsxs)('div', {
              className: s.component__inner,
              children: [
                (0, i.jsx)('span', {
                  className: s.component__english,
                  translate: 'no',
                  children: n.en,
                }),
                (0, i.jsx)('hr', {
                  className: s.component__border,
                  style: { '--border-color': _ },
                }),
                (0, i.jsx)('span', {
                  className: s.component__japanese,
                  children: n.ja,
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
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(a), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, a[t])
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
      var b = function (e) {
        var t = e.className,
          a = e.style,
          n = (0, l.Z)(e, m)
        return (0, i.jsx)('div', {
          className: c()(_.component, t),
          style: a,
          children: (0, i.jsx)(
            d,
            f({ className: _.component__content }, f({}, n))
          ),
        })
      }
    },
    94977: function (e, t, a) {
      'use strict'
      a.d(t, {
        C: function () {
          return d
        },
      })
      var n = a(92809),
        l = a(77529),
        o = a(94184),
        c = a.n(o),
        r = a(10835),
        p = a(85893)
      function s(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(a), !0).forEach(function (t) {
                ;(0, n.Z)(e, t, a[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : s(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                )
              })
        }
        return e
      }
      var d = function (e) {
        var t = e.className,
          a = e.style,
          n = e.title,
          o = e.text,
          s = e.image,
          d = e.tag,
          _ = void 0 === d ? 'h1' : d
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)('div', {
              className: c()(r.component, t),
              style: a,
              children: (0, p.jsx)('div', {
                className: 'l-wrap',
                children: (0, p.jsx)('div', {
                  className: 'l-inner',
                  children: (0, p.jsxs)('header', {
                    className: r.component__header,
                    children: [
                      (0, p.jsx)(_, {
                        className: r.component__title,
                        children: n,
                      }),
                      (0, p.jsx)('p', {
                        className: r.component__text,
                        children: o,
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, p.jsx)('div', {
              className: c()(r.component__image, 'tablet:hidden'),
              style: s.multiply ? { mixBlendMode: 'multiply' } : void 0,
              children: (0, p.jsx)(
                l.E,
                i(
                  i({}, i({}, s.sp)),
                  {},
                  { src: s.sp.src.src, placeholder: 'blur' }
                )
              ),
            }),
            (0, p.jsx)('div', {
              className: c()(r.component__image, 'hidden tablet:block'),
              style: s.multiply ? { mixBlendMode: 'multiply' } : void 0,
              children: (0, p.jsx)(
                l.E,
                i(
                  i({}, i({}, s.pc)),
                  {},
                  { src: s.pc.src.src, placeholder: 'blur' }
                )
              ),
            }),
          ],
        })
      }
    },
    69027: function (e, t, a) {
      'use strict'
      a.d(t, {
        A: function () {
          return i
        },
      })
      var n = a(94184),
        l = a.n(n),
        o = a(52911),
        c = a(43068),
        r = a(96423),
        p = a(41901),
        s = a(85893),
        i = function (e) {
          var t = e.className,
            a = e.style,
            n = e.text
          return (0, s.jsx)('div', {
            id: 'contact',
            className: l()(r.component, t),
            style: a,
            children: (0, s.jsx)('div', {
              className: 'l-wrap',
              children: (0, s.jsxs)('div', {
                className: 'l-inner',
                children: [
                  (0, s.jsx)(c.F, {
                    className: r.component__text,
                    text: n,
                    'data-aos': 'fade-up',
                  }),
                  (0, s.jsx)('div', {
                    className: r['component__button-wrap'],
                    'data-aos': 'fade-up',
                    children: (0, s.jsx)(o.b, {
                      href: p.V.$url({ hash: 'contact' }),
                      className: r.component__button,
                      icon: !0,
                      children:
                        '\u304a\u554f\u3044\u5408\u308f\u305b\u306f\u3053\u3061\u3089',
                    }),
                  }),
                ],
              }),
            }),
          })
        }
    },
    43068: function (e, t, a) {
      'use strict'
      a.d(t, {
        F: function () {
          return r
        },
      })
      var n = a(94184),
        l = a.n(n),
        o = a(48734),
        c = a(85893),
        r = function (e) {
          var t = e.className,
            a = e.style,
            n = e.text,
            r = e.tag,
            p = void 0 === r ? 'p' : r,
            s = e['data-aos']
          return (0, c.jsx)(p, {
            className: l()(o.component, t),
            'data-aos': s,
            dangerouslySetInnerHTML: { __html: n },
            style: a,
          })
        }
    },
    56573: function (e, t, a) {
      'use strict'
      a.d(t, {
        s: function () {
          return y
        },
      })
      var n = a(67294),
        l = a(94700),
        o = a(84956),
        c = a(26290),
        r = a(25354),
        p = a(36100),
        s = a(13340),
        i = a(67597),
        d = a(80318),
        _ = a(94184),
        m = a.n(_),
        u = a(66261),
        f = a(43590),
        b = a(8265),
        g = a(85893),
        h = function (e) {
          var t = e.className,
            a = e.style,
            l = e.params,
            o = e.active,
            s = e.onResize,
            i = (0, n.useState)([]),
            _ = i[0],
            h = i[1],
            y = (0, r.C)(p.WS),
            v = (0, c.F)(),
            w = (0, f.Z)(),
            j = (0, d.Z)(w, 2),
            x = j[0],
            k = j[1].height
          return (
            (0, n.useEffect)(
              function () {
                var e = !1,
                  t = l.reduce(function (t, a) {
                    var n = t
                    return e
                      ? t
                      : a.href === o
                      ? ((e = !0), t)
                      : (n.push(a.href), n)
                  }, [])
                h(t)
              },
              [o]
            ),
            (0, n.useEffect)(
              function () {
                s && s(k)
              },
              [k]
            ),
            (0, g.jsx)('nav', {
              className: m()(b.component, t),
              ref: x,
              style: a,
              children: (0, g.jsx)('ul', {
                className: b.component__inner,
                children: l.map(function (e) {
                  return (0, g.jsx)(
                    'li',
                    {
                      className: b.component__item,
                      children: (0, g.jsx)(u.rU, {
                        className: m()(
                          b.component__link,
                          o === e.href && b['is-active']
                        ),
                        to: e.href,
                        smooth: !0,
                        duration: 500,
                        offset: _.some(function (t) {
                          return t === e.href
                        })
                          ? -y - ('sp' === v ? k : 0)
                          : 'sp' === v
                          ? -k
                          : 0,
                        children: (0, g.jsx)('span', {
                          className: b.component__label,
                          dangerouslySetInnerHTML: { __html: e.label },
                        }),
                      }),
                    },
                    e.label
                  )
                }),
              }),
            })
          )
        },
        y = function (e) {
          var t = e.params,
            a = e.headerShow,
            d = (0, c.F)(),
            _ = (0, l.Z)().height,
            m = (0, n.useState)(0),
            u = m[0],
            f = m[1],
            b = (0, n.useState)(''),
            y = b[0],
            v = b[1],
            w = (0, n.useState)(!1),
            j = w[0],
            x = w[1],
            k = (0, r.C)(p.WS),
            N = (0, o.Z)()
          function O(e) {
            e.forEach(function (e) {
              e.isIntersecting && v(e.target.getAttribute('id'))
            })
          }
          ;(0, n.useEffect)(function () {
            var e = new IntersectionObserver(O, {
              root: null,
              rootMargin: '-50% 0px',
              threshold: 0,
            })
            return (
              t.forEach(function (t) {
                var a = document.querySelector('#'.concat(t.href))
                a && e.observe(a)
              }),
              function () {
                e.disconnect()
              }
            )
          }, [])
          var C = {
            sp: {
              textAlign: 'center',
              left: 0,
              right: 'auto',
              width: '100%',
              transition: 'transform 0.25s ease 0s',
              transform: a
                ? 'translateY('.concat(k - 1, 'px)')
                : 'translateY(0%)',
            },
            pc: { textAlign: 'right', left: 'auto', right: '68px' },
          }
          return N() && _ > 0
            ? (0, g.jsx)(s.$, {
                style: 'sp' === d ? C.sp : C.pc,
                fixedTop: 'sp' === d ? 0 : _ / 2,
                absoluteBottom: 'sp' === d ? _ : _ / 2 - u / 2,
                onUntil: function () {
                  return x(!1)
                },
                onFixed: function () {
                  return x(!0)
                },
                children: (0, g.jsx)(i.V, {
                  visible: j,
                  style: { width: '100%' },
                  children: (0, g.jsx)(h, {
                    params: t,
                    active: y,
                    onResize: f,
                  }),
                }),
              })
            : (0, g.jsx)(g.Fragment, {})
        }
    },
    13340: function (e, t, a) {
      'use strict'
      a.d(t, {
        $: function () {
          return p
        },
      })
      var n = a(67294),
        l = a(94184),
        o = a.n(l)
      var c = a(37699),
        r = a(85893),
        p = function (e) {
          var t = e.children,
            a = e.className,
            l = e.style,
            p = e.fixedTop,
            s = void 0 === p ? 0 : p,
            i = e.absoluteBottom,
            d = void 0 === i ? 0 : i,
            _ = e.endStyle,
            m = e.onFixed,
            u = e.onUntil,
            f = e.onEnd,
            b = (0, n.useState)('until'),
            g = b[0],
            h = b[1],
            y = (0, n.useRef)(null)
          function v() {
            return y.current && null !== y.current.parentElement
              ? ((e = y.current.parentElement),
                window.pageYOffset + e.getBoundingClientRect().top)
              : 0
            var e
          }
          function w() {
            y.current &&
              ((y.current && null !== y.current.parentElement
                ? y.current.parentElement.getBoundingClientRect().height
                : 0) +
                v() -
                s -
                d -
                y.current.clientHeight <=
              window.pageYOffset
                ? (h('end'), f && f())
                : v() <= window.pageYOffset
                ? (h('active'), m && m())
                : (h('until'), u && u()))
          }
          ;(0, n.useEffect)(function () {
            y.current &&
              null !== y.current.parentElement &&
              'relative' !== y.current.parentElement.style.position &&
              (y.current.parentElement.style.position = 'relative')
          }, []),
            (0, n.useEffect)(
              function () {
                return (
                  document.addEventListener('scroll', w),
                  function () {
                    document.removeEventListener('scroll', w)
                  }
                )
              },
              [s, d]
            )
          var j = {
            top: 'end' !== g ? s : 'auto',
            bottom: 'end' === g ? d : '',
          }
          return (0, r.jsx)('div', {
            ref: y,
            style: Object.assign(j, l || {}, 'end' === g && _ && _),
            className: o()(
              c.component,
              'active' === g && c['is-fixed'],
              'end' === g && c['is-end'],
              a && a
            ),
            children: t,
          })
        }
    },
    23642: function (e, t, a) {
      'use strict'
      a.d(t, {
        p: function () {
          return _
        },
      })
      var n = a(92809),
        l = a(94184),
        o = a.n(l),
        c = a(77529),
        r = a(43068),
        p = a(44955),
        s = a(85893)
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
      function d(e) {
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
      var _ = function (e) {
        var t = e.className,
          a = e.style,
          n = e.title,
          l = e.position,
          i = e.description,
          _ = e.image,
          m = e.tag,
          u = void 0 === m ? 'h3' : m,
          f = e.reverse,
          b = void 0 !== f && f
        return (0, s.jsxs)('div', {
          className: o()(p.component, b && p['is-reverse'], t),
          style: a,
          children: [
            (0, s.jsx)('div', {
              className: p.component__head,
              children: (0, s.jsx)('div', {
                className: p.component__image,
                children:
                  _ &&
                  (0, s.jsx)(
                    c.E,
                    d(
                      d({}, d({}, _)),
                      {},
                      { src: _.src.src, placeholder: 'blur' }
                    )
                  ),
              }),
            }),
            (0, s.jsxs)('div', {
              className: p.component__body,
              children: [
                (0, s.jsx)(r.F, {
                  className: p.component__title,
                  text: n,
                  tag: u,
                }),
                (0, s.jsx)(r.F, { className: p.component__position, text: l }),
                (0, s.jsx)(r.F, {
                  className: p.component__description,
                  text: i,
                }),
              ],
            }),
          ],
        })
      }
    },
    25354: function (e, t, a) {
      'use strict'
      a.d(t, {
        C: function () {
          return n
        },
      })
      var n = a(26372).v9
    },
    84646: function (e, t, a) {
      'use strict'
      a.d(t, {
        RH: function () {
          return n
        },
        P9: function () {
          return l
        },
      })
      var n = {
          URL: a(34155).env.NEXT_PUBLIC_SITE_URL || 'https://',
          TWITTER: 'https://twitter.com/yumelab1214',
          FACEBOOK: 'https://www.facebook.com/yumelab.co.jp/',
        },
        l = { root: null, rootMargin: '0px 0px -100%', threshold: 0 }
    },
    17114: function (e) {
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
        component: 'Accordion_component__8DotW',
        component__inner: 'Accordion_component__inner__149aN',
        component__label: 'Accordion_component__label__2E2f0',
        component__head: 'Accordion_component__head__3--t0',
        component__question: 'Accordion_component__question__1skSw',
        component__answer: 'Accordion_component__answer__vjetL',
        component__body: 'Accordion_component__body__c72NR',
        component__icon: 'Accordion_component__icon__3McKO',
        'is-opened': 'Accordion_is-opened__1JKwU',
        component__toggle: 'Accordion_component__toggle__1ojx4',
        showWord: 'Accordion_showWord__3ay8_',
        fadeUp: 'Accordion_fadeUp__3TQWd',
        fadeIn: 'Accordion_fadeIn__XknZK',
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
    10835: function (e) {
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
        component: 'PageHeading_component__2s34w',
        showWord: 'PageHeading_showWord__39u3u',
        component__title: 'PageHeading_component__title__Bowpq',
        component__header: 'PageHeading_component__header__1osNn',
        component__text: 'PageHeading_component__text__3Z7eL',
        component__image: 'PageHeading_component__image__2vuP1',
        fadeBrightness: 'PageHeading_fadeBrightness__hmioA',
        fadeUp: 'PageHeading_fadeUp__2nGPP',
        fadeIn: 'PageHeading_fadeIn__3iRIk',
      }
    },
    96423: function (e) {
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
        component: 'LeadContact_component__1Ff6n',
        component__text: 'LeadContact_component__text__2JuWS',
        'component__button-wrap': 'LeadContact_component__button-wrap__1NfRL',
        component__button: 'LeadContact_component__button__BxKnW',
        showWord: 'LeadContact_showWord__3tclj',
        fadeUp: 'LeadContact_fadeUp__X4_ch',
        fadeIn: 'LeadContact_fadeIn__1dpdu',
      }
    },
    48734: function (e) {
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
        showWord: 'LineBreakText_showWord__2dZmb',
        fadeUp: 'LineBreakText_fadeUp__13CBB',
        fadeIn: 'LineBreakText_fadeIn__2NKd0',
      }
    },
    8265: function (e) {
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
        component: 'InternalNavigation_component__uVPnT',
        component__inner: 'InternalNavigation_component__inner__1f8I4',
        component__item: 'InternalNavigation_component__item__2SZL8',
        component__link: 'InternalNavigation_component__link__2WnxX',
        showWord: 'InternalNavigation_showWord__1uRla',
        fadeUp: 'InternalNavigation_fadeUp__2yokz',
        fadeIn: 'InternalNavigation_fadeIn__PqWUK',
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
    44955: function (e) {
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
        component: 'VoiceItem_component__15bB6',
        'is-reverse': 'VoiceItem_is-reverse__3vvVM',
        component__head: 'VoiceItem_component__head__29N9d',
        component__image: 'VoiceItem_component__image__2m5nb',
        component__body: 'VoiceItem_component__body__1o7lU',
        component__title: 'VoiceItem_component__title__GtU_2',
        component__position: 'VoiceItem_component__position__3iRX2',
        component__description: 'VoiceItem_component__description__2ss35',
        showWord: 'VoiceItem_showWord__2gp4X',
        fadeUp: 'VoiceItem_fadeUp__1Hyjs',
        fadeIn: 'VoiceItem_fadeIn__DtwEs',
      }
    },
  },
])
