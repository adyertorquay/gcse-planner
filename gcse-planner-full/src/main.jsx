import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Timetable from './pages/Timetable'; // Handles all routing

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Timetable />
  </React.StrictMode>
);
