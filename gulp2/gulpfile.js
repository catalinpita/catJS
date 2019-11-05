const gulp = require('gulp');
const open = require('gulp-open');
const connect = require('gulp-connect');
const eslint = require('gulp-eslint');
const sassLint = require('gulp-sass-lint');

gulp.task('js', () => {
  return gulp.src(['./*.js', '!gulpfile.js'])
    .pipe(eslint({
      useEslintrc: true,
      configFile: './config/.eslintrc',
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(connect.reload());
});

gulp.task('css', () => {
  return gulp.src('./css/*.css')
    .pipe(sassLint({
      configFile: './config/.sass-lint.yml',
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(connect.reload());
});

gulp.task('html', () => {
  return gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('open', () => {
  return gulp.src('./index.html')
    .pipe(open({
      uri: 'http://localhost:8080'
    }));
});

gulp.task('watchFiles', (done) => {
  gulp.watch(['./*.js', '!gulpfile.js'], gulp.series('js'));
  gulp.watch('./css/*.css', gulp.series('css'));
  gulp.watch('./index.html', gulp.series('html'));

  done();
});

gulp.task('connect', (done) => {
  connect.server({
    root: './',
    port: 8080,
    livereload: true
  });

  done();
});

gulp.task('watch', gulp.series('js', 'css', gulp.parallel('watchFiles', 'connect', 'open')));
