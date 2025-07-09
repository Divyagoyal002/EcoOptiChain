import React from 'react';

const DealsBanner = () => (
    // rounded corner border

  <div className="w-full p-6 flex overflow-hidden shadow rounded-lg">
    {/* Left: Main Deal */}
    <div className="bg-[#009ee3] flex-1 p-6 flex flex-col justify-center min-h-[100px]">
      <div className="text-lg font-bold text-white mb-1">DEALS UP TO 50% OFF</div>
      <div className="text-white text-sm">If it’s hot, it’s here. Don’t miss out.</div>
    </div>
    {/* Right: Walmart+ Deal */}
    <div className="bg-[#ffd600] w-full max-w-[340px] flex flex-col justify-center p-4">
      <div className="flex items-center mb-2">
        <span className="font-bold text-[#0071dc] mr-2 bg-white px-2 py-1 rounded">Walmart</span>
        <span className="font-bold text-[#0071dc]">DEALS</span>
      </div>
      <div className="font-bold text-[#002d58] mb-1">Get 50% off Walmart+</div>
      <div className="text-xs text-[#002d58] mb-2">Save big on an annual plan now.</div>
      <button className="bg-[#0071dc] text-white text-xs font-bold px-3 py-1 rounded">Join Walmart+</button>
    </div>
  </div>
);

export default DealsBanner;