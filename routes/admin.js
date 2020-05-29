const router = require('express').Router();

const handler = require('../handlers');

router.post('/create-admin', handler.admregister);
router.post('/auth-admin', handler.login);

module.exports = router;
