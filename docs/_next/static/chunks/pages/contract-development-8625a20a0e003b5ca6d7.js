;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [869],
  {
    34629: function (e, t, n) {
      'use strict'
      n.d(t, {
        q: function () {
          return A
        },
      })
      var a = n(94184),
        o = n.n(a),
        l = n(26868),
        i = n.n(l),
        r = n(26290),
        c = n(58174),
        s = {
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
        p = n(85893),
        A = function (e) {
          var t = e.className,
            n = e.style,
            a = (0, r.F)()
          return (0, p.jsx)('div', {
            className: o()(c.component, t),
            style: n,
            children: (0, p.jsx)('div', {
              className: c.component__particles,
              children:
                'pc' === a
                  ? (0, p.jsx)(i(), {
                      className: c.component__particle,
                      canvasClassName: c.component__canvas,
                      width: '100%',
                      height: '100%',
                      options: s.pc,
                    })
                  : (0, p.jsx)(i(), {
                      className: c.component__particle,
                      canvasClassName: c.component__canvas,
                      width: '100%',
                      height: '100%',
                      options: s.sp,
                    }),
            }),
          })
        }
    },
    81289: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return ce
          },
        })
      var a = n(67294),
        o = n(70131),
        l = n(41113),
        i = n(26290),
        r = n(39165),
        c = n(26),
        s = n(53960),
        p = n(56573),
        A = n(84150),
        d = n(34629),
        _ = n(94184),
        m = n.n(_),
        u = n(94977),
        f = {
          src: '/_next/static/image/src/images/contract-development/bg-mv-sp.7e649aed832acf89604cbffda9f41171.jpg',
          height: 594,
          width: 750,
          blurDataURL:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAFH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAD//xAAXEAEAAwAAAAAAAAAAAAAAAAADABYy/9oACAEBAAE/AKeJ5af/xAAXEQADAQAAAAAAAAAAAAAAAAAAAhJR/9oACAECAQE/ALbT/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAISUf/aAAgBAwEBPwCVw//Z',
        },
        h = {
          src: '/_next/static/image/src/images/contract-development/bg-mv-pc.df5f95e502881e1adbdba4e7ae46f7e5.jpg',
          height: 597,
          width: 1920,
          blurDataURL:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAGv/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAB//xAAaEAACAgMAAAAAAAAAAAAAAAABBAADETFS/9oACAEBAAE/AAkmLDhWnfAn/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Ar//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AI//2Q==',
        },
        b = n(19496),
        g = n(85893),
        y = function (e) {
          var t = e.className,
            n = e.style
          return (0, g.jsx)(u.C, {
            className: m()(b.components, t),
            title: '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a',
            text: 'Co-Creation\nContract Development',
            image: {
              sp: {
                src: f,
                alt: '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\u306e\u30a4\u30e1\u30fc\u30b8',
                width: 375,
                height: 297,
              },
              pc: {
                src: h,
                alt: '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\u306e\u30a4\u30e1\u30fc\u30b8',
                width: 1920,
                height: 594,
              },
              multiply: !0,
            },
            style: n,
          })
        },
        v = n(77529),
        w = n(93722),
        j = n(43068),
        x = n(82156),
        O =
          '/_next/static/image/src/images/contract-development/img-flow-sp.410152ecaeb3d197a49c3f3322f51b75.png',
        C =
          '/_next/static/image/src/images/contract-development/img-flow-pc.f54a13da5ea9adc9bede322573f33377.png',
        E = function (e) {
          var t = e.className,
            n = e.style
          return (0, g.jsxs)('div', {
            id: 'business-summary',
            className: m()(x.component, t),
            style: n,
            children: [
              (0, g.jsx)('div', {
                className: 'l-wrap',
                children: (0, g.jsxs)('div', {
                  className: m()(x.component__inner, 'l-inner'),
                  children: [
                    (0, g.jsx)(w.D, {
                      className: m()(
                        x['component__column-header'],
                        'hidden tablet:block'
                      ),
                      texts: {
                        en: 'Business Summary',
                        ja: '\u4e8b\u696d\u6982\u8981',
                      },
                      textColor: x['palette-white'],
                      borderColor: x['palette-smokegray'],
                    }),
                    (0, g.jsxs)('header', {
                      className: x.component__header,
                      'data-aos': 'fade-up',
                      children: [
                        (0, g.jsx)('h2', {
                          className: x.component__title,
                          children: '\u4e8b\u696d\u6982\u8981',
                        }),
                        (0, g.jsxs)('p', {
                          className: x.component__text,
                          children: [
                            '\u304a\u5ba2\u69d8\u306e\u4e8b\u696d\u6226\u7565\u304b\u3089\u5fb9\u5e95\u7684\u306b\u7406\u89e3\u3057\u3001\u76ee\u7684\u3092\u660e\u78ba\u5316\u3002',
                            (0, g.jsx)('br', {}),
                            '\u76ee\u6307\u3059\u672a\u6765\u306b\u5171\u611f\u3057\u3001\u30aa\u30d5\u30b7\u30e7\u30a2\u3067\u306e\u4f4e\u30b3\u30b9\u30c8\u3092\u8ef8\u306b',
                            (0, g.jsx)('br', {}),
                            '\u9069\u5207\u306aIT\u65bd\u7b56\u3092\u3054\u63d0\u6848\u3044\u305f\u3057\u307e\u3059\u3002',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, g.jsxs)('div', {
                className: x.component__images,
                'data-aos': 'fade-up',
                children: [
                  (0, g.jsx)('div', {
                    className: m()(x.component__image, 'tablet:hidden'),
                    children: (0, g.jsx)(v.E, {
                      src: O,
                      width: 750,
                      height: 880,
                      placeholder: 'blur',
                      alt: '\u4e8b\u696d\u6982\u8981\u30d5\u30ed\u30fc\u56f3',
                    }),
                  }),
                  (0, g.jsx)('div', {
                    className: m()(x.component__image, 'hidden tablet:block'),
                    children: (0, g.jsx)(v.E, {
                      src: C,
                      width: 1920,
                      height: 1681,
                      placeholder: 'blur',
                      alt: '\u4e8b\u696d\u6982\u8981\u30d5\u30ed\u30fc\u56f3',
                    }),
                  }),
                ],
              }),
              (0, g.jsx)('div', {
                className: 'l-wrap',
                'data-aos': 'fade-up',
                children: (0, g.jsx)('div', {
                  className: m()(x.component__inner, 'l-inner'),
                  children: (0, g.jsxs)('div', {
                    className: x.component__detail,
                    children: [
                      (0, g.jsx)(j.F, {
                        className: x.component__attention,
                        text: '\u203b\u30b7\u30b9\u30c6\u30e0\u306e\u958b\u767a\u30d5\u30ed\u30fc\u306b\u95a2\u3057\u300cPDCA\u3092\u5c0f\u3055\u304f\u65e9\u304f\u56de\u3059\u300d\u3092\u30b3\u30f3\u30bb\u30d7\u30c8\u3068\u3057\u3066\u304a\u308a\u307e\u3059\u3002',
                      }),
                      (0, g.jsx)(j.F, {
                        className: x.component__text,
                        text: '\u4eca\u307e\u3067\u306e\u8acb\u8ca0\u578b\u306e\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u306e\u3088\u3046\u306b\u6642\u9593\u3092\u304b\u3051\u3066\u958b\u767a\u3092\u884c\u3044\u300c\u7d0d\u54c1\u3057\u3066\u7d42\u308f\u308a\u300d\u3067\u306f\u306a\u304f\u3001\u30aa\u30d5\u30b7\u30e7\u30a2\u3067\u306e\u4f4e\u30b3\u30b9\u30c8\u5b9a\u984d\u9867\u554f\u30b9\u30bf\u30a4\u30eb\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3001\u5f0a\u793e\u306f\u304a\u5ba2\u69d8\u306e\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u306a\u308a\u3001\u4e8b\u696d\u6210\u9577\u3068\u4f75\u8d70\u3044\u305f\u3057\u307e\u3059\u3002',
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        },
        D = n(69939),
        k =
          '/_next/static/image/src/images/contract-development/img-trouble-sp.14173ef310284509abd1d42407fe3cc5.png',
        N =
          '/_next/static/image/src/images/contract-development/img-trouble-pc.19729cbfd6d30ed67a2e719d16f41dff.png',
        S = function (e) {
          var t = e.className,
            n = e.style
          return (0, g.jsx)('div', {
            id: 'trouble',
            className: m()(D.component, t),
            style: n,
            children: (0, g.jsx)('div', {
              className: 'l-wrap',
              children: (0, g.jsxs)('div', {
                className: m()(D.component__inner, 'l-inner'),
                children: [
                  (0, g.jsx)(w.D, {
                    className: m()(
                      D['component__column-header'],
                      'hidden tablet:block'
                    ),
                    texts: {
                      en: 'Trouble',
                      ja: '\u3053\u306e\u3088\u3046\u306a\u4e8b\u3067\u304a\u56f0\u308a\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f',
                    },
                    textColor: D['palette-white'],
                    borderColor: D['palette-smokegray'],
                  }),
                  (0, g.jsxs)('header', {
                    className: D.component__header,
                    'data-aos': 'fade-up',
                    children: [
                      (0, g.jsx)(j.F, {
                        className: D.component__title,
                        tag: 'h2',
                        text: '\u3053\u306e\u3088\u3046\u306a\u4e8b\u3067<br class="tablet:hidden" />\u304a\u56f0\u308a\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304b\uff1f',
                      }),
                      (0, g.jsx)(j.F, {
                        className: D.component__text,
                        text: '\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u306b\u304a\u3051\u308b\u3088\u304f\u3042\u308b\u554f\u984c',
                      }),
                    ],
                  }),
                  (0, g.jsxs)('div', {
                    className: D.component__images,
                    'data-aos': 'fade-up',
                    children: [
                      (0, g.jsx)('div', {
                        className: m()(D.component__image, 'tablet:hidden'),
                        children: (0, g.jsx)(v.E, {
                          src: k,
                          width: 705,
                          height: 1098,
                          placeholder: 'blur',
                          alt: '\u4f4e\u4e88\u7b97\u3067\u30b9\u30bf\u30fc\u30c8\u3057\u305f\u3044\u3001\u65b0\u898f\u4e8b\u696d\u3092\u7acb\u3061\u4e0a\u3052\u305f\u3044\u304c\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u3044\u306a\u3044\u3001\u7269\u306f\u3067\u304d\u305f\u3082\u306e\u306e\u4e8b\u696d\u304c\u7acb\u3061\u4e0a\u304c\u3089\u306a\u3044\u3001\u63a1\u7528\u3057\u305f\u3044\u304c\u3069\u3093\u306a\u4eba\u6750\u3092\u96c7\u3048\u3070\u826f\u3044\u306e\u304b\u308f\u304b\u3089\u306a\u3044\u3001\u30b7\u30b9\u30c6\u30e0\u62c5\u5f53\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u9000\u8077\u3057\u3066\u30d6\u30e9\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u306b\u306a\u3063\u305f\u3001\u9014\u4e2d\u3067\u4ed5\u69d8\u3092\u5909\u3048\u305f\u304f\u306a\u3063\u3066\u3082\u8ffd\u52a0\u6599\u91d1\u3092\u8acb\u6c42\u3055\u308c\u308b\u3001\u958b\u767a\u4f1a\u793e\u3068\u7a81\u7136\u9023\u7d61\u304c\u53d6\u308c\u306a\u304f\u306a\u3063\u305f',
                        }),
                      }),
                      (0, g.jsx)('div', {
                        className: m()(
                          D.component__image,
                          'hidden tablet:block'
                        ),
                        children: (0, g.jsx)(v.E, {
                          src: N,
                          width: 1264,
                          height: 1198,
                          placeholder: 'blur',
                          alt: '\u4f4e\u4e88\u7b97\u3067\u30b9\u30bf\u30fc\u30c8\u3057\u305f\u3044\u3001\u65b0\u898f\u4e8b\u696d\u3092\u7acb\u3061\u4e0a\u3052\u305f\u3044\u304c\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u3044\u306a\u3044\u3001\u7269\u306f\u3067\u304d\u305f\u3082\u306e\u306e\u4e8b\u696d\u304c\u7acb\u3061\u4e0a\u304c\u3089\u306a\u3044\u3001\u63a1\u7528\u3057\u305f\u3044\u304c\u3069\u3093\u306a\u4eba\u6750\u3092\u96c7\u3048\u3070\u826f\u3044\u306e\u304b\u308f\u304b\u3089\u306a\u3044\u3001\u30b7\u30b9\u30c6\u30e0\u62c5\u5f53\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u9000\u8077\u3057\u3066\u30d6\u30e9\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u306b\u306a\u3063\u305f\u3001\u9014\u4e2d\u3067\u4ed5\u69d8\u3092\u5909\u3048\u305f\u304f\u306a\u3063\u3066\u3082\u8ffd\u52a0\u6599\u91d1\u3092\u8acb\u6c42\u3055\u308c\u308b\u3001\u958b\u767a\u4f1a\u793e\u3068\u7a81\u7136\u9023\u7d61\u304c\u53d6\u308c\u306a\u304f\u306a\u3063\u305f',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        },
        P = n(80318),
        B = n(43590),
        R = n(63330),
        U = [
          {
            prefix: '\u5927\u304d\u306a\u6295\u8cc7\u304c',
            description:
              '\u30aa\u30d5\u30b7\u30e7\u30a2\u306b\u3088\u308b\u4f4e\u30b3\u30b9\u30c8\n\u5b9a\u984d\u9867\u554f\u5236\u306e\u305f\u3081\u4f01\u753b\u306e\u307f\u306b\n\u5c02\u5ff5\u3057\u3066\u3044\u305f\u3060\u3051\u307e\u3059',
          },
          {
            prefix: '\u8ffd\u52a0\u8cbb\u7528\u304c',
            description:
              '\u3044\u3064\u3067\u3082\u4ed5\u69d8\u5909\u66f4\u3084\n\u512a\u5148\u5ea6\u306e\u5909\u66f4\u304c\u53ef\u80fd\u3067\u3059',
          },
          {
            prefix: '\u63a1\u7528\u304c',
            description:
              '\u958b\u767a\u4f53\u5236\u3092\u6700\u77ed\u3067\n\u6240\u6709\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059',
          },
          {
            prefix: '\u6307\u793a\u66f8\u304c',
            description:
              '\u307e\u305a\u5c02\u4efb\u306e\u30c7\u30a3\u30ec\u30af\u30bf\u30fc\u306b\n\u304a\u6c17\u8efd\u306b\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044',
          },
        ],
        I = function (e) {
          var t = e.className,
            n = e.style,
            a = (0, B.Z)(),
            o = (0, P.Z)(a, 2),
            l = o[0],
            i = o[1].width
          return (0, g.jsx)('div', {
            id: 'advantage',
            className: m()(R.component, t),
            style: n,
            children: (0, g.jsx)('div', {
              className: 'l-wrap',
              children: (0, g.jsxs)('div', {
                className: m()(R.component__inner, 'l-inner'),
                children: [
                  (0, g.jsx)(w.D, {
                    className: m()(
                      R['component__column-header'],
                      'hidden tablet:block'
                    ),
                    texts: {
                      en: 'Advantage',
                      ja: '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a 4\u3064\u306e\u5f37\u307f',
                    },
                    textColor: R['palette-deepblue'],
                    borderColor: R['palette-deepblue'],
                  }),
                  (0, g.jsxs)('header', {
                    className: R.component__header,
                    'data-aos': 'fade-up',
                    children: [
                      (0, g.jsx)(j.F, {
                        className: R.component__title,
                        tag: 'h2',
                        text: '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a 4\u3064\u306e\u5f37\u307f',
                      }),
                      (0, g.jsx)(j.F, {
                        className: R.component__text,
                        text: '\u4e8b\u696d\u6210\u9577\u3092\u76ee\u7684\u3068\u3057\u305f<br class="tablet:hidden" />\u4f4e\u30b3\u30b9\u30c8IT\u6d3b\u7528\u3067\u554f\u984c\u3092\u89e3\u6c7a\u3057\u307e\u3059\uff01',
                      }),
                    ],
                  }),
                  (0, g.jsx)('ul', {
                    className: R.component__list,
                    'data-aos': 'fade-up',
                    children: U.map(function (e, t) {
                      var n = e.prefix,
                        a = e.description
                      return (0,
                      g.jsxs)('li', { className: m()(R.component__item, R.item), style: { '--primary-color': R['palette-list'.concat(t + 1)] }, children: [(0, g.jsx)('div', { className: R.item__head, ref: l, style: { height: ''.concat(i, 'px') }, children: (0, g.jsx)('div', { className: R.item__circle, children: (0, g.jsxs)('h3', { className: R.item__title, children: [n, (0, g.jsx)('strong', { children: '\u4e0d\u8981' })] }) }) }), (0, g.jsx)('div', { className: R.item__body, children: (0, g.jsx)(j.F, { className: R.item__description, text: a }) })] }, n)
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        Q = n(92809),
        F = n(23642),
        T = n(35134),
        M = {
          src: '/_next/static/image/src/images/contract-development/illust-voice-01.649e666731ef5a762518986aeb86bf7f.png',
          height: 540,
          width: 540,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1ElEQVR42j2MTQsBcRDG/9+FRMLdwcvdQbm5cCIHLi4+grhI5CUnirOLEkmSfAvrattdYm1/286Y2ZanpnnmeX6NQERBEwCAHW3JQ35POyhYdHCpIumqXOCiKMCeMg0AQ8JxnB0Hj7shq2k/ThtFfJum9KADf5DsrdcTje0EPqcFSMtCcHuw/wCS1NMSbucVIOsHkNmrNw1n3bXMxLOYS+VxPthIXdMZOjIQ7Hb6WkTUsRBtQjHSAp+o4Wg4NqgLC0+hcrJ9qER7diXWs0uJ5pEyt/wCac/CSDJXI3sAAAAASUVORK5CYII=',
        },
        V = {
          src: '/_next/static/image/src/images/contract-development/illust-voice-02.dca5e98a0fcd53bb94a84365717a25e6.png',
          height: 540,
          width: 540,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzklEQVR42kWLzcpBARCG5ya++rCxEomFjaVs3IlLcAF+Iiz9lM7qrGyUHTu/p+QeFMVGOojjZ5yaMVMHU2/zNO8zwMwgCRHRSDZqhCeyw9p9ygPLbLY7Wq03pCw3WxIB75OfiNiv57iXz/LNcdCTZiqgMj7ujIsuvSyT0Ll4PblfQcKn5ZDsaU/5JwhMrscjzw0DjUyKO+kkj5sNPO/3KlkqhMftll0D4Or/H1UCPqoLD0rFk3RRFSAPEDET8Vk56HcLwYBrJmJWESDKzPAGaljL9Jb8Go8AAAAASUVORK5CYII=',
        },
        H = {
          src: '/_next/static/image/src/images/contract-development/illust-voice-03.11329db24f20493d15c10b63438a8a88.png',
          height: 540,
          width: 540,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/ElEQVR4nB2NP0vDUBTF73mQIBKHhA6Ce6iC4FbFSqmuOri0Cgpuujj4QRzcdHJQ0HZw0VGMtQTJqOAfcHZwMCltKTQleT2vF+69w/mdc5DnuXB8AOf8q1wzr1rrI/5vA/gQCQUovH9+aQhkcaEIAjGBMrIse1JKVeM4Th9Pj20oJRsnZ6nneTbNbZMwpNsaDfoYRk0atUwt12FNO1q0ziYA+y3GoRM9UBZxS5tspWwAnuckSSqXjbt09v/HpiB/BT89qG3bruuGBihe3zbD/d26J3MlEyDyG+HqptHZ26mVEbTaUq2szS+tb110e/0VyjLjONFbcH8YtF4+xuA5cPSV+9X6AAAAAElFTkSuQmCC',
        }
      function G(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                ;(0, Q.Z)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : G(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var K = function (e) {
          var t = e.className,
            n = e.style,
            a = [
              {
                title:
                  '\u81ea\u793e\u30b5\u30fc\u30d3\u30b9\u3092\u7121\u99c4\u306a\u30b3\u30b9\u30c8\u3092\u304b\u3051\u308b\u4e8b\u306a\u304f\u958b\u767a',
                position:
                  '\u6709\u9650\u4f1a\u793e\u30b9\u30ba\u30ad\u30d7\u30ea\u30f3\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u69d8\n\u81ea\u793e\u30b5\u30fc\u30d3\u30b9\u958b\u767a',
                description:
                  '\u81ea\u793e\u30b5\u30fc\u30d3\u30b9\u306e\u958b\u767a\u3092\u4f9d\u983c\u3057\u3001\u958b\u767a\u671f\u9593\u304c1\u5e74\u3068\u9577\u671f\u306b\u6e21\u308b\u4e2d\u3001\u3084\u306f\u308a\u8981\u4ef6\u306e\u5909\u66f4\u306a\u3069\u3082\u67d4\u8edf\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u3055\u3093\u306e\u300c\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\u300d\u3067\u826f\u304b\u3063\u305f\u3068\u601d\u3048\u308b\u5206\u5c90\u304c\u305f\u304f\u3055\u3093\u3042\u308a\u307e\u3057\u305f\u3002\u958b\u767a\u958b\u59cb\u307e\u3067\u306e\u671f\u9593\u3082\u77ed\u304f\u3001\u6708\u984d\u306e\u521d\u671f\u6295\u8cc7\u3082\u6291\u3048\u306a\u304c\u3089\u3001\u5fc5\u8981\u306a\u6a5f\u80fd\u4f5c\u6210\u3068\u691c\u8a3c\u3092\u7e70\u308a\u8fd4\u3059\u4e8b\u3067\u3001\u7d50\u679c\u7684\u306b\u7121\u99c4\u306a\u30b3\u30b9\u30c8\u3092\u304b\u3051\u308b\u4e8b\u306a\u304f\u958b\u767a\u3067\u304d\u305f\u3068\u611f\u3058\u3066\u3044\u307e\u3059\u3002',
                image: { src: M, width: M.width, height: M.height },
              },
              {
                title:
                  '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u9014\u4e2d\u304b\u3089\u3067\u3082\u67d4\u8edf\u306b\u5bfe\u5fdc',
                position:
                  '\u4eba\u6750\u30b5\u30fc\u30d3\u30b9\u7cfb\u4f01\u696d\u69d8\n\u81ea\u793e\u30b5\u30fc\u30d3\u30b9\u958b\u767a',
                description:
                  '\u81ea\u793e\u306eSaaS\u306b\u95a2\u3057\u3066\u958b\u767a\u9014\u4e2d\u304b\u3089\u53c2\u753b\u9802\u304d\u307e\u3057\u305f\u3002\n\u5e02\u5834\u3092\u53d6\u308a\u5dfb\u304f\u74b0\u5883\u304c\u5909\u308f\u308b\u4e2d\u3001\u6708\u984d\u5236\u306e\u9867\u554f\u5951\u7d04\u3067\u958b\u767a\u306e\u8981\u4ef6\u5909\u66f4\u306b\u3082\u5bfe\u5fdc\u3044\u305f\u3060\u304d\u3001\u30a4\u30f3\u30d5\u30e9\u304b\u3089\u30d5\u30ed\u30f3\u30c8\u307e\u3067\u5e45\u5e83\u304f\u5bfe\u5fdc\u3044\u305f\u3060\u304d\u307e\u3057\u305f\u3002\n\u9031\u306b1\u56de\u306e\u5b9a\u4f8b\u30df\u30fc\u30c6\u30a3\u30f3\u30b0\u3067\u9032\u6357\u306e\u3059\u308a\u5408\u308f\u305b\u3092\u884c\u3044\u3001\u30c7\u30a3\u30ec\u30af\u30bf\u30fc\u306e\u65b9\u306b\u67d4\u8edf\u306a\u5bfe\u5fdc\u3092\u9802\u3044\u305f\u306e\u304c\u7279\u306b\u5370\u8c61\u7684\u3067\u3059\u3002\n\u516c\u958b\u5f8c\u3082PDCA\u3092\u56de\u3057\u306a\u304c\u3089\u3001\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u306e\u89b3\u70b9\u304b\u3089\u3082\u69d8\u3005\u306a\u76f8\u8ac7\u304c\u3067\u304d\u308b\u306e\u3067\u3001\u3068\u3066\u3082\u5fc3\u5f37\u3044\u3068\u611f\u3058\u3066\u3044\u307e\u3059\u3002',
                image: { src: V, width: V.width, height: V.height },
              },
              {
                title:
                  '\u5b9a\u984d\u5236\u3067DX\u306e\u7b2c\u4e00\u6b69\u304b\u3089\u30b5\u30dd\u30fc\u30c8',
                position:
                  '\u98df\u54c1\u7cfb\u30e1\u30fc\u30ab\u30fc\u69d8\n\u793e\u5185\u30b7\u30b9\u30c6\u30e0\u958b\u767a',
                description:
                  '\u793e\u5185\u3067\u4f7f\u3046\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u7bc9\u3092\u4f9d\u983c\u3057\u307e\u3057\u305f\u3002\n\u5225\u306e\u4f1a\u793e\u306b\u898b\u7a4d\u3082\u308a\u3092\u53d6\u3063\u305f\u969b\u3001\u6700\u7d42\u7684\u306b\u4e00\u62ec\u3067\u307e\u3068\u307e\u3063\u305f\u91d1\u984d\u304c\u5fc5\u8981\u3068\u306e\u8a71\u306b\u306a\u308a\u96e3\u3057\u3044\u5224\u65ad\u3092\u8feb\u3089\u308c\u3066\u3044\u305f\u6240\u3001\u6708\u984d\u5236\u3067\u5bfe\u5fdc\u3057\u3066\u3044\u305f\u3060\u3051\u308b\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u3055\u3093\u306b\u304a\u8a71\u3092\u805e\u3051\u308b\u6a5f\u4f1a\u304c\u3042\u308a\u307e\u3057\u305f\u3002\n\u6bce\u6708\u5b9a\u984d\u3067\u5951\u7d04\u3067\u304d\u308b\u6240\u304c\u4e88\u7b97\u3092\u53d6\u308a\u3084\u3059\u304f\u3001\u307e\u305f\u3001\u30aa\u30d5\u30b7\u30e7\u30a2\u958b\u767a\u3068\u306e\u4e8b\u3067\u6e80\u8db3\u3067\u304d\u308b\u4fa1\u683c\u611f\u3067\u9032\u3093\u3067\u304a\u308a\u307e\u3059\u3002\n\u5185\u5bb9\u7684\u3082\u5b9a\u4f8b\u306e\u969b\u306b\u4e01\u5be7\u306a\u5bfe\u5fdc\u3092\u9802\u304d\u3001\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u901a\u308a\u6a5f\u80fd\u304c\u3067\u304d\u3066\u884c\u304f\u306e\u3067\u5b89\u5fc3\u3057\u3066\u3044\u307e\u3059\u3002',
                image: { src: H, width: H.width, height: H.height },
              },
            ]
          return (0, g.jsx)('div', {
            id: 'voice',
            className: m()(T.component, t),
            style: n,
            children: (0, g.jsx)('div', {
              className: 'l-wrap',
              children: (0, g.jsxs)('div', {
                className: m()(T.component__inner, 'l-inner'),
                children: [
                  (0, g.jsx)(w.D, {
                    className: m()(
                      T['component__column-header'],
                      'hidden tablet:block'
                    ),
                    texts: {
                      en: 'Voice',
                      ja: '\u304a\u5ba2\u69d8\u306e\u58f0',
                    },
                    textColor: T['palette-deepblue'],
                    borderColor: T['palette-deepblue'],
                  }),
                  (0, g.jsx)('header', {
                    className: T.component__header,
                    'data-aos': 'fade-up',
                    children: (0, g.jsx)('h2', {
                      className: T.component__title,
                      children: '\u304a\u5ba2\u69d8\u306e\u58f0',
                    }),
                  }),
                  (0, g.jsx)('ul', {
                    className: T.component__list,
                    children: a.map(function (e, t) {
                      var n = e.title
                      return (0,
                      g.jsx)('li', { className: T.component__item, 'data-aos': 'fade-up', children: (0, g.jsx)(F.p, L({ reverse: (t + 1) % 2 === 0 }, L({}, e))) }, ''.concat(n, '-').concat(t))
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        W = n(70958),
        Y = n(8939)
      function z(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                ;(0, Q.Z)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var J = [
          {
            image: {
              src: '/_next/static/image/src/images/contract-development/illust-step-01.f6d9115f24dd890a3d825636300ec60b.png',
              height: 113,
              width: 113,
              blurDataURL:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AXWeyACKYeIC98WZnvH3GFEO/qVnCDzVr+jLpzsMPxrKAQAA/wrusQEoCxY7zef5QwAU/ILdCxC0JMyF0Yk0r3sBAUmX1emMQwi5KfV4Wvb11gMBDmXm7SVvjODR4kklBvflAVya0v97TiUAEQL0/wXs2gDnETABBwEBAAzbzgD1KDIAAVqa0/1+TR//F/zoAwXj5ADpGCP/B/70/BH+4QPpDTn7AVOa1v6GRQ0ACgb+APMKGgAX2MgA/xAVAPoYEgH69vz7AW6h1f9nQx4A4+z5APf3+AAeHBIAGwr/AAH58wD2/wn9AdHh8fQLCQQH+/z+/wAAAQADAQAAAwMBAAEBAAL5+//1o/V1sGjhgTUAAAAASUVORK5CYII=',
            },
            spMarginTop: 33,
            title: '\u5b8c\u6210\u5f62\u306e\u60f3\u50cf',
            text: '\u304a\u5ba2\u69d8\u5074\u306b\u3066\u300c\u3069\u3093\u306a\u4e8b\u3092\u89e3\u6c7a\u3057\u305f\u3044\u304b\u300d\u7406\u60f3\u50cf\u3092\u7c21\u5358\u306b\u304a\u307e\u3068\u3081\u4e0b\u3055\u3044\u3002',
          },
          {
            image: {
              src: '/_next/static/image/src/images/contract-development/illust-step-02.5722a89e839cbc5c01f7b8a4f56f1f31.png',
              height: 96,
              width: 120,
              blurDataURL:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Af//6AEBAXH/AP+mAG4ArgBgyxkhGfEEcxi16gD4HwmKAQBL/wuwbPu3DgsAFP39//r+AgMFPNrPKgoD9AD1BBDVAejJ7VnM3QKmAwUBABAMAAD8AQIABePw/RLm7P0FSCEGAfnT6vTOzvkL7Oz/+gMGAQYEAwAA9gEAAA0OBgAYKA3VAfbT6/fay/II+Pj/AAT8APEDAv3y5wf1BRP3C/sLJRJUAfHW8Gf7/QCA8PcB2M0H3Yc4L+/D/ncpBQ/81xARjUPiy6tYTjiLE50AAAAASUVORK5CYII=',
            },
            spMarginTop: 38,
            title: '\u304a\u554f\u3044\u5408\u308f\u305b',
            text: '\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u3001\u307e\u305f\u306f\u3054\u7d39\u4ecb\u306b\u3066\u53d7\u4ed8\u3051\u3092\u884c\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002',
          },
          {
            image: {
              src: '/_next/static/image/src/images/contract-development/illust-step-03.bdb697217dfe8758bfb8b76f2dbbc0e8.png',
              height: 118,
              width: 118,
              blurDataURL:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AW9ZgAANAwAj+AMGlvTy+T3m0u8BGy0QyCckF2rn8PPXAYJoiiLU4+/G+fL7F1FZNgBGTj4AoZ6yALOv1+9KQB89AUQ+e7lxYhdG/vH4+rfM/gVdaUkABu7b++7m1QaOqvnHAWJSgvZ6QQAJ6hYn/wEcJwCjlrUAMiEHAR8sKf+fpcv+AaFbe/dY3NAI1FJN/wtdVADIp68AnNcPAcQ0Qf9Z0Lj/Ab5Nab89DvVA5wEV+r79AAbfESAAvxM4+vAkHAYa0dTMAdk8TykYCfrG7hAhEOArHv/M+BUApQIuAfseF/YIwOE9Af83KwAA8dwstSJgm3wFHDU9//AB8CA8z6McQGcA/vvNt6B3n3ZOaVoAAAAASUVORK5CYII=',
            },
            spMarginTop: 31,
            title: '\u521d\u56de\u306e\u304a\u6253\u3061\u5408\u308f\u305b',
            text: '\u304a\u5ba2\u3055\u307e\u304c\u691c\u8a0e\u3055\u308c\u3066\u3044\u308b\u4e8b\u696d\u306e\u6982\u8981\u3084\u73fe\u5728\u306e\u8ab2\u984c\u3001\u5c06\u6765\u306e\u30d3\u30b8\u30e7\u30f3\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3066\u9802\u304d\u307e\u3059\u3002',
          },
          {
            image: {
              src: '/_next/static/image/src/images/contract-development/illust-step-04.1dc2ec370b05e84b7d1cee3389953a35.png',
              height: 120,
              width: 120,
              blurDataURL:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AWCb4wD1Av6KGxEGdfPy+fg+Nr0AHRzoCPv7BY3x7BR0AVOO3jT/DwLLXC0UANb80AAsJ7cAGQcfAPT79ADw7g44AWFr3rvkJwBEJRYM/AQS4wMsKqYAHw0M/fr0FwS8mT/AAbPI7vkCBwAG6fH7/9DJ+wABGN0ANz7sACkLKQEB6iD8AdLo9voaDQMECQcDAaae6f/i7AIAamwXAQcC/v//A/39Ad3r9sALBgI/CAkD+srF8Qbh8fwAT0gR+v/6/wb//wDFAery+Sn/AP/F/v4AEamj7P/o8/4AY2MUARAKA/H8/f87Ae71+QABAQEprKnsmcfG+Dn//wAAMTcHyVxaFWf////VTHJ83kNsRjQAAAAASUVORK5CYII=',
            },
            spMarginTop: 35,
            title: '\u3054\u76f8\u8ac7\u671f\u9593',
            text: '\u7121\u6599\u306e\u3054\u76f8\u8ac7\u671f\u9593\u3068\u306a\u308a\u307e\u3059\u3002<br class="tablet:hidden" />(\u67084\u56de\u307e\u3067)<br class="hidden tablet:block" />\u4e8b\u696d\u306e\u65b9\u5411\u6027\u3092\u6c7a\u5b9a\u3001\u5b9f\u65bd\u3059\u3079\u304d\u65bd\u7b56\u3092\u53ef\u8996\u5316\u3044\u305f\u3057\u307e\u3059\u3002',
            attention:
              '\u203b\u5ef6\u9577\u3055\u308c\u308b\u5834\u5408\u306f\u5225\u9014\u6599\u91d1\u304c\u767a\u751f\u3059\u308b\u5834\u5408\u304c\u3054\u3056\u3044\u307e\u3059',
          },
          {
            image: {
              src: '/_next/static/image/src/images/contract-development/illust-step-05.f4ab8207e18114f602a4eca77bc862d5.png',
              height: 120,
              width: 107,
              blurDataURL:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA1UlEQVR42jWLvUoDURBG5218D19CfAcre7G1EgLa2Ch2CqIgQhpDeskSEBQ3Jhoj5MdNFOfe7Myd3fmUiKc5xeFQFI1RBL+2pSrs4vKG/gml4jOofwVBNDPuDVB07ndWkUv1ghVzVl+wpmlIeF/w0d8p4lETgiRntTRnwbjgxipWcO+9DnGXdd1TrJfFCM3b9gfR5hpFkerk7Kqa9fMK09zxdK1vzUPs7jUy+i4Fk9EAeG6hHufwyQvw0A6t04MNKs22avi2Zsf73jmfeb+b2/BxnYjoB+l9r7Op0wOKAAAAAElFTkSuQmCC',
            },
            spMarginTop: 37,
            title: '\u6b63\u5f0f\u5951\u7d04',
            text: '\u307e\u305a3\u30f6\u6708\u4ee5\u5185\u3067\u5b9f\u73fe\u3067\u304d\u308b\u6700\u4f4e\u9650\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u76ee\u6307\u3057\u307e\u3059\u3002<br />\u6bce\u9031\u5b9a\u4f8b\u4f1a\u3092\u5b9f\u65bd\u3057\u30011\u9031\u9593\u5358\u4f4d\u3067\u6210\u679c\u7269\u3092\u5b9a\u7fa9\u3001\u5b9f\u73fe\u3057\u3066\u3044\u304d\u307e\u3059\u3002',
          },
        ],
        X = function (e) {
          var t = e.className,
            n = e.style
          return (0, g.jsx)('div', {
            id: 'step',
            className: m()(Y.component, t),
            style: n,
            children: (0, g.jsx)('div', {
              className: 'l-wrap',
              children: (0, g.jsxs)('div', {
                className: m()(Y.component__inner, 'l-inner'),
                children: [
                  (0, g.jsx)(w.D, {
                    className: m()(
                      Y['component__column-header'],
                      'hidden tablet:block'
                    ),
                    texts: {
                      en: 'Step',
                      ja: '\u958b\u767a\u958b\u59cb\u307e\u3067\u306e\u6d41\u308c',
                    },
                    textColor: Y['palette-deepblue'],
                    borderColor: Y['palette-deepblue'],
                  }),
                  (0, g.jsx)('header', {
                    className: Y.component__header,
                    'data-aos': 'fade-up',
                    children: (0, g.jsx)(j.F, {
                      className: Y.component__title,
                      tag: 'h2',
                      text: '\u958b\u767a\u958b\u59cb\u307e\u3067\u306e\u6d41\u308c',
                    }),
                  }),
                  (0, g.jsx)('ol', {
                    className: Y.component__list,
                    'data-aos': 'fade-up',
                    children: J.map(function (e, t) {
                      var n = e.title,
                        a = e.image,
                        o = e.text,
                        l = e.attention
                      return (0,
                      g.jsxs)('li', { className: m()(Y.component__item, Y.item), children: [(0, g.jsx)('div', { className: Y.item__head, children: (0, g.jsx)('div', { className: Y.item__image, children: (0, g.jsx)(v.E, q({ src: a.src, alt: ''.concat(n, '\u306e\u30a4\u30e9\u30b9\u30c8'), width: a.width, height: a.height }, { placeholder: 'blur' })) }) }), (0, g.jsxs)('div', { className: Y.item__body, children: [(0, g.jsx)('h3', { className: Y.item__title, children: n }), (0, g.jsx)('p', { className: Y.item__text, dangerouslySetInnerHTML: { __html: o } }), l && (0, g.jsx)(j.F, { className: Y.item__attention, text: l })] }), t + 1 !== J.length && (0, g.jsx)(W.R, { className: Y.item__icon })] }, e.title)
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        Z = n(10329),
        $ = n(64636)
      function ee(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ee(Object(n), !0).forEach(function (t) {
                ;(0, Q.Z)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ee(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var ne = [
          {
            head: '\u6708\u984d\u4e88\u7b97\u306e\u6700\u4f4e\u91d1\u984d\u306f\u3042\u308a\u307e\u3059\u304b\uff1f',
            body: '\u4e88\u7b97\u306b\u5408\u308f\u305b\u3066\u9069\u5207\u306a\u7a3c\u50cd\u6642\u9593\u306e\u914d\u5206\u3092\u63d0\u6848\u3055\u305b\u3066\u9802\u304d\u307e\u3059\u3001\u307e\u305a\u306f\u304a\u6c17\u8efd\u306b\u3054\u76f8\u8ac7\u4e0b\u3055\u3044\u3002',
          },
          {
            head: '\u30aa\u30d5\u30b7\u30e7\u30a2\u3067\u306e\u958b\u767a\u3060\u3068\u4e0d\u5b89\u304c\u3042\u308a\u307e\u3059\u304c\u5927\u4e08\u592b\u3067\u3057\u3087\u3046\u304b\uff1f',
            body: '\u5b9f\u7e3e\u306e\u3042\u308b\u30d1\u30fc\u30c8\u30ca\u30fc\u5148\u3068\u9023\u643a\u3057\u3066\u5bfe\u5fdc\u3057\u3066\u304a\u308a\u307e\u3059\u306e\u3067\u3054\u5b89\u5fc3\u304f\u3060\u3055\u3044\u3002',
          },
          {
            head: '\u958b\u767a\u4ee5\u5916\u306e\u30c7\u30b6\u30a4\u30f3\u3084\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u306a\u3069\u306e\u76f8\u8ac7\u3082\u3067\u304d\u307e\u3059\u304b\uff1f',
            body: '\u53ef\u80fd\u3067\u3059\u3002\u30b7\u30b9\u30c6\u30e0\u4ee5\u5916\u306b\u3082\u3001\u30c7\u30b6\u30a4\u30f3\u30fb\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u30fb\u5e83\u544a\u904b\u7528\u306a\u3069\u3001\u4e8b\u696d\u3092\u30b9\u30b1\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u69d8\u3005\u306a\u30c1\u30fc\u30e0\u69cb\u7bc9\u3092\u3054\u63d0\u6848\u3044\u305f\u3057\u307e\u3059\u3002',
          },
          {
            head: '\u3084\u308a\u305f\u3044\u4e8b\u304c\u56fa\u307e\u3063\u3066\u3044\u306a\u3044\u306e\u3067\u3059\u304c\u3001\u76f8\u8ac7\u3067\u304d\u307e\u3059\u304b\uff1f',
            body: '\u5177\u4f53\u7684\u306a\u30d3\u30b8\u30e7\u30f3\u3092\u56fa\u3081\u3066\u3044\u305f\u3060\u3044\u305f\u5f8c\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002\u4e8b\u696d\u306e\u65b9\u5411\u6027\u3092\u6c7a\u5b9a\u3059\u308b\u304a\u624b\u4f1d\u3044\u306f\u3001\u5225\u9014\u3054\u76f8\u8ac7\u3068\u306a\u308a\u307e\u3059\u3002',
          },
          {
            head: '\u958b\u767a\u306e\u7740\u624b\u307e\u3067\u3069\u308c\u304f\u3089\u3044\u304b\u304b\u308a\u307e\u3059\u304b\uff1f',
            body: '\u5185\u5bb9\u306b\u3082\u3088\u308a\u307e\u3059\u304c\u3001\u6700\u77ed2\u9031\u9593\u7a0b\u5ea6\u3067\u7740\u624b\u53ef\u80fd\u306a\u5834\u5408\u304c\u3054\u3056\u3044\u307e\u3059\u3002',
          },
        ],
        ae = function (e) {
          var t = e.className,
            n = e.style
          return (0, g.jsx)('div', {
            id: 'faq',
            className: m()($.component, t),
            style: n,
            children: (0, g.jsx)('div', {
              className: 'l-wrap',
              children: (0, g.jsxs)('div', {
                className: m()($.component__inner, 'l-inner'),
                children: [
                  (0, g.jsx)(w.D, {
                    className: m()(
                      $['component__column-header'],
                      'hidden tablet:block'
                    ),
                    texts: {
                      en: 'FAQ',
                      ja: '\u3088\u304f\u3042\u308b\u3054\u8cea\u554f',
                    },
                    textColor: $['palette-deepblue'],
                    borderColor: $['palette-deepblue'],
                  }),
                  (0, g.jsx)('header', {
                    className: $.component__header,
                    'data-aos': 'fade-up',
                    children: (0, g.jsx)('h2', {
                      className: $.component__title,
                      children: '\u3088\u304f\u3042\u308b\u3054\u8cea\u554f',
                    }),
                  }),
                  (0, g.jsx)('div', {
                    className: $.component__content,
                    children: ne.map(function (e, t) {
                      return (0,
                      g.jsx)(Z.U, { className: $.component__item, data: te({}, e), 'data-aos': 'fade-up' }, ''.concat(e.head, '-').concat(t))
                    }),
                  }),
                ],
              }),
            }),
          })
        },
        oe = n(69027),
        le = n(84646),
        ie =
          '/_next/static/image/src/images/contract-development/bg-contact-sp.ab8787e727ef4f4b388ce84b5c570a3d.jpg',
        re =
          '/_next/static/image/src/images/contract-development/bg-contact-pc.8dd6a12bc5bc9c2d7d1118dc1044d5bd.jpg',
        ce = function () {
          var e = (0, o.YD)(le.P9),
            t = e.ref,
            n = e.inView,
            _ = (0, i.F)(),
            m = (0, a.useState)(!1),
            u = m[0],
            f = m[1]
          return (0, g.jsxs)('div', {
            className: 'l-page',
            children: [
              (0, g.jsx)(r.H, {
                title:
                  '\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\uff5c\u5e45\u5e83\u3044IT\u4e8b\u696d\u3067\u4fa1\u5024\u3092\u5171\u306b\u5275\u308a\u7d9a\u3051\u308b',
                description:
                  '\u5343\u8449\u770c\u6d66\u5b89\u5e02\u306eIT/Web\u958b\u767a\u30fbSES\u4e8b\u696d\u3067\u304a\u5ba2\u69d8\u306eIT\u6295\u8cc7\u3092\u6700\u5927\u9650\u306b\u751f\u304b\u3057\u4fa1\u5024\u3092\u5171\u306b\u5275\u308a\u7d9a\u3051\u308b\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u4f01\u696d\u3001\u682a\u5f0f\u4f1a\u793e\u30b0\u30ed\u30fc\u30a4\u30f3\u30b0\u30a2\u30a4\u30e9\u30f3\u30ba\u306e\u300c\u5171\u5275\u3059\u308b\u53d7\u8a17\u958b\u767a\u300d\u306e\u3054\u7d39\u4ecb\u30da\u30fc\u30b8\u3067\u3059\u3002\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u30fb\u4fdd\u5b88\u904b\u7528\u3001IT\u6d3b\u7528\u30fb\u30b5\u30dd\u30fc\u30c8\u3001SES\u3067\u306e\u4f53\u5236\u69cb\u7bc9\u304b\u3089\u3001Web\u30b5\u30a4\u30c8\u5236\u4f5c\u30fb\u4f01\u753b\u904b\u7528\u307e\u3067\u3001IT/Web\u306b\u95a2\u308f\u308b\u30c8\u30fc\u30bf\u30eb\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u307e\u3059\u3002',
                url: le.RH.URL + '/contract-development',
              }),
              (0, g.jsx)(c.h, { overBorder: n, onShow: f }),
              (0, g.jsxs)(l.Parallax, {
                strength: 4e3,
                contentClassName: 'l-gradient',
                className: 'l-parallax is-contract',
                children: [
                  (0, g.jsx)(y, {}),
                  (0, g.jsx)(l.Background, {
                    className: 'hidden tablet:block l-parallax__background',
                    children: (0, g.jsx)(d.q, {}),
                  }),
                  (0, g.jsxs)('main', {
                    className: 'l-main',
                    ref: t,
                    style: { position: 'relative', zIndex: 1 },
                    children: [
                      (0, g.jsx)(E, {}),
                      (0, g.jsx)(S, {}),
                      (0, g.jsx)(I, {}),
                      (0, g.jsx)(K, {}),
                      (0, g.jsx)(X, {}),
                      (0, g.jsx)(ae, {}),
                      (0, g.jsx)(p.s, {
                        params: [
                          {
                            label: '\u4e8b\u696d\n\u6982\u8981',
                            href: 'business-summary',
                          },
                          {
                            label: '\u3053\u3093\u306a\n\u304a\u56f0\u308a',
                            href: 'trouble',
                          },
                          {
                            label: '4\u3064\u306e\n\u5f37\u307f',
                            href: 'advantage',
                          },
                          {
                            label: '\u304a\u5ba2\u69d8\n\u306e\u58f0',
                            href: 'voice',
                          },
                          {
                            label:
                              '\u958b\u59cb<br class="hidden tablet:inline-block" />\u307e\u3067<br class="tablet:hidden" />\u306e<br class="hidden tablet:inline-block" />\u6d41\u308c',
                            href: 'step',
                          },
                          { label: 'FAQ', href: 'faq' },
                          {
                            label: '\u304a\u554f\u3044\n\u5408\u308f\u305b',
                            href: 'contact',
                          },
                        ],
                        headerShow: u,
                      }),
                      (0, g.jsx)(A.I, {}),
                    ],
                  }),
                  (0, g.jsx)(oe.A, {
                    text: '\u30aa\u30d5\u30b7\u30e7\u30a2\u306e\u4f4e\u30b3\u30b9\u30c8\u5b9a\u984d\u9867\u554f\u30b9\u30bf\u30a4\u30eb\u3067\u3001\n\u5b89\u5fc3\u3057\u3066\u3054\u4f9d\u983c\u3044\u305f\u3060\u3051\u308b\u4f01\u696d\u69d8\u306e\u5f37\u529b\u306a\u30d1\u30fc\u30c8\u30ca\u30fc\u3068\u3057\u3066\u4e8b\u696d\u3092\u5171\u5275\u3057\u3066\u307e\u3044\u308a\u307e\u3059\u3002\n\u307e\u305a\u306f\u304a\u6c17\u8efd\u306b\u3054\u76f8\u8ac7\u4e0b\u3055\u3044\u3002',
                    style: {
                      backgroundImage: 'url(\n              '.concat(
                        'sp' === _ ? ie : re,
                        '\n            )'
                      ),
                    },
                  }),
                ],
              }),
              (0, g.jsx)(s.$, {}),
            ],
          })
        }
    },
    92645: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/contract-development',
        function () {
          return n(81289)
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
    63330: function (e) {
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
        component: 'Advantage_component__1YOGo',
        component__inner: 'Advantage_component__inner__2p9pY',
        'component__column-header': 'Advantage_component__column-header__2sDto',
        component__header: 'Advantage_component__header__147-k',
        component__title: 'Advantage_component__title__1qrUk',
        component__text: 'Advantage_component__text__GR8OE',
        component__images: 'Advantage_component__images__3yK4P',
        component__list: 'Advantage_component__list__PX2d8',
        component__item: 'Advantage_component__item__19tOp',
        item__head: 'Advantage_item__head__3trf5',
        item__circle: 'Advantage_item__circle__2DxfD',
        item__title: 'Advantage_item__title__2shsH',
        item__body: 'Advantage_item__body__3cyS9',
        item__description: 'Advantage_item__description__f6KFA',
        showWord: 'Advantage_showWord__3yrO9',
        fadeUp: 'Advantage_fadeUp__3eAgL',
        fadeIn: 'Advantage_fadeIn__3NVIm',
      }
    },
    82156: function (e) {
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
        component: 'BusinessSummary_component__2y0je',
        component__inner: 'BusinessSummary_component__inner__3rHR3',
        'component__column-header':
          'BusinessSummary_component__column-header__vjK7s',
        component__title: 'BusinessSummary_component__title__35-u7',
        component__text: 'BusinessSummary_component__text__Xaeyk',
        component__images: 'BusinessSummary_component__images__3BQqd',
        component__detail: 'BusinessSummary_component__detail__2ivKt',
        component__attention: 'BusinessSummary_component__attention__168pQ',
        showWord: 'BusinessSummary_showWord__1yunm',
        fadeUp: 'BusinessSummary_fadeUp__2lUtR',
        fadeIn: 'BusinessSummary_fadeIn__1bihk',
      }
    },
    64636: function (e) {
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
        component: 'Faq_component__HKLIA',
        component__inner: 'Faq_component__inner__3V9tJ',
        'component__column-header': 'Faq_component__column-header__pxC2a',
        component__header: 'Faq_component__header__iKPL3',
        component__title: 'Faq_component__title__24jaR',
        component__item: 'Faq_component__item__2Ldfv',
        showWord: 'Faq_showWord__3xQQ_',
        fadeUp: 'Faq_fadeUp__1_Cli',
        fadeIn: 'Faq_fadeIn__1z24B',
      }
    },
    19496: function (e) {
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
        showWord: 'MainVisual_showWord__JMcHi',
        fadeUp: 'MainVisual_fadeUp__-Hlw-',
        fadeIn: 'MainVisual_fadeIn__202eA',
      }
    },
    8939: function (e) {
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
        component: 'Step_component__3wUUF',
        component__inner: 'Step_component__inner__3w_np',
        'component__column-header': 'Step_component__column-header__2EKk0',
        component__header: 'Step_component__header__3ascx',
        component__title: 'Step_component__title__1CDtz',
        component__list: 'Step_component__list__XqmbP',
        component__item: 'Step_component__item__2moDn',
        item: 'Step_item__7q8Tb',
        item__image: 'Step_item__image__2u37i',
        item__head: 'Step_item__head__2UF99',
        item__icon: 'Step_item__icon__1iO9W',
        item__body: 'Step_item__body__1TSP1',
        item__title: 'Step_item__title__2R6cu',
        item__text: 'Step_item__text__1I1Cg',
        item__attention: 'Step_item__attention__1RZMU',
        showWord: 'Step_showWord__1uJJp',
        fadeUp: 'Step_fadeUp__3OaOo',
        fadeIn: 'Step_fadeIn__1Acqs',
      }
    },
    69939: function (e) {
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
        component: 'Trouble_component__279gG',
        component__inner: 'Trouble_component__inner__2eH4T',
        'component__column-header': 'Trouble_component__column-header__1TWvE',
        component__header: 'Trouble_component__header__aUFtW',
        component__title: 'Trouble_component__title__1V1mj',
        component__text: 'Trouble_component__text__2Krmr',
        component__images: 'Trouble_component__images__2iFdu',
        showWord: 'Trouble_showWord__PDsb8',
        fadeUp: 'Trouble_fadeUp__WUzc3',
        fadeIn: 'Trouble_fadeIn__19S2L',
      }
    },
    35134: function (e) {
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
        component: 'Voice_component__8iTRa',
        component__inner: 'Voice_component__inner__1NOSf',
        'component__column-header': 'Voice_component__column-header__2XMT0',
        component__header: 'Voice_component__header__UIB3f',
        component__title: 'Voice_component__title__2OTKm',
        component__item: 'Voice_component__item__2Tlvc',
        showWord: 'Voice_showWord__3939w',
        fadeUp: 'Voice_fadeUp__2EDFj',
        fadeIn: 'Voice_fadeIn__2SbdO',
      }
    },
    97295: function (e, t, n) {
      'use strict'
      function a(e) {
        return (a =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Collapse = void 0)
      var o,
        l = (o = n(67294)) && o.__esModule ? o : { default: o }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
      }
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function c(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = A(e)
          if (t) {
            var o = A(this).constructor
            n = Reflect.construct(a, arguments, o)
          } else n = a.apply(this, arguments)
          return s(this, n)
        }
      }
      function s(e, t) {
        if (t && ('object' === a(t) || 'function' === typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          )
        return p(e)
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function A(e) {
        return (A = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var _ = (function (e) {
        !(function (e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && r(e, t)
        })(s, e)
        var t,
          n,
          a,
          o = c(s)
        function s(e) {
          var t
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, s),
            d(p((t = o.call(this, e))), 'timeout', void 0),
            d(p(t), 'container', void 0),
            d(p(t), 'content', void 0),
            d(p(t), 'onResize', function () {
              if ((clearTimeout(t.timeout), t.container && t.content)) {
                var e = t.props,
                  n = e.isOpened,
                  a = e.checkTimeout,
                  o = Math.floor(t.container.clientHeight),
                  l = Math.floor(t.content.clientHeight),
                  i = n && Math.abs(l - o) <= 1,
                  r = !n && Math.abs(o) <= 1
                i || r
                  ? t.onRest({
                      isFullyOpened: i,
                      isFullyClosed: r,
                      isOpened: n,
                      containerHeight: o,
                      contentHeight: l,
                    })
                  : (t.onWork({
                      isFullyOpened: i,
                      isFullyClosed: r,
                      isOpened: n,
                      containerHeight: o,
                      contentHeight: l,
                    }),
                    (t.timeout = setTimeout(function () {
                      return t.onResize()
                    }, a)))
              }
            }),
            d(p(t), 'onRest', function (e) {
              var n = e.isFullyOpened,
                a = e.isFullyClosed,
                o = e.isOpened,
                l = e.containerHeight,
                i = e.contentHeight
              if (t.container && t.content) {
                var r = o && t.container.style.height === ''.concat(i, 'px'),
                  c = !o && '0px' === t.container.style.height
                if (r || c) {
                  ;(t.container.style.overflow = o ? 'initial' : 'hidden'),
                    (t.container.style.height = o ? 'auto' : '0px')
                  var s = t.props.onRest
                  s &&
                    s({
                      isFullyOpened: n,
                      isFullyClosed: a,
                      isOpened: o,
                      containerHeight: l,
                      contentHeight: i,
                    })
                }
              }
            }),
            d(p(t), 'onWork', function (e) {
              var n = e.isFullyOpened,
                a = e.isFullyClosed,
                o = e.isOpened,
                l = e.containerHeight,
                i = e.contentHeight
              if (t.container && t.content) {
                var r = o && t.container.style.height === ''.concat(i, 'px'),
                  c = !o && '0px' === t.container.style.height
                if (!r && !c) {
                  ;(t.container.style.overflow = 'hidden'),
                    (t.container.style.height = o ? ''.concat(i, 'px') : '0px')
                  var s = t.props.onWork
                  s &&
                    s({
                      isFullyOpened: n,
                      isFullyClosed: a,
                      isOpened: o,
                      containerHeight: l,
                      contentHeight: i,
                    })
                }
              }
            }),
            d(p(t), 'onRefContainer', function (e) {
              t.container = e
            }),
            d(p(t), 'onRefContent', function (e) {
              t.content = e
            }),
            e.initialStyle
              ? (t.initialStyle = e.initialStyle)
              : (t.initialStyle = e.isOpened
                  ? { height: 'auto', overflow: 'initial' }
                  : { height: '0px', overflow: 'hidden' }),
            t
          )
        }
        return (
          (t = s),
          (n = [
            {
              key: 'componentDidMount',
              value: function () {
                this.onResize()
              },
            },
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                var t = this.props,
                  n = t.theme,
                  a = t.isOpened
                return (
                  t.children !== e.children ||
                  a !== e.isOpened ||
                  Object.keys(n).some(function (t) {
                    return n[t] !== e.theme[t]
                  })
                )
              },
            },
            {
              key: 'getSnapshotBeforeUpdate',
              value: function () {
                if (!this.container || !this.content) return null
                if ('auto' === this.container.style.height) {
                  var e = this.content.clientHeight
                  this.container.style.height = ''.concat(e, 'px')
                }
                return null
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.onResize()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                clearTimeout(this.timeout)
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.theme,
                  n = e.children,
                  a = e.isOpened
                return l.default.createElement(
                  'div',
                  {
                    ref: this.onRefContainer,
                    className: t.collapse,
                    style: this.initialStyle,
                    'aria-hidden': !a,
                  },
                  l.default.createElement(
                    'div',
                    { ref: this.onRefContent, className: t.content },
                    n
                  )
                )
              },
            },
          ]) && i(t.prototype, n),
          a && i(t, a),
          s
        )
      })(l.default.Component)
      ;(t.Collapse = _),
        d(_, 'defaultProps', {
          theme: {
            collapse: 'ReactCollapse--collapse',
            content: 'ReactCollapse--content',
          },
          initialStyle: void 0,
          onRest: void 0,
          onWork: void 0,
          checkTimeout: 50,
        })
    },
    17619: function (e, t, n) {
      'use strict'
      function a(e) {
        return (a =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.UnmountClosed = void 0)
      var o,
        l = (o = n(67294)) && o.__esModule ? o : { default: o },
        i = n(97295),
        r = ['isOpened'],
        c = ['isOpened']
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      function p(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                g(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function d(e, t) {
        if (null == e) return {}
        var n,
          a,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              a,
              o = {},
              l = Object.keys(e)
            for (a = 0; a < l.length; a++)
              (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          for (a = 0; a < l.length; a++)
            (n = l[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]))
        }
        return o
      }
      function _(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function u(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            a = b(e)
          if (t) {
            var o = b(this).constructor
            n = Reflect.construct(a, arguments, o)
          } else n = a.apply(this, arguments)
          return f(this, n)
        }
      }
      function f(e, t) {
        if (t && ('object' === a(t) || 'function' === typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          )
        return h(e)
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      var y = (function (e) {
        !(function (e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && m(e, t)
        })(p, e)
        var t,
          n,
          a,
          o = u(p)
        function p(e) {
          var t
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, p),
            g(h((t = o.call(this, e))), 'onWork', function (e) {
              var n = e.isOpened,
                a = d(e, r)
              t.setState({ isResting: !1, isOpened: n })
              var o = t.props.onWork
              o && o(A({ isOpened: n }, a))
            }),
            g(h(t), 'onRest', function (e) {
              var n = e.isOpened,
                a = d(e, c)
              t.setState({ isResting: !0, isOpened: n, isInitialRender: !1 })
              var o = t.props.onRest
              o && o(A({ isOpened: n }, a))
            }),
            g(h(t), 'getInitialStyle', function () {
              var e = t.state,
                n = e.isOpened
              return e.isInitialRender && n
                ? { height: 'auto', overflow: 'initial' }
                : { height: '0px', overflow: 'hidden' }
            }),
            (t.state = {
              isResting: !0,
              isOpened: e.isOpened,
              isInitialRender: !0,
            }),
            t
          )
        }
        return (
          (t = p),
          (n = [
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.props.isOpened
                e.isOpened !== t &&
                  this.setState({
                    isResting: !1,
                    isOpened: t,
                    isInitialRender: !1,
                  })
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.state,
                  t = e.isResting,
                  n = e.isOpened
                return t && !n
                  ? null
                  : l.default.createElement(
                      i.Collapse,
                      s({}, this.props, {
                        initialStyle: this.getInitialStyle(),
                        onWork: this.onWork,
                        onRest: this.onRest,
                      })
                    )
              },
            },
          ]) && _(t.prototype, n),
          a && _(t, a),
          p
        )
      })(l.default.PureComponent)
      ;(t.UnmountClosed = y),
        g(y, 'defaultProps', { onWork: void 0, onRest: void 0 })
    },
    56180: function (e, t, n) {
      'use strict'
      var a = n(97295).Collapse,
        o = n(17619).UnmountClosed
      ;(e.exports = o), (o.Collapse = a), (o.UnmountClosed = o)
    },
  },
  function (e) {
    e.O(0, [57, 924, 495, 273, 774, 888, 179], function () {
      return (t = 92645), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
