const { src, dest, watch, parallel, series } = require('gulp');

const scss            = require('gulp-sass')(require('sass'));
const concat          = require('gulp-concat');
const autoprefixer    = require('gulp-autoprefixer');
const uglify          = require('gulp-uglify');
const image           = require('gulp-image');
const del             = require('del');
const browserSync     = require('browser-sync').create();
const svgSprite       = require('gulp-svg-sprite');
const cheerio         = require('gulp-cheerio');
const replace         = require('gulp-replace');
const fileInclude     = require('gulp-file-include');

const htmlInclude = () => {
  return src(['app/html/*.html']) // Находит любой .html файл в папке "html", куда будем подключать другие .html файлы													
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file',
    }))
    .pipe(dest('app')) // указываем, в какую папку поместить готовый файл html
    .pipe(browserSync.stream());
}

function svgSprites() {
  return src('app/images/icons/*.svg')
  .pipe(cheerio({
    run: ($) => {
        $("[fill]").removeAttr("fill");
        $("[stroke]").removeAttr("stroke"); 
        $("[style]").removeAttr("style"); 
    },
    parserOptions: { xmlMode: true },
  })
)
    .pipe(replace('&gt;','>'))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
		.pipe(dest('app/images'));
  }

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
} 

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/accordionjs/accordion.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/fancybox/dist/js/jquery.fancybox.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

function images (){
  return src('app/images/**/*.*')
  .pipe(image({
  optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
  pngquant: ['--speed=1', '--force', 256],
  zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
  jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
  mozjpeg: ['-optimize', '-progressive'],
  gifsicle: ['--optimize'],
  svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
}))
  .pipe(dest('dist/images'))
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js',
  ],{base: 'app'})
  .pipe(dest('dist'))
}

function cleanDist() {
  return del('dist')
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
  watch(['app/images/icon/*.svg'], svgSprites);
  watch(['app/html/**/*.html'], htmlInclude);
}

exports.styles      = styles;
exports.svgSprites  = svgSprites;
exports.scripts     = scripts;
exports.browsersync = browsersync;
exports.watching    = watching;
exports.images      = images;
exports.cleanDist   = cleanDist;
exports.build       = series(cleanDist, images, build);
exports.htmlInclude = htmlInclude;
exports.default = parallel(htmlInclude, styles, svgSprites, scripts, browsersync, watching, );