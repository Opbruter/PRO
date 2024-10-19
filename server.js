// frontend/server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Example endpoint to fetch data from the backend
app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8080/api/hello');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from backend');
    }
});

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Node.js Frontend!');
});

app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});
