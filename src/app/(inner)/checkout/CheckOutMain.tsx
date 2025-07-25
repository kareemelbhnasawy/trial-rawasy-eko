// src/components/service/CheckOutMain.tsx
'use client';
import React, { useState } from 'react';
import { useCart } from '@/components/header/CartContext';
import { useOrder, OrderItem } from '@/components/header/OrderContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const DEFAULT_SHIPPING_COST = 50;

export default function CheckOutMain() {
    const { cartItems, setCartItems } = useCart();
    const { addOrder } = useOrder();
    const router = useRouter();
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [billingInfo, setBillingInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        country: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        orderNotes: '',
    });

    const [couponMessage, setCouponMessage] = useState('');
    const handleCouponApply = () => {
        if (coupon === '12345') {
            setDiscount(0.25);
            setCouponMessage('Coupon applied -25% Discount');
        } else {
            setDiscount(0);
            setCouponMessage('Coupon code is incorrect');
        }
    };

    const activeCartItems = cartItems.filter(item => item.active);
    const subtotal = activeCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = subtotal * discount;
    const shippingCost = discount > 0 ? 0 : DEFAULT_SHIPPING_COST;
    const total = subtotal - discountAmount + shippingCost;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setBillingInfo({ ...billingInfo, [id]: value });
    };

    const validateForm = () => {
        const requiredFields = ['email', 'firstName', 'lastName', 'country', 'street', 'city', 'state', 'zip', 'phone'];
        for (const field of requiredFields) {
            if (!billingInfo[field as keyof typeof billingInfo]) {
                toast.error(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                return false;
            }
        }
        if (!paymentMethod) {
            toast.error('Please select a payment method');
            return false;
        }
        if (!termsAccepted) {
            toast.error('Please accept the terms and conditions');
            return false;
        }
        if (cartItems.filter(item => item.active).length === 0) {
            toast.error('Your cart is empty');
            return false;
        }
        return true;
    };

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            // Convert cart items to order items
            const activeCartItems = cartItems.filter(item => item.active);
            const orderItems: OrderItem[] = activeCartItems.map(item => ({
                id: item.id,
                image: item.image,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            }));

            // Create order
            const newOrder = addOrder({
                status: 'pending',
                items: orderItems,
                subtotal,
                discount: discountAmount,
                shipping: shippingCost,
                total,
                billingInfo,
                paymentMethod,
            });

            // Clear cart items (remove active items only)
            const updatedCartItems = cartItems.filter(item => !item.active);
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));

            // Show success message
            toast.success(`Order placed successfully! Order number: ${newOrder.orderNumber}`);

            // Redirect to account page
            setTimeout(() => {
                router.push('/account');
            }, 2000);

        } catch (error) {
            console.error('Error placing order:', error);
            toast.error('Failed to place order. Please try again.');
        }
    };

    const [showCoupon, setShowCoupon] = useState(false);
    const toggleCouponInput = () => {
        setShowCoupon((prev) => !prev);
    };

    return (
        <div className="checkout-area rts-section-gap">
            <div className="container">
                <div className="row">
                    {/* Left: Billing Details */}
                    <div className="col-lg-8 pr--40 order-2 order-xl-1">
                        <div className="coupon-input-area-1">
                            <div className="coupon-area">
                                <div className="coupon-ask cupon-wrapper-1" onClick={toggleCouponInput}>
                                    <button className="coupon-click" onClick={handleCouponApply}>
                                        Have a coupon? Click here to enter your code
                                    </button>
                                </div>
                                <div className={`coupon-input-area cupon1 ${showCoupon ? 'show' : ''}`}>
                                    <div className="inner">
                                        <p>If you have a coupon code, please apply it below.</p>
                                        <div className="form-area">
                                            <input
                                                type="text"
                                                placeholder="Enter Coupon Code..."
                                                value={coupon}
                                                onChange={e => {
                                                    setCoupon(e.target.value);
                                                    setCouponMessage('');
                                                }}
                                            />
                                            <button type="button" className="btn-primary rts-btn" onClick={handleCouponApply}>
                                                Apply Coupon
                                            </button>
                                        </div>
                                        {couponMessage && (
                                            <p
                                                style={{
                                                    color: coupon === '12345' ? 'green' : 'red',
                                                    marginTop: '8px',
                                                }}
                                            >
                                                {couponMessage}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Billing Form */}
                        <div className="rts-billing-details-area">
                            <h3 className="title">Billing Details</h3>
                            <form onSubmit={(e) => e.preventDefault()}>
                                {[
                                    { id: 'email', label: 'Email Address*', type: 'email' },
                                    { id: 'firstName', label: 'First Name*', type: 'text' },
                                    { id: 'lastName', label: 'Last Name*', type: 'text' },
                                    { id: 'company', label: 'Company Name (Optional)', type: 'text' },
                                    { id: 'country', label: 'Country / Region*', type: 'text' },
                                    { id: 'street', label: 'Street Address*', type: 'text' },
                                    { id: 'city', label: 'Town / City*', type: 'text' },
                                    { id: 'state', label: 'State*', type: 'text' },
                                    { id: 'zip', label: 'Zip Code*', type: 'text' },
                                    { id: 'phone', label: 'Phone*', type: 'tel' },
                                ].map(({ id, label, type }) => (
                                    <div className="single-input" key={id}>
                                        <label htmlFor={id}>{label}</label>
                                        <input
                                            id={id}
                                            type={type}
                                            value={(billingInfo as any)[id]}
                                            onChange={handleInputChange}
                                            required={label.includes('*') && !label.includes('Optional')}
                                        />
                                    </div>
                                ))}
                                <div className="single-input">
                                    <label htmlFor="orderNotes">Order Notes (Optional)</label>
                                    <textarea id="orderNotes" value={billingInfo.orderNotes} onChange={handleInputChange}></textarea>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right: Order Summary */}
                    <div className="col-lg-4 order-1 order-xl-2">
                        <h3 className="title-checkout">Your Order</h3>
                        <div className="right-card-sidebar-checkout">
                            <div className="top-wrapper">
                                <div className="product">Products</div>
                                <div className="price">Price</div>
                            </div>

                            {activeCartItems.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                activeCartItems.map((item) => (
                                    <div className="single-shop-list" key={item.id}>
                                        <div className="left-area">
                                            <img src={`${item.image}`} alt={item.title} />
                                            <span className="title">{item.title} × {item.quantity}</span>
                                        </div>
                                        <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))
                            )}

                            <div className="single-shop-list">
                                <div className="left-area">
                                    <span>Subtotal</span>
                                </div>
                                <span className="price">${subtotal.toFixed(2)}</span>
                            </div>

                            {discount > 0 && (
                                <div className="single-shop-list">
                                    <div className="left-area">
                                        <span>Discount (25%)</span>
                                    </div>
                                    <span className="price">-${discountAmount.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="single-shop-list">
                                <div className="left-area">
                                    <span>Shipping</span>
                                </div>
                                <span className="price">${shippingCost.toFixed(2)}</span>
                            </div>

                            <div className="single-shop-list">
                                <div className="left-area">
                                    <span style={{ fontWeight: 600, color: '#2C3C28' }}>Total Price:</span>
                                </div>
                                <span className="price" style={{ color: '#629D23' }}>${total.toFixed(2)}</span>
                            </div>

                            {/* Payment methods */}
                            <div className="cottom-cart-right-area">
                                <ul>
                                    <li>
                                        <input
                                            type="radio"
                                            id="bank"
                                            name="payment"
                                            value="bank_transfer"
                                            checked={paymentMethod === 'bank_transfer'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="bank">Direct Bank Transfer</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            id="check"
                                            name="payment"
                                            value="check"
                                            checked={paymentMethod === 'check'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="check">Check Payments</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            id="cod"
                                            name="payment"
                                            value="cash_on_delivery"
                                            checked={paymentMethod === 'cash_on_delivery'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="cod">Cash On Delivery</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            id="paypal"
                                            name="payment"
                                            value="paypal"
                                            checked={paymentMethod === 'paypal'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="paypal">Paypal</label>
                                    </li>
                                </ul>
                                <div className="single-category mb--30">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        checked={termsAccepted}
                                        onChange={(e) => setTermsAccepted(e.target.checked)}
                                        required
                                    />
                                    <label htmlFor="terms"> I have read and agree to terms and conditions *</label>
                                </div>
                                <button
                                    type="button"
                                    className="rts-btn btn-primary"
                                    onClick={handlePlaceOrder}
                                    disabled={activeCartItems.length === 0}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
