import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/navbar/nav";
import Mall from "./components/malls/mall";
 import Update from "./components/malls/updates";
import Select from "./components/malls/Select";
import Insert from "./components/malls/insert";
import Delete from "./components/malls/delete";
 import Selectbyid from "./components/malls/selectbyid";

function App() {
  return (
    <>
      <div  className="App" style={{backgroundColor:'white'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="/mall" element={<Mall />} />
              <Route path="/update" element={<Update />} />
              <Route path="/select" element={<Select />} />
              <Route path="/insert" element={<Insert />} />
              <Route path="/delete" element={<Delete />} />
              <Route path="/selectbyid" element={<Selectbyid />} />
              <Route path="/home" element={<Nav />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;