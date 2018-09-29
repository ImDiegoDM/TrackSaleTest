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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-webpack');

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
    createReadStream('./node_modules/react-dom/umd/react-dom.production.min.js')
    .pipe(fs.createWriteStream('dist/lib/react-dom.min.js'));

    fs.
    createReadStream('./node_modules/react/umd/react.production.min.js')
    .pipe(fs.createWriteStream('dist/lib/react.min.js'));
    done();
  });

  grunt.registerTask('build','build the aplications',[
    'clearDistFolder',
    'moveReactFiles',
    'moveIndex',
    'concat',
    'sass',
    'removeBuildSass',
    'webpack'
  ]);
};