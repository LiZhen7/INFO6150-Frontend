import Home from './Home/Home';
import Privacy from './Privacy/Privacy';
import Login from './Form/Login';
import Register from './Form/Register';
import About from './About/About';
import Champion from './Champion/Champion';
import { fetchLogout } from './Form/fake-services';
import Logo from './LOLlogo.png';
import { useState } from 'react';
import './app.css';

function App() {

  const [page, setPage] = useState('Home');
  const [status, setStatus] = useState('');
  const callback = (status) => {
    setStatus(status);
    changePage('Home');
  }

  function changePage(target) {
    setPage(target);
  }

  function logoutDemo() {
    fetchLogout();
    setStatus('');
  }

  return (
    <div className="app">
      <header>
        <div className='head'>
          <img className="logo" src={Logo} alt="League of Legends Logo" />
          <h1>League of Legends</h1>
        </div>
        <div className="menu">
          <li>
            <button className='submenuTitle'>Menu▾</button>
            <div className='submenu'>
              <button onClick={() => changePage('Home')}>Home</button>
              <button onClick={() => changePage('Champion')}>Champions</button>
              <button onClick={() => changePage('About')}>About</button>
              <button onClick={() => changePage('Privacy')}>Privacy</button>
            </div>
          </li>
          <button onClick={() => changePage('Home')}>Home</button>
          <button onClick={() => changePage('Champion')}>Champions</button>
          <button onClick={() => changePage('About')}>About</button>
          <button onClick={() => changePage('Privacy')}>Privacy</button>
          <a className="skip-link" href="#main">Skip to content</a>
          <div className='menuForm'>
            <div className={`formStatus ${status ? '' : 'formStatus--active'}`}>
              <button onClick={() => changePage('Login')}>LogIn</button>
              <button onClick={() => changePage('Register')}>Register</button>
            </div>
            <div className={`formStatus ${status ? 'formStatus--active' : ''}`}>
              <p>Hello, {status} !</p>
              <button onClick={() => logoutDemo()}>LogOut</button>
            </div>
          </div>
        </div>
      </header>
      <main id='main'>
        {page === 'Home' && <Home />}
        {page === 'Privacy' && <Privacy />}
        {page === 'Login' && <Login statusCallback={callback} />}
        {page === 'Champion' && <Champion />}
        {page === 'About' && <About />}
        {page === 'Register' && <Register />}
      </main>
      <footer>
        <p>CAREERS | SUPPORT | CONTACT US | PRESS</p>
        <p>For more information, please visit: https://github.com/LiZhen7</p>
      </footer>
    </div>
  );
}

export default App;