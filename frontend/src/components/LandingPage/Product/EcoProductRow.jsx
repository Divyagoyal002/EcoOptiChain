// Example usage in a parent component
import React, { useState }  from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const products = [
  {
    image: 'https://i5.walmartimages.com/seo/Earth-Breeze-Laundry-Detergent-Sheets-Fresh-Scent-No-Plastic-Jug-60-Loads-30-Sheets-Liquidless-Technology_024fcb1a-950c-41e6-8cfa-f0f3dc824886.e24cb4edacdcd743f05946e93c27087b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
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
    image: 'https://i5.walmartimages.com/seo/Natural-Kitchen-Sponges-Eco-Friendly-Compostable-Dish-Sponges-Loofah-Cellulose-Scrubbers-Plastic-Free-Zero-Waste-Biodegradable-Durable-Non-Scratch-Pa_c0223aae-f3f4-44b0-a257-ff9f3f891c1a.facc5ba36e48db98edb4f289966a4c6e.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
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
    image: 'https://i5.walmartimages.com/seo/Glass-Drinking-Cup-Portable-Straw-Bottle-Silica-Gel-Mason-Jars-with-Handle-Travel_5e2d61ea-3aa0-4c20-9fd3-20e6d91a9b9e.ea6a4cb3ed6bc440dde418ee2e887141.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
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
  {
    image: 'https://i5.walmartimages.com/seo/NATUREZWAY-Bamboo-Disposable-Paper-Towels_3550dc12-ebcd-4ff6-929d-8cb1d62435f4.2959ab6d20cdb739b25f70032467bc46.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: '$24.99',
    title: 'NATUREZWAY Bamboo Paper Towels',
    description: 'Made from fast-growing bamboo fiber, biodegradable.',
    rating: 4.6,
    reviews: 120,
    isAvailable: true,
    isFavorite: false,
    isDeal: true,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/Glass-Food-Storage-Containers-Bamboo-Lids-Eco-Friendly-Meal-Prep-Glass-Containers-Reusable-BPA-Free-Bento-Lunch-Box-Airtight-Plastic-Free-Glass-Conta_8a9ef8fb-eeac-4915-8538-bc14251a340e.a122762e23748c8ccd03212db826587c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: '$29.99',
    title: 'Glass Food Storage Containers with Bamboo Lids',
    description: 'Borosilicate glass, airtight, no chemical leaching.',
    rating: 4.8,
    reviews: 145,
    isAvailable: true,
    isFavorite: true,
    isDeal: false,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/Full-Circle-Tidy-Organic-Cotton-Kitchen-Scrubbing-Dish-Cloths-12-x-12-Set-of-3-Multicolor_854a53dc-e3ce-47bd-8389-cecc9256ecab.c199fe8198b3205ae802ce678d83bb22.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: '$12.99',
    title: 'Full Circle Organic Cotton Cleaning Cloths',
    description: '100% organic cotton, naturally antibacterial.',
    rating: 4.5,
    reviews: 88,
    isAvailable: true,
    isFavorite: false,
    isDeal: true,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/Small-Spaces-Air-Freshener-for-Home-Lavender-Scent-6-Pack_a4b6a16f-cc84-4aa1-b041-b8d51c707976.2132e8fc63c48c8da69498464f6a3243.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: '$8.99',
    title: 'Leodye Eco-Friendly Air Freshener',
    description: 'Natural essential oils, no harmful chemicals.',
    rating: 4.3,
    reviews: 67,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/WUSI-Compostable-Trash-Bags-2-6-Gallon-Small-Disposable-Compost-Bags-100-Count-Garbage-Bags-Made-PSM-Starch-Based-Kitchen-Bathroom-Bedroom-Office-Tra_5a497218-562a-4197-9929-3aaf775f83f9.59cfd7a944cbbb17cd28da50c9fb261d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: '$19.99',
    title: 'WUSI Compostable Trash Bags',
    description: 'Plant-based materials, compostable in 90 days.',
    rating: 4.4,
    reviews: 156,
    isAvailable: true,
    isFavorite: true,
    isDeal: true,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
  {
    image: 'https://i5.walmartimages.com/seo/PLUS-ULTRA-Bamboo-Toothbrush-Soft-Bristle-All-Natural-Toothbrush-Hello-Gorgeous-Handle_86e868ab-2567-4078-bd94-2d69c2f0fc8d.80ff2ae8ff2ac61142ebb3e2bb587ead.webp?odnHeight=640&odnWidth=640&odnBg=FFFFFF',
    price: '$6.99',
    title: 'PLUS ULTRA Bamboo Toothbrush',
    description: 'Biodegradable bamboo handle, soft bristles.',
    rating: 4.6,
    reviews: 203,
    isAvailable: true,
    isFavorite: false,
    isDeal: false,
    isOption: false,
    pickup: 'Today',
    delivery: 'Tomorrow',
  },
];

const PRODUCTS_PER_PAGE = 6;

const EcoProductRow = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const pageProducts = products.slice(start, end);

  return (
    <>
      {/* Eco-Friendly Products Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          🌱 Earth-Conscious Choices
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Make a positive impact with sustainable alternatives that care for both you and our planet - because every green choice matters
        </p>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
      </div>
      
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

export default EcoProductRow;