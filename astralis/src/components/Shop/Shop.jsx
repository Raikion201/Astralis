import React from 'react'
import Product from './Product'
import Header from './Header'
import {data} from './data'
import { useState } from 'react'
import Cart from './Cart'
import Filters from './Filters'
import { Pagination,ConfigProvider } from 'antd'


const Shop = () => {
  const [filters, setFilters] = useState(data);
  const DEFAULT_PAGE = 1;
  const total = filters.length;
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePrice, setActivePrice] = useState('');
  const [isShowCart, setIsShowCart] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const postPerPage = 6;
  const indexOfLastPost = postPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentData = filters.slice(indexOfFirstPost,indexOfLastPost)
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);

      if (findProductInCart) {
        //  If a product is existed in cart,
        // map through the prev item in cart,then check the id which the product contain
        // then add amount for the product
        return prev.map( item => 
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      )}

      // add a new product to cart with amount : 1.
      return [...prev, { ...product, amount: 1 }];
    });
  };
  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      return prev.reduce((cal,{...item}) => {
        if (item.id === id) {
          // if only 1 amount of that item in the cart, return cal is skip the current item,
          // it means remove it from the cart
          if (item.amount === 1) return cal;
            console.log('item', item)
            console.log('{...item}', {...item})
          return [...cal, { ...item, amount: item.amount - 1 }];
        }
          //
        return [...cal, item ];
      }, []);
    });
  };
  return (
    <>
      <Header setIsShowCart={setIsShowCart}
              cart = {cart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
      />
      <div>
      <Filters
      setCurrentPage = {setCurrentPage}
      products={data}
      setFilters={setFilters}
      setActivePrice={setActivePrice}
      activePrice={activePrice}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      />
      </div>
    {/* ITEMS  */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-60 grid-flow-row gap-y-4 px-2 overflow-x-hidden max-w-full '>
      { currentData.map( (product,index) => ( <Product 
              handleAddToCart={handleAddToCart}
              key={index}
              product={product}
      />
      ) )
    }
    </div>
      <div className='flex justify-center mt-8'>
      <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF4500',
        },
      }}
     >
      <Pagination 
      defaultCurrent={DEFAULT_PAGE}
      current={currentPage}
      pageSize={postPerPage}
      onChange= {(page) => setCurrentPage(page)}
      total={total}
      />
      </ConfigProvider>
      </div>
      <div className='h-8'></div> 
      {/* CART */}
      {isShowCart && (  
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
          setIsShowCart={setIsShowCart}
        />
      )}
        </>
  )
}

export default Shop