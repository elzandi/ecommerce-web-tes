import React from 'react';

import Button from '../../components/UI/button/Button';
import '../../assets/sass/product-detail.sass';

const ProductDetail = () => {
    return (
        <div className="product-detail">
            <div className="back">
                <i className="fas fa-long-arrow-alt-left"></i>
            </div>
            <div className="sahre">
                <button>
                    <i className="fas fa-share-alt"></i>
                </button>
            </div>
            <div className="images">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Wii-console.jpg/430px-Wii-console.jpg" alt="Nitendo WII" />
            </div>
            <div className="content">
                <div className="title">Nitendo WII</div>
                <div className="love">
                    <i className="far fa-heart"></i>
                </div>
            </div>
            <div className="description">
                The Nintendo DS (abbreviated NDS, DS, or the full name Nintendo Dual Screen, and iQue DS in China) is a handheld game console developed and manufactured by Nintendo, released in 2004. It is visibly distinguishable by its horizontal clamshell design, and the presence of two displays, the lower of which acts as a touchscreen. The system also has a built-in microphone and supports wireless IEEE 802.11 (Wi-Fi) standards, allowing players to interact with each other within short range (10–30 meters, depending on conditions) or over the Nintendo Wi-Fi Connection service via a standard Wi-Fi access point. According to Nintendo, the letters DS in the name stand for Developers' System and Double Screen, the former of which refers to the features of the handheld designed to encourage innovative gameplay ideas among developers.[43] The system was known as Project Nitro during development.
            </div>
            <div className="content">
                <div className="price">$200</div>
                <div className="buy">
                    <Button icon={null} name="Buy" btnClass="btn btn-buy" />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;