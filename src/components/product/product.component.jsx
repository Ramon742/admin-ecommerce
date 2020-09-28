import React from 'react';

import { Link } from 'react-router-dom';

import './product.styles.scss';

const Product = ({ product, deleteProduct }) => {
    return (
        <div className='product'>
            <div className='flex-container'>

                <div style={{flexGrow: '1'}}>
                    <img style={{width: '100px'}} src={product.image} alt="imagem do produto"/>
                </div>

                <div style={{width: '250px', flexGrow: '1'}}>
                    <p className='p-bold margin-b-10'>{product.name}</p>
                    <p className='p-grey' style={{width: '85%', textAlign: 'justify'}}>{product.description}</p>
                </div>

                <div style={{flexGrow: '1', textAlign: 'center'}}>
                    <p className='p-grey margin-b-10'>Quantidade</p>
                    <p className='p-bold'>{product.quantity}</p>
                </div>

                <div  style={{flexGrow: '1', textAlign: 'center'}}>
                    <p className='p-grey margin-b-10'>Preço</p>
                    <p className='p-bold'>R$ {product.price}</p>
                </div>

                <div  style={{flexGrow: '1', textAlign: 'center'}}>
                    <div className='edit'>
                        <Link to={`/editar/${product._id}`} style={{cursor: 'pointer'}}><i className="far fa-edit icon fa-lg"></i></Link>
                        <a style={{cursor: 'pointer'}} onClick={() => deleteProduct(product._id)}><i className="far fa-trash-alt fa-lg icon-remove"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;