//console.log ('afif')

// const nama = 'Afif';

// console.log(nama);

// const cetakNama = (nama) => 'halo ' + nama;
// console.log(cetakNama('afif')); 
// const fs = require('fs');

// const cetakNama = require('./cobaa'); // Memanggil file coba.js
// const moment = require('moment'); // Memanggil library moment
// console.log('halo world')

const cobaa = require('./cobaa'); // Memanggil file cobaa.js

console.log (
    cobaa.cetakNama('afif'),
    cobaa.phi, cobaa.mhs.cetakMhs(), 
    new cobaa.org); // Memanggil fungsi dari coba.js