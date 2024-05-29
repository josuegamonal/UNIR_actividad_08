const selectAll = () => {
	return db.query('SELECT * FROM posts')
}

const selectById = (id_posts) => {
	return db.query('SELECT * FROM posts WHERE id_posts = ?', [id_posts])
}

const selectByIdAndJoinAutor = (id_posts) => {
	return db.query('SELECT posts.*, autores.* FROM posts INNER JOIN autores ON posts.autores_id_autores = id_autores WHERE id_posts = ?', [id_posts])
}

const createPost= (post) => {
	return db.query('INSERT INTO posts SET ?', [post])
}

module.exports = {
	selectAll,
	selectById,
	createPost,
	selectByIdAndJoinAutor
}
