import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/UI/button/Button';
import '../../assets/sass/product-detail.sass';

import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/modal/Modal';

const ProductDetail = (props) => {

    const { prods } = props;
    const paramId = props.match.params.id;
    const [products, setProducts] = useState([]);
    const shareUrl = 'https://github.com';
    const [show, setShow] = useState(false);

    const filteredProductsHandler = useCallback(filterProducts => {
        const filteredById = filterProducts.filter(data => {
            return data.id.toLowerCase().includes(paramId.toLowerCase());
        })
        setProducts(filteredById);
    }, [paramId])

    useEffect(() => {
        filteredProductsHandler(prods);
    }, [filteredProductsHandler, prods])

    const backHandler = () => {
        props.history.goBack();
    }

    const shareLinkHandler = () => {
        setShow(!show)
    }
    
    return (
        <div>
            {products.length > 0 &&
                <div>
                    {show &&
                        <Modal close={shareLinkHandler} shareUrl={shareUrl} title={products[0].title} />
                    }
                    <div className="product-detail">
                        <div className="back" onClick={backHandler}>
                            <i className="fas fa-long-arrow-alt-left"></i>
                        </div>
                        <div className="sahre">
                            <button onClick={shareLinkHandler}>
                                <i className="fas fa-share-alt"></i>
                            </button>
                        </div>
                        <div className="images">
                            <img src={products[0].imageUrl} alt={products[0].title} />
                        </div>
                        <div className="content">
                            <div className="title">{products[0].title}</div>
                            <div className="love">
                                {products[0].loved === 1 ? (
                                    <i className="fas fa-heart"></i>
                                ):(
                                    <i className="far fa-heart"></i>
                                )}
                            </div>
                        </div>
                        <div className="description">
                            {products[0].description}
                        </div>
                        <div className="content">
                            <div className="price">{products[0].price}</div>
                            <div className="buy" onClick={() => props.onProductAdded(paramId)}>
                                <Button icon={null} name="Buy" btnClass="btn btn-buy" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        prods: state.product.products,
        message: state.product.message
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onProductAdded: (id) => dispatch(actions.addProductPurchase(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);