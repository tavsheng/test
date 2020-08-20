import React from 'react';
import { reduxForm } from 'redux-form';
import {Input, createField} from '../common/formControls/FormControls';
import { required } from '../../validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import styles from '../common/formControls/FormControls.module.css'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login (formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to= {'/contacts'}/>
    }
    return (<div>
       
        <h1>Login</h1>
        <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
                )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit = {handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [],Input, {type:'checkbox'}, 'remember me')}
                {error && <div className = {styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
        </form>
       
                )
}

const LoginReduxForm = reduxForm({form:'login'}) (LoginForm)
export default connect (mapStateToProps, {login}) (Login);