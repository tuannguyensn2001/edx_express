import express from 'express';
import auth from '~/modules/auth/transport';
import wrapperInterceptor from '~/interceptor/wrapper';
import middleware from '~/middlewares';

const router = express.Router();

router.post('/v1/auth/register', wrapperInterceptor(auth.register));
router.post('/v1/auth/login', wrapperInterceptor(auth.login));
router.get('/v1/auth/me', middleware.auth, wrapperInterceptor(auth.getMe));

export default router;
