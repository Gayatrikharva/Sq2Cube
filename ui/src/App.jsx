import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/Dashboard';
import Insights from './pages/Insights';
import About from './pages/About';
import "./index.css";

function App() {
  return(
    <Router>
      <div className='app-container'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path ="/insights" element={<Insights />} />
            <Route path ="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;