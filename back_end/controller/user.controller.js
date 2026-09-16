import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;

    try {
        // Check password
        if (password !== confirmPassword) {
            return res.status(400).json({
                error: "Passwords do not match"
            });
        }

        // Check if user already exists
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                error: "User already exists"
            });
        }
        // has password
        const hasPassword = await bcrypt.hash(password,10)

        // Create new user
        const newUser = new User({
            fullname,
            email,
            password: hasPassword
        });

        // Save user
        await newUser.save();

        return res.status(201).json({
            message: "User created successfully"
        });

    } catch (error) {
        console.log("Signup error:", error);

        return res.status(500).json({
            error: "Creation error",
            message: error.message
        });
    }
};


