const auth = (req, res, next)=>{

    const {user} = req.query;
    if(user === 'ayush')
    {
        req.user = {name: 'ayush', age: '19'};
        next();
    }
    else{

        res.status(401).send("Unauthorized");
        next();
    }
    
}

module.exports = auth;