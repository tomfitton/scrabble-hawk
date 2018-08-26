module.exports = function(grunt) { // jshint ignore:line

  var directories = {
    "dist": "dist/",
    "src": "src/"
  };

  grunt.initConfig({
    "pkg": grunt.file.readJSON("package.json"),
    "clean": {
      "dist": [
        directories.dist
      ]
    },
    "copy": {
      "dist": {
        "files": [
          {
            "expand": true,
            "flatten": true,
            "src": [
              directories.src + "index.html"
            ],
            "dest": directories.dist
          }
        ]
      }
    }
  });


  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.registerTask("build", [
    "clean:dist",
    "copy:dist"
  ]);

};
