const http = require('http'); // Modul bawaan Node.js untuk membuat server

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Selamat datang di halaman utama</h1>');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Ini halaman tentang saya</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 - Halaman tidak ditemukan</h1>');
  }

  res.end(); // Tutup response
});

// Jalankan server di port 3000
server.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
