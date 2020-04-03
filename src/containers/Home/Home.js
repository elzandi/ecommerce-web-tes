import React, { useState, useEffect } from 'react';

import axios from '../../axios-orders';
import Navbar from '../../components/layout/Navbar/Navbar';
import Slide from '../../components/UI/slide/Slide';
import Product from '../../components/product/Product';
import FooterMenu from '../../components/layout/FooterMenu/FooterMenu';
import '../../assets/sass/home.sass';

const Home = () => {
    
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get( '/home' )
        .then( response => {
            const data = response.data[0].data;
            setCategories(data.category)
            setProducts(data.productPromo)
        })
        .catch( error => {
           console.log(error);
        });
    }, [])

    return (
        <div className="home">
            <Navbar />
            <Slide categories={categories} />
            <Product products={products} />
            <FooterMenu />
        </div>
    );
};

export default Home;