
const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// CSS

function css(){
    return src('./src/scss/app.scss').
    pipe( sass() ).
    pipe( dest('./src/styles/') );
};


// Watch

function watchCss(){
    watch('src/scss/**/*.scss', css)
}

exports.watch = watchCss;