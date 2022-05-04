const wrapperInterceptor = (func) => {
    return async (req, res, next) => {
        try {
            const result = await func(req, res, next);
            return res.json(result);
        } catch (e) {
            res.sendStatus(500).json({
                message: e.message,
            });
            res.end();
        }
    };
};

export default wrapperInterceptor;
