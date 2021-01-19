import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/auth'
import { clearErrors } from '../../redux/actions/error';
import usePrevious from '../../hooks/usePrevious';
import PropTypes from 'prop-types';

const LoginForm = () => {

    //state
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ msg, setMsg ] = useState(null);
    const prevError = usePrevious({ msg });
  
    //map state to props
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();
  
    LoginForm.propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.func.isRequired,
        loginUser: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    const onEmailChange = e => {
      setEmail(e.target.value);
      console.log(email);
    }

    const onPasswordChange = e => { 
      setPassword(e.target.value);
      console.log(password);
    }
  
    useEffect(() => {
      const { error } = PropTypes;
      if(error !== prevError) {
        if(error.id === 'LOGIN_FAIL') {
          setMsg({ msg: error.msg.msg });
        } else {
          setMsg({ msg: null });
        }
      }
    }, []);

    return(
        <form>
            { msg ? <span>{msg.msg}</span> : null }
            <h3>Login</h3>
            <input type="text" onChange={onEmailChange} placeholder="email" />
            <input type="password" onChange={onPasswordChange}placeholder="somepassword" />
            <button type="submit" onClick={e => {
              e.preventDefault();
              dispatch(loginUser({email, password}))
            }}>Login</button>
      </form>
    )
}

export default LoginForm;