const { log } = require("console")

const Post = require('../models/posts.model')

const Autor = require('../models/autores.model')

const getAllPosts = async (req, res, next) => {
	try {
		const [result] = await Post.selectAll()
		res.json(result)
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

// recupera los datos del post y los combina con los datos del autor
const getPostById = async (req, res, next) => {
	try {
		const [post] = await Post.selectByIdAndJoinAutor(req.params.id_post)

		res.json(post)

	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}



const createPost = async (req, res, next) => {
	try {
		const [result] = await Post.createPost(req.body)
		res.json(result)
	} catch (error) {
		res.status(500).json({ message: error.message });
	}

}


module.exports = {
	getAllPosts,
	createPost,
	getPostById
}
