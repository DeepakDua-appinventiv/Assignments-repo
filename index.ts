import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import usersModel from './src/models/usersModel';
import postsModel from './src/models/postsModel';
import likesModel from './src/models/likesModel';
import followModel from './src/models/followModel';
import commentsModel from './src/models/commentsModel';

import userRoutes from './src/routes/userRoutes';
import postRouter from './src/routes/postRouter';

const app = express();


mongoose.connect('mongodb://localhost:27017/mongo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});
app.use('/api',userRoutes)
app.use('/xyz',postRouter)

const port = 3030; 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  usersModel;
  postsModel;
  likesModel;
  followModel;
  commentsModel;
});