import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar/Navbar';
import Add_User from './NavBar/Add_User';
import User_Data from './NavBar/User_Data'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Class_formsLocal from './Class_fomsLocalSto/Class_formsLocal';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <br />
        <div className='container'>
          <BrowserRouter>
            <Navbar />
            <hr />
            <Routes>
              <Route path='/' element={<Add_User />} />
              <Route path='/user_data' element={<User_Data />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div >
      {/* <Class_formsLocal/> */}
    </>
  );
}

export default App;
