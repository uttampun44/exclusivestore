import Jwt from "jsonwebtoken";
import exclusivestoreUser from "../modals/schema.js";
import dotenv from 'dotenv';

dotenv.config();

const secret_key = process.env.SECRET_KEY;

// verify the token
const authenticate = async(req, res, next) =>{

    try {
      const token = req.headers.authorization;

      const verify_token = Jwt.verify(token, secret_key)
      console.log(verify_token);

      const user_id = await exclusivestoreUser.findOne({id: verify_token._id})

      if(!user_id){
        throw new Error("user id not found")
      }
      req.token = token;
      req.user_id = user_id;
      next();

  } catch (error) {
    res.status(401).json({status : "authorization error"})
  }
}
export default authenticate