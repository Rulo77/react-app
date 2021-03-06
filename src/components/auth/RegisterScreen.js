import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError}= useSelector(state =>state.ui);


    const [formValues, handleInputChange] = useForm({
        name: 'Raul',
        email: 'adios@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const {name,email,password,password2} = formValues; 

    const handleRegister= (e)=>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email,password,name));
        }

    }
    
    const isFormValid = () =>{
        
        if(name.trim().length === 0){
            dispatch(setError('name es requerido'));
            console.log('name es requerido');
            
            return false;
        }
        if(!validator.isEmail(email)){
            dispatch(setError('email invalido'));
            console.log('email invalido');
            return false
        }
        if(password!==password2 || password.length < 5){
            dispatch(setError('password debe contener minimo 6 caracteres y ser igual'));
            console.log('password debe contener minimo 6 caracteres y ser igual');
            return false
        }

        dispatch(removeError());
        return true;
    }



    return (
        <>
        <h3 className='auth_title'>Register</h3>

        <form onSubmit={handleRegister}>

            {
              msgError &&
              (
                <div className='auth__alert-error'>
               {msgError}
                </div>
              )
            }



            <input 
            type='text'
             placeholder='Name' 
             name='name'
             className='auth__input'
             autocomplete='off'
             value={name}
             onChange={handleInputChange}
             />
            <input 
            type='text'
             placeholder='email' 
             name='email'
             className='auth__input'
             autocomplete='off'
             value={email}
             onChange={handleInputChange}
             />
            <input
             type='password'
             placeholder='Password'
              name='password'
              className='auth__input'
              value={password}
              onChange={handleInputChange}
              />
                <input
             type='password'
             placeholder='Confirm Password'
              name='password2'
              className='auth__input'
              value={password2}
              onChange={handleInputChange}
              />

            <button 
            type='submit'
            className='btn btn-primary btn-block mb-5'
            >
                Register
            </button>

            <Link 
            to='/auth/login'
            className='link'
            >
                Already registered?
            </Link>

        </form>
    </>
    )
}
