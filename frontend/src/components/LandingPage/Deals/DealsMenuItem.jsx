import React from 'react';

const DealsMenuItem = ({ icon, label, selected }) => (
  <div
    className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg cursor-pointer transition
      ${selected ? 'bg-[#e6f4ff] border-2 border-[#009ee3]' : 'bg-[#f5f6fa] border-2 border-transparent'}
      hover:border-[#009ee3]`}
    style={{ minWidth: 80, minHeight: 80 }}
  >
    {/* Icon or image */}
    <div className="mb-2 flex items-center justify-center" style={{ height: 36 }}>
      {icon}
    </div>
    {/* Label */}
    <span className="text-xs text-center font-medium">{label}</span>
  </div>
);

export default DealsMenuItem;