const Blog = require('../models/blogs');

const blog_index = (req, res)=>{
    Blog.find()
      .then((result) => {
        res.render('index', { title: 'All blogs', blogs: result});
      })
      .catch((err) => {
        console.log(err);
      })
};

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then((result) => {
        res.render('details', {blog: result, title: 'Blog Details'})
      })
      .catch(err => {
        res.render('404', {title: 'blog does not exist'});
      })
};

const blog_createget = (req, res) => {
    res.render('create', {title: 'Create Blog'});
}

const blog_createpost = (req, res) => {
    const blog = new Blog(req.body);
  
    blog.save()
      .then((result) => {
        res.redirect('/blogs');
      })
      .catch((err)=>{
        console.log(err);
      })
}

const blog_deletepost = (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
}

module.exports = {
    blog_index,
    blog_details,
    blog_createpost,
    blog_createget,
    blog_deletepost
}