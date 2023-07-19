import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import usersModel from './src/models/usersModel';
import postsModel from './src/models/postsModel';
import likesModel from './src/models/likesModel';
import followModel from './src/models/followModel';
import commentsModel from './src/models/commentsModel';

const app = express();

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/mongo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});


const port = 3000; 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  usersModel;
  postsModel;
  likesModel;
  followModel;
  commentsModel;
});