console.log('Selamat datang di server Node.js!');

function cetakNama(nama) {
    return 'halo ' + nama;
}   

module.exports = cetakNama; // Ekspor fungsi cetakNama agar bisa digunakan di file lain