    const jwt = require('jsonwebtoken');
    const dotenv=require('dotenv');
    dotenv.config();
     
    const generateTokenandCookie = (userID, res) => {
        const token = jwt.sign({ userID }, process.env.JWT_SECRET, { expiresIn: "15d" });
         console.log("token is generated:",token);
         
       console.log(process.env.JWT_SECRET);

        res.cookie("jwt-imdb", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
            httpOnly: true, 
            sameSite: "None", 
            secure: false,
            domain:'http://localhost:3000'
        });

        return token;
    }

    module.exports = generateTokenandCookie;
