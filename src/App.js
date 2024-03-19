import './App.css';
import { Routes,Route } from 'react-router';
import { Home } from './pages/Home';
import { Library } from './pages/Library';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
      </Routes>
    </div>
  );
}

export default App;
