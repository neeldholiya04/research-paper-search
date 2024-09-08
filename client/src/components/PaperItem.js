// client/src/components/PaperItem.js
import React from 'react';

function PaperItem({ paper, onSave, onRemove }) {
  const handleAction = () => {
    if (onSave) {
      onSave(paper);
    } else if (onRemove) {
      onRemove(paper.DOI);
    }
  };

  const openPaper = () => {
    if (paper.DOI) {
      window.open(`https://doi.org/${paper.DOI}`, '_blank');
    }
  };

  const getAuthors = () => {
    if (paper.author && Array.isArray(paper.author)) {
      return paper.author.map(a => a.family || '').filter(Boolean).join(', ');
    }
    return 'Unknown';
  };

  const getYear = () => {
    if (paper.published && paper.published['date-parts'] && paper.published['date-parts'][0]) {
      return paper.published['date-parts'][0][0] || 'Unknown';
    }
    return 'Unknown';
  };

  const getCitations = () => {
    return paper['is-referenced-by-count'] || 'Unknown';
  };

  const getTitle = () => {
    if (typeof paper.title === 'string') {
      return paper.title;
    } else if (typeof paper.title === 'object' && paper.title !== null) {
      return JSON.stringify(paper.title);
    }
    return 'Untitled';
  };

  return (
    <li>
      <h3>{getTitle()}</h3>
      <p>Authors: {getAuthors()}</p>
      <p>Year: {getYear()}</p>
      <p>Citations: {getCitations()}</p>
      <button onClick={handleAction}>
        {onSave ? 'Save' : 'Remove'}
      </button>
      {paper.DOI && <button onClick={openPaper}>View Paper</button>}
    </li>
  );
}

export default PaperItem;