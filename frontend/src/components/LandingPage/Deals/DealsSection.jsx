import React from 'react';
import DealsBanner from './DealsBanner';
import DealsMenu from './DealsMenu';

const DealsSection = () => (
  <div className="w-full px-4 py-4 box-border">
    <div className="max-w-screen-2xl mx-auto">
      <DealsBanner />
      <div className="h-3" /> {/* Space between banner and menu */}
      <DealsMenu />
    </div>
  </div>
);

export default DealsSection;