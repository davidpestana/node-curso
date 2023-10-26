const path = require('path');

const facturaListController =  ({user, query:{limit}} , res, next) => {
    console.log(user);
    user ?
        res.send(`listado de factuaras de ${user} ` + limit):
        res.send('listado de todas las facturas ' + limit);
}

const facturaController = ({params:{idFactura}}, res, next) => {
    res.send(`<marquee>muestro la factura ${idFactura}</marquee>`);
}

module.exports = {
    facturaController,
    facturaListController,
}