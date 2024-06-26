const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

let cache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Proxy endpoint for Docker Hub with caching
app.get('/dockerhub', async (req, res) => {
  const currentTime = Date.now();

  // Check if cache is valid
  if (cache && cacheTimestamp && currentTime - cacheTimestamp < CACHE_DURATION) {
    console.log('Serving from cache');
    return res.json(cache);
  }

  // Fetch new data from Docker Hub
  try {
    const response = await axios.get('https://hub.docker.com/v2/repositories/datenwissenschaften');
    cache = response.data;
    cacheTimestamp = currentTime;
    console.log('Fetching new data from Docker Hub');
    res.json(response.data);
  } catch (error) {
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
