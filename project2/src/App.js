import './App.css';
import AccountCreate from './page/AccountCreate';
import AccountForm from './page/AccountForm';
import AccountTerm from './page/AccountTerm';
import FindId from './page/FindId';
import Footer from './page/Footer';
import Header from './page/Header';
import Login from './page/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//@react-oauth/google
//axios
//styled-components
//react-router-dom

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header></Header> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/account-create" element={<AccountCreate />} />
          <Route path="/account-term" element={<AccountTerm />} />
          <Route path="/account-form" element={<AccountForm />} />
          <Route path="/find-id" element={<FindId />} />
        </Routes>
        {/* <Footer></Footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;