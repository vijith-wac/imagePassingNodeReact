const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
app.use(cors())
const BACKEND_URL = 'http://localhost:8000';
// Set the uploads folder as a static directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Other middleware and routes
app.get('/api/products', (req, res) => {
    // Example response
    res.json([
        { id: 1, name: 'Product 1', price: 100, image: `${BACKEND_URL}/uploads/1.jpeg` },
        { id: 2, name: 'Product 2', price: 150, image: `${BACKEND_URL}/uploads/2.jpeg` }
    ]);
});


// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
