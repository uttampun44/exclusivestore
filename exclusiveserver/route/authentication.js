import express from 'express'
import exclusivestoreUser from '../modals/schema.js';

const authentication = express.Router();

// create account signup
authentication.post("/signup", async(req, res) =>{
    try {
        const {fullname, email, password} = req.body;

        if(!fullname || !email || !password){
              res.status(400).json({ message: 'Missing Field Required'})
            }else{
              const userExists = await exclusivestoreUser.findOne({email: email})

              // check the email is exists or not
              if(userExists){
                 res.status(400).json({ message: 'Email Already Exists' });
              }else{

                // inserting the new users
                const insert_user = new exclusivestoreUser({fullname, email, password})
                const data = await insert_user.save();
                res.status(200).json({Message: 'Form Submit', data})
              console.log(req.body)
              }
            }
    } catch (error) {
     res.status(500).json({
        message: 'Internal Server'
      })
      console.log(error)
    }
  })

  export default authentication