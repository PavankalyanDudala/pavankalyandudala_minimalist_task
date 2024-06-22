import React, { useState } from 'react';
import line from "../assets/images/line.png";
import fullLine from "../assets/images/fullLine.png";
import cardImage from "../assets/images/main-banner.png";
import ProductModal from './ProductModal'; // Import the modal component

const OurProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleQuickView = (productName) => {
        setSelectedProduct(productName);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <div className='container mb-5'>
            <div className='about-us-our-products-heading pb-5'>
                <img src={line} alt='line' className='half-line' />
                <h3 className='about-text'>Our Products</h3>
                <img src={line} alt='line' className='half-line' />
            </div>
            <div className='container w-100 pb-5'>
                <div className='d-flex flex-column flex-md-row gap-5'>
                    <div className='w-100 w-md-50 p-2 product-card'>
                        <img src={cardImage} alt="card 1" className='card-image pb-3' />
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5>Raju Rassibomb</h5>
                            <button className='products-view-button' onClick={() => handleQuickView('Raju Rassibomb')}>QUICK VIEW</button>
                        </div>
                    </div>
                    <div className='w-100 w-md-50 p-2 product-card'>
                        <img src={cardImage} alt="card 2" className='card-image pb-3' />
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5>Ladiyon ki Rani Chani</h5>
                            <button className='products-view-button' onClick={() => handleQuickView('Ladiyon ki Rani Chani')}>QUICK VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-100'>
                <img src={fullLine} alt='Full Line' className='w-100' />
            </div>
            <ProductModal show={showModal} handleClose={handleClose} productName={selectedProduct} />
        </div>
    );
}

export default OurProducts;
