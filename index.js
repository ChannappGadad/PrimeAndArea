const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("hello world")
});

app.get("/area/:r", (req, res) => {
    var area = 3.14 * req.query.r * req.query.r
    res.send(area)
});

//Query selector
//Find the value of the area using query
app.get("/areaValue", (req, res) => {
    var area = 3.14 * req.query.r * req.query.r
    //Below line will not allow you to send some integer so I have casted it to String which is acceptable
     res.send(String(area))
});

//Query selector
//Find prime or not using query
app.get("/primeNumber", (req, res) => {
    const primeOrNot = checkPrime(req.query.r)
    res.send(primeOrNot)
})

//Function to do the math
const checkPrime = (numbers) => {
    //Number should be more than 2 to check prime or not
    for(let n=2; n< numbers; n++) {
        if(numbers %2 == 0) return false;//If divisble by 2 then false
    }

    //If <1 return false
    return numbers > 1
}

app.listen(4000);
