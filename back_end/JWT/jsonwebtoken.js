import jwt from 'jsonwebtoken';


const genarateToken = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'1d'});
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

}
export default genarateToken

