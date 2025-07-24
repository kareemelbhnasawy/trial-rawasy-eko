import React from 'react';
import HeaderOne from '@/components/header/HeaderOne';
import FooterOne from '@/components/footer/FooterOne';
import BulkOrderCalculator from '@/components/calculator/BulkOrderCalculator';
import MaterialQuantityEstimator from '@/components/calculator/MaterialQuantityEstimator';
import RFQSystem from '@/components/rfq/RFQSystem';

export default function CalculatorsPage() {
  return (
    <div className="calculators-page">
      <HeaderOne />
      
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-content text-center">
                <h1 className="page-title">Construction Calculators & Tools</h1>
                <p className="page-subtitle">
                  Professional tools to help estimate materials, calculate costs, and request quotes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BulkOrderCalculator />
      <MaterialQuantityEstimator />
      <RFQSystem />
      
      <FooterOne />

      <style jsx>{`
        .page-header {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          padding: 100px 0 80px;
          color: white;
        }
        
        .page-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
          color: white;
        }
        
        .page-subtitle {
          font-size: 18px;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .page-title {
            font-size: 32px;
          }
          
          .page-header {
            padding: 80px 0 60px;
          }
        }
      `}</style>
    </div>
  );
}
