import React, { useState } from 'react';

import Input from '../../components/UI/input/Input';
import Button from '../../components/UI/button/Button';
import '../../assets/sass/auth.sass';

const Auth = () => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const inputTypes = [
        {type: 'text', name: 'username', placeholder: 'Username'},
        {type: 'password', name: 'password', placeholder: 'Password'},
    ] 

    const submitHandler = event => {
        event.preventDefault();
        console.log(enteredUsername, enteredPassword);
    }

    const signHandler = (event, name) => {
        const value = event.target.value;
        if (name === 'username') {
            setEnteredUsername(value);
        }
        else {
            setEnteredPassword(value);
        }
    }

    return (
        <div className="auth w-90">
            <p className="bold text-center fs-18 mb-8">Login</p>
            <form onSubmit={submitHandler}>
                {inputTypes.map((item, key) => {
                    return(
                        <Input 
                            key={key} 
                            type={item.type} 
                            placeholder={item.placeholder} 
                            formControl="form-control mb-2 fs-14"
                            onEnteredType={(event) => signHandler(event, item.name)} />
                    );
                })}
                <input type="checkbox" className="checkbox" />
                <label> Remember Me</label>
                <Button icon={null} btnClass="btn btn-signin w-25 float-right" name="Sign In" />
            </form>
            <div className="mt-10 mb-5 text-center">
                <Button icon="fab fa-facebook-f" btnClass="btn btn-fb w-75" name="Sign In with Facebook" />
            </div>
            <div className="mb-5 text-center">
                <Button icon="fab fa-google" btnClass="btn btn-gl w-75" name="Sign In with Google" />
            </div>
        </div>
    );
};

export default Auth;