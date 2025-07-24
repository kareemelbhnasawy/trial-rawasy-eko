"use client";
import React, { useState, useEffect } from 'react';

interface ProjectDimensions {
    length: number;
    width: number;
    height: number;
    thickness?: number;
}

interface MaterialRequirement {
    material: string;
    quantity: number;
    unit: string;
    description: string;
    wasteFactor: number;
    totalWithWaste: number;
}

const MaterialQuantityEstimator = () => {
    const [projectType, setProjectType] = useState<string>('');
    const [dimensions, setDimensions] = useState<ProjectDimensions>({
        length: 0,
        width: 0,
        height: 0,
        thickness: 0
    });
    const [estimates, setEstimates] = useState<MaterialRequirement[]>([]);

    const projectTypes = [
        { value: 'foundation', label: 'Concrete Foundation' },
        { value: 'wall', label: 'Block/Brick Wall' },
        { value: 'slab', label: 'Concrete Slab' },
        { value: 'driveway', label: 'Driveway' },
        { value: 'deck', label: 'Wooden Deck' },
        { value: 'roof', label: 'Roofing' }
    ];

    const calculateMaterials = () => {
        if (!projectType || !dimensions.length || !dimensions.width) return;

        let requirements: MaterialRequirement[] = [];
        const area = dimensions.length * dimensions.width;
        const volume = area * (dimensions.height || 0);

        switch (projectType) {
            case 'foundation':
                // Concrete foundation calculations
                const concreteYards = volume / 27; // Convert cubic feet to cubic yards
                const rebarPieces = Math.ceil((dimensions.length + dimensions.width) * 2 / 20); // #4 rebar 20ft pieces
                const formBoards = Math.ceil((dimensions.length + dimensions.width) * 2 * dimensions.height / 8); // 2x8 boards

                requirements = [
                    {
                        material: 'Ready-Mix Concrete',
                        quantity: concreteYards,
                        unit: 'cubic yards',
                        description: 'Concrete for foundation',
                        wasteFactor: 0.1,
                        totalWithWaste: concreteYards * 1.1
                    },
                    {
                        material: 'Steel Rebar #4',
                        quantity: rebarPieces,
                        unit: 'pieces (20ft)',
                        description: 'Reinforcement bars',
                        wasteFactor: 0.05,
                        totalWithWaste: rebarPieces * 1.05
                    },
                    {
                        material: 'Form Boards 2x8',
                        quantity: formBoards,
                        unit: 'linear feet',
                        description: 'Concrete forms',
                        wasteFactor: 0.15,
                        totalWithWaste: formBoards * 1.15
                    }
                ];
                break;

            case 'wall':
                const blocks = Math.ceil(area / 1.33); // Standard 8x8x16 block covers ~1.33 sq ft
                const mortarBags = Math.ceil(blocks / 50); // 1 bag per 50 blocks approximately
                const rebarVertical = Math.ceil(dimensions.length / 4); // Vertical rebar every 4 feet

                requirements = [
                    {
                        material: 'Concrete Blocks 8"',
                        quantity: blocks,
                        unit: 'blocks',
                        description: 'Standard concrete blocks',
                        wasteFactor: 0.05,
                        totalWithWaste: blocks * 1.05
                    },
                    {
                        material: 'Masonry Mortar',
                        quantity: mortarBags,
                        unit: 'bags (80lb)',
                        description: 'Mortar for laying blocks',
                        wasteFactor: 0.1,
                        totalWithWaste: mortarBags * 1.1
                    },
                    {
                        material: 'Vertical Rebar #4',
                        quantity: rebarVertical,
                        unit: 'pieces (10ft)',
                        description: 'Vertical reinforcement',
                        wasteFactor: 0.05,
                        totalWithWaste: rebarVertical * 1.05
                    }
                ];
                break;

            case 'slab':
                const slabVolume = area * (dimensions.thickness || 4) / 12 / 27; // Convert to cubic yards
                const wireesh = Math.ceil(area / 150); // Wire mesh sheets
                const vapor = Math.ceil(area / 200); // Vapor barrier rolls

                requirements = [
                    {
                        material: 'Ready-Mix Concrete',
                        quantity: slabVolume,
                        unit: 'cubic yards',
                        description: 'Concrete for slab',
                        wasteFactor: 0.1,
                        totalWithWaste: slabVolume * 1.1
                    },
                    {
                        material: 'Wire Mesh 6x6',
                        quantity: wireesh,
                        unit: 'sheets (5x10ft)',
                        description: 'Reinforcement mesh',
                        wasteFactor: 0.1,
                        totalWithWaste: wireesh * 1.1
                    },
                    {
                        material: 'Vapor Barrier',
                        quantity: vapor,
                        unit: 'rolls (200 sq ft)',
                        description: 'Moisture protection',
                        wasteFactor: 0.05,
                        totalWithWaste: vapor * 1.05
                    }
                ];
                break;

            case 'deck':
                const deckBoards = Math.ceil(area / 7.5); // 5/4 x 6 deck boards
                const joists = Math.ceil(dimensions.length / 1.33); // Joists 16" on center
                const posts = Math.ceil((dimensions.length / 8) * (dimensions.width / 8)); // Posts every 8 feet

                requirements = [
                    {
                        material: 'Deck Boards 5/4"x6"',
                        quantity: deckBoards,
                        unit: 'linear feet',
                        description: 'Pressure treated deck boards',
                        wasteFactor: 0.1,
                        totalWithWaste: deckBoards * 1.1
                    },
                    {
                        material: 'Floor Joists 2x8',
                        quantity: joists,
                        unit: 'pieces (12ft)',
                        description: 'Support joists',
                        wasteFactor: 0.05,
                        totalWithWaste: joists * 1.05
                    },
                    {
                        material: 'Support Posts 4x4',
                        quantity: posts,
                        unit: 'pieces (8ft)',
                        description: 'Vertical support posts',
                        wasteFactor: 0.05,
                        totalWithWaste: posts * 1.05
                    }
                ];
                break;

            default:
                requirements = [];
        }

        setEstimates(requirements);
    };

    useEffect(() => {
        if (projectType && dimensions.length && dimensions.width) {
            calculateMaterials();
        }
    }, [projectType, dimensions]);

    const handleDimensionChange = (field: keyof ProjectDimensions, value: number) => {
        setDimensions(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="material-estimator-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="estimator-area">
                            <div className="section-header text-center">
                                <h2 className="title">Material Quantity Estimator</h2>
                                <p className="subtitle">Get accurate material estimates for your construction project</p>
                            </div>

                            <div className="estimator-form-area">
                                <div className="row g-4">
                                    <div className="col-lg-4">
                                        <div className="estimator-form">
                                            <div className="form-group">
                                                <label htmlFor="projectType">Project Type</label>
                                                <select 
                                                    id="projectType" 
                                                    className="form-control"
                                                    value={projectType}
                                                    onChange={(e) => setProjectType(e.target.value)}
                                                >
                                                    <option value="">Select project type...</option>
                                                    {projectTypes.map((type, index) => (
                                                        <option key={index} value={type.value}>
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="length">Length (feet)</label>
                                                <input
                                                    type="number"
                                                    id="length"
                                                    className="form-control"
                                                    min="0"
                                                    step="0.1"
                                                    value={dimensions.length || ''}
                                                    onChange={(e) => handleDimensionChange('length', parseFloat(e.target.value) || 0)}
                                                    placeholder="Enter length"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="width">Width (feet)</label>
                                                <input
                                                    type="number"
                                                    id="width"
                                                    className="form-control"
                                                    min="0"
                                                    step="0.1"
                                                    value={dimensions.width || ''}
                                                    onChange={(e) => handleDimensionChange('width', parseFloat(e.target.value) || 0)}
                                                    placeholder="Enter width"
                                                />
                                            </div>

                                            {(projectType === 'foundation' || projectType === 'wall') && (
                                                <div className="form-group">
                                                    <label htmlFor="height">Height (feet)</label>
                                                    <input
                                                        type="number"
                                                        id="height"
                                                        className="form-control"
                                                        min="0"
                                                        step="0.1"
                                                        value={dimensions.height || ''}
                                                        onChange={(e) => handleDimensionChange('height', parseFloat(e.target.value) || 0)}
                                                        placeholder="Enter height"
                                                    />
                                                </div>
                                            )}

                                            {projectType === 'slab' && (
                                                <div className="form-group">
                                                    <label htmlFor="thickness">Thickness (inches)</label>
                                                    <input
                                                        type="number"
                                                        id="thickness"
                                                        className="form-control"
                                                        min="0"
                                                        step="0.5"
                                                        value={dimensions.thickness || ''}
                                                        onChange={(e) => handleDimensionChange('thickness', parseFloat(e.target.value) || 0)}
                                                        placeholder="Enter thickness (e.g., 4)"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-lg-8">
                                        {estimates.length > 0 && (
                                            <div className="estimation-results">
                                                <h4 className="results-title">Material Requirements</h4>
                                                <p className="project-summary">
                                                    Project: {projectTypes.find(p => p.value === projectType)?.label}<br/>
                                                    Dimensions: {dimensions.length}' × {dimensions.width}'
                                                    {dimensions.height ? ` × ${dimensions.height}'` : ''}
                                                    {dimensions.thickness ? ` (${dimensions.thickness}" thick)` : ''}
                                                </p>
                                                
                                                <div className="materials-table">
                                                    <div className="table-header">
                                                        <div className="col-material">Material</div>
                                                        <div className="col-quantity">Base Qty</div>
                                                        <div className="col-waste">Waste</div>
                                                        <div className="col-total">Total Needed</div>
                                                        <div className="col-unit">Unit</div>
                                                    </div>
                                                    
                                                    {estimates.map((estimate, index) => (
                                                        <div key={index} className="table-row">
                                                            <div className="col-material">
                                                                <strong>{estimate.material}</strong>
                                                                <small>{estimate.description}</small>
                                                            </div>
                                                            <div className="col-quantity">
                                                                {estimate.quantity.toFixed(1)}
                                                            </div>
                                                            <div className="col-waste">
                                                                {(estimate.wasteFactor * 100).toFixed(0)}%
                                                            </div>
                                                            <div className="col-total">
                                                                <strong>{estimate.totalWithWaste.toFixed(1)}</strong>
                                                            </div>
                                                            <div className="col-unit">
                                                                {estimate.unit}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="estimation-notes">
                                                    <h5>Important Notes:</h5>
                                                    <ul>
                                                        <li>Estimates include standard waste factors for each material type</li>
                                                        <li>Always verify calculations with a professional contractor</li>
                                                        <li>Local building codes may require different specifications</li>
                                                        <li>Consider ordering 5-10% extra for unforeseen requirements</li>
                                                    </ul>
                                                </div>

                                                <div className="action-buttons mt-4">
                                                    <button className="rts-btn btn-primary radious-sm">
                                                        Add to Cart
                                                    </button>
                                                    <button className="rts-btn btn-secondary radious-sm ml-3">
                                                        Get Professional Quote
                                                    </button>
                                                    <button className="rts-btn btn-outline radious-sm ml-3">
                                                        Download Estimate
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {!projectType && (
                                            <div className="select-project-prompt">
                                                <div className="prompt-content">
                                                    <h4>Select a Project Type</h4>
                                                    <p>Choose your project type and enter dimensions to get accurate material estimates.</p>
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
                .material-estimator-wrapper {
                    padding: 80px 0;
                    background-color: #f8f9fa;
                }
                
                .estimator-area {
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
                
                .estimator-form .form-group {
                    margin-bottom: 25px;
                }
                
                .estimator-form label {
                    display: block;
                    margin-bottom: 8px;
                    color: var(--color-heading-1);
                    font-weight: 600;
                }
                
                .estimator-form .form-control {
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #e5e5e5;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.3s ease;
                }
                
                .estimator-form .form-control:focus {
                    outline: none;
                    border-color: var(--color-primary);
                }
                
                .estimation-results {
                    background-color: var(--color-white);
                    padding: 30px;
                    border-radius: 12px;
                    border: 1px solid #e5e5e5;
                }
                
                .results-title {
                    color: var(--color-heading-1);
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                
                .project-summary {
                    background-color: #f8f9fa;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 25px;
                    color: var(--color-body);
                    line-height: 1.6;
                }
                
                .materials-table {
                    border: 1px solid #e5e5e5;
                    border-radius: 8px;
                    overflow: hidden;
                    margin-bottom: 25px;
                }
                
                .table-header {
                    background-color: var(--color-primary);
                    color: white;
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
                    padding: 15px;
                    font-weight: 600;
                }
                
                .table-row {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
                    padding: 15px;
                    border-bottom: 1px solid #e5e5e5;
                    align-items: center;
                }
                
                .table-row:last-child {
                    border-bottom: none;
                }
                
                .col-material small {
                    display: block;
                    color: var(--color-body);
                    font-size: 12px;
                    margin-top: 4px;
                }
                
                .estimation-notes {
                    background-color: #fff3cd;
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid #ffeaa7;
                    margin-bottom: 25px;
                }
                
                .estimation-notes h5 {
                    color: #856404;
                    margin-bottom: 10px;
                    font-weight: 600;
                }
                
                .estimation-notes ul {
                    color: #856404;
                    margin: 0;
                    padding-left: 20px;
                }
                
                .estimation-notes li {
                    margin-bottom: 5px;
                }
                
                .select-project-prompt {
                    background-color: var(--color-white);
                    padding: 60px 30px;
                    border-radius: 12px;
                    border: 2px dashed #e5e5e5;
                    text-align: center;
                }
                
                .prompt-content h4 {
                    color: var(--color-heading-1);
                    margin-bottom: 15px;
                    font-weight: 600;
                }
                
                .prompt-content p {
                    color: var(--color-body);
                }
                
                .action-buttons {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                }
                
                .action-buttons .rts-btn {
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
                
                .action-buttons .btn-outline {
                    background-color: transparent;
                    color: var(--color-primary);
                    border: 2px solid var(--color-primary);
                }
                
                .action-buttons .rts-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
                
                @media (max-width: 768px) {
                    .table-header,
                    .table-row {
                        grid-template-columns: 1fr;
                        gap: 10px;
                    }
                    
                    .action-buttons {
                        flex-direction: column;
                    }
                    
                    .section-header .title {
                        font-size: 28px;
                    }
                    
                    .estimation-results {
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default MaterialQuantityEstimator;
