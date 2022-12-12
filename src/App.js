import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import CreatePage from './pages/createPage/CreatePage';
import FaqPage from './pages/faqPage/FaqPage';
import Footer from './components/footer/Footer'

import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element ={<HomePage/>}/>
        <Route path = "/login" element={<LoginPage/>} />
        <Route path = "/profile" element={<ProfilePage/>} /> 
        <Route path = "/create" element={<CreatePage/>} />
        <Route path = "/faq" element={<FaqPage/>} />
      </Routes> 
      <Footer />

    </div>
  );
}

export default App;
