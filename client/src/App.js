import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './pages/Users';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
