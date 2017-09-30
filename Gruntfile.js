/*global module:false*/
module.exports = function (grunt) {

    // Load multiple grunt tasks using globbing patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            main: {
                options: {
                    cleancss: false
                },
                src: [
                    'assets/less/main.less'
                ],
                dest: 'web/wp-content/themes/themedd-starter/assets/css/main.css'
            },
            main_min: {
                options: {
                    cleancss: true,
                    compress: true
                },
                src: [
                    'assets/less/main.less'
                ],
                dest: 'web/wp-content/themes/themedd-starter/assets/css/main.min.css'
            }
        },
        uglify: {
            scripts: {
                options: {
                    beautify: true
                },
                src: [
                    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
                    'assets/js/components/lightbox.js',
                    'assets/js/components/modal.js',
                    'assets/js/main.js'
                ],
                dest: 'web/wp-content/themes/themedd-starter/assets/js/main.js'
            },
            scripts_min: {
                src: [
                    'web/wp-content/themes/themedd-starter/assets/js/main.js'
                ],
                dest: 'web/wp-content/themes/themedd-starter/assets/js/main.min.js'
            }
        },
        autoprefixer: {
            options: {
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24',
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6'
                ]
            },
            min: {
                options: {
                    cascade: false
                },
                expand: true,
                flatten: true,
                src: 'web/wp-content/themes/themedd-starter/assets/css/*.css',
                dest: 'web/wp-content/themes/themedd-starter/assets/css/'
            }
        },
        watch: {
            less: {
                files: 'assets/**/*.less',
                tasks: 'less'
            },
            uglify: {
                files: 'assets/**/*.js',
                tasks: 'uglify'
            }
        },
    });

    // Default task.
    grunt.registerTask('dist-css', ['less', 'autoprefixer']);
    grunt.registerTask('default', ['less', 'uglify', 'autoprefixer']);
};