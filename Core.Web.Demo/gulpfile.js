var gulp = require('gulp'),
    dotnet_watch = require('gulp-dotnet-watch'),
    Dotnet = require('gulp-dotnet');

var browserify = require('browserify'); // Bundles JS
var babelify = require("babelify");
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
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

var server;
// Calls 'dotnet run' in the current working directory
gulp.task('start:api', function (cb) {
    if (!server) server = new Dotnet({ cwd: './' });
    server.start('watch run', cb);
});

gulp.task('watch-server', function () {
    dotnet_watch.watch('run', {
        cwd: './'
    });
});