const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_PAYREQ } = process.env;

const api = apiAdapter(URL_SERVICE_PAYREQ);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const payreq = await api.delete(`/payreqs/${id}`);
    return res.json(payreq.data);
  } catch (error) {
    console.log(error);
    if (error.code === 'ECONNREFUSED') {
      return res
        .status(500)
        .json({ status: 'error', message: 'service unavailable' });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
