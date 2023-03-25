const express = require('express')
const router = express.Router();
const blogsController = require('../controllers/blogsController')


router.get('/about', (req, res) => {
    res.render('about', {title: 'About Us'});
});

router.get('/create', blogsController.blog_createget);


router.post('/', blogsController.blog_createpost);

router.get('/:id', blogsController.blog_details);

router.get('/', blogsController.blog_index);

router.delete('/:id', blogsController.blog_deletepost);
module.exports = router;