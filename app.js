const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');

const sequelize = require('./util/database');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync().then(result => {
  console.log(result);
  app.listen(3000);
}).catch(err => console.log(err));


