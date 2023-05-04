const express = require("express");
const router = express.Router();
const {
addUser,loginUser,
    getUserDetails,

} = require("../controllers/user");



// POST

router.post("/signup", addUser);
router.post("/login", loginUser);
router.get("/login", getUserDetails);

module.exports = router;