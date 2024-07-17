import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import axios from 'axios';
import { UserContextProvider } from './components/UserContext';
import { ExerciseProvider } from "./components/ExerciseContext";
import ExerciseDetail from './Pages/ExerciseDetail';
import AboutUs from './components/Company.jsx';
import AccountPage from './components/Profile';
function App() {
  axios.defaults.baseURL ='http://localhost:4000';
  axios.defaults.withCredentials =true;

  return (
    <UserContextProvider>
      <ExerciseProvider> 
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
            <Route path="/company" element={<AboutUs/>}/>
            <Route path="/account" element={<AccountPage/>}/>
            </Route>
        </Routes>
      </ExerciseProvider> 
    </UserContextProvider>
  );
}

export default App;