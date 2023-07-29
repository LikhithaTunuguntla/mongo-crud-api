import express from 'express'

import connectDB from './config/db.js'
import { connect } from 'mongoose';

import route from './app/routes/note_routes.js';

const app = express();


const port = process.env.PORT || '3000'

const Database_Url = process.env.Database_Url ||"mongodb+srv://likhithabatchu0697:LikhiRakhi@cluster0.ig79bto.mongodb.net/"

//Database Connection
connectDB(Database_Url);

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/',route);

app.listen(port);