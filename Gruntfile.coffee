module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      bulid:
        src: 'src/<%= pkg.name %>.js'
        dest: 'dist/<%= pkg.name %>.min.js'
  
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  
  grunt.registerTask 'default', ['uglify']
