import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes ,Route} from "react-router-dom";
import Home from './routes/Home';
import Sports from './routes/Sports';
import Menu from './routes/Menu';
import Communication from './routes/Communication';
import Register from './routes/Register';

function App() {
  return (  
    <div className="App">

    <Routes>
      <Route path='/' element={<Menu/>}>
      <Route  index element={<Home/>}></Route>
      <Route path='/sports' element={<Sports/>}></Route>
      <Route path='/communication' element={<Communication/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      </Route>
    </Routes>

   



    </div>
  );
}

export default App;
