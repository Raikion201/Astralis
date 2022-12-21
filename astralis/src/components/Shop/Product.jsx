import React from 'react'
const Product = ({product,handleAddToCart}) => {
    const Euro = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });
  return (
    <>
                <div className='col-span-1 w-fit'>
                    <img src={product.img} alt="a product" />
                    <div className='flex h-16'>
                    <h1 className=' text-base font-semibold '>{product.name}</h1>
                    <div className='flex-grow'></div>
                    <h1 className=' text-xl font-bold pl-4'>{Euro.format(product.price)}</h1>
                    </div>
                    <button onClick={() => handleAddToCart(product)} class="bg-transparent text-xl mt-1 px-16 py-2 ml-[50%] translate-x-[-50%] hover:bg-red-500 whitespace-nowrap text-red-700 font-semibold hover:text-white  border border-red-500 hover:border-transparent rounded">
                     BUY NOW
                 </button>
                </div>
    
    </>
  )
}

export default Product