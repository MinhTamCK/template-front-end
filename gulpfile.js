var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var sass = require('gulp-sass');
var csslint = require('gulp-csslint');
var jshint = require('gulp-jshint');

gulp.task('default', ['watch']);

// task watch
gulp.task('watch', function() {
    gulp.watch('./src/**/*.html', ['htmlhint']);
    gulp.watch('./src/css/**/*.scss', ['build-css']);
    gulp.watch('./static/css/style.css', ['csslint']); // Recommend watch each file
    gulp.watch('./src/js/**/*js', ['jshint']);
});


/* html validation task */
gulp.task('htmlhint', function() {
    return gulp.src('./src/html/*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter('htmlhint-stylish'));
});
/* build css task */
gulp.task('build-css', function() {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('static/css/'));
});
/* css validation task */
gulp.task('csslint', function() {
    return gulp.src('./static/css/style.css')
        .pipe(csslint())
        .pipe(csslint.reporter());
});
/* js validation task */
gulp.task('jshint', function() {
    return gulp.src('./src/js/**/*js')
        .pipe(jshint())
        .pipe(csslint.reporter());
});
