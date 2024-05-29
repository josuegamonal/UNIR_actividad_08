const { log } = require("console")

const Autor = require('../models/autores.model')


const getAllAutores = async (req, res, next) => {
	try {
		const [result] = await Autor.selectAll()
		res.json(result)
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const getAutorById = async (req, res, next) => {
	try {
		const [result] = await Autor.selectById(req.params.id_autor)
		res.json(result)
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const getPostsByAutorId = async (req, res, next) => {
	try {
		const [result] = await Autor.selectPostByAutorId(req.params.id_autor)
		res.json(result)
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}


const createAutor = async (req, res, next) => {
	try {
		const [result] = await Autor.createAutor(req.body)
		res.json(result)
	} catch (error) {
		res.status(500).json({ message: error.message });
	}

}



module.exports = {
	getAllAutores,
	createAutor,
	getAutorById,
	getPostsByAutorId
}
