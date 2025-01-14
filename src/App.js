import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from './contexts/ProductContext';
import CartContex from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};

	const removeItem = id => {
		setCart(cart.filter(item => item.id != id))
		console.log(cart)
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem, removeItem }}>
				<CartContex.Provider value={cart}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<Products  />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</CartContex.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
