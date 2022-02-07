import './App.css';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { ExtractAudio } from '../Section';
// import ExtractAudio from '../Section/ExtractAudio/ExtractAudio';

const Hello = () => {
  return (
    <div>
      <h1>Subs2AnkiDeck</h1>
      <ExtractAudio />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
