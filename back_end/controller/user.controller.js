import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import genarateToken from "../JWT/jsonwebtoken.js";

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

        // Save user generate token and send response
        await newUser.save();
        if(newUser){    
         genarateToken(newUser._id,res)
        return res.status(201).json({
            message: "User created successfully",newUser
        });
        }

    } catch (error) {
        console.log("Signup error:", error);

        return res.status(500).json({
            error: "Creation error",
            message: error.message
        });
    }
};


export const login = async(req, res) =>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        const  isMatch = await bcrypt.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({
                error: "Invalid email or password"
            });
        }
        genarateToken(user._id,res)
        return res.status(201).json({
            message: "User logged in successfully",user:{
            id:user._id,    
            fullname:user.fullname,
            email:user.email,
            
            }
        })

        
    } catch (error) {
        console.log("Login error:", error);
        return res.status(500).json({
            message: "Login error",
        })
        
    }
    

}


