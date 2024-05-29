const router = require('express').Router();

const { getAllAutores, createAutor, getAutorById, getPostsByAutorId } = require('../../controllers/autores.controller');

router.get('/', getAllAutores);
router.get('/:id_autor', getAutorById);
router.get('/:id_autor/posts', getPostsByAutorId);
router.post('/', createAutor);


module.exports = router;
