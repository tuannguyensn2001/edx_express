import User from '~/models/user';
import hash from '~/packages/hash';

const repository = {
    async create({ email, password, username }) {
        return await User.create({
            username,
            email,
            password: hash.generate(password),
        });
    },
    async findByEmail(email) {
        return await User.findOne({
            where: {
                email,
            },
        });
    },
    async findById(id) {
        return await User.findByPk(id);
    },
};

export default repository;
