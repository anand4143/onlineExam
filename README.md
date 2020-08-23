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

5. npm install --save-dev nodemon
6. npm run debug
7 npm i --save sequelize@6.3.4 mysql2@2.1.0
8. npm i sequelize-cli@6.2.0
9. run sequelize init
10. delete the config folder


