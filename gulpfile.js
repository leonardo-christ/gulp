const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require ('gulp-uglify')
const imagemin = require('gulp-imagemin')

function compSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

function compJS () {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compIMG() {
    return gulp.src('./source/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}

exports.default = function() {
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false}, gulp.series(compSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compJS));
    gulp.watch('./source/imagens/*', {ignoreInitial: false}, gulp.series(compIMG));
}