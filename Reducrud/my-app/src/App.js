import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReduxForm from "./component/ReduxForm";
import ReduxList from "./component/ReduxList";
import ReduxView from "./component/ReduxView";
import National from "./component/National";
import International from "./component/International";
import SagaForm from "./component/redux-saga/SagaForm";
import SagaTable from "./component/redux-saga/SagaTable";
import External from "./component/External";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ReduxForm" element={<ReduxForm />} />
          <Route path="/ReduxList" element={<ReduxList />} />
          <Route path="/ReduxView" element={<ReduxView />} />
          <Route path="/National" element={<National />} />
          <Route path="/International" element={<International />} />
          <Route path="/SagaForm" element={<SagaForm />} />
          <Route path="/SagaTable" element={<SagaTable />} />
          <Route path="/External" element={<External />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
