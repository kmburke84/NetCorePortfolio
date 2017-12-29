var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var jquery = require('jquery');
var bootstrap = require('bootstrap');
var sass = require('gulp-sass');


gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass(jquery))
        .pipe(gulp.dest('./app/temp/css'))
        .pipe(browserSync.stream())
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString())
            this.emit('end');
        });

});

gulp.task('js', function(){
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
		.pipe(gulp.dest('./app/temp/css'))
		.pipe(browserSync.stream());
});


gulp.task('html', function(){
    console.log("imagine something useful being done to html");
});


gulp.task('watch', ['sass'], function(){

	browserSync.init({
		notify:false,
		server:{
			baseDir:'app'
		}

	});

  watch(['node_modules/bootstrap/scss/bootstrap', 'src/scss/*.scss'], ['sass']);


	watch('./app/index.html',function(){
		browserSync.reload();
	});


	watch('./app/assets/css/*.css', function(){
		gulp.start('cssInject');
	});

});

gulp.task('default', ['js', 'serve']);
