//Funciones con las queries que lanzamos contra la tala autores

const selectAll = () => {
	return db.query('SELECT * FROM autores')
}

const selectById = (id_autores) => {
	return db.query('SELECT * FROM autores WHERE id_autores = ?', [id_autores])
}

const createAutor = (autor) => {
	return db.query('INSERT INTO autores SET ?', [autor])
}

const selectPostByAutorId = (id_autores) => {
	return db.query('SELECT posts.* FROM posts WHERE posts.autores_id_autores = ?', [id_autores])
}


module.exports = {
	selectAll,
	selectById,
	createAutor,
	selectPostByAutorId
}
