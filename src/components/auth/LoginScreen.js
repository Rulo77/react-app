import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { starLoginEmailPassword, startGoogleLogin} from '../../actions/auth';

import { Link } from 'react-router-dom'
import {useForm} from '../../hooks/useForm'

export const LoginScreen = () => {
    
    const {loading} = useSelector(state => state.ui)

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email: 'adios@gmail.com',
        password: '123456'
    });

    const {email,password} = formValues; 

    const handleLogin = (e) =>{
        e.preventDefault();
       dispatch(starLoginEmailPassword(email, password));
    }

    const handleGoogleLogin= () =>{
        dispatch(startGoogleLogin());
    }


    return (
        <>
            <h3 className='auth_title'>Login</h3>

            <form onSubmit={handleLogin}>
                <input 
                type='text'
                 placeholder='email' 
                 name='email'
                 className='auth__input'
                 autocomplete='off'
                 value= {email}
                 onChange={handleInputChange}
                 />
                <input
                 type='password'
                 placeholder='Password'
                  name='password'
                  className='auth__input'
                  value= {password}
                  onChange={handleInputChange}
                  />

                <button 
                type='submit'
                className='btn btn-primary btn-block'
                disabled={loading}
                >
                    Login
                </button>

        
                <div className='auth__social-networks'>
                    <p>Login with Social network</p>

                    <div 
                    className="google-btn"
                    onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button"/>
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>
                <Link 
                to='/auth/register'
                className='link'
                >
                    create new acount
                </Link>

            </form>
        </>
    )
}
