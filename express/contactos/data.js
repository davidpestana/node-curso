let contactos = [
    new Contacto({name:'david',subname:'pestana'}),
    new Contacto({name:'luis',subname:'antunez'}),
]


class Contacto {    
    name;
    subname;
    constructor({name, subname}) {
        this.name = name;
        this.subname = subname;
    }
}


module.exports = {
    contactos, Contacto
}