const express = require('express');
const diff = require('diff');
const app = express();
const fs = require('fs')

function dealFile(res, fileName, oldHash, hash, type) {
	let data = '';
	const oldFilePath = `${__dirname}/${type}/${fileName}.${oldHash}.${type}`;
	const newFilePath = `${__dirname}/${type}/${fileName}.${hash}.${type}`;
	if (oldHash) {
		// 匹配相应版本差异。
		fs.stat(oldFilePath, function (err, stat) {
			if (stat && stat.isFile()) {
				// 文件存在
				const oldData = fs.readFileSync(oldFilePath, 'utf-8')
				const newData = fs.readFileSync(newFilePath, 'utf-8')

				// const oldData = fs.readFileSync(__dirname + '/js/2.js', 'utf-8')
				// const newData = fs.readFileSync(__dirname + '/js/1.js', 'utf-8')
				
				console.time()
				const diffent = diff.createPatch('filename', oldData, newData, 'left', 'right');
				console.timeEnd()
				res.json({isMerge: true, data: diffent})
			} else {
				// 文件不存在
				data = fs.readFileSync(newFilePath, 'utf-8')
				res.json({isMerge: false, data})
			}
		})	
	} else {
		data = fs.readFileSync(newFilePath, 'utf-8')
		res.json({isMerge: false, data})
	}
}

app.get('/', function (req, res) {
	console.log('2345')
	res.sendFile(__dirname + '/index.html')
})
app.get('/js/*', function (req, res) {
	const fileName = req.params[0];
	const oldHash = req.query.oldHash;
	const hash = req.query.hash;
	dealFile(res, fileName, oldHash, hash, 'js')
})
app.get('/css/*', function (req, res) {
	const fileName = req.params[0];
	const oldHash = req.query.oldHash;
	const hash = req.query.hash;
	dealFile(res, fileName, oldHash, hash, 'css')
})
app.use(express.static('static'));

const server = app.listen(1234, function () {
  console.log("应用实例，访问地址为 http://localhost:1234")
})