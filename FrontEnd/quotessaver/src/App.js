
import './App.css';
import Header from '../src/pages/Header'
import Home from '../src/pages/Home'
import Add from '../src/pages/Add'
import Update from '../src/pages/Update'
import About from '../src/pages/About'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Updatev2 from './pages/Updatev2';


function App() {
  return (
    
      
      <div className="App">
        <Router>
       <Header/> 
       <div className='bg-dark'>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/Add' element={<Add/>}></Route>
          {/* <Route path='/Update' element={<Update/>}></Route> */}

          <Route path="/Updatev2/:quoteId/:title/:quote" element={<Updatev2/>} />
          <Route path='/About' element={<About/>}></Route>
        </Routes>
       </div>
      {/* // <QuotesHolder/>  */}
     
      </Router>
    </div>
   
    
  );
}

export default App;
