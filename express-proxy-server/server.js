const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
let cache = null;
let cacheTimestamp = null;

// Middleware to redirect to www. if not present
app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (!host.startsWith('www.') && !host.startsWith('localhost')) {
    return res.redirect(301, `https://www.${host}${req.originalUrl}`);
  }
  next();
});

// Proxy endpoint for Docker Hub with caching
app.get('/dockerhub', async (req, res) => {
  const currentTime = Date.now();

  // Serve from cache if valid
  if (cache && cacheTimestamp && currentTime - cacheTimestamp < CACHE_DURATION) {
    console.log('Serving from cache');
    return res.json(cache);
  }

  // Fetch and update cache
  try {
    const response = await axios.get('https://hub.docker.com/v2/repositories/datenwissenschaften');
    cache = response.data;
    cacheTimestamp = currentTime;
    console.log('Fetching new data from Docker Hub');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Docker Hub:', error.message);
    res.status(500).send('Error fetching data from Docker Hub');
  }
});

// Serve Angular app
app.use(express.static(path.join(__dirname, '/dist/datenwissenschaften/browser')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/datenwissenschaften/browser/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
