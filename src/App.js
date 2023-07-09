import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import EmpListing from './EmpListing';
import EmpEdit from './EmpEdit';
import EmpDetail from './EmpDetail';
import EmpCreate from './EmpCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing/>}></Route>
          <Route path="/employee/create" element={<EmpCreate/>}></Route>
          <Route path="/employee/detail/:empid" element={<EmpDetail/>}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
