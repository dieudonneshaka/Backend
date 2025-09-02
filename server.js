// server.js or index.js
import express from 'express';
import { connectDB } from './config/db.js';


const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

connectDB(); 

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.post('/person', express.json(), (req, res) => {
  console.log(req.body);
  res.send('person added');
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
