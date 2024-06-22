import React from 'react'
import line from "../assets/images/line.png"

const AboutUs = () => {
    return (
        <div className='container mb-5'>
            <div className='about-us-our-products-heading pb-3'>
                <img src={line} alt='line' className='half-line' />
                <h3 className='about-text'>About</h3>
                <img src={line} alt='line' className='half-line' />
            </div>
            <p className='text-center p-4'>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them. The choice is yours. Because they don’t have one.</p>
            <h6 className='fw-bold text-center'>The choice is yours. Because they don't have one.</h6>
        </div>
    )
}

export default AboutUs