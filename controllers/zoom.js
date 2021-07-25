const _zoom = require("../functions/zoom");

exports.getUsers = async (req, res) => {
  if (
    req.headers.authorization == undefined ||
    req.headers.authorization == null
  ) {
    return res
      .status(500)
      .send({ error: "AuthError", message: "No has introducido las claves" });
  }
  let AuthorizationHeader = JSON.parse(req.headers.authorization);
  var data = await _zoom.usersFind(AuthorizationHeader);
  return res.status(200).send(data);
};

exports.getRegistrants = async (req, res) => {
  var data = await _zoom.getRegistrants(
    req.params.wm,
    req.params.id,
    req.params.status
  );
  return res.status(200).send(data);
};

exports.getParticipants = async (req, res) => {
  if (!req.query.type) {
    return res.status(200).send({ message: "Hacen falta algunos datos." });
  }

  var data = await _zoom.getParticipants(
    req.params.wm,
    req.params.id,
    req.query.type
  );
  return res.status(200).send(data);
};
