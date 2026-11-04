const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Selamat datang di server Kelompok Chernobyl');
});

app.get('/info', (req, res) => {
    const waktuSekarang = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'long' });
    res.send(`Waktu server dijalankan: ${waktuSekarang}`);
});

app.get('/anggota', (req, res) => {
    res.json({ anggota: ['Reza', 'Agil', 'Maria', 'Natasya'] });
});

app.listen(8000, () => console.log('Server Express berjalan di http://localhost:8000'))