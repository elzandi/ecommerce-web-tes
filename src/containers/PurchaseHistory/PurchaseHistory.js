import React, { useState, useEffect } from 'react';

import Header from '../../components/layout/Header/Header';
import ProductList from '../../components/product/ProductList';
import axios from '../../axios-orders';

const PurchaseHistory = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get( '/home' )
        .then( response => {
            const dataApi = response.data[0].data.productPromo;
            setProducts(dataApi)
        })
        .catch( error => {
            console.log(error);
        });
    }, [])

    return (
        <div className="purchase">
            <Header type="purchase" />
            <ProductList products={products} />
        </div>
    );
}

export default PurchaseHistory;