import './App.css';
import AccountCreate from './components/AccountCreate';
import AccountForm from './components/AccountForm';
import AccountTerm from './components/AccountTerm';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Login></Login> */}
      {/* <AccountCreate></AccountCreate> */}
      {/* <AccountTerm></AccountTerm> */}
      <AccountForm></AccountForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
