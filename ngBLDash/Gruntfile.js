'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
      js: {
        files: ['app/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        // files: ['app/styles/{,*/}*.css'],
        files: ['app/assets/css/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      less: {
        files: ['app/assets/less/*.less'],
        tasks: ['less:server']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/{,*/}*.html',
          '.tmp/assets/{,*/}*.css',
          'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(require('./bower.json').appPath || 'app')
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            'app'
          ]
        }
      },
      dist: {
        options: {
          base: 'dist'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'app/scripts/**/*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist',
            'deploy'
          ]
        }]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/assets/css/',
          src: '{,*/}*.css',
          dest: 'dist/assets/css/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    bowerInstall: {
      app: {
        src: ['app/index.html'],
        ignorePath: 'app/'
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            'dist/scripts/*.js',

            // DO NOT revision riffle. It screws with the lazy loading
            // 'dist/scripts/includes/*.js',
            // DO NOT revision the statics. Script includes are not updated to match changed names on statics
            'dist/assets/css/*.css',
          ]
        }
      }
    },

    // Reads for usemin blocks to enable concat, minify and revision files.
    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'dist',
        flow: {
          html: {
            steps: {
              js: ['concat'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['dist/{,*/}*.html'],
      css: ['dist/assets/css/{,*/}*.css'],
      options: {
        assetsDirs: ['dist']
      }
    },

    cssmin: {
      options: {
        relativeTo: 'app',
        processImport: true,
        noAdvanced: true
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: 'dist/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: '{,*/}*.svg',
          dest: 'dist/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeComments: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.html', 'views/**/*.html'],
          dest: 'dist'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['dist/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'assets/plugins/**',
            'assets/img/**',
            'assets/css/**',
            'assets/exisdocs.json',
            'scripts/splash/**',
            'views/docs/**',
            'scripts/includes/jsRiffle.min.js',
            'staticstyles/**'
          ]
        }, {
          expand: true,
          flatten: false,
          cwd: 'app/assets/plugins/iCheck/skins',
          dest: 'dist/assets/css/',
          src: ['*/*.png']
        }, {
          expand: true,
          flatten: true,
          cwd: 'bower_components/themify-icons/',
          dest: 'dist/assets/css/fonts',
          src: ['fonts/*.*']
        }, {
          expand: true,
          flatten: true,
          cwd: 'app',
          dest: 'dist/assets/fonts/',
          src: ['bower_components/font-awesome/fonts/*']
        }, {
          expand: true,
          flatten: false,
          cwd: 'bower_components',
          dest: 'dist/bower_components/',
          src: ['zeroclipboard/dist/ZeroClipboard.swf']
        }]
      },
      fonts: {
        expand: true,
        flatten: true,
        dot: true,
        cwd: 'bower_components/font-awesome/',
        dest: 'dist/assets/fonts',
        src: ['fonts/*.*']
      },
      styles: {
        expand: true,
        cwd: 'app/assets/css',
        dest: '.tmp/assets/css',
        src: '{,*/}*.css'
      }
    },

    ngtemplates: {
      app: {
        src: 'app/views/templates/**.html',
        dest: 'app/scripts/directives/templates.js',
        options: {
          url: function(url) {
            return url.replace('app/views/', '');
          },
          bootstrap: function(module, script) {
            return '/* jshint ignore:start */\nangular.module(\'xs.templates\', []).run([\'$templateCache\', function ($templateCache) {\n' + script + '}])\n/* jshint ignore:end */';
          }
        },
      }
    },

    less: {
      server: {
        options: {
          dumpLineNumbers: true,
          sourceMap: true,
          sourceMapRootpath: '',
          outputSourceFiles: true
        },
        files: [{
          expand: true,
          cwd: 'app/assets/less',
          src: 'styles.less',
          dest: '.tmp/assets/css',
          ext: '.css'
        }]
      },
      dist: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: [{
          expand: true,
          cwd: 'app/assets/less',
          src: 'styles.less',
          dest: '.tmp/assets/css',
          ext: '.css'
        }]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          'dist/styles/main.css': ['.tmp/styles/{,*/}*.css', 'app/styles/{,*/}*.css']
        }
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true,
      },
      dist: {
        files: [{
          expand: true,
          src: ['dist/scripts/*.js'],
          ext: '.js',
          extDot: 'last'
        }],
      }
    },

    uglify: {
      options: {
        mangle: true,
        compress: {},
        preserveComments: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/scripts',
          src: '*.js',
          dest: 'dist/scripts'
        }]
      }
    },

    concat: {
      dist: {}
    },

    uncss: {
      dist: {
        files: [{
          src: ['dist/views/{,*/}*.html', 'dist/index.html'],
          dest: 'dist/assets/css/compiled.min.css'
        }]
      }
    },

    // Uploading and production processing
    aws_s3: {
      options: {
        awsProfile: 'badgerloop', // references ~/.aws/credentials [badgerloop]
        region: 'us-west-2',
        uploadConcurrency: 50,
        downloadConcurrency: 50,
        sslEnabled: true,
        progress: 'progressBar',
      },
      staging: {
        options: {
          bucket: 'bldash',
          differential: true, // Only uploads the files that have changed
          gzipRename: 'ext' // when uploading a gz file, keep the original extension
        },
        files: [{
          dest: '/',
          cwd: 'deploy/',
          action: 'delete'
        }, {
          expand: true,
          cwd: 'deploy/',
          src: ['**'],
          dest: '/'
        }]
      },
    },

    // gzip the files
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'dist/',
        src: ['**/*'],

        // Dont gzip everything for whatever reason. You will have to copy missing files
        // or leave them in dist/ and remove the previous files
        // src: '**/*.{js,css,otf,ttf,png,jpg,jpeg,gif}',
        dest: 'deploy/',
        rename: function(dest, src) {
          return dest + src + '.gz';
        }
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    processhtml: {
      options: {
        commentMarker: 'prochtml',
        process: true
      },
      dist: {
        files: {
          'dist/index.html': ['dist/index.html']
        }
      }
    },
    release: {
      options: {
        npm: false
      },
    }

  });

  grunt.registerTask('build', function(target) {
    var base = [
      'clean:dist',
      'bowerInstall',
      'ngtemplates',
      'useminPrepare',
      'less:dist',
      'autoprefixer',
      'concat',
      'copy:dist',
      'copy:fonts',
      'cdnify',
      'cssmin',
      'rev',
      'usemin',
      'processhtml:dist',
      'htmlmin'
    ];

    // Specific to distribution. Grunt doesnt serve compressed assets easily. Thats in deploy
    if (target === 'dist') {
      base = base.concat([
        // 'ngAnnotate:dist',
        // 'uglify:dist',

        // Dont use this until the statics are cleaned up. It doesn't go well.
        // 'uncss' 
      ]);
    }

    return grunt.task.run(base);
  });

  grunt.registerTask('default', ['build']);

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run([
        'build:dist',
        'connect:dist:keepalive'
      ]);
    }

    grunt.task.run([
      'bowerInstall',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('deploy', function(target) {
    if (target === 'staging') {
      return grunt.task.run([
        'build:dist',
        'compress',
        'aws_s3:staging'
      ]);

    } else if (target === 'production') {
      grunt.log.warn('Production not implemented!');
    } else {
      grunt.log.warn('Please enter a deployment target: grunt deploy:[staging, production]');
    }
  });
};

