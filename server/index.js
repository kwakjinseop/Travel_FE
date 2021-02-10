const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();
// DB Setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
let db = mongoose.connection;
db.once('open', () => {
  console.log('DB Connected');
});
db.on('error', (err) => {
  console.log('DB Error : ', err);
});

// Login Setting
app.use(session({ secret: 'MySecret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Other Setting
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/users/hello', (req, res) => res.send('Hello World'));
app.get('/users/hello2', (req, res) => res.send('Hello World2'));

// Routes
app.use('/', require('./routes/main'));
app.use('/users', require('./routes/users'));
const port = 5001;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
