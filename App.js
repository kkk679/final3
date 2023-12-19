import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import IncomeExpensePage from './IncomeExpensePage';
import './App.css'; // App 컴포넌트에서 사용할 CSS 파일 import

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <nav className="sidebar">
            <ul>
              <li>
                <header>
                  <h1>가계부</h1>
                </header>
              </li>
              <li>
                <Link to="/">대시보드</Link>
              </li>
              <li>
                <Link to="/income-expense">수입/지출</Link>
              </li>
            </ul>
          </nav>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/income-expense" element={<IncomeExpensePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;