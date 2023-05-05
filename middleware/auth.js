jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, customer) => {
    if (err) {
        const message = 'There was a problem logging in.';
        const error = new Error(message);
        return res.status(403).json({
        type: 'UnauthorizedError',
        code: 'customerAuthorization',
        message,
        error: fn.getFullErrorObj(error),
        });
    }

    req.customer = customer;
    return next();
});