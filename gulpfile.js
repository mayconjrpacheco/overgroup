var gulp = require('gulp');
var yargs = require('yargs');
var webpack = require('webpack');
var gutil = require('gulp-util');
var serve = require('browser-sync');
var path = require('path');
var template = require('gulp-template');
var rename = require('gulp-rename');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var historyApiFallback = require('connect-history-api-fallback');
var colorsSupported = require('supports-color');

var baseDir = 'src'

gulp.task('serve', () => {

	var	config = require(`./webpack.config`);
	var compiler = webpack(config);

	config.entry = [
    	'webpack-hot-middleware/src?reload=true'
  	]

	serve({
		port: process.env.PORT || 3000,
		open: true,
		server: {
			baseDir: baseDir
		},
		middleware: [
			historyApiFallback(),
			webpackDevMiddleware(compiler, {
		        stats: {
		        	colors: colorsSupported,
		          	chunks: false,
		          	modules: false
		        },
		        publicPath: config.output.publicPath
	      	}),
			webpackHotMiddleware(compiler)
		]
	})
});

gulp.task('component', () => {
	var name = yargs.argv.name;
	var dist = path.join('src/app/core/components', name)
	var nameUpper = name.charAt(0).toUpperCase() + name.slice(1);

	gulp.src('generator/component/*.**')
		.pipe(template({
			lowercase_name: name,
			uppercase_name: nameUpper
		}))
		.pipe(rename(function(path) {
			path.basename = path.basename.replace('component', name);
		}))
		.pipe(gulp.dest(dist));

	console.log('Componente criado com sucesso!');
});

gulp.task('module', () => {
	var name = yargs.argv.name;
	var pathParent = yargs.argv.path || '';
	var dist = path.join('src/app/modules', pathParent, name)
	var nameUpper = name.charAt(0).toUpperCase() + name.slice(1);

	gulp.src('generator/module/*.**')
		.pipe(template({
			lowercase_name: name,
			uppercase_name: nameUpper
		}))
		.pipe(rename(function(path) {
			path.basename = path.basename.replace('module', name);
		}))
		.pipe(gulp.dest(dist));

	console.log('Modulo criado com sucesso!');
})