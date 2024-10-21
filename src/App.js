import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Person from './component/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/person" element={<Person />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
