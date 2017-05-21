var gulp = require('gulp');

var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('babelify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
    paths: {
        port: 5000,
        devBaseUrl: 'http://localhost',
        html: './src/*.html',
        js: './wwwroot/js/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/toastr.css'
        ],
        images: './src/images/*',
        dist: './dist',
        mainJs: './src/main.js'
    }
}

gulp.task('connect', function () {
    // to do, write code to start the webserver using dotnet watch etc
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});


gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(babelify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});