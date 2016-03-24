/* particlesJS.load(@dom-id, @path-json*/
var flag = true;
particlesJS.load('stu-particles', '../javascript/data/particles.json');
// setInterval(function() {
//     if (flag) {
//         particlesJS.load('stu-particles', '../javascript/data/particles-2.json');
//         flag = false;
//     } else {
//         particlesJS.load('stu-particles', '../javascript/data/particles.json');
//         flag = true;
//     }
// }, 10000);

// Trianglify create
var pattern = Trianglify({
	width: window.innerWidth,
	height: 500
});
$('.stu-trianglify').append(pattern.canvas());
// Contact
// var trianglifyContact = Trianglify({
//     width: window.innerWidth,
//     variance: "0",
//     seed: '4txiq',
//     x_colors: 'random'
// });
// $('.stu-trianglify-contact').append(trianglifyContact.canvas());
angular.module('startupbyme', ['ngMessages']);
àkasf
// var prev = 0;
// var $window = $(window);
// var nav = $('.navbar');

// $window.on('scroll', function(){
//   var scrollTop = $window.scrollTop();
//   nav.toggleClass('hidden', scrollTop > prev);
//   prev = scrollTop;
// });
// Plugin jquery
/**
 *  @name plugin top navigation
 *  @description go to element reference
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    destroy
 */
(function($) {
	'use strict';

	var pluginName = 'top-navigation',
		$htmlBodyTag = $('html body');

	var goToElementReference = function(id) {
		var $elementReference = $(id);
		// Check id exist
		if ($elementReference.length) {
			$htmlBodyTag.animate({
				scrollTop: $elementReference.offset().top
			}, 1000);
		}
	};

	var removeClassActive = function(liTagList) {
		liTagList.each(function() {
			var $liTag = $(this);
			if ($liTag.hasClass('active')) {
				$liTag.removeClass('active');
				return false;
			}
		});
	};

	function Plugin(element, options) {
		this.element = $(element);
		this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
		this.init();
	}

	Plugin.prototype = {
		init: function() {
			var that = this,
				el = that.element,
				$aTagList = el.find('li a'),
				$liTagList = el.find('li');


			$aTagList.on('click', function(event) {
				event.preventDefault();
				var $current = el.find('.active a');
				var $aTag = $(this);
				if ($current.is($aTag)) {
					return;
				}

				removeClassActive($liTagList);
				$aTag.parent('li').addClass('active');
				var $id = $aTag.attr('href');
				goToElementReference($id);
			});

		},

		destroy: function() {
			// remove events
			// deinitialize
			$.removeData(this.element[0], pluginName);
		}
	};

	$.fn[pluginName] = function(options, params) {
		return this.each(function() {
			var instance = $.data(this, pluginName);

			if (!instance) {
				$.data(this, pluginName, new Plugin(this, options));
			} else if (instance[options]) {
				instance[options](params);
			}
		});
	};

	$.fn[pluginName].defaults = {};

	$(function() {
		$('[data-' + pluginName + ']')[pluginName]();
	});

}(jQuery));
