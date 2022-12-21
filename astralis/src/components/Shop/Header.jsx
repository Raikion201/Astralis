import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = ({setIsShowCart,cart}) => {
  return (
    <div className='w-full h-20 relative'>
        <div 
        onClick={() => setIsShowCart(true)}
        className='cursor-pointer mt-6 right-12 absolute'>
        <AiOutlineShoppingCart className="text-[3rem]" />
        {cart.length > 0 && (
          <span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5 ">
            {cart.length}
            </span>
        )}
        </div>
    </div>
  )
}

export default Header