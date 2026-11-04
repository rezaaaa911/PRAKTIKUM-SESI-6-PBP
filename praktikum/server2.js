const http = require('http');
const port = 8000;

const data = {
    nama: "Bambang Sayur",
    matkul: "Pemrograman Berbasis Platform",
    server: "Node.js"
};

const server = http.createServer((req, res) => {

    if(req.url === '/')
        res.write('<html><body><h2> Selamat Datang di Halaman Utama Web Server TI25A!</h2></body></html>');
    
    else if(req.url === '/mahasiswa') {
        res.setHeader('Content-Type', 'application/json'); // Tambahkan baris ini agar Pretty-print muncul di browser
        res.write(JSON.stringify(data));
    }

    else if(req.url === '/dosen')
        res.write('<html><body><h2> Selamat Datang di Halaman Data Dosen!</h2></body></html>');

    else if(req.url === '/admin')
        res.write('<html><body><h2> Ini adalah halaman Utama Admin!</h2></body></html>');

    else
        res.write('<html><body><h2> Page Not Found! (404)</h2></body></html>');

    res.end();
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});