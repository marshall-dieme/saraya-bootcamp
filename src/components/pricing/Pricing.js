import React, { Component } from 'react';

import './pricing.css'
class Pricing extends Component {
    render() {
        return (
            <section className="pricing-section">
                <div className="price-card">
                    <span className='card-banner'></span>
                    <div className="card-content">
                        <h4>Registration</h4>
                        <ul>
                            <li><span><ion-icon name="checkmark-done-outline"></ion-icon></span> 6 months of training</li>
                            <li><span><ion-icon name="checkmark-done-outline"></ion-icon></span> 2 to 6 months of internship</li>
                            <li><span><ion-icon name="checkmark-done-outline"></ion-icon></span> 4 year employment contract</li>
                        </ul>
                        <div className="price">
                            <h5>CFA 250,000</h5>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pricing;