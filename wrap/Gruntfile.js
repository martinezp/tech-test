module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        watch: {
            // options: {
            //     nospawn: true,
            //     livereload: true
            // },
            // livereload: {
            //     files: [
            //         '*.html',
            //         'app/styles/{,*/}*.css',
            //         'app/{,*/}*.js',
            //     ]
            // }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        './app/styles/*.css',
                        './*.html',
                        './app/**/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    baseDir: "./",
                    proxy: "localhost:1288"
                }
            }
        }

    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('start', ['browserSync', 'watch']);

};