var timer = require("grunt-timer");

module.exports = function(grunt) {
  timer.init(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      site: {
        files: ['templates/**/*.tpl.phtml', 'js/**/*.{js,json}', 'stylesheets/*.css', 'images/**/*.{png,jpg,jpeg,gif,webp,svg}']
      },
      js: {
        files: ['dev_js/*.js'],
        tasks: ["uglify"]
      },      
      css: {
        files: ["sass/**/*.scss"],
        tasks: ["sass"]
      },
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'stylesheets/main.css': 'sass/main.scss'
        }
      }
    },

    uglify: {
      my_target: {
        options: {
          beautify: true
        },
        files: {
          'js/main.js': ['dev_js/**/*.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['uglify','sass:dist', 'watch']);
  // grunt.registerTask('default', ["sass", "watch", "uglify"]);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};