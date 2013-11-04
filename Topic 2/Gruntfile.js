module.exports = function (grunt) {

    // Configuration goes here
    grunt.initConfig({
        // CSS minify
        cssmin: {
            add_banner: {
                options: {
                    // adds this banner to the minified output
                    banner: "/* Simple Todo minified CSS */"
                },
                // minify all files found in the CSS directory
                // to a single output file
                files: {
                    "css/css.min.css": ["css/**/*.css"]
                }
            }
        }
    });

    // Load plugins here
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    // Define your tasks here
    grunt.registerTask("default", ["cssmin"]);
};