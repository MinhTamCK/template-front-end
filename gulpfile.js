var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var sass = require('gulp-sass');
var csslint = require('gulp-csslint');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var minify = require('gulp-minifier');
var cache = require('gulp-cache');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var imageop = require('gulp-image-optimization');


gulp.task('default', ['clearCache', 'webserver', 'watch']);
gulp.task('release', ['clearCache', 'minify', 'images']);

// task watch
gulp.task('watch', function() {
    gulp.watch('./src/**/*.html', ['htmlhint', 'copyHtml']);
    gulp.watch('./src/css/**/*.scss', ['build-css', 'csslint', 'concatCss']);
    gulp.watch('./src/js/**/*js', ['jshint', 'copyjavascript']);

});


/* html validation task */
gulp.task('htmlhint', function() {
    return gulp.src('./src/html/*.html')
        .pipe(htmlhint('.htmlhintrc'))
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
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.reporter());
});
/* js validation task */
gulp.task('jshint', function() {
    return gulp.src('./src/js/**/*js')
        .pipe(jshint('.jshintrc'))
        .pipe(csslint.reporter());
});
/* concat css task */
gulp.task('concatCss', function() {
    return gulp.src(['./static/css/libs.css', './static/css/style.css'])
        .pipe(concat("./css/bundle.css"))
        .pipe(gulp.dest('out/'))
        .pipe(connect.reload())
        .pipe(notify("reload page"));
});
/* copy html task */
gulp.task('copyHtml', function() {
    return gulp.src('./src/html/*.html')
        .pipe(gulp.dest('out/html/'))
        .pipe(connect.reload())
        .pipe(notify("reload page"));
});
/* copy js task */
gulp.task('copyjavascript', function() {
    return gulp.src(['./src/js/lib/*.js', './src/js/plugin/*.js', './src/js/app.js'])
        .pipe(concat('./js/all.js'))
        .pipe(gulp.dest('out/'))
        .pipe(connect.reload())
        .pipe(notify("reload page"));
});
/* minify js/css task */
gulp.task('minify', function() {
    return gulp.src('./out/**/*')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true,
            getKeptComment: function(content, filePath) {
                var m = content.match(/\/\*![\s\S]*?\*\//img);
                return m && m.join('\n') + '\n' || '';
            }
        }))
        .pipe(gulp.dest('out/'));
});
/* clear all task */
gulp.task('clearCache', function() {
    return cache.clearAll();
});
/* create server task */
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: ['.', '.out']
    });
});

/* Optimization images task */
gulp.task('images', function(cb) {
    gulp.src(['./src/image/**/*.png','./src/image/**/*.jpg','./src/image/**/*.gif','./src/image/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./out/image')).on('end', cb).on('error', cb);
});
/* livereload task */
// gulp.task('livereload', function() {
//     gulp.src(['.out/css/*.css', '.out/js/*.js', '.out/html/*.html'])
//         .pipe(watch())
//         .pipe(connect.reload())
//         .pipe(notify("reload page"));
// });