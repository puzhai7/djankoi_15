const express = require('express');
const fs = require('fs')

const ip_config_client = fs.readFileSync('../ip.client.json'); 
const ip_config_server = fs.readFileSync('../client/src/ip.server.json')

const ip_client = JSON.parse(ip_config_client); 
const ip_server = JSON.parse(ip_config_server)

const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');

const app = express()

app.use(express.json())
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Access-Control-Allow-Origin', `http://${{...ip_client}.host}:${{...ip_client}.port}`);
    next();
});


app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen({...ip_server}.port, () => console.log(`server started on port ${{...ip_server}.port}`))