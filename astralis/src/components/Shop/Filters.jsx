import React from 'react'
import { useEffect } from 'react';

const Euro = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});
const categories = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'PRO WEAR',
  },
  {
    id: 3,
    name: 'MERCHANDISE',
  },
  {
    id: 4,
    name: 'ACCESSORIES',
  },
];

const prices = [
  {
    id: 1,
    name: `Less than ${Euro.format(20)}`,
    value: 'lt20',
  },
  {
    id: 2,
    name: `From ${Euro.format(20)} to ${Euro.format(50)}`,
    value: 'btw2050',
  },
  {
    id: 3,
    name: `Greater than ${Euro.format(50)}`,
    value: 'gt50',
  },
  {
    id: 4,
    name: 'Clear Filters',
    value: 'clear',
  },
];

const Filters = (
  {
    activeCategory,
    setActiveCategory,
    activePrice,
    setActivePrice,
    products,
    setFilters,
    setCurrentPage
  }
) => { useEffect(() => {
  if (activeCategory === 'All' && activePrice === '') {
    setFilters(products);
    return;
  }

  const filterCategory = products.filter((item) =>
    activeCategory === 'All' ? item : item.category === activeCategory
  );

  const filterPrice = filterCategory.filter((item) =>
    activePrice === ''
      ? item
      : activePrice === 'lt20'
      ? item.price < 20
      : activePrice === 'btw2050'
      ? item.price >= 20 && item.price <= 50
      : item.price > 50
  );
  setCurrentPage(1);
  setFilters(filterPrice);
}, [activeCategory, activePrice, products, setFilters]);

const handleCategory = (name) => {
  setActiveCategory(name);
} 
return (
  <div>
    <div>
      {categories.map((item) => (
        <button
          onClick={() =>{
            handleCategory(item.name)
            }}
          key={item.id}
          className={`bg-white border-2 hover:bg-red-500 hover:text-white  transition-all duration-500 border-gray-500 rounded-lg px-4 py-2 mr-2 mb-2 ${
            activeCategory === item.name && 'bg-red-500 text-white '
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
    <div>
      {prices.map((item) => (
        <button
          key={item.id}
          onClick={() =>
            item.value !== 'clear'
              ? setActivePrice(item.value)
              : setActivePrice('')
          }
          className={`bg-white border-2 hover:bg-lime-500 hover:text-white  transition-all duration-500 border-gray-500 rounded-lg px-4 py-2 mr-2 mb-2 ${
            activePrice === item.value && 'bg-lime-500 text-white'
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  </div>
);
};


export default Filters