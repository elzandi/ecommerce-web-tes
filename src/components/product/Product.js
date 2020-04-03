import React from 'react';
import '../../assets/sass/product.sass';

const Product = props => {
    return (
        <div className="p-3 mb-12">
            {props.products.map(item => {
                return (
                    <div className="product mt-5" key={item.id}>
                        <img className="img-fluid" alt={item.title} src={item.imageUrl} />
                        <div className="icon">
                            {item.loved === 1 ? (
                                <i className="fas fa-heart"></i>
                            ):(
                                <i className="far fa-heart"></i>
                            )}
                        </div>
                        <div className="title fs-16">
                            {item.title}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Product;