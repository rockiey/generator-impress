"use strict";

module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // configurable paths
        watch: {
            jshint: {
                files: ['app/{,*/}*.js'],
                tasks: ['jshint', 'mochaTest']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'test/spec/{,*/}*.js'
            ]
        },
        mochaTest: {
            all: {
                src: ['test/*.js']
            }
        },
        clean:  {
            all: {
                files: {
                    src: ['test/temp/']
                }
            }
        }
    });

    grunt.registerTask('test', [
        'clean',
        'jshint',
        'mochaTest',
        'clean'
    ]);
    
    grunt.registerTask('default', [
        'test',
        'watch'
    ]);
};
