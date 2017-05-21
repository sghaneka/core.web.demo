var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var babelify = require('babelify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX
var rename = require('gulp-rename');
var es = require('event-stream');
var dotnet = require('gulp-dotnet-watch');

var config = {
    paths: {
        port: 5000,
        devBaseUrl: 'http://localhost',
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/toastr.css',
            'css/site.css'
        ],
        images: './src/images/*',
        dist: './wwwroot',
        mainJs: './src/About/main.js'
    }
}

gulp.task('connect', function () {
    // to do, write code to start the webserver using dotnet watch etc
});

gulp.task('open', ['connect'], function () {
    var options = {
        uri: config.paths.devBaseUrl + ':' + config.paths.port + '/',
        app: 'chrome'
    };
    gulp.src(__filename)
        .pipe(open(options));
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

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('js1', function () {
    // we define our input files, which we want to have
    // bundled:
    var files = [
        './src/About/main.js',
        './src/Contact/main.js'
    ];
    // map them to our stream function
    var tasks = files.map(function (entry) {
        return browserify({ entries: [entry] })
            .transform(babelify)
            .bundle()
            .pipe(source(entry))
            // rename them to have "bundle as postfix"
            .pipe(rename({
                extname: '.bundle.js'
            }))
            .pipe(gulp.dest(config.paths.dist + '/scripts'));
    });
    // create a merged stream
    return es.merge.apply(null, tasks);
});