import React, { Fragment } from 'react';
import Posts from '../posts/Posts';

const Product = () => {
	return (
		<Fragment>
			<div className='container'>
				<Posts postSection='product' />
			</div>
		</Fragment>
	);
};

export default Product;
