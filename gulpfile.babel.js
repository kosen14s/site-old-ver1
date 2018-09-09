'use strict'

import autoprefixer  from 'gulp-autoprefixer'
import browserSync   from 'browser-sync'
import gulp          from 'gulp'
import ghPages       from 'gulp-gh-pages'
import imagemin      from 'gulp-imagemin'
import pug           from 'gulp-pug'
import loadPlugins   from 'gulp-load-plugins'
import path          from 'path'
import plumber       from 'gulp-plumber'
import pngquant      from 'imagemin-pngquant'
import sass          from 'gulp-sass'
import sassGlob      from 'gulp-sass-glob'
import sassLint      from 'gulp-sass-lint'
import vinylYamlData from 'vinyl-yaml-data'
import yaml          from 'gulp-yaml'
import deepExtend    from 'deep-extend-stream'
import uglify        from 'gulp-uglify'
import shell         from 'gulp-shell'

const $           = loadPlugins()
const reload      = browserSync.reload

const SRC_DIR     = path.join(__dirname, './src')
const DEST_DIR    = path.join(__dirname, './dest')

const YAML_DIR    = path.join(SRC_DIR, 'yaml')
const PUG_DIR     = path.join(SRC_DIR, 'pug')
const STYLES_DIR  = path.join(SRC_DIR, 'styles')
const IMAGES_DIR  = path.join(SRC_DIR, 'images')
const SCRIPTS_DIR = path.join(SRC_DIR, 'scripts')

const locals = {}

const PUG_OPTIONS = {
    pretty: true,
    escapePre: true,
    locals: locals
}

const SASS_OPTIONS = {
    outputStyle: 'compressed'
}

const IMAGEMIN_OPTIONS = {
    progressive: true,
    use: [
        pngquant({
            quality: '65-80',
            speed: 1
        })
    ]
}

const BROWSER_SYNC_OPTIONS = {
    server: [SRC_DIR, DEST_DIR],
    open: false
}

const GH_PAGES_OPTIONS = {
    branch: 'master'
}

gulp.task('yaml', () => {
    return gulp.src(path.join(YAML_DIR, '**/*.{yaml,yml}'))
        .pipe(plumber())
        .pipe(yaml())
        .pipe(vinylYamlData())
        .pipe(deepExtend(locals))
})

gulp.task('pug', ['yaml'], () => {
    return gulp.src([path.join(PUG_DIR, '**/*.pug'), '!' + path.join(PUG_DIR, '**/_*.pug')])
        .pipe(plumber())
        .pipe(pug(PUG_OPTIONS))
        .pipe(gulp.dest(DEST_DIR))
})

gulp.task('pug-noplumber', ['yaml'], () => {
    return gulp.src([path.join(PUG_DIR, '**/*.pug'), '!' + path.join(PUG_DIR, '**/_*.pug')])
        .pipe(pug(PUG_OPTIONS))
        .pipe(gulp.dest(DEST_DIR))
})

gulp.task('scss', () => {
    return gulp.src(path.join(STYLES_DIR, '**/*.{scss,css}'))
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err.messageFormatted)
                this.emit('end')
            }
        }))
        .pipe(sassGlob())
        .pipe(sass(SASS_OPTIONS))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.join(DEST_DIR, 'styles')))
})

gulp.task('scss-noplumber', () => {
    return gulp.src(path.join(STYLES_DIR, '**/*.{scss,css}'))
        .pipe(sassGlob())
        .pipe(sass(SASS_OPTIONS))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.join(DEST_DIR, 'styles')))
})

gulp.task('sass-lint', () => {
    return gulp.src(path.join(STYLES_DIR, '*/*.s+(a|c)ss'))
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
})
gulp.task('scss-lint', ['sass-lint'])

gulp.task('imagemin', () => {
    return gulp.src(path.join(IMAGES_DIR, '**/*.{jpg,jpeg,png,gif,svg}'))
        .pipe(imagemin(IMAGEMIN_OPTIONS))
        .pipe(gulp.dest(path.join(DEST_DIR, 'images')))
})

gulp.task('jsmin', () => {
    return gulp.src(path.join(SCRIPTS_DIR, '**/*.js'))
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(gulp.dest(path.join(DEST_DIR, 'scripts')))
})

gulp.task('build', ['pug-noplumber', 'scss-noplumber', 'imagemin', 'jsmin'])

gulp.task('deploy', () => {
    return gulp.src(path.join(DEST_DIR, '**/*'))
        .pipe(shell([
          'sed -i -e "s/\.\.\//\.\//g" index.html'
        ]))
        .pipe(ghPages(GH_PAGES_OPTIONS))
})

gulp.task('watch', () => {
    browserSync(BROWSER_SYNC_OPTIONS)

    gulp.watch([path.join(PUG_DIR, '**/*.pug'), path.join(YAML_DIR, '**/*.{yaml,yml}')], ['pug', reload])
    gulp.watch([path.join(STYLES_DIR, '**/*.{scss,css}')], ['scss', reload])
    gulp.watch([path.join(SCRIPTS_DIR, '**/*.{jpg,jpeg,png,gif,svg}')], ['imagemin', reload])
    gulp.watch([path.join(SCRIPTS_DIR, '**/*.js')], ['jsmin', reload])
})
