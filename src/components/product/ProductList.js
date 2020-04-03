import React from 'react';
import '../../assets/sass/product.sass';

const ProductList = props => {
    return (
        <div className="mt-12">
            {props.products.map(item => {
                return(
                    <div className="product-list mb-3" key={item.id}>
                        <div className="images">
                            <img src={item.imageUrl} alt={item.title} />
                        </div>
                        <div className="content">
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductList;