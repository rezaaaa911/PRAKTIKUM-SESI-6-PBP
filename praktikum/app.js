const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express! Server berjalan dengan cepat!');
});

app.get('/data', (req, res) => {
    res.json({ nama: 'Ujang Mancing', kampus: 'Universitas Mancing', matkul: 'PBP' });
});

app.listen(8000, () => console.log('Server Express berjalan di http://localhost:8000'))