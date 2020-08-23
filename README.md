# onlineExam
This is online exam portal
1. Run express --view=pug
2. npm install
3. delete view,routes and public folder
4. delete below line from app.js file
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);
delete res.render('error');


