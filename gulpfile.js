const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload();

function reloadSite() {
	browserSync.reload();
}

function serve() {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "freelance portfolio/"
        },
        port: 8000,
        notification: false
    });


    gulp.watch("freelance portfolio/scss/**/*.scss", gulp.series([sassReload]));
    gulp.watch("freelance portfolio/**/*.html", gulp.series([htmlReload]));
    gulp.watch("freelance portfolio/js/**/*.js", gulp.series([js]));
};

function js() {
	return gulp.src('freelance portfolio/js/**/*.js')
		.pipe(browserSync.stream())
}

function htmlReload() {
	return gulp.src('freelance portfolio/**/*.html')
        .pipe(browserSync.stream())
}

function sassReload() {

	return gulp.src("freelance portfolio/scss/style.scss")
		.pipe(sass())
		.pipe(gulp.dest('freelance portfolio/css/'))
        .pipe(browserSync.stream())
}

function assembly() {
	//
}

exports.default = serve;
