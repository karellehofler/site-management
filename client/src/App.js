import React, { useEffect } from 'react';
import Nav from './components/nav/Nav';
import LoginForm from './components/login/LoginForm';
import { store } from './index';
import { loadUser } from './redux/actions/auth';

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Nav />
      <LoginForm />
    </div>
  );
}
export default App;