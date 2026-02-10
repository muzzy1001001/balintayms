import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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