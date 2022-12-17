
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import CreatePage from './pages/createPage/CreatePage';
import CardExpandedPage from './pages/cardExpandedPage/CardExpandedPage';
import FaqPage from './pages/faqPage/FaqPage';
import Footer from './components/footer/Footer'
import AdventureQuotes from './pages/quotesPage/QuotesPage';

import {Route, Routes} from 'react-router-dom';
import {useContext} from 'react';
import AuthContext from './store/authContext';

import './App.css';



function App() {
  const authCtx = useContext(AuthContext)
  console.info(authCtx)
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element ={<HomePage/>}/>
        <Route path = "/login" element={<LoginPage/>} />
        <Route path = "/profile" element={<ProfilePage/>} /> 
        <Route path = "/create" element={<CreatePage/>} />
        <Route path = "/faq" element={<FaqPage/>} />
        <Route path = "/adventure" element={<CardExpandedPage/>}/>
        <Route path = "/adventure-quotes" element={<AdventureQuotes/>}/>

      </Routes> 
      <Footer />

    </div>
  );
}

export default App;
