import express from 'express';
import dotenv from 'dotenv'
import routes from './route/productsroute.js'
import cors from 'cors';
import exclusiveStore from './db/database.js';
import authentication from './route/authentication.js';
// import cookieParser from 'cookie-parser';


const app = express();

dotenv.config();

const port = process.env.PORT || 8080;

const backend = process.env.BACKEND_URL || 'http://localhost:8080';

exclusiveStore();
// // middleware
app.use("/images", express.static('public/images/'));
app.use(express.json());
app.use(cors())
app.use(routes);
app.use(authentication);
// app.use(cookieParser);

app.get('/', (req, res) =>{
    if(res.status(200)){
        res.json({
            'message': 'checking'
        })
    }

})

app.listen(port, (req, res) => console.log(`The port is running on ${port}`))