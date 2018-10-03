var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');
// caminhos
var paths = {
    uikit: "./node_modules/uikit/dist/js/",
    sass: "./dev/sass/",
    js: "./assets/js/",
    css: "./assets/css/"
}
// sass
gulp.task('sass', function () {
return gulp.src(paths.sass + '*.sass')
    .pipe(gulpSass({
        includePaths: [paths.sass],
        outputStyle: 'compressed'
    }))
    .on('error', gulpSass.logError)
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true
    }))
    .pipe(gulp.dest(paths.css));
});
// javascript
gulp.task('js', function(){
return gulp.src(paths.uikit + '*.min.js')
    .pipe(gulp.dest(paths.js));
})

gulp.task('build', ['sass']);
gulp.task('watch', function () {
    gulp.watch(paths.sass + '**/*.sass', ['sass']);
});

gulp.task('default',['js', 'sass', 'watch'] )