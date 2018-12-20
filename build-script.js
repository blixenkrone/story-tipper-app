const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/story-tipper/main.js',
        './dist/story-tipper/polyfills.js',
        './dist/story-tipper/runtime.js',
        './dist/story-tipper/scripts.js',
    ]

    await fs.ensureDir('dist/elements');
    await concat(files, './dist/elements/story-tipper.js')
    console.log('Done concatinating')
})();