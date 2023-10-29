const project = "au_temp";
const version = "20231024";
const codxfolder = "";

const entry = 'src';
const output = 'dist';

const plugins = {
    gsap: 1,
    simplebar: 0,
    swiper: 1,
    flatpickr: 1,
    select2: 0
}

module.exports = {
    project: project,
    codxfolder: codxfolder,
    port: 8081,
    css: `./${output}/assets/css/style.css`,
    entry: `./${entry}`,
    output: `./${output}`,
    basedir: {
        sass: `./${entry}/sass/`
    },
    entryPath: {
        sass: `./${entry}/sass/**/*.scss`,
        js: `./${entry}/script/*.js`
    },
    outputPath: {
        html: `./${output}`,
        sass: `./${output}/assets/css`,
        js: `./${output}/assets/js`
    },
    sassOpt: {
        outputStyle: 'compact',
        includePaths: ['node_modules/']
    },
    sassVar: {
        PROJECT_NAME: project,
        VERSION: version
    },
    njkOpt: {
        VERSION: version,
        IMG_PATH: `./assets/images/`,
        CSS_PATH: `./assets/css/`,
        JS_PATH: `./assets/js/`,
        FAVICON_PATH: `./assets/favicon/`,
        PROJECT_NAME: project,
        PLUGINS: plugins
    },
    jsConfigOpt: {
        VERSION: version,
        PROJECT_NAME: project
    }

}