const router = require("express").Router();
const controller = require('./dishes.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

// TODO: Implement the /dishes routes needed to make the tests pass

router 
  .route('/:dishId')
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed); // responds with 405 status if other method attempted

router
  .route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed); // responds with 405 status if other method attempted

module.exports = router;
