import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Alltasks from './components/AllTasks/Alltasks';
import AddTask from './components/Addtask/AddTask';

import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import UserTask from './components/UserAddedTask/UserTask';
import NotFound from './components/NotFound/NotFound';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/alltasks' element={<Alltasks></Alltasks>}></Route>
       <Route path='/addtask' element={<AddTask></AddTask>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/usertask' element={<UserTask></UserTask>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
       
     </Routes>
     <div className='sticky-footer'>
       <Footer></Footer>
     </div>
    </div>
  );
}

export default App;
