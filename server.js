// Import modul express untuk buat server
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set folder public untuk file HTML/CSS/JS
app.use(express.static(path.join(__dirname, 'public')));

// Route utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});