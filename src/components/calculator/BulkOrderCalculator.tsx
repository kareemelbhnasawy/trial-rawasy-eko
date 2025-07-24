"use client";
import React, { useState, useEffect } from 'react';

interface CalculationResult {
    totalQuantity: number;
    totalCost: number;
    discountPercentage: number;
    discountAmount: number;
    finalCost: number;
    estimatedDeliveryFee: number;
    grandTotal: number;
}

interface Material {
    name: string;
    price: number;
    unit: string;
    minOrderQty: number;
}

const BulkOrderCalculator = () => {
    const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
    const [quantity, setQuantity] = useState<number>(0);
    const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
    const [calculation, setCalculation] = useState<CalculationResult | null>(null);

    const materials: Material[] = [
        { name: "Portland Cement Type I", price: 12.50, unit: "per bag", minOrderQty: 50 },
        { name: "Steel Rebar Grade 60", price: 8.75, unit: "per piece", minOrderQty: 100 },
        { name: "Concrete Blocks 8\"", price: 2.25, unit: "per block", minOrderQty: 200 },
        { name: "Marine Grade Plywood", price: 89.99, unit: "per sheet", minOrderQty: 10 },
        { name: "PVC Pipe Schedule 40", price: 28.50, unit: "per piece", minOrderQty: 20 },
    ];

    const calculateBulkOrder = () => {
        if (!selectedMaterial || quantity < selectedMaterial.minOrderQty) return;

        const totalCost = selectedMaterial.price * quantity;
        
        // Bulk discount tiers
        let discountPercentage = 0;
        if (quantity >= 1000) discountPercentage = 25;
        else if (quantity >= 500) discountPercentage = 20;
        else if (quantity >= 200) discountPercentage = 15;
        else if (quantity >= 100) discountPercentage = 10;
        else if (quantity >= 50) discountPercentage = 5;

        const discountAmount = (totalCost * discountPercentage) / 100;
        const finalCost = totalCost - discountAmount;
        
        // Delivery fee calculation (simplified)
        const estimatedDeliveryFee = deliveryDistance > 0 ? Math.max(50, deliveryDistance * 2.5) : 0;
        const grandTotal = finalCost + estimatedDeliveryFee;

        setCalculation({
            totalQuantity: quantity,
            totalCost,
            discountPercentage,
            discountAmount,
            finalCost,
            estimatedDeliveryFee,
            grandTotal
        });
    };

    useEffect(() => {
        if (selectedMaterial && quantity >= selectedMaterial.minOrderQty) {
            calculateBulkOrder();
        }
    }, [selectedMaterial, quantity, deliveryDistance]);

    const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const material = materials.find(m => m.name === e.target.value);
        setSelectedMaterial(material || null);
        setQuantity(material?.minOrderQty || 0);
    };

    return (
        <div className="bulk-calculator-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bulk-calculator-area">
                            <div className="section-header text-center">
                                <h2 className="title">Bulk Order Calculator</h2>
                                <p className="subtitle">Calculate your bulk order savings and delivery costs</p>
                            </div>
                            
                            <div className="calculator-form-area">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="calculator-form">
                                            <div className="form-group">
                                                <label htmlFor="material">Select Material</label>
                                                <select 
                                                    id="material" 
                                                    className="form-control"
                                                    onChange={handleMaterialChange}
                                                    value={selectedMaterial?.name || ''}
                                                >
                                                    <option value="">Choose a material...</option>
                                                    {materials.map((material, index) => (
                                                        <option key={index} value={material.name}>
                                                            {material.name} - ${material.price} {material.unit}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            {selectedMaterial && (
                                                <>
                                                    <div className="form-group">
                                                        <label htmlFor="quantity">
                                                            Quantity ({selectedMaterial.unit})
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id="quantity"
                                                            className="form-control"
                                                            min={selectedMaterial.minOrderQty}
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                                                            placeholder={`Minimum order: ${selectedMaterial.minOrderQty}`}
                                                        />
                                                        <small className="form-text text-muted">
                                                            Minimum order quantity: {selectedMaterial.minOrderQty} {selectedMaterial.unit}
                                                        </small>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="distance">Delivery Distance (miles)</label>
                                                        <input
                                                            type="number"
                                                            id="distance"
                                                            className="form-control"
                                                            min="0"
                                                            value={deliveryDistance}
                                                            onChange={(e) => setDeliveryDistance(parseInt(e.target.value) || 0)}
                                                            placeholder="Enter delivery distance"
                                                        />
                                                        <small className="form-text text-muted">
                                                            Leave 0 for pickup
                                                        </small>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        {calculation && selectedMaterial && (
                                            <div className="calculation-results">
                                                <h4 className="results-title">Order Summary</h4>
                                                
                                                <div className="calculation-item">
                                                    <span className="label">Material:</span>
                                                    <span className="value">{selectedMaterial.name}</span>
                                                </div>
                                                
                                                <div className="calculation-item">
                                                    <span className="label">Quantity:</span>
                                                    <span className="value">{calculation.totalQuantity} {selectedMaterial.unit}</span>
                                                </div>
                                                
                                                <div className="calculation-item">
                                                    <span className="label">Unit Price:</span>
                                                    <span className="value">${selectedMaterial.price.toFixed(2)}</span>
                                                </div>
                                                
                                                <div className="calculation-item">
                                                    <span className="label">Subtotal:</span>
                                                    <span className="value">${calculation.totalCost.toFixed(2)}</span>
                                                </div>
                                                
                                                {calculation.discountPercentage > 0 && (
                                                    <>
                                                        <div className="calculation-item discount">
                                                            <span className="label">Bulk Discount ({calculation.discountPercentage}%):</span>
                                                            <span className="value">-${calculation.discountAmount.toFixed(2)}</span>
                                                        </div>
                                                        
                                                        <div className="calculation-item">
                                                            <span className="label">After Discount:</span>
                                                            <span className="value">${calculation.finalCost.toFixed(2)}</span>
                                                        </div>
                                                    </>
                                                )}
                                                
                                                {calculation.estimatedDeliveryFee > 0 && (
                                                    <div className="calculation-item">
                                                        <span className="label">Delivery Fee:</span>
                                                        <span className="value">${calculation.estimatedDeliveryFee.toFixed(2)}</span>
                                                    </div>
                                                )}
                                                
                                                <div className="calculation-item total">
                                                    <span className="label">Total:</span>
                                                    <span className="value">${calculation.grandTotal.toFixed(2)}</span>
                                                </div>

                                                <div className="bulk-discount-tiers">
                                                    <h5>Bulk Discount Tiers:</h5>
                                                    <ul>
                                                        <li>50-99 units: 5% discount</li>
                                                        <li>100-199 units: 10% discount</li>
                                                        <li>200-499 units: 15% discount</li>
                                                        <li>500-999 units: 20% discount</li>
                                                        <li>1000+ units: 25% discount</li>
                                                    </ul>
                                                </div>

                                                <div className="action-buttons mt-4">
                                                    <button className="rts-btn btn-primary radious-sm">
                                                        Add to Cart
                                                    </button>
                                                    <button className="rts-btn btn-secondary radious-sm ml-3">
                                                        Request Quote
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {selectedMaterial && quantity < selectedMaterial.minOrderQty && (
                                            <div className="minimum-order-notice">
                                                <div className="alert alert-warning">
                                                    <h5>Minimum Order Required</h5>
                                                    <p>The minimum order quantity for {selectedMaterial.name} is {selectedMaterial.minOrderQty} {selectedMaterial.unit}.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bulk-calculator-wrapper {
                    padding: 80px 0;
                    background-color: var(--color-white);
                }
                
                .bulk-calculator-area {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .section-header {
                    margin-bottom: 50px;
                }
                
                .section-header .title {
                    color: var(--color-heading-1);
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                
                .section-header .subtitle {
                    color: var(--color-body);
                    font-size: 16px;
                }
                
                .calculator-form .form-group {
                    margin-bottom: 25px;
                }
                
                .calculator-form label {
                    display: block;
                    margin-bottom: 8px;
                    color: var(--color-heading-1);
                    font-weight: 600;
                }
                
                .calculator-form .form-control {
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e5e5e5;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.3s ease;
                }
                
                .calculator-form .form-control:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }
                
                .calculation-results {
                    background-color: #f8f9fa;
                    padding: 30px;
                    border-radius: 12px;
                    border: 1px solid #e5e5e5;
                }
                
                .results-title {
                    color: var(--color-heading-1);
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 25px;
                    padding-bottom: 15px;
                    border-bottom: 2px solid var(--color-primary);
                }
                
                .calculation-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 0;
                    border-bottom: 1px solid #e5e5e5;
                }
                
                .calculation-item.discount {
                    color: var(--color-secondary);
                    font-weight: 600;
                }
                
                .calculation-item.total {
                    font-size: 18px;
                    font-weight: 700;
                    color: var(--color-heading-1);
                    border-bottom: none;
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 2px solid var(--color-primary);
                }
                
                .bulk-discount-tiers {
                    margin-top: 25px;
                    padding-top: 20px;
                    border-top: 1px solid #e5e5e5;
                }
                
                .bulk-discount-tiers h5 {
                    color: var(--color-heading-1);
                    margin-bottom: 10px;
                    font-weight: 600;
                }
                
                .bulk-discount-tiers ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .bulk-discount-tiers li {
                    padding: 4px 0;
                    color: var(--color-body);
                    font-size: 14px;
                }
                
                .minimum-order-notice .alert {
                    padding: 20px;
                    border-radius: 8px;
                    background-color: #fff3cd;
                    border: 1px solid #ffeaa7;
                    color: #856404;
                }
                
                .action-buttons {
                    display: flex;
                    gap: 15px;
                }
                
                .action-buttons .rts-btn {
                    flex: 1;
                    text-align: center;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .action-buttons .btn-primary {
                    background-color: var(--color-primary);
                    color: white;
                }
                
                .action-buttons .btn-secondary {
                    background-color: var(--color-secondary);
                    color: white;
                }
                
                .action-buttons .rts-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
                
                @media (max-width: 768px) {
                    .action-buttons {
                        flex-direction: column;
                    }
                    
                    .section-header .title {
                        font-size: 28px;
                    }
                    
                    .calculation-results {
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default BulkOrderCalculator;
