
var gulp = require('gulp');
var minify = require('gulp-minify');
var concat = require('gulp-concat');


// reading files
// concatenating files
// minifying
// setting destination of minified file

gulp.task('compress', function() {
    gulp.src([
        '../app/**/*-module.js',
        '../app/**/*-controller.js',
        '../app/**/*-directive.js',
        '../app/**/*-service.js'
    ])
    .pipe(concat('script.js'))
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('../compressed'));
});