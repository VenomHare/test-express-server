
const express = require('express');

const app = express();

const random = (num) => {
    const arr = "123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()P{}";
    let res ="";
    for (let i = 0; i < num; i++) {
        const random = Math.floor(Math.random() * arr.length);
        res += (arr[random]);
    }
    return res
}

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} ${Date.now()}`);
    next(); 
})
app.get('/random', (req, res) => {   
    const { length } = req.query;
    if (length) {
        return res.json({id: random(length)});
    }
    else{
        return res.json({id: random(10)});
    }
});

app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});