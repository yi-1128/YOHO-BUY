//导入相应到的模块
const gulp = require('gulp'),
    html = require('gulp-htmlmin'),
    css = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    js = require('gulp-uglify'),
    img = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat');

//发布任务
//复制首页
function fnCopyIndex(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'));
}

//处理index
function fnIndex(){
    return gulp.src('./src/pages/*.html')
        .pipe(html())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/pages'));
}

//处理scss
function fnCss(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(css())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
}

//处理js
function fnJs(){
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(js())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'));
}

//处理图片
function fnImg(){
    return gulp.src('./src/img/*')
        .pipe(img())
        .pipe(gulp.dest('./dist/img'))
}

//复制lib
function fnLib(){
    return gulp.src('./src/lib/*')
        .pipe(gulp.dest('./dist/lib'));
}

//监听任务
function fnWatch(){
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/pages/*.html',fnIndex)
    gulp.watch('./src/sass/*.scss',fnCss)
    gulp.watch('./src/js/*.js',fnJs)
    gulp.watch('.src/img/*',fnImg)
    gulp.watch('./src/lib/*',fnLib);

}
//导出模块
exports.copyIndex = fnCopyIndex;
exports.html = fnIndex;
exports.css = fnCss;
exports.js = fnJs;
exports.img = fnImg;
exports.lib = fnLib;
exports.default = fnWatch;
