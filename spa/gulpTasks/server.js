const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')



function server(callback) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarFiles(callback) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.css', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return callback()
}


module.exports = {
    monitorarFiles,
    server
}