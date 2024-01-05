import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SagaForm from './component/SagaForm';
import SagaList from './component/SagaList';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/SagaForm" element={<SagaForm />} />
          <Route path="/SagaForm/:id" element={<SagaForm />} />
          <Route path="/SagaList" element={<SagaList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
