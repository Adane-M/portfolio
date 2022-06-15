const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./connections/db.js');
const path = require('path');
dotenv.config();
const app = express();

const tasksRouts = require('./routes/db_routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))


app.listen(process.env.PORT || 8080, () => console.log(`running on port : ${process.env.PORT || 8080}`));



app.use('/tasks', tasksRouts);
// app.use('/anotherone', tasksRouts);
app.use('/', express.static(path.join(__dirname, 'Client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Client/build', 'index.html'))
});
