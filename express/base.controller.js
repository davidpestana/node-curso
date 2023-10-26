class BaseController {
    get({query:{nums, order}}, res, next) {
        res.json(nums ? this.filtro(nums) : this.leer());
    }

    post({body}, res, next) {
        res.json(this.crear(body));
    }

    userGet({params:{name}}, res, next) {
        res.json(this.obtener(name));
    }
} 

module.exports = BaseController;