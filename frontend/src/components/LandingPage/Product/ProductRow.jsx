// Example usage in a parent component
import React, { useState }  from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const products = [
  {
    image: 'https://i5.walmartimages.com/seo/Great-Value-Chuck-Chicken-Breast-5-oz_1.jpg',
    price: '$1.36',
    unit: '$4.30/lb',
    title: 'Great Value Chunk Chicken Breast, 5 Ounce Can',
    description: '',
    rating: 4.5,
    reviews: 25,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/Tide-Liquid-Laundry-Detergent-Original-107-loads-154-fl-oz_1.jpg',
    price: '$15.99',
    title: 'Tide Liquid Laundry Detergent Original',
    description: '107 loads, 154 fl oz. Powerful stain-fighting formula.',
    rating: 4.8,
    reviews: 320,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/Earth-Breeze-Laundry-Detergent-Sheets-Fresh-Scent-No-Plastic-Jug-60-Loads-30-Sheets-Liquidless-Technology_1.jpg',
    price: '$13.99',
    title: 'Earth Breeze Eco-Friendly Laundry Detergent Sheets',
    description: 'No plastic jug, pre-measured sheets, biodegradable.',
    rating: 4.7,
    reviews: 210,
    isAvailable: true,
    isFavorite: true,
    isDeal: true,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/Scotch-Brite-Non-Scratch-Zero-Scratch-Scrub-Sponges-6-Sponges_1.jpg',
    price: '$4.99',
    title: 'Scotch-Brite Non-Scratch Scrub Sponges',
    description: 'Durable, non-scratch surface, 6 pack.',
    rating: 4.6,
    reviews: 150,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/Natural-Kitchen-Sponges-Eco-Friendly-Compostable-Dish-Sponges-Loofah-Cellulose-Scrubbers-Plastic-Free-Zero-Waste-Biodegradable-Durable-Non-Scratch-Pa_1.jpg',
    price: '$6.99',
    title: 'Twist Biodegradable Loofah Sponges',
    description: '100% biodegradable, natural materials, compostable.',
    rating: 4.5,
    reviews: 80,
    isAvailable: true,
    isFavorite: false,
    isDeal: true,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/Mainstays-24-Ounce-Prismic-Textured-Water-Bottle-Pink_1.jpg',
    price: '$3.99',
    title: 'Mainstays Plastic Water Bottle',
    description: '24-ounce, lightweight, disposable.',
    rating: 4.2,
    reviews: 60,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/Glass-Drinking-Cup-Portable-Straw-Bottle-Silica-Gel-Mason-Jars-with-Handle-Travel_1.jpg',
    price: '$12.99',
    title: 'Glass Drinking Cup with Straw',
    description: 'Reusable, BPA-free, temperature retention.',
    rating: 4.9,
    reviews: 95,
    isAvailable: true,
    isFavorite: true,
    isDeal: false,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full py-6 px-2">
        {pageProducts.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={num => {
          if (num >= 1 && num <= totalPages) setPage(num);
        }}
      />
    </>
  );
};

export default ProductRow;