import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRouter.js'

const app = express();
dotenv.config({path : "./config/config.env"})

// app.use(cors({
//     origin : [process.env.FRONTEND_URL],
//     methods:["POST"],
//     credentials:true,
//  })
// );
app.use(cors({
    origin: process.env.FRONTEND_URL, 
    methods: ["POST"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"], // Explicitly allow necessary headers
}));

console.log(process.env.FRONTEND_URL)
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/v1/reservation', reservationRouter)

dbConnection();

app.use(errorMiddleware)
export default app;