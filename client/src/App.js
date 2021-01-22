import React, { useEffect } from 'react';
import Nav from './components/nav/Nav';
// import { loadUser } from './redux/actions/auth';
import Routes from './components/Routes';
// import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux'
import store from './store';

function App() {

  // const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();

  // if(user) {
  //   dispatch(loadUser());
  // }
  
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}
export default App;