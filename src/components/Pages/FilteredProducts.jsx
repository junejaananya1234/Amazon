// import React, { useContext } from 'react';
// import { ecomContext } from '../../App';

// function FilteredProducts() {
//     const { filteredProduct, handleAddtoCart } = useContext(ecomContext);

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <div className="w-full max-w-4xl p-4">
//             <div className="hidden md:block bg-white rounded-sm shadow-md text-black mt-2 md:mt-0">
//           </div>
//                 <div className="flex flex-col space-y-6">
//                     {filteredProduct && filteredProduct.length > 0 ? (
//                         filteredProduct.map(product => (
//                             <div key={product.asin} className="bg-white p-4 shadow-md rounded-lg flex flex-col md:flex-row items-center">
//                                 <img src={product.product_photo} alt={product.product_title} className="w-40 h-40 md:w-56 md:h-56 object-cover mb-4 md:mb-0 md:mr-4" />
//                                 <div className="flex flex-col flex-grow">
//                                     <h3 className="text-lg font-semibold mb-2">{product.product_title}</h3>
//                                     <p className="text-xl font-bold text-gray-900 mb-2">{product.product_price}</p>
//                                     <p className="text-gray-600 mb-2">Rating: ⭐{product.product_star_rating} ({product.product_num_ratings} reviews)</p>
//                                     <p className="text-gray-600 mb-2">{product.product_description}</p>
//                                     <p className="text-gray-600 mb-2">Volumn: {product.sales_volume}</p>
//                                     <p className="text-gray-600 mb-2">Availability: {product.delivery}</p>
//                                     <button 
//                                         onClick={(e) => handleAddtoCart(e, filteredProduct)}
//                                         className="w-1/3 font-semibold bg-[#f3a847] text-white px-4 py-2 rounded hover:bg-[#e69730] transition duration-300"
//                                     >
//                                         Add to Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-center">No products found</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FilteredProducts;



import React, { useContext } from 'react';
import { ecomContext } from '../../App';

function FilteredProducts() {
    const { filteredProduct, handleAddtoCart } = useContext(ecomContext);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
                {filteredProduct && filteredProduct.length > 0 ? (
                    filteredProduct.map(product => (
                        <div key={product.asin} className="bg-white p-4 shadow-md rounded-lg flex flex-col mb-4 sm:w-full lg:w-auto">
                            <img src={product.product_photo} alt={product.product_title} className="w-full h-60 object-cover mb-4 rounded-lg mx-auto" />
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-lg font-bold mb-2">{product.product_title}</h3>
                                <p className="text-lg font-semibold text-gray-900 mb-2">Price: {product.product_price}</p>
                                <p className="text-sm text-gray-600 mb-2">Rating: ⭐{product.product_star_rating} ({product.product_num_ratings} reviews)</p>
                                <p className="text-sm text-gray-600 line-clamp-3">{product.product_description}</p>
                                <p className="text-sm text-gray-600">Volume: {product.sales_volume}</p>
                                <button 
                                    onClick={(e) => handleAddtoCart(e, product)}
                                    className="mt-2 w-full max-w-xs font-semibold bg-[#f3a847] text-white px-4 py-2 rounded hover:bg-[#e69730] transition duration-300"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No products found</p>
                )}
            </div>

            {/* Custom CSS for screens less than 440px */}
            <style>
                {`
                @media (max-width: 439px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default FilteredProducts;
















