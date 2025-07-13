// console.log('Selamat datang di server Node.js!');

function cetakNama(nama) {
    return 'halo ' + nama;
}   

const phi = 3.14; // Konstanta phi

const mhs = {
    nama: 'Afif',
    umur: 20,
    jurusan: 'Teknik Informatika',
    cetakMhs () {
        return 'halo, nama saya ' + this.nama + ', umur saya ' + this.umur + ', jurusan saya ' + this.jurusan;
    }
}

class org {
    constructor () {
        console.log('ini adalah class org');
    }
}

// module.exports.cetakNama = cetakNama; // Ekspor fungsi cetakNama agar bisa digunakan di file lain
// module.exports.phi = phi; // Ekspor konstanta phi
// module.exports.mhs = mhs; // Ekspor objek mhs
// module.exports.org = org; // Ekspor class org

module.exports = {
    cetakNama,
    phi,
    org,
    mhs
};