import repository from './repository';
import hash from '~/packages/hash';
import jwt from '~/packages/jwt';
import config from '~/config/config';
import user from '~/models/user';

const service = {
    async register({ email, password, username }) {
        const checkExisted = await repository.findByEmail(email);

        if (!!checkExisted) {
            throw new Error('Email existed');
        }

        return repository.create({ email, password, username });
    },
    async login(email, password) {
        const user = await repository.findByEmail(email);

        const check = hash.compare(password, user.password);

        if (!check) throw new Error('Email or password not valid');

        const accessToken = jwt.generate(
            { id: user.id },
            config.jwt.accessTime
        );
        const refreshToken = jwt.generate(
            { id: user.id },
            config.jwt.refreshTime
        );

        return {
            accessToken,
            refreshToken,
            user,
        };
    },
    getMe(userId) {
        return repository.findById(userId);
    },
};

export default service;
