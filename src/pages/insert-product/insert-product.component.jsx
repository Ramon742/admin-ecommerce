import React, { Fragment, useState } from 'react';

import Header from '../../components/header/header.component';

import { connect } from 'react-redux';
import { addProduct } from '../../redux/product/product-actions';

import './insert-product.styles.scss';

const InserctProductPage = ({ addProduct }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        quantity: '',
        image: '',
        description: '',
        option: '',
        category: null,
        productFor: null
    });

    const { name, price, quantity, image, description, option, category, productFor } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
        console.log(formData);
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        addProduct(formData);
        setFormData({
            name: '',
            price: '',
            quantity: '',
            image: '',
            description: '',
            option: '',
            category: 'no-value',
            productFor: 'no-value'
        });
    }

    return (
        <Fragment>
            <Header />
            <div className='product-insert'>
                <p className='title'>Formulário de cadastro</p>
                <p className='p-label'>Imagem</p>
                <form onSubmit={onSubmit}>
                    <div className='flex-container margin-top'>
                        <div>
                            <input 
                                className='input-pattern' 
                                type="text" 
                                placeholder='url image'
                                name='image'
                                value={image}
                                onChange={onChange}
                                required
                            />
                            {/*<label className='upload-image-label' htmlFor="image"><i class="far fa-image fa-lg"></i></label>
                            <input className='upload-image' type="file" name="" id="image"/>*/}
                        </div>
                    </div>
                    <div className='flex-container margin-top-50'>
                        <div style={{width: '40%'}}>
                            <label htmlFor="">Nome do Produto</label>
                            <input 
                                className='input-pattern' 
                                type="text" 
                                placeholder='ex: calça jeans'
                                name='name'
                                value={name}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div style={{width: '20%'}}>
                            <label htmlFor="">Categoria</label>
                            <select className='select-input' name='category' value={category} onChange={onChange} defaultValue='no-value' required>
                                <option value="no-value" disabled>Categoria</option>
                                <option value="camisa">Camisa</option>
                                <option value="calca">Calça</option>
                                <option value="short">Short</option>
                                <option value="sapato">Sapato</option>
                                <option value="saia">Saia</option>
                                <option value="blazer">Blazer</option>
                                <option value="conjunto">Conjunto</option>
                                <option value="roupa-de-dormir">Roupa de dormir</option>
                            </select>
                        </div>
                        <div style={{width: '20%'}}>
                            <label htmlFor="">Para</label>
                            <select className='select-input' name='productFor' value={productFor} onChange={onChange} defaultValue='no-value' required>
                                <option value='no-value' disabled>Público</option>
                                <option value='homem'>Homens</option>
                                <option value='mulher'>Mulheres</option>
                                <option value='crianca'>Crianças</option>
                            </select>
                        </div>
                        <div style={{width: '20%'}}>
                            <label htmlFor="">Preço Unitário</label>
                            <input 
                                className='input-pattern' 
                                type="text" 
                                placeholder='ex: 200'
                                name='price'
                                value={price}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div style={{width: '20%'}}>
                            <label htmlFor="">Quantidade</label>
                            <input 
                                className='input-pattern' 
                                type="text" 
                                placeholder='ex: 5'
                                name='quantity'
                                value={quantity}
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex-container margin-top'>
                        <div style={{width: '40%'}}>
                            <label htmlFor="">Descrição do Produto</label>
                            <textarea 
                                className='input-pattern' 
                                cols='65' 
                                rows='8' 
                                type="text" 
                                placeholder='ex: calça jeans rasgadas e confortável'
                                name='description'
                                value={description}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div style={{width: '20%'}}>
                            <label htmlFor="">Opção</label>
                            <input 
                                className='input-pattern' 
                                type="text" 
                                placeholder='ex: azul'
                                name='option'
                                value={option}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className='text-center margin-top-30'>
                        <p className='grey-color'>
                            Verifique se todas as informações inseridas estão corretas
                        </p>
                        <button className='confirm-button'>Confirmar Cadastro</button>
                    </div>
                </form>
            </div>
        </Fragment>
    ) 
}

export default connect(null , { addProduct })(InserctProductPage);