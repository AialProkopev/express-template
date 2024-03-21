import { Router } from 'express';
import { CreateUserBodyParams, createUser } from '../controllers/createUser';
import { getAll } from '../controllers/getAll';

export const userRouter = Router();

userRouter.get('/get/all', async (_, res) => {
    const users = await getAll();

    if (!users) {
        return res.status(400).json({
            message: 'Could not get users',
        });
    }

    res.status(200).json(users);
});

userRouter.post('/create', async (req, res) => {
    const body = req.body as CreateUserBodyParams;

    if (!body.name || !body.password) {
        return res.status(400).json({
            error: 'Name and password are required',
        });
    }

    const result = await createUser(body);

    if (!result) {
        return res.status(400).json({
            error: 'Something went wrong',
        });
    }

    return res.status(200).json({
        message: 'User created successfully',
    });
});
