const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogsRoutes = require('./Routes/blogsRoutes');

//connecting to db
const dbURL= '';
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


//initialize an instance of express with 
const app = express()

//register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/blogs');
  });

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Us'});
});

//BLOGS ROUTES
app.use('/blogs', blogsRoutes);

// 404 page
app.use((req,res) => {
    res.status(404).render('404', {title: 'Page Not Found'});
});
