;(function e(t, n) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = n()
	else if (typeof define === 'function' && define.amd) define([], n)
	else if (typeof exports === 'object') exports['Swup'] = n()
	else t['Swup'] = n()
})(window, function () {
	return (function (e) {
		var t = {}
		function n(r) {
			if (t[r]) {
				return t[r].exports
			}
			var i = (t[r] = { i: r, l: false, exports: {} })
			e[r].call(i.exports, i, i.exports, n)
			i.l = true
			return i.exports
		}
		n.m = e
		n.c = t
		n.d = function (e, t, r) {
			if (!n.o(e, t)) {
				Object.defineProperty(e, t, { enumerable: true, get: r })
			}
		}
		n.r = function (e) {
			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
			}
			Object.defineProperty(e, '__esModule', { value: true })
		}
		n.t = function (e, t) {
			if (t & 1) e = n(e)
			if (t & 8) return e
			if (t & 4 && typeof e === 'object' && e && e.__esModule) return e
			var r = Object.create(null)
			n.r(r)
			Object.defineProperty(r, 'default', { enumerable: true, value: e })
			if (t & 2 && typeof e != 'string')
				for (var i in e)
					n.d(
						r,
						i,
						function (t) {
							return e[t]
						}.bind(null, i)
					)
			return r
		}
		n.n = function (e) {
			var t =
				e && e.__esModule
					? function t() {
							return e['default']
					  }
					: function t() {
							return e
					  }
			n.d(t, 'a', t)
			return t
		}
		n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}
		n.p = ''
		return n((n.s = 3))
	})([
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			t.cleanupAnimationClasses =
				t.Link =
				t.markSwupElements =
				t.normalizeUrl =
				t.getCurrentUrl =
				t.transitionProperty =
				t.transitionEnd =
				t.fetch =
				t.getDataFromHtml =
				t.createHistoryRecord =
				t.classify =
					undefined
			var r = n(7)
			var i = O(r)
			var a = n(8)
			var o = O(a)
			var s = n(9)
			var u = O(s)
			var l = n(10)
			var c = O(l)
			var f = n(11)
			var d = O(f)
			var h = n(12)
			var p = O(h)
			var v = n(13)
			var g = O(v)
			var m = n(14)
			var y = O(m)
			var w = n(15)
			var b = O(w)
			var E = n(2)
			var P = O(E)
			var _ = n(16)
			var k = O(_)
			function O(e) {
				return e && e.__esModule ? e : { default: e }
			}
			var S = (t.classify = i.default)
			var j = (t.createHistoryRecord = o.default)
			var M = (t.getDataFromHtml = u.default)
			var H = (t.fetch = c.default)
			var A = (t.transitionEnd = d.default)
			var C = (t.transitionProperty = p.default)
			var L = (t.getCurrentUrl = g.default)
			var T = (t.normalizeUrl = y.default)
			var q = (t.markSwupElements = b.default)
			var x = (t.Link = P.default)
			var U = (t.cleanupAnimationClasses = k.default)
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = (t.query = function e(t) {
				var n =
					arguments.length > 1 && arguments[1] !== undefined
						? arguments[1]
						: document
				if (typeof t !== 'string') {
					return t
				}
				return n.querySelector(t)
			})
			var i = (t.queryAll = function e(t) {
				var n =
					arguments.length > 1 && arguments[1] !== undefined
						? arguments[1]
						: document
				if (typeof t !== 'string') {
					return t
				}
				return Array.prototype.slice.call(n.querySelectorAll(t))
			})
			var a = (t.escapeCssIdentifier = function e(t) {
				if (window.CSS && window.CSS.escape) {
					return CSS.escape(t)
				} else {
					return t
				}
			})
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = (function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n]
						r.enumerable = r.enumerable || false
						r.configurable = true
						if ('value' in r) r.writable = true
						Object.defineProperty(e, r.key, r)
					}
				}
				return function (t, n, r) {
					if (n) e(t.prototype, n)
					if (r) e(t, r)
					return t
				}
			})()
			function i(e, t) {
				if (!(e instanceof t)) {
					throw new TypeError('Cannot call a class as a function')
				}
			}
			var a = (function () {
				function e(t) {
					i(this, e)
					if (t instanceof Element || t instanceof SVGElement) {
						this.link = t
					} else {
						this.link = document.createElement('a')
						this.link.href = t
					}
				}
				r(e, [
					{
						key: 'getPath',
						value: function e() {
							var t = this.link.pathname
							if (t[0] !== '/') {
								t = '/' + t
							}
							return t
						},
					},
					{
						key: 'getAddress',
						value: function e() {
							var t = this.link.pathname + this.link.search
							if (this.link.getAttribute('xlink:href')) {
								t = this.link.getAttribute('xlink:href')
							}
							if (t[0] !== '/') {
								t = '/' + t
							}
							return t
						},
					},
					{
						key: 'getHash',
						value: function e() {
							return this.link.hash
						},
					},
				])
				return e
			})()
			t.default = a
		},
		function (e, t, n) {
			'use strict'
			var r = n(4)
			var i = a(r)
			function a(e) {
				return e && e.__esModule ? e : { default: e }
			}
			e.exports = i.default
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) {
							if (Object.prototype.hasOwnProperty.call(n, r)) {
								e[r] = n[r]
							}
						}
					}
					return e
				}
			var i = (function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n]
						r.enumerable = r.enumerable || false
						r.configurable = true
						if ('value' in r) r.writable = true
						Object.defineProperty(e, r.key, r)
					}
				}
				return function (t, n, r) {
					if (n) e(t.prototype, n)
					if (r) e(t, r)
					return t
				}
			})()
			var a = n(5)
			var o = A(a)
			var s = n(6)
			var u = A(s)
			var l = n(17)
			var c = A(l)
			var f = n(18)
			var d = A(f)
			var h = n(19)
			var p = A(h)
			var v = n(20)
			var g = A(v)
			var m = n(21)
			var y = A(m)
			var w = n(22)
			var b = A(w)
			var E = n(23)
			var P = A(E)
			var _ = n(24)
			var k = A(_)
			var O = n(25)
			var S = A(O)
			var j = n(26)
			var M = n(1)
			var H = n(0)
			function A(e) {
				return e && e.__esModule ? e : { default: e }
			}
			function C(e, t) {
				if (!(e instanceof t)) {
					throw new TypeError('Cannot call a class as a function')
				}
			}
			var L = (function () {
				function e(t) {
					C(this, e)
					var n = {
						animateHistoryBrowsing: false,
						animationSelector: '[class*="transition-"]',
						linkSelector:
							'a[href^="' +
							window.location.origin +
							'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
						cache: true,
						containers: ['#swup'],
						requestHeaders: {
							'X-Requested-With': 'swup',
							Accept: 'text/html, application/xhtml+xml',
						},
						plugins: [],
						skipPopStateHandling: function e(t) {
							return !(t.state && t.state.source === 'swup')
						},
					}
					var i = r({}, n, t)
					this._handlers = {
						animationInDone: [],
						animationInStart: [],
						animationOutDone: [],
						animationOutStart: [],
						animationSkipped: [],
						clickLink: [],
						contentReplaced: [],
						disabled: [],
						enabled: [],
						openPageInNewTab: [],
						pageLoaded: [],
						pageRetrievedFromCache: [],
						pageView: [],
						popState: [],
						samePage: [],
						samePageWithHash: [],
						serverError: [],
						transitionStart: [],
						transitionEnd: [],
						willReplaceContent: [],
					}
					this.scrollToElement = null
					this.preloadPromise = null
					this.options = i
					this.plugins = []
					this.transition = {}
					this.delegatedListeners = {}
					this.boundPopStateHandler = this.popStateHandler.bind(this)
					this.cache = new u.default()
					this.cache.swup = this
					this.loadPage = c.default
					this.renderPage = d.default
					this.triggerEvent = p.default
					this.on = g.default
					this.off = y.default
					this.updateTransition = b.default
					this.getAnimationPromises = k.default
					this.getPageData = S.default
					this.getAnchorElement = P.default
					this.log = function () {}
					this.use = j.use
					this.unuse = j.unuse
					this.findPlugin = j.findPlugin
					this.getCurrentUrl = H.getCurrentUrl
					this.cleanupAnimationClasses = H.cleanupAnimationClasses
					this.enable()
				}
				i(e, [
					{
						key: 'enable',
						value: function e() {
							var t = this
							if (typeof Promise === 'undefined') {
								console.warn('Promise is not supported')
								return
							}
							this.delegatedListeners.click = (0, o.default)(
								document,
								this.options.linkSelector,
								'click',
								this.linkClickHandler.bind(this)
							)
							window.addEventListener('popstate', this.boundPopStateHandler)
							if (this.options.cache) {
							}
							;(0, H.markSwupElements)(
								document.documentElement,
								this.options.containers
							)
							this.options.plugins.forEach(function (e) {
								t.use(e)
							})
							window.history.replaceState(
								Object.assign({}, window.history.state, {
									url: window.location.href,
									random: Math.random(),
									source: 'swup',
								}),
								document.title,
								window.location.href
							)
							this.triggerEvent('enabled')
							document.documentElement.classList.add('swup-enabled')
							this.triggerEvent('pageView')
						},
					},
					{
						key: 'destroy',
						value: function e() {
							var t = this
							this.delegatedListeners.click.destroy()
							window.removeEventListener('popstate', this.boundPopStateHandler)
							this.cache.empty()
							this.options.plugins.forEach(function (e) {
								t.unuse(e)
							})
							;(0, M.queryAll)('[data-swup]').forEach(function (e) {
								e.removeAttribute('data-swup')
							})
							this.off()
							this.triggerEvent('disabled')
							document.documentElement.classList.remove('swup-enabled')
						},
					},
					{
						key: 'linkClickHandler',
						value: function e(t) {
							if (!t.metaKey && !t.ctrlKey && !t.shiftKey && !t.altKey) {
								if (t.button === 0) {
									this.triggerEvent('clickLink', t)
									t.preventDefault()
									var n = new H.Link(t.delegateTarget)
									if (
										n.getAddress() == (0, H.getCurrentUrl)() ||
										n.getAddress() == ''
									) {
										if (n.getHash() != '') {
											this.triggerEvent('samePageWithHash', t)
											var r = (0, P.default)(n.getHash())
											if (r != null) {
												history.replaceState(
													{
														url: n.getAddress() + n.getHash(),
														random: Math.random(),
														source: 'swup',
													},
													document.title,
													n.getAddress() + n.getHash()
												)
											} else {
												console.warn(
													'Element for offset not found (' + n.getHash() + ')'
												)
											}
										} else {
											this.triggerEvent('samePage', t)
										}
									} else {
										if (n.getHash() != '') {
											this.scrollToElement = n.getHash()
										}
										var i = t.delegateTarget.getAttribute(
											'data-swup-transition'
										)
										this.loadPage(
											{ url: n.getAddress(), customTransition: i },
											false
										)
									}
								}
							} else {
								this.triggerEvent('openPageInNewTab', t)
							}
						},
					},
					{
						key: 'popStateHandler',
						value: function e(t) {
							if (this.options.skipPopStateHandling(t)) return
							var n = new H.Link(
								t.state ? t.state.url : window.location.pathname
							)
							if (n.getHash() !== '') {
								this.scrollToElement = n.getHash()
							} else {
								t.preventDefault()
							}
							this.triggerEvent('popState', t)
							if (!this.options.animateHistoryBrowsing) {
								document.documentElement.classList.remove('is-animating')
								;(0, H.cleanupAnimationClasses)()
							}
							this.loadPage({ url: n.getAddress() }, t)
						},
					},
				])
				return e
			})()
			t.default = L
		},
		function (e, t, n) {
			'use strict'
			n.r(t)
			const r = new WeakMap()
			function i(e, t, n, i) {
				var a, o
				if (!e && !r.has(t)) {
					return false
				}
				const s = (a = r.get(t)) !== null && a !== void 0 ? a : new WeakMap()
				r.set(t, s)
				if (!e && !r.has(t)) {
					return false
				}
				const u = (o = s.get(n)) !== null && o !== void 0 ? o : new Set()
				s.set(n, u)
				const l = u.has(i)
				if (e) {
					u.add(i)
				} else {
					u.delete(i)
				}
				return l && e
			}
			function a(e) {
				return typeof e.addEventListener === 'function'
			}
			function o(e, t) {
				let n = e.target
				if (n instanceof Text) {
					n = n.parentElement
				}
				if (n instanceof Element && e.currentTarget instanceof Element) {
					const r = n.closest(t)
					if (r && e.currentTarget.contains(r)) {
						return r
					}
				}
			}
			function s(e, t, n, r, u) {
				if (typeof e === 'string') {
					e = document.querySelectorAll(e)
				}
				if (!a(e)) {
					const i = Array.prototype.map.call(e, e => s(e, t, n, r, u))
					return {
						destroy() {
							for (const e of i) {
								e.destroy()
							}
						},
					}
				}
				const l = e instanceof Document ? e.documentElement : e
				const c = Boolean(typeof u === 'object' ? u.capture : u)
				const f = e => {
					const n = o(e, t)
					if (n) {
						e.delegateTarget = n
						r.call(l, e)
					}
				}
				if (typeof u === 'object') {
					delete u.once
				}
				const d = JSON.stringify({ selector: t, type: n, capture: c })
				const h = i(true, l, r, d)
				const p = {
					destroy() {
						l.removeEventListener(n, f, u)
						i(false, l, r, d)
					},
				}
				if (!h) {
					l.addEventListener(n, f, u)
				}
				return p
			}
			t['default'] = s
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			t.Cache = undefined
			var r = (function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n]
						r.enumerable = r.enumerable || false
						r.configurable = true
						if ('value' in r) r.writable = true
						Object.defineProperty(e, r.key, r)
					}
				}
				return function (t, n, r) {
					if (n) e(t.prototype, n)
					if (r) e(t, r)
					return t
				}
			})()
			var i = n(0)
			function a(e, t) {
				if (!(e instanceof t)) {
					throw new TypeError('Cannot call a class as a function')
				}
			}
			var o = (t.Cache = (function () {
				function e() {
					a(this, e)
					this.pages = {}
					this.last = null
				}
				r(e, [
					{
						key: 'cacheUrl',
						value: function e(t) {
							t.url = (0, i.normalizeUrl)(t.url)
							if (t.url in this.pages === false) {
								this.pages[t.url] = t
							}
							this.last = this.pages[t.url]
							this.swup.log(
								'Cache (' + Object.keys(this.pages).length + ')',
								this.pages
							)
						},
					},
					{
						key: 'getPage',
						value: function e(t) {
							t = (0, i.normalizeUrl)(t)
							return this.pages[t]
						},
					},
					{
						key: 'getCurrentPage',
						value: function e() {
							return this.getPage((0, i.getCurrentUrl)())
						},
					},
					{
						key: 'exists',
						value: function e(t) {
							t = (0, i.normalizeUrl)(t)
							return t in this.pages
						},
					},
					{
						key: 'empty',
						value: function e() {
							this.pages = {}
							this.last = null
							this.swup.log('Cache cleared')
						},
					},
					{
						key: 'remove',
						value: function e(t) {
							delete this.pages[t]
						},
					},
				])
				return e
			})())
			t.default = o
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e(t) {
				var n = t
					.toString()
					.toLowerCase()
					.replace(/\s+/g, '-')
					.replace(/\//g, '-')
					.replace(/[^\w\-]+/g, '')
					.replace(/\-\-+/g, '-')
					.replace(/^-+/, '')
					.replace(/-+$/, '')
				if (n[0] === '/') n = n.splice(1)
				if (n === '') n = 'homepage'
				return n
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e(t) {
				window.history.pushState(
					{
						url: t || window.location.href.split(window.location.hostname)[1],
						random: Math.random(),
						source: 'swup',
					},
					document.title,
					t || window.location.href.split(window.location.hostname)[1]
				)
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = n(1)
			var i = function e(t, n) {
				var i = document.createElement('html')
				i.innerHTML = t
				var a = []
				n.forEach(function (e) {
					if ((0, r.query)(e, i) == null) {
						console.warn('[swup] Container ' + e + ' not found on page.')
						return null
					} else {
						if ((0, r.queryAll)(e).length !== (0, r.queryAll)(e, i).length) {
							console.warn(
								'[swup] Mismatched number of containers found on new page.'
							)
						}
						;(0, r.queryAll)(e).forEach(function (t, n) {
							;(0, r.queryAll)(e, i)[n].setAttribute('data-swup', a.length)
							a.push((0, r.queryAll)(e, i)[n].outerHTML)
						})
					}
				})
				var o = {
					title: (i.querySelector('title') || {}).innerText,
					pageClass: i.querySelector('body').className,
					originalContent: t,
					blocks: a,
				}
				i.innerHTML = ''
				i = null
				return o
			}
			t.default = i
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) {
							if (Object.prototype.hasOwnProperty.call(n, r)) {
								e[r] = n[r]
							}
						}
					}
					return e
				}
			var i = function e(t) {
				var n =
					arguments.length > 1 && arguments[1] !== undefined
						? arguments[1]
						: false
				var i = {
					url: window.location.pathname + window.location.search,
					method: 'GET',
					data: null,
					headers: {},
				}
				var a = r({}, i, t)
				var o = new XMLHttpRequest()
				o.onreadystatechange = function () {
					if (o.readyState === 4) {
						if (o.status !== 500) {
							n(o)
						} else {
							n(o)
						}
					}
				}
				o.open(a.method, a.url, true)
				Object.keys(a.headers).forEach(function (e) {
					o.setRequestHeader(e, a.headers[e])
				})
				o.send(a.data)
				return o
			}
			t.default = i
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e() {
				if (
					window.ontransitionend === undefined &&
					window.onwebkittransitionend !== undefined
				) {
					return 'webkitTransitionEnd'
				} else {
					return 'transitionend'
				}
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e() {
				if (
					window.ontransitionend === undefined &&
					window.onwebkittransitionend !== undefined
				) {
					return 'WebkitTransition'
				} else {
					return 'transition'
				}
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e() {
				return window.location.pathname + window.location.search
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = n(2)
			var i = a(r)
			function a(e) {
				return e && e.__esModule ? e : { default: e }
			}
			var o = function e(t) {
				return new i.default(t).getAddress()
			}
			t.default = o
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = n(1)
			var i = function e(t, n) {
				var i = 0
				n.forEach(function (e) {
					if ((0, r.query)(e, t) == null) {
						console.warn('[swup] Container ' + e + ' not found on page.')
					} else {
						;(0, r.queryAll)(e).forEach(function (n, a) {
							;(0, r.queryAll)(e, t)[a].setAttribute('data-swup', i)
							i++
						})
					}
				})
			}
			t.default = i
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e() {
				document.documentElement.className.split(' ').forEach(function (e) {
					if (
						new RegExp('^to-').test(e) ||
						e === 'is-changing' ||
						e === 'is-rendering' ||
						e === 'is-popstate'
					) {
						document.documentElement.classList.remove(e)
					}
				})
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = (function () {
				function e(e, t) {
					var n = []
					var r = true
					var i = false
					var a = undefined
					try {
						for (
							var o = e[Symbol.iterator](), s;
							!(r = (s = o.next()).done);
							r = true
						) {
							n.push(s.value)
							if (t && n.length === t) break
						}
					} catch (e) {
						i = true
						a = e
					} finally {
						try {
							if (!r && o['return']) o['return']()
						} finally {
							if (i) throw a
						}
					}
					return n
				}
				return function (t, n) {
					if (Array.isArray(t)) {
						return t
					} else if (Symbol.iterator in Object(t)) {
						return e(t, n)
					} else {
						throw new TypeError(
							'Invalid attempt to destructure non-iterable instance'
						)
					}
				}
			})()
			var i =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) {
							if (Object.prototype.hasOwnProperty.call(n, r)) {
								e[r] = n[r]
							}
						}
					}
					return e
				}
			var a = n(0)
			var o = function e(t, n) {
				var o = this
				var s = [],
					u = void 0
				var l = function e() {
					o.triggerEvent('animationOutStart')
					document.documentElement.classList.add('is-changing')
					document.documentElement.classList.add('is-leaving')
					document.documentElement.classList.add('is-animating')
					if (n) {
						document.documentElement.classList.add('is-popstate')
					}
					document.documentElement.classList.add('to-' + (0, a.classify)(t.url))
					s = o.getAnimationPromises('out')
					Promise.all(s).then(function () {
						o.triggerEvent('animationOutDone')
					})
					if (!n) {
						var r = void 0
						if (o.scrollToElement != null) {
							r = t.url + o.scrollToElement
						} else {
							r = t.url
						}
						;(0, a.createHistoryRecord)(r)
					}
				}
				this.triggerEvent('transitionStart', n)
				if (t.customTransition != null) {
					this.updateTransition(
						window.location.pathname,
						t.url,
						t.customTransition
					)
					document.documentElement.classList.add(
						'to-' + (0, a.classify)(t.customTransition)
					)
				} else {
					this.updateTransition(window.location.pathname, t.url)
				}
				if (!n || this.options.animateHistoryBrowsing) {
					l()
				} else {
					this.triggerEvent('animationSkipped')
				}
				if (this.cache.exists(t.url)) {
					u = new Promise(function (e) {
						e(o.cache.getPage(t.url))
					})
					this.triggerEvent('pageRetrievedFromCache')
				} else {
					if (!this.preloadPromise || this.preloadPromise.route != t.url) {
						u = new Promise(function (e, n) {
							;(0,
							a.fetch)(i({}, t, { headers: o.options.requestHeaders }), function (r) {
								if (r.status === 500) {
									o.triggerEvent('serverError')
									n(t.url)
									return
								} else {
									var i = o.getPageData(r)
									if (i != null && i.blocks.length > 0) {
										i.url = t.url
									} else {
										n(t.url)
										return
									}
									o.cache.cacheUrl(i)
									o.triggerEvent('pageLoaded')
									e(i)
								}
							})
						})
					} else {
						u = this.preloadPromise
					}
				}
				Promise.all([u].concat(s))
					.then(function (e) {
						var t = r(e, 1),
							i = t[0]
						o.renderPage(i, n)
						o.preloadPromise = null
					})
					.catch(function (e) {
						o.options.skipPopStateHandling = function () {
							window.location = e
							return true
						}
						window.history.go(-1)
					})
			}
			t.default = o
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r =
				Object.assign ||
				function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t]
						for (var r in n) {
							if (Object.prototype.hasOwnProperty.call(n, r)) {
								e[r] = n[r]
							}
						}
					}
					return e
				}
			var i = n(0)
			var a = function e(t, n) {
				var a = this
				document.documentElement.classList.remove('is-leaving')
				var o = this.getCurrentUrl() === t.url
				if (!o) return
				var s = new i.Link(t.responseURL).getPath()
				if (window.location.pathname !== s) {
					window.history.replaceState(
						{ url: s, random: Math.random(), source: 'swup' },
						document.title,
						s
					)
					this.cache.cacheUrl(r({}, t, { url: s }))
				}
				if (!n || this.options.animateHistoryBrowsing) {
					document.documentElement.classList.add('is-rendering')
				}
				this.triggerEvent('willReplaceContent', n)
				for (var u = 0; u < t.blocks.length; u++) {
					document.body.querySelector('[data-swup="' + u + '"]').outerHTML =
						t.blocks[u]
				}
				document.title = t.title
				this.triggerEvent('contentReplaced', n)
				this.triggerEvent('pageView', n)
				if (!this.options.cache) {
					this.cache.empty()
				}
				setTimeout(function () {
					if (!n || a.options.animateHistoryBrowsing) {
						a.triggerEvent('animationInStart')
						document.documentElement.classList.remove('is-animating')
					}
				}, 10)
				if (!n || this.options.animateHistoryBrowsing) {
					var l = this.getAnimationPromises('in')
					Promise.all(l).then(function () {
						a.triggerEvent('animationInDone')
						a.triggerEvent('transitionEnd', n)
						a.cleanupAnimationClasses()
					})
				} else {
					this.triggerEvent('transitionEnd', n)
				}
				this.scrollToElement = null
			}
			t.default = a
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e(t, n) {
				this._handlers[t].forEach(function (e) {
					try {
						e(n)
					} catch (e) {
						console.error(e)
					}
				})
				var r = new CustomEvent('swup:' + t, { detail: t })
				document.dispatchEvent(r)
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e(t, n) {
				if (this._handlers[t]) {
					this._handlers[t].push(n)
				} else {
					console.warn('Unsupported event ' + t + '.')
				}
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e(t, n) {
				var r = this
				if (t != null) {
					if (n != null) {
						if (
							this._handlers[t] &&
							this._handlers[t].filter(function (e) {
								return e === n
							}).length
						) {
							var i = this._handlers[t].filter(function (e) {
								return e === n
							})[0]
							var a = this._handlers[t].indexOf(i)
							if (a > -1) {
								this._handlers[t].splice(a, 1)
							}
						} else {
							console.warn("Handler for event '" + t + "' no found.")
						}
					} else {
						this._handlers[t] = []
					}
				} else {
					Object.keys(this._handlers).forEach(function (e) {
						r._handlers[e] = []
					})
				}
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = function e(t, n, r) {
				this.transition = { from: t, to: n, custom: r }
			}
			t.default = r
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = n(1)
			var i = function e(t) {
				if (!t) {
					return null
				}
				if (t.charAt(0) === '#') {
					t = t.substring(1)
				}
				t = decodeURIComponent(t)
				t = (0, r.escapeCssIdentifier)(t)
				return (0, r.query)('#' + t) || (0, r.query)("a[name='" + t + "']")
			}
			t.default = i
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = n(1)
			var i = n(0)
			var a = function e() {
				var t = this.options.animationSelector
				var n = (0, i.transitionProperty)() + 'Duration'
				var a = []
				var o = (0, r.queryAll)(t, document.body)
				if (!o.length) {
					console.warn('[swup] No animated elements found by selector ' + t)
					return [Promise.resolve()]
				}
				o.forEach(function (e) {
					var r = window.getComputedStyle(e)[n]
					if (!r || r == '0s') {
						console.warn(
							'[swup] No CSS transition duration defined for element of selector ' +
								t
						)
						a.push(Promise.resolve())
						return
					}
					var o = new Promise(function (t) {
						e.addEventListener((0, i.transitionEnd)(), function (n) {
							if (e == n.target) {
								t()
							}
						})
					})
					a.push(o)
				})
				return a
			}
			t.default = a
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = n(0)
			var i = function e(t) {
				var n = t.responseText
				var i = (0, r.getDataFromHtml)(n, this.options.containers)
				if (i) {
					i.responseURL = t.responseURL ? t.responseURL : window.location.href
				} else {
					console.warn('[swup] Received page is invalid.')
					return null
				}
				return i
			}
			t.default = i
		},
		function (e, t, n) {
			'use strict'
			Object.defineProperty(t, '__esModule', { value: true })
			var r = (t.use = function e(t) {
				if (!t.isSwupPlugin) {
					console.warn('Not swup plugin instance ' + t + '.')
					return
				}
				this.plugins.push(t)
				t.swup = this
				if (typeof t._beforeMount === 'function') {
					t._beforeMount()
				}
				t.mount()
				return this.plugins
			})
			var i = (t.unuse = function e(t) {
				var n = void 0
				if (typeof t === 'string') {
					n = this.plugins.find(function (e) {
						return t === e.name
					})
				} else {
					n = t
				}
				if (!n) {
					console.warn('No such plugin.')
					return
				}
				n.unmount()
				if (typeof n._afterUnmount === 'function') {
					n._afterUnmount()
				}
				var r = this.plugins.indexOf(n)
				this.plugins.splice(r, 1)
				return this.plugins
			})
			var a = (t.findPlugin = function e(t) {
				return this.plugins.find(function (e) {
					return t === e.name
				})
			})
		},
	])
})
