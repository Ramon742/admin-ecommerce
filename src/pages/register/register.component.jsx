import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { register } from '../../redux/user/user-actions';

import './register.styles.scss';

const RegisterPage = ({ isAuthenticated, register }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        code: ''
    });

    const { name, email, password, confirmPassword, code } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não são iguais!');
        } else {
            register({ name, email, password, code });
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/produtos" />;
    }

    return (
        <div className='register'>
            <p className='title'>Cadastro</p>
            <p className='obs'>As informaçõess inseridas aqui serão utilizadas para você realizar login no dashboard.</p>

            <form onSubmit={onSubmit}>
                <div className='input'>
                    <label htmlFor="name">Nome Completo:</label>
                    <input 
                    className='input-pattern' 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange={onChange}
                    id="name" 
                    placeholder="ex: Pedro Guilherme da Silva"/>
                </div>
                <div className='input'>
                    <label htmlFor="email">Email:</label>
                    <input 
                    className='input-pattern' 
                    type="text" 
                    name="email" 
                    value={email}
                    onChange={onChange}
                    id="email" 
                    placeholder="ex: ana@gmail.com"/>
                </div>
                <div className='input'>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    className='input-pattern' 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={onChange}
                    id="password" 
                    placeholder="Sua senha de cadastro"/>
                </div>
                <div className='input'>
                    <label htmlFor="confirmPassword">Confirmar Senha:</label>
                    <input 
                    className='input-pattern' 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword}
                    onChange={onChange}
                    id="confirmPassword" 
                    placeholder="Sua senha de cadastro"/>
                </div><div className='input'>
                    <label htmlFor="code">Código:</label>
                    <input 
                    className='input-pattern' 
                    type="text" 
                    name="code" 
                    value={code}
                    onChange={onChange}
                    id="code" 
                    placeholder="Código para criar sua conta"/>
                </div>
                <div>
                    <button className='btn-login mt-30'>Cadastrar</button>
                </div>
            </form>
        </div>
    ) 
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { register } )(RegisterPage);