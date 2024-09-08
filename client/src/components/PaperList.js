import React from 'react';
import PaperItem from './PaperItem';

function PaperList({ papers, onSave, onRemove }) {
  if (papers.length === 0) {
    return <p>No papers found.</p>;
  }

  return (
    <ul>
      {papers.map((paper) => (
        <PaperItem
          key={paper.DOI}
          paper={paper}
          onSave={onSave}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default PaperList;

