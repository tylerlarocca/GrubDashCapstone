const router = require("express").Router();
const controller = require('./orders.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router
  .route('/:orderId')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed); // responds with 405 status if other method attempted

router
  .route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed); // responds with 405 status if other method attempted

module.exports = router;