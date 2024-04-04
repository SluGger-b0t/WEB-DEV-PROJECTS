import './App.css';
import NavBar from './components/NavBar';
import { ChakraProvider } from "@chakra-ui/react";
import Crud from './components/Crud';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import {Routes,Route} from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
  return (
    <div className='App'>
    <ChakraProvider > <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Crud></Crud>}></Route>
        <Route path='/all' element={<AllUser></AllUser>}></Route>
        <Route path='/add' element={  <AddUser></AddUser>}></Route>
        <Route path='/edit/:id' element={<EditUser></EditUser>}></Route>
      </Routes>
     
      
      
    
    </ChakraProvider></div>
  );
}

export default App;
