;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [943],
  {
    39471: function () {},
    53723: function () {},
    52535: function () {},
    97295: function (e, t, n) {
      'use strict'
      function i(e) {
        return (i =
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
      var s,
        r = (s = n(67294)) && s.__esModule ? s : { default: s }
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function l(e) {
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
            i = p(e)
          if (t) {
            var s = p(this).constructor
            n = Reflect.construct(i, arguments, s)
          } else n = i.apply(this, arguments)
          return d(this, n)
        }
      }
      function d(e, t) {
        if (t && ('object' === i(t) || 'function' === typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          )
        return c(e)
      }
      function c(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function u(e, t, n) {
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
      var f = (function (e) {
        !(function (e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && o(e, t)
        })(d, e)
        var t,
          n,
          i,
          s = l(d)
        function d(e) {
          var t
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, d),
            u(c((t = s.call(this, e))), 'timeout', void 0),
            u(c(t), 'container', void 0),
            u(c(t), 'content', void 0),
            u(c(t), 'onResize', function () {
              if ((clearTimeout(t.timeout), t.container && t.content)) {
                var e = t.props,
                  n = e.isOpened,
                  i = e.checkTimeout,
                  s = Math.floor(t.container.clientHeight),
                  r = Math.floor(t.content.clientHeight),
                  a = n && Math.abs(r - s) <= 1,
                  o = !n && Math.abs(s) <= 1
                a || o
                  ? t.onRest({
                      isFullyOpened: a,
                      isFullyClosed: o,
                      isOpened: n,
                      containerHeight: s,
                      contentHeight: r,
                    })
                  : (t.onWork({
                      isFullyOpened: a,
                      isFullyClosed: o,
                      isOpened: n,
                      containerHeight: s,
                      contentHeight: r,
                    }),
                    (t.timeout = setTimeout(function () {
                      return t.onResize()
                    }, i)))
              }
            }),
            u(c(t), 'onRest', function (e) {
              var n = e.isFullyOpened,
                i = e.isFullyClosed,
                s = e.isOpened,
                r = e.containerHeight,
                a = e.contentHeight
              if (t.container && t.content) {
                var o = s && t.container.style.height === ''.concat(a, 'px'),
                  l = !s && '0px' === t.container.style.height
                if (o || l) {
                  ;(t.container.style.overflow = s ? 'initial' : 'hidden'),
                    (t.container.style.height = s ? 'auto' : '0px')
                  var d = t.props.onRest
                  d &&
                    d({
                      isFullyOpened: n,
                      isFullyClosed: i,
                      isOpened: s,
                      containerHeight: r,
                      contentHeight: a,
                    })
                }
              }
            }),
            u(c(t), 'onWork', function (e) {
              var n = e.isFullyOpened,
                i = e.isFullyClosed,
                s = e.isOpened,
                r = e.containerHeight,
                a = e.contentHeight
              if (t.container && t.content) {
                var o = s && t.container.style.height === ''.concat(a, 'px'),
                  l = !s && '0px' === t.container.style.height
                if (!o && !l) {
                  ;(t.container.style.overflow = 'hidden'),
                    (t.container.style.height = s ? ''.concat(a, 'px') : '0px')
                  var d = t.props.onWork
                  d &&
                    d({
                      isFullyOpened: n,
                      isFullyClosed: i,
                      isOpened: s,
                      containerHeight: r,
                      contentHeight: a,
                    })
                }
              }
            }),
            u(c(t), 'onRefContainer', function (e) {
              t.container = e
            }),
            u(c(t), 'onRefContent', function (e) {
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
          (t = d),
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
                  i = t.isOpened
                return (
                  t.children !== e.children ||
                  i !== e.isOpened ||
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
                  i = e.isOpened
                return r.default.createElement(
                  'div',
                  {
                    ref: this.onRefContainer,
                    className: t.collapse,
                    style: this.initialStyle,
                    'aria-hidden': !i,
                  },
                  r.default.createElement(
                    'div',
                    { ref: this.onRefContent, className: t.content },
                    n
                  )
                )
              },
            },
          ]) && a(t.prototype, n),
          i && a(t, i),
          d
        )
      })(r.default.Component)
      ;(t.Collapse = f),
        u(f, 'defaultProps', {
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
      function i(e) {
        return (i =
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
      var s,
        r = (s = n(67294)) && s.__esModule ? s : { default: s },
        a = n(97295),
        o = ['isOpened'],
        l = ['isOpened']
      function d() {
        return (d =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      function c(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                b(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function u(e, t) {
        if (null == e) return {}
        var n,
          i,
          s = (function (e, t) {
            if (null == e) return {}
            var n,
              i,
              s = {},
              r = Object.keys(e)
            for (i = 0; i < r.length; i++)
              (n = r[i]), t.indexOf(n) >= 0 || (s[n] = e[n])
            return s
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          for (i = 0; i < r.length; i++)
            (n = r[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (s[n] = e[n]))
        }
        return s
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function m(e) {
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
            i = y(e)
          if (t) {
            var s = y(this).constructor
            n = Reflect.construct(i, arguments, s)
          } else n = i.apply(this, arguments)
          return g(this, n)
        }
      }
      function g(e, t) {
        if (t && ('object' === i(t) || 'function' === typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          )
        return v(e)
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }
      function y(e) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function b(e, t, n) {
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
      var w = (function (e) {
        !(function (e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && h(e, t)
        })(c, e)
        var t,
          n,
          i,
          s = m(c)
        function c(e) {
          var t
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, c),
            b(v((t = s.call(this, e))), 'onWork', function (e) {
              var n = e.isOpened,
                i = u(e, o)
              t.setState({ isResting: !1, isOpened: n })
              var s = t.props.onWork
              s && s(p({ isOpened: n }, i))
            }),
            b(v(t), 'onRest', function (e) {
              var n = e.isOpened,
                i = u(e, l)
              t.setState({ isResting: !0, isOpened: n, isInitialRender: !1 })
              var s = t.props.onRest
              s && s(p({ isOpened: n }, i))
            }),
            b(v(t), 'getInitialStyle', function () {
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
          (t = c),
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
                  : r.default.createElement(
                      a.Collapse,
                      d({}, this.props, {
                        initialStyle: this.getInitialStyle(),
                        onWork: this.onWork,
                        onRest: this.onRest,
                      })
                    )
              },
            },
          ]) && f(t.prototype, n),
          i && f(t, i),
          c
        )
      })(r.default.PureComponent)
      ;(t.UnmountClosed = w),
        b(w, 'defaultProps', { onWork: void 0, onRest: void 0 })
    },
    56180: function (e, t, n) {
      'use strict'
      var i = n(97295).Collapse,
        s = n(17619).UnmountClosed
      ;(e.exports = s), (s.Collapse = i), (s.UnmountClosed = s)
    },
    70131: function (e, t, n) {
      'use strict'
      n.d(t, {
        YD: function () {
          return m
        },
      })
      var i = n(67294)
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var a = new Map(),
        o = new WeakMap(),
        l = 0,
        d = void 0
      function c(e) {
        return Object.keys(e)
          .sort()
          .filter(function (t) {
            return void 0 !== e[t]
          })
          .map(function (t) {
            return (
              t +
              '_' +
              ('root' === t
                ? (n = e.root)
                  ? (o.has(n) || ((l += 1), o.set(n, l.toString())), o.get(n))
                  : '0'
                : e[t])
            )
            var n
          })
          .toString()
      }
      function p(e, t, n, i) {
        if (
          (void 0 === n && (n = {}),
          void 0 === i && (i = d),
          'undefined' === typeof window.IntersectionObserver && void 0 !== i)
        ) {
          var s = e.getBoundingClientRect()
          return (
            t(i, {
              isIntersecting: i,
              target: e,
              intersectionRatio:
                'number' === typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: s,
              intersectionRect: s,
              rootBounds: s,
            }),
            function () {}
          )
        }
        var r = (function (e) {
            var t = c(e),
              n = a.get(t)
            if (!n) {
              var i,
                s = new Map(),
                r = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var n,
                      r =
                        t.isIntersecting &&
                        i.some(function (e) {
                          return t.intersectionRatio >= e
                        })
                    e.trackVisibility &&
                      'undefined' === typeof t.isVisible &&
                      (t.isVisible = r),
                      null == (n = s.get(t.target)) ||
                        n.forEach(function (e) {
                          e(r, t)
                        })
                  })
                }, e)
              ;(i =
                r.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (n = { id: t, observer: r, elements: s }),
                a.set(t, n)
            }
            return n
          })(n),
          o = r.id,
          l = r.observer,
          p = r.elements,
          u = p.get(e) || []
        return (
          p.has(e) || p.set(e, u),
          u.push(t),
          l.observe(e),
          function () {
            u.splice(u.indexOf(t), 1),
              0 === u.length && (p.delete(e), l.unobserve(e)),
              0 === p.size && (l.disconnect(), a.delete(o))
          }
        )
      }
      var u = [
        'children',
        'as',
        'triggerOnce',
        'threshold',
        'root',
        'rootMargin',
        'onChange',
        'skip',
        'trackVisibility',
        'delay',
        'initialInView',
        'fallbackInView',
      ]
      function f(e) {
        return 'function' !== typeof e.children
      }
      var h = (function (e) {
        var t, n
        function a(t) {
          var n
          return (
            ((n = e.call(this, t) || this).node = null),
            (n._unobserveCb = null),
            (n.handleNode = function (e) {
              n.node &&
                (n.unobserve(),
                e ||
                  n.props.triggerOnce ||
                  n.props.skip ||
                  n.setState({
                    inView: !!n.props.initialInView,
                    entry: void 0,
                  })),
                (n.node = e || null),
                n.observeNode()
            }),
            (n.handleChange = function (e, t) {
              e && n.props.triggerOnce && n.unobserve(),
                f(n.props) || n.setState({ inView: e, entry: t }),
                n.props.onChange && n.props.onChange(e, t)
            }),
            (n.state = { inView: !!t.initialInView, entry: void 0 }),
            n
          )
        }
        ;(n = e),
          ((t = a).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          r(t, n)
        var o = a.prototype
        return (
          (o.componentDidUpdate = function (e) {
            ;(e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode())
          }),
          (o.componentWillUnmount = function () {
            this.unobserve(), (this.node = null)
          }),
          (o.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                t = e.threshold,
                n = e.root,
                i = e.rootMargin,
                s = e.trackVisibility,
                r = e.delay,
                a = e.fallbackInView
              this._unobserveCb = p(
                this.node,
                this.handleChange,
                {
                  threshold: t,
                  root: n,
                  rootMargin: i,
                  trackVisibility: s,
                  delay: r,
                },
                a
              )
            }
          }),
          (o.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null))
          }),
          (o.render = function () {
            if (!f(this.props)) {
              var e = this.state,
                t = e.inView,
                n = e.entry
              return this.props.children({
                inView: t,
                entry: n,
                ref: this.handleNode,
              })
            }
            var r = this.props,
              a = r.children,
              o = r.as,
              l = (function (e, t) {
                if (null == e) return {}
                var n,
                  i,
                  s = {},
                  r = Object.keys(e)
                for (i = 0; i < r.length; i++)
                  (n = r[i]), t.indexOf(n) >= 0 || (s[n] = e[n])
                return s
              })(r, u)
            return i.createElement(
              o || 'div',
              s({ ref: this.handleNode }, l),
              a
            )
          }),
          a
        )
      })(i.Component)
      function m(e) {
        var t = void 0 === e ? {} : e,
          n = t.threshold,
          s = t.delay,
          r = t.trackVisibility,
          a = t.rootMargin,
          o = t.root,
          l = t.triggerOnce,
          d = t.skip,
          c = t.initialInView,
          u = t.fallbackInView,
          f = i.useRef(),
          h = i.useState({ inView: !!c }),
          m = h[0],
          g = h[1],
          v = i.useCallback(
            function (e) {
              void 0 !== f.current && (f.current(), (f.current = void 0)),
                d ||
                  (e &&
                    (f.current = p(
                      e,
                      function (e, t) {
                        g({ inView: e, entry: t }),
                          t.isIntersecting &&
                            l &&
                            f.current &&
                            (f.current(), (f.current = void 0))
                      },
                      {
                        root: o,
                        rootMargin: a,
                        threshold: n,
                        trackVisibility: r,
                        delay: s,
                      },
                      u
                    )))
            },
            [Array.isArray(n) ? n.toString() : n, o, a, l, d, r, u, s]
          )
        ;(0, i.useEffect)(function () {
          f.current || !m.entry || l || d || g({ inView: !!c })
        })
        var y = [v, m.inView, m.entry]
        return (y.ref = y[0]), (y.inView = y[1]), (y.entry = y[2]), y
      }
      ;(h.displayName = 'InView'),
        (h.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 })
    },
    84956: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return s
        },
      })
      var i = n(67294)
      function s() {
        var e = (0, i.useRef)(!1),
          t = (0, i.useCallback)(function () {
            return e.current
          }, [])
        return (
          (0, i.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          t
        )
      }
    },
    44586: function (e, t, n) {
      'use strict'
      var i
      n.d(t, {
        Z: function () {
          return p
        },
      })
      var s = new Uint8Array(16)
      function r() {
        if (
          !i &&
          !(i =
            ('undefined' !== typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ('undefined' !== typeof msCrypto &&
              'function' === typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
          )
        return i(s)
      }
      var a =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
      for (
        var o = function (e) {
            return 'string' === typeof e && a.test(e)
          },
          l = [],
          d = 0;
        d < 256;
        ++d
      )
        l.push((d + 256).toString(16).substr(1))
      var c = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (
            l[e[t + 0]] +
            l[e[t + 1]] +
            l[e[t + 2]] +
            l[e[t + 3]] +
            '-' +
            l[e[t + 4]] +
            l[e[t + 5]] +
            '-' +
            l[e[t + 6]] +
            l[e[t + 7]] +
            '-' +
            l[e[t + 8]] +
            l[e[t + 9]] +
            '-' +
            l[e[t + 10]] +
            l[e[t + 11]] +
            l[e[t + 12]] +
            l[e[t + 13]] +
            l[e[t + 14]] +
            l[e[t + 15]]
          ).toLowerCase()
        if (!o(n)) throw TypeError('Stringified UUID is invalid')
        return n
      }
      var p = function (e, t, n) {
        var i = (e = e || {}).random || (e.rng || r)()
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) {
          n = n || 0
          for (var s = 0; s < 16; ++s) t[n + s] = i[s]
          return t
        }
        return c(i)
      }
    },
    51801: function (e, t, n) {
      'use strict'
      n.d(t, {
        t: function () {
          return y
        },
        o: function () {
          return w
        },
      })
      var i = n(67294),
        s = n(39257)
      function r(e) {
        return (
          'object' === typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        )
      }
      function a(e, t) {
        const n = ['__proto__', 'constructor', 'prototype']
        Object.keys(t)
          .filter((e) => n.indexOf(e) < 0)
          .forEach((n) => {
            'undefined' === typeof e[n]
              ? (e[n] = t[n])
              : r(t[n]) && r(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : a(e[n], t[n])
              : (e[n] = t[n])
          })
      }
      function o(e = {}) {
        return (
          e.navigation &&
          'undefined' === typeof e.navigation.nextEl &&
          'undefined' === typeof e.navigation.prevEl
        )
      }
      function l(e = {}) {
        return e.pagination && 'undefined' === typeof e.pagination.el
      }
      function d(e = {}) {
        return e.scrollbar && 'undefined' === typeof e.scrollbar.el
      }
      function c(e = '') {
        const t = e
            .split(' ')
            .map((e) => e.trim())
            .filter((e) => !!e),
          n = []
        return (
          t.forEach((e) => {
            n.indexOf(e) < 0 && n.push(e)
          }),
          n.join(' ')
        )
      }
      const p = [
        'modules',
        'init',
        '_direction',
        'touchEventsTarget',
        'initialSlide',
        '_speed',
        'cssMode',
        'updateOnWindowResize',
        'resizeObserver',
        'nested',
        'focusableElements',
        '_enabled',
        '_width',
        '_height',
        'preventInteractionOnTransition',
        'userAgent',
        'url',
        '_edgeSwipeDetection',
        '_edgeSwipeThreshold',
        '_freeMode',
        '_autoHeight',
        'setWrapperSize',
        'virtualTranslate',
        '_effect',
        'breakpoints',
        '_spaceBetween',
        '_slidesPerView',
        '_grid',
        '_slidesPerGroup',
        '_slidesPerGroupSkip',
        '_slidesPerGroupAuto',
        '_centeredSlides',
        '_centeredSlidesBounds',
        '_slidesOffsetBefore',
        '_slidesOffsetAfter',
        'normalizeSlideIndex',
        '_centerInsufficientSlides',
        '_watchOverflow',
        'roundLengths',
        'touchRatio',
        'touchAngle',
        'simulateTouch',
        '_shortSwipes',
        '_longSwipes',
        'longSwipesRatio',
        'longSwipesMs',
        '_followFinger',
        'allowTouchMove',
        '_threshold',
        'touchMoveStopPropagation',
        'touchStartPreventDefault',
        'touchStartForcePreventDefault',
        'touchReleaseOnEdges',
        'uniqueNavElements',
        '_resistance',
        '_resistanceRatio',
        '_watchSlidesProgress',
        '_grabCursor',
        'preventClicks',
        'preventClicksPropagation',
        '_slideToClickedSlide',
        '_preloadImages',
        'updateOnImagesReady',
        '_loop',
        '_loopAdditionalSlides',
        '_loopedSlides',
        '_loopFillGroupWithBlank',
        'loopPreventsSlide',
        '_rewind',
        '_allowSlidePrev',
        '_allowSlideNext',
        '_swipeHandler',
        '_noSwiping',
        'noSwipingClass',
        'noSwipingSelector',
        'passiveListeners',
        'containerModifierClass',
        'slideClass',
        'slideBlankClass',
        'slideActiveClass',
        'slideDuplicateActiveClass',
        'slideVisibleClass',
        'slideDuplicateClass',
        'slideNextClass',
        'slideDuplicateNextClass',
        'slidePrevClass',
        'slideDuplicatePrevClass',
        'wrapperClass',
        'runCallbacksOnInit',
        'observer',
        'observeParents',
        'observeSlideChildren',
        'a11y',
        'autoplay',
        '_controller',
        'coverflowEffect',
        'cubeEffect',
        'fadeEffect',
        'flipEffect',
        'creativeEffect',
        'cardsEffect',
        'hashNavigation',
        'history',
        'keyboard',
        'lazy',
        'mousewheel',
        '_navigation',
        '_pagination',
        'parallax',
        '_scrollbar',
        '_thumbs',
        'virtual',
        'zoom',
      ]
      function u(e, t) {
        let n = t.slidesPerView
        if (t.breakpoints) {
          const e = s.ZP.prototype.getBreakpoint(t.breakpoints),
            i = e in t.breakpoints ? t.breakpoints[e] : void 0
          i && i.slidesPerView && (n = i.slidesPerView)
        }
        let i = Math.ceil(parseFloat(t.loopedSlides || n, 10))
        return (i += t.loopAdditionalSlides), i > e.length && (i = e.length), i
      }
      function f(e) {
        const t = []
        return (
          i.Children.toArray(e).forEach((e) => {
            e.type && 'SwiperSlide' === e.type.displayName
              ? t.push(e)
              : e.props &&
                e.props.children &&
                f(e.props.children).forEach((e) => t.push(e))
          }),
          t
        )
      }
      function h(e) {
        const t = [],
          n = {
            'container-start': [],
            'container-end': [],
            'wrapper-start': [],
            'wrapper-end': [],
          }
        return (
          i.Children.toArray(e).forEach((e) => {
            if (e.type && 'SwiperSlide' === e.type.displayName) t.push(e)
            else if (e.props && e.props.slot && n[e.props.slot])
              n[e.props.slot].push(e)
            else if (e.props && e.props.children) {
              const i = f(e.props.children)
              i.length > 0
                ? i.forEach((e) => t.push(e))
                : n['container-end'].push(e)
            } else n['container-end'].push(e)
          }),
          { slides: t, slots: n }
        )
      }
      function m({
        swiper: e,
        slides: t,
        passedParams: n,
        changedParams: i,
        nextEl: s,
        prevEl: o,
        scrollbarEl: l,
        paginationEl: d,
      }) {
        const c = i.filter((e) => 'children' !== e && 'direction' !== e),
          {
            params: p,
            pagination: u,
            navigation: f,
            scrollbar: h,
            virtual: m,
            thumbs: g,
          } = e
        let v, y, b, w, C
        i.includes('thumbs') &&
          n.thumbs &&
          n.thumbs.swiper &&
          p.thumbs &&
          !p.thumbs.swiper &&
          (v = !0),
          i.includes('controller') &&
            n.controller &&
            n.controller.control &&
            p.controller &&
            !p.controller.control &&
            (y = !0),
          i.includes('pagination') &&
            n.pagination &&
            (n.pagination.el || d) &&
            (p.pagination || !1 === p.pagination) &&
            u &&
            !u.el &&
            (b = !0),
          i.includes('scrollbar') &&
            n.scrollbar &&
            (n.scrollbar.el || l) &&
            (p.scrollbar || !1 === p.scrollbar) &&
            h &&
            !h.el &&
            (w = !0),
          i.includes('navigation') &&
            n.navigation &&
            (n.navigation.prevEl || o) &&
            (n.navigation.nextEl || s) &&
            (p.navigation || !1 === p.navigation) &&
            f &&
            !f.prevEl &&
            !f.nextEl &&
            (C = !0)
        if (
          (c.forEach((t) => {
            if (r(p[t]) && r(n[t])) a(p[t], n[t])
            else {
              const s = n[t]
              ;(!0 !== s && !1 !== s) ||
              ('navigation' !== t && 'pagination' !== t && 'scrollbar' !== t)
                ? (p[t] = n[t])
                : !1 === s &&
                  e[(i = t)] &&
                  (e[i].destroy(),
                  'navigation' === i
                    ? ((p[i].prevEl = void 0),
                      (p[i].nextEl = void 0),
                      (e[i].prevEl = void 0),
                      (e[i].nextEl = void 0))
                    : ((p[i].el = void 0), (e[i].el = void 0)))
            }
            var i
          }),
          i.includes('children') && m && p.virtual.enabled
            ? ((m.slides = t), m.update(!0))
            : i.includes('children') &&
              e.lazy &&
              e.params.lazy.enabled &&
              e.lazy.load(),
          v)
        ) {
          g.init() && g.update(!0)
        }
        y && (e.controller.control = p.controller.control),
          b && (d && (p.pagination.el = d), u.init(), u.render(), u.update()),
          w &&
            (l && (p.scrollbar.el = l),
            h.init(),
            h.updateSize(),
            h.setTranslate()),
          C &&
            (s && (p.navigation.nextEl = s),
            o && (p.navigation.prevEl = o),
            f.init(),
            f.update()),
          i.includes('allowSlideNext') && (e.allowSlideNext = n.allowSlideNext),
          i.includes('allowSlidePrev') && (e.allowSlidePrev = n.allowSlidePrev),
          i.includes('direction') && e.changeDirection(n.direction, !1),
          e.update()
      }
      function g(e, t) {
        return 'undefined' === typeof window
          ? (0, i.useEffect)(e, t)
          : (0, i.useLayoutEffect)(e, t)
      }
      function v() {
        return (v =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      const y = (0, i.forwardRef)(
        (
          {
            className: e,
            tag: t = 'div',
            wrapperTag: n = 'div',
            children: f,
            onSwiper: y,
            ...b
          } = {},
          w
        ) => {
          let C = !1
          const [S, E] = (0, i.useState)('swiper'),
            [T, x] = (0, i.useState)(null),
            [O, k] = (0, i.useState)(!1),
            P = (0, i.useRef)(!1),
            M = (0, i.useRef)(null),
            $ = (0, i.useRef)(null),
            _ = (0, i.useRef)(null),
            L = (0, i.useRef)(null),
            I = (0, i.useRef)(null),
            z = (0, i.useRef)(null),
            A = (0, i.useRef)(null),
            j = (0, i.useRef)(null),
            {
              params: D,
              passedParams: N,
              rest: R,
              events: G,
            } = (function (e = {}) {
              const t = { on: {} },
                n = {},
                i = {}
              a(t, s.ZP.defaults),
                a(t, s.ZP.extendedDefaults),
                (t._emitClasses = !0),
                (t.init = !1)
              const o = {},
                l = p.map((e) => e.replace(/_/, ''))
              return (
                Object.keys(e).forEach((s) => {
                  l.indexOf(s) >= 0
                    ? r(e[s])
                      ? ((t[s] = {}), (i[s] = {}), a(t[s], e[s]), a(i[s], e[s]))
                      : ((t[s] = e[s]), (i[s] = e[s]))
                    : 0 === s.search(/on[A-Z]/) && 'function' === typeof e[s]
                    ? (n[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
                    : (o[s] = e[s])
                }),
                ['navigation', 'pagination', 'scrollbar'].forEach((e) => {
                  !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e]
                }),
                { params: t, passedParams: i, rest: o, events: n }
              )
            })(b),
            { slides: B, slots: V } = h(f),
            F = () => {
              k(!O)
            }
          if (
            (Object.assign(D.on, {
              _containerClasses(e, t) {
                E(t)
              },
            }),
            !M.current &&
              (Object.assign(D.on, G),
              (C = !0),
              ($.current = (function (e) {
                return new s.ZP(e)
              })(D)),
              ($.current.loopCreate = () => {}),
              ($.current.loopDestroy = () => {}),
              D.loop && ($.current.loopedSlides = u(B, D)),
              $.current.virtual && $.current.params.virtual.enabled))
          ) {
            $.current.virtual.slides = B
            const e = {
              cache: !1,
              slides: B,
              renderExternal: x,
              renderExternalUpdate: !1,
            }
            a($.current.params.virtual, e),
              a($.current.originalParams.virtual, e)
          }
          $.current && $.current.on('_beforeBreakpoint', F)
          return (
            (0, i.useEffect)(() => () => {
              $.current && $.current.off('_beforeBreakpoint', F)
            }),
            (0, i.useEffect)(() => {
              !P.current &&
                $.current &&
                ($.current.emitSlidesClasses(), (P.current = !0))
            }),
            g(() => {
              if ((w && (w.current = M.current), M.current))
                return (
                  (function (
                    {
                      el: e,
                      nextEl: t,
                      prevEl: n,
                      paginationEl: i,
                      scrollbarEl: s,
                      swiper: r,
                    },
                    a
                  ) {
                    o(a) &&
                      t &&
                      n &&
                      ((r.params.navigation.nextEl = t),
                      (r.originalParams.navigation.nextEl = t),
                      (r.params.navigation.prevEl = n),
                      (r.originalParams.navigation.prevEl = n)),
                      l(a) &&
                        i &&
                        ((r.params.pagination.el = i),
                        (r.originalParams.pagination.el = i)),
                      d(a) &&
                        s &&
                        ((r.params.scrollbar.el = s),
                        (r.originalParams.scrollbar.el = s)),
                      r.init(e)
                  })(
                    {
                      el: M.current,
                      nextEl: I.current,
                      prevEl: z.current,
                      paginationEl: A.current,
                      scrollbarEl: j.current,
                      swiper: $.current,
                    },
                    D
                  ),
                  y && y($.current),
                  () => {
                    $.current &&
                      !$.current.destroyed &&
                      $.current.destroy(!0, !1)
                  }
                )
            }, []),
            g(() => {
              !C &&
                G &&
                $.current &&
                Object.keys(G).forEach((e) => {
                  $.current.on(e, G[e])
                })
              const e = (function (e, t, n, i) {
                const s = []
                if (!t) return s
                const a = (e) => {
                    s.indexOf(e) < 0 && s.push(e)
                  },
                  o = i.map((e) => e.key),
                  l = n.map((e) => e.key)
                return (
                  o.join('') !== l.join('') && a('children'),
                  i.length !== n.length && a('children'),
                  p
                    .filter((e) => '_' === e[0])
                    .map((e) => e.replace(/_/, ''))
                    .forEach((n) => {
                      if (n in e && n in t)
                        if (r(e[n]) && r(t[n])) {
                          const i = Object.keys(e[n]),
                            s = Object.keys(t[n])
                          i.length !== s.length
                            ? a(n)
                            : (i.forEach((i) => {
                                e[n][i] !== t[n][i] && a(n)
                              }),
                              s.forEach((i) => {
                                e[n][i] !== t[n][i] && a(n)
                              }))
                        } else e[n] !== t[n] && a(n)
                    }),
                  s
                )
              })(N, _.current, B, L.current)
              return (
                (_.current = N),
                (L.current = B),
                e.length &&
                  $.current &&
                  !$.current.destroyed &&
                  m({
                    swiper: $.current,
                    slides: B,
                    passedParams: N,
                    changedParams: e,
                    nextEl: I.current,
                    prevEl: z.current,
                    scrollbarEl: j.current,
                    paginationEl: A.current,
                  }),
                () => {
                  G &&
                    $.current &&
                    Object.keys(G).forEach((e) => {
                      $.current.off(e, G[e])
                    })
                }
              )
            }),
            g(() => {
              var e
              !(e = $.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate())
            }, [T]),
            i.createElement(
              t,
              v({ ref: M, className: c(`${S}${e ? ` ${e}` : ''}`) }, R),
              V['container-start'],
              o(D) &&
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement('div', {
                    ref: z,
                    className: 'swiper-button-prev',
                  }),
                  i.createElement('div', {
                    ref: I,
                    className: 'swiper-button-next',
                  })
                ),
              d(D) &&
                i.createElement('div', {
                  ref: j,
                  className: 'swiper-scrollbar',
                }),
              l(D) &&
                i.createElement('div', {
                  ref: A,
                  className: 'swiper-pagination',
                }),
              i.createElement(
                n,
                { className: 'swiper-wrapper' },
                V['wrapper-start'],
                D.virtual
                  ? (function (e, t, n) {
                      if (!n) return null
                      const s = e.isHorizontal()
                        ? {
                            [e.rtlTranslate
                              ? 'right'
                              : 'left']: `${n.offset}px`,
                          }
                        : { top: `${n.offset}px` }
                      return t
                        .filter((e, t) => t >= n.from && t <= n.to)
                        .map((t) => i.cloneElement(t, { swiper: e, style: s }))
                    })($.current, B, T)
                  : !D.loop || ($.current && $.current.destroyed)
                  ? B.map((e) => i.cloneElement(e, { swiper: $.current }))
                  : (function (e, t, n) {
                      const s = t.map((t, n) =>
                        i.cloneElement(t, {
                          swiper: e,
                          'data-swiper-slide-index': n,
                        })
                      )
                      function r(e, t, s) {
                        return i.cloneElement(e, {
                          key: `${e.key}-duplicate-${t}-${s}`,
                          className: `${e.props.className || ''} ${
                            n.slideDuplicateClass
                          }`,
                        })
                      }
                      if (n.loopFillGroupWithBlank) {
                        const e =
                          n.slidesPerGroup - (s.length % n.slidesPerGroup)
                        if (e !== n.slidesPerGroup)
                          for (let t = 0; t < e; t += 1) {
                            const e = i.createElement('div', {
                              className: `${n.slideClass} ${n.slideBlankClass}`,
                            })
                            s.push(e)
                          }
                      }
                      'auto' !== n.slidesPerView ||
                        n.loopedSlides ||
                        (n.loopedSlides = s.length)
                      const a = u(s, n),
                        o = [],
                        l = []
                      return (
                        s.forEach((e, t) => {
                          t < a && l.push(r(e, t, 'prepend')),
                            t < s.length &&
                              t >= s.length - a &&
                              o.push(r(e, t, 'append'))
                        }),
                        e && (e.loopedSlides = a),
                        [...o, ...s, ...l]
                      )
                    })($.current, B, D),
                V['wrapper-end']
              ),
              V['container-end']
            )
          )
        }
      )
      function b() {
        return (b =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      y.displayName = 'Swiper'
      const w = (0, i.forwardRef)(
        (
          {
            tag: e = 'div',
            children: t,
            className: n = '',
            swiper: s,
            zoom: r,
            virtualIndex: a,
            ...o
          } = {},
          l
        ) => {
          const d = (0, i.useRef)(null),
            [p, u] = (0, i.useState)('swiper-slide')
          function f(e, t, n) {
            t === d.current && u(n)
          }
          let h
          g(() => {
            if ((l && (l.current = d.current), d.current && s)) {
              if (!s.destroyed)
                return (
                  s.on('_slideClass', f),
                  () => {
                    s && s.off('_slideClass', f)
                  }
                )
              'swiper-slide' !== p && u('swiper-slide')
            }
          }),
            g(() => {
              s && d.current && u(s.getSlideClasses(d.current))
            }, [s]),
            'function' === typeof t &&
              (h = {
                isActive:
                  p.indexOf('swiper-slide-active') >= 0 ||
                  p.indexOf('swiper-slide-duplicate-active') >= 0,
                isVisible: p.indexOf('swiper-slide-visible') >= 0,
                isDuplicate: p.indexOf('swiper-slide-duplicate') >= 0,
                isPrev:
                  p.indexOf('swiper-slide-prev') >= 0 ||
                  p.indexOf('swiper-slide-duplicate-prev') >= 0,
                isNext:
                  p.indexOf('swiper-slide-next') >= 0 ||
                  p.indexOf('swiper-slide-duplicate-next') >= 0,
              })
          const m = () => ('function' === typeof t ? t(h) : t)
          return i.createElement(
            e,
            b(
              {
                ref: d,
                className: c(`${p}${n ? ` ${n}` : ''}`),
                'data-swiper-slide-index': a,
              },
              o
            ),
            r
              ? i.createElement(
                  'div',
                  {
                    className: 'swiper-zoom-container',
                    'data-swiper-zoom': 'number' === typeof r ? r : void 0,
                  },
                  m()
                )
              : m()
          )
        }
      )
      w.displayName = 'SwiperSlide'
    },
    39257: function (e, t, n) {
      'use strict'
      function i(e) {
        return (
          null !== e &&
          'object' === typeof e &&
          'constructor' in e &&
          e.constructor === Object
        )
      }
      function s(e = {}, t = {}) {
        Object.keys(t).forEach((n) => {
          'undefined' === typeof e[n]
            ? (e[n] = t[n])
            : i(t[n]) &&
              i(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              s(e[n], t[n])
        })
      }
      n.d(t, {
        pt: function () {
          return J
        },
        W_: function () {
          return U
        },
        tl: function () {
          return K
        },
        ZP: function () {
          return Y
        },
      })
      const r = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      }
      function a() {
        const e = 'undefined' !== typeof document ? document : {}
        return s(e, r), e
      }
      const o = {
        document: r,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => '' }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          'undefined' === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          'undefined' !== typeof setTimeout && clearTimeout(e)
        },
      }
      function l() {
        const e = 'undefined' !== typeof window ? window : {}
        return s(e, o), e
      }
      class d extends Array {
        constructor(e) {
          'number' === typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__
                Object.defineProperty(e, '__proto__', {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e
                  },
                })
              })(this))
        }
      }
      function c(e = []) {
        const t = []
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...c(e)) : t.push(e)
          }),
          t
        )
      }
      function p(e, t) {
        return Array.prototype.filter.call(e, t)
      }
      function u(e, t) {
        const n = l(),
          i = a()
        let s = []
        if (!t && e instanceof d) return e
        if (!e) return new d(s)
        if ('string' === typeof e) {
          const n = e.trim()
          if (n.indexOf('<') >= 0 && n.indexOf('>') >= 0) {
            let e = 'div'
            0 === n.indexOf('<li') && (e = 'ul'),
              0 === n.indexOf('<tr') && (e = 'tbody'),
              (0 !== n.indexOf('<td') && 0 !== n.indexOf('<th')) || (e = 'tr'),
              0 === n.indexOf('<tbody') && (e = 'table'),
              0 === n.indexOf('<option') && (e = 'select')
            const t = i.createElement(e)
            t.innerHTML = n
            for (let n = 0; n < t.childNodes.length; n += 1)
              s.push(t.childNodes[n])
          } else
            s = (function (e, t) {
              if ('string' !== typeof e) return [e]
              const n = [],
                i = t.querySelectorAll(e)
              for (let s = 0; s < i.length; s += 1) n.push(i[s])
              return n
            })(e.trim(), t || i)
        } else if (e.nodeType || e === n || e === i) s.push(e)
        else if (Array.isArray(e)) {
          if (e instanceof d) return e
          s = e
        }
        return new d(
          (function (e) {
            const t = []
            for (let n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n])
            return t
          })(s)
        )
      }
      u.fn = d.prototype
      const f = 'resize scroll'.split(' ')
      function h(e) {
        return function (...t) {
          if ('undefined' === typeof t[0]) {
            for (let t = 0; t < this.length; t += 1)
              f.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : u(this[t]).trigger(e))
            return this
          }
          return this.on(e, ...t)
        }
      }
      h('click'),
        h('blur'),
        h('focus'),
        h('focusin'),
        h('focusout'),
        h('keyup'),
        h('keydown'),
        h('keypress'),
        h('submit'),
        h('change'),
        h('mousedown'),
        h('mousemove'),
        h('mouseup'),
        h('mouseenter'),
        h('mouseleave'),
        h('mouseout'),
        h('mouseover'),
        h('touchstart'),
        h('touchend'),
        h('touchmove'),
        h('resize'),
        h('scroll')
      const m = {
        addClass: function (...e) {
          const t = c(e.map((e) => e.split(' ')))
          return (
            this.forEach((e) => {
              e.classList.add(...t)
            }),
            this
          )
        },
        removeClass: function (...e) {
          const t = c(e.map((e) => e.split(' ')))
          return (
            this.forEach((e) => {
              e.classList.remove(...t)
            }),
            this
          )
        },
        hasClass: function (...e) {
          const t = c(e.map((e) => e.split(' ')))
          return (
            p(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          )
        },
        toggleClass: function (...e) {
          const t = c(e.map((e) => e.split(' ')))
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t)
            })
          })
        },
        attr: function (e, t) {
          if (1 === arguments.length && 'string' === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t)
            else
              for (const t in e)
                (this[n][t] = e[t]), this[n].setAttribute(t, e[t])
          return this
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e)
          return this
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e
          return this
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              'string' !== typeof e ? `${e}ms` : e
          return this
        },
        on: function (...e) {
          let [t, n, i, s] = e
          function r(e) {
            const t = e.target
            if (!t) return
            const s = e.target.dom7EventData || []
            if ((s.indexOf(e) < 0 && s.unshift(e), u(t).is(n))) i.apply(t, s)
            else {
              const e = u(t).parents()
              for (let t = 0; t < e.length; t += 1)
                u(e[t]).is(n) && i.apply(e[t], s)
            }
          }
          function a(e) {
            const t = (e && e.target && e.target.dom7EventData) || []
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
          }
          'function' === typeof e[1] && (([t, i, s] = e), (n = void 0)),
            s || (s = !1)
          const o = t.split(' ')
          let l
          for (let d = 0; d < this.length; d += 1) {
            const e = this[d]
            if (n)
              for (l = 0; l < o.length; l += 1) {
                const t = o[l]
                e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                  e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                  e.dom7LiveListeners[t].push({
                    listener: i,
                    proxyListener: r,
                  }),
                  e.addEventListener(t, r, s)
              }
            else
              for (l = 0; l < o.length; l += 1) {
                const t = o[l]
                e.dom7Listeners || (e.dom7Listeners = {}),
                  e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                  e.dom7Listeners[t].push({ listener: i, proxyListener: a }),
                  e.addEventListener(t, a, s)
              }
          }
          return this
        },
        off: function (...e) {
          let [t, n, i, s] = e
          'function' === typeof e[1] && (([t, i, s] = e), (n = void 0)),
            s || (s = !1)
          const r = t.split(' ')
          for (let a = 0; a < r.length; a += 1) {
            const e = r[a]
            for (let t = 0; t < this.length; t += 1) {
              const r = this[t]
              let a
              if (
                (!n && r.dom7Listeners
                  ? (a = r.dom7Listeners[e])
                  : n && r.dom7LiveListeners && (a = r.dom7LiveListeners[e]),
                a && a.length)
              )
                for (let t = a.length - 1; t >= 0; t -= 1) {
                  const n = a[t]
                  ;(i && n.listener === i) ||
                  (i &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === i)
                    ? (r.removeEventListener(e, n.proxyListener, s),
                      a.splice(t, 1))
                    : i ||
                      (r.removeEventListener(e, n.proxyListener, s),
                      a.splice(t, 1))
                }
            }
          }
          return this
        },
        trigger: function (...e) {
          const t = l(),
            n = e[0].split(' '),
            i = e[1]
          for (let s = 0; s < n.length; s += 1) {
            const r = n[s]
            for (let n = 0; n < this.length; n += 1) {
              const s = this[n]
              if (t.CustomEvent) {
                const n = new t.CustomEvent(r, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                })
                ;(s.dom7EventData = e.filter((e, t) => t > 0)),
                  s.dispatchEvent(n),
                  (s.dom7EventData = []),
                  delete s.dom7EventData
              }
            }
          }
          return this
        },
        transitionEnd: function (e) {
          const t = this
          return (
            e &&
              t.on('transitionend', function n(i) {
                i.target === this &&
                  (e.call(this, i), t.off('transitionend', n))
              }),
            this
          )
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles()
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue('margin-right')) +
                parseFloat(e.getPropertyValue('margin-left'))
              )
            }
            return this[0].offsetWidth
          }
          return null
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles()
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue('margin-top')) +
                parseFloat(e.getPropertyValue('margin-bottom'))
              )
            }
            return this[0].offsetHeight
          }
          return null
        },
        styles: function () {
          const e = l()
          return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function () {
          if (this.length > 0) {
            const e = l(),
              t = a(),
              n = this[0],
              i = n.getBoundingClientRect(),
              s = t.body,
              r = n.clientTop || s.clientTop || 0,
              o = n.clientLeft || s.clientLeft || 0,
              d = n === e ? e.scrollY : n.scrollTop,
              c = n === e ? e.scrollX : n.scrollLeft
            return { top: i.top + d - r, left: i.left + c - o }
          }
          return null
        },
        css: function (e, t) {
          const n = l()
          let i
          if (1 === arguments.length) {
            if ('string' !== typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t]
              return this
            }
            if (this[0])
              return n.getComputedStyle(this[0], null).getPropertyValue(e)
          }
          if (2 === arguments.length && 'string' === typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t
            return this
          }
          return this
        },
        each: function (e) {
          return e
            ? (this.forEach((t, n) => {
                e.apply(t, [t, n])
              }),
              this)
            : this
        },
        html: function (e) {
          if ('undefined' === typeof e)
            return this[0] ? this[0].innerHTML : null
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e
          return this
        },
        text: function (e) {
          if ('undefined' === typeof e)
            return this[0] ? this[0].textContent.trim() : null
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e
          return this
        },
        is: function (e) {
          const t = l(),
            n = a(),
            i = this[0]
          let s, r
          if (!i || 'undefined' === typeof e) return !1
          if ('string' === typeof e) {
            if (i.matches) return i.matches(e)
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e)
            if (i.msMatchesSelector) return i.msMatchesSelector(e)
            for (s = u(e), r = 0; r < s.length; r += 1)
              if (s[r] === i) return !0
            return !1
          }
          if (e === n) return i === n
          if (e === t) return i === t
          if (e.nodeType || e instanceof d) {
            for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
              if (s[r] === i) return !0
            return !1
          }
          return !1
        },
        index: function () {
          let e,
            t = this[0]
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1)
            return e
          }
        },
        eq: function (e) {
          if ('undefined' === typeof e) return this
          const t = this.length
          if (e > t - 1) return u([])
          if (e < 0) {
            const n = t + e
            return u(n < 0 ? [] : [this[n]])
          }
          return u([this[e]])
        },
        append: function (...e) {
          let t
          const n = a()
          for (let i = 0; i < e.length; i += 1) {
            t = e[i]
            for (let e = 0; e < this.length; e += 1)
              if ('string' === typeof t) {
                const i = n.createElement('div')
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild)
              } else if (t instanceof d)
                for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n])
              else this[e].appendChild(t)
          }
          return this
        },
        prepend: function (e) {
          const t = a()
          let n, i
          for (n = 0; n < this.length; n += 1)
            if ('string' === typeof e) {
              const s = t.createElement('div')
              for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
                this[n].insertBefore(s.childNodes[i], this[n].childNodes[0])
            } else if (e instanceof d)
              for (i = 0; i < e.length; i += 1)
                this[n].insertBefore(e[i], this[n].childNodes[0])
            else this[n].insertBefore(e, this[n].childNodes[0])
          return this
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                u(this[0].nextElementSibling).is(e)
                ? u([this[0].nextElementSibling])
                : u([])
              : this[0].nextElementSibling
              ? u([this[0].nextElementSibling])
              : u([])
            : u([])
        },
        nextAll: function (e) {
          const t = []
          let n = this[0]
          if (!n) return u([])
          for (; n.nextElementSibling; ) {
            const i = n.nextElementSibling
            e ? u(i).is(e) && t.push(i) : t.push(i), (n = i)
          }
          return u(t)
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0]
            return e
              ? t.previousElementSibling && u(t.previousElementSibling).is(e)
                ? u([t.previousElementSibling])
                : u([])
              : t.previousElementSibling
              ? u([t.previousElementSibling])
              : u([])
          }
          return u([])
        },
        prevAll: function (e) {
          const t = []
          let n = this[0]
          if (!n) return u([])
          for (; n.previousElementSibling; ) {
            const i = n.previousElementSibling
            e ? u(i).is(e) && t.push(i) : t.push(i), (n = i)
          }
          return u(t)
        },
        parent: function (e) {
          const t = []
          for (let n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? u(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode))
          return u(t)
        },
        parents: function (e) {
          const t = []
          for (let n = 0; n < this.length; n += 1) {
            let i = this[n].parentNode
            for (; i; )
              e ? u(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode)
          }
          return u(t)
        },
        closest: function (e) {
          let t = this
          return 'undefined' === typeof e
            ? u([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
          const t = []
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].querySelectorAll(e)
            for (let e = 0; e < i.length; e += 1) t.push(i[e])
          }
          return u(t)
        },
        children: function (e) {
          const t = []
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].children
            for (let n = 0; n < i.length; n += 1)
              (e && !u(i[n]).is(e)) || t.push(i[n])
          }
          return u(t)
        },
        filter: function (e) {
          return u(p(this, e))
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e])
          return this
        },
      }
      Object.keys(m).forEach((e) => {
        Object.defineProperty(u.fn, e, { value: m[e], writable: !0 })
      })
      var g = u
      function v(e, t = 0) {
        return setTimeout(e, t)
      }
      function y() {
        return Date.now()
      }
      function b(e, t = 'x') {
        const n = l()
        let i, s, r
        const a = (function (e) {
          const t = l()
          let n
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          )
        })(e)
        return (
          n.WebKitCSSMatrix
            ? ((s = a.transform || a.webkitTransform),
              s.split(',').length > 6 &&
                (s = s
                  .split(', ')
                  .map((e) => e.replace(',', '.'))
                  .join(', ')),
              (r = new n.WebKitCSSMatrix('none' === s ? '' : s)))
            : ((r =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue('transform')
                  .replace('translate(', 'matrix(1, 0, 0, 1,')),
              (i = r.toString().split(','))),
          'x' === t &&
            (s = n.WebKitCSSMatrix
              ? r.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          'y' === t &&
            (s = n.WebKitCSSMatrix
              ? r.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          s || 0
        )
      }
      function w(e) {
        return (
          'object' === typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        )
      }
      function C(...e) {
        const t = Object(e[0]),
          n = ['__proto__', 'constructor', 'prototype']
        for (let s = 1; s < e.length; s += 1) {
          const r = e[s]
          if (
            void 0 !== r &&
            null !== r &&
            ((i = r),
            !('undefined' !== typeof window &&
            'undefined' !== typeof window.HTMLElement
              ? i instanceof HTMLElement
              : i && (1 === i.nodeType || 11 === i.nodeType)))
          ) {
            const e = Object.keys(Object(r)).filter((e) => n.indexOf(e) < 0)
            for (let n = 0, i = e.length; n < i; n += 1) {
              const i = e[n],
                s = Object.getOwnPropertyDescriptor(r, i)
              void 0 !== s &&
                s.enumerable &&
                (w(t[i]) && w(r[i])
                  ? r[i].__swiper__
                    ? (t[i] = r[i])
                    : C(t[i], r[i])
                  : !w(t[i]) && w(r[i])
                  ? ((t[i] = {}),
                    r[i].__swiper__ ? (t[i] = r[i]) : C(t[i], r[i]))
                  : (t[i] = r[i]))
            }
          }
        }
        var i
        return t
      }
      function S(e, t, n) {
        e.style.setProperty(t, n)
      }
      function E({ swiper: e, targetPosition: t, side: n }) {
        const i = l(),
          s = -e.translate
        let r,
          a = null
        const o = e.params.speed
        ;(e.wrapperEl.style.scrollSnapType = 'none'),
          i.cancelAnimationFrame(e.cssModeFrameID)
        const d = t > s ? 'next' : 'prev',
          c = (e, t) => ('next' === d && e >= t) || ('prev' === d && e <= t),
          p = () => {
            ;(r = new Date().getTime()), null === a && (a = r)
            const l = Math.max(Math.min((r - a) / o, 1), 0),
              d = 0.5 - Math.cos(l * Math.PI) / 2
            let u = s + d * (t - s)
            if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [n]: u }), c(u, t)))
              return (
                (e.wrapperEl.style.overflow = 'hidden'),
                (e.wrapperEl.style.scrollSnapType = ''),
                setTimeout(() => {
                  ;(e.wrapperEl.style.overflow = ''),
                    e.wrapperEl.scrollTo({ [n]: u })
                }),
                void i.cancelAnimationFrame(e.cssModeFrameID)
              )
            e.cssModeFrameID = i.requestAnimationFrame(p)
          }
        p()
      }
      let T, x, O
      function k() {
        return (
          T ||
            (T = (function () {
              const e = l(),
                t = a()
              return {
                smoothScroll:
                  t.documentElement &&
                  'scrollBehavior' in t.documentElement.style,
                touch: !!(
                  'ontouchstart' in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1
                  try {
                    const n = Object.defineProperty({}, 'passive', {
                      get() {
                        t = !0
                      },
                    })
                    e.addEventListener('testPassiveListener', null, n)
                  } catch (n) {}
                  return t
                })(),
                gestures: 'ongesturestart' in e,
              }
            })()),
          T
        )
      }
      function P(e = {}) {
        return (
          x ||
            (x = (function ({ userAgent: e } = {}) {
              const t = k(),
                n = l(),
                i = n.navigator.platform,
                s = e || n.navigator.userAgent,
                r = { ios: !1, android: !1 },
                a = n.screen.width,
                o = n.screen.height,
                d = s.match(/(Android);?[\s\/]+([\d.]+)?/)
              let c = s.match(/(iPad).*OS\s([\d_]+)/)
              const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = 'Win32' === i
              let h = 'MacIntel' === i
              return (
                !c &&
                  h &&
                  t.touch &&
                  [
                    '1024x1366',
                    '1366x1024',
                    '834x1194',
                    '1194x834',
                    '834x1112',
                    '1112x834',
                    '768x1024',
                    '1024x768',
                    '820x1180',
                    '1180x820',
                    '810x1080',
                    '1080x810',
                  ].indexOf(`${a}x${o}`) >= 0 &&
                  ((c = s.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, '13_0_0']),
                  (h = !1)),
                d && !f && ((r.os = 'android'), (r.android = !0)),
                (c || u || p) && ((r.os = 'ios'), (r.ios = !0)),
                r
              )
            })(e)),
          x
        )
      }
      function M() {
        return (
          O ||
            (O = (function () {
              const e = l()
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase()
                  return (
                    t.indexOf('safari') >= 0 &&
                    t.indexOf('chrome') < 0 &&
                    t.indexOf('android') < 0
                  )
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              }
            })()),
          O
        )
      }
      var $ = {
        on(e, t, n) {
          const i = this
          if ('function' !== typeof t) return i
          const s = n ? 'unshift' : 'push'
          return (
            e.split(' ').forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][s](t)
            }),
            i
          )
        },
        once(e, t, n) {
          const i = this
          if ('function' !== typeof t) return i
          function s(...n) {
            i.off(e, s),
              s.__emitterProxy && delete s.__emitterProxy,
              t.apply(i, n)
          }
          return (s.__emitterProxy = t), i.on(e, s, n)
        },
        onAny(e, t) {
          const n = this
          if ('function' !== typeof e) return n
          const i = t ? 'unshift' : 'push'
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
          )
        },
        offAny(e) {
          const t = this
          if (!t.eventsAnyListeners) return t
          const n = t.eventsAnyListeners.indexOf(e)
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
        },
        off(e, t) {
          const n = this
          return n.eventsListeners
            ? (e.split(' ').forEach((e) => {
                'undefined' === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((i, s) => {
                      ;(i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(s, 1)
                    })
              }),
              n)
            : n
        },
        emit(...e) {
          const t = this
          if (!t.eventsListeners) return t
          let n, i, s
          'string' === typeof e[0] || Array.isArray(e[0])
            ? ((n = e[0]), (i = e.slice(1, e.length)), (s = t))
            : ((n = e[0].events), (i = e[0].data), (s = e[0].context || t)),
            i.unshift(s)
          return (
            (Array.isArray(n) ? n : n.split(' ')).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(s, [e, ...i])
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(s, i)
                  })
            }),
            t
          )
        },
      }
      function _({ swiper: e, runCallbacks: t, direction: n, step: i }) {
        const { activeIndex: s, previousIndex: r } = e
        let a = n
        if (
          (a || (a = s > r ? 'next' : s < r ? 'prev' : 'reset'),
          e.emit(`transition${i}`),
          t && s !== r)
        ) {
          if ('reset' === a) return void e.emit(`slideResetTransition${i}`)
          e.emit(`slideChangeTransition${i}`),
            'next' === a
              ? e.emit(`slideNextTransition${i}`)
              : e.emit(`slidePrevTransition${i}`)
        }
      }
      function L(e) {
        const t = this,
          n = a(),
          i = l(),
          s = t.touchEventsData,
          { params: r, touches: o, enabled: d } = t
        if (!d) return
        if (t.animating && r.preventInteractionOnTransition) return
        !t.animating && r.cssMode && r.loop && t.loopFix()
        let c = e
        c.originalEvent && (c = c.originalEvent)
        let p = g(c.target)
        if ('wrapper' === r.touchEventsTarget && !p.closest(t.wrapperEl).length)
          return
        if (
          ((s.isTouchEvent = 'touchstart' === c.type),
          !s.isTouchEvent && 'which' in c && 3 === c.which)
        )
          return
        if (!s.isTouchEvent && 'button' in c && c.button > 0) return
        if (s.isTouched && s.isMoved) return
        !!r.noSwipingClass &&
          '' !== r.noSwipingClass &&
          c.target &&
          c.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (p = g(e.path[0]))
        const u = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          f = !(!c.target || !c.target.shadowRoot)
        if (
          r.noSwiping &&
          (f
            ? (function (e, t = this) {
                return (function t(n) {
                  return n && n !== a() && n !== l()
                    ? (n.assignedSlot && (n = n.assignedSlot),
                      n.closest(e) || t(n.getRootNode().host))
                    : null
                })(t)
              })(u, c.target)
            : p.closest(u)[0])
        )
          return void (t.allowClick = !0)
        if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return
        ;(o.currentX =
          'touchstart' === c.type ? c.targetTouches[0].pageX : c.pageX),
          (o.currentY =
            'touchstart' === c.type ? c.targetTouches[0].pageY : c.pageY)
        const h = o.currentX,
          m = o.currentY,
          v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold
        if (v && (h <= b || h >= i.innerWidth - b)) {
          if ('prevent' !== v) return
          e.preventDefault()
        }
        if (
          (Object.assign(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = h),
          (o.startY = m),
          (s.touchStartTime = y()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (s.allowThresholdMove = !1),
          'touchstart' !== c.type)
        ) {
          let e = !0
          p.is(s.focusableElements) && (e = !1),
            n.activeElement &&
              g(n.activeElement).is(s.focusableElements) &&
              n.activeElement !== p[0] &&
              n.activeElement.blur()
          const i = e && t.allowTouchMove && r.touchStartPreventDefault
          ;(!r.touchStartForcePreventDefault && !i) ||
            p[0].isContentEditable ||
            c.preventDefault()
        }
        t.emit('touchStart', c)
      }
      function I(e) {
        const t = a(),
          n = this,
          i = n.touchEventsData,
          { params: s, touches: r, rtlTranslate: o, enabled: l } = n
        if (!l) return
        let d = e
        if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            n.emit('touchMoveOpposite', d)
          )
        if (i.isTouchEvent && 'touchmove' !== d.type) return
        const c =
            'touchmove' === d.type &&
            d.targetTouches &&
            (d.targetTouches[0] || d.changedTouches[0]),
          p = 'touchmove' === d.type ? c.pageX : d.pageX,
          u = 'touchmove' === d.type ? c.pageY : d.pageY
        if (d.preventedByNestedSwiper)
          return (r.startX = p), void (r.startY = u)
        if (!n.allowTouchMove)
          return (
            (n.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(r, {
                startX: p,
                startY: u,
                currentX: p,
                currentY: u,
              }),
              (i.touchStartTime = y()))
            )
          )
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (n.isVertical()) {
            if (
              (u < r.startY && n.translate <= n.maxTranslate()) ||
              (u > r.startY && n.translate >= n.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1)
          } else if (
            (p < r.startX && n.translate <= n.maxTranslate()) ||
            (p > r.startX && n.translate >= n.minTranslate())
          )
            return
        if (
          i.isTouchEvent &&
          t.activeElement &&
          d.target === t.activeElement &&
          g(d.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (n.allowClick = !1)
        if (
          (i.allowTouchCallbacks && n.emit('touchMove', d),
          d.targetTouches && d.targetTouches.length > 1)
        )
          return
        ;(r.currentX = p), (r.currentY = u)
        const f = r.currentX - r.startX,
          h = r.currentY - r.startY
        if (
          n.params.threshold &&
          Math.sqrt(f ** 2 + h ** 2) < n.params.threshold
        )
          return
        if ('undefined' === typeof i.isScrolling) {
          let e
          ;(n.isHorizontal() && r.currentY === r.startY) ||
          (n.isVertical() && r.currentX === r.startX)
            ? (i.isScrolling = !1)
            : f * f + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
              (i.isScrolling = n.isHorizontal()
                ? e > s.touchAngle
                : 90 - e > s.touchAngle))
        }
        if (
          (i.isScrolling && n.emit('touchMoveOpposite', d),
          'undefined' === typeof i.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1)
        if (!i.startMoving) return
        ;(n.allowClick = !1),
          !s.cssMode && d.cancelable && d.preventDefault(),
          s.touchMoveStopPropagation && !s.nested && d.stopPropagation(),
          i.isMoved ||
            (s.loop && !s.cssMode && n.loopFix(),
            (i.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating &&
              n.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
            (i.allowMomentumBounce = !1),
            !s.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit('sliderFirstMove', d)),
          n.emit('sliderMove', d),
          (i.isMoved = !0)
        let m = n.isHorizontal() ? f : h
        ;(r.diff = m),
          (m *= s.touchRatio),
          o && (m = -m),
          (n.swipeDirection = m > 0 ? 'prev' : 'next'),
          (i.currentTranslate = m + i.startTranslate)
        let v = !0,
          b = s.resistanceRatio
        if (
          (s.touchReleaseOnEdges && (b = 0),
          m > 0 && i.currentTranslate > n.minTranslate()
            ? ((v = !1),
              s.resistance &&
                (i.currentTranslate =
                  n.minTranslate() -
                  1 +
                  (-n.minTranslate() + i.startTranslate + m) ** b))
            : m < 0 &&
              i.currentTranslate < n.maxTranslate() &&
              ((v = !1),
              s.resistance &&
                (i.currentTranslate =
                  n.maxTranslate() +
                  1 -
                  (n.maxTranslate() - i.startTranslate - m) ** b)),
          v && (d.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            'next' === n.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !n.allowSlidePrev &&
            'prev' === n.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          s.threshold > 0)
        ) {
          if (!(Math.abs(m) > s.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate)
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (i.currentTranslate = i.startTranslate),
              void (r.diff = n.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            )
        }
        s.followFinger &&
          !s.cssMode &&
          (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
            s.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          n.params.freeMode &&
            s.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(i.currentTranslate),
          n.setTranslate(i.currentTranslate))
      }
      function z(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: i,
            touches: s,
            rtlTranslate: r,
            slidesGrid: a,
            enabled: o,
          } = t
        if (!o) return
        let l = e
        if (
          (l.originalEvent && (l = l.originalEvent),
          n.allowTouchCallbacks && t.emit('touchEnd', l),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          )
        i.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1)
        const d = y(),
          c = d - n.touchStartTime
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath())
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit('tap click', l),
            c < 300 &&
              d - n.lastClickTime < 300 &&
              t.emit('doubleTap doubleClick', l)
        }
        if (
          ((n.lastClickTime = y()),
          v(() => {
            t.destroyed || (t.allowClick = !0)
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === s.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
        let p
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (p = i.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          i.cssMode)
        )
          return
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: p })
        let u = 0,
          f = t.slidesSizesGrid[0]
        for (
          let g = 0;
          g < a.length;
          g += g < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const e = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
          'undefined' !== typeof a[g + e]
            ? p >= a[g] && p < a[g + e] && ((u = g), (f = a[g + e] - a[g]))
            : p >= a[g] && ((u = g), (f = a[a.length - 1] - a[a.length - 2]))
        }
        const h = (p - a[u]) / f,
          m = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
        if (c > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex)
          'next' === t.swipeDirection &&
            (h >= i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)),
            'prev' === t.swipeDirection &&
              (h > 1 - i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u))
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex)
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(u + m)
              : t.slideTo(u)
            : ('next' === t.swipeDirection && t.slideTo(u + m),
              'prev' === t.swipeDirection && t.slideTo(u))
        }
      }
      function A() {
        const e = this,
          { params: t, el: n } = e
        if (n && 0 === n.offsetWidth) return
        t.breakpoints && e.setBreakpoint()
        const { allowSlideNext: i, allowSlidePrev: s, snapGrid: r } = e
        ;(e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = i),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
      }
      function j(e) {
        const t = this
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())))
      }
      function D() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: i } = e
        if (!i) return
        let s
        ;(e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses()
        const r = e.maxTranslate() - e.minTranslate()
        ;(s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit('setTranslate', e.translate, !1)
      }
      let N = !1
      function R() {}
      const G = (e, t) => {
        const n = a(),
          {
            params: i,
            touchEvents: s,
            el: r,
            wrapperEl: o,
            device: l,
            support: d,
          } = e,
          c = !!i.nested,
          p = 'on' === t ? 'addEventListener' : 'removeEventListener',
          u = t
        if (d.touch) {
          const t = !(
            'touchstart' !== s.start ||
            !d.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 }
          r[p](s.start, e.onTouchStart, t),
            r[p](
              s.move,
              e.onTouchMove,
              d.passiveListener ? { passive: !1, capture: c } : c
            ),
            r[p](s.end, e.onTouchEnd, t),
            s.cancel && r[p](s.cancel, e.onTouchEnd, t)
        } else
          r[p](s.start, e.onTouchStart, !1),
            n[p](s.move, e.onTouchMove, c),
            n[p](s.end, e.onTouchEnd, !1)
        ;(i.preventClicks || i.preventClicksPropagation) &&
          r[p]('click', e.onClick, !0),
          i.cssMode && o[p]('scroll', e.onScroll),
          i.updateOnWindowResize
            ? e[u](
                l.ios || l.android
                  ? 'resize orientationchange observerUpdate'
                  : 'resize observerUpdate',
                A,
                !0
              )
            : e[u]('observerUpdate', A, !0)
      }
      const B = (e, t) => e.grid && t.grid && t.grid.rows > 1
      var V = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      }
      function F(e, t) {
        return function (n = {}) {
          const i = Object.keys(n)[0],
            s = n[i]
          'object' === typeof s && null !== s
            ? (['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && 'enabled' in s
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  'object' !== typeof e[i] ||
                    'enabled' in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  C(t, n))
                : C(t, n))
            : C(t, n)
        }
      }
      const H = {
          eventsEmitter: $,
          update: {
            updateSize: function () {
              const e = this
              let t, n
              const i = e.$el
              ;(t =
                'undefined' !== typeof e.params.width && null !== e.params.width
                  ? e.params.width
                  : i[0].clientWidth),
                (n =
                  'undefined' !== typeof e.params.height &&
                  null !== e.params.height
                    ? e.params.height
                    : i[0].clientHeight),
                (0 === t && e.isHorizontal()) ||
                  (0 === n && e.isVertical()) ||
                  ((t =
                    t -
                    parseInt(i.css('padding-left') || 0, 10) -
                    parseInt(i.css('padding-right') || 0, 10)),
                  (n =
                    n -
                    parseInt(i.css('padding-top') || 0, 10) -
                    parseInt(i.css('padding-bottom') || 0, 10)),
                  Number.isNaN(t) && (t = 0),
                  Number.isNaN(n) && (n = 0),
                  Object.assign(e, {
                    width: t,
                    height: n,
                    size: e.isHorizontal() ? t : n,
                  }))
            },
            updateSlides: function () {
              const e = this
              function t(t) {
                return e.isHorizontal()
                  ? t
                  : {
                      width: 'height',
                      'margin-top': 'margin-left',
                      'margin-bottom ': 'margin-right',
                      'margin-left': 'margin-top',
                      'margin-right': 'margin-bottom',
                      'padding-left': 'padding-top',
                      'padding-right': 'padding-bottom',
                      marginRight: 'marginBottom',
                    }[t]
              }
              function n(e, n) {
                return parseFloat(e.getPropertyValue(t(n)) || 0)
              }
              const i = e.params,
                { $wrapperEl: s, size: r, rtlTranslate: a, wrongRTL: o } = e,
                l = e.virtual && i.virtual.enabled,
                d = l ? e.virtual.slides.length : e.slides.length,
                c = s.children(`.${e.params.slideClass}`),
                p = l ? e.virtual.slides.length : c.length
              let u = []
              const f = [],
                h = []
              let m = i.slidesOffsetBefore
              'function' === typeof m && (m = i.slidesOffsetBefore.call(e))
              let g = i.slidesOffsetAfter
              'function' === typeof g && (g = i.slidesOffsetAfter.call(e))
              const v = e.snapGrid.length,
                y = e.slidesGrid.length
              let b = i.spaceBetween,
                w = -m,
                C = 0,
                E = 0
              if ('undefined' === typeof r) return
              'string' === typeof b &&
                b.indexOf('%') >= 0 &&
                (b = (parseFloat(b.replace('%', '')) / 100) * r),
                (e.virtualSize = -b),
                a
                  ? c.css({ marginLeft: '', marginBottom: '', marginTop: '' })
                  : c.css({ marginRight: '', marginBottom: '', marginTop: '' }),
                i.centeredSlides &&
                  i.cssMode &&
                  (S(e.wrapperEl, '--swiper-centered-offset-before', ''),
                  S(e.wrapperEl, '--swiper-centered-offset-after', ''))
              const T = i.grid && i.grid.rows > 1 && e.grid
              let x
              T && e.grid.initSlides(p)
              const O =
                'auto' === i.slidesPerView &&
                i.breakpoints &&
                Object.keys(i.breakpoints).filter(
                  (e) => 'undefined' !== typeof i.breakpoints[e].slidesPerView
                ).length > 0
              for (let S = 0; S < p; S += 1) {
                x = 0
                const s = c.eq(S)
                if (
                  (T && e.grid.updateSlide(S, s, p, t),
                  'none' !== s.css('display'))
                ) {
                  if ('auto' === i.slidesPerView) {
                    O && (c[S].style[t('width')] = '')
                    const r = getComputedStyle(s[0]),
                      a = s[0].style.transform,
                      o = s[0].style.webkitTransform
                    if (
                      (a && (s[0].style.transform = 'none'),
                      o && (s[0].style.webkitTransform = 'none'),
                      i.roundLengths)
                    )
                      x = e.isHorizontal()
                        ? s.outerWidth(!0)
                        : s.outerHeight(!0)
                    else {
                      const e = n(r, 'width'),
                        t = n(r, 'padding-left'),
                        i = n(r, 'padding-right'),
                        a = n(r, 'margin-left'),
                        o = n(r, 'margin-right'),
                        l = r.getPropertyValue('box-sizing')
                      if (l && 'border-box' === l) x = e + a + o
                      else {
                        const { clientWidth: n, offsetWidth: r } = s[0]
                        x = e + t + i + a + o + (r - n)
                      }
                    }
                    a && (s[0].style.transform = a),
                      o && (s[0].style.webkitTransform = o),
                      i.roundLengths && (x = Math.floor(x))
                  } else
                    (x = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
                      i.roundLengths && (x = Math.floor(x)),
                      c[S] && (c[S].style[t('width')] = `${x}px`)
                  c[S] && (c[S].swiperSlideSize = x),
                    h.push(x),
                    i.centeredSlides
                      ? ((w = w + x / 2 + C / 2 + b),
                        0 === C && 0 !== S && (w = w - r / 2 - b),
                        0 === S && (w = w - r / 2 - b),
                        Math.abs(w) < 0.001 && (w = 0),
                        i.roundLengths && (w = Math.floor(w)),
                        E % i.slidesPerGroup === 0 && u.push(w),
                        f.push(w))
                      : (i.roundLengths && (w = Math.floor(w)),
                        (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                          e.params.slidesPerGroup ===
                          0 && u.push(w),
                        f.push(w),
                        (w = w + x + b)),
                    (e.virtualSize += x + b),
                    (C = x),
                    (E += 1)
                }
              }
              if (
                ((e.virtualSize = Math.max(e.virtualSize, r) + g),
                a &&
                  o &&
                  ('slide' === i.effect || 'coverflow' === i.effect) &&
                  s.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
                i.setWrapperSize &&
                  s.css({
                    [t('width')]: `${e.virtualSize + i.spaceBetween}px`,
                  }),
                T && e.grid.updateWrapperSize(x, u, t),
                !i.centeredSlides)
              ) {
                const t = []
                for (let n = 0; n < u.length; n += 1) {
                  let s = u[n]
                  i.roundLengths && (s = Math.floor(s)),
                    u[n] <= e.virtualSize - r && t.push(s)
                }
                ;(u = t),
                  Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) >
                    1 && u.push(e.virtualSize - r)
              }
              if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
                const n =
                  e.isHorizontal() && a ? 'marginLeft' : t('marginRight')
                c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
                  [n]: `${b}px`,
                })
              }
              if (i.centeredSlides && i.centeredSlidesBounds) {
                let e = 0
                h.forEach((t) => {
                  e += t + (i.spaceBetween ? i.spaceBetween : 0)
                }),
                  (e -= i.spaceBetween)
                const t = e - r
                u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e))
              }
              if (i.centerInsufficientSlides) {
                let e = 0
                if (
                  (h.forEach((t) => {
                    e += t + (i.spaceBetween ? i.spaceBetween : 0)
                  }),
                  (e -= i.spaceBetween),
                  e < r)
                ) {
                  const t = (r - e) / 2
                  u.forEach((e, n) => {
                    u[n] = e - t
                  }),
                    f.forEach((e, n) => {
                      f[n] = e + t
                    })
                }
              }
              if (
                (Object.assign(e, {
                  slides: c,
                  snapGrid: u,
                  slidesGrid: f,
                  slidesSizesGrid: h,
                }),
                i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
              ) {
                S(e.wrapperEl, '--swiper-centered-offset-before', -u[0] + 'px'),
                  S(
                    e.wrapperEl,
                    '--swiper-centered-offset-after',
                    e.size / 2 - h[h.length - 1] / 2 + 'px'
                  )
                const t = -e.snapGrid[0],
                  n = -e.slidesGrid[0]
                ;(e.snapGrid = e.snapGrid.map((e) => e + t)),
                  (e.slidesGrid = e.slidesGrid.map((e) => e + n))
              }
              p !== d && e.emit('slidesLengthChange'),
                u.length !== v &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit('snapGridLengthChange')),
                f.length !== y && e.emit('slidesGridLengthChange'),
                i.watchSlidesProgress && e.updateSlidesOffset()
            },
            updateAutoHeight: function (e) {
              const t = this,
                n = [],
                i = t.virtual && t.params.virtual.enabled
              let s,
                r = 0
              'number' === typeof e
                ? t.setTransition(e)
                : !0 === e && t.setTransition(t.params.speed)
              const a = (e) =>
                i
                  ? t.slides.filter(
                      (t) =>
                        parseInt(
                          t.getAttribute('data-swiper-slide-index'),
                          10
                        ) === e
                    )[0]
                  : t.slides.eq(e)[0]
              if (
                'auto' !== t.params.slidesPerView &&
                t.params.slidesPerView > 1
              )
                if (t.params.centeredSlides)
                  t.visibleSlides.each((e) => {
                    n.push(e)
                  })
                else
                  for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                    const e = t.activeIndex + s
                    if (e > t.slides.length && !i) break
                    n.push(a(e))
                  }
              else n.push(a(t.activeIndex))
              for (s = 0; s < n.length; s += 1)
                if ('undefined' !== typeof n[s]) {
                  const e = n[s].offsetHeight
                  r = e > r ? e : r
                }
              ;(r || 0 === r) && t.$wrapperEl.css('height', `${r}px`)
            },
            updateSlidesOffset: function () {
              const e = this,
                t = e.slides
              for (let n = 0; n < t.length; n += 1)
                t[n].swiperSlideOffset = e.isHorizontal()
                  ? t[n].offsetLeft
                  : t[n].offsetTop
            },
            updateSlidesProgress: function (e = (this && this.translate) || 0) {
              const t = this,
                n = t.params,
                { slides: i, rtlTranslate: s, snapGrid: r } = t
              if (0 === i.length) return
              'undefined' === typeof i[0].swiperSlideOffset &&
                t.updateSlidesOffset()
              let a = -e
              s && (a = e),
                i.removeClass(n.slideVisibleClass),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = [])
              for (let o = 0; o < i.length; o += 1) {
                const e = i[o]
                let l = e.swiperSlideOffset
                n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset)
                const d =
                    (a + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                    (e.swiperSlideSize + n.spaceBetween),
                  c =
                    (a - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                    (e.swiperSlideSize + n.spaceBetween),
                  p = -(a - l),
                  u = p + t.slidesSizesGrid[o]
                ;((p >= 0 && p < t.size - 1) ||
                  (u > 1 && u <= t.size) ||
                  (p <= 0 && u >= t.size)) &&
                  (t.visibleSlides.push(e),
                  t.visibleSlidesIndexes.push(o),
                  i.eq(o).addClass(n.slideVisibleClass)),
                  (e.progress = s ? -d : d),
                  (e.originalProgress = s ? -c : c)
              }
              t.visibleSlides = g(t.visibleSlides)
            },
            updateProgress: function (e) {
              const t = this
              if ('undefined' === typeof e) {
                const n = t.rtlTranslate ? -1 : 1
                e = (t && t.translate && t.translate * n) || 0
              }
              const n = t.params,
                i = t.maxTranslate() - t.minTranslate()
              let { progress: s, isBeginning: r, isEnd: a } = t
              const o = r,
                l = a
              0 === i
                ? ((s = 0), (r = !0), (a = !0))
                : ((s = (e - t.minTranslate()) / i),
                  (r = s <= 0),
                  (a = s >= 1)),
                Object.assign(t, { progress: s, isBeginning: r, isEnd: a }),
                (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
                  t.updateSlidesProgress(e),
                r && !o && t.emit('reachBeginning toEdge'),
                a && !l && t.emit('reachEnd toEdge'),
                ((o && !r) || (l && !a)) && t.emit('fromEdge'),
                t.emit('progress', s)
            },
            updateSlidesClasses: function () {
              const e = this,
                {
                  slides: t,
                  params: n,
                  $wrapperEl: i,
                  activeIndex: s,
                  realIndex: r,
                } = e,
                a = e.virtual && n.virtual.enabled
              let o
              t.removeClass(
                `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
              ),
                (o = a
                  ? e.$wrapperEl.find(
                      `.${n.slideClass}[data-swiper-slide-index="${s}"]`
                    )
                  : t.eq(s)),
                o.addClass(n.slideActiveClass),
                n.loop &&
                  (o.hasClass(n.slideDuplicateClass)
                    ? i
                        .children(
                          `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                        )
                        .addClass(n.slideDuplicateActiveClass)
                    : i
                        .children(
                          `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                        )
                        .addClass(n.slideDuplicateActiveClass))
              let l = o
                .nextAll(`.${n.slideClass}`)
                .eq(0)
                .addClass(n.slideNextClass)
              n.loop &&
                0 === l.length &&
                ((l = t.eq(0)), l.addClass(n.slideNextClass))
              let d = o
                .prevAll(`.${n.slideClass}`)
                .eq(0)
                .addClass(n.slidePrevClass)
              n.loop &&
                0 === d.length &&
                ((d = t.eq(-1)), d.addClass(n.slidePrevClass)),
                n.loop &&
                  (l.hasClass(n.slideDuplicateClass)
                    ? i
                        .children(
                          `.${n.slideClass}:not(.${
                            n.slideDuplicateClass
                          })[data-swiper-slide-index="${l.attr(
                            'data-swiper-slide-index'
                          )}"]`
                        )
                        .addClass(n.slideDuplicateNextClass)
                    : i
                        .children(
                          `.${n.slideClass}.${
                            n.slideDuplicateClass
                          }[data-swiper-slide-index="${l.attr(
                            'data-swiper-slide-index'
                          )}"]`
                        )
                        .addClass(n.slideDuplicateNextClass),
                  d.hasClass(n.slideDuplicateClass)
                    ? i
                        .children(
                          `.${n.slideClass}:not(.${
                            n.slideDuplicateClass
                          })[data-swiper-slide-index="${d.attr(
                            'data-swiper-slide-index'
                          )}"]`
                        )
                        .addClass(n.slideDuplicatePrevClass)
                    : i
                        .children(
                          `.${n.slideClass}.${
                            n.slideDuplicateClass
                          }[data-swiper-slide-index="${d.attr(
                            'data-swiper-slide-index'
                          )}"]`
                        )
                        .addClass(n.slideDuplicatePrevClass)),
                e.emitSlidesClasses()
            },
            updateActiveIndex: function (e) {
              const t = this,
                n = t.rtlTranslate ? t.translate : -t.translate,
                {
                  slidesGrid: i,
                  snapGrid: s,
                  params: r,
                  activeIndex: a,
                  realIndex: o,
                  snapIndex: l,
                } = t
              let d,
                c = e
              if ('undefined' === typeof c) {
                for (let e = 0; e < i.length; e += 1)
                  'undefined' !== typeof i[e + 1]
                    ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                      ? (c = e)
                      : n >= i[e] && n < i[e + 1] && (c = e + 1)
                    : n >= i[e] && (c = e)
                r.normalizeSlideIndex &&
                  (c < 0 || 'undefined' === typeof c) &&
                  (c = 0)
              }
              if (s.indexOf(n) >= 0) d = s.indexOf(n)
              else {
                const e = Math.min(r.slidesPerGroupSkip, c)
                d = e + Math.floor((c - e) / r.slidesPerGroup)
              }
              if ((d >= s.length && (d = s.length - 1), c === a))
                return void (
                  d !== l && ((t.snapIndex = d), t.emit('snapIndexChange'))
                )
              const p = parseInt(
                t.slides.eq(c).attr('data-swiper-slide-index') || c,
                10
              )
              Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: a,
                activeIndex: c,
              }),
                t.emit('activeIndexChange'),
                t.emit('snapIndexChange'),
                o !== p && t.emit('realIndexChange'),
                (t.initialized || t.params.runCallbacksOnInit) &&
                  t.emit('slideChange')
            },
            updateClickedSlide: function (e) {
              const t = this,
                n = t.params,
                i = g(e).closest(`.${n.slideClass}`)[0]
              let s,
                r = !1
              if (i)
                for (let a = 0; a < t.slides.length; a += 1)
                  if (t.slides[a] === i) {
                    ;(r = !0), (s = a)
                    break
                  }
              if (!i || !r)
                return (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
              ;(t.clickedSlide = i),
                t.virtual && t.params.virtual.enabled
                  ? (t.clickedIndex = parseInt(
                      g(i).attr('data-swiper-slide-index'),
                      10
                    ))
                  : (t.clickedIndex = s),
                n.slideToClickedSlide &&
                  void 0 !== t.clickedIndex &&
                  t.clickedIndex !== t.activeIndex &&
                  t.slideToClickedSlide()
            },
          },
          translate: {
            getTranslate: function (e = this.isHorizontal() ? 'x' : 'y') {
              const {
                params: t,
                rtlTranslate: n,
                translate: i,
                $wrapperEl: s,
              } = this
              if (t.virtualTranslate) return n ? -i : i
              if (t.cssMode) return i
              let r = b(s[0], e)
              return n && (r = -r), r || 0
            },
            setTranslate: function (e, t) {
              const n = this,
                {
                  rtlTranslate: i,
                  params: s,
                  $wrapperEl: r,
                  wrapperEl: a,
                  progress: o,
                } = n
              let l,
                d = 0,
                c = 0
              n.isHorizontal() ? (d = i ? -e : e) : (c = e),
                s.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
                s.cssMode
                  ? (a[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                      n.isHorizontal() ? -d : -c)
                  : s.virtualTranslate ||
                    r.transform(`translate3d(${d}px, ${c}px, 0px)`),
                (n.previousTranslate = n.translate),
                (n.translate = n.isHorizontal() ? d : c)
              const p = n.maxTranslate() - n.minTranslate()
              ;(l = 0 === p ? 0 : (e - n.minTranslate()) / p),
                l !== o && n.updateProgress(e),
                n.emit('setTranslate', n.translate, t)
            },
            minTranslate: function () {
              return -this.snapGrid[0]
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function (
              e = 0,
              t = this.params.speed,
              n = !0,
              i = !0,
              s
            ) {
              const r = this,
                { params: a, wrapperEl: o } = r
              if (r.animating && a.preventInteractionOnTransition) return !1
              const l = r.minTranslate(),
                d = r.maxTranslate()
              let c
              if (
                ((c = i && e > l ? l : i && e < d ? d : e),
                r.updateProgress(c),
                a.cssMode)
              ) {
                const e = r.isHorizontal()
                if (0 === t) o[e ? 'scrollLeft' : 'scrollTop'] = -c
                else {
                  if (!r.support.smoothScroll)
                    return (
                      E({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? 'left' : 'top',
                      }),
                      !0
                    )
                  o.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' })
                }
                return !0
              }
              return (
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(c),
                    n &&
                      (r.emit('beforeTransitionStart', t, s),
                      r.emit('transitionEnd')))
                  : (r.setTransition(t),
                    r.setTranslate(c),
                    n &&
                      (r.emit('beforeTransitionStart', t, s),
                      r.emit('transitionStart')),
                    r.animating ||
                      ((r.animating = !0),
                      r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                              'transitionend',
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              'webkitTransitionEnd',
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            n && r.emit('transitionEnd'))
                        }),
                      r.$wrapperEl[0].addEventListener(
                        'transitionend',
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].addEventListener(
                        'webkitTransitionEnd',
                        r.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              )
            },
          },
          transition: {
            setTransition: function (e, t) {
              const n = this
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit('setTransition', e, t)
            },
            transitionStart: function (e = !0, t) {
              const n = this,
                { params: i } = n
              i.cssMode ||
                (i.autoHeight && n.updateAutoHeight(),
                _({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
            },
            transitionEnd: function (e = !0, t) {
              const n = this,
                { params: i } = n
              ;(n.animating = !1),
                i.cssMode ||
                  (n.setTransition(0),
                  _({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
            },
          },
          slide: {
            slideTo: function (e = 0, t = this.params.speed, n = !0, i, s) {
              if ('number' !== typeof e && 'string' !== typeof e)
                throw new Error(
                  `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
                )
              if ('string' === typeof e) {
                const t = parseInt(e, 10)
                if (!isFinite(t))
                  throw new Error(
                    `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                  )
                e = t
              }
              const r = this
              let a = e
              a < 0 && (a = 0)
              const {
                params: o,
                snapGrid: l,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: f,
                enabled: h,
              } = r
              if (
                (r.animating && o.preventInteractionOnTransition) ||
                (!h && !i && !s)
              )
                return !1
              const m = Math.min(r.params.slidesPerGroupSkip, a)
              let g = m + Math.floor((a - m) / r.params.slidesPerGroup)
              g >= l.length && (g = l.length - 1),
                (p || o.initialSlide || 0) === (c || 0) &&
                  n &&
                  r.emit('beforeSlideChangeStart')
              const v = -l[g]
              if ((r.updateProgress(v), o.normalizeSlideIndex))
                for (let b = 0; b < d.length; b += 1) {
                  const e = -Math.floor(100 * v),
                    t = Math.floor(100 * d[b]),
                    n = Math.floor(100 * d[b + 1])
                  'undefined' !== typeof d[b + 1]
                    ? e >= t && e < n - (n - t) / 2
                      ? (a = b)
                      : e >= t && e < n && (a = b + 1)
                    : e >= t && (a = b)
                }
              if (r.initialized && a !== p) {
                if (
                  !r.allowSlideNext &&
                  v < r.translate &&
                  v < r.minTranslate()
                )
                  return !1
                if (
                  !r.allowSlidePrev &&
                  v > r.translate &&
                  v > r.maxTranslate() &&
                  (p || 0) !== a
                )
                  return !1
              }
              let y
              if (
                ((y = a > p ? 'next' : a < p ? 'prev' : 'reset'),
                (u && -v === r.translate) || (!u && v === r.translate))
              )
                return (
                  r.updateActiveIndex(a),
                  o.autoHeight && r.updateAutoHeight(),
                  r.updateSlidesClasses(),
                  'slide' !== o.effect && r.setTranslate(v),
                  'reset' !== y &&
                    (r.transitionStart(n, y), r.transitionEnd(n, y)),
                  !1
                )
              if (o.cssMode) {
                const e = r.isHorizontal(),
                  n = u ? v : -v
                if (0 === t) {
                  const t = r.virtual && r.params.virtual.enabled
                  t &&
                    ((r.wrapperEl.style.scrollSnapType = 'none'),
                    (r._immediateVirtual = !0)),
                    (f[e ? 'scrollLeft' : 'scrollTop'] = n),
                    t &&
                      requestAnimationFrame(() => {
                        ;(r.wrapperEl.style.scrollSnapType = ''),
                          (r._swiperImmediateVirtual = !1)
                      })
                } else {
                  if (!r.support.smoothScroll)
                    return (
                      E({
                        swiper: r,
                        targetPosition: n,
                        side: e ? 'left' : 'top',
                      }),
                      !0
                    )
                  f.scrollTo({ [e ? 'left' : 'top']: n, behavior: 'smooth' })
                }
                return !0
              }
              return (
                r.setTransition(t),
                r.setTranslate(v),
                r.updateActiveIndex(a),
                r.updateSlidesClasses(),
                r.emit('beforeTransitionStart', t, i),
                r.transitionStart(n, y),
                0 === t
                  ? r.transitionEnd(n, y)
                  : r.animating ||
                    ((r.animating = !0),
                    r.onSlideToWrapperTransitionEnd ||
                      (r.onSlideToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            'transitionend',
                            r.onSlideToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            'webkitTransitionEnd',
                            r.onSlideToWrapperTransitionEnd
                          ),
                          (r.onSlideToWrapperTransitionEnd = null),
                          delete r.onSlideToWrapperTransitionEnd,
                          r.transitionEnd(n, y))
                      }),
                    r.$wrapperEl[0].addEventListener(
                      'transitionend',
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      'webkitTransitionEnd',
                      r.onSlideToWrapperTransitionEnd
                    )),
                !0
              )
            },
            slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
              const s = this
              let r = e
              return (
                s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, n, i)
              )
            },
            slideNext: function (e = this.params.speed, t = !0, n) {
              const i = this,
                { animating: s, enabled: r, params: a } = i
              if (!r) return i
              let o = a.slidesPerGroup
              'auto' === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                (o = Math.max(i.slidesPerViewDynamic('current', !0), 1))
              const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o
              if (a.loop) {
                if (s && a.loopPreventsSlide) return !1
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft)
              }
              return a.rewind && i.isEnd
                ? i.slideTo(0, e, t, n)
                : i.slideTo(i.activeIndex + l, e, t, n)
            },
            slidePrev: function (e = this.params.speed, t = !0, n) {
              const i = this,
                {
                  params: s,
                  animating: r,
                  snapGrid: a,
                  slidesGrid: o,
                  rtlTranslate: l,
                  enabled: d,
                } = i
              if (!d) return i
              if (s.loop) {
                if (r && s.loopPreventsSlide) return !1
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft)
              }
              function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
              }
              const p = c(l ? i.translate : -i.translate),
                u = a.map((e) => c(e))
              let f = a[u.indexOf(p) - 1]
              if ('undefined' === typeof f && s.cssMode) {
                let e
                a.forEach((t, n) => {
                  p >= t && (e = n)
                }),
                  'undefined' !== typeof e && (f = a[e > 0 ? e - 1 : e])
              }
              let h = 0
              return (
                'undefined' !== typeof f &&
                  ((h = o.indexOf(f)),
                  h < 0 && (h = i.activeIndex - 1),
                  'auto' === s.slidesPerView &&
                    1 === s.slidesPerGroup &&
                    s.slidesPerGroupAuto &&
                    ((h = h - i.slidesPerViewDynamic('previous', !0) + 1),
                    (h = Math.max(h, 0)))),
                s.rewind && i.isBeginning
                  ? i.slideTo(i.slides.length - 1, e, t, n)
                  : i.slideTo(h, e, t, n)
              )
            },
            slideReset: function (e = this.params.speed, t = !0, n) {
              return this.slideTo(this.activeIndex, e, t, n)
            },
            slideToClosest: function (
              e = this.params.speed,
              t = !0,
              n,
              i = 0.5
            ) {
              const s = this
              let r = s.activeIndex
              const a = Math.min(s.params.slidesPerGroupSkip, r),
                o = a + Math.floor((r - a) / s.params.slidesPerGroup),
                l = s.rtlTranslate ? s.translate : -s.translate
              if (l >= s.snapGrid[o]) {
                const e = s.snapGrid[o]
                l - e > (s.snapGrid[o + 1] - e) * i &&
                  (r += s.params.slidesPerGroup)
              } else {
                const e = s.snapGrid[o - 1]
                l - e <= (s.snapGrid[o] - e) * i &&
                  (r -= s.params.slidesPerGroup)
              }
              return (
                (r = Math.max(r, 0)),
                (r = Math.min(r, s.slidesGrid.length - 1)),
                s.slideTo(r, e, t, n)
              )
            },
            slideToClickedSlide: function () {
              const e = this,
                { params: t, $wrapperEl: n } = e,
                i =
                  'auto' === t.slidesPerView
                    ? e.slidesPerViewDynamic()
                    : t.slidesPerView
              let s,
                r = e.clickedIndex
              if (t.loop) {
                if (e.animating) return
                ;(s = parseInt(
                  g(e.clickedSlide).attr('data-swiper-slide-index'),
                  10
                )),
                  t.centeredSlides
                    ? r < e.loopedSlides - i / 2 ||
                      r > e.slides.length - e.loopedSlides + i / 2
                      ? (e.loopFix(),
                        (r = n
                          .children(
                            `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                          )
                          .eq(0)
                          .index()),
                        v(() => {
                          e.slideTo(r)
                        }))
                      : e.slideTo(r)
                    : r > e.slides.length - i
                    ? (e.loopFix(),
                      (r = n
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      v(() => {
                        e.slideTo(r)
                      }))
                    : e.slideTo(r)
              } else e.slideTo(r)
            },
          },
          loop: {
            loopCreate: function () {
              const e = this,
                t = a(),
                { params: n, $wrapperEl: i } = e,
                s = i.children().length > 0 ? g(i.children()[0].parentNode) : i
              s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove()
              let r = s.children(`.${n.slideClass}`)
              if (n.loopFillGroupWithBlank) {
                const e = n.slidesPerGroup - (r.length % n.slidesPerGroup)
                if (e !== n.slidesPerGroup) {
                  for (let i = 0; i < e; i += 1) {
                    const e = g(t.createElement('div')).addClass(
                      `${n.slideClass} ${n.slideBlankClass}`
                    )
                    s.append(e)
                  }
                  r = s.children(`.${n.slideClass}`)
                }
              }
              'auto' !== n.slidesPerView ||
                n.loopedSlides ||
                (n.loopedSlides = r.length),
                (e.loopedSlides = Math.ceil(
                  parseFloat(n.loopedSlides || n.slidesPerView, 10)
                )),
                (e.loopedSlides += n.loopAdditionalSlides),
                e.loopedSlides > r.length && (e.loopedSlides = r.length)
              const o = [],
                l = []
              r.each((t, n) => {
                const i = g(t)
                n < e.loopedSlides && l.push(t),
                  n < r.length && n >= r.length - e.loopedSlides && o.push(t),
                  i.attr('data-swiper-slide-index', n)
              })
              for (let a = 0; a < l.length; a += 1)
                s.append(g(l[a].cloneNode(!0)).addClass(n.slideDuplicateClass))
              for (let a = o.length - 1; a >= 0; a -= 1)
                s.prepend(g(o[a].cloneNode(!0)).addClass(n.slideDuplicateClass))
            },
            loopFix: function () {
              const e = this
              e.emit('beforeLoopFix')
              const {
                activeIndex: t,
                slides: n,
                loopedSlides: i,
                allowSlidePrev: s,
                allowSlideNext: r,
                snapGrid: a,
                rtlTranslate: o,
              } = e
              let l
              ;(e.allowSlidePrev = !0), (e.allowSlideNext = !0)
              const d = -a[t] - e.getTranslate()
              if (t < i) {
                ;(l = n.length - 3 * i + t), (l += i)
                e.slideTo(l, 0, !1, !0) &&
                  0 !== d &&
                  e.setTranslate((o ? -e.translate : e.translate) - d)
              } else if (t >= n.length - i) {
                ;(l = -n.length + t + i), (l += i)
                e.slideTo(l, 0, !1, !0) &&
                  0 !== d &&
                  e.setTranslate((o ? -e.translate : e.translate) - d)
              }
              ;(e.allowSlidePrev = s), (e.allowSlideNext = r), e.emit('loopFix')
            },
            loopDestroy: function () {
              const { $wrapperEl: e, params: t, slides: n } = this
              e
                .children(
                  `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
                )
                .remove(),
                n.removeAttr('data-swiper-slide-index')
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return
              const n =
                'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl
              ;(n.style.cursor = 'move'),
                (n.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
                (n.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
                (n.style.cursor = e ? 'grabbing' : 'grab')
            },
            unsetGrabCursor: function () {
              const e = this
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  'container' === e.params.touchEventsTarget
                    ? 'el'
                    : 'wrapperEl'
                ].style.cursor = '')
            },
          },
          events: {
            attachEvents: function () {
              const e = this,
                t = a(),
                { params: n, support: i } = e
              ;(e.onTouchStart = L.bind(e)),
                (e.onTouchMove = I.bind(e)),
                (e.onTouchEnd = z.bind(e)),
                n.cssMode && (e.onScroll = D.bind(e)),
                (e.onClick = j.bind(e)),
                i.touch &&
                  !N &&
                  (t.addEventListener('touchstart', R), (N = !0)),
                G(e, 'on')
            },
            detachEvents: function () {
              G(this, 'off')
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                {
                  activeIndex: t,
                  initialized: n,
                  loopedSlides: i = 0,
                  params: s,
                  $el: r,
                } = e,
                a = s.breakpoints
              if (!a || (a && 0 === Object.keys(a).length)) return
              const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el)
              if (!o || e.currentBreakpoint === o) return
              const l = (o in a ? a[o] : void 0) || e.originalParams,
                d = B(e, s),
                c = B(e, l),
                p = s.enabled
              d && !c
                ? (r.removeClass(
                    `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (r.addClass(`${s.containerModifierClass}grid`),
                  ((l.grid.fill && 'column' === l.grid.fill) ||
                    (!l.grid.fill && 'column' === s.grid.fill)) &&
                    r.addClass(`${s.containerModifierClass}grid-column`),
                  e.emitContainerClasses())
              const u = l.direction && l.direction !== s.direction,
                f = s.loop && (l.slidesPerView !== s.slidesPerView || u)
              u && n && e.changeDirection(), C(e.params, l)
              const h = e.params.enabled
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                p && !h ? e.disable() : !p && h && e.enable(),
                (e.currentBreakpoint = o),
                e.emit('_beforeBreakpoint', l),
                f &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit('breakpoint', l)
            },
            getBreakpoint: function (e, t = 'window', n) {
              if (!e || ('container' === t && !n)) return
              let i = !1
              const s = l(),
                r = 'window' === t ? s.innerHeight : n.clientHeight,
                a = Object.keys(e).map((e) => {
                  if ('string' === typeof e && 0 === e.indexOf('@')) {
                    const t = parseFloat(e.substr(1))
                    return { value: r * t, point: e }
                  }
                  return { value: e, point: e }
                })
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10))
              for (let o = 0; o < a.length; o += 1) {
                const { point: e, value: r } = a[o]
                'window' === t
                  ? s.matchMedia(`(min-width: ${r}px)`).matches && (i = e)
                  : r <= n.clientWidth && (i = e)
              }
              return i || 'max'
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: i } = n
              if (i) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i
                e.isLocked = e.size > n
              } else e.isLocked = 1 === e.snapGrid.length
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
            },
          },
          classes: {
            addClasses: function () {
              const e = this,
                {
                  classNames: t,
                  params: n,
                  rtl: i,
                  $el: s,
                  device: r,
                  support: a,
                } = e,
                o = (function (e, t) {
                  const n = []
                  return (
                    e.forEach((e) => {
                      'object' === typeof e
                        ? Object.keys(e).forEach((i) => {
                            e[i] && n.push(t + i)
                          })
                        : 'string' === typeof e && n.push(t + e)
                    }),
                    n
                  )
                })(
                  [
                    'initialized',
                    n.direction,
                    { 'pointer-events': !a.touch },
                    { 'free-mode': e.params.freeMode && n.freeMode.enabled },
                    { autoheight: n.autoHeight },
                    { rtl: i },
                    { grid: n.grid && n.grid.rows > 1 },
                    {
                      'grid-column':
                        n.grid && n.grid.rows > 1 && 'column' === n.grid.fill,
                    },
                    { android: r.android },
                    { ios: r.ios },
                    { 'css-mode': n.cssMode },
                    { centered: n.cssMode && n.centeredSlides },
                  ],
                  n.containerModifierClass
                )
              t.push(...o),
                s.addClass([...t].join(' ')),
                e.emitContainerClasses()
            },
            removeClasses: function () {
              const { $el: e, classNames: t } = this
              e.removeClass(t.join(' ')), this.emitContainerClasses()
            },
          },
          images: {
            loadImage: function (e, t, n, i, s, r) {
              const a = l()
              let o
              function d() {
                r && r()
              }
              g(e).parent('picture')[0] || (e.complete && s)
                ? d()
                : t
                ? ((o = new a.Image()),
                  (o.onload = d),
                  (o.onerror = d),
                  i && (o.sizes = i),
                  n && (o.srcset = n),
                  t && (o.src = t))
                : d()
            },
            preloadImages: function () {
              const e = this
              function t() {
                'undefined' !== typeof e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit('imagesReady')))
              }
              e.imagesToLoad = e.$el.find('img')
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const i = e.imagesToLoad[n]
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute('src'),
                  i.srcset || i.getAttribute('srcset'),
                  i.sizes || i.getAttribute('sizes'),
                  !0,
                  t
                )
              }
            },
          },
        },
        W = {}
      class q {
        constructor(...e) {
          let t, n
          if (
            (1 === e.length &&
            e[0].constructor &&
            'Object' === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (n = e[0])
              : ([t, n] = e),
            n || (n = {}),
            (n = C({}, n)),
            t && !n.el && (n.el = t),
            n.el && g(n.el).length > 1)
          ) {
            const e = []
            return (
              g(n.el).each((t) => {
                const i = C({}, n, { el: t })
                e.push(new q(i))
              }),
              e
            )
          }
          const i = this
          ;(i.__swiper__ = !0),
            (i.support = k()),
            (i.device = P({ userAgent: n.userAgent })),
            (i.browser = M()),
            (i.eventsListeners = {}),
            (i.eventsAnyListeners = []),
            (i.modules = [...i.__modules__]),
            n.modules &&
              Array.isArray(n.modules) &&
              i.modules.push(...n.modules)
          const s = {}
          i.modules.forEach((e) => {
            e({
              swiper: i,
              extendParams: F(n, s),
              on: i.on.bind(i),
              once: i.once.bind(i),
              off: i.off.bind(i),
              emit: i.emit.bind(i),
            })
          })
          const r = C({}, V, s)
          return (
            (i.params = C({}, r, W, n)),
            (i.originalParams = C({}, i.params)),
            (i.passedParams = C({}, n)),
            i.params &&
              i.params.on &&
              Object.keys(i.params.on).forEach((e) => {
                i.on(e, i.params.on[e])
              }),
            i.params && i.params.onAny && i.onAny(i.params.onAny),
            (i.$ = g),
            Object.assign(i, {
              enabled: i.params.enabled,
              el: t,
              classNames: [],
              slides: g(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => 'horizontal' === i.params.direction,
              isVertical: () => 'vertical' === i.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    'touchstart',
                    'touchmove',
                    'touchend',
                    'touchcancel',
                  ],
                  t = ['pointerdown', 'pointermove', 'pointerup']
                return (
                  (i.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (i.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  i.support.touch || !i.params.simulateTouch
                    ? i.touchEventsTouch
                    : i.touchEventsDesktop
                )
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: i.params.focusableElements,
                lastClickTime: y(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.emit('_swiper'),
            i.params.init && i.init(),
            i
          )
        }
        enable() {
          const e = this
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit('enable'))
        }
        disable() {
          const e = this
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit('disable'))
        }
        setProgress(e, t) {
          const n = this
          e = Math.min(Math.max(e, 0), 1)
          const i = n.minTranslate(),
            s = (n.maxTranslate() - i) * e + i
          n.translateTo(s, 'undefined' === typeof t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this
          if (!e.params._emitClasses || !e.el) return
          const t = e.el.className
            .split(' ')
            .filter(
              (t) =>
                0 === t.indexOf('swiper') ||
                0 === t.indexOf(e.params.containerModifierClass)
            )
          e.emit('_containerClasses', t.join(' '))
        }
        getSlideClasses(e) {
          const t = this
          return e.className
            .split(' ')
            .filter(
              (e) =>
                0 === e.indexOf('swiper-slide') ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(' ')
        }
        emitSlidesClasses() {
          const e = this
          if (!e.params._emitClasses || !e.el) return
          const t = []
          e.slides.each((n) => {
            const i = e.getSlideClasses(n)
            t.push({ slideEl: n, classNames: i }), e.emit('_slideClass', n, i)
          }),
            e.emit('_slideClasses', t)
        }
        slidesPerViewDynamic(e = 'current', t = !1) {
          const {
            params: n,
            slides: i,
            slidesGrid: s,
            slidesSizesGrid: r,
            size: a,
            activeIndex: o,
          } = this
          let l = 1
          if (n.centeredSlides) {
            let e,
              t = i[o].swiperSlideSize
            for (let n = o + 1; n < i.length; n += 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > a && (e = !0))
            for (let n = o - 1; n >= 0; n -= 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > a && (e = !0))
          } else if ('current' === e)
            for (let d = o + 1; d < i.length; d += 1) {
              ;(t ? s[d] + r[d] - s[o] < a : s[d] - s[o] < a) && (l += 1)
            }
          else
            for (let d = o - 1; d >= 0; d -= 1) {
              s[o] - s[d] < a && (l += 1)
            }
          return l
        }
        update() {
          const e = this
          if (!e || e.destroyed) return
          const { snapGrid: t, params: n } = e
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate())
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let s
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((s =
                  ('auto' === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                s || i()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit('update')
        }
        changeDirection(e, t = !0) {
          const n = this,
            i = n.params.direction
          return (
            e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
            e === i ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${i}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.each((t) => {
                'vertical' === e ? (t.style.width = '') : (t.style.height = '')
              }),
              n.emit('changeDirection'),
              t && n.update()),
            n
          )
        }
        mount(e) {
          const t = this
          if (t.mounted) return !0
          const n = g(e || t.params.el)
          if (!(e = n[0])) return !1
          e.swiper = t
          const i = () =>
            `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`
          let s = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = g(e.shadowRoot.querySelector(i()))
              return (t.children = (e) => n.children(e)), t
            }
            return n.children(i())
          })()
          if (0 === s.length && t.params.createElements) {
            const e = a().createElement('div')
            ;(s = g(e)),
              (e.className = t.params.wrapperClass),
              n.append(e),
              n.children(`.${t.params.slideClass}`).each((e) => {
                s.append(e)
              })
          }
          return (
            Object.assign(t, {
              $el: n,
              el: e,
              $wrapperEl: s,
              wrapperEl: s[0],
              mounted: !0,
              rtl:
                'rtl' === e.dir.toLowerCase() || 'rtl' === n.css('direction'),
              rtlTranslate:
                'horizontal' === t.params.direction &&
                ('rtl' === e.dir.toLowerCase() || 'rtl' === n.css('direction')),
              wrongRTL: '-webkit-box' === s.css('display'),
            }),
            !0
          )
        }
        init(e) {
          const t = this
          if (t.initialized) return t
          return (
            !1 === t.mount(e) ||
              (t.emit('beforeInit'),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit('init'),
              t.emit('afterInit')),
            t
          )
        }
        destroy(e = !0, t = !0) {
          const n = this,
            { params: i, $el: s, $wrapperEl: r, slides: a } = n
          return (
            'undefined' === typeof n.params ||
              n.destroyed ||
              (n.emit('beforeDestroy'),
              (n.initialized = !1),
              n.detachEvents(),
              i.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                s.removeAttr('style'),
                r.removeAttr('style'),
                a &&
                  a.length &&
                  a
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(' ')
                    )
                    .removeAttr('style')
                    .removeAttr('data-swiper-slide-index')),
              n.emit('destroy'),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e)
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                (function (e) {
                  const t = e
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null
                    } catch (n) {}
                    try {
                      delete t[e]
                    } catch (n) {}
                  })
                })(n)),
              (n.destroyed = !0)),
            null
          )
        }
        static extendDefaults(e) {
          C(W, e)
        }
        static get extendedDefaults() {
          return W
        }
        static get defaults() {
          return V
        }
        static installModule(e) {
          q.prototype.__modules__ || (q.prototype.__modules__ = [])
          const t = q.prototype.__modules__
          'function' === typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => q.installModule(e)), q)
            : (q.installModule(e), q)
        }
      }
      Object.keys(H).forEach((e) => {
        Object.keys(H[e]).forEach((t) => {
          q.prototype[t] = H[e][t]
        })
      }),
        q.use([
          function ({ swiper: e, on: t, emit: n }) {
            const i = l()
            let s = null
            const r = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (n('beforeResize'), n('resize'))
              },
              a = () => {
                e && !e.destroyed && e.initialized && n('orientationchange')
              }
            t('init', () => {
              e.params.resizeObserver && 'undefined' !== typeof i.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((s = new ResizeObserver((t) => {
                    const { width: n, height: i } = e
                    let s = n,
                      a = i
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: n, target: i }) => {
                        ;(i && i !== e.el) ||
                          ((s = n ? n.width : (t[0] || t).inlineSize),
                          (a = n ? n.height : (t[0] || t).blockSize))
                      }
                    ),
                      (s === n && a === i) || r()
                  })),
                  s.observe(e.el))
                : (i.addEventListener('resize', r),
                  i.addEventListener('orientationchange', a))
            }),
              t('destroy', () => {
                s && s.unobserve && e.el && (s.unobserve(e.el), (s = null)),
                  i.removeEventListener('resize', r),
                  i.removeEventListener('orientationchange', a)
              })
          },
          function ({ swiper: e, extendParams: t, on: n, emit: i }) {
            const s = [],
              r = l(),
              a = (e, t = {}) => {
                const n = new (r.MutationObserver || r.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void i('observerUpdate', e[0])
                    const t = function () {
                      i('observerUpdate', e[0])
                    }
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(t)
                      : r.setTimeout(t, 0)
                  }
                )
                n.observe(e, {
                  attributes:
                    'undefined' === typeof t.attributes || t.attributes,
                  childList: 'undefined' === typeof t.childList || t.childList,
                  characterData:
                    'undefined' === typeof t.characterData || t.characterData,
                }),
                  s.push(n)
              }
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              n('init', () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = e.$el.parents()
                    for (let e = 0; e < t.length; e += 1) a(t[e])
                  }
                  a(e.$el[0], { childList: e.params.observeSlideChildren }),
                    a(e.$wrapperEl[0], { attributes: !1 })
                }
              }),
              n('destroy', () => {
                s.forEach((e) => {
                  e.disconnect()
                }),
                  s.splice(0, s.length)
              })
          },
        ])
      var Y = q
      function X(e, t, n, i) {
        const s = a()
        return (
          e.params.createElements &&
            Object.keys(i).forEach((r) => {
              if (!n[r] && !0 === n.auto) {
                let a = e.$el.children(`.${i[r]}`)[0]
                a ||
                  ((a = s.createElement('div')),
                  (a.className = i[r]),
                  e.$el.append(a)),
                  (n[r] = a),
                  (t[r] = a)
              }
            }),
          n
        )
      }
      function U({ swiper: e, extendParams: t, on: n, emit: i }) {
        function s(t) {
          let n
          return (
            t &&
              ((n = g(t)),
              e.params.uniqueNavElements &&
                'string' === typeof t &&
                n.length > 1 &&
                1 === e.$el.find(t).length &&
                (n = e.$el.find(t))),
            n
          )
        }
        function r(t, n) {
          const i = e.params.navigation
          t &&
            t.length > 0 &&
            (t[n ? 'addClass' : 'removeClass'](i.disabledClass),
            t[0] && 'BUTTON' === t[0].tagName && (t[0].disabled = n),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? 'addClass' : 'removeClass'](i.lockClass))
        }
        function a() {
          if (e.params.loop) return
          const { $nextEl: t, $prevEl: n } = e.navigation
          r(n, e.isBeginning && !e.params.rewind),
            r(t, e.isEnd && !e.params.rewind)
        }
        function o(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              e.slidePrev()
        }
        function l(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext()
        }
        function d() {
          const t = e.params.navigation
          if (
            ((e.params.navigation = X(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
            )),
            !t.nextEl && !t.prevEl)
          )
            return
          const n = s(t.nextEl),
            i = s(t.prevEl)
          n && n.length > 0 && n.on('click', l),
            i && i.length > 0 && i.on('click', o),
            Object.assign(e.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: i,
              prevEl: i && i[0],
            }),
            e.enabled ||
              (n && n.addClass(t.lockClass), i && i.addClass(t.lockClass))
        }
        function c() {
          const { $nextEl: t, $prevEl: n } = e.navigation
          t &&
            t.length &&
            (t.off('click', l),
            t.removeClass(e.params.navigation.disabledClass)),
            n &&
              n.length &&
              (n.off('click', o),
              n.removeClass(e.params.navigation.disabledClass))
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          n('init', () => {
            d(), a()
          }),
          n('toEdge fromEdge lock unlock', () => {
            a()
          }),
          n('destroy', () => {
            c()
          }),
          n('enable disable', () => {
            const { $nextEl: t, $prevEl: n } = e.navigation
            t &&
              t[e.enabled ? 'removeClass' : 'addClass'](
                e.params.navigation.lockClass
              ),
              n &&
                n[e.enabled ? 'removeClass' : 'addClass'](
                  e.params.navigation.lockClass
                )
          }),
          n('click', (t, n) => {
            const { $nextEl: s, $prevEl: r } = e.navigation,
              a = n.target
            if (e.params.navigation.hideOnClick && !g(a).is(r) && !g(a).is(s)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === a || e.pagination.el.contains(a))
              )
                return
              let t
              s
                ? (t = s.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                i(!0 === t ? 'navigationShow' : 'navigationHide'),
                s && s.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass)
            }
          }),
          Object.assign(e.navigation, { update: a, init: d, destroy: c })
      }
      function Z(e = '') {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, '\\$1')
          .replace(/ /g, '.')}`
      }
      function K({ swiper: e, extendParams: t, on: n, emit: i }) {
        const s = 'swiper-pagination'
        let r
        t({
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] })
        let a = 0
        function o() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          )
        }
        function l(t, n) {
          const { bulletActiveClass: i } = e.params.pagination
          t[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)
        }
        function d() {
          const t = e.rtl,
            n = e.params.pagination
          if (o()) return
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            d = e.pagination.$el
          let c
          const p = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length
          if (
            (e.params.loop
              ? ((c = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                c > s - 1 - 2 * e.loopedSlides && (c -= s - 2 * e.loopedSlides),
                c > p - 1 && (c -= p),
                c < 0 && 'bullets' !== e.params.paginationType && (c = p + c))
              : (c =
                  'undefined' !== typeof e.snapIndex
                    ? e.snapIndex
                    : e.activeIndex || 0),
            'bullets' === n.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const i = e.pagination.bullets
            let s, o, p
            if (
              (n.dynamicBullets &&
                ((r = i
                  .eq(0)
                  [e.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                d.css(
                  e.isHorizontal() ? 'width' : 'height',
                  r * (n.dynamicMainBullets + 4) + 'px'
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((a += c - (e.previousIndex - e.loopedSlides || 0)),
                  a > n.dynamicMainBullets - 1
                    ? (a = n.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (s = Math.max(c - a, 0)),
                (o = s + (Math.min(i.length, n.dynamicMainBullets) - 1)),
                (p = (o + s) / 2)),
              i.removeClass(
                ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
                  .map((e) => `${n.bulletActiveClass}${e}`)
                  .join(' ')
              ),
              d.length > 1)
            )
              i.each((e) => {
                const t = g(e),
                  i = t.index()
                i === c && t.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (i >= s &&
                      i <= o &&
                      t.addClass(`${n.bulletActiveClass}-main`),
                    i === s && l(t, 'prev'),
                    i === o && l(t, 'next'))
              })
            else {
              const t = i.eq(c),
                r = t.index()
              if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                const t = i.eq(s),
                  a = i.eq(o)
                for (let e = s; e <= o; e += 1)
                  i.eq(e).addClass(`${n.bulletActiveClass}-main`)
                if (e.params.loop)
                  if (r >= i.length) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`)
                    i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                      `${n.bulletActiveClass}-prev`
                    )
                  } else l(t, 'prev'), l(a, 'next')
                else l(t, 'prev'), l(a, 'next')
              }
            }
            if (n.dynamicBullets) {
              const s = Math.min(i.length, n.dynamicMainBullets + 4),
                a = (r * s - r) / 2 - p * r,
                o = t ? 'right' : 'left'
              i.css(e.isHorizontal() ? o : 'top', `${a}px`)
            }
          }
          if (
            ('fraction' === n.type &&
              (d.find(Z(n.currentClass)).text(n.formatFractionCurrent(c + 1)),
              d.find(Z(n.totalClass)).text(n.formatFractionTotal(p))),
            'progressbar' === n.type)
          ) {
            let t
            t = n.progressbarOpposite
              ? e.isHorizontal()
                ? 'vertical'
                : 'horizontal'
              : e.isHorizontal()
              ? 'horizontal'
              : 'vertical'
            const i = (c + 1) / p
            let s = 1,
              r = 1
            'horizontal' === t ? (s = i) : (r = i),
              d
                .find(Z(n.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${r})`)
                .transition(e.params.speed)
          }
          'custom' === n.type && n.renderCustom
            ? (d.html(n.renderCustom(e, c + 1, p)), i('paginationRender', d[0]))
            : i('paginationUpdate', d[0]),
            e.params.watchOverflow &&
              e.enabled &&
              d[e.isLocked ? 'addClass' : 'removeClass'](n.lockClass)
        }
        function c() {
          const t = e.params.pagination
          if (o()) return
          const n =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            s = e.pagination.$el
          let r = ''
          if ('bullets' === t.type) {
            let i = e.params.loop
              ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              i > n &&
              (i = n)
            for (let n = 0; n < i; n += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, n, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`)
            s.html(r), (e.pagination.bullets = s.find(Z(t.bulletClass)))
          }
          'fraction' === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            s.html(r)),
            'progressbar' === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              s.html(r)),
            'custom' !== t.type && i('paginationRender', e.pagination.$el[0])
        }
        function p() {
          e.params.pagination = X(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: 'swiper-pagination' }
          )
          const t = e.params.pagination
          if (!t.el) return
          let n = g(t.el)
          0 !== n.length &&
            (e.params.uniqueNavElements &&
              'string' === typeof t.el &&
              n.length > 1 &&
              ((n = e.$el.find(t.el)),
              n.length > 1 &&
                (n = n.filter((t) => g(t).parents('.swiper')[0] === e.el))),
            'bullets' === t.type && t.clickable && n.addClass(t.clickableClass),
            n.addClass(t.modifierClass + t.type),
            n.addClass(t.modifierClass + e.params.direction),
            'bullets' === t.type &&
              t.dynamicBullets &&
              (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (a = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            'progressbar' === t.type &&
              t.progressbarOpposite &&
              n.addClass(t.progressbarOppositeClass),
            t.clickable &&
              n.on('click', Z(t.bulletClass), function (t) {
                t.preventDefault()
                let n = g(this).index() * e.params.slidesPerGroup
                e.params.loop && (n += e.loopedSlides), e.slideTo(n)
              }),
            Object.assign(e.pagination, { $el: n, el: n[0] }),
            e.enabled || n.addClass(t.lockClass))
        }
        function u() {
          const t = e.params.pagination
          if (o()) return
          const n = e.pagination.$el
          n.removeClass(t.hiddenClass),
            n.removeClass(t.modifierClass + t.type),
            n.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && n.off('click', Z(t.bulletClass))
        }
        n('init', () => {
          p(), c(), d()
        }),
          n('activeIndexChange', () => {
            ;(e.params.loop || 'undefined' === typeof e.snapIndex) && d()
          }),
          n('snapIndexChange', () => {
            e.params.loop || d()
          }),
          n('slidesLengthChange', () => {
            e.params.loop && (c(), d())
          }),
          n('snapGridLengthChange', () => {
            e.params.loop || (c(), d())
          }),
          n('destroy', () => {
            u()
          }),
          n('enable disable', () => {
            const { $el: t } = e.pagination
            t &&
              t[e.enabled ? 'removeClass' : 'addClass'](
                e.params.pagination.lockClass
              )
          }),
          n('lock unlock', () => {
            d()
          }),
          n('click', (t, n) => {
            const s = n.target,
              { $el: r } = e.pagination
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r.length > 0 &&
              !g(s).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && s === e.navigation.nextEl) ||
                  (e.navigation.prevEl && s === e.navigation.prevEl))
              )
                return
              const t = r.hasClass(e.params.pagination.hiddenClass)
              i(!0 === t ? 'paginationShow' : 'paginationHide'),
                r.toggleClass(e.params.pagination.hiddenClass)
            }
          }),
          Object.assign(e.pagination, {
            render: c,
            update: d,
            init: p,
            destroy: u,
          })
      }
      function J({ swiper: e, extendParams: t, on: n, emit: i }) {
        let s
        function r() {
          const t = e.slides.eq(e.activeIndex)
          let n = e.params.autoplay.delay
          t.attr('data-swiper-autoplay') &&
            (n = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
            clearTimeout(s),
            (s = v(() => {
              let t
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    i('autoplay'))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      i('autoplay'))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), i('autoplay'))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  i('autoplay'))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), i('autoplay'))
                : ((t = e.slideNext(e.params.speed, !0, !0)), i('autoplay')),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) && r()
            }, n))
        }
        function o() {
          return (
            'undefined' === typeof s &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), i('autoplayStart'), r(), !0)
          )
        }
        function l() {
          return (
            !!e.autoplay.running &&
            'undefined' !== typeof s &&
            (s && (clearTimeout(s), (s = void 0)),
            (e.autoplay.running = !1),
            i('autoplayStop'),
            !0)
          )
        }
        function d(t) {
          e.autoplay.running &&
            (e.autoplay.paused ||
              (s && clearTimeout(s),
              (e.autoplay.paused = !0),
              0 !== t && e.params.autoplay.waitForTransition
                ? ['transitionend', 'webkitTransitionEnd'].forEach((t) => {
                    e.$wrapperEl[0].addEventListener(t, p)
                  })
                : ((e.autoplay.paused = !1), r())))
        }
        function c() {
          const t = a()
          'hidden' === t.visibilityState && e.autoplay.running && d(),
            'visible' === t.visibilityState &&
              e.autoplay.paused &&
              (r(), (e.autoplay.paused = !1))
        }
        function p(t) {
          e &&
            !e.destroyed &&
            e.$wrapperEl &&
            t.target === e.$wrapperEl[0] &&
            (['transitionend', 'webkitTransitionEnd'].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, p)
            }),
            (e.autoplay.paused = !1),
            e.autoplay.running ? r() : l())
        }
        function u() {
          e.params.autoplay.disableOnInteraction ? l() : d(),
            ['transitionend', 'webkitTransitionEnd'].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, p)
            })
        }
        function f() {
          e.params.autoplay.disableOnInteraction ||
            ((e.autoplay.paused = !1), r())
        }
        ;(e.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          n('init', () => {
            if (e.params.autoplay.enabled) {
              o()
              a().addEventListener('visibilitychange', c),
                e.params.autoplay.pauseOnMouseEnter &&
                  (e.$el.on('mouseenter', u), e.$el.on('mouseleave', f))
            }
          }),
          n('beforeTransitionStart', (t, n, i) => {
            e.autoplay.running &&
              (i || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(n)
                : l())
          }),
          n('sliderFirstMove', () => {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction ? l() : d())
          }),
          n('touchEnd', () => {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              r()
          }),
          n('destroy', () => {
            e.$el.off('mouseenter', u),
              e.$el.off('mouseleave', f),
              e.autoplay.running && l()
            a().removeEventListener('visibilitychange', c)
          }),
          Object.assign(e.autoplay, { pause: d, run: r, start: o, stop: l })
      }
    },
  },
])
