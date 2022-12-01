const express = require('express');
const router = express.Router();


router.get("/products", (req, res) => {    res.send("Products");
}
);

module.exports = router;