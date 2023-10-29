const gulp = require("gulp");
const browserSync = require("browser-sync");
const connectphp = require('gulp-connect-php');
// const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

// Compile SASS files
function compileSass() {
    return gulp
        .src(["src/sass/*.scss"])
        .pipe(
            sass({
                includePaths: ["node_modules"],
            })
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"],
                cascade: false,
            })
        )
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(browserSync.stream())
        .on("end", () => {
            console.log("=================================");
            console.log(" compileSass OK !! ");
            console.log("=================================");
            browserSync.reload();
        });
}

// Watch & Serve
function serve() {
    browserSync.init({
        server: "./dist",
        port: "8080",
    });

    console.log("=================================");
    console.log(" serving!! ");
    console.log("=================================");

    gulp.watch(["src/sass/*.scss"], compileSass);
    gulp.watch(["dist/*.html"]).on("change", browserSync.reload);
}

function phpConnect(done) {
    connectphp.server({
        bin: 'D:\\PHP-8.2\\php.exe',
        port: 8081,
        base: `./dist/`
    }, function (err) {
        if (err) {
            console.log('connect-php error:', err);
            return;
        }
        browserSync.init({
            port: 8081,
            proxy: '127.0.0.1:8081'
        });
        done();  
    });

    gulp.watch(["src/sass/**/*"], compileSass);
    gulp.watch(["dist/**/*.php"]).on("change", browserSync.reload);
    gulp.watch(["dist/assets/js/*.js", "dist/assets/js/page/*.js"]).on("change", browserSync.reload);
}

// Default Task
exports.default = gulp.series(compileSass, serve);
exports.php = gulp.series(compileSass, phpConnect);
