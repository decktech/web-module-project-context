import React, { useContext } from 'react';

import CartContex from '../contexts/CartContext';
import ProductContext from '../contexts/ProductContext';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const cart = useContext(CartContex)
	const {removeItem} = useContext(ProductContext)
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item removeItem={removeItem} key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
