import React, { Fragment } from 'react';
import Posts from '../posts/Posts';

const Product = () => {
	return (
		<Fragment>
			<div className='container'>
				<Posts page='product' />
			</div>
		</Fragment>
	);
};

export default Product;
