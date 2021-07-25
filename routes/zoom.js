const express = require("express");
const router = express.Router();

const _zoom = require("../controllers/zoom");

router.get("", (req, res) => {
  res.send({ message: "Este es un mensaje desde ruta zoom" });
});

router.get("/users", _zoom.getUsers);

router.get("/:wm/:id/registrants/:status", _zoom.getRegistrants);

router.get("/:wm/:id/participants", _zoom.getParticipants);

module.exports = router;
