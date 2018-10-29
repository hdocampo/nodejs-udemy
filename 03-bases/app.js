const { multiply } = require('./operations');

const base = 89;

multiply(base)
    .then(fileName => console.log(`File created: ${fileName}`))
    .catch(err => console.log(err));