import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';


import contactRoutes from './routes/contact.routes';


import { connectMongoDB } from './config/db';






dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/api/contact', contactRoutes);


const startServer = async () => {
  await connectMongoDB(); 
 

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();
