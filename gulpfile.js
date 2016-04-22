const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require("gulp-babel");

gulp.task('lint', function() {
 return gulp.src('src/**/*.js')
   .pipe(eslint())
   .pipe(eslint.format());
});

gulp.task('lint:fix', function() {
 return gulp.src('src/**/*.js', {base: '.'})
   .pipe(eslint({fix: true}))
   .pipe(gulp.dest('.'))
   .pipe(eslint.format());
});

gulp.task('build', function() {
 return gulp.src('src/**/*.js')
   .pipe(babel({presets: ['es2015', 'react', 'stage-2']}))
   .pipe(gulp.dest('build/'));
});

gulp.task('default', ['lint', 'build'], function() {
 gulp.watch('src/**/*.js', ['lint', 'build']);
});