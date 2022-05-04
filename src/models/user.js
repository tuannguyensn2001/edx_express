import sequelize from '~/config/database';
import { DataTypes } from 'sequelize';

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
);

User.prototype.toJSON = function () {
    return {
        id: this.id,
        username: this.username,
        email: this.email,
        createdAt: this.created_at,
        updatedAt: this.updated_at,
    };
};

export default User;
