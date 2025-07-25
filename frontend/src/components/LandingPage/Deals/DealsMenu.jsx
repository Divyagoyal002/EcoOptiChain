import React from "react";
import DealsMenuItem from "./DealsMenuItem";

// Example icons/images (replace with your own or use SVGs)
const menuItems = [
  {
    icon: (
      <img
        src="https://www.shutterstock.com/image-vector/hot-deals-fire-vector-icon-600nw-2333316921.jpg"
        alt="Deals"
        className="h-7"
      />
    ),
    label: "Shop all deals",
    selected: true,
  },
  {
    icon: (
      <span className="bg-white rounded px-2 py-1 font-bold text-[#002d58] border border-[#e0e0e0] text-xs">
        Shop all
      </span>
    ),
    label: "Shop all Toy Deals",
  },
  {
    icon: (
      <span className="bg-white rounded px-2 py-1 font-bold text-[#002d58] border border-[#e0e0e0] text-xs">
        Get it today
      </span>
    ),
    label: "Get it today",
  },
  {
    icon: (
      <span className="bg-white rounded px-2 py-1 font-bold text-[#002d58] border border-[#e0e0e0] text-xs">
        Under $10
      </span>
    ),
    label: "Toy deals under $10",
  },
  {
    icon: (
      <img
        src="https://i.imgur.com/0y8Ftya.png"
        alt="Preschool toys"
        className="h-7"
      />
    ),
    label: "Preschool toys",
  },
  {
    icon: (
      <img src="https://png.pngtree.com/png-vector/20231014/ourmid/pngtree-cute-pink-doll-png-image_10294333.png" alt="Dolls" className="h-7" />
    ),
    label: "Dolls & dollhouses",
  },
  {
    icon: (
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png" alt="Lego" className="h-7" />
    ),
    label: "Lego & building sets",
  },
  {
    icon: (
      <img
        src="https://www.shutterstock.com/image-photo/bangkok-thailand-march-27-2016-600nw-2470443229.jpg"
        alt="Action figures"
        className="h-7"
      />
    ),
    label: "Action figures",
  },
  {
    icon: (
      <img
        src="https://i.pinimg.com/736x/fd/df/33/fddf3348687c613613bd514be800c3ec.jpg"
        alt="Kids bikes"
        className="h-7"
      />
    ),
    label: "Kids bikes",
  },
];

const DealsMenu = () => (
  <div className="w-screen max-w-none bg-white py-3 px-2 flex overflow-x-auto border-b border-[#009ee3] relative left-1/2 right-1/2 -mx-[50vw] ml-[-50vw] mr-[-50vw]">
    <div className="flex w-full justify-center gap-4">
      {menuItems.map((item, idx) => (
        <DealsMenuItem
          key={idx}
          icon={item.icon}
          label={item.label}
          selected={item.selected}
        />
      ))}
    </div>
  </div>
);

export default DealsMenu;
