import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home'
import {  BookProvider } from './useContext/Context';

function App() {
  return (
   <BrowserRouter>
   <BookProvider>
   <Routes>
    <Route element={<Home/>} path="/"></Route>
   </Routes>
   </BookProvider>
   </BrowserRouter>
  );
}

export default App;
