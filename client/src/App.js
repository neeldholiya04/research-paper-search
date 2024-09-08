// client/src/App.js
import React, { useState, useEffect } from 'react';
import SearchPage from './components/SearchPage';
import SavedPapersPage from './components/SavedPapersPage';
import Notification from './components/Notification';
import './App.css';

function App() {
  const [savedPapers, setSavedPapers] = useState([]);
  const [currentPage, setCurrentPage] = useState('search');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedPapers = localStorage.getItem('savedPapers');
    if (storedPapers) {
      setSavedPapers(JSON.parse(storedPapers));
    }
  }, []);

  const savePaper = (paper) => {
    if (!savedPapers.some(p => p.DOI === paper.DOI)) {
      const updatedPapers = [...savedPapers, paper];
      setSavedPapers(updatedPapers);
      localStorage.setItem('savedPapers', JSON.stringify(updatedPapers));
      setNotification({ message: 'Paper saved successfully!', type: 'success' });
    } else {
      setNotification({ message: 'Paper already saved.', type: 'info' });
    }
  };

  const removePaper = (paperId) => {
    const updatedPapers = savedPapers.filter(paper => paper.DOI !== paperId);
    setSavedPapers(updatedPapers);
    localStorage.setItem('savedPapers', JSON.stringify(updatedPapers));
    setNotification({ message: 'Paper removed successfully!', type: 'success' });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="App">
      <aside className="sidebar">
        <h1>Research Papers</h1>
        <nav>
          <button 
            onClick={() => setCurrentPage('search')}
            className={currentPage === 'search' ? 'active' : ''}
          >
            Search
          </button>
          <button 
            onClick={() => setCurrentPage('saved')}
            className={currentPage === 'saved' ? 'active' : ''}
          >
            Saved Papers
          </button>
        </nav>
      </aside>
      <main className="content">
        {currentPage === 'search' ? (
          <SearchPage savePaper={savePaper} />
        ) : (
          <SavedPapersPage savedPapers={savedPapers} removePaper={removePaper} />
        )}
      </main>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}
    </div>
  );
}

export default App;