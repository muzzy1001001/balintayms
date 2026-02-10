const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve built assets
app.use('/build', express.static(path.join(__dirname, 'public/build')));

// Render the Valentine page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Valentine App running at http://localhost:${PORT}`);
    console.log('Open your browser to see the app!');
});