const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
    try {
      const { query } = req.query;
      if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
      }
      const response = await axios.get(`https://api.crossref.org/works?query=${encodeURIComponent(query)}&rows=10`);
      const papers = response.data.message.items;
      res.json(papers);
    } catch (error) {
      console.error('Error fetching papers:', error);
      if (error.response) {
        res.status(error.response.status).json({ message: 'Error from CrossRef API' });
      } else if (error.request) {
        res.status(503).json({ message: 'Unable to reach CrossRef API' });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  });

module.exports = router;