const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_PAYREQ } = process.env;

const api = apiAdapter(URL_SERVICE_PAYREQ);

module.exports = async (req, res) => {
  try {
    const buc = await api.post("/bucs", req.body);
    return res.json(buc.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
