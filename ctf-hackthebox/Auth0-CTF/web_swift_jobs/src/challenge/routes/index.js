const express = require('express');
const router = express.Router();

let db;

const response = data => ({
	message: data
});

router.get('/', (req, res) => {
	return res.render('index.html');
});

router.post('/api/list', (req, res) => {
	let {
		order
	} = req.body;
	if (order) {
		return db.getPosts(order)
			.then(allPosts => {
				if (allPosts) {
					return res.json(allPosts);
				}
				return res.send(response('Seems like there are no posts!'));
			})
			.catch((e) => {
				return res.send(response('Something went wrong!'));
			})
	}
	return res.send(response('Missing parameters!'))
});

router.get('/jobs/:id', (req, res) => {
	if (req.params.id) {
		return db.getPost(req.params.id)
			.then(rawData => {
				postData = Object.values(JSON.parse(JSON.stringify(rawData)))
				res.render("job.html", {
					job: postData[0]
				})
			})
			.catch(() => res.render("job.html", {
				error: true
			}))
	}
	return res.redirect('/');
});


module.exports = database => {
	db = database;
	return router;
};
