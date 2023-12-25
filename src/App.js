import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './Pages/Homepage';
import { Calculator } from './Pages/Calculator';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Calculator' element={<Calculator/>}/>
      </Routes>
    </Router>
  );
}

export default App;
