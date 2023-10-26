const userMiddelware = (req,res,next) => {
    req.user = req.params.name;
    next();
}


module.exports = userMiddelware;