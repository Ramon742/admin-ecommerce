import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';

import './homepage.styles.scss';

const HomePage = () => {
    return (
        <Fragment>
        <Header />
            <div className='home-page'>
                <div>
                    <p className='title'>Produtos</p>
                </div>
                <div>
                    <Link to='/cadastrar-produto' className='button'>
                        <i className="fas fa-plus fa-lg"></i>
                        <span style={{marginLeft: '15px'}}>
                            Cadastrar novo produto
                        </span>
                    </Link>
                    <Link to='/listar-produtos' className='button' style={{marginLeft: '30px'}}>
                        <i className="fas fa-list-ul"></i>
                        <span style={{marginLeft: '15px'}}>
                            Listar produtos
                        </span>
                    </Link>
                </div>
            </div>
        </Fragment>
    ) 
}

export default HomePage;