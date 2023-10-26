const path = require('path');
const { Contacto, contactos } = require('./data');
const BaseController = require('../base.controller');

class ContactosController extends BaseController {
    
    contactos;
    constructor() {
        this.contactos = contactos;
    }

    leer() {
        return this.contactos();
    }

    obtener(qName) {
        return this.leer()
            .find(({name}) => qName === name);
    }

    filtro(cantidad) {
        return this.leer().slice(0,cantidad);
    }

    crear(contacto) {
        this.contactos.push(new Contacto(contacto));
    }
}

module.exports = {
    controller: new ContactosController()
}