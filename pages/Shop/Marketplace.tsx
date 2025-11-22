import React, { useState } from 'react';
import { PRODUCTS } from '../../constants';
import { ShoppingCart, Star, Filter } from 'lucide-react';

const Marketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Devices', 'Supplies', 'Wellness', 'Medicines'];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Medical Store</h1>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="relative inline-block text-left">
                    <div className="flex items-center bg-white rounded-lg border border-slate-300 px-4 py-2">
                        <Filter className="h-4 w-4 mr-2 text-slate-500" />
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-transparent border-none focus:ring-0 text-sm text-slate-700 font-medium cursor-pointer outline-none"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition border border-slate-200 group">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-slate-200 xl:aspect-w-7 xl:aspect-h-8 relative">
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="h-48 w-full object-cover object-center group-hover:opacity-75 transition"
                        />
                        {!product.inStock && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                Out of Stock
                            </div>
                        )}
                    </div>
                    <div className="p-4">
                        <p className="text-xs text-slate-500 mb-1">{product.category}</p>
                        <h3 className="text-sm font-bold text-slate-900 mb-1 truncate">{product.name}</h3>
                        <div className="flex items-center mb-3">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-slate-600 ml-1">{product.rating}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-slate-900">₹{product.price}</span>
                            <button className="bg-primary-100 text-primary-700 p-2 rounded-full hover:bg-primary-200 transition">
                                <ShoppingCart className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
