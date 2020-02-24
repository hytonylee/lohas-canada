import React, { useState, useEffect } from 'react';
// import M from 'materialize-css/dist/js/materialize.min.js';
// import PropTypes from 'prop-types';

const AddPostModal = () => {
	return (
		<div id='add-post-modal' className='modal'>
			<div className='modal-content'>
				<h4>Add A Post</h4>
			</div>
			<div className='row'>
				<input type='text' name='title' />
				<label htmlFor='title' className='active'>
					Title
				</label>
			</div>
			<div className='modal-footer'>
				<a href='#!' className='modal-close waves-effect waves blue btn'>
					Enter
				</a>
			</div>
		</div>
	);
};

export default AddPostModal;
