// app.mjs
import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './models/index.mjs';
import routes from './routes/index.mjs';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Sync the database
sequelize.sync().then(() => {
  console.log('Database synced');
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
