import express from 'express';
import dotenv from 'dotenv'
import routes from './routes/productroutes.js'
import cors from 'cors';


const app = express();

dotenv.config();

const port = process.env.PORT


// middleware
app.use("/images", express.static('public/images/'));
app.use(express.json());
app.use(cors())
app.use(routes);


app.get('/', (req, res) =>{
    if(res.status(200)){
        res.json({
            'message': 'checking'
        })
    }

})

app.listen(port, (req, res) => console.log(`The port is running on ${port}`))