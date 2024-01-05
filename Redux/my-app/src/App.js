import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Calculation from './component/Calculation';
import CalculationTwo from './component/CalculationTwo';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
   <Route path='/Calculation' element={<Calculation/>}/>
   <Route path='/CalculationTwo' element={<CalculationTwo/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
