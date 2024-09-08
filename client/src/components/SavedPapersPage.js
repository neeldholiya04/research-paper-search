// client/src/components/SavedPapersPage.js
import React, { useState, useMemo } from 'react';
import PaperList from './PaperList';

function SavedPapersPage({ savedPapers, removePaper }) {
  const [searchTerm, setSearchTerm] = useState('');

  const getSearchableString = (value) => {
    if (typeof value === 'string') {
      return value.toLowerCase();
    } else if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value).toLowerCase();
    }
    return '';
  };

  const filteredPapers = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return savedPapers.filter(paper => {
      const title = getSearchableString(paper.title);
      const authors = paper.author && Array.isArray(paper.author)
        ? paper.author.map(a => getSearchableString(a.family))
        : [];
      
      return title.includes(lowerSearchTerm) ||
             authors.some(author => author.includes(lowerSearchTerm));
    });
  }, [savedPapers, searchTerm]);

  return (
    <div className="page">
      <h2>Saved Papers</h2>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search saved papers..."
          className="search-input"
        />
      </div>
      <PaperList papers={filteredPapers} onRemove={removePaper} />
    </div>
  );
}

export default SavedPapersPage;