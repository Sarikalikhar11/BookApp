import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './components/BookSearchPage';
import BookShelfPage from './components/BookShelfPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<BookSearchPage />} />
          <Route path="/bookShelf" element={<BookShelfPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
