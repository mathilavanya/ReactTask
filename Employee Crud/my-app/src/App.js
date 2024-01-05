import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/employee/EmployeeForm';
import EmployeeList from './components/employee/EmployeeList';
import ClassForm from './components/class/ClassForm';
import ClassList from './components/class/ClassList';
import ReducerForm from './components/reducer/ReducerForm';
import ReducerList from './components/reducer/ReducerList';
import Increment from './components/contextApi/Increment';
import UseContextApi from './components/contextApi/UseContextApi';
import Otp from './components/otp/Otp';
import Context from './components/usecontext/Context';
import ContextApi from './components/usecontext/ContextApi';
import ContextList from './components/usecontext/ContextList';
import Invoice from './components/usecontext/Invoice';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/form' element={<EmployeeForm/>}/>
      <Route path='/form/:id' element={<EmployeeForm/>}/>
      <Route path='/list' element={<EmployeeList/>}/>
      <Route path='/classform' element={<ClassForm/>}/>
      <Route path='/classform/:id' element={<ClassForm/>}/>
      <Route path='/classlist' element={<ClassList/>}/>
      <Route path='/rform' element={<ReducerForm/>}/>
      <Route path='/rform/:id' element={<ReducerForm/>}/>
      <Route path='/rlist' element={<ReducerList/>}/>
      <Route path='/add' element={<Increment/>}/>
      <Route path='/sub' element={<UseContextApi/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/Context' element={<Context/>}/>
      <Route path='/ContextApi' element={<ContextApi/>}/>
      <Route path='/ContextList' element={<ContextList/>}/>
      <Route path='/Invoice' element={<Invoice/>}/>
   
  
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
