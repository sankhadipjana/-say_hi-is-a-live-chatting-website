import jwt from 'jsonwebtoken';


const genarateToken = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'10d'});
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        maxAge: 10 * 24 * 60 * 60 * 1000 // 10 days
    });

}
export default genarateToken

