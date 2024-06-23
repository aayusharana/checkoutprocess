import './App.css';
import Layout from './components/layout';
import Checkoutpros from './pages/Checkoutpros';
import Review from './pages/Review';
import Deetail from './pages/deetail';
import Home from './pages/home';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Layout/>}>
       <Route index element={<Home />}/>
        <Route path='/:slug' element={<Deetail/>}/>
        <Route path='/checkoutpros' element={<Checkoutpros/>}/>
        <Route path='/review'  element={<Review/>}/>
       
       </Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
