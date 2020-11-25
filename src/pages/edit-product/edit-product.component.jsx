import React, { Fragment, useEffect, useState } from 'react';

import Header from '../../components/header/header.component';

import { connect } from 'react-redux';
import { getProduct, editProduct } from '../../redux/product/product-actions';
import { selectProductItem } from '../../redux/product/product-selectors';

import './edit-product.styles.scss';

const initialState = {
    name: '',
    price: '',
    quantity: '',
    image: '',
    description: '',
    option: '',
    category: '',
    productFor: ''
}

const EditProduct = ({ match, getProduct ,product, editProduct }) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if(!product) {
            getProduct(match.params.id);
        }

        const productData = { ...initialState };

        for (const key in product) {
            if (key in productData) productData[key] = product[key];
          }

        setFormData(productData);

    }, [getProduct, match.params.id, product]);

    const { name, price, quantity, image, description, option, category, productFor } = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        editProduct(formData, product._id);
        //to updated the form in real time
        getProduct(match.params.id);
    }

    return (
        <Fragment>
            <Header />
            <div className='product-insert'>
                <p className='title'>Editar Produto</p>
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
                            />
                        </div>
                        <div style={{width: '20%'}}>
                            <label htmlFor="">Categoria</label>
                            <select className='select-input' name='category' value={category} onChange={onChange}>
                                <option value="">Categoria</option>
                                <option value="camisa">Camisa</option>
                                <option value="calca">Calça</option>
                                <option value="short">Short</option>
                                <option value="sapato">Sapato</option>
                            </select>
                            <select className='select-input' name='productFor' value={productFor} onChange={onChange}>
                                <option value="homen">Homens</option>
                                <option value="mulher">Mulheres</option>
                                <option value="crianca">Crianças</option>
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
                        <button className='confirm-button'>Editar Produto</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
};

const mapStateToProps = (state) => ({
    product: selectProductItem(state)
  });

export default connect(mapStateToProps , { getProduct, editProduct })(EditProduct);