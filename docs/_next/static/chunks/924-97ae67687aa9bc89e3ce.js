;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [924],
  {
    38252: function (t) {
      'use strict'
      t.exports = function t(e, i) {
        if (e === i) return !0
        if (e && i && 'object' == typeof e && 'object' == typeof i) {
          if (e.constructor !== i.constructor) return !1
          var o, n, s
          if (Array.isArray(e)) {
            if ((o = e.length) != i.length) return !1
            for (n = o; 0 !== n--; ) if (!t(e[n], i[n])) return !1
            return !0
          }
          if (e.constructor === RegExp)
            return e.source === i.source && e.flags === i.flags
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === i.valueOf()
          if (e.toString !== Object.prototype.toString)
            return e.toString() === i.toString()
          if ((o = (s = Object.keys(e)).length) !== Object.keys(i).length)
            return !1
          for (n = o; 0 !== n--; )
            if (!Object.prototype.hasOwnProperty.call(i, s[n])) return !1
          for (n = o; 0 !== n--; ) {
            var r = s[n]
            if (('_owner' !== r || !e.$$typeof) && !t(e[r], i[r])) return !1
          }
          return !0
        }
        return e !== e && i !== i
      }
    },
    70131: function (t, e, i) {
      'use strict'
      i.d(e, {
        YD: function () {
          return f
        },
      })
      var o = i(67294)
      function n() {
        return (n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e]
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
            }
            return t
          }).apply(this, arguments)
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var r = new Map(),
        a = new WeakMap(),
        c = 0,
        l = void 0
      function d(t) {
        return Object.keys(t)
          .sort()
          .filter(function (e) {
            return void 0 !== t[e]
          })
          .map(function (e) {
            return (
              e +
              '_' +
              ('root' === e
                ? (i = t.root)
                  ? (a.has(i) || ((c += 1), a.set(i, c.toString())), a.get(i))
                  : '0'
                : t[e])
            )
            var i
          })
          .toString()
      }
      function u(t, e, i, o) {
        if (
          (void 0 === i && (i = {}),
          void 0 === o && (o = l),
          'undefined' === typeof window.IntersectionObserver && void 0 !== o)
        ) {
          var n = t.getBoundingClientRect()
          return (
            e(o, {
              isIntersecting: o,
              target: t,
              intersectionRatio:
                'number' === typeof i.threshold ? i.threshold : 0,
              time: 0,
              boundingClientRect: n,
              intersectionRect: n,
              rootBounds: n,
            }),
            function () {}
          )
        }
        var s = (function (t) {
            var e = d(t),
              i = r.get(e)
            if (!i) {
              var o,
                n = new Map(),
                s = new IntersectionObserver(function (e) {
                  e.forEach(function (e) {
                    var i,
                      s =
                        e.isIntersecting &&
                        o.some(function (t) {
                          return e.intersectionRatio >= t
                        })
                    t.trackVisibility &&
                      'undefined' === typeof e.isVisible &&
                      (e.isVisible = s),
                      null == (i = n.get(e.target)) ||
                        i.forEach(function (t) {
                          t(s, e)
                        })
                  })
                }, t)
              ;(o =
                s.thresholds ||
                (Array.isArray(t.threshold)
                  ? t.threshold
                  : [t.threshold || 0])),
                (i = { id: e, observer: s, elements: n }),
                r.set(e, i)
            }
            return i
          })(i),
          a = s.id,
          c = s.observer,
          u = s.elements,
          h = u.get(t) || []
        return (
          u.has(t) || u.set(t, h),
          h.push(e),
          c.observe(t),
          function () {
            h.splice(h.indexOf(e), 1),
              0 === h.length && (u.delete(t), c.unobserve(t)),
              0 === u.size && (c.disconnect(), r.delete(a))
          }
        )
      }
      var h = [
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
      function p(t) {
        return 'function' !== typeof t.children
      }
      var v = (function (t) {
        var e, i
        function r(e) {
          var i
          return (
            ((i = t.call(this, e) || this).node = null),
            (i._unobserveCb = null),
            (i.handleNode = function (t) {
              i.node &&
                (i.unobserve(),
                t ||
                  i.props.triggerOnce ||
                  i.props.skip ||
                  i.setState({
                    inView: !!i.props.initialInView,
                    entry: void 0,
                  })),
                (i.node = t || null),
                i.observeNode()
            }),
            (i.handleChange = function (t, e) {
              t && i.props.triggerOnce && i.unobserve(),
                p(i.props) || i.setState({ inView: t, entry: e }),
                i.props.onChange && i.props.onChange(t, e)
            }),
            (i.state = { inView: !!e.initialInView, entry: void 0 }),
            i
          )
        }
        ;(i = t),
          ((e = r).prototype = Object.create(i.prototype)),
          (e.prototype.constructor = e),
          s(e, i)
        var a = r.prototype
        return (
          (a.componentDidUpdate = function (t) {
            ;(t.rootMargin === this.props.rootMargin &&
              t.root === this.props.root &&
              t.threshold === this.props.threshold &&
              t.skip === this.props.skip &&
              t.trackVisibility === this.props.trackVisibility &&
              t.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode())
          }),
          (a.componentWillUnmount = function () {
            this.unobserve(), (this.node = null)
          }),
          (a.observeNode = function () {
            if (this.node && !this.props.skip) {
              var t = this.props,
                e = t.threshold,
                i = t.root,
                o = t.rootMargin,
                n = t.trackVisibility,
                s = t.delay,
                r = t.fallbackInView
              this._unobserveCb = u(
                this.node,
                this.handleChange,
                {
                  threshold: e,
                  root: i,
                  rootMargin: o,
                  trackVisibility: n,
                  delay: s,
                },
                r
              )
            }
          }),
          (a.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null))
          }),
          (a.render = function () {
            if (!p(this.props)) {
              var t = this.state,
                e = t.inView,
                i = t.entry
              return this.props.children({
                inView: e,
                entry: i,
                ref: this.handleNode,
              })
            }
            var s = this.props,
              r = s.children,
              a = s.as,
              c = (function (t, e) {
                if (null == t) return {}
                var i,
                  o,
                  n = {},
                  s = Object.keys(t)
                for (o = 0; o < s.length; o++)
                  (i = s[o]), e.indexOf(i) >= 0 || (n[i] = t[i])
                return n
              })(s, h)
            return o.createElement(
              a || 'div',
              n({ ref: this.handleNode }, c),
              r
            )
          }),
          r
        )
      })(o.Component)
      function f(t) {
        var e = void 0 === t ? {} : t,
          i = e.threshold,
          n = e.delay,
          s = e.trackVisibility,
          r = e.rootMargin,
          a = e.root,
          c = e.triggerOnce,
          l = e.skip,
          d = e.initialInView,
          h = e.fallbackInView,
          p = o.useRef(),
          v = o.useState({ inView: !!d }),
          f = v[0],
          y = v[1],
          g = o.useCallback(
            function (t) {
              void 0 !== p.current && (p.current(), (p.current = void 0)),
                l ||
                  (t &&
                    (p.current = u(
                      t,
                      function (t, e) {
                        y({ inView: t, entry: e }),
                          e.isIntersecting &&
                            c &&
                            p.current &&
                            (p.current(), (p.current = void 0))
                      },
                      {
                        root: a,
                        rootMargin: r,
                        threshold: i,
                        trackVisibility: s,
                        delay: n,
                      },
                      h
                    )))
            },
            [Array.isArray(i) ? i.toString() : i, a, r, c, l, s, h, n]
          )
        ;(0, o.useEffect)(function () {
          p.current || !f.entry || c || l || y({ inView: !!d })
        })
        var b = [g, f.inView, f.entry]
        return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b
      }
      ;(v.displayName = 'InView'),
        (v.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 })
    },
    41113: function (t, e, i) {
      var o
      'undefined' != typeof self && self,
        (o = function (t) {
          return (function (t) {
            var e = {}
            function i(o) {
              if (e[o]) return e[o].exports
              var n = (e[o] = { i: o, l: !1, exports: {} })
              return (
                t[o].call(n.exports, n, n.exports, i), (n.l = !0), n.exports
              )
            }
            return (
              (i.m = t),
              (i.c = e),
              (i.d = function (t, e, o) {
                i.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: o })
              }),
              (i.r = function (t) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(t, '__esModule', { value: !0 })
              }),
              (i.t = function (t, e) {
                if ((1 & e && (t = i(t)), 8 & e)) return t
                if (4 & e && 'object' == typeof t && t && t.__esModule) return t
                var o = Object.create(null)
                if (
                  (i.r(o),
                  Object.defineProperty(o, 'default', {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && 'string' != typeof t)
                )
                  for (var n in t)
                    i.d(
                      o,
                      n,
                      function (e) {
                        return t[e]
                      }.bind(null, n)
                    )
                return o
              }),
              (i.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default
                      }
                    : function () {
                        return t
                      }
                return i.d(e, 'a', e), e
              }),
              (i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
              }),
              (i.p = ''),
              i((i.s = 3))
            )
          })([
            function (e, i) {
              e.exports = t
            },
            function (t, e, i) {
              'use strict'
              function o(t) {
                return (o =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t
                      }
                    : function (t) {
                        return t &&
                          'function' == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t
                      })(t)
              }
              function n(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              }
              function s(t, e) {
                if ('function' != typeof e && null !== e)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  )
                ;(t.prototype = Object.create(e && e.prototype, {
                  constructor: { value: t, writable: !0, configurable: !0 },
                })),
                  e && r(t, e)
              }
              function r(t, e) {
                return (r =
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t
                  })(t, e)
              }
              function a(t) {
                var e = (function () {
                  if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1
                  if (Reflect.construct.sham) return !1
                  if ('function' == typeof Proxy) return !0
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    )
                  } catch (t) {
                    return !1
                  }
                })()
                return function () {
                  var i,
                    o = l(t)
                  if (e) {
                    var n = l(this).constructor
                    i = Reflect.construct(o, arguments, n)
                  } else i = o.apply(this, arguments)
                  return c(this, i)
                }
              }
              function c(t, e) {
                return !e || ('object' !== o(e) && 'function' != typeof e)
                  ? (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        )
                      return t
                    })(t)
                  : e
              }
              function l(t) {
                return (l = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
              }
              var d =
                (this && this.__importDefault) ||
                function (t) {
                  return t && t.__esModule ? t : { default: t }
                }
              Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.Background = e.Parallax = void 0)
              var u = d(i(0)),
                h = (function (t) {
                  s(i, t)
                  var e = a(i)
                  function i() {
                    return n(this, i), e.apply(this, arguments)
                  }
                  return i
                })(u.default.Component)
              e.Parallax = h
              var p = (function (t) {
                s(i, t)
                var e = a(i)
                function i() {
                  return n(this, i), e.apply(this, arguments)
                }
                return i
              })(u.default.Component)
              e.Background = p
            },
            function (t, e, i) {
              'use strict'
              Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.canUseDOM =
                  e.getNodeHeight =
                  e.isScrolledIntoView =
                  e.getWindowHeight =
                    void 0),
                (e.getWindowHeight = function (t) {
                  if (!t) return 0
                  var e = window,
                    i = document,
                    o = i.documentElement,
                    n = i.getElementsByTagName('body')[0]
                  return e.innerHeight || o.clientHeight || n.clientHeight
                }),
                (e.isScrolledIntoView = function (t) {
                  var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    o = arguments.length > 2 ? arguments[2] : void 0
                  if (!o) return !1
                  var n = t.getBoundingClientRect().top - i,
                    s = t.getBoundingClientRect().bottom + i
                  return n <= e.getWindowHeight(o) && s >= 0
                }),
                (e.getNodeHeight = function (t, i) {
                  return t
                    ? i && 'clientHeight' in i
                      ? i.clientHeight
                      : e.getWindowHeight(t)
                    : 0
                }),
                (e.canUseDOM = function () {
                  return !(
                    'undefined' == typeof window ||
                    !window.document ||
                    !window.document.createElement
                  )
                })
            },
            function (t, e, i) {
              'use strict'
              var o =
                (this && this.__importDefault) ||
                function (t) {
                  return t && t.__esModule ? t : { default: t }
                }
              Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.Background = e.Parallax = void 0)
              var n = o(i(4))
              e.Parallax = n.default
              var s = o(i(7))
              e.Background = s.default
            },
            function (t, e, i) {
              'use strict'
              function o(t) {
                return (o =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t
                      }
                    : function (t) {
                        return t &&
                          'function' == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t
                      })(t)
              }
              function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var o = e[i]
                  ;(o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
              }
              function s(t, e) {
                return (s =
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t
                  })(t, e)
              }
              function r(t, e) {
                return !e || ('object' !== o(e) && 'function' != typeof e)
                  ? (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        )
                      return t
                    })(t)
                  : e
              }
              function a(t) {
                return (a = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
              }
              var c =
                (this && this.__importDefault) ||
                function (t) {
                  return t && t.__esModule ? t : { default: t }
                }
              Object.defineProperty(e, '__esModule', { value: !0 })
              var l = c(i(0)),
                d = i(1),
                u = i(5),
                h = i(2),
                p = c(i(6)),
                v = {
                  position: 'absolute',
                  left: '50%',
                  WebkitTransform: 'translate3d(-50%, 0, 0)',
                  transform: 'translate3d(-50%, 0, 0)',
                  WebkitTransformStyle: 'preserve-3d',
                  WebkitBackfaceVisibility: 'hidden',
                  MozBackfaceVisibility: 'hidden',
                  MsBackfaceVisibility: 'hidden',
                },
                f = (function (t) {
                  !(function (t, e) {
                    if ('function' != typeof e && null !== e)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      )
                    ;(t.prototype = Object.create(e && e.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      e && s(t, e)
                  })(i, t)
                  var e = (function (t) {
                    var e = (function () {
                      if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1
                      if (Reflect.construct.sham) return !1
                      if ('function' == typeof Proxy) return !0
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          !0
                        )
                      } catch (t) {
                        return !1
                      }
                    })()
                    return function () {
                      var i,
                        o = a(t)
                      if (e) {
                        var n = a(this).constructor
                        i = Reflect.construct(o, arguments, n)
                      } else i = o.apply(this, arguments)
                      return r(this, i)
                    }
                  })(i)
                  function i(t) {
                    var o
                    return (
                      (function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            'Cannot call a class as a function'
                          )
                      })(this, i),
                      ((o = e.call(this, t)).onWindowResize = function () {
                        ;(o.parentHeight = h.getNodeHeight(
                          o.canUseDOM,
                          o.parent
                        )),
                          o.updatePosition()
                      }),
                      (o.onWindowLoad = function () {
                        o.updatePosition()
                      }),
                      (o.onScroll = function () {
                        if (o.canUseDOM) {
                          var t = Date.now()
                          t - o.timestamp >= 10 &&
                            h.isScrolledIntoView(o.node, 100, o.canUseDOM) &&
                            (window.requestAnimationFrame(o.updatePosition),
                            (o.timestamp = t))
                        }
                      }),
                      (o.onContentMount = function (t) {
                        o.content = t
                      }),
                      (o.updatePosition = function () {
                        if (o.content) {
                          var t = !1
                          ;(o.contentHeight =
                            o.content.getBoundingClientRect().height),
                            (o.contentWidth =
                              o.node.getBoundingClientRect().width),
                            o.img &&
                              o.img.naturalWidth / o.img.naturalHeight <
                                o.contentWidth / o.getImageHeight() &&
                              (t = !0)
                          var e = u.getRelativePosition(o.node, o.canUseDOM),
                            i = !!o.img,
                            n =
                              o.bg &&
                              o.state.splitChildren.bgChildren.length > 0
                          i && o.setImagePosition(e, t),
                            n && o.setBackgroundPosition(e),
                            i || n || o.setState({ percentage: e })
                        }
                      }),
                      (o.state = {
                        bgImage: t.bgImage,
                        bgImageSrcSet: t.bgImageSrcSet,
                        bgImageSizes: t.bgImageSizes,
                        imgStyle: v,
                        bgStyle: Object.assign(Object.assign({}, v), t.bgStyle),
                        percentage: 0,
                        splitChildren: u.getSplitChildren(t),
                      }),
                      (o.canUseDOM = h.canUseDOM()),
                      (o.node = null),
                      (o.content = null),
                      (o.bgImageLoaded = !1),
                      (o.bgImageRef = void 0),
                      (o.parent = t.parent),
                      (o.parentHeight = h.getNodeHeight(o.canUseDOM, o.parent)),
                      (o.timestamp = Date.now()),
                      (o.isDynamicBlur = u.getHasDynamicBlur(t.blur)),
                      o
                    )
                  }
                  return (
                    (function (t, e, i) {
                      e && n(t.prototype, e), i && n(t, i)
                    })(
                      i,
                      [
                        {
                          key: 'componentDidMount',
                          value: function () {
                            var t = this.props.parent,
                              e = this.state,
                              i = e.bgImage,
                              o = e.bgImageSrcSet,
                              n = e.bgImageSizes
                            ;(this.parent = t || document),
                              this.addListeners(),
                              i
                                ? this.loadImage(i, o, n)
                                : this.updatePosition()
                          },
                        },
                        {
                          key: 'componentDidUpdate',
                          value: function (t) {
                            var e = this.props,
                              i = e.parent,
                              o = e.bgImage,
                              n = e.bgImageSrcSet,
                              s = e.bgImageSizes,
                              r = this.state.bgImage
                            t.parent !== i &&
                              (this.removeListeners(this.parent),
                              (this.parent = i),
                              i && this.addListeners()),
                              (this.parentHeight = h.getNodeHeight(
                                this.canUseDOM,
                                this.parent
                              )),
                              r !== o && this.loadImage(o, n, s)
                          },
                        },
                        {
                          key: 'componentWillUnmount',
                          value: function () {
                            this.removeListeners(this.parent),
                              this.releaseImage()
                          },
                        },
                        {
                          key: 'setBackgroundPosition',
                          value: function (t) {
                            var e = this.props,
                              i = e.disabled,
                              o = e.strength,
                              n = Object.assign({}, this.state.bgStyle)
                            if (!i) {
                              var s = 'translate3d(-50%, '.concat(
                                (o < 0 ? o : 0) - o * t,
                                'px, 0)'
                              )
                              ;(n.WebkitTransform = s), (n.transform = s)
                            }
                            this.setState({ bgStyle: n, percentage: t })
                          },
                        },
                        {
                          key: 'setImagePosition',
                          value: function (t) {
                            var e =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1],
                              i = this.props,
                              o = i.disabled,
                              n = i.strength,
                              s = i.blur,
                              r = e
                                ? 'auto'
                                : ''.concat(this.getImageHeight(), 'px'),
                              a = e
                                ? ''.concat(this.contentWidth, 'px')
                                : 'auto',
                              c = Object.assign(
                                Object.assign({}, this.state.imgStyle),
                                { height: r, width: a }
                              )
                            if (!o) {
                              var l = n < 0,
                                d = (l ? n : 0) - n * t,
                                h = 'translate3d(-50%, '.concat(d, 'px, 0)'),
                                p = 'none'
                              s &&
                                (p = 'blur('.concat(
                                  u.getBlurValue(this.isDynamicBlur, s, t),
                                  'px)'
                                )),
                                (c.WebkitTransform = h),
                                (c.transform = h),
                                (c.WebkitFilter = p),
                                (c.filter = p)
                            }
                            this.setState({ imgStyle: c, percentage: t })
                          },
                        },
                        {
                          key: 'getImageHeight',
                          value: function () {
                            var t = this.props.strength,
                              e = (t < 0 ? 2.5 : 1) * Math.abs(t)
                            return Math.floor(this.contentHeight + e)
                          },
                        },
                        {
                          key: 'loadImage',
                          value: function (t, e, i) {
                            var o = this
                            this.releaseImage(),
                              (this.bgImageRef = new Image()),
                              (this.bgImageRef.onload = function (n) {
                                o.setState(
                                  {
                                    bgImage: t,
                                    bgImageSrcSet: e,
                                    bgImageSizes: i,
                                  },
                                  function () {
                                    return o.updatePosition()
                                  }
                                ),
                                  o.props.onLoad && o.props.onLoad(n)
                              }),
                              (this.bgImageRef.onerror =
                                this.bgImageRef.onload),
                              (this.bgImageRef.src = t),
                              (this.bgImageRef.srcset = e || ''),
                              (this.bgImageRef.sizes = i || '')
                          },
                        },
                        {
                          key: 'releaseImage',
                          value: function () {
                            this.bgImageRef &&
                              ((this.bgImageRef.onload = null),
                              (this.bgImageRef.onerror = null),
                              delete this.bgImageRef)
                          },
                        },
                        {
                          key: 'addListeners',
                          value: function () {
                            this.canUseDOM &&
                              this.parent &&
                              (this.parent.addEventListener(
                                'scroll',
                                this.onScroll,
                                !1
                              ),
                              window.addEventListener(
                                'resize',
                                this.onWindowResize,
                                !1
                              ),
                              window.addEventListener(
                                'load',
                                this.onWindowLoad,
                                !1
                              ))
                          },
                        },
                        {
                          key: 'removeListeners',
                          value: function (t) {
                            this.canUseDOM &&
                              (t &&
                                t.removeEventListener(
                                  'scroll',
                                  this.onScroll,
                                  !1
                                ),
                              window.removeEventListener(
                                'resize',
                                this.onWindowResize,
                                !1
                              ),
                              window.removeEventListener(
                                'load',
                                this.onWindowLoad,
                                !1
                              ))
                          },
                        },
                        {
                          key: 'render',
                          value: function () {
                            var t = this,
                              e = this.props,
                              i = e.className,
                              o = e.style,
                              n = e.bgClassName,
                              s = e.contentClassName,
                              r = e.bgImageAlt,
                              a = e.renderLayer,
                              c = e.bgImageStyle,
                              d = e.lazy,
                              u = this.state,
                              h = u.bgImage,
                              v = u.bgImageSrcSet,
                              f = u.bgImageSizes,
                              y = u.percentage,
                              g = u.imgStyle,
                              b = u.bgStyle,
                              m = u.splitChildren
                            return l.default.createElement(
                              'div',
                              {
                                className: 'react-parallax '.concat(i),
                                style: Object.assign(
                                  { position: 'relative', overflow: 'hidden' },
                                  o
                                ),
                                ref: function (e) {
                                  t.node = e
                                },
                              },
                              h
                                ? l.default.createElement('img', {
                                    className: n,
                                    src: h,
                                    srcSet: v,
                                    sizes: f,
                                    ref: function (e) {
                                      t.img = e
                                    },
                                    alt: r,
                                    style: Object.assign(
                                      Object.assign({}, g),
                                      c
                                    ),
                                    loading: d ? 'lazy' : 'eager',
                                  })
                                : null,
                              a ? a(-(y - 1)) : null,
                              m.bgChildren.length > 0
                                ? l.default.createElement(
                                    'div',
                                    {
                                      className:
                                        'react-parallax-background-children',
                                      ref: function (e) {
                                        t.bg = e
                                      },
                                      style: b,
                                    },
                                    m.bgChildren
                                  )
                                : null,
                              l.default.createElement(
                                p.default,
                                { onMount: this.onContentMount, className: s },
                                m.children
                              )
                            )
                          },
                        },
                      ],
                      [
                        {
                          key: 'getDerivedStateFromProps',
                          value: function (t) {
                            return { splitChildren: u.getSplitChildren(t) }
                          },
                        },
                      ]
                    ),
                    i
                  )
                })(d.Parallax)
              ;(f.defaultProps = {
                bgClassName: 'react-parallax-bgimage',
                bgImageAlt: '',
                className: '',
                contentClassName: '',
                disabled: !1,
                strength: 100,
              }),
                (e.default = f)
            },
            function (t, e, i) {
              'use strict'
              function o(t) {
                return (o =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t
                      }
                    : function (t) {
                        return t &&
                          'function' == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t
                      })(t)
              }
              Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.setBlur =
                  e.getBlurValue =
                  e.getHasDynamicBlur =
                  e.getSplitChildren =
                  e.getRelativePosition =
                  e.getPercentage =
                    void 0)
              var n = i(0),
                s = i(2)
              ;(e.getPercentage = function (t, e, i) {
                return (i - t) / (e - t) || 0
              }),
                (e.getRelativePosition = function (t, i) {
                  if (!i) return 0
                  var o = t.getBoundingClientRect(),
                    n = o.top,
                    r = o.height,
                    a = s.getNodeHeight(i),
                    c = r > a ? r : a,
                    l = Math.round(n > c ? c : n)
                  return e.getPercentage(0, c, l)
                }),
                (e.getSplitChildren = function (t) {
                  var e = [],
                    i = n.Children.toArray(t.children)
                  return (
                    i.forEach(function (t, o) {
                      var n = t
                      n.type &&
                        n.type.isParallaxBackground &&
                        (e = e.concat(i.splice(o, 1)))
                    }),
                    { bgChildren: e, children: i }
                  )
                }),
                (e.getHasDynamicBlur = function (t) {
                  return (
                    'object' === o(t) && void 0 !== t.min && void 0 !== t.max
                  )
                }),
                (e.getBlurValue = function (t, e, i) {
                  return t ? e.min + (1 - i) * e.max : e
                }),
                (e.setBlur = function (t, e) {
                  ;(t.style.webkitFilter = 'blur('.concat(e, 'px)')),
                    (t.style.filter = 'blur('.concat(e, 'px)'))
                })
            },
            function (t, e, i) {
              'use strict'
              var o =
                (this && this.__importDefault) ||
                function (t) {
                  return t && t.__esModule ? t : { default: t }
                }
              Object.defineProperty(e, '__esModule', { value: !0 })
              var n = o(i(0))
              e.default = function (t) {
                var e = t.children,
                  i = t.onMount,
                  o = t.className
                return n.default.createElement(
                  'div',
                  {
                    ref: function (t) {
                      return i(t)
                    },
                    className: o || 'react-parallax-content',
                    style: { position: 'relative' },
                  },
                  e
                )
              }
            },
            function (t, e, i) {
              'use strict'
              function o(t) {
                return (o =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t
                      }
                    : function (t) {
                        return t &&
                          'function' == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t
                      })(t)
              }
              function n(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              }
              function s(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var o = e[i]
                  ;(o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
              }
              function r(t, e) {
                return (r =
                  Object.setPrototypeOf ||
                  function (t, e) {
                    return (t.__proto__ = e), t
                  })(t, e)
              }
              function a(t, e) {
                return !e || ('object' !== o(e) && 'function' != typeof e)
                  ? (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        )
                      return t
                    })(t)
                  : e
              }
              function c(t) {
                return (c = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
              }
              var l =
                (this && this.__importDefault) ||
                function (t) {
                  return t && t.__esModule ? t : { default: t }
                }
              Object.defineProperty(e, '__esModule', { value: !0 })
              var d = l(i(0)),
                u = (function (t) {
                  !(function (t, e) {
                    if ('function' != typeof e && null !== e)
                      throw new TypeError(
                        'Super expression must either be null or a function'
                      )
                    ;(t.prototype = Object.create(e && e.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      e && r(t, e)
                  })(i, t)
                  var e = (function (t) {
                    var e = (function () {
                      if ('undefined' == typeof Reflect || !Reflect.construct)
                        return !1
                      if (Reflect.construct.sham) return !1
                      if ('function' == typeof Proxy) return !0
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          !0
                        )
                      } catch (t) {
                        return !1
                      }
                    })()
                    return function () {
                      var i,
                        o = c(t)
                      if (e) {
                        var n = c(this).constructor
                        i = Reflect.construct(o, arguments, n)
                      } else i = o.apply(this, arguments)
                      return a(this, i)
                    }
                  })(i)
                  function i() {
                    return n(this, i), e.apply(this, arguments)
                  }
                  return (
                    (function (t, e, i) {
                      e && s(t.prototype, e), i && s(t, i)
                    })(i, [
                      {
                        key: 'render',
                        value: function () {
                          var t = this.props,
                            e = t.className,
                            i = t.children
                          return d.default.createElement(
                            'div',
                            {
                              className: 'react-parallax-background '.concat(e),
                            },
                            i
                          )
                        },
                      },
                    ]),
                    i
                  )
                })(i(1).Background)
              ;(u.defaultProps = { className: '' }),
                (u.isParallaxBackground = !0),
                (e.default = u)
            },
          ])
        }),
        (t.exports = o(i(67294)))
    },
    56438: function (t, e, i) {
      ;(() => {
        var t = {
            757: (t, e, i) => {
              t.exports = i(666)
            },
            666: (t) => {
              var e = (function (t) {
                'use strict'
                var e,
                  i = Object.prototype,
                  o = i.hasOwnProperty,
                  n = 'function' == typeof Symbol ? Symbol : {},
                  s = n.iterator || '@@iterator',
                  r = n.asyncIterator || '@@asyncIterator',
                  a = n.toStringTag || '@@toStringTag'
                function c(t, e, i) {
                  return (
                    Object.defineProperty(t, e, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    }),
                    t[e]
                  )
                }
                try {
                  c({}, '')
                } catch (t) {
                  c = function (t, e, i) {
                    return (t[e] = i)
                  }
                }
                function l(t, e, i, o) {
                  var n = e && e.prototype instanceof y ? e : y,
                    s = Object.create(n.prototype),
                    r = new A(o || [])
                  return (
                    (s._invoke = (function (t, e, i) {
                      var o = u
                      return function (n, s) {
                        if (o === p)
                          throw new Error('Generator is already running')
                        if (o === v) {
                          if ('throw' === n) throw s
                          return V()
                        }
                        for (i.method = n, i.arg = s; ; ) {
                          var r = i.delegate
                          if (r) {
                            var a = O(r, i)
                            if (a) {
                              if (a === f) continue
                              return a
                            }
                          }
                          if ('next' === i.method) i.sent = i._sent = i.arg
                          else if ('throw' === i.method) {
                            if (o === u) throw ((o = v), i.arg)
                            i.dispatchException(i.arg)
                          } else
                            'return' === i.method && i.abrupt('return', i.arg)
                          o = p
                          var c = d(t, e, i)
                          if ('normal' === c.type) {
                            if (((o = i.done ? v : h), c.arg === f)) continue
                            return { value: c.arg, done: i.done }
                          }
                          'throw' === c.type &&
                            ((o = v), (i.method = 'throw'), (i.arg = c.arg))
                        }
                      }
                    })(t, i, r)),
                    s
                  )
                }
                function d(t, e, i) {
                  try {
                    return { type: 'normal', arg: t.call(e, i) }
                  } catch (t) {
                    return { type: 'throw', arg: t }
                  }
                }
                t.wrap = l
                var u = 'suspendedStart',
                  h = 'suspendedYield',
                  p = 'executing',
                  v = 'completed',
                  f = {}
                function y() {}
                function g() {}
                function b() {}
                var m = {}
                m[s] = function () {
                  return this
                }
                var w = Object.getPrototypeOf,
                  _ = w && w(w(R([])))
                _ && _ !== i && o.call(_, s) && (m = _)
                var S = (b.prototype = y.prototype = Object.create(m))
                function P(t) {
                  ;['next', 'throw', 'return'].forEach(function (e) {
                    c(t, e, function (t) {
                      return this._invoke(e, t)
                    })
                  })
                }
                function x(t, e) {
                  function i(n, s, r, a) {
                    var c = d(t[n], t, s)
                    if ('throw' !== c.type) {
                      var l = c.arg,
                        u = l.value
                      return u && 'object' == typeof u && o.call(u, '__await')
                        ? e.resolve(u.__await).then(
                            function (t) {
                              i('next', t, r, a)
                            },
                            function (t) {
                              i('throw', t, r, a)
                            }
                          )
                        : e.resolve(u).then(
                            function (t) {
                              ;(l.value = t), r(l)
                            },
                            function (t) {
                              return i('throw', t, r, a)
                            }
                          )
                    }
                    a(c.arg)
                  }
                  var n
                  this._invoke = function (t, o) {
                    function s() {
                      return new e(function (e, n) {
                        i(t, o, e, n)
                      })
                    }
                    return (n = n ? n.then(s, s) : s())
                  }
                }
                function O(t, i) {
                  var o = t.iterator[i.method]
                  if (o === e) {
                    if (((i.delegate = null), 'throw' === i.method)) {
                      if (
                        t.iterator.return &&
                        ((i.method = 'return'),
                        (i.arg = e),
                        O(t, i),
                        'throw' === i.method)
                      )
                        return f
                      ;(i.method = 'throw'),
                        (i.arg = new TypeError(
                          "The iterator does not provide a 'throw' method"
                        ))
                    }
                    return f
                  }
                  var n = d(o, t.iterator, i.arg)
                  if ('throw' === n.type)
                    return (
                      (i.method = 'throw'),
                      (i.arg = n.arg),
                      (i.delegate = null),
                      f
                    )
                  var s = n.arg
                  return s
                    ? s.done
                      ? ((i[t.resultName] = s.value),
                        (i.next = t.nextLoc),
                        'return' !== i.method &&
                          ((i.method = 'next'), (i.arg = e)),
                        (i.delegate = null),
                        f)
                      : s
                    : ((i.method = 'throw'),
                      (i.arg = new TypeError(
                        'iterator result is not an object'
                      )),
                      (i.delegate = null),
                      f)
                }
                function M(t) {
                  var e = { tryLoc: t[0] }
                  1 in t && (e.catchLoc = t[1]),
                    2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                    this.tryEntries.push(e)
                }
                function C(t) {
                  var e = t.completion || {}
                  ;(e.type = 'normal'), delete e.arg, (t.completion = e)
                }
                function A(t) {
                  ;(this.tryEntries = [{ tryLoc: 'root' }]),
                    t.forEach(M, this),
                    this.reset(!0)
                }
                function R(t) {
                  if (t) {
                    var i = t[s]
                    if (i) return i.call(t)
                    if ('function' == typeof t.next) return t
                    if (!isNaN(t.length)) {
                      var n = -1,
                        r = function i() {
                          for (; ++n < t.length; )
                            if (o.call(t, n))
                              return (i.value = t[n]), (i.done = !1), i
                          return (i.value = e), (i.done = !0), i
                        }
                      return (r.next = r)
                    }
                  }
                  return { next: V }
                }
                function V() {
                  return { value: e, done: !0 }
                }
                return (
                  (g.prototype = S.constructor = b),
                  (b.constructor = g),
                  (g.displayName = c(b, a, 'GeneratorFunction')),
                  (t.isGeneratorFunction = function (t) {
                    var e = 'function' == typeof t && t.constructor
                    return (
                      !!e &&
                      (e === g ||
                        'GeneratorFunction' === (e.displayName || e.name))
                    )
                  }),
                  (t.mark = function (t) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, b)
                        : ((t.__proto__ = b), c(t, a, 'GeneratorFunction')),
                      (t.prototype = Object.create(S)),
                      t
                    )
                  }),
                  (t.awrap = function (t) {
                    return { __await: t }
                  }),
                  P(x.prototype),
                  (x.prototype[r] = function () {
                    return this
                  }),
                  (t.AsyncIterator = x),
                  (t.async = function (e, i, o, n, s) {
                    void 0 === s && (s = Promise)
                    var r = new x(l(e, i, o, n), s)
                    return t.isGeneratorFunction(i)
                      ? r
                      : r.next().then(function (t) {
                          return t.done ? t.value : r.next()
                        })
                  }),
                  P(S),
                  c(S, a, 'Generator'),
                  (S[s] = function () {
                    return this
                  }),
                  (S.toString = function () {
                    return '[object Generator]'
                  }),
                  (t.keys = function (t) {
                    var e = []
                    for (var i in t) e.push(i)
                    return (
                      e.reverse(),
                      function i() {
                        for (; e.length; ) {
                          var o = e.pop()
                          if (o in t) return (i.value = o), (i.done = !1), i
                        }
                        return (i.done = !0), i
                      }
                    )
                  }),
                  (t.values = R),
                  (A.prototype = {
                    constructor: A,
                    reset: function (t) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = e),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = 'next'),
                        (this.arg = e),
                        this.tryEntries.forEach(C),
                        !t)
                      )
                        for (var i in this)
                          't' === i.charAt(0) &&
                            o.call(this, i) &&
                            !isNaN(+i.slice(1)) &&
                            (this[i] = e)
                    },
                    stop: function () {
                      this.done = !0
                      var t = this.tryEntries[0].completion
                      if ('throw' === t.type) throw t.arg
                      return this.rval
                    },
                    dispatchException: function (t) {
                      if (this.done) throw t
                      var i = this
                      function n(o, n) {
                        return (
                          (a.type = 'throw'),
                          (a.arg = t),
                          (i.next = o),
                          n && ((i.method = 'next'), (i.arg = e)),
                          !!n
                        )
                      }
                      for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                        var r = this.tryEntries[s],
                          a = r.completion
                        if ('root' === r.tryLoc) return n('end')
                        if (r.tryLoc <= this.prev) {
                          var c = o.call(r, 'catchLoc'),
                            l = o.call(r, 'finallyLoc')
                          if (c && l) {
                            if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                            if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                          } else if (c) {
                            if (this.prev < r.catchLoc) return n(r.catchLoc, !0)
                          } else {
                            if (!l)
                              throw new Error(
                                'try statement without catch or finally'
                              )
                            if (this.prev < r.finallyLoc) return n(r.finallyLoc)
                          }
                        }
                      }
                    },
                    abrupt: function (t, e) {
                      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var n = this.tryEntries[i]
                        if (
                          n.tryLoc <= this.prev &&
                          o.call(n, 'finallyLoc') &&
                          this.prev < n.finallyLoc
                        ) {
                          var s = n
                          break
                        }
                      }
                      s &&
                        ('break' === t || 'continue' === t) &&
                        s.tryLoc <= e &&
                        e <= s.finallyLoc &&
                        (s = null)
                      var r = s ? s.completion : {}
                      return (
                        (r.type = t),
                        (r.arg = e),
                        s
                          ? ((this.method = 'next'),
                            (this.next = s.finallyLoc),
                            f)
                          : this.complete(r)
                      )
                    },
                    complete: function (t, e) {
                      if ('throw' === t.type) throw t.arg
                      return (
                        'break' === t.type || 'continue' === t.type
                          ? (this.next = t.arg)
                          : 'return' === t.type
                          ? ((this.rval = this.arg = t.arg),
                            (this.method = 'return'),
                            (this.next = 'end'))
                          : 'normal' === t.type && e && (this.next = e),
                        f
                      )
                    },
                    finish: function (t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var i = this.tryEntries[e]
                        if (i.finallyLoc === t)
                          return (
                            this.complete(i.completion, i.afterLoc), C(i), f
                          )
                      }
                    },
                    catch: function (t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var i = this.tryEntries[e]
                        if (i.tryLoc === t) {
                          var o = i.completion
                          if ('throw' === o.type) {
                            var n = o.arg
                            C(i)
                          }
                          return n
                        }
                      }
                      throw new Error('illegal catch attempt')
                    },
                    delegateYield: function (t, i, o) {
                      return (
                        (this.delegate = {
                          iterator: R(t),
                          resultName: i,
                          nextLoc: o,
                        }),
                        'next' === this.method && (this.arg = e),
                        f
                      )
                    },
                  }),
                  t
                )
              })(t.exports)
              try {
                regeneratorRuntime = e
              } catch (t) {
                Function('r', 'regeneratorRuntime = r')(e)
              }
            },
          },
          o = {}
        function n(e) {
          var i = o[e]
          if (void 0 !== i) return i.exports
          var s = (o[e] = { exports: {} })
          return t[e](s, s.exports, n), s.exports
        }
        ;(n.n = (t) => {
          var e = t && t.__esModule ? () => t.default : () => t
          return n.d(e, { a: e }), e
        }),
          (n.d = (t, e) => {
            for (var i in e)
              n.o(e, i) &&
                !n.o(t, i) &&
                Object.defineProperty(t, i, { enumerable: !0, get: e[i] })
          }),
          (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
          (n.r = (t) => {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(t, '__esModule', { value: !0 })
          })
        var s = {}
        ;(() => {
          'use strict'
          function e(t) {
            return (e = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
          }
          function o(t, i) {
            for (
              ;
              !Object.prototype.hasOwnProperty.call(t, i) &&
              null !== (t = e(t));

            );
            return t
          }
          function r() {
            return (r =
              'undefined' != typeof Reflect && Reflect.get
                ? Reflect.get
                : function (t, e, i) {
                    var n = o(t, e)
                    if (n) {
                      var s = Object.getOwnPropertyDescriptor(n, e)
                      return s.get
                        ? s.get.call(arguments.length < 3 ? t : i)
                        : s.value
                    }
                  }).apply(this, arguments)
          }
          function a(t, e) {
            return (a =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t
              })(t, e)
          }
          function c(t) {
            return (c =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t
                  })(t)
          }
          function l(t, e) {
            if (e && ('object' === c(e) || 'function' == typeof e)) return e
            if (void 0 !== e)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              )
            return (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return t
            })(t)
          }
          n.r(s), n.d(s, { Particles: () => b, default: () => m })
          var d = n(757),
            u = n.n(d)
          const h = i(67294)
          var p = n.n(h)
          const v = i(11786),
            f = i(38252)
          var y = n.n(f),
            g = function (t, e, i, o) {
              return new (i || (i = Promise))(function (n, s) {
                function r(t) {
                  try {
                    c(o.next(t))
                  } catch (t) {
                    s(t)
                  }
                }
                function a(t) {
                  try {
                    c(o.throw(t))
                  } catch (t) {
                    s(t)
                  }
                }
                function c(t) {
                  var e
                  t.done
                    ? n(t.value)
                    : ((e = t.value),
                      e instanceof i
                        ? e
                        : new i(function (t) {
                            t(e)
                          })).then(r, a)
                }
                c((o = o.apply(t, e || [])).next())
              })
            },
            b = (function (i) {
              !(function (t, e) {
                if ('function' != typeof e && null !== e)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  )
                Object.defineProperty(t, 'prototype', {
                  value: Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                  }),
                  writable: !1,
                }),
                  e && a(t, e)
              })(h, i)
              var o,
                n,
                s,
                c,
                d =
                  ((s = h),
                  (c = (function () {
                    if ('undefined' == typeof Reflect || !Reflect.construct)
                      return !1
                    if (Reflect.construct.sham) return !1
                    if ('function' == typeof Proxy) return !0
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      )
                    } catch (t) {
                      return !1
                    }
                  })()),
                  function () {
                    var t,
                      i = e(s)
                    if (c) {
                      var o = e(this).constructor
                      t = Reflect.construct(i, arguments, o)
                    } else t = i.apply(this, arguments)
                    return l(this, t)
                  })
              function h(t) {
                var e
                return (
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError('Cannot call a class as a function')
                  })(this, h),
                  ((e = d.call(this, t)).state = { library: void 0 }),
                  e
                )
              }
              return (
                (o = h),
                (n = [
                  {
                    key: 'destroy',
                    value: function () {
                      this.state.library &&
                        (this.state.library.destroy(),
                        this.setState({ library: void 0 }))
                    },
                  },
                  {
                    key: 'shouldComponentUpdate',
                    value: function (t) {
                      return !y()(t, this.props)
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function () {
                      this.refresh()
                    },
                  },
                  {
                    key: 'forceUpdate',
                    value: function () {
                      var t = this
                      this.refresh().then(function () {
                        r(e(h.prototype), 'forceUpdate', t).call(t)
                      })
                    },
                  },
                  {
                    key: 'componentDidMount',
                    value: function () {
                      g(
                        this,
                        void 0,
                        void 0,
                        u().mark(function t() {
                          return u().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (!this.props.init) {
                                      t.next = 3
                                      break
                                    }
                                    return (
                                      (t.next = 3),
                                      this.props.init(v.tsParticles)
                                    )
                                  case 3:
                                    return (t.next = 5), this.loadParticles()
                                  case 5:
                                  case 'end':
                                    return t.stop()
                                }
                            },
                            t,
                            this
                          )
                        })
                      )
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.destroy()
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var t = this.props,
                        e = t.width,
                        i = t.height,
                        o = t.className,
                        n = t.canvasClassName,
                        s = t.id
                      return p().createElement(
                        'div',
                        { className: o, id: s },
                        p().createElement('canvas', {
                          className: n,
                          style: Object.assign(
                            Object.assign({}, this.props.style),
                            { width: e, height: i }
                          ),
                        })
                      )
                    },
                  },
                  {
                    key: 'refresh',
                    value: function () {
                      return g(
                        this,
                        void 0,
                        void 0,
                        u().mark(function t() {
                          return u().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      this.destroy(),
                                      (t.next = 3),
                                      this.loadParticles()
                                    )
                                  case 3:
                                  case 'end':
                                    return t.stop()
                                }
                            },
                            t,
                            this
                          )
                        })
                      )
                    },
                  },
                  {
                    key: 'loadParticles',
                    value: function () {
                      var t
                      return g(
                        this,
                        void 0,
                        void 0,
                        u().mark(function e() {
                          var i,
                            o,
                            n = this
                          return u().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((i = function (t) {
                                        return g(
                                          n,
                                          void 0,
                                          void 0,
                                          u().mark(function e() {
                                            return u().wrap(
                                              function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      if (
                                                        (this.props.container &&
                                                          (this.props.container.current =
                                                            t),
                                                        this.setState({
                                                          library: t,
                                                        }),
                                                        !this.props.loaded)
                                                      ) {
                                                        e.next = 5
                                                        break
                                                      }
                                                      return (
                                                        (e.next = 5),
                                                        this.props.loaded(t)
                                                      )
                                                    case 5:
                                                    case 'end':
                                                      return e.stop()
                                                  }
                                              },
                                              e,
                                              this
                                            )
                                          })
                                        )
                                      }),
                                      !this.props.url)
                                    ) {
                                      e.next = 7
                                      break
                                    }
                                    return (
                                      (e.next = 4),
                                      v.tsParticles.loadJSON(
                                        this.props.id,
                                        this.props.url
                                      )
                                    )
                                  case 4:
                                    ;(e.t0 = e.sent), (e.next = 10)
                                    break
                                  case 7:
                                    return (
                                      (e.next = 9),
                                      v.tsParticles.load(
                                        this.props.id,
                                        null !== (t = this.props.params) &&
                                          void 0 !== t
                                          ? t
                                          : this.props.options
                                      )
                                    )
                                  case 9:
                                    e.t0 = e.sent
                                  case 10:
                                    return (o = e.t0), (e.next = 13), i(o)
                                  case 13:
                                  case 'end':
                                    return e.stop()
                                }
                            },
                            e,
                            this
                          )
                        })
                      )
                    },
                  },
                ]) &&
                  (function (t, e) {
                    for (var i = 0; i < e.length; i++) {
                      var o = e[i]
                      ;(o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(t, o.key, o)
                    }
                  })(o.prototype, n),
                Object.defineProperty(o, 'prototype', { writable: !1 }),
                h
              )
            })(h.Component)
          b.defaultProps = {
            width: '100%',
            height: '100%',
            options: {},
            style: {},
            url: void 0,
            id: 'tsparticles',
          }
          const m = b
        })()
        var r = e
        for (var a in s) r[a] = s[a]
        s.__esModule && Object.defineProperty(r, '__esModule', { value: !0 })
      })()
    },
    26868: function (t, e, i) {
      const o = i(56438)
      for (let n in o) o.default[n] = o[n]
      t.exports = o.default
    },
    84956: function (t, e, i) {
      'use strict'
      i.d(e, {
        Z: function () {
          return n
        },
      })
      var o = i(67294)
      function n() {
        var t = (0, o.useRef)(!1),
          e = (0, o.useCallback)(function () {
            return t.current
          }, [])
        return (
          (0, o.useEffect)(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    67950: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Canvas = void 0)
      const o = i(61475),
        n = i(28774),
        s = i(95078),
        r = i(47912)
      e.Canvas = class {
        constructor(t) {
          ;(this.container = t),
            (this.size = { height: 0, width: 0 }),
            (this.context = null),
            (this.generatedCanvas = !1)
        }
        init() {
          this.resize(),
            this.initStyle(),
            this.initCover(),
            this.initTrail(),
            this.initBackground(),
            this.paint()
        }
        loadCanvas(t) {
          var e
          this.generatedCanvas &&
            (null === (e = this.element) || void 0 === e || e.remove()),
            (this.generatedCanvas =
              t.dataset && s.Constants.generatedAttribute in t.dataset
                ? 'true' === t.dataset[s.Constants.generatedAttribute]
                : this.generatedCanvas),
            (this.element = t),
            (this.originalStyle = (0, r.deepExtend)({}, this.element.style)),
            (this.size.height = t.offsetHeight),
            (this.size.width = t.offsetWidth),
            (this.context = this.element.getContext('2d')),
            this.container.retina.init(),
            this.initBackground()
        }
        destroy() {
          var t
          this.generatedCanvas &&
            (null === (t = this.element) || void 0 === t || t.remove()),
            this.draw((t) => {
              ;(0, o.clear)(t, this.size)
            })
        }
        paint() {
          const t = this.container.actualOptions
          this.draw((e) => {
            t.backgroundMask.enable && t.backgroundMask.cover
              ? ((0, o.clear)(e, this.size),
                this.paintBase(this.coverColorStyle))
              : this.paintBase()
          })
        }
        clear() {
          const t = this.container.actualOptions,
            e = t.particles.move.trail
          t.backgroundMask.enable
            ? this.paint()
            : e.enable && e.length > 0 && this.trailFillColor
            ? this.paintBase(
                (0, n.getStyleFromRgb)(this.trailFillColor, 1 / e.length)
              )
            : this.draw((t) => {
                ;(0, o.clear)(t, this.size)
              })
        }
        async windowResize() {
          if (!this.element) return
          this.resize()
          const t = this.container,
            e = t.updateActualOptions()
          t.particles.setDensity()
          for (const [, i] of t.plugins) void 0 !== i.resize && i.resize()
          e && (await t.refresh())
        }
        resize() {
          if (!this.element) return
          const t = this.container,
            e = t.retina.pixelRatio,
            i = t.canvas.size,
            o = this.element.offsetWidth * e,
            n = this.element.offsetHeight * e
          if (
            n === i.height &&
            o === i.width &&
            n === this.element.height &&
            o === this.element.width
          )
            return
          const s = Object.assign({}, i)
          ;(this.element.width = i.width = this.element.offsetWidth * e),
            (this.element.height = i.height = this.element.offsetHeight * e),
            this.container.started &&
              (this.resizeFactor = {
                width: i.width / s.width,
                height: i.height / s.height,
              })
        }
        drawConnectLine(t, e) {
          this.draw((i) => {
            var n
            const s = this.lineStyle(t, e)
            if (!s) return
            const r = t.getPosition(),
              a = e.getPosition()
            ;(0, o.drawConnectLine)(
              i,
              null !== (n = t.retina.linksWidth) && void 0 !== n
                ? n
                : this.container.retina.linksWidth,
              s,
              r,
              a
            )
          })
        }
        drawGrabLine(t, e, i, n) {
          const s = this.container
          this.draw((r) => {
            var a
            const c = t.getPosition()
            ;(0, o.drawGrabLine)(
              r,
              null !== (a = t.retina.linksWidth) && void 0 !== a
                ? a
                : s.retina.linksWidth,
              c,
              n,
              e,
              i
            )
          })
        }
        drawParticle(t, e) {
          var i, s, r, a, c, l
          if (t.spawning || t.destroyed) return
          const d = t.getRadius()
          if (d <= 0) return
          const u = t.getFillColor(),
            h = null !== (i = t.getStrokeColor()) && void 0 !== i ? i : u
          if (!u && !h) return
          let [p, v] = this.getPluginParticleColors(t)
          ;(p && v) || (p || (p = u || void 0), v || (v = h || void 0))
          const f = this.container.actualOptions,
            y = t.options.zIndex,
            g = (1 - t.zIndexFactor) ** y.opacityRate,
            b =
              null !==
                (a =
                  null !== (s = t.bubble.opacity) && void 0 !== s
                    ? s
                    : null === (r = t.opacity) || void 0 === r
                    ? void 0
                    : r.value) && void 0 !== a
                ? a
                : 1,
            m =
              null !==
                (l =
                  null === (c = t.stroke) || void 0 === c
                    ? void 0
                    : c.opacity) && void 0 !== l
                ? l
                : b,
            w = b * g,
            _ = m * g,
            S = { fill: p ? (0, n.getStyleFromHsl)(p, w) : void 0 }
          ;(S.stroke = v ? (0, n.getStyleFromHsl)(v, _) : S.fill),
            this.draw((i) => {
              const n = (1 - t.zIndexFactor) ** y.sizeRate,
                s = this.container
              for (const e of s.particles.updaters)
                if ((e.beforeDraw && e.beforeDraw(t), e.getColorStyles)) {
                  const { fill: o, stroke: n } = e.getColorStyles(t, i, d, w)
                  o && (S.fill = o), n && (S.stroke = n)
                }
              ;(0, o.drawParticle)(
                s,
                i,
                t,
                e,
                S,
                f.backgroundMask.enable,
                f.backgroundMask.composite,
                d * n,
                w,
                t.options.shadow
              )
              for (const e of s.particles.updaters)
                e.afterDraw && e.afterDraw(t)
            })
        }
        drawPlugin(t, e) {
          this.draw((i) => {
            ;(0, o.drawPlugin)(i, t, e)
          })
        }
        drawParticlePlugin(t, e, i) {
          this.draw((n) => {
            ;(0, o.drawParticlePlugin)(n, t, e, i)
          })
        }
        initBackground() {
          const t = this.container.actualOptions.background,
            e = this.element,
            i = null === e || void 0 === e ? void 0 : e.style
          if (i) {
            if (t.color) {
              const e = (0, n.colorToRgb)(t.color)
              i.backgroundColor = e ? (0, n.getStyleFromRgb)(e, t.opacity) : ''
            } else i.backgroundColor = ''
            ;(i.backgroundImage = t.image || ''),
              (i.backgroundPosition = t.position || ''),
              (i.backgroundRepeat = t.repeat || ''),
              (i.backgroundSize = t.size || '')
          }
        }
        draw(t) {
          if (this.context) return t(this.context)
        }
        initCover() {
          const t = this.container.actualOptions.backgroundMask.cover,
            e = t.color,
            i = (0, n.colorToRgb)(e)
          if (i) {
            const e = { r: i.r, g: i.g, b: i.b, a: t.opacity }
            this.coverColorStyle = (0, n.getStyleFromRgb)(e, e.a)
          }
        }
        initTrail() {
          const t = this.container.actualOptions,
            e = t.particles.move.trail,
            i = (0, n.colorToRgb)(e.fillColor)
          if (i) {
            const e = t.particles.move.trail
            this.trailFillColor = { r: i.r, g: i.g, b: i.b, a: 1 / e.length }
          }
        }
        getPluginParticleColors(t) {
          let e, i
          for (const [, o] of this.container.plugins)
            if (
              (!e &&
                o.particleFillColor &&
                (e = (0, n.colorToHsl)(o.particleFillColor(t))),
              !i &&
                o.particleStrokeColor &&
                (i = (0, n.colorToHsl)(o.particleStrokeColor(t))),
              e && i)
            )
              break
          return [e, i]
        }
        initStyle() {
          const t = this.element,
            e = this.container.actualOptions
          if (!t) return
          const i = this.originalStyle
          e.fullScreen.enable
            ? ((this.originalStyle = (0, r.deepExtend)({}, t.style)),
              t.style.setProperty('position', 'fixed', 'important'),
              t.style.setProperty(
                'z-index',
                e.fullScreen.zIndex.toString(10),
                'important'
              ),
              t.style.setProperty('top', '0', 'important'),
              t.style.setProperty('left', '0', 'important'),
              t.style.setProperty('width', '100%', 'important'),
              t.style.setProperty('height', '100%', 'important'))
            : i &&
              ((t.style.position = i.position),
              (t.style.zIndex = i.zIndex),
              (t.style.top = i.top),
              (t.style.left = i.left),
              (t.style.width = i.width),
              (t.style.height = i.height))
          for (const o in e.style) {
            if (!o || !e.style) continue
            const i = e.style[o]
            i && t.style.setProperty(o, i, 'important')
          }
        }
        paintBase(t) {
          this.draw((e) => {
            ;(0, o.paintBase)(e, this.size, t)
          })
        }
        lineStyle(t, e) {
          return this.draw((i) => {
            const n = this.container.actualOptions.interactivity.modes.connect
            return (0, o.gradient)(i, t, e, n.links.opacity)
          })
        }
      }
    },
    66386: function (t, e, i) {
      'use strict'
      var o,
        n =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        s =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Container = void 0)
      const r = i(47912),
        a = i(67950),
        c = i(73535),
        l = i(85301),
        d = i(55783),
        u = i(87017),
        h = i(26413),
        p = i(78779),
        v = i(10931)
      ;(e.Container = class {
        constructor(t, e, i, ...r) {
          ;(this.id = e),
            o.set(this, void 0),
            n(this, o, t, 'f'),
            (this.fpsLimit = 120),
            (this.duration = 0),
            (this.lifeTime = 0),
            (this.firstStart = !0),
            (this.started = !1),
            (this.destroyed = !1),
            (this.paused = !0),
            (this.lastFrameTime = 0),
            (this.zLayers = 100),
            (this.pageHidden = !1),
            (this._sourceOptions = i),
            (this._initialSourceOptions = i),
            (this.retina = new h.Retina(this)),
            (this.canvas = new a.Canvas(this)),
            (this.particles = new u.Particles(s(this, o, 'f'), this)),
            (this.drawer = new l.FrameManager(this)),
            (this.presets = r),
            (this.pathGenerator = {
              generate: () => {
                const t = p.Vector.create(0, 0)
                return (
                  (t.length = Math.random()),
                  (t.angle = Math.random() * Math.PI * 2),
                  t
                )
              },
              init: () => {},
              update: () => {},
            }),
            (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
            (this.plugins = new Map()),
            (this.drawers = new Map()),
            (this.density = 1),
            (this._options = new d.Options(s(this, o, 'f'))),
            (this.actualOptions = new d.Options(s(this, o, 'f'))),
            (this.eventListeners = new c.EventListeners(this)),
            'undefined' !== typeof IntersectionObserver &&
              IntersectionObserver &&
              (this.intersectionObserver = new IntersectionObserver((t) =>
                this.intersectionManager(t)
              ))
        }
        get options() {
          return this._options
        }
        get sourceOptions() {
          return this._sourceOptions
        }
        play(t) {
          const e = this.paused || t
          if (!this.firstStart || this.actualOptions.autoPlay) {
            if ((this.paused && (this.paused = !1), e))
              for (const [, t] of this.plugins) t.play && t.play()
            this.draw(e || !1)
          } else this.firstStart = !1
        }
        pause() {
          if (
            (void 0 !== this.drawAnimationFrame &&
              ((0, r.cancelAnimation)()(this.drawAnimationFrame),
              delete this.drawAnimationFrame),
            !this.paused)
          ) {
            for (const [, t] of this.plugins) t.pause && t.pause()
            this.pageHidden || (this.paused = !0)
          }
        }
        draw(t) {
          let e = t
          this.drawAnimationFrame = (0, r.animate)()(async (t) => {
            e && ((this.lastFrameTime = void 0), (e = !1)),
              await this.drawer.nextFrame(t)
          })
        }
        getAnimationStatus() {
          return !this.paused && !this.pageHidden
        }
        setNoise(t, e, i) {
          this.setPath(t, e, i)
        }
        setPath(t, e, i) {
          var o, n, s
          if (t)
            if ('function' === typeof t)
              (this.pathGenerator.generate = t),
                e && (this.pathGenerator.init = e),
                i && (this.pathGenerator.update = i)
            else {
              const e = this.pathGenerator
              ;(this.pathGenerator = t),
                (o = this.pathGenerator).generate || (o.generate = e.generate),
                (n = this.pathGenerator).init || (n.init = e.init),
                (s = this.pathGenerator).update || (s.update = e.update)
            }
        }
        destroy() {
          this.stop(), this.canvas.destroy()
          for (const [, t] of this.drawers) t.destroy && t.destroy(this)
          for (const t of this.drawers.keys()) this.drawers.delete(t)
          this.destroyed = !0
        }
        exportImg(t) {
          this.exportImage(t)
        }
        exportImage(t, e, i) {
          var o
          return null === (o = this.canvas.element) || void 0 === o
            ? void 0
            : o.toBlob(t, null !== e && void 0 !== e ? e : 'image/png', i)
        }
        exportConfiguration() {
          return JSON.stringify(this.actualOptions, void 0, 2)
        }
        refresh() {
          return this.stop(), this.start()
        }
        reset() {
          return (
            (this._options = new d.Options(s(this, o, 'f'))), this.refresh()
          )
        }
        stop() {
          if (this.started) {
            ;(this.firstStart = !0),
              (this.started = !1),
              this.eventListeners.removeListeners(),
              this.pause(),
              this.particles.clear(),
              this.canvas.clear(),
              this.interactivity.element instanceof HTMLElement &&
                this.intersectionObserver &&
                this.intersectionObserver.unobserve(this.interactivity.element)
            for (const [, t] of this.plugins) t.stop && t.stop()
            for (const t of this.plugins.keys()) this.plugins.delete(t)
            ;(this.particles.linksColors = new Map()),
              delete this.particles.grabLineColor,
              delete this.particles.linksColor,
              (this._sourceOptions = this._options)
          }
        }
        async loadTheme(t) {
          ;(this.currentTheme = t), await this.refresh()
        }
        async start() {
          if (!this.started) {
            await this.init(),
              (this.started = !0),
              this.eventListeners.addListeners(),
              this.interactivity.element instanceof HTMLElement &&
                this.intersectionObserver &&
                this.intersectionObserver.observe(this.interactivity.element)
            for (const [, t] of this.plugins)
              void 0 !== t.startAsync
                ? await t.startAsync()
                : void 0 !== t.start && t.start()
            this.play()
          }
        }
        addClickHandler(t) {
          const e = this.interactivity.element
          if (!e) return
          const i = (e, i, o) => {
            if (this.destroyed) return
            const n = this.retina.pixelRatio,
              s = { x: i.x * n, y: i.y * n },
              r = this.particles.quadTree.queryCircle(s, o * n)
            t(e, r)
          }
          let o = !1,
            n = !1
          e.addEventListener('click', (t) => {
            if (this.destroyed) return
            const e = t,
              o = { x: e.offsetX || e.clientX, y: e.offsetY || e.clientY }
            i(t, o, 1)
          }),
            e.addEventListener('touchstart', () => {
              this.destroyed || ((o = !0), (n = !1))
            }),
            e.addEventListener('touchmove', () => {
              this.destroyed || (n = !0)
            }),
            e.addEventListener('touchend', (t) => {
              var e, s, r
              if (!this.destroyed) {
                if (o && !n) {
                  const o = t
                  let n = o.touches[o.touches.length - 1]
                  if (
                    !n &&
                    ((n = o.changedTouches[o.changedTouches.length - 1]), !n)
                  )
                    return
                  const a =
                      null === (e = this.canvas.element) || void 0 === e
                        ? void 0
                        : e.getBoundingClientRect(),
                    c = {
                      x:
                        n.clientX -
                        (null !==
                          (s = null === a || void 0 === a ? void 0 : a.left) &&
                        void 0 !== s
                          ? s
                          : 0),
                      y:
                        n.clientY -
                        (null !==
                          (r = null === a || void 0 === a ? void 0 : a.top) &&
                        void 0 !== r
                          ? r
                          : 0),
                    }
                  i(t, c, Math.max(n.radiusX, n.radiusY))
                }
                ;(o = !1), (n = !1)
              }
            }),
            e.addEventListener('touchcancel', () => {
              this.destroyed || ((o = !1), (n = !1))
            })
        }
        handleClickMode(t) {
          this.particles.handleClickMode(t)
          for (const [, e] of this.plugins)
            e.handleClickMode && e.handleClickMode(t)
        }
        updateActualOptions() {
          this.actualOptions.responsive = []
          const t = this.actualOptions.setResponsive(
            this.canvas.size.width,
            this.retina.pixelRatio,
            this._options
          )
          return (
            this.actualOptions.setTheme(this.currentTheme),
            this.responsiveMaxWidth != t && ((this.responsiveMaxWidth = t), !0)
          )
        }
        async init() {
          this._options = new d.Options(s(this, o, 'f'))
          for (const n of this.presets)
            this._options.load(s(this, o, 'f').plugins.getPreset(n))
          const t = s(this, o, 'f').plugins.getSupportedShapes()
          for (const n of t) {
            const t = s(this, o, 'f').plugins.getShapeDrawer(n)
            t && this.drawers.set(n, t)
          }
          this._options.load(this._initialSourceOptions),
            this._options.load(this._sourceOptions),
            (this.actualOptions = new d.Options(s(this, o, 'f'))),
            this.actualOptions.load(this._options),
            this.retina.init(),
            this.canvas.init(),
            this.updateActualOptions(),
            this.canvas.initBackground(),
            this.canvas.resize(),
            (this.zLayers = this.actualOptions.zLayers),
            (this.duration = (0, v.getRangeValue)(this.actualOptions.duration)),
            (this.lifeTime = 0),
            (this.fpsLimit =
              this.actualOptions.fpsLimit > 0
                ? this.actualOptions.fpsLimit
                : 120)
          const e = s(this, o, 'f').plugins.getAvailablePlugins(this)
          for (const [o, n] of e) this.plugins.set(o, n)
          for (const [, o] of this.drawers) o.init && (await o.init(this))
          for (const [, o] of this.plugins)
            o.init
              ? o.init(this.actualOptions)
              : void 0 !== o.initAsync &&
                (await o.initAsync(this.actualOptions))
          const i = this.actualOptions.particles.move.path
          i.generator &&
            this.setPath(s(this, o, 'f').plugins.getPathGenerator(i.generator)),
            this.particles.init(),
            this.particles.setDensity()
          for (const [, o] of this.plugins)
            void 0 !== o.particlesSetup && o.particlesSetup()
        }
        intersectionManager(t) {
          if (this.actualOptions.pauseOnOutsideViewport)
            for (const e of t)
              e.target === this.interactivity.element &&
                (e.isIntersecting ? this.play() : this.pause())
        }
      }),
        (o = new WeakMap())
    },
    46496: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    33180: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    27972: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    62203: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    16528: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    94573: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    15103: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    58465: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    17309: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    18971: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    46614: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    57501: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    80767: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    62167: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    28035: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    77787: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    82852: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    39309: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    86527: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    10012: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    91032: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    8919: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    22127: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    31771: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    86134: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    86858: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    18914: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    41106: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    58591: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    78330: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    13745: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    76822: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    53068: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    75689: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    27212: function (t, e, i) {
      'use strict'
      var o,
        n =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        s =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Loader = void 0)
      const r = i(95078),
        a = i(66386),
        c = i(47912)
      ;(e.Loader = class {
        constructor(t) {
          o.set(this, void 0), n(this, o, t, 'f')
        }
        dom() {
          return s(this, o, 'f').domArray
        }
        domItem(t) {
          const e = this.dom(),
            i = e[t]
          if (i && !i.destroyed) return i
          e.splice(t, 1)
        }
        async loadOptions(t) {
          var e, i, n
          const l =
              null !== (e = t.tagId) && void 0 !== e
                ? e
                : `tsparticles${Math.floor(1e4 * Math.random())}`,
            { options: d, index: u } = t
          let h =
            null !== (i = t.element) && void 0 !== i
              ? i
              : document.getElementById(l)
          h ||
            ((h = document.createElement('div')),
            (h.id = l),
            null === (n = document.querySelector('body')) ||
              void 0 === n ||
              n.append(h))
          const p = d instanceof Array ? (0, c.itemFromArray)(d, u) : d,
            v = this.dom(),
            f = v.findIndex((t) => t.id === l)
          if (f >= 0) {
            const t = this.domItem(f)
            t && !t.destroyed && (t.destroy(), v.splice(f, 1))
          }
          let y
          if ('canvas' === h.tagName.toLowerCase())
            (y = h), (y.dataset[r.Constants.generatedAttribute] = 'false')
          else {
            const t = h.getElementsByTagName('canvas')
            t.length
              ? ((y = t[0]),
                (y.dataset[r.Constants.generatedAttribute] = 'false'))
              : ((y = document.createElement('canvas')),
                (y.dataset[r.Constants.generatedAttribute] = 'true'),
                (y.style.width = '100%'),
                (y.style.height = '100%'),
                h.appendChild(y))
          }
          const g = new a.Container(s(this, o, 'f'), l, p)
          return (
            f >= 0 ? v.splice(f, 0, g) : v.push(g),
            g.canvas.loadCanvas(y),
            await g.start(),
            g
          )
        }
        async loadRemoteOptions(t) {
          const { url: e, index: i } = t,
            o = e instanceof Array ? (0, c.itemFromArray)(e, i) : e
          if (!o) return
          const n = await fetch(o)
          if (!n.ok)
            return (
              (s = n.status),
              console.error(`Error tsParticles - fetch status: ${s}`),
              void console.error('Error tsParticles - File config not found')
            )
          var s
          const r = await n.json()
          return this.loadOptions({
            tagId: t.tagId,
            element: t.element,
            index: i,
            options: r,
          })
        }
        load(t, e, i) {
          const o = { index: i }
          return (
            'string' === typeof t ? (o.tagId = t) : (o.options = t),
            'number' === typeof e
              ? (o.index = null !== e && void 0 !== e ? e : o.index)
              : (o.options = null !== e && void 0 !== e ? e : o.options),
            this.loadOptions(o)
          )
        }
        async set(t, e, i, o) {
          const n = { index: o }
          return (
            'string' === typeof t ? (n.tagId = t) : (n.element = t),
            e instanceof HTMLElement ? (n.element = e) : (n.options = e),
            'number' === typeof i
              ? (n.index = i)
              : (n.options = null !== i && void 0 !== i ? i : n.options),
            this.loadOptions(n)
          )
        }
        async loadJSON(t, e, i) {
          let o, n
          return (
            'number' === typeof e || void 0 === e
              ? (o = t)
              : ((n = t), (o = e)),
            this.loadRemoteOptions({ tagId: n, url: o, index: i })
          )
        }
        async setJSON(t, e, i, o) {
          let n, s, r, a
          return (
            t instanceof HTMLElement
              ? ((a = t), (n = e), (r = i))
              : ((s = t), (a = e), (n = i), (r = o)),
            this.loadRemoteOptions({ tagId: s, url: n, index: r, element: a })
          )
        }
        setOnClickHandler(t) {
          const e = this.dom()
          if (!e.length)
            throw new Error(
              'Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()'
            )
          for (const i of e) i.addClickHandler(t)
        }
      }),
        (o = new WeakMap())
    },
    2378: function (t, e, i) {
      'use strict'
      var o,
        n =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        s =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Particle = void 0)
      const r = i(10931),
        a = i(28774),
        c = i(47912),
        l = i(36475),
        d = i(81021),
        u = i(78779),
        h = i(29309),
        p = i(61475),
        v = (t) => {
          ;((0, c.isInArray)(t.outMode, t.checkModes) ||
            (0, c.isInArray)(t.outMode, t.checkModes)) &&
            (t.coord > t.maxCoord - 2 * t.radius
              ? t.setCb(-t.radius)
              : t.coord < 2 * t.radius && t.setCb(t.radius))
        }
      ;(e.Particle = class {
        constructor(t, e, i, h, p, v) {
          var f, y, g, b, m, w, _
          ;(this.id = e),
            (this.container = i),
            (this.group = v),
            o.set(this, void 0),
            n(this, o, t, 'f'),
            (this.fill = !0),
            (this.close = !0),
            (this.lastPathTime = 0),
            (this.destroyed = !1),
            (this.unbreakable = !1),
            (this.splitCount = 0),
            (this.misplaced = !1),
            (this.retina = { maxDistance: {} }),
            (this.ignoresResizeRatio = !0)
          const S = i.retina.pixelRatio,
            P = i.actualOptions,
            x = new l.ParticlesOptions()
          x.load(P.particles)
          const O = x.shape.type,
            M = x.reduceDuplicates
          if (
            ((this.shape =
              O instanceof Array ? (0, c.itemFromArray)(O, this.id, M) : O),
            null === p || void 0 === p ? void 0 : p.shape)
          ) {
            if (p.shape.type) {
              const t = p.shape.type
              this.shape =
                t instanceof Array ? (0, c.itemFromArray)(t, this.id, M) : t
            }
            const t = new d.Shape()
            t.load(p.shape),
              this.shape && (this.shapeData = this.loadShapeData(t, M))
          } else this.shapeData = this.loadShapeData(x.shape, M)
          void 0 !== p && x.load(p),
            void 0 !==
              (null === (f = this.shapeData) || void 0 === f
                ? void 0
                : f.particles) &&
              x.load(
                null === (y = this.shapeData) || void 0 === y
                  ? void 0
                  : y.particles
              ),
            (this.fill =
              null !==
                (b =
                  null === (g = this.shapeData) || void 0 === g
                    ? void 0
                    : g.fill) && void 0 !== b
                ? b
                : this.fill),
            (this.close =
              null !==
                (w =
                  null === (m = this.shapeData) || void 0 === m
                    ? void 0
                    : m.close) && void 0 !== w
                ? w
                : this.close),
            (this.options = x),
            (this.pathDelay =
              1e3 * (0, r.getValue)(this.options.move.path.delay))
          const C = (0, r.getRangeValue)(this.options.zIndex.value)
          i.retina.initParticle(this)
          const A = this.options.size,
            R = A.value
          this.size = {
            enable: A.animation.enable,
            value: (0, r.getValue)(A) * i.retina.pixelRatio,
            max: (0, r.getRangeMax)(R) * S,
            min: (0, r.getRangeMin)(R) * S,
            loops: 0,
            maxLoops: (0, r.getRangeValue)(A.animation.count),
          }
          const V = A.animation
          if (V.enable) {
            switch (((this.size.status = 0), V.startValue)) {
              case 'min':
                ;(this.size.value = this.size.min), (this.size.status = 0)
                break
              case 'random':
                ;(this.size.value = (0, r.randomInRange)(this.size) * S),
                  (this.size.status = Math.random() >= 0.5 ? 0 : 1)
                break
              case 'max':
              default:
                ;(this.size.value = this.size.max), (this.size.status = 1)
            }
            ;(this.size.velocity =
              ((null !== (_ = this.retina.sizeAnimationSpeed) && void 0 !== _
                ? _
                : i.retina.sizeAnimationSpeed) /
                100) *
              i.retina.reduceFactor),
              V.sync || (this.size.velocity *= Math.random())
          }
          ;(this.direction = (0, r.getParticleDirectionAngle)(
            this.options.move.direction
          )),
            (this.bubble = { inRange: !1 }),
            (this.initialVelocity = this.calculateVelocity()),
            (this.velocity = this.initialVelocity.copy()),
            (this.moveDecay = 1 - (0, r.getRangeValue)(this.options.move.decay))
          const E = this.options.move.gravity
          ;(this.gravity = {
            enable: E.enable,
            acceleration: (0, r.getRangeValue)(E.acceleration),
            inverse: E.inverse,
          }),
            (this.position = this.calcPosition(
              i,
              h,
              (0, r.clamp)(C, 0, i.zLayers)
            )),
            (this.initialPosition = this.position.copy()),
            (this.offset = u.Vector.origin)
          const k = i.particles
          ;(k.needsSort = k.needsSort || k.lastZIndex < this.position.z),
            (k.lastZIndex = this.position.z),
            (this.zIndexFactor = this.position.z / i.zLayers),
            (this.sides = 24)
          let T = i.drawers.get(this.shape)
          T ||
            ((T = s(this, o, 'f').plugins.getShapeDrawer(this.shape)),
            T && i.drawers.set(this.shape, T)),
            (null === T || void 0 === T ? void 0 : T.loadShape) &&
              (null === T || void 0 === T || T.loadShape(this))
          const G = null === T || void 0 === T ? void 0 : T.getSidesCount
          G && (this.sides = G(this)),
            (this.life = this.loadLife()),
            (this.spawning = this.life.delay > 0),
            (this.shadowColor = (0, a.colorToRgb)(this.options.shadow.color))
          for (const o of i.particles.updaters) o.init && o.init(this)
          T && T.particleInit && T.particleInit(i, this)
          for (const [, o] of i.plugins)
            o.particleCreated && o.particleCreated(this)
        }
        isVisible() {
          return !this.destroyed && !this.spawning && this.isInsideCanvas()
        }
        isInsideCanvas() {
          const t = this.getRadius(),
            e = this.container.canvas.size
          return (
            this.position.x >= -t &&
            this.position.y >= -t &&
            this.position.y <= e.height + t &&
            this.position.x <= e.width + t
          )
        }
        draw(t) {
          const e = this.container
          for (const [, i] of e.plugins) e.canvas.drawParticlePlugin(i, this, t)
          e.canvas.drawParticle(this, t)
        }
        getPosition() {
          return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z,
          }
        }
        getRadius() {
          var t
          return null !== (t = this.bubble.radius) && void 0 !== t
            ? t
            : this.size.value
        }
        getMass() {
          return (this.getRadius() ** 2 * Math.PI) / 2
        }
        getFillColor() {
          var t, e
          const i =
            null !== (t = this.bubble.color) && void 0 !== t
              ? t
              : (0, a.getHslFromAnimation)(this.color)
          if (i && this.roll && (this.backColor || this.roll.alter)) {
            const t = 'both' === this.options.roll.mode ? 2 : 1,
              o = 'horizontal' === this.options.roll.mode ? Math.PI / 2 : 0
            if (
              Math.floor(
                ((null !== (e = this.roll.angle) && void 0 !== e ? e : 0) + o) /
                  (Math.PI / t)
              ) % 2
            ) {
              if (this.backColor) return this.backColor
              if (this.roll.alter)
                return (0, p.alterHsl)(
                  i,
                  this.roll.alter.type,
                  this.roll.alter.value
                )
            }
          }
          return i
        }
        getStrokeColor() {
          var t, e
          return null !==
            (e =
              null !== (t = this.bubble.color) && void 0 !== t
                ? t
                : (0, a.getHslFromAnimation)(this.strokeColor)) && void 0 !== e
            ? e
            : this.getFillColor()
        }
        destroy(t) {
          if (
            ((this.destroyed = !0),
            (this.bubble.inRange = !1),
            this.unbreakable)
          )
            return
          ;(this.destroyed = !0), (this.bubble.inRange = !1)
          for (const [, e] of this.container.plugins)
            e.particleDestroyed && e.particleDestroyed(this, t)
          if (t) return
          'split' === this.options.destroy.mode && this.split()
        }
        reset() {
          this.opacity && (this.opacity.loops = 0), (this.size.loops = 0)
        }
        split() {
          const t = this.options.destroy.split
          if (t.count >= 0 && this.splitCount++ > t.count) return
          const e = (0, r.getRangeValue)(t.rate.value)
          for (let i = 0; i < e; i++)
            this.container.particles.addSplitParticle(this)
        }
        calcPosition(t, e, i, o = 0) {
          var n, s, a, c
          for (const [, r] of t.plugins) {
            const t =
              void 0 !== r.particlePosition
                ? r.particlePosition(e, this)
                : void 0
            if (void 0 !== t) return h.Vector3d.create(t.x, t.y, i)
          }
          const l = t.canvas.size,
            d = (0, r.calcExactPositionOrRandomFromSize)({
              size: l,
              position: e,
            }),
            u = h.Vector3d.create(d.x, d.y, i),
            p = this.getRadius(),
            f = this.options.move.outModes,
            y = (e) => {
              v({
                outMode: e,
                checkModes: ['bounce', 'bounce-horizontal'],
                coord: u.x,
                maxCoord: t.canvas.size.width,
                setCb: (t) => (u.x += t),
                radius: p,
              })
            },
            g = (e) => {
              v({
                outMode: e,
                checkModes: ['bounce', 'bounce-vertical'],
                coord: u.y,
                maxCoord: t.canvas.size.height,
                setCb: (t) => (u.y += t),
                radius: p,
              })
            }
          return (
            y(null !== (n = f.left) && void 0 !== n ? n : f.default),
            y(null !== (s = f.right) && void 0 !== s ? s : f.default),
            g(null !== (a = f.top) && void 0 !== a ? a : f.default),
            g(null !== (c = f.bottom) && void 0 !== c ? c : f.default),
            this.checkOverlap(u, o) ? this.calcPosition(t, void 0, i, o + 1) : u
          )
        }
        checkOverlap(t, e = 0) {
          const i = this.options.collisions,
            o = this.getRadius()
          if (!i.enable) return !1
          const n = i.overlap
          if (n.enable) return !1
          const s = n.retries
          if (s >= 0 && e > s)
            throw new Error("Particle is overlapping and can't be placed")
          let a = !1
          for (const c of this.container.particles.array)
            if ((0, r.getDistance)(t, c.position) < o + c.getRadius()) {
              a = !0
              break
            }
          return a
        }
        calculateVelocity() {
          const t = (0, r.getParticleBaseVelocity)(this.direction).copy(),
            e = this.options.move,
            i = (Math.PI / 180) * (0, r.getRangeValue)(e.angle.value),
            o = (Math.PI / 180) * (0, r.getRangeValue)(e.angle.offset),
            n = { left: o - i / 2, right: o + i / 2 }
          return (
            e.straight ||
              (t.angle += (0, r.randomInRange)(
                (0, r.setRangeValue)(n.left, n.right)
              )),
            e.random &&
              'number' === typeof e.speed &&
              (t.length *= Math.random()),
            t
          )
        }
        loadShapeData(t, e) {
          const i = t.options[this.shape]
          if (i)
            return (0, c.deepExtend)(
              {},
              i instanceof Array ? (0, c.itemFromArray)(i, this.id, e) : i
            )
        }
        loadLife() {
          const t = this.container,
            e = this.options,
            i = e.life,
            o = {
              delay: t.retina.reduceFactor
                ? (((0, r.getRangeValue)(i.delay.value) *
                    (i.delay.sync ? 1 : Math.random())) /
                    t.retina.reduceFactor) *
                  1e3
                : 0,
              delayTime: 0,
              duration: t.retina.reduceFactor
                ? (((0, r.getRangeValue)(i.duration.value) *
                    (i.duration.sync ? 1 : Math.random())) /
                    t.retina.reduceFactor) *
                  1e3
                : 0,
              time: 0,
              count: e.life.count,
            }
          return (
            o.duration <= 0 && (o.duration = -1),
            o.count <= 0 && (o.count = -1),
            o
          )
        }
      }),
        (o = new WeakMap())
    },
    87017: function (t, e, i) {
      'use strict'
      var o,
        n =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        s =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Particles = void 0)
      const r = i(10931),
        a = i(959),
        c = i(2378),
        l = i(36475),
        d = i(18304),
        u = i(28936),
        h = i(49261)
      ;(e.Particles = class {
        constructor(t, e) {
          ;(this.container = e),
            o.set(this, void 0),
            n(this, o, t, 'f'),
            (this.nextId = 0),
            (this.array = []),
            (this.zArray = []),
            (this.limit = 0),
            (this.needsSort = !1),
            (this.lastZIndex = 0),
            (this.freqs = { links: new Map(), triangles: new Map() }),
            (this.interactionManager = new a.InteractionManager(
              s(this, o, 'f'),
              e
            ))
          const i = this.container.canvas.size
          ;(this.linksColors = new Map()),
            (this.quadTree = new u.QuadTree(
              new h.Rectangle(
                -i.width / 4,
                -i.height / 4,
                (3 * i.width) / 2,
                (3 * i.height) / 2
              ),
              4
            )),
            (this.movers = s(this, o, 'f').plugins.getMovers(e, !0)),
            (this.updaters = s(this, o, 'f').plugins.getUpdaters(e, !0))
        }
        get count() {
          return this.array.length
        }
        init() {
          var t
          const e = this.container,
            i = e.actualOptions
          ;(this.lastZIndex = 0),
            (this.needsSort = !1),
            (this.freqs.links = new Map()),
            (this.freqs.triangles = new Map())
          let n = !1
          ;(this.updaters = s(this, o, 'f').plugins.getUpdaters(e, !0)),
            this.interactionManager.init()
          for (const [, o] of e.plugins)
            if (
              (void 0 !== o.particlesInitialization &&
                (n = o.particlesInitialization()),
              n)
            )
              break
          if ((this.addManualParticles(), !n)) {
            for (const e in i.particles.groups) {
              const o = i.particles.groups[e]
              for (
                let n = this.count, s = 0;
                s <
                  (null === (t = o.number) || void 0 === t
                    ? void 0
                    : t.value) && n < i.particles.number.value;
                n++, s++
              )
                this.addParticle(void 0, o, e)
            }
            for (let t = this.count; t < i.particles.number.value; t++)
              this.addParticle()
          }
          e.pathGenerator.init(e)
        }
        async redraw() {
          this.clear(), this.init(), await this.draw({ value: 0, factor: 0 })
        }
        removeAt(t, e = 1, i, o) {
          if (!(t >= 0 && t <= this.count)) return
          let n = 0
          for (let s = t; n < e && s < this.count; s++) {
            const t = this.array[s]
            if (!t || t.group !== i) continue
            t.destroy(o), this.array.splice(s--, 1)
            const e = this.zArray.indexOf(t)
            this.zArray.splice(e, 1), n++
          }
        }
        remove(t, e, i) {
          this.removeAt(this.array.indexOf(t), void 0, e, i)
        }
        async update(t) {
          const e = this.container,
            i = []
          e.pathGenerator.update()
          for (const [, o] of e.plugins) void 0 !== o.update && o.update(t)
          for (const o of this.array) {
            const n = e.canvas.resizeFactor
            n &&
              !o.ignoresResizeRatio &&
              ((o.position.x *= n.width), (o.position.y *= n.height)),
              (o.ignoresResizeRatio = !1),
              (o.bubble.inRange = !1)
            for (const [, e] of this.container.plugins) {
              if (o.destroyed) break
              e.particleUpdate && e.particleUpdate(o, t)
            }
            for (const e of this.movers) e.isEnabled(o) && e.move(o, t)
            o.destroyed
              ? i.push(o)
              : this.quadTree.insert(new d.Point(o.getPosition(), o))
          }
          for (const o of i) this.remove(o)
          await this.interactionManager.externalInteract(t)
          for (const o of e.particles.array) {
            for (const e of this.updaters) e.update(o, t)
            o.destroyed ||
              o.spawning ||
              (await this.interactionManager.particlesInteract(o, t))
          }
          delete e.canvas.resizeFactor
        }
        async draw(t) {
          const e = this.container,
            i = this.container.canvas.size
          ;(this.quadTree = new u.QuadTree(
            new h.Rectangle(
              -i.width / 4,
              -i.height / 4,
              (3 * i.width) / 2,
              (3 * i.height) / 2
            ),
            4
          )),
            e.canvas.clear(),
            await this.update(t),
            this.needsSort &&
              (this.zArray.sort(
                (t, e) => e.position.z - t.position.z || t.id - e.id
              ),
              (this.lastZIndex =
                this.zArray[this.zArray.length - 1].position.z),
              (this.needsSort = !1))
          for (const [, o] of e.plugins) e.canvas.drawPlugin(o, t)
          for (const o of this.zArray) o.draw(t)
        }
        clear() {
          ;(this.array = []), (this.zArray = [])
        }
        push(t, e, i, o) {
          this.pushing = !0
          for (let n = 0; n < t; n++)
            this.addParticle(
              null === e || void 0 === e ? void 0 : e.position,
              i,
              o
            )
          this.pushing = !1
        }
        addParticle(t, e, i) {
          const o = this.container,
            n = o.actualOptions.particles.number.limit * o.density
          if (n > 0) {
            const t = this.count + 1 - n
            t > 0 && this.removeQuantity(t)
          }
          return this.pushParticle(t, e, i)
        }
        addSplitParticle(t) {
          const e = t.options.destroy.split,
            i = new l.ParticlesOptions()
          i.load(t.options)
          const o = (0, r.getRangeValue)(e.factor.value)
          i.color.load({ value: { hsl: t.getFillColor() } }),
            'number' === typeof i.size.value
              ? (i.size.value /= o)
              : ((i.size.value.min /= o), (i.size.value.max /= o)),
            i.load(e.particles)
          const n = e.sizeOffset
              ? (0, r.setRangeValue)(-t.size.value, t.size.value)
              : 0,
            s = {
              x: t.position.x + (0, r.randomInRange)(n),
              y: t.position.y + (0, r.randomInRange)(n),
            }
          return this.pushParticle(
            s,
            i,
            t.group,
            (e) =>
              !(e.size.value < 0.5) &&
              ((e.velocity.length = (0, r.randomInRange)(
                (0, r.setRangeValue)(t.velocity.length, e.velocity.length)
              )),
              (e.splitCount = t.splitCount + 1),
              (e.unbreakable = !0),
              setTimeout(() => {
                e.unbreakable = !1
              }, 500),
              !0)
          )
        }
        removeQuantity(t, e) {
          this.removeAt(0, t, e)
        }
        getLinkFrequency(t, e) {
          const i = (0, r.setRangeValue)(t.id, e.id),
            o = `${(0, r.getRangeMin)(i)}_${(0, r.getRangeMax)(i)}`
          let n = this.freqs.links.get(o)
          return (
            void 0 === n && ((n = Math.random()), this.freqs.links.set(o, n)), n
          )
        }
        getTriangleFrequency(t, e, i) {
          let [o, n, s] = [t.id, e.id, i.id]
          o > n && ([n, o] = [o, n]),
            n > s && ([s, n] = [n, s]),
            o > s && ([s, o] = [o, s])
          const r = `${o}_${n}_${s}`
          let a = this.freqs.triangles.get(r)
          return (
            void 0 === a &&
              ((a = Math.random()), this.freqs.triangles.set(r, a)),
            a
          )
        }
        addManualParticles() {
          const t = this.container,
            e = t.actualOptions
          for (const i of e.manualParticles)
            this.addParticle(
              (0, r.calcPositionFromSize)({
                size: t.canvas.size,
                position: i.position,
              }),
              i.options
            )
        }
        setDensity() {
          const t = this.container.actualOptions
          for (const e in t.particles.groups)
            this.applyDensity(t.particles.groups[e], 0, e)
          this.applyDensity(t.particles, t.manualParticles.length)
        }
        handleClickMode(t) {
          this.interactionManager.handleClickMode(t)
        }
        applyDensity(t, e, i) {
          var o
          if (
            !(null === (o = t.number.density) || void 0 === o
              ? void 0
              : o.enable)
          )
            return
          const n = t.number,
            s = this.initDensityFactor(n.density),
            r = n.value,
            a = n.limit > 0 ? n.limit : r,
            c = Math.min(r, a) * s + e,
            l = Math.min(
              this.count,
              this.array.filter((t) => t.group === i).length
            )
          ;(this.limit = n.limit * s),
            l < c
              ? this.push(Math.abs(c - l), void 0, t, i)
              : l > c && this.removeQuantity(l - c, i)
        }
        initDensityFactor(t) {
          const e = this.container
          if (!e.canvas.element || !t.enable) return 1
          const i = e.canvas.element,
            o = e.retina.pixelRatio
          return (i.width * i.height) / (t.factor * o ** 2 * t.area)
        }
        pushParticle(t, e, i, n) {
          try {
            const r = new c.Particle(
              s(this, o, 'f'),
              this.nextId,
              this.container,
              t,
              e,
              i
            )
            let a = !0
            if ((n && (a = n(r)), !a)) return
            return this.array.push(r), this.zArray.push(r), this.nextId++, r
          } catch (r) {
            return void console.warn(`error adding particle: ${r}`)
          }
        }
      }),
        (o = new WeakMap())
    },
    26413: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Retina = void 0)
      const o = i(10931),
        n = i(47912)
      e.Retina = class {
        constructor(t) {
          this.container = t
        }
        init() {
          const t = this.container,
            e = t.actualOptions
          this.pixelRatio =
            !e.detectRetina || (0, n.isSsr)() ? 1 : window.devicePixelRatio
          const i = this.container.actualOptions.motion
          if (i && (i.disable || i.reduce.value))
            if (
              (0, n.isSsr)() ||
              'undefined' === typeof matchMedia ||
              !matchMedia
            )
              this.reduceFactor = 1
            else {
              const e = matchMedia('(prefers-reduced-motion: reduce)')
              if (e) {
                this.handleMotionChange(e)
                const i = () => {
                  this.handleMotionChange(e), t.refresh().catch(() => {})
                }
                void 0 !== e.addEventListener
                  ? e.addEventListener('change', i)
                  : void 0 !== e.addListener && e.addListener(i)
              }
            }
          else this.reduceFactor = 1
          const s = this.pixelRatio
          if (t.canvas.element) {
            const e = t.canvas.element
            ;(t.canvas.size.width = e.offsetWidth * s),
              (t.canvas.size.height = e.offsetHeight * s)
          }
          const r = e.particles
          ;(this.attractDistance =
            (0, o.getRangeValue)(r.move.attract.distance) * s),
            (this.linksDistance = r.links.distance * s),
            (this.linksWidth = r.links.width * s),
            (this.sizeAnimationSpeed =
              (0, o.getRangeValue)(r.size.animation.speed) * s),
            (this.maxSpeed = (0, o.getRangeValue)(r.move.gravity.maxSpeed) * s)
          const a = e.interactivity.modes
          ;(this.connectModeDistance = a.connect.distance * s),
            (this.connectModeRadius = a.connect.radius * s),
            (this.grabModeDistance = a.grab.distance * s),
            (this.repulseModeDistance = a.repulse.distance * s),
            (this.bounceModeDistance = a.bounce.distance * s),
            (this.attractModeDistance = a.attract.distance * s),
            (this.slowModeRadius = a.slow.radius * s),
            (this.bubbleModeDistance = a.bubble.distance * s),
            a.bubble.size && (this.bubbleModeSize = a.bubble.size * s)
        }
        initParticle(t) {
          const e = t.options,
            i = this.pixelRatio,
            n = e.move.distance,
            s = t.retina
          ;(s.attractDistance =
            (0, o.getRangeValue)(e.move.attract.distance) * i),
            (s.linksDistance = e.links.distance * i),
            (s.linksWidth = e.links.width * i),
            (s.moveDrift = (0, o.getRangeValue)(e.move.drift) * i),
            (s.moveSpeed = (0, o.getRangeValue)(e.move.speed) * i),
            (s.sizeAnimationSpeed =
              (0, o.getRangeValue)(e.size.animation.speed) * i)
          const r = s.maxDistance
          ;(r.horizontal = void 0 !== n.horizontal ? n.horizontal * i : void 0),
            (r.vertical = void 0 !== n.vertical ? n.vertical * i : void 0),
            (s.maxSpeed = (0, o.getRangeValue)(e.move.gravity.maxSpeed) * i)
        }
        handleMotionChange(t) {
          const e = this.container.actualOptions
          if (t.matches) {
            const t = e.motion
            this.reduceFactor = t.disable
              ? 0
              : t.reduce.value
              ? 1 / t.reduce.factor
              : 1
          } else this.reduceFactor = 1
        }
      }
    },
    15416: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Circle = void 0)
      const o = i(76729),
        n = i(10931)
      class s extends o.Range {
        constructor(t, e, i) {
          super(t, e), (this.radius = i)
        }
        contains(t) {
          return (0, n.getDistance)(t, this.position) <= this.radius
        }
        intersects(t) {
          const e = t,
            i = t,
            o = this.position,
            n = t.position,
            s = Math.abs(n.x - o.x),
            r = Math.abs(n.y - o.y),
            a = this.radius
          if (void 0 !== i.radius) {
            return a + i.radius > Math.sqrt(s * s + r + r)
          }
          if (void 0 !== e.size) {
            const t = e.size.width,
              i = e.size.height,
              o = Math.pow(s - t, 2) + Math.pow(r - i, 2)
            return !(s > a + t || r > a + i) && (s <= t || r <= i || o <= a * a)
          }
          return !1
        }
      }
      e.Circle = s
    },
    12752: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CircleWarp = void 0)
      const o = i(15416),
        n = i(49261)
      class s extends o.Circle {
        constructor(t, e, i, o) {
          super(t, e, i),
            (this.canvasSize = o),
            (this.canvasSize = Object.assign({}, o))
        }
        contains(t) {
          if (super.contains(t)) return !0
          const e = { x: t.x - this.canvasSize.width, y: t.y }
          if (super.contains(e)) return !0
          const i = {
            x: t.x - this.canvasSize.width,
            y: t.y - this.canvasSize.height,
          }
          if (super.contains(i)) return !0
          const o = { x: t.x, y: t.y - this.canvasSize.height }
          return super.contains(o)
        }
        intersects(t) {
          if (super.intersects(t)) return !0
          const e = t,
            i = t,
            s = {
              x: t.position.x - this.canvasSize.width,
              y: t.position.y - this.canvasSize.height,
            }
          if (void 0 !== i.radius) {
            const t = new o.Circle(s.x, s.y, 2 * i.radius)
            return super.intersects(t)
          }
          if (void 0 !== e.size) {
            const t = new n.Rectangle(
              s.x,
              s.y,
              2 * e.size.width,
              2 * e.size.height
            )
            return super.intersects(t)
          }
          return !1
        }
      }
      e.CircleWarp = s
    },
    95078: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Constants = void 0)
      class i {}
      ;(e.Constants = i),
        (i.generatedAttribute = 'generated'),
        (i.randomColorValue = 'random'),
        (i.midColorValue = 'mid'),
        (i.touchEndEvent = 'touchend'),
        (i.mouseDownEvent = 'mousedown'),
        (i.mouseUpEvent = 'mouseup'),
        (i.mouseMoveEvent = 'mousemove'),
        (i.touchStartEvent = 'touchstart'),
        (i.touchMoveEvent = 'touchmove'),
        (i.mouseLeaveEvent = 'mouseleave'),
        (i.mouseOutEvent = 'mouseout'),
        (i.touchCancelEvent = 'touchcancel'),
        (i.resizeEvent = 'resize'),
        (i.visibilityChangeEvent = 'visibilitychange'),
        (i.noPolygonDataLoaded = 'No polygon data loaded.'),
        (i.noPolygonFound =
          'No polygon found, you need to specify SVG url in config.')
    },
    73535: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EventListeners = void 0)
      const o = i(95078),
        n = i(47912)
      function s(t, e, i, o, n) {
        if (o) {
          let o = { passive: !0 }
          'boolean' === typeof n ? (o.capture = n) : void 0 !== n && (o = n),
            t.addEventListener(e, i, o)
        } else {
          const o = n
          t.removeEventListener(e, i, o)
        }
      }
      e.EventListeners = class {
        constructor(t) {
          ;(this.container = t),
            (this.canPush = !0),
            (this.mouseMoveHandler = (t) => this.mouseTouchMove(t)),
            (this.touchStartHandler = (t) => this.mouseTouchMove(t)),
            (this.touchMoveHandler = (t) => this.mouseTouchMove(t)),
            (this.touchEndHandler = () => this.mouseTouchFinish()),
            (this.mouseLeaveHandler = () => this.mouseTouchFinish()),
            (this.touchCancelHandler = () => this.mouseTouchFinish()),
            (this.touchEndClickHandler = (t) => this.mouseTouchClick(t)),
            (this.mouseUpHandler = (t) => this.mouseTouchClick(t)),
            (this.mouseDownHandler = () => this.mouseDown()),
            (this.visibilityChangeHandler = () =>
              this.handleVisibilityChange()),
            (this.themeChangeHandler = (t) => this.handleThemeChange(t)),
            (this.oldThemeChangeHandler = (t) => this.handleThemeChange(t)),
            (this.resizeHandler = () => this.handleWindowResize())
        }
        addListeners() {
          this.manageListeners(!0)
        }
        removeListeners() {
          this.manageListeners(!1)
        }
        manageListeners(t) {
          var e
          const i = this.container,
            r = i.actualOptions,
            a = r.interactivity.detectsOn
          let c = o.Constants.mouseLeaveEvent
          if ('window' === a)
            (i.interactivity.element = window), (c = o.Constants.mouseOutEvent)
          else if ('parent' === a && i.canvas.element) {
            const t = i.canvas.element
            i.interactivity.element =
              null !== (e = t.parentElement) && void 0 !== e ? e : t.parentNode
          } else i.interactivity.element = i.canvas.element
          const l =
            !(0, n.isSsr)() &&
            'undefined' !== typeof matchMedia &&
            matchMedia('(prefers-color-scheme: dark)')
          l &&
            (void 0 !== l.addEventListener
              ? s(l, 'change', this.themeChangeHandler, t)
              : void 0 !== l.addListener &&
                (t
                  ? l.addListener(this.oldThemeChangeHandler)
                  : l.removeListener(this.oldThemeChangeHandler)))
          const d = i.interactivity.element
          if (!d) return
          const u = d
          ;(r.interactivity.events.onHover.enable ||
            r.interactivity.events.onClick.enable) &&
            (s(d, o.Constants.mouseMoveEvent, this.mouseMoveHandler, t),
            s(d, o.Constants.touchStartEvent, this.touchStartHandler, t),
            s(d, o.Constants.touchMoveEvent, this.touchMoveHandler, t),
            r.interactivity.events.onClick.enable
              ? (s(d, o.Constants.touchEndEvent, this.touchEndClickHandler, t),
                s(d, o.Constants.mouseUpEvent, this.mouseUpHandler, t),
                s(d, o.Constants.mouseDownEvent, this.mouseDownHandler, t))
              : s(d, o.Constants.touchEndEvent, this.touchEndHandler, t),
            s(d, c, this.mouseLeaveHandler, t),
            s(d, o.Constants.touchCancelEvent, this.touchCancelHandler, t)),
            i.canvas.element &&
              (i.canvas.element.style.pointerEvents =
                u === i.canvas.element ? 'initial' : 'none'),
            r.interactivity.events.resize &&
              ('undefined' !== typeof ResizeObserver
                ? this.resizeObserver && !t
                  ? (i.canvas.element &&
                      this.resizeObserver.unobserve(i.canvas.element),
                    this.resizeObserver.disconnect(),
                    delete this.resizeObserver)
                  : !this.resizeObserver &&
                    t &&
                    i.canvas.element &&
                    ((this.resizeObserver = new ResizeObserver((t) => {
                      t.find((t) => t.target === i.canvas.element) &&
                        this.handleWindowResize()
                    })),
                    this.resizeObserver.observe(i.canvas.element))
                : s(window, o.Constants.resizeEvent, this.resizeHandler, t)),
            document &&
              s(
                document,
                o.Constants.visibilityChangeEvent,
                this.visibilityChangeHandler,
                t,
                !1
              )
        }
        handleWindowResize() {
          this.resizeTimeout &&
            (clearTimeout(this.resizeTimeout), delete this.resizeTimeout),
            (this.resizeTimeout = setTimeout(async () => {
              var t
              return await (null === (t = this.container.canvas) || void 0 === t
                ? void 0
                : t.windowResize())
            }, 500))
        }
        handleVisibilityChange() {
          const t = this.container,
            e = t.actualOptions
          this.mouseTouchFinish(),
            e.pauseOnBlur &&
              ((
                null === document || void 0 === document
                  ? void 0
                  : document.hidden
              )
                ? ((t.pageHidden = !0), t.pause())
                : ((t.pageHidden = !1),
                  t.getAnimationStatus() ? t.play(!0) : t.draw(!0)))
        }
        mouseDown() {
          const t = this.container.interactivity
          if (t) {
            const e = t.mouse
            ;(e.clicking = !0), (e.downPosition = e.position)
          }
        }
        mouseTouchMove(t) {
          var e, i, n, s, r, a, c
          const l = this.container,
            d = l.actualOptions
          if (
            !(null === (e = l.interactivity) || void 0 === e
              ? void 0
              : e.element)
          )
            return
          let u
          l.interactivity.mouse.inside = !0
          const h = l.canvas.element
          if (t.type.startsWith('mouse')) {
            this.canPush = !0
            const e = t
            if (l.interactivity.element === window) {
              if (h) {
                const t = h.getBoundingClientRect()
                u = { x: e.clientX - t.left, y: e.clientY - t.top }
              }
            } else if ('parent' === d.interactivity.detectsOn) {
              const t = e.target,
                o = e.currentTarget,
                s = l.canvas.element
              if (t && o && s) {
                const i = t.getBoundingClientRect(),
                  n = o.getBoundingClientRect(),
                  r = s.getBoundingClientRect()
                u = {
                  x: e.offsetX + 2 * i.left - (n.left + r.left),
                  y: e.offsetY + 2 * i.top - (n.top + r.top),
                }
              } else
                u = {
                  x: null !== (i = e.offsetX) && void 0 !== i ? i : e.clientX,
                  y: null !== (n = e.offsetY) && void 0 !== n ? n : e.clientY,
                }
            } else
              e.target === l.canvas.element &&
                (u = {
                  x: null !== (s = e.offsetX) && void 0 !== s ? s : e.clientX,
                  y: null !== (r = e.offsetY) && void 0 !== r ? r : e.clientY,
                })
          } else {
            this.canPush = 'touchmove' !== t.type
            const e = t,
              i = e.touches[e.touches.length - 1],
              o =
                null === h || void 0 === h ? void 0 : h.getBoundingClientRect()
            u = {
              x:
                i.clientX -
                (null !== (a = null === o || void 0 === o ? void 0 : o.left) &&
                void 0 !== a
                  ? a
                  : 0),
              y:
                i.clientY -
                (null !== (c = null === o || void 0 === o ? void 0 : o.top) &&
                void 0 !== c
                  ? c
                  : 0),
            }
          }
          const p = l.retina.pixelRatio
          u && ((u.x *= p), (u.y *= p)),
            (l.interactivity.mouse.position = u),
            (l.interactivity.status = o.Constants.mouseMoveEvent)
        }
        mouseTouchFinish() {
          const t = this.container.interactivity
          if (!t) return
          const e = t.mouse
          delete e.position,
            delete e.clickPosition,
            delete e.downPosition,
            (t.status = o.Constants.mouseLeaveEvent),
            (e.inside = !1),
            (e.clicking = !1)
        }
        mouseTouchClick(t) {
          const e = this.container,
            i = e.actualOptions,
            o = e.interactivity.mouse
          o.inside = !0
          let n = !1
          const s = o.position
          if (s && i.interactivity.events.onClick.enable) {
            for (const [, t] of e.plugins)
              if (t.clickPositionValid && ((n = t.clickPositionValid(s)), n))
                break
            n || this.doMouseTouchClick(t), (o.clicking = !1)
          }
        }
        doMouseTouchClick(t) {
          const e = this.container,
            i = e.actualOptions
          if (this.canPush) {
            const t = e.interactivity.mouse.position
            if (!t) return
            ;(e.interactivity.mouse.clickPosition = { x: t.x, y: t.y }),
              (e.interactivity.mouse.clickTime = new Date().getTime())
            const o = i.interactivity.events.onClick
            if (o.mode instanceof Array)
              for (const e of o.mode) this.handleClickMode(e)
            else this.handleClickMode(o.mode)
          }
          'touchend' === t.type &&
            setTimeout(() => this.mouseTouchFinish(), 500)
        }
        handleThemeChange(t) {
          const e = t.matches
              ? this.container.options.defaultDarkTheme
              : this.container.options.defaultLightTheme,
            i = this.container.options.themes.find((t) => t.name === e)
          i && i.default.auto && this.container.loadTheme(e)
        }
        handleClickMode(t) {
          this.container.handleClickMode(t)
        }
      }
    },
    9472: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ExternalInteractorBase = void 0)
      e.ExternalInteractorBase = class {
        constructor(t) {
          ;(this.container = t), (this.type = 0)
        }
      }
    },
    85301: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.FrameManager = void 0)
      e.FrameManager = class {
        constructor(t) {
          this.container = t
        }
        async nextFrame(t) {
          var e
          try {
            const i = this.container
            if (
              void 0 !== i.lastFrameTime &&
              t < i.lastFrameTime + 1e3 / i.fpsLimit
            )
              return void i.draw(!1)
            ;(null !== (e = i.lastFrameTime) && void 0 !== e) ||
              (i.lastFrameTime = t)
            const o = t - i.lastFrameTime,
              n = { value: o, factor: (60 * o) / 1e3 }
            if (((i.lifeTime += n.value), (i.lastFrameTime = t), o > 1e3))
              return void i.draw(!1)
            if (
              (await i.particles.draw(n),
              i.duration > 0 && i.lifeTime > i.duration)
            )
              return void i.destroy()
            i.getAnimationStatus() && i.draw(!1)
          } catch (i) {
            console.error('tsParticles error in animation loop', i)
          }
        }
      }
    },
    959: function (t, e) {
      'use strict'
      var i,
        o =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        n =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.InteractionManager = void 0)
      ;(e.InteractionManager = class {
        constructor(t, e) {
          ;(this.container = e),
            i.set(this, void 0),
            o(this, i, t, 'f'),
            (this.externalInteractors = []),
            (this.particleInteractors = []),
            this.init()
        }
        init() {
          const t = n(this, i, 'f').plugins.getInteractors(this.container, !0)
          ;(this.externalInteractors = []), (this.particleInteractors = [])
          for (const e of t)
            switch (e.type) {
              case 0:
                this.externalInteractors.push(e)
                break
              case 1:
                this.particleInteractors.push(e)
            }
        }
        async externalInteract(t) {
          for (const e of this.externalInteractors)
            e.isEnabled() && (await e.interact(t))
        }
        async particlesInteract(t, e) {
          for (const i of this.externalInteractors) i.reset(t)
          for (const i of this.particleInteractors)
            i.isEnabled(t) && (await i.interact(t, e))
        }
        handleClickMode(t) {
          for (const e of this.externalInteractors)
            e.handleClickMode && e.handleClickMode(t)
        }
      }),
        (i = new WeakMap())
    },
    13753: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ParticlesInteractorBase = void 0)
      e.ParticlesInteractorBase = class {
        constructor(t) {
          ;(this.container = t), (this.type = 1)
        }
      }
    },
    99294: function (t, e) {
      'use strict'
      var i,
        o =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Plugins = void 0)
      ;(e.Plugins = class {
        constructor(t) {
          i.set(this, void 0),
            o(this, i, t, 'f'),
            (this.plugins = []),
            (this.interactorsInitializers = new Map()),
            (this.moversInitializers = new Map()),
            (this.updatersInitializers = new Map()),
            (this.interactors = new Map()),
            (this.movers = new Map()),
            (this.updaters = new Map()),
            (this.presets = new Map()),
            (this.drawers = new Map()),
            (this.pathGenerators = new Map())
        }
        getPlugin(t) {
          return this.plugins.find((e) => e.id === t)
        }
        addPlugin(t) {
          this.getPlugin(t.id) || this.plugins.push(t)
        }
        getAvailablePlugins(t) {
          const e = new Map()
          for (const i of this.plugins)
            i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t))
          return e
        }
        loadOptions(t, e) {
          for (const i of this.plugins) i.loadOptions(t, e)
        }
        getPreset(t) {
          return this.presets.get(t)
        }
        addPreset(t, e, i = !1) {
          ;(!i && this.getPreset(t)) || this.presets.set(t, e)
        }
        getShapeDrawer(t) {
          return this.drawers.get(t)
        }
        addShapeDrawer(t, e) {
          this.getShapeDrawer(t) || this.drawers.set(t, e)
        }
        getSupportedShapes() {
          return this.drawers.keys()
        }
        getPathGenerator(t) {
          return this.pathGenerators.get(t)
        }
        addPathGenerator(t, e) {
          this.getPathGenerator(t) || this.pathGenerators.set(t, e)
        }
        getInteractors(t, e = !1) {
          let i = this.interactors.get(t)
          return (
            (i && !e) ||
              ((i = [...this.interactorsInitializers.values()].map((e) =>
                e(t)
              )),
              this.interactors.set(t, i)),
            i
          )
        }
        addInteractor(t, e) {
          this.interactorsInitializers.set(t, e)
        }
        getUpdaters(t, e = !1) {
          let i = this.updaters.get(t)
          return (
            (i && !e) ||
              ((i = [...this.updatersInitializers.values()].map((e) => e(t))),
              this.updaters.set(t, i)),
            i
          )
        }
        addParticleUpdater(t, e) {
          this.updatersInitializers.set(t, e)
        }
        getMovers(t, e = !1) {
          let i = this.movers.get(t)
          return (
            (i && !e) ||
              ((i = [...this.moversInitializers.values()].map((e) => e(t))),
              this.movers.set(t, i)),
            i
          )
        }
        addParticleMover(t, e) {
          this.moversInitializers.set(t, e)
        }
      }),
        (i = new WeakMap())
    },
    18304: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Point = void 0)
      e.Point = class {
        constructor(t, e) {
          ;(this.position = t), (this.particle = e)
        }
      }
    },
    28936: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.QuadTree = void 0)
      const o = i(15416),
        n = i(12752),
        s = i(49261),
        r = i(10931)
      class a {
        constructor(t, e) {
          ;(this.rectangle = t),
            (this.capacity = e),
            (this.points = []),
            (this.divided = !1)
        }
        insert(t) {
          var e, i, o, n, s
          return (
            !!this.rectangle.contains(t.position) &&
            (this.points.length < this.capacity
              ? (this.points.push(t), !0)
              : (this.divided || this.subdivide(),
                null !==
                  (s =
                    (null === (e = this.northEast) || void 0 === e
                      ? void 0
                      : e.insert(t)) ||
                    (null === (i = this.northWest) || void 0 === i
                      ? void 0
                      : i.insert(t)) ||
                    (null === (o = this.southEast) || void 0 === o
                      ? void 0
                      : o.insert(t)) ||
                    (null === (n = this.southWest) || void 0 === n
                      ? void 0
                      : n.insert(t))) &&
                  void 0 !== s &&
                  s))
          )
        }
        queryCircle(t, e) {
          return this.query(new o.Circle(t.x, t.y, e))
        }
        queryCircleWarp(t, e, i) {
          const o = i,
            s = i
          return this.query(
            new n.CircleWarp(
              t.x,
              t.y,
              e,
              void 0 !== o.canvas ? o.canvas.size : s
            )
          )
        }
        queryRectangle(t, e) {
          return this.query(new s.Rectangle(t.x, t.y, e.width, e.height))
        }
        query(t, e) {
          var i, o, n, s
          const a = null !== e && void 0 !== e ? e : []
          if (!t.intersects(this.rectangle)) return []
          for (const c of this.points)
            (!t.contains(c.position) &&
              (0, r.getDistance)(t.position, c.position) >
                c.particle.getRadius()) ||
              a.push(c.particle)
          return (
            this.divided &&
              (null === (i = this.northEast) || void 0 === i || i.query(t, a),
              null === (o = this.northWest) || void 0 === o || o.query(t, a),
              null === (n = this.southEast) || void 0 === n || n.query(t, a),
              null === (s = this.southWest) || void 0 === s || s.query(t, a)),
            a
          )
        }
        subdivide() {
          const t = this.rectangle.position.x,
            e = this.rectangle.position.y,
            i = this.rectangle.size.width,
            o = this.rectangle.size.height,
            n = this.capacity
          ;(this.northEast = new a(new s.Rectangle(t, e, i / 2, o / 2), n)),
            (this.northWest = new a(
              new s.Rectangle(t + i / 2, e, i / 2, o / 2),
              n
            )),
            (this.southEast = new a(
              new s.Rectangle(t, e + o / 2, i / 2, o / 2),
              n
            )),
            (this.southWest = new a(
              new s.Rectangle(t + i / 2, e + o / 2, i / 2, o / 2),
              n
            )),
            (this.divided = !0)
        }
      }
      e.QuadTree = a
    },
    76729: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Range = void 0)
      e.Range = class {
        constructor(t, e) {
          this.position = { x: t, y: e }
        }
      }
    },
    49261: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Rectangle = void 0)
      const o = i(76729)
      class n extends o.Range {
        constructor(t, e, i, o) {
          super(t, e), (this.size = { height: o, width: i })
        }
        contains(t) {
          const e = this.size.width,
            i = this.size.height,
            o = this.position
          return t.x >= o.x && t.x <= o.x + e && t.y >= o.y && t.y <= o.y + i
        }
        intersects(t) {
          const e = t,
            i = t,
            o = this.size.width,
            n = this.size.height,
            s = this.position,
            r = t.position
          if (void 0 !== i.radius) return i.intersects(this)
          if (!e.size) return !1
          const a = e.size,
            c = a.width,
            l = a.height
          return (
            r.x < s.x + o && r.x + c > s.x && r.y < s.y + n && r.y + l > s.y
          )
        }
      }
      e.Rectangle = n
    },
    78779: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector = void 0)
      class i {
        constructor(t, e) {
          if ('number' !== typeof t && t) (this.x = t.x), (this.y = t.y)
          else {
            if (void 0 === t || void 0 === e)
              throw new Error('tsParticles - Vector not initialized correctly')
            ;(this.x = t), (this.y = e)
          }
        }
        static clone(t) {
          return i.create(t.x, t.y)
        }
        static create(t, e) {
          return new i(t, e)
        }
        static get origin() {
          return i.create(0, 0)
        }
        get angle() {
          return Math.atan2(this.y, this.x)
        }
        set angle(t) {
          this.updateFromAngle(t, this.length)
        }
        get length() {
          return Math.sqrt(this.getLengthSq())
        }
        set length(t) {
          this.updateFromAngle(this.angle, t)
        }
        add(t) {
          return i.create(this.x + t.x, this.y + t.y)
        }
        addTo(t) {
          ;(this.x += t.x), (this.y += t.y)
        }
        sub(t) {
          return i.create(this.x - t.x, this.y - t.y)
        }
        subFrom(t) {
          ;(this.x -= t.x), (this.y -= t.y)
        }
        mult(t) {
          return i.create(this.x * t, this.y * t)
        }
        multTo(t) {
          ;(this.x *= t), (this.y *= t)
        }
        div(t) {
          return i.create(this.x / t, this.y / t)
        }
        divTo(t) {
          ;(this.x /= t), (this.y /= t)
        }
        distanceTo(t) {
          return this.sub(t).length
        }
        getLengthSq() {
          return this.x ** 2 + this.y ** 2
        }
        distanceToSq(t) {
          return this.sub(t).getLengthSq()
        }
        manhattanDistanceTo(t) {
          return Math.abs(t.x - this.x) + Math.abs(t.y - this.y)
        }
        copy() {
          return i.clone(this)
        }
        setTo(t) {
          ;(this.x = t.x), (this.y = t.y)
        }
        rotate(t) {
          return i.create(
            this.x * Math.cos(t) - this.y * Math.sin(t),
            this.x * Math.sin(t) + this.y * Math.cos(t)
          )
        }
        updateFromAngle(t, e) {
          ;(this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e)
        }
      }
      e.Vector = i
    },
    29309: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Vector3d = void 0)
      const o = i(78779)
      class n extends o.Vector {
        constructor(t, e, i) {
          if ((super(t, e), 'number' !== typeof t && t)) this.z = t.z
          else {
            if (void 0 === i)
              throw new Error('tsParticles - Vector not initialized correctly')
            this.z = i
          }
        }
        static clone(t) {
          return n.create(t.x, t.y, t.z)
        }
        static create(t, e, i) {
          return new n(t, e, i)
        }
        static get origin() {
          return n.create(0, 0, 0)
        }
        add(t) {
          return t instanceof n
            ? n.create(this.x + t.x, this.y + t.y, this.z + t.z)
            : super.add(t)
        }
        addTo(t) {
          super.addTo(t), t instanceof n && (this.z += t.z)
        }
        sub(t) {
          return t instanceof n
            ? n.create(this.x - t.x, this.y - t.y, this.z - t.z)
            : super.sub(t)
        }
        subFrom(t) {
          super.subFrom(t), t instanceof n && (this.z -= t.z)
        }
        mult(t) {
          return n.create(this.x * t, this.y * t, this.z * t)
        }
        multTo(t) {
          super.multTo(t), (this.z *= t)
        }
        div(t) {
          return n.create(this.x / t, this.y / t, this.z / t)
        }
        divTo(t) {
          super.divTo(t), (this.z /= t)
        }
        copy() {
          return n.clone(this)
        }
        setTo(t) {
          super.setTo(t)
          const e = t
          void 0 !== e.z && (this.z = e.z)
        }
      }
      e.Vector3d = n
    },
    73626: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    33752: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    6671: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    36891: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    12607: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    55167: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    68257: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    37625: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    27580: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    96518: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    94344: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    65545: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    43461: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    5743: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    86061: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    99455: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    82893: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    95993: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    23021: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    80115: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    76542: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    45751: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    52058: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    4918: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    54123: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Attractor = void 0)
      const o = i(10931),
        n = i(15416),
        s = i(95078),
        r = i(9472),
        a = i(78779),
        c = i(47912)
      class l extends r.ExternalInteractorBase {
        constructor(t) {
          super(t),
            t.attract || (t.attract = { particles: [] }),
            (this.handleClickMode = (e) => {
              const i = this.container.actualOptions
              if ('attract' === e) {
                t.attract || (t.attract = { particles: [] }),
                  (t.attract.clicking = !0),
                  (t.attract.count = 0)
                for (const e of t.attract.particles)
                  e.velocity.setTo(e.initialVelocity)
                ;(t.attract.particles = []),
                  (t.attract.finish = !1),
                  setTimeout(() => {
                    t.destroyed ||
                      (t.attract || (t.attract = { particles: [] }),
                      (t.attract.clicking = !1))
                  }, 1e3 * i.interactivity.modes.attract.duration)
              }
            })
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            o = e.interactivity.events
          if (
            (!i.position || !o.onHover.enable) &&
            (!i.clickPosition || !o.onClick.enable)
          )
            return !1
          const n = o.onHover.mode,
            s = o.onClick.mode
          return (
            (0, c.isInArray)('attract', n) || (0, c.isInArray)('attract', s)
          )
        }
        reset() {}
        async interact() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.status === s.Constants.mouseMoveEvent,
            o = e.interactivity.events,
            n = o.onHover.enable,
            r = o.onHover.mode,
            a = o.onClick.enable,
            l = o.onClick.mode
          i && n && (0, c.isInArray)('attract', r)
            ? this.hoverAttract()
            : a && (0, c.isInArray)('attract', l) && this.clickAttract()
        }
        hoverAttract() {
          const t = this.container,
            e = t.interactivity.mouse.position
          if (!e) return
          const i = t.retina.attractModeDistance
          this.processAttract(e, i, new n.Circle(e.x, e.y, i))
        }
        processAttract(t, e, i) {
          const n = this.container,
            s = n.actualOptions.interactivity.modes.attract,
            r = n.particles.quadTree.query(i)
          for (const c of r) {
            const {
                dx: i,
                dy: n,
                distance: r,
              } = (0, o.getDistances)(c.position, t),
              l = s.speed * s.factor,
              d = (0, o.clamp)(
                (0, o.calcEasing)(1 - r / e, s.easing) * l,
                0,
                s.maxSpeed
              ),
              u = a.Vector.create(
                0 === r ? l : (i / r) * d,
                0 === r ? l : (n / r) * d
              )
            c.position.subFrom(u)
          }
        }
        clickAttract() {
          const t = this.container
          if (
            (t.attract || (t.attract = { particles: [] }),
            t.attract.finish ||
              (t.attract.count || (t.attract.count = 0),
              t.attract.count++,
              t.attract.count === t.particles.count && (t.attract.finish = !0)),
            t.attract.clicking)
          ) {
            const e = t.interactivity.mouse.clickPosition
            if (!e) return
            const i = t.retina.attractModeDistance
            this.processAttract(e, i, new n.Circle(e.x, e.y, i))
          } else !1 === t.attract.clicking && (t.attract.particles = [])
        }
      }
      e.Attractor = l
    },
    56999: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalAttractInteraction = void 0)
      const o = i(54123)
      e.loadExternalAttractInteraction = async function (t) {
        await t.addInteractor('externalAttract', (t) => new o.Attractor(t))
      }
    },
    63027: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Bouncer = void 0)
      const o = i(47912),
        n = i(15416),
        s = i(95078),
        r = i(9472),
        a = i(49261),
        c = i(78779)
      class l extends r.ExternalInteractorBase {
        constructor(t) {
          super(t)
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            n = e.interactivity.events,
            s = n.onDiv
          return (
            (i.position &&
              n.onHover.enable &&
              (0, o.isInArray)('bounce', n.onHover.mode)) ||
            (0, o.isDivModeEnabled)('bounce', s)
          )
        }
        async interact() {
          const t = this.container,
            e = t.actualOptions.interactivity.events,
            i = t.interactivity.status === s.Constants.mouseMoveEvent,
            n = e.onHover.enable,
            r = e.onHover.mode,
            a = e.onDiv
          i && n && (0, o.isInArray)('bounce', r)
            ? this.processMouseBounce()
            : (0, o.divModeExecute)('bounce', a, (t, e) =>
                this.singleSelectorBounce(t, e)
              )
        }
        reset() {}
        processMouseBounce() {
          const t = this.container,
            e = 10 * t.retina.pixelRatio,
            i = t.interactivity.mouse.position,
            o = t.retina.bounceModeDistance
          i && this.processBounce(i, o, new n.Circle(i.x, i.y, o + e))
        }
        singleSelectorBounce(t, e) {
          const i = this.container,
            o = document.querySelectorAll(t)
          o.length &&
            o.forEach((t) => {
              const o = t,
                s = i.retina.pixelRatio,
                r = {
                  x: (o.offsetLeft + o.offsetWidth / 2) * s,
                  y: (o.offsetTop + o.offsetHeight / 2) * s,
                },
                c = (o.offsetWidth / 2) * s,
                l = 10 * s,
                d =
                  'circle' === e.type
                    ? new n.Circle(r.x, r.y, c + l)
                    : new a.Rectangle(
                        o.offsetLeft * s - l,
                        o.offsetTop * s - l,
                        o.offsetWidth * s + 2 * l,
                        o.offsetHeight * s + 2 * l
                      )
              this.processBounce(r, c, d)
            })
        }
        processBounce(t, e, i) {
          const s = this.container.particles.quadTree.query(i)
          for (const r of s)
            i instanceof n.Circle
              ? (0, o.circleBounce)((0, o.circleBounceDataFromParticle)(r), {
                  position: t,
                  radius: e,
                  mass: (e ** 2 * Math.PI) / 2,
                  velocity: c.Vector.origin,
                  factor: c.Vector.origin,
                })
              : i instanceof a.Rectangle &&
                (0, o.rectBounce)(r, (0, o.calculateBounds)(t, e))
        }
      }
      e.Bouncer = l
    },
    54525: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalBounceInteraction = void 0)
      const o = i(63027)
      e.loadExternalBounceInteraction = async function (t) {
        await t.addInteractor('externalBounce', (t) => new o.Bouncer(t))
      }
    },
    53165: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Bubbler = void 0)
      const o = i(10931),
        n = i(28774),
        s = i(47912),
        r = i(15416),
        a = i(95078),
        c = i(9472),
        l = i(49261)
      function d(t, e, i, n) {
        if (e >= i) {
          const s = t + (e - i) * n
          return (0, o.clamp)(s, t, e)
        }
        if (e < i) {
          const s = t - (i - e) * n
          return (0, o.clamp)(s, e, t)
        }
      }
      class u extends c.ExternalInteractorBase {
        constructor(t) {
          super(t),
            t.bubble || (t.bubble = {}),
            (this.handleClickMode = (e) => {
              'bubble' === e &&
                (t.bubble || (t.bubble = {}), (t.bubble.clicking = !0))
            })
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            o = e.interactivity.events,
            n = o.onDiv,
            r = (0, s.isDivModeEnabled)('bubble', n)
          if (
            !(
              r ||
              (o.onHover.enable && i.position) ||
              (o.onClick.enable && i.clickPosition)
            )
          )
            return !1
          const a = o.onHover.mode,
            c = o.onClick.mode
          return (
            (0, s.isInArray)('bubble', a) || (0, s.isInArray)('bubble', c) || r
          )
        }
        reset(t, e) {
          ;(t.bubble.inRange && !e) ||
            (delete t.bubble.div,
            delete t.bubble.opacity,
            delete t.bubble.radius,
            delete t.bubble.color)
        }
        async interact() {
          const t = this.container.actualOptions.interactivity.events,
            e = t.onHover,
            i = t.onClick,
            o = e.enable,
            n = e.mode,
            r = i.enable,
            a = i.mode,
            c = t.onDiv
          o && (0, s.isInArray)('bubble', n)
            ? this.hoverBubble()
            : r && (0, s.isInArray)('bubble', a)
            ? this.clickBubble()
            : (0, s.divModeExecute)('bubble', c, (t, e) =>
                this.singleSelectorHover(t, e)
              )
        }
        singleSelectorHover(t, e) {
          const i = this.container,
            o = document.querySelectorAll(t)
          o.length &&
            o.forEach((t) => {
              const o = t,
                n = i.retina.pixelRatio,
                a = {
                  x: (o.offsetLeft + o.offsetWidth / 2) * n,
                  y: (o.offsetTop + o.offsetHeight / 2) * n,
                },
                c = (o.offsetWidth / 2) * n,
                d =
                  'circle' === e.type
                    ? new r.Circle(a.x, a.y, c)
                    : new l.Rectangle(
                        o.offsetLeft * n,
                        o.offsetTop * n,
                        o.offsetWidth * n,
                        o.offsetHeight * n
                      ),
                u = i.particles.quadTree.query(d)
              for (const e of u) {
                if (!d.contains(e.getPosition())) continue
                e.bubble.inRange = !0
                const t = i.actualOptions.interactivity.modes.bubble.divs,
                  n = (0, s.divMode)(t, o)
                ;(e.bubble.div && e.bubble.div === o) ||
                  (this.reset(e, !0), (e.bubble.div = o)),
                  this.hoverBubbleSize(e, 1, n),
                  this.hoverBubbleOpacity(e, 1, n),
                  this.hoverBubbleColor(e, 1, n)
              }
            })
        }
        process(t, e, i, o) {
          const n = this.container,
            s = o.bubbleObj.optValue
          if (void 0 === s) return
          const r = n.actualOptions.interactivity.modes.bubble.duration,
            a = n.retina.bubbleModeDistance,
            c = o.particlesObj.optValue,
            l = o.bubbleObj.value,
            d = o.particlesObj.value || 0,
            u = o.type
          if (s !== c)
            if ((n.bubble || (n.bubble = {}), n.bubble.durationEnd))
              l &&
                ('size' === u && delete t.bubble.radius,
                'opacity' === u && delete t.bubble.opacity)
            else if (e <= a) {
              if ((null !== l && void 0 !== l ? l : d) !== s) {
                const e = d - (i * (d - s)) / r
                'size' === u && (t.bubble.radius = e),
                  'opacity' === u && (t.bubble.opacity = e)
              }
            } else
              'size' === u && delete t.bubble.radius,
                'opacity' === u && delete t.bubble.opacity
        }
        clickBubble() {
          var t, e
          const i = this.container,
            n = i.actualOptions,
            s = i.interactivity.mouse.clickPosition
          if (!s) return
          i.bubble || (i.bubble = {})
          const r = i.retina.bubbleModeDistance,
            a = i.particles.quadTree.queryCircle(s, r)
          for (const c of a) {
            if (!i.bubble.clicking) continue
            c.bubble.inRange = !i.bubble.durationEnd
            const r = c.getPosition(),
              a = (0, o.getDistance)(r, s),
              l =
                (new Date().getTime() -
                  (i.interactivity.mouse.clickTime || 0)) /
                1e3
            l > n.interactivity.modes.bubble.duration &&
              (i.bubble.durationEnd = !0),
              l > 2 * n.interactivity.modes.bubble.duration &&
                ((i.bubble.clicking = !1), (i.bubble.durationEnd = !1))
            const d = {
              bubbleObj: {
                optValue: i.retina.bubbleModeSize,
                value: c.bubble.radius,
              },
              particlesObj: {
                optValue:
                  (0, o.getRangeMax)(c.options.size.value) *
                  i.retina.pixelRatio,
                value: c.size.value,
              },
              type: 'size',
            }
            this.process(c, a, l, d)
            const u = {
              bubbleObj: {
                optValue: n.interactivity.modes.bubble.opacity,
                value: c.bubble.opacity,
              },
              particlesObj: {
                optValue: (0, o.getRangeMax)(c.options.opacity.value),
                value:
                  null !==
                    (e =
                      null === (t = c.opacity) || void 0 === t
                        ? void 0
                        : t.value) && void 0 !== e
                    ? e
                    : 1,
              },
              type: 'opacity',
            }
            this.process(c, a, l, u),
              i.bubble.durationEnd
                ? delete c.bubble.color
                : a <= i.retina.bubbleModeDistance
                ? this.hoverBubbleColor(c, a)
                : delete c.bubble.color
          }
        }
        hoverBubble() {
          const t = this.container,
            e = t.interactivity.mouse.position
          if (void 0 === e) return
          const i = t.retina.bubbleModeDistance,
            n = t.particles.quadTree.queryCircle(e, i)
          for (const s of n) {
            s.bubble.inRange = !0
            const n = s.getPosition(),
              r = (0, o.getDistance)(n, e),
              c = 1 - r / i
            r <= i
              ? c >= 0 &&
                t.interactivity.status === a.Constants.mouseMoveEvent &&
                (this.hoverBubbleSize(s, c),
                this.hoverBubbleOpacity(s, c),
                this.hoverBubbleColor(s, c))
              : this.reset(s),
              t.interactivity.status === a.Constants.mouseLeaveEvent &&
                this.reset(s)
          }
        }
        hoverBubbleSize(t, e, i) {
          const n = this.container,
            s = (null === i || void 0 === i ? void 0 : i.size)
              ? i.size * n.retina.pixelRatio
              : n.retina.bubbleModeSize
          if (void 0 === s) return
          const r =
              (0, o.getRangeMax)(t.options.size.value) * n.retina.pixelRatio,
            a = d(t.size.value, s, r, e)
          void 0 !== a && (t.bubble.radius = a)
        }
        hoverBubbleOpacity(t, e, i) {
          var n, s, r
          const a = this.container.actualOptions,
            c =
              null !== (n = null === i || void 0 === i ? void 0 : i.opacity) &&
              void 0 !== n
                ? n
                : a.interactivity.modes.bubble.opacity
          if (!c) return
          const l = t.options.opacity.value,
            u = d(
              null !==
                (r =
                  null === (s = t.opacity) || void 0 === s
                    ? void 0
                    : s.value) && void 0 !== r
                ? r
                : 1,
              c,
              (0, o.getRangeMax)(l),
              e
            )
          void 0 !== u && (t.bubble.opacity = u)
        }
        hoverBubbleColor(t, e, i) {
          const o = this.container.actualOptions,
            r = null !== i && void 0 !== i ? i : o.interactivity.modes.bubble
          if (!t.bubble.finalColor) {
            const e = r.color
            if (!e) return
            const i = e instanceof Array ? (0, s.itemFromArray)(e) : e
            t.bubble.finalColor = (0, n.colorToHsl)(i)
          }
          if (t.bubble.finalColor)
            if (r.mix) {
              t.bubble.color = void 0
              const i = t.getFillColor()
              t.bubble.color = i
                ? (0, n.rgbToHsl)(
                    (0, n.colorMix)(i, t.bubble.finalColor, 1 - e, e)
                  )
                : t.bubble.finalColor
            } else t.bubble.color = t.bubble.finalColor
        }
      }
      e.Bubbler = u
    },
    55900: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalBubbleInteraction = void 0)
      const o = i(53165)
      e.loadExternalBubbleInteraction = async function (t) {
        await t.addInteractor('externalBubble', (t) => new o.Bubbler(t))
      }
    },
    81443: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Connector = void 0)
      const o = i(9472),
        n = i(47912)
      class s extends o.ExternalInteractorBase {
        constructor(t) {
          super(t)
        }
        isEnabled() {
          const t = this.container,
            e = t.interactivity.mouse,
            i = t.actualOptions.interactivity.events
          return (
            !(!i.onHover.enable || !e.position) &&
            (0, n.isInArray)('connect', i.onHover.mode)
          )
        }
        reset() {}
        async interact() {
          const t = this.container
          if (
            t.actualOptions.interactivity.events.onHover.enable &&
            'mousemove' === t.interactivity.status
          ) {
            const e = t.interactivity.mouse.position
            if (!e) return
            const i = Math.abs(t.retina.connectModeRadius),
              o = t.particles.quadTree.queryCircle(e, i)
            let n = 0
            for (const s of o) {
              const e = s.getPosition()
              for (const i of o.slice(n + 1)) {
                const o = i.getPosition(),
                  n = Math.abs(t.retina.connectModeDistance),
                  r = Math.abs(e.x - o.x),
                  a = Math.abs(e.y - o.y)
                r < n && a < n && t.canvas.drawConnectLine(s, i)
              }
              ++n
            }
          }
        }
      }
      e.Connector = s
    },
    27888: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalConnectInteraction = void 0)
      const o = i(81443)
      e.loadExternalConnectInteraction = async function (t) {
        await t.addInteractor('externalConnect', (t) => new o.Connector(t))
      }
    },
    66983: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Grabber = void 0)
      const o = i(28774),
        n = i(95078),
        s = i(9472),
        r = i(10931),
        a = i(47912)
      class c extends s.ExternalInteractorBase {
        constructor(t) {
          super(t)
        }
        isEnabled() {
          const t = this.container,
            e = t.interactivity.mouse,
            i = t.actualOptions.interactivity.events
          return (
            i.onHover.enable &&
            !!e.position &&
            (0, a.isInArray)('grab', i.onHover.mode)
          )
        }
        reset() {}
        async interact() {
          var t
          const e = this.container,
            i = e.actualOptions,
            s = i.interactivity
          if (
            !s.events.onHover.enable ||
            e.interactivity.status !== n.Constants.mouseMoveEvent
          )
            return
          const a = e.interactivity.mouse.position
          if (!a) return
          const c = e.retina.grabModeDistance,
            l = e.particles.quadTree.queryCircle(a, c)
          for (const n of l) {
            const l = n.getPosition(),
              d = (0, r.getDistance)(l, a)
            if (d > c) continue
            const u = s.modes.grab.links,
              h = u.opacity,
              p = h - (d * h) / c
            if (p <= 0) continue
            const v =
              null !== (t = u.color) && void 0 !== t ? t : n.options.links.color
            if (!e.particles.grabLineColor) {
              const t = i.interactivity.modes.grab.links
              e.particles.grabLineColor = (0, o.getLinkRandomColor)(
                v,
                t.blink,
                t.consent
              )
            }
            const f = (0, o.getLinkColor)(n, void 0, e.particles.grabLineColor)
            if (!f) return
            e.canvas.drawGrabLine(n, f, p, a)
          }
        }
      }
      e.Grabber = c
    },
    77007: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalGrabInteraction = void 0)
      const o = i(66983)
      e.loadExternalGrabInteraction = async function (t) {
        await t.addInteractor('externalGrab', (t) => new o.Grabber(t))
      }
    },
    90547: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Pauser = void 0)
      const o = i(9472)
      class n extends o.ExternalInteractorBase {
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              if ('pause' !== t) return
              const e = this.container
              e.getAnimationStatus() ? e.pause() : e.play()
            })
        }
        isEnabled() {
          return !0
        }
        reset() {}
        async interact() {}
      }
      e.Pauser = n
    },
    32690: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalPauseInteraction = void 0)
      const o = i(90547)
      e.loadExternalPauseInteraction = async function (t) {
        await t.addInteractor('externalPause', (t) => new o.Pauser(t))
      }
    },
    76347: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Pusher = void 0)
      const o = i(9472),
        n = i(47912)
      class s extends o.ExternalInteractorBase {
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              if ('push' !== t) return
              const e = this.container,
                i = e.actualOptions,
                o = i.interactivity.modes.push.quantity
              if (o <= 0) return
              const s = i.interactivity.modes.push,
                r = (0, n.itemFromArray)([void 0, ...s.groups]),
                a = void 0 !== r ? e.actualOptions.particles.groups[r] : void 0
              e.particles.push(o, e.interactivity.mouse, a, r)
            })
        }
        isEnabled() {
          return !0
        }
        reset() {}
        async interact() {}
      }
      e.Pusher = s
    },
    90221: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalPushInteraction = void 0)
      const o = i(76347)
      e.loadExternalPushInteraction = async function (t) {
        await t.addInteractor('externalPush', (t) => new o.Pusher(t))
      }
    },
    4627: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Remover = void 0)
      const o = i(9472)
      class n extends o.ExternalInteractorBase {
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              if ('remove' !== t) return
              const e = this.container,
                i = e.actualOptions.interactivity.modes.remove.quantity
              e.particles.removeQuantity(i)
            })
        }
        isEnabled() {
          return !0
        }
        reset() {}
        async interact() {}
      }
      e.Remover = n
    },
    7539: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalRemoveInteraction = void 0)
      const o = i(4627)
      e.loadExternalRemoveInteraction = async function (t) {
        await t.addInteractor('externalRemove', (t) => new o.Remover(t))
      }
    },
    38703: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Repulser = void 0)
      const o = i(10931),
        n = i(47912),
        s = i(15416),
        r = i(95078),
        a = i(9472),
        c = i(49261),
        l = i(78779)
      class d extends a.ExternalInteractorBase {
        constructor(t) {
          super(t),
            t.repulse || (t.repulse = { particles: [] }),
            (this.handleClickMode = (e) => {
              const i = this.container.actualOptions
              if ('repulse' === e) {
                t.repulse || (t.repulse = { particles: [] }),
                  (t.repulse.clicking = !0),
                  (t.repulse.count = 0)
                for (const e of t.repulse.particles)
                  e.velocity.setTo(e.initialVelocity)
                ;(t.repulse.particles = []),
                  (t.repulse.finish = !1),
                  setTimeout(() => {
                    t.destroyed ||
                      (t.repulse || (t.repulse = { particles: [] }),
                      (t.repulse.clicking = !1))
                  }, 1e3 * i.interactivity.modes.repulse.duration)
              }
            })
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            o = e.interactivity.events,
            s = o.onDiv,
            r = (0, n.isDivModeEnabled)('repulse', s)
          if (
            !(
              r ||
              (o.onHover.enable && i.position) ||
              (o.onClick.enable && i.clickPosition)
            )
          )
            return !1
          const a = o.onHover.mode,
            c = o.onClick.mode
          return (
            (0, n.isInArray)('repulse', a) ||
            (0, n.isInArray)('repulse', c) ||
            r
          )
        }
        reset() {}
        async interact() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.status === r.Constants.mouseMoveEvent,
            o = e.interactivity.events,
            s = o.onHover.enable,
            a = o.onHover.mode,
            c = o.onClick.enable,
            l = o.onClick.mode,
            d = o.onDiv
          i && s && (0, n.isInArray)('repulse', a)
            ? this.hoverRepulse()
            : c && (0, n.isInArray)('repulse', l)
            ? this.clickRepulse()
            : (0, n.divModeExecute)('repulse', d, (t, e) =>
                this.singleSelectorRepulse(t, e)
              )
        }
        singleSelectorRepulse(t, e) {
          const i = this.container,
            o = document.querySelectorAll(t)
          o.length &&
            o.forEach((t) => {
              const o = t,
                r = i.retina.pixelRatio,
                a = {
                  x: (o.offsetLeft + o.offsetWidth / 2) * r,
                  y: (o.offsetTop + o.offsetHeight / 2) * r,
                },
                l = (o.offsetWidth / 2) * r,
                d =
                  'circle' === e.type
                    ? new s.Circle(a.x, a.y, l)
                    : new c.Rectangle(
                        o.offsetLeft * r,
                        o.offsetTop * r,
                        o.offsetWidth * r,
                        o.offsetHeight * r
                      ),
                u = i.actualOptions.interactivity.modes.repulse.divs,
                h = (0, n.divMode)(u, o)
              this.processRepulse(a, l, d, h)
            })
        }
        hoverRepulse() {
          const t = this.container,
            e = t.interactivity.mouse.position
          if (!e) return
          const i = t.retina.repulseModeDistance
          this.processRepulse(e, i, new s.Circle(e.x, e.y, i))
        }
        processRepulse(t, e, i, n) {
          var s
          const r = this.container,
            a = r.particles.quadTree.query(i),
            c = r.actualOptions.interactivity.modes.repulse
          for (const d of a) {
            const {
                dx: i,
                dy: r,
                distance: a,
              } = (0, o.getDistances)(d.position, t),
              u =
                (null !== (s = null === n || void 0 === n ? void 0 : n.speed) &&
                void 0 !== s
                  ? s
                  : c.speed) * c.factor,
              h = (0, o.clamp)(
                (0, o.calcEasing)(1 - a / e, c.easing) * u,
                0,
                c.maxSpeed
              ),
              p = l.Vector.create(
                0 === a ? u : (i / a) * h,
                0 === a ? u : (r / a) * h
              )
            d.position.addTo(p)
          }
        }
        clickRepulse() {
          const t = this.container
          if (
            (t.repulse || (t.repulse = { particles: [] }),
            t.repulse.finish ||
              (t.repulse.count || (t.repulse.count = 0),
              t.repulse.count++,
              t.repulse.count === t.particles.count && (t.repulse.finish = !0)),
            t.repulse.clicking)
          ) {
            const e = t.retina.repulseModeDistance,
              i = Math.pow(e / 6, 3),
              n = t.interactivity.mouse.clickPosition
            if (void 0 === n) return
            const r = new s.Circle(n.x, n.y, i),
              a = t.particles.quadTree.query(r)
            for (const s of a) {
              const {
                  dx: e,
                  dy: r,
                  distance: a,
                } = (0, o.getDistances)(n, s.position),
                c = a ** 2,
                d = t.actualOptions.interactivity.modes.repulse.speed,
                u = (-i * d) / c
              if (c <= i) {
                t.repulse.particles.push(s)
                const i = l.Vector.create(e, r)
                ;(i.length = u), s.velocity.setTo(i)
              }
            }
          } else if (!1 === t.repulse.clicking) {
            for (const e of t.repulse.particles)
              e.velocity.setTo(e.initialVelocity)
            t.repulse.particles = []
          }
        }
      }
      e.Repulser = d
    },
    60430: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalRepulseInteraction = void 0)
      const o = i(38703)
      e.loadExternalRepulseInteraction = async function (t) {
        await t.addInteractor('externalRepulse', (t) => new o.Repulser(t))
      }
    },
    63754: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TrailMaker = void 0)
      const o = i(9472),
        n = i(47912)
      class s extends o.ExternalInteractorBase {
        constructor(t) {
          super(t), (this.delay = 0)
        }
        async interact(t) {
          var e, i, o, n
          if (!this.container.retina.reduceFactor) return
          const s = this.container,
            r = s.actualOptions.interactivity.modes.trail,
            a = (1e3 * r.delay) / this.container.retina.reduceFactor
          if ((this.delay < a && (this.delay += t.value), this.delay < a))
            return
          let c = !0
          r.pauseOnStop &&
            (s.interactivity.mouse.position === this.lastPosition ||
              ((null === (e = s.interactivity.mouse.position) || void 0 === e
                ? void 0
                : e.x) ===
                (null === (i = this.lastPosition) || void 0 === i
                  ? void 0
                  : i.x) &&
                (null === (o = s.interactivity.mouse.position) || void 0 === o
                  ? void 0
                  : o.y) ===
                  (null === (n = this.lastPosition) || void 0 === n
                    ? void 0
                    : n.y))) &&
            (c = !1),
            s.interactivity.mouse.position
              ? (this.lastPosition = {
                  x: s.interactivity.mouse.position.x,
                  y: s.interactivity.mouse.position.y,
                })
              : delete this.lastPosition,
            c &&
              s.particles.push(r.quantity, s.interactivity.mouse, r.particles),
            (this.delay -= a)
        }
        isEnabled() {
          const t = this.container,
            e = t.actualOptions,
            i = t.interactivity.mouse,
            o = e.interactivity.events
          return (
            (i.clicking &&
              i.inside &&
              !!i.position &&
              (0, n.isInArray)('trail', o.onClick.mode)) ||
            (i.inside &&
              !!i.position &&
              (0, n.isInArray)('trail', o.onHover.mode))
          )
        }
        reset() {}
      }
      e.TrailMaker = s
    },
    95182: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadExternalTrailInteraction = void 0)
      const o = i(63754)
      e.loadExternalTrailInteraction = async function (t) {
        await t.addInteractor('externalTrail', (t) => new o.TrailMaker(t))
      }
    },
    41934: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Attractor = void 0)
      const o = i(13753),
        n = i(10931)
      class s extends o.ParticlesInteractorBase {
        constructor(t) {
          super(t)
        }
        async interact(t) {
          var e
          const i = this.container,
            o =
              null !== (e = t.retina.attractDistance) && void 0 !== e
                ? e
                : i.retina.attractDistance,
            s = t.getPosition(),
            r = i.particles.quadTree.queryCircle(s, o)
          for (const a of r) {
            if (
              t === a ||
              !a.options.move.attract.enable ||
              a.destroyed ||
              a.spawning
            )
              continue
            const e = a.getPosition(),
              { dx: i, dy: o } = (0, n.getDistances)(s, e),
              r = t.options.move.attract.rotate,
              c = i / (1e3 * r.x),
              l = o / (1e3 * r.y),
              d = a.size.value / t.size.value,
              u = 1 / d
            ;(t.velocity.x -= c * d),
              (t.velocity.y -= l * d),
              (a.velocity.x += c * u),
              (a.velocity.y += l * u)
          }
        }
        isEnabled(t) {
          return t.options.move.attract.enable
        }
        reset() {}
      }
      e.Attractor = s
    },
    97792: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadParticlesAttractInteraction = void 0)
      const o = i(41934)
      e.loadParticlesAttractInteraction = async function (t) {
        await t.addInteractor('particlesAttract', (t) => new o.Attractor(t))
      }
    },
    81448: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Collider = void 0)
      const o = i(47912),
        n = i(10931),
        s = i(13753)
      function r(t, e) {
        ;(0, o.circleBounce)(
          (0, o.circleBounceDataFromParticle)(t),
          (0, o.circleBounceDataFromParticle)(e)
        )
      }
      class a extends s.ParticlesInteractorBase {
        constructor(t) {
          super(t)
        }
        isEnabled(t) {
          return t.options.collisions.enable
        }
        reset() {}
        async interact(t) {
          const e = this.container,
            i = t.getPosition(),
            o = t.getRadius(),
            s = e.particles.quadTree.queryCircle(i, 2 * o)
          for (const r of s) {
            if (
              t === r ||
              !r.options.collisions.enable ||
              t.options.collisions.mode !== r.options.collisions.mode ||
              r.destroyed ||
              r.spawning
            )
              continue
            const e = r.getPosition()
            if (Math.round(i.z) !== Math.round(e.z)) continue
            ;(0, n.getDistance)(i, e) <= o + r.getRadius() &&
              this.resolveCollision(t, r)
          }
        }
        resolveCollision(t, e) {
          switch (t.options.collisions.mode) {
            case 'absorb':
              this.absorb(t, e)
              break
            case 'bounce':
              r(t, e)
              break
            case 'destroy':
              !(function (t, e) {
                t.unbreakable || e.unbreakable || r(t, e),
                  void 0 === t.getRadius() && void 0 !== e.getRadius()
                    ? t.destroy()
                    : void 0 !== t.getRadius() && void 0 === e.getRadius()
                    ? e.destroy()
                    : void 0 !== t.getRadius() &&
                      void 0 !== e.getRadius() &&
                      (t.getRadius() >= e.getRadius()
                        ? e.destroy()
                        : t.destroy())
              })(t, e)
          }
        }
        absorb(t, e) {
          const i = this.container,
            o = i.fpsLimit / 1e3
          if (void 0 === t.getRadius() && void 0 !== e.getRadius()) t.destroy()
          else if (void 0 !== t.getRadius() && void 0 === e.getRadius())
            e.destroy()
          else if (void 0 !== t.getRadius() && void 0 !== e.getRadius())
            if (t.getRadius() >= e.getRadius()) {
              const s =
                (0, n.clamp)(t.getRadius() / e.getRadius(), 0, e.getRadius()) *
                o
              ;(t.size.value += s),
                (e.size.value -= s),
                e.getRadius() <= i.retina.pixelRatio &&
                  ((e.size.value = 0), e.destroy())
            } else {
              const s =
                (0, n.clamp)(e.getRadius() / t.getRadius(), 0, t.getRadius()) *
                o
              ;(t.size.value -= s),
                (e.size.value += s),
                t.getRadius() <= i.retina.pixelRatio &&
                  ((t.size.value = 0), t.destroy())
            }
        }
      }
      e.Collider = a
    },
    74968: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadParticlesCollisionsInteraction = void 0)
      const o = i(81448)
      e.loadParticlesCollisionsInteraction = async function (t) {
        await t.addInteractor('particlesCollisions', (t) => new o.Collider(t))
      }
    },
    92276: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LinkInstance = void 0)
      const o = i(28774),
        n = i(61475),
        s = i(10931)
      e.LinkInstance = class {
        constructor(t) {
          this.container = t
        }
        particleCreated(t) {
          t.links = []
        }
        particleDestroyed(t) {
          t.links = []
        }
        drawParticle(t, e) {
          const i = e,
            o = this.container,
            n = o.particles,
            s = e.options
          if (i.links.length <= 0) return
          t.save()
          const r = i.links.filter(
            (t) =>
              o.particles.getLinkFrequency(i, t.destination) <=
              s.links.frequency
          )
          for (const a of r) {
            const t = a.destination
            if (s.links.triangles.enable) {
              const e = r.map((t) => t.destination),
                c = t.links.filter(
                  (i) =>
                    o.particles.getLinkFrequency(t, i.destination) <=
                      t.options.links.frequency && e.indexOf(i.destination) >= 0
                )
              if (c.length)
                for (const o of c) {
                  const e = o.destination
                  n.getTriangleFrequency(i, t, e) >
                    s.links.triangles.frequency ||
                    this.drawLinkTriangle(i, a, o)
                }
            }
            a.opacity > 0 && o.retina.linksWidth > 0 && this.drawLinkLine(i, a)
          }
          t.restore()
        }
        drawLinkTriangle(t, e, i) {
          var r
          const a = this.container,
            c = a.actualOptions,
            l = e.destination,
            d = i.destination,
            u = t.options.links.triangles,
            h =
              null !== (r = u.opacity) && void 0 !== r
                ? r
                : (e.opacity + i.opacity) / 2
          if (h <= 0) return
          const p = t.getPosition(),
            v = l.getPosition(),
            f = d.getPosition()
          a.canvas.draw((e) => {
            if (
              (0, s.getDistance)(p, v) > a.retina.linksDistance ||
              (0, s.getDistance)(f, v) > a.retina.linksDistance ||
              (0, s.getDistance)(f, p) > a.retina.linksDistance
            )
              return
            let i = (0, o.colorToRgb)(u.color)
            if (!i) {
              const e = t.options.links,
                n =
                  void 0 !== e.id
                    ? a.particles.linksColors.get(e.id)
                    : a.particles.linksColor
              i = (0, o.getLinkColor)(t, l, n)
            }
            i &&
              (0, n.drawLinkTriangle)(
                e,
                p,
                v,
                f,
                c.backgroundMask.enable,
                c.backgroundMask.composite,
                i,
                h
              )
          })
        }
        drawLinkLine(t, e) {
          const i = this.container,
            r = i.actualOptions,
            a = e.destination,
            c = t.getPosition(),
            l = a.getPosition()
          let d = e.opacity
          i.canvas.draw((e) => {
            var u, h
            let p
            const v = t.options.twinkle.lines
            if (v.enable) {
              const t = v.frequency,
                e = (0, o.colorToRgb)(v.color)
              Math.random() < t &&
                e &&
                ((p = e), (d = (0, s.getRangeValue)(v.opacity)))
            }
            if (!p) {
              const e = t.options.links,
                n =
                  void 0 !== e.id
                    ? i.particles.linksColors.get(e.id)
                    : i.particles.linksColor
              p = (0, o.getLinkColor)(t, a, n)
            }
            if (!p) return
            const f =
                null !== (u = t.retina.linksWidth) && void 0 !== u
                  ? u
                  : i.retina.linksWidth,
              y =
                null !== (h = t.retina.linksDistance) && void 0 !== h
                  ? h
                  : i.retina.linksDistance
            ;(0, n.drawLinkLine)(
              e,
              f,
              c,
              l,
              y,
              i.canvas.size,
              t.options.links.warp,
              r.backgroundMask.enable,
              r.backgroundMask.composite,
              p,
              d,
              t.options.links.shadow
            )
          })
        }
      }
    },
    2508: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Linker = void 0)
      const o = i(15416),
        n = i(12752),
        s = i(13753),
        r = i(10931),
        a = i(28774)
      function c(t, e, i, o, n) {
        let s = (0, r.getDistance)(t, e)
        if (!n || s <= i) return s
        const a = { x: e.x - o.width, y: e.y }
        if (((s = (0, r.getDistance)(t, a)), s <= i)) return s
        const c = { x: e.x - o.width, y: e.y - o.height }
        if (((s = (0, r.getDistance)(t, c)), s <= i)) return s
        const l = { x: e.x, y: e.y - o.height }
        return (s = (0, r.getDistance)(t, l)), s
      }
      class l extends s.ParticlesInteractorBase {
        constructor(t) {
          super(t)
        }
        isEnabled(t) {
          return t.options.links.enable
        }
        reset() {}
        async interact(t) {
          var e
          t.links = []
          const i = t.getPosition(),
            s = this.container,
            r = s.canvas.size
          if (i.x < 0 || i.y < 0 || i.x > r.width || i.y > r.height) return
          const a = t.options.links,
            l = a.opacity,
            d =
              null !== (e = t.retina.linksDistance) && void 0 !== e
                ? e
                : s.retina.linksDistance,
            u = a.warp,
            h = u
              ? new n.CircleWarp(i.x, i.y, d, r)
              : new o.Circle(i.x, i.y, d),
            p = s.particles.quadTree.query(h)
          for (const o of p) {
            const e = o.options.links
            if (
              t === o ||
              !e.enable ||
              a.id !== e.id ||
              o.spawning ||
              o.destroyed ||
              -1 !== t.links.map((t) => t.destination).indexOf(o) ||
              -1 !== o.links.map((t) => t.destination).indexOf(t)
            )
              continue
            const n = o.getPosition()
            if (n.x < 0 || n.y < 0 || n.x > r.width || n.y > r.height) continue
            const s = c(i, n, d, r, u && e.warp)
            if (s > d) return
            const h = (1 - s / d) * l
            this.setColor(t), t.links.push({ destination: o, opacity: h })
          }
        }
        setColor(t) {
          const e = this.container,
            i = t.options.links
          let o =
            void 0 === i.id
              ? e.particles.linksColor
              : e.particles.linksColors.get(i.id)
          if (!o) {
            const t = i.color
            ;(o = (0, a.getLinkRandomColor)(t, i.blink, i.consent)),
              void 0 === i.id
                ? (e.particles.linksColor = o)
                : e.particles.linksColors.set(i.id, o)
          }
        }
      }
      e.Linker = l
    },
    2664: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadParticlesLinksInteraction = void 0)
      const o = i(95779),
        n = i(67946)
      e.loadParticlesLinksInteraction = async function (t) {
        await (0, o.loadInteraction)(t), await (0, n.loadPlugin)(t)
      }
    },
    95779: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadInteraction = void 0)
      const o = i(2508)
      e.loadInteraction = async function (t) {
        await t.addInteractor('particlesLinks', (t) => new o.Linker(t))
      }
    },
    67946: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadPlugin = void 0)
      const o = i(92276)
      class n {
        constructor() {
          this.id = 'links'
        }
        getPlugin(t) {
          return new o.LinkInstance(t)
        }
        needsPlugin() {
          return !0
        }
        loadOptions() {}
      }
      e.loadPlugin = async function (t) {
        const e = new n()
        await t.addPlugin(e)
      }
    },
    27176: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.BaseMover = void 0)
      const o = i(37879),
        n = i(10931)
      e.BaseMover = class {
        init(t) {
          var e
          const i = t.container,
            o = t.options.move.spin
          if (o.enable) {
            const s =
                null !== (e = o.position) && void 0 !== e
                  ? e
                  : { x: 50, y: 50 },
              r = {
                x: (s.x / 100) * i.canvas.size.width,
                y: (s.y / 100) * i.canvas.size.height,
              },
              a = t.getPosition(),
              c = (0, n.getDistance)(a, r),
              l = (0, n.getRangeValue)(o.acceleration)
            ;(t.retina.spinAcceleration = l * i.retina.pixelRatio),
              (t.spin = {
                center: r,
                direction:
                  t.velocity.x >= 0 ? 'clockwise' : 'counter-clockwise',
                angle: t.velocity.angle,
                radius: c,
                acceleration: t.retina.spinAcceleration,
              })
          }
        }
        isEnabled(t) {
          return !t.destroyed && t.options.move.enable
        }
        move(t, e) {
          var i, s, r, a, c
          const l = t.options,
            d = l.move
          if (!d.enable) return
          const u = t.container,
            h = (0, o.getProximitySpeedFactor)(t),
            p =
              (null !== (i = (a = t.retina).moveSpeed) && void 0 !== i
                ? i
                : (a.moveSpeed =
                    (0, n.getRangeValue)(d.speed) * u.retina.pixelRatio)) *
              u.retina.reduceFactor,
            v =
              null !== (s = (c = t.retina).moveDrift) && void 0 !== s
                ? s
                : (c.moveDrift =
                    (0, n.getRangeValue)(t.options.move.drift) *
                    u.retina.pixelRatio),
            f = (0, n.getRangeMax)(l.size.value) * u.retina.pixelRatio,
            y =
              (p * ((d.size ? t.getRadius() / f : 1) * h * (e.factor || 1))) / 2
          ;(0, o.applyPath)(t, e)
          const g = t.gravity,
            b = g.enable && g.inverse ? -1 : 1
          g.enable &&
            y &&
            (t.velocity.y += (b * (g.acceleration * e.factor)) / (60 * y)),
            v && y && (t.velocity.x += (v * e.factor) / (60 * y))
          const m = t.moveDecay
          1 != m && t.velocity.multTo(m)
          const w = t.velocity.mult(y),
            _ =
              null !== (r = t.retina.maxSpeed) && void 0 !== r
                ? r
                : u.retina.maxSpeed
          g.enable &&
            _ > 0 &&
            ((!g.inverse && w.y >= 0 && w.y >= _) ||
              (g.inverse && w.y <= 0 && w.y <= -_)) &&
            ((w.y = b * _), y && (t.velocity.y = w.y / y))
          const S = t.options.zIndex,
            P = (1 - t.zIndexFactor) ** S.velocityRate
          d.spin.enable
            ? (0, o.spin)(t, y)
            : (1 != P && w.multTo(P),
              t.position.addTo(w),
              d.vibrate &&
                ((t.position.x += Math.sin(
                  t.position.x * Math.cos(t.position.y)
                )),
                (t.position.y += Math.cos(
                  t.position.y * Math.sin(t.position.x)
                )))),
            (0, o.applyDistance)(t)
        }
      }
    },
    37879: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getProximitySpeedFactor =
          e.applyPath =
          e.spin =
          e.applyDistance =
            void 0)
      const o = i(10931),
        n = i(47912)
      ;(e.applyDistance = function (t) {
        const e = t.initialPosition,
          { dx: i, dy: n } = (0, o.getDistances)(e, t.position),
          s = Math.abs(i),
          r = Math.abs(n),
          a = t.retina.maxDistance.horizontal,
          c = t.retina.maxDistance.vertical
        if (a || c)
          if (((a && s >= a) || (c && r >= c)) && !t.misplaced)
            (t.misplaced = (!!a && s > a) || (!!c && r > c)),
              a && (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
              c && (t.velocity.y = t.velocity.x / 2 - t.velocity.y)
          else if ((!a || s < a) && (!c || r < c) && t.misplaced)
            t.misplaced = !1
          else if (t.misplaced) {
            const i = t.position,
              o = t.velocity
            a &&
              ((i.x < e.x && o.x < 0) || (i.x > e.x && o.x > 0)) &&
              (o.x *= -Math.random()),
              c &&
                ((i.y < e.y && o.y < 0) || (i.y > e.y && o.y > 0)) &&
                (o.y *= -Math.random())
          }
      }),
        (e.spin = function (t, e) {
          const i = t.container
          if (!t.spin) return
          const o = {
            x: 'clockwise' === t.spin.direction ? Math.cos : Math.sin,
            y: 'clockwise' === t.spin.direction ? Math.sin : Math.cos,
          }
          ;(t.position.x = t.spin.center.x + t.spin.radius * o.x(t.spin.angle)),
            (t.position.y =
              t.spin.center.y + t.spin.radius * o.y(t.spin.angle)),
            (t.spin.radius += t.spin.acceleration)
          const n = Math.max(i.canvas.size.width, i.canvas.size.height)
          t.spin.radius > n / 2
            ? ((t.spin.radius = n / 2), (t.spin.acceleration *= -1))
            : t.spin.radius < 0 &&
              ((t.spin.radius = 0), (t.spin.acceleration *= -1)),
            (t.spin.angle += (e / 100) * (1 - t.spin.radius / n))
        }),
        (e.applyPath = function (t, e) {
          const i = t.options.move.path
          if (!i.enable) return
          const n = t.container
          if (t.lastPathTime <= t.pathDelay)
            return void (t.lastPathTime += e.value)
          const s = n.pathGenerator.generate(t)
          t.velocity.addTo(s),
            i.clamp &&
              ((t.velocity.x = (0, o.clamp)(t.velocity.x, -1, 1)),
              (t.velocity.y = (0, o.clamp)(t.velocity.y, -1, 1))),
            (t.lastPathTime -= t.pathDelay)
        }),
        (e.getProximitySpeedFactor = function (t) {
          const e = t.container,
            i = e.actualOptions
          if (!(0, n.isInArray)('slow', i.interactivity.events.onHover.mode))
            return 1
          const s = t.container.interactivity.mouse.position
          if (!s) return 1
          const r = t.getPosition(),
            a = (0, o.getDistance)(s, r),
            c = e.retina.slowModeRadius
          return a > c ? 1 : (a / c || 0) / i.interactivity.modes.slow.factor
        })
    },
    5493: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadBaseMover = void 0)
      const o = i(27176)
      e.loadBaseMover = async function (t) {
        t.addMover('base', () => new o.BaseMover())
      }
    },
    1673: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ParallaxMover = void 0)
      const o = i(47912)
      e.ParallaxMover = class {
        init() {}
        isEnabled(t) {
          return (
            !(0, o.isSsr)() &&
            !t.destroyed &&
            t.container.actualOptions.interactivity.events.onHover.parallax
              .enable
          )
        }
        move(t) {
          const e = t.container,
            i = e.actualOptions
          if ((0, o.isSsr)() || !i.interactivity.events.onHover.parallax.enable)
            return
          const n = i.interactivity.events.onHover.parallax.force,
            s = e.interactivity.mouse.position
          if (!s) return
          const r = e.canvas.size.width / 2,
            a = e.canvas.size.height / 2,
            c = i.interactivity.events.onHover.parallax.smooth,
            l = t.getRadius() / n,
            d = (s.x - r) * l,
            u = (s.y - a) * l
          ;(t.offset.x += (d - t.offset.x) / c),
            (t.offset.y += (u - t.offset.y) / c)
        }
      }
    },
    74130: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadParallaxMover = void 0)
      const o = i(1673)
      e.loadParallaxMover = async function (t) {
        t.addMover('parallax', () => new o.ParallaxMover())
      }
    },
    47097: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AnimatableColor = void 0)
      const o = i(46498),
        n = i(90822)
      class s extends n.OptionsColor {
        constructor() {
          super(), (this.animation = new o.HslAnimation())
        }
        static create(t, e) {
          const i = new s()
          return (
            i.load(t),
            void 0 !== e &&
              ('string' === typeof e || e instanceof Array
                ? i.load({ value: e })
                : i.load(e)),
            i
          )
        }
        load(t) {
          if ((super.load(t), !t)) return
          const e = t.animation
          void 0 !== e &&
            (void 0 !== e.enable
              ? this.animation.h.load(e)
              : this.animation.load(t.animation))
        }
      }
      e.AnimatableColor = s
    },
    46541: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.GradientColorOpacityAnimation =
          e.GradientAngleAnimation =
          e.AnimatableGradientColor =
          e.GradientColorOpacity =
          e.GradientAngle =
          e.AnimatableGradient =
            void 0)
      const o = i(47097),
        n = i(10931)
      e.AnimatableGradient = class {
        constructor() {
          ;(this.angle = new s()), (this.colors = []), (this.type = 'random')
        }
        load(t) {
          t &&
            (this.angle.load(t.angle),
            void 0 !== t.colors &&
              (this.colors = t.colors.map((t) => {
                const e = new a()
                return e.load(t), e
              })),
            void 0 !== t.type && (this.type = t.type))
        }
      }
      class s {
        constructor() {
          ;(this.value = 0),
            (this.animation = new c()),
            (this.direction = 'clockwise')
        }
        load(t) {
          t &&
            (this.animation.load(t.animation),
            void 0 !== t.value && (this.value = t.value),
            void 0 !== t.direction && (this.direction = t.direction))
        }
      }
      e.GradientAngle = s
      class r {
        constructor() {
          ;(this.value = 0), (this.animation = new l())
        }
        load(t) {
          t &&
            (this.animation.load(t.animation),
            void 0 !== t.value && (this.value = (0, n.setRangeValue)(t.value)))
        }
      }
      e.GradientColorOpacity = r
      class a {
        constructor() {
          ;(this.stop = 0), (this.value = new o.AnimatableColor())
        }
        load(t) {
          t &&
            (void 0 !== t.stop && (this.stop = t.stop),
            (this.value = o.AnimatableColor.create(this.value, t.value)),
            void 0 !== t.opacity &&
              ((this.opacity = new r()),
              'number' === typeof t.opacity
                ? (this.opacity.value = t.opacity)
                : this.opacity.load(t.opacity)))
        }
      }
      e.AnimatableGradientColor = a
      class c {
        constructor() {
          ;(this.count = 0),
            (this.enable = !1),
            (this.speed = 0),
            (this.sync = !1)
        }
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = (0, n.setRangeValue)(t.count)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, n.setRangeValue)(t.speed)),
            void 0 !== t.sync && (this.sync = t.sync))
        }
      }
      e.GradientAngleAnimation = c
      class l {
        constructor() {
          ;(this.count = 0),
            (this.enable = !1),
            (this.speed = 0),
            (this.sync = !1),
            (this.startValue = 'random')
        }
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = (0, n.setRangeValue)(t.count)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, n.setRangeValue)(t.speed)),
            void 0 !== t.sync && (this.sync = t.sync),
            void 0 !== t.startValue && (this.startValue = t.startValue))
        }
      }
      e.GradientColorOpacityAnimation = l
    },
    86497: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AnimationOptions = void 0)
      const o = i(10931)
      e.AnimationOptions = class {
        constructor() {
          ;(this.count = 0),
            (this.enable = !1),
            (this.speed = 1),
            (this.sync = !1)
        }
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = (0, o.setRangeValue)(t.count)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, o.setRangeValue)(t.speed)),
            void 0 !== t.sync && (this.sync = t.sync))
        }
      }
    },
    50882: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Background = void 0)
      const o = i(90822)
      e.Background = class {
        constructor() {
          ;(this.color = new o.OptionsColor()),
            (this.color.value = ''),
            (this.image = ''),
            (this.position = ''),
            (this.repeat = ''),
            (this.size = ''),
            (this.opacity = 1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.image && (this.image = t.image),
            void 0 !== t.position && (this.position = t.position),
            void 0 !== t.repeat && (this.repeat = t.repeat),
            void 0 !== t.size && (this.size = t.size),
            void 0 !== t.opacity && (this.opacity = t.opacity))
        }
      }
    },
    79212: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.BackgroundMask = void 0)
      const o = i(60759)
      e.BackgroundMask = class {
        constructor() {
          ;(this.composite = 'destination-out'),
            (this.cover = new o.BackgroundMaskCover()),
            (this.enable = !1)
        }
        load(t) {
          if (void 0 !== t) {
            if (
              (void 0 !== t.composite && (this.composite = t.composite),
              void 0 !== t.cover)
            ) {
              const e = t.cover,
                i = 'string' === typeof t.cover ? { color: t.cover } : t.cover
              this.cover.load(void 0 !== e.color ? e : { color: i })
            }
            void 0 !== t.enable && (this.enable = t.enable)
          }
        }
      }
    },
    60759: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.BackgroundMaskCover = void 0)
      const o = i(90822)
      e.BackgroundMaskCover = class {
        constructor() {
          ;(this.color = new o.OptionsColor()), (this.opacity = 1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.opacity && (this.opacity = t.opacity))
        }
      }
    },
    77794: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ColorAnimation = void 0)
      const o = i(10931)
      e.ColorAnimation = class {
        constructor() {
          ;(this.count = 0),
            (this.enable = !1),
            (this.offset = 0),
            (this.speed = 1),
            (this.sync = !0)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.count && (this.count = (0, o.setRangeValue)(t.count)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.offset &&
              (this.offset = (0, o.setRangeValue)(t.offset)),
            void 0 !== t.speed && (this.speed = (0, o.setRangeValue)(t.speed)),
            void 0 !== t.sync && (this.sync = t.sync))
        }
      }
    },
    65475: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.FullScreen = void 0)
      e.FullScreen = class {
        constructor() {
          ;(this.enable = !0), (this.zIndex = 0)
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.zIndex && (this.zIndex = t.zIndex))
        }
      }
    },
    46498: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.HslAnimation = void 0)
      const o = i(77794)
      e.HslAnimation = class {
        constructor() {
          ;(this.h = new o.ColorAnimation()),
            (this.s = new o.ColorAnimation()),
            (this.l = new o.ColorAnimation())
        }
        load(t) {
          t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l))
        }
      }
    },
    50659: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ClickEvent = void 0)
      e.ClickEvent = class {
        constructor() {
          ;(this.enable = !1), (this.mode = [])
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode))
        }
      }
    },
    81330: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.DivEvent = void 0)
      e.DivEvent = class {
        constructor() {
          ;(this.selectors = []),
            (this.enable = !1),
            (this.mode = []),
            (this.type = 'circle')
        }
        get elementId() {
          return this.ids
        }
        set elementId(t) {
          this.ids = t
        }
        get el() {
          return this.elementId
        }
        set el(t) {
          this.elementId = t
        }
        get ids() {
          return this.selectors instanceof Array
            ? this.selectors.map((t) => t.replace('#', ''))
            : this.selectors.replace('#', '')
        }
        set ids(t) {
          this.selectors = t instanceof Array ? t.map((t) => `#${t}`) : `#${t}`
        }
        load(t) {
          var e, i
          if (void 0 === t) return
          const o =
            null !==
              (i = null !== (e = t.ids) && void 0 !== e ? e : t.elementId) &&
            void 0 !== i
              ? i
              : t.el
          void 0 !== o && (this.ids = o),
            void 0 !== t.selectors && (this.selectors = t.selectors),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.type && (this.type = t.type)
        }
      }
    },
    89552: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Events = void 0)
      const o = i(50659),
        n = i(81330),
        s = i(80772)
      e.Events = class {
        constructor() {
          ;(this.onClick = new o.ClickEvent()),
            (this.onDiv = new n.DivEvent()),
            (this.onHover = new s.HoverEvent()),
            (this.resize = !0)
        }
        get onclick() {
          return this.onClick
        }
        set onclick(t) {
          this.onClick = t
        }
        get ondiv() {
          return this.onDiv
        }
        set ondiv(t) {
          this.onDiv = t
        }
        get onhover() {
          return this.onHover
        }
        set onhover(t) {
          this.onHover = t
        }
        load(t) {
          var e, i, o
          if (void 0 === t) return
          this.onClick.load(
            null !== (e = t.onClick) && void 0 !== e ? e : t.onclick
          )
          const s = null !== (i = t.onDiv) && void 0 !== i ? i : t.ondiv
          void 0 !== s &&
            (s instanceof Array
              ? (this.onDiv = s.map((t) => {
                  const e = new n.DivEvent()
                  return e.load(t), e
                }))
              : ((this.onDiv = new n.DivEvent()), this.onDiv.load(s))),
            this.onHover.load(
              null !== (o = t.onHover) && void 0 !== o ? o : t.onhover
            ),
            void 0 !== t.resize && (this.resize = t.resize)
        }
      }
    },
    80772: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.HoverEvent = void 0)
      const o = i(34435)
      e.HoverEvent = class {
        constructor() {
          ;(this.enable = !1),
            (this.mode = []),
            (this.parallax = new o.Parallax())
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            this.parallax.load(t.parallax))
        }
      }
    },
    34435: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Parallax = void 0)
      e.Parallax = class {
        constructor() {
          ;(this.enable = !1), (this.force = 2), (this.smooth = 10)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.force && (this.force = t.force),
            void 0 !== t.smooth && (this.smooth = t.smooth))
        }
      }
    },
    40682: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Interactivity = void 0)
      const o = i(89552),
        n = i(49024)
      e.Interactivity = class {
        constructor() {
          ;(this.detectsOn = 'window'),
            (this.events = new o.Events()),
            (this.modes = new n.Modes())
        }
        get detect_on() {
          return this.detectsOn
        }
        set detect_on(t) {
          this.detectsOn = t
        }
        load(t) {
          var e, i, o
          if (void 0 === t) return
          const n = null !== (e = t.detectsOn) && void 0 !== e ? e : t.detect_on
          void 0 !== n && (this.detectsOn = n),
            this.events.load(t.events),
            this.modes.load(t.modes),
            !0 ===
              (null ===
                (o =
                  null === (i = t.modes) || void 0 === i ? void 0 : i.slow) ||
              void 0 === o
                ? void 0
                : o.active) &&
              (this.events.onHover.mode instanceof Array
                ? this.events.onHover.mode.indexOf('slow') < 0 &&
                  this.events.onHover.mode.push('slow')
                : 'slow' !== this.events.onHover.mode &&
                  (this.events.onHover.mode = [
                    this.events.onHover.mode,
                    'slow',
                  ]))
        }
      }
    },
    97171: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Attract = void 0)
      e.Attract = class {
        constructor() {
          ;(this.distance = 200),
            (this.duration = 0.4),
            (this.easing = 'ease-out-quad'),
            (this.factor = 1),
            (this.maxSpeed = 50),
            (this.speed = 1)
        }
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.easing && (this.easing = t.easing),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed),
            void 0 !== t.speed && (this.speed = t.speed))
        }
      }
    },
    89268: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Bounce = void 0)
      e.Bounce = class {
        constructor() {
          this.distance = 200
        }
        load(t) {
          t && void 0 !== t.distance && (this.distance = t.distance)
        }
      }
    },
    95502: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Bubble = void 0)
      const o = i(38584),
        n = i(39788)
      class s extends o.BubbleBase {
        load(t) {
          super.load(t),
            void 0 !== t &&
              void 0 !== t.divs &&
              (t.divs instanceof Array
                ? (this.divs = t.divs.map((t) => {
                    const e = new n.BubbleDiv()
                    return e.load(t), e
                  }))
                : ((this.divs instanceof Array || !this.divs) &&
                    (this.divs = new n.BubbleDiv()),
                  this.divs.load(t.divs)))
        }
      }
      e.Bubble = s
    },
    38584: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.BubbleBase = void 0)
      const o = i(90822)
      e.BubbleBase = class {
        constructor() {
          ;(this.distance = 200), (this.duration = 0.4), (this.mix = !1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.mix && (this.mix = t.mix),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            void 0 !== t.color &&
              (t.color instanceof Array
                ? (this.color = t.color.map((t) =>
                    o.OptionsColor.create(void 0, t)
                  ))
                : (this.color instanceof Array &&
                    (this.color = new o.OptionsColor()),
                  (this.color = o.OptionsColor.create(this.color, t.color)))),
            void 0 !== t.size && (this.size = t.size))
        }
      }
    },
    39788: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.BubbleDiv = void 0)
      const o = i(38584)
      class n extends o.BubbleBase {
        constructor() {
          super(), (this.selectors = [])
        }
        get ids() {
          return this.selectors instanceof Array
            ? this.selectors.map((t) => t.replace('#', ''))
            : this.selectors.replace('#', '')
        }
        set ids(t) {
          this.selectors = t instanceof Array ? t.map((t) => `#${t}`) : `#${t}`
        }
        load(t) {
          super.load(t),
            void 0 !== t &&
              (void 0 !== t.ids && (this.ids = t.ids),
              void 0 !== t.selectors && (this.selectors = t.selectors))
        }
      }
      e.BubbleDiv = n
    },
    26925: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Connect = void 0)
      const o = i(34871)
      e.Connect = class {
        constructor() {
          ;(this.distance = 80),
            (this.links = new o.ConnectLinks()),
            (this.radius = 60)
        }
        get line_linked() {
          return this.links
        }
        set line_linked(t) {
          this.links = t
        }
        get lineLinked() {
          return this.links
        }
        set lineLinked(t) {
          this.links = t
        }
        load(t) {
          var e, i
          void 0 !== t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(
              null !==
                (i =
                  null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) &&
                void 0 !== i
                ? i
                : t.line_linked
            ),
            void 0 !== t.radius && (this.radius = t.radius))
        }
      }
    },
    34871: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ConnectLinks = void 0)
      e.ConnectLinks = class {
        constructor() {
          this.opacity = 0.5
        }
        load(t) {
          void 0 !== t && void 0 !== t.opacity && (this.opacity = t.opacity)
        }
      }
    },
    80611: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Grab = void 0)
      const o = i(1930)
      e.Grab = class {
        constructor() {
          ;(this.distance = 100), (this.links = new o.GrabLinks())
        }
        get line_linked() {
          return this.links
        }
        set line_linked(t) {
          this.links = t
        }
        get lineLinked() {
          return this.links
        }
        set lineLinked(t) {
          this.links = t
        }
        load(t) {
          var e, i
          void 0 !== t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(
              null !==
                (i =
                  null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) &&
                void 0 !== i
                ? i
                : t.line_linked
            ))
        }
      }
    },
    1930: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.GrabLinks = void 0)
      const o = i(90822)
      e.GrabLinks = class {
        constructor() {
          ;(this.blink = !1), (this.consent = !1), (this.opacity = 1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.blink && (this.blink = t.blink),
            void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.consent && (this.consent = t.consent),
            void 0 !== t.opacity && (this.opacity = t.opacity))
        }
      }
    },
    69322: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Light = void 0)
      const o = i(82328),
        n = i(59448)
      e.Light = class {
        constructor() {
          ;(this.area = new o.LightArea()), (this.shadow = new n.LightShadow())
        }
        load(t) {
          void 0 !== t && (this.area.load(t.area), this.shadow.load(t.shadow))
        }
      }
    },
    82328: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LightArea = void 0)
      const o = i(65105)
      e.LightArea = class {
        constructor() {
          ;(this.gradient = new o.LightGradient()), (this.radius = 1e3)
        }
        load(t) {
          void 0 !== t &&
            (this.gradient.load(t.gradient),
            void 0 !== t.radius && (this.radius = t.radius))
        }
      }
    },
    65105: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LightGradient = void 0)
      const o = i(90822)
      e.LightGradient = class {
        constructor() {
          ;(this.start = new o.OptionsColor()),
            (this.stop = new o.OptionsColor()),
            (this.start.value = '#ffffff'),
            (this.stop.value = '#000000')
        }
        load(t) {
          void 0 !== t &&
            ((this.start = o.OptionsColor.create(this.start, t.start)),
            (this.stop = o.OptionsColor.create(this.stop, t.stop)))
        }
      }
    },
    59448: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LightShadow = void 0)
      const o = i(90822)
      e.LightShadow = class {
        constructor() {
          ;(this.color = new o.OptionsColor()),
            (this.color.value = '#000000'),
            (this.length = 2e3)
        }
        load(t) {
          void 0 !== t &&
            ((this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.length && (this.length = t.length))
        }
      }
    },
    49024: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Modes = void 0)
      const o = i(97171),
        n = i(89268),
        s = i(95502),
        r = i(26925),
        a = i(80611),
        c = i(69322),
        l = i(76205),
        d = i(51359),
        u = i(95943),
        h = i(2475),
        p = i(91803)
      e.Modes = class {
        constructor() {
          ;(this.attract = new o.Attract()),
            (this.bounce = new n.Bounce()),
            (this.bubble = new s.Bubble()),
            (this.connect = new r.Connect()),
            (this.grab = new a.Grab()),
            (this.light = new c.Light()),
            (this.push = new l.Push()),
            (this.remove = new d.Remove()),
            (this.repulse = new u.Repulse()),
            (this.slow = new h.Slow()),
            (this.trail = new p.Trail())
        }
        load(t) {
          void 0 !== t &&
            (this.attract.load(t.attract),
            this.bubble.load(t.bubble),
            this.connect.load(t.connect),
            this.grab.load(t.grab),
            this.light.load(t.light),
            this.push.load(t.push),
            this.remove.load(t.remove),
            this.repulse.load(t.repulse),
            this.slow.load(t.slow),
            this.trail.load(t.trail))
        }
      }
    },
    76205: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Push = void 0)
      e.Push = class {
        constructor() {
          ;(this.default = !0), (this.groups = []), (this.quantity = 4)
        }
        get particles_nb() {
          return this.quantity
        }
        set particles_nb(t) {
          this.quantity = t
        }
        load(t) {
          var e
          if (void 0 === t) return
          void 0 !== t.default && (this.default = t.default),
            void 0 !== t.groups && (this.groups = t.groups.map((t) => t)),
            this.groups.length || (this.default = !0)
          const i =
            null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb
          void 0 !== i && (this.quantity = i)
        }
      }
    },
    51359: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Remove = void 0)
      e.Remove = class {
        constructor() {
          this.quantity = 2
        }
        get particles_nb() {
          return this.quantity
        }
        set particles_nb(t) {
          this.quantity = t
        }
        load(t) {
          var e
          if (void 0 === t) return
          const i =
            null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb
          void 0 !== i && (this.quantity = i)
        }
      }
    },
    95943: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Repulse = void 0)
      const o = i(11262),
        n = i(64359)
      class s extends o.RepulseBase {
        load(t) {
          super.load(t),
            void 0 !== (null === t || void 0 === t ? void 0 : t.divs) &&
              (t.divs instanceof Array
                ? (this.divs = t.divs.map((t) => {
                    const e = new n.RepulseDiv()
                    return e.load(t), e
                  }))
                : ((this.divs instanceof Array || !this.divs) &&
                    (this.divs = new n.RepulseDiv()),
                  this.divs.load(t.divs)))
        }
      }
      e.Repulse = s
    },
    11262: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RepulseBase = void 0)
      e.RepulseBase = class {
        constructor() {
          ;(this.distance = 200),
            (this.duration = 0.4),
            (this.factor = 100),
            (this.speed = 1),
            (this.maxSpeed = 50),
            (this.easing = 'ease-out-quad')
        }
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.easing && (this.easing = t.easing),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed))
        }
      }
    },
    64359: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RepulseDiv = void 0)
      const o = i(11262)
      class n extends o.RepulseBase {
        constructor() {
          super(), (this.selectors = [])
        }
        get ids() {
          return this.selectors instanceof Array
            ? this.selectors.map((t) => t.replace('#', ''))
            : this.selectors.replace('#', '')
        }
        set ids(t) {
          this.selectors = t instanceof Array ? t.map(() => `#${t}`) : `#${t}`
        }
        load(t) {
          super.load(t),
            void 0 !== t &&
              (void 0 !== t.ids && (this.ids = t.ids),
              void 0 !== t.selectors && (this.selectors = t.selectors))
        }
      }
      e.RepulseDiv = n
    },
    2475: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Slow = void 0)
      e.Slow = class {
        constructor() {
          ;(this.factor = 3), (this.radius = 200)
        }
        get active() {
          return !1
        }
        set active(t) {}
        load(t) {
          void 0 !== t &&
            (void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.radius && (this.radius = t.radius))
        }
      }
    },
    91803: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Trail = void 0)
      const o = i(47912)
      e.Trail = class {
        constructor() {
          ;(this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.delay && (this.delay = t.delay),
            void 0 !== t.quantity && (this.quantity = t.quantity),
            void 0 !== t.particles &&
              (this.particles = (0, o.deepExtend)({}, t.particles)),
            void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop))
        }
      }
    },
    5532: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ManualParticle = void 0)
      const o = i(47912)
      e.ManualParticle = class {
        load(t) {
          var e, i
          t &&
            (void 0 !== t.position &&
              (this.position = {
                x: null !== (e = t.position.x) && void 0 !== e ? e : 50,
                y: null !== (i = t.position.y) && void 0 !== i ? i : 50,
              }),
            void 0 !== t.options &&
              (this.options = (0, o.deepExtend)({}, t.options)))
        }
      }
    },
    78928: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Motion = void 0)
      const o = i(8246)
      e.Motion = class {
        constructor() {
          ;(this.disable = !1), (this.reduce = new o.MotionReduce())
        }
        load(t) {
          t &&
            (void 0 !== t.disable && (this.disable = t.disable),
            this.reduce.load(t.reduce))
        }
      }
    },
    8246: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.MotionReduce = void 0)
      e.MotionReduce = class {
        constructor() {
          ;(this.factor = 4), (this.value = !0)
        }
        load(t) {
          t &&
            (void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.value && (this.value = t.value))
        }
      }
    },
    55783: function (t, e, i) {
      'use strict'
      var o,
        n,
        s,
        r =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        a =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Options = void 0)
      const c = i(50882),
        l = i(79212),
        d = i(65475),
        u = i(40682),
        h = i(5532),
        p = i(78928),
        v = i(36475),
        f = i(18598),
        y = i(98105),
        g = i(47912)
      ;(e.Options = class {
        constructor(t) {
          o.add(this),
            n.set(this, void 0),
            r(this, n, t, 'f'),
            (this.autoPlay = !0),
            (this.background = new c.Background()),
            (this.backgroundMask = new l.BackgroundMask()),
            (this.fullScreen = new d.FullScreen()),
            (this.detectRetina = !0),
            (this.duration = 0),
            (this.fpsLimit = 120),
            (this.interactivity = new u.Interactivity()),
            (this.manualParticles = []),
            (this.motion = new p.Motion()),
            (this.particles = new v.ParticlesOptions()),
            (this.pauseOnBlur = !0),
            (this.pauseOnOutsideViewport = !0),
            (this.responsive = []),
            (this.style = {}),
            (this.themes = []),
            (this.zLayers = 100)
        }
        get fps_limit() {
          return this.fpsLimit
        }
        set fps_limit(t) {
          this.fpsLimit = t
        }
        get retina_detect() {
          return this.detectRetina
        }
        set retina_detect(t) {
          this.detectRetina = t
        }
        get backgroundMode() {
          return this.fullScreen
        }
        set backgroundMode(t) {
          this.fullScreen.load(t)
        }
        load(t) {
          var e, i, r, c, l
          if (void 0 === t) return
          if (void 0 !== t.preset)
            if (t.preset instanceof Array)
              for (const o of t.preset) this.importPreset(o)
            else this.importPreset(t.preset)
          void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay)
          const d =
            null !== (e = t.detectRetina) && void 0 !== e ? e : t.retina_detect
          void 0 !== d && (this.detectRetina = d),
            void 0 !== t.duration && (this.duration = t.duration)
          const u = null !== (i = t.fpsLimit) && void 0 !== i ? i : t.fps_limit
          void 0 !== u && (this.fpsLimit = u),
            void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
            void 0 !== t.pauseOnOutsideViewport &&
              (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
            void 0 !== t.zLayers && (this.zLayers = t.zLayers),
            this.background.load(t.background)
          const p =
            null !== (r = t.fullScreen) && void 0 !== r ? r : t.backgroundMode
          if (
            ('boolean' === typeof p
              ? (this.fullScreen.enable = p)
              : this.fullScreen.load(p),
            this.backgroundMask.load(t.backgroundMask),
            this.interactivity.load(t.interactivity),
            void 0 !== t.manualParticles &&
              (this.manualParticles = t.manualParticles.map((t) => {
                const e = new h.ManualParticle()
                return e.load(t), e
              })),
            this.motion.load(t.motion),
            this.particles.load(t.particles),
            (this.style = (0, g.deepExtend)(this.style, t.style)),
            a(this, n, 'f').plugins.loadOptions(this, t),
            void 0 !== t.responsive)
          )
            for (const o of t.responsive) {
              const t = new f.Responsive()
              t.load(o), this.responsive.push(t)
            }
          if (
            (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth),
            void 0 !== t.themes)
          )
            for (const o of t.themes) {
              const t = new y.Theme()
              t.load(o), this.themes.push(t)
            }
          ;(this.defaultDarkTheme =
            null === (c = a(this, o, 'm', s).call(this, 'dark')) || void 0 === c
              ? void 0
              : c.name),
            (this.defaultLightTheme =
              null === (l = a(this, o, 'm', s).call(this, 'light')) ||
              void 0 === l
                ? void 0
                : l.name)
        }
        setTheme(t) {
          if (t) {
            const e = this.themes.find((e) => e.name === t)
            e && this.load(e.options)
          } else {
            const t =
                'undefined' !== typeof matchMedia &&
                matchMedia('(prefers-color-scheme: dark)'),
              e = t && t.matches,
              i = a(this, o, 'm', s).call(this, e ? 'dark' : 'light')
            i && this.load(i.options)
          }
        }
        setResponsive(t, e, i) {
          this.load(i)
          const o = this.responsive.find((i) =>
            'screen' === i.mode && screen
              ? i.maxWidth * e > screen.availWidth
              : i.maxWidth * e > t
          )
          return (
            this.load(null === o || void 0 === o ? void 0 : o.options),
            null === o || void 0 === o ? void 0 : o.maxWidth
          )
        }
        importPreset(t) {
          this.load(a(this, n, 'f').plugins.getPreset(t))
        }
      }),
        (n = new WeakMap()),
        (o = new WeakSet()),
        (s = function (t) {
          var e
          return null !==
            (e = this.themes.find(
              (e) => e.default.value && e.default.mode === t
            )) && void 0 !== e
            ? e
            : this.themes.find(
                (t) => t.default.value && 'any' === t.default.mode
              )
        })
    },
    90822: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.OptionsColor = void 0)
      class i {
        constructor() {
          this.value = '#fff'
        }
        static create(t, e) {
          const o = new i()
          return (
            o.load(t),
            void 0 !== e &&
              ('string' === typeof e || e instanceof Array
                ? o.load({ value: e })
                : o.load(e)),
            o
          )
        }
        load(t) {
          void 0 !== (null === t || void 0 === t ? void 0 : t.value) &&
            (this.value = t.value)
        }
      }
      e.OptionsColor = i
    },
    83891: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Bounce = void 0)
      const o = i(49397)
      e.Bounce = class {
        constructor() {
          ;(this.horizontal = new o.BounceFactor()),
            (this.vertical = new o.BounceFactor())
        }
        load(t) {
          t &&
            (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical))
        }
      }
    },
    49397: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.BounceFactor = void 0)
      const o = i(56782)
      class n extends o.ValueWithRandom {
        constructor() {
          super(), (this.random.minimumValue = 0.1), (this.value = 1)
        }
      }
      e.BounceFactor = n
    },
    92473: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Collisions = void 0)
      const o = i(83891),
        n = i(58966)
      e.Collisions = class {
        constructor() {
          ;(this.bounce = new o.Bounce()),
            (this.enable = !1),
            (this.mode = 'bounce'),
            (this.overlap = new n.CollisionsOverlap())
        }
        load(t) {
          void 0 !== t &&
            (this.bounce.load(t.bounce),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            this.overlap.load(t.overlap))
        }
      }
    },
    58966: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CollisionsOverlap = void 0)
      e.CollisionsOverlap = class {
        constructor() {
          ;(this.enable = !0), (this.retries = 0)
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.retries && (this.retries = t.retries))
        }
      }
    },
    92641: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Destroy = void 0)
      const o = i(49480)
      e.Destroy = class {
        constructor() {
          ;(this.mode = 'none'), (this.split = new o.Split())
        }
        load(t) {
          t &&
            (void 0 !== t.mode && (this.mode = t.mode),
            this.split.load(t.split))
        }
      }
    },
    49480: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Split = void 0)
      const o = i(50599),
        n = i(14057),
        s = i(47912)
      e.Split = class {
        constructor() {
          ;(this.count = 1),
            (this.factor = new o.SplitFactor()),
            (this.rate = new n.SplitRate()),
            (this.sizeOffset = !0)
        }
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = t.count),
            this.factor.load(t.factor),
            this.rate.load(t.rate),
            void 0 !== t.particles &&
              (this.particles = (0, s.deepExtend)({}, t.particles)),
            void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset))
        }
      }
    },
    50599: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SplitFactor = void 0)
      const o = i(56782)
      class n extends o.ValueWithRandom {
        constructor() {
          super(), (this.value = 3)
        }
      }
      e.SplitFactor = n
    },
    14057: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SplitRate = void 0)
      const o = i(56782)
      class n extends o.ValueWithRandom {
        constructor() {
          super(), (this.value = { min: 4, max: 9 })
        }
      }
      e.SplitRate = n
    },
    15907: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Life = void 0)
      const o = i(75257),
        n = i(77107)
      e.Life = class {
        constructor() {
          ;(this.count = 0),
            (this.delay = new o.LifeDelay()),
            (this.duration = new n.LifeDuration())
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.count && (this.count = t.count),
            this.delay.load(t.delay),
            this.duration.load(t.duration))
        }
      }
    },
    75257: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LifeDelay = void 0)
      const o = i(56782)
      class n extends o.ValueWithRandom {
        constructor() {
          super(), (this.sync = !1)
        }
        load(t) {
          t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
        }
      }
      e.LifeDelay = n
    },
    77107: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LifeDuration = void 0)
      const o = i(56782)
      class n extends o.ValueWithRandom {
        constructor() {
          super(), (this.random.minimumValue = 1e-4), (this.sync = !1)
        }
        load(t) {
          void 0 !== t &&
            (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
        }
      }
      e.LifeDuration = n
    },
    26139: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Links = void 0)
      const o = i(27939),
        n = i(60193),
        s = i(90822)
      e.Links = class {
        constructor() {
          ;(this.blink = !1),
            (this.color = new s.OptionsColor()),
            (this.consent = !1),
            (this.distance = 100),
            (this.enable = !1),
            (this.frequency = 1),
            (this.opacity = 1),
            (this.shadow = new o.LinksShadow()),
            (this.triangles = new n.LinksTriangle()),
            (this.width = 1),
            (this.warp = !1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.id && (this.id = t.id),
            void 0 !== t.blink && (this.blink = t.blink),
            (this.color = s.OptionsColor.create(this.color, t.color)),
            void 0 !== t.consent && (this.consent = t.consent),
            void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            this.shadow.load(t.shadow),
            this.triangles.load(t.triangles),
            void 0 !== t.width && (this.width = t.width),
            void 0 !== t.warp && (this.warp = t.warp))
        }
      }
    },
    27939: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LinksShadow = void 0)
      const o = i(90822)
      e.LinksShadow = class {
        constructor() {
          ;(this.blur = 5),
            (this.color = new o.OptionsColor()),
            (this.enable = !1),
            (this.color.value = '#00ff00')
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.blur && (this.blur = t.blur),
            (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable))
        }
      }
    },
    60193: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LinksTriangle = void 0)
      const o = i(90822)
      e.LinksTriangle = class {
        constructor() {
          ;(this.enable = !1), (this.frequency = 1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity && (this.opacity = t.opacity))
        }
      }
    },
    43551: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Attract = void 0)
      const o = i(10931)
      e.Attract = class {
        constructor() {
          ;(this.distance = 200),
            (this.enable = !1),
            (this.rotate = { x: 3e3, y: 3e3 })
        }
        get rotateX() {
          return this.rotate.x
        }
        set rotateX(t) {
          this.rotate.x = t
        }
        get rotateY() {
          return this.rotate.y
        }
        set rotateY(t) {
          this.rotate.y = t
        }
        load(t) {
          var e, i, n, s
          if (!t) return
          void 0 !== t.distance &&
            (this.distance = (0, o.setRangeValue)(t.distance)),
            void 0 !== t.enable && (this.enable = t.enable)
          const r =
            null !==
              (i = null === (e = t.rotate) || void 0 === e ? void 0 : e.x) &&
            void 0 !== i
              ? i
              : t.rotateX
          void 0 !== r && (this.rotate.x = r)
          const a =
            null !==
              (s = null === (n = t.rotate) || void 0 === n ? void 0 : n.y) &&
            void 0 !== s
              ? s
              : t.rotateY
          void 0 !== a && (this.rotate.y = a)
        }
      }
    },
    36732: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Move = void 0)
      const o = i(43551),
        n = i(52728),
        s = i(1116),
        r = i(19335),
        a = i(85698),
        c = i(1139),
        l = i(3576),
        d = i(47912),
        u = i(10931)
      e.Move = class {
        constructor() {
          ;(this.angle = new n.MoveAngle()),
            (this.attract = new o.Attract()),
            (this.decay = 0),
            (this.distance = {}),
            (this.direction = 'none'),
            (this.drift = 0),
            (this.enable = !1),
            (this.gravity = new s.MoveGravity()),
            (this.path = new a.Path()),
            (this.outModes = new r.OutModes()),
            (this.random = !1),
            (this.size = !1),
            (this.speed = 2),
            (this.spin = new c.Spin()),
            (this.straight = !1),
            (this.trail = new l.Trail()),
            (this.vibrate = !1),
            (this.warp = !1)
        }
        get collisions() {
          return !1
        }
        set collisions(t) {}
        get bounce() {
          return this.collisions
        }
        set bounce(t) {
          this.collisions = t
        }
        get out_mode() {
          return this.outMode
        }
        set out_mode(t) {
          this.outMode = t
        }
        get outMode() {
          return this.outModes.default
        }
        set outMode(t) {
          this.outModes.default = t
        }
        get noise() {
          return this.path
        }
        set noise(t) {
          this.path = t
        }
        load(t) {
          var e, i, o
          if (void 0 === t) return
          void 0 !== t.angle &&
            ('number' === typeof t.angle
              ? (this.angle.value = t.angle)
              : this.angle.load(t.angle)),
            this.attract.load(t.attract),
            void 0 !== t.decay && (this.decay = t.decay),
            void 0 !== t.direction && (this.direction = t.direction),
            void 0 !== t.distance &&
              (this.distance =
                'number' === typeof t.distance
                  ? { horizontal: t.distance, vertical: t.distance }
                  : (0, d.deepExtend)({}, t.distance)),
            void 0 !== t.drift && (this.drift = (0, u.setRangeValue)(t.drift)),
            void 0 !== t.enable && (this.enable = t.enable),
            this.gravity.load(t.gravity)
          const n = null !== (e = t.outMode) && void 0 !== e ? e : t.out_mode
          ;(void 0 === t.outModes && void 0 === n) ||
            ('string' === typeof t.outModes ||
            (void 0 === t.outModes && void 0 !== n)
              ? this.outModes.load({
                  default: null !== (i = t.outModes) && void 0 !== i ? i : n,
                })
              : this.outModes.load(t.outModes)),
            this.path.load(null !== (o = t.path) && void 0 !== o ? o : t.noise),
            void 0 !== t.random && (this.random = t.random),
            void 0 !== t.size && (this.size = t.size),
            void 0 !== t.speed && (this.speed = (0, u.setRangeValue)(t.speed)),
            this.spin.load(t.spin),
            void 0 !== t.straight && (this.straight = t.straight),
            this.trail.load(t.trail),
            void 0 !== t.vibrate && (this.vibrate = t.vibrate),
            void 0 !== t.warp && (this.warp = t.warp)
        }
      }
    },
    52728: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.MoveAngle = void 0)
      const o = i(10931)
      e.MoveAngle = class {
        constructor() {
          ;(this.offset = 0), (this.value = 90)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.offset &&
              (this.offset = (0, o.setRangeValue)(t.offset)),
            void 0 !== t.value && (this.value = (0, o.setRangeValue)(t.value)))
        }
      }
    },
    1116: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.MoveGravity = void 0)
      const o = i(10931)
      e.MoveGravity = class {
        constructor() {
          ;(this.acceleration = 9.81),
            (this.enable = !1),
            (this.inverse = !1),
            (this.maxSpeed = 50)
        }
        load(t) {
          t &&
            (void 0 !== t.acceleration &&
              (this.acceleration = (0, o.setRangeValue)(t.acceleration)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.inverse && (this.inverse = t.inverse),
            void 0 !== t.maxSpeed &&
              (this.maxSpeed = (0, o.setRangeValue)(t.maxSpeed)))
        }
      }
    },
    19335: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.OutModes = void 0)
      e.OutModes = class {
        constructor() {
          this.default = 'out'
        }
        load(t) {
          var e, i, o, n
          t &&
            (void 0 !== t.default && (this.default = t.default),
            (this.bottom =
              null !== (e = t.bottom) && void 0 !== e ? e : t.default),
            (this.left = null !== (i = t.left) && void 0 !== i ? i : t.default),
            (this.right =
              null !== (o = t.right) && void 0 !== o ? o : t.default),
            (this.top = null !== (n = t.top) && void 0 !== n ? n : t.default))
        }
      }
    },
    85698: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Path = void 0)
      const o = i(88096),
        n = i(47912)
      e.Path = class {
        constructor() {
          ;(this.clamp = !0),
            (this.delay = new o.PathDelay()),
            (this.enable = !1),
            (this.options = {})
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.clamp && (this.clamp = t.clamp),
            this.delay.load(t.delay),
            void 0 !== t.enable && (this.enable = t.enable),
            (this.generator = t.generator),
            t.options &&
              (this.options = (0, n.deepExtend)(this.options, t.options)))
        }
      }
    },
    88096: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PathDelay = void 0)
      const o = i(56782)
      class n extends o.ValueWithRandom {
        constructor() {
          super()
        }
      }
      e.PathDelay = n
    },
    1139: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Spin = void 0)
      const o = i(47912),
        n = i(10931)
      e.Spin = class {
        constructor() {
          ;(this.acceleration = 0), (this.enable = !1)
        }
        load(t) {
          t &&
            (void 0 !== t.acceleration &&
              (this.acceleration = (0, n.setRangeValue)(t.acceleration)),
            void 0 !== t.enable && (this.enable = t.enable),
            (this.position = t.position
              ? (0, o.deepExtend)({}, t.position)
              : void 0))
        }
      }
    },
    3576: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Trail = void 0)
      const o = i(90822)
      e.Trail = class {
        constructor() {
          ;(this.enable = !1),
            (this.length = 10),
            (this.fillColor = new o.OptionsColor()),
            (this.fillColor.value = '#000000')
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            (this.fillColor = o.OptionsColor.create(
              this.fillColor,
              t.fillColor
            )),
            void 0 !== t.length && (this.length = t.length))
        }
      }
    },
    35515: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Density = void 0)
      e.Density = class {
        constructor() {
          ;(this.enable = !1), (this.area = 800), (this.factor = 1e3)
        }
        get value_area() {
          return this.area
        }
        set value_area(t) {
          this.area = t
        }
        load(t) {
          var e
          if (void 0 === t) return
          void 0 !== t.enable && (this.enable = t.enable)
          const i = null !== (e = t.area) && void 0 !== e ? e : t.value_area
          void 0 !== i && (this.area = i),
            void 0 !== t.factor && (this.factor = t.factor)
        }
      }
    },
    37440: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ParticlesNumber = void 0)
      const o = i(35515)
      e.ParticlesNumber = class {
        constructor() {
          ;(this.density = new o.Density()),
            (this.limit = 0),
            (this.value = 100)
        }
        get max() {
          return this.limit
        }
        set max(t) {
          this.limit = t
        }
        load(t) {
          var e
          if (void 0 === t) return
          this.density.load(t.density)
          const i = null !== (e = t.limit) && void 0 !== e ? e : t.max
          void 0 !== i && (this.limit = i),
            void 0 !== t.value && (this.value = t.value)
        }
      }
    },
    62940: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Opacity = void 0)
      const o = i(84506),
        n = i(56782),
        s = i(10931)
      class r extends n.ValueWithRandom {
        constructor() {
          super(),
            (this.animation = new o.OpacityAnimation()),
            (this.random.minimumValue = 0.1),
            (this.value = 1)
        }
        get anim() {
          return this.animation
        }
        set anim(t) {
          this.animation = t
        }
        load(t) {
          var e
          if (!t) return
          super.load(t)
          const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim
          void 0 !== i &&
            (this.animation.load(i),
            (this.value = (0, s.setRangeValue)(
              this.value,
              this.animation.enable ? this.animation.minimumValue : void 0
            )))
        }
      }
      e.Opacity = r
    },
    84506: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.OpacityAnimation = void 0)
      const o = i(86497)
      class n extends o.AnimationOptions {
        constructor() {
          super(),
            (this.destroy = 'none'),
            (this.enable = !1),
            (this.speed = 2),
            (this.startValue = 'random'),
            (this.sync = !1)
        }
        get opacity_min() {
          return this.minimumValue
        }
        set opacity_min(t) {
          this.minimumValue = t
        }
        load(t) {
          var e
          void 0 !== t &&
            (super.load(t),
            void 0 !== t.destroy && (this.destroy = t.destroy),
            void 0 !== t.enable && (this.enable = t.enable),
            (this.minimumValue =
              null !== (e = t.minimumValue) && void 0 !== e
                ? e
                : t.opacity_min),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.startValue && (this.startValue = t.startValue),
            void 0 !== t.sync && (this.sync = t.sync))
        }
      }
      e.OpacityAnimation = n
    },
    5901: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Orbit = void 0)
      const o = i(86497),
        n = i(90822),
        s = i(39258),
        r = i(10931)
      e.Orbit = class {
        constructor() {
          ;(this.animation = new o.AnimationOptions()),
            (this.enable = !1),
            (this.opacity = 1),
            (this.rotation = new s.OrbitRotation()),
            (this.width = 1)
        }
        load(t) {
          void 0 !== t &&
            (this.animation.load(t.animation),
            this.rotation.load(t.rotation),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.opacity &&
              (this.opacity = (0, r.setRangeValue)(t.opacity)),
            void 0 !== t.width && (this.width = (0, r.setRangeValue)(t.width)),
            void 0 !== t.radius &&
              (this.radius = (0, r.setRangeValue)(t.radius)),
            void 0 !== t.color &&
              (this.color = n.OptionsColor.create(this.color, t.color)))
        }
      }
    },
    39258: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.OrbitRotation = void 0)
      const o = i(56782)
      class n extends o.ValueWithRandom {
        constructor() {
          super(),
            (this.value = 45),
            (this.random.enable = !1),
            (this.random.minimumValue = 0)
        }
        load(t) {
          void 0 !== t && super.load(t)
        }
      }
      e.OrbitRotation = n
    },
    36475: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ParticlesOptions = void 0)
      const o = i(47097),
        n = i(46541),
        s = i(83891),
        r = i(92473),
        a = i(92641),
        c = i(15907),
        l = i(26139),
        d = i(36732),
        u = i(62940),
        h = i(5901),
        p = i(37440),
        v = i(86240),
        f = i(14391),
        y = i(69557),
        g = i(77034),
        b = i(81021),
        m = i(32131),
        w = i(81447),
        _ = i(24674),
        S = i(57727),
        P = i(82688),
        x = i(14145),
        O = i(47912)
      e.ParticlesOptions = class {
        constructor() {
          ;(this.bounce = new s.Bounce()),
            (this.collisions = new r.Collisions()),
            (this.color = new o.AnimatableColor()),
            (this.destroy = new a.Destroy()),
            (this.gradient = []),
            (this.groups = {}),
            (this.life = new c.Life()),
            (this.links = new l.Links()),
            (this.move = new d.Move()),
            (this.number = new p.ParticlesNumber()),
            (this.opacity = new u.Opacity()),
            (this.orbit = new h.Orbit()),
            (this.reduceDuplicates = !1),
            (this.repulse = new v.Repulse()),
            (this.roll = new f.Roll()),
            (this.rotate = new y.Rotate()),
            (this.shadow = new g.Shadow()),
            (this.shape = new b.Shape()),
            (this.size = new m.Size()),
            (this.stroke = new w.Stroke()),
            (this.tilt = new _.Tilt()),
            (this.twinkle = new S.Twinkle()),
            (this.wobble = new P.Wobble()),
            (this.zIndex = new x.ZIndex())
        }
        get line_linked() {
          return this.links
        }
        set line_linked(t) {
          this.links = t
        }
        get lineLinked() {
          return this.links
        }
        set lineLinked(t) {
          this.links = t
        }
        load(t) {
          var e, i, s, r, a, c, l, d
          if (void 0 === t) return
          this.bounce.load(t.bounce),
            this.color.load(o.AnimatableColor.create(this.color, t.color)),
            this.destroy.load(t.destroy),
            this.life.load(t.life)
          const u =
            null !==
              (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) &&
            void 0 !== i
              ? i
              : t.line_linked
          if ((void 0 !== u && this.links.load(u), void 0 !== t.groups))
            for (const o in t.groups) {
              const e = t.groups[o]
              void 0 !== e &&
                (this.groups[o] = (0, O.deepExtend)(
                  null !== (s = this.groups[o]) && void 0 !== s ? s : {},
                  e
                ))
            }
          this.move.load(t.move),
            this.number.load(t.number),
            this.opacity.load(t.opacity),
            this.orbit.load(t.orbit),
            void 0 !== t.reduceDuplicates &&
              (this.reduceDuplicates = t.reduceDuplicates),
            this.repulse.load(t.repulse),
            this.roll.load(t.roll),
            this.rotate.load(t.rotate),
            this.shape.load(t.shape),
            this.size.load(t.size),
            this.shadow.load(t.shadow),
            this.tilt.load(t.tilt),
            this.twinkle.load(t.twinkle),
            this.wobble.load(t.wobble),
            this.zIndex.load(t.zIndex)
          const h =
            null !==
              (a =
                null === (r = t.move) || void 0 === r
                  ? void 0
                  : r.collisions) && void 0 !== a
              ? a
              : null === (c = t.move) || void 0 === c
              ? void 0
              : c.bounce
          void 0 !== h && (this.collisions.enable = h),
            this.collisions.load(t.collisions)
          const p =
            null !== (l = t.stroke) && void 0 !== l
              ? l
              : null === (d = t.shape) || void 0 === d
              ? void 0
              : d.stroke
          p &&
            (p instanceof Array
              ? (this.stroke = p.map((t) => {
                  const e = new w.Stroke()
                  return e.load(t), e
                }))
              : (this.stroke instanceof Array && (this.stroke = new w.Stroke()),
                this.stroke.load(p)))
          const v = t.gradient
          v &&
            (v instanceof Array
              ? (this.gradient = v.map((t) => {
                  const e = new n.AnimatableGradient()
                  return e.load(t), e
                }))
              : (this.gradient instanceof Array &&
                  (this.gradient = new n.AnimatableGradient()),
                this.gradient.load(v)))
        }
      }
    },
    86240: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Repulse = void 0)
      const o = i(56782),
        n = i(10931)
      class s extends o.ValueWithRandom {
        constructor() {
          super(),
            (this.enabled = !1),
            (this.distance = 1),
            (this.duration = 1),
            (this.factor = 1),
            (this.speed = 1)
        }
        load(t) {
          super.load(t),
            t &&
              (void 0 !== t.enabled && (this.enabled = t.enabled),
              void 0 !== t.distance &&
                (this.distance = (0, n.setRangeValue)(t.distance)),
              void 0 !== t.duration &&
                (this.duration = (0, n.setRangeValue)(t.duration)),
              void 0 !== t.factor &&
                (this.factor = (0, n.setRangeValue)(t.factor)),
              void 0 !== t.speed &&
                (this.speed = (0, n.setRangeValue)(t.speed)))
        }
      }
      e.Repulse = s
    },
    14391: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Roll = void 0)
      const o = i(90822),
        n = i(31633),
        s = i(10931)
      e.Roll = class {
        constructor() {
          ;(this.darken = new n.RollLight()),
            (this.enable = !1),
            (this.enlighten = new n.RollLight()),
            (this.mode = 'vertical'),
            (this.speed = 25)
        }
        load(t) {
          t &&
            (void 0 !== t.backColor &&
              (this.backColor = o.OptionsColor.create(
                this.backColor,
                t.backColor
              )),
            this.darken.load(t.darken),
            void 0 !== t.enable && (this.enable = t.enable),
            this.enlighten.load(t.enlighten),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.speed && (this.speed = (0, s.setRangeValue)(t.speed)))
        }
      }
    },
    31633: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RollLight = void 0)
      const o = i(10931)
      e.RollLight = class {
        constructor() {
          ;(this.enable = !1), (this.value = 0)
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.value && (this.value = (0, o.setRangeValue)(t.value)))
        }
      }
    },
    69557: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Rotate = void 0)
      const o = i(66771),
        n = i(56782)
      class s extends n.ValueWithRandom {
        constructor() {
          super(),
            (this.animation = new o.RotateAnimation()),
            (this.direction = 'clockwise'),
            (this.path = !1),
            (this.value = 0)
        }
        load(t) {
          t &&
            (super.load(t),
            void 0 !== t.direction && (this.direction = t.direction),
            this.animation.load(t.animation),
            void 0 !== t.path && (this.path = t.path))
        }
      }
      e.Rotate = s
    },
    66771: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RotateAnimation = void 0)
      const o = i(10931)
      e.RotateAnimation = class {
        constructor() {
          ;(this.enable = !1), (this.speed = 0), (this.sync = !1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, o.setRangeValue)(t.speed)),
            void 0 !== t.sync && (this.sync = t.sync))
        }
      }
    },
    77034: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Shadow = void 0)
      const o = i(90822)
      e.Shadow = class {
        constructor() {
          ;(this.blur = 0),
            (this.color = new o.OptionsColor()),
            (this.enable = !1),
            (this.offset = { x: 0, y: 0 }),
            (this.color.value = '#000000')
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.blur && (this.blur = t.blur),
            (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.offset &&
              (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
              void 0 !== t.offset.y && (this.offset.y = t.offset.y)))
        }
      }
    },
    81021: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Shape = void 0)
      const o = i(47912)
      e.Shape = class {
        constructor() {
          ;(this.options = {}), (this.type = 'circle')
        }
        get image() {
          var t
          return null !== (t = this.options.image) && void 0 !== t
            ? t
            : this.options.images
        }
        set image(t) {
          ;(this.options.image = t), (this.options.images = t)
        }
        get custom() {
          return this.options
        }
        set custom(t) {
          this.options = t
        }
        get images() {
          return this.image
        }
        set images(t) {
          this.image = t
        }
        get stroke() {
          return []
        }
        set stroke(t) {}
        get character() {
          var t
          return null !== (t = this.options.character) && void 0 !== t
            ? t
            : this.options.char
        }
        set character(t) {
          ;(this.options.character = t), (this.options.char = t)
        }
        get polygon() {
          var t
          return null !== (t = this.options.polygon) && void 0 !== t
            ? t
            : this.options.star
        }
        set polygon(t) {
          ;(this.options.polygon = t), (this.options.star = t)
        }
        load(t) {
          var e, i, n
          if (void 0 === t) return
          const s = null !== (e = t.options) && void 0 !== e ? e : t.custom
          if (void 0 !== s)
            for (const r in s) {
              const t = s[r]
              void 0 !== t &&
                (this.options[r] = (0, o.deepExtend)(
                  null !== (i = this.options[r]) && void 0 !== i ? i : {},
                  t
                ))
            }
          this.loadShape(t.character, 'character', 'char', !0),
            this.loadShape(t.polygon, 'polygon', 'star', !1),
            this.loadShape(
              null !== (n = t.image) && void 0 !== n ? n : t.images,
              'image',
              'images',
              !0
            ),
            void 0 !== t.type && (this.type = t.type)
        }
        loadShape(t, e, i, n) {
          var s, r, a, c
          void 0 !== t &&
            (t instanceof Array
              ? (this.options[e] instanceof Array ||
                  ((this.options[e] = []),
                  (this.options[i] && !n) || (this.options[i] = [])),
                (this.options[e] = (0, o.deepExtend)(
                  null !== (s = this.options[e]) && void 0 !== s ? s : [],
                  t
                )),
                (this.options[i] && !n) ||
                  (this.options[i] = (0, o.deepExtend)(
                    null !== (r = this.options[i]) && void 0 !== r ? r : [],
                    t
                  )))
              : (this.options[e] instanceof Array &&
                  ((this.options[e] = {}),
                  (this.options[i] && !n) || (this.options[i] = {})),
                (this.options[e] = (0, o.deepExtend)(
                  null !== (a = this.options[e]) && void 0 !== a ? a : {},
                  t
                )),
                (this.options[i] && !n) ||
                  (this.options[i] = (0, o.deepExtend)(
                    null !== (c = this.options[i]) && void 0 !== c ? c : {},
                    t
                  ))))
        }
      }
    },
    32131: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Size = void 0)
      const o = i(79612),
        n = i(56782),
        s = i(10931)
      class r extends n.ValueWithRandom {
        constructor() {
          super(),
            (this.animation = new o.SizeAnimation()),
            (this.random.minimumValue = 1),
            (this.value = 3)
        }
        get anim() {
          return this.animation
        }
        set anim(t) {
          this.animation = t
        }
        load(t) {
          var e
          if (!t) return
          super.load(t)
          const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim
          void 0 !== i &&
            (this.animation.load(i),
            (this.value = (0, s.setRangeValue)(
              this.value,
              this.animation.enable ? this.animation.minimumValue : void 0
            )))
        }
      }
      e.Size = r
    },
    79612: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SizeAnimation = void 0)
      const o = i(86497)
      class n extends o.AnimationOptions {
        constructor() {
          super(),
            (this.destroy = 'none'),
            (this.enable = !1),
            (this.speed = 5),
            (this.startValue = 'random'),
            (this.sync = !1)
        }
        get size_min() {
          return this.minimumValue
        }
        set size_min(t) {
          this.minimumValue = t
        }
        load(t) {
          var e
          void 0 !== t &&
            (super.load(t),
            void 0 !== t.destroy && (this.destroy = t.destroy),
            void 0 !== t.enable && (this.enable = t.enable),
            (this.minimumValue =
              null !== (e = t.minimumValue) && void 0 !== e ? e : t.size_min),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.startValue && (this.startValue = t.startValue),
            void 0 !== t.sync && (this.sync = t.sync))
        }
      }
      e.SizeAnimation = n
    },
    81447: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Stroke = void 0)
      const o = i(47097)
      e.Stroke = class {
        constructor() {
          this.width = 0
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.AnimatableColor.create(this.color, t.color)),
            void 0 !== t.width && (this.width = t.width),
            void 0 !== t.opacity && (this.opacity = t.opacity))
        }
      }
    },
    24674: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Tilt = void 0)
      const o = i(71074),
        n = i(56782)
      class s extends n.ValueWithRandom {
        constructor() {
          super(),
            (this.animation = new o.TiltAnimation()),
            (this.direction = 'clockwise'),
            (this.enable = !1),
            (this.value = 0)
        }
        load(t) {
          t &&
            (super.load(t),
            this.animation.load(t.animation),
            void 0 !== t.direction && (this.direction = t.direction),
            void 0 !== t.enable && (this.enable = t.enable))
        }
      }
      e.Tilt = s
    },
    71074: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TiltAnimation = void 0)
      const o = i(10931)
      e.TiltAnimation = class {
        constructor() {
          ;(this.enable = !1), (this.speed = 0), (this.sync = !1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, o.setRangeValue)(t.speed)),
            void 0 !== t.sync && (this.sync = t.sync))
        }
      }
    },
    57727: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Twinkle = void 0)
      const o = i(80122)
      e.Twinkle = class {
        constructor() {
          ;(this.lines = new o.TwinkleValues()),
            (this.particles = new o.TwinkleValues())
        }
        load(t) {
          void 0 !== t &&
            (this.lines.load(t.lines), this.particles.load(t.particles))
        }
      }
    },
    80122: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TwinkleValues = void 0)
      const o = i(90822),
        n = i(10931)
      e.TwinkleValues = class {
        constructor() {
          ;(this.enable = !1), (this.frequency = 0.05), (this.opacity = 1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = o.OptionsColor.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity &&
              (this.opacity = (0, n.setRangeValue)(t.opacity)))
        }
      }
    },
    82688: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Wobble = void 0)
      const o = i(10931)
      e.Wobble = class {
        constructor() {
          ;(this.distance = 5), (this.enable = !1), (this.speed = 50)
        }
        load(t) {
          t &&
            (void 0 !== t.distance &&
              (this.distance = (0, o.setRangeValue)(t.distance)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, o.setRangeValue)(t.speed)))
        }
      }
    },
    14145: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.ZIndex = void 0)
      const o = i(56782)
      class n extends o.ValueWithRandom {
        constructor() {
          super(),
            (this.opacityRate = 1),
            (this.sizeRate = 1),
            (this.velocityRate = 1)
        }
        load(t) {
          super.load(t),
            t &&
              (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
              void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
              void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate))
        }
      }
      e.ZIndex = n
    },
    78538: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Random = void 0)
      e.Random = class {
        constructor() {
          ;(this.enable = !1), (this.minimumValue = 0)
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue))
        }
      }
    },
    18598: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Responsive = void 0)
      const o = i(47912)
      e.Responsive = class {
        constructor() {
          ;(this.maxWidth = 1 / 0), (this.options = {}), (this.mode = 'canvas')
        }
        load(t) {
          t &&
            (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
            void 0 !== t.mode &&
              ('screen' === t.mode
                ? (this.mode = 'screen')
                : (this.mode = 'canvas')),
            void 0 !== t.options &&
              (this.options = (0, o.deepExtend)({}, t.options)))
        }
      }
    },
    98105: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Theme = void 0)
      const o = i(2179),
        n = i(47912)
      e.Theme = class {
        constructor() {
          ;(this.name = ''), (this.default = new o.ThemeDefault())
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.name && (this.name = t.name),
            this.default.load(t.default),
            void 0 !== t.options &&
              (this.options = (0, n.deepExtend)({}, t.options)))
        }
      }
    },
    2179: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ThemeDefault = void 0)
      e.ThemeDefault = class {
        constructor() {
          ;(this.auto = !1), (this.mode = 'any'), (this.value = !1)
        }
        load(t) {
          t &&
            (void 0 !== t.auto && (this.auto = t.auto),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.value && (this.value = t.value))
        }
      }
    },
    56782: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ValueWithRandom = void 0)
      const o = i(78538),
        n = i(10931)
      e.ValueWithRandom = class {
        constructor() {
          ;(this.random = new o.Random()), (this.value = 0)
        }
        load(t) {
          t &&
            ('boolean' === typeof t.random
              ? (this.random.enable = t.random)
              : this.random.load(t.random),
            void 0 !== t.value &&
              (this.value = (0, n.setRangeValue)(
                t.value,
                this.random.enable ? this.random.minimumValue : void 0
              )))
        }
      }
    },
    75606: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    67488: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AbsorberInstance = void 0)
      const o = i(10931),
        n = i(28774),
        s = i(47095),
        r = i(78779),
        a = i(47912)
      e.AbsorberInstance = class {
        constructor(t, e, i, a) {
          var c, l, d
          ;(this.absorbers = t),
            (this.container = e),
            (this.initialPosition = a ? r.Vector.create(a.x, a.y) : void 0),
            i instanceof s.Absorber
              ? (this.options = i)
              : ((this.options = new s.Absorber()), this.options.load(i)),
            (this.dragging = !1),
            (this.name = this.options.name),
            (this.opacity = this.options.opacity),
            (this.size =
              (0, o.getRangeValue)(this.options.size.value) *
              e.retina.pixelRatio),
            (this.mass =
              this.size * this.options.size.density * e.retina.reduceFactor)
          const u = this.options.size.limit
          ;(this.limit = {
            radius: u.radius * e.retina.pixelRatio * e.retina.reduceFactor,
            mass: u.mass,
          }),
            (this.color =
              null !== (c = (0, n.colorToRgb)(this.options.color)) &&
              void 0 !== c
                ? c
                : { b: 0, g: 0, r: 0 }),
            (this.position =
              null !==
                (d =
                  null === (l = this.initialPosition) || void 0 === l
                    ? void 0
                    : l.copy()) && void 0 !== d
                ? d
                : this.calcPosition())
        }
        attract(t) {
          const e = this.container,
            i = this.options
          if (i.draggable) {
            const t = e.interactivity.mouse
            if (t.clicking && t.downPosition) {
              ;(0, o.getDistance)(this.position, t.downPosition) <= this.size &&
                (this.dragging = !0)
            } else this.dragging = !1
            this.dragging &&
              t.position &&
              ((this.position.x = t.position.x),
              (this.position.y = t.position.y))
          }
          const n = t.getPosition(),
            {
              dx: s,
              dy: a,
              distance: c,
            } = (0, o.getDistances)(this.position, n),
            l = r.Vector.create(s, a)
          if (
            ((l.length = (this.mass / Math.pow(c, 2)) * e.retina.reduceFactor),
            c < this.size + t.getRadius())
          ) {
            const o = 0.033 * t.getRadius() * e.retina.pixelRatio
            ;(this.size > t.getRadius() && c < this.size - t.getRadius()) ||
            (void 0 !== t.absorberOrbit && t.absorberOrbit.length < 0)
              ? i.destroy
                ? t.destroy()
                : ((t.needsNewPosition = !0), this.updateParticlePosition(t, l))
              : (i.destroy && (t.size.value -= o),
                this.updateParticlePosition(t, l)),
              (this.limit.radius <= 0 || this.size < this.limit.radius) &&
                (this.size += o),
              (this.limit.mass <= 0 || this.mass < this.limit.mass) &&
                (this.mass +=
                  o * this.options.size.density * e.retina.reduceFactor)
          } else this.updateParticlePosition(t, l)
        }
        resize() {
          const t = this.initialPosition
          this.position =
            t && (0, a.isPointInside)(t, this.container.canvas.size)
              ? t
              : this.calcPosition()
        }
        draw(t) {
          t.translate(this.position.x, this.position.y),
            t.beginPath(),
            t.arc(0, 0, this.size, 0, 2 * Math.PI, !1),
            t.closePath(),
            (t.fillStyle = (0, n.getStyleFromRgb)(this.color, this.opacity)),
            t.fill()
        }
        calcPosition() {
          const t = (0, o.calcPositionOrRandomFromSizeRanged)({
            size: this.container.canvas.size,
            position: this.options.position,
          })
          return r.Vector.create(t.x, t.y)
        }
        updateParticlePosition(t, e) {
          var i
          if (t.destroyed) return
          const n = this.container,
            s = n.canvas.size
          if (t.needsNewPosition) {
            const e = (0, o.calcPositionOrRandomFromSize)({ size: s })
            t.position.setTo(e),
              t.velocity.setTo(t.initialVelocity),
              (t.absorberOrbit = void 0),
              (t.needsNewPosition = !1)
          }
          if (this.options.orbits) {
            if (
              (void 0 === t.absorberOrbit &&
                ((t.absorberOrbit = r.Vector.create(0, 0)),
                (t.absorberOrbit.length = (0, o.getDistance)(
                  t.getPosition(),
                  this.position
                )),
                (t.absorberOrbit.angle = Math.random() * Math.PI * 2)),
              t.absorberOrbit.length <= this.size && !this.options.destroy)
            ) {
              const e = Math.min(s.width, s.height)
              t.absorberOrbit.length = e * (0.2 * Math.random() - 0.1 + 1)
            }
            void 0 === t.absorberOrbitDirection &&
              (t.absorberOrbitDirection =
                t.velocity.x >= 0 ? 'clockwise' : 'counter-clockwise')
            const a = t.absorberOrbit.length,
              c = t.absorberOrbit.angle,
              l = t.absorberOrbitDirection
            t.velocity.setTo(r.Vector.origin)
            const d = {
              x: 'clockwise' === l ? Math.cos : Math.sin,
              y: 'clockwise' === l ? Math.sin : Math.cos,
            }
            ;(t.position.x = this.position.x + a * d.x(c)),
              (t.position.y = this.position.y + a * d.y(c)),
              (t.absorberOrbit.length -= e.length),
              (t.absorberOrbit.angle +=
                (((null !== (i = t.retina.moveSpeed) && void 0 !== i ? i : 0) *
                  n.retina.pixelRatio) /
                  100) *
                n.retina.reduceFactor)
          } else {
            const i = r.Vector.origin
            ;(i.length = e.length), (i.angle = e.angle), t.velocity.addTo(i)
          }
        }
      }
    },
    86046: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Absorbers = void 0)
      const o = i(47095),
        n = i(67488),
        s = i(47912)
      e.Absorbers = class {
        constructor(t) {
          ;(this.container = t),
            (this.array = []),
            (this.absorbers = []),
            (this.interactivityAbsorbers = [])
          const e = t
          ;(e.getAbsorber = (t) =>
            void 0 === t || 'number' === typeof t
              ? this.array[t || 0]
              : this.array.find((e) => e.name === t)),
            (e.addAbsorber = (t, e) => this.addAbsorber(t, e))
        }
        init(t) {
          var e, i
          if (!t) return
          t.absorbers &&
            (t.absorbers instanceof Array
              ? (this.absorbers = t.absorbers.map((t) => {
                  const e = new o.Absorber()
                  return e.load(t), e
                }))
              : (this.absorbers instanceof Array &&
                  (this.absorbers = new o.Absorber()),
                this.absorbers.load(t.absorbers)))
          const n =
            null ===
              (i =
                null === (e = t.interactivity) || void 0 === e
                  ? void 0
                  : e.modes) || void 0 === i
              ? void 0
              : i.absorbers
          if (
            (n &&
              (n instanceof Array
                ? (this.interactivityAbsorbers = n.map((t) => {
                    const e = new o.Absorber()
                    return e.load(t), e
                  }))
                : (this.interactivityAbsorbers instanceof Array &&
                    (this.interactivityAbsorbers = new o.Absorber()),
                  this.interactivityAbsorbers.load(n))),
            this.absorbers instanceof Array)
          )
            for (const o of this.absorbers) this.addAbsorber(o)
          else this.addAbsorber(this.absorbers)
        }
        particleUpdate(t) {
          for (const e of this.array) if ((e.attract(t), t.destroyed)) break
        }
        draw(t) {
          for (const e of this.array) t.save(), e.draw(t), t.restore()
        }
        stop() {
          this.array = []
        }
        resize() {
          for (const t of this.array) t.resize()
        }
        handleClickMode(t) {
          const e = this.absorbers,
            i = this.interactivityAbsorbers
          if ('absorber' === t) {
            let t
            i instanceof Array
              ? i.length > 0 && (t = (0, s.itemFromArray)(i))
              : (t = i)
            const o =
                null !== t && void 0 !== t
                  ? t
                  : e instanceof Array
                  ? (0, s.itemFromArray)(e)
                  : e,
              n = this.container.interactivity.mouse.clickPosition
            this.addAbsorber(o, n)
          }
        }
        addAbsorber(t, e) {
          const i = new n.AbsorberInstance(this, this.container, t, e)
          return this.array.push(i), i
        }
        removeAbsorber(t) {
          const e = this.array.indexOf(t)
          e >= 0 && this.array.splice(e, 1)
        }
      }
    },
    70032: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    47095: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Absorber = void 0)
      const o = i(74668),
        n = i(90822),
        s = i(10931)
      e.Absorber = class {
        constructor() {
          ;(this.color = new n.OptionsColor()),
            (this.color.value = '#000000'),
            (this.draggable = !1),
            (this.opacity = 1),
            (this.destroy = !0),
            (this.orbits = !1),
            (this.size = new o.AbsorberSize())
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.color &&
              (this.color = n.OptionsColor.create(this.color, t.color)),
            void 0 !== t.draggable && (this.draggable = t.draggable),
            (this.name = t.name),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            void 0 !== t.position &&
              ((this.position = {}),
              void 0 !== t.position.x &&
                (this.position.x = (0, s.setRangeValue)(t.position.x)),
              void 0 !== t.position.y &&
                (this.position.y = (0, s.setRangeValue)(t.position.y))),
            void 0 !== t.size && this.size.load(t.size),
            void 0 !== t.destroy && (this.destroy = t.destroy),
            void 0 !== t.orbits && (this.orbits = t.orbits))
        }
      }
    },
    74668: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AbsorberSize = void 0)
      const o = i(19374),
        n = i(56782)
      class s extends n.ValueWithRandom {
        constructor() {
          super(),
            (this.density = 5),
            (this.random.minimumValue = 1),
            (this.value = 50),
            (this.limit = new o.AbsorberSizeLimit())
        }
        load(t) {
          t &&
            (super.load(t),
            void 0 !== t.density && (this.density = t.density),
            'number' === typeof t.limit
              ? (this.limit.radius = t.limit)
              : this.limit.load(t.limit))
        }
      }
      e.AbsorberSize = s
    },
    19374: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AbsorberSizeLimit = void 0)
      e.AbsorberSizeLimit = class {
        constructor() {
          ;(this.radius = 0), (this.mass = 0)
        }
        load(t) {
          t &&
            (void 0 !== t.mass && (this.mass = t.mass),
            void 0 !== t.radius && (this.radius = t.radius))
        }
      }
    },
    57460: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    21885: function (t, e, i) {
      'use strict'
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i)
                var n = Object.getOwnPropertyDescriptor(e, i)
                ;(n &&
                  !('get' in n
                    ? !e.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return e[i]
                    },
                  }),
                  Object.defineProperty(t, o, n)
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i])
              }),
        n =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              'default' === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadAbsorbersPlugin = void 0)
      const s = i(47095),
        r = i(86046),
        a = i(47912)
      class c {
        constructor() {
          this.id = 'absorbers'
        }
        getPlugin(t) {
          return new r.Absorbers(t)
        }
        needsPlugin(t) {
          var e, i, o
          if (void 0 === t) return !1
          const n = t.absorbers
          return n instanceof Array
            ? !!n.length
            : !!n ||
                !(
                  !(null ===
                    (o =
                      null ===
                        (i =
                          null === (e = t.interactivity) || void 0 === e
                            ? void 0
                            : e.events) || void 0 === i
                        ? void 0
                        : i.onClick) || void 0 === o
                    ? void 0
                    : o.mode) ||
                  !(0, a.isInArray)(
                    'absorber',
                    t.interactivity.events.onClick.mode
                  )
                )
        }
        loadOptions(t, e) {
          var i, o
          if (!this.needsPlugin(t) && !this.needsPlugin(e)) return
          const n = t
          if (null === e || void 0 === e ? void 0 : e.absorbers)
            if (
              (null === e || void 0 === e ? void 0 : e.absorbers) instanceof
              Array
            )
              n.absorbers =
                null === e || void 0 === e
                  ? void 0
                  : e.absorbers.map((t) => {
                      const e = new s.Absorber()
                      return e.load(t), e
                    })
            else {
              let t = n.absorbers
              void 0 === (null === t || void 0 === t ? void 0 : t.load) &&
                (n.absorbers = t = new s.Absorber()),
                t.load(null === e || void 0 === e ? void 0 : e.absorbers)
            }
          const r =
            null ===
              (o =
                null ===
                  (i = null === e || void 0 === e ? void 0 : e.interactivity) ||
                void 0 === i
                  ? void 0
                  : i.modes) || void 0 === o
              ? void 0
              : o.absorbers
          if (r)
            if (r instanceof Array)
              n.interactivity.modes.absorbers = r.map((t) => {
                const e = new s.Absorber()
                return e.load(t), e
              })
            else {
              let t = n.interactivity.modes.absorbers
              void 0 === (null === t || void 0 === t ? void 0 : t.load) &&
                (n.interactivity.modes.absorbers = t = new s.Absorber()),
                t.load(r)
            }
        }
      }
      ;(e.loadAbsorbersPlugin = async function (t) {
        const e = new c()
        await t.addPlugin(e)
      }),
        n(i(70032), e),
        n(i(57460), e)
    },
    73015: function (t, e, i) {
      'use strict'
      var o,
        n,
        s,
        r =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        a =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EmitterInstance = void 0)
      const c = i(10931),
        l = i(47912),
        d = i(1373),
        u = i(53031),
        h = i(28774)
      ;(e.EmitterInstance = class {
        constructor(t, e, i, c, p) {
          var v, f, y, g, b, m, w, _
          ;(this.emitters = e),
            (this.container = i),
            o.set(this, void 0),
            n.set(this, void 0),
            s.set(this, void 0),
            r(this, s, t, 'f'),
            (this.currentDuration = 0),
            (this.currentEmitDelay = 0),
            (this.currentSpawnDelay = 0),
            (this.initialPosition = p),
            c instanceof d.Emitter
              ? (this.options = c)
              : ((this.options = new d.Emitter()), this.options.load(c)),
            (this.spawnDelay =
              (1e3 *
                (null !== (v = this.options.life.delay) && void 0 !== v
                  ? v
                  : 0)) /
              this.container.retina.reduceFactor),
            (this.position =
              null !== (f = this.initialPosition) && void 0 !== f
                ? f
                : this.calcPosition()),
            (this.name = this.options.name),
            (this.shape =
              null === (y = a(this, s, 'f').emitterShapeManager) || void 0 === y
                ? void 0
                : y.getShape(this.options.shape)),
            (this.fill = this.options.fill),
            r(this, o, !this.options.life.wait, 'f'),
            r(this, n, !1, 'f')
          let S = (0, l.deepExtend)({}, this.options.particles)
          ;(null !== S && void 0 !== S) || (S = {}),
            (null !== (g = S.move) && void 0 !== g) || (S.move = {}),
            (null !== (b = (_ = S.move).direction) && void 0 !== b) ||
              (_.direction = this.options.direction),
            this.options.spawnColor &&
              (this.spawnColor = (0, h.colorToHsl)(this.options.spawnColor)),
            (this.paused = !this.options.autoPlay),
            (this.particlesOptions = S),
            (this.size =
              null !== (m = this.options.size) && void 0 !== m
                ? m
                : (() => {
                    const t = new u.EmitterSize()
                    return t.load({ height: 0, mode: 'percent', width: 0 }), t
                  })()),
            (this.lifeCount =
              null !== (w = this.options.life.count) && void 0 !== w ? w : -1),
            (this.immortal = this.lifeCount <= 0),
            this.play()
        }
        externalPlay() {
          ;(this.paused = !1), this.play()
        }
        externalPause() {
          ;(this.paused = !0), this.pause()
        }
        play() {
          var t
          if (
            !this.paused &&
            this.container.retina.reduceFactor &&
            (this.lifeCount > 0 || this.immortal || !this.options.life.count) &&
            (a(this, o, 'f') ||
              this.currentSpawnDelay >=
                (null !== (t = this.spawnDelay) && void 0 !== t ? t : 0))
          ) {
            if (void 0 === this.emitDelay) {
              const t = (0, c.getRangeValue)(this.options.rate.delay)
              this.emitDelay = (1e3 * t) / this.container.retina.reduceFactor
            }
            ;(this.lifeCount > 0 || this.immortal) && this.prepareToDie()
          }
        }
        pause() {
          this.paused || delete this.emitDelay
        }
        resize() {
          const t = this.initialPosition
          this.position =
            t && (0, l.isPointInside)(t, this.container.canvas.size)
              ? t
              : this.calcPosition()
        }
        update(t) {
          var e, i, s
          this.paused ||
            (a(this, o, 'f') &&
              (r(this, o, !1, 'f'),
              (this.currentSpawnDelay =
                null !== (e = this.spawnDelay) && void 0 !== e ? e : 0),
              (this.currentEmitDelay =
                null !== (i = this.emitDelay) && void 0 !== i ? i : 0)),
            a(this, n, 'f') ||
              (r(this, n, !0, 'f'),
              this.emitParticles(this.options.startCount)),
            void 0 !== this.duration &&
              ((this.currentDuration += t.value),
              this.currentDuration >= this.duration &&
                (this.pause(),
                void 0 !== this.spawnDelay && delete this.spawnDelay,
                this.immortal || this.lifeCount--,
                this.lifeCount > 0 || this.immortal
                  ? ((this.position = this.calcPosition()),
                    (this.spawnDelay =
                      (1e3 *
                        (null !== (s = this.options.life.delay) && void 0 !== s
                          ? s
                          : 0)) /
                      this.container.retina.reduceFactor))
                  : this.destroy(),
                (this.currentDuration -= this.duration),
                delete this.duration)),
            void 0 !== this.spawnDelay &&
              ((this.currentSpawnDelay += t.value),
              this.currentSpawnDelay >= this.spawnDelay &&
                (this.play(),
                (this.currentSpawnDelay -= this.currentSpawnDelay),
                delete this.spawnDelay)),
            void 0 !== this.emitDelay &&
              ((this.currentEmitDelay += t.value),
              this.currentEmitDelay >= this.emitDelay &&
                (this.emit(), (this.currentEmitDelay -= this.emitDelay))))
        }
        getPosition() {
          if (this.options.domId) {
            const t = this.container,
              e = document.getElementById(this.options.domId)
            if (e) {
              const i = e.getBoundingClientRect()
              return {
                x: (i.x + i.width / 2) * t.retina.pixelRatio,
                y: (i.y + i.height / 2) * t.retina.pixelRatio,
              }
            }
          }
          return this.position
        }
        getSize() {
          const t = this.container
          if (this.options.domId) {
            const e = document.getElementById(this.options.domId)
            if (e) {
              const i = e.getBoundingClientRect()
              return {
                width: i.width * t.retina.pixelRatio,
                height: i.height * t.retina.pixelRatio,
              }
            }
          }
          return {
            width:
              'percent' === this.size.mode
                ? (t.canvas.size.width * this.size.width) / 100
                : this.size.width,
            height:
              'percent' === this.size.mode
                ? (t.canvas.size.height * this.size.height) / 100
                : this.size.height,
          }
        }
        prepareToDie() {
          var t
          if (this.paused) return
          const e =
            null === (t = this.options.life) || void 0 === t
              ? void 0
              : t.duration
          this.container.retina.reduceFactor &&
            (this.lifeCount > 0 || this.immortal) &&
            void 0 !== e &&
            e > 0 &&
            (this.duration = 1e3 * e)
        }
        destroy() {
          this.emitters.removeEmitter(this)
        }
        calcPosition() {
          return (0, c.calcPositionOrRandomFromSizeRanged)({
            size: this.container.canvas.size,
            position: this.options.position,
          })
        }
        emit() {
          if (this.paused) return
          const t = (0, c.getRangeValue)(this.options.rate.quantity)
          this.emitParticles(t)
        }
        emitParticles(t) {
          var e, i, o
          const n = this.getPosition(),
            s = this.getSize()
          for (let r = 0; r < t; r++) {
            const t = (0, l.deepExtend)({}, this.particlesOptions)
            if (this.spawnColor) {
              const i =
                null === (e = this.options.spawnColor) || void 0 === e
                  ? void 0
                  : e.animation
              i &&
                ((this.spawnColor.h = this.setColorAnimation(
                  i.h,
                  this.spawnColor.h,
                  360
                )),
                (this.spawnColor.s = this.setColorAnimation(
                  i.s,
                  this.spawnColor.s,
                  100
                )),
                (this.spawnColor.l = this.setColorAnimation(
                  i.l,
                  this.spawnColor.l,
                  100
                ))),
                t.color
                  ? (t.color.value = this.spawnColor)
                  : (t.color = { value: this.spawnColor })
            }
            if (!n) return
            const r =
              null !==
                (o =
                  null === (i = this.shape) || void 0 === i
                    ? void 0
                    : i.randomPosition(n, s, this.fill)) && void 0 !== o
                ? o
                : n
            this.container.particles.addParticle(r, t)
          }
        }
        setColorAnimation(t, e, i) {
          var o
          const n = this.container
          if (!t.enable) return e
          const s = (0, c.randomInRange)(t.offset),
            r =
              (1e3 * (0, c.getRangeValue)(this.options.rate.delay)) /
              n.retina.reduceFactor
          return (
            (e +
              ((0, c.getRangeValue)(
                null !== (o = t.speed) && void 0 !== o ? o : 0
              ) *
                n.fpsLimit) /
                r +
              3.6 * s) %
            i
          )
        }
      }),
        (o = new WeakMap()),
        (n = new WeakMap()),
        (s = new WeakMap())
    },
    90826: function (t, e, i) {
      'use strict'
      var o,
        n =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        s =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Emitters = void 0)
      const r = i(47912),
        a = i(1373),
        c = i(73015)
      ;(e.Emitters = class {
        constructor(t, e) {
          ;(this.container = e),
            o.set(this, void 0),
            n(this, o, t, 'f'),
            (this.array = []),
            (this.emitters = []),
            (this.interactivityEmitters = [])
          const i = e
          ;(i.getEmitter = (t) =>
            void 0 === t || 'number' === typeof t
              ? this.array[t || 0]
              : this.array.find((e) => e.name === t)),
            (i.addEmitter = (t, e) => this.addEmitter(t, e)),
            (i.removeEmitter = (t) => {
              const e = i.getEmitter(t)
              e && this.removeEmitter(e)
            }),
            (i.playEmitter = (t) => {
              const e = i.getEmitter(t)
              e && e.externalPlay()
            }),
            (i.pauseEmitter = (t) => {
              const e = i.getEmitter(t)
              e && e.externalPause()
            })
        }
        init(t) {
          var e, i
          if (!t) return
          t.emitters &&
            (t.emitters instanceof Array
              ? (this.emitters = t.emitters.map((t) => {
                  const e = new a.Emitter()
                  return e.load(t), e
                }))
              : (this.emitters instanceof Array &&
                  (this.emitters = new a.Emitter()),
                this.emitters.load(t.emitters)))
          const o =
            null ===
              (i =
                null === (e = t.interactivity) || void 0 === e
                  ? void 0
                  : e.modes) || void 0 === i
              ? void 0
              : i.emitters
          if (
            (o &&
              (o instanceof Array
                ? (this.interactivityEmitters = o.map((t) => {
                    const e = new a.Emitter()
                    return e.load(t), e
                  }))
                : (this.interactivityEmitters instanceof Array &&
                    (this.interactivityEmitters = new a.Emitter()),
                  this.interactivityEmitters.load(o))),
            this.emitters instanceof Array)
          )
            for (const n of this.emitters) this.addEmitter(n)
          else this.addEmitter(this.emitters)
        }
        play() {
          for (const t of this.array) t.play()
        }
        pause() {
          for (const t of this.array) t.pause()
        }
        stop() {
          this.array = []
        }
        update(t) {
          for (const e of this.array) e.update(t)
        }
        handleClickMode(t) {
          const e = this.emitters,
            i = this.interactivityEmitters
          if ('emitter' === t) {
            let t
            i instanceof Array
              ? i.length > 0 && (t = (0, r.itemFromArray)(i))
              : (t = i)
            const o =
                null !== t && void 0 !== t
                  ? t
                  : e instanceof Array
                  ? (0, r.itemFromArray)(e)
                  : e,
              n = this.container.interactivity.mouse.clickPosition
            this.addEmitter((0, r.deepExtend)({}, o), n)
          }
        }
        resize() {
          for (const t of this.array) t.resize()
        }
        addEmitter(t, e) {
          const i = new a.Emitter()
          i.load(t)
          const n = new c.EmitterInstance(
            s(this, o, 'f'),
            this,
            this.container,
            i,
            e
          )
          return this.array.push(n), n
        }
        removeEmitter(t) {
          const e = this.array.indexOf(t)
          e >= 0 && this.array.splice(e, 1)
        }
      }),
        (o = new WeakMap())
    },
    98960: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    95665: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    90173: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    1373: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Emitter = void 0)
      const o = i(47097),
        n = i(80702),
        s = i(51868),
        r = i(53031),
        a = i(47912),
        c = i(10931)
      e.Emitter = class {
        constructor() {
          ;(this.autoPlay = !0),
            (this.fill = !0),
            (this.life = new n.EmitterLife()),
            (this.rate = new s.EmitterRate()),
            (this.shape = 'square'),
            (this.startCount = 0)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
            void 0 !== t.size &&
              (void 0 === this.size && (this.size = new r.EmitterSize()),
              this.size.load(t.size)),
            void 0 !== t.direction && (this.direction = t.direction),
            (this.domId = t.domId),
            void 0 !== t.fill && (this.fill = t.fill),
            this.life.load(t.life),
            (this.name = t.name),
            void 0 !== t.particles &&
              (this.particles = (0, a.deepExtend)({}, t.particles)),
            this.rate.load(t.rate),
            void 0 !== t.shape && (this.shape = t.shape),
            void 0 !== t.position &&
              ((this.position = {}),
              void 0 !== t.position.x &&
                (this.position.x = (0, c.setRangeValue)(t.position.x)),
              void 0 !== t.position.y &&
                (this.position.y = (0, c.setRangeValue)(t.position.y))),
            void 0 !== t.spawnColor &&
              (void 0 === this.spawnColor &&
                (this.spawnColor = new o.AnimatableColor()),
              this.spawnColor.load(t.spawnColor)),
            void 0 !== t.startCount && (this.startCount = t.startCount))
        }
      }
    },
    80702: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EmitterLife = void 0)
      e.EmitterLife = class {
        constructor() {
          this.wait = !1
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.count && (this.count = t.count),
            void 0 !== t.delay && (this.delay = t.delay),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.wait && (this.wait = t.wait))
        }
      }
    },
    51868: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EmitterRate = void 0)
      const o = i(10931)
      e.EmitterRate = class {
        constructor() {
          ;(this.quantity = 1), (this.delay = 0.1)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.quantity &&
              (this.quantity = (0, o.setRangeValue)(t.quantity)),
            void 0 !== t.delay && (this.delay = (0, o.setRangeValue)(t.delay)))
        }
      }
    },
    53031: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.EmitterSize = void 0)
      e.EmitterSize = class {
        constructor() {
          ;(this.mode = 'percent'), (this.height = 0), (this.width = 0)
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.height && (this.height = t.height),
            void 0 !== t.width && (this.width = t.width))
        }
      }
    },
    16620: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    84169: function (t, e) {
      'use strict'
      var i,
        o =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ShapeManager = void 0)
      const n = new Map()
      ;(e.ShapeManager = class {
        constructor(t) {
          i.set(this, void 0), o(this, i, t, 'f')
        }
        addShape(t, e) {
          this.getShape(t) || n.set(t, e)
        }
        getShape(t) {
          return n.get(t)
        }
        getSupportedShapes() {
          return n.keys()
        }
      }),
        (i = new WeakMap())
    },
    63661: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CircleShape = void 0)
      e.CircleShape = class {
        randomPosition(t, e, i) {
          const [o, n] = [e.width / 2, e.height / 2],
            s = ((t, e) => {
              const i = Math.random() / 4,
                o = Math.atan((e / t) * Math.tan(2 * Math.PI * i)),
                n = Math.random()
              return n < 0.25
                ? o
                : n < 0.5
                ? Math.PI - o
                : n < 0.75
                ? Math.PI + o
                : -o
            })(o, n),
            r =
              ((d = s),
              ((c = o) * (l = n)) /
                Math.sqrt((l * Math.cos(d)) ** 2 + (c * Math.sin(d)) ** 2)),
            a = i ? r * Math.sqrt(Math.random()) : r
          var c, l, d
          return { x: t.x + a * Math.cos(s), y: t.y + a * Math.sin(s) }
        }
      }
    },
    90524: function (t, e) {
      'use strict'
      function i(t, e) {
        return t + e * (Math.random() - 0.5)
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SquareShape = void 0)
      e.SquareShape = class {
        randomPosition(t, e, o) {
          if (o) return { x: i(t.x, e.width), y: i(t.y, e.height) }
          {
            const i = e.width / 2,
              o = e.height / 2,
              n = Math.floor(4 * Math.random()),
              s = 2 * (Math.random() - 0.5)
            switch (n) {
              case 0:
                return { x: t.x + s * i, y: t.y - o }
              case 1:
                return { x: t.x - i, y: t.y + s * o }
              case 2:
                return { x: t.x + s * i, y: t.y + o }
              case 3:
              default:
                return { x: t.x + i, y: t.y + s * o }
            }
          }
        }
      }
    },
    74506: function (t, e, i) {
      'use strict'
      var o,
        n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i)
                var n = Object.getOwnPropertyDescriptor(e, i)
                ;(n &&
                  !('get' in n
                    ? !e.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return e[i]
                    },
                  }),
                  Object.defineProperty(t, o, n)
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i])
              }),
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              'default' === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                n(e, t, i)
          },
        r =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        a =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadEmittersPlugin = void 0)
      const c = i(63661),
        l = i(1373),
        d = i(90826),
        u = i(84169),
        h = i(90524),
        p = i(47912)
      class v {
        constructor(t) {
          o.set(this, void 0), r(this, o, t, 'f'), (this.id = 'emitters')
        }
        getPlugin(t) {
          return new d.Emitters(a(this, o, 'f'), t)
        }
        needsPlugin(t) {
          var e, i, o
          if (void 0 === t) return !1
          const n = t.emitters
          return (
            (n instanceof Array && !!n.length) ||
            void 0 !== n ||
            (!!(null ===
              (o =
                null ===
                  (i =
                    null === (e = t.interactivity) || void 0 === e
                      ? void 0
                      : e.events) || void 0 === i
                  ? void 0
                  : i.onClick) || void 0 === o
              ? void 0
              : o.mode) &&
              (0, p.isInArray)('emitter', t.interactivity.events.onClick.mode))
          )
        }
        loadOptions(t, e) {
          var i, o
          if (!this.needsPlugin(t) && !this.needsPlugin(e)) return
          const n = t
          if (null === e || void 0 === e ? void 0 : e.emitters)
            if (
              (null === e || void 0 === e ? void 0 : e.emitters) instanceof
              Array
            )
              n.emitters =
                null === e || void 0 === e
                  ? void 0
                  : e.emitters.map((t) => {
                      const e = new l.Emitter()
                      return e.load(t), e
                    })
            else {
              let t = n.emitters
              void 0 === (null === t || void 0 === t ? void 0 : t.load) &&
                (n.emitters = t = new l.Emitter()),
                t.load(null === e || void 0 === e ? void 0 : e.emitters)
            }
          const s =
            null ===
              (o =
                null ===
                  (i = null === e || void 0 === e ? void 0 : e.interactivity) ||
                void 0 === i
                  ? void 0
                  : i.modes) || void 0 === o
              ? void 0
              : o.emitters
          if (s)
            if (s instanceof Array)
              n.interactivity.modes.emitters = s.map((t) => {
                const e = new l.Emitter()
                return e.load(t), e
              })
            else {
              let t = n.interactivity.modes.emitters
              void 0 === (null === t || void 0 === t ? void 0 : t.load) &&
                (n.interactivity.modes.emitters = t = new l.Emitter()),
                t.load(s)
            }
        }
      }
      ;(o = new WeakMap()),
        (e.loadEmittersPlugin = async function (t) {
          t.emitterShapeManager ||
            (t.emitterShapeManager = new u.ShapeManager(t)),
            t.addEmitterShape ||
              (t.addEmitterShape = (e, i) => {
                var o
                null === (o = t.emitterShapeManager) ||
                  void 0 === o ||
                  o.addShape(e, i)
              })
          const e = new v(t)
          await t.addPlugin(e),
            t.addEmitterShape('circle', new c.CircleShape()),
            t.addEmitterShape('square', new h.SquareShape())
        }),
        s(i(98960), e),
        s(i(95665), e),
        s(i(90173), e),
        s(i(16620), e)
    },
    31451: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    31938: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    15445: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    3189: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PolygonMask = void 0)
      const o = i(71796),
        n = i(29229),
        s = i(51524),
        r = i(4274),
        a = i(47912)
      e.PolygonMask = class {
        constructor() {
          ;(this.draw = new o.PolygonMaskDraw()),
            (this.enable = !1),
            (this.inline = new n.PolygonMaskInline()),
            (this.move = new r.PolygonMaskMove()),
            (this.scale = 1),
            (this.type = 'none')
        }
        get inlineArrangement() {
          return this.inline.arrangement
        }
        set inlineArrangement(t) {
          this.inline.arrangement = t
        }
        load(t) {
          var e
          if (!t) return
          this.draw.load(t.draw)
          const i =
            null !== (e = t.inline) && void 0 !== e
              ? e
              : { arrangement: t.inlineArrangement }
          void 0 !== i && this.inline.load(i),
            this.move.load(t.move),
            void 0 !== t.scale && (this.scale = t.scale),
            void 0 !== t.type && (this.type = t.type),
            void 0 !== t.enable
              ? (this.enable = t.enable)
              : (this.enable = 'none' !== this.type),
            void 0 !== t.url && (this.url = t.url),
            void 0 !== t.data &&
              ('string' === typeof t.data
                ? (this.data = t.data)
                : ((this.data = new s.PolygonMaskLocalSvg()),
                  this.data.load(t.data))),
            void 0 !== t.position &&
              (this.position = (0, a.deepExtend)({}, t.position))
        }
      }
    },
    71796: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PolygonMaskDraw = void 0)
      const o = i(90822),
        n = i(53855)
      e.PolygonMaskDraw = class {
        constructor() {
          ;(this.enable = !1), (this.stroke = new n.PolygonMaskDrawStroke())
        }
        get lineWidth() {
          return this.stroke.width
        }
        set lineWidth(t) {
          this.stroke.width = t
        }
        get lineColor() {
          return this.stroke.color
        }
        set lineColor(t) {
          this.stroke.color = o.OptionsColor.create(this.stroke.color, t)
        }
        load(t) {
          var e
          if (!t) return
          void 0 !== t.enable && (this.enable = t.enable)
          const i =
            null !== (e = t.stroke) && void 0 !== e
              ? e
              : { color: t.lineColor, width: t.lineWidth }
          this.stroke.load(i)
        }
      }
    },
    53855: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PolygonMaskDrawStroke = void 0)
      const o = i(90822),
        n = i(28774)
      e.PolygonMaskDrawStroke = class {
        constructor() {
          ;(this.color = new o.OptionsColor()),
            (this.width = 0.5),
            (this.opacity = 1)
        }
        load(t) {
          var e
          t &&
            ((this.color = o.OptionsColor.create(this.color, t.color)),
            'string' === typeof this.color.value &&
              (this.opacity =
                null !== (e = (0, n.stringToAlpha)(this.color.value)) &&
                void 0 !== e
                  ? e
                  : this.opacity),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            void 0 !== t.width && (this.width = t.width))
        }
      }
    },
    29229: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PolygonMaskInline = void 0)
      e.PolygonMaskInline = class {
        constructor() {
          this.arrangement = 'one-per-point'
        }
        load(t) {
          t && void 0 !== t.arrangement && (this.arrangement = t.arrangement)
        }
      }
    },
    51524: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PolygonMaskLocalSvg = void 0)
      e.PolygonMaskLocalSvg = class {
        constructor() {
          ;(this.path = []), (this.size = { height: 0, width: 0 })
        }
        load(t) {
          t &&
            (void 0 !== t.path && (this.path = t.path),
            void 0 !== t.size &&
              (void 0 !== t.size.width && (this.size.width = t.size.width),
              void 0 !== t.size.height && (this.size.height = t.size.height)))
        }
      }
    },
    4274: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PolygonMaskMove = void 0)
      e.PolygonMaskMove = class {
        constructor() {
          ;(this.radius = 10), (this.type = 'path')
        }
        load(t) {
          t &&
            (void 0 !== t.radius && (this.radius = t.radius),
            void 0 !== t.type && (this.type = t.type))
        }
      }
    },
    41461: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    77094: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PolygonMaskInstance = void 0)
      const o = i(36066),
        n = i(47912),
        s = i(10931),
        r = i(95078),
        a = i(3189)
      e.PolygonMaskInstance = class {
        constructor(t) {
          ;(this.container = t),
            (this.dimension = { height: 0, width: 0 }),
            (this.path2DSupported = !!window.Path2D),
            (this.options = new a.PolygonMask()),
            (this.polygonMaskMoveRadius =
              this.options.move.radius * t.retina.pixelRatio)
        }
        async initAsync(t) {
          this.options.load(null === t || void 0 === t ? void 0 : t.polygon)
          const e = this.options
          ;(this.polygonMaskMoveRadius =
            e.move.radius * this.container.retina.pixelRatio),
            e.enable && (await this.initRawData())
        }
        resize() {
          const t = this.container,
            e = this.options
          e.enable &&
            'none' !== e.type &&
            (this.redrawTimeout && clearTimeout(this.redrawTimeout),
            (this.redrawTimeout = window.setTimeout(async () => {
              await this.initRawData(!0), await t.particles.redraw()
            }, 250)))
        }
        stop() {
          delete this.raw, delete this.paths
        }
        particlesInitialization() {
          const t = this.options
          return (
            !(
              !t.enable ||
              'inline' !== t.type ||
              ('one-per-point' !== t.inline.arrangement &&
                'per-point' !== t.inline.arrangement)
            ) && (this.drawPoints(), !0)
          )
        }
        particlePosition(t) {
          var e, i
          if (
            this.options.enable &&
            (null !==
              (i =
                null === (e = this.raw) || void 0 === e ? void 0 : e.length) &&
            void 0 !== i
              ? i
              : 0) > 0
          )
            return (0, n.deepExtend)({}, t || this.randomPoint())
        }
        particleBounce(t, e, i) {
          return this.polygonBounce(t, e, i)
        }
        clickPositionValid(t) {
          const e = this.options
          return (
            e.enable &&
            'none' !== e.type &&
            'inline' !== e.type &&
            this.checkInsidePolygon(t)
          )
        }
        draw(t) {
          var e
          if (!(null === (e = this.paths) || void 0 === e ? void 0 : e.length))
            return
          const i = this.options,
            n = i.draw
          if (!i.enable || !n.enable) return
          const s = this.raw
          for (const r of this.paths) {
            const e = r.path2d,
              i = this.path2DSupported
            t &&
              (i && e && this.offset
                ? (0, o.drawPolygonMaskPath)(t, e, n.stroke, this.offset)
                : s && (0, o.drawPolygonMask)(t, s, n.stroke))
          }
        }
        polygonBounce(t, e, i) {
          const n = this.options
          if (!this.raw || !n.enable || 'top' !== i) return !1
          if ('inside' === n.type || 'outside' === n.type) {
            let e, i, n
            const r = t.getPosition(),
              a = t.getRadius()
            for (
              let c = 0, l = this.raw.length - 1;
              c < this.raw.length;
              l = c++
            ) {
              const d = this.raw[c],
                u = this.raw[l]
              e = (0, o.calcClosestPtOnSegment)(d, u, r)
              const h = (0, s.getDistances)(r, e)
              if ((([i, n] = [h.dx, h.dy]), h.distance < a))
                return (0, o.segmentBounce)(d, u, t.velocity), !0
            }
            if (
              e &&
              void 0 !== i &&
              void 0 !== n &&
              !this.checkInsidePolygon(r)
            ) {
              const i = { x: 1, y: 1 }
              return (
                t.position.x >= e.x && (i.x = -1),
                t.position.y >= e.y && (i.y = -1),
                (t.position.x = e.x + 2 * a * i.x),
                (t.position.y = e.y + 2 * a * i.y),
                t.velocity.mult(-1),
                !0
              )
            }
          } else if ('inline' === n.type && t.initialPosition) {
            if (
              (0, s.getDistance)(t.initialPosition, t.getPosition()) >
              this.polygonMaskMoveRadius
            )
              return (
                (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
                (t.velocity.y = t.velocity.x / 2 - t.velocity.y),
                !0
              )
          }
          return !1
        }
        checkInsidePolygon(t) {
          var e, i
          const o = this.container,
            n = this.options
          if (!n.enable || 'none' === n.type || 'inline' === n.type) return !0
          if (!this.raw) throw new Error(r.Constants.noPolygonFound)
          const s = o.canvas.size,
            a =
              null !== (e = null === t || void 0 === t ? void 0 : t.x) &&
              void 0 !== e
                ? e
                : Math.random() * s.width,
            c =
              null !== (i = null === t || void 0 === t ? void 0 : t.y) &&
              void 0 !== i
                ? i
                : Math.random() * s.height
          let l = !1
          for (
            let r = 0, d = this.raw.length - 1;
            r < this.raw.length;
            d = r++
          ) {
            const t = this.raw[r],
              e = this.raw[d]
            t.y > c !== e.y > c &&
              a < ((e.x - t.x) * (c - t.y)) / (e.y - t.y) + t.x &&
              (l = !l)
          }
          return 'inside' === n.type ? l : 'outside' === n.type && !l
        }
        parseSvgPath(t, e) {
          var i, n, s
          const r = null !== e && void 0 !== e && e
          if (void 0 !== this.paths && !r) return this.raw
          const a = this.container,
            c = this.options,
            l = new DOMParser().parseFromString(t, 'image/svg+xml'),
            d = l.getElementsByTagName('svg')[0]
          let u = d.getElementsByTagName('path')
          u.length || (u = l.getElementsByTagName('path')), (this.paths = [])
          for (let o = 0; o < u.length; o++) {
            const t = u.item(o)
            t && this.paths.push({ element: t, length: t.getTotalLength() })
          }
          const h = a.retina.pixelRatio,
            p = c.scale / h
          ;(this.dimension.width =
            parseFloat(
              null !== (i = d.getAttribute('width')) && void 0 !== i ? i : '0'
            ) * p),
            (this.dimension.height =
              parseFloat(
                null !== (n = d.getAttribute('height')) && void 0 !== n
                  ? n
                  : '0'
              ) * p)
          const v =
            null !== (s = c.position) && void 0 !== s ? s : { x: 50, y: 50 }
          return (
            (this.offset = {
              x:
                (a.canvas.size.width * v.x) / (100 * h) -
                this.dimension.width / 2,
              y:
                (a.canvas.size.height * v.y) / (100 * h) -
                this.dimension.height / 2,
            }),
            (0, o.parsePaths)(this.paths, p, this.offset)
          )
        }
        async downloadSvgPath(t, e) {
          const i = this.options,
            o = t || i.url,
            n = null !== e && void 0 !== e && e
          if (!o || (void 0 !== this.paths && !n)) return this.raw
          const s = await fetch(o)
          if (!s.ok)
            throw new Error(
              'tsParticles Error - Error occurred during polygon mask download'
            )
          return this.parseSvgPath(await s.text(), e)
        }
        drawPoints() {
          if (this.raw)
            for (const t of this.raw)
              this.container.particles.addParticle({ x: t.x, y: t.y })
        }
        randomPoint() {
          const t = this.container,
            e = this.options
          let i
          if ('inline' === e.type)
            switch (e.inline.arrangement) {
              case 'random-point':
                i = this.getRandomPoint()
                break
              case 'random-length':
                i = this.getRandomPointByLength()
                break
              case 'equidistant':
                i = this.getEquidistantPointByIndex(t.particles.count)
                break
              case 'one-per-point':
              case 'per-point':
              default:
                i = this.getPointByIndex(t.particles.count)
            }
          else
            i = {
              x: Math.random() * t.canvas.size.width,
              y: Math.random() * t.canvas.size.height,
            }
          return this.checkInsidePolygon(i) ? i : this.randomPoint()
        }
        getRandomPoint() {
          if (!this.raw || !this.raw.length)
            throw new Error(r.Constants.noPolygonDataLoaded)
          const t = (0, n.itemFromArray)(this.raw)
          return { x: t.x, y: t.y }
        }
        getRandomPointByLength() {
          var t, e, i
          const o = this.options
          if (
            !this.raw ||
            !this.raw.length ||
            !(null === (t = this.paths) || void 0 === t ? void 0 : t.length)
          )
            throw new Error(r.Constants.noPolygonDataLoaded)
          const s = (0, n.itemFromArray)(this.paths),
            a = Math.floor(Math.random() * s.length) + 1,
            c = s.element.getPointAtLength(a)
          return {
            x:
              c.x * o.scale +
              ((null === (e = this.offset) || void 0 === e ? void 0 : e.x) ||
                0),
            y:
              c.y * o.scale +
              ((null === (i = this.offset) || void 0 === i ? void 0 : i.y) ||
                0),
          }
        }
        getEquidistantPointByIndex(t) {
          var e, i, o, n, s, a, c
          const l = this.container.actualOptions,
            d = this.options
          if (
            !this.raw ||
            !this.raw.length ||
            !(null === (e = this.paths) || void 0 === e ? void 0 : e.length)
          )
            throw new Error(r.Constants.noPolygonDataLoaded)
          let u,
            h = 0
          const p =
            this.paths.reduce((t, e) => t + e.length, 0) /
            l.particles.number.value
          for (const r of this.paths) {
            const e = p * t - h
            if (e <= r.length) {
              u = r.element.getPointAtLength(e)
              break
            }
            h += r.length
          }
          return {
            x:
              (null !== (i = null === u || void 0 === u ? void 0 : u.x) &&
              void 0 !== i
                ? i
                : 0) *
                d.scale +
              (null !==
                (n =
                  null === (o = this.offset) || void 0 === o ? void 0 : o.x) &&
              void 0 !== n
                ? n
                : 0),
            y:
              (null !== (s = null === u || void 0 === u ? void 0 : u.y) &&
              void 0 !== s
                ? s
                : 0) *
                d.scale +
              (null !==
                (c =
                  null === (a = this.offset) || void 0 === a ? void 0 : a.y) &&
              void 0 !== c
                ? c
                : 0),
          }
        }
        getPointByIndex(t) {
          if (!this.raw || !this.raw.length)
            throw new Error(r.Constants.noPolygonDataLoaded)
          const e = this.raw[t % this.raw.length]
          return { x: e.x, y: e.y }
        }
        createPath2D() {
          var t, e
          const i = this.options
          if (
            this.path2DSupported &&
            (null === (t = this.paths) || void 0 === t ? void 0 : t.length)
          )
            for (const o of this.paths) {
              const t =
                null === (e = o.element) || void 0 === e
                  ? void 0
                  : e.getAttribute('d')
              if (t) {
                const e = new Path2D(t),
                  n = document
                    .createElementNS('http://www.w3.org/2000/svg', 'svg')
                    .createSVGMatrix(),
                  s = new Path2D(),
                  r = n.scale(i.scale)
                s.addPath ? (s.addPath(e, r), (o.path2d = s)) : delete o.path2d
              } else delete o.path2d
              !o.path2d &&
                this.raw &&
                ((o.path2d = new Path2D()),
                o.path2d.moveTo(this.raw[0].x, this.raw[0].y),
                this.raw.forEach((t, e) => {
                  var i
                  e > 0 &&
                    (null === (i = o.path2d) ||
                      void 0 === i ||
                      i.lineTo(t.x, t.y))
                }),
                o.path2d.closePath())
            }
        }
        async initRawData(t) {
          const e = this.options
          if (e.url) this.raw = await this.downloadSvgPath(e.url, t)
          else if (e.data) {
            const i = e.data
            let o
            if ('string' !== typeof i) {
              const t =
                i.path instanceof Array
                  ? i.path.map((t) => `<path d="${t}" />`).join('')
                  : `<path d="${i.path}" />`
              o = `<svg ${'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'} width="${
                i.size.width
              }" height="${i.size.height}">${t}</svg>`
            } else o = i
            this.raw = this.parseSvgPath(o, t)
          }
          this.createPath2D()
        }
      }
    },
    36066: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.segmentBounce =
          e.calcClosestPtOnSegment =
          e.parsePaths =
          e.drawPolygonMaskPath =
          e.drawPolygonMask =
            void 0)
      const o = i(28774),
        n = i(78779),
        s = i(10931)
      ;(e.drawPolygonMask = function (t, e, i) {
        const n = (0, o.colorToRgb)(i.color)
        if (n) {
          t.beginPath(), t.moveTo(e[0].x, e[0].y)
          for (const i of e) t.lineTo(i.x, i.y)
          t.closePath(),
            (t.strokeStyle = (0, o.getStyleFromRgb)(n)),
            (t.lineWidth = i.width),
            t.stroke()
        }
      }),
        (e.drawPolygonMaskPath = function (t, e, i, n) {
          t.translate(n.x, n.y)
          const s = (0, o.colorToRgb)(i.color)
          s &&
            ((t.strokeStyle = (0, o.getStyleFromRgb)(s, i.opacity)),
            (t.lineWidth = i.width),
            t.stroke(e))
        }),
        (e.parsePaths = function (t, e, i) {
          var o
          const n = []
          for (const s of t) {
            const t = s.element.pathSegList,
              r =
                null !==
                  (o = null === t || void 0 === t ? void 0 : t.numberOfItems) &&
                void 0 !== o
                  ? o
                  : 0,
              a = { x: 0, y: 0 }
            for (let o = 0; o < r; o++) {
              const s = null === t || void 0 === t ? void 0 : t.getItem(o),
                r = window.SVGPathSeg
              switch (null === s || void 0 === s ? void 0 : s.pathSegType) {
                case r.PATHSEG_MOVETO_ABS:
                case r.PATHSEG_LINETO_ABS:
                case r.PATHSEG_CURVETO_CUBIC_ABS:
                case r.PATHSEG_CURVETO_QUADRATIC_ABS:
                case r.PATHSEG_ARC_ABS:
                case r.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                  const t = s
                  ;(a.x = t.x), (a.y = t.y)
                  break
                }
                case r.PATHSEG_LINETO_HORIZONTAL_ABS:
                  a.x = s.x
                  break
                case r.PATHSEG_LINETO_VERTICAL_ABS:
                  a.y = s.y
                  break
                case r.PATHSEG_LINETO_REL:
                case r.PATHSEG_MOVETO_REL:
                case r.PATHSEG_CURVETO_CUBIC_REL:
                case r.PATHSEG_CURVETO_QUADRATIC_REL:
                case r.PATHSEG_ARC_REL:
                case r.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                  const t = s
                  ;(a.x += t.x), (a.y += t.y)
                  break
                }
                case r.PATHSEG_LINETO_HORIZONTAL_REL:
                  a.x += s.x
                  break
                case r.PATHSEG_LINETO_VERTICAL_REL:
                  a.y += s.y
                  break
                case r.PATHSEG_UNKNOWN:
                case r.PATHSEG_CLOSEPATH:
                  continue
              }
              n.push({ x: a.x * e + i.x, y: a.y * e + i.y })
            }
          }
          return n
        }),
        (e.calcClosestPtOnSegment = function (t, e, i) {
          const { dx: o, dy: n } = (0, s.getDistances)(i, t),
            { dx: r, dy: a } = (0, s.getDistances)(e, t),
            c = (o * r + n * a) / (r ** 2 + a ** 2),
            l = {
              x: t.x + r * c,
              y: t.x + a * c,
              isOnSegment: c >= 0 && c <= 1,
            }
          return (
            c < 0
              ? ((l.x = t.x), (l.y = t.y))
              : c > 1 && ((l.x = e.x), (l.y = e.y)),
            l
          )
        }),
        (e.segmentBounce = function (t, e, i) {
          const { dx: o, dy: r } = (0, s.getDistances)(t, e),
            a = Math.atan2(r, o),
            c = n.Vector.create(Math.sin(a), -Math.cos(a)),
            l = 2 * (i.x * c.x + i.y * c.y)
          c.multTo(l), i.subFrom(c)
        })
    },
    15767: function (t, e, i) {
      'use strict'
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i)
                var n = Object.getOwnPropertyDescriptor(e, i)
                ;(n &&
                  !('get' in n
                    ? !e.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return e[i]
                    },
                  }),
                  Object.defineProperty(t, o, n)
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i])
              }),
        n =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, 'default', {
                  enumerable: !0,
                  value: e,
                })
              }
            : function (t, e) {
                t.default = e
              }),
        s =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t
            var e = {}
            if (null != t)
              for (var i in t)
                'default' !== i &&
                  Object.prototype.hasOwnProperty.call(t, i) &&
                  o(e, t, i)
            return n(e, t), e
          },
        r =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              'default' === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadPolygonMaskPlugin = void 0)
      const a = i(3189),
        c = i(77094),
        l = i(47912)
      class d {
        constructor() {
          this.id = 'polygonMask'
        }
        getPlugin(t) {
          return new c.PolygonMaskInstance(t)
        }
        needsPlugin(t) {
          var e, i, o
          return null !==
            (i =
              null === (e = null === t || void 0 === t ? void 0 : t.polygon) ||
              void 0 === e
                ? void 0
                : e.enable) && void 0 !== i
            ? i
            : void 0 !==
                (null ===
                  (o = null === t || void 0 === t ? void 0 : t.polygon) ||
                void 0 === o
                  ? void 0
                  : o.type) && 'none' !== t.polygon.type
        }
        loadOptions(t, e) {
          if (!this.needsPlugin(e)) return
          const i = t
          let o = i.polygon
          void 0 === (null === o || void 0 === o ? void 0 : o.load) &&
            (i.polygon = o = new a.PolygonMask()),
            o.load(null === e || void 0 === e ? void 0 : e.polygon)
        }
      }
      ;(e.loadPolygonMaskPlugin = async function (t) {
        ;(0, l.isSsr)() ||
          'SVGPathSeg' in window ||
          (await Promise.resolve().then(() => s(i(31555))))
        const e = new d()
        await t.addPlugin(e)
      }),
        r(i(31451), e),
        r(i(31938), e),
        r(i(15445), e),
        r(i(41461), e)
    },
    31555: function () {
      'use strict'
      !(function () {
        try {
          if ('undefined' === typeof window) return
          'SVGPathSeg' in window ||
            ((window.SVGPathSeg = function (t, e, i) {
              ;(this.pathSegType = t),
                (this.pathSegTypeAsLetter = e),
                (this._owningPathSegList = i)
            }),
            (window.SVGPathSeg.prototype.classname = 'SVGPathSeg'),
            (window.SVGPathSeg.PATHSEG_UNKNOWN = 0),
            (window.SVGPathSeg.PATHSEG_CLOSEPATH = 1),
            (window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2),
            (window.SVGPathSeg.PATHSEG_MOVETO_REL = 3),
            (window.SVGPathSeg.PATHSEG_LINETO_ABS = 4),
            (window.SVGPathSeg.PATHSEG_LINETO_REL = 5),
            (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6),
            (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7),
            (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8),
            (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9),
            (window.SVGPathSeg.PATHSEG_ARC_ABS = 10),
            (window.SVGPathSeg.PATHSEG_ARC_REL = 11),
            (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12),
            (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13),
            (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14),
            (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15),
            (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16),
            (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17),
            (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18),
            (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19),
            (window.SVGPathSeg.prototype._segmentChanged = function () {
              this._owningPathSegList &&
                this._owningPathSegList.segmentChanged(this)
            }),
            (window.SVGPathSegClosePath = function (t) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CLOSEPATH,
                'z',
                t
              )
            }),
            (window.SVGPathSegClosePath.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegClosePath.prototype.toString = function () {
              return '[object SVGPathSegClosePath]'
            }),
            (window.SVGPathSegClosePath.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter
            }),
            (window.SVGPathSegClosePath.prototype.clone = function () {
              return new window.SVGPathSegClosePath(void 0)
            }),
            (window.SVGPathSegMovetoAbs = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_MOVETO_ABS,
                'M',
                t
              ),
                (this._x = e),
                (this._y = i)
            }),
            (window.SVGPathSegMovetoAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegMovetoAbs.prototype.toString = function () {
              return '[object SVGPathSegMovetoAbs]'
            }),
            (window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter + ' ' + this._x + ' ' + this._y
            }),
            (window.SVGPathSegMovetoAbs.prototype.clone = function () {
              return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y)
            }),
            Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, 'x', {
              get: function () {
                return this._x
              },
              set: function (t) {
                ;(this._x = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, 'y', {
              get: function () {
                return this._y
              },
              set: function (t) {
                ;(this._y = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            (window.SVGPathSegMovetoRel = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_MOVETO_REL,
                'm',
                t
              ),
                (this._x = e),
                (this._y = i)
            }),
            (window.SVGPathSegMovetoRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegMovetoRel.prototype.toString = function () {
              return '[object SVGPathSegMovetoRel]'
            }),
            (window.SVGPathSegMovetoRel.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter + ' ' + this._x + ' ' + this._y
            }),
            (window.SVGPathSegMovetoRel.prototype.clone = function () {
              return new window.SVGPathSegMovetoRel(void 0, this._x, this._y)
            }),
            Object.defineProperty(window.SVGPathSegMovetoRel.prototype, 'x', {
              get: function () {
                return this._x
              },
              set: function (t) {
                ;(this._x = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegMovetoRel.prototype, 'y', {
              get: function () {
                return this._y
              },
              set: function (t) {
                ;(this._y = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            (window.SVGPathSegLinetoAbs = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_ABS,
                'L',
                t
              ),
                (this._x = e),
                (this._y = i)
            }),
            (window.SVGPathSegLinetoAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoAbs.prototype.toString = function () {
              return '[object SVGPathSegLinetoAbs]'
            }),
            (window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter + ' ' + this._x + ' ' + this._y
            }),
            (window.SVGPathSegLinetoAbs.prototype.clone = function () {
              return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y)
            }),
            Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, 'x', {
              get: function () {
                return this._x
              },
              set: function (t) {
                ;(this._x = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, 'y', {
              get: function () {
                return this._y
              },
              set: function (t) {
                ;(this._y = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            (window.SVGPathSegLinetoRel = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_REL,
                'l',
                t
              ),
                (this._x = e),
                (this._y = i)
            }),
            (window.SVGPathSegLinetoRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoRel.prototype.toString = function () {
              return '[object SVGPathSegLinetoRel]'
            }),
            (window.SVGPathSegLinetoRel.prototype._asPathString = function () {
              return this.pathSegTypeAsLetter + ' ' + this._x + ' ' + this._y
            }),
            (window.SVGPathSegLinetoRel.prototype.clone = function () {
              return new window.SVGPathSegLinetoRel(void 0, this._x, this._y)
            }),
            Object.defineProperty(window.SVGPathSegLinetoRel.prototype, 'x', {
              get: function () {
                return this._x
              },
              set: function (t) {
                ;(this._x = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegLinetoRel.prototype, 'y', {
              get: function () {
                return this._y
              },
              set: function (t) {
                ;(this._y = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            (window.SVGPathSegCurvetoCubicAbs = function (t, e, i, o, n, s, r) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,
                'C',
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x1 = o),
                (this._y1 = n),
                (this._x2 = s),
                (this._y2 = r)
            }),
            (window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
              return '[object SVGPathSegCurvetoCubicAbs]'
            }),
            (window.SVGPathSegCurvetoCubicAbs.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  ' ' +
                  this._x1 +
                  ' ' +
                  this._y1 +
                  ' ' +
                  this._x2 +
                  ' ' +
                  this._y2 +
                  ' ' +
                  this._x +
                  ' ' +
                  this._y
                )
              }),
            (window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
              return new window.SVGPathSegCurvetoCubicAbs(
                void 0,
                this._x,
                this._y,
                this._x1,
                this._y1,
                this._x2,
                this._y2
              )
            }),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              'x1',
              {
                get: function () {
                  return this._x1
                },
                set: function (t) {
                  ;(this._x1 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              'y1',
              {
                get: function () {
                  return this._y1
                },
                set: function (t) {
                  ;(this._y1 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              'x2',
              {
                get: function () {
                  return this._x2
                },
                set: function (t) {
                  ;(this._x2 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicAbs.prototype,
              'y2',
              {
                get: function () {
                  return this._y2
                },
                set: function (t) {
                  ;(this._y2 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoCubicRel = function (t, e, i, o, n, s, r) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,
                'c',
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x1 = o),
                (this._y1 = n),
                (this._x2 = s),
                (this._y2 = r)
            }),
            (window.SVGPathSegCurvetoCubicRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
              return '[object SVGPathSegCurvetoCubicRel]'
            }),
            (window.SVGPathSegCurvetoCubicRel.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  ' ' +
                  this._x1 +
                  ' ' +
                  this._y1 +
                  ' ' +
                  this._x2 +
                  ' ' +
                  this._y2 +
                  ' ' +
                  this._x +
                  ' ' +
                  this._y
                )
              }),
            (window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
              return new window.SVGPathSegCurvetoCubicRel(
                void 0,
                this._x,
                this._y,
                this._x1,
                this._y1,
                this._x2,
                this._y2
              )
            }),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              'x1',
              {
                get: function () {
                  return this._x1
                },
                set: function (t) {
                  ;(this._x1 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              'y1',
              {
                get: function () {
                  return this._y1
                },
                set: function (t) {
                  ;(this._y1 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              'x2',
              {
                get: function () {
                  return this._x2
                },
                set: function (t) {
                  ;(this._x2 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicRel.prototype,
              'y2',
              {
                get: function () {
                  return this._y2
                },
                set: function (t) {
                  ;(this._y2 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoQuadraticAbs = function (t, e, i, o, n) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,
                'Q',
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x1 = o),
                (this._y1 = n)
            }),
            (window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoQuadraticAbs.prototype.toString =
              function () {
                return '[object SVGPathSegCurvetoQuadraticAbs]'
              }),
            (window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  ' ' +
                  this._x1 +
                  ' ' +
                  this._y1 +
                  ' ' +
                  this._x +
                  ' ' +
                  this._y
                )
              }),
            (window.SVGPathSegCurvetoQuadraticAbs.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoQuadraticAbs(
                  void 0,
                  this._x,
                  this._y,
                  this._x1,
                  this._y1
                )
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticAbs.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticAbs.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticAbs.prototype,
              'x1',
              {
                get: function () {
                  return this._x1
                },
                set: function (t) {
                  ;(this._x1 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticAbs.prototype,
              'y1',
              {
                get: function () {
                  return this._y1
                },
                set: function (t) {
                  ;(this._y1 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoQuadraticRel = function (t, e, i, o, n) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,
                'q',
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x1 = o),
                (this._y1 = n)
            }),
            (window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoQuadraticRel.prototype.toString =
              function () {
                return '[object SVGPathSegCurvetoQuadraticRel]'
              }),
            (window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  ' ' +
                  this._x1 +
                  ' ' +
                  this._y1 +
                  ' ' +
                  this._x +
                  ' ' +
                  this._y
                )
              }),
            (window.SVGPathSegCurvetoQuadraticRel.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoQuadraticRel(
                  void 0,
                  this._x,
                  this._y,
                  this._x1,
                  this._y1
                )
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticRel.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticRel.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticRel.prototype,
              'x1',
              {
                get: function () {
                  return this._x1
                },
                set: function (t) {
                  ;(this._x1 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticRel.prototype,
              'y1',
              {
                get: function () {
                  return this._y1
                },
                set: function (t) {
                  ;(this._y1 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegArcAbs = function (t, e, i, o, n, s, r, a) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_ARC_ABS,
                'A',
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._r1 = o),
                (this._r2 = n),
                (this._angle = s),
                (this._largeArcFlag = r),
                (this._sweepFlag = a)
            }),
            (window.SVGPathSegArcAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegArcAbs.prototype.toString = function () {
              return '[object SVGPathSegArcAbs]'
            }),
            (window.SVGPathSegArcAbs.prototype._asPathString = function () {
              return (
                this.pathSegTypeAsLetter +
                ' ' +
                this._r1 +
                ' ' +
                this._r2 +
                ' ' +
                this._angle +
                ' ' +
                (this._largeArcFlag ? '1' : '0') +
                ' ' +
                (this._sweepFlag ? '1' : '0') +
                ' ' +
                this._x +
                ' ' +
                this._y
              )
            }),
            (window.SVGPathSegArcAbs.prototype.clone = function () {
              return new window.SVGPathSegArcAbs(
                void 0,
                this._x,
                this._y,
                this._r1,
                this._r2,
                this._angle,
                this._largeArcFlag,
                this._sweepFlag
              )
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, 'x', {
              get: function () {
                return this._x
              },
              set: function (t) {
                ;(this._x = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, 'y', {
              get: function () {
                return this._y
              },
              set: function (t) {
                ;(this._y = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, 'r1', {
              get: function () {
                return this._r1
              },
              set: function (t) {
                ;(this._r1 = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, 'r2', {
              get: function () {
                return this._r2
              },
              set: function (t) {
                ;(this._r2 = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcAbs.prototype, 'angle', {
              get: function () {
                return this._angle
              },
              set: function (t) {
                ;(this._angle = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(
              window.SVGPathSegArcAbs.prototype,
              'largeArcFlag',
              {
                get: function () {
                  return this._largeArcFlag
                },
                set: function (t) {
                  ;(this._largeArcFlag = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegArcAbs.prototype,
              'sweepFlag',
              {
                get: function () {
                  return this._sweepFlag
                },
                set: function (t) {
                  ;(this._sweepFlag = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegArcRel = function (t, e, i, o, n, s, r, a) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_ARC_REL,
                'a',
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._r1 = o),
                (this._r2 = n),
                (this._angle = s),
                (this._largeArcFlag = r),
                (this._sweepFlag = a)
            }),
            (window.SVGPathSegArcRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegArcRel.prototype.toString = function () {
              return '[object SVGPathSegArcRel]'
            }),
            (window.SVGPathSegArcRel.prototype._asPathString = function () {
              return (
                this.pathSegTypeAsLetter +
                ' ' +
                this._r1 +
                ' ' +
                this._r2 +
                ' ' +
                this._angle +
                ' ' +
                (this._largeArcFlag ? '1' : '0') +
                ' ' +
                (this._sweepFlag ? '1' : '0') +
                ' ' +
                this._x +
                ' ' +
                this._y
              )
            }),
            (window.SVGPathSegArcRel.prototype.clone = function () {
              return new window.SVGPathSegArcRel(
                void 0,
                this._x,
                this._y,
                this._r1,
                this._r2,
                this._angle,
                this._largeArcFlag,
                this._sweepFlag
              )
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, 'x', {
              get: function () {
                return this._x
              },
              set: function (t) {
                ;(this._x = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, 'y', {
              get: function () {
                return this._y
              },
              set: function (t) {
                ;(this._y = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, 'r1', {
              get: function () {
                return this._r1
              },
              set: function (t) {
                ;(this._r1 = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, 'r2', {
              get: function () {
                return this._r2
              },
              set: function (t) {
                ;(this._r2 = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(window.SVGPathSegArcRel.prototype, 'angle', {
              get: function () {
                return this._angle
              },
              set: function (t) {
                ;(this._angle = t), this._segmentChanged()
              },
              enumerable: !0,
            }),
            Object.defineProperty(
              window.SVGPathSegArcRel.prototype,
              'largeArcFlag',
              {
                get: function () {
                  return this._largeArcFlag
                },
                set: function (t) {
                  ;(this._largeArcFlag = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegArcRel.prototype,
              'sweepFlag',
              {
                get: function () {
                  return this._sweepFlag
                },
                set: function (t) {
                  ;(this._sweepFlag = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,
                'H',
                t
              ),
                (this._x = e)
            }),
            (window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoHorizontalAbs.prototype.toString =
              function () {
                return '[object SVGPathSegLinetoHorizontalAbs]'
              }),
            (window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + ' ' + this._x
              }),
            (window.SVGPathSegLinetoHorizontalAbs.prototype.clone =
              function () {
                return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x)
              }),
            Object.defineProperty(
              window.SVGPathSegLinetoHorizontalAbs.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegLinetoHorizontalRel = function (t, e) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,
                'h',
                t
              ),
                (this._x = e)
            }),
            (window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoHorizontalRel.prototype.toString =
              function () {
                return '[object SVGPathSegLinetoHorizontalRel]'
              }),
            (window.SVGPathSegLinetoHorizontalRel.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + ' ' + this._x
              }),
            (window.SVGPathSegLinetoHorizontalRel.prototype.clone =
              function () {
                return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x)
              }),
            Object.defineProperty(
              window.SVGPathSegLinetoHorizontalRel.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegLinetoVerticalAbs = function (t, e) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,
                'V',
                t
              ),
                (this._y = e)
            }),
            (window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoVerticalAbs.prototype.toString =
              function () {
                return '[object SVGPathSegLinetoVerticalAbs]'
              }),
            (window.SVGPathSegLinetoVerticalAbs.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + ' ' + this._y
              }),
            (window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
              return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y)
            }),
            Object.defineProperty(
              window.SVGPathSegLinetoVerticalAbs.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegLinetoVerticalRel = function (t, e) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,
                'v',
                t
              ),
                (this._y = e)
            }),
            (window.SVGPathSegLinetoVerticalRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegLinetoVerticalRel.prototype.toString =
              function () {
                return '[object SVGPathSegLinetoVerticalRel]'
              }),
            (window.SVGPathSegLinetoVerticalRel.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + ' ' + this._y
              }),
            (window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
              return new window.SVGPathSegLinetoVerticalRel(void 0, this._y)
            }),
            Object.defineProperty(
              window.SVGPathSegLinetoVerticalRel.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoCubicSmoothAbs = function (t, e, i, o, n) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,
                'S',
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x2 = o),
                (this._y2 = n)
            }),
            (window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString =
              function () {
                return '[object SVGPathSegCurvetoCubicSmoothAbs]'
              }),
            (window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  ' ' +
                  this._x2 +
                  ' ' +
                  this._y2 +
                  ' ' +
                  this._x +
                  ' ' +
                  this._y
                )
              }),
            (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(
                  void 0,
                  this._x,
                  this._y,
                  this._x2,
                  this._y2
                )
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
              'x2',
              {
                get: function () {
                  return this._x2
                },
                set: function (t) {
                  ;(this._x2 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothAbs.prototype,
              'y2',
              {
                get: function () {
                  return this._y2
                },
                set: function (t) {
                  ;(this._y2 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoCubicSmoothRel = function (t, e, i, o, n) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,
                's',
                t
              ),
                (this._x = e),
                (this._y = i),
                (this._x2 = o),
                (this._y2 = n)
            }),
            (window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(
              window.SVGPathSeg.prototype
            )),
            (window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString =
              function () {
                return '[object SVGPathSegCurvetoCubicSmoothRel]'
              }),
            (window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString =
              function () {
                return (
                  this.pathSegTypeAsLetter +
                  ' ' +
                  this._x2 +
                  ' ' +
                  this._y2 +
                  ' ' +
                  this._x +
                  ' ' +
                  this._y
                )
              }),
            (window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoCubicSmoothRel(
                  void 0,
                  this._x,
                  this._y,
                  this._x2,
                  this._y2
                )
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothRel.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothRel.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothRel.prototype,
              'x2',
              {
                get: function () {
                  return this._x2
                },
                set: function (t) {
                  ;(this._x2 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoCubicSmoothRel.prototype,
              'y2',
              {
                get: function () {
                  return this._y2
                },
                set: function (t) {
                  ;(this._y2 = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,
                'T',
                t
              ),
                (this._x = e),
                (this._y = i)
            }),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype =
              Object.create(window.SVGPathSeg.prototype)),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString =
              function () {
                return '[object SVGPathSegCurvetoQuadraticSmoothAbs]'
              }),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + ' ' + this._x + ' ' + this._y
              }),
            (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                  void 0,
                  this._x,
                  this._y
                )
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathSegCurvetoQuadraticSmoothRel = function (t, e, i) {
              window.SVGPathSeg.call(
                this,
                window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,
                't',
                t
              ),
                (this._x = e),
                (this._y = i)
            }),
            (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype =
              Object.create(window.SVGPathSeg.prototype)),
            (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString =
              function () {
                return '[object SVGPathSegCurvetoQuadraticSmoothRel]'
              }),
            (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString =
              function () {
                return this.pathSegTypeAsLetter + ' ' + this._x + ' ' + this._y
              }),
            (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone =
              function () {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                  void 0,
                  this._x,
                  this._y
                )
              }),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
              'x',
              {
                get: function () {
                  return this._x
                },
                set: function (t) {
                  ;(this._x = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            Object.defineProperty(
              window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,
              'y',
              {
                get: function () {
                  return this._y
                },
                set: function (t) {
                  ;(this._y = t), this._segmentChanged()
                },
                enumerable: !0,
              }
            ),
            (window.SVGPathElement.prototype.createSVGPathSegClosePath =
              function () {
                return new window.SVGPathSegClosePath(void 0)
              }),
            (window.SVGPathElement.prototype.createSVGPathSegMovetoAbs =
              function (t, e) {
                return new window.SVGPathSegMovetoAbs(void 0, t, e)
              }),
            (window.SVGPathElement.prototype.createSVGPathSegMovetoRel =
              function (t, e) {
                return new window.SVGPathSegMovetoRel(void 0, t, e)
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoAbs =
              function (t, e) {
                return new window.SVGPathSegLinetoAbs(void 0, t, e)
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoRel =
              function (t, e) {
                return new window.SVGPathSegLinetoRel(void 0, t, e)
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs =
              function (t, e, i, o, n, s) {
                return new window.SVGPathSegCurvetoCubicAbs(
                  void 0,
                  t,
                  e,
                  i,
                  o,
                  n,
                  s
                )
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel =
              function (t, e, i, o, n, s) {
                return new window.SVGPathSegCurvetoCubicRel(
                  void 0,
                  t,
                  e,
                  i,
                  o,
                  n,
                  s
                )
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs =
              function (t, e, i, o) {
                return new window.SVGPathSegCurvetoQuadraticAbs(
                  void 0,
                  t,
                  e,
                  i,
                  o
                )
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel =
              function (t, e, i, o) {
                return new window.SVGPathSegCurvetoQuadraticRel(
                  void 0,
                  t,
                  e,
                  i,
                  o
                )
              }),
            (window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (
              t,
              e,
              i,
              o,
              n,
              s,
              r
            ) {
              return new window.SVGPathSegArcAbs(void 0, t, e, i, o, n, s, r)
            }),
            (window.SVGPathElement.prototype.createSVGPathSegArcRel = function (
              t,
              e,
              i,
              o,
              n,
              s,
              r
            ) {
              return new window.SVGPathSegArcRel(void 0, t, e, i, o, n, s, r)
            }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs =
              function (t) {
                return new window.SVGPathSegLinetoHorizontalAbs(void 0, t)
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel =
              function (t) {
                return new window.SVGPathSegLinetoHorizontalRel(void 0, t)
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs =
              function (t) {
                return new window.SVGPathSegLinetoVerticalAbs(void 0, t)
              }),
            (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel =
              function (t) {
                return new window.SVGPathSegLinetoVerticalRel(void 0, t)
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs =
              function (t, e, i, o) {
                return new window.SVGPathSegCurvetoCubicSmoothAbs(
                  void 0,
                  t,
                  e,
                  i,
                  o
                )
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel =
              function (t, e, i, o) {
                return new window.SVGPathSegCurvetoCubicSmoothRel(
                  void 0,
                  t,
                  e,
                  i,
                  o
                )
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs =
              function (t, e) {
                return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                  void 0,
                  t,
                  e
                )
              }),
            (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel =
              function (t, e) {
                return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                  void 0,
                  t,
                  e
                )
              }),
            'getPathSegAtLength' in window.SVGPathElement.prototype ||
              (window.SVGPathElement.prototype.getPathSegAtLength = function (
                t
              ) {
                if (void 0 === t || !isFinite(t)) throw 'Invalid arguments.'
                const e = document.createElementNS(
                  'http://www.w3.org/2000/svg',
                  'path'
                )
                e.setAttribute('d', this.getAttribute('d'))
                let i = e.pathSegList.numberOfItems - 1
                if (i <= 0) return 0
                do {
                  if ((e.pathSegList.removeItem(i), t > e.getTotalLength()))
                    break
                  i--
                } while (i > 0)
                return i
              })),
            ('SVGPathSegList' in window &&
              'appendItem' in window.SVGPathSegList.prototype) ||
              ((window.SVGPathSegList = function (t) {
                ;(this._pathElement = t),
                  (this._list = this._parsePath(
                    this._pathElement.getAttribute('d')
                  )),
                  (this._mutationObserverConfig = {
                    attributes: !0,
                    attributeFilter: ['d'],
                  }),
                  (this._pathElementMutationObserver = new MutationObserver(
                    this._updateListFromPathMutations.bind(this)
                  )),
                  this._pathElementMutationObserver.observe(
                    this._pathElement,
                    this._mutationObserverConfig
                  )
              }),
              (window.SVGPathSegList.prototype.classname = 'SVGPathSegList'),
              Object.defineProperty(
                window.SVGPathSegList.prototype,
                'numberOfItems',
                {
                  get: function () {
                    return (
                      this._checkPathSynchronizedToList(), this._list.length
                    )
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(window.SVGPathSegList.prototype, 'length', {
                get: function () {
                  return this._checkPathSynchronizedToList(), this._list.length
                },
                enumerable: !0,
              }),
              Object.defineProperty(
                window.SVGPathElement.prototype,
                'pathSegList',
                {
                  get: function () {
                    return (
                      this._pathSegList ||
                        (this._pathSegList = new window.SVGPathSegList(this)),
                      this._pathSegList
                    )
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathElement.prototype,
                'normalizedPathSegList',
                {
                  get: function () {
                    return this.pathSegList
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathElement.prototype,
                'animatedPathSegList',
                {
                  get: function () {
                    return this.pathSegList
                  },
                  enumerable: !0,
                }
              ),
              Object.defineProperty(
                window.SVGPathElement.prototype,
                'animatedNormalizedPathSegList',
                {
                  get: function () {
                    return this.pathSegList
                  },
                  enumerable: !0,
                }
              ),
              (window.SVGPathSegList.prototype._checkPathSynchronizedToList =
                function () {
                  this._updateListFromPathMutations(
                    this._pathElementMutationObserver.takeRecords()
                  )
                }),
              (window.SVGPathSegList.prototype._updateListFromPathMutations =
                function (t) {
                  if (!this._pathElement) return
                  let e = !1
                  t.forEach(function (t) {
                    'd' == t.attributeName && (e = !0)
                  }),
                    e &&
                      (this._list = this._parsePath(
                        this._pathElement.getAttribute('d')
                      ))
                }),
              (window.SVGPathSegList.prototype._writeListToPath = function () {
                this._pathElementMutationObserver.disconnect(),
                  this._pathElement.setAttribute(
                    'd',
                    window.SVGPathSegList._pathSegArrayAsString(this._list)
                  ),
                  this._pathElementMutationObserver.observe(
                    this._pathElement,
                    this._mutationObserverConfig
                  )
              }),
              (window.SVGPathSegList.prototype.segmentChanged = function (t) {
                this._writeListToPath()
              }),
              (window.SVGPathSegList.prototype.clear = function () {
                this._checkPathSynchronizedToList(),
                  this._list.forEach(function (t) {
                    t._owningPathSegList = null
                  }),
                  (this._list = []),
                  this._writeListToPath()
              }),
              (window.SVGPathSegList.prototype.initialize = function (t) {
                return (
                  this._checkPathSynchronizedToList(),
                  (this._list = [t]),
                  (t._owningPathSegList = this),
                  this._writeListToPath(),
                  t
                )
              }),
              (window.SVGPathSegList.prototype._checkValidIndex = function (t) {
                if (isNaN(t) || t < 0 || t >= this.numberOfItems)
                  throw 'INDEX_SIZE_ERR'
              }),
              (window.SVGPathSegList.prototype.getItem = function (t) {
                return (
                  this._checkPathSynchronizedToList(),
                  this._checkValidIndex(t),
                  this._list[t]
                )
              }),
              (window.SVGPathSegList.prototype.insertItemBefore = function (
                t,
                e
              ) {
                return (
                  this._checkPathSynchronizedToList(),
                  e > this.numberOfItems && (e = this.numberOfItems),
                  t._owningPathSegList && (t = t.clone()),
                  this._list.splice(e, 0, t),
                  (t._owningPathSegList = this),
                  this._writeListToPath(),
                  t
                )
              }),
              (window.SVGPathSegList.prototype.replaceItem = function (t, e) {
                return (
                  this._checkPathSynchronizedToList(),
                  t._owningPathSegList && (t = t.clone()),
                  this._checkValidIndex(e),
                  (this._list[e] = t),
                  (t._owningPathSegList = this),
                  this._writeListToPath(),
                  t
                )
              }),
              (window.SVGPathSegList.prototype.removeItem = function (t) {
                this._checkPathSynchronizedToList(), this._checkValidIndex(t)
                const e = this._list[t]
                return this._list.splice(t, 1), this._writeListToPath(), e
              }),
              (window.SVGPathSegList.prototype.appendItem = function (t) {
                return (
                  this._checkPathSynchronizedToList(),
                  t._owningPathSegList && (t = t.clone()),
                  this._list.push(t),
                  (t._owningPathSegList = this),
                  this._writeListToPath(),
                  t
                )
              }),
              (window.SVGPathSegList._pathSegArrayAsString = function (t) {
                let e = '',
                  i = !0
                return (
                  t.forEach(function (t) {
                    i
                      ? ((i = !1), (e += t._asPathString()))
                      : (e += ' ' + t._asPathString())
                  }),
                  e
                )
              }),
              (window.SVGPathSegList.prototype._parsePath = function (t) {
                if (!t || 0 == t.length) return []
                const e = this,
                  i = function () {
                    this.pathSegList = []
                  }
                i.prototype.appendSegment = function (t) {
                  this.pathSegList.push(t)
                }
                const o = function (t) {
                  ;(this._string = t),
                    (this._currentIndex = 0),
                    (this._endIndex = this._string.length),
                    (this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN),
                    this._skipOptionalSpaces()
                }
                ;(o.prototype._isCurrentSpace = function () {
                  const t = this._string[this._currentIndex]
                  return (
                    t <= ' ' &&
                    (' ' == t ||
                      '\n' == t ||
                      '\t' == t ||
                      '\r' == t ||
                      '\f' == t)
                  )
                }),
                  (o.prototype._skipOptionalSpaces = function () {
                    for (
                      ;
                      this._currentIndex < this._endIndex &&
                      this._isCurrentSpace();

                    )
                      this._currentIndex++
                    return this._currentIndex < this._endIndex
                  }),
                  (o.prototype._skipOptionalSpacesOrDelimiter = function () {
                    return (
                      !(
                        this._currentIndex < this._endIndex &&
                        !this._isCurrentSpace() &&
                        ',' != this._string.charAt(this._currentIndex)
                      ) &&
                      (this._skipOptionalSpaces() &&
                        this._currentIndex < this._endIndex &&
                        ',' == this._string.charAt(this._currentIndex) &&
                        (this._currentIndex++, this._skipOptionalSpaces()),
                      this._currentIndex < this._endIndex)
                    )
                  }),
                  (o.prototype.hasMoreData = function () {
                    return this._currentIndex < this._endIndex
                  }),
                  (o.prototype.peekSegmentType = function () {
                    const t = this._string[this._currentIndex]
                    return this._pathSegTypeFromChar(t)
                  }),
                  (o.prototype._pathSegTypeFromChar = function (t) {
                    switch (t) {
                      case 'Z':
                      case 'z':
                        return window.SVGPathSeg.PATHSEG_CLOSEPATH
                      case 'M':
                        return window.SVGPathSeg.PATHSEG_MOVETO_ABS
                      case 'm':
                        return window.SVGPathSeg.PATHSEG_MOVETO_REL
                      case 'L':
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS
                      case 'l':
                        return window.SVGPathSeg.PATHSEG_LINETO_REL
                      case 'C':
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS
                      case 'c':
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL
                      case 'Q':
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS
                      case 'q':
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL
                      case 'A':
                        return window.SVGPathSeg.PATHSEG_ARC_ABS
                      case 'a':
                        return window.SVGPathSeg.PATHSEG_ARC_REL
                      case 'H':
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS
                      case 'h':
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL
                      case 'V':
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS
                      case 'v':
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL
                      case 'S':
                        return window.SVGPathSeg
                          .PATHSEG_CURVETO_CUBIC_SMOOTH_ABS
                      case 's':
                        return window.SVGPathSeg
                          .PATHSEG_CURVETO_CUBIC_SMOOTH_REL
                      case 'T':
                        return window.SVGPathSeg
                          .PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS
                      case 't':
                        return window.SVGPathSeg
                          .PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL
                      default:
                        return window.SVGPathSeg.PATHSEG_UNKNOWN
                    }
                  }),
                  (o.prototype._nextCommandHelper = function (t, e) {
                    return ('+' == t ||
                      '-' == t ||
                      '.' == t ||
                      (t >= '0' && t <= '9')) &&
                      e != window.SVGPathSeg.PATHSEG_CLOSEPATH
                      ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS
                        ? window.SVGPathSeg.PATHSEG_LINETO_ABS
                        : e == window.SVGPathSeg.PATHSEG_MOVETO_REL
                        ? window.SVGPathSeg.PATHSEG_LINETO_REL
                        : e
                      : window.SVGPathSeg.PATHSEG_UNKNOWN
                  }),
                  (o.prototype.initialCommandIsMoveTo = function () {
                    if (!this.hasMoreData()) return !0
                    const t = this.peekSegmentType()
                    return (
                      t == window.SVGPathSeg.PATHSEG_MOVETO_ABS ||
                      t == window.SVGPathSeg.PATHSEG_MOVETO_REL
                    )
                  }),
                  (o.prototype._parseNumber = function () {
                    let t = 0,
                      e = 0,
                      i = 1,
                      o = 0,
                      n = 1,
                      s = 1
                    const r = this._currentIndex
                    if (
                      (this._skipOptionalSpaces(),
                      this._currentIndex < this._endIndex &&
                      '+' == this._string.charAt(this._currentIndex)
                        ? this._currentIndex++
                        : this._currentIndex < this._endIndex &&
                          '-' == this._string.charAt(this._currentIndex) &&
                          (this._currentIndex++, (n = -1)),
                      this._currentIndex == this._endIndex ||
                        ((this._string.charAt(this._currentIndex) < '0' ||
                          this._string.charAt(this._currentIndex) > '9') &&
                          '.' != this._string.charAt(this._currentIndex)))
                    )
                      return
                    const a = this._currentIndex
                    for (
                      ;
                      this._currentIndex < this._endIndex &&
                      this._string.charAt(this._currentIndex) >= '0' &&
                      this._string.charAt(this._currentIndex) <= '9';

                    )
                      this._currentIndex++
                    if (this._currentIndex != a) {
                      let t = this._currentIndex - 1,
                        i = 1
                      for (; t >= a; )
                        (e += i * (this._string.charAt(t--) - '0')), (i *= 10)
                    }
                    if (
                      this._currentIndex < this._endIndex &&
                      '.' == this._string.charAt(this._currentIndex)
                    ) {
                      if (
                        (this._currentIndex++,
                        this._currentIndex >= this._endIndex ||
                          this._string.charAt(this._currentIndex) < '0' ||
                          this._string.charAt(this._currentIndex) > '9')
                      )
                        return
                      for (
                        ;
                        this._currentIndex < this._endIndex &&
                        this._string.charAt(this._currentIndex) >= '0' &&
                        this._string.charAt(this._currentIndex) <= '9';

                      )
                        (i *= 10),
                          (o +=
                            (this._string.charAt(this._currentIndex) - '0') /
                            i),
                          (this._currentIndex += 1)
                    }
                    if (
                      this._currentIndex != r &&
                      this._currentIndex + 1 < this._endIndex &&
                      ('e' == this._string.charAt(this._currentIndex) ||
                        'E' == this._string.charAt(this._currentIndex)) &&
                      'x' != this._string.charAt(this._currentIndex + 1) &&
                      'm' != this._string.charAt(this._currentIndex + 1)
                    ) {
                      if (
                        (this._currentIndex++,
                        '+' == this._string.charAt(this._currentIndex)
                          ? this._currentIndex++
                          : '-' == this._string.charAt(this._currentIndex) &&
                            (this._currentIndex++, (s = -1)),
                        this._currentIndex >= this._endIndex ||
                          this._string.charAt(this._currentIndex) < '0' ||
                          this._string.charAt(this._currentIndex) > '9')
                      )
                        return
                      for (
                        ;
                        this._currentIndex < this._endIndex &&
                        this._string.charAt(this._currentIndex) >= '0' &&
                        this._string.charAt(this._currentIndex) <= '9';

                      )
                        (t *= 10),
                          (t += this._string.charAt(this._currentIndex) - '0'),
                          this._currentIndex++
                    }
                    let c = e + o
                    return (
                      (c *= n),
                      t && (c *= Math.pow(10, s * t)),
                      r != this._currentIndex
                        ? (this._skipOptionalSpacesOrDelimiter(), c)
                        : void 0
                    )
                  }),
                  (o.prototype._parseArcFlag = function () {
                    if (this._currentIndex >= this._endIndex) return
                    let t = !1
                    const e = this._string.charAt(this._currentIndex++)
                    if ('0' == e) t = !1
                    else {
                      if ('1' != e) return
                      t = !0
                    }
                    return this._skipOptionalSpacesOrDelimiter(), t
                  }),
                  (o.prototype.parseSegment = function () {
                    const t = this._string[this._currentIndex]
                    let i,
                      o = this._pathSegTypeFromChar(t)
                    if (o == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                      if (
                        this._previousCommand ==
                        window.SVGPathSeg.PATHSEG_UNKNOWN
                      )
                        return null
                      if (
                        ((o = this._nextCommandHelper(
                          t,
                          this._previousCommand
                        )),
                        o == window.SVGPathSeg.PATHSEG_UNKNOWN)
                      )
                        return null
                    } else this._currentIndex++
                    switch (((this._previousCommand = o), o)) {
                      case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new window.SVGPathSegMovetoRel(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        )
                      case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new window.SVGPathSegMovetoAbs(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        )
                      case window.SVGPathSeg.PATHSEG_LINETO_REL:
                        return new window.SVGPathSegLinetoRel(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        )
                      case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new window.SVGPathSegLinetoAbs(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        )
                      case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new window.SVGPathSegLinetoHorizontalRel(
                          e,
                          this._parseNumber()
                        )
                      case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new window.SVGPathSegLinetoHorizontalAbs(
                          e,
                          this._parseNumber()
                        )
                      case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new window.SVGPathSegLinetoVerticalRel(
                          e,
                          this._parseNumber()
                        )
                      case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new window.SVGPathSegLinetoVerticalAbs(
                          e,
                          this._parseNumber()
                        )
                      case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        return (
                          this._skipOptionalSpaces(),
                          new window.SVGPathSegClosePath(e)
                        )
                      case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        return (
                          (i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoCubicRel(
                            e,
                            i.x,
                            i.y,
                            i.x1,
                            i.y1,
                            i.x2,
                            i.y2
                          )
                        )
                      case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        return (
                          (i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoCubicAbs(
                            e,
                            i.x,
                            i.y,
                            i.x1,
                            i.y1,
                            i.x2,
                            i.y2
                          )
                        )
                      case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        return (
                          (i = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoCubicSmoothRel(
                            e,
                            i.x,
                            i.y,
                            i.x2,
                            i.y2
                          )
                        )
                      case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        return (
                          (i = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoCubicSmoothAbs(
                            e,
                            i.x,
                            i.y,
                            i.x2,
                            i.y2
                          )
                        )
                      case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        return (
                          (i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoQuadraticRel(
                            e,
                            i.x,
                            i.y,
                            i.x1,
                            i.y1
                          )
                        )
                      case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        return (
                          (i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegCurvetoQuadraticAbs(
                            e,
                            i.x,
                            i.y,
                            i.x1,
                            i.y1
                          )
                        )
                      case window.SVGPathSeg
                        .PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new window.SVGPathSegCurvetoQuadraticSmoothRel(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        )
                      case window.SVGPathSeg
                        .PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(
                          e,
                          this._parseNumber(),
                          this._parseNumber()
                        )
                      case window.SVGPathSeg.PATHSEG_ARC_REL:
                        return (
                          (i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegArcRel(
                            e,
                            i.x,
                            i.y,
                            i.x1,
                            i.y1,
                            i.arcAngle,
                            i.arcLarge,
                            i.arcSweep
                          )
                        )
                      case window.SVGPathSeg.PATHSEG_ARC_ABS:
                        return (
                          (i = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber(),
                          }),
                          new window.SVGPathSegArcAbs(
                            e,
                            i.x,
                            i.y,
                            i.x1,
                            i.y1,
                            i.arcAngle,
                            i.arcLarge,
                            i.arcSweep
                          )
                        )
                      default:
                        throw 'Unknown path seg type.'
                    }
                  })
                const n = new i(),
                  s = new o(t)
                if (!s.initialCommandIsMoveTo()) return []
                for (; s.hasMoreData(); ) {
                  const t = s.parseSegment()
                  if (!t) return []
                  n.appendSegment(t)
                }
                return n.pathSegList
              }))
        } catch (t) {
          console.warn(
            'An error occurred in tsParticles pathseg polyfill. If the Polygon Mask is not working, please open an issue here: https://github.com/matteobruni/tsparticles',
            t
          )
        }
      })()
    },
    83032: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.CircleDrawer = void 0)
      e.CircleDrawer = class {
        getSidesCount() {
          return 12
        }
        draw(t, e, i) {
          t.arc(0, 0, i, 0, 2 * Math.PI, !1)
        }
      }
    },
    9558: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadCircleShape = void 0)
      const o = i(83032)
      e.loadCircleShape = async function (t) {
        await t.addShape('circle', new o.CircleDrawer())
      }
    },
    80988: function (t, e, i) {
      'use strict'
      var o,
        n =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        s =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ImageDrawer = void 0)
      const r = i(92054)
      ;(e.ImageDrawer = class {
        constructor() {
          o.set(this, void 0), n(this, o, [], 'f')
        }
        getSidesCount() {
          return 12
        }
        getImages(t) {
          const e = s(this, o, 'f').find((e) => e.id === t.id)
          return (
            e ||
            (s(this, o, 'f').push({ id: t.id, images: [] }), this.getImages(t))
          )
        }
        addImage(t, e) {
          const i = this.getImages(t)
          null === i || void 0 === i || i.images.push(e)
        }
        destroy() {
          n(this, o, [], 'f')
        }
        draw(t, e, i, o) {
          var n, s
          const r = e.image,
            a =
              null === (n = null === r || void 0 === r ? void 0 : r.data) ||
              void 0 === n
                ? void 0
                : n.element
          if (!a) return
          const c =
              null !== (s = null === r || void 0 === r ? void 0 : r.ratio) &&
              void 0 !== s
                ? s
                : 1,
            l = { x: -i, y: -i }
          ;((null === r || void 0 === r ? void 0 : r.data.svgData) &&
            (null === r || void 0 === r ? void 0 : r.replaceColor)) ||
            (t.globalAlpha = o),
            t.drawImage(a, l.x, l.y, 2 * i, (2 * i) / c),
            ((null === r || void 0 === r ? void 0 : r.data.svgData) &&
              (null === r || void 0 === r ? void 0 : r.replaceColor)) ||
              (t.globalAlpha = 1)
        }
        loadShape(t) {
          var e, i, o
          if ('image' !== t.shape && 'images' !== t.shape) return
          const n = this.getImages(t.container).images,
            s = t.shapeData,
            a = n.find((t) => t.source === s.src)
          let c
          if (!a)
            return void this.loadImageShape(t.container, s).then(() => {
              this.loadShape(t)
            })
          if (a.error) return
          const l = t.getFillColor()
          ;(c =
            a.svgData && s.replaceColor && l
              ? (0, r.replaceImageColor)(a, s, l, t)
              : {
                  data: a,
                  loaded: !0,
                  ratio: s.width / s.height,
                  replaceColor:
                    null !== (e = s.replaceColor) && void 0 !== e
                      ? e
                      : s.replace_color,
                  source: s.src,
                }),
            c.ratio || (c.ratio = 1)
          const d = {
            image: c,
            fill: null !== (i = s.fill) && void 0 !== i ? i : t.fill,
            close: null !== (o = s.close) && void 0 !== o ? o : t.close,
          }
          ;(t.image = d.image), (t.fill = d.fill), (t.close = d.close)
        }
        async loadImageShape(t, e) {
          const i = e.src
          if (!i) throw new Error('Error tsParticles - No image.src')
          try {
            const o = {
              source: i,
              type: i.substr(i.length - 3),
              error: !1,
              loading: !0,
            }
            this.addImage(t, o)
            const n = e.replaceColor ? r.downloadSvgImage : r.loadImage
            await n(o)
          } catch (o) {
            throw new Error(`tsParticles error - ${e.src} not found`)
          }
        }
      }),
        (o = new WeakMap())
    },
    92054: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.replaceImageColor = e.downloadSvgImage = e.loadImage = void 0)
      const o = i(28774),
        n =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi
      async function s(t) {
        return new Promise((e) => {
          t.loading = !0
          const i = new Image()
          i.addEventListener('load', () => {
            ;(t.element = i), (t.loading = !1), e()
          }),
            i.addEventListener('error', () => {
              ;(t.error = !0),
                (t.loading = !1),
                console.error(`Error tsParticles - loading image: ${t.source}`),
                e()
            }),
            (i.src = t.source)
        })
      }
      ;(e.loadImage = s),
        (e.downloadSvgImage = async function (t) {
          if ('svg' !== t.type) return void (await s(t))
          t.loading = !0
          const e = await fetch(t.source)
          ;(t.loading = !1),
            e.ok ||
              (console.error('Error tsParticles - Image not found'),
              (t.error = !0)),
            t.error || (t.svgData = await e.text())
        }),
        (e.replaceImageColor = function (t, e, i, r) {
          var a, c, l
          const d = (function (t, e, i) {
              const { svgData: s } = t
              if (!s) return ''
              const r = (0, o.getStyleFromHsl)(e, i)
              if (s.includes('fill')) return s.replace(n, () => r)
              const a = s.indexOf('>')
              return `${s.substring(0, a)} fill="${r}"${s.substring(a)}`
            })(
              t,
              i,
              null !==
                (c =
                  null === (a = r.opacity) || void 0 === a
                    ? void 0
                    : a.value) && void 0 !== c
                ? c
                : 1
            ),
            u = new Blob([d], { type: 'image/svg+xml' }),
            h = URL || window.URL || window.webkitURL || window,
            p = h.createObjectURL(u),
            v = new Image(),
            f = {
              data: Object.assign(Object.assign({}, t), { svgData: d }),
              ratio: e.width / e.height,
              replaceColor:
                null !== (l = e.replaceColor) && void 0 !== l
                  ? l
                  : e.replace_color,
              source: e.src,
            }
          return (
            v.addEventListener('load', () => {
              const e = r.image
              e && ((e.loaded = !0), (t.element = v)), h.revokeObjectURL(p)
            }),
            v.addEventListener('error', () => {
              h.revokeObjectURL(p)
              const e = Object.assign(Object.assign({}, t), {
                error: !1,
                loading: !0,
              })
              s(e).then(() => {
                const i = r.image
                i && ((t.element = e.element), (i.loaded = !0))
              })
            }),
            (v.src = p),
            f
          )
        })
    },
    73636: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadImageShape = void 0)
      const o = i(80988)
      e.loadImageShape = async function (t) {
        const e = new o.ImageDrawer()
        await t.addShape('image', e), await t.addShape('images', e)
      }
    },
    47990: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LineDrawer = void 0)
      e.LineDrawer = class {
        getSidesCount() {
          return 1
        }
        draw(t, e, i) {
          t.moveTo(-i / 2, 0), t.lineTo(i / 2, 0)
        }
      }
    },
    48269: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadLineShape = void 0)
      const o = i(47990)
      e.loadLineShape = async function (t) {
        await t.addShape('line', new o.LineDrawer())
      }
    },
    38379: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PolygonDrawer = void 0)
      const o = i(14147)
      class n extends o.PolygonDrawerBase {
        getSidesData(t, e) {
          var i, o
          const n = t.shapeData,
            s =
              null !==
                (o =
                  null !==
                    (i = null === n || void 0 === n ? void 0 : n.sides) &&
                  void 0 !== i
                    ? i
                    : null === n || void 0 === n
                    ? void 0
                    : n.nb_sides) && void 0 !== o
                ? o
                : 5
          return {
            count: { denominator: 1, numerator: s },
            length: (2.66 * e) / (s / 3),
          }
        }
        getCenter(t, e) {
          return { x: -e / (this.getSidesCount(t) / 3.5), y: -e / 0.76 }
        }
      }
      e.PolygonDrawer = n
    },
    14147: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.PolygonDrawerBase = void 0)
      e.PolygonDrawerBase = class {
        getSidesCount(t) {
          var e, i
          const o = t.shapeData
          return null !==
            (i =
              null !== (e = null === o || void 0 === o ? void 0 : o.sides) &&
              void 0 !== e
                ? e
                : null === o || void 0 === o
                ? void 0
                : o.nb_sides) && void 0 !== i
            ? i
            : 5
        }
        draw(t, e, i) {
          const o = this.getCenter(e, i),
            n = this.getSidesData(e, i),
            s = n.count.numerator * n.count.denominator,
            r = n.count.numerator / n.count.denominator,
            a = (180 * (r - 2)) / r,
            c = Math.PI - (Math.PI * a) / 180
          if (t) {
            t.beginPath(), t.translate(o.x, o.y), t.moveTo(0, 0)
            for (let e = 0; e < s; e++)
              t.lineTo(n.length, 0), t.translate(n.length, 0), t.rotate(c)
          }
        }
      }
    },
    82782: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TriangleDrawer = void 0)
      const o = i(14147)
      class n extends o.PolygonDrawerBase {
        getSidesCount() {
          return 3
        }
        getSidesData(t, e) {
          return { count: { denominator: 2, numerator: 3 }, length: 2 * e }
        }
        getCenter(t, e) {
          return { x: -e, y: e / 1.66 }
        }
      }
      e.TriangleDrawer = n
    },
    22464: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadPolygonShape =
          e.loadTriangleShape =
          e.loadGenericPolygonShape =
            void 0)
      const o = i(38379),
        n = i(82782)
      async function s(t) {
        await t.addShape('polygon', new o.PolygonDrawer())
      }
      async function r(t) {
        await t.addShape('triangle', new n.TriangleDrawer())
      }
      ;(e.loadGenericPolygonShape = s),
        (e.loadTriangleShape = r),
        (e.loadPolygonShape = async function (t) {
          await s(t), await r(t)
        })
    },
    46890: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SquareDrawer = void 0)
      const i = Math.sqrt(2)
      e.SquareDrawer = class {
        getSidesCount() {
          return 4
        }
        draw(t, e, o) {
          t.rect(-o / i, -o / i, (2 * o) / i, (2 * o) / i)
        }
      }
    },
    10333: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadSquareShape = void 0)
      const o = i(46890)
      e.loadSquareShape = async function (t) {
        const e = new o.SquareDrawer()
        await t.addShape('edge', e), await t.addShape('square', e)
      }
    },
    51676: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.StarDrawer = void 0)
      e.StarDrawer = class {
        getSidesCount(t) {
          var e, i
          const o = t.shapeData
          return null !==
            (i =
              null !== (e = null === o || void 0 === o ? void 0 : o.sides) &&
              void 0 !== e
                ? e
                : null === o || void 0 === o
                ? void 0
                : o.nb_sides) && void 0 !== i
            ? i
            : 5
        }
        draw(t, e, i) {
          var o
          const n = e.shapeData,
            s = this.getSidesCount(e),
            r =
              null !== (o = null === n || void 0 === n ? void 0 : n.inset) &&
              void 0 !== o
                ? o
                : 2
          t.moveTo(0, 0 - i)
          for (let a = 0; a < s; a++)
            t.rotate(Math.PI / s),
              t.lineTo(0, 0 - i * r),
              t.rotate(Math.PI / s),
              t.lineTo(0, 0 - i)
        }
      }
    },
    63515: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadStarShape = void 0)
      const o = i(51676)
      e.loadStarShape = async function (t) {
        await t.addShape('star', new o.StarDrawer())
      }
    },
    86303: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TextDrawer = e.validTypes = void 0)
      const o = i(47912)
      e.validTypes = ['text', 'character', 'char']
      e.TextDrawer = class {
        getSidesCount() {
          return 12
        }
        async init(t) {
          const i = t.actualOptions
          if (
            e.validTypes.find((t) =>
              (0, o.isInArray)(t, i.particles.shape.type)
            )
          ) {
            const t = e.validTypes
              .map((t) => i.particles.shape.options[t])
              .find((t) => !!t)
            if (t instanceof Array) {
              const e = []
              for (const i of t) e.push((0, o.loadFont)(i))
              await Promise.allSettled(e)
            } else void 0 !== t && (await (0, o.loadFont)(t))
          }
        }
        draw(t, e, i, n) {
          var s, r, a
          const c = e.shapeData
          if (void 0 === c) return
          const l = c.value
          if (void 0 === l) return
          const d = e
          void 0 === d.text &&
            (d.text =
              l instanceof Array
                ? (0, o.itemFromArray)(l, e.randomIndexData)
                : l)
          const u = d.text,
            h = null !== (s = c.style) && void 0 !== s ? s : '',
            p = null !== (r = c.weight) && void 0 !== r ? r : '400',
            v = 2 * Math.round(i),
            f = null !== (a = c.font) && void 0 !== a ? a : 'Verdana',
            y = e.fill,
            g = (u.length * i) / 2
          t.font = `${h} ${p} ${v}px "${f}"`
          const b = { x: -g, y: i / 2 }
          ;(t.globalAlpha = n),
            y ? t.fillText(u, b.x, b.y) : t.strokeText(u, b.x, b.y),
            (t.globalAlpha = 1)
        }
      }
    },
    59162: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadTextShape = void 0)
      const o = i(86303)
      e.loadTextShape = async function (t) {
        const e = new o.TextDrawer()
        for (const i of o.validTypes) await t.addShape(i, e)
      }
    },
    56485: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    17389: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    62694: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    81152: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    97434: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    33953: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
    },
    5129: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AngleUpdater = void 0)
      const o = i(10931)
      e.AngleUpdater = class {
        constructor(t) {
          this.container = t
        }
        init(t) {
          const e = t.options.rotate
          t.rotate = {
            enable: e.animation.enable,
            value: ((0, o.getRangeValue)(e.value) * Math.PI) / 180,
          }
          let i = e.direction
          if ('random' === i) {
            i =
              Math.floor(2 * Math.random()) > 0
                ? 'counter-clockwise'
                : 'clockwise'
          }
          switch (i) {
            case 'counter-clockwise':
            case 'counterClockwise':
              t.rotate.status = 1
              break
            case 'clockwise':
              t.rotate.status = 0
          }
          const n = t.options.rotate.animation
          n.enable &&
            ((t.rotate.velocity =
              ((0, o.getRangeValue)(n.speed) / 360) *
              this.container.retina.reduceFactor),
            n.sync || (t.rotate.velocity *= Math.random()))
        }
        isEnabled(t) {
          const e = t.options.rotate,
            i = e.animation
          return !t.destroyed && !t.spawning && !e.path && i.enable
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              var i
              const o = t.rotate
              if (!o) return
              const n = t.options.rotate.animation,
                s =
                  (null !== (i = o.velocity) && void 0 !== i ? i : 0) *
                  e.factor,
                r = 2 * Math.PI
              if (n.enable)
                switch (o.status) {
                  case 0:
                    ;(o.value += s), o.value > r && (o.value -= r)
                    break
                  case 1:
                  default:
                    ;(o.value -= s), o.value < 0 && (o.value += r)
                }
            })(t, e)
        }
      }
    },
    93375: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadAngleUpdater = void 0)
      const o = i(5129)
      e.loadAngleUpdater = async function (t) {
        await t.addParticleUpdater('angle', (t) => new o.AngleUpdater(t))
      }
    },
    9012: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.ColorUpdater = void 0)
      const o = i(28774),
        n = i(10931)
      function s(t, e, i, o, s) {
        var r
        const a = e
        if (!a || !i.enable) return
        const c = (0, n.randomInRange)(i.offset),
          l =
            (null !== (r = e.velocity) && void 0 !== r ? r : 0) * t.factor +
            3.6 * c
        s && 0 !== a.status
          ? ((a.value -= l),
            a.value < 0 && ((a.status = 0), (a.value += a.value)))
          : ((a.value += l),
            s && a.value > o && ((a.status = 1), (a.value -= a.value % o))),
          a.value > o && (a.value %= o)
      }
      e.ColorUpdater = class {
        constructor(t) {
          this.container = t
        }
        init(t) {
          const e = (0, o.colorToHsl)(
            t.options.color,
            t.id,
            t.options.reduceDuplicates
          )
          e &&
            (t.color = (0, o.getHslAnimationFromHsl)(
              e,
              t.options.color.animation,
              this.container.retina.reduceFactor
            ))
        }
        isEnabled(t) {
          var e, i, o
          const n = t.options.color.animation
          return (
            !t.destroyed &&
            !t.spawning &&
            ((void 0 !==
              (null === (e = t.color) || void 0 === e ? void 0 : e.h.value) &&
              n.h.enable) ||
              (void 0 !==
                (null === (i = t.color) || void 0 === i ? void 0 : i.s.value) &&
                n.s.enable) ||
              (void 0 !==
                (null === (o = t.color) || void 0 === o ? void 0 : o.l.value) &&
                n.l.enable))
          )
        }
        update(t, e) {
          !(function (t, e) {
            var i, o, n
            const r = t.options.color.animation
            void 0 !==
              (null === (i = t.color) || void 0 === i ? void 0 : i.h) &&
              s(e, t.color.h, r.h, 360, !1),
              void 0 !==
                (null === (o = t.color) || void 0 === o ? void 0 : o.s) &&
                s(e, t.color.s, r.s, 100, !0),
              void 0 !==
                (null === (n = t.color) || void 0 === n ? void 0 : n.l) &&
                s(e, t.color.l, r.l, 100, !0)
          })(t, e)
        }
      }
    },
    66897: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadColorUpdater = void 0)
      const o = i(9012)
      e.loadColorUpdater = async function (t) {
        await t.addParticleUpdater('color', (t) => new o.ColorUpdater(t))
      }
    },
    28265: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.LifeUpdater = void 0)
      const o = i(10931)
      e.LifeUpdater = class {
        constructor(t) {
          this.container = t
        }
        init() {}
        isEnabled(t) {
          return !t.destroyed
        }
        update(t, e) {
          if (!this.isEnabled(t)) return
          const i = t.life
          let n = !1
          if (t.spawning) {
            if (((i.delayTime += e.value), !(i.delayTime >= t.life.delay)))
              return
            ;(n = !0), (t.spawning = !1), (i.delayTime = 0), (i.time = 0)
          }
          if (-1 === i.duration) return
          if (t.spawning) return
          if ((n ? (i.time = 0) : (i.time += e.value), i.time < i.duration))
            return
          if (
            ((i.time = 0),
            t.life.count > 0 && t.life.count--,
            0 === t.life.count)
          )
            return void t.destroy()
          const s = this.container.canvas.size,
            r = (0, o.setRangeValue)(0, s.width),
            a = (0, o.setRangeValue)(0, s.width)
          ;(t.position.x = (0, o.randomInRange)(r)),
            (t.position.y = (0, o.randomInRange)(a)),
            (t.spawning = !0),
            (i.delayTime = 0),
            (i.time = 0),
            t.reset()
          const c = t.options.life
          ;(i.delay = 1e3 * (0, o.getRangeValue)(c.delay.value)),
            (i.duration = 1e3 * (0, o.getRangeValue)(c.duration.value))
        }
      }
    },
    75991: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadLifeUpdater = void 0)
      const o = i(28265)
      e.loadLifeUpdater = async function (t) {
        await t.addParticleUpdater('life', (t) => new o.LifeUpdater(t))
      }
    },
    86299: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.OpacityUpdater = void 0)
      const o = i(10931)
      e.OpacityUpdater = class {
        constructor(t) {
          this.container = t
        }
        init(t) {
          const e = t.options.opacity
          t.opacity = {
            enable: e.animation.enable,
            max: (0, o.getRangeMax)(e.value),
            min: (0, o.getRangeMin)(e.value),
            value: (0, o.getRangeValue)(e.value),
            loops: 0,
            maxLoops: (0, o.getRangeValue)(e.animation.count),
          }
          const i = e.animation
          if (i.enable) {
            t.opacity.status = 0
            const n = e.value
            switch (
              ((t.opacity.min = (0, o.getRangeMin)(n)),
              (t.opacity.max = (0, o.getRangeMax)(n)),
              i.startValue)
            ) {
              case 'min':
                ;(t.opacity.value = t.opacity.min), (t.opacity.status = 0)
                break
              case 'random':
                ;(t.opacity.value = (0, o.randomInRange)(t.opacity)),
                  (t.opacity.status = Math.random() >= 0.5 ? 0 : 1)
                break
              case 'max':
              default:
                ;(t.opacity.value = t.opacity.max), (t.opacity.status = 1)
            }
            ;(t.opacity.velocity =
              ((0, o.getRangeValue)(i.speed) / 100) *
              this.container.retina.reduceFactor),
              i.sync || (t.opacity.velocity *= Math.random())
          }
        }
        isEnabled(t) {
          var e, i, o, n
          return (
            !t.destroyed &&
            !t.spawning &&
            !!t.opacity &&
            t.opacity.enable &&
            ((null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) <= 0 ||
              ((null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) >
                0 &&
                (null !== (o = t.opacity.loops) && void 0 !== o ? o : 0) <
                  (null !== (n = t.opacity.maxLoops) && void 0 !== n ? n : 0)))
          )
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              var i, n, s, r, a
              if (!t.opacity) return
              const c = t.opacity.min,
                l = t.opacity.max
              if (
                !(
                  t.destroyed ||
                  !t.opacity.enable ||
                  ((null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) >
                    0 &&
                    (null !== (n = t.opacity.loops) && void 0 !== n ? n : 0) >
                      (null !== (s = t.opacity.maxLoops) && void 0 !== s
                        ? s
                        : 0))
                )
              ) {
                switch (t.opacity.status) {
                  case 0:
                    t.opacity.value >= l
                      ? ((t.opacity.status = 1),
                        t.opacity.loops || (t.opacity.loops = 0),
                        t.opacity.loops++)
                      : (t.opacity.value +=
                          (null !== (r = t.opacity.velocity) && void 0 !== r
                            ? r
                            : 0) * e.factor)
                    break
                  case 1:
                    t.opacity.value <= c
                      ? ((t.opacity.status = 0),
                        t.opacity.loops || (t.opacity.loops = 0),
                        t.opacity.loops++)
                      : (t.opacity.value -=
                          (null !== (a = t.opacity.velocity) && void 0 !== a
                            ? a
                            : 0) * e.factor)
                }
                !(function (t, e, i, o) {
                  switch (t.options.opacity.animation.destroy) {
                    case 'max':
                      e >= o && t.destroy()
                      break
                    case 'min':
                      e <= i && t.destroy()
                  }
                })(t, t.opacity.value, c, l),
                  t.destroyed ||
                    (t.opacity.value = (0, o.clamp)(t.opacity.value, c, l))
              }
            })(t, e)
        }
      }
    },
    71865: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadOpacityUpdater = void 0)
      const o = i(86299)
      e.loadOpacityUpdater = async function (t) {
        await t.addParticleUpdater('opacity', (t) => new o.OpacityUpdater(t))
      }
    },
    49197: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.OutOfCanvasUpdater = void 0)
      const o = i(28205),
        n = i(47912)
      e.OutOfCanvasUpdater = class {
        constructor(t) {
          this.container = t
        }
        init() {}
        isEnabled(t) {
          return !t.destroyed && !t.spawning
        }
        update(t, e) {
          var i, o, n, s
          const r = t.options.move.outModes
          this.updateOutMode(
            t,
            e,
            null !== (i = r.bottom) && void 0 !== i ? i : r.default,
            'bottom'
          ),
            this.updateOutMode(
              t,
              e,
              null !== (o = r.left) && void 0 !== o ? o : r.default,
              'left'
            ),
            this.updateOutMode(
              t,
              e,
              null !== (n = r.right) && void 0 !== n ? n : r.default,
              'right'
            ),
            this.updateOutMode(
              t,
              e,
              null !== (s = r.top) && void 0 !== s ? s : r.default,
              'top'
            )
        }
        updateOutMode(t, e, i, o) {
          switch (i) {
            case 'bounce':
            case 'bounce-vertical':
            case 'bounce-horizontal':
            case 'bounceVertical':
            case 'bounceHorizontal':
            case 'split':
              this.bounce(t, e, o, i)
              break
            case 'destroy':
              this.destroy(t, o)
              break
            case 'out':
              this.out(t, o)
              break
            case 'none':
            default:
              this.none(t, o)
          }
        }
        destroy(t, e) {
          const i = this.container
          ;(0, n.isPointInside)(t.position, i.canvas.size, t.getRadius(), e) ||
            i.particles.remove(t, void 0, !0)
        }
        out(t, e) {
          const i = this.container
          if ((0, n.isPointInside)(t.position, i.canvas.size, t.getRadius(), e))
            return
          const o = t.options.move.warp,
            s = i.canvas.size,
            r = {
              bottom: s.height + t.getRadius() + t.offset.y,
              left: -t.getRadius() - t.offset.x,
              right: s.width + t.getRadius() + t.offset.x,
              top: -t.getRadius() - t.offset.y,
            },
            a = t.getRadius(),
            c = (0, n.calculateBounds)(t.position, a)
          'right' === e && c.left > s.width + t.offset.x
            ? ((t.position.x = r.left),
              (t.initialPosition.x = t.position.x),
              o ||
                ((t.position.y = Math.random() * s.height),
                (t.initialPosition.y = t.position.y)))
            : 'left' === e &&
              c.right < -t.offset.x &&
              ((t.position.x = r.right),
              (t.initialPosition.x = t.position.x),
              o ||
                ((t.position.y = Math.random() * s.height),
                (t.initialPosition.y = t.position.y))),
            'bottom' === e && c.top > s.height + t.offset.y
              ? (o ||
                  ((t.position.x = Math.random() * s.width),
                  (t.initialPosition.x = t.position.x)),
                (t.position.y = r.top),
                (t.initialPosition.y = t.position.y))
              : 'top' === e &&
                c.bottom < -t.offset.y &&
                (o ||
                  ((t.position.x = Math.random() * s.width),
                  (t.initialPosition.x = t.position.x)),
                (t.position.y = r.bottom),
                (t.initialPosition.y = t.position.y))
        }
        bounce(t, e, i, s) {
          const r = this.container
          let a = !1
          for (const [, o] of r.plugins)
            if (
              (void 0 !== o.particleBounce && (a = o.particleBounce(t, e, i)),
              a)
            )
              break
          if (a) return
          const c = t.getPosition(),
            l = t.offset,
            d = t.getRadius(),
            u = (0, n.calculateBounds)(c, d),
            h = r.canvas.size
          ;(0, o.bounceHorizontal)({
            particle: t,
            outMode: s,
            direction: i,
            bounds: u,
            canvasSize: h,
            offset: l,
            size: d,
          }),
            (0, o.bounceVertical)({
              particle: t,
              outMode: s,
              direction: i,
              bounds: u,
              canvasSize: h,
              offset: l,
              size: d,
            })
        }
        none(t, e) {
          if (
            (t.options.move.distance.horizontal &&
              ('left' === e || 'right' === e)) ||
            (t.options.move.distance.vertical &&
              ('top' === e || 'bottom' === e))
          )
            return
          const i = t.options.move.gravity,
            o = this.container,
            s = o.canvas.size,
            r = t.getRadius()
          if (i.enable) {
            const n = t.position
            ;((!i.inverse && n.y > s.height + r && 'bottom' === e) ||
              (i.inverse && n.y < -r && 'top' === e)) &&
              o.particles.remove(t)
          } else {
            if (
              (t.velocity.y > 0 && t.position.y <= s.height + r) ||
              (t.velocity.y < 0 && t.position.y >= -r) ||
              (t.velocity.x > 0 && t.position.x <= s.width + r) ||
              (t.velocity.x < 0 && t.position.x >= -r)
            )
              return
            ;(0, n.isPointInside)(t.position, o.canvas.size, r, e) ||
              o.particles.remove(t)
          }
        }
      }
    },
    28205: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.bounceVertical = e.bounceHorizontal = void 0)
      const o = i(10931)
      ;(e.bounceHorizontal = function (t) {
        if (
          'bounce' !== t.outMode &&
          'bounce-horizontal' !== t.outMode &&
          'bounceHorizontal' !== t.outMode &&
          'split' !== t.outMode
        )
          return
        const e = t.particle.velocity.x
        let i = !1
        if (
          ('right' === t.direction &&
            t.bounds.right >= t.canvasSize.width &&
            e > 0) ||
          ('left' === t.direction && t.bounds.left <= 0 && e < 0)
        ) {
          const e = (0, o.getRangeValue)(
            t.particle.options.bounce.horizontal.value
          )
          ;(t.particle.velocity.x *= -e), (i = !0)
        }
        if (!i) return
        const n = t.offset.x + t.size
        t.bounds.right >= t.canvasSize.width
          ? (t.particle.position.x = t.canvasSize.width - n)
          : t.bounds.left <= 0 && (t.particle.position.x = n),
          'split' === t.outMode && t.particle.destroy()
      }),
        (e.bounceVertical = function (t) {
          if (
            'bounce' === t.outMode ||
            'bounce-vertical' === t.outMode ||
            'bounceVertical' === t.outMode ||
            'split' === t.outMode
          ) {
            const e = t.particle.velocity.y
            let i = !1
            if (
              ('bottom' === t.direction &&
                t.bounds.bottom >= t.canvasSize.height &&
                e > 0) ||
              ('top' === t.direction && t.bounds.top <= 0 && e < 0)
            ) {
              const e = (0, o.getRangeValue)(
                t.particle.options.bounce.vertical.value
              )
              ;(t.particle.velocity.y *= -e), (i = !0)
            }
            if (!i) return
            const n = t.offset.y + t.size
            t.bounds.bottom >= t.canvasSize.height
              ? (t.particle.position.y = t.canvasSize.height - n)
              : t.bounds.top <= 0 && (t.particle.position.y = n),
              'split' === t.outMode && t.particle.destroy()
          }
        })
    },
    83559: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadOutModesUpdater = void 0)
      const o = i(49197)
      e.loadOutModesUpdater = async function (t) {
        await t.addParticleUpdater(
          'outModes',
          (t) => new o.OutOfCanvasUpdater(t)
        )
      }
    },
    60809: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RollUpdater = void 0)
      const o = i(28774),
        n = i(10931)
      e.RollUpdater = class {
        init(t) {
          const e = t.options.roll
          if (e.enable)
            if (
              ((t.roll = {
                angle: Math.random() * Math.PI * 2,
                speed: (0, n.getRangeValue)(e.speed) / 360,
              }),
              e.backColor)
            )
              t.backColor = (0, o.colorToHsl)(e.backColor)
            else if (e.darken.enable && e.enlighten.enable) {
              const i = Math.random() >= 0.5 ? 'darken' : 'enlighten'
              t.roll.alter = {
                type: i,
                value: (0, n.getRangeValue)(
                  'darken' === i ? e.darken.value : e.enlighten.value
                ),
              }
            } else
              e.darken.enable
                ? (t.roll.alter = {
                    type: 'darken',
                    value: (0, n.getRangeValue)(e.darken.value),
                  })
                : e.enlighten.enable &&
                  (t.roll.alter = {
                    type: 'enlighten',
                    value: (0, n.getRangeValue)(e.enlighten.value),
                  })
          else t.roll = { angle: 0, speed: 0 }
        }
        isEnabled(t) {
          const e = t.options.roll
          return !t.destroyed && !t.spawning && e.enable
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              const i = t.options.roll
              if (!t.roll || !i.enable) return
              const o = t.roll.speed * e.factor,
                n = 2 * Math.PI
              ;(t.roll.angle += o), t.roll.angle > n && (t.roll.angle -= n)
            })(t, e)
        }
      }
    },
    13379: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadRollUpdater = void 0)
      const o = i(60809)
      e.loadRollUpdater = async function (t) {
        await t.addParticleUpdater('roll', () => new o.RollUpdater())
      }
    },
    48168: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.SizeUpdater = void 0)
      const o = i(10931)
      e.SizeUpdater = class {
        init() {}
        isEnabled(t) {
          var e, i, o, n
          return (
            !t.destroyed &&
            !t.spawning &&
            t.size.enable &&
            ((null !== (e = t.size.maxLoops) && void 0 !== e ? e : 0) <= 0 ||
              ((null !== (i = t.size.maxLoops) && void 0 !== i ? i : 0) > 0 &&
                (null !== (o = t.size.loops) && void 0 !== o ? o : 0) <
                  (null !== (n = t.size.maxLoops) && void 0 !== n ? n : 0)))
          )
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              var i, n, s, r
              const a =
                  (null !== (i = t.size.velocity) && void 0 !== i ? i : 0) *
                  e.factor,
                c = t.size.min,
                l = t.size.max
              if (
                !(
                  t.destroyed ||
                  !t.size.enable ||
                  ((null !== (n = t.size.maxLoops) && void 0 !== n ? n : 0) >
                    0 &&
                    (null !== (s = t.size.loops) && void 0 !== s ? s : 0) >
                      (null !== (r = t.size.maxLoops) && void 0 !== r ? r : 0))
                )
              ) {
                switch (t.size.status) {
                  case 0:
                    t.size.value >= l
                      ? ((t.size.status = 1),
                        t.size.loops || (t.size.loops = 0),
                        t.size.loops++)
                      : (t.size.value += a)
                    break
                  case 1:
                    t.size.value <= c
                      ? ((t.size.status = 0),
                        t.size.loops || (t.size.loops = 0),
                        t.size.loops++)
                      : (t.size.value -= a)
                }
                !(function (t, e, i, o) {
                  switch (t.options.size.animation.destroy) {
                    case 'max':
                      e >= o && t.destroy()
                      break
                    case 'min':
                      e <= i && t.destroy()
                  }
                })(t, t.size.value, c, l),
                  t.destroyed ||
                    (t.size.value = (0, o.clamp)(t.size.value, c, l))
              }
            })(t, e)
        }
      }
    },
    54093: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadSizeUpdater = void 0)
      const o = i(48168)
      e.loadSizeUpdater = async function (t) {
        await t.addParticleUpdater('size', () => new o.SizeUpdater())
      }
    },
    8936: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.StrokeColorUpdater = void 0)
      const o = i(28774),
        n = i(47912),
        s = i(10931)
      function r(t, e, i, o, n) {
        var r
        const a = e
        if (!a || !a.enable) return
        const c = (0, s.randomInRange)(i.offset),
          l =
            (null !== (r = e.velocity) && void 0 !== r ? r : 0) * t.factor +
            3.6 * c
        n && 0 !== a.status
          ? ((a.value -= l),
            a.value < 0 && ((a.status = 0), (a.value += a.value)))
          : ((a.value += l),
            n && a.value > o && ((a.status = 1), (a.value -= a.value % o))),
          a.value > o && (a.value %= o)
      }
      e.StrokeColorUpdater = class {
        constructor(t) {
          this.container = t
        }
        init(t) {
          var e, i
          const s = this.container
          ;(t.stroke =
            t.options.stroke instanceof Array
              ? (0, n.itemFromArray)(
                  t.options.stroke,
                  t.id,
                  t.options.reduceDuplicates
                )
              : t.options.stroke),
            (t.strokeWidth = t.stroke.width * s.retina.pixelRatio)
          const r =
            null !== (e = (0, o.colorToHsl)(t.stroke.color)) && void 0 !== e
              ? e
              : t.getFillColor()
          r &&
            (t.strokeColor = (0, o.getHslAnimationFromHsl)(
              r,
              null === (i = t.stroke.color) || void 0 === i
                ? void 0
                : i.animation,
              s.retina.reduceFactor
            ))
        }
        isEnabled(t) {
          var e, i, o, n
          const s = null === (e = t.stroke) || void 0 === e ? void 0 : e.color
          return (
            !t.destroyed &&
            !t.spawning &&
            !!s &&
            ((void 0 !==
              (null === (i = t.strokeColor) || void 0 === i
                ? void 0
                : i.h.value) &&
              s.animation.h.enable) ||
              (void 0 !==
                (null === (o = t.strokeColor) || void 0 === o
                  ? void 0
                  : o.s.value) &&
                s.animation.s.enable) ||
              (void 0 !==
                (null === (n = t.strokeColor) || void 0 === n
                  ? void 0
                  : n.l.value) &&
                s.animation.l.enable))
          )
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              var i, o, n, s, a, c, l, d, u, h
              if (!(null === (i = t.stroke) || void 0 === i ? void 0 : i.color))
                return
              const p = t.stroke.color.animation,
                v =
                  null !==
                    (n =
                      null === (o = t.strokeColor) || void 0 === o
                        ? void 0
                        : o.h) && void 0 !== n
                    ? n
                    : null === (s = t.color) || void 0 === s
                    ? void 0
                    : s.h
              v && r(e, v, p.h, 360, !1)
              const f =
                null !==
                  (c =
                    null === (a = t.strokeColor) || void 0 === a
                      ? void 0
                      : a.s) && void 0 !== c
                  ? c
                  : null === (l = t.color) || void 0 === l
                  ? void 0
                  : l.s
              f && r(e, f, p.s, 100, !0)
              const y =
                null !==
                  (u =
                    null === (d = t.strokeColor) || void 0 === d
                      ? void 0
                      : d.l) && void 0 !== u
                  ? u
                  : null === (h = t.color) || void 0 === h
                  ? void 0
                  : h.l
              y && r(e, y, p.l, 100, !0)
            })(t, e)
        }
      }
    },
    75550: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadStrokeColorUpdater = void 0)
      const o = i(8936)
      e.loadStrokeColorUpdater = async function (t) {
        await t.addParticleUpdater(
          'strokeColor',
          (t) => new o.StrokeColorUpdater(t)
        )
      }
    },
    44574: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TiltUpdater = void 0)
      const o = i(10931)
      e.TiltUpdater = class {
        constructor(t) {
          this.container = t
        }
        init(t) {
          const e = t.options.tilt
          t.tilt = {
            enable: e.enable,
            value: ((0, o.getRangeValue)(e.value) * Math.PI) / 180,
            sinDirection: Math.random() >= 0.5 ? 1 : -1,
            cosDirection: Math.random() >= 0.5 ? 1 : -1,
          }
          let i = e.direction
          if ('random' === i) {
            i =
              Math.floor(2 * Math.random()) > 0
                ? 'counter-clockwise'
                : 'clockwise'
          }
          switch (i) {
            case 'counter-clockwise':
            case 'counterClockwise':
              t.tilt.status = 1
              break
            case 'clockwise':
              t.tilt.status = 0
          }
          const n = t.options.tilt.animation
          n.enable &&
            ((t.tilt.velocity =
              ((0, o.getRangeValue)(n.speed) / 360) *
              this.container.retina.reduceFactor),
            n.sync || (t.tilt.velocity *= Math.random()))
        }
        isEnabled(t) {
          const e = t.options.tilt.animation
          return !t.destroyed && !t.spawning && e.enable
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              var i
              if (!t.tilt) return
              const o = t.options.tilt.animation,
                n =
                  (null !== (i = t.tilt.velocity) && void 0 !== i ? i : 0) *
                  e.factor,
                s = 2 * Math.PI
              if (o.enable)
                switch (t.tilt.status) {
                  case 0:
                    ;(t.tilt.value += n),
                      t.tilt.value > s && (t.tilt.value -= s)
                    break
                  case 1:
                  default:
                    ;(t.tilt.value -= n),
                      t.tilt.value < 0 && (t.tilt.value += s)
                }
            })(t, e)
        }
      }
    },
    18883: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadTiltUpdater = void 0)
      const o = i(44574)
      e.loadTiltUpdater = async function (t) {
        await t.addParticleUpdater('tilt', (t) => new o.TiltUpdater(t))
      }
    },
    39033: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TwinkleUpdater = void 0)
      const o = i(28774),
        n = i(10931)
      e.TwinkleUpdater = class {
        getColorStyles(t, e, i, s) {
          const r = t.options.twinkle.particles,
            a = r.enable && Math.random() < r.frequency,
            c = t.options.zIndex,
            l = (1 - t.zIndexFactor) ** c.opacityRate,
            d = a ? (0, n.getRangeValue)(r.opacity) * l : s,
            u = (0, o.colorToHsl)(r.color),
            h = u ? (0, o.getStyleFromHsl)(u, d) : void 0,
            p = {},
            v = a && h
          return (p.fill = v ? h : void 0), (p.stroke = v ? h : void 0), p
        }
        init() {}
        isEnabled(t) {
          return t.options.twinkle.particles.enable
        }
        update() {}
      }
    },
    90096: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadTwinkleUpdater = void 0)
      const o = i(39033)
      e.loadTwinkleUpdater = async function (t) {
        await t.addParticleUpdater('twinkle', () => new o.TwinkleUpdater())
      }
    },
    94787: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.WobbleUpdater = void 0)
      const o = i(10931)
      e.WobbleUpdater = class {
        constructor(t) {
          this.container = t
        }
        init(t) {
          const e = t.options.wobble
          e.enable
            ? (t.wobble = {
                angle: Math.random() * Math.PI * 2,
                speed: (0, o.getRangeValue)(e.speed) / 360,
              })
            : (t.wobble = { angle: 0, speed: 0 }),
            (t.retina.wobbleDistance =
              (0, o.getRangeValue)(e.distance) *
              this.container.retina.pixelRatio)
        }
        isEnabled(t) {
          return !t.destroyed && !t.spawning && t.options.wobble.enable
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              var i
              if (!t.options.wobble.enable || !t.wobble) return
              const o = t.wobble.speed * e.factor,
                n =
                  ((null !== (i = t.retina.wobbleDistance) && void 0 !== i
                    ? i
                    : 0) *
                    e.factor) /
                  (1e3 / 60),
                s = 2 * Math.PI
              ;(t.wobble.angle += o),
                t.wobble.angle > s && (t.wobble.angle -= s),
                (t.position.x += n * Math.cos(t.wobble.angle)),
                (t.position.y += n * Math.abs(Math.sin(t.wobble.angle)))
            })(t, e)
        }
      }
    },
    51821: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadWobbleUpdater = void 0)
      const o = i(94787)
      e.loadWobbleUpdater = async function (t) {
        await t.addParticleUpdater('wobble', (t) => new o.WobbleUpdater(t))
      }
    },
    61475: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.alterHsl =
          e.drawEllipse =
          e.drawParticlePlugin =
          e.drawPlugin =
          e.drawShapeAfterEffect =
          e.drawShape =
          e.drawParticle =
          e.drawGrabLine =
          e.gradient =
          e.drawConnectLine =
          e.drawLinkTriangle =
          e.drawLinkLine =
          e.clear =
          e.paintBase =
            void 0)
      const o = i(28774),
        n = i(10931)
      function s(t, e, i) {
        t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath()
      }
      function r(t, e, i, o, n, s) {
        if (!i.shape) return
        const r = t.drawers.get(i.shape)
        r && r.draw(e, i, o, n, s, t.retina.pixelRatio)
      }
      function a(t, e, i, o, n, s) {
        if (!i.shape) return
        const r = t.drawers.get(i.shape)
        ;(null === r || void 0 === r ? void 0 : r.afterEffect) &&
          r.afterEffect(e, i, o, n, s, t.retina.pixelRatio)
      }
      ;(e.paintBase = function (t, e, i) {
        t.save(),
          (t.fillStyle = null !== i && void 0 !== i ? i : 'rgba(0,0,0,0)'),
          t.fillRect(0, 0, e.width, e.height),
          t.restore()
      }),
        (e.clear = function (t, e) {
          t.clearRect(0, 0, e.width, e.height)
        }),
        (e.drawLinkLine = function (t, e, i, r, a, c, l, d, u, h, p, v) {
          let f = !1
          if ((0, n.getDistance)(i, r) <= a) s(t, i, r), (f = !0)
          else if (l) {
            let e, o
            const l = { x: r.x - c.width, y: r.y },
              d = (0, n.getDistances)(i, l)
            if (d.distance <= a) {
              const t = i.y - (d.dy / d.dx) * i.x
              ;(e = { x: 0, y: t }), (o = { x: c.width, y: t })
            } else {
              const t = { x: r.x, y: r.y - c.height },
                s = (0, n.getDistances)(i, t)
              if (s.distance <= a) {
                const t = -(i.y - (s.dy / s.dx) * i.x) / (s.dy / s.dx)
                ;(e = { x: t, y: 0 }), (o = { x: t, y: c.height })
              } else {
                const t = { x: r.x - c.width, y: r.y - c.height },
                  s = (0, n.getDistances)(i, t)
                if (s.distance <= a) {
                  const t = i.y - (s.dy / s.dx) * i.x
                  ;(e = { x: -t / (s.dy / s.dx), y: t }),
                    (o = { x: e.x + c.width, y: e.y + c.height })
                }
              }
            }
            e && o && (s(t, i, e), s(t, r, o), (f = !0))
          }
          if (f) {
            if (
              ((t.lineWidth = e),
              d && (t.globalCompositeOperation = u),
              (t.strokeStyle = (0, o.getStyleFromRgb)(h, p)),
              v.enable)
            ) {
              const e = (0, o.colorToRgb)(v.color)
              e &&
                ((t.shadowBlur = v.blur),
                (t.shadowColor = (0, o.getStyleFromRgb)(e)))
            }
            t.stroke()
          }
        }),
        (e.drawLinkTriangle = function (t, e, i, n, s, r, a, c) {
          !(function (t, e, i, o) {
            t.beginPath(),
              t.moveTo(e.x, e.y),
              t.lineTo(i.x, i.y),
              t.lineTo(o.x, o.y),
              t.closePath()
          })(t, e, i, n),
            s && (t.globalCompositeOperation = r),
            (t.fillStyle = (0, o.getStyleFromRgb)(a, c)),
            t.fill()
        }),
        (e.drawConnectLine = function (t, e, i, o, n) {
          t.save(),
            s(t, o, n),
            (t.lineWidth = e),
            (t.strokeStyle = i),
            t.stroke(),
            t.restore()
        }),
        (e.gradient = function (t, e, i, n) {
          const s = Math.floor(i.getRadius() / e.getRadius()),
            r = e.getFillColor(),
            a = i.getFillColor()
          if (!r || !a) return
          const c = e.getPosition(),
            l = i.getPosition(),
            d = (0, o.colorMix)(r, a, e.getRadius(), i.getRadius()),
            u = t.createLinearGradient(c.x, c.y, l.x, l.y)
          return (
            u.addColorStop(0, (0, o.getStyleFromHsl)(r, n)),
            u.addColorStop(s > 1 ? 1 : s, (0, o.getStyleFromRgb)(d, n)),
            u.addColorStop(1, (0, o.getStyleFromHsl)(a, n)),
            u
          )
        }),
        (e.drawGrabLine = function (t, e, i, n, r, a) {
          t.save(),
            s(t, i, n),
            (t.strokeStyle = (0, o.getStyleFromRgb)(r, a)),
            (t.lineWidth = e),
            t.stroke(),
            t.restore()
        }),
        (e.drawParticle = function (t, e, i, n, s, c, l, d, u, h) {
          var p, v, f, y
          const g = i.getPosition(),
            b = i.options.tilt,
            m = i.options.roll
          if ((e.save(), b.enable || m.enable)) {
            const t = m.enable && i.roll,
              o = b.enable && i.tilt,
              n = t && ('horizontal' === m.mode || 'both' === m.mode),
              s = t && ('vertical' === m.mode || 'both' === m.mode)
            e.setTransform(
              n ? Math.cos(i.roll.angle) : 1,
              o ? Math.cos(i.tilt.value) * i.tilt.cosDirection : 0,
              o ? Math.sin(i.tilt.value) * i.tilt.sinDirection : 0,
              s ? Math.sin(i.roll.angle) : 1,
              g.x,
              g.y
            )
          } else e.translate(g.x, g.y)
          e.beginPath()
          const w =
            (null !==
              (v =
                null === (p = i.rotate) || void 0 === p ? void 0 : p.value) &&
            void 0 !== v
              ? v
              : 0) + (i.options.rotate.path ? i.velocity.angle : 0)
          0 !== w && e.rotate(w), c && (e.globalCompositeOperation = l)
          const _ = i.shadowColor
          h.enable &&
            _ &&
            ((e.shadowBlur = h.blur),
            (e.shadowColor = (0, o.getStyleFromRgb)(_)),
            (e.shadowOffsetX = h.offset.x),
            (e.shadowOffsetY = h.offset.y)),
            s.fill && (e.fillStyle = s.fill)
          const S = i.stroke
          ;(e.lineWidth = null !== (f = i.strokeWidth) && void 0 !== f ? f : 0),
            s.stroke && (e.strokeStyle = s.stroke),
            r(t, e, i, d, u, n),
            (null !== (y = null === S || void 0 === S ? void 0 : S.width) &&
            void 0 !== y
              ? y
              : 0) > 0 && e.stroke(),
            i.close && e.closePath(),
            i.fill && e.fill(),
            e.restore(),
            e.save(),
            b.enable && i.tilt
              ? e.setTransform(
                  1,
                  Math.cos(i.tilt.value) * i.tilt.cosDirection,
                  Math.sin(i.tilt.value) * i.tilt.sinDirection,
                  1,
                  g.x,
                  g.y
                )
              : e.translate(g.x, g.y),
            0 !== w && e.rotate(w),
            c && (e.globalCompositeOperation = l),
            a(t, e, i, d, u, n),
            e.restore()
        }),
        (e.drawShape = r),
        (e.drawShapeAfterEffect = a),
        (e.drawPlugin = function (t, e, i) {
          e.draw && (t.save(), e.draw(t, i), t.restore())
        }),
        (e.drawParticlePlugin = function (t, e, i, o) {
          e.drawParticle && (t.save(), e.drawParticle(t, i, o), t.restore())
        }),
        (e.drawEllipse = function (t, e, i, n, s, r, a, c, l) {
          if (r <= 0) return
          const d = e.getPosition()
          i && (t.strokeStyle = (0, o.getStyleFromHsl)(i, s)), (t.lineWidth = r)
          const u = (a * Math.PI) / 180
          t.beginPath(), t.ellipse(d.x, d.y, n / 2, 2 * n, u, c, l), t.stroke()
        }),
        (e.alterHsl = function (t, e, i) {
          return { h: t.h, s: t.s, l: t.l + ('darken' === e ? -1 : 1) * i }
        })
    },
    28774: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.getHslAnimationFromHsl =
          e.getHslFromAnimation =
          e.getLinkRandomColor =
          e.getLinkColor =
          e.colorMix =
          e.getStyleFromHsv =
          e.getStyleFromHsl =
          e.getStyleFromRgb =
          e.getRandomRgbColor =
          e.rgbaToHsva =
          e.rgbToHsv =
          e.hsvaToRgba =
          e.hsvToRgb =
          e.hsvaToHsla =
          e.hsvToHsl =
          e.hslaToHsva =
          e.hslToHsv =
          e.hslaToRgba =
          e.hslToRgb =
          e.stringToRgb =
          e.stringToAlpha =
          e.rgbToHsl =
          e.colorToHsl =
          e.colorToRgb =
            void 0)
      const o = i(10931),
        n = i(95078),
        s = i(47912)
      function r(t, e, i) {
        let o = i
        return (
          o < 0 && (o += 1),
          o > 1 && (o -= 1),
          o < 1 / 6
            ? t + 6 * (e - t) * o
            : o < 0.5
            ? e
            : o < 2 / 3
            ? t + (e - t) * (2 / 3 - o) * 6
            : t
        )
      }
      function a(t) {
        if (t.startsWith('rgb')) {
          const e =
            /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(
              t
            )
          return e
            ? {
                a: e.length > 4 ? parseFloat(e[5]) : 1,
                b: parseInt(e[3], 10),
                g: parseInt(e[2], 10),
                r: parseInt(e[1], 10),
              }
            : void 0
        }
        if (t.startsWith('hsl')) {
          const e =
            /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(
              t
            )
          return e
            ? h({
                a: e.length > 4 ? parseFloat(e[5]) : 1,
                h: parseInt(e[1], 10),
                l: parseInt(e[3], 10),
                s: parseInt(e[2], 10),
              })
            : void 0
        }
        if (t.startsWith('hsv')) {
          const e =
            /hsva?\(\s*(\d+)\xb0\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(
              t
            )
          return e
            ? y({
                a: e.length > 4 ? parseFloat(e[5]) : 1,
                h: parseInt(e[1], 10),
                s: parseInt(e[2], 10),
                v: parseInt(e[3], 10),
              })
            : void 0
        }
        {
          const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
            i = t.replace(
              e,
              (t, e, i, o, n) =>
                e + e + i + i + o + o + (void 0 !== n ? n + n : '')
            ),
            o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i)
          return o
            ? {
                a: void 0 !== o[4] ? parseInt(o[4], 16) / 255 : 1,
                b: parseInt(o[3], 16),
                g: parseInt(o[2], 16),
                r: parseInt(o[1], 16),
              }
            : void 0
        }
      }
      function c(t, e, i = !0) {
        var o, r, a
        if (void 0 === t) return
        const l = 'string' === typeof t ? { value: t } : t
        let h
        if ('string' === typeof l.value)
          h = l.value === n.Constants.randomColorValue ? b() : d(l.value)
        else if (l.value instanceof Array) {
          h = c({ value: (0, s.itemFromArray)(l.value, e, i) })
        } else {
          const t = l.value,
            e = null !== (o = t.rgb) && void 0 !== o ? o : l.value
          if (void 0 !== e.r) h = e
          else {
            const e = null !== (r = t.hsl) && void 0 !== r ? r : l.value
            if (void 0 !== e.h && void 0 !== e.l) h = u(e)
            else {
              const e = null !== (a = t.hsv) && void 0 !== a ? a : l.value
              void 0 !== e.h && void 0 !== e.v && (h = f(e))
            }
          }
        }
        return h
      }
      function l(t) {
        const e = t.r / 255,
          i = t.g / 255,
          o = t.b / 255,
          n = Math.max(e, i, o),
          s = Math.min(e, i, o),
          r = { h: 0, l: (n + s) / 2, s: 0 }
        return (
          n !== s &&
            ((r.s = r.l < 0.5 ? (n - s) / (n + s) : (n - s) / (2 - n - s)),
            (r.h =
              e === n
                ? (i - o) / (n - s)
                : (r.h =
                    i === n ? 2 + (o - e) / (n - s) : 4 + (e - i) / (n - s)))),
          (r.l *= 100),
          (r.s *= 100),
          (r.h *= 60),
          r.h < 0 && (r.h += 360),
          r
        )
      }
      function d(t) {
        return a(t)
      }
      function u(t) {
        const e = { b: 0, g: 0, r: 0 },
          i = { h: t.h / 360, l: t.l / 100, s: t.s / 100 }
        if (0 === i.s) (e.b = i.l), (e.g = i.l), (e.r = i.l)
        else {
          const t = i.l < 0.5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
            o = 2 * i.l - t
          ;(e.r = r(o, t, i.h + 1 / 3)),
            (e.g = r(o, t, i.h)),
            (e.b = r(o, t, i.h - 1 / 3))
        }
        return (
          (e.r = Math.floor(255 * e.r)),
          (e.g = Math.floor(255 * e.g)),
          (e.b = Math.floor(255 * e.b)),
          e
        )
      }
      function h(t) {
        const e = u(t)
        return { a: t.a, b: e.b, g: e.g, r: e.r }
      }
      function p(t) {
        const e = t.l / 100,
          i = e + (t.s / 100) * Math.min(e, 1 - e),
          o = i ? 2 * (1 - e / i) : 0
        return { h: t.h, s: 100 * o, v: 100 * i }
      }
      function v(t) {
        const e = t.v / 100,
          i = e * (1 - t.s / 100 / 2),
          o = 0 === i || 1 === i ? 0 : (e - i) / Math.min(i, 1 - i)
        return { h: t.h, l: 100 * i, s: 100 * o }
      }
      function f(t) {
        const e = { b: 0, g: 0, r: 0 },
          i = t.h / 60,
          o = t.s / 100,
          n = t.v / 100,
          s = n * o,
          r = s * (1 - Math.abs((i % 2) - 1))
        let a
        if (
          (i >= 0 && i <= 1
            ? (a = { r: s, g: r, b: 0 })
            : i > 1 && i <= 2
            ? (a = { r: r, g: s, b: 0 })
            : i > 2 && i <= 3
            ? (a = { r: 0, g: s, b: r })
            : i > 3 && i <= 4
            ? (a = { r: 0, g: r, b: s })
            : i > 4 && i <= 5
            ? (a = { r: r, g: 0, b: s })
            : i > 5 && i <= 6 && (a = { r: s, g: 0, b: r }),
          a)
        ) {
          const t = n - s
          ;(e.r = Math.floor(255 * (a.r + t))),
            (e.g = Math.floor(255 * (a.g + t))),
            (e.b = Math.floor(255 * (a.b + t)))
        }
        return e
      }
      function y(t) {
        const e = f(t)
        return { a: t.a, b: e.b, g: e.g, r: e.r }
      }
      function g(t) {
        const e = { r: t.r / 255, g: t.g / 255, b: t.b / 255 },
          i = Math.max(e.r, e.g, e.b),
          o = i - Math.min(e.r, e.g, e.b)
        let n = 0
        i === e.r
          ? (n = ((e.g - e.b) / o) * 60)
          : i === e.g
          ? (n = 60 * (2 + (e.b - e.r) / o))
          : i === e.b && (n = 60 * (4 + (e.r - e.g) / o))
        return { h: n, s: 100 * (i ? o / i : 0), v: 100 * i }
      }
      function b(t) {
        const e = null !== t && void 0 !== t ? t : 0
        return {
          b: Math.floor((0, o.randomInRange)((0, o.setRangeValue)(e, 256))),
          g: Math.floor((0, o.randomInRange)((0, o.setRangeValue)(e, 256))),
          r: Math.floor((0, o.randomInRange)((0, o.setRangeValue)(e, 256))),
        }
      }
      function m(t, e) {
        return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${
          null !== e && void 0 !== e ? e : 1
        })`
      }
      function w(t, e, i, n) {
        let s = t,
          r = e
        return (
          void 0 === s.r && (s = u(t)),
          void 0 === r.r && (r = u(e)),
          {
            b: (0, o.mix)(s.b, r.b, i, n),
            g: (0, o.mix)(s.g, r.g, i, n),
            r: (0, o.mix)(s.r, r.r, i, n),
          }
        )
      }
      function _(t, e, i) {
        if (((t.enable = e.enable), t.enable)) {
          if (
            ((t.velocity = ((0, o.getRangeValue)(e.speed) / 100) * i), e.sync)
          )
            return
          ;(t.status = 0),
            (t.velocity *= Math.random()),
            t.value && (t.value *= Math.random())
        } else t.velocity = 0
      }
      ;(e.colorToRgb = c),
        (e.colorToHsl = function (t, e, i = !0) {
          const o = c(t, e, i)
          return void 0 !== o ? l(o) : void 0
        }),
        (e.rgbToHsl = l),
        (e.stringToAlpha = function (t) {
          var e
          return null === (e = a(t)) || void 0 === e ? void 0 : e.a
        }),
        (e.stringToRgb = d),
        (e.hslToRgb = u),
        (e.hslaToRgba = h),
        (e.hslToHsv = p),
        (e.hslaToHsva = function (t) {
          const e = p(t)
          return { a: t.a, h: e.h, s: e.s, v: e.v }
        }),
        (e.hsvToHsl = v),
        (e.hsvaToHsla = function (t) {
          const e = v(t)
          return { a: t.a, h: e.h, l: e.l, s: e.s }
        }),
        (e.hsvToRgb = f),
        (e.hsvaToRgba = y),
        (e.rgbToHsv = g),
        (e.rgbaToHsva = function (t) {
          const e = g(t)
          return { a: t.a, h: e.h, s: e.s, v: e.v }
        }),
        (e.getRandomRgbColor = b),
        (e.getStyleFromRgb = function (t, e) {
          return `rgba(${t.r}, ${t.g}, ${t.b}, ${
            null !== e && void 0 !== e ? e : 1
          })`
        }),
        (e.getStyleFromHsl = m),
        (e.getStyleFromHsv = function (t, e) {
          return m(v(t), e)
        }),
        (e.colorMix = w),
        (e.getLinkColor = function (t, e, i) {
          var o, s
          if (i === n.Constants.randomColorValue) return b()
          if ('mid' !== i) return i
          {
            const i =
                null !== (o = t.getFillColor()) && void 0 !== o
                  ? o
                  : t.getStrokeColor(),
              n =
                null !==
                  (s =
                    null === e || void 0 === e ? void 0 : e.getFillColor()) &&
                void 0 !== s
                  ? s
                  : null === e || void 0 === e
                  ? void 0
                  : e.getStrokeColor()
            if (i && n && e) return w(i, n, t.getRadius(), e.getRadius())
            {
              const t = null !== i && void 0 !== i ? i : n
              if (t) return u(t)
            }
          }
        }),
        (e.getLinkRandomColor = function (t, e, i) {
          const o = 'string' === typeof t ? t : t.value
          return o === n.Constants.randomColorValue
            ? i
              ? c({ value: o })
              : e
              ? n.Constants.randomColorValue
              : n.Constants.midColorValue
            : c({ value: o })
        }),
        (e.getHslFromAnimation = function (t) {
          return void 0 !== t
            ? { h: t.h.value, s: t.s.value, l: t.l.value }
            : void 0
        }),
        (e.getHslAnimationFromHsl = function (t, e, i) {
          const o = {
            h: { enable: !1, value: t.h },
            s: { enable: !1, value: t.s },
            l: { enable: !1, value: t.l },
          }
          return e && (_(o.h, e.h, i), _(o.s, e.s, i), _(o.l, e.l, i)), o
        })
    },
    10931: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.calcExactPositionOrRandomFromSizeRanged =
          e.calcExactPositionOrRandomFromSize =
          e.calcPositionOrRandomFromSizeRanged =
          e.calcPositionOrRandomFromSize =
          e.calcPositionFromSize =
          e.calcEasing =
          e.collisionVelocity =
          e.getParticleBaseVelocity =
          e.getParticleDirectionAngle =
          e.getDistance =
          e.getDistances =
          e.getValue =
          e.setRangeValue =
          e.getRangeMax =
          e.getRangeMin =
          e.getRangeValue =
          e.randomInRange =
          e.mix =
          e.clamp =
            void 0)
      const o = i(78779)
      function n(t) {
        const e = a(t)
        let i = r(t)
        return e === i && (i = 0), Math.random() * (e - i) + i
      }
      function s(t) {
        return 'number' === typeof t ? t : n(t)
      }
      function r(t) {
        return 'number' === typeof t ? t : t.min
      }
      function a(t) {
        return 'number' === typeof t ? t : t.max
      }
      function c(t, e) {
        if (t === e || (void 0 === e && 'number' === typeof t)) return t
        const i = r(t),
          o = a(t)
        return void 0 !== e
          ? { min: Math.min(i, e), max: Math.max(o, e) }
          : c(i, o)
      }
      function l(t, e) {
        const i = t.x - e.x,
          o = t.y - e.y
        return { dx: i, dy: o, distance: Math.sqrt(i * i + o * o) }
      }
      function d(t) {
        var e, i, o, n
        return {
          x:
            ((null !==
              (i = null === (e = t.position) || void 0 === e ? void 0 : e.x) &&
            void 0 !== i
              ? i
              : 100 * Math.random()) *
              t.size.width) /
            100,
          y:
            ((null !==
              (n = null === (o = t.position) || void 0 === o ? void 0 : o.y) &&
            void 0 !== n
              ? n
              : 100 * Math.random()) *
              t.size.height) /
            100,
        }
      }
      function u(t) {
        var e, i, o, n
        return {
          x:
            null !==
              (i = null === (e = t.position) || void 0 === e ? void 0 : e.x) &&
            void 0 !== i
              ? i
              : Math.random() * t.size.width,
          y:
            null !==
              (n = null === (o = t.position) || void 0 === o ? void 0 : o.y) &&
            void 0 !== n
              ? n
              : Math.random() * t.size.height,
        }
      }
      ;(e.clamp = function (t, e, i) {
        return Math.min(Math.max(t, e), i)
      }),
        (e.mix = function (t, e, i, o) {
          return Math.floor((t * i + e * o) / (i + o))
        }),
        (e.randomInRange = n),
        (e.getRangeValue = s),
        (e.getRangeMin = r),
        (e.getRangeMax = a),
        (e.setRangeValue = c),
        (e.getValue = function (t) {
          const e = t.random,
            { enable: i, minimumValue: o } =
              'boolean' === typeof e ? { enable: e, minimumValue: 0 } : e
          return s(i ? c(t.value, o) : t.value)
        }),
        (e.getDistances = l),
        (e.getDistance = function (t, e) {
          return l(t, e).distance
        }),
        (e.getParticleDirectionAngle = function (t) {
          if ('number' === typeof t) return (t * Math.PI) / 180
          switch (t) {
            case 'top':
              return -Math.PI / 2
            case 'top-right':
              return -Math.PI / 4
            case 'right':
              return 0
            case 'bottom-right':
              return Math.PI / 4
            case 'bottom':
              return Math.PI / 2
            case 'bottom-left':
              return (3 * Math.PI) / 4
            case 'left':
              return Math.PI
            case 'top-left':
              return (-3 * Math.PI) / 4
            case 'none':
            default:
              return Math.random() * Math.PI * 2
          }
        }),
        (e.getParticleBaseVelocity = function (t) {
          const e = o.Vector.origin
          return (e.length = 1), (e.angle = t), e
        }),
        (e.collisionVelocity = function (t, e, i, n) {
          return o.Vector.create(
            (t.x * (i - n)) / (i + n) + (2 * e.x * n) / (i + n),
            t.y
          )
        }),
        (e.calcEasing = function (t, e) {
          switch (e) {
            case 'ease-out-quad':
              return 1 - (1 - t) ** 2
            case 'ease-out-cubic':
              return 1 - (1 - t) ** 3
            case 'ease-out-quart':
              return 1 - (1 - t) ** 4
            case 'ease-out-quint':
              return 1 - (1 - t) ** 5
            case 'ease-out-expo':
              return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            case 'ease-out-sine':
              return Math.sin((t * Math.PI) / 2)
            case 'ease-out-back': {
              const e = 1.70158
              return 1 + (e + 1) * Math.pow(t - 1, 3) + e * Math.pow(t - 1, 2)
            }
            case 'ease-out-circ':
              return Math.sqrt(1 - Math.pow(t - 1, 2))
            default:
              return t
          }
        }),
        (e.calcPositionFromSize = function (t) {
          var e, i
          return void 0 !==
            (null === (e = t.position) || void 0 === e ? void 0 : e.x) &&
            void 0 !==
              (null === (i = t.position) || void 0 === i ? void 0 : i.y)
            ? {
                x: (t.position.x * t.size.width) / 100,
                y: (t.position.y * t.size.height) / 100,
              }
            : void 0
        }),
        (e.calcPositionOrRandomFromSize = d),
        (e.calcPositionOrRandomFromSizeRanged = function (t) {
          var e, i
          const o = {
            x:
              void 0 !==
              (null === (e = t.position) || void 0 === e ? void 0 : e.x)
                ? s(t.position.x)
                : void 0,
            y:
              void 0 !==
              (null === (i = t.position) || void 0 === i ? void 0 : i.y)
                ? s(t.position.y)
                : void 0,
          }
          return d({ size: t.size, position: o })
        }),
        (e.calcExactPositionOrRandomFromSize = u),
        (e.calcExactPositionOrRandomFromSizeRanged = function (t) {
          var e, i
          const o = {
            x:
              void 0 !==
              (null === (e = t.position) || void 0 === e ? void 0 : e.x)
                ? s(t.position.x)
                : void 0,
            y:
              void 0 !==
              (null === (i = t.position) || void 0 === i ? void 0 : i.y)
                ? s(t.position.y)
                : void 0,
          }
          return u({ size: t.size, position: o })
        })
    },
    47912: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.rectBounce =
          e.circleBounce =
          e.circleBounceDataFromParticle =
          e.divMode =
          e.singleDivModeExecute =
          e.divModeExecute =
          e.isDivModeEnabled =
          e.deepExtend =
          e.calculateBounds =
          e.areBoundsInside =
          e.isPointInside =
          e.itemFromArray =
          e.arrayRandomIndex =
          e.loadFont =
          e.isInArray =
          e.cancelAnimation =
          e.animate =
          e.isSsr =
            void 0)
      const o = i(10931),
        n = i(78779)
      function s(t, e, i, o, n, s) {
        const r = { bounced: !1 }
        return (
          e.min < o.min ||
            e.min > o.max ||
            e.max < o.min ||
            e.max > o.max ||
            (((t.max >= i.min && t.max <= (i.max + i.min) / 2 && n > 0) ||
              (t.min <= i.max && t.min > (i.max + i.min) / 2 && n < 0)) &&
              ((r.velocity = n * -s), (r.bounced = !0))),
          r
        )
      }
      function r(t, e) {
        if (!(e instanceof Array)) return t.matches(e)
        for (const i of e) if (t.matches(i)) return !0
        return !1
      }
      function a() {
        return (
          'undefined' === typeof window ||
          !window ||
          'undefined' === typeof window.document ||
          !window.document
        )
      }
      function c(t, e) {
        return t === e || (e instanceof Array && e.indexOf(t) > -1)
      }
      function l(t) {
        return Math.floor(Math.random() * t.length)
      }
      function d(t, e, i) {
        let o = !0
        return (
          (i && 'bottom' !== i) || (o = t.top < e.height),
          !o || (i && 'left' !== i) || (o = t.right > 0),
          !o || (i && 'right' !== i) || (o = t.left < e.width),
          !o || (i && 'top' !== i) || (o = t.bottom > 0),
          o
        )
      }
      function u(t, e) {
        return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e }
      }
      function h(t, e) {
        const i = t.selectors
        if (i instanceof Array) for (const o of i) e(o, t)
        else e(i, t)
      }
      ;(e.isSsr = a),
        (e.animate = function () {
          return a()
            ? (t) => setTimeout(t)
            : (t) =>
                (
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  window.setTimeout
                )(t)
        }),
        (e.cancelAnimation = function () {
          return a()
            ? (t) => clearTimeout(t)
            : (t) =>
                (
                  window.cancelAnimationFrame ||
                  window.webkitCancelRequestAnimationFrame ||
                  window.mozCancelRequestAnimationFrame ||
                  window.oCancelRequestAnimationFrame ||
                  window.msCancelRequestAnimationFrame ||
                  window.clearTimeout
                )(t)
        }),
        (e.isInArray = c),
        (e.loadFont = async function (t) {
          var e, i
          try {
            await document.fonts.load(
              `${null !== (e = t.weight) && void 0 !== e ? e : '400'} 36px '${
                null !== (i = t.font) && void 0 !== i ? i : 'Verdana'
              }'`
            )
          } catch (o) {}
        }),
        (e.arrayRandomIndex = l),
        (e.itemFromArray = function (t, e, i = !0) {
          return t[void 0 !== e && i ? e % t.length : l(t)]
        }),
        (e.isPointInside = function (t, e, i, o) {
          return d(u(t, null !== i && void 0 !== i ? i : 0), e, o)
        }),
        (e.areBoundsInside = d),
        (e.calculateBounds = u),
        (e.deepExtend = function t(e, ...i) {
          for (const o of i) {
            if (void 0 === o || null === o) continue
            if ('object' !== typeof o) {
              e = o
              continue
            }
            const i = Array.isArray(o)
            !i || ('object' === typeof e && e && Array.isArray(e))
              ? i ||
                ('object' === typeof e && e && !Array.isArray(e)) ||
                (e = {})
              : (e = [])
            for (const n in o) {
              if ('__proto__' === n) continue
              const i = o[n],
                s = 'object' === typeof i,
                r = e
              r[n] =
                s && Array.isArray(i) ? i.map((e) => t(r[n], e)) : t(r[n], i)
            }
          }
          return e
        }),
        (e.isDivModeEnabled = function (t, e) {
          return e instanceof Array
            ? !!e.find((e) => e.enable && c(t, e.mode))
            : c(t, e.mode)
        }),
        (e.divModeExecute = function (t, e, i) {
          if (e instanceof Array)
            for (const o of e) {
              const e = o.mode
              o.enable && c(t, e) && h(o, i)
            }
          else {
            const o = e.mode
            e.enable && c(t, o) && h(e, i)
          }
        }),
        (e.singleDivModeExecute = h),
        (e.divMode = function (t, e) {
          if (e && t)
            return t instanceof Array
              ? t.find((t) => r(e, t.selectors))
              : r(e, t.selectors)
              ? t
              : void 0
        }),
        (e.circleBounceDataFromParticle = function (t) {
          return {
            position: t.getPosition(),
            radius: t.getRadius(),
            mass: t.getMass(),
            velocity: t.velocity,
            factor: n.Vector.create(
              (0, o.getValue)(t.options.bounce.horizontal),
              (0, o.getValue)(t.options.bounce.vertical)
            ),
          }
        }),
        (e.circleBounce = function (t, e) {
          const { x: i, y: n } = t.velocity.sub(e.velocity),
            [s, r] = [t.position, e.position],
            { dx: a, dy: c } = (0, o.getDistances)(r, s)
          if (i * a + n * c < 0) return
          const l = -Math.atan2(c, a),
            d = t.mass,
            u = e.mass,
            h = t.velocity.rotate(l),
            p = e.velocity.rotate(l),
            v = (0, o.collisionVelocity)(h, p, d, u),
            f = (0, o.collisionVelocity)(p, h, d, u),
            y = v.rotate(-l),
            g = f.rotate(-l)
          ;(t.velocity.x = y.x * t.factor.x),
            (t.velocity.y = y.y * t.factor.y),
            (e.velocity.x = g.x * e.factor.x),
            (e.velocity.y = g.y * e.factor.y)
        }),
        (e.rectBounce = function (t, e) {
          const i = u(t.getPosition(), t.getRadius()),
            n = s(
              { min: i.left, max: i.right },
              { min: i.top, max: i.bottom },
              { min: e.left, max: e.right },
              { min: e.top, max: e.bottom },
              t.velocity.x,
              (0, o.getValue)(t.options.bounce.horizontal)
            )
          n.bounced &&
            (void 0 !== n.velocity && (t.velocity.x = n.velocity),
            void 0 !== n.position && (t.position.x = n.position))
          const r = s(
            { min: i.top, max: i.bottom },
            { min: i.left, max: i.right },
            { min: e.top, max: e.bottom },
            { min: e.left, max: e.right },
            t.velocity.y,
            (0, o.getValue)(t.options.bounce.vertical)
          )
          r.bounced &&
            (void 0 !== r.velocity && (t.velocity.y = r.velocity),
            void 0 !== r.position && (t.position.y = r.position))
        })
    },
    60066: function (t, e, i) {
      'use strict'
      var o,
        n,
        s =
          (this && this.__classPrivateFieldSet) ||
          function (t, e, i, o, n) {
            if ('m' === o) throw new TypeError('Private method is not writable')
            if ('a' === o && !n)
              throw new TypeError(
                'Private accessor was defined without a setter'
              )
            if ('function' === typeof e ? t !== e || !n : !e.has(t))
              throw new TypeError(
                'Cannot write private member to an object whose class did not declare it'
              )
            return 'a' === o ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i
          },
        r =
          (this && this.__classPrivateFieldGet) ||
          function (t, e, i, o) {
            if ('a' === i && !o)
              throw new TypeError(
                'Private accessor was defined without a getter'
              )
            if ('function' === typeof e ? t !== e || !o : !e.has(t))
              throw new TypeError(
                'Cannot read private member from an object whose class did not declare it'
              )
            return 'm' === i
              ? o
              : 'a' === i
              ? o.call(t)
              : o
              ? o.value
              : e.get(t)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Engine = void 0)
      const a = i(27212),
        c = i(99294)
      ;(e.Engine = class {
        constructor() {
          o.set(this, void 0),
            n.set(this, void 0),
            s(this, o, !1, 'f'),
            (this.domArray = []),
            s(this, n, new a.Loader(this), 'f'),
            (this.plugins = new c.Plugins(this))
        }
        init() {
          r(this, o, 'f') || s(this, o, !0, 'f')
        }
        async loadFromArray(t, e, i) {
          return r(this, n, 'f').load(t, e, i)
        }
        async load(t, e) {
          return r(this, n, 'f').load(t, e)
        }
        async set(t, e, i) {
          return r(this, n, 'f').set(t, e, i)
        }
        async loadJSON(t, e, i) {
          return r(this, n, 'f').loadJSON(t, e, i)
        }
        async setJSON(t, e, i, o) {
          return r(this, n, 'f').setJSON(t, e, i, o)
        }
        setOnClickHandler(t) {
          r(this, n, 'f').setOnClickHandler(t)
        }
        dom() {
          return r(this, n, 'f').dom()
        }
        domItem(t) {
          return r(this, n, 'f').domItem(t)
        }
        async refresh() {
          for (const t of this.dom()) await t.refresh()
        }
        async addShape(t, e, i, o, n) {
          let s
          ;(s =
            'function' === typeof e
              ? { afterEffect: o, destroy: n, draw: e, init: i }
              : e),
            this.plugins.addShapeDrawer(t, s),
            await this.refresh()
        }
        async addPreset(t, e, i = !1) {
          this.plugins.addPreset(t, e, i), await this.refresh()
        }
        async addPlugin(t) {
          this.plugins.addPlugin(t), await this.refresh()
        }
        async addPathGenerator(t, e) {
          this.plugins.addPathGenerator(t, e), await this.refresh()
        }
        async addInteractor(t, e) {
          this.plugins.addInteractor(t, e), await this.refresh()
        }
        async addMover(t, e) {
          this.plugins.addParticleMover(t, e), await this.refresh()
        }
        async addParticleUpdater(t, e) {
          this.plugins.addParticleUpdater(t, e), await this.refresh()
        }
      }),
        (o = new WeakMap()),
        (n = new WeakMap())
    },
    43314: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadFull = void 0)
      const o = i(21885),
        n = i(74506),
        s = i(95182),
        r = i(15767),
        a = i(13379),
        c = i(87270),
        l = i(18883),
        d = i(90096),
        u = i(51821)
      e.loadFull = async function (t) {
        await (0, c.loadSlim)(t),
          await (0, a.loadRollUpdater)(t),
          await (0, l.loadTiltUpdater)(t),
          await (0, d.loadTwinkleUpdater)(t),
          await (0, u.loadWobbleUpdater)(t),
          await (0, s.loadExternalTrailInteraction)(t),
          await (0, o.loadAbsorbersPlugin)(t),
          await (0, n.loadEmittersPlugin)(t),
          await (0, r.loadPolygonMaskPlugin)(t)
      }
    },
    11786: function (t, e, i) {
      'use strict'
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, o) {
                void 0 === o && (o = i)
                var n = Object.getOwnPropertyDescriptor(e, i)
                ;(n &&
                  !('get' in n
                    ? !e.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return e[i]
                    },
                  }),
                  Object.defineProperty(t, o, n)
              }
            : function (t, e, i, o) {
                void 0 === o && (o = i), (t[o] = e[i])
              }),
        n =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              'default' === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                o(e, t, i)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.tsParticles =
          e.pJSDom =
          e.particlesJS =
          e.loadPolygonMaskPlugin =
          e.loadEmittersPlugin =
          e.loadAbsorbersPlugin =
          e.Main =
          e.Engine =
            void 0)
      const s = i(60066)
      Object.defineProperty(e, 'Engine', {
        enumerable: !0,
        get: function () {
          return s.Engine
        },
      }),
        Object.defineProperty(e, 'Main', {
          enumerable: !0,
          get: function () {
            return s.Engine
          },
        })
      const r = i(75),
        a = i(43314),
        c = new s.Engine()
      ;(e.tsParticles = c), c.init()
      const { particlesJS: l, pJSDom: d } = (0, r.initPjs)(c)
      ;(e.particlesJS = l),
        (e.pJSDom = d),
        (0, a.loadFull)(c),
        n(i(46496), e),
        n(i(33180), e),
        n(i(27972), e),
        n(i(62203), e),
        n(i(16528), e),
        n(i(94573), e),
        n(i(15103), e),
        n(i(58465), e),
        n(i(17309), e),
        n(i(18971), e),
        n(i(46614), e),
        n(i(57501), e),
        n(i(80767), e),
        n(i(62167), e),
        n(i(28035), e),
        n(i(77787), e),
        n(i(82852), e),
        n(i(39309), e),
        n(i(86527), e),
        n(i(41106), e),
        n(i(10012), e),
        n(i(91032), e),
        n(i(8919), e),
        n(i(22127), e),
        n(i(31771), e),
        n(i(86134), e),
        n(i(86858), e),
        n(i(18914), e),
        n(i(58591), e),
        n(i(78330), e),
        n(i(13745), e),
        n(i(76822), e),
        n(i(53068), e),
        n(i(75689), e),
        n(i(15416), e),
        n(i(12752), e),
        n(i(95078), e),
        n(i(73535), e),
        n(i(9472), e),
        n(i(85301), e),
        n(i(959), e),
        n(i(13753), e),
        n(i(99294), e),
        n(i(18304), e),
        n(i(28936), e),
        n(i(76729), e),
        n(i(49261), e),
        n(i(78779), e),
        n(i(29309), e),
        n(i(67950), e),
        n(i(66386), e),
        n(i(27212), e),
        n(i(2378), e),
        n(i(87017), e),
        n(i(26413), e),
        n(i(33752), e),
        n(i(36891), e),
        n(i(6671), e),
        n(i(12607), e),
        n(i(68257), e),
        n(i(27580), e),
        n(i(96518), e),
        n(i(94344), e),
        n(i(37625), e),
        n(i(65545), e),
        n(i(5743), e),
        n(i(86061), e),
        n(i(99455), e),
        n(i(43461), e),
        n(i(82893), e),
        n(i(95993), e),
        n(i(76542), e),
        n(i(45751), e),
        n(i(52058), e),
        n(i(4918), e),
        n(i(23021), e),
        n(i(80115), e),
        n(i(73626), e),
        n(i(55167), e),
        n(i(55783), e),
        n(i(90822), e),
        n(i(75606), e),
        n(i(17389), e),
        n(i(62694), e),
        n(i(81152), e),
        n(i(97434), e),
        n(i(33953), e),
        n(i(56485), e),
        n(i(61475), e),
        n(i(28774), e),
        n(i(10931), e),
        n(i(47912), e)
      var u = i(21885)
      Object.defineProperty(e, 'loadAbsorbersPlugin', {
        enumerable: !0,
        get: function () {
          return u.loadAbsorbersPlugin
        },
      }),
        n(i(70032), e)
      var h = i(74506)
      Object.defineProperty(e, 'loadEmittersPlugin', {
        enumerable: !0,
        get: function () {
          return h.loadEmittersPlugin
        },
      }),
        n(i(95665), e),
        n(i(90173), e)
      var p = i(15767)
      Object.defineProperty(e, 'loadPolygonMaskPlugin', {
        enumerable: !0,
        get: function () {
          return p.loadPolygonMaskPlugin
        },
      }),
        n(i(31451), e),
        n(i(31938), e),
        n(i(15445), e)
    },
    75: function (t, e) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.initPjs = void 0)
      e.initPjs = (t) => {
        const e = (e, i) => t.load(e, i)
        ;(e.load = (e, i, o) => {
          t.loadJSON(e, i)
            .then((t) => {
              t && o(t)
            })
            .catch(() => {
              o(void 0)
            })
        }),
          (e.setOnClickHandler = (e) => {
            t.setOnClickHandler(e)
          })
        return { particlesJS: e, pJSDom: t.dom() }
      }
    },
    87270: function (t, e, i) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.loadSlim = void 0)
      const o = i(93375),
        n = i(5493),
        s = i(9558),
        r = i(66897),
        a = i(56999),
        c = i(54525),
        l = i(55900),
        d = i(27888),
        u = i(77007),
        h = i(32690),
        p = i(90221),
        v = i(7539),
        f = i(60430),
        y = i(73636),
        g = i(75991),
        b = i(48269),
        m = i(71865),
        w = i(83559),
        _ = i(74130),
        S = i(97792),
        P = i(74968),
        x = i(2664),
        O = i(22464),
        M = i(54093),
        C = i(10333),
        A = i(63515),
        R = i(75550),
        V = i(59162)
      e.loadSlim = async function (t) {
        await (0, n.loadBaseMover)(t),
          await (0, _.loadParallaxMover)(t),
          await (0, a.loadExternalAttractInteraction)(t),
          await (0, c.loadExternalBounceInteraction)(t),
          await (0, l.loadExternalBubbleInteraction)(t),
          await (0, d.loadExternalConnectInteraction)(t),
          await (0, u.loadExternalGrabInteraction)(t),
          await (0, h.loadExternalPauseInteraction)(t),
          await (0, p.loadExternalPushInteraction)(t),
          await (0, v.loadExternalRemoveInteraction)(t),
          await (0, f.loadExternalRepulseInteraction)(t),
          await (0, S.loadParticlesAttractInteraction)(t),
          await (0, P.loadParticlesCollisionsInteraction)(t),
          await (0, x.loadParticlesLinksInteraction)(t),
          await (0, s.loadCircleShape)(t),
          await (0, y.loadImageShape)(t),
          await (0, b.loadLineShape)(t),
          await (0, O.loadPolygonShape)(t),
          await (0, C.loadSquareShape)(t),
          await (0, A.loadStarShape)(t),
          await (0, V.loadTextShape)(t),
          await (0, g.loadLifeUpdater)(t),
          await (0, m.loadOpacityUpdater)(t),
          await (0, M.loadSizeUpdater)(t),
          await (0, o.loadAngleUpdater)(t),
          await (0, r.loadColorUpdater)(t),
          await (0, R.loadStrokeColorUpdater)(t),
          await (0, w.loadOutModesUpdater)(t)
      }
    },
  },
])
