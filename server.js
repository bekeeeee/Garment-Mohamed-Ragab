const mongoose= require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Loads environment variables 
dotenv.config({ path: './config.env' });

// DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

// Server connection
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

