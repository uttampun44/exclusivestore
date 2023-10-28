import express from 'express'
import exclusivestoreUser from '../modals/schema.js';
import bcrypt from 'bcrypt'
import authenticate from '../middleware/authenticate.js';


const authentication = express.Router();

// create account signup
authentication.post("/api/signup", async(req, res) =>{
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


  // login
  authentication.post('/api/login', async(req, res) =>{
    console.log(req.body)
    try {
      const {email, password} = req.body

        if(!email || !password){
          res.status(422).json({error: 'Fill all the details'})
        }else{

         const userExists = await exclusivestoreUser.findOne({email: email});

              // checking if the user exists or not comparing the password with field
           if(userExists){
            const passwordMatch = await bcrypt.compare(password, userExists.password)

             if(!passwordMatch){
              res.status(422).json({Errormessage: 'password not bycrpt'})
             }else{

              // res.status(200).json({Successmessage: 'Login Success'})
              // user token generate and cookies
              const user_token = await userExists.generateAuthtoken();

              res.cookie("user_cookie", user_token, {
                expires:new Date(Date.now() + 6000000),
                httpOnly: true
              })

                const token_result = {
                   userExists,
                   user_token
                }
                res.status(201).json({tokenCreated: 'Token Created', token_result});
                console.log(token_result);
             }
           }
        }

    } catch (error) {
        console.log(error);
    }
  })


  // useraccount routes
authentication.get('/api/useraccount', authenticate, async(req, res) =>{
   res.status(200).json({UserDetails : 'Getting Successfully'});
})
  export default authentication