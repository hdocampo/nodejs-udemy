const { multiply } = require('./operations');

const [ , , arg3, arg4] = process.argv;
const [ , base] = arg3.split('=');
const [ , multiplier] = arg4.split('=');

multiply(base, multiplier)
    .then(fileName => console.log(`File created: ${fileName}`))
    .catch(err => console.log(err));