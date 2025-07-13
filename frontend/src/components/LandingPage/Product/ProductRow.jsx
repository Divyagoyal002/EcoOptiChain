// Example usage in a parent component
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const products = [
  {
    image:
      "https://i5.walmartimages.com/seo/Tide-Liquid-Laundry-Detergent-Original-107-loads-154-fl-oz_6701c818-9325-4d5b-9564-5a05d682963a.73e71b777e1c9235acff6f9fcd2462b5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: "$15.99",
    title: "Tide Liquid Laundry Detergent Original",
    description: "107 loads, 154 fl oz. Powerful stain-fighting formula.",
    rating: 4.8,
    reviews: 320,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: "Today",
    delivery: "Tomorrow",
  },
  {
    image:
      "https://i5.walmartimages.com/asr/6f55024f-a577-4e80-9894-9d221dffb619.97e8af08c25b3a3a438dda11facedb29.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: "$4.99",
    title: "Scotch-Brite Non-Scratch Scrub Sponges",
    description: "Durable, non-scratch surface, 6 pack.",
    rating: 4.6,
    reviews: 150,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: "Today",
    delivery: "Tomorrow",
  },
  {
    image:
      "https://i5.walmartimages.com/seo/Mainstays-24-Ounce-Prismic-Textured-Water-Bottle-Pink_bd58e536-6d33-4cff-a7ad-01ef5a21472d.e3ac9fb453e6dc16e4912b6ee81fb011.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: "$3.99",
    title: "Mainstays Plastic Water Bottle",
    description: "24-ounce, lightweight, disposable.",
    rating: 4.2,
    reviews: 60,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: "Today",
    delivery: "Tomorrow",
  },
  {
    image:
      "https://i5.walmartimages.com/seo/Bounty-Paper-Towels-Select-a-Size-6-Triple-Rolls_bbf98e96-ead5-4b98-8f5f-f9c8bfcdfa6d.b654ed423dcd07fe8b307d4a23a90be3.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: "$19.99",
    title: "Bounty Paper Towels",
    description: "Select-a-Size, 6 Triple Rolls. High absorbency.",
    rating: 4.7,
    reviews: 480,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: "Today",
    delivery: "Tomorrow",
  },
  {
    image:
      "https://i5.walmartimages.com/seo/Rubbermaid-TakeAlongs-1-Gallon-2-Packs-Red-Large-Rectangular-Plastic-Food-Storage-Containers_f52b4b3a-9c67-4a2a-8895-0ee9ecf18352.a0a32a5d294960552408812707a9ab81.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: "$15.99",
    title: "Rubbermaid TakeAlongs Food Storage",
    description: "1 Gallon containers, stackable plastic storage.",
    rating: 4.4,
    reviews: 230,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: "Today",
    delivery: "Tomorrow",
  },
  {
    image:
      "https://i5.walmartimages.com/seo/S-T-INC-Microfiber-Cleaning-Cloths-5-Pack-Multi-Purpose-Cloths-12-in-x-12-in-Assorted-Colors_98f49aeb-c81e-4493-a43c-cb456337775a.07c11fa29d916d2d37c4be3b7a4b8683.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: "$8.99",
    title: "S-T INC Microfiber Cleaning Cloths",
    description: "5-Pack multi-purpose cloths, lint-free cleaning.",
    rating: 4.3,
    reviews: 180,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: "Today",
    delivery: "Tomorrow",
  },
  {
    image:
      "https://i5.walmartimages.com/seo/Febreze-Air-Freshener-Spray-Odor-Fighting-Room-Spray-Soothe-Restore-8-8oz-2-Count_ff67deca-bf21-465f-b345-ee7da66dd98a.82ff44712a5d33fdc2b489b642c094f2.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: "$5.99",
    title: "Febreze Air Freshener Spray",
    description: "Odor-fighting room spray, 8.8oz, 2-count.",
    rating: 4.5,
    reviews: 340,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: "Today",
    delivery: "Tomorrow",
  },
  {
    image:
      "https://i5.walmartimages.com/seo/Hefty-Strong-Large-Trash-Bags-Black-30-gallon-40-Count_b1fa96a0-fc12-4249-8e1f-126016bf05e4.cdbc721a835b992d270eb36ed258b883.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: "$14.99",
    title: "Hefty Strong Trash Bags",
    description: "30-gallon, 40-count, drawstring closure.",
    rating: 4.6,
    reviews: 290,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: "Today",
    delivery: "Tomorrow",
  },
  {
    image:
      "https://i5.walmartimages.com/seo/Oral-B-Essential-Clean-Toothbrush-Removes-Plaque-Soft-1-Count-for-Adults-Children-3_4ec8b15d-d7ba-403f-892a-0f4db8134a80.81a86ec5592c2aea56f8e3aa7f6fc619.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    price: "$3.49",
    title: "Oral-B Essential Clean Toothbrush",
    description: "Manual toothbrush, soft bristles, plaque removal.",
    rating: 4.4,
    reviews: 150,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: "Today",
    delivery: "Tomorrow",
  },
];

const PRODUCTS_PER_PAGE = 6;

const ProductRow = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const pageProducts = products.slice(start, end);

  return (
    <>
      {/* Regular Products Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          🛒 Popular Picks
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our most trusted everyday essentials - tried, tested, and
          loved by millions of customers worldwide
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full py-6 px-2">
        {pageProducts.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(num) => {
          if (num >= 1 && num <= totalPages) setPage(num);
        }}
      />
    </>
  );
};

export default ProductRow;
