import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AssignStudent from './pages/assignstudent';
import GetMaterial from './pages/getmaterial';

import GetQuiz
 from './pages/getquiz';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/assignstudent' extact element={<AssignStudent/>}/>
      <Route path='/getmaterial' element={<GetMaterial/>}/>
      <Route path='/getquiz' element={<GetQuiz/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

