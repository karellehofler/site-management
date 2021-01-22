import React, { useState, useEffect } from "react";
import useInput from '../../hooks/useInput';
import usePrevious from '../../hooks/usePrevious';
import { Label, InputContainer, Button } from '../Styled';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { clearErrors } from '../../redux/actions/error';
import PropTypes from 'prop-types';

export default function SignUpForm() {
    const name = useInput("");
    const username = useInput("");
    const email = useInput("");
    const password = useInput("password");
    const [ msg, setMsg ] = useState(null);
    const prevError = usePrevious({ msg });

    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const error = useSelector((state) => state.error);

    const dispatch = useDispatch();

    SignUpForm.propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
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
            {msg ? (<p>{msg.msg}</p>) : null}
            <InputContainer>
                <Label>Name
                    <input type="text" {...name} placeholder="eg: Katelyn Smith, Kate, KS"/>                
                </Label>
            </InputContainer>
            <InputContainer>
                <small>username cannot contain the following characters(.$!,^*#@)</small>
                <br/>
                <Label>Username
                    <input type="text" {...username} />
                </Label>
            </InputContainer>
            <InputContainer>
                <Label>Email
                    <input type="email" {...email} />
                </Label>
            </InputContainer>
            <InputContainer>
                <Label>Password
                    <input type="password" {...password} />
                </Label>
            </InputContainer>
            <Button type="submit" onClick={(e) => {
                 e.preventDefault();
                 dispatch(register({name, username, email, password}));
            }}>Sign Up</Button>
        </form>
    )
}