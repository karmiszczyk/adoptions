var	gulp = require('gulp');
var	sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',	function()	{
	return	gulp.src('scss/main.scss')
        .pipe( sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 4 version']
        }))
		.pipe(sass({
            outputStyle:	'compressed'
        }))
        .pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
})

gulp.task('watch',	function(){
	gulp.watch('scss/**/*.scss',	['sass']);
})
