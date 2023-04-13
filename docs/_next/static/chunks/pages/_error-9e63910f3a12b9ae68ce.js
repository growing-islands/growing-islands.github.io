;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820],
  {
    56565: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return u
          },
        })
      var a = n(26),
        o = n(53960),
        r = n(39165),
        l = n(94184),
        s = n.n(l),
        c = n(52911),
        _ = n(35777),
        p = n(85893),
        i = function (e) {
          var t = e.className,
            n = e.style,
            a = e.statusCode
          function o(e) {
            switch (e) {
              case 500:
                return {
                  title: 'Server Error',
                  text: '\u30b5\u30fc\u30d0\u30fc\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3044\u305f\u3057\u307e\u3057\u305f\u3002\n\u6050\u308c\u5165\u308a\u307e\u3059\u304c\u6642\u9593\u3092\u304a\u3044\u3066\u518d\u5ea6\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
                }
              case 404:
                return {
                  title: '404\nNot Found',
                  text: '\u304a\u63a2\u3057\u306e\u30da\u30fc\u30b8\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002\nURL\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002',
                }
              default:
                return {
                  title: 'Error',
                  text: '\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3044\u305f\u3057\u307e\u3057\u305f\u3002\n\u6050\u308c\u5165\u308a\u307e\u3059\u304c\u6642\u9593\u3092\u304a\u3044\u3066\u518d\u5ea6\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
                }
            }
          }
          return (0, p.jsx)('div', {
            className: s()(_.component, t),
            style: n,
            children: (0, p.jsx)('div', {
              className: 'l-wrap',
              children: (0, p.jsxs)('div', {
                className: s()('l-inner', _.component__inner),
                children: [
                  (0, p.jsx)('header', {
                    className: _.component__header,
                    children: (0, p.jsx)('h1', {
                      className: _.component__title,
                      children: o(a).title,
                    }),
                  }),
                  (0, p.jsxs)('div', {
                    className: _.component__content,
                    children: [
                      (0, p.jsx)('p', {
                        className: _.component__text,
                        children: o(a).text,
                      }),
                      (0, p.jsx)('div', {
                        className: _['component__buttons-wrap'],
                        children: (0, p.jsx)(c.b, {
                          className: _.component__button,
                          href: '/',
                          icon: !0,
                          children: 'TOP\u30da\u30fc\u30b8',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        },
        d = function (e) {
          var t = e.statusCode
          return (0, p.jsxs)('div', {
            className: 'l-page',
            children: [
              (0, p.jsx)(r.H, { title: ''.concat(t, ' Error') }),
              (0, p.jsx)(a.h, {}),
              (0, p.jsx)('div', {
                className: 'l-main',
                children: (0, p.jsx)(i, { statusCode: t }),
              }),
              (0, p.jsx)(o.$, {}),
            ],
          })
        }
      d.getInitialProps = function (e) {
        var t = e.res,
          n = e.err
        return { statusCode: t ? t.statusCode : n ? n.statusCode : 404 }
      }
      var u = d
    },
    21711: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return n(56565)
        },
      ])
    },
    35777: function (e) {
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
        component: 'Container_component__1pYki',
        component__header: 'Container_component__header__1dR_R',
        component__title: 'Container_component__title__1t25I',
        component__text: 'Container_component__text__1W2oe',
        'component__buttons-wrap': 'Container_component__buttons-wrap__XbCn3',
        component__button: 'Container_component__button__2ymOj',
        showWord: 'Container_showWord__1FREa',
        fadeUp: 'Container_fadeUp__2XJGQ',
        fadeIn: 'Container_fadeIn__hKYA1',
      }
    },
  },
  function (e) {
    e.O(0, [57, 495, 774, 888, 179], function () {
      return (t = 21711), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
