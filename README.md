Need to install browserify and watchify globally:

`npm install -g browserify watchify`

To watch files for changes and compile:

`watchify -t [ babelify --presets [ react ] ] js/main.js -o js/bundle.js`
