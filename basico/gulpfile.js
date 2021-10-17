const gulp = require('gulp')
    // duas opções de importação das funções gulp
    // const series = gulp.series
const { series, parallel } = require('gulp')

const antes1 = async callback => {
    console.log('Tarefa antes1!')
    return callback
}
const antes2 = async callback => {
    console.log('Tarefa antes2!')
    return callback
}

function copiar(callback) {
    gulp.src('pastaA/**/*.txt')
        //Copia todos os arquivos com a extensão especificada 
        //na pasta especificada e suas subpastas
        // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        //Copia somente os arquivos especificados no array 
        // .pipe(tansformacaoA())
        // .pipe(tansformacaoB())
        // .pipe(tansformacaoC())
        // .pipe(tansformacaoD())
        // .pipe(tansformacaoE())
        .pipe(gulp.dest('pastaB'))
    console.log('Tarefa de copiar!')
    return callback()
}

const fim = async callback => {
    console.log('Tarefa fim!')
    return callback
}
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)