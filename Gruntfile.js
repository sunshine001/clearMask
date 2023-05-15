module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt)
  grunt.initConfig({
    crx: {
          myPublicExtension: {
              src: "src/**/*",
              dest: "dist/clearMask.zip",
          },
          mySignedExtension: {
              src: "src/**/*",
              dest: "dist/clearMask.crx",
              options: {
                  privateKey: "src/key.pem"
              }
          }
      }
  })
  grunt.registerTask('clearMask', ['crx'])
}