import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/input/Input';
import Button from '../../components/UI/button/Button';
import * as actions from '../../store/actions/index';

import '../../assets/sass/auth.sass';

const Auth = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const inputTypes = [
        {type: 'text', name: 'username', placeholder: 'Username'},
        {type: 'password', name: 'password', placeholder: 'Password'},
    ] 

    const submitHandler = event => {
        event.preventDefault();
        props.onAuth(enteredUsername, enteredPassword);
        if (props.isAuthenticated) {
            console.log(props)
        }
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

    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p className="text-center">{props.error}</p>
        );
    }

    let authRedirect = null;
    if ( props.isAuthenticated ) {
        authRedirect = <Redirect to={props.authRedirectPath} />
    }

    return (
        <div className="auth w-90">
            <p className="bold text-center fs-18 mb-8">Login</p>
            {errorMessage}
            {authRedirect}
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

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( username, password ) => dispatch( actions.auth( username, password ) ),
        onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/home' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );