import service from './service';

export const register = async (req, res) => {
    return service.register(req.body);
};

const transport = {
    register,
    async login(req, res) {
        const { email, password } = req.body;

        const result = await service.login(email, password);

        return {
            message: 'Login successfully',
            data: result,
        };
    },
    async getMe(req) {
        const userId = 1;
        const result = await service.getMe(userId);
        return {
            message: 'done',
            data: result,
        };
    },
};

export default transport;
