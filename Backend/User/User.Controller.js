import UserModel from './User.Model.js';
import bicrypt from 'bcryptjs';

export const SignUp = async (req, res) => {
    try {
        const { FullName, Email, Password } = req.body;

        if (!FullName || !Email || !Password) {
            return res.status(400).json({ message: 'FullName, Email and Password are required' });
        }

        const existing = await UserModel.findOne({ Email });
        if (existing) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bicrypt.hash(Password, 10);

        const newUser = new UserModel({
            FullName,
            Email,
            password: hashedPassword,
        });
        const saved = await newUser.save();
        return res.status(201).json({
            message: 'User created successfully',
            user: {
                _id: saved._id,
                FullName: saved.FullName,
                Email: saved.Email,
            },
        });
    } catch (error) {
        console.error('Error:', error.message || error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const LogIn = async (req, res) => {
    try {
        const {Email, Password} = req.body;
        const user = await UserModel.findOne({ Email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Username or Password' });
        }
        const IsMatch = await bicrypt.compare(Password, user.password);
        if (!IsMatch) {
            return res.status(400).json({ message: 'Invalid Username or Password' });
        }
        return res.status(200).json({
            message: 'Login Successful',
            user: { _id: user._id, FullName: user.FullName, Email: user.Email },
        });
    } catch (error) {
        console.log("Error :"+ error.message);
        return res.status(500).json({message: 'Internal Server Error'});
    }
}