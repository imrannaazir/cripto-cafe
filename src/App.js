import './App.css';
import Header from './componets/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './componets/Home/Home';
import Coins from './componets/Coins/Coins';
import Footer from './componets/Footer/Footer';
import About from './componets/About/About';
import Contacts from './componets/Contacts/Contacts';

function App() {
  return (
    <div className="App bg-slate-100">
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/coins' element={<Coins />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contacts' element={<Contacts />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
