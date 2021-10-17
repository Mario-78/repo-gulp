const gulp = require('gulp')
const { series } = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
    //File de configuração para o compilador typtscript

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)