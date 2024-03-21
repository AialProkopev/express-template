import { PrismaClient } from '@prisma/client';

export interface CreateUserBodyParams {
    name: string;
    password: string;
    role?: Role;
}

enum Role {
    Admin = 'admin',
    User = 'user',
}

const prisma = new PrismaClient();

export const createUser = async (params: CreateUserBodyParams) => {
    const { name, password, role } = params;

    try {
        const res = await prisma.user.create({
            data: {
                name,
                password,
                role,
            },
        });

        return res;
    } catch (error) {
        console.error(error);
    }
};
