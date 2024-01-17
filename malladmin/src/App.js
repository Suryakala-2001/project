//import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Home from './Mainpage/Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddAdmin from './crudoperations/AddAdmin';
import ViewAdmin from './crudoperations/ViewAdmin';
import EditAdmin from './crudoperations/EditAdmin';
import DeleteAdmin from './crudoperations/DeleteAdmin';
import ViewbyId from './crudoperations/ViewbyId';
function App() {
 
  return (
    <div className="App" style={{backgroundColor:'skyblue'}}>
      <Router>
      <Homepage/>
      <Routes>
      <Route path="/Home" element={<Home/>}></Route>
        <Route path="/addadmin" element={<AddAdmin/>}></Route>
        <Route path="/viewadmin" element={<ViewAdmin/>}></Route>
        <Route path="/editadmin" element={<EditAdmin/>}></Route>
        <Route path="/deleteadmin" element={<DeleteAdmin/>}></Route>
        <Route path="/viewbyid" element={<ViewbyId/>}></Route>
      </Routes>
      </Router>
    </div>
  );
  
}

export default App;
