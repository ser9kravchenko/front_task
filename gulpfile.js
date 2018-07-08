var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    reload = browserSync.reload;

var paths = {

    build: {
        html: 'build/',
        styles: 'build/styles/',
        fonts: 'build/fonts/',
        js: 'build/js/',
        images: 'build/images/'
    },

    src: {
        html: 'src/*.html',
        styles: 'src/styles/*.scss',
        fonts: 'src/fonts/*.*',
        js: 'src/js/*.js',
        images: 'src/**/images/**/*.*'
    },

    watch: {
        html: 'src/**/*.html',
        styles: 'src/**/styles/**/*.scss',
        fonts: 'src/fonts/*.*',
        js: 'src/**/js/*.js',
        images: 'src/**/images/**/*.*'
    },

    clean: './build'
};

var config = {
    server: {
        baseDir: './build'
    },
    host: 'localhost',
    port: 3000,
    logPrefix: 'front_task'
};

gulp.task('html:build', function(){
    gulp.src(paths.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(paths.build.html))
        .pipe(reload({stream: true}))
});

gulp.task('css:build', function(){
    gulp.src(paths.src.styles)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.build.styles))
        .pipe(reload({stream: true}))
});

gulp.task('font:build', function(){
    gulp.src(paths.src.fonts)
        .pipe(gulp.dest(paths.build.fonts))
        .pipe(reload({stream: true}))
});

gulp.task('js:build', function(){
    gulp.src(paths.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(paths.build.js))
        .pipe(reload({stream: true}))
});



gulp.task('img:build', function(){
    gulp.src(paths.src.images)
        .pipe(rename(function(file){
            file.dirname = '';
        }))
        .pipe(gulp.dest(paths.build.images))
        .pipe(reload({stream: true}))
});

gulp.task('build', ['html:build', 'css:build', 'font:build', 'js:build', 'img:build']);


gulp.task('watch', function(){
    watch([paths.watch.html], function(event, cb){
        gulp.start('html:build');
    });
    watch([paths.watch.styles], function(event, cb){
        gulp.start('css:build');
    });
    watch([paths.watch.styles], function(event, cb){
        gulp.start('font:build');
    });
    watch([paths.watch.js], function(event, cb){
        gulp.start('js:build');
    });
    watch([paths.watch.images], function(event, cb){
        gulp.start('img:build');
    });
});


gulp.task('webserver', function(){
    browserSync(config);
});


gulp.task('default', ['build', 'webserver', 'watch']);






