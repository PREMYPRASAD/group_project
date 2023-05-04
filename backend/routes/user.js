const express = require("express");
const router = express.Router();
const {
addUser,
    getUserDetails,

} = require("../controllers/user");



// POST
 router.post("/signup", addUser);
router.post("/login", getUserDetails);
module.exports = router;