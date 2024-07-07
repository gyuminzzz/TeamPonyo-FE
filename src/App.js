import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer';
import MyPagePerson from './pages/MyPagePerson';
import MyPageGroup from './pages/MyPageGroup';
import Login from './pages/Login';
import Join from './pages/Join';
import Info from './pages/Info';
import Create from './pages/Create';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/mypagePerson' element={<MyPagePerson />} />
          <Route path='/mypageGroup' element={<MyPageGroup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join/:joinId' element={<Join />} />
          <Route path='/info' element={<Info />} />
          <Route path='/create' element={<Create />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
      
  );
}

export default App;
