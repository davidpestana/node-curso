const path = require('path');

const controller1 =  (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'bienvenida.html'));
}

const controller2 = (req, res, next) => {
    res.send("<marquee>Hello World en user!</marquee>");
}

const userController = ({user} , res, next) => {
    res.send(`binvenido ${user.name} que tal estas`);
}

module.exports = {
    controller1,
    controller2,
    userController
}