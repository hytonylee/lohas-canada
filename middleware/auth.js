const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const token = req.header('x-auth-token');

	// Check if not token
	if (!token) {
		return res.status(401).json({
			msg: 'Missing Token: Authorization denied!'
		});
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Invalid Token: Access denied!' });
	}
};
