/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

module.exports.Funcybox = function () {
	this.H;
	this.W;
	this.D;
	this.F = $.fancybox = function () {
		F.open.apply( this, arguments );
	},

	this.first = ($) => {
		this.H = $("html");
		this.W = $(window);
		this.D = $(document);
	}

	var IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = this.this.F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	this.extend = ($) => {
		return $.extend(this.F, {
			// The current version of fancyBox
			version: '2.1.5',
	
			defaults: {
				padding : 15,
				margin  : 20,
	
				width     : 800,
				height    : 600,
				minWidth  : 100,
				minHeight : 100,
				maxWidth  : 9999,
				maxHeight : 9999,
				pixelRatio: 1, // Set to 2 for retina display support
	
				autoSize   : true,
				autoHeight : false,
				autoWidth  : false,
	
				autoResize  : true,
				autoCenter  : !isTouch,
				fitToView   : true,
				aspectRatio : false,
				topRatio    : 0.5,
				leftRatio   : 0.5,
	
				scrolling : 'auto', // 'auto', 'yes' or 'no'
				wrapCSS   : '',
	
				arrows     : true,
				closeBtn   : true,
				closeClick : false,
				nextClick  : false,
				mouseWheel : true,
				autoPlay   : false,
				playSpeed  : 3000,
				preload    : 3,
				modal      : false,
				loop       : true,
	
				ajax  : {
					dataType : 'html',
					headers  : { 'X-fancyBox': true }
				},
				iframe : {
					scrolling : 'auto',
					preload   : true
				},
				swf : {
					wmode: 'transparent',
					allowfullscreen   : 'true',
					allowscriptaccess : 'always'
				},
	
				keys  : {
					next : {
						13 : 'left', // enter
						34 : 'up',   // page down
						39 : 'left', // right arrow
						40 : 'up'    // down arrow
					},
					prev : {
						8  : 'right',  // backspace
						33 : 'down',   // page up
						37 : 'right',  // left arrow
						38 : 'down'    // up arrow
					},
					close  : [27], // escape key
					play   : [32], // space - start/stop slideshow
					toggle : [70]  // letter "this.F" - toggle fullscreen
				},
	
				direction : {
					next : 'left',
					prev : 'right'
				},
	
				scrollOutside  : true,
	
				// Override some properties
				index   : 0,
				type    : null,
				href    : null,
				content : null,
				title   : null,
	
				// HTML templates
				tpl: {
					wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
					image    : '<img class="fancybox-image" src="{href}" alt="" />',
					iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
					error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
					closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
					next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
					prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
				},
	
				// Properties for each animation type
				// Opening fancyBox
				openEffect  : 'fade', // 'elastic', 'fade' or 'none'
				openSpeed   : 250,
				openEasing  : 'swing',
				openOpacity : true,
				openMethod  : 'zoomIn',
	
				// Closing fancyBox
				closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
				closeSpeed   : 250,
				closeEasing  : 'swing',
				closeOpacity : true,
				closeMethod  : 'zoomOut',
	
				// Changing next gallery item
				nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
				nextSpeed  : 250,
				nextEasing : 'swing',
				nextMethod : 'changeIn',
	
				// Changing previous gallery item
				prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
				prevSpeed  : 250,
				prevEasing : 'swing',
				prevMethod : 'changeOut',
	
				// Enable default helpers
				helpers : {
					overlay : true,
					title   : true
				},
	
				// Callbacks
				onCancel     : $.noop, // If canceling
				beforeLoad   : $.noop, // Before loading
				afterLoad    : $.noop, // After loading
				beforeShow   : $.noop, // Before changing in current item
				afterShow    : $.noop, // After opening
				beforeChange : $.noop, // Before changing gallery item
				beforeClose  : $.noop, // Before closing
				afterClose   : $.noop  // After closing
			},
	
			//Current state
			group    : {}, // Selected group
			opts     : {}, // Group options
			previous : null,  // Previous element
			coming   : null,  // Element being loaded
			current  : null,  // Currently loaded element
			isActive : false, // Is activated
			isOpen   : false, // Is currently open
			isOpened : false, // Have been fully opened at least once
	
			wrap  : null,
			skin  : null,
			outer : null,
			inner : null,
	
			player : {
				timer    : null,
				isActive : false
			},
	
			// Loaders
			ajaxLoad   : null,
			imgPreload : null,
	
			// Some collections
			transitions : {},
			helpers     : {},
	
			/*
			 *	Static methods
			 */
	
			open: function (group, opts) {
				if (!group) {
					return;
				}
	
				if (!$.isPlainObject(opts)) {
					opts = {};
				}
	
				// Close if already active
				if (false === this.this.F.close(true)) {
					return;
				}
	
				// Normalize group
				if (!$.isArray(group)) {
					group = isQuery(group) ? $(group).get() : [group];
				}
	
				// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
				$.each(group, function(i, element) {
					var obj = {},
						href,
						title,
						content,
						type,
						rez,
						hrefParts,
						selector;
	
					if ($.type(element) === "object") {
						// Check if is DOM element
						if (element.nodeType) {
							element = $(element);
						}
	
						if (isQuery(element)) {
							obj = {
								href    : element.data('fancybox-href') || element.attr('href'),
								title   : element.data('fancybox-title') || element.attr('title'),
								isDom   : true,
								element : element
							};
	
							if ($.metadata) {
								$.extend(true, obj, element.metadata());
							}
	
						} else {
							obj = element;
						}
					}
	
					href  = opts.href  || obj.href || (isString(element) ? element : null);
					title = opts.title !== undefined ? opts.title : obj.title || '';
	
					content = opts.content || obj.content;
					type    = content ? 'html' : (opts.type  || obj.type);
	
					if (!type && obj.isDom) {
						type = element.data('fancybox-type');
	
						if (!type) {
							rez  = element.prop('class').match(/fancybox\.(\w+)/);
							type = rez ? rez[1] : null;
						}
					}
	
					if (isString(href)) {
						// Try to guess the content type
						if (!type) {
							if (this.this.F.isImage(href)) {
								type = 'image';
	
							} else if (this.this.F.isSWF(href)) {
								type = 'swf';
	
							} else if (href.charAt(0) === '#') {
								type = 'inline';
	
							} else if (isString(element)) {
								type    = 'html';
								content = element;
							}
						}
	
						// Split url into two pieces with source url and content selector, e.g,
						// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
						if (type === 'ajax') {
							hrefParts = href.split(/\s+/, 2);
							href      = hrefParts.shift();
							selector  = hrefParts.shift();
						}
					}
	
					if (!content) {
						if (type === 'inline') {
							if (href) {
								content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7
	
							} else if (obj.isDom) {
								content = element;
							}
	
						} else if (type === 'html') {
							content = href;
	
						} else if (!type && !href && obj.isDom) {
							type    = 'inline';
							content = element;
						}
					}
	
					$.extend(obj, {
						href     : href,
						type     : type,
						content  : content,
						title    : title,
						selector : selector
					});
	
					group[ i ] = obj;
				});
	
				// Extend the defaults
				this.this.F.opts = $.extend(true, {}, this.this.F.defaults, opts);
	
				// All options are merged recursive except keys
				if (opts.keys !== undefined) {
					this.this.F.opts.keys = opts.keys ? $.extend({}, this.this.F.defaults.keys, opts.keys) : false;
				}
	
				this.this.F.group = group;
	
				return this.this.F._start(this.this.F.opts.index);
			},
	
			// Cancel image loading or abort ajax request
			cancel: function () {
				var coming = this.this.F.coming;
	
				if (!coming || false === this.this.F.trigger('onCancel')) {
					return;
				}
	
				this.this.F.hideLoading();
	
				if (this.this.F.ajaxLoad) {
					this.this.F.ajaxLoad.abort();
				}
	
				this.this.F.ajaxLoad = null;
	
				if (this.this.F.imgPreload) {
					this.this.F.imgPreload.onload = this.this.F.imgPreload.onerror = null;
				}
	
				if (coming.wrap) {
					coming.wrap.stop(true, true).trigger('onReset').remove();
				}
	
				this.this.F.coming = null;
	
				// If the first item has been canceled, then clear everything
				if (!this.this.F.current) {
					this.this.F._afterZoomOut( coming );
				}
			},
	
			// Start closing animation if is open; remove immediately if opening/closing
			close: function (event) {
				this.this.F.cancel();
	
				if (false === this.this.F.trigger('beforeClose')) {
					return;
				}
	
				this.this.F.unbindEvents();
	
				if (!this.this.F.isActive) {
					return;
				}
	
				if (!this.this.F.isOpen || event === true) {
					$('.fancybox-wrap').stop(true).trigger('onReset').remove();
	
					this.this.F._afterZoomOut();
	
				} else {
					this.this.F.isOpen = this.this.F.isOpened = false;
					this.this.F.isClosing = true;
	
					$('.fancybox-item, .fancybox-nav').remove();
	
					this.this.F.wrap.stop(true, true).removeClass('fancybox-opened');
	
					this.this.F.transitions[ this.this.F.current.closeMethod ]();
				}
			},
	
			// Manage slideshow:
			//   $.fancybox.play(); - toggle slideshow
			//   $.fancybox.play( true ); - start
			//   $.fancybox.play( false ); - stop
			play: function ( action ) {
				var clear = function () {
						clearTimeout(this.this.F.player.timer);
					},
					set = function () {
						clear();
	
						if (this.this.F.current && this.this.F.player.isActive) {
							this.this.F.player.timer = setTimeout(this.this.F.next, this.this.F.current.playSpeed);
						}
					},
					stop = function () {
						clear();
	
						this.D.unbind('.player');
	
						this.this.F.player.isActive = false;
	
						this.this.F.trigger('onPlayEnd');
					},
					start = function () {
						if (this.this.F.current && (this.this.F.current.loop || this.this.F.current.index < this.this.F.group.length - 1)) {
							this.this.F.player.isActive = true;
	
							D.bind({
								'onCancel.player beforeClose.player' : stop,
								'onUpdate.player'   : set,
								'beforeLoad.player' : clear
							});
	
							set();
	
							this.this.F.trigger('onPlayStart');
						}
					};
	
				if (action === true || (!this.this.F.player.isActive && action !== false)) {
					start();
				} else {
					stop();
				}
			},
	
			// Navigate to next gallery item
			next: function ( direction ) {
				var current = this.this.F.current;
	
				if (current) {
					if (!isString(direction)) {
						direction = current.direction.next;
					}
	
					this.this.F.jumpto(current.index + 1, direction, 'next');
				}
			},
	
			// Navigate to previous gallery item
			prev: function ( direction ) {
				var current = this.this.F.current;
	
				if (current) {
					if (!isString(direction)) {
						direction = current.direction.prev;
					}
	
					this.this.F.jumpto(current.index - 1, direction, 'prev');
				}
			},
	
			// Navigate to gallery item by index
			jumpto: function ( index, direction, router ) {
				var current = this.this.F.current;
	
				if (!current) {
					return;
				}
	
				index = getScalar(index);
	
				this.this.F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
				this.this.F.router    = router || 'jumpto';
	
				if (current.loop) {
					if (index < 0) {
						index = current.group.length + (index % current.group.length);
					}
	
					index = index % current.group.length;
				}
	
				if (current.group[ index ] !== undefined) {
					this.this.F.cancel();
	
					this.this.F._start(index);
				}
			},
	
			// Center inside viewport and toggle position type to fixed or absolute if needed
			reposition: function (e, onlyAbsolute) {
				var current = this.this.F.current,
					wrap    = current ? current.wrap : null,
					pos;
	
				if (wrap) {
					pos = this.this.F._getPosition(onlyAbsolute);
	
					if (e && e.type === 'scroll') {
						delete pos.position;
	
						wrap.stop(true, true).animate(pos, 200);
	
					} else {
						wrap.css(pos);
	
						current.pos = $.extend({}, current.dim, pos);
					}
				}
			},
	
			update: function (e) {
				var type = (e && e.type),
					anyway = !type || type === 'orientationchange';
	
				if (anyway) {
					clearTimeout(didUpdate);
	
					didUpdate = null;
				}
	
				if (!this.this.F.isOpen || didUpdate) {
					return;
				}
	
				didUpdate = setTimeout(function() {
					var current = this.this.F.current;
	
					if (!current || this.this.F.isClosing) {
						return;
					}
	
					this.this.F.wrap.removeClass('fancybox-tmp');
	
					if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
						this.this.F._setDimension();
					}
	
					if (!(type === 'scroll' && current.canShrink)) {
						this.this.F.reposition(e);
					}
	
					this.this.F.trigger('onUpdate');
	
					didUpdate = null;
	
				}, (anyway && !isTouch ? 0 : 300));
			},
	
			// Shrink content to fit inside viewport or restore if resized
			toggle: function ( action ) {
				if (this.this.F.isOpen) {
					this.this.F.current.fitToView = $.type(action) === "boolean" ? action : !this.this.F.current.fitToView;
	
					// Help browser to restore document dimensions
					if (isTouch) {
						this.this.F.wrap.removeAttr('style').addClass('fancybox-tmp');
	
						this.this.F.trigger('onUpdate');
					}
	
					this.this.F.update();
				}
			},
	
			hideLoading: function () {
				this.D.unbind('.loading');
	
				$('#fancybox-loading').remove();
			},
	
			showLoading: function () {
				var el, viewport;
	
				this.this.F.hideLoading();
	
				el = $('<div id="fancybox-loading"><div></div></div>').click(this.this.F.cancel).appendTo('body');
	
				// If user will press the escape-button, the request will be canceled
				D.bind('keydown.loading', function(e) {
					if ((e.which || e.keyCode) === 27) {
						e.preventDefault();
	
						this.this.F.cancel();
					}
				});
	
				if (!this.this.F.defaults.fixed) {
					viewport = this.this.F.getViewport();
	
					el.css({
						position : 'absolute',
						top  : (viewport.h * 0.5) + viewport.y,
						left : (viewport.w * 0.5) + viewport.x
					});
				}
			},
	
			getViewport: function () {
				var locked = (this.this.F.current && this.this.F.current.locked) || false,
					rez    = {
						x: W.scrollLeft(),
						y: W.scrollTop()
					};
	
				if (locked) {
					rez.w = locked[0].clientWidth;
					rez.h = locked[0].clientHeight;
	
				} else {
					// See http://bugs.jquery.com/ticket/6724
					rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
					rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
				}
	
				return rez;
			},
	
			// Unbind the keyboard / clicking actions
			unbindEvents: function () {
				if (this.this.F.wrap && isQuery(this.this.F.wrap)) {
					this.this.F.wrap.unbind('.fb');
				}
	
				this.D.unbind('.fb');
				W.unbind('.fb');
			},
	
			bindEvents: function () {
				var current = this.this.F.current,
					keys;
	
				if (!current) {
					return;
				}
	
				// Changing document height on iOS devices triggers a 'resize' event,
				// that can change document height... repeating infinitely
				W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), this.this.F.update);
	
				keys = current.keys;
	
				if (keys) {
					D.bind('keydown.fb', function (e) {
						var code   = e.which || e.keyCode,
							target = e.target || e.srcElement;
	
						// Skip esc key if loading, because showLoading will cancel preloading
						if (code === 27 && this.this.F.coming) {
							return false;
						}
	
						// Ignore key combinations and key events within form elements
						if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
							$.each(keys, function(i, val) {
								if (current.group.length > 1 && val[ code ] !== undefined) {
									this.this.F[ i ]( val[ code ] );
	
									e.preventDefault();
									return false;
								}
	
								if ($.inArray(code, val) > -1) {
									this.this.F[ i ] ();
	
									e.preventDefault();
									return false;
								}
							});
						}
					});
				}
	
				if ($.fn.mousewheel && current.mouseWheel) {
					this.F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
						var target = e.target || null,
							parent = $(target),
							canScroll = false;
	
						while (parent.length) {
							if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
								break;
							}
	
							canScroll = isScrollable( parent[0] );
							parent    = $(parent).parent();
						}
	
						if (delta !== 0 && !canScroll) {
							if (this.F.group.length > 1 && !current.canShrink) {
								if (deltaY > 0 || deltaX > 0) {
									this.F.prev( deltaY > 0 ? 'down' : 'left' );
	
								} else if (deltaY < 0 || deltaX < 0) {
									this.F.next( deltaY < 0 ? 'up' : 'right' );
								}
	
								e.preventDefault();
							}
						}
					});
				}
			},
	
			trigger: function (event, o) {
				var ret, obj = o || this.F.coming || this.F.current;
	
				if (!obj) {
					return;
				}
	
				if ($.isFunction( obj[event] )) {
					ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
				}
	
				if (ret === false) {
					return false;
				}
	
				if (obj.helpers) {
					$.each(obj.helpers, function (helper, opts) {
						if (opts && this.F.helpers[helper] && $.isFunction(this.F.helpers[helper][event])) {
							this.F.helpers[helper][event]($.extend(true, {}, this.F.helpers[helper].defaults, opts), obj);
						}
					});
				}
	
				this.D.trigger(event);
			},
	
			isImage: function (str) {
				return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
			},
	
			isSWF: function (str) {
				return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
			},
	
			_start: function (index) {
				var coming = {},
					obj,
					href,
					type,
					margin,
					padding;
	
				index = getScalar( index );
				obj   = this.F.group[ index ] || null;
	
				if (!obj) {
					return false;
				}
	
				coming = $.extend(true, {}, this.F.opts, obj);
	
				// Convert margin and padding properties to array - top, right, bottom, left
				margin  = coming.margin;
				padding = coming.padding;
	
				if ($.type(margin) === 'number') {
					coming.margin = [margin, margin, margin, margin];
				}
	
				if ($.type(padding) === 'number') {
					coming.padding = [padding, padding, padding, padding];
				}
	
				// 'modal' propery is just a shortcut
				if (coming.modal) {
					$.extend(true, coming, {
						closeBtn   : false,
						closeClick : false,
						nextClick  : false,
						arrows     : false,
						mouseWheel : false,
						keys       : null,
						helpers: {
							overlay : {
								closeClick : false
							}
						}
					});
				}
	
				// 'autoSize' property is a shortcut, too
				if (coming.autoSize) {
					coming.autoWidth = coming.autoHeight = true;
				}
	
				if (coming.width === 'auto') {
					coming.autoWidth = true;
				}
	
				if (coming.height === 'auto') {
					coming.autoHeight = true;
				}
	
				/*
				 * Add reference to the group, so it`s possible to access from callbacks, example:
				 * afterLoad : function() {
				 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				 * }
				 */
	
				coming.group  = this.F.group;
				coming.index  = index;
	
				// Give a chance for callback or helpers to update coming item (type, title, etc)
				this.F.coming = coming;
	
				if (false === this.F.trigger('beforeLoad')) {
					this.F.coming = null;
	
					return;
				}
	
				type = coming.type;
				href = coming.href;
	
				if (!type) {
					this.F.coming = null;
	
					//If we can not determine content type then drop silently or display next/prev item if looping through gallery
					if (this.F.current && this.F.router && this.F.router !== 'jumpto') {
						this.F.current.index = index;
	
						return this.F[ this.F.router ]( this.F.direction );
					}
	
					return false;
				}
	
				this.F.isActive = true;
	
				if (type === 'image' || type === 'swf') {
					coming.autoHeight = coming.autoWidth = false;
					coming.scrolling  = 'visible';
				}
	
				if (type === 'image') {
					coming.aspectRatio = true;
				}
	
				if (type === 'iframe' && isTouch) {
					coming.scrolling = 'scroll';
				}
	
				// Build the neccessary markup
				coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );
	
				$.extend(coming, {
					skin  : $('.fancybox-skin',  coming.wrap),
					outer : $('.fancybox-outer', coming.wrap),
					inner : $('.fancybox-inner', coming.wrap)
				});
	
				$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
					coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
				});
	
				this.F.trigger('onReady');
	
				// Check before try to load; 'inline' and 'html' types need content, others - href
				if (type === 'inline' || type === 'html') {
					if (!coming.content || !coming.content.length) {
						return this.F._error( 'content' );
					}
	
				} else if (!href) {
					return this.F._error( 'href' );
				}
	
				if (type === 'image') {
					this.F._loadImage();
	
				} else if (type === 'ajax') {
					this.F._loadAjax();
	
				} else if (type === 'iframe') {
					this.F._loadIframe();
	
				} else {
					this.F._afterLoad();
				}
			},
	
			_error: function ( type ) {
				$.extend(this.F.coming, {
					type       : 'html',
					autoWidth  : true,
					autoHeight : true,
					minWidth   : 0,
					minHeight  : 0,
					scrolling  : 'no',
					hasError   : type,
					content    : this.F.coming.tpl.error
				});
	
				this.F._afterLoad();
			},
	
			_loadImage: function () {
				// Reset preload image so it is later possible to check "complete" property
				var img = this.F.imgPreload = new Image();
	
				img.onload = function () {
					this.onload = this.onerror = null;
	
					this.F.coming.width  = this.width / this.F.opts.pixelRatio;
					this.F.coming.height = this.height / this.F.opts.pixelRatio;
	
					this.F._afterLoad();
				};
	
				img.onerror = function () {
					this.onload = this.onerror = null;
	
					this.F._error( 'image' );
				};
	
				img.src = this.F.coming.href;
	
				if (img.complete !== true) {
					this.F.showLoading();
				}
			},
	
			_loadAjax: function () {
				var coming = this.F.coming;
	
				this.F.showLoading();
	
				this.F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
					url: coming.href,
					error: function (jqXHR, textStatus) {
						if (this.F.coming && textStatus !== 'abort') {
							this.F._error( 'ajax', jqXHR );
	
						} else {
							this.F.hideLoading();
						}
					},
					success: function (data, textStatus) {
						if (textStatus === 'success') {
							coming.content = data;
	
							this.F._afterLoad();
						}
					}
				}));
			},
	
			_loadIframe: function() {
				var coming = this.F.coming,
					iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
						.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
						.attr('src', coming.href);
	
				// This helps IE
				$(coming.wrap).bind('onReset', function () {
					try {
						$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
					} catch (e) {}
				});
	
				if (coming.iframe.preload) {
					this.F.showLoading();
	
					iframe.one('load', function() {
						$(this).data('ready', 1);
	
						// iOS will lose scrolling if we resize
						if (!isTouch) {
							$(this).bind('load.fb', this.F.update);
						}
	
						// Without this trick:
						//   - iframe won't scroll on iOS devices
						//   - IE7 sometimes displays empty iframe
						$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();
	
						this.F._afterLoad();
					});
				}
	
				coming.content = iframe.appendTo( coming.inner );
	
				if (!coming.iframe.preload) {
					this.F._afterLoad();
				}
			},
	
			_preloadImages: function() {
				var group   = this.F.group,
					current = this.F.current,
					len     = group.length,
					cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
					item,
					i;
	
				for (i = 1; i <= cnt; i += 1) {
					item = group[ (current.index + i ) % len ];
	
					if (item.type === 'image' && item.href) {
						new Image().src = item.href;
					}
				}
			},
	
			_afterLoad: function () {
				var coming   = this.F.coming,
					previous = this.F.current,
					placeholder = 'fancybox-placeholder',
					current,
					content,
					type,
					scrolling,
					href,
					embed;
	
				this.F.hideLoading();
	
				if (!coming || this.F.isActive === false) {
					return;
				}
	
				if (false === this.F.trigger('afterLoad', coming, previous)) {
					coming.wrap.stop(true).trigger('onReset').remove();
	
					this.F.coming = null;
	
					return;
				}
	
				if (previous) {
					this.F.trigger('beforeChange', previous);
	
					previous.wrap.stop(true).removeClass('fancybox-opened')
						.find('.fancybox-item, .fancybox-nav')
						.remove();
				}
	
				this.F.unbindEvents();
	
				current   = coming;
				content   = coming.content;
				type      = coming.type;
				scrolling = coming.scrolling;
	
				$.extend(this.F, {
					wrap  : current.wrap,
					skin  : current.skin,
					outer : current.outer,
					inner : current.inner,
					current  : current,
					previous : previous
				});
	
				href = current.href;
	
				switch (type) {
					case 'inline':
					case 'ajax':
					case 'html':
						if (current.selector) {
							content = $('<div>').html(content).find(current.selector);
	
						} else if (isQuery(content)) {
							if (!content.data(placeholder)) {
								content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
							}
	
							content = content.show().detach();
	
							current.wrap.bind('onReset', function () {
								if ($(this).find(content).length) {
									content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
								}
							});
						}
					break;
	
					case 'image':
						content = current.tpl.image.replace('{href}', href);
					break;
	
					case 'swf':
						content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
						embed   = '';
	
						$.each(current.swf, function(name, val) {
							content += '<param name="' + name + '" value="' + val + '"></param>';
							embed   += ' ' + name + '="' + val + '"';
						});
	
						content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
					break;
				}
	
				if (!(isQuery(content) && content.parent().is(current.inner))) {
					current.inner.append( content );
				}
	
				// Give a chance for helpers or callbacks to update elements
				this.F.trigger('beforeShow');
	
				// Set scrolling before calculating dimensions
				current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));
	
				// Set initial dimensions and start position
				this.F._setDimension();
	
				this.F.reposition();
	
				this.F.isOpen = false;
				this.F.coming = null;
	
				this.F.bindEvents();
	
				if (!this.F.isOpened) {
					$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();
	
				} else if (previous.prevMethod) {
					this.F.transitions[ previous.prevMethod ]();
				}
	
				this.F.transitions[ this.F.isOpened ? current.nextMethod : current.openMethod ]();
	
				this.F._preloadImages();
			},
	
			_setDimension: function () {
				var viewport   = this.F.getViewport(),
					steps      = 0,
					canShrink  = false,
					canExpand  = false,
					wrap       = this.F.wrap,
					skin       = this.F.skin,
					inner      = this.F.inner,
					current    = this.F.current,
					width      = current.width,
					height     = current.height,
					minWidth   = current.minWidth,
					minHeight  = current.minHeight,
					maxWidth   = current.maxWidth,
					maxHeight  = current.maxHeight,
					scrolling  = current.scrolling,
					scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
					margin     = current.margin,
					wMargin    = getScalar(margin[1] + margin[3]),
					hMargin    = getScalar(margin[0] + margin[2]),
					wPadding,
					hPadding,
					wSpace,
					hSpace,
					origWidth,
					origHeight,
					origMaxWidth,
					origMaxHeight,
					ratio,
					width_,
					height_,
					maxWidth_,
					maxHeight_,
					iframe,
					body;
	
				// Reset dimensions so we could re-check actual size
				wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');
	
				wPadding = getScalar(skin.outerWidth(true)  - skin.width());
				hPadding = getScalar(skin.outerHeight(true) - skin.height());
	
				// Any space between content and viewport (margin, padding, border, title)
				wSpace = wMargin + wPadding;
				hSpace = hMargin + hPadding;
	
				origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
				origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;
	
				if (current.type === 'iframe') {
					iframe = current.content;
	
					if (current.autoHeight && iframe.data('ready') === 1) {
						try {
							if (iframe[0].contentWindow.document.location) {
								inner.width( origWidth ).height(9999);
	
								body = iframe.contents().find('body');
	
								if (scrollOut) {
									body.css('overflow-x', 'hidden');
								}
	
								origHeight = body.outerHeight(true);
							}
	
						} catch (e) {}
					}
	
				} else if (current.autoWidth || current.autoHeight) {
					inner.addClass( 'fancybox-tmp' );
	
					// Set width or height in case we need to calculate only one dimension
					if (!current.autoWidth) {
						inner.width( origWidth );
					}
	
					if (!current.autoHeight) {
						inner.height( origHeight );
					}
	
					if (current.autoWidth) {
						origWidth = inner.width();
					}
	
					if (current.autoHeight) {
						origHeight = inner.height();
					}
	
					inner.removeClass( 'fancybox-tmp' );
				}
	
				width  = getScalar( origWidth );
				height = getScalar( origHeight );
	
				ratio  = origWidth / origHeight;
	
				// Calculations for the content
				minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
				maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);
	
				minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
				maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);
	
				// These will be used to determine if wrap can fit in the viewport
				origMaxWidth  = maxWidth;
				origMaxHeight = maxHeight;
	
				if (current.fitToView) {
					maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
					maxHeight = Math.min(viewport.h - hSpace, maxHeight);
				}
	
				maxWidth_  = viewport.w - wMargin;
				maxHeight_ = viewport.h - hMargin;
	
				if (current.aspectRatio) {
					if (width > maxWidth) {
						width  = maxWidth;
						height = getScalar(width / ratio);
					}
	
					if (height > maxHeight) {
						height = maxHeight;
						width  = getScalar(height * ratio);
					}
	
					if (width < minWidth) {
						width  = minWidth;
						height = getScalar(width / ratio);
					}
	
					if (height < minHeight) {
						height = minHeight;
						width  = getScalar(height * ratio);
					}
	
				} else {
					width = Math.max(minWidth, Math.min(width, maxWidth));
	
					if (current.autoHeight && current.type !== 'iframe') {
						inner.width( width );
	
						height = inner.height();
					}
	
					height = Math.max(minHeight, Math.min(height, maxHeight));
				}
	
				// Try to fit inside viewport (including the title)
				if (current.fitToView) {
					inner.width( width ).height( height );
	
					wrap.width( width + wPadding );
	
					// Real wrap dimensions
					width_  = wrap.width();
					height_ = wrap.height();
	
					if (current.aspectRatio) {
						while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
							if (steps++ > 19) {
								break;
							}
	
							height = Math.max(minHeight, Math.min(maxHeight, height - 10));
							width  = getScalar(height * ratio);
	
							if (width < minWidth) {
								width  = minWidth;
								height = getScalar(width / ratio);
							}
	
							if (width > maxWidth) {
								width  = maxWidth;
								height = getScalar(width / ratio);
							}
	
							inner.width( width ).height( height );
	
							wrap.width( width + wPadding );
	
							width_  = wrap.width();
							height_ = wrap.height();
						}
	
					} else {
						width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
						height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
					}
				}
	
				if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
					width += scrollOut;
				}
	
				inner.width( width ).height( height );
	
				wrap.width( width + wPadding );
	
				width_  = wrap.width();
				height_ = wrap.height();
	
				canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
				canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));
	
				$.extend(current, {
					dim : {
						width	: getValue( width_ ),
						height	: getValue( height_ )
					},
					origWidth  : origWidth,
					origHeight : origHeight,
					canShrink  : canShrink,
					canExpand  : canExpand,
					wPadding   : wPadding,
					hPadding   : hPadding,
					wrapSpace  : height_ - skin.outerHeight(true),
					skinSpace  : skin.height() - height
				});
	
				if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
					inner.height('auto');
				}
			},
	
			_getPosition: function (onlyAbsolute) {
				var current  = this.F.current,
					viewport = this.F.getViewport(),
					margin   = current.margin,
					width    = this.F.wrap.width()  + margin[1] + margin[3],
					height   = this.F.wrap.height() + margin[0] + margin[2],
					rez      = {
						position: 'absolute',
						top  : margin[0],
						left : margin[3]
					};
	
				if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
					rez.position = 'fixed';
	
				} else if (!current.locked) {
					rez.top  += viewport.y;
					rez.left += viewport.x;
				}
	
				rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
				rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));
	
				return rez;
			},
	
			_afterZoomIn: function () {
				var current = this.F.current;
	
				if (!current) {
					return;
				}
	
				this.F.isOpen = this.F.isOpened = true;
	
				this.F.wrap.css('overflow', 'visible').addClass('fancybox-opened');
	
				this.F.update();
	
				// Assign a click event
				if ( current.closeClick || (current.nextClick && this.F.group.length > 1) ) {
					this.F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
						if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
							e.preventDefault();
	
							this.F[ current.closeClick ? 'close' : 'next' ]();
						}
					});
				}
	
				// Create a close button
				if (current.closeBtn) {
					$(current.tpl.closeBtn).appendTo(this.F.skin).bind('click.fb', function(e) {
						e.preventDefault();
	
						this.F.close();
					});
				}
	
				// Create navigation arrows
				if (current.arrows && this.F.group.length > 1) {
					if (current.loop || current.index > 0) {
						$(current.tpl.prev).appendTo(this.F.outer).bind('click.fb', this.F.prev);
					}
	
					if (current.loop || current.index < this.F.group.length - 1) {
						$(current.tpl.next).appendTo(this.F.outer).bind('click.fb', this.F.next);
					}
				}
	
				this.F.trigger('afterShow');
	
				// Stop the slideshow if this is the last item
				if (!current.loop && current.index === current.group.length - 1) {
					this.F.play( false );
	
				} else if (this.F.opts.autoPlay && !this.F.player.isActive) {
					this.F.opts.autoPlay = false;
	
					this.F.play();
				}
			},
	
			_afterZoomOut: function ( obj ) {
				obj = obj || this.F.current;
	
				$('.fancybox-wrap').trigger('onReset').remove();
	
				$.extend(this.F, {
					group  : {},
					opts   : {},
					router : false,
					current   : null,
					isActive  : false,
					isOpened  : false,
					isOpen    : false,
					isClosing : false,
					wrap   : null,
					skin   : null,
					outer  : null,
					inner  : null
				});
	
				this.F.trigger('afterClose', obj);
			}
		});
	}

	/*
	 *	Default transitions
	 */
	this.transitions = ($) => {
		return this.F.transitions = {
			getOrigPosition: function () {
				var current  = this.F.current,
					element  = current.element,
					orig     = current.orig,
					pos      = {},
					width    = 50,
					height   = 50,
					hPadding = current.hPadding,
					wPadding = current.wPadding,
					viewport = this.F.getViewport();
	
				if (!orig && current.isDom && element.is(':visible')) {
					orig = element.find('img:first');
	
					if (!orig.length) {
						orig = element;
					}
				}
	
				if (isQuery(orig)) {
					pos = orig.offset();
	
					if (orig.is('img')) {
						width  = orig.outerWidth();
						height = orig.outerHeight();
					}
	
				} else {
					pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
					pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
				}
	
				if (this.F.wrap.css('position') === 'fixed' || current.locked) {
					pos.top  -= viewport.y;
					pos.left -= viewport.x;
				}
	
				pos = {
					top     : getValue(pos.top  - hPadding * current.topRatio),
					left    : getValue(pos.left - wPadding * current.leftRatio),
					width   : getValue(width  + wPadding),
					height  : getValue(height + hPadding)
				};
	
				return pos;
			},
	
			step: function (now, fx) {
				var ratio,
					padding,
					value,
					prop       = fx.prop,
					current    = this.F.current,
					wrapSpace  = current.wrapSpace,
					skinSpace  = current.skinSpace;
	
				if (prop === 'width' || prop === 'height') {
					ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);
	
					if (this.F.isClosing) {
						ratio = 1 - ratio;
					}
	
					padding = prop === 'width' ? current.wPadding : current.hPadding;
					value   = now - padding;
	
					this.F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
					this.F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
				}
			},
	
			zoomIn: function () {
				var current  = this.F.current,
					startPos = current.pos,
					effect   = current.openEffect,
					elastic  = effect === 'elastic',
					endPos   = $.extend({opacity : 1}, startPos);
	
				// Remove "position" property that breaks older IE
				delete endPos.position;
	
				if (elastic) {
					startPos = this.getOrigPosition();
	
					if (current.openOpacity) {
						startPos.opacity = 0.1;
					}
	
				} else if (effect === 'fade') {
					startPos.opacity = 0.1;
				}
	
				this.F.wrap.css(startPos).animate(endPos, {
					duration : effect === 'none' ? 0 : current.openSpeed,
					easing   : current.openEasing,
					step     : elastic ? this.step : null,
					complete : this.F._afterZoomIn
				});
			},
	
			zoomOut: function () {
				var current  = this.F.current,
					effect   = current.closeEffect,
					elastic  = effect === 'elastic',
					endPos   = {opacity : 0.1};
	
				if (elastic) {
					endPos = this.getOrigPosition();
	
					if (current.closeOpacity) {
						endPos.opacity = 0.1;
					}
				}
	
				this.F.wrap.animate(endPos, {
					duration : effect === 'none' ? 0 : current.closeSpeed,
					easing   : current.closeEasing,
					step     : elastic ? this.step : null,
					complete : this.F._afterZoomOut
				});
			},
	
			changeIn: function () {
				var current   = this.F.current,
					effect    = current.nextEffect,
					startPos  = current.pos,
					endPos    = { opacity : 1 },
					direction = this.F.direction,
					distance  = 200,
					field;
	
				startPos.opacity = 0.1;
	
				if (effect === 'elastic') {
					field = direction === 'down' || direction === 'up' ? 'top' : 'left';
	
					if (direction === 'down' || direction === 'right') {
						startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
						endPos[ field ]   = '+=' + distance + 'px';
	
					} else {
						startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
						endPos[ field ]   = '-=' + distance + 'px';
					}
				}
	
				// Workaround for http://bugs.jquery.com/ticket/12273
				if (effect === 'none') {
					this.F._afterZoomIn();
	
				} else {
					this.F.wrap.css(startPos).animate(endPos, {
						duration : current.nextSpeed,
						easing   : current.nextEasing,
						complete : this.F._afterZoomIn
					});
				}
			},
	
			changeOut: function () {
				var previous  = this.F.previous,
					effect    = previous.prevEffect,
					endPos    = { opacity : 0.1 },
					direction = this.F.direction,
					distance  = 200;
	
				if (effect === 'elastic') {
					endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
				}
	
				previous.wrap.animate(endPos, {
					duration : effect === 'none' ? 0 : previous.prevSpeed,
					easing   : previous.prevEasing,
					complete : function () {
						$(this).trigger('onReset').remove();
					}
				});
			}
		};
	}

	/*
	 *	Overlay helper
	 */
	this.overlay = ($) => {
		let f = $.fancybox;
		console.log($.fancybox);
		
		return this.F.helpers.overlay = {
			defaults : {
				closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
				speedOut   : 200,       // duration of fadeOut animation
				showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
				css        : {},        // custom CSS properties
				locked     : !isTouch,  // if true, the content will be locked into overlay
				fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
			},
	
			overlay : null,      // current handle
			fixed   : false,     // indicates if the overlay has position "fixed"
			el      : $('html'), // element that contains "the lock"
	
			// Public methods
			create : function(opts) {
				opts = $.extend({}, this.defaults, opts);
	
				if (this.overlay) {
					this.close();
				}
	
				this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( this.F.coming ? this.F.coming.parent : opts.parent );
				this.fixed   = false;
	
				if (opts.fixed && this.F.defaults.fixed) {
					this.overlay.addClass('fancybox-overlay-fixed');
	
					this.fixed = true;
				}
			},
	
			open : function(opts) {
				var that = this;
	
				opts = $.extend({}, this.defaults, opts);
	
				if (this.overlay) {
					this.overlay.unbind('.overlay').width('auto').height('auto');
	
				} else {
					this.create(opts);
				}
	
				if (!this.fixed) {
					this.W.bind('resize.overlay', $.proxy( this.update, this) );
	
					this.update();
				}
	
				if (opts.closeClick) {
					this.overlay.bind('click.overlay', function(e) {
						if ($(e.target).hasClass('fancybox-overlay')) {
							if (this.F.isActive) {
								this.F.close();
							} else {
								that.close();
							}
	
							return false;
						}
					});
				}
	
				this.overlay.css( opts.css ).show();
			},
	
			close : function() {
				var scrollV, scrollH;
	
				this.W.unbind('resize.overlay');
	
				if (this.el.hasClass('fancybox-lock')) {
					$('.fancybox-margin').removeClass('fancybox-margin');
	
					scrollV = this.W.scrollTop();
					scrollH = this.W.scrollLeft();
	
					this.el.removeClass('fancybox-lock');
	
					this.W.scrollTop( scrollV ).scrollLeft( scrollH );
				}
	
				$('.fancybox-overlay').remove().hide();
	
				$.extend(this, {
					overlay : null,
					fixed   : false
				});
			},
	
			// Private, callbacks
	
			update : function () {
				var width = '100%', offsetWidth;
	
				// Reset width/height so it will not mess
				this.overlay.width(width).height('100%');
	
				// jQuery does not return reliable result for IE
				if (IE) {
					offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
	
					if (D.width() > offsetWidth) {
						width = D.width();
					}
	
				} else if (D.width() > this.W.width()) {
					width = D.width();
				}
	
				this.overlay.width(width).height(D.height());
			},
	
			// This is where we can manipulate DOM, because later it would cause iframes to reload
			onReady : function (opts, obj) {
				var overlay = this.overlay;
	
				$('.fancybox-overlay').stop(true, true);
	
				if (!overlay) {
					this.create(opts);
				}
	
				if (opts.locked && this.fixed && obj.fixed) {
					if (!overlay) {
						this.margin = this.D.height() > this.W.height() ? $('html').css('margin-right').replace("px", "") : false;
					}
	
					obj.locked = this.overlay.append( obj.wrap );
					obj.fixed  = false;
				}
	
				if (opts.showEarly === true) {
					this.beforeShow.apply(this, arguments);
				}
			},
	
			beforeShow : function(opts, obj) {
				var scrollV, scrollH;
	
				if (obj.locked) {
					if (this.margin !== false) {
						$('*').filter(function(){
							return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
						}).addClass('fancybox-margin');
	
						this.el.addClass('fancybox-margin');
					}
	
					scrollV = this.W.scrollTop();
					scrollH = this.W.scrollLeft();
	
					this.el.addClass('fancybox-lock');
	
					this.W.scrollTop( scrollV ).scrollLeft( scrollH );
				}
	
				this.open(opts);
			},
	
			onUpdate : function() {
				if (!this.fixed) {
					this.update();
				}
			},
	
			afterClose: function (opts) {
				// Remove overlay if exists and fancyBox is not opening
				// (e.g., it is not being open using afterClose callback)
				//if (this.overlay && !this.F.isActive) {
				if (this.overlay && !this.F.coming) {
					this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
				}
			}
		};
	}

	/*
	 *	Title helper
	 */
	this.helpers = ($) => {
		console.log(this.F($));
		
		return this.F.helpers.title = {
			defaults : {
				type     : 'float', // 'float', 'inside', 'outside' or 'over',
				position : 'bottom' // 'top' or 'bottom'
			},
	
			beforeShow: function (opts) {
				var current = this.F.current,
					text    = current.title,
					type    = opts.type,
					title,
					target;
	
				if ($.isFunction(text)) {
					text = text.call(current.element, current);
				}
	
				if (!isString(text) || $.trim(text) === '') {
					return;
				}
	
				title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');
	
				switch (type) {
					case 'inside':
						target = this.F.skin;
					break;
	
					case 'outside':
						target = this.F.wrap;
					break;
	
					case 'over':
						target = this.F.inner;
					break;
	
					default: // 'float'
						target = this.F.skin;
	
						title.appendTo('body');
	
						if (IE) {
							title.width( title.width() );
						}
	
						title.wrapInner('<span class="child"></span>');
	
						//Increase bottom margin so this title will also fit into viewport
						this.F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
					break;
				}
	
				title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
			}
		};
	}

	// jQuery plugin initialization
	this.fancybox = ($) => {
		return $.fn.fancybox = function (options) {
			var index,
				that     = $(this),
				selector = this.selector || '',
				run      = function(e) {
					var what = $(this).blur(), idx = index, relType, relVal;
	
					if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
						relType = options.groupAttr || 'data-fancybox-group';
						relVal  = what.attr(relType);
	
						if (!relVal) {
							relType = 'rel';
							relVal  = what.get(0)[ relType ];
						}
	
						if (relVal && relVal !== '' && relVal !== 'nofollow') {
							what = selector.length ? $(selector) : that;
							what = what.filter('[' + relType + '="' + relVal + '"]');
							idx  = what.index(this);
						}
	
						options.index = idx;
	
						// Stop an event from bubbling if everything is fine
						if (this.F.open(what, options) !== false) {
							e.preventDefault();
						}
					}
				};
	
			options = options || {};
			index   = options.index || 0;
	
			if (!selector || options.live === false) {
				that.unbind('click.fb-start').bind('click.fb-start', run);
	
			} else {
				D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
			}
	
			this.filter('[data-fancybox-start=1]').trigger('click');
	
			return this;
		};
	}

	// Tests that need a body at doc ready
	this.start = ($) => {
		return this.D.ready(() => {
			var w1, w2;

			if ( $.scrollbarWidth === undefined ) {
				// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
				$.scrollbarWidth = function() {
					var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
						child  = parent.children(),
						width  = child.innerWidth() - child.height( 99 ).innerWidth();

					parent.remove();

					return width;
				};
			}

			if ( $.support.fixedPosition === undefined ) {
				$.support.fixedPosition = (function() {
					var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
						fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

					elem.remove();

					return fixed;
				}());
			}

			$.extend(this.F.defaults, {
				scrollbarWidth : $.scrollbarWidth(),
				fixed  : $.support.fixedPosition,
				parent : $('body')
			});

			//Get real width of page scroll-bar
			w1 = $(window).width();

			this.H.addClass('fancybox-lock-test');

			w2 = $(window).width();

			this.H.removeClass('fancybox-lock-test');

			$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
		});
	}
}