import React, { useState } from 'react'

const products = [
    { id: 1, name: "Laptop", price: 800, image: "http://via.placeholder.com/150" },
    { id: 1, name: "Laptop", price: 800, image: "http://via.placeholder.com/150" },
    { id: 1, name: "Laptop", price: 800, image: "http://via.placeholder.com/150" }
]

export default function App() {
    const [cart, setCart] = useState([])
}

const addToCart = (product) => {
    setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id)
        if (existing) {
            return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
        }
        return [...prev, { ...product, qty: 1 }]
    })
}

const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
}

return (
    <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">E-Commerce Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
                <div className="border p-4 rounded-lg shadow" key={product.id}>
                    <img src="product.image" alt={product.name} className="w-full h-32 object-cover" />
                    <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                    <p className="text-gray-600">${product.price}</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>

        <h2 className="text-2xl font-bold mt-8">Shopping Cart</h2>
        {cart.length === 0 ? (
            <p className="text-gray 500">Your cart is empty.</p>
        ) : (
            <div className="mt-4">
                {cart.map((item) => (
                    <div className="flex justify-between items-center border-b py-2" key={item.id}>
                        span
                    </div>
                ))}
            </div>
        )}
    </div>
)