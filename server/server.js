const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// 가짜 데이터베이스 대신에 메모리에 저장
let posts = [];

// 게시물 목록 조회
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// 새로운 게시물 작성
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { title, content, id: posts.length + 1 };
  posts.push(newPost);
  res.json(newPost);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
