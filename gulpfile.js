// gulpfile.js

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("sass", function () {
  return gulp
    .src("src/sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(rename("main.css"))
    .pipe(gulp.dest("src/css"));
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass", "watch"));
