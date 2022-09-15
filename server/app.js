const express = require('express');

const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))