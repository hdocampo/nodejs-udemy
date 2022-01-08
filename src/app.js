const { multiply } = require('./operations');
const argv = require('yargs').argv;

console.log(argv)

const { base, multiplier } = argv;

console.log(typeof base, typeof multiplier)

multiply(base, multiplier)
    .then(fileName => console.log(`File created: ${fileName}`))
    .catch(err => console.log(err));