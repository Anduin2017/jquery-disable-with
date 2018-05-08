var gulp = require("gulp");
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var expect = require('gulp-expect-file');
var inputFiles = 'src/jquery-disable-with.js';

gulp.task("bundle", function () {
    gulp.src(inputFiles)
        .pipe(expect(inputFiles))
        .pipe(concat('temp'))
        .pipe(uglify())
        .pipe(rename('jquery-disable-with.min.js'))
        .pipe(gulp.dest('dist'));
});