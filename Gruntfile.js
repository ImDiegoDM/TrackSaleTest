const util = require('util');
const exec = util.promisify(require('child_process').exec);
var fs = require('fs');
const path = require('path');
const webpackConfig = require('./webpack.config.js');
var rimraf = require('rimraf');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: false }, webpackConfig)
    },
    concat: {
      dist: {
        src: [
          'src/**/*.scss',
        ],
        dest: 'src/build.scss',
      }
    },
    sass: {
      dist: {     
        files: {
          'dist/css/main.css':'src/build.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.ts','**/*.scss','**/*.tsx'],
        tasks: ['clean-build'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('moveIndex','move index file to dist folder',async function(){
    var done = this.async();
    fs.createReadStream('index.html').pipe(fs.createWriteStream('dist/index.html'));
    done();
  });

  grunt.registerTask('clearDistFolder','celar dist folder',async function(){
    var done = this.async();
    rimraf.sync('dist/*');
    done();
  });

  grunt.registerTask('removeBuildSass','Remove the cancto scss file',async function(){
    var done = this.async();
    rimraf.sync('src/build.scss');
    done();
  });

  grunt.registerTask('moveReactFiles','move react builds to dist folder',async function(){
    var done = this.async();

    fs.mkdirSync('dist/lib');

    fs.
    createReadStream('./node_modules/react-dom/umd/react-dom.development.js')
    .pipe(fs.createWriteStream('dist/lib/react-dom.min.js'));

    fs.
    createReadStream('./node_modules/react/umd/react.development.js')
    .pipe(fs.createWriteStream('dist/lib/react.min.js'));
    done();
  });

  grunt.registerTask('moveBootstrapFiles','move bootstrap files to dist folder',async function(){
    var done = this.async();

    fs.mkdirSync('dist/css');

    fs.
    createReadStream('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(fs.createWriteStream('dist/css/bootstrap.min.css'));
    done();
  });

  grunt.registerTask('build','build the aplications',[
    'clearDistFolder',
    'moveReactFiles',
    'moveBootstrapFiles',
    'moveIndex',
    'concat',
    'sass',
    'removeBuildSass',
    'webpack'
  ]);

  grunt.registerTask('clean-build','build the aplications',[
    'concat',
    'sass',
    'removeBuildSass',
    'webpack'
  ]);
};