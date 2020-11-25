import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { selectProductItems } from '../../redux/product/product-selectors';

import './list-products.styles.scss';

import Header from '../../components/header/header.component';
import Product from '../../components/product/product.component';

import { getProducts, deleteProduct, getByCategory } from '../../redux/product/product-actions';

const ListProductsPage = ({ getProducts, products, deleteProduct, getByCategory }) => {
    
    useEffect(() => {
        getProducts();
      }, [getProducts, deleteProduct]);


      const [search, setSearch] = useState('');
      const [searchCategory, setSearchCategory] = useState('');

       //filter the profiles from the database with the search bar
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()));

    const onChange = (e) => {
        setSearchCategory(e.target.value);
        getByCategory(e.target.value);
    }

    return (
        <Fragment>
            <Header />
            <div className='list-products'>
                <p className='p-bold' style={{marginLeft: '250px'}}>Esta é sua lista de produtos cadastrados</p>
                <div className='flex-container'>
                    <input type="text" 
                        className='input-pattern' 
                        placeholder='Busque por item ou categoria'
                        style={{marginLeft: '250px', flexGrow: '1'}}
                        name="search"
                        value={search}
                        onChange={ e => setSearch(e.target.value)}
                    />
                    <select className='select-input' name='searchCategory' value={searchCategory} onChange={onChange} style={{flexGrow: '1'}}>
                                <option value="">Categoria</option>
                                <option value="camisa">Camisa</option>
                                <option value="calca">Calça</option>
                                <option value="short">Short</option>
                                <option value="sapato">Sapato</option>
                    </select>
                </div>

                {filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <Product product={product} key={product._id} deleteProduct={deleteProduct} /> 
                ))
            ) : (
                <h4 style={{marginLeft: '300px', marginTop: '30px'}}>Produto não encontrado...</h4>
            )}
            </div>
        </Fragment>
    ) 
}

const mapStateToProps = (state) => ({
    products: selectProductItems(state)
  });

export default connect(mapStateToProps, { getProducts, deleteProduct, getByCategory })(ListProductsPage);