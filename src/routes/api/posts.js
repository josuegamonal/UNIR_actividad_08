const router = require('express').Router();

const { getAllPosts, createPost, getPostById } = require('../../controllers/posts.controller');

router.get('/', getAllPosts);
router.get('/:id_post', getPostById);
router.post('/', createPost);

module.exports = router;
