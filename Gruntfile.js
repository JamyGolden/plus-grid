'use strict';

module.exports = function(grunt) {

    // Module configs
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        banner:
            '/*\n' +
            '* <%= pkg.name %>\n' +
            '* <%= pkg.description %>\n' +
            '* Version: "<%= pkg.version %>"\n' +
            '* <%= pkg.author %>\n' +
            '* <%= pkg.homepage %>\n' +
            '*/',

        watch: {
            options: {
                dateFormat: function(time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes...');
                }
            },
            scripts: {
                files: ['scss/main.scss', 'scss/**/*.scss'],
                tasks: ['version', 'sass']
            },
        },

        sass: {
            prod: {
                options: {
                    banner: '<%= banner %>',
                    outputStyle: 'compressed'
                },
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },

        version: {
            myplugin: {
                options: {
                    prefix: 'Version\:\\s+[\'"]'
                },
                src: ['scss/main.scss']
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-version');

    // Register tasks for the `grunt` terminal command
    grunt.registerTask('default', ['watch', 'sass', 'version']);
};
