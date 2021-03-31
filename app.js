const express = require('express');

const app = express();

const expressHbs = require('express-handlebars');

app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/',
                                     defaultLayout: 'main-layout',
                                     extname: 'handlebars'}));

app.set('view engine', 'handlebars');
app.set('views', 'views');

const path = require('path');

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
