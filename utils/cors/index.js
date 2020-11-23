const express = require("express");
const cors = require("cors");
const router = express.Router();
router.use(
  cors({
    origin: [
      "https://stupefied-clarke-dab412.netlify.app/",
      "http://stupefied-clarke-dab412.netlify.app/",
      "https://api.sendgrid.com/v3/",
    ],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
module.exports = router;
