import Login from './components/Auth/login';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Signup from "./components/Auth/signup";
import Home from './components/Home';
import About from './components/About';
import GrievanceForm from './components/GrievanceForm';
import ConfirmationPage from './components/ConfirmationPage';
import AdminPage from './components/AdminPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/admin' Component={AdminPage}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/register' Component={Signup}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/' Component={Home}></Route>
      <Route path='/form' Component={GrievanceForm}></Route>
      <Route path='/confirmation/:id' Component={ConfirmationPage}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;