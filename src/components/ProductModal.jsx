import React from 'react';
import { Modal } from 'react-bootstrap';
import image from "../assets/images/main-banner.png";
import { MdClose } from 'react-icons/md';

const ProductModal = ({ show, handleClose, productName }) => {
    return (
        <Modal show={show} onHide={handleClose} className='modal-lg'>
            <Modal.Body>
                <div className='row'>
                    <div className='col-12 col-md-7'>
                        <img src={image} alt='Product 1' className='modal-product-one' />
                        <div className='row'>
                            <div className='col-3'>
                                <img src={image} alt='Product 1' className='modal-product-small' />
                            </div>
                            <div className='col-3'>
                                <img src={image} alt='Product 1' className='modal-product-small' />
                            </div>
                            <div className='col-3'>
                                <img src={image} alt='Product 1' className='modal-product-small' />
                            </div>
                            <div className='col-3'>
                                <img src={image} alt='Product 1' className='modal-product-small' />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 mt-3'>
                        <div className='row'>
                            <div className='col-10'>
                                <h5 className='text-muted'>{productName}</h5>
                            </div>
                            <div className='col-2'>
                                <MdClose className='modal-close' onClick={handleClose} />
                            </div>
                        </div>
                        <div>
                            <h6 className='text-muted'>MRP:</h6>
                            <h5 className='fw-bold'>Raju's Dreams /-</h5>
                            <hr className='modal-hr' />
                            <h6>Product Description:</h6>
                            <p>This product packs an extra punch, Thanks to the literal blood, sweat and tears of a young boy.</p>
                            <hr className='modal-hr' />
                            <h6>Product Contents:</h6>
                            <p><span class="star">&#9733;</span>10 hand hunting pieces of rassi bombs</p>
                            <p><span class="star">&#9733;</span>1 Jilled with green pain</p>
                            <p><span class="star">&#9733;</span>Raju's hopes</p>
                            <hr className='modal-hr' />
                            <h6>Shipping Time:</h6>
                            <p>Before Raju understands that this dream do not matter.</p>
                            <button className='choose-now-button' onClick={handleClose}>Choose Now</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ProductModal;
