import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/user/user-actions';

import { Link } from 'react-router-dom';

import './login.styles.scss';

const LoginPage = ({ login, isAuthenticated  }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
      };

      if (isAuthenticated) {
        return <Redirect to="/produtos" />;
    }

    return (
        <div className='login'>
            <p className='title'>Olá, seja bem vindo</p>

            <form onSubmit={onSubmit}>
                <div className='input'>
                    <label htmlFor="email">Email:</label>
                    <input 
                        className='input-pattern' 
                        type="text" 
                        name="email"
                        value={email} 
                        onChange={onChange}
                        id="email" 
                        placeholder="ex: ana@gmail.com"
                    />
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
                        placeholder="Sua senha cadastrada"
                    />
                </div>
                <div className='links'>
                    <a className='forgot'>Esqueci Senha</a>
                    <button className='btn-login'>Entrar</button>
                </div>
                <p className='info'>Ainda não possui uma conta? <Link to='registrar'>Cadastre-se</Link></p>
            </form>
        </div>
    ) 
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
}); 

export default connect(mapStateToProps, { login })(LoginPage);