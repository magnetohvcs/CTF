let mysql = require('mysql')

class Database {

	constructor() {
		this.connection = mysql.createConnection({
			host: 'localhost',
			user: 'dbuser',
			password: 'DBPASS',
			database: 'jobsdb'
		});
	}

	async connect() {
		return new Promise((resolve, reject)=> {
			this.connection.connect((err)=> {
				if(err)
					reject(err)
				resolve()
			});
		})
	}
	
	async getPosts(order) {
		return new Promise(async (resolve, reject) => {
			let stmt = `SELECT * FROM jobs ORDER BY ${ order }`;
			this.connection.query(stmt, (err, result) => {
				if(err)
					reject(err)
				resolve(result)
			})
			
		});
	}


	async getPost(id) {
		return new Promise(async (resolve, reject) => {
			let stmt = `SELECT * FROM jobs WHERE id= ?`;
			this.connection.query(stmt, [id], (err, result) => {
				if(err)
					reject(err)
				resolve(result)
			})
			
		});
	}

}

module.exports = Database;