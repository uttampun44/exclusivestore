import express from 'express';
import dotenv from 'dotenv'

const app = express();

dotenv.config();

const port = process.env.PORT


app.get('/', (req, res) =>{
    if(res.status(200)){
        res.json({
            'message': 'success'
        })
    }
})

app.listen(port, (req, res) => console.log(`The port is running on ${port}`))