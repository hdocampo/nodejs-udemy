const fs = require('fs');

const base = 5;
let data = '';

for (let i = 0; i <= 20; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
    data += `${base} * ${i} = ${base * i}\r\n`;
}

fs.writeFile(`build/tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;

    console.log('Success!')
})
