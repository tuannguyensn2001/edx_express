import * as token from 'jsonwebtoken';
import config from '~/config/config';

const jwt = {
    generate(payload, time) {
        return token.sign(
            {
                data: payload,
            },
            config.jwt.secretKey,
            {
                expiresIn: time,
            }
        );
    },
    verify(text) {
        return token.verify(text, config.jwt.secretKey);
    },
};

export default jwt;
