import './App.css';
import Home from './pages/index';
import JoinUs from './pages/joinus';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/joinus' element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
