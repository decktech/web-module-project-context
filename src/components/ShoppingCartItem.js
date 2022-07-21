import React from 'react';

const Item = props => {
	console.log(props.id)

	const handleRemove = (e) => {
		console.log(e.target)
		props.removeItem(e.target.id)
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button id={props.id} onClick={handleRemove}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
