/* particlesJS.load(@dom-id, @path-json*/
var flag = true;
particlesJS.load('stu-particles', '../js/data/particles.json',hideLoading);

function hideLoading() {
	$('.loading').addClass('hidden');
};
// Trianglify create
var pattern = Trianglify({
	width: window.innerWidth,
	height: 500
});
// Backgrout trianglify
$('.stu-trianglify').append(pattern.canvas());
// Declare angularjs
angular.module('startupbyme', ['ngMessages']);

