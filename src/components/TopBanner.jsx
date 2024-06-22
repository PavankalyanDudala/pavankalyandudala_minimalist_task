import React from 'react'
import brandLogo from "../assets/images/brand-logo.png"

const TopBanner = () => {
    return (
        <div className='top-banner-container mb-5'>
            <div className='header'>
                <div className='container'>
                    <img src={brandLogo} alt='Logo' className='img-fluid' />
                </div>
            </div>
            <div className='container'>
                <div className='banner-content'>
                    <h1 className='text-white'>The Choice is yours.<br />Because they don't have one.</h1>
                    <button className='banner-quick-view-button'>QUICK VIEW</button>
                </div>
            </div>
        </div>
    )
}

export default TopBanner