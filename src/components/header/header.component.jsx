import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/user/user-actions';


import './header.styles.scss';

const Header = ({ logout, auth: { loading, user} }) => {
    
    return (
        <div className='navbar'>
            <p className='title'>NEO <span style={{fontWeight: '300', display: 'block'}}>STORE</span></p>
            <ul>
                <li className='nav-item'><Link to='/' style={{color: '#EF476F'}}>Produtos</Link></li>
                <li className='nav-item'><Link className='link' to='/cadastrar-produto'>Cadastrar Produto</Link></li>
                <li className='nav-item'><Link className='link' to='/listar-produtos'>Listar Produtos</Link></li>

                <li className='nav-item' style={{marginTop: '30px'}}><Link to='/' style={{color: '#EF476F'}}>Vendas</Link></li>
                <li className='nav-item'><Link className='link' to='/relatorios'>Relatórios</Link></li>
                <li className='nav-item'><Link className='link' to='/'>Listar Produtos</Link></li>
            </ul>

            <div className='user-info'>
                <p style={{marginBottom: '15px'}}>{user ? user.name.slice(0, user.name.indexOf(' ')) : null}   <i className="far fa-user" style={{marginLeft: '35px'}}></i></p>
                <a onClick={() => {logout();}} style={{color: '#EF476F', marginTop: '15px', cursor: 'pointer'}}>Sair <i className="fas fa-sign-out-alt" style={{marginLeft: '60px'}}></i></a>
            </div>
        </div>
    ) 
}

const mapStateToProps = state => ({
    auth: state.user
  });

export default  connect(mapStateToProps, { logout })(Header);