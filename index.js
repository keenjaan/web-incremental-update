const express = require('express');
const diff = require('diff');
const app = express();
const fs = require('fs')
const Redis = require('ioredis');
const redis = new Redis({
	port: 6379,          // Redis port
	host: '127.0.0.1',   // Redis host
	family: 4,           // 4 (IPv4) or 6 (IPv6)
	password: '',
	db: 0
})

function dealFile(res, fileName, oldHash, hash, type) {
	let data = '';
	const oldFilePath = `${__dirname}/static/${type}/${fileName}.${oldHash}.${type}`;
	const newFilePath = `${__dirname}/static/${type}/${fileName}.${hash}.${type}`;
	if (oldHash) {
		// 匹配相应版本差异。
		redis.get(`${oldHash}_${hash}`, function (err, result) {
			// 读取redis里缓存,如果有缓存，直接使用缓存，没有才进行读写和diff操作。
			if (result) {
				res.json({isMerge: true, data: result})
			} else {
				fs.stat(oldFilePath, function (err, stat) {
					if (stat && stat.isFile()) {
						// 文件存在
						const oldData = fs.readFileSync(oldFilePath, 'utf-8')
						const newData = fs.readFileSync(newFilePath, 'utf-8')
		
						// const oldData = fs.readFileSync(__dirname + '/js/2.js', 'utf-8')
						// const newData = fs.readFileSync(__dirname + '/js/1.js', 'utf-8')
						
						console.time()
						const diffent = diff.createPatch('filename', oldData, newData, 'left', 'right');
						redis.set(`${oldHash}_${hash}`, diffent);
						console.timeEnd()
						res.json({isMerge: true, data: diffent})
					} else {
						// 文件不存在
						data = fs.readFileSync(newFilePath, 'utf-8')
						res.json({isMerge: false, data})
					}
				})	
			}
		})
	} else {
		data = fs.readFileSync(newFilePath, 'utf-8')
		res.json({isMerge: false, data})
	}
}

app.get('/', function (req, res) {
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
app.get('/diff.js', express.static('static', {maxage: '10d'}))
app.use(express.static('static'));

const server = app.listen(1234, function () {
  console.log("应用实例，访问地址为 http://localhost:1234")
})