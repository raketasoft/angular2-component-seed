"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require("gulp-tslint");

/**
 * Remove build directory.
 */
gulp.task("clean", (cb) => {
    return del(["build"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task("tslint", () => {
    return gulp.src(["**/*.ts", "!node_modules/**/*.ts", "examples/**/*.ts"])
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src(["**/*.ts", "!node_modules/**/*.ts", "examples/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts", "examples/**/*"])
        .pipe(gulp.dest("build"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'angular2/bundles/angular2-polyfills.js',
            'angular2/es6/dev/src/testing/shims_for_IE.js',
            'systemjs/dist/system.src.js',
            'rxjs/bundles/Rx.js',
            'angular2/bundles/angular2.dev.js',
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task("watch", function () {
    gulp.watch([
        "**/*.ts",
        "!node_modules/**/*.ts",
        "src/**/*.ts",
        "examples/**/*.ts"
    ], ['compile']).on('change', function (e) {
        console.log("TypeScript file " + e.path + " has been changed. Compiling.");
    });
    gulp.watch([
        "src/**/*.html",
        "src/**/*.css",
        "examples/**/*.html",
        "examples/**/*.css"
    ], ['resources']).on('change', function (e) {
        console.log("Resource file " + e.path + " has been changed. Updating.");
    });
});

/**
 * Build the project.
 */
gulp.task("build", ["compile", "resources", "libs"], () => {
    console.log("Building the project ...");
});