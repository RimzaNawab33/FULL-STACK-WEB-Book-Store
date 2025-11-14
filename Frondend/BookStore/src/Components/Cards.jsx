import React from 'react'

function Cards({ items }) {
    // console.log(items);
    
  return (
    <>
    <div className="p-3 my-3 mt-4">
    <div className="duration-200 shadow-xl cursor-pointer card w-92 bg-base-100 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border dark:border-slate-700">
       <figure>
    <img
      src={items.image} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {items.name}
      <div className="badge badge-secondary">{items.category}</div>
    </h2>
    <p>{items.tittle}</p>
    <div className="justify-between card-actions">
      <div className="badge badge-outline">${items.price}</div>
      <div className="px-2 py-1 duration-200 border-[2px] rounded-full cursor-pointer hover:bg-pink-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>

    </div>
      
    </>
  )
}

export default Cards;
