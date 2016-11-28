const express = require('express');
let app = express();
const redis = require('redis');
let redis_host = process.env.REDIS_HOST || 'localhost';
let redis_port = process.env.REDIS_PORT || 6379;
let port = process.env.PORT || 3000;
let redisClient =  redis.createClient({'host':redis_host,'port':redis_port})
app.get('/api/get/:key',(req,res) => {
  redisClient.get(req.params.key,(error,result)=> {
    res.send(result);
  })
})
app.listen(port)
