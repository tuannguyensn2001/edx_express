import UnauthorizedError from '~/errors/UnauthorizedError';
import jwt from '~/packages/jwt';

const middleware = {
    async auth(req, res, next) {
        const authorization = req?.headers?.authorization;

        if (!authorization) {
            throw new UnauthorizedError('Unauthorized');
        }

        const split = authorization.split(' ');

        if (split.length !== 2) {
            throw new UnauthorizedError('Unauthorized');
        }

        const [type, token] = split;

        if (type !== 'Bearer') {
            throw new UnauthorizedError('Unauthorized');
        }

        try {
            const payload = jwt.verify(token);

            req.user_id = payload?.data?.id;
            next();
        } catch (e) {
            throw new UnauthorizedError('Unauthorized');
        }
    },
};

export default middleware;
