const gulp = require('gulp')
const { series } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const { pipe } = require('stdout-stream')
const { createExportDefault } = require('typescript')

function padrao(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        // "babel" Converte os recursos mais modernos do ES em 
        // recursos mais antigos e mais suportados pelos 
        // diferentes browsers
        .pipe(uglify())
        //"uglify" Exclui todos os espaços em branco e acomoda
        //todo o codigo do arquivo em uma única linha(minificação)
        .pipe(concat('app.min.js'))
        //"concat" Concatena todos os arquivos minificados em um
        //único arquivo
        .pipe(gulp.dest('bild'))
        //Salva o arquivo concatenado na pasta especificada

    return callback()
}

function fim(callback) {
    console.log('Fim!!!')
    return callback()
}

exports.default = series(padrao, fim)