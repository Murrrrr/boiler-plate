const express = require('express'); // Express 모듈을 가져옴
const app = express(); // 새로운 express 앱을 만듬
const port = 5000; //포트는 5000번
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yunseong:stimpack135s@boilerplate.gpkpg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(()=>console.log('MongoDB Connected...')).catch(err => console.log(err));
app.get('/', (req, res) => res.send('Hello World!')) //Hello World!를 출력되게 함

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // 5000번 포트를 출력