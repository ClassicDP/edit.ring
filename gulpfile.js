
const autoprefixerList = [
    'Chrome >= 45',
    'Firefox ESR',
    'Edge >= 12',
    'Explorer >= 10',
    'iOS >= 9',
    'Safari >= 9',
    'Android >= 4.4',
    'Opera >= 30'
];

/* подключаем gulp и плагины */
const { series,parallel, src, dest, watch }  = require('gulp');  // подключаем Gulp

let browserify = require("browserify");
let source = require('vinyl-source-stream');
let watchify = require("watchify");
let tsify = require("tsify");
let uglify = require('gulp-uglify');
let gUtil = require("gulp-util");
let sourcemaps = require('gulp-sourcemaps');
let buffer = require('vinyl-buffer');
let paths = {
    pages: ['src/*.html']
};

 function copyHtml () {
    return src(paths.pages)
        .pipe(dest("dist"));
}

let watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

function bundle() {
    return watchedBrowserify
        .transform("babelify")
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('dist'));
}

exports.default = series(copyHtml, bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gUtil.log);
