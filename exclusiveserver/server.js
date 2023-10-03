import express from 'express';
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

dotenv.config();

const port = process.env.PORT

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log(path.dirname('public/images/aboutheroimage.webp'))
// middleware
app.use(express.json());
app.use(cors())
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) =>{
    if(res.status(200)){
        res.json({
            'message': 'success'
        })
    }

})

app.listen(port, (req, res) => console.log(`The port is running on ${port}`))