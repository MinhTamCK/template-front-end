var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');

gulp.task('default', ['watch']);

// task watch
gulp.task('watch', function() {
	gulp.watch('./src/**/*.html', ['htmlhint']);
});
// Defined function run gulp

gulp.task('htmlhint', function() {
	return gulp.src('./src/html/*.html')
		.pipe(htmlhint())
		.pipe(htmlhint.reporter('htmlhint-stylish'));
});

// function init() {
// 	return gulp.src('./src/html/*.html')
// 		.pipe(htmlhint())
// 		.pipe(htmlhint.reporter('htmlhint-stylish'))
// 		.pipe(htmlhint.reporter())
// 		.pipe(gulp.dest('./build/templates'))
// };