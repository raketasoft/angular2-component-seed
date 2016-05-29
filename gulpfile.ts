import * as gulp from 'gulp';
import tslint from 'gulp-tslint';

gulp.task('tslint', () => {
  return gulp.src([
      '**/*.ts',
      '!node_modules/**/*.ts',
      '!typings/**/*.ts'
    ])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});
