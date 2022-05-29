import './App.css';
import Form from './pages/Form';
import Output from './pages/output';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' >
    <Route index element={<Form/>}/>
    <Route path='find' element={<Output/>}/>
    <Route path='*' element={<div>404 Page Not Found</div>}/>
  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
