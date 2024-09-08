// client/src/components/SearchPage.js
import React, { useState, useEffect, useCallback } from 'react';
import PaperList from './PaperList';

function SearchPage({ savePaper }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const fetchPapers = useCallback(async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/api/papers/search?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch papers');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching papers:', error);
      setError('An error occurred while searching for papers. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedFetchPapers = useCallback(debounce(fetchPapers, 300), [fetchPapers]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      debouncedFetchPapers(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, debouncedFetchPapers]);

  return (
    <div className="page">
      <h2>Search Research Papers</h2>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter keywords to search..."
          className="search-input"
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <PaperList papers={searchResults} onSave={savePaper} />
    </div>
  );
}

export default SearchPage;

