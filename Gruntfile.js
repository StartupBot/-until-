module.exports = function(grunt) {

grunt.initConfig({
  'gh-pages': {
    options: {
      base: 'www/'
    },
    src: ['**']
  }
});

grunt.loadNpmTasks('grunt-gh-pages');

};
