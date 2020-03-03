const helper = require('../helper/');

module.exports = {
    orderCheck: (req, res, next) => {
        if (req.body.orders === undefined) {
            return helper.response(res, 400, { message: ' Data Tidak Boleh Kosong' })
        } else if (req.body.orders.length <= 0) {
            return helper.response(res, 400, { message: ' Data Tidak Boleh Kosong' })
        } else {
            next();
        }
        // req.body = { user_id: req.body.user_id, orders: req.body.orders }
    }
}